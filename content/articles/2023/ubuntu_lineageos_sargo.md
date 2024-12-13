---
title: 在Ubuntu 22.04編譯Pixel 3a的LineageOS 20.0
tags: [ubuntu, android, custom rom, Gooel Pixel 3a, lineageos]
img: 922/DxakSn.jpg
category: linux
---

之前因為 LineageOS 各裝置紛紛升上 LineageOS 20.0（Android 13），但手上的 Pixel 3a 卻遲遲沒有消息，後來上了 [XDA](https://forum.xda-developers.com/t/official-lineageos-19-1-for-the-google-pixel-3a.4436933/post-88303289) 看了一下討論串，發現開發者說是因為 eSIM 無法使用的關係，所以之前才無法公告升級上去。心裡想著反正我也用不到 eSIM，不如就來順便學學怎麼自己編譯 LineageOS 好了。

<!--more-->

<article-note>雖然 eSIM 問題仍然存在，但目前官方已將 Pixel 3a 的官方版本升到 LineageOS 20.0 囉！若只是單純要升級的朋友，可直接[下載官方編譯的 ROM](https://download.lineageos.org/devices/sargo/builds)就好。</article-note>

---

## 免責聲明

本篇的內容是參考[官方文件](https://wiki.lineageos.org/devices/sargo/build)的編譯過程紀錄，內容可能有所出入，請斟酌服用，因本篇文章內容錯誤導致手機損壞，本人不負任何責任。

---

## 硬體需求

根據官方文件，要編譯 LineageOS 20.0 的硬體需求如下：

- CPU：64 位元處理器
- RAM：32GB 以上
- 硬碟：300GB 以上的可用空間，建議至少 SSD。

### RAM

若 RAM 不足 32GB，可以嘗試透過<article-inner-link slug="ubuntu_swap_resize">增加 SWAP 大小</article-inner-link>彌補主記憶體的不足編譯看看。我在以下兩種情境中嘗試過將 SWAP 直接增加到 32GB，皆可編譯成功，提供參考。

1. 在[Linode](https://www.linode.com/)開 RAM 只有 16GB 的 Ubuntu 22.04 雲端機
2. 在 RAM 有 32GB 的 Windows 上使用 Ubuntu 22.04 WSL2（預設 RAM 只有 Windows 的一半）

### 硬碟

我使用同一臺桌機（CPU 爲 AMD R3-3100），SSD 以及 HDD 的編譯時間差異是一倍。所以建議還是乖乖使用 SSD 比較好。

---

## 建立編譯環境

```bash
# 更新一下套件庫
sudo apt update
```

```bash
# 安裝編譯需要的套件
sudo apt install bc bison build-essential ccache curl flex g++-multilib gcc-multilib git git-lfs gnupg gperf imagemagick lib32ncurses5-dev lib32readline-dev lib32z1-dev libelf-dev liblz4-tool libncurses5 libncurses5-dev libsdl1.2-dev libssl-dev libxml2 libxml2-utils lzop pngcrush rsync schedtool squashfs-tools xsltproc zip zlib1g-dev openjdk-11-jdk python3 repo python-is-python3 wget python3-protobuf -y
```

```bash
# 設定git身份(email)
git config --global user.email "you@example.com"
```

```bash
# 設定git身份(名稱)
git config --global user.name "Your Name"
```

```bash
# 啟用git的大檔支援
git lfs install
```

---

## 取得 LineageOS 原始碼

### 同步 LineageOS 的原始碼

```bash
# 建立資料夾以儲存原始碼
mkdir -p ~/android/lineage
```

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

接下來要開始取得原始碼了，這個步驟需要一段時間，會下載滿多的檔案（大概 100 多 GB）。

```bash
# 開始同步
repo sync
```

若中間因為有問題而中斷同步，只要進到資料夾`~/android/lineage`再次執行`repo sync`即可。

### 同步 Pixel 3a 的原始碼

```bash
# 設定編譯的環境變數
source build/envsetup.sh
```

```bash
# 同步Pixel 3a原始碼
breakfast sargo
```

執行指令後，會開始取得 LineageOS 原始碼庫中有關 Pixel 3a 的部份，最後應該會收到錯誤訊息：

```console
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

接下來要開始提取 Pixel 3a 的驅動程式，步驟稍微複雜一些。

```bash
# 建立暫存資料以儲存抽出來的驅動程式
mkdir -p ~/android/system_dump
```

```bash
# 移到資料夾
cd ~/android/system_dump
```

從[官網下載最新的安裝檔](https://download.lineageos.org/devices/sargo/builds)（`.zip`），下面指令中的連結可能已過期，要自行更新。

```bash
# 下載安裝檔
wget https://mirrorbits.lineageos.org/full/sargo/20230919/lineage-19.1-20230919-nightly-sargo-signed.zip
```

接下來要取得可以提取映像檔的程式，並從檔案中提取映像檔。

```bash
git clone https://github.com/LineageOS/android_tools_extract-utils android/tools/extract-utils
```

```bash
git clone https://github.com/LineageOS/android_system_update_engine android/system/update_engine
```

```bash
# 從檔案中提取映像檔
python android/tools/extract-utils/extract_ota.py lineage-19.1-20230919-nightly-sargo-signed.zip
```

這裡執行可能需要一段時間，期間沒有文字提示要耐心等候，等到完成之後，再執行下面指令來掛載取得的映像檔。

```bash
# 建立資料夾來提供掛載點
mkdir system/
```

```bash
sudo mount -o ro system.img system/
```

```bash
sudo mount -o ro vendor.img system/vendor/
```

```bash
sudo mount -o ro product.img system/product/
```

```bash
sudo mount -o ro system_ext.img system/system_ext/
```

都掛載完成後，最後就可以從映像檔中提取驅動程式了。提取驅動程式會執行一小段時間，看電腦規格而定，我自己的是大概幾分鐘。

```bash
# 移到Pixel 3a的原始碼資料夾
cd ~/android/lineage/device/google/sargo
```

```bash
# 執行提取驅動程式的指令
./extract-files.sh ~/android/system_dump/
```

提取完成後，作一些收尾工作：

```bash
# 卸載剛剛掛載的映像檔
sudo umount -R ~/android/system_dump/system/
```

```bash
# 移除用來暫存的資料夾
rm -rf ~/android/system_dump/
```

---

## 編譯

首先，確定自己身在 LineageOS 的原始碼資料夾中：

```bash
# 移到原始碼資料夾
cd ~/android/lineage
```

### 同步原始碼為最新

若是第一次編譯已經沿著上面做過指令，可跳過這個部份直接從「<article-inner-link slug="ubuntu_lineageos_sargo" hash="編譯前的一些設定">編譯前的一些設定</article-inner-link>」開始。

```bash
# 強制同步原始碼為最新
repo sync --force-sync
```

```bash
# 設定編譯的環境變數
source build/envsetup.sh
```

```bash
# 再次同步Pixel 3a原始碼為最新
breakfast sargo
```

### 編譯前的一些設定

```bash
# 啟用CCACHE
export USE_CCACHE=1
```

```bash
# 設定CCACHE
ccache -M 50G
```

```bash
# 設定CCACHE壓縮
ccache -o compression=true
```

### 開始編譯

接下來就是重頭戲——編譯了，這個指令執行下去之後就會開始編譯，期間會大量消耗系統資源，除非你的電腦是頂級硬體否則至少也要跑個幾小時，建議就把他放著，人去做其他事情吧，不要同時使用電腦。

```bash
brunch sargo
```

在大功告成之後，編譯好的安裝檔會放在`~/android/lineage/out/target/product/sargo`裡面，名稱會長得像這樣：`lineage-20.0-20230415-UNOFFICIAL-sargo.zip `，日期會根據編譯日期而不同。而 recovery 檔案會是`boot.img`。

若隔了一段時間要再重新編譯，直接從<article-inner-link slug="ubuntu_lineageos_sargo" hash="編譯">編譯</article-inner-link>再執行一次就好了。

---

## 全新安裝、升級或更新

根據不同狀況，Lineageos 官方 WIKI 的操作說明也不同，可以分成[全新安裝](https://wiki.lineageos.org/devices/sargo/install)、[升級](https://wiki.lineageos.org/devices/sargo/upgrade)或[更新](https://wiki.lineageos.org/devices/sargo/update)三種。

### 從 19.1 升級

升級的部分成功的話是可以保留應用程式跟資料的（就跟我們升級沒有刷 ROM 的手機一樣），這裏自己覺得要特別注意的部分，就是 Gapps 以及任何你有額外裝的東西（例如前面說的 ih8sn），要在升級後再刷入一次，Gapps 要下載對應 20.0 的版本。而且要跟在全新安裝時一樣，升級完 Lineageos 之後先直接重新啟動到 Recovery 一次。

沒有試過直接從 18.1 更新，建議先安裝目前[Lineageos 官方最新的 19.1 版本](https://download.lineageos.org/devices/sargo/builds)，再進行更新。

### 從 20.0 更新

如果本來就是 20.0，要更新到較新的版本，要注意的是因為現在 Pixel 3a 尚未有官方 20.0 的版本，在官方操作說明中的指令`wget https://raw.githubusercontent.com/LineageOS/android_packages_apps_Updater/lineage-19.1/push-update.sh`的`lineage-19.1`要改成`lineage-20.0`。

---

## 後記

這一路風風雨雨（？）真的是折騰滿久，尤其是最後編譯的時候，因為時間很長，中途突然給你出錯又要整個重來，除錯了好一陣子。雖然更新不像直接使用官方發布版本方便，要先打開開發人員模式，但使用最新版本的感覺就是爽（？）。

不過……誠心建議如果不是特別想要追求最新版本，真的還是乖乖等官方發佈就好。

---

## 參考文獻

1. [Build for sargo](https://wiki.lineageos.org/devices/sargo/build)
2. [Extracting proprietary blobs from LineageOS zip files](https://wiki.lineageos.org/extracting_blobs_from_zips#extracting-proprietary-blobs-from-payload-based-otas)
