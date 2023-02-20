---
title: 使用WoeUSB在Fedora中製作Windows安裝USB
description: 本篇紀錄了如何在Fedora中，使用WoeUSB這個套件製作Windows的安裝USB。
tags: [fedora, windows, usb, 安裝, 重灌]
---

雖然脫離 Windows 很久，但有時候還是會需要幫朋友重灌電腦什麼的，所以就研究了一下如何在 Fedora 裡面製作 Windows 的安裝媒體。後來在網路上找到[WoeUSB](https://github.com/WoeUSB/WoeUSB)這個套件。

本篇會紀錄使用 WoeUSB 在 Fedora 中製作 Windows 安裝 USB 的過程。

---

## 前置作業

### 下載 Windows ISO 檔案

首先當然事先準備 Windows 的 ISO 檔案，從 Windows 10 之後，已經可以直接從[微軟官網](https://www.microsoft.com/zh-tw/software-download/windows11)下載了，記得要從最下方的「下載 Windows 11 磁碟映像 (ISO)」下載。

### 準備 USB

準備一個 8GB 以上的 USB，就隨便拿一個吧，建議拿 USB 3.0 以上的。

### 安裝 WoeUSB 套件

```bash
sudo dnf install WoeUSB
```

---

## 使用 WoeUSB

### 確認 USB 掛載路徑

首先要找出 USB 的掛載路徑，可以透過 Gnome 內建的「磁碟」軟體去看，如果顯示出來的是有數字的，把數字去掉後記起來。像我的 USB 顯示是`/dev/sda1`，就要記`/dev/sda`。使用 WoeUSB 指令時會用到。

<global-img src="/images/woeusb.png"></global-img>

### 卸載 USB

大部分的 USB 連接到 Fedora 之後，分割區都會被自動掛載。需要手動把這些被掛載的分割區全部卸下，同樣可使用 Gnome 內建的「磁碟」軟體去做。選擇分去然後選擇分區左下角的類似停止播放音樂的「停止」按鈕就可以了。

### 使用指令

都確認好後，就可以打開終端機了。WoeUSB 沒有 GUI 界面，只能使用指令。使用方式很多種，這邊僅介紹最直觀的把整個 USB 製作成 Windows 安裝碟的指令：

```bash
sudo woeusb --device Windows7_x64.iso /dev/sdX
```

上面的`Windows7_x64.iso`要置換成自己存放下載回來的 Windows 安裝檔（可以使用拖拉的方式從檔案拉進去終端機，終端機會直接讀取檔案的路徑。），`/dev/sdX`則要換成剛剛我們看到的 USB 裝置掛載的路徑。整個整理完大概會長這樣：

```bash
sudo woeusb --device '/home/{{someuser}}/下載/Win11_22H2_Chinese_Traditional_x64v1.iso' /dev/sda
```

執行並輸入管理者密碼後，若有錯誤就會自動停止，可能要看一下錯誤訊息來排解。若正確，會看類似這樣的訊息：

```
Info: Mounting source filesystem...
Info: Wiping all existing partition table and filesystem signatures in /dev/sda...
/dev/sda: 8 bytes were erased at offset 0x00000200 (gpt): 45 46 49 20 50 41 52 54
/dev/sda: 8 bytes were erased at offset 0x39c7ffe00 (gpt): 45 46 49 20 50 41 52 54
/dev/sda: 2 bytes were erased at offset 0x000001fe (PMBR): 55 aa
/dev/sda: calling ioctl to re-read partition table: 成功
Info: Ensure that /dev/sda is really wiped...
Info: Creating new partition table on /dev/sda...
Info: Creating target partition...
Info: Making system realize that partition table has changed...
blockdev: ioctl error on BLKRRPART: 裝置或系統資源忙碌中
Info: Wait 3 seconds for block device nodes to populate...
mkfs.fat 4.2 (2021-01-31)
mkfs.fat: Warning: lowercase labels might not work properly on some systems
Info: Mounting target filesystem...
Info: Copying files from source media...
Splitting WIM: 2100 MiB of 4499 MiB (46%) written, part 1 of 250%
```

接下來就等它跑完囉！
