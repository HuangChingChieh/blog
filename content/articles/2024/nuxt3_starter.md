---
title: Nuxt 3 專案初始設定整理
img: 923/DpFVSo.jpg
tags:
  [
    nuxt,
    nuxt3,
    vue,
    tailwindcss,
    scss,
    pinia,
    eslint,
    commitlint,
    lint-staged,
    husky,
    prettier,
  ]
category: frontend
---

本系列是紀錄自己平常建立新的 Nuxt 3 專案時會引入的一些設定，覺得之前 Nuxt 2 在建立時有很多選項可以選，選好之後都自動設定好真的是很棒……。

<!--more-->

---

## 建立 Nuxt 3 專案

首先就是建立一個新的 Nuxt 3 專案。

```bash
npx nuxi@latest init <project-name>
```

---

## CSS 管理

自己在 CSS 相關處理上，比較常用的是 scss 以及 Tailwind CSS，這邊分別紀錄。

### 設定 css 獨立編譯

Nuxt 3 預設會將頁面內元件的 css 整個編譯在 HTML 裡面，但這樣會失去重複利用樣式表的優勢，所以自己習慣都是關掉這功能：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  features: {
    inlineStyles: false,
  },
})
```

### SCSS

```bash [首先安裝SCSS支援]
npm install -D sass
```

這邊我習慣會建立兩個檔案：

- `~/assets/scss/main.scss`：放置總樣式表，也是編譯的進入點，若需要引用 UI 框架的 scss 會寫在這。
- `~/assets/scss/custom.scss`：放置變數或是修改 UI 框架預設變數的檔案

官方有兩種方式可以引入`main.scss`檔案，自己習慣是寫在`nuxt.config.ts`中：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        // 將放置變數的scss檔案全域注入到component中
        scss: {
          additionalData: '@use "~/assets/scss/custom.scss" as *;',
        },
      },
    },
  },
})
```

### Tailwind CSS

```bash [Tailwind CSS 可以直接使用 Nuxt 模組來引入]
npx nuxi@latest module add tailwindcss
```

上面指令執行完，就會自動在`nuxt.config.ts`中引入模組：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
})
```

之後利用官方指令建立預設的 config 檔案：

```bash
npx tailwindcss init
```

---

## Pinia

Pinia 是 Nuxt 3 之後官方建議使用的狀態管理模組，自己上了 Nuxt 3 之後也都是用 Pinia。

```bash [直接使用 Nuxt 模組來引入]
npx nuxi@latest module add pinia
```

之後只要在資料夾`stores`下的`js`或`ts`檔案，都會被預設自動 import。

---

## Linters

所謂的 [linter](https://zh.wikipedia.org/zh-tw/Lint)，就是能在既定的規則下檢查程式碼中違反規則的段落（通常是有錯誤或是可能造成效能問題的部份）。在開發過程中，自己常用的 linter 有兩個：eslint 與 commitlint。

### eslint

eslint 是一種 js / ts 的 [linter](https://zh.wikipedia.org/zh-tw/Lint) 工具，他能檢查程式碼中一些有錯誤或是可能造成效能問題的段落，例如：

- 不小心重新賦值 const 變數
- 在作用域中不更改的變數卻使用了 let 宣告
- 宣告了變數卻完全沒用到

而 Vue 也針對 eslint 貢獻了自己的 lint 規則，讓 eslint 不僅限於用在 js / ts 上，例如：

- 在元件上重複使用了相同的屬性
- 沒有內容的 CustomComponent 沒有自我關閉（例如：`<CustomComponent></CustomComponent>`應該寫成`<CustomComponent />`）

諸如此類。搭配編輯器的套件，更可以在寫程式的時候就先標示出來修改，以免 commit 之後才發現。

```bash [透過Nuxt模組安裝eslint]
npx nuxi module add eslint
```

這個模組除了協助安裝 eslint 以外，也會自動設定跟 Nuxt 專案相關的各種 eslint 設定，開箱即用也幾乎不需要修改，非常方便。

### commitlint

commitlint 則是規定 git commit 訊息要如何寫的套件，他可以在一定程度上管理專案的 commit 訊息，以免大家各寫各的格式導致很混亂。

```bash [安裝commitlint]
npm install --save-dev @commitlint/{cli,config-conventional}
```

之後建立 commitlint 的設定檔於專案根目錄下：

```js [commitlint.config.js]
export default {
  extends: ['@commitlint/config-conventional'],
}
```

---

## Prettier

相較於 linter，Prettier 則是一種格式化工具，只關心程式碼「格式」的部份，例如：

- 字串要雙引號或單引號
- 程式碼後面要不要加分號
- 匿名方法單個參數要不要加括號
- 縮排要幾個空格寬

專案若能自帶格式化設定規則，對於開發者彼此之間統一也會很有幫助。

```bash [首先安裝Prettier]
npm install --save-dev --save-exact prettier
```

### 設定檔

建立空白設定檔`.prettierrc`於專案根目錄下：

```json [.prettierrc]
{}
```

這可以強迫 Prettier 使用`.prettierrc`的設定（在這邊就是使用 Prettier 內建的預設值）而非編輯器內的設定值，**就算沒有要修改設定值，也要建立這個檔案以保證專案在不同開發環境中的一致性。**

### 忽略檔案

有些檔案我們不需要 prettier 的話，可以透過新增`.prettierignore`檔案來處理（類似`.gitignore`），Prettier 會抓同目錄中的`.gitignore`作為預設易排除的檔案及目錄基底，再加上`.prettierignore`中標示的檔案及目錄，若是已經寫在`.gitignore`裡面的就不需要再寫到`.prettierignore`。

這個檔案就會依據專案而有很大差異了，這邊就只寫出本篇紀錄會用到的

```ini [.prettierignore]
.gitignore
.prettierignore

