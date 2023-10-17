---
title: 在Fedora 38中使用video-downloader下載Youtube影片
tags: [fedora, youtube]
img: 924/GXLkgw.jpg
category: linux
---

之前在 Fedora 中我都是使用[clipgrab](https://clipgrab.org/)下載 Youtube 影片，最近發現套件庫中多了一個叫做 video-downloader 的軟體就載來試用了一下，覺得比起 clipgrab 簡潔許多，而且界面也跟 GNOME 風格一致，就轉去使用它了。

<!--more-->

---

## 安裝

可以透過官方套件庫安裝或是 Flathub：

```bash
# 透過官方套件庫安裝
sudo dnf install video-downloader
```

```bash
# 或透過Flathub安裝
flatpak install flathub com.github.unrud.VideoDownloader
```

---

## 使用

雖然目前還沒有正體漢語界面，但整體非常簡潔只有兩個頁籤：Audio 跟 Video。Audio 頁籤可以把 Youtube 影片直接轉成 MP3（無法選擇格式或位元速率），Video 頁籤就是下載影片，很直觀。

<article-img img="924/F75Chy.png"></article-img>

video-downloader 的預設下載路徑是`家目錄/下載/VideoDownloader`，可以從設定值中修改（右上角三個點）。

### 下載播放清單

video-downloader 可以直接下載整個 Youtube 播放清單，只是若清單中影片越多，需要的解析時間也會越長，這部份就要稍微耐心等待一下。

<article-img img="922/twnOo1.png"></article-img>

### 不只支援 Youtube

video-downloader 是建立在[yt-dlp](https://github.com/yt-dlp/yt-dlp)專案之上，因此 yt-dlp 支援的網站都可以透過 video-downloader 下載，包含像是 bilibili、twitter、facebook……等較有名的社群網站，甚至還支援部份的謎片網站，功能強大。

詳細的支援網站清單請參考：[Supported sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)。

---

大概就是這樣，本來我是使用來下載 Youtube 而已，後來發現 video-downloader 也能下載其他網站的影片覺得很驚訝。不然之前都會用那種一堆廣告、看起來很危險、好像有埋病毒的那種線上下載網站。
