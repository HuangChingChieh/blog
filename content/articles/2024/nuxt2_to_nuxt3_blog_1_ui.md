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

## 暗黑模式

首先是暗黑模式，bootstrap5 內建[暗黑模式](https://getbootstrap.com/docs/5.3/customize/color-modes/#dark-mode)，使用方式也滿簡單的，就是直接在`html`標籤上加上`data-bs-theme="dark"`：

```html
<html data-bs-theme="dark"></html>
```

基本的元件若沒有用`text-white`或是`bg-white`之類的樣式覆寫，就會自動根據暗黑模式而更改了，若有需要特別區分出像這個部落格一樣的前景、背景色之類的，可以參考`node_modules/bootstrap/scss/variables-dark"`檔案，去使用已經內建的一些變數來簡單做出暗黑模式。

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

第二麻煩的則是 Directives，
