const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Ck1q9NqY.js","./DbvD-16J.js","./entry.sdncwqCN.css","./C-v3KzvZ.js","./Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{I as m,A as f,a3 as v,a4 as c,a5 as g,a6 as d,a7 as l,a8 as h,a9 as _,$ as y,aa as C,m as $,ab as w,ac as P,z as N,a0 as T,a2 as r,i as j}from"./DbvD-16J.js";const D=async e=>{const{content:a}=m().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const t=e.params(),s=a.experimental.stripQueryParameters?v(`/navigation/${`${c(t)}.${a.integrity}`}/${g(t)}.json`):v(`/navigation/${c(t)}.${a.integrity}.json`);if(d())return(await l(()=>import("./Ck1q9NqY.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(t);const n=await $fetch(s,{method:"GET",responseType:"json",params:a.experimental.stripQueryParameters?void 0:{_params:h(t),previewToken:_().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:a}=C(e),t=$(()=>{var n;return typeof((n=a.value)==null?void 0:n.params)=="function"?a.value.params():a.value});if(!t.value&&w("dd-navigation").value){const{navigation:n}=P();return{navigation:n}}const{data:s}=await N(`content-navigation-${c(t.value)}`,()=>D(t.value));return{navigation:s}},render(e){const a=T(),{navigation:t}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return a!=null&&a.default?a.default({navigation:t,...this.$attrs}):p(t)}}),x=E;export{x as default};
