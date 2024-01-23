---
title: 部落格Nuxt 2升級Nuxt 3（一）：bootstrapVue置換成自製的bootrap5元件
img: 924/Ia2nWi.png
tags:
  [
    blog,
    nuxt,
    vue,
    nuxt2,
    nuxt3,
    bootstrapVue,
    bootstrap 4,
    bootstrap 5,
    bootstrap,
  ]
category: frontend
---

如<article-inner-link slug="nuxt2_to_nuxt3_blog_0_intro">之前規劃</article-inner-link>，部落格升級 Nuxt3 的第一步是先把 bootstrapVue 抽換成自己實做的 bootstrap5。這篇是紀錄過程中覺得特別困難或是需要研究的部份。

<!--more-->

---

## Modal

元件中比較麻煩的是 Modal，原生的 Bootstrap 的 Modal 會在`body`加上一個`div.modal-backdrop`元素作為底層，原本的`.modal`元素則保留在原本的位置，如果遇到上層元素有`position: sticky;`或是`position: absolute`等等會用到`z-index`的 css 屬性，會導致`.modal`元素因為跟著上層元素的`z-index`計算而被`div.modal-backdrop`遮住。

例如：

```html
<header class="position-stickty" style="z-index: 10;">
  <div class="modal"></div>
</header>
```

原本 bootstrapVue 的作法，是把`.modal-backdrop`元素連同`.modal`元素一起加到`body`裡面，使其脫離可能受影響的父層，猜想這邊應該是使用`$mount`去做處理。但因為部落格用到的 modal 元件很少而且全部都在 header 裡面（基本上等於全域），所以就乾脆移轉到`layouts/default.vue`元件裡了，開關則從 store 做處理。

畢竟之後還會再更換 UI 框架，這邊就簡單處理。

---

## Directives

第二麻煩的則是 directives，部落格用到的 bootstrapVue directives 有兩個：[Visible](https://bootstrap-vue.org/docs/directives/visible)、[Scollspy](https://bootstrap-vue.org/docs/directives/scrollspy)。

### Visible

因為之前已經有使用 IntersectionObserver 實做延遲載入的經驗，自己覺得 Visible 不算太難。自己寫起來大概長這樣：

```js [bVisible.js]
let intersectionObserver = null

export default {
  inserted(el, { value }) {
    if (typeof value === 'function') {
      intersectionObserver = new IntersectionObserver((entries) => {
        value(entries[0].intersectionRatio > 0)
      })

      intersectionObserver.observe(el)
    }
  },
  unbind() {
    if (
      intersectionObserver &&
      intersectionObserver instanceof IntersectionObserver
    ) {
      intersectionObserver.disconnect()
    }
  },
}
```

### Scrollspy

Scrollspy 是 bootstrap [原生內建的功能](https://getbootstrap.com/docs/5.3/components/scrollspy/)，主要目的是用來偵測滾動的元素 ID 若與在`.nav .nav-item .nav-link`裡面`href`的`hash`相符的話，就給予`active`的 class。

自己寫出來大概長這樣：

```js [bScrollspy.js]
let Scrollspy = null
let scrollSpy = null

export default {
  inserted(target) {
    if (process.client) {
      if (!Scrollspy) Scrollspy = require('bootstrap/js/dist/scrollspy')
      scrollSpy = new Scrollspy(document.body, { target })
    }
  },
  unbind() {
    scrollSpy.dispose()
  },
  componentUpdated() {
    scrollSpy.refresh()
  },
}
```

因為 Scrollspy 包含 client 端的程式碼操作，要判斷`process.client`才初始化，否則使用`npm run dev`或是`npm run generate`時會有錯誤。

---

## 暗黑模式

最後是暗黑模式，bootstrap5 內建[暗黑模式](https://getbootstrap.com/docs/5.3/customize/color-modes/#dark-mode)，使用方式也滿簡單的，就是直接在`html`標籤上加上`data-bs-theme="dark"`：

```html
<html data-bs-theme="dark"></html>
```

基本的元件若沒有用`text-white`或是`bg-white`之類的樣式覆寫，就會自動根據暗黑模式而更改了，若有需要特別區分出像這個部落格一樣的前景、背景色之類的，可以參考`node_modules/bootstrap/scss/variables-dark"`檔案，去使用已經內建的一些變數來簡單做出暗黑模式。

---

## 後記

在部落格升級的過程中，自己覺得比較困難或要特別注意的就是這幾個了。其他像原本代表左右的`l`與`r`要換成`start`與`end`、圓角使用的`rounded`大小不再是使用`sm`/`lg`這種而是轉用數字……之類的小事，直接看[官方的升級指引](https://getbootstrap.com/docs/5.3/migration/)就 OK 了。
