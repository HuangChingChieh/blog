---
title: 在Nuxt Content v1中實現程式碼區塊複製貼上功能
img: 923/YRlYZO.jpg
tags: [nuxt, nuxt2, nuxt content v1, nuxt content, markdown]
category: frontend
---

用 Nuxt Content 作為部落格的基底讓我最開心的部份，就是 markdown 中的程式碼區塊了，自動上色、格式化、支援的語言非常多，這是很多部落格平台都無法提供的，但若需要程式碼複製貼上功能，就得自己額外處理。

這篇文章紀錄了自己從查資料最後搞出來的一些過程，最後是透過在`nuxt.config.js`中自訂程式碼區塊處理器來實現。

<!--more-->

---

## 用元件把程式碼區塊包起來

初步的想法是用一個元件在 markdown 中把程式碼區塊包起來，再把`slot`外面那層`div`填上`ref`，這樣就可以去抓裡面的文字內容拿來寫入剪貼簿。自己寫出來大概是長這樣：

```vue [article-code.vue]
<template>
  <div>
    <div>
      <button @click="copyCode" variant="link">複製程式碼</button>
    </div>

    <div ref="code">
      <!-- markdown中程式碼嵌入的地方 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyCode() {
      if (this.copied) return

      const { code } = this.$refs

      if (navigator.clipboard?.writeText) {
        const toCopyCode = code.innerText
        navigator.clipboard.writeText(toCopyCode)
      } else {
        const range = document.createRange()
        range.selectNode(code)

        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)

        document.execCommand('copy')
        selection.removeAllRanges()
      }
    },
  },
}
</script>
```

而把元件寫在 markdown 檔案會長這樣：

````markdown [article.md]
<article-code>

```bash
sudo dnf update -y
```

</article-code>
````

可以看到因為 markdown 解析的關係，元件標籤與程式碼區塊之間上下還要再空一行。

因為每次寫程式碼區塊的時候都要嵌入元件，若文章有大量或是連續的程式碼區塊，閱讀性會降低很多，最後看到頭很痛。後來就找找有沒有辦法在處理程式碼區塊產生 html 時，順便用元件包起來的方法，這樣就不用一直自己額外包起來，後來查到還真的有。

---

## 自訂程式碼處理器

在 Nuxt Content v1 中有一個設定值`markdown.highlighter`，可以[自己決定程式碼被解析後的外層 HTML 結構](https://content.nuxt.com/v1/getting-started/configuration#markdownhighlighter)，官方[使用了 highlight.js 以及 shiki 作為示範](https://content.nuxt.com/v1/community/snippets#custom-highlighter)，看了看之後滿喜歡 shiki 的，所以就使用 shiki。

```js [nuxt.config.js]
import shiki from 'shiki'

export default {
  content: {
    markdown: {
      async highlighter() {
        const highlighter = await shiki.getHighlighter({
          theme: 'nord',
        })

        return (rawCode, lang, { fileName }, { h, node, u }) => {
          const highlightedCode = highlighter.codeToHtml(rawCode, lang)

          const children = []
          children.push(u('raw', highlightedCode))

          return h(
            node,
            'article-code',
            {
              className: 'nuxt-content-highlight',
              fileName,
              lang,
            },
            children
          )
        }
      },
    },
  },
}
```

在這邊解析完後產生的 html 會再被 Nuxt 處理，所以可以插入 vue component，也可以直接把`fileName`或`lang`作為 props 傳遞給元件，自訂性更高。

---

大概就是這樣了！最一開始是想說有沒有內建的方式可以簡單實作這功能，查了一下好像沒查到，所以就自己動手搞了，幸好也沒有太複雜。
