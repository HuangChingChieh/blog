---
title: 在Fedora 38中安裝Docker
description: 本篇記錄了在Fedora中安裝及安裝後設定Docker的過程
tags: [fedora, linux, docker]
---

### 安裝 Docker

```bash
# Fedora 38已內建此套件
sudo dnf -y install dnf-plugins-core

# 新增 Docker 的套件庫
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

# 安裝 Docker
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 啟動 Docker
sudo systemctl start docker
```

### 安裝後設定

設定讓 Docker 可以無需特權（sudo）執行

```bash
# 將目前的使用者加入docker群組
sudo usermod -aG docker $USER

# 讓使用者設定生效
newgrp docker

# 測試Docker是否安裝成功
docker run --rm hello-world

# 有成功執行的話刪除剛剛下載的image
docker image rm hello-world
```

設定讓 Docker 於開機時自動啟動

```bash
sudo systemctl enable docker.service containerd.service
```

---

## 參考文件

[Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)

[Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/)
