import{x as n,o,c as s,t as u}from"./zem-cybl.js";const i={__name:"text-price",props:{price:{type:[String,Number],default:0,validator:t=>!isNaN(Number(t))},currency:{type:String,default:"TWD"}},setup(t){const c=t,a=n(()=>{const{currency:e,price:r}=c;return Intl.NumberFormat("zh-tw",{style:"currency",currency:e,currencyDisplay:"code",maximumFractionDigits:0}).format(r)});return(e,r)=>(o(),s("span",null,u(a.value),1))}};export{i as default};
