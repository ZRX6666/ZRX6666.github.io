(function(e){function n(n){for(var a,u,o=n[0],f=n[1],d=n[2],h=0,i=[];h<o.length;h++)u=o[h],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&i.push(c[u][0]),c[u]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);s&&s(n);while(i.length)i.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},u={app:0},c={app:0},r=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-0848ff21":"6662e101","chunk-0d701392":"f2fe1e63","chunk-1585283f":"f96e3b33","chunk-2097b780":"3969abcf","chunk-320dc0d6":"699c1569","chunk-34a9fdcc":"d89f4626","chunk-352a7092":"fac6fabf","chunk-39604112":"3f9b55cf","chunk-447d9f29":"84d72fe1","chunk-4b3bb2d8":"c7a783fe","chunk-4c3ceb2d":"3d462864","chunk-73e519b0":"bb65051f","chunk-7f27839b":"b368fb16","chunk-8c20ad3e":"09653344","chunk-b7bfb4fa":"6e8d4f1e"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-0848ff21":1,"chunk-0d701392":1,"chunk-1585283f":1,"chunk-2097b780":1,"chunk-320dc0d6":1,"chunk-34a9fdcc":1,"chunk-352a7092":1,"chunk-39604112":1,"chunk-447d9f29":1,"chunk-4b3bb2d8":1,"chunk-4c3ceb2d":1,"chunk-73e519b0":1,"chunk-7f27839b":1,"chunk-8c20ad3e":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0848ff21":"71ec0116","chunk-0d701392":"04eeb6d3","chunk-1585283f":"98275dc0","chunk-2097b780":"262f5225","chunk-320dc0d6":"2728fe4c","chunk-34a9fdcc":"79fff915","chunk-352a7092":"5fc49c80","chunk-39604112":"fb80d615","chunk-447d9f29":"8837f208","chunk-4b3bb2d8":"47406557","chunk-4c3ceb2d":"2098a7fa","chunk-73e519b0":"14e0eb08","chunk-7f27839b":"4f2dde8d","chunk-8c20ad3e":"b58a8503","chunk-b7bfb4fa":"31d6cfe0"}[e]+".css",c=f.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var d=r[o],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===a||h===c))return n()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){d=i[o],h=d.getAttribute("data-href");if(h===a||h===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete u[e],s.parentNode.removeChild(s),t(r)},s.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){u[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,f.nc&&h.setAttribute("nonce",f.nc),h.src=o(e);var i=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,t[1](i)}c[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var i=0;i<d.length;i++)n(d[i]);var s=h;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("fb6a"),t("d3b7"),t("4d63"),t("ac1f"),t("25f0"),t("5319"),t("5246");var a=t("6b41"),u=(t("38d5"),t("772a")),c=(t("be7f"),t("565f")),r=(t("66b9"),t("b650")),o=(t("8a58"),t("e41f")),f=(t("537a"),t("ac28")),d=(t("a52c"),t("2ed4")),h=(t("e7e5"),t("d399")),i=(t("9a83"),t("f564")),s=(t("7844"),t("5596")),l=(t("4b0a"),t("2bb1")),b=(t("5852"),t("d961")),p=(t("c194"),t("7744")),m=(t("bda7"),t("5e46")),k=(t("da3c"),t("0b33")),g=(t("c3a6"),t("ad06")),v=(t("f06a"),t("20fb")),y=(t("93ac"),t("bb33")),w=(t("591c"),t("7713")),j=(t("ef6f"),t("82a8")),x=(t("4467"),t("c36e")),O=(t("3c32"),t("417e")),S=(t("a909"),t("3acc")),E=(t("be39"),t("efa0")),P=(t("91d5"),t("f0ca")),_=(t("869a"),t("6869")),A=(t("acb7"),t("67bb")),C=(t("e930"),t("8f80")),M=(t("e17f"),t("2241")),T=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),L=t("bc3a"),N=t.n(L),D=t("a7fe"),B=t.n(D),F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},R=[],H=(t("7c55"),t("2877")),$={},U=Object(H["a"])($,F,R,!1,null,null,null),q=U.exports,J=t("8c4f"),V=[{path:"/login",name:"Login",component:function(){return t.e("chunk-2097b780").then(t.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-b7bfb4fa").then(t.bind(null,"cd56"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-39604112").then(t.bind(null,"b288"))}},{path:"menu",name:"Menu",component:function(){return t.e("chunk-4c3ceb2d").then(t.bind(null,"0f38"))}},{path:"order",name:"Order",component:function(){return t.e("chunk-73e519b0").then(t.bind(null,"bf82"))}},{path:"shopbag",name:"Shopbag",component:function(){return t.e("chunk-447d9f29").then(t.bind(null,"6707"))}},{path:"my",name:"My",component:function(){return t.e("chunk-0d701392").then(t.bind(null,"3837"))}}]},{path:"/detail",name:"Detail",component:function(){return t.e("chunk-8c20ad3e").then(t.bind(null,"c84b"))}},{path:"/pay",name:"Pay",component:function(){return t.e("chunk-7f27839b").then(t.bind(null,"76a1"))}},{path:"/newaddress",name:"NewAddress",component:function(){return t.e("chunk-4b3bb2d8").then(t.bind(null,"5f65"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-0848ff21").then(t.bind(null,"a821"))}},{path:"/account",name:"Account",component:function(){return t.e("chunk-320dc0d6").then(t.bind(null,"77be"))}},{path:"/like",name:"Like",component:function(){return t.e("chunk-1585283f").then(t.bind(null,"7c2a"))}},{path:"/secure",name:"Secure",component:function(){return t.e("chunk-34a9fdcc").then(t.bind(null,"305b"))}},{path:"/forgot",name:"Forgot",component:function(){return t.e("chunk-352a7092").then(t.bind(null,"0fdf"))}},{path:"*",redirect:{name:"Home"}}];T["a"].use(J["a"]);var G=new J["a"]({routes:V}),I=G;t("499a");T["a"].use(a["a"]).use(u["a"]).use(c["a"]).use(r["a"]).use(o["a"]).use(f["a"]).use(d["a"]).use(h["a"]).use(i["a"]).use(s["a"]).use(l["a"]).use(b["a"]).use(p["a"]).use(m["a"]).use(k["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(j["a"]).use(x["a"]).use(O["a"]).use(S["a"]).use(E["a"]).use(P["a"]).use(_["a"]).use(A["a"]).use(C["a"]).use(M["a"]),T["a"].use(B.a,N.a),N.a.defaults.baseURL="http://www.kangliuyong.com:10002",N.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",T["a"].config.productionTip=!1,T["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",T["a"].filter("formatData",(function(e,n){var t=new Date(e),a=t.getFullYear();if(/(y+)/.test(n)){var u=RegExp.$1;n=n.replace(u,a.toString().slice(4-u.length))}var c={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var r in c){var o=new RegExp("(".concat(r,"+)"));if(o.test(n)){var f=RegExp.$1,d=c[r]>=10?c[r]:2==f.length?"0"+c[r]:c[r];n=n.replace(f,d)}}return n})),new T["a"]({router:I,render:function(e){return e(q)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("2395"),u=t.n(a);u.a}});
//# sourceMappingURL=app.1c397ad2.js.map