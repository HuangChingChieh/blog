---
title: 部落格Nuxt 2升級Nuxt 3（五）：Sitemap模組升級
img: 924/Ia2nWi.png
tags: [blog, nuxt, vue, nuxt2, nuxt3, sitemap]
category: frontend
---

原本使用的 Sitemap 模組 `@nuxtjs/sitemap` 有支援 Nuxt 3 的版本，所以升級起來不如前面幾篇困難，主要就是修改一下設定值而已。

<!--more-->

---

## 修改設定值

在使用`npm`升級之後，只要修改設定值就能有基本的 sitemap 功能了：

```ts
export default defineNuxtConfig({
  // Sitemap Module: https://sitemap.nuxtjs.org/usage/sitemap/
  //   sitemap: {
  //     hostname: 'https://huangchingchieh.github.io/',
  //     gzip: true,
  //     routes,
  //   },
  // 原本的sitemap改成site，sitemap.hostname改成site.url。
  site: {
    url: 'https://huangchingchieh.github.io',
  },
})
```

### 不須動態傳遞 route

之前在 Nuxt 2 的時候<article-inner-link slug="nuxt2_dynamic_routes_sitemap">需要自行產出</article-inner-link>動態 routes 並傳遞給模組，新版則不需要，只要 Nuxt Crawler 爬得到的連結，都會被抓到產生出來的`sitemap.xml`裡面。

---

## 更細緻的設定

如果需要為產生的`url`動態設定`lastmod`（例如使用文章物件的`updatedAt`）或是做更細緻的自動化調整，就需要額外的設定，參考[官方文件](https://nuxtseo.com/sitemap/integrations/content#nuxt-content-app-source)後設定如下：

```ts [新增server/api/sitemap.ts]
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const { base } = useRuntimeConfig().public
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[]
  return contentList.map((file) => {
    const url = {
      loc: `${base}${file.slug}`,
      lastmod: file.createdAt,
    }
    return asSitemapUrl(url)
  })
})
```

然後在 sitemap 的設定值新增如下設定值：

```ts nuxt.config.ts
export default defineNuxtConfig({
  sitemap: {
    // 路徑是剛剛新增的
    sources: ['/api/sitemap'],
  },
})
```

---

## 後記

大概是這樣，sitemap 功能簡單許多，也沒有換模組，所以升級過程非常容易。
