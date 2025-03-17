import{o as d,c as f,w as v,a as y,b as k,t as F,u as C,g as Pe,d as S,_ as se,e as de,f as ue,h as he,r as O,s as je,i as P,j as Ee,k as V,l as m,F as N,m as R,n as Le,p as $e,q as j,v as Fe,x as pe,y as ee,z as fe,A as ge,B as be,C as me,D as De,E as ye,G as ke,H as g,I as Be,J as Ve,K as w,L as _,M as Re,N as xe,O as q,P as te,Q as ne,R as ve,S as ze,T as He,U as Ue,V as A,W as Ge,X as qe,Y as We,Z as Je,$ as Qe,a0 as Ze,a1 as Ce,a2 as Ye,a3 as Xe,a4 as et,a5 as tt,a6 as nt,a7 as ot,a8 as rt,a9 as it,aa as ct,ab as at}from"./9uk_k_NE.js";import{_ as lt}from"./Dlb2dx94.js";import st from"./MknYIcnv.js";import{_ as dt}from"./BpuwRump.js";import{_ as ut}from"./DtUpphfe.js";import{u as ht,a as we}from"./xxxAv_xD.js";import{_ as pt}from"./C3xf7Q-d.js";import{s as _e,a as ft,b as gt}from"./xDHW5I5v.js";import"./DWdCx884.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";const bt=new RegExp("\\p{Lu}?\\p{Ll}+|[0-9]+|\\p{Lu}+(?!\\p{Ll})|\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|\\p{L}+","gu");function mt(t){return Array.from(t.match(bt)??[])}function yt(t){return mt(t).map(e=>e.toLowerCase()).join("-")}const kt={__name:"article-category",props:{article:{type:Object,default:()=>({})}},setup(t){const n=se;return(e,o)=>{const i=de,r=ue;return t.article&&t.article.category?(d(),f(r,{key:0,to:("getCategoryLink"in e?e.getCategoryLink:C(Pe))({category:t.article.category}),class:"text-muted text-sm inline-flex items-center underline",tag:C(n)},{default:v(()=>[y(i,{icon:"folder",class:"me-1"}),k("span",null,F(e.$config.public.categoriesMap[t.article.category]),1)]),_:1},8,["to","tag"])):S("",!0)}}},xt={};function vt(t,n){const e=je;return d(),f(e,{severity:"primary"},{default:v(()=>[O(t.$slots,"default")]),_:3})}const Ct=he(xt,[["render",vt]]),wt={__name:"article-tag",props:{tagName:{type:String,default:""}},setup(t){const n=t,e=P(()=>Ee({tag:n.tagName}));return(o,i)=>{const r=Ct,c=se;return d(),f(c,{to:C(e)},{default:v(()=>[y(r,{class:"font-mono"},{default:v(()=>[i[0]||(i[0]=V(" #")),O(o.$slots,"default",{},()=>[V(F(t.tagName),1)])]),_:3})]),_:3},8,["to"])}}},_t={class:"grid grid-cols-1 gap-normal"},St={class:"font-black text-4xl"},Tt={class:"flex flex-row gap-4 items-center"},It={key:0,class:"flex flex-wrap mt-2 gap-1"},At={__name:"common-article",props:{document:{type:Object,default:()=>({})}},setup(t){const n={sm:640,md:624,lg:717,xl:726,"2xl":896};return(e,o)=>{const i=Le,r=$e,c=kt,l=wt,a=lt,s=st;return d(),m("article",_t,[k("h1",St,F(t.document.title),1),k("div",null,[k("div",Tt,[y(i,{document:t.document},null,8,["document"]),y(r,{minutes:t.document.readingTime.minutes},null,8,["minutes"]),y(c,{article:t.document},null,8,["article"])]),t.document.tags?(d(),m("div",It,[(d(!0),m(N,null,R(t.document.tags,u=>(d(),f(l,{key:u,"tag-name":u},null,8,["tag-name"]))),128))])):S("",!0)]),t.document.img?(d(),f(a,{key:0,img:t.document.img,"break-points":n,class:"rounded"},null,8,["img"])):S("",!0),y(s,{value:t.document,class:"grid grid-cols-1 gap-normal"},null,8,["value"])])}}},Kt={},Ot=["src"];function Nt(t,n){const e=ut;return d(),f(e,{href:"https://ko-fi.com/chaoschaoshuang"},{default:v(()=>[k("img",{src:`${t.$config.public.base}images/donation/kofi_button_blue.png`,alt:"Support me on Ko-fi",class:"block w-full max-w-[200px]"},null,8,Ot)]),_:1})}const Mt=he(Kt,[["render",Nt]]),Pt={__name:"article-comment",setup(t){const n=j(null),e=ht(n),o=Fe(),i=P(()=>o.darkComputed?"dark":"light"),r={repo:"HuangChingChieh/blog",repoId:"R_kgDOHHJsJQ",category:"Announcements",categoryId:"DIC_kwDOHHJsJc4CcL42",reactionsEnabled:0,emitMetadata:0,inputPosition:"top",lang:"zh-TW",loading:"lazy",theme:i.value},c=j(!1),l=()=>{e.value&&!c.value&&(c.value=!0)},a=P(()=>{const s=[];if(c.value){const u={src:"https://giscus.app/client.js",crossorigin:"anonymous"};Object.keys(r).forEach(x=>{u[`data-${yt(x)}`]=r[x]}),s.push(u)}return s});return pe({script:a}),ee(()=>{if(!c.value)return;const{value:s}=n;if(!s||!(s instanceof HTMLDivElement))return;const u=s.querySelector("iframe.giscus-frame");!u||!(u instanceof HTMLIFrameElement)||u.contentWindow.postMessage({giscus:{setConfig:{theme:i.value}}},"https://giscus.app")}),ee(l),(s,u)=>(d(),m("div",{ref_key:"comments",ref:n,class:"giscus"},null,512))}},jt=async(t={tags:[],slug:""})=>fe(`Related_${t.slug}`,async()=>{const n=await ge("articles").only([...be.card,"tags"]).sort({createdAt:-1}).find(),e=[],o={},i=t.tags,r=t.slug;if(!Array.isArray(i)||i.length===0)return e;n.forEach(l=>{const{tags:a,slug:s}=l;if(!Array.isArray(a)||r===s)return;const u=a.reduce((x,h)=>x+i.some(p=>typeof h=="string"&&typeof p=="string"&&h.toLowerCase()===p.toLowerCase()),0);u!==0&&(o[u]||(o[u]=[]),o[u].push(l))});const c=Object.keys(o);if(c.length>0){c.sort((s,u)=>u-s);const l=3;let a=0;for(;a<c.length&&e.length<l;){const s=o[c[a]];s.length>0?e.push(s.pop()):a++}}return e}),Et={class:"grid grid-cols-1 gap-normal"},Lt={__name:"articles-related",props:{article:{type:Object,default:null}},async setup(t){let n,e;const o=t,{data:i}=([n,e]=me(()=>jt(C(o.article))),n=await n,e(),n),r=P(()=>{const{value:l}=i;return Array.isArray(l)&&l.length>0}),c={sm:640,md:335,lg:251,xl:335};return(l,a)=>{const s=De,u=pt;return C(r)?(d(),f(u,{key:0,title:"相關文章"},{default:v(()=>[k("div",Et,[(d(!0),m(N,null,R(C(i),(x,h)=>(d(),f(s,{key:h,article:x,"img-break-points":c},null,8,["article"]))),128))])]),_:1})):S("",!0)}}};var $t=function(n){var e=n.dt;return`
.p-tree {
    background: `.concat(e("tree.background"),`;
    color: `).concat(e("tree.color"),`;
    padding: `).concat(e("tree.padding"),`;
}

.p-tree-root-children,
.p-tree-node-children {
    display: flex;
    list-style-type: none;
    flex-direction: column;
    margin: 0;
    gap: `).concat(e("tree.gap"),`;
}

.p-tree-root-children {
    padding: 0;
    padding-block-start: `).concat(e("tree.gap"),`;
}

.p-tree-node-children {
    padding: 0;
    padding-block-start: `).concat(e("tree.gap"),`;
    padding-inline-start: `).concat(e("tree.indent"),`;
}

.p-tree-node {
    padding: 0;
    outline: 0 none;
}

.p-tree-node-content {
    border-radius: `).concat(e("tree.node.border.radius"),`;
    padding: `).concat(e("tree.node.padding"),`;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: `).concat(e("tree.node.color"),`;
    gap: `).concat(e("tree.node.gap"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
}

.p-tree-node:focus-visible > .p-tree-node-content {
    box-shadow: `).concat(e("tree.node.focus.ring.shadow"),`;
    outline: `).concat(e("tree.node.focus.ring.width")," ").concat(e("tree.node.focus.ring.style")," ").concat(e("tree.node.focus.ring.color"),`;
    outline-offset: `).concat(e("tree.node.focus.ring.offset"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
    background: `).concat(e("tree.node.hover.background"),`;
    color: `).concat(e("tree.node.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected {
    background: `).concat(e("tree.node.selected.background"),`;
    color: `).concat(e("tree.node.selected.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
    color: inherit;
}

.p-tree-node-toggle-button {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    width: `).concat(e("tree.node.toggle.button.size"),`;
    height: `).concat(e("tree.node.toggle.button.size"),`;
    color: `).concat(e("tree.node.toggle.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(e("tree.node.toggle.button.border.radius"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", border-color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
    outline-color: transparent;
    padding: 0;
}

.p-tree-node-toggle-button:enabled:hover {
    background: `).concat(e("tree.node.toggle.button.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
    background: `).concat(e("tree.node.toggle.button.selected.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.selected.hover.color"),`;
}

.p-tree-root {
    overflow: auto;
}

.p-tree-node-selectable {
    cursor: pointer;
    user-select: none;
}

.p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
    visibility: hidden;
}

.p-tree-node-icon {
    color: `).concat(e("tree.node.icon.color"),`;
    transition: color `).concat(e("tree.transition.duration"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.selected.color"),`;
}

.p-tree-filter {
    margin: `).concat(e("tree.filter.margin"),`;
}

.p-tree-filter-input {
    width: 100%;
}

.p-tree-loading {
    position: relative;
    height: 100%;
}

.p-tree-loading-icon {
    font-size: `).concat(e("tree.loading.icon.size"),`;
    width: `).concat(e("tree.loading.icon.size"),`;
    height: `).concat(e("tree.loading.icon.size"),`;
}

.p-tree .p-tree-mask {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tree-flex-scrollable {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.p-tree-flex-scrollable .p-tree-root {
    flex: 1;
}
`)},Ft={root:function(n){var e=n.props;return["p-tree p-component",{"p-tree-selectable":e.selectionMode!=null,"p-tree-loading":e.loading,"p-tree-flex-scrollable":e.scrollHeight==="flex"}]},mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterContainer:"p-tree-filter",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:function(n){var e=n.instance;return["p-tree-node",{"p-tree-node-leaf":e.leaf}]},nodeContent:function(n){var e=n.instance;return["p-tree-node-content",e.node.styleClass,{"p-tree-node-selectable":e.selectable,"p-tree-node-selected":e.checkboxMode&&e.$parentInstance.highlightOnSelect?e.checked:e.selected}]},nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children"},Dt=ye.extend({name:"tree",theme:$t,classes:Ft}),Se={name:"ChevronRightIcon",extends:ke};function Bt(t,n,e,o,i,r){return d(),m("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[k("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}Se.render=Bt;var Y={name:"MinusIcon",extends:ke};function Vt(t,n,e,o,i,r){return d(),m("svg",g({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[k("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}Y.render=Vt;var Rt=function(n){var e=n.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(e("checkbox.sm.width"),`;
    height: `).concat(e("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.sm.size"),`;
    width: `).concat(e("checkbox.icon.sm.size"),`;
    height: `).concat(e("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(e("checkbox.lg.width"),`;
    height: `).concat(e("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(e("checkbox.icon.lg.size"),`;
    width: `).concat(e("checkbox.icon.lg.size"),`;
    height: `).concat(e("checkbox.icon.lg.size"),`;
}
`)},zt={root:function(n){var e=n.instance,o=n.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":e.$pcCheckboxGroup?e.$pcCheckboxGroup.$invalid:e.$invalid,"p-variant-filled":e.$variant==="filled","p-checkbox-sm p-inputfield-sm":o.size==="small","p-checkbox-lg p-inputfield-lg":o.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ht=ye.extend({name:"checkbox",theme:Rt,classes:zt}),Ut={name:"BaseCheckbox",extends:Re,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ht,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function Gt(t){return Qt(t)||Jt(t)||Wt(t)||qt()}function qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wt(t,n){if(t){if(typeof t=="string")return J(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?J(t,n):void 0}}function Jt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qt(t){if(Array.isArray(t))return J(t)}function J(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}var Te={name:"Checkbox",extends:Ut,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var e=this;if(!this.disabled&&!this.readonly){var o=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,i;this.binary?i=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?i=o.filter(function(r){return!Be(r,e.value)}):i=o?[].concat(Gt(o),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(i,n):this.writeValue(i,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,o;this.$emit("blur",n),(e=(o=this.formField).onBlur)===null||e===void 0||e.call(o,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:Ve(this.value,n)}},components:{CheckIcon:_e,MinusIcon:Y}},Zt=["data-p-checked","data-p-indeterminate","data-p-disabled"],Yt=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Xt(t,n,e,o,i,r){var c=w("CheckIcon"),l=w("MinusIcon");return d(),m("div",g({class:t.cx("root")},r.getPTOptions("root"),{"data-p-checked":r.checked,"data-p-indeterminate":i.d_indeterminate||void 0,"data-p-disabled":t.disabled}),[k("input",g({id:t.inputId,type:"checkbox",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:r.groupName,checked:r.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,required:t.required,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,"aria-checked":i.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:n[1]||(n[1]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)}),onChange:n[2]||(n[2]=function(){return r.onChange&&r.onChange.apply(r,arguments)})},r.getPTOptions("input")),null,16,Yt),k("div",g({class:t.cx("box")},r.getPTOptions("box")),[O(t.$slots,"icon",{checked:r.checked,indeterminate:i.d_indeterminate,class:_(t.cx("icon"))},function(){return[r.checked?(d(),f(c,g({key:0,class:t.cx("icon")},r.getPTOptions("icon")),null,16,["class"])):i.d_indeterminate?(d(),f(l,g({key:1,class:t.cx("icon")},r.getPTOptions("icon")),null,16,["class"])):S("",!0)]})],16)],16,Zt)}Te.render=Xt;var en={name:"BaseTree",extends:xe,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:[String,Function],default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Dt,provide:function(){return{$pcTree:this,$parentInstance:this}}};function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(t)}function oe(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Ie(t))||n){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var s=e.next();return c=s.done,s},e:function(s){l=!0,r=s},f:function(){try{c||e.return==null||e.return()}finally{if(l)throw r}}}}function re(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,o)}return e}function ie(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?re(Object(e),!0).forEach(function(o){tn(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):re(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function tn(t,n,e){return(n=nn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function nn(t){var n=on(t,"string");return E(n)=="symbol"?n:n+""}function on(t,n){if(E(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(E(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function M(t){return an(t)||cn(t)||Ie(t)||rn()}function rn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(t,n){if(t){if(typeof t=="string")return Q(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Q(t,n):void 0}}function cn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function an(t){if(Array.isArray(t))return Q(t)}function Q(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}var Ae={name:"TreeNode",hostName:"Tree",extends:xe,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(n){return typeof n.label=="function"?n.label():n.label},onChildNodeToggle:function(n){this.$emit("node-toggle",n)},getPTOptions:function(n){return this.ptm(n,{context:{node:this.node,index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,partialChecked:this.partialChecked,leaf:this.leaf}})},onClick:function(n){if(this.toggleClicked||q(n.target,'[data-pc-section="nodetogglebutton"]')||q(n.target.parentElement,'[data-pc-section="nodetogglebutton"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.node.selectable!=!1&&this.toggleCheckbox():this.$emit("node-click",{originalEvent:n,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(n){this.$emit("node-click",n)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(n){if(this.isSameNode(n))switch(n.code){case"Tab":this.onTabKey(n);break;case"ArrowDown":this.onArrowDown(n);break;case"ArrowUp":this.onArrowUp(n);break;case"ArrowRight":this.onArrowRight(n);break;case"ArrowLeft":this.onArrowLeft(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDown:function(n){var e=n.target.getAttribute("data-pc-section")==="nodetogglebutton"?n.target.closest('[role="treeitem"]'):n.target,o=e.children[1];if(o)this.focusRowChange(e,o.children[0]);else if(e.nextElementSibling)this.focusRowChange(e,e.nextElementSibling);else{var i=this.findNextSiblingOfAncestor(e);i&&this.focusRowChange(e,i)}n.preventDefault()},onArrowUp:function(n){var e=n.target;if(e.previousElementSibling)this.focusRowChange(e,e.previousElementSibling,this.findLastVisibleDescendant(e.previousElementSibling));else{var o=this.getParentNodeElement(e);o&&this.focusRowChange(e,o)}n.preventDefault()},onArrowRight:function(n){var e=this;this.leaf||this.expanded||(n.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){e.onArrowDown(n)}))},onArrowLeft:function(n){var e=te(n.currentTarget,'[data-pc-section="nodetogglebutton"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return e.click(),!1;var o=this.findBeforeClickableNode(n.currentTarget);o&&this.focusRowChange(n.currentTarget,o)},onEnterKey:function(n){this.setTabIndexForSelectionMode(n,this.nodeTouched),this.onClick(n),n.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var n=ne(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'),'[role="treeitem"]'),e=M(n).some(function(i){return i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true"});if(M(n).forEach(function(i){i.tabIndex=-1}),e){var o=M(n).filter(function(i){return i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true"});o[0].tabIndex=0;return}M(n)[0].tabIndex=0},setTabIndexForSelectionMode:function(n,e){if(this.selectionMode!==null){var o=M(ne(this.$refs.currentNode.parentElement,'[role="treeitem"]'));n.currentTarget.tabIndex=e===!1?-1:0,o.every(function(i){return i.tabIndex===-1})&&(o[0].tabIndex=0)}},focusRowChange:function(n,e,o){n.tabIndex="-1",e.tabIndex="0",this.focusNode(o||e)},findBeforeClickableNode:function(n){var e=n.closest("ul").closest("li");if(e){var o=te(e,"button");return o&&o.style.visibility!=="hidden"?e:this.findBeforeClickableNode(n.previousElementSibling)}return null},toggleCheckbox:function(){var n=this.selectionKeys?ie({},this.selectionKeys):{},e=!this.checked;this.propagateDown(this.node,e,n),this.$emit("checkbox-change",{node:this.node,check:e,selectionKeys:n})},propagateDown:function(n,e,o){if(e&&n.selectable!=!1?o[n.key]={checked:!0,partialChecked:!1}:delete o[n.key],n.children&&n.children.length){var i=oe(n.children),r;try{for(i.s();!(r=i.n()).done;){var c=r.value;this.propagateDown(c,e,o)}}catch(l){i.e(l)}finally{i.f()}}},propagateUp:function(n){var e=n.check,o=ie({},n.selectionKeys),i=0,r=!1,c=oe(this.node.children),l;try{for(c.s();!(l=c.n()).done;){var a=l.value;o[a.key]&&o[a.key].checked?i++:o[a.key]&&o[a.key].partialChecked&&(r=!0)}}catch(s){c.e(s)}finally{c.f()}e&&i===this.node.children.length?o[this.node.key]={checked:!0,partialChecked:!1}:(e||delete o[this.node.key],r||i>0&&i!==this.node.children.length?o[this.node.key]={checked:!1,partialChecked:!0}:delete o[this.node.key]),this.$emit("checkbox-change",{node:n.node,check:n.check,selectionKeys:o})},onChildCheckboxChange:function(n){this.$emit("checkbox-change",n)},findNextSiblingOfAncestor:function(n){var e=this.getParentNodeElement(n);return e?e.nextElementSibling?e.nextElementSibling:this.findNextSiblingOfAncestor(e):null},findLastVisibleDescendant:function(n){var e=n.children[1];if(e){var o=e.children[e.children.length-1];return this.findLastVisibleDescendant(o)}else return n},getParentNodeElement:function(n){var e=n.parentElement.parentElement;return q(e,"role")==="treeitem"?e:null},focusNode:function(n){n.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(n){return n.currentTarget&&(n.currentTarget.isSameNode(n.target)||n.currentTarget.isSameNode(n.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:Te,ChevronDownIcon:ft,ChevronRightIcon:Se,CheckIcon:_e,MinusIcon:Y,SpinnerIcon:ve},directives:{ripple:ze}},ln=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],sn=["data-p-selected","data-p-selectable"];function dn(t,n,e,o,i,r){var c=w("SpinnerIcon"),l=w("Checkbox"),a=w("TreeNode",!0),s=He("ripple");return d(),m("li",g({ref:"currentNode",class:t.cx("node"),role:"treeitem","aria-label":r.label(e.node),"aria-selected":r.ariaSelected,"aria-expanded":r.expanded,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,"aria-level":e.level,"aria-checked":r.ariaChecked,tabindex:e.index===0?0:-1,onKeydown:n[4]||(n[4]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},e.level===1?r.getPTOptions("node"):t.ptm("nodeChildren")),[k("div",g({class:t.cx("nodeContent"),onClick:n[2]||(n[2]=function(){return r.onClick&&r.onClick.apply(r,arguments)}),onTouchend:n[3]||(n[3]=function(){return r.onTouchEnd&&r.onTouchEnd.apply(r,arguments)}),style:e.node.style},r.getPTOptions("nodeContent"),{"data-p-selected":r.checkboxMode?r.checked:r.selected,"data-p-selectable":r.selectable}),[Ue((d(),m("button",g({type:"button",class:t.cx("nodeToggleButton"),onClick:n[0]||(n[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),tabindex:"-1"},r.getPTOptions("nodeToggleButton")),[e.node.loading&&e.loadingMode==="icon"?(d(),m(N,{key:0},[e.templates.nodetoggleicon||e.templates.nodetogglericon?(d(),f(A(e.templates.nodetoggleicon||e.templates.nodetogglericon),{key:0,node:e.node,expanded:r.expanded,class:_(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):(d(),f(c,g({key:1,spin:"",class:t.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64)):(d(),m(N,{key:1},[e.templates.nodetoggleicon||e.templates.togglericon?(d(),f(A(e.templates.nodetoggleicon||e.templates.togglericon),{key:0,node:e.node,expanded:r.expanded,class:_(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):r.expanded?(d(),f(A(e.node.expandedIcon?"span":"ChevronDownIcon"),g({key:1,class:t.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"])):(d(),f(A(e.node.collapsedIcon?"span":"ChevronRightIcon"),g({key:2,class:t.cx("nodeToggleIcon")},r.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64))],16)),[[s]]),r.checkboxMode?(d(),f(l,{key:0,defaultValue:r.checked,binary:!0,indeterminate:r.partialChecked,class:_(t.cx("nodeCheckbox")),tabindex:-1,unstyled:t.unstyled,pt:r.getPTOptions("pcNodeCheckbox"),"data-p-partialchecked":r.partialChecked},{icon:v(function(u){return[e.templates.checkboxicon?(d(),f(A(e.templates.checkboxicon),{key:0,checked:u.checked,partialChecked:r.partialChecked,class:_(u.class)},null,8,["checked","partialChecked","class"])):S("",!0)]}),_:1},8,["defaultValue","indeterminate","class","unstyled","pt","data-p-partialchecked"])):S("",!0),e.templates.nodeicon?(d(),f(A(e.templates.nodeicon),g({key:1,node:e.node,class:[t.cx("nodeIcon")]},r.getPTOptions("nodeIcon")),null,16,["node","class"])):(d(),m("span",g({key:2,class:[t.cx("nodeIcon"),e.node.icon]},r.getPTOptions("nodeIcon")),null,16)),k("span",g({class:t.cx("nodeLabel")},r.getPTOptions("nodeLabel"),{onKeydown:n[1]||(n[1]=Ge(function(){},["stop"]))}),[e.templates[e.node.type]||e.templates.default?(d(),f(A(e.templates[e.node.type]||e.templates.default),{key:0,node:e.node,expanded:r.expanded,selected:r.checkboxMode?r.checked:r.selected},null,8,["node","expanded","selected"])):(d(),m(N,{key:1},[V(F(r.label(e.node)),1)],64))],16)],16,sn),r.hasChildren&&r.expanded?(d(),m("ul",g({key:0,class:t.cx("nodeChildren"),role:"group"},t.ptm("nodeChildren")),[(d(!0),m(N,null,R(e.node.children,function(u){return d(),f(a,{key:u.key,node:u,templates:e.templates,level:e.level+1,loadingMode:e.loadingMode,expandedKeys:e.expandedKeys,onNodeToggle:r.onChildNodeToggle,onNodeClick:r.onChildNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:r.propagateUp,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","loadingMode","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):S("",!0)],16,ln)}Ae.render=dn;function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(t)}function W(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=Ke(t))||n){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var s=e.next();return c=s.done,s},e:function(s){l=!0,r=s},f:function(){try{c||e.return==null||e.return()}finally{if(l)throw r}}}}function un(t){return fn(t)||pn(t)||Ke(t)||hn()}function hn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(t,n){if(t){if(typeof t=="string")return Z(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Z(t,n):void 0}}function pn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fn(t){if(Array.isArray(t))return Z(t)}function Z(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}function ce(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,o)}return e}function K(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ce(Object(e),!0).forEach(function(o){gn(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ce(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function gn(t,n,e){return(n=bn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function bn(t){var n=mn(t,"string");return L(n)=="symbol"?n:n+""}function mn(t,n){if(L(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Oe={name:"Tree",extends:en,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(n){this.d_expandedKeys=n}},methods:{onNodeToggle:function(n){var e=n.key;this.d_expandedKeys[e]?(delete this.d_expandedKeys[e],this.$emit("node-collapse",n)):(this.d_expandedKeys[e]=!0,this.$emit("node-expand",n)),this.d_expandedKeys=K({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(n){if(this.selectionMode!=null&&n.node.selectable!==!1){var e=n.nodeTouched?!1:this.metaKeySelection,o=e?this.handleSelectionWithMetaKey(n):this.handleSelectionWithoutMetaKey(n);this.$emit("update:selectionKeys",o)}},onCheckboxChange:function(n){this.$emit("update:selectionKeys",n.selectionKeys),n.check?this.$emit("node-select",n.node):this.$emit("node-unselect",n.node)},handleSelectionWithMetaKey:function(n){var e=n.originalEvent,o=n.node,i=e.metaKey||e.ctrlKey,r=this.isNodeSelected(o),c;return r&&i?(this.isSingleSelectionMode()?c={}:(c=K({},this.selectionKeys),delete c[o.key]),this.$emit("node-unselect",o)):(this.isSingleSelectionMode()?c={}:this.isMultipleSelectionMode()&&(c=i?this.selectionKeys?K({},this.selectionKeys):{}:{}),c[o.key]=!0,this.$emit("node-select",o)),c},handleSelectionWithoutMetaKey:function(n){var e=n.node,o=this.isNodeSelected(e),i;return this.isSingleSelectionMode()?o?(i={},this.$emit("node-unselect",e)):(i={},i[e.key]=!0,this.$emit("node-select",e)):o?(i=K({},this.selectionKeys),delete i[e.key],this.$emit("node-unselect",e)):(i=this.selectionKeys?K({},this.selectionKeys):{},i[e.key]=!0,this.$emit("node-select",e)),i},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(n){return this.selectionMode&&this.selectionKeys?this.selectionKeys[n.key]===!0:!1},isChecked:function(n){return this.selectionKeys?this.selectionKeys[n.key]&&this.selectionKeys[n.key].checked:!1},isNodeLeaf:function(n){return n.leaf===!1?!1:!(n.children&&n.children.length)},onFilterKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter")&&n.preventDefault(),this.$emit("filter",{originalEvent:n,value:n.target.value})},findFilteredNodes:function(n,e){if(n){var o=!1;if(n.children){var i=un(n.children);n.children=[];var r=W(i),c;try{for(r.s();!(c=r.n()).done;){var l=c.value,a=K({},l);this.isFilterMatched(a,e)&&(o=!0,n.children.push(a))}}catch(s){r.e(s)}finally{r.f()}}if(o)return!0}},isFilterMatched:function(n,e){var o=e.searchFields,i=e.filterText,r=e.strict,c=!1,l=W(o),a;try{for(l.s();!(a=l.n()).done;){var s=a.value,u=String(qe(n,s)).toLocaleLowerCase(this.filterLocale);u.indexOf(i)>-1&&(c=!0)}}catch(x){l.e(x)}finally{l.f()}return(!c||r&&!this.isNodeLeaf(n))&&(c=this.findFilteredNodes(n,{searchFields:o,filterText:i,strict:r})||c),c}},computed:{filteredValue:function(){var n=[],e=We(this.filterBy)?[this.filterBy]:this.filterBy.split(","),o=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),i=this.filterMode==="strict",r=W(this.value),c;try{for(r.s();!(c=r.n()).done;){var l=c.value,a=K({},l),s={searchFields:e,filterText:o,strict:i};(i&&(this.findFilteredNodes(a,s)||this.isFilterMatched(a,s))||!i&&(this.isFilterMatched(a,s)||this.findFilteredNodes(a,s)))&&n.push(a)}}catch(u){r.e(u)}finally{r.f()}return n},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:Ae,InputText:Je,InputIcon:Qe,IconField:Ze,SearchIcon:gt,SpinnerIcon:ve}};function $(t){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$(t)}function ae(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,o)}return e}function le(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ae(Object(e),!0).forEach(function(o){yn(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ae(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function yn(t,n,e){return(n=kn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function kn(t){var n=xn(t,"string");return $(n)=="symbol"?n:n+""}function xn(t,n){if($(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if($(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var vn=["aria-labelledby","aria-label"];function Cn(t,n,e,o,i,r){var c=w("SpinnerIcon"),l=w("InputText"),a=w("SearchIcon"),s=w("InputIcon"),u=w("IconField"),x=w("TreeNode");return d(),m("div",g({class:t.cx("root")},t.ptmi("root")),[t.loading&&t.loadingMode==="mask"?(d(),m("div",g({key:0,class:t.cx("mask")},t.ptm("mask")),[O(t.$slots,"loadingicon",{class:_(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(d(),m("i",g({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(d(),f(c,g({key:1,spin:"",class:t.cx("loadingIcon")},t.ptm("loadingIcon")),null,16,["class"]))]})],16)):S("",!0),t.filter?(d(),f(u,{key:1,unstyled:t.unstyled,pt:le(le({},t.ptm("pcFilter")),t.ptm("pcFilterContainer")),class:_(t.cx("pcFilterContainer"))},{default:v(function(){return[y(l,{modelValue:i.filterValue,"onUpdate:modelValue":n[0]||(n[0]=function(h){return i.filterValue=h}),autocomplete:"off",class:_(t.cx("pcFilterInput")),placeholder:t.filterPlaceholder,unstyled:t.unstyled,onKeydown:r.onFilterKeydown,pt:t.ptm("pcFilterInput")},null,8,["modelValue","class","placeholder","unstyled","onKeydown","pt"]),y(s,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:v(function(){return[O(t.$slots,t.$slots.filtericon?"filtericon":"searchicon",{class:_(t.cx("filterIcon"))},function(){return[y(a,g({class:t.cx("filterIcon")},t.ptm("filterIcon")),null,16,["class"])]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt","class"])):S("",!0),k("div",g({class:t.cx("wrapper"),style:{maxHeight:t.scrollHeight}},t.ptm("wrapper")),[O(t.$slots,"header",{value:t.value,expandedKeys:t.expandedKeys,selectionKeys:t.selectionKeys}),k("ul",g({class:t.cx("rootChildren"),role:"tree","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("rootChildren")),[(d(!0),m(N,null,R(r.valueToRender,function(h,p){return d(),f(x,{key:h.key,node:h,templates:t.$slots,level:t.level+1,index:p,expandedKeys:i.d_expandedKeys,onNodeToggle:r.onNodeToggle,onNodeClick:r.onNodeClick,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onCheckboxChange:r.onCheckboxChange,loadingMode:t.loadingMode,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,vn),O(t.$slots,"footer",{value:t.value,expandedKeys:t.expandedKeys,selectionKeys:t.selectionKeys})],16)],16)}Oe.render=Cn;const Ne={__name:"article-tocs",props:{toc:{type:Array,default:()=>[]}},emits:["clickNode"],setup(t,{emit:n}){const e=t,o=h=>{const p={label:h.text,key:h.id},{children:b}=h;return Array.isArray(b)&&(p.children=b.map(o)),p},i=h=>{c.value[h.id]=!0;const{children:p}=h;Array.isArray(p)&&p.forEach(i)},r=we(),c=j({}),l=j([]);if(e.toc.length>0){const{toc:h}=e;l.value=h.map(o),h.forEach(i)}const a=h=>{const{selectionKeys:p}=r;let b=h.key===p;const{children:I}=h;return Array.isArray(I)&&!b&&(b=I.some(a)),b},s=h=>{const p=a(h);return{italic:p,"text-primary":p}},u=n,x=h=>{u("clickNode"),Ye(()=>{const{key:p}=h,b=document.querySelector(`#${p}`);!b||!(b instanceof HTMLElement)||b.scrollIntoView({behavior:"smooth",block:"center"})})};return(h,p)=>{const b=ue,I=Oe;return d(),f(I,{"expanded-keys":C(c),"onUpdate:expandedKeys":p[0]||(p[0]=T=>Ce(c)?c.value=T:null),value:C(l)},{default:v(({node:T})=>[y(b,{class:_(["[word-break:break-word]",s(T)]),onClick:D=>x(T)},{default:v(()=>[V(F(T.label),1)]),_:2},1032,["class","onClick"])]),_:1},8,["expanded-keys","value"])}}},wn={__name:"modal-toc",props:Xe({toc:{type:Array,default:()=>[]}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const n=et(t,"modelValue");return(e,o)=>{const i=Ne,r=tt;return d(),f(r,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),title:"摘要"},{default:v(()=>[y(i,{toc:t.toc,onClickNode:o[0]||(o[0]=c=>n.value=!1)},null,8,["toc"])]),_:1},8,["modelValue"])}}},_n=async t=>{if(!t)throw new Error("Need slug to find article!");return fe(t,async()=>{const n=["body","category","createdAt","img","readingTime","slug","title","updatedAt","tags","description"],e=be.card,o=nt(t),i=ge("articles").only(n.filter(l=>!e.some(a=>a===l))).where({slug:t}).findOne(),[r,c]=await Promise.all([o,i]);return Object.assign(r,c),r},"$SpfYyUQ7eF")},Sn=({description:t="",title:n="",img:e="",url:o="",tags:i=[],createdAt:r="",updatedAt:c=""})=>{const l=[{key:"description",name:"description",content:t},{key:"og:url",property:"og:url",content:o},{key:"og:type",property:"og:type",content:"article"},{key:"og:title",property:"og:title",content:n},{key:"og:description",property:"og:description",content:t},{key:"og:image",property:"og:image",content:e},{key:"og:article:published_time",property:"og:article:published_time",content:r},{key:"og:article:modified_time",property:"og:article:modified_time",content:c}];return i.forEach(a=>{l.push({property:"og:article:tag",content:a})}),{title:n,meta:l,script:[{hid:"article-json-ld",type:"application/ld+json",innerHTML:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:n,image:[e],datePublished:r,dateModified:c,author:[{"@type":"Person",name:"HuangChingChieh",url:"https://huangchingchieh.github.io/"}]})}]}},Tn={class:"grid grid-cols-12"},In={class:"col-span-12 lg:col-span-8 lg:col-start-3"},An={class:"hidden lg:block lg:col-span-2 max-h-[75vh] sticky top-24 overflow-y-auto"},Kn={class:"lg:hidden fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-primary rounded-full z-10 shadow-sm"},Vn={__name:"[slug]",async setup(t){var u,x,h;let n,e;const o=ot(),{slug:i}=o.params,{data:r}=([n,e]=me(()=>_n(i)),n=await n,e(),n);r!=null&&r.value||rt()({statusCode:"404"});const c=((h=(x=(u=r.value)==null?void 0:u.body)==null?void 0:x.toc)==null?void 0:h.links)||[],l=j(!1),{reset:a}=we();it(()=>{a()});const s=P(()=>{let p=[];if(r!=null&&r.value){const{appHost:b,imageServer:I}=at().public,{title:T,description:D,img:B,tags:z,updatedAt:H,createdAt:U}=r.value,G=b+o.fullPath.substring(1);p=Sn({description:D,url:G,title:T,img:B?`${I}1600x1200q100/${B}`:`${b}images/default-og.png`,tags:z,updatedAt:H,createdAt:U})}return p});return pe(s.value),(p,b)=>{const I=At,T=dt,D=Mt,B=Pt,z=Lt,H=Ne,U=de,G=ct,Me=wn;return d(),m("div",null,[k("div",Tn,[k("div",In,[y(T,null,{default:v(()=>[y(I,{document:C(r)},null,8,["document"])]),_:1}),b[2]||(b[2]=k("hr",{class:"md:hidden my-12"},null,-1)),y(D,{class:"mt-12 flex justify-center"}),y(B,{class:"mt-12"}),y(z,{article:C(r),class:"mt-12"},null,8,["article"])]),k("div",An,[y(H,{toc:C(c)},null,8,["toc"])])]),k("div",Kn,[y(G,{class:"p-2 md:p-3 rounded-full",onClick:b[0]||(b[0]=X=>l.value=!0)},{default:v(()=>[y(U,{icon:"card-list",class:"text-3xl mb-0 flex"})]),_:1})]),y(Me,{modelValue:C(l),"onUpdate:modelValue":b[1]||(b[1]=X=>Ce(l)?l.value=X:null),toc:C(c)},null,8,["modelValue","toc"])])}}};export{Vn as default};
