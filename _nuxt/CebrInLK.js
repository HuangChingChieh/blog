import{u as d,x as w,D as y,Z as H,v,I as g,$ as x,a0 as S,a1 as _,a2 as c}from"./Cjq5mJ1X.js";import $ from"./Ci9BvX6w.js";import b from"./CMphJmbD.js";import"./CtM8aRFG.js";import"./Dym_awWQ.js";import"./CxYJgpPD.js";const a=(s,f=y())=>{const e=d(s),p=g();w(()=>d(s),(n=e)=>{if(!f.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),p.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),H(()=>v(t))},{immediate:!0})},q=x({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(s){const{contentHead:f}=g().public.content,e=S(),{tag:p,excerpt:m,path:n,query:t,head:r}=s,u=r===void 0?f:r,l={...t||{},path:n||(t==null?void 0:t.path)||_(y().path),find:"one"},C=(i,o)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return c(b,l,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:D})=>{var h;return u&&a(i),(h=e.default)==null?void 0:h.call(e,{doc:i,refresh:o,isPartial:D,excerpt:m,...this.$attrs})}:({data:i})=>(u&&a(i),c($,{value:i,excerpt:m,tag:p,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):C("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),R=q;export{R as default};
