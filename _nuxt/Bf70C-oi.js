const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CFORz_ND.js","./Cpj98o6Y.js","./BBJlBWJ8.js"])))=>i.map(i=>d[i]);
import{k as C,av as F,a4 as Ke,af as Qe,aw as Ye,v as K,o as g,a as T,w as b,r as L,n as $,u as v,G as Y,U as Xe,_ as R,H as ee,c as x,e as m,J as Ee,d as A,F as te,i as Se,K as se,t as q,al as Ze,X as et,Z as tt,a7 as st,ao as ne,s as $e,m as P,ax as nt,Y as oe,an as ot,ay as it,N as ae,az as le,C as ce,x as rt,j as we,b as I,L as at,B as lt,l as ct,aA as ut,P as dt}from"./ClO9ClXx.js";import{u as De}from"./evB2dyb6.js";import{_ as ht}from"./Bsathne8.js";import{_ as Ce}from"./Dsn1-m6T.js";import{I as ft}from"./BnTY1XpH.js";import{_ as mt}from"./CyjxBgm-.js";import{_ as pt}from"./DUDh0Kdr.js";function Ve(n,e,t){const[s={},o]=typeof e=="string"?[{},e]:[e,t],i=C(()=>F(n)),r=s.key||Ke([o,typeof i.value=="string"?i.value:"",...gt(s)]);if(!r||typeof r!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+r);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const a=r===o?"$f"+r:r;if(!s.baseURL&&typeof i.value=="string"&&i.value[0]==="/"&&i.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:c,default:u,transform:h,pick:d,watch:p,immediate:_,getCachedData:f,deep:w,dedupe:V,...O}=s,E=Qe({...Ye,...O,cache:typeof s.cache=="boolean"?void 0:s.cache}),M={server:l,lazy:c,default:u,transform:h,pick:d,immediate:_,getCachedData:f,deep:w,dedupe:V,watch:p===!1?[]:[E,i,...p||[]]};let y;return K(a,()=>{var W;(W=y==null?void 0:y.abort)==null||W.call(y,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),y=typeof AbortController<"u"?new AbortController:{};const S=F(s.timeout);let j;return S&&(j=setTimeout(()=>y.abort(new DOMException("Request aborted due to timeout.","AbortError")),S),y.signal.onabort=()=>clearTimeout(j)),(s.$fetch||globalThis.$fetch)(i.value,{signal:y.signal,...E}).finally(()=>{clearTimeout(j)})},M)}function gt(n){var t;const e=[((t=F(n.method))==null?void 0:t.toUpperCase())||"GET",F(n.baseURL)];for(const s of[n.params||n.query]){const o=F(s);if(!o)continue;const i={};for(const[r,a]of Object.entries(o))i[F(r)]=F(a);e.push(i)}return e}function _t(n,e,{signal:t,edges:s}={}){let o,i=null;const r=s!=null&&s.includes("leading"),a=s==null||s.includes("trailing"),l=()=>{i!==null&&(n.apply(o,i),o=void 0,i=null)},c=()=>{a&&l(),p()};let u=null;const h=()=>{u!=null&&clearTimeout(u),u=setTimeout(()=>{u=null,c()},e)},d=()=>{u!==null&&(clearTimeout(u),u=null)},p=()=>{d(),o=void 0,i=null},_=()=>{d(),l()},f=function(...w){if(t!=null&&t.aborted)return;o=this,i=w;const V=u==null;h(),r&&V&&l()};return f.schedule=h,f.cancel=p,f.flush=_,t==null||t.addEventListener("abort",p,{once:!0}),f}const yt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ue(n){return n.replace(/[&<>"']/g,e=>yt[e])}function X(n){return n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}const Me={__name:"interface-container",props:{tag:{type:String,default:"div"}},setup(n){return(e,t)=>(g(),T(Xe(n.tag),{class:$(`container-${v(Y)}`)},{default:b(()=>[L(e.$slots,"default")]),_:3},8,["class"]))}},vt="_bordered_t6qrn_2",wt={bordered:vt},bt=["src","height","width"],Ie=[64,192,512],xt={},kt=Object.assign(xt,{__name:"common-icon",props:{height:{type:[String,Number],default:Ie[0]},bordered:{type:Boolean,default:!1}},setup(n){const e=n,{base:t}=ee().public,s=C(()=>{const{height:o}=e,i=Ie.find(r=>r>=Number(o));return`${t}pwa-${i}x${i}.png`});return(o,i)=>(g(),x("img",{src:s.value,height:n.height,width:n.height,class:$(["common-icon rounded-circle shadow-sm",{bordered:n.bordered,[o.$style.bordered]:n.bordered}])},null,10,bt))}}),St={$style:wt},Ne=R(kt,[["__cssModules",St]]),$t={class:"ps-1"},ie={__name:"common-header-icon",props:{icon:{type:String,default:""}},setup(n){return(e,t)=>(g(),T(ht,{variant:"link",class:"d-flex align-items-center text-decoration-none ms-3 ms-lg-4"},{default:b(()=>[m(Ee,{icon:n.icon,class:"h5 mb-0 d-flex"},null,8,["icon"]),A("span",$t,[L(e.$slots,"default")])]),_:3}))}},Re={__name:"interface-nav",props:{vertical:{type:Boolean,default:!1},items:{type:Array,default:()=>[]},activeClass:{type:[String,Array],default:""},linkClasses:{type:[String,Array],default:""},itemClass:{type:[String,Array],default:""},linkGenerateFunc:{type:Function,default:()=>""}},emits:["click-item"],setup(n,{emit:e}){const t=e;return(s,o)=>{const i=se;return g(),x("ul",{class:$(["nav",n.vertical?"flex-column":""])},[(g(!0),x(te,null,Se(n.items,(r,a)=>(g(),x("li",{key:a,class:$(["nav-item",n.itemClass])},[m(i,{to:n.linkGenerateFunc(r),class:$(["nav-link",n.linkClasses]),"active-class":n.activeClass,onClick:l=>t("click-item",r)},{default:b(()=>[L(s.$slots,"item",{item:r})]),_:2},1032,["to","class","active-class","onClick"]),L(s.$slots,"default",{item:r})],2))),128))],2)}}},Ct={__name:"modal-toc-item",props:{minDepth:{type:Number,default:2},item:{type:Object,default:()=>({text:"",depth:2})}},emits:["scroll-to"],setup(n,{emit:e}){const t=n,s=e,o=()=>{tt(()=>{const{id:r}=t.item,a=document.querySelector(`#${r}`);a instanceof HTMLElement&&a.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}),s("scroll-to")},i=C(()=>{const r=t.item.depth-t.minDepth;return{"padding-left":`${r}rem`,opacity:1-r*.1,"font-size":`${(1-r*.1)*100}%`}});return(r,a)=>(g(),x("span",{class:"d-block px-3 py-2",onClick:et(o,["prevent","stop"])},[A("span",{style:Ze(i.value),class:"d-block"},q(n.item.text),5)]))}},Mt="_navLink_y0bey_2",Ot={navLink:Mt},zt={__name:"modal-toc-nav",props:{items:{type:Array,default:()=>[]},minDepth:{type:Number,default:2}},emits:["scroll-to"],setup(n,{emit:e}){const t=e,s=({id:o})=>({hash:`#${o}`});return(o,i)=>(g(),T(Re,{items:n.items,"link-generate-func":s,"link-classes":["p-0 border-start",o.$style.navLink],vertical:""},{item:b(({item:r})=>[m(Ct,{item:r,"min-depth":n.minDepth,onScrollTo:i[0]||(i[0]=a=>t("scroll-to"))},null,8,["item","min-depth"])]),default:b(({item:r})=>[L(o.$slots,"default",{item:r})]),_:3},8,["items","link-classes"]))}},Vt={$style:Ot},Fe=R(zt,[["__cssModules",Vt]]);let de=null,he=null;const It={async mounted(n){de||(de=(await st(async()=>{const{default:e}=await import("./CFORz_ND.js").then(t=>t.s);return{default:e}},__vite__mapDeps([0,1,2]),import.meta.url)).default),he=new de(document.body,{target:n})},beforeUnmount(){he.dispose()},updated(){he.refresh()}},Ft={__name:"modal-toc",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=ne(n,"modelValue"),t=()=>{},s=De(),o=C(()=>{const{toc:r}=s;return Array.isArray(r)&&r.length>0?r.reduce((a,l)=>Math.min(a,l.depth),r[0].depth):2}),i=()=>{e.value=!1};return(r,a)=>(g(),T(Ce,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),title:"摘要","modal-class":"modal-toc",onHidden:t},{default:b(()=>[$e((g(),T(Fe,{items:v(s).toc,"min-depth":o.value,onScrollTo:i},{default:b(({item:l})=>[m(Fe,{items:l.children,"min-depth":o.value,onScrollTo:i},null,8,["items","min-depth"])]),_:1},8,["items","min-depth"])),[[v(It)]])]),_:1},8,["modelValue"]))}},Tt={__name:"header-icon-toc",props:{iconClass:{type:[String,Array],default:""}},setup(n){const e=P(!1),t=De(),s=C(()=>{const{toc:o}=t;return Array.isArray(o)&&o.length>0});return(o,i)=>$e((g(),x("div",null,[m(ie,{icon:"card-list",title:"文章摘要",class:$(n.iconClass),onClick:i[0]||(i[0]=r=>e.value=!0)},null,8,["class"]),m(Ft,{modelValue:v(e),"onUpdate:modelValue":i[1]||(i[1]=r=>oe(e)?e.value=r:null)},null,8,["modelValue"])],512)),[[nt,s.value]])}},Lt=["placeholder"],At={__name:"interface-form-input",props:ot({placeholder:{type:String,default:""}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=ne(n,"modelValue");return(t,s)=>$e((g(),x("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),placeholder:n.placeholder,type:"text",class:"form-control"},null,8,Lt)),[[it,e.value,void 0,{trim:!0}]])}},jt=["innerHTML"],Et={__name:"text-highlight",props:{keyword:{type:[String,Array],default:""},text:{type:String,default:""}},setup(n){const e=n,t=C(()=>{const{keyword:o}=e;return typeof o=="string"?o.split(" ").map(i=>X(ue(i))):Array.isArray(o)?o.map(i=>X(ue(i))):[]}),s=C(()=>{const{text:o}=e,i=new RegExp(t.value.join("|"),"gi");return typeof o=="string"?ue(o).replace(i,r=>`<b class="text-primary">${r}</b>`):o});return(o,i)=>(g(),x("span",{innerHTML:s.value},null,8,jt))}},fe={__name:"article-search-result-text",props:{to:{type:[String,Object],default:""},keyword:{type:String,default:""},textClass:{type:[String,Object,Array],default:""},text:{type:String,default:""},textMaxLength:{type:[Number,String],default:150,validator:n=>!isNaN(Number(n))},breakDown:{type:Boolean,default:!1}},setup(n){const e=n,t=C(()=>e.keyword.split(" ")),s=C(()=>o(e.text,t.value)),o=(r="",a=[])=>{const l=[];return r&&Array.isArray(a)&&a.length>0&&a.forEach(c=>{let u=null;for(;!u&&c;)u=new RegExp(X(c),"i").test(r),u?l.push(c):c=c.substring(0,c.length-1)}),l},i=C(()=>{let{text:r}=e;const{textMaxLength:a}=e;if(r.length>a){const l=new RegExp(s.value.map(h=>X(h)).join("|"),"gi"),c=[...r.matchAll(l)];let{startIndex:u}=c.reduce((h,{index:d})=>{const{maxContainCount:p}=h,_=c.filter(f=>d+a>=f.index&&f.index>=d).length;return _>p&&(h.maxContainCount=_,h.startIndex=d),h},{maxContainCount:0,startIndex:0});u=Math.min(u,r.length-a-1),r=r.substring(u,u+a-1)}return r});return(r,a)=>{const l=se;return g(),T(l,{to:n.to,class:"text-decoration-none d-flex flex-column",onClick:a[0]||(a[0]=c=>r.$emit("click"))},{default:b(()=>[m(Et,{keyword:v(s),text:n.breakDown?v(i):n.text,class:$(n.textClass)},null,8,["keyword","text","class"])]),_:1},8,["to"])}}},Dt={__name:"article-search-result",props:{article:{type:Object,default:()=>({})},keyword:{type:String,default:""},slug:{type:String,default:""}},setup(n){return(e,t)=>(g(),x("div",null,[m(fe,{keyword:n.keyword,to:v(ae)({slug:n.slug}),text:n.article.title,class:"h5 mb-3 fw-bolder",onClick:t[0]||(t[0]=s=>e.$emit("navigate"))},null,8,["keyword","to","text"]),(g(!0),x(te,null,Se(n.article.paragraphs,s=>(g(),x("div",{key:s.id},[m(fe,{keyword:n.keyword,to:v(ae)({slug:n.slug,hash:s.hash}),text:s.title,class:"text-body fw-bold my-2",onClick:t[1]||(t[1]=o=>e.$emit("navigate"))},null,8,["keyword","to","text"]),m(fe,{keyword:n.keyword,to:v(ae)({slug:n.slug,hash:s.hash}),text:s.content,class:"text-muted text-line-3 my-2","break-down":"",onClick:t[2]||(t[2]=o=>e.$emit("navigate"))},null,8,["keyword","to","text"])]))),128))]))}};function Q(n,e,t,s){function o(i){return i instanceof t?i:new t(function(r){r(i)})}return new(t||(t=Promise))(function(i,r){function a(u){try{c(s.next(u))}catch(h){r(h)}}function l(u){try{c(s.throw(u))}catch(h){r(h)}}function c(u){u.done?i(u.value):o(u.value).then(a,l)}c((s=s.apply(n,[])).next())})}const Nt="ENTRIES",Be="KEYS",Ue="VALUES",z="";class me{constructor(e,t){const s=e._tree,o=Array.from(s.keys());this.set=e,this._type=t,this._path=o.length>0?[{node:s,keys:o}]:[]}next(){const e=this.dive();return this.backtrack(),e}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:e,keys:t}=U(this._path);if(U(t)===z)return{done:!1,value:this.result()};const s=e.get(U(t));return this._path.push({node:s,keys:Array.from(s.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const e=U(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:e})=>U(e)).filter(e=>e!==z).join("")}value(){return U(this._path).node.get(z)}result(){switch(this._type){case Ue:return this.value();case Be:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const U=n=>n[n.length-1],Rt=(n,e,t)=>{const s=new Map;if(e===void 0)return s;const o=e.length+1,i=o+t,r=new Uint8Array(i*o).fill(t+1);for(let a=0;a<o;++a)r[a]=a;for(let a=1;a<i;++a)r[a*o]=a;return We(n,e,t,s,r,1,o,""),s},We=(n,e,t,s,o,i,r,a)=>{const l=i*r;e:for(const c of n.keys())if(c===z){const u=o[l-1];u<=t&&s.set(a,[n.get(c),u])}else{let u=i;for(let h=0;h<c.length;++h,++u){const d=c[h],p=r*u,_=p-r;let f=o[p];const w=Math.max(0,u-t-1),V=Math.min(r-1,u+t);for(let O=w;O<V;++O){const E=d!==e[O],M=o[_+O]+ +E,y=o[_+O+1]+1,k=o[p+O]+1,S=o[p+O+1]=Math.min(M,y,k);S<f&&(f=S)}if(f>t)continue e}We(n.get(c),e,t,s,o,u,r,a+c)}};class D{constructor(e=new Map,t=""){this._size=void 0,this._tree=e,this._prefix=t}atPrefix(e){if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");const[t,s]=Z(this._tree,e.slice(this._prefix.length));if(t===void 0){const[o,i]=Oe(s);for(const r of o.keys())if(r!==z&&r.startsWith(i)){const a=new Map;return a.set(r.slice(i.length),o.get(r)),new D(a,e)}}return new D(t,e)}clear(){this._size=void 0,this._tree.clear()}delete(e){return this._size=void 0,Bt(this._tree,e)}entries(){return new me(this,Nt)}forEach(e){for(const[t,s]of this)e(t,s,this)}fuzzyGet(e,t){return Rt(this._tree,e,t)}get(e){const t=be(this._tree,e);return t!==void 0?t.get(z):void 0}has(e){const t=be(this._tree,e);return t!==void 0&&t.has(z)}keys(){return new me(this,Be)}set(e,t){if(typeof e!="string")throw new Error("key must be a string");return this._size=void 0,pe(this._tree,e).set(z,t),this}get size(){if(this._size)return this._size;this._size=0;const e=this.entries();for(;!e.next().done;)this._size+=1;return this._size}update(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;const s=pe(this._tree,e);return s.set(z,t(s.get(z))),this}fetch(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;const s=pe(this._tree,e);let o=s.get(z);return o===void 0&&s.set(z,o=t()),o}values(){return new me(this,Ue)}[Symbol.iterator](){return this.entries()}static from(e){const t=new D;for(const[s,o]of e)t.set(s,o);return t}static fromObject(e){return D.from(Object.entries(e))}}const Z=(n,e,t=[])=>{if(e.length===0||n==null)return[n,t];for(const s of n.keys())if(s!==z&&e.startsWith(s))return t.push([n,s]),Z(n.get(s),e.slice(s.length),t);return t.push([n,e]),Z(void 0,"",t)},be=(n,e)=>{if(e.length===0||n==null)return n;for(const t of n.keys())if(t!==z&&e.startsWith(t))return be(n.get(t),e.slice(t.length))},pe=(n,e)=>{const t=e.length;e:for(let s=0;n&&s<t;){for(const i of n.keys())if(i!==z&&e[s]===i[0]){const r=Math.min(t-s,i.length);let a=1;for(;a<r&&e[s+a]===i[a];)++a;const l=n.get(i);if(a===i.length)n=l;else{const c=new Map;c.set(i.slice(a),l),n.set(e.slice(s,s+a),c),n.delete(i),n=c}s+=a;continue e}const o=new Map;return n.set(e.slice(s),o),o}return n},Bt=(n,e)=>{const[t,s]=Z(n,e);if(t!==void 0){if(t.delete(z),t.size===0)Pe(s);else if(t.size===1){const[o,i]=t.entries().next().value;qe(s,o,i)}}},Pe=n=>{if(n.length===0)return;const[e,t]=Oe(n);if(e.delete(t),e.size===0)Pe(n.slice(0,-1));else if(e.size===1){const[s,o]=e.entries().next().value;s!==z&&qe(n.slice(0,-1),s,o)}},qe=(n,e,t)=>{if(n.length===0)return;const[s,o]=Oe(n);s.set(o+e,t),s.delete(o)},Oe=n=>n[n.length-1],ze="or",Je="and",Ut="and_not";class N{constructor(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');const t=e.autoVacuum==null||e.autoVacuum===!0?ye:e.autoVacuum;this._options=Object.assign(Object.assign(Object.assign({},_e),e),{autoVacuum:t,searchOptions:Object.assign(Object.assign({},Te),e.searchOptions||{}),autoSuggestOptions:Object.assign(Object.assign({},Gt),e.autoSuggestOptions||{})}),this._index=new D,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ke,this.addFields(this._options.fields)}add(e){const{extractField:t,tokenize:s,processTerm:o,fields:i,idField:r}=this._options,a=t(e,r);if(a==null)throw new Error(`MiniSearch: document does not have ID field "${r}"`);if(this._idToShortId.has(a))throw new Error(`MiniSearch: duplicate ID ${a}`);const l=this.addDocumentId(a);this.saveStoredFields(l,e);for(const c of i){const u=t(e,c);if(u==null)continue;const h=s(u.toString(),c),d=this._fieldIds[c],p=new Set(h).size;this.addFieldLength(l,d,this._documentCount-1,p);for(const _ of h){const f=o(_,c);if(Array.isArray(f))for(const w of f)this.addTerm(d,l,w);else f&&this.addTerm(d,l,f)}}}addAll(e){for(const t of e)this.add(t)}addAllAsync(e,t={}){const{chunkSize:s=10}=t,o={chunk:[],promise:Promise.resolve()},{chunk:i,promise:r}=e.reduce(({chunk:a,promise:l},c,u)=>(a.push(c),(u+1)%s===0?{chunk:[],promise:l.then(()=>new Promise(h=>setTimeout(h,0))).then(()=>this.addAll(a))}:{chunk:a,promise:l}),o);return r.then(()=>this.addAll(i))}remove(e){const{tokenize:t,processTerm:s,extractField:o,fields:i,idField:r}=this._options,a=o(e,r);if(a==null)throw new Error(`MiniSearch: document does not have ID field "${r}"`);const l=this._idToShortId.get(a);if(l==null)throw new Error(`MiniSearch: cannot remove document with ID ${a}: it is not in the index`);for(const c of i){const u=o(e,c);if(u==null)continue;const h=t(u.toString(),c),d=this._fieldIds[c],p=new Set(h).size;this.removeFieldLength(l,d,this._documentCount,p);for(const _ of h){const f=s(_,c);if(Array.isArray(f))for(const w of f)this.removeTerm(d,l,w);else f&&this.removeTerm(d,l,f)}}this._storedFields.delete(l),this._documentIds.delete(l),this._idToShortId.delete(a),this._fieldLength.delete(l),this._documentCount-=1}removeAll(e){if(e)for(const t of e)this.remove(t);else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new D,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}}discard(e){const t=this._idToShortId.get(e);if(t==null)throw new Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);this._idToShortId.delete(e),this._documentIds.delete(t),this._storedFields.delete(t),(this._fieldLength.get(t)||[]).forEach((s,o)=>{this.removeFieldLength(t,o,this._documentCount,s)}),this._fieldLength.delete(t),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()}maybeAutoVacuum(){if(this._options.autoVacuum===!1)return;const{minDirtFactor:e,minDirtCount:t,batchSize:s,batchWait:o}=this._options.autoVacuum;this.conditionalVacuum({batchSize:s,batchWait:o},{minDirtCount:t,minDirtFactor:e})}discardAll(e){const t=this._options.autoVacuum;try{this._options.autoVacuum=!1;for(const s of e)this.discard(s)}finally{this._options.autoVacuum=t}this.maybeAutoVacuum()}replace(e){const{idField:t,extractField:s}=this._options,o=s(e,t);this.discard(o),this.add(e)}vacuum(e={}){return this.conditionalVacuum(e)}conditionalVacuum(e,t){return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(()=>{const s=this._enqueuedVacuumConditions;return this._enqueuedVacuumConditions=ke,this.performVacuuming(e,s)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)}performVacuuming(e,t){return Q(this,void 0,void 0,function*(){const s=this._dirtCount;if(this.vacuumConditionsMet(t)){const o=e.batchSize||xe.batchSize,i=e.batchWait||xe.batchWait;let r=1;for(const[a,l]of this._index){for(const[c,u]of l)for(const[h]of u)this._documentIds.has(h)||(u.size<=1?l.delete(c):u.delete(h));this._index.get(a).size===0&&this._index.delete(a),r%o===0&&(yield new Promise(c=>setTimeout(c,i))),r+=1}this._dirtCount-=s}yield null,this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null})}vacuumConditionsMet(e){if(e==null)return!0;let{minDirtCount:t,minDirtFactor:s}=e;return t=t||ye.minDirtCount,s=s||ye.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=s}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}has(e){return this._idToShortId.has(e)}getStoredFields(e){const t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)}search(e,t={}){const{searchOptions:s}=this._options,o=Object.assign(Object.assign({},s),t),i=this.executeQuery(e,t),r=[];for(const[a,{score:l,terms:c,match:u}]of i){const h=c.length||1,d={id:this._documentIds.get(a),score:l*h,terms:Object.keys(u),queryTerms:c,match:u};Object.assign(d,this._storedFields.get(a)),(o.filter==null||o.filter(d))&&r.push(d)}return e===N.wildcard&&o.boostDocument==null||r.sort(Ae),r}autoSuggest(e,t={}){t=Object.assign(Object.assign({},this._options.autoSuggestOptions),t);const s=new Map;for(const{score:i,terms:r}of this.search(e,t)){const a=r.join(" "),l=s.get(a);l!=null?(l.score+=i,l.count+=1):s.set(a,{score:i,terms:r,count:1})}const o=[];for(const[i,{score:r,terms:a,count:l}]of s)o.push({suggestion:i,terms:a,score:r/l});return o.sort(Ae),o}get documentCount(){return this._documentCount}get termCount(){return this._index.size}static loadJSON(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)}static loadJSONAsync(e,t){return Q(this,void 0,void 0,function*(){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJSAsync(JSON.parse(e),t)})}static getDefault(e){if(_e.hasOwnProperty(e))return ge(_e,e);throw new Error(`MiniSearch: unknown option "${e}"`)}static loadJS(e,t){const{index:s,documentIds:o,fieldLength:i,storedFields:r,serializationVersion:a}=e,l=this.instantiateMiniSearch(e,t);l._documentIds=J(o),l._fieldLength=J(i),l._storedFields=J(r);for(const[c,u]of l._documentIds)l._idToShortId.set(u,c);for(const[c,u]of s){const h=new Map;for(const d of Object.keys(u)){let p=u[d];a===1&&(p=p.ds),h.set(parseInt(d,10),J(p))}l._index.set(c,h)}return l}static loadJSAsync(e,t){return Q(this,void 0,void 0,function*(){const{index:s,documentIds:o,fieldLength:i,storedFields:r,serializationVersion:a}=e,l=this.instantiateMiniSearch(e,t);l._documentIds=yield G(o),l._fieldLength=yield G(i),l._storedFields=yield G(r);for(const[u,h]of l._documentIds)l._idToShortId.set(h,u);let c=0;for(const[u,h]of s){const d=new Map;for(const p of Object.keys(h)){let _=h[p];a===1&&(_=_.ds),d.set(parseInt(p,10),yield G(_))}++c%1e3===0&&(yield Ge(0)),l._index.set(u,d)}return l})}static instantiateMiniSearch(e,t){const{documentCount:s,nextId:o,fieldIds:i,averageFieldLength:r,dirtCount:a,serializationVersion:l}=e;if(l!==1&&l!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");const c=new N(t);return c._documentCount=s,c._nextId=o,c._idToShortId=new Map,c._fieldIds=i,c._avgFieldLength=r,c._dirtCount=a||0,c._index=new D,c}executeQuery(e,t={}){if(e===N.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){const d=Object.assign(Object.assign(Object.assign({},t),e),{queries:void 0}),p=e.queries.map(_=>this.executeQuery(_,d));return this.combineResults(p,d.combineWith)}const{tokenize:s,processTerm:o,searchOptions:i}=this._options,r=Object.assign(Object.assign({tokenize:s,processTerm:o},i),t),{tokenize:a,processTerm:l}=r,h=a(e).flatMap(d=>l(d)).filter(d=>!!d).map(Jt(r)).map(d=>this.executeQuerySpec(d,r));return this.combineResults(h,r.combineWith)}executeQuerySpec(e,t){const s=Object.assign(Object.assign({},this._options.searchOptions),t),o=(s.fields||this._options.fields).reduce((f,w)=>Object.assign(Object.assign({},f),{[w]:ge(s.boost,w)||1}),{}),{boostDocument:i,weights:r,maxFuzzy:a,bm25:l}=s,{fuzzy:c,prefix:u}=Object.assign(Object.assign({},Te.weights),r),h=this._index.get(e.term),d=this.termResults(e.term,e.term,1,e.termBoost,h,o,i,l);let p,_;if(e.prefix&&(p=this._index.atPrefix(e.term)),e.fuzzy){const f=e.fuzzy===!0?.2:e.fuzzy,w=f<1?Math.min(a,Math.round(e.term.length*f)):f;w&&(_=this._index.fuzzyGet(e.term,w))}if(p)for(const[f,w]of p){const V=f.length-e.term.length;if(!V)continue;_==null||_.delete(f);const O=u*f.length/(f.length+.3*V);this.termResults(e.term,f,O,e.termBoost,w,o,i,l,d)}if(_)for(const f of _.keys()){const[w,V]=_.get(f);if(!V)continue;const O=c*f.length/(f.length+V);this.termResults(e.term,f,O,e.termBoost,w,o,i,l,d)}return d}executeWildcardQuery(e){const t=new Map,s=Object.assign(Object.assign({},this._options.searchOptions),e);for(const[o,i]of this._documentIds){const r=s.boostDocument?s.boostDocument(i,"",this._storedFields.get(o)):1;t.set(o,{score:r,terms:[],match:{}})}return t}combineResults(e,t=ze){if(e.length===0)return new Map;const s=t.toLowerCase(),o=Wt[s];if(!o)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(o)||new Map}toJSON(){const e=[];for(const[t,s]of this._index){const o={};for(const[i,r]of s)o[i]=Object.fromEntries(r);e.push([t,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:e,serializationVersion:2}}termResults(e,t,s,o,i,r,a,l,c=new Map){if(i==null)return c;for(const u of Object.keys(r)){const h=r[u],d=this._fieldIds[u],p=i.get(d);if(p==null)continue;let _=p.size;const f=this._avgFieldLength[d];for(const w of p.keys()){if(!this._documentIds.has(w)){this.removeTerm(d,w,t),_-=1;continue}const V=a?a(this._documentIds.get(w),t,this._storedFields.get(w)):1;if(!V)continue;const O=p.get(w),E=this._fieldLength.get(w)[d],M=qt(O,_,this._documentCount,E,f,l),y=s*o*h*V*M,k=c.get(w);if(k){k.score+=y,Ht(k.terms,e);const S=ge(k.match,t);S?S.push(u):k.match[t]=[u]}else c.set(w,{score:y,terms:[e],match:{[t]:[u]}})}}return c}addTerm(e,t,s){const o=this._index.fetch(s,je);let i=o.get(e);if(i==null)i=new Map,i.set(t,1),o.set(e,i);else{const r=i.get(t);i.set(t,(r||0)+1)}}removeTerm(e,t,s){if(!this._index.has(s)){this.warnDocumentChanged(t,e,s);return}const o=this._index.fetch(s,je),i=o.get(e);i==null||i.get(t)==null?this.warnDocumentChanged(t,e,s):i.get(t)<=1?i.size<=1?o.delete(e):i.delete(t):i.set(t,i.get(t)-1),this._index.get(s).size===0&&this._index.delete(s)}warnDocumentChanged(e,t,s){for(const o of Object.keys(this._fieldIds))if(this._fieldIds[o]===t){this._options.logger("warn",`MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${s}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}}addDocumentId(e){const t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t}addFields(e){for(let t=0;t<e.length;t++)this._fieldIds[e[t]]=t}addFieldLength(e,t,s,o){let i=this._fieldLength.get(e);i==null&&this._fieldLength.set(e,i=[]),i[t]=o;const a=(this._avgFieldLength[t]||0)*s+o;this._avgFieldLength[t]=a/(s+1)}removeFieldLength(e,t,s,o){if(s===1){this._avgFieldLength[t]=0;return}const i=this._avgFieldLength[t]*s-o;this._avgFieldLength[t]=i/(s-1)}saveStoredFields(e,t){const{storeFields:s,extractField:o}=this._options;if(s==null||s.length===0)return;let i=this._storedFields.get(e);i==null&&this._storedFields.set(e,i={});for(const r of s){const a=o(t,r);a!==void 0&&(i[r]=a)}}}N.wildcard=Symbol("*");const ge=(n,e)=>Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0,Wt={[ze]:(n,e)=>{for(const t of e.keys()){const s=n.get(t);if(s==null)n.set(t,e.get(t));else{const{score:o,terms:i,match:r}=e.get(t);s.score=s.score+o,s.match=Object.assign(s.match,r),Le(s.terms,i)}}return n},[Je]:(n,e)=>{const t=new Map;for(const s of e.keys()){const o=n.get(s);if(o==null)continue;const{score:i,terms:r,match:a}=e.get(s);Le(o.terms,r),t.set(s,{score:o.score+i,terms:o.terms,match:Object.assign(o.match,a)})}return t},[Ut]:(n,e)=>{for(const t of e.keys())n.delete(t);return n}},Pt={k:1.2,b:.7,d:.5},qt=(n,e,t,s,o,i)=>{const{k:r,b:a,d:l}=i;return Math.log(1+(t-e+.5)/(e+.5))*(l+n*(r+1)/(n+r*(1-a+a*s/o)))},Jt=n=>(e,t,s)=>{const o=typeof n.fuzzy=="function"?n.fuzzy(e,t,s):n.fuzzy||!1,i=typeof n.prefix=="function"?n.prefix(e,t,s):n.prefix===!0,r=typeof n.boostTerm=="function"?n.boostTerm(e,t,s):1;return{term:e,fuzzy:o,prefix:i,termBoost:r}},_e={idField:"id",extractField:(n,e)=>n[e],tokenize:n=>n.split(Kt),processTerm:n=>n.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(n,e)=>{typeof(console==null?void 0:console[n])=="function"&&console[n](e)},autoVacuum:!0},Te={combineWith:ze,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Pt},Gt={combineWith:Je,prefix:(n,e,t)=>e===t.length-1},xe={batchSize:1e3,batchWait:10},ke={minDirtFactor:.1,minDirtCount:20},ye=Object.assign(Object.assign({},xe),ke),Ht=(n,e)=>{n.includes(e)||n.push(e)},Le=(n,e)=>{for(const t of e)n.includes(t)||n.push(t)},Ae=({score:n},{score:e})=>e-n,je=()=>new Map,J=n=>{const e=new Map;for(const t of Object.keys(n))e.set(parseInt(t,10),n[t]);return e},G=n=>Q(void 0,void 0,void 0,function*(){const e=new Map;let t=0;for(const s of Object.keys(n))e.set(parseInt(s,10),n[s]),++t%1e3===0&&(yield Ge(0));return e}),Ge=n=>new Promise(e=>setTimeout(e,n)),Kt=/[\n\r\p{Z}\p{P}]+/u,Qt=async(n,e={})=>{const t=ee(),{content:s}=t.public,{integrity:o,api:{baseURL:i},search:r}=s,{indexed:a}=r||{},l=`${i}/search${o?"-"+o:""}`;if(a){const{options:h}=r||{},{data:d}=await Ve(l,{responseType:"text"},"$1gpCpwXPVC");if(!d.value)throw le({statusCode:500,message:"Missing search data"});return Yt(n,d,h)}if(!e.miniSearch)throw le({statusCode:500,message:"Missing miniSearch options"});const{data:c}=await Ve(l,"$K0H4ck8p9J");if(!c.value)throw le({statusCode:500,message:"Missing search data"});return Xt(n,c,e.miniSearch)},Yt=(n,e,t)=>{const s=C(()=>N.loadJSON(F(e),F(t)));return C(()=>s.value.search(F(n)))},Xt=function(n,e,t){const s=C(()=>new N(F(t)));return s.value.addAll(F(e)),C(()=>s.value.search(F(n)))},Zt="_results_11kzr_2",es="_inputGroup_11kzr_8",ts="_input_11kzr_8",ss="_iconWrapper_11kzr_11",ns="_icon_11kzr_11",os={results:Zt,inputGroup:es,input:ts,iconWrapper:ss,icon:ns},is={class:"d-flex flex-column"},rs={key:0,class:"h-100"},as={key:0},ls={key:0,class:"my-3"},cs={key:1,class:"text-center h-100 d-flex align-items-center justify-content-center"},us={__name:"modal-search",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],async setup(n){let e,t;const s=ne(n,"modelValue"),o=P(""),{data:i,pending:r,refresh:a}=([e,t]=ce(()=>K(`search:${o.value}`,()=>Qt(o),{server:!1,immediate:!1,default:()=>[]})),e=await e,t(),e),{data:l}=([e,t]=ce(async()=>K("titleMap",async()=>{const M={};return await rt("articles").only(["title","slug"]).find().then(y=>{Array.isArray(y)&&y.length>0&&y.forEach(({slug:k,title:S})=>{M[k]||(M[k]=S)})}),M})),e=await e,t(),e),{data:c,pending:u,refresh:h}=([e,t]=ce(()=>K(`titleMap:${o.value}`,()=>{const M=v(i.value);if(Array.isArray(M)&&M.length>0){const y={};return M.forEach(S=>{const{id:j,score:re}=S,W=j.split("/").pop().split("#"),B=W[0],He=W[1];y[B]||(y[B]={title:v(l)[B],score:0,paragraphs:[],slug:B}),y[B].score+=re,y[B].paragraphs.push({content:S.content,id:j,score:re,title:S.title,hash:He})}),Object.keys(y).map(S=>y[S]).sort((S,j)=>j.score-S.score)}else return[]},{server:!1,immediate:!1,default:()=>[]})),e=await e,t(),e),d=C(()=>v(r)||v(u)),p=C(()=>!v(d)&&v(c).length>0),_=C(()=>!v(d)&&v(c).length===0),f=()=>{o.value&&(r.value=!0,u.value=!0,V())},w=()=>{o.value=""},V=_t(async()=>{await a(),await h()},500),O=P(null),E=()=>{O.value.$el.focus()};return(M,y)=>(g(),T(Ce,{modelValue:s.value,"onUpdate:modelValue":y[2]||(y[2]=k=>s.value=k),title:"搜尋文章",size:"lg",onShown:E,onHidden:w},{default:b(()=>[A("div",is,[A("div",{class:$(["position-relative",M.$style.inputGroup])},[m(At,{ref_key:"input",ref:O,modelValue:v(o),"onUpdate:modelValue":y[0]||(y[0]=k=>oe(o)?o.value=k:null),placeholder:"請輸入關鍵字",class:$(M.$style.input),onInput:f},null,8,["modelValue","class"]),A("div",{class:$(["d-flex align-items-center justify-content-center px-3",M.$style.iconWrapper])},[m(Ee,{icon:"search",class:$(M.$style.icon)},null,8,["class"])],2)],2),A("div",{class:$(["mt-3",M.$style.results])},[v(o)?(g(),x("div",rs,[v(p)?(g(),x("div",as,[(g(!0),x(te,null,Se(v(c),(k,S)=>(g(),x("div",{key:k.slug,class:"small"},[S>0?(g(),x("hr",ls)):we("",!0),m(Dt,{article:k,keyword:v(o),slug:k.slug,onNavigate:y[1]||(y[1]=j=>s.value=!1)},null,8,["article","keyword","slug"])]))),128))])):(g(),x("div",cs,q(v(_)?"哎呀～找不到文章":"搜尋中"),1))])):we("",!0)],2)])]),_:1},8,["modelValue"]))}},ds={$style:os},hs=R(us,[["__cssModules",ds]]),fs={__name:"header-icon-search",props:{iconClass:{type:[String,Array],default:""}},setup(n){const e=P(!1);return(t,s)=>(g(),x("div",null,[m(ie,{icon:"search",title:"搜尋文章",class:$(n.iconClass),onClick:s[0]||(s[0]=o=>e.value=!0)},null,8,["class"]),m(hs,{modelValue:v(e),"onUpdate:modelValue":s[1]||(s[1]=o=>oe(e)?e.value=o:null)},null,8,["modelValue"])]))}},ms={__name:"modal-categories",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=ne(n,"modelValue"),{categoriesMap:t}=ee().public,s=C(()=>Object.keys(t).map(i=>({name:t[i],value:i}))),o=({value:i})=>at({category:i});return(i,r)=>(g(),T(Ce,{modelValue:e.value,"onUpdate:modelValue":r[1]||(r[1]=a=>e.value=a),title:"文章分類"},{default:b(()=>[m(Re,{"active-class":"fw-bold",vertical:"",items:s.value,"link-generate-func":o,onClickItem:r[0]||(r[0]=a=>e.value=!1)},{item:b(({item:a})=>[I(q(a.name),1)]),_:1},8,["items"])]),_:1},8,["modelValue"]))}},ps={key:0},gs={__name:"header-icon-categories",props:{showText:{type:Boolean,default:!1},iconClass:{type:[String,Array],default:""}},setup(n){const e=P(!1),{categoriesMap:t}=ee().public,s=lt(),o=C(()=>t[s.params.category]);return(i,r)=>(g(),x("div",null,[m(ie,{icon:"folder",title:"文章分類",class:$(n.iconClass),onClick:r[0]||(r[0]=a=>e.value=!0)},{default:b(()=>[n.showText&&o.value?(g(),x("span",ps,q(o.value),1)):we("",!0)]),_:1},8,["class"]),m(ms,{modelValue:v(e),"onUpdate:modelValue":r[1]||(r[1]=a=>oe(e)?e.value=a:null)},null,8,["modelValue"])]))}},_s={__name:"header-icon-theme",props:{iconClass:{type:[String,Array],default:""}},setup(n){const e=ct(),t=C(()=>e.icon);return(s,o)=>(g(),T(ie,{icon:v(t),class:$(n.iconClass),onClick:v(e).toggle},null,8,["icon","class","onClick"]))}},ys="_header_7rhby_2",vs="_logo_7rhby_8",ws={header:ys,logo:vs},bs={class:"ms-3 flex-grow-1"},xs={class:"d-flex align-items-center justify-content-end"},ks={__name:"common-header",setup(n){return(e,t)=>{const s=se;return g(),x("header",{class:$([e.$style.header,"border-bottom border-primary border-2 position-sticky shadow-sm bg-foreground"])},[m(Me,{class:$([`py-${v(Y)}-3`,"d-flex flex-row align-items-center"])},{default:b(()=>[m(Ne,{bordered:"",class:$(e.$style.logo)},null,8,["class"]),A("div",bs,[m(s,{class:"fw-bold text-body d-block text-decoration-none",to:"/"},{default:b(()=>t[0]||(t[0]=[I(" 隨機手札 ")])),_:1}),A("small",{class:$(["text-muted d-none",`d-${v(Y)}-block`])},"雜七雜八之地",2)]),A("div",xs,[m(gs,{"icon-class":"d-flex p-0","show-text":""}),m(Tt,{"icon-class":"d-flex p-0"}),m(_s,{"icon-class":"d-flex p-0"}),m(fs,{"icon-class":"d-flex p-0"})])]),_:1},8,["class"])],2)}}},Ss={$style:ws},$s=R(ks,[["__cssModules",Ss]]),Cs={},Ms={class:"fw-bold mb-2 d-flex align-items-center h6 text-primary"};function Os(n,e){return g(),x("div",Ms,[L(n.$slots,"default")])}const zs=R(Cs,[["render",Os]]),Vs={},Is={class:"small"};function Fs(n,e){return g(),x("div",Is,[L(n.$slots,"default")])}const Ts=R(Vs,[["render",Fs]]),ve={__name:"footer-block",props:{title:{type:String,default:""},titleTo:{type:[String,Object],default:""}},setup(n){return(e,t)=>{const s=se;return g(),T(mt,ut({[v(Y)||""]:v(dt)/3,class:"mt-3 mt-lg-5"}),{default:b(()=>[m(zs,null,{default:b(()=>[m(s,{to:n.titleTo,class:"text-primary"},{default:b(()=>[I(q(n.title),1)]),_:1},8,["to"]),L(e.$slots,"title")]),_:3}),m(Ts,null,{default:b(()=>[L(e.$slots,"default")]),_:3})]),_:3},16)}}},H={__name:"footer-link",props:{href:{type:String,default:""}},setup(n){return(e,t)=>(g(),T(pt,{href:n.href,class:"text-white"},{default:b(()=>[L(e.$slots,"default")]),_:3},8,["href"]))}},Ls="_footer_4zxf0_2",As={footer:Ls},js={__name:"common-footer",setup(n){return(e,t)=>(g(),x("footer",{class:$(["pb-3 pb-lg-5",e.$style.footer])},[m(Me,{class:"text-white"},{default:b(()=>[m(ft,null,{default:b(()=>[m(ve,{title:"關於我","title-to":{path:"/buy_me_a_tea",hash:"#關於我"}},{title:b(()=>[m(Ne,{height:"16",class:"ms-2"})]),default:b(()=>[t[0]||(t[0]=I(" 工作時若不喝上一杯飲料就無法做事的前端小碼農。三大前端框架陣營中屬於 Vue 陣營。 "))]),_:1}),m(ve,{title:"關於隨機手札","title-to":{path:"/buy_me_a_tea",hash:"#關於隨機手札"}},{default:b(()=>[t[4]||(t[4]=I(" 使用 ")),m(H,{href:"https://v2.nuxt.com/"},{default:b(()=>t[1]||(t[1]=[I(" Nuxt 2 ")])),_:1}),t[5]||(t[5]=I(" 建置於 ")),m(H,{href:"https://pages.github.com/"},{default:b(()=>t[2]||(t[2]=[I(" Github Pages ")])),_:1}),t[6]||(t[6]=I(" 上，全站文字皆在 ")),m(H,{href:"https://creativecommons.org/licenses/by-nd/4.0/legalcode.zh-hant"},{default:b(()=>t[3]||(t[3]=[I(" 創用CC BY-ND 4.0 條款 ")])),_:1}),t[7]||(t[7]=I(" 下提供。 "))]),_:1}),m(ve,{title:"請我喝杯手搖飲吧！","title-to":{path:"/buy_me_a_tea",hash:"#請我喝杯手搖飲吧！"}},{default:b(()=>[t[9]||(t[9]=I(" 若這裡的經驗分享有幫助到你，可以透過")),m(H,{href:"https://ko-fi.com/chaoschaoshuang"},{default:b(()=>t[8]||(t[8]=[I(" Ko-fi ")])),_:1}),t[10]||(t[10]=I("請我喝杯手搖飲哦！ "))]),_:1})]),_:1})]),_:1})],2))}},Es={$style:As},Ds=R(js,[["__cssModules",Es]]),Ns={class:"mt-0 mt-lg-4"},Gs={__name:"default",setup(n){return(e,t)=>(g(),x(te,null,[m($s),A("div",Ns,[m(Me,{tag:"main",class:"py-4"},{default:b(()=>[L(e.$slots,"default")]),_:3})]),m(Ds,{class:"mt-4"})],64))}};export{Gs as default};
