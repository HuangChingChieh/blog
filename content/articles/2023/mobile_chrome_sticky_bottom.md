---
title: 解決底部Sticky元素在Android Chrome滾動時渲染位置錯誤的問題
description: 
tags: [css, html, android, chrome]
---

如果不是複雜的需求，對於在元素流中有滾動後要固定的元素，像是頂部header滾動後要固定或底部footer在滾動前要固定，我都會偏好用`position: sticky`這個方式去處理，簡單粗暴，不像`position: fixed`那樣要去計算高度來給其他元素padding以防遮住主要內容，或是滾動後要用JS去偵測來修改，瀏覽器會幫你做好運算。

把元素sticky在頂部似乎沒啥問題，但sticky到底部時就在Android的Chrome遇到問題了（Firefox不會）。

### 問題

Chrome上面的網址列在往下滾動會隱藏，這時底部的Sticky元素會往上跳一個距離；而在往上滾動時，Chrome網址列又會出現，這時底部的Sticky元素又會回到原本正確的位置。

### 解決方式

上網嘗試了一些方式後都沒有解決，後來查到這篇文章[Mobile browser bars being hidden can affect CSS position sticky bottom](https://www.stevefenton.co.uk/blog/2022/12/mobile-position-sticky-issue/)，發現他用了一個非常輕巧的方式解決。只要加一條`position: fixed`的元素：

```html
<div style="position: fixed;"></div>
```

沒錯，就是這樣而已，我感到各種驚訝。只是這種HACK般的處理，讓我覺得這或許比較像是BUG，但這問題存在許久，也不知道Google那邊是否會修改就是了。