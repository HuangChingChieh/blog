---
title: 在MacBook Air 2013上安裝Fedora 38
tags: [fedora, macbook air, apple]
img: 922/4x6lR7.jpg
category: linux
---

日前從朋友那邊收到一台他塵封已久的 MacBook Air 2013，作為去沖繩幫他帶藥妝的回禮，沒想到平常極度排斥極度封閉環境的 Apple 產品的我，就這樣擁有了第一台萬惡的 Apple 裝置了。心想若灌成 Fedora 沒啥大問題，那似乎就這樣拿來當成個人筆電用也無不可，又環保（？）。

<!--more-->

上網做了一下功課之後，發現滿多前輩都做了類似的事情，只是大家灌的發行版本都不同。過程中會面對兩個問題，第一個是 Fedora 原生沒有支援 MacBook Air 2013 中 Wifi 的驅動程式，再來就是攝影機也需要額外動作去處理之後才能使用，但步驟都不難。

---

## 事前準備

### Fedora 安裝 USB

這就不用多說了吧。

### 製作 MacBook 可開機磁碟

由於我是打算整個重灌不保留原有的 macOS，日後若反悔或是想轉賣給別人，需要灌回 macOS。唯一可行的方式就是先製作好 MacBook 可開機磁碟，關於這部份可參考[官方文件](https://support.apple.com/zh-tw/HT201372)。

### 暫時性的替代網路

在解決 Wifi 驅動程式的問題之前，必須要有其他手段讓 MacBook Air 連上網路來更新以及安裝正確的 Wifi 驅動程式，最簡單的方式就是透過**USB 無線網卡**或是**手機進行 USB 網路共用**，這邊附上[Android](https://support.google.com/android/answer/9059108?hl=zh-Hant)以及[iOS](https://support.apple.com/zh-tw/guide/iphone/iph45447ca6/ios)的官方說明文件。

---

## 安裝 Fedora

安裝過程跟在其他電腦上差不多，唯一要注意的是 MacBook Air 2013 進入選擇其他開機裝置的方式是按住 <kbd>option</kbd> 再按開機鍵。

---

## 安裝 Wifi 驅動程式

安裝並更新 Fedora 完成後，就要來解決 Wifi 跟攝影機的問題了。首先是 Wifi，因 MacBook Air 2013 使用的 Wifi 硬體需要專有驅動程式，Fedora 可透過啟用 rpmfusion-nonfree 來獲得。

```bash
# 啟用RPM Fusion軟體庫
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/free/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

```bash
# 安裝專有驅動程式套件
sudo dnf install broadcom-wl
```

之後重新啟動電腦，若仍看不到無線網路再進行下列步驟：

```bash
# 編譯驅動程式
sudo akmods --force
```

```bash
# 載入驅動程式模組
sudo depmod -a && sudo modprobe wl
```

---

## 安裝攝影機驅動程式

攝影機驅動程式就稍微麻煩一點，目前還沒有直接可用的套件，必須要先自己編譯：

```bash
# 安裝編譯驅動程式必要的套件
sudo dnf install git dkms kernel-devel
```

```bash
# 複製由大神抽取出來的韌體原始碼
cd ~ && git clone https://github.com/patjak/facetimehd-firmware.git
```

```bash
# 編譯驅動程式
cd facetimehd-firmware && make && sudo make install
```

接下來的步驟簡單來說是建立一個文字內容為`install_items+=" /usr/lib/firmware/facetimehd/firmware.bin "`（注意要包含空格）的檔案儲存為`/etc/dracut.conf.d/facetimehd.conf`，方式就看自己習慣，這邊使用 GUI 工具來完成。

```bash
# 使用GNOME內建的文字編輯器建立檔案
sudo gnome-text-editor /etc/dracut.conf.d/facetimehd.conf
```

接下來就在打開的文字編輯器中輸入`install_items+=" /usr/lib/firmware/facetimehd/firmware.bin "`然後儲存，最後啟用 copr 套件庫、安裝套件並啟用驅動程式就大功告成了。

```bash
# 啟用套件褲
sudo dnf copr enable frgt10/facetimehd-dkms

# 安裝套件
sudo dnf install facetimehd

# 載入驅動程式模組
modprobe facetimehd
```

### 測試攝影機

因 GNOME 內建的 Cheese 程式不支援，可透過 WebRTC 網站的範例來測試：[https://webrtc.github.io/samples/src/content/getusermedia/gum/](https://webrtc.github.io/samples/src/content/getusermedia/gum/)。

---

大概就是這樣，其實有預料到 MacBook 封閉的環境可能要多一點步驟才能正常使用，不過過程比想像中的簡單很多，主要原因是滿多前人也這樣子做，所以找資料、解決方法什麼的都很快，幾乎都是 Google 第一篇文章就有解答。使用上雖然是 2013 年上市的筆電，但配備了 i5-4250U，即便在只有 4GB 的環境下，Fedora 仍跑得頗順暢，除了電池壽命已近黃昏需要再找時間更換之外，也沒什麼好挑剔的了。

---

## 參考文獻

1. [LIBERATING THE MACBOOK AIR 2013](https://boilingsteam.com/liberating-the-macbook-air-2013-with-linux-complete-guide/#facetimehd)
2. [Macbook pro 2013 camera drivers - Reddit](https://www.reddit.com/r/Fedora/comments/tgyrxv/comment/i157pyq/)
