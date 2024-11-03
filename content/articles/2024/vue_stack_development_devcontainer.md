---
title: 使用VSCode搭配DevContainer容器化開發Vue專案
img: 924/uCCnpK.jpg
tags: [docker, vscode, devcontainer]
category: frontend
---

在這個什麼都可以容器化的年代，開發也是可以容器化的。容器化的好處多多，其中自己覺得最重要的部份就是不再需要寫繁雜的設定步驟文件流傳後代（？），只要寫好 dockerfile，就能 1:1 重製開發環境。

這篇文章要紀錄的就是自己使用 VScode 搭配 DevContainer 來容器化開發的過程。

若你平常用的系統跟我一樣是 Fedora 的話，可使用內建的 Podman 來取代 Docker 作為 DevContainer 的底層引擎，不過最後會需要稍微調整一下`devcontainer.json`，這部份可以參考<article-inner-link slug="fedora_vscode_devcontainer_podman"></article-inner-link>。

<!--more-->

---

## 前置準備

### 安裝 Docker

第一步當然是安裝容器引擎囉！關於 Docker 的安裝可以參閱[官方文件](https://docs.docker.com/engine/install/)，若同是使用 Fedora 的朋友，可以參考我整理的簡單筆記：<article-inner-link slug="fedora_docker_startup"></article-inner-link>。

### 安裝 DevContainer 擴充套件

接著是安裝整合 VSCode 與 DevContainer 的擴充套件：[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)。

---

## 設定 DevContainer

這邊建議透過 VSCode 中 F1 的快速指令來新增設定檔，若要自行編寫 Dockerfile 最好也先以官方支援的映像檔為基礎。可以參考[Dev Containers tutorial](https://code.visualstudio.com/docs/devcontainers/tutorial#_get-the-sample)。否則可能會遇到在容器內編輯檔案後，回到本機卻無法編輯的權限問題。

建立好後，會看到專案多了一個`.devcontainer`資料夾，其中會有`devcontainer.json`檔案：

```json [devcontainer.json]
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node
{
  "name": "Node.js",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm"

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [],

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "yarn install",

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

詳細設定的參考文件，官方都幫你寫在註解了，可以點網址進去查看，下面補充幾個自己會做的設定。

```json [devcontainer.json]
{
  // 安裝node依賴項
  "postCreateCommand": "npm install",
  "customizations": {
    // 可以指定一些vscode專用的設定
    "vscode": {
      // VScode的設定值
      "settings": {},
      // 新增要安裝在容器內的VSCode擴充套件，像是格式化之類的工具。
      "extensions": [
        "esbenp.prettier-vscode",
        "donjayamanne.githistory",
        "Vue.volar",
        "dbaeumer.vscode-eslint"
      ]
    }
  }
}
```

---

## 錯誤處理

如果你像我一樣在 DevContainer 中開發 Nuxt 網站時遇到`ERR_CONTENT_LENGTH_MISMATCH`問題，可以在`package.json`中的`dev`指令加上`--no-fork`參數。不過研究[官方 Gihub 的 Issue](https://github.com/nuxt/cli/issues/181)我也不知道是什麼原因，然後也不知道為什麼加這個參數可以解決就是了……。

```json [package.json]
{
  "scripts": {
    "dev": "nuxt dev --no-fork"
  }
}
```

---

## 參考文獻

1. [Developing inside a Container](https://code.visualstudio.com/docs/devcontainers/containers)
