---
title: 部落格Nuxt 2升級Nuxt 3：前言
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3]
category: frontend
---

從去年年初開始建置的這個部落格網站，邊寫文章的同時陸陸續續補上功能後，大概到上個月才終於像是有個部落格的樣子。但由於 [Nuxt2 即將在 2024/06/30 停止官方支援](https://v2.nuxt.com/lts#expecting-to-stay-on-nuxt-2)，而作為基底的 [Vue2 更是在 2023/12/31 已停止官方支援](https://v2.vuejs.org/eol/)，所以……想說要做的新功能可能先放著，先把部落格從 Nuxt2 升級到 Nuxt3 比較好。

<!--more-->

大概做了一些研究覺得是個浩大工程，所以想說來紀錄一下升級的艱辛（？）過程，希望趕得及在 Nuxt2 結束生命週期之前升級成功。

---

## 規劃

首先是事前規劃的部份，說是規劃也不算是，就是稍微想一下怎麼做會比較順一點。

### UI 框架的解耦處理

首先呢，看一看官方的升級文件後再回來看自己的部落格，覺得升級過程中最麻煩的應該是 UI 框架。

目前使用的 BootstrapVue 並無 Nuxt3 版本，雖然有其他大神嘗試開發的[BoostrapVue Next](https://github.com/bootstrap-vue-next/bootstrap-vue-next)，但仍處於早期階段，覺得還無法直接使用於正式環境。若使用其他已支援 Nuxt3 / Vue3 的 UI 框架如[Vuetify](https://vuetifyjs.com/en/)、[Vuestic](https://ui.vuestic.dev/)，就可能需要連同元件的結構一起大翻修，考慮到元件的使用方式可能不一樣、所制定的 scss 變數也不同，一次要全部汰換還是太花時間。

後來想想，決定先把目前 bootsrapVue 的部份抽換成自己實做的 bootstrap5，藉此解耦 UI 框架與 Vue2 的依賴以降低升級 Nuxt3 的痛苦，並且保留升級後才選擇 UI 框架的機會。

### 架構與模組的升級

UI 框架解決之後，下一步就是升級架構，這部份猜想主要的阻力應該會是調整模組以對應 Nuxt3 中的使用方式，但覺得有文件參考的話應該都還好，此階段也會順便把原本的 options api 模式改寫成新的 composition api。

### 改寫為 TypeScript

接著便可以開始把元件改寫為 TypeScript，一方面是單純自己想跟上目前的潮流（？），一方面是之前稍微玩過 TypeScript，覺得 ts 自動完成的完整程度很驚人，對於開發過程助益不小。

### UI 框架的挑選？

整個都結束後，最後就可以來挑 UI 框架，私心是希望到時 BoostrapVue Next 已有正式版……這樣過程應該會比較不痛苦些，不過也有考慮嘗試 TailwindCSS 或基於其開發的 UI 框架，不過這應該是很後面而且比較跟升級過程無關的部份了，就到時再看看吧。

---

## 步驟整理

那麼來整理一下成條列式，雖然是個人專案沒有 PM 在盯，比較不用在意時程……但還是順便規劃一下。每個階段都是獨立的，結束後測試完都可先上線一版。

1. bootstrapVue 抽換為自己實做的 bootstrap5（預計 1 周）
2. 將專案架構升級為 Nuxt3 並置換模組及使用方式（預計 2~3 周）
3. 將專案的程式部份改寫為 TypeScript 與 composition api（預計 2~3 周）

UI 框架的挑選就先不列入，畢竟還不確定要選哪個，等三個階段結束後再看看。

---

大概就是這樣，希望過程順利了。
