const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D5DqRpDA.js","./Cpj98o6Y.js","./BBJlBWJ8.js"])))=>i.map(i=>d[i]);
import{am as m,an as v,m as _,q as b,ao as p,ap as w,Y as y,a6 as g,o as r,a as u,w as M,aq as C,d as a,n as c,t as E,r as k,ar as x}from"./D1mLeTax.js";const B={class:"modal-content"},L={class:"modal-header"},S={class:"modal-title h5"},V={class:"modal-body"},$={__name:"interface-modal",props:m({title:{type:String,default:""},size:{type:String,default:""},modalClass:{type:[String,Array],default:""}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:m(["hide","hidden","show","shown"],["update:modelValue"]),setup(o,{emit:f}){const s=v(o,"modelValue"),l=_(null);let e=null,t=null;b(s,n=>{e&&t&&e instanceof t&&(n?e.show():e.hide())}),p(()=>{e&&t&&e instanceof t&&e.dispose()});const d=f;return w(()=>{y(async()=>{t=(await g(()=>import("./D5DqRpDA.js").then(i=>i.m),__vite__mapDeps([0,1,2]),import.meta.url)).default,e=new t(l.value),l.value.addEventListener("hide.bs.modal",()=>{s.value=!1,d("hide")}),l.value.addEventListener("hidden.bs.modal",()=>{d("hidden")}),l.value.addEventListener("show.bs.modal",()=>{s.value=!0,d("show")}),l.value.addEventListener("shown.bs.modal",()=>{d("shown")})})}),(n,i)=>{const h=x;return r(),u(h,null,{default:M(()=>[(r(),u(C,{to:"body"},[a("div",{ref_key:"modal",ref:l,class:c(["modal fade",o.modalClass]),tabindex:"-1","aria-hidden":"true"},[a("div",{class:c(["modal-dialog modal-dialog-centered modal-dialog-scrollable",o.size?`modal-${o.size}`:""])},[a("div",B,[a("div",L,[a("div",S,E(o.title),1),a("button",{type:"button",class:"btn-close","aria-label":"關閉",onClick:i[0]||(i[0]=z=>s.value=!1)})]),a("div",V,[k(n.$slots,"default")])])],2)],2)]))]),_:3})}}};export{$ as _};