(function(e){function t(t){for(var a,r,i=t[0],o=t[1],c=t[2],l=0,m=[];l<i.length;l++)r=i[l],s[r]&&m.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);v&&v(t);while(m.length)m.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s={app:0},u=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2ace974e":"b628d13e","chunk-569ebb8c":"bb458d2e"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-2ace974e":1,"chunk-569ebb8c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2ace974e":"a4d154c9","chunk-569ebb8c":"3da714ae"}[e]+".css",s=o.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===s))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],l=c.getAttribute("data-href");if(l===a||l===s)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var a=t&&t.target&&t.target.src||s,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.request=a,delete r[e],v.parentNode.removeChild(v),n(u)},v.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(v)}).then(function(){r[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");u.type=a,u.request=r,n[1](u)}s[e]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var v=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var a=n("bcc9"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Bg"),n("Nav"),n("transition",{attrs:{name:"mainfade"}},[n("router-view",{attrs:{id:"mainView"}})],1)],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"straight",on:{click:e.nav_hamburger}},[n("div",{staticClass:"straight1",class:{ns1:e.nomalStraight,ms1:e.moveStraight}}),n("div",{staticClass:"straight2",class:{ns2:e.nomalStraight,ms2:e.moveStraight}}),n("div",{staticClass:"straight3",class:{ns3:e.nomalStraight,ms3:e.moveStraight}})]),n("div",{staticClass:"msk",class:{none:e.mskchang},on:{click:e.nav_hamburger}}),n("div",{staticClass:"navmenu",class:{navmenutrue:e.navmenutrue}},[n("div",{staticClass:"navmenuNum1",class:{navmenutrue1:e.navmenutrue,navmenufales1:e.navmenufales}}),n("div",{staticClass:"navmenuNum2",class:{navmenutrue2:e.navmenutrue,navmenufales2:e.navmenufales}}),n("div",{staticClass:"navmenuNum3",class:{navmenutrue3:e.navmenutrue,navmenufales3:e.navmenufales}}),n("div",{staticClass:"navmenuNum4",class:{navmenutrue4:e.navmenutrue,navmenufales4:e.navmenufales}}),n("div",{staticClass:"navmenuNum5",class:{navmenutrue5:e.navmenutrue,navmenufales5:e.navmenufales}}),n("div",{staticClass:"link",class:{linktrue:e.navmenutrue,linkfales:e.navmenufales}},[n("div",{attrs:{id:"linkH"},on:{click:e.nav_hamburger}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("div",{attrs:{id:"linkA"},on:{click:e.nav_hamburger}},[n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("div",{attrs:{id:"linkW"},on:{click:e.nav_hamburger}},[n("router-link",{attrs:{to:"/works"}},[e._v("Works")])],1)])])])},i=[],o={name:"Nav",data:function(){return{nomalStraight:!0,moveStraight:!1,none:!1,navmenutrue:!0,navmenufales:!1,mskchang:!0}},methods:{nav_hamburger:function(){this.nomalStraight=!this.nomalStraight,this.moveStraight=!this.moveStraight,this.none=!this.none,this.navmenutrue=!this.navmenutrue,this.navmenufales=!this.navmenufales,this.mskchang=!this.mskchang}}},c=o,l=(n("d79f"),n("2877")),m=Object(l["a"])(c,u,i,!1,null,null,null),v=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bg"}},[n("div",{staticClass:"bg_slanting1"}),n("div",{staticClass:"bg_slanting2"})])}],d={name:"Bg"},p=d,b=(n("6c08"),Object(l["a"])(p,f,h,!1,null,null,null)),g=b.exports,k={components:{Nav:v,Bg:g}},_=k,y=(n("5c0b"),Object(l["a"])(_,r,s,!1,null,null,null)),w=y.exports,C=n("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Welcome to"),n("br"),e._v("roll1226 Portfolio")])])}],E=(n("21bb"),{}),O=Object(l["a"])(E,S,j,!1,null,null,null),P=O.exports,N=n("f13c"),x=n.n(N);n("fa6d");a["a"].use(C["a"]),a["a"].use(x.a);var T=new C["a"]({base:"",routes:[{path:"/",name:"home",component:P,meta:{title:"Portfolio / Home"}},{path:"/about",name:"about",component:function(){return n.e("chunk-569ebb8c").then(n.bind(null,"f820"))},meta:{title:"Portfolio / About"}},{path:"/works",name:"works",component:function(){return n.e("chunk-2ace974e").then(n.bind(null,"1822"))},meta:{title:"Portfolio / Works"}}]});T.afterEach(function(e){e.meta&&e.meta.title&&(document.title=e.meta.title)});var A=T;a["a"].config.productionTip=!1,new a["a"]({router:A,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},"6c08":function(e,t,n){"use strict";var a=n("bf3b"),r=n.n(a);r.a},bcc9:function(e,t,n){},bf3b:function(e,t,n){},ca80:function(e,t,n){},d79f:function(e,t,n){"use strict";var a=n("ca80"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e0c6d5ec.js.map