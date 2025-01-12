import{$ as g,aa as C,m as S,I as b,x as A,z as _,A as m,a4 as $,a0 as k,a2 as N}from"./Cjq5mJ1X.js";const O=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:n,only:t,without:d,where:i,sort:f,limit:o,skip:l,locale:s,find:h}=C(a),p=S(()=>{var e;return(e=n.value)==null?void 0:e.includes("/_")}),y=!b().public.content.experimental.advanceQuery;A(()=>a,()=>r(),{deep:!0});const u=e=>y?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:r}=await _(`content-query-${$(a)}`,()=>{let e;return n.value?e=m(n.value):e=m(),t.value&&(e=e.only(t.value)),d.value&&(e=e.without(d.value)),i.value&&(e=e.where(i.value)),f.value&&(e=e.sort(f.value)),o.value&&(e=e.limit(o.value)),l.value&&(e=e.skip(l.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(u):h.value==="surround"?n.value?y?e.findSurround(n.value):e.withSurround(n.value).findOne().then(u):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(u)):e.find().then(u)});return{isPartial:p,data:c,refresh:r}},render(a){var v;const n=k(),{data:t,refresh:d,isPartial:i,path:f,only:o,without:l,where:s,sort:h,limit:p,skip:y,locale:u,find:c}=a,r={path:f,only:o,without:l,where:s,sort:h,limit:p,skip:y,locale:u,find:c};if(r.find==="one"){if(!t&&(n!=null&&n["not-found"]))return n["not-found"]({props:r,...this.$attrs});if(n!=null&&n.empty&&(t==null?void 0:t._type)==="markdown"&&!((v=t==null?void 0:t.body)!=null&&v.children.length))return n.empty({props:r,...this.$attrs})}else if((!t||!t.length)&&n!=null&&n["not-found"])return n["not-found"]({props:r,...this.$attrs});return n!=null&&n.default?n.default({data:t,refresh:d,isPartial:i,props:r,...this.$attrs}):((w,q)=>N("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:t,props:r,isPartial:i})}}),x=O;export{x as default};
