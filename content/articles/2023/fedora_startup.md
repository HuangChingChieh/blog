---
title: Fedora初始設定紀錄
tags: [fedora]
img: 922/m6wo1h.jpg
category: linux
---

本篇是將自己重灌 Fedora 時會做的一些事情，例如：移除沒在用的 Gnome 預設程式、安裝自己要用的程式、更新……等等的過程，以指令碼的形式紀錄下來，以求下次重灌完可以直接複製貼上執行之後就會最接近自己平常的使用狀態。

<!--more-->

內容可能會隨著 Fedora 版本更新，有用到的套件都會盡量附上官網，有興趣的朋友可選擇參考，**並請自行承擔指令安裝責任**。

撰寫文章時使用版本：**Fedora 42**。

---

## 前置作業

```bash
# 移除用不到的套件
sudo dnf remove gnome-software gnome-connections gnome-maps gnome-calendar totem gnome-contacts simple-scan gnome-tour fedora-chromium-config libreoffice* rhythmbox firefox -y
```

```bash
# 移除用不到的 Gnome 擴充套件與 GNOME Classic
sudo dnf remove gnome-shell-extension-*
```

```bash
# 更新
sudo dnf update -y
```

---

## 啟用第三方軟體庫（Rpm Fusion / Flathub）

啟用 [RPM Fusion](https://rpmfusion.org/) 軟體庫

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

啟用 [Flathub](https://flathub.org/home) 軟體庫

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo && flatpak remote-modify --enable flathub
```

---

## 安裝日常使用軟體

```bash
sudo dnf install p7zip gnome-tweaks android-tools gnome-extensions-app -y
```

### 安裝 [MegaSync](https://mega.io/)

```bash
sudo dnf install https://mega.nz/linux/repo/Fedora_42/x86_64/megasync-Fedora_42.x86_64.rpm
```

### 從 flathub 安裝日常軟體

```bash
flatpak install flathub org.mozilla.Thunderbird org.libreoffice.LibreOffice com.spotify.Client com.valvesoftware.Steam org.videolan.VLC com.github.unrud.VideoDownloader org.gimp.GIMP org.mozilla.firefox
```

---

## 安裝開發相關套件

```bash
# 安裝 Git / Gitg / Github CLI
sudo dnf install git gh -y
```

### 安裝 Visual Studio Code

```bash
# 匯入微軟套件庫金鑰
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

```bash
# 新增VS Code套件庫
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
```

```bash
# 安裝
sudo dnf install code
```

### Github CLI 設定

```bash
gh auth login
```

---

## 安裝個人化相關套件

```bash
# 安裝額外的桌布
sudo dnf install *backgrounds*gnome* *gnome*backgrounds*
```

```bash
# 安裝 GTK 主題／圖示主題／字型
sudo dnf install papirus-icon-theme* *cjk*fonts* *tw-fonts wqy*
```

```bash
# 從內建的軟體庫安裝 Gnome 擴充套件
sudo dnf install gnome-shell-extension-apps-menu gnome-shell-extension-appindicator gnome-shell-extension-blur-my-shell gnome-shell-extension-dash-to-dock gnome-shell-extension-drive-menu gnome-shell-extension-freon gnome-shell-extension-drive-menu gnome-shell-extension-places-menu -y
```

---

真的是紀錄了一下才發現，剛開始要裝的東西其實滿多的呢……辛苦你們了電腦跟網路，但我真的需要裝這些酷東西。
