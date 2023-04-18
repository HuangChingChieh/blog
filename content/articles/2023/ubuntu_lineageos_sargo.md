---
title: 在Ubuntu 22.04編譯Pixel 3a的LineageOS
description: 本篇紀錄自己使用Ubuntu 22.04編譯Pixel 3a的LineageOS的過程
tags: [ubuntu, linux, android, custom rom, Gooel Pixel 3a, lineageos]
---

最近因為 LineageOS 各裝置紛紛升上 LineageOS 20.0（Android 13），但手上的 Pixel 3a 卻遲遲沒有消息，後來上了 [XDA](https://forum.xda-developers.com/t/official-lineageos-19-1-for-the-google-pixel-3a.4436933/post-88303289) 看了一下討論串，發現開發者說是因為 eSIM 無法使用的關係，所以才無法公告升級上去。心裡想著反正我也用不到 eSIM，不如就來順便學學怎麼自己編譯 LineageOS 好了。

### 免責聲明

<a v-html="article.title"></a>

本篇的內容是參考[官方文件](https://wiki.lineageos.org/devices/sargo/build)寫的，內容可能有所出入，請斟酌參考，因本篇文章內容錯誤導致手機損壞，本人不負任何責任。

---

## 硬體需求

根據官方文件，要編譯 LineageOS 20.0 的硬體需求如下：

- CPU：64 位元處理器
- RAM：32GB 以上
- 硬碟：300GB 以上的可用空間，建議至少 SSD。

若手邊沒有符合上面所列要求的話，建議不用試了。不然編譯了幾個小時才報錯的話，會發飆的……。

---

## 建立編譯環境

```bash
# 更新一下套件庫
sudo apt update

# 安裝編譯需要的套件
sudo apt install bc bison build-essential ccache curl flex g++-multilib gcc-multilib git git-lfs gnupg gperf imagemagick lib32ncurses5-dev lib32readline-dev lib32z1-dev libelf-dev liblz4-tool libncurses5 libncurses5-dev libsdl1.2-dev libssl-dev libxml2 libxml2-utils lzop pngcrush rsync schedtool squashfs-tools xsltproc zip zlib1g-dev openjdk-11-jdk python3 repo python-is-python3 wget python3-protobuf -y

# 設定git身份(email)
git config --global user.email "you@example.com"

# 設定git身份(名稱)
git config --global user.name "Your Name"
```

---

## 取得 LineageOS 原始碼

### 同步 LineageOS 的原始碼

```bash
# 建立資料夾以儲存原始碼
mkdir -p ~/android/lineage

# 移到原始碼資料夾
cd ~/android/lineage

# 初始化 repo
repo init

# 設定要同步的套件庫與分支
repo init -u https://github.com/LineageOS/android.git -b lineage-20.0 --git-lfs
```

接下來要開始取得原始碼了，這個步驟需要一段時間，會下載滿多的檔案（大概 100 多 GB），如果是連手機網路大概要一整天……所以最好是在可以放著掛網的時候再做。

```bash
# 開始同步
repo sync
```

若中間因為網路問題而中斷同步，只要進到資料夾`~/android/lineage`重新啟動執行`repo sync`即可。

### 同步 Pixel 3a 的原始碼

```bash
# 設定編譯的環境變數
source build/envsetup.sh

# 同步Pixel 3a原始碼
breakfast sargo
```

執行指令後，會開始取得 LineageOS 原始碼庫中有關 Pixel 3a 的部份，最後應該會收到錯誤訊息：

```
** Don't have a product spec for: 'lineage_sargo'
** Do you have the right repo manifest?
```

可先忽略，只要確定`~/android/lineage/device/google/sargo/extract-files.sh`這個檔案有存在就好。

```bash
# 確認檔案
ls ~/android/lineage/device/google/sargo/extract-files.sh
```

---

## 提取 Pixel 3a 的專有驅動程式

接下來要開始提取 Pixel 3a 的驅動程式，

```bash
# 建立暫存資料以儲存抽出來的驅動程式
mkdir -p ~/android/system_dump

# 移到資料夾
cd ~/android/system_dump
```

從[官網下載最新的安裝檔](https://download.lineageos.org/devices/sargo/builds)（`.zip`），下面指令中的連結可能已過期，要自行更新。

```bash
# 下載安裝檔
wget https://mirrorbits.lineageos.org/full/sargo/20230411/lineage-19.1-20230411-nightly-sargo-signed.zip

# 解壓縮取得payload.bin檔案
unzip lineage-19.1-20230411-nightly-sargo-signed.zip payload.bin

# 從檔案中提取映像檔
python ~/android/lineage/lineage/scripts/update-payload-extractor/extract.py payload.bin --output_dir ./

# 掛載映像檔
mkdir system/
sudo mount -o ro system.img system/
sudo mount -o ro vendor.img system/vendor/
sudo mount -o ro product.img system/product/
sudo mount -o ro system_ext.img system/system_ext/

# 移到Pixel 3a的原始碼資料夾
cd ~/android/lineage/device/google/sargo

# 執行提取驅動程式的指令
./extract-files.sh ~/android/system_dump/
```

提取驅動程式會執行一小段時間，看電腦規格而定，我自己的是大概幾分鐘。最後作一些收尾工作：

```bash
# 卸載剛剛掛載的映像檔
sudo umount -R ~/android/system_dump/system/

# 移除用來暫存的資料夾
rm -rf ~/android/system_dump/
```

---

## 編譯

### 同步原始碼為最新

```bash
# 移到原始碼資料夾
cd ~/android/lineage

# 再次同步原始碼為最新
repo sync

# 設定編譯的環境變數
source build/envsetup.sh

# 再次同步Pixel 3a原始碼為最新
breakfast sargo
```

### 編譯前的一些設定

```bash
# 啟用CCACHE
export USE_CCACHE=1

# 設定CCACHE
ccache -M 50G

# 設定CCACHE壓縮
ccache -o compression=true
```

### 開始編譯

接下來就是重頭戲——編譯了，這個指令用下去之後就會開始編譯，期間會大量消耗系統資源，至少也要跑個幾小時（除非你的電腦是頂級硬體），建議就放著讓他去吧。

```bash
brunch sargo
```

在大功告成之後，編譯好的安裝檔會放在`~/android/lineage/out/target/product/sargo`裡面，名稱會長得像這樣：`lineage-20.0-20230415-UNOFFICIAL-sargo.zip `，日期會根據編譯日期而不同。而 recovery 檔案會是`boot.img`。

之後安裝必須要重啟到 Recovery 安裝，比較麻煩些。

若隔了一段時間要再重新編譯，直接從[編譯](ubuntu_lineageos_sargo#編譯)再執行一次就好了。

---

## 後記

這一路風風雨雨（？）真的是折騰滿久，尤其是最後編譯的時候，因為時間很長，中途突然給你出錯又要整個重來，除錯了好一陣子。而且安裝也不如直接使用官方發布版本方便。

如果不是特別想要追求最新版本，良心建議真的還是乖乖等官方發佈就好。我成功編譯一次安裝進去滿足了成就感之後，就決定刷回官方發佈版本了……。

---

## 參考文件

[Build for sargo](https://wiki.lineageos.org/devices/sargo/build)

[Extracting proprietary blobs from LineageOS zip files](https://wiki.lineageos.org/extracting_blobs_from_zips#extracting-proprietary-blobs-from-payload-based-otas)

[Container Support](https://docs.fedoraproject.org/en-US/iot/container-support/)

[Docker Docs](https://docs.docker.com/)
