import{_ as L}from"./BA7AsFk-.js";import{f as h,o as r,h as g,r as w,c as p,w as c,i as x,t as $,d as P,b as _,n as f,a as o,O as k,J as v,F as A,l as b,u as y,g as R,e as T,P as V,k as q,j as z,Q as D,E,y as S,z as j,B,R as N}from"./Jd92928_.js";import{_ as O}from"./BakiknL5.js";import{_ as Q,A as F}from"./hd22tNIj.js";import{u as M}from"./DWAUYwb1.js";import{I as J}from"./NEEJ4rs5.js";const G={},H={class:"h5 mb-3 mb-lg-4 text-center"};function K(e,n){return r(),g("div",H,[w(e.$slots,"default")])}const U=h(G,[["render",K]]),X={class:"shadow-sm rounded bg-foreground p-3 p-lg-4 border-top border-primary border-5"},C={__name:"aside-container",props:{title:{type:String,default:""}},setup(e){return(n,i)=>{const t=U;return r(),g("div",X,[e.title?(r(),p(t,{key:0},{default:c(()=>[x($(e.title),1)]),_:1})):P("",!0),w(n.$slots,"default")])}}},Y="_imgWrapper_1hc7b_2",Z="_p_1hc7b_7",ee={imgWrapper:Y,p:Z},te={},ne={class:"text-muted text-center"};function se(e,n){const i=k,t=O,s=C;return r(),p(s,{title:"嗨，我是阿傑！"},{default:c(()=>[_("div",{class:f(["mx-auto",e.$style.imgWrapper])},[o(i,{"img-class":"p-1 rounded-circle border border-primary border-2 mb-4",img:"922/bqqju1.jpg"})],2),_("div",ne,[_("p",{class:f([e.$style.p,"mx-auto"])}," 一名浮沈於前端汪洋的小碼農，主要使用的框架為Vue及其生態系。平常的興趣是喝飲料、玩手遊（鎖鏈戰記、歧路旅人：大陸的霸者）。 ",2),o(t,{to:{path:"/buy_me_a_tea",hash:"#關於我"},variant:"outline-primary",class:"rounded-pill"},{default:c(()=>n[0]||(n[0]=[x(" 關於我 ")])),_:1})])]),_:1})}const oe={$style:ee},ce=h(te,[["render",se],["__cssModules",oe]]),ae="_li_19z1d_2",re={li:ae},le={class:"d-flex flex-column list-unstyled mb-0"},ie={class:"flex-grow-1"},_e={__name:"aside-categories",setup(e){const{categoriesMap:n}=v().public,i=M(),{categories:t}=i;return(s,l)=>{const a=T,d=C;return r(),p(d,{title:"文章分類"},{default:c(()=>[_("nav",null,[_("ul",le,[(r(!0),g(A,null,b(y(n),(u,m)=>(r(),g("li",{key:m,class:f(["py-2",s.$style.li])},[o(a,{class:"d-flex flex-row text-decoration-none",to:y(R)({category:m})},{default:c(()=>[l[0]||(l[0]=_("span",{class:"text-primary me-1"},"#",-1)),_("span",ie,$(u),1),_("small",null,"("+$(y(t)[m].count)+")",1)]),_:2},1032,["to"])],2))),128))])])]),_:1})}}},ue={$style:re},de=h(_e,[["__cssModules",ue]]),me={class:"text-center"},pe={__name:"aside-tags",setup(e){const n=M(),{tagsObj:i}=n;let t=[];return Object.keys(i).forEach(s=>{const l=i[s];l>1&&t.push({name:s,count:l})}),t.sort((s,l)=>{let a=l.count-s.count;return a===0&&(a=s.name>l.name?1:-1),a}),t=t.slice(0,15),(s,l)=>{const a=O,d=C;return r(),p(d,{title:"文章標籤"},{default:c(()=>[_("div",me,[(r(!0),g(A,null,b(y(t),u=>(r(),p(a,{key:u.name,to:{path:"/buy_me_a_tea",hash:"#關於我"},variant:"outline-primary",size:"sm",class:"rounded-pill mb-2 me-2"},{default:c(()=>[x($(u.name),1)]),_:2},1024))),128))])]),_:1})}}},fe="_img_1176j_2",ge="_title_1176j_8",ye={img:fe,title:ge},$e={class:"d-flex flex-row w-100"},he={class:"d-flex flex-column flex-grow-1"},xe={class:"flex-grow-1"},Ae={class:"d-flex flex-row justify-content-end"},be={__name:"article-card-compact",props:{article:{type:Object,default:null},container:{type:Boolean,default:!0}},setup(e){return(n,i)=>{const t=k,s=V,l=q,a=z,d=D;return r(),p(d,{class:f(["d-flex",e.container?"p-3":""]),article:e.article,container:e.container},{default:c(()=>[_("article",$e,[o(t,{class:f([n.$style.img,"me-3 rounded"]),img:e.article.img,"img-class":"rounded"},null,8,["class","img"]),_("div",he,[_("div",xe,[o(s,{class:f([n.$style.title,"mb-1"])},{default:c(()=>[x($(e.article.title),1)]),_:1},8,["class"])]),_("div",Ae,[o(l,{minutes:e.article.readingTime.minutes,class:"me-4"},null,8,["minutes"]),o(a,{document:e.article},null,8,["document"])])])])]),_:1},8,["class","article","container"])}}},Ce={$style:ye},Ie=h(be,[["__cssModules",Ce]]),ve="_grid_c35nu_2",we={grid:ve},Me={__name:"articles-select",props:{category:{type:String,default:"all"},cardComponent:{type:Object,default:Ie},notInArticles:{type:Array,default:()=>[]}},async setup(e){let n,i;const t=e,s=M(),{data:l}=([n,i]=E(()=>S(`ArticlesSelect_${t.category}`,()=>{const{categories:a,articlesMetadata:d}=s,{count:u}=t.category==="all"?d:a[t.category];let m=j("articles").only(B.card).where({category:t.category==="all"?void 0:t.category});const{notInArticles:I}=t;return Array.isArray(I)&&I.length>0&&I.forEach(({slug:W})=>{m=m.where({slug:{$not:W}})}),m.sort({updatedAt:-1}).skip(Math.floor(u/2)).limit(3).find()})),n=await n,i(),n);return(a,d)=>(r(),g("div",{class:f(a.$style.grid)},[(r(!0),g(A,null,b(y(l),u=>(r(),p(N(e.cardComponent),{key:u.slug,article:u,container:!1},null,8,["article"]))),128))],2))}},ke={$style:we},Se=h(Me,[["__cssModules",ke]]),je={__name:"aside-select",props:{category:{type:String,default:"all"},notInArticles:{type:Array,default:()=>[]}},setup(e){return(n,i)=>{const t=Se,s=C;return r(),p(s,{title:"精選文章"},{default:c(()=>[o(t,{category:e.category,"not-in-articles":e.notInArticles},null,8,["category","not-in-articles"])]),_:1})}}},Re={__name:"common-layout",props:{reverseOrderWhenMobile:{type:Boolean,default:!1},category:{type:String,default:"all"},selectNotInArticles:{type:Array,default:()=>[]}},setup(e){return(n,i)=>{const t=L,s=ce,l=Q,a=de,d=pe,u=je,m=J;return r(),p(t,{cols:"12"},{default:c(()=>[o(m,null,{default:c(()=>[o(t,{cols:"12",lg:"7",xl:"8",class:f(e.reverseOrderWhenMobile?"order-2 order-lg-1 mt-5 mt-lg-0":"order-1")},{default:c(()=>[w(n.$slots,"default")]),_:3},8,["class"]),o(t,{cols:"12",lg:"5",xl:"4",class:f(e.reverseOrderWhenMobile?"order-1 order-lg-2":"order-2 mt-5 mt-lg-0")},{default:c(()=>[o(m,null,{default:c(()=>[o(t,{cols:"12",class:"mb-4"},{default:c(()=>[o(l,{title:"關於隨機手札與我"},{default:c(()=>[o(s)]),_:1})]),_:1}),o(t,{cols:"12",class:"mb-4"},{default:c(()=>[o(a)]),_:1}),o(t,{cols:"12",class:"mb-4"},{default:c(()=>[o(d)]),_:1}),o(t,{cols:"12"},{default:c(()=>[o(u,{category:e.category,"not-in-articles":e.selectNotInArticles},null,8,["category","not-in-articles"])]),_:1})]),_:1})]),_:1},8,["class"])]),_:3})]),_:3})}}},Te={__name:"articles-list",props:{articles:{type:Array,default:()=>[]},cardComponent:{type:Object,default:F}},setup(e){return(n,i)=>(r(),g("div",null,[(r(!0),g(A,null,b(e.articles,(t,s)=>(r(),p(N(e.cardComponent),{key:s,article:t,class:"mb-4","preload-img":s<=4},null,8,["article","preload-img"]))),128))]))}},Ve=({page:e=1,category:n,limit:i})=>{const{perPage:t}=v().public,s=i||t;return S(`${n}_${e}_${s}`,()=>{const{perPage:l}=v().public;let a=j("articles").only(B.card);return n!=="all"&&(a=a.where({category:n})),a.sort({createdAt:-1}).skip((e-1)*l).limit(s).find()})};export{Re as _,Te as a,Ie as b,Ve as u};