import{f as x,o as n,c as b,w as a,a as t,n as i,b as s,i as r,t as m,O as y,P as $,S as h,k as w,j as k,Q as A,h as o,d as C,r as v}from"./Jd92928_.js";const N="_img_1ygqe_2",B={img:N},I={class:"d-flex flex-column flex-grow-1"},S={class:"d-flex flex-row flex-grow-1 align-items-end justify-content-end mt-2 mt-lg-0"},V={__name:"article-card-normal",props:{article:{type:Object,default:null}},setup(e){return(l,c)=>{const d=y,_=$,u=h,g=w,f=k,p=A;return n(),b(p,{class:"d-flex flex-column flex-lg-row p-3 p-lg-4",article:e.article},{default:a(()=>[t(d,{class:i([l.$style.img,"me-lg-3 rounded"]),img:e.article.img,"img-class":["rounded",l.$style.img]},null,8,["class","img","img-class"]),s("div",I,[t(_,{class:"mt-2 pt-1 pt-lg-0 mt-lg-0 mb-2 mb-lg-3"},{default:a(()=>[r(m(e.article.title),1)]),_:1}),t(u,{description:e.article.description,class:"mb-0","text-line":"3"},null,8,["description"]),s("div",S,[t(g,{minutes:e.article.readingTime.minutes,class:"me-4"},null,8,["minutes"]),t(f,{document:e.article},null,8,["document"])])])]),_:1},8,["article"])}}},j={$style:B},q=x(V,[["__cssModules",j]]),D={class:"d-flex flex-column"},T={key:0,class:"mb-0"},M={class:"d-inline-block"},z={__name:"articles-list-pick-container",props:{title:{type:String,default:""}},setup(e){return(l,c)=>(n(),o("div",D,[e.title?(n(),o("h5",T,[s("div",M,[r(m(e.title)+" ",1),c[0]||(c[0]=s("div",{class:"w-50 border-bottom border-primary border-2 mt-2"},null,-1))])])):C("",!0),s("div",{class:i([e.title?"mt-4":"","flex-grow-1"])},[v(l.$slots,"default")],2)]))}};export{q as A,z as _};
