__NUXT_JSONP__("/nuxt2_content_code_block_copy_paste", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY){an[0]={id:I,depth:Q,text:I};an[1]={id:J,depth:Q,text:J};return {data:[{article:{slug:"nuxt2_content_code_block_copy_paste",description:"用 Nuxt Content 作為部落格的基底讓我最開心的部份，就是 markdown 中的程式碼區塊了，自動上色、格式化、支援的語言非常多，這是很多部落格平台都無法提供的，但若需要程式碼複製貼上功能，就得自己額外處理。\n這篇文章紀錄了自己從查資料最後搞出來的一些過程，最後是透過在nuxt.config.js中自訂程式碼區塊處理器來實現。",title:"在Nuxt Content v1中實現程式碼區塊複製貼上功能",img:"923\u002FYRlYZO.jpg",tags:[H,"nuxt2","nuxt content v1","nuxt content",am],category:"frontend",toc:an,body:{type:ao,children:[{type:b,tag:p,props:{},children:[{type:a,value:ap}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:aq},{type:b,tag:m,props:{},children:[{type:a,value:R}]},{type:a,value:ar}]},{type:a,value:e},{type:a,value:e},{type:b,tag:S,props:{},children:[]},{type:a,value:e},{type:b,tag:as,props:{id:I},children:[{type:b,tag:K,props:{href:"#%E7%94%A8%E5%85%83%E4%BB%B6%E6%8A%8A%E7%A8%8B%E5%BC%8F%E7%A2%BC%E5%8D%80%E5%A1%8A%E5%8C%85%E8%B5%B7%E4%BE%86",ariaHidden:at,tabIndex:au},children:[{type:b,tag:c,props:{className:[av,aw]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"初步的想法是用一個元件在 markdown 中把程式碼區塊包起來，再把"},{type:b,tag:m,props:{},children:[{type:a,value:T}]},{type:a,value:"外面那層"},{type:b,tag:m,props:{},children:[{type:a,value:t}]},{type:a,value:"填上"},{type:b,tag:m,props:{},children:[{type:a,value:ax}]},{type:a,value:"，這樣就可以去抓裡面的文字內容拿來寫入剪貼簿。自己寫出來大概是長這樣："}]},{type:a,value:e},{type:b,tag:U,props:{fileName:"article-code.vue",lang:L},children:[{type:b,tag:V,props:{className:[C,W],style:X,tabIndex:Y},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:az}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"@click"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"\"copyCode\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"variant"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"\"link\""}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"複製程式碼"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:az}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:Z}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"\"code\""}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:"color: #6A9955"},children:[{type:a,value:"\u003C!-- markdown中程式碼嵌入的地方 --\u003E"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"\u003E\u003C\u002F"}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:T}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:t}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:ay}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:h},children:[{type:a,value:u}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:aA}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:o},children:[{type:a,value:aB}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"methods:"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"copyCode"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aD}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aE}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"copied"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:") "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:$}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" { "}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" } = "}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"$refs"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aE}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aG}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"?."}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:") {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"innerText"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aG}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:E}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      } "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"else"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:aa}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"createRange"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:N}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aa}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"selectNode"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:m}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:E}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:O}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"window"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"getSelection"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:N}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:O}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:N}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:O}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"addRange"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aa}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:E}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"execCommand"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'copy'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:E}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:O}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:N}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      }"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aM}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aN}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aO}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:h},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:aA}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:n}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"而把元件寫在 markdown 檔案會長這樣："}]},{type:a,value:e},{type:b,tag:U,props:{fileName:"article.md",lang:am},children:[{type:b,tag:V,props:{className:[C,W],style:X,tabIndex:Y},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"\u003Carticle-code\u003E"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"```bash"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:k},children:[{type:a,value:"sudo"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"dnf"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"update"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:"-y"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"```"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"\u003C\u002Farticle-code\u003E"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"可以看到因為 markdown 解析的關係，元件標籤與程式碼區塊之間上下還要再空一行。"}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"因為每次寫程式碼區塊的時候都要嵌入元件，若文章有大量或是連續的程式碼區塊，閱讀性會降低很多，最後看到頭很痛。後來就找找有沒有辦法在處理程式碼區塊產生 html 時，順便用元件包起來的方法，這樣就不用一直自己額外包起來，後來查到還真的有。"}]},{type:a,value:e},{type:b,tag:S,props:{},children:[]},{type:a,value:e},{type:b,tag:as,props:{id:J},children:[{type:b,tag:K,props:{href:"#%E8%87%AA%E8%A8%82%E7%A8%8B%E5%BC%8F%E7%A2%BC%E8%99%95%E7%90%86%E5%99%A8",ariaHidden:at,tabIndex:au},children:[{type:b,tag:c,props:{className:[av,aw]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"在 Nuxt Content v1 中有一個設定值"},{type:b,tag:m,props:{},children:[{type:a,value:"markdown.highlighter"}]},{type:a,value:"，可以"},{type:b,tag:K,props:{href:"https:\u002F\u002Fcontent.nuxt.com\u002Fv1\u002Fgetting-started\u002Fconfiguration#markdownhighlighter",rel:[aP,aQ,aR],target:aS},children:[{type:a,value:"自己決定程式碼被解析後的外層 HTML 結構"}]},{type:a,value:"，官方"},{type:b,tag:K,props:{href:"https:\u002F\u002Fcontent.nuxt.com\u002Fv1\u002Fcommunity\u002Fsnippets#custom-highlighter",rel:[aP,aQ,aR],target:aS},children:[{type:a,value:"使用了 highlight.js 以及 shiki 作為示範"}]},{type:a,value:"，看了看之後滿喜歡 shiki 的，所以就使用 shiki。"}]},{type:a,value:e},{type:b,tag:U,props:{fileName:R,lang:"js"},children:[{type:b,tag:V,props:{className:[C,W],style:X,tabIndex:Y},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:o},children:[{type:a,value:"import"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"from"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'shiki'"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:o},children:[{type:a,value:aB}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"content:"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"markdown:"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:v}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:"async"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aD}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"await"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"getHighlighter"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"({"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"theme:"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'nord'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"        })"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:_}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aT}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:G}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:P}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:", { "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" }, { "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:G}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:G}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" }) "}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:"=\u003E"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ab}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"codeToHtml"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aT}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:G}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:P}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:E}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:i},children:[{type:a,value:x}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:y},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" = []"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"push"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'raw'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:G}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"))"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:F}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'article-code'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"            {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"className:"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:j}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:"'nuxt-content-highlight'"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:P}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"            },"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ad}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"          )"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"        }"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      },"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aM}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aN}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aO}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"在這邊解析完後產生的 html 會再被 Nuxt 處理，所以可以插入 vue component，也可以直接把"},{type:b,tag:m,props:{},children:[{type:a,value:ac}]},{type:a,value:"或"},{type:b,tag:m,props:{},children:[{type:a,value:P}]},{type:a,value:"作為 props 傳遞給元件，自訂性更高。"}]},{type:a,value:e},{type:b,tag:S,props:{},children:[]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:"大概就是這樣了！最一開始是想說有沒有內建的方式可以簡單實作這功能，查了一下好像沒查到，所以就自己動手搞了，幸好也沒有太複雜。"}]}]},excerpt:{type:ao,children:[{type:b,tag:p,props:{},children:[{type:a,value:ap}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:a,value:aq},{type:b,tag:m,props:{},children:[{type:a,value:R}]},{type:a,value:ar}]}]},dir:"\u002Farticles\u002F2023",path:"\u002Farticles\u002F2023\u002Fnuxt2_content_code_block_copy_paste",extension:".md",createdAt:aY,updatedAt:aY,plainText:"用 Nuxt Content 作為部落格的基底讓我最開心的部份，就是 markdown 中的程式碼區塊了，自動上色、格式化、支援的語言非常多，這是很多部落格平台都無法提供的，但若需要程式碼複製貼上功能，就得自己額外處理。\n這篇文章紀錄了自己從查資料最後搞出來的一些過程，最後是透過在nuxt.config.js中自訂程式碼區塊處理器來實現。\n\n\n用元件把程式碼區塊包起來\n初步的想法是用一個元件在 markdown 中把程式碼區塊包起來，再把slot外面那層div填上ref，這樣就可以去抓裡面的文字內容拿來寫入剪貼簿。自己寫出來大概是長這樣：\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cdiv\u003E\n      \u003Cbutton @click=\"copyCode\" variant=\"link\"\u003E複製程式碼\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv ref=\"code\"\u003E\n      \u003C!-- markdown中程式碼嵌入的地方 --\u003E\n      \u003Cslot\u003E\u003C\u002Fslot\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\n\u003Cscript\u003E\nexport default {\n  methods: {\n    copyCode() {\n      if (this.copied) return\n\n      const { code } = this.$refs\n\n      if (navigator.clipboard?.writeText) {\n        const toCopyCode = code.innerText\n        navigator.clipboard.writeText(toCopyCode)\n      } else {\n        const range = document.createRange()\n        range.selectNode(code)\n\n        const selection = window.getSelection()\n        selection.removeAllRanges()\n        selection.addRange(range)\n\n        document.execCommand('copy')\n        selection.removeAllRanges()\n      }\n    },\n  },\n}\n\u003C\u002Fscript\u003E\n\n而把元件寫在 markdown 檔案會長這樣：\n\u003Carticle-code\u003E\n\n```bash\nsudo dnf update -y\n```\n\n\u003C\u002Farticle-code\u003E\n\n可以看到因為 markdown 解析的關係，元件標籤與程式碼區塊之間上下還要再空一行。\n因為每次寫程式碼區塊的時候都要嵌入元件，若文章有大量或是連續的程式碼區塊，閱讀性會降低很多，最後看到頭很痛。後來就找找有沒有辦法在處理程式碼區塊產生 html 時，順便用元件包起來的方法，這樣就不用一直自己額外包起來，後來查到還真的有。\n\n自訂程式碼處理器\n在 Nuxt Content v1 中有一個設定值markdown.highlighter，可以自己決定程式碼被解析後的外層 HTML 結構，官方使用了 highlight.js 以及 shiki 作為示範，看了看之後滿喜歡 shiki 的，所以就使用 shiki。\nimport shiki from 'shiki'\n\nexport default {\n  content: {\n    markdown: {\n      async highlighter() {\n        const highlighter = await shiki.getHighlighter({\n          theme: 'nord',\n        })\n\n        return (rawCode, lang, { fileName }, { h, node, u }) =\u003E {\n          const highlightedCode = highlighter.codeToHtml(rawCode, lang)\n\n          const children = []\n          children.push(u('raw', highlightedCode))\n\n          return h(\n            node,\n            'article-code',\n            {\n              className: 'nuxt-content-highlight',\n              fileName,\n              lang,\n            },\n            children\n          )\n        }\n      },\n    },\n  },\n}\n\n在這邊解析完後產生的 html 會再被 Nuxt 處理，所以可以插入 vue component，也可以直接把fileName或lang作為 props 傳遞給元件，自訂性更高。\n\n大概就是這樣了！最一開始是想說有沒有內建的方式可以簡單實作這功能，查了一下好像沒查到，所以就自己動手搞了，幸好也沒有太複雜。",readingTime:ag},relatedArticles:[{slug:"nuxt2_dynamic_routes_sitemap",description:"Sitemap 雖然對網站來說非必要，但為了 SEO 考量通常都還是會建立。而在 Nuxt 2 中可以透過@nuxt\u002Fsitemap模組來簡單建立 sitemap。但若遇到動態頁面，這個模組無法自動新增，官方文件要求使用者必須自行新增，而官方建議的作法以及網路上查到的方式好像都滿麻煩的，所以自己搞了一個小撇步出來，覺得頗方便，所以就紀錄下來。",title:"在Nuxt 2中建立動態routes的sitemap",img:"923\u002FKaAGJw.png",tags:[H,L,"sitemap"],createdAt:ah,updatedAt:ah,readingTime:ag},{slug:"nuxt2_content_git",description:"建完這個部落格之後，發現好像不太對，怎麼前幾天發的文章，日期卻變成今天。後來發現是因為若從 A 電腦更新文章，在 B 電腦用 git 同步更新檔案之後，檔案的更新日期會變成當下的時間。\n上網查了一下後，發現已經有人針對這個問題提出解方：那就是去撈這個檔案在 git 紀錄上的建立與更新時間，來取代本機檔案的建立與更新時間。",title:"使用nuxt-content-git取得Nuxt2 Content中正確的檔案時間",tags:[L,H],img:"924\u002FWCeWkF.jpg",createdAt:"2023-01-06T13:35:19.000Z",updatedAt:ah,readingTime:Q},{slug:"nuxt2_bootstrapvue_treeshaking",description:"Bootstrap 是個很好用的 UI 框架，在 Vue 生態系中主要由 Bootstrap Vue 去作銜接，然而在專案中幾乎不會完全使用到 Bootstrap 的所有功能，這時如果把不必要的 css \u002F js 編譯移除，可以降低編譯後專案的大小，這種行為也被稱為 Tree shaking。本篇紀錄了自己在 Nuxt2 中使用 Bootstrap Vue 時，Tree Shaking 的一些步驟。",title:"Nuxt2中的BootstrapVue TreeShaking",img:"924\u002FOqxy2g.jpg",tags:[L,H,"bootstrap"],createdAt:"2023-01-02T08:03:25.000Z",updatedAt:"2023-12-11T10:19:13.000Z",readingTime:ag}]}],fetch:{"0":{mobileBreakpoint:ai,bannerSizes:[aj,ak,al]},"1":{mobileBreakpoint:ai,bannerSizes:[aj,ak,al]},"2":{mobileBreakpoint:ai,bannerSizes:[aj,ak,al]}},mutations:[["setToc",an]]}}("text","element","span","color: #D4D4D4","\n","line","color: #9CDCFE","color: #808080","color: #569CD6"," ","color: #DCDCAA",".","code","\u003E","color: #C586C0","p","color: #CE9178","        ","(","div","\u003C","      "," {","const","color: #4FC1FF","    ","\u003C\u002F",",","shiki"," = ",")","          ",", ","nuxt","用元件把程式碼區塊包起來","自訂程式碼處理器","a","vue","  ","()","selection","lang",2,"nuxt.config.js","hr","slot","article-code","pre","dark-plus","background-color: #1E1E1E",0,"="," (","return","range","highlighter","fileName","children","            ","              ",4,"2023-10-30T09:24:31.000Z","sm","(min-width: 992px) 320px","(min-width: 768px) 640px","640px","markdown",Array(2),"root","用 Nuxt Content 作為部落格的基底讓我最開心的部份，就是 markdown 中的程式碼區塊了，自動上色、格式化、支援的語言非常多，這是很多部落格平台都無法提供的，但若需要程式碼複製貼上功能，就得自己額外處理。","這篇文章紀錄了自己從查資料最後搞出來的一些過程，最後是透過在","中自訂程式碼區塊處理器來實現。","h2","true",-1,"icon","icon-link","ref","template","button","script","export","default","() {","if","this","navigator","clipboard","writeText","toCopyCode","document","removeAllRanges","    },","  },","}","nofollow","noopener","noreferrer","_blank","rawCode","h","node","u","highlightedCode","2023-12-12T05:50:50.000Z")));