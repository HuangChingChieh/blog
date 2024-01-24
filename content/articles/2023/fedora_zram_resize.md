---
title: 調整Fedora中的ZRAM大小
img: 924/Rj6CAF.jpg
tags: [fedora, zram]
category: linux
---

這篇是<article-inner-link slug="fedora_lineageos_sargo">在 Fedora 環境中編譯 LineageOS</article-inner-link>時，嘗試複製在 Ubuntu 中可透過增加 SWAP 來補足記憶體不足的作法。後來發現即便把 ZRAM 增大也會編譯失敗，就很乾脆擴充實體 RAM，本篇就當個紀錄這樣。

<!--more-->

---

```bash
# 首先檢查一下目前的ZRAM大小
swapon
```

```bash
# 會看到這樣子的輸出，可以看到SIZE是8GB。
NAME       TYPE      SIZE  USED PRIO
/dev/zram0 partition   8G 15.8M  100
```

```bash
# 透過管理權限使用文字編輯器開啟設定檔
sudo gedit /usr/lib/systemd/zram-generator.conf
```

開啟這個檔案後，會看到如下的設定：

```ini [zram-generator.conf]
# This config file enables a /dev/zram0 device with the default settings:
# — size — same as available RAM or 8GB, whichever is less
# — compression — most likely lzo-rle
#
# To disable, uninstall zram-generator-defaults or create empty
# /etc/systemd/zram-generator.conf file.
[zram0]
zram-size = min(ram, 8192)
```

把`min(ram, 8192)`改為 16384(16GB)就可以了，改完存檔後重啟。

```bash
# 檢查一下調整後的大小
swapon
```

```bash
# SIZE變成16GB就對囉
NAME       TYPE      SIZE USED PRIO
/dev/zram0 partition  16G   0B  100
```

---

## 參考文獻

1. [zram-generator](https://github.com/systemd/zram-generator)
2. [zram-generator.conf.example](https://github.com/systemd/zram-generator/blob/main/zram-generator.conf.example)
3. [Changes/Scale ZRAM to full memory size](https://fedoraproject.org/wiki/Changes/Scale_ZRAM_to_full_memory_size)
