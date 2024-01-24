---
title: 在Fedora 39中連接到FortiClient VPN
img: 924/CNdJRo.png
tags: [fedora, vpn, fortiy, forticlient vpn]
category: linux
---

因為工作的關係，有時會需要連接回公司處理事情，而公司使用的是 FortiCllient VPN，平常上班都是使用公司的 Windows 筆電連接，想說來試試看能不能在 Fedora 中使用，這樣以後若有突發事件但人在家裡，才不會突然要去找 Windows 卻找不到。

<!--more-->

---

## 安裝

在 Fedora 中可以透過[`openfortivpn`](https://github.com/adrienverge/openfortivpn)這個指令工具來連接 FortiClient VPN 伺服器。

```bash
sudo dnf install openfortivpn
```

### 與 GNOME 網路設定值的整合圖形界面

若想透過圖形界面使用，而桌面環境也是 GNOME 的話，可以安裝`NetworkManager-fortisslvpn-gnome`套件。

```bash
sudo dnf install NetworkManager-fortisslvpn-gnome
```

---

## 使用

使用上可以透過設定值的圖形界面或是直接打指令來完成，下面先介紹指令的部份。

### 指令界面

```bash
sudo openfortivpn sslvpn.some-domain.com:443 -u user
```

指令部份很簡單，若無特殊要求就是把上面指令中的`sslvpn.some-domain.com`改成要連接的 VPN 伺服器網址加上 PORT 號，後面的`user`改成帳號。輸入之後，終端機會要求輸入密碼。

若平常會連接多個不同的 VPN 伺服器，或是不想記住伺服器的網址，也可以建立設定檔：

```ini vpn.config
host = sslvpn.some-domain.com
port = 443
username = user
# 密碼建議還是不要儲存比較好
password = bar
```

然後再透過指令傳入設定檔：

```bash
sudo dnf openfortivpn -c vpn.config
```

### 圖形界面

若有安裝`NetworkManager-fortisslvpn-gnome`，安裝完後進入`設定值 > 網路 > VPN`，新增 VPN 時會多出一個`Fortinet SSLVPN`選項：

<article-img img="923/GO3o9Y.png"></article-img>

接著就輸入設定值儲存就可以了，若伺服器端沒有特別要求，通常一定要輸入的就是閘道、使用者名稱，然後在連線時輸入使用者密碼。

---

## 問題排除

### 伺服器證書問題

如果因為公司想省錢沒有把伺服器掛上 https 證書，那使用上可能會遇到問題。圖形界面會看不出來是什麼錯誤，要下指令才看得到。若下指令出現像下面的錯誤，就代表伺服器的證書是有問題的：

```bash
ERROR:  Gateway certificate validation failed, and the certificate digest is not in the local whitelist. If you trust it, rerun with:
ERROR:      --trusted-cert 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
```

若確定這是正常流程，那指令就要改成下面這樣，其中的`7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`會依據你當下顯示的錯誤訊息而定。

```bash
sudo openfortivpn sslvpn.some-domain.com:443 -u user --trusted-cert 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
```

若使用設定檔則要加上`trusted-cert = 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`：

```ini vpn.config
host = sslvpn.some-domain.com
port = 443
username = user
# 密碼建議還是不要儲存比較好
password = bar
# 加上這行
trusted-cert = 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
```

若有安裝`NetworkManager-fortisslvpn-gnome`，也可以在設定 VPN 的地方點擊`進階`，然後在`信任的憑證`欄位填上錯誤訊息中取得的雜湊碼，以上面的例子來說就是填上`7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`這串字。

<article-img img="924/rcJzRD.png"></article-img>

### PPP 版本問題

這是 Fedora 39 中因為`ppp`套件版本太新衍生的問題，可參考[Github 上的 Issue](https://github.com/adrienverge/openfortivpn/issues/1076)。目前解決方式是在`/etc/ppp/options`檔案中新增最後一行`ipcp-accept-remote`：

```text /etc/ppp/options
lock
ipcp-accept-remote
```
