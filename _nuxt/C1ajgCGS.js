import{aa as C,q as x,o as c,j as d,u as f,K as v,c as u,w as r,a as n,t as k,d as N,e as B,f as H,bh as w,a6 as T,p as F,r as m,U as z,h,b as g,i as l,_ as S,aH as V,F as L}from"./DrDuR_zy.js";import{_ as j}from"./BvbRICTi.js";const D=["src","height","width"],I={__name:"common-icon",props:{height:{type:[String,Number],default:64},bordered:{type:Boolean,default:!1}},setup(e){const t=[64,192,512],a=e,{base:o}=C().public,s=x(()=>{const{height:_}=a,i=t.find(p=>p>=Number(_));return`${o}pwa-${i}x${i}.png`});return(_,i)=>(c(),d("img",{src:f(s),height:e.height,width:e.height,class:v(["rounded-full shadow-sm",e.bordered?" border-[3px] border-white":""])},null,10,D))}},M={key:0,class:"ps-1"},$={__name:"common-header-icon",props:{icon:{type:String,default:""},text:{type:String,default:""}},setup(e){return(t,a)=>{const o=B,s=H;return c(),u(s,{class:"ms-4 lg:ms-normal flex flex-row items-center"},{default:r(()=>[n(o,{icon:e.icon,class:"text-xl mb-0 flex"},null,8,["icon"]),e.text?(c(),d("span",M,k(e.text),1)):N("",!0)]),_:1})}}},K={__name:"header-icon-categories",props:{showText:{type:Boolean,default:!1}},setup(e){const{openModal:t}=w(),{categoriesMap:a}=C().public,o=T(),s=x(()=>a[o.params.category]||"");return(_,i)=>{const p=$;return c(),u(p,{icon:"folder",title:"文章分類",text:f(s),onClick:i[0]||(i[0]=y=>f(t)("categories"))},null,8,["text"])}}},O={__name:"header-icon-theme",setup(e){const t=F(),a=x(()=>t.icon);return(o,s)=>{const _=$;return c(),u(_,{icon:f(a),onClick:f(t).toggle},null,8,["icon","onClick"])}}},R={__name:"header-icon-search",setup(e){const{openModal:t}=w();return(a,o)=>{const s=$;return c(),u(s,{icon:"search",title:"搜尋文章",onClick:o[0]||(o[0]=_=>f(t)("search"))})}}},b={__name:"interface-container",props:{tag:{type:String,default:"div"}},setup(e){return(t,a)=>(c(),u(z(e.tag),{class:"md:container mx-auto px-normal"},{default:r(()=>[m(t.$slots,"default")]),_:3}))}},U={},q={class:"ms-4 grow"},E={id:"header-icons",class:"flex items-center justify-end"};function G(e,t){const a=I,o=S,s=K,_=O,i=R,p=b,y=V;return c(),u(y,{tag:"header",class:"border-b-2 border-primary sticky top-0 left-0 shadow-sm w-full py-3 z-50"},{default:r(()=>[n(p,{class:"flex flex-row items-center"},{default:r(()=>[n(a,{bordered:"",class:"w-8 h-8 md:w-10 md:h-10"}),g("div",q,[n(o,{class:"font-bold block",to:"/"},{default:r(()=>t[0]||(t[0]=[l("隨機手札")])),_:1}),t[1]||(t[1]=g("small",{class:"text-muted hidden lg:block"},"雜七雜八之地",-1))]),g("div",E,[n(s,{"show-text":""}),n(_),n(i)])]),_:1})]),_:1})}const P=h(U,[["render",G]]),W={},Y={class:"font-bold mb-2 flex items-center text-primary"};function A(e,t){return c(),d("div",Y,[m(e.$slots,"default")])}const J=h(W,[["render",A]]),Q={},X={class:"small"};function Z(e,t){return c(),d("div",X,[m(e.$slots,"default")])}const tt=h(Q,[["render",Z]]),et={__name:"footer-block",props:{title:{type:String,default:""},titleTo:{type:[String,Object],default:""}},setup(e){return(t,a)=>{const o=S,s=J,_=tt;return c(),d("div",null,[n(s,null,{default:r(()=>[n(o,{to:e.titleTo,class:"text-primary hover:underline"},{default:r(()=>[l(k(e.title),1)]),_:1},8,["to"]),m(t.$slots,"title")]),_:3}),n(_,null,{default:r(()=>[m(t.$slots,"default")]),_:3})])}}},nt={__name:"footer-link",props:{href:{type:String,default:""}},setup(e){return(t,a)=>{const o=j;return c(),u(o,{href:e.href},{default:r(()=>[m(t.$slots,"default")]),_:3},8,["href"])}}},ot={},st={class:"py-4 lg:py-12 bg-foreground-dark md:bg-background-dark text-white"};function rt(e,t){const a=I,o=et,s=nt,_=b;return c(),d("footer",st,[n(_,{class:"grid grid-cols-1 md:grid-cols-3 gap-y-normal gap-x-12"},{default:r(()=>[n(o,{title:"關於我","title-to":{path:"/buy_me_a_tea",hash:"#關於我"}},{title:r(()=>[n(a,{height:"16",class:"ms-2"})]),default:r(()=>[t[0]||(t[0]=l(" 工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於 Vue 陣營。 "))]),_:1}),n(o,{title:"關於隨機手札","title-to":{path:"/buy_me_a_tea",hash:"#關於隨機手札"}},{default:r(()=>[t[4]||(t[4]=l(" 使用 ")),n(s,{href:"https://nuxt.com/"},{default:r(()=>t[1]||(t[1]=[l(" Nuxt 3 ")])),_:1}),t[5]||(t[5]=l(" 建置於 ")),n(s,{href:"https://pages.github.com/"},{default:r(()=>t[2]||(t[2]=[l(" Github Pages ")])),_:1}),t[6]||(t[6]=l(" 上，全站文字皆在 ")),n(s,{href:"https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hant"},{default:r(()=>t[3]||(t[3]=[l(" 創用CC BY-ND 4.0 條款 ")])),_:1}),t[7]||(t[7]=l(" 下提供。 "))]),_:1}),n(o,{title:"請我喝杯手搖飲吧！","title-to":{path:"/buy_me_a_tea",hash:"#請我喝杯手搖飲吧！"}},{default:r(()=>[t[9]||(t[9]=l(" 若這裡的經驗分享有幫助到你，可以透過")),n(s,{href:"https://ko-fi.com/chaoschaoshuang"},{default:r(()=>t[8]||(t[8]=[l(" Ko-fi ")])),_:1}),t[10]||(t[10]=l("請我喝杯手搖飲哦！ "))]),_:1})]),_:1})])}const at=h(ot,[["render",rt]]),ct={};function lt(e,t){const a=P,o=b,s=at;return c(),d(L,null,[n(a),n(o,{tag:"main",class:"py-normal md:mt-normal"},{default:r(()=>[m(e.$slots,"default")]),_:3}),n(s,{class:"mt-normal"})],64)}const mt=h(ct,[["render",lt]]);export{mt as default};
