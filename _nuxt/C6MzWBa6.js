import{_ as M,D as O,m as b,o as p,c as y,f as g,n as c,d as n,w as r,e as f,F as L,l as N,b as B,t as P,i as F,E as C,I,v as V,a as D,u as _,L as E,g as R}from"./DbvD-16J.js";import{_ as S}from"./lsoeOQF0.js";import{u as j,_ as z,a as H}from"./DcJ0Fzi0.js";import"./Cu_pgjeN.js";import"./DXl5T2rE.js";const T="_link_17r71_2",q={link:T},J={class:"pagination justify-content-center mb-2"},K={class:"text-center small"},h=3,Q={__name:"interface-pagination",props:{linkGen:{type:Function,default:()=>{}},numberOfPages:{type:[String,Number],default:1}},setup(t){const i=t,m=O(),a=b(()=>Number(m.params.page)||1),o=b(()=>{const e=[],{numberOfPages:u}=i;if(u>=h){let s=a.value;const l=Math.ceil(h/2),d=u-l+1;for(s<l?s=l:s>d&&(s=d);e.length<h;)e.push(s-l+1+e.length)}else for(;e.length<u;)e.unshift(u-e.length);return e});return(e,u)=>{const s=F;return p(),y("nav",null,[g("ul",J,[g("li",{class:c(["page-item",{disabled:a.value===1}])},[n(s,{class:c(["page-link",e.$style.link]),to:t.linkGen(1)},{default:r(()=>[n(f,{icon:"chevron-double-left"})]),_:1},8,["class","to"])],2),g("li",{class:c(["page-item",{disabled:a.value===1}])},[n(s,{class:c(["page-link",e.$style.link]),to:t.linkGen(a.value>1?a.value-1:1)},{default:r(()=>[n(f,{icon:"chevron-left"})]),_:1},8,["class","to"])],2),(p(!0),y(L,null,N(o.value,l=>(p(),y("li",{key:l,class:c(["page-item",{active:l===a.value}])},[n(s,{class:c(["page-link",e.$style.link]),to:t.linkGen(l)},{default:r(()=>[B(P(l),1)]),_:2},1032,["class","to"])],2))),128)),g("li",{class:c(["page-item",{disabled:a.value===t.numberOfPages}])},[n(s,{class:c(["page-link",e.$style.link]),to:t.linkGen(a.value<t.numberOfPages?a.value+1:t.numberOfPages)},{default:r(()=>[n(f,{icon:"chevron-right"})]),_:1},8,["class","to"])],2),g("li",{class:c(["page-item",{disabled:a.value===t.numberOfPages}])},[n(s,{class:c(["page-link",e.$style.link]),to:t.linkGen(t.numberOfPages)},{default:r(()=>[n(f,{icon:"chevron-double-right"})]),_:1},8,["class","to"])],2)]),g("aside",K," 共 "+P(t.numberOfPages)+" 頁 ",1)])}}},U={$style:q},W=M(Q,[["__cssModules",U]]),X="_list_1ddhe_2",Y={list:X},Z={__name:"[page]",async setup(t){var $;let i,m;const a=O(),{category:o,page:e}=a.params,{categories:u}=([i,m]=C(()=>E()),i=await i,m(),i),{categoriesMap:s}=I().public,l=(($=u[o])==null?void 0:$.pageCount)||1,{data:d}=([i,m]=C(()=>j({page:e,category:o})),i=await i,m(),i),v=b(()=>`${s[o]}：第${e}頁`);V({title:v});const w=k=>({path:R({category:o,page:k})});return(k,te)=>{const G=W,x=S,A=z;return p(),D(A,{category:_(o)},{default:r(()=>[n(x,{title:_(v)},{default:r(()=>[n(H,{articles:_(d),class:c(k.$style.list)},null,8,["articles","class"]),n(G,{"link-gen":w,"number-of-pages":_(l)},null,8,["number-of-pages"])]),_:1},8,["title"])]),_:1},8,["category"])}}},ee={$style:Y},ie=M(Z,[["__cssModules",ee]]);export{ie as default};