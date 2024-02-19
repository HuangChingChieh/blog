---
title: 在Fedora 38中關閉Intel Turbo Boost
img: 922/JKLlrl.png
tags: [fedora, intel turbo boost]
category: linux
---

在 <article-inner-link slug="macbook_air_2013_fedora">Macbook Air 2013 上 安裝 Fedora</article-inner-link>後，發現會有容易過熱的問題（溫度直上 90°C 甚至 100 °C），找到了一個解決方式是直接關閉 Intel Turbo Boost。因為過程稍微複雜一些，所以就把他紀錄下來了。

<!--more-->

---

## 什麼是 Intel Turbo Boost

簡單說呢，就是讓處理器在沒事做的時候維持低頻率，有事做的時候變為高頻率但卻又不超過安全值。

因為 CPU 頻率決定了特定時間內能夠吞吐的工作量，CPU 工作時的頻率越高，發熱量也越大，所以網路上就會出現關閉 Intel Turbo Boost 讓 CPU 不論有沒有事做都維持在基本頻率，以降低消耗電量以及發熱度的作法，雖然通常是在筆電上設定，但若想要桌機不要那麼熱情（？），也是可以設定的。

<article-note>關於 Intel Turbo Boost 可參考[官方說明](https://www.intel.com.tw/content/www/tw/zh/gaming/resources/turbo-boost.html)</article-note>

### 關閉的方式

在我所查到的資料裡， Fedora 38 中有兩種關閉 Intel Turbo Boost 的方式。一個是透過別人寫的 GNOME 擴充套件，一個則是直接修改設定值並把他設定成開機時自動關閉。

自己比較喜歡後者，因為前者須依靠別人更新的 GNOME 擴充套件，在迭代速度較快的 Fedora 中，常常升上新版本之後 GNOME 也會跟著升級，然後導致比較少見的擴充套件掛掉。但前者設定相對容易也不需要輸入什麼指令，大家可以自己挑自己喜歡的。

---

## 透過 GNOME 擴充套件關閉

第一個方式就是透過[cpufreq](https://extensions.gnome.org/extension/1082/cpufreq/)這個擴充套件來完成，這個套件甚至可以調整 CPU 的最低／最高頻率以及可使用的 CPU 核心數量。

<article-img img="922/5do1r7.png"></article-img>

但這個套件不在 Fedora 官方套件庫內，要從[GNOMe Extensions 網站](https://extensions.gnome.org/)自行安裝。安裝後在頂端列將「Turbo Boost」這個選項關閉就可以了。

---

## 透過修改系統設定值關閉

第二個方式就是我採用的方式了，自行修改設定值並設定為開機時自動開啟。首先建立一個 system service 檔案，可使用自己喜歡的文字編輯器：

```bash
# 建立一個system service
sudo gnome-text-editor /etc/systemd/system/disable-intel-turboboost.service
```

接著貼上如下的內容：

```ini [disable-intel-turboboost.service]
[Unit]
Description=Disable Intel Turbo Boost using pstate driver

[Service]
ExecStart=/bin/sh -c "/usr/bin/echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo"
ExecStop=/bin/sh -c "/usr/bin/echo 0 > /sys/devices/system/cpu/intel_pstate/no_turbo"
RemainAfterExit=yes

[Install]
WantedBy=sysinit.target
```

<article-note>[關於 system service 檔案的詳細說明，可參考 Fedora 官方文件。](https://docs.fedoraproject.org/en-US/quick-docs/systemd-understanding-and-administering/#_common_service_parameters)</article-note>

最後啟用這個我們自己寫的服務，就完成囉。

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl enable disable-intel-turboboost
```

```bash
sudo systemctl start disable-intel-turboboost
```

```bash
sudo systemctl status disable-intel-turboboost
```

如果想要恢復使用，可以用下面兩個指令。

```bash
# 永久性恢復使用Turbo Boost
sudo systemctl disable disable-intel-turboboost
```

```bash
# 暫時恢復使用Turbo Boost（重開後仍停用）
sudo systemctl stop disable-intel-turboboost
```

---

## 檢驗

其實也說不上是「檢驗」，就是做一些會讓電腦很忙的事情，比如說開一些很複雜的網站啊、工程師編譯一些專案啊……之類的，然後去感受一下溫度、使用可以看到溫度的 GNOME 擴充套件（例如[Freon](https://extensions.gnome.org/extension/841/freon/)）或是直接看系統監控程式。

以我的[i5-8250U](https://www.intel.com.tw/content/www/tw/zh/products/sku/124967/intel-core-i58250u-processor-6m-cache-up-to-3-40-ghz/specifications.html)來說，原本最高可以跑到 3.40 GHz，關掉 turbo 會直接剩 1.60 GHz，將近一半的效能損失想必是非常明顯的。

若想更精確地確認，也可以使用這個指令：

```bash
lscpu | grep "MHz"
```

然後看輸出的`CPU(s) scaling MHz`項目，這可以解讀為 CPU 目前輸出的頻率佔最大輸出的比例，像我的就會被鎖在 `1.6 / 3.4 ≒ 47%`就上不去。

```bash
CPU(s) scaling MHz: 47%
CPU max MHz:        3400.0000
CPU min MHz:        400.0000
```

---

## 後記

這種作法是用效率去交換發熱降低以及省電，若不是像我使用 2013 年的 Macbook Air 這種特殊情境或是真的比較老的裝置上，應該是都用不太到，但了解了一些事情的感覺還是不錯啦。希望這個作法可以讓那台 MBA 活久一點，環保嘛～不過物盡其用而已。

---

## 參考文獻

1. [How To: Disable Intel Turbo Boost on Linux using systemd + intel_pstate](https://www.gadgethow2.com/2021/05/05/how-to-disable-intel-turboboost-using-systemd/)
