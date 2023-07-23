---
title: 在Fedora 38中使用unrar解壓縮RAR檔案
tags: [fedora, linux, rar, unrar]
img: 922/yodiaF.jpg
---

在`libarchive`中已經內建了對.rar檔案的[部分支援](https://github.com/libarchive/libarchive#supported-formats)，所以遇到.rar檔案的時候可以先嘗試直接使用桌面環境內建的解壓縮軟體開看看，如果失敗（例如我是遇到`RAR encryption support unavailable.`），再嘗試使用下面所說的rpmfusion所打包的非開源版本。

---


### 先移除原本安裝的unrar（選擇性）

由於官方套件庫也有一個叫做unrar的套件，是用上面所說的`libarchive`去模擬`unrar`的指令，若有先安裝須先移除。

```bash
sudo dnf remove unrar
```

### 啟用rpmfusiuon-nonfree

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### 安裝unrar

```bash
sud dnf install unrar
```

### 解壓縮檔案

unrar的指令也很單純，如下所示，若檔案經由密碼壓縮，會有互動式指令介面讓你輸入密碼。

```bash
unrar e ./壓縮檔案.rar
```

---

果然專利授權在Linux世界就是麻煩呀，建議大家還是擁抱像`7zip`這種開源、多功能又跨平臺的壓縮格式吧。