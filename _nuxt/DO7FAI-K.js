import{_ as b,o as c,a as k,w as o,e as s,n as i,d as l,b as r,t as m,u as y,N as w,j as d,R as A,T as $,V as h,f as N,g as v,K as C,c as a,r as V}from"./ClO9ClXx.js";const B="_img_1ygqe_2",I={img:B},L={class:"d-flex flex-column flex-grow-1"},T={class:"d-flex flex-row flex-grow-1 align-items-end mt-2 mt-lg-0"},D={__name:"article-card-normal",props:{article:{type:Object,default:null}},setup(e){return(t,n)=>{const u=A,_=$,g=h,f=N,x=v,p=C;return e.article?(c(),k(p,{key:0,class:"d-flex flex-column flex-lg-row text-decoration-none p-3 p-lg-4 rounded shadow-sm bg-foreground",to:("getArticleLink"in t?t.getArticleLink:y(w))(e.article)},{default:o(()=>[s(u,{class:i([t.$style.img,"me-lg-3 rounded"]),img:e.article.img,"img-class":["rounded",t.$style.img]},null,8,["class","img","img-class"]),l("div",L,[s(_,{class:"mt-2 pt-1 pt-lg-0 mt-lg-0 mb-2 mb-lg-3"},{default:o(()=>[r(m(e.article.title),1)]),_:1}),s(g,{description:e.article.description,class:"mb-0"},null,8,["description"]),l("div",T,[s(f,{document:e.article,class:"flex-grow-1"},null,8,["document"]),s(x,{minutes:e.article.readingTime.minutes},null,8,["minutes"])])])]),_:1},8,["to"])):d("",!0)}}},S={$style:I},z=b(D,[["__cssModules",S]]),j={class:"d-flex flex-column"},M={key:0,class:"mb-0"},R={class:"d-inline-block"},E={__name:"articles-list-pick-container",props:{title:{type:String,default:""}},setup(e){return(t,n)=>(c(),a("div",j,[e.title?(c(),a("h5",M,[l("div",R,[r(m(e.title)+" ",1),n[0]||(n[0]=l("div",{class:"w-50 border-bottom border-primary border-2 mt-2"},null,-1))])])):d("",!0),l("div",{class:i([e.title?"mt-4":"","flex-grow-1"])},[V(t.$slots,"default")],2)]))}};export{z as A,E as _};