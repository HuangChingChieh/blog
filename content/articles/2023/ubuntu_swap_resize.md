---
title: 調整Ubuntu中的SWAP大小
tags: [ubuntu, linux, swap]
---

```bash
# 首先檢查一下目前的SWAP大小
swapon

# 會看到這樣子的輸出，可以看到SIZE是8GB。
NAME       TYPE      SIZE  USED PRIO
/dev/sdb0 partition   8G 15.8M  100

# 先關閉SWAP
sudo swapoff -a
```

```bash
# 建立一個SWAP檔案
sudo fallocate -l 16G /swapfile

# 改變檔案的權限
sudo chmod 600 /swapfile

# 標記檔案爲SWAP
sudo mkswap /swapfile

# 啟用
sudo swapon /swapfile
```

```bash
# 檢查一下調整後的大小
swapon

# SIZE變成16GB就對囉
NAME       TYPE      SIZE USED PRIO
/dev/zram0 partition  16G   0B  100
```

---

## 參考文件

[How To Add Swap Space on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-22-04)
