---
title: 在Fedora 38編譯Pixel 3a的LineageOS
img: 924/LsYE8j.jpg
tags: [fedora, android, custom rom, Gooel Pixel 3a, lineageos]
category: linux
---

本篇文章是試圖移植之前的文章：<article-inner-link slug="ubuntu_lineageos_sargo"></article-inner-link>的過程至 Fedora 上的心得紀錄，畢竟自己平常主要使用的系統為 Fedora，想說都是 Linux 應該是可以移植過來。

<!--more-->

---

## 硬體需求

請參考之前的文章：<article-inner-link slug="ubuntu_lineageos_sargo"></article-inner-link>。

不過記憶體的部分，我在 RAM 只有 16GB 的 Fedora，嘗試把 ZRAM 調高到 32GB，仍然會編譯失敗，不知道是不是有什麼其他的眉角需要調整。如果跟我一樣不是很瞭解這些運作機制的話，建議還是直接把電腦記憶體加到 32GB 吧！

---

## 建立編譯環境

### 找到 Fedora 中的相同套件

因為官方的教學文件是使用 Ubuntu 編譯，有些編譯需要的套件名稱會不同，首先要做的麻煩事，就是要去把這些套件在 Fedora 中對應的名稱找出來。

**下面這些列出來的套件對應是自己在網路上搜尋、編譯嘗試錯誤排除以及猜測名稱之後得到的結果，可能可以比這更少，但我不具備這方面的知識，就當作參考吧。**

在 Fedora 找不到的套件名稱對應如下，粗體為 Ubuntu 的套件名稱，Fedora 中對應的名稱會用子項目表示：

- **`build-essential`** / **`g++-multilib`** / **`gcc-multilib`**
  - `@"C Development Tools and Libraries"`
  - `@"Development Tools"`
  - `gcc`
  - `gcc-c++`
  - `glibc-devel`
  - `glibc-static`
  - `libstdc++-devel`
  - `libstdc++-static`
- **`imagemagick`**
  - `ImageMagick`
- **`lib32ncurses5-dev`**
  - `ncurses-devel.i686`
  - `ncurses-compat-libs.i686`
- **`lib32readline-dev`**
  - `readline-devel.i686`
- **`lib32z1-dev`**
  - `zlib-devel.i686`
- **`libelf-dev`**
  - `elfutils-libelf-devel`
- **`liblz4-tool`**
  - `lz4-libs`
- **`libncurses5`**
  - `ncurses-libs`
  - `ncurses-compat-libs.x86_64`
- **`libncurses5-dev`**
  - `ncurses-devel.x86_64`
- **`libsdl1.2-dev`**
  - `sdl12-compat-devel`
- **`libssl-dev`**
  - `openssl-devel`
- **`libxml2-utils`**
  - `libxml2-devel`
- **`zlib1g-dev`**
  - `zlib-devel.x86_64`
- **`openjdk-11-jdk`**
  - `java-11-openjdk`

### 安裝編譯所需套件

```bash
# 先更新一下系統
sudo dnf update

# 安裝編譯需要的套件
sudo dnf install android-tools bc @"C Development Tools and Libraries" @"Development Tools" gcc gcc-c++ glibc-devel glibc-static libstdc++-devel libstdc++-static curl git-lfs gnupg gperf ImageMagick ncurses-devel.i686 ncurses-devel.x86_64 ncurses-compat-libs.i686 ncurses-compat-libs.x86_64 readline-devel.i686 zlib-devel.i686 elfutils-libelf-devel lz4-libs ncurses-libs  sdl12-compat-devel openssl-devel libxml2 libxml2-devel lzop pngcrush rsync schedtool squashfs-tools xsltproc zip zlib-devel java-11-openjdk python3 repo wget python3-protobuf -y

# 設定git身份(email)
git config --global user.email "you@example.com"

# 設定git身份(名稱)
git config --global user.name "Your Name"
```

### 確認 Java 版本

```bash
# 確認Java版本
java -version
```

若顯示的不是`openjdk version`不是`11`的話，就要調整。

```bash
# 設定Java版本
sudo alternatives --config java

# 會看到像這樣的畫面，要選擇是java-11-openjdk的那條。
有 2 個程式提供「java」。

  選擇     指令
-----------------------------------
*  1       java-17-openjdk.x86_64
 + 2       java-11-openjdk.x86_64
```

```bash
# 再次確認Java版本
java -version
```

---

## 取得原始碼及編譯

之後步驟由於跟在 Ubuntu 中相同，請參考之前的文章：<article-inner-link slug="ubuntu_lineageos_sargo" hash="取得-lineageos-原始碼"></article-inner-link>。

---

## 參考文獻

1. [ROS Index](https://index.ros.org/deps/)
2. [How to install build-essential on Fedora](https://www.pragmaticlinux.com/2022/05/how-to-install-build-essential-on-fedora/)
3. [Switching between Java Versions](https://docs.fedoraproject.org/en-US/quick-docs/installing-java/#_switching_between_java_versions)
4. [libncurses.so.5 - cannot open shared library, Fedora](https://stackoverflow.com/questions/51698044/libncurses-so-5-cannot-open-shared-library-fedora)
