import{af as s}from"./zem-cybl.js";const r=({articles:t=[],perPage:e=10})=>{const o={};return t.length>0&&(t.forEach(a=>{const{category:n}=a;n&&(o[n]||(o[n]={count:0,pageCount:1}),o[n].count++)}),o.all={count:t.length,pageCount:1},Object.keys(o).forEach(a=>{const n=o[a];c({category:n,perPage:e})})),o},c=({category:t,perPage:e})=>{t&&(t.pageCount=g({count:t.count,perPage:e}))},g=({count:t,perPage:e})=>Math.ceil(t/e),i=t=>{const e={};return t.length>0&&t.forEach(({tags:o})=>{Array.isArray(o)&&o.length>0&&o.forEach(a=>{if(typeof a=="string"){const n=a.toLowerCase();e[n]||(e[n]=0),e[n]++}})}),e},f=s("main",{state:()=>({tagsObj:{},categories:{},articlesMetadata:{count:0,pageCount:0},toc:[]}),actions:{nuxtServerInit({articles:t=[],perPage:e}){const{articlesMetadata:o}=this;o.count=t.length,c({category:o,perPage:e}),this.categories=r({articles:t,perPage:e}),this.tagsObj=i({articles:t})}}});export{f as u};
