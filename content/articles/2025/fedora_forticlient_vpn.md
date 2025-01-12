---
title: 在Fedora 41中連接到FortiClient VPN
img: 924/CNdJRo.png
tags: [fedora, vpn, fortify, forticlient vpn]
category: linux
---

因為工作的關係，有時會需要連回公司處理事情，而公司使用的是 FortiCllient VPN，平常上班都是使用公司的 Windows 筆電連接，想說來試試看能不能在 Fedora 中使用。

<!--more-->

---

## 使用GNOME「設定」APP

在 Fedora 41 Workstation中，設定值→網路中已經有內建的VPN工具可以連接 FortiClient VPN 伺服器：

<article-img img="922/X0Ehlq.png"></article-img>

點一下「VPN」旁的「+」號：

<article-img img="922/EJhLhj.png"></article-img>

接著點擊「Multi-protocal VPN Client (openconnect)」：

<article-img img="924/zlJeel.png"></article-img>

### 輸入VPN設定值

接著切換到「身份」頁籤，在「VPN Protocal」下拉選單中選擇「Fortinet SSL VPN」，並輸入VPN建置人員提供的資訊，像是通訊閘（也就是對應VPN Server的URL），若有客製的port號，就一併輸入在通訊閘。

最後取一個自己能夠辨認的名稱並按下「套用」，VPN設定就完成了。

### 使用VPN

使用的方式也很簡單，直接按旁邊的開關，或是從GNOME的系統閘之中也能開啟：

<article-img img="922/WgqEvJ.png"></article-img>

開啟之後會出現一個登入小視窗，打上VPN建置人員提供的帳號與密碼，按下「Login」就完成囉。

<article-img img="922/HOle2r.png"></article-img>

若啟用成功，GNOME系統圖示會多出一個鎖頭，就代表目前已經連上VPN。

<article-img img="922/N15wYG.png"></article-img>

---

## 後記

在剛開始嘗試設定時，找到的資料是使用`openfortivpn`這個套件，但過程中遇到很多問題，結果在查詢解法的過程中發現可以使用原本就內建的`openconnect`來連線，而且步驟少了很多，非常方便。

當然也試過官方提供的rpm套件，但根本連不上XD。
