---
title: 在Fedora 38中使用unrar解壓縮RAR檔案
tags: [fedora, rar, unrar]
img: 922/yodiaF.jpg
category: linux
---

在 Fedora 使用的`libarchive`中已經內建了對.rar 檔案的[部分支援](https://github.com/libarchive/libarchive#supported-formats)，所以遇到.rar 檔案的時候可以先嘗試直接使用桌面環境內建的解壓縮軟體開看看，如果失敗（例如我是遇到`RAR encryption support unavailable.`），再嘗試使用 rpmfusion 所打包的非開源版本。

<!--more-->

---

## 前置作業

### 先移除原本安裝的 unrar（選擇性）

由於官方套件庫也有一個叫做 unrar 的套件，是用上面所說的`libarchive`去模擬`unrar`的指令，若有先安裝須先移除。

```bash
sudo dnf remove unrar
```

### 啟用 rpmfusiuon-nonfree

```bash
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

---

## 安裝 unrar

啟用 rpmfusiuon-nonfree 後就能透過指令界面安裝了。

```bash
sud dnf install unrar
```

---

## 使用 unrar

unrar 的指令也很單純，如下所示，若檔案經由密碼壓縮，會有互動式指令介面讓你輸入密碼。

```bash
unrar e ./壓縮檔案.rar
```

---

果然專利授權在 Linux 世界就是麻煩呀，建議大家還是擁抱像`7zip`這種開源、多功能又跨平臺的壓縮格式吧。
