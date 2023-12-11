---
title: 使用Fedora刷Pixel 3a的LineageOS 過程紀錄
tags: [fedora, android, custom rom, Gooel Pixel 3a, lineageos]
img: 924/ioKHUr.jpg
category: linux
---

總之呢，[官方公佈不保證在 5 月之後還會收到更新](https://support.google.com/pixelphone/answer/4457705?hl=zh-Hant#zippy=%2Cpixel-apixel-a-xlpixel-pixel-xlpixel-apixel-a-gpixel-%E5%92%8C-pixel-a-g)，而[網路](https://3c.ltn.com.tw/news/48895)則說 7 月會迎來最後一次更新，因為手機狀況都還滿健康的，最愛保留舊手機舊電腦的我，就想說要來刷機了。

<!--more-->

**本篇文章是一個過程紀錄與分享，非指導教學，若有興趣刷機的人，所有刷機步驟都絕對建議按照官方文件進行。若因文章內容疏漏而導致錯誤或手機損壞，本人不負任何責任。**

---

## [LineageOS](https://lineageos.org/)

簡單介紹一下我使用的 ROM：LineageOS。

當年最廣為人知的 Android 客製化 ROM——CyanogenMod，就是 LineageOS 的前身。跟 CyanogenMod 一樣，現在有很多 Android 的客製化 ROM 都是基於 LineageOS 去改的，說是眾家 ROM 的始源、基底也不為過，也因此他整個系統是非常簡單，沒有太多額外功能的。

他們提供的安裝文件也非常詳細，因為刷 ROM 過程其實大同小異，就算不是要裝其他家的 ROM，若 LineageOS 上面也有支援同款裝置，還是建議可以去看他們家的文件。

---

## 事前考量

### 相機還能用嗎？

第一個擔心的當然是相機，畢竟 Pixel 系列最吸引人的除了 Google 大神下來親自調校以外，就是 Google 相機的軟體演算法了。實際用了這幾年真的覺得很好用，包含天文模式、夜拍、HDR 的表現都非常驚人，所以刷機之後第一個擔心的就是相機。

上網做了一些查詢之後，有的人說會不能安裝原本的 Google 相機、有的人說可以直接從 Play Store 下載，似乎沒有一個確切的答案。雖然如此我還是滿想刷的，刷完之後的相機心得我會放在下面。

### 無法通過 Safetynet 檢查的 APP

Safetynet 是 Google 用來檢查安裝 Android 的裝置是否有經過竄改（例如刷機、Root）的開發者工具，若 APP 開發者在 APP 中使用這個檢查，刷機後是有可能無法使用原本的 APP 的，最常見的例子就是刷機後的 Rom 有可能會無法在 Google Play 商店中搜尋到 Netflix，以及無法使用 Google 錢包的 NFC 感應付款功能。

社群為了刷機後能最大地還原裝置的使用情境，也衍伸出許多方式來繞過這個檢查，然而這就像是跟 Google 在玩貓抓老鼠一樣。Google 會不斷更新檢測方式（[例如將 Safetynet API 改成使用 Play Integrity API](https://developer.android.com/training/safetynet/deprecation-timeline)），社群也隨之再繼續開發新的繞道方式。

也許目前的繞道方式可行，之後就不行了也不一定。

所以，這部分也是刷機前需要考量的，因為原本你不會知道哪些 APP 有使用這個檢查（大部分是銀行 APP、支付工具 APP），必須要有刷機後某些 APP 無法使用的心理準備。

這部份我會在最後針對自己平常使用的 APP 做個整理。

---

## 事前準備：手機部份

### 備份手機上的相片、檔案或 APPs

這應該是不用多說，相片什麼的我都放在 Google Photos 所以還好，主要是 LINE 的訊息要先同步一次，其他檔案就看自己需要備份。各自 APP 的轉移方式也要確認，如果能直接登帳號使用是最方便，有些遊戲要設定轉移碼什麼千萬記得設定。

### 轉移驗證器

這是我刷完才回來紀錄的……完全忽略這件事。

如果你有使用像[Google 驗證器](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=zh_TW&gl=US)這種產生登入驗證碼的 APP，你會需要另一台手機來把原本手機裡面的驗證資料先轉移過去，等到刷完之後再轉移回來。很麻煩但建議一定要做，因為各自 APP 的驗證器重設方式都不同，像幣安就要審核，非常耗時。

### 確認手機為目前最新版本

[LineageOS 官方的 Pixel 3a 刷機文件](https://wiki.lineageos.org/devices/sargo/install)要求手機韌體版本必須為 Android 12.1.0，目前最新對應的版本號碼為[SP2A.220505.008](https://developers.google.com/android/images#sargo)。打開設定值 > 關於手機 > 版本號碼便可確認。建議升級到最新版本再刷機。

### 開啟除錯模式及允許解鎖 OEM

打開設定值 > 關於手機 > 版本號碼，連續按「版本號碼」那一欄直到系統顯示以開啟開發人員模式為止。開啟之後，回到上一頁的系統 > 開發人員選項，打開「OEM 解鎖」及「USB 偵錯」兩個選項。

---

## 事前準備：電腦部份

自從用了 Fedora 並且在上面刷機之後，覺得跟 Windows 上的刷機經驗真的天壤地別。如果你平常作業系統是 Windows 的話，我甚至建議可以拿不要的舊電腦來灌 Fedora 專門刷機用，前置作業（安裝 ADB、fastboot、驅動程式什麼的）只要用一行指令就完成，也讓你操作或設定錯誤的機會大大減少。

### 安裝 android-tools

```bash
sudo dnf install android-tools
```

沒錯！就是這樣一條指令，adb 跟 fastboot 裝到好。如果是第一次安裝，安裝完建議重新開機一次。

### 下載相關的 ROM 以及 Recovery

因為我要刷的是 LineageOS，就到[官方頁面](https://download.lineageos.org/sargo)下載。

### 下載 ih8sn（選擇性但建議安裝）

[ih8sn](https://github.com/LOS-Munch/ih8sn)是個利用覆寫系統的一些設定，來讓刷機後的 ROM 盡量通過 Safetynet 的專案，大部分的開發維護人員也都是 LineageOS 的成員。在上網搜尋各種繞過 Safetynet 的方式後，我覺得 ih8sn 是最簡單的一個。

安裝方式很簡單，因 Pixel 3a 為 arm64 架構，下載時要選擇`ih8sn-aarch64.zip`這個檔案，接著只要在首次安裝 Rom 時一起把這個 zip 檔刷進去就好了。

建議安裝，因為大部分的金融相關 APP、政府 APP 可能都會檢驗，可以省麻煩。

---

## 刷機過程注意事項

刷機過程就不做詳述，可參考[LineageOS 官方文件](https://wiki.lineageos.org/devices/sargo/install)的解說，非常詳細。下面僅針對過程中比較特別的部份做紀錄。

### 所有指令都須使用 sudo

在 Fedora 上，所有指令都必須使用 sudo 來進行。

### 互動式解鎖 Bootloader

在解鎖 bootloader 的時候，在下完`sudo fastboot flashing unlock`指令之後，要回到手機上使用音量上下鍵選擇「Unlock Bootloader」，並按下電源鍵選擇，之後手機會重啟。看到畫面上有出現「Device state: unlocked」就是解鎖成功囉。

### 解鎖後須進入手機系統一次

解鎖後要再進入手機一次，重新開啟除錯模式，才能繼續往下做。

### 可透過指令先進入 Bootloader 再進入 Recovery

因為發現要用「音量增加鍵+電源鍵」進入 Recovery 有點困難，似乎不管怎麼樣都會被跳過 Bootloader，所以這邊我重啟進入手機後再次使用指令來強制進入 Booloader，然後再手動操作進入 Recovery：

```bash
sudo adb reboot bootloader
```

### 透過 Recovery 進行 Factory reset 時收到錯誤訊息「E:can't send spi message: Try again」

根據[reddit 上網友 papi_groove 的回答](https://www.reddit.com/r/GooglePixel/comments/ka1wzv/pixel_3_reinstalling_android_ecant_send_spi/)，可透過「Advanced > View recovery logs > /tmp/recovery.log」檢視在 Log 中（我的是在最後面）是否有`I:Titan M wipe successful`訊息，來確認是否無礙。

### 安裝完系統後要直接重啟一次到 Recovery 才能安裝 MindTheGapps

這個官方文件有寫，但與之前刷過的機種不太一樣（之前刷過的機種都可以直接連著刷）所以沒注意到，特別拉出來紀錄。不先重啟一次到 Recovery（不是重啟到系統！）的話會裝不進去。

---

## APP 檢查清單

最後成功刷機完也啟動之後，就是裝回 APP 了。

這邊個人不建議使用還原，因為如果是從原生的 Android 轉過來，會有很多預裝的 APP，直接還原會全部都被裝回來。第一次轉到客製 Rom 還是建議先一個一個把要用的裝回來。

以下列出一些我有在用的 APP 清單，紀錄刷機後是否可以正常執行，這邊正常執行是指有安裝前面所說的<article-inner-link slug="pixel3a_custom_rom" hash="下載-ih8sn選擇性但建議安裝">ih8sn 套件</article-inner-link>。

### 正常可使用

- 台灣 Pay（這個是因為 Google Pay 不能用，所以上網搜尋類似功能的 APP 才開始用的，也支援手機直接感應店家的刷卡機。）
- 全聯支付
- Disney+
- Facebook
- Google 相簿（而且 Pixel 3a 的無限容量判斷還有效）
- Google 相機（從 Play 商店下載之後測試夜拍跟天文功能，看起來跟原本的沒什麼差異。）
- LINE
- LINE Bank
- LINE Pay
- MaiCoin
- Messenger
- 幣安
- 全家便利商店
- 全支付
- 健保快易通

### 部份功能可用

- Google Pay：可以安裝但不能設定感應式付款

---

大概這樣，整體而言有好有壞，最好的部分當然是 Google 相簿無限容量還在，不過 APP 無法使用的部份大多都找到替代方案，但如果有特別依賴被影響到的 APP，可能還是不建議刷機。但看到手機空間從原本使用 5X GB 變成只剩下 20 出頭，還是覺得滿爽的。

不過本來最擔心相機、付款跟銀行軟體（還有各種加密貨幣交易所），結果不能用的是全家，我真的猜不透啊，人家銀行都可以過了，請問全家在擋什麼意思！？

雖然安裝 ih8sn 之後大部分不能用的 APP 就能用了，但還是無法使用 Google Pay 感應付款。因為平常的消費使用習慣是先看店家是否支援 Line Pay，沒有的話就使用 Google Pay 感應付款，刷機後 Google Pay 無法使用影響有點大，所以去搜尋一些資料，發現台灣 Pay 也可以綁定信用卡後直接感應 POS 機器付款，類似直接感應實體卡的感覺，所以就載下來用，目前刷一些商家都有成功。
