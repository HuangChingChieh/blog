import{_ as j}from"./lsoeOQF0.js";import{_ as L,O as D,o as c,a as g,w as a,n as m,u as t,h as F,f as y,d as s,P as H,b as M,t as P,k as O,j as W,Q as J,R as Q,I as q,E as x,v as G,z as K,S as p,H as I,c as b,l as v,F as B,J as U}from"./DbvD-16J.js";import{u as $,a as X,_ as Y,b as Z}from"./DcJ0Fzi0.js";import{I as tt}from"./DXl5T2rE.js";import{_ as et}from"./ixQ3orRL.js";import{A as st}from"./BO74igD-.js";import"./Cu_pgjeN.js";const lt="_card_8h8f6_2",at="_description_8h8f6_5",nt="_img_8h8f6_9",ct="_content_8h8f6_15",ot="_title_8h8f6_18",it={card:lt,description:at,img:nt,content:ct,title:ot},rt={class:"d-flex flex-column flex-grow-1 px-3 py-3"},dt={class:"d-flex flex-row justify-content-end align-items-center mt-3"},mt={__name:"article-card",props:{article:{type:Object,default:()=>({})},preloadImg:{type:Boolean,default:!1}},setup(n){const e=D(({containerMaxWidth:l,isMobile:C})=>{let u=l;const r=l.replace(/[^0-9]/g,"");return u=Number(r)*.4,u});return(l,C)=>{const u=J,r=Q;return c(),g(r,{class:m(["d-flex flex-column",l.$style.card]),article:n.article},{default:a(()=>[n.article.img?(c(),g(st,{key:0,img:n.article.img,class:m(l.$style.banner),sizes:t(e),preload:n.preloadImg,"img-class":l.$style.img},null,8,["img","class","sizes","preload","img-class"])):F("",!0),y("div",rt,[y("div",{class:m(l.$style.content)},[s(H,null,{default:a(()=>[M(P(n.article.title),1)]),_:1}),s(u,{description:n.article.description},null,8,["description"])],2),y("div",dt,[s(O,{minutes:n.article.readingTime.minutes,class:"me-4"},null,8,["minutes"]),s(W,{document:n.article},null,8,["document"])])])]),_:1},8,["class","article"])}}},ut={$style:it},z=L(mt,[["__cssModules",ut]]),_t="_topArticleImgClass_fytku_3",ft="_middle_fytku_7",pt={topArticleImgClass:_t,middle:ft},gt={class:"text-center"},yt={__name:"index",async setup(n){let e,l;const{appHost:C,description:u,categoriesMap:r}=q().public,{data:A}=([e,l]=x(()=>$({category:"frontend",limit:3})),e=await e,l(),e),{data:w}=([e,l]=x(()=>$({category:"life",limit:1})),e=await e,l(),e),{data:h}=([e,l]=x(()=>$({category:"linux",limit:1})),e=await e,l(),e),E=(_=[],f=[])=>{const d=[];return _.forEach(o=>{f.find(k=>k.slug===o.slug)||d.push(o)}),d},{data:R}=([e,l]=x(async()=>K("IndexArticlesNewest",async()=>{const{data:_}=await $({page:1,category:"all"});return E(_.value,[...w.value,...h.value,...A.value])})),e=await e,l(),e);return G({title:"",titleTemplate:"隨機手札",meta:[{key:"og:url",property:"og:url",content:C},{key:"og:description",property:"og:description",content:u}]}),(_,f)=>{const d=j,o=U,k=Z,N=tt,S=X,T=et,V=Y;return c(),g(N,null,{default:a(()=>[s(o,{cols:"12"},{default:a(()=>[s(N,null,{default:a(()=>[s(o,{lg:t(p)/3,md:t(p)/2,class:m(["order-1",`order-${t(I)}-1`])},{default:a(()=>[s(d,{title:t(r).life},{default:a(()=>[(c(!0),b(B,null,v(t(w),i=>(c(),g(z,{key:i.slug,article:i},null,8,["article"]))),128))]),_:1},8,["title"])]),_:1},8,["lg","md","class"]),s(o,{lg:t(p)/3,md:t(p)/2,class:m(["d-flex order-3",[_.$style.col,`order-${t(I)}-2`]])},{default:a(()=>[s(d,{title:t(r).frontend,class:"mt-5 mt-md-0 flex-grow-1"},{default:a(()=>[y("div",{class:m(_.$style.middle)},[(c(!0),b(B,null,v(t(A),i=>(c(),g(k,{key:i.slug,article:i},null,8,["article"]))),128))],2)]),_:1},8,["title"])]),_:1},8,["lg","md","class"]),s(o,{lg:t(p)/3,md:t(p),class:m(["order-2",`order-${t(I)}-3`])},{default:a(()=>[s(d,{title:t(r).linux,class:"mt-5 mt-lg-0"},{default:a(()=>[(c(!0),b(B,null,v(t(h),i=>(c(),g(z,{key:i.slug,article:i},null,8,["article"]))),128))]),_:1},8,["title"])]),_:1},8,["lg","md","class"])]),_:1})]),_:1}),s(o,{cols:"12"},{default:a(()=>f[0]||(f[0]=[y("hr",{class:"mt-5 mb-0"},null,-1)])),_:1}),s(V,{"reverse-order-when-mobile":"","select-not-in-articles":[...t(w),...t(A),...t(h)],class:"mt-5"},{default:a(()=>[s(d,{title:"最新文章"},{default:a(()=>[s(S,{articles:t(R)},null,8,["articles"]),y("div",gt,[s(T,{to:{path:"/category/all/1"},size:"lg",class:"mb-4"},{default:a(()=>f[1]||(f[1]=[M(" 更多文章 ")])),_:1})])]),_:1})]),_:1},8,["select-not-in-articles"])]),_:1})}}},xt={$style:pt},bt=L(yt,[["__cssModules",xt]]);export{bt as default};