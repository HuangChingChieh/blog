---
title: 在Fedora中透過podman使用VSCode DevContainer
img: 923/i8GwZw.jpg
tags: [fedora, podman, docker, vscode, devcontainer]
category: frontend
---

之前在<article-inner-link slug="vue_stack_development_devcontainer"></article-inner-link>中曾經紀錄過如何使用 VSCode DevContainer 來容器化開發 Vue 專案，但因為自己平常用的作業系統是 Fedora，而 Fedora 內建的容器化引擎是 Podman，雖然 Podman 號稱與 Docker 之間的指令是互通的，但之前嘗試過會有錯誤而且一直找不到解方。

不過這幾天趁著要把筆電重灌成 Fedora 41 的勢頭，又嘗試從網路上尋找方法除錯，還真的被我找到了，於是就記錄下來，不然覺得要額外安裝 Docker 實在有點麻煩。

<!--more-->

---

## Podman 簡介

總之呢，Podman 是 Redhat 公司所推出的，一款跟 Docker 一樣是開放原始碼的容器管理工具。與 Docker 最大的差異是 Podman 預設都是無根權限的，沒有所謂的「守護進程」，Podman 比起 Docker 開源的部份更多、更符合 OCI 規範。

<article-note>關於 Podman 的詳細介紹以及與 Docker 的比較，可參考[Redhat 官方文章](https://www.redhat.com/en/topics/containers/what-is-podman)。</article-note>

### 遇到的問題

在 VSCode DevContainer 中使用 Podman 替代 Docker 最大的問題，就是使用者權限錯亂，這會導致在 Podman 中運作的 DevContainer 看不到專案結構與目錄，也無法修改、建立檔案。

---

## 前置作業：安裝模擬 Docker 的 Podman 套件

雖然可以透過調整 VSCode 的設定值來讓 DevContainer 所呼叫的指令從`docker`改用`podman`，但 Fedora 有內建一個很方便的套件叫做`podman-docker`，它會自動使用`podman`來接收`docker`的指令，並且調整相關變數（例如`$DOCKER_HOST`），比起自己一個一個設定會來得方便許多。那麼來安裝它：

```bash
sudo dnf install podman-docker
```

<article-note>若有先安裝 Docker，建議先完全移除後重新開機，此部份可參考[官方文件](https://docs.docker.com/engine/install/fedora/#uninstall-docker-engine)，然後再安裝`podman-docker`。</article-note>

---

## 調整`devcontainer.json`

在上網找了很多文章之後，嘗試出來的解法是修改`devcontainer.json`的設定，長這樣：

```json [devcontainer.json]
{
  /* 這兩行是使用內建指令建立開發者容器時就有的 */
  "name": "Node.js",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm",
  /* 下面這四行才是為了Podman加的 */
  "runArgs": ["--userns=keep-id"],
  // 這裡的「node」似乎是要跟容器內部預設的使用者名稱相同
  "containerEnv": {
    "HOME": "/home/node"
  },
  // 這裡的target網路是直接寫/workspace，不過為了區分我加上了自己的專案資料夾路徑。
  "workspaceMount": "source=${localWorkspaceFolder},target=/workspace/blog,type=bind,Z",
  // 這裡的網路是直接寫/workspace，不過為了區分我加上了自己的專案資料夾路徑。
  "workspaceFolder": "/workspace/blog"
}
```

老實說我也不是很懂為什麼這樣就能解決問題，但問了 ChatGPT 跟自己查找一些資料之後，應該是透過`runArgs` / `containerEnv` / `workspaceMount`去統一了容器內外的使用者及權限，來解決 Podman 預設無根的權限問題，`workspaceFolder`只是配合`workspaceMount`的掛載路徑，讓容器內的工作目錄一起動就會定位在專案下，來讓流程更直觀一點。

---

## 參考文章

- [Alternate ways to install Docker](https://code.visualstudio.com/remote/advancedcontainers/docker-options#_podman)
- [Running Visual Studio Code DevContainers with Podman](https://gist.github.com/dariuszparys/05ad6b0bf070cda64724b668f35c897c)
