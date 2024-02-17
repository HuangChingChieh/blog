---
title: Uniswap v3中的無常損失
img: 922/6v2E92.jpg
tags: [DeFi, 投資, 流動性挖礦, 加密貨幣, uniswap v3, uniswap]
category: life
---

本文翻譯自 Topaze Blue 和 Bancor Protocol 在 2021 年 11 月 17 日發布的一份報告：[《Impermanent Loss in Uniswap v3》](https://arxiv.org/pdf/2111.09192.pdf)。作者分別為：

- [Stefan Loesch](mailto:stefan@topaze.blue)
- [Nate Hindman](mailto:nate@bancor.network)
- [Nicholas Welch](mailto:nick@bancor.network)
- [Mark B. Richardson](mailto:mark@bancor.network)

<!--more-->

譯文中會穿插自己看不懂而上網查到的專有名詞解釋或是筆記，請斟酌服用。

---

## 摘要

自動做市商（Automated Market Makers, AMMs）是部署在區塊鏈上的智能合約，能夠自動在鏈上兩個不同資產之間造市。在這份報告中，我們研究特定種類的自動做市商：恆定函數做市商（Constant Function Market Makers, CFMMs），其交易狀況（忽略手續費）由其**聯合曲線**確定，例如 `𝑘 = 𝑥 * 𝑦`。

<article-note>聯合曲線（bonding curve）：用來描述價格與資產供給之間關係的數學概念。參考[《What Is a Bonding Curve?》](https://coinmarketcap.com/academy/glossary/bonding-curve)。</article-note>

這類自動做市商會受到無常損失（Impermanent Loss, IL）的影響，我們之前已將無常損失確認為相關自我融資交易策略的 Gamma 指標，也就是流動性提供者賺取潛在的手續費收入時承擔的風險。

<article-note>自我融資交易策略（self-financing trading strategy）：是指除了初始投資之外，在投資過程中，不追加任何投資，也不從投資中轉移資本，只通過資產組合本身的收益變動情況進行資產組合的結構調整。**這邊猜想是在說流動性挖礦隨著資產價格變動而自動調整流動性比例的行為。**</article-note>

> 這段對於非金融背景的人來說有夠天書，上網查了一些資料後個人的理解是這樣：簡單來說，無常損失的多寡決定了你的流動性倉位承受的風險大小。
>
> Delta 描述了資產價格變動時衍生品價格變動的幅度，而 Gamma 描述了資產價格變動時 Delta 變動的幅度。也就是說若 Gamma 為正值，則當一個資產價格變動越大時，衍生品價格受到影響的幅度也會變大。
>
> 我們提供的流動性其實可以視為是幣的金融衍生品，當幣價漲跌越多，無常損失也會越來越大（導致流動性倉位的價值波動越大），因此無常損失可以看做是 v3 中流動性挖礦的 Gamma 指標。

Uniswap v3 提出了將流動性放大的概念：藉由縮小流動性的交易範圍、降低未使用的流動性以實現更好的資本效率。這增加了所賺取的交易手續費，但也增加了風險：即無常損失。Uniswap v3 上的手續費等級已公開，因此在本文中，我們專注於計算無常損失。

在我們分析的 17 個流動性池中——這些池涵蓋了 43% 的總鎖倉價值（TVL），我們根據其規模、組合代幣和數據可用性進行了選擇——從創建至截止日期為止，LPs 賺取的總費用為 1.993 億美元。同時，我們還發現，在此期間 LPs 遭受的總 IL 為 2.601 億美元，這意味著在總體上，這些 LPs 如果只是持有資產（HODL），將會比現狀好 60.8 百萬美元。
