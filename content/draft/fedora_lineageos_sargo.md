---
title: 在Fedora編譯LineageOS（Pixel 3a）
description: 本篇紀錄自己使用Fedora編譯Pixel 3a LineageOS的過程
tags: [fedora, ubuntu, linux, android, custom rom, Gooel Pixel 3a, lineageos]
---

最近因為 LineageOS 各裝置紛紛升上 LineageOS 20.0（Android 13），但手上的 Pixel 3a 卻遲遲沒有消息，後來上了 [XDA](https://forum.xda-developers.com/t/official-lineageos-19-1-for-the-google-pixel-3a.4436933/post-88303289) 看了一下討論串，發現開發者說是因為 eSIM 無法使用的關係，所以才無法公告升級上去。心裡想著反正我也用不到 eSIM，不如就來順便學學怎麼自己編譯 LineageOS 好了。

### 免責聲明

本篇的內容是參考[官方文件](https://wiki.lineageos.org/devices/sargo/build)寫的，內容可能有所出入，請斟酌參考，因本篇文章內容錯誤導致手機損壞，本人不負任何責任。

---

## 硬體需求

根據官方文件，要編譯 LineageOS 20.0 的硬體需求如下：

- CPU：64 位元處理器
- RAM：32GB 以上
- 硬碟：300GB 以上的可用空間，建議至少 SSD。

### 自己的心得

來來去去折騰了好幾次的心得是：

- CPU：越強越好。自己筆電用的 i5-8250U 要大概 6 小時，家裡的 AMD R3 3100 大概要 5 小時。照這樣推算的話，目前消費級中低階的處理器，應該至少都要編譯好幾個小時以上。
- RAM：16GB 可以編得過，但要調整 SWAP 或 ZRAM 大小，讓可以充當記憶體的部份總和在差不多 40GB 以上。在編譯前期，打開系統監控看的話，會發現記憶體跟置換區會幾乎爆滿……。
- 硬碟：同官方建議

若手邊沒有符合上面所列要求的話，建議不用試了。不然編譯了幾個小時才報錯的話，會發飆的……。

---

## 建立編譯環境

### 建立本機資料夾以儲存 LineageOS 原始碼

由於 LineageOS 原始碼容量不小而容器每次關閉後不會儲存當下的變動，原始碼存在本機的話，之後更新會比較方便。我這邊使用 bind mount 的方式，所以先建立本機資料夾。

```bash
mkdir -p ~/android/lineage
```

```bash
# 順便建立一下之後會用到的資料夾
mkdir -p ~/android/system_dump
```

### 安裝 Podman

官方文件提供的教學是使用 Ubuntu，本來想在 Fedora 中尋找對應到的 Ubuntu 套件，但要安裝的套件實在太多，要一個一個找到有點困難，最後決定建立一個 Ubuntu 的虛擬環境去嘗試，這邊使用容器化解決方案。

雖然常見的容器化解決方案是 Docker，但在 Fedora 中安裝 Docker 要[額外引入官方的套件庫](https://docs.docker.com/engine/install/fedora/)有點麻煩，而且有替代的 [Podman](https://podman.io/) 可以直接安裝使用，所以這邊安裝 Podman。

```bash
sudo dnf install podman
```

### 建立 Dockerfile 檔案

接下來就是建立`Dockerfile`檔案，可以直接存在剛剛建立的`~/android`資料夾裡面。

```dockerfile [Dockerfile]
FROM ubuntu:22.04

# 安裝編譯環境套件
RUN apt update && apt install bc bison build-essential ccache curl flex g++-multilib gcc-multilib git git-lfs gnupg gperf imagemagick lib32ncurses5-dev lib32readline-dev lib32z1-dev libelf-dev liblz4-tool libncurses5 libncurses5-dev libsdl1.2-dev libssl-dev libxml2 libxml2-utils lzop pngcrush rsync schedtool squashfs-tools xsltproc zip zlib1g-dev openjdk-11-jdk python3 repo python-is-python3 wget python3-protobuf -y

# 設定git身份
RUN git config --global user.email "you@example.com" && git config --global user.name "Your Name"

# 設定ccache的環境變數
ENV USE_CCACHE=1

# 其他設定
RUN ccache -M 50G && ccache -o compression=true

# 建立之後會用到的資料夾
RUN mkdir -p ~/android
```

### 用 Podman 編譯剛剛的 Dockerfile 檔案

```bash
cd ~/android
```

```bash
podman build -t lineageos_sargo .
```

Podman 會開始將`Dockerfile`編譯成映像檔，也會執行我們寫的安裝套件指令，需要一點時間。

---

## 取得 LineageOS 原始碼

### 啟動剛剛建立的 Ubuntu 容器

啟動容器時，會使用 bind mount 將剛剛建立的資料夾映射到之後官方文件使用的`~/android/lineage`，**接下來的程式碼都會在容器中執行**。

```bash
podman run --rm -it --mount type=bind,U=true,source=/home/$USER/android,target=/root/android --privileged --entrypoint bash lineageos_sargo
```

### 同步 LineageOS 的原始碼

```bash
# 移到原始碼資料夾
cd ~/android/lineage
```

```bash
# 初始化 repo
repo init
```

```bash
# 設定要同步的套件庫與分支
repo init -u https://github.com/LineageOS/android.git -b lineage-20.0 --git-lfs
```

接下來要開始取得原始碼了，這個步驟需要一段時間，會下載滿多的檔案（大概 100 多 GB），如果是連手機網路大概要一整天……所以最好是在可以放著掛網的時候再做。

```bash
repo sync
```

若中間因為網路問題而中斷同步，只要重新啟動執行`repo sync`即可。若不慎退出容器，也是只要重新啟動容器並在原始碼資料夾（`cd ~/android/lineage`）重新啟動執行`repo sync`即可。

### 同步 Pixel 3a 的原始碼

```bash
source build/envsetup.sh
```

```bash
breakfast sargo
```

執行指令後，會開始取得 LineageOS 原始碼庫中有關 Pixel 3a 的部份，最後應該會收到錯誤訊息，可先忽略。只要執行完確定`~/android/lineage/devices/google/sargo`資料夾有出現且裡面有東西就好。

---

## 提取 Pixel 3a 的專有驅動程式

接下來要開始提取 Pixel 3a 的驅動程式，首先讓我們移到一開始建立的`~/github/android/system_dump`資料夾。

```bash
cd ~/github/android/system_dump
```

從[官網下載最新的安裝檔](https://download.lineageos.org/devices/sargo/builds)（`.zip`），下面指令中的連結可能已過期，要自行更新。

```bash
wget https://mirrorbits.lineageos.org/full/sargo/20230404/lineage-19.1-20230404-nightly-sargo-signed.zip
```

```bash
# 解壓縮取得payload.bin檔案
unzip lineage-19.1-20230404-nightly-sargo-signed.zip payload.bin
```

```bash
# 從檔案中提取映像檔
python ~/android/lineage/lineage/scripts/update-payload-extractor/extract.py payload.bin --output_dir ./
```

### 掛載映像檔

```bash
mkdir system/
sudo mount -o ro system.img system/
sudo mount -o ro vendor.img system/vendor/
sudo mount -o ro odm.img system/odm/
sudo mount -o ro product.img system/product/
sudo mount -o ro system_ext.img system/system_ext/
```

---

---

### 下載最新安裝檔

**接下來先回到本機**，到[官網下載最新的安裝檔](https://download.lineageos.org/devices/sargo/builds)（`.zip`），下載完後解壓縮取得`payload.bin`檔案並移到一開始建立的`~/github/android/system_dump`資料夾。

### 在容器內取得專有驅動程式

**回到容器內**，先移到資料夾下並執行下面的指令取得 Pixel 3a 的專有驅動程式：

```bash
cd ~/android/system_dump
```

```bash
python3 ~/android/lineage/lineage/scripts/update-payload-extractor/extract.py payload.bin --output_dir ./
```

由於容器不支援使用`mount`指令，這邊要**回到主機**執行指令。

```bash
# 先退出容器
exit
```

```bash
cd ~/github/android/system_dump
```

```bash
mkdir system/
sudo mount -o ro system.img system/
sudo mount -o ro vendor.img system/vendor/
sudo mount -o ro odm.img system/odm/
sudo mount -o ro product.img system/product/
sudo mount -o ro system_ext.img system/system_ext/
```

### 取得裝置的 LineageOS 原始碼

由於 Pixel 3a 依賴於 Pixel 3a XL 的原始碼，所以兩個都要拉下來。

先拉 Pixel 3a XL 的：

```bash
mkdir -p ~/android/lineage/device/google/bonito && cd "$_"
```

```
git clone https://github.com/LineageOS/android_device_google_bonito.git .
```

再拉 Pixel 3a 的：

```bash
mkdir -p ~/android/lineage/device/google/sargo && cd "$_"
```

```
git clone https://github.com/LineageOS/android_device_google_sargo.git .
```

最後執行指令：

```bash
./extract-files.sh ~/android/system_dump/
```

---

## 參考文件

[Build for sargo](https://wiki.lineageos.org/devices/sargo/build)

[Extracting proprietary blobs from LineageOS zip files](https://wiki.lineageos.org/extracting_blobs_from_zips#extracting-proprietary-blobs-from-payload-based-otas)

[Container Support](https://docs.fedoraproject.org/en-US/iot/container-support/)

[Docker Docs](https://docs.docker.com/)
