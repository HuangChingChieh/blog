import{_ as V}from"./hd22tNIj.js";import{_ as z}from"./BA7AsFk-.js";import{u as d,a as H,_ as P,b as T}from"./CDOGEQP7.js";import{I as D}from"./NEEJ4rs5.js";import{_ as J}from"./Blc5DYdg.js";import{f as j,J as q,E as _,s as G,c as f,w as s,y as K,o as c,a as l,u as t,M as u,n as p,I as k,h as A,l as I,F as $,b,i as O,N as B}from"./Jd92928_.js";import"./BakiknL5.js";import"./DWAUYwb1.js";const Q="_topArticleImgClass_fytku_3",S="_middle_fytku_7",U={topArticleImgClass:Q,middle:S},W={class:"text-center"},X={__name:"index",async setup(Z){let e,a;const{appHost:h,description:L,categoriesMap:g}=q().public,{data:y}=([e,a]=_(()=>d({category:"frontend",limit:3})),e=await e,a(),e),{data:x}=([e,a]=_(()=>d({category:"life",limit:1})),e=await e,a(),e),{data:C}=([e,a]=_(()=>d({category:"linux",limit:1})),e=await e,a(),e),N=(i=[],m=[])=>{const r=[];return i.forEach(o=>{m.find(w=>w.slug===o.slug)||r.push(o)}),r},{data:E}=([e,a]=_(async()=>K("IndexArticlesNewest",async()=>{const{data:i}=await d({page:1,category:"all"});return N(i.value,[...x.value,...C.value,...y.value])})),e=await e,a(),e);return G({title:"",titleTemplate:"隨機手札",meta:[{key:"og:url",property:"og:url",content:h},{key:"og:description",property:"og:description",content:L}]}),(i,m)=>{const r=V,o=z,w=T,v=D,M=H,F=J,R=P;return c(),f(v,null,{default:s(()=>[l(o,{cols:"12"},{default:s(()=>[l(v,null,{default:s(()=>[l(o,{lg:t(u)/3,md:t(u)/2,class:p(["order-1",`order-${t(k)}-1`])},{default:s(()=>[l(r,{title:t(g).life},{default:s(()=>[(c(!0),A($,null,I(t(x),n=>(c(),f(B,{key:n.slug,article:n},null,8,["article"]))),128))]),_:1},8,["title"])]),_:1},8,["lg","md","class"]),l(o,{lg:t(u)/3,md:t(u)/2,class:p(["d-flex order-3",[i.$style.col,`order-${t(k)}-2`]])},{default:s(()=>[l(r,{title:t(g).frontend,class:"mt-5 mt-md-0 flex-grow-1"},{default:s(()=>[b("div",{class:p(i.$style.middle)},[(c(!0),A($,null,I(t(y),n=>(c(),f(w,{key:n.slug,article:n},null,8,["article"]))),128))],2)]),_:1},8,["title"])]),_:1},8,["lg","md","class"]),l(o,{lg:t(u)/3,md:t(u),class:p(["order-2",`order-${t(k)}-3`])},{default:s(()=>[l(r,{title:t(g).linux,class:"mt-5 mt-lg-0"},{default:s(()=>[(c(!0),A($,null,I(t(C),n=>(c(),f(B,{key:n.slug,article:n},null,8,["article"]))),128))]),_:1},8,["title"])]),_:1},8,["lg","md","class"])]),_:1})]),_:1}),l(o,{cols:"12"},{default:s(()=>m[0]||(m[0]=[b("hr",{class:"mt-5 mb-0"},null,-1)])),_:1}),l(R,{"reverse-order-when-mobile":"","select-not-in-articles":[...t(x),...t(y),...t(C)],class:"mt-5"},{default:s(()=>[l(r,{title:"最新文章"},{default:s(()=>[l(M,{articles:t(E)},null,8,["articles"]),b("div",W,[l(F,{to:{path:"/category/all/1"},size:"lg",class:"mb-4"},{default:s(()=>m[1]||(m[1]=[O(" 更多文章 ")])),_:1})])]),_:1})]),_:1},8,["select-not-in-articles"])]),_:1})}}},Y={$style:U},ct=j(X,[["__cssModules",Y]]);export{ct as default};