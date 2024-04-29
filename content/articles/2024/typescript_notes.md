---
title: Typescript學習筆記
img: 923/7q57Yg.jpg
tags: [javascript, typescript, ts, js]
category: frontend
---

就是單純幫助自己學習、吸收以及紀錄用的一篇，不會有什麼邏輯順序或是寫作安排，請視為一篇專門給寫作人自己看的筆記。

---

## 基本型別

JS 中的基本型別有

- `boolean`
- `bigint`
- `null`
- `number`
- `string`
- `symbol`
- `undefined`

TS 在此基礎上新增了

- `any`
- `unknown`
- `never`
- `void`

---

## Type 的特殊功能

幾個專屬於`type`的特殊功能，如果不是要取用這些功能，請優先使用`interface`描述程式碼。

### Union Type

使多個型別聯合成一個型別，寫法為使用`|`來聯合多個型別：

```ts
const a: number | string | string[] = '123'
```

### Type Alias

作為其他型別的別名，例如：

```ts [描述Object的型別]
type Point = { x: number; y: number }

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 100, y: 100 })
```

```ts [作為interface的別名]
interface PointLike {
  x: number
  y: number
}

type Point = PointLike
```

```ts [作為Union Type的別名]
type NumberLike = string | number
```

---
