import{m as r,o as l,h as p,r as u,n as c}from"./Jd92928_.js";const f={__name:"interface-button",props:{variant:{type:String,default:""},disabled:{type:Boolean,default:!1},size:{type:String,default:""}},setup(n){const a=n,o=r(()=>{const t=[],{variant:e,size:s}=a;return e&&t.push(`btn-${e}`),s&&t.push(`btn-${s}`),t});return(t,e)=>(l(),p("button",{class:c([o.value,"btn"]),type:"button"},[u(t.$slots,"default")],2))}};export{f as _};