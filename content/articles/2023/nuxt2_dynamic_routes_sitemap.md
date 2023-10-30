---
title: 在Nuxt 2中建立動態routes的sitemap
img: 923/KaAGJw.png
tags: [nuxt, vue, sitemap]
category: frontend
---

Sitemap 雖然對網站來說非必要，但為了 SEO 考量通常都還是會建立。而在 Nuxt 2 中可以透過[@nuxt/sitemap](https://sitemap.nuxtjs.org/)模組來簡單建立 sitemap。但若遇到動態頁面，這個模組無法自動新增，官方文件要求使用者必須自行新增，而官方建議的作法以及網路上查到的方式好像都滿麻煩的，所以自己搞了一個小撇步出來，覺得頗方便，所以就紀錄下來。

<!--more-->

---

## 解決過程

### 官方建議？

首先，根據[官方文件](https://sitemap.nuxtjs.org/usage/sitemap#setup-a-sitemap)所說，模組本身只會預設建立固定頁面（也就是在路徑 `pages` 中建立的非動態頁面——也就是不使用 `_param.vue` 形式建立的頁面）的 sitemap：

> All static routes (eg. `/pages/about.vue`) are automatically add to the sitemap, but you can exclude each of them with the [`exclude`](https://sitemap.nuxtjs.org/usage/sitemap-options#exclude-optional---string-array) property.
>
> For dynamic routes (eg. `/pages/\_id.vue`), you have to declare them with the [`routes`](https://sitemap.nuxtjs.org/usage/sitemap-options#routes-optional---array--function) property. This option can be an array or a function. In addition, the routes defined in `generate.routes` will be automatically used for the sitemap.

然而官方建議的作法滿麻煩的：

```javascript [nuxt.config.js]
export default {
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
      '/page/1',
      '/page/2',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z',
      },
    ],
  },
}
```

也就是要自己去抓取動態頁面而且把可能會用到的動態參數自己填上去，然後做成陣列的形式回傳，若動態頁面不多或許還算容易，但若動態頁面不少或是參數很複雜，那可能就會很麻煩。上網查了一下，作法好像都差不多，所以就自己思考有沒有比較好的作法。

### 使用 Nuxt 的內建 crawler

後來想想，Nuxt 2 不是有內建 [crawler](https://v2.nuxt.com/docs/get-started/commands#static-deployment-pre-rendered) 來產生動態參數的靜態頁面嗎？如果在 Nuxt 2 的 [Generate Hooks](https://v2.nuxt.com/docs/internals-glossary/internals-generator#hooks) 中把抓到的 routes 放到一個全域變數，然後在 sitemap 模組在產生檔案時傳進去，就不用自己傳了吧？

### 實作

那麼就來實作吧，大致的概念就跟上面說的一樣，`nuxt.config.js`設定檔前面宣告一個陣列，在`generate:hooks`的時候存放到陣列中，並傳給 sitemap 模組：

```javascript [nuxt.config.js]
// 存放從generate hooks偷出來的routes
const routes = []

export default {
  // 從generate hooks偷routes出來給sitemap使用
  hooks: {
    generate: {
      route(data) {
        const { route } = data
        routes.push(data)
      },
    },
  },
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    // 直接使用routes
    routes,
  },
}
```

### 檢驗 sitemap

設定好之後執行`npm run generate`再檢查`dist/sitemap.xml`，以這個部落格為例子，就有看到出現下面的動態頁面網址，代表成功了：

```xml
<url>
  <loc>https://huangchingchieh.github.io/blog/pages/1</loc>
</url>
```

---

## 後記

其實有點疑問為何這個模組沒有整合 crawler，找了一下官方文件好像也沒說明，但總之自己亂搞弄出來一個解決方式了（？）。
