---
title: 在Fedora 38中安裝Docker
img: 924/lduYJH.jpg
tags: [fedora, docker]
category: linux
---

本篇記錄了在 Fedora 中安裝及安裝後設定 Docker 的過程。

<!--more-->

---

## 安裝 Docker

```bash
# Fedora 38已內建此套件
sudo dnf -y install dnf-plugins-core
```

```bash
# 新增 Docker 的套件庫
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

```bash
# 安裝 Docker
sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```bash
# 啟動 Docker
sudo systemctl start docker
```

---

## 安裝後的設定

設定讓 Docker 可以無需特權（sudo）執行

```bash
# 將目前的使用者加入docker群組
sudo usermod -aG docker $USER
```

```bash
# 讓使用者設定生效
newgrp docker
```

```bash
# 測試Docker是否安裝成功
docker run --rm hello-world
```

```bash
# 有成功執行的話刪除剛剛下載的image
docker image rm hello-world
```

設定讓 Docker 於開機時自動啟動

```bash
sudo systemctl enable docker.service containerd.service
```

---

## 參考文獻

1. [Install Docker Engine on Fedora](https://docs.docker.com/engine/install/fedora/)
2. [Linux post-installation steps for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/)
