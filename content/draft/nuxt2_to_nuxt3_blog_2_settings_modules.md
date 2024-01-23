---
title: 部落格Nuxt 2升級Nuxt 3（一）：基本架構與修改設定值
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3]
category: frontend
---

從去年年初開始建置的這個部落格網站，邊寫文章的同時陸陸續續補上功能後，大概到上個月才終於像是有個部落格的樣子。但由於 [Nuxt2 即將在 2024/06/30 停止官方支援](https://v2.nuxt.com/lts#expecting-to-stay-on-nuxt-2)，而作為基底的 [Vue2 更是在 2023/12/31 已停止官方支援](https://v2.vuejs.org/eol/)，所以……想說要做的新功能可能先放著，先把部落格從 Nuxt2 升級到 Nuxt3 比較好。

<!--more-->

大概做了一些研究覺得是個浩大工程，所以想說來紀錄一下升級的艱辛（？）過程，也希望給大家做個參考。此文章會隨著升級進度不斷更新，希望趕得及在 Nuxt2 結束生命週期之前升級成功。

---

## 規劃

看一看覺得最麻煩的其實是 UI 框架，目前使用的 BootstrapVue 並無 Nuxt3 版本，雖然有其他大神嘗試開發的[BoostrapVue Next](https://github.com/bootstrap-vue-next/bootstrap-vue-next)，但目前仍處於早期階段，覺得還無法直接使用。

使用其他已支援 Nuxt3 / Vue3 的 UI 框架如[Vuetify](https://vuetifyjs.com/en/)、[Vuestic](https://ui.vuestic.dev/)……應該能讓升級過程的困難程度降低許多，但因為私心想試試 Nuxt 官方的 Nuxt UI（順便了解一下 TailwindCSS），就決定把組件重寫了。

參考官方的[升級文件](https://nuxt.com/docs/migration/overview)後，決定第一步先從設定值開始改起，並順便升級有用到的模組。這次升級的作法在開完新分支之後，會直接先砍掉舊有專案所有檔案然後再慢慢搬移過來的作法，大致的步驟規劃如下：

1. 建立 Nuxt3 專案並同步設定值
2. 平行轉移模組，並檢視相關的設定值是否須修改，若是跟 component 有關的修改則先擱置，待確定 UI 框架、開始重刻元件後再一起處理。
3. 確定 UI 框架（這個可能要擺很後面了 XD）。

---

## Nuxt 設定值

首先從原本的`nuxt.config.js`中轉移非模組的設定值。

### 資料夾結構

除了原本的`static`要改名成`public`之外，其他的等要開始重刻元件再說。

### 基本設定

網站用到的基本設定值不多，變動也不大，就一起整理在這邊。雖然官方有 [Upgrade Guide](https://nuxt.com/docs/getting-started/upgrade#nuxt-2-to-nuxt-3) 可以看，但有些設定值沒有提到，我最終還是打開兩個版本的文件自己去對應起來。

```js
export default defineNuxtConfig({
  /* Nuxt 3只要直接使用generate指令就可以了，不用指定target。 */
  // target: 'static',

  /* Nuxt 3若使用Vite預設就是modern build，不須額外指定。 */
  // modern: 'client',

  /* publicRuntimeConfig要改用runtimeConfig.public */
  //   publicRuntimeConfig: {},
  runtimeConfig: {
    public: {},
  },

  /* router.base要改成app.baseURL */
  //   router: {
  //     base,
  //   },
  app: {
    baseURL,
  },
})
```

### Meta 設定

這部份也沒什麼太大差異，網站有用到的部份除了原本 Nuxt 2 中的`head`移到 Nuxt 3 之後要用`app`包起來以外，就是 meta 標籤的`hid`要改成使用`key`。

```js
export default defineNuxtConfig({
  //   head: {
  //     meta: [{ hid: 'charset', charset: 'utf-8' }],
  //   },
  app: {
    head: {
      /* 一些其他的設定值 */
      meta: [{ key: 'charset', charset: 'utf-8' }],
    },
  },
})
```

---

## Nuxt Content 模組設定

接下來是部落格最重要的驅動基底：Nuxt Content。

### 文章資料夾結構修改

原本`content`資料夾中下面的子資料夾結構是：

- `articles/年份/文章們.md`
- `draft/草稿們.md`

由於新版的 Nuxt Content 會自動為`content`資料夾下的文章建立 route，但我網址是統一讓文章的`slug`都接在網域後面，參考[官方文件](https://content.nuxt.com/usage/content-directory)修改如下：

- `_articles/年份/文章們.md`：「`_`」開頭的資料夾下的所有文件都不會自動產生 route
- `.draft/草稿們.md`：「`.`」開頭

### nuxt-content-git

這個模組沒什麼需要修改的，直接`npm install nuxt-content-git`然後在設定值中的`modules`啟用就可以了。

---

## 修改 PWA 模組

原有的`@nuxtjs/pwa`模組沒有開發 Nuxt 3 版本，要改用`@vite-pwa/nuxt`。這部份內容比較長，另寫一篇：<article-inner-link slug="nuxt3_vite_pwa"></article-inner-link>
