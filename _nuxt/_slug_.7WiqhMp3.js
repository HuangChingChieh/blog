import{u as re,q as se,_ as A,o as l,c as m,r as M,a as h,w as k,b as R,t as U,d as b,n as g,e as f,f as ae,g as ue,h as ne,F as j,i as H,j as C,A as oe,k as ce,l as D,m as ie,p as de,s as _,v as le,x as $,y as w,z as N,B as fe,C as me,D as ge,E as pe,G as xe,H as _e,I as he,J as be,K as ye}from"./entry.o5iFfk9x.js";import ve from"./ContentRenderer.SRhSRTfI.js";import{_ as Ce}from"./common-outer-link.SeeP4f0b.js";import{g as $e}from"./_commonjsHelpers.5-cIlDoe.js";import{_ as Ae,t as I,v as ke}from"./bVisible.XJbmSgc8.js";import{u as Re}from"./index.-lk6k2T2.js";import"./ContentRendererMarkdown.vue.zmdYegF3.js";import"./index.1dSrIji7.js";const we=e=>{if(!e)throw new Error("Need slug to find article!");return re(e,()=>se("articles").where({slug:e}).findOne(),"$SpfYyUQ7eF")},Oe={},Se={class:"badge bg-secondary text-bg-secondary"};function Ee(e,t){return l(),m("span",Se,[M(e.$slots,"default")])}const Le=A(Oe,[["render",Ee]]),Me={__name:"article-tag",props:{tagName:{type:String,default:""}},setup(e){return(t,r)=>(l(),h(Le,{class:"d-inline-block fw-normal font-monospace"},{default:k(()=>[R(" #"),M(t.$slots,"default",{},()=>[R(U(e.tagName),1)])]),_:3}))}},Ue="_article_13yi1_2",je="_title_13yi1_5",He="_date_13yi1_10",De="_tags_13yi1_13",Ne="_banner_13yi1_16",Ie={article:Ue,title:je,date:He,tags:De,banner:Ne,"article-img":"_article-img_13yi1_17"},We={class:"d-flex flex-row align-items-center my-2"},ze={__name:"common-article",props:{document:{type:Object,default:()=>({})}},setup(e){return(t,r)=>{const n=ve;return l(),m("article",{class:g(t.$style.article)},[b("h1",{class:g(t.$style.title)},U(e.document.title),3),b("div",We,[f(ae,{document:e.document,class:g(t.$style.date)},null,8,["document","class"]),f(ue,{minutes:e.document.readingTime.minutes},null,8,["minutes"]),f(ne,{article:e.document},null,8,["article"])]),e.document.tags?(l(),m("div",{key:0,class:g(["d-flex flex-wrap my-2",t.$style.tags])},[(l(!0),m(j,null,H(e.document.tags,a=>(l(),h(Me,{key:a,"tag-name":a,class:"me-1 mb-1"},null,8,["tag-name"]))),128))],2)):C("",!0),e.document.img?(l(),h(oe,{key:1,img:e.document.img,"img-class":"rounded",class:g(["rounded",t.$style.banner]),preload:""},null,8,["img","class"])):C("",!0),f(n,{value:e.document,class:"nuxt-content"},null,8,["value"])],2)}}},Te={$style:Ie},Be=A(ze,[["__cssModules",Te]]),Ze=({article:e={tags:[],slug:""},articles:t=[]})=>{const r=[],n={},a=e.tags,o=e.slug;if(!Array.isArray(a)||a.length===0)return r;t.forEach(i=>{const{tags:s,slug:c}=i;if(!Array.isArray(s)||o===c)return;const d=s.reduce((v,y)=>v+a.some(x=>typeof y=="string"&&typeof x=="string"&&y.toLowerCase()===x.toLowerCase()),0);d!==0&&(n[d]||(n[d]=[]),n[d].push(i))});const u=Object.keys(n);if(u.length>0){u.sort((c,d)=>d-c);const i=3;let s=0;for(;s<u.length&&r.length<i;){const c=n[u[s]];c.length>0?r.push(c.pop()):s++}}return r},Je=ce({components:{ArticleCard:D},props:{article:{type:Object,default:()=>({tags:[],slug:""})}},async setup({article:e}){let t,r;const{data:n}=([t,r]=ie(()=>de()),t=await t,r(),t),a=Ze({articles:_(n),article:e}),o=Array.isArray(a)&&a.length>0;return{relatedArticles:a,hasArticles:o}}},"$SK0yqTOiOq"),Pe={key:0},Ve=b("div",{class:"h5 mb-4 text-center"}," 相關文章 ",-1);function qe(e,t,r,n,a,o){const u=D;return e.hasArticles?(l(),m("div",Pe,[Ve,(l(!0),m(j,null,H(e.relatedArticles,(i,s)=>(l(),h(u,{key:s,article:i,class:"mt-3"},null,8,["article"]))),128))])):C("",!0)}const Fe=A(Je,[["render",qe]]),Ge=["src"],Ke={__name:"liker-button",setup(e){return(t,r)=>(l(),h(Ce,{href:"https://ko-fi.com/chaoschaoshuang"},{default:k(()=>[b("img",{src:`${t.$config.public.base}images/donation/kofi_button_blue.png`,alt:"Support me on Ko-fi",class:"img-fluid d-block",width:"200"},null,8,Ge)]),_:1}))}};function Ye(e,t,r,n){var a=-1,o=e==null?0:e.length;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r}var Qe=Ye,Xe=Ae,et={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},tt=Xe(et),rt=tt,st=rt,at=I,ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nt="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",it=nt+ot+ct,dt="["+it+"]",lt=RegExp(dt,"g");function ft(e){return e=at(e),e&&e.replace(ut,st).replace(lt,"")}var mt=ft,gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(gt)||[]}var xt=pt,_t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(e){return _t.test(e)}var bt=ht,W="\\ud800-\\udfff",yt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",$t=yt+vt+Ct,z="\\u2700-\\u27bf",T="a-z\\xdf-\\xf6\\xf8-\\xff",At="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",B="A-Z\\xc0-\\xd6\\xd8-\\xde",Ot="\\ufe0e\\ufe0f",Z=At+kt+Rt+wt,J="['’]",O="["+Z+"]",St="["+$t+"]",P="\\d+",Et="["+z+"]",V="["+T+"]",q="[^"+W+Z+P+z+T+B+"]",Lt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+St+"|"+Lt+")",Ut="[^"+W+"]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",G="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+B+"]",jt="\\u200d",S="(?:"+V+"|"+q+")",Ht="(?:"+p+"|"+q+")",E="(?:"+J+"(?:d|ll|m|re|s|t|ve))?",L="(?:"+J+"(?:D|LL|M|RE|S|T|VE))?",K=Mt+"?",Y="["+Ot+"]?",Dt="(?:"+jt+"(?:"+[Ut,F,G].join("|")+")"+Y+K+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wt=Y+K+Dt,zt="(?:"+[Et,F,G].join("|")+")"+Wt,Tt=RegExp([p+"?"+V+"+"+E+"(?="+[O,p,"$"].join("|")+")",Ht+"+"+L+"(?="+[O,p+S,"$"].join("|")+")",p+"?"+S+"+"+E,p+"+"+L,It,Nt,P,zt].join("|"),"g");function Bt(e){return e.match(Tt)||[]}var Zt=Bt,Jt=xt,Pt=bt,Vt=I,qt=Zt;function Ft(e,t,r){return e=Vt(e),t=r?void 0:t,t===void 0?Pt(e)?qt(e):Jt(e):e.match(t)||[]}var Gt=Ft,Kt=Qe,Yt=mt,Qt=Gt,Xt="['’]",er=RegExp(Xt,"g");function tr(e){return function(t){return Kt(Qt(Yt(t).replace(er,"")),e,"")}}var rr=tr,sr=rr,ar=sr(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}),ur=ar;const nr=$e(ur),or={__name:"article-comment",setup(e){const t=le(),r=$(()=>t.darkComputed?"dark":"light"),n={repo:"HuangChingChieh/blog",repoId:"R_kgDOHHJsJQ",category:"Announcements",categoryId:"DIC_kwDOHHJsJc4CcL42",reactionsEnabled:0,emitMetadata:0,inputPosition:"top",lang:"zh-TW",loading:"lazy",theme:r.value},a=w(!1),o=w(null),u=$(()=>{const s=[];if(a.value){const c={src:"https://giscus.app/client.js",crossorigin:"anonymous"};Object.keys(n).forEach(d=>{c[`data-${nr(d)}`]=n[d]}),s.push(c)}return s});N({script:u}),fe(r,()=>{const s=o.value.querySelector("iframe.giscus-frame");s&&s instanceof HTMLIFrameElement&&s.contentWindow.postMessage({giscus:{setConfig:{theme:r.value}}},"https://giscus.app")});const i=s=>{s&&!a.value&&(a.value=!0)};return(s,c)=>me((l(),m("div",{ref_key:"comments",ref:o,class:"giscus"},null,512)),[[_(ke),i]])}},cr=({description:e="",title:t="",img:r="",url:n="",tags:a=[],createdAt:o="",updatedAt:u=""})=>{const i=[{key:"description",name:"description",content:e},{key:"og:url",property:"og:url",content:n},{key:"og:type",property:"og:type",content:"article"},{key:"og:title",property:"og:title",content:t},{key:"og:description",property:"og:description",content:e},{key:"og:image",property:"og:image",content:r},{key:"og:article:published_time",property:"og:article:published_time",content:o},{key:"og:article:modified_time",property:"og:article:modified_time",content:u}];return a.forEach(s=>{i.push({property:"og:article:tag",content:s})}),{title:t,meta:i,script:[{hid:"article-json-ld",type:"application/ld+json",innerHTML:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:t,image:[r],datePublished:o,dateModified:u,author:[{"@type":"Person",name:"HuangChingChieh",url:"https://huangchingchieh.github.io/"}]})}]}},_r={__name:"[slug]",async setup(e){let t,r;const n=Re();ge((s,c,d)=>{n.toc=[],d()});const a=pe(),{slug:o}=a.params,{data:u}=([t,r]=xe(()=>we(o)),t=await t,r(),t);u!=null&&u.value?n.toc=u.value.body.toc.links:_e()({statusCode:"404"});const i=$(()=>{let s=[];if(u!=null&&u.value){const{appHost:c,imageServer:d}=ye().public,{title:v,description:y,img:x,tags:Q,updatedAt:X,createdAt:ee}=u.value,te=c+a.fullPath.substring(1);s=cr({description:y,url:te,title:v,img:x?`${d}1600x1200q100/${x}`:`${c}images/default-og.png`,tags:Q,updatedAt:X,createdAt:ee})}return s});return N(i.value),(s,c)=>(l(),m("div",null,[f(he,null,{default:k(()=>[f(Be,{document:_(u)},null,8,["document"])]),_:1}),b("hr",{class:g(["d-block",`d-${_(be)}-none`])},null,2),f(Ke,{class:"mt-5 d-flex justify-content-center"}),f(or,{class:"mt-5"}),f(Fe,{article:_(u),class:"mt-5"},null,8,["article"])]))}};export{_r as default};
