(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{341:function(t,e,n){t.exports={gridColumns:"12",mobileBreakpoint:"sm",containerMaxWidthsKeys:"sm,lg",containerMaxWidthsValues:"640px,800px",gridBreakpointsKeys:"xs,sm,lg",gridBreakpointsValues:"0,768px,992px",link:"link_hCWyH"}},360:function(t,e,n){"use strict";var l=n(341),r=n.n(l);n.d(e,"default",(function(){return r.a}))},382:function(t,e,n){"use strict";n.r(e);var l=n(3),r=(n(13),n(23),n(17),n(101)),o=n(114),c=n(174),d=n(29),f={components:{CommonContainer:r.default,ButtonEnter:o.default},asyncData:t=>Object(l.a)((function*(){var{$content:e,store:n}=t,l=JSON.parse(JSON.stringify(n.state.categories));return delete l.all,yield Promise.all(Object.keys(l).map((t=>e("articles",{deep:!0}).only(c.a.card).sortBy("updatedAt","desc").where({category:t}).limit(3).fetch().then((e=>{l[t].articles=e}))))),{categories:l}}))(),head:()=>({title:"文章分類"}),methods:{getArticleLink:d.a,getCategoryLink:d.b}},m=n(360),y=n(0);var component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("common-container",[e("h1",[t._v("文章分類")]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),t._l(t.categories,(function(n,l){return e("div",{key:l,staticClass:"mt-4"},[e("div",{staticClass:"rounded overflow-hidden"},[e("h3",{staticClass:"py-2 d-flex align-items-center mb-0"},[t._v("\n        "+t._s(t.$config.categoriesMap[l])+"\n      ")]),t._v(" "),e("nav",{staticClass:"py-3"},[t._l(n.articles,(function(article){return e("nuxt-link",{key:article.slug,staticClass:"d-block ps-3 py-2 border-start",class:t.$style.link,attrs:{to:t.getArticleLink(article)}},[t._v(t._s(article.title))])})),t._v(" "),e("div",{staticClass:"mt-2 d-flex align-items-center flex-row"},[e("small",{staticClass:"me-2"},[t._v("共"+t._s(n.count)+"篇文章")]),t._v(" "),e("button-enter",{attrs:{to:t.getCategoryLink({category:l})}},[t._v("文章列表")])],1)],2)])])}))],2)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;installComponents(component,{ButtonEnter:n(114).default,CommonContainer:n(101).default})}}]);