## Nuxt 3 static directory
public

## husky
.husky
```

---

## husky + lint-staged

前面使用的 linters 以及 Prettier，只會在修改程式碼時，或是手動執行檢查時才會作用，你硬要 commit 他們其實也是可以的。那如果能在 commit 之前就檢查他們，有問題不給 commit 的話不是更好嗎？因此就要使用像 husky 與 lint-staged 的工具，來在特定的 git hook 時執行指令來自動檢查，若不通過就不准 commit。

husky 是管理 [git hooks](https://git-scm.com/book/zh-tw/v2/Customizing-Git-Git-Hooks) 的工具，他能在特定的 git hook 執行程式碼；而 lint-staged，則是可以針對狀態為「staged」的檔案（也就是鎖定了目前變更並準備要提交到分支的檔案）進行 lint。

結合這兩者，就可以作到剛剛說的效果。

```bash [首先安裝husky與lint-staged]
npm install --save-dev husky lint-staged
```

```bash [接著初始化husky的設定值]
npx husky init
```

這邊 husky 會預設建立一個`.husky/pre-commit`檔案，裡面預設會執行`npm test`若不需要的話可以移除。

### commitlint

建立`commit-msg` 的 hook 設定檔於`.husky`資料夾下，並放入 commitlint 的指令。

```bash [.husky/commit-msg]
npx --no -- commitlint --edit $1
```

### eslint + prettier

[lint-staged 的設定方式有許多種](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration)，這邊是建立`.lintstagedrc`檔案於專案的根目錄下：

```json [.lintstagedrc]
{
  "*": ["eslint", "prettier --write"]
}
```

上面是直接設定針對所有檔案，先執行`eslint`再執行`prettier --write`，所有不被`eslint`或`prettier`自己的設定值排除的檔案都會被檢查。`prettier --write`則是自動格式化後儲存。

---

## 後記

大概就是這樣，還是覺得 Nuxt 2 那種一開始建立專案就可以讓你各種選好直接設定好的界面，還可以選 UI 框架直接引入……。這邊的設定除了 scss 檔案以外，我有建立一個 [nuxt3_starter repository](https://github.com/HuangChingChieh/nuxt3_starter)，歡迎大家參考使用。
