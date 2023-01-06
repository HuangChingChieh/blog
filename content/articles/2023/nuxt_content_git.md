---
title: 使用nuxt-content-git取得Nuxt2 Content中正確的檔案時間
description: 因為各種因素，使用Nuxt Content時文章檔案的建立與更新時間會不斷被更新，需要額外的設定來正確呈現時間。
tags: [vue, nuxt]
---

建完這個部落格之後，發現好像不太對，怎麼前幾天發的文章，日期卻變成今天。後來發現是因為若從 A 電腦更新文章，在 B 電腦用 git 同步更新檔案之後，檔案的更新日期會變成當下的時間。

上網查了一下後，發現已經有人針對這個問題提出解方：那就是去撈這個檔案在 git 紀錄上的建立與更新時間，來取代本機檔案的建立與更新時間。

並且他也寫成[套件](https://github.com/dword-design/nuxt-content-git)方便讓大家安裝與設定，下面會紀錄步驟。

## 安裝

首先就是安裝囉，非常簡單。

```bash
npm install nuxt-content-git
```

---

## 設定

設定也很簡單，在`nuxt.config.js`中設定就可以囉。

```javascript [nuxt.config.js]
export default {
  modules: [
    // 把nuxt-content-git放在@nuxt/content之前
    'nuxt-content-git',
    '@nuxt/content',
  ],
}
```

這樣就會把原本文章檔案的本機建立時間、更新時間，替換成 git 紀錄上的建立時間、更新時間。然後直接照原本的方式取`createdAt`與`updatedAt`就會得到正確的時間囉。

---

若你也感謝這位作者的貢獻，也歡迎實際贊助他唷！可以到[這個套件的 github 頁面](https://github.com/dword-design/nuxt-content-git#support)看詳細的資訊。
