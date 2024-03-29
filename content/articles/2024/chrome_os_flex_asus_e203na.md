---
title: ChromeOS Flex 試用心得 @ ASUS E203NA
img: 922/EhAxVV.png
tags: [chromeos flex, chromeos, asus, asus e203na, 舊筆電復活]
category: linux
---

接觸了 Linux 之後，一直都覺得舊電腦救星非 Fedora、Ubuntu 這種主流的 Linux 發布板莫屬，然而在 Google 釋出 ChromeOS Flex 之後，便覺得這個寶座或許已經換人坐了，尤其是在硬體更加有限的小筆電領域更是如此。

本篇紀錄了在從朋友那邊收購來的 ASUS E203NA 上安裝 ChromeOS Flex 並試用幾個月的過程，希望能幫助到正在使用同一台筆電準備丟掉、轉賣或是打算安裝 ChromeOS Flex 在自己的電腦上，對 ChromeOS Flex 實際使用心得有興趣的朋友。

<!--more-->

---

## 關於 ChromeOS Flex

那先簡單介紹一下 ChromeOS Flex。

由 Google 所開發，基於 Linux 的作業系統 ChromsOS，原本只能透過購買 Chromebook 使用，後來 Google[在 2022 年 7 月 15 日正式釋出了 ChromeOS Flex](https://cloud.google.com/blog/products/chrome-enterprise/chromeos-flex-ready-to-scale-to-pcs-and-macs)，讓大家可以下載這種作業系統自由安裝在自己的電腦上，為這個新舊汰換週期不斷加速的電腦世界微踩了一下永續的煞車。

<article-note>關於 ChromeOS Flex 和 ChromeOS 之間的差異，可參考 [Google 官方發布的文章](https://support.google.com/chromeosflex/answer/11542901?hl=zh-Hant)。</article-note>

在我實際使用過 ChromeOS Flex 之後，覺得它就是一個開箱即用、基於 Chrome 瀏覽器且無法輕易安裝其他軟體的 Linux 發布板，而這讓他變得異常輕巧。

---

## ASUS E203NA 的故事

手上這台 ASUS E203NA 是朋友買了之後覺得不堪用把他冷凍起來，而當時我剛好想買一台小筆電，所以就跟朋友低價購買回來。

### Fedora Workstation 意外跑不太起來

本以為灌了 Fedora Workstation 能讓他重獲新生，結果卻出乎意料地卡。

在這幾年的發展後，Fedora 所需的硬體資源已經沒有當初想像得這麼低（一部分當然是自己選擇使用 GNOME 的關係），當然我覺得絕對還是比肥大又充滿廣告軟體的 Windows 11 低很多，但 ASUS E203NA 的硬體太過低階（CPU N3350、32GB eMMC、4GB DDR3 RAM），讓 Fedora 跑起來也略顯吃力，播 Youtube 影片的時候若同時做其他事甚至會卡頓。

那時候就想說安裝 ChromeOS Flex 看看，也順便滿足一下好奇心。

---

## ChromeOS Flex 試用心得

<article-img img="922/Sy9zYD.png"></article-img>

在 ASUS E203NA 上安裝完 ChromeOS Flex 後，帶著這台小筆電在外面咖啡廳用過不少次，預計 3 月出發的薄荷島之旅也都是用它在眾家咖啡廳規劃完成，整體而言覺得非常滿意，一部分除了 ChromeOS Flex 非常符合只使用瀏覽器處理絕大多數事務的情境，一部分也是 Google 大神的調校實在讓人驚豔。

### 開機超快

剛安裝完的第一印象，就是開．機．超．快！

有多快呢？快到大概是 Windows 休眠然後再啟動的程度。要知道這台的儲存裝置可是 eMMC 啊！這種介於 HDD 與 SSD 之間的硬體竟然能有這種開機速度實在是讓人驚訝。

### 開箱即用

因為所有事情幾乎都要透過瀏覽器完成，所以安裝完後除了登入 Google 帳號外，幾乎也不需要多做什麼設定或安裝軟體就能直接開始使用。ChromeOS 的使用者界面安排與 Windows 類似，有類似「開始」的小視窗在左下角，右下角則是系統調整如音效、網路……等等，基本上沒什麼學習成本。

<article-img img="923/543fpC.png"></article-img>

### 網路影片播放效能很好

剛拿到這台小筆電安裝 Fedora Workstation 的時候，不管是用 Firefox 還是 Chrome 看 1080p 網路影片，只要同時在做其他事，影片播放就會很卡，Firefox 甚至在把滑鼠移過去出現播放列的時候，就會微當機。

但 ChromeOS Flex 完全不會，即便在 Youtube 裡面比較複雜的網頁元素渲染好之前，影片仍然可以順暢播放，而且小小的多開一些網頁也幾乎不影響影片，非常驚人。

### 設定同步非常完整

在使用期間因為有想嘗試其他 Linux 桌面，所以又灌成 Linux，但 ChromeOS Flex 的效能實在讓人回不去，所以又灌回來。結果在重灌完登入 Google 帳號之後，所有的設定就全部恢復，幾乎不需要任何額外的手動調整。不管是下方的工具列、已經釘選的非 Google 應用程式，都自動歸位。

雖然這一方面是得利於 [PWA](https://developer.mozilla.org/zh-TW/docs/Web/Progressive_web_apps) 的關係吧，畢竟網站本身就是應用程式完全不需要安裝，那麼幫忙紀錄是否有釘選的成本也不大。

---

## ChromeOS Flex 的潛在缺點

雖然在 ASUS E203NA 上面的 ChromeOS Flex 使用體驗讓我非常滿意，但對於其他人來說可能還是有一些缺點，下面就把我感受到或想到的潛在缺點描述一下。

### 需要 Google 帳號

這個應該沒什麼好說的 XD，如果討厭 Google 不想辦 Google 帳號，我覺得就可以放棄使用 ChromeOS Flex 了。

### 開箱即用但也無法調校

由於無法安裝任何應用程式，所以若打算安裝在其他裝置上，而其他裝置有 ChromeOS Flex 不支援的硬體，也無法透過自己手動安裝驅動程式來解決。例如本來也嘗試在 Macbook Air 2013 上面安裝，但發現 Webcam 不能使用，<article-inner-link slug="macbook_air_2013_fedora">後來就還是安裝 Fedora</article-inner-link>。

安裝前可以看看 Google 官方的[認證型號清單](https://support.google.com/chromeosflex/answer/11513094?hl=zh-Hant)是否有你想安裝 ChromeOS Flex 的電腦，沒有的話可能要直接做一支 Chrome 的安裝 USB 試試看。

像是這篇說的 ASUS E203NA 也不在清單上，但也跑得好好的。

### 唯一能夠使用的瀏覽器只有 Google Chrome

雖然使用 [Linux 開發模式](https://support.google.com/chromebook/answer/9145439?hl=zh-Hant)能夠額外安裝應用程式，也因此可以安裝其他瀏覽器，但由於 ChromeOS Flex 中的 [Linux 開發模式本質上是虛擬機](https://chromeos.dev/en/linux/linux-on-chromeos-faq#why-run-vms-arent-containers-secure)，其硬體需求相對很高，使用這種方式執行軟體也會有效能的損耗跟許多限制。

所以，我覺得可以當成 ChromeOS Flex 唯一能夠使用的瀏覽器只有 Chrome，若你平常的一些同步設定是在其他瀏覽器，例如 Firefox、Edge……等等，書籤那些也都存在這些瀏覽器，那轉到 ChromeOS Flex 會瞬間多出一大門檻。

而且我覺得如果電腦的硬體資源已經足以運作 Linux 開發模式，那不如就直接安裝 Linux 就好，限制也更少。

### 使用情境特定於以瀏覽器解決日常事務

我覺得這其實也不算缺點，就是看自己的需求而已。

ChromeOS Flex 本來的目標就是所有事務都在瀏覽器中完成，這在目前許多軟體服務都已經上雲端的現在其實不是什麼難事，但如果你是有可能需要做其他較為繁重的事務，比如說開發、剪片、製圖……諸如此類，就不建議使用。

---

## 後記

對於平常已經屬於 Google 體系的我來說，ChromeOS Flex 提供了我一個復活舊筆電的機會，加上 Google 大神的調校，自己是用得相當滿意。

對於新購入電腦的人，自己覺得不用考慮這種方案，畢竟買個平板接鍵盤、或是一台萬元筆電，可能都會比買一台新的 Chromebook 來得好一些。但若你心有環保魂，捨不得家裡明明還算能用的舊筆電僅僅只是被需求越來越高的軟體淘汰的話，那試試看 ChromeOS Flex 也不失為一條路。

反正免費下載、免費安裝、免費使用，用了不喜歡再真的把電腦拿去回收也無不可。
