import{M as u,m as n,o as m,h as p,r as i,n as d}from"./Jd92928_.js";const g={__name:"interface-col",props:{sm:{type:[String,Number],default:""},md:{type:[String,Number],default:""},lg:{type:[String,Number],default:""},xl:{type:[String,Number],default:""},cols:{type:[String,Number],default:u}},setup(a){const t=a,c=n(()=>{const s=[],{sm:e,md:l,lg:r,xl:o}=t;return e&&s.push(`col-sm-${e}`),l&&s.push(`col-md-${l}`),r&&s.push(`col-lg-${r}`),o&&s.push(`col-xl-${o}`),s.push(`col-${t.cols}`),s});return(s,e)=>(m(),p("div",{class:d(c.value)},[i(s.$slots,"default")],2))}};export{g as _};