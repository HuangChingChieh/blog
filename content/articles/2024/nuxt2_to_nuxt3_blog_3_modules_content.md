---
title: 部落格Nuxt 2升級Nuxt 3（三）：Nuxt Content v1 → v2
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3, nuxt content]
category: frontend
---

在<article-inner-link slug="nuxt2_to_nuxt3_blog_2_settings">初步修改非模組的設定值</article-inner-link>之後，接著就要開始著手模組的升級，這部份是連同改寫為 composition api 一起做的，畢竟不可能只升級特定模組的用法而不去動到其他程式碼，但為了讓文章閱讀容易，就還是分模組來紀錄。

<!--more-->

那麼，首先是部落格最重要的驅動基底：Nuxt Content。

---

## 相關資料夾結構修改

第一步先來修改相關的資料夾結構。

### content 資料夾

原本`content`資料夾中下面的子資料夾結構是：

- `articles/年份/文章們.md`
- `draft/草稿們.md`

這部份的`draft`原本是透過查詢時直接排除，不過 Nuxt Content v2 可以透過前面加上一個`.`來讓整個資料夾及其下的文章「隱身」，參考[官方文件](https://content.nuxt.com/usage/content-directory)修改如下：

- `.draft/草稿們.md`

`articles`的部份就不用動了。

### components/global → components/content

若要在文章中直接使用元件，原本是放在`components/global`，Nuxt Content v2 中要改放在`components/content`裡面。

---

## nuxt-content-git

這個模組沒什麼需要修改的，直接`npm install nuxt-content-git`然後在設定值中的`modules`啟用就可以了，使用原因可以看之前的文章：<article-inner-link slug="nuxt2_content_git"></article-inner-link>

---

## 為文章新增 reading-time

在 Nuxt Content v1 時我使用`hooks`中的`content:file:beforeInsert`來動態計算文章的閱讀時間，不過新版可以直接透過新增 [remarkPlugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md) 來完成，首先先安裝 reading-time 的 plugin：

```bash
npm install -D remark-reading-time
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    markdown: {
      // 接著新增設定值
      remarkPlugins: ['remark-reading-time'],
    },
  },
})
```

這邊回壓到文章物件身上的`readingTime`會是物件，可以看自己需要取出對應的欄位來使用：

```json
{
  "text": "1 min read",
  "minutes": 1,
  "time": 60000,
  "words": 200
}
```

---

## 自定義元件

Nuxt Content v1 中我透過`content.markdown.highlighter`來將 markdown 解析出來的 code 區塊<article-inner-link slug="nuxt2_content_code_block_copy_paste">包上自己客製的元件來達成複製貼上程式碼功能</article-inner-link>，在 Nuxt Content v2 中可透過直接覆蓋設定值完成：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    markdown: {
      tags: {
        pre: 'ArticleCode',
      },
    },
  },
})
```

方便好多 XD。

---

## 自行補上 slug

在 Nuxt Content v1 中，文章本身的檔名會變成`slug`屬性，但在 v2 中則是使用`_id`而且會是串上文章所屬路徑的，例如這樣：

```json
{
  "_id": "content:articles:2024:nuxt2_to_nuxt3_blog_3_modules_content.md"
}
```

由於我原本使用滿多`slug`來做事，若要修改為使用`_id`變動會太大，所以這邊使用 [Hooks](https://content.nuxt.com/recipes/hooks) 來自己補上`slug`的欄位，根據官方文件需要新增一個檔案`server/plugins/content.js`：

```js [server/plugins/content.js]
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    const slug = file._path.split('/').pop()
    file.slug = slug
  })
})
```

---

## 未穩定的搜尋功能

Nuxt Content v2 有內建滿強大的全文模糊搜尋， v3 的搜尋功能雖然目前仍是「實驗（experimental）」階段，但試做之後沒啥問題，這邊紀錄一下設定跟使用方式。

### 啟用搜尋功能

那麼首先是啟用搜尋功能，修改`nuxt.config.ts`：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  content: {
    experimental: {
      // 官方文件是這樣寫，但這樣會無法通過ts檢查。
      // search: true,
      search: {
        indexed: true,
      },
    },
  },
})
```

### 搜尋文章寫法

搜尋也很容易，以下為自己簡單寫的範例：

```vue
<template>
  <div>
    <input v-model="keyword" type="text" />
    <button type="button" @click="refresh">搜尋</button>

    <hr />
    {{ results }}
  </div>
</template>

<script setup>
const keyword = ref('')

const { data: results, refresh } = await useAsyncData(
  `search:${keyword.value}`,
  () => searchContent(keyword),
  {
    server: false,
    immediate: false,
    default: () => [],
  }
)
</script>
```

會回傳像下面這樣結果的陣列，可以根據需要使用欄位。

```json
[
  {
    "id": "/articles/2023/buy_me_a_tea#關於隨機手札",
    "score": 2.2401858303726176,
    "terms": ["fedora"],
    "queryTerms": ["fedore"],
    "match": { "fedora": ["content"] },
    "title": "關於隨機手札",
    "content": "……含有關鍵字的文章內容",
    "titles": []
  }
]
```

---

## queryContent 與 useAsyncData 的眉角

在將原本用到`$content`查詢文章的部份改寫成`queryContent`時踩了一個坑，一度讓我懷疑自己是不是沒搞清楚`async`以及`await`的用法，後來上網查資料才發現原來是一個[「特別行為」](https://github.com/nuxt/content/issues/1368)。

簡單來說，就是你不能在`useAsyncData`的回呼函式中`await`一個以上的非同步函式，所以像我原本在文章頁中同時查詢文章本身以及其相關文章的作法是不可行的，會報錯，例如像這樣：

```vue
<script setup>
await useAsyncData(slug, async () => {
  await queryContent()
  await queryContent()
})
</script>
```

所以，更好的作法就是**每個`useAsyncData`只包一個`queryContent`**：

```vue
<script setup>
const a = await useAsyncData(slug, () => queryContent())
const b = await useAsyncData(slug, () => queryContent())
</script>
```

那如果要從陣列一次平行調用很多的`queryContent`呢？例如我從自定義的數個文章分類要一次平行查詢，那就要用`Promise.all`把他們包裝起來，然後`await`這個`Promise.all`（這真的滿反直覺的……而且文件都沒寫 QQ），像這樣：

```vue
<script setup>
const { data: categories } = await useAsyncData('categories', async () => {
  await Promise.all(
    Object.keys(categories).map((category) => queryContent().find())
  )

  return categories
})
</script>
```

---

## 後記

Nuxt Content 的部份大概就是這樣，除了踩了一個坑以外大致都還行，後面在升級其他模組時也有踩到一些坑，雖然覺得耗費心神，但踩坑也代表學了點新東西（吧）。
