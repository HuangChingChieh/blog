(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{458:function(t,e,n){"use strict";n.r(e);n(9),n(39),n(40),n(433),n(293),n(42);var r={directives:{"b-visible":n(220).a},data:function(){return{likerButton:""}},methods:{init:function(t){if(t&&!this.likerButton){var e=new URL("https://button.like.co/in/embed/chaoshuang/button"),n=e.searchParams;n.append("referrer",encodeURIComponent(this.$config.appHost+this.$route.path.substring(1))),this.$config.isDev&&n.append("preview",1),this.likerButton=e.toString()}}}},o=n(0),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("iframe",{directives:[{name:"b-visible",rawName:"v-b-visible",value:t.init,expression:"init"}],staticClass:"d-block mx-auto",attrs:{src:t.likerButton,frameborder:"0",loading:"lazy"}})}),[],!1,null,null,null);e.default=component.exports}}]);