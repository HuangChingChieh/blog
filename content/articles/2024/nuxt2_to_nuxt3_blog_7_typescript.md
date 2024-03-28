---
title: 部落格Nuxt 2升級Nuxt 3（七）：升級為typescript與compisition api
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3, typescript, compisition api]
category: frontend
---

嚴格來說這不算是升級的一部分，但前端世界改用 typescript 以及 Vue 改用 compisition api 似乎已是市場主流，想說趁這個機會來學習一下，畢竟目前工作上沒有可以使用新專案練習的機會。

<!--more-->

---

## 前置準備

這邊是參考[官方的 Typescript 指南](https://nuxt.com/docs/guide/concepts/typescript)執行，簡單紀錄一下。

```bash [安裝TS相關套件]
npm install --save-dev vue-tsc@^1 typescript
```

官方有建議可以打開 typecheck
