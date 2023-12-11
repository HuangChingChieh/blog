---
title: Nuxt2中的BootstrapVue TreeShaking
img: 924/Oqxy2g.jpg
tags: [vue, nuxt, bootstrap]
category: frontend
---

Bootstrap 是個很好用的 UI 框架，在 Vue 生態系中主要由 Bootstrap Vue 去作銜接，然而在專案中幾乎不會完全使用到 Bootstrap 的所有功能，這時如果把不必要的 css / js 編譯移除，可以降低編譯後專案的大小，[這種行為也被稱為 Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)。本篇紀錄了自己在 Nuxt2 中使用 Bootstrap Vue 時，Tree Shaking 的一些步驟。

<!--more-->

---

## JS 部份的 Tree Shaking

雖然[官方文件](https://bootstrap-vue.org/docs#tree-shaking-with-nuxtjs)有提到 Bootstrap Vue 原生支援 Nuxt2 設定檔的 Tree Shaking 方式，但後來自己測試了一下，若自行引入 SCSS，JS 元件在需要時才透過最原始的方式`import`引入並註冊，似乎才是最能降低編譯後專案大小的方式。

例如需要使用`b-badge`元件時，再自行引入並註冊：

```vue
<template>
  <b-badge variant="secondary">
    #<slot>{{ tagName }}</slot>
  </b-badge>
</template>

<script>
import { BBadge } from 'bootstrap-vue'
export default {
  components: { BBadge },
  props: {
    tagName: {
      type: String,
      default: '',
    },
  },
}
</script>
```

透過這種方式使用 Bootstrap Vue，`nuxt.config.js`中是可以完全不做相關設定的，當然開發時都要自己手動註冊要用的元件，會比較麻煩，但因為這樣我就把這個部落格最後編譯的大小又降低了。

---

## CSS 部份的 Tree Shaking

CSS 部份官方則沒有說明文件，算是我自己東搞西弄摸出來的，作個參考。

### 啟用 SASS 支援

首先，因 Bootstrap Vue 使用 SASS 編寫樣式，參考 Nuxt[官方文件](https://nuxtjs.org/docs/directory-structure/assets#sass)啟用 SASS 的支援：

```bash
npm install --save-dev sass sass-loader@10
```

### 建立客製樣式檔

接著建立自己的樣式檔，這邊建立在`/assets/main.scss`以及`/assets/custom.scss`中。

```scss [/assets/custom.scss]
/* Custom Settings Here */

@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap-vue/src/variables';
```

```scss [/assets/main.scss]
@import 'custom';

/* Bootstrap Tree Shaking */
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/images';
@import '~bootstrap/scss/code';
@import '~bootstrap/scss/grid';
// @import "~bootstrap/scss/tables";
@import '~bootstrap/scss/forms';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/transitions';
// @import "~bootstrap/scss/dropdown";
// @import "~bootstrap/scss/button-group";
// @import "~bootstrap/scss/input-group";
// @import "~bootstrap/scss/custom-forms";
// @import "~bootstrap/scss/nav";
// @import "~bootstrap/scss/navbar";
@import '~bootstrap/scss/card';
// @import "~bootstrap/scss/breadcrumb";
// @import "~bootstrap/scss/pagination";
// @import "~bootstrap/scss/badge";
// @import "~bootstrap/scss/jumbotron";
// @import "~bootstrap/scss/alert";
// @import "~bootstrap/scss/progress";
// @import "~bootstrap/scss/media";
// @import "~bootstrap/scss/list-group";
// @import "~bootstrap/scss/close";
// @import "~bootstrap/scss/toasts";
// @import "~bootstrap/scss/modal";
// @import "~bootstrap/scss/tooltip";
// @import "~bootstrap/scss/popover";
// @import "~bootstrap/scss/carousel";
// @import "~bootstrap/scss/spinners";
// @import "~bootstrap/scss/print";

// 將~bootstrap/scss/_utilities.scss展開
@import '~bootstrap/scss/utilities/align';
@import '~bootstrap/scss/utilities/background';
@import '~bootstrap/scss/utilities/borders';
@import '~bootstrap/scss/utilities/clearfix';
@import '~bootstrap/scss/utilities/display';
@import '~bootstrap/scss/utilities/embed';
@import '~bootstrap/scss/utilities/flex';
@import '~bootstrap/scss/utilities/float';
@import '~bootstrap/scss/utilities/interactions';
@import '~bootstrap/scss/utilities/overflow';
@import '~bootstrap/scss/utilities/position';
@import '~bootstrap/scss/utilities/screenreaders';
@import '~bootstrap/scss/utilities/shadows';
@import '~bootstrap/scss/utilities/sizing';
@import '~bootstrap/scss/utilities/spacing';
@import '~bootstrap/scss/utilities/stretched-link';
@import '~bootstrap/scss/utilities/text';
@import '~bootstrap/scss/utilities/visibility';

/* Bootstrap Vue Tree Shaking */
@import '~bootstrap-vue/src/utilities';
@import '~bootstrap-vue/src/custom-controls';
@import '~bootstrap-vue/src/icons/index';

// 將~bootstrap-vue/src/components/index.scss展開
// @import "~bootstrap-vue/src/components/avatar/index";
// @import "~bootstrap-vue/src/components/calendar/index";
@import '~bootstrap-vue/src/components/card/index';
// @import "~bootstrap-vue/src/components/dropdown/index";
// @import "~bootstrap-vue/src/components/form-checkbox/index";
// @import "~bootstrap-vue/src/components/form-datepicker/index";
// @import "~bootstrap-vue/src/components/form-file/index";
@import '~bootstrap-vue/src/components/form-input/index';
// @import "~bootstrap-vue/src/components/form-radio/index";
// @import "~bootstrap-vue/src/components/form-rating/index";
// @import "~bootstrap-vue/src/components/form-spinbutton/index";
// @import "~bootstrap-vue/src/components/form-tags/index";
// @import "~bootstrap-vue/src/components/form-timepicker/index";
@import '~bootstrap-vue/src/components/input-group/index';
// @import "~bootstrap-vue/src/components/media/index";
// @import "~bootstrap-vue/src/components/modal/index";
// @import "~bootstrap-vue/src/components/nav/index";
// @import "~bootstrap-vue/src/components/navbar/index";
@import '~bootstrap-vue/src/components/pagination-nav/index';
@import '~bootstrap-vue/src/components/pagination/index';
// @import "~bootstrap-vue/src/components/popover/index";
// @import "~bootstrap-vue/src/components/sidebar/index";
// @import "~bootstrap-vue/src/components/skeleton/index";
// @import "~bootstrap-vue/src/components/table/index";
// @import "~bootstrap-vue/src/components/time/index";
// @import "~bootstrap-vue/src/components/toast/index";
// @import "~bootstrap-vue/src/components/tooltip/index";
```

其中`main.scss`不需要的就註解掉，需要使用到再把註解打開。

### 引入自行編寫樣式

最後參考[官方文件](https://bootstrap-vue.org/docs#using-custom-bootstrap-scss)，設定`nuxt.config.js`使用我們自己編寫的樣式檔：

```javascript [nuxt.config.js]
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],
}
```
