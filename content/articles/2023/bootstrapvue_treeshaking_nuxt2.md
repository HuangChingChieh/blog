---
title: Nuxt2中的BootstrapVue TreeShaking
description: 本篇紀錄了自己在Nuxt2中使用Bootstrap Vue時，Tree Shaking的一些步驟。
img: https://lh3.googleusercontent.com/pw/AL9nZEXKDvnXMVmeVfQhxc32l16jE3K1sDNLZ2Q9F2NVr4aZMG2aAvQzVBp7deJpyX_3d31jUigXUw6peFTlEMR3uZrDCO5Ip5uIMwfYppX5QCvMrpl29hv4PXfcLX8dpQWHRgT-MgItKrLeVKI51tm6LAtNqA=w1172-h704-no
tags: [vue, nuxt, bootstrap]
---

Bootstrap 是個很好用的 UI 框架，在 Vue 生態系中主要由 Bootstrap Vue 去作銜接，然而在專案中幾乎不會完全使用到 Bootstrap 的所有功能，這時如果把不必要的 css / js 編譯移除，可以降低編譯後專案的大小，[這種行為也被稱為 Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)。本篇紀錄了自己在 Nuxt2 中使用 Bootstrap Vue 時，Tree Shaking 的一些步驟。

---

## JS 部份的 Tree Shaking

根據[官方文件](https://bootstrap-vue.org/docs#tree-shaking-with-nuxtjs)，Bootstrap Vue 有原生支援 Nuxt2 設定檔的 Tree Shaking 方式：

```javascript [nuxt.config.js]
module.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'ToastPlugin',
      'ModalPlugin',
    ],
    directivePlugins: [
      'VBPopoverPlugin',
      'VBTooltipPlugin',
      'VBScrollspyPlugin',
    ],
  },
}
```

其中元件各自的 Plugins 名稱，皆可在官網各元件頁面的最底部找到，根據自己的需求引入即可，要注意的是有些元件之間有依賴關係，引入後若行為不符合自己的想像，可能就是有漏掉，要再小心。

也可針對元件本身作引入：

```javascript [nuxt.config.js]
odule.exports = {
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BFormInput',
      'BButton',
      'BTable',
      'BModal',
    ],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy'],
  },
}
```

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
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],
}
```
