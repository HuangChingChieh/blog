---
title: MEGA - 完整支援Fedora Workstation 38的雲端硬碟
tags: [fedora, mega, megasync, 雲端硬碟]
img: 922/b56SXt.jpg
category: linux
---

在雲端硬碟供應商中，有官方原生支援 Fedora 的桌面應用程式可安裝，又有完整繁體中文界面的，就我所知只有[Dropbox](https://www.dropbox.com/zh_TW/)與[MEGA](https://mega.io/zh-hant/?aff=MxSxDVl4hAI)兩家，個人是使用 MEGA。MEGA 能使用的免費容量非常佛心，有 [20GB](https://mega.io/zh-hant/pricing?aff=MxSxDVl4hAI) 這麼多（[點我註冊](https://mega.nz/register/?aff=MxSxDVl4hAI)），相對於 Dropbox 免費容量只有 2GB 差了十倍啊！

<!--more-->

在 Fedora 安裝 Megasync 的方式有數種，這篇紀錄了在 Fedora 中安裝 MEGA Sync 的過程、一些需要注意的地方，以及自己感受到的不同安裝方式的優缺點。

---

## 透過官方套件庫安裝

既然號稱有官方原生支援，個人最推薦的還是直接安裝官方提供的版本，首先點進去[官方下載頁面](https://mega.io/zh-hant/desktop)，拉到下面的`下載MEGA桌面應用程式`後選擇`Linux`頁籤，並在下拉選單中選擇`Fedora`，按對應版本中的`下載`按鈕即可。

<article-img img="922/H6rlOP.png"></article-img>

下載完後用自己喜歡的方式安裝（例如使用終端機），安裝完成後就會啟用 MEGA 官方的套件庫，

```bash
# /some-path/megasync-Fedora_38.x86_64.rpm要更換成自己下載的目錄喔
sudo dnf install /some-path/megasync-Fedora_38.x86_64.rpm
```

### 安裝檔案管理器擴充套件

若是使用下面這四個檔案管理器的話，也推薦再安裝對應的擴充套件：

- nautilus<small>（GNOME 的預設檔案管理器）</small>
- dolphin<small>（KDE 的預設檔案管理器）</small>
- nemo<small>（CINNAMON 的預設檔案管理器）</small>
- thunar<small>（XFCE 的預設檔案管理器）</small>

套件名稱會是`{{檔案管理器名稱}}-megasync`，例如`nautilus-megasync`。這些套件能夠讓檔案管理器顯示出 MEGA Sync 的資料夾與檔案同步狀況。

```bash
# 以nautilus為例
sudo dnf install nautilus-megasync
```

### 優缺點

透過官方套件庫安裝，最大的優點就是有提供幾個較知名的桌面檔案管理員的整合套件。但 Fedora 迭代週期較快，通常每半年可能就有一次系統更新，但 MEGA 官方不一定每次都跟得上，升級 Fedora 系統時要先確定 MEGA 官方已推出對應版本比較好。

---

## 透過 Flathub 安裝

若是不太在意檔案管理員整合支援的話，也可以考慮安裝 flatpak 版本，由於 flatpak 特殊的運作環境，較不用擔心 Fedora 升級時的支援問題。MEGA Sync 的 flatpak 版本可以在[Flathub](https://flathub.org/zh-Hant)中找到。

```bash
# 啟用Flathub軟體庫
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo && flatpak remote-modify --enable flathub
```

```bash
# 安裝MEGA Sync
flatpak install flathub nz.mega.MEGAsync
```

### 優缺點

透過 Flathub 安裝，最大的優點（也是 Flatpak 的優點）就是與作業系統基本上是獨立的，不用擔心應用程式趕不上 Fedora 的升級，但就必須犧牲檔案管理程式的整合支援。

---

## 透過 rpmfusion-nonfree 套件庫安裝

rpmfusion 包含了許多因為各種原因而無法被包含在 Fedora 套件庫的軟體，基本上是使用 Fedora 必裝的套件庫，而其中也包含 MEGA Sync。

```bash
# 啟用rpmfusion套件庫
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/free/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

```bash
# 安裝megasync
sudo dnf install megasync
```

### 優缺點

自己覺得 rpmfusion 的優點比起透過官方套件庫或是 flathub 安裝而言比較少，因為若不在意檔案管理員整合支援，使用 flathub 可以較不用擔心 Fedora 系統升級週期較快的影響，而 rpmfusion 打包 MEGA Sync 更新的速度又沒有官方套件庫快。

---

## 在 GNOME 中額外的設定

若是使用 GNOME 桌面的話，除了官方套件庫中的`nautilus-megasync`，也推薦安裝`gnome-shell-extension-appindicator`這個套件，它能夠讓 MEGA Sync 系統圖示出現在頂部的系統列中，會讓使用體驗大大加分。

```bash
sudo dnf install gnome-shell-extension-appindicator
```

安裝完後記得先登出再登入，然後在`擴充套件`中啟用，接著再設定 MEGA Sync，就會看到 MEGA 的圖案出現在 GNOME 桌面的頂部囉！

---

## 後記

目前各家雲端硬碟都有 WEB 界面可以使用，基本的上傳下載功能可以說已沒有作業系統限制，但如果是需要更複雜的操作如自動化同步……等功能，就還是要下載桌面應用程式，這時候 Linux 的支援度就非常重要了。

除了本篇所說的 Dropbox 與 MEGA，另外還有在 Linux 社群比較知名的可能是像 Next Cloud 這樣可託管、可自託管的解決方案，可惜 Next Cloud 還沒有繁中介面，不然或許我也會想一試。或是 pCloud，完整支援 Ubuntu，也提供 appImage 版本。又或者是由第三方開發者串接 Google Drive 的解決方案，所在多有。

只是用來用去呢，自己還是最喜歡 MEGA，推薦給大家。
