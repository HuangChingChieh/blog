---
title: Nuxt3中使用vite-pwa實現pwa功能
img: 923/XCrOen.png
tags: [nuxt, nuxt3, vue, pwa, vite-pwa]
category: frontend
---

之前在 Nuxt2 時可以滿無痛的使用 [nuxt/pwa](https://pwa.nuxtjs.org/) 來為網站新增 PWA 功能，但因為此模組沒有開發 Nuxt3 版本，最近開始接觸 Nuxt3 後得尋找替代品，在[官方模組清單頁面中搜尋 pwa](https://nuxt.com/modules?q=pwa) 只發現一個模組：vite-pwa-nuxt。

<!--more-->

<article-note>關於 PWA，可參考[MDN 文件](https://developer.mozilla.org/zh-TW/docs/Web/Progressive_web_apps)。</article-note>

雖然號稱是「Zero-config」 PWA Plugin for Nuxt 3 ，但實際套用之後發現還是要做一些設定，而且這個模組的文件……真的有點混亂，所以就寫這篇文章紀錄一下。

---

## 安裝與基本設定

如模組的名稱所示，這個模組只能跟 vite 一起使用，若是使用 webpack 就要找其他解決方案了。首先是安裝，這邊我使用 npm。

```bash
npm install -D @vite-pwa/nuxt
```

接著引用模組，這個跟其他 Nuxt3 模組差不多。然後根據官方文件填上一些需要的基本值。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    // 設定是否有更新時自動更新，因為我的網站只是單純展示用，直接設定autoUpdate。
    registerType: 'autoUpdate',
    // 設定是否要在開發的時候（npm run dev）啟用pwa功能，為了方便測試，我是把他開啟。
    devOptions: {
      enabled: true,
    },
    // pwa的描述檔
    manifest: {
      name: '網站名稱',
      short_name: '網站名稱',
      description: '網站描述',
      lang: 'zh-Hant-TW',
      theme_color: '#000000',
    },
  },
})
```

---

## ICON 設定

之後一些設定都會用到 icon，所以先來設定。

之前 Nuxt2 的 nuxt/pwa 模組可以在編譯時從一張源圖自動產生 pwa 所有需要的 icon，但 vite-pwa 需要先自己手動產生（或是把產生的部份寫成程式整合到編譯流程）。先用 npm 安裝[官方提供的 icon 產生工具](https://vite-pwa-org.netlify.app/assets-generator/cli.html)：

```bash
npm install -D @vite-pwa/assets-generator
```

接著把指令放到 package.json 中，這裡使用模組內建的`minimal-2023`設定值來產生 icon 圖組。

```json
{
  "scripts": {
    // 這裡的public/icon.png要改成源圖路徑
    "generate-pwa-assets": "pwa-assets-generator --preset minimal-2023 public/icon.png"
  }
}
```

### 額外設定值(選擇性)

因為官方的 icon 產生工具在產生時會給 icon 一個 [padding](https://vite-pwa-org.netlify.app/assets-generator/cli.html#png-padding)，產生出來的圖會有白邊（猜測是預防在各種圖案形狀時被截掉），覺得很醜，決定額外設定為 0。首先在專案的根目錄新增`pwa-assets.config.ts`檔案：

```ts [pwa-assets.config.ts]
import {
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

// 把設定值的icon padding都設為0
preset.apple.padding = 0
preset.maskable.padding = 0
preset.transparent.padding = 0

export default defineConfig({
  preset,
})
```

### 執行指令

準備好源圖放在對應的路徑之後，就可以執行指令：

```bash
npm run generate-pwa-assets
```

執行完之後會印出 icon 的設定，再把他複製過去`nuxt.config.ts`裡面。

```js [nuxt.config.ts]
export default defineNuxtConfig({
  pwa: {
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  modules: ['@vite-pwa/nuxt'],
})
```

icon 的部份就完成囉。

---

## META 設定

根據官方文件所述，PWA 的基本需求需要在網站首頁有以下`meta`標籤：

```html
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>My Awesome App</title>
  <meta name="description" content="My Awesome App description" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
  <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
  <meta name="theme-color" content="#ffffff" />
</head>
```

因此要新增對應的 meta 設定，這邊設定在`nuxt.config.ts`中：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    head: {
      title: '網站名稱',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: '網站描述', content: '網站描述' },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: `/favicon.ico`,
        },
        {
          rel: 'apple-touch-icon',
          // 這裡使用前一段@vite-pwa/assets-generator產生出來的圖片路徑
          href: `/pwa-192x192.png`,
        },
        {
          rel: 'mask-icon',
          // 這裡使用前一段@vite-pwa/assets-generator產生出來的圖片路徑
          href: `/maskable-icon-512x512.png`,
          content: '#ffffff',
        },
      ],
    },
  },
})
```

---

## 在根層級引入 vite-pwa 的 manifest 元件

最後一步就是在根層級（例如`app.vue`或是全域使用的`layouts/default.vue`）引入`<VitePwaManifest />`或是`<NuxtPwaManifest />`。我是放在`app.vue`：

```vue [app.vue]
<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

這樣就大功告成囉，可以試試看`npm run dev`，看看 Chrome 有沒有出現「安裝」圖示，有的話就代表設定成功。

---

## 後記

不知道為什麼，Nuxt3 的模組只要是非官方開發的，文件的複雜度感覺都升了一個層級……，想到這部落格也要找時間升上 Nuxt3 就覺得頭很痛啊。
