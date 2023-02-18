---
title: Fedora初始設定紀錄
description: 本篇是將自己重灌 Fedora 時會做的一些事情以指令碼的形式紀錄下來，以求下次重灌完可以直接複製貼上執行之後就會最接近自己平常的使用狀態。
tags: [fedora, linux]
img: /images/fedora_apps.webp
---

本篇是將自己重灌 Fedora 時會做的一些事情，例如：移除沒在用的 Gnome 預設程式、安裝自己要用的程式、更新……等等的過程，以指令碼的形式紀錄下來，以求下次重灌完可以直接複製貼上執行之後就會最接近自己平常的使用狀態。

以下內容可能會隨著 Fedora 版本更新，有用到的套件都會盡量附上官網，有興趣的朋友可選擇參考，**並請自行承擔指令安裝責任**。

目前使用版本：Fedora 37。

---

## 前置作業

### 移除用不到的內建軟體

```bash
sudo dnf remove gnome-software gnome-connections gnome-weather gnome-maps gnome-calendar totem gnome-boxes cheese gnome-contacts eog simple-scan gnome-photos ibus-libpinyin ibus-libzhuyin gnome-tour gnome-text-editor -y
```

### 移除內建的 Gnome 擴充套件與 GNOME Classic

```bash
sudo dnf remove gnome-shell-extension-*
```

### 更新

```bash
sudo dnf update -y
```

---

## 啟用第三方軟體庫（Rpm Fusion / Flathub）

### 啟用 [RPM Fusion](https://rpmfusion.org/) 軟體庫

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### 啟用 [Flathub](https://flathub.org/home) 軟體庫

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo && flatpak remote-modify --enable flathub
```

---

## 安裝日常使用軟體

```bash
sudo dnf install thunderbird-wayland thunderbird shotwell libreoffice libreoffice-langpack-zh-Hant p7zip gimp inkscape uget transmission gnome-tweaks blender pcsxr soundconverter ibus-chewing VirtualBox vlc android-tools remmina mediawriter megasync gedit video-downloader -y
```

### 從 flahub 安裝 Steam

```bash
flatpak install com.valvesoftware.Steam
```

### 安裝 Chrome

```bash
sudo dnf install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

### [GStreamer](https://gstreamer.freedesktop.org/) 多媒體編碼套件

```bash
sudo dnf install gstreamer*plugin* --exclude=gstreamer*devel*
```

---

## 安裝開發相關套件

### 安裝 Git / Gitg

```bash
sudo dnf install git gitg -y
```

### 安裝 Visual Studio Code

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

```bash
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
```

```bash
sudo dnf check-update && sudo dnf install code
```

### 安裝 NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

---

## 安裝個人化相關套件

### 安裝額外的桌布

```bash
sudo dnf install *backgrounds*gnome* *gnome*backgrounds*
```

### 安裝 GTK 主題／圖示主題／字型

```bash
sudo dnf install breeze-cursor-theme papirus-icon-theme cjkuni-ukai-fonts cjkuni-uming-fonts wqy-microhei-fonts google-noto-sans-cjk-tc-fonts google-noto-sans-mono-cjk-tc-fonts google-noto-serif-cjk-tc-fonts adobe-source-han-sans-tw-fonts adobe-source-han-serif-tw-fonts
```

### 從內建的軟體庫安裝 Gnome 擴充套件

```bash
sudo dnf install gnome-shell-extension-apps-menu gnome-shell-extension-blur-my-shell gnome-shell-extension-caffeine gnome-shell-extension-dash-to-dock gnome-shell-extension-drive-menu gnome-shell-extension-freon gnome-shell-extension-drive-menu gnome-shell-extension-just-perfection gnome-shell-extension-no-overview gnome-shell-extension-places-menu gnome-shell-extension-sound-output-device-chooser -y
```

---

真的是紀錄了一下才發現，剛開始要裝的東西其實滿多的呢……辛苦你們了電腦跟網路，但我真的需要裝這些酷東西。
