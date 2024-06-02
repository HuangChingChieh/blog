---
title: 設定PM2來管理Nuxt SSR網站
img: 924/Crirxh.jpg
tags: [nuxt, vue, pm2]
category: frontend
---

最近想整理一下自己在工作中用到的工具集，回頭看發現比較不熟的是 pm2 的初始設定，畢竟設定好之後也只會用到`pm2 status`、`pm2 logs`、`pm2 monit`……這些維護用的指令而已，就決定先從 pm2 開始紀錄了。

文章內容都是官方文件就有的東西，這邊是取自己比較常用的部份，可能會延遲更新，還請訪客以[官方文件](https://pm2.keymetrics.io/docs/usage/quick-start/)為準。

<!--more-->

---

## 什麼是 PM2

需要使用即時 SSR 功能的 Nuxt 網站必須跑在 node 環境中成為一個 process，而 pm2 顧名思義就是拿來管理這個 process 的管理器（manager）。

這個管理器有滿多功能，像是主機重開機時自動重新啟動網站、自動將網站的 process 叢集化以達到可用的最大效能、紀錄 log、監控即時的效能資源耗損……等等，比起直接讓網站`npm run start`來說，會方便許多。

---

## 安裝

可以透過 npm 直接安裝：

```bash
sudo npm install pm2@latest -g
```

<article-note>這裡會有`sudo`是因為自己工作中是透過 linux 的軟體包管理器來安裝 nodejs，若要全域安裝會需要管理員權限。</article-note>

---

## 設定與執行

透過建立`ecosystem.config.js`檔案（Nuxt3 中為`ecosystem.config.cjs`）可以控制 pm2 執行網站時的一些設定值，基本內容如下：

```js
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      /* Nuxt3 */
      // port: '3000',
      // script: './.output/server/index.mjs',
      /* Nuxt2 */
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
```

接著在網站資料夾中執行下面這個指令，pm2 就會開始執行 Nuxt 網站了：

```bash
pm2 start ecosystem.config.js
```

### 自己常用的其他設定

當然`ecosystem.config.js`還可以設定更多的參數，自己常用的羅列如下：

```js
module.exports = {
  apps: [
    {
      // 設定不同環境時的參數，可以區分開發、測試以及正式環境。
      // 不同環境可以透過pm2 start時以--env production傳入。
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      // 當網站實體佔用超過多少記憶體時便重啟
      max_memory_restart: '3.75G',
    },
  ],
}
```

---

## 設定開機時自動重新啟動 pm2

若網站是部署在主機上，而非透過容器方式的話，設定主機重開機時自動重新啟動後，可以防止主機意外重新啟動後網站掛掉的問題。先輸入下列指令：

```bash
pm2 startup
```

接著終端機會出現像這樣的提示，要你複製一段指令並執行：

```bash
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/home/somuser/.nvm/versions/node/v20.14.0/bin /home/someuser/.nvm/versions/node/v20.14.0/lib/node_modules/pm2/bin/pm2 startup <distribution> -u <user> --hp <home-path>
```

指令的內容會根據你目前所在的系統版本、使用的 nodejs 環境而有所不同，總之就複製後執行。最後透過 pm2 執行所有你在重開機時想要自動執行的網站後，再執行下列指令：

```bash
pm2 save
```

這樣就設定完成了。

### 取消自動重新啟動

若想要取消自動重新啟動的話，可以透過下列指令：

```bash
pm2 unstartup
```

**在主機 node 環境有升級的時候，要記得先`unstartup`，再重新設定。**