import{K as l,G as u,z as m,a as _,s as o,o as g}from"./zem-cybl.js";import{_ as f,u as y}from"./DD70nunc.js";import{u as d}from"./BbJ4qIQM.js";const B={__name:"index",async setup(k){let e,t;const s=d(),{appHost:n,description:r}=l().public,{pageCount:c}=s.articlesMetadata,{data:i}=([e,t]=u(()=>y({page:1,category:"all"})),e=await e,t(),e);m({title:"",titleTemplate:"隨機手札",meta:[{key:"og:url",property:"og:url",content:n},{key:"og:description",property:"og:description",content:r}]});const p=a=>`/category/all/${a}`;return(a,x)=>(g(),_(f,{"link-gen":p,articles:o(i),"number-of-pages":o(c)},null,8,["articles","number-of-pages"]))}};export{B as default};
