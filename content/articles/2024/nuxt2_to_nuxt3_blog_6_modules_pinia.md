---
title: 部落格Nuxt 2升級Nuxt 3（六）：Vuex → Pinia
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3, vuex, pinia]
category: frontend
---

[Nuxt 3 的狀態管理套件從 Nuxt 2 的 Vuex 改成了 Pinia](https://nuxt.com/docs/getting-started/state-management#using-third-party-libraries)，兩者差異不算大，部落格用到的功能也不多。其中比較要注意的就是 Nuxt 3 不再提供`nuxtServerInit`方法，若需要在 server 端初始化一些資料的話，就要透過其他作法來完成。

<!--more-->

本來以為升級起來不會太困難，但踩了個小坑……。

---

## 寫法差異

這部份因為滿容易的，這邊僅列出官方文章做個參考紀錄：

- [Nuxt.js 整合指引](https://pinia.vuejs.org/ssr/nuxt.html)
- [Migrating from Vuex ≤ 4](https://pinia.vuejs.org/cookbook/migration-vuex.html)

---

## 實作 nuxtServerInit

之前在 Nuxt 2 中使用`nuxtServerInit`，是因為我會在此處先處理並紀錄一些 metada（例如各分類的文章數量與頁數）以供元件使用，Nuxt 3 並無提供此方式，參考網路上文章之後可以透過「只在 server 端執行的`plugins`」來完成：

首先在主要的`store`下新增`index.js`：

```js [store/index.js]
import { defineStore } from 'pinia'

import { getCategories, setPageCount } from '~/utils/getCategories'
import getTags from '~/utils/getTags'

export const useMainStore = defineStore('main', {
  state: () => ({
    someState: '',
  }),
  actions: {
    nuxtServerInit() {
      // 這邊做原本nuxtServerInit要做的事
    },
  },
})
```

接著新增只在 server 端執行的 plugin，可以在命名後加上後綴字`.server.js`來標明：

```js [plugins/init.server.js]
import { useMainStore } from '~/store'

export default defineNuxtPlugin(async ({ $pinia }) => {
  const someAsyncData = await someAsyncFn()

  // 這邊引用前段宣告的store，記得要把context的$pinia傳進去。
  // 可參考：https://pinia.vuejs.org/ssr/nuxt.html#Awaiting-for-actions-in-pages
  const mainStore = useMainStore($pinia)
  mainStore.nuxtServerInit()
})
```

這樣就完成囉。

---

## 在 SSR 端修改 state 的眉角

這中間踩了一個坑，本來以為是 Bug 但其實不是。

總之是這樣的，我在頁面中去修改了某個在 store 中的屬性，而在 layout 中順序比`<slot />`（也就是`<NuxtPage />`的置入點）前面的元件，若依賴了這個屬性去做`v-if`的顯示，則會在直接進入頁面時出現`Hydration node mismatch`的警告，暗示我 server 端與 client 端的元件長得不一樣（也就是資料不一致）。

```vue [layouts/default.vue]
<template>
  <div>
    <!-- 這裡面有個元素依賴了store的state切換顯示 -->
    <!-- TestHeader會出現Hydration node mismatch的問題 -->
    <TestHeader />

    <!-- 我在頁面元件中修改了store的state -->
    <NuxtPage />

    <!-- 放在NuxtPage後面的TestFooter不會出現同樣問題 -->
    <TestFooter />
  </div>
</template>

<script setup>
import TestHeader from '~/components/test-header.vue'
import TestFooter from '~/components/test-footer.vue'
</script>
```

幾經測試之後，發現好像是元件解析順序的問題，也在 Nuxt Github 的 Discussions 裡面有發現[相關討論](https://github.com/nuxt/nuxt/discussions/17011)：

> This is a common SSR gotcha. The issue is that on SSR, Vue renders the HTML from top to bottom, outside to inside. And if you only fetch some data as you are rendering the 'inner' part of the page, it doesn't rerender the layout at the top of the page. (On client-side it's fine as can be reactive.) So if you have a common piece you rely on for rendering your page, make sure to fetch it in the layout, a plugin, or a middleware - somewhere outside of the rendering process.

沒錯，如 Nuxt 團隊的領導人所說：這是一個「common SSR gotcha」（常見的 SSR 問題），無法被解決，只能在開發時自己小心了（是說 Nuxt 2 沒這問題呀……還是只是沒 WARN 而已？）。

目前因為是 SEO 不敏感的區塊所以還好，解法是直接先把那一個區塊用`<ClientOnly>`包起來，只是未來若遇到這樣的情境，而區塊剛好是 SEO 敏感的區塊……可能就要想想怎麼做了。

---

## 後記

大概是這樣，只能說 Nuxt 2 升 3 的坑其實不少啊……（顯示為精疲力盡）。
