import{e as R,r as $,c as P,b as x,g as V}from"./CIMwKean.js";var h={exports:{}};/*!
  * Bootstrap scrollspy.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var k=h.exports,d;function K(){return d||(d=1,function(b,G){(function(f,i){b.exports=i(R(),$(),P(),x())})(k,function(f,i,r,c){const S="scrollspy",_=".bs.scrollspy",g=".data-api",m=`activate${_}`,u=`click${_}`,L=`load${_}${g}`,A="dropdown-item",n="active",O='[data-bs-spy="scroll"]',p="[href]",y=".nav, .list-group",T=".nav-link",C=`${T}, .nav-item > ${T}, .list-group-item`,D=".dropdown",I=".dropdown-toggle",N={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},M={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class l extends f{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return N}static get DefaultType(){return M}static get NAME(){return S}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=c.getElement(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(i.off(this._config.target,u),i.on(this._config.target,u,p,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,a=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:a,behavior:"smooth"});return}s.scrollTop=a}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},a=(this._rootElement||document.documentElement).scrollTop,v=a>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=a;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const E=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(v&&E){if(s(o),!a)return;continue}!v&&!E&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=r.find(p,this._config.target);for(const e of t){if(!e.hash||c.isDisabled(e))continue;const s=r.findOne(decodeURI(e.hash),this._element);c.isVisible(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(n),this._activateParents(t),i.trigger(this._element,m,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(A)){r.findOne(I,t.closest(D)).classList.add(n);return}for(const e of r.parents(t,y))for(const s of r.prev(e,C))s.classList.add(n)}_clearActiveClass(t){t.classList.remove(n);const e=r.find(`${p}.${n}`,t);for(const s of e)s.classList.remove(n)}static jQueryInterface(t){return this.each(function(){const e=l.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}return i.on(window,L,()=>{for(const w of r.find(O))l.getOrCreateInstance(w)}),c.defineJQueryPlugin(l),l})}(h)),h.exports}var q=K();const Y=V(q),Q=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Q as s};