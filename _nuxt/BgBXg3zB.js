import{v as u,x as p,C as _,k as d,N as h,u as i,o as f,a as m,w as y,r as w,b as g,t as k,j as x,K as C}from"./ClO9ClXx.js";const N=e=>{if(!e)throw new Error("Nedd slug to get title!");return u(`title|${e}`,async()=>{const t=await p("articles").only(["title"]).where({slug:e}).findOne();return t==null?void 0:t.title})},S={__name:"article-inner-link",props:{slug:{type:String,default:""},hash:{type:String,default:""}},async setup(e){let t,s;const o=e,{data:r}=([t,s]=_(()=>N(o.slug)),t=await t,s(),t),l=d(()=>{const{slug:n,hash:a}=o;return{path:h({slug:n}),hash:a?`#${a}`:void 0}});return(n,a)=>{const c=C;return i(r)?(f(),m(c,{key:0,to:l.value},{default:y(()=>[w(n.$slots,"default",{},()=>[g("《"+k(i(r))+"》",1)])]),_:3},8,["to"])):x("",!0)}}};export{S as default};
