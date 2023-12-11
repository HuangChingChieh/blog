---
title: 在MacBook Air 2013上安裝Fedora 38
tags: [fedora, macbook air, apple]
img: 922/4x6lR7.jpg
category: linux
---

日前從朋友那邊收到一台他塵封已久的 MacBook Air 2013，作為去沖繩幫他帶藥妝的回禮，沒想到平常極度排斥封閉環境的 Apple 產品的我，就這樣擁有了第一台萬惡的 Apple 裝置了。心想若灌成 Fedora 沒啥大問題，那似乎就這樣拿來當成個人筆電用也無不可，又環保（？）。

<!--more-->

上網做了一下功課之後，發現滿多前輩都做了類似的事情，只是大家灌的發行版本不同。過程中會面對三個問題：

1. Fedora 沒有原生支援 MacBook Air 2013 中 Wifi 的驅動程式
2. Facetime HD 也需要額外動作去處理之後才能使用
3. Macbook 溫度容易飆高的問題

除了第 3.點比較複雜以外，步驟都不會太麻煩，以下開始。

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

安裝並更新 Fedora 完成後，就要來解決 Wifi 跟 Facetime HD 的問題了。首先是 Wifi，因 MacBook Air 2013 使用的 Wifi 硬體需要專有驅動程式，Fedora 可透過啟用 rpmfusion-nonfree 來獲得。

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

## 安裝 Facetime HD 驅動程式

Facetime HD 驅動程式就稍微麻煩一點，目前還沒有直接可用的套件，必須要先自己編譯：

```bash
# 安裝編譯驅動程式必要的套件
sudo dnf install git dkms kernel-devel
```

```bash
# 複製由大神抽取出來的韌體原始碼
cd ~ && git clone https://github.com/patjak/facetimehd-firmware.git
```

```bash
# 編譯Facetime HD驅動程式
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
```

```bash
# 安裝套件
sudo dnf install facetimehd
```

```bash
# 載入驅動程式模組
modprobe facetimehd
```

### 測試 Facetime HD

因 GNOME 內建的 Cheese 程式不支援 Facetime HD，可透過 WebRTC 網站的範例來測試：[https://webrtc.github.io/samples/src/content/getusermedia/gum/](https://webrtc.github.io/samples/src/content/getusermedia/gum/)。

---

## 處理溫度瘋狂起飛問題

這個問題是我安裝完解決了前兩個問題後，試用了一陣子才發現的。

電腦的溫度常常會飆很高，就算只是用 Chrome 開了個 Youtube 都會衝到 9X°C 以上，剛開始以為只是 Macbook 太舊、灰塵太多或是電池該換了，但換了電池也清了內部後，還是有一樣問題。而且當他飆高的時候，耳朵貼近出風口卻完全沒聽到風扇聲！

### 安裝 mbpfan 讓風扇功能正常發揮

上網查了一下才發現要安裝另一個套件[`mbpfan`](https://github.com/linux-on-mac/mbpfan)，這個套件我是有看沒有懂，似乎就是使用 Apple 在 Kernel 中貢獻的模組去調校風扇運轉與溫度之間的作用（？）。

```bash
# mbpfan內建在官方套件庫中，直接安裝就行囉。
sudo dnf install mbpfan
```

接下來要設定`mbpfan`在開機後就自動啟動：

```bash
sudo systemctl enable mbpfan.service
```

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl start mbpfan.service
```

成功安裝之後就會發現當溫度升高的時候，會聽到伴隨起飛、努力工作的風扇聲了（原來 MBA 2013 的風扇是可以這麼大聲的呀）。最高目前會到 8X°C，但也不會突然就到 9X°C 甚至 100°C 了。

### 關閉 Intel Turbo Boost（選擇性）

不過，8X°C 對於我來說還是覺得有點高，上網又查了一下資料，可以透過關閉 Intel Turbo Boost 來讓 CPU 的運作時脈降低，進而省電跟降低熱度。這個部份因為步驟較多較複雜，篇幅較長，就不在這邊記述，有興趣的人可參考<article-inner-link slug="fedora_disable_turbo_boost">另一篇文章</article-inner-link>。

關閉 Intel Turbo Boost，就不太會超過 80°C 了，平常在冷氣房大概會是 6X°C 左右。

---

## 關閉開機音效

雖然有些果迷好像覺得很棒，但在咖啡店開機的時候，那個「咚」的音效真的太引人注目了，還是關掉得好。

```bash
# 先安裝efivar
sudo dnf install efivar
```

接下來的指令因為要暫時切換到 root 身份，務必確認指令正確，並不要做多餘的事，以免對電腦造成無法逆轉的後果。

```bash
# 切換到root身份
sudo su
```

```bash
# 讓控制開機音效的efivar變數可以被覆寫
chattr -i /sys/firmware/efi/efivars/SystemAudioVolume-7c436110-ab2a-4bbb-a880-fe41995c9f82
```

```bash
# 將代表「靜音」的值寫入變數
printf "\x07\x00\x00\x00\x00" > /sys/firmware/efi/efivars/SystemAudioVolume-7c436110-ab2a-4bbb-a880-fe41995c9f82
```

```bash
# 讓變數恢復為無法被覆寫的狀態
chattr +i /sys/firmware/efi/efivars/SystemAudioVolume-7c436110-ab2a-4bbb-a880-fe41995c9f82
```

```bash
# 離開root身份
exit
```

---

## 後記

大概就是這樣，其實有預料到 MacBook 封閉的環境可能要多一點步驟才能正常使用，不過過程比想像中的簡單些，主要原因是滿多前人也這樣子做，所以找資料、解決方法什麼的都很快，幾乎都是 Google 第一篇文章就有解答。

使用上的部份，在關閉 Intel Turbo Boost 後，日常工作、瀏覽器簡單幾個分頁查查資料，甚至簡單寫寫前端的程式碼似乎都沒啥問題。雖然是 2013 年上市的筆電，即便在只有 4GB 的環境下，Fedora 仍跑得頗順暢，完勝我另外一台 ASUS E203NA，只能說 CPU 還是滿重要的呀。

---

## 參考文獻

1. [LIBERATING THE MACBOOK AIR 2013](https://boilingsteam.com/liberating-the-macbook-air-2013-with-linux-complete-guide/#facetimehd)
2. [Macbook pro 2013 camera drivers - Reddit](https://www.reddit.com/r/Fedora/comments/tgyrxv/comment/i157pyq/)
3. [macbook-mute.sh](https://gist.github.com/0xbb/ae298e2798e1c06d0753)
