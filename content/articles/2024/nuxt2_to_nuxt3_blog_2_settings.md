---
title: 部落格Nuxt 2升級Nuxt 3（二）：基本架構與設定值
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3]
category: frontend
---

在<article-inner-link slug="nuxt2_to_nuxt3_blog_1_ui">抽換 UI 框架</article-inner-link>之後，接下來就開始真正的升級之旅了。參考[官方的升級指南](https://nuxt.com/docs/migration/overview)，第一步就是先修改設定值。

<!--more-->

---

## 非模組的設定值

那麼，首先從原本的`nuxt.config.js`中轉移非模組的設定值。

### 基本設定

網站用到的基本設定值不多，變動也不大，就一起整理在這邊。雖然官方有 [Upgrade Guide](https://nuxt.com/docs/getting-started/upgrade#nuxt-2-to-nuxt-3) 可以看，但有些設定值沒有提到，我最終還是打開兩個版本的文件自己去對應起來。

```js
export default defineNuxtConfig({
  /* Nuxt 3 只要直接使用generate指令就可以了，不用指定target。 */
  // target: 'static',

  /* Nuxt 3 若使用Vite預設就是modern build，不須額外指定。 */
  // modern: 'client',

  /* Nuxt 3 預設會自動解析components/資料夾下的元件 */
  // components: true,

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

  /* 原本的static可以選擇改名成public或是於設定值中指定，這邊保留資料夾名稱並設定。 */
  dir: {
    public: 'static',
  },

  /* global css直接平移即可 */
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],

  /* 原本的style-resources模組可透過vite內建功能完成 */
  // styleResources: {
  //   // your settings here
  //   scss: ['~/assets/css/custom.scss'],
  //   // hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData(source: string, fp: string) {
            // 由於這個設定值也會影響編譯scss檔案，需要排除。
            return fp.endsWith('scss')
              ? source
              : `@import "~/assets/css/custom.module.scss"; ${source}`
          },
        },
      },
    },
  },

  /* 原本Webpack中的extractCSS對應的設定是將features.inlineStyles設為false */
  // build: {
  //   extractCSS: true,
  // },
  features: {
    inlineStyles: false,
  },
})
```

### Head 設定

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

## app.html → app.vue

Nuxt 2 有一個可自訂的`app.html`檔案，如果要簡單新增一些靜態檔案，可以透過直接新增並編輯這個檔案來完成，但 Nuxt3 之後只有`app.vue`可以使用，要稍微調整一下。

### GTM / Google Analytics

第一個通常會用到這檔案的功能就是第三方的數據分析了，這個可以直接使用設定值中的`app.head`來處理：

```ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-ABCDEFGHI1',
          // 設定script優先順序以滿足GTM設置的要求
          tagPriority: 'critical',
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
    
          gtag('config', 'G-ABCDEFGHI1')`,
          // 設定script優先順序以滿足GTM設置的要求
          tagPriority: 'critical',
        },
      ],
    },
  },
})
```

### 額外的元素

自己還有用到的就是之前<article-inner-link slug="mobile_chrome_sticky_bottom"></article-inner-link>提到的解決辦法：在`body`之下新增一個`<div style="position: fixed;"></div>`。這個在`app.vue`中可以直接透過`<Teleport />`元件來處理：

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Teleport to="body">
    <!-- 解決底部sticky問題 -->
    <div style="position: fixed"></div>
  </Teleport>
</template>
```
