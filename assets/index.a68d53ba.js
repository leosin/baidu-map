import{c as y,a as g,d as m,r as L,o as b,b as a,e as c,F as k,f as $,n as C,g as i,t as x,h as E,i as p,j as F,k as O,l as P}from"./vendor.e8c9ef2b.js";const A=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};A();const B="modulepreload",f={},N="/baidu-map/",h=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${N}${t}`,t in f)return;f[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":B,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((_,v)=>{o.addEventListener("load",_),o.addEventListener("error",v)})})).then(()=>n())},V=[{path:"/",name:"home",component:()=>h(()=>import("./Home.47f2e76b.js"),["assets/Home.47f2e76b.js","assets/Map.292946e2.css","assets/vendor.e8c9ef2b.js","assets/vendor.0edeb183.css"]),meta:{title:"\u5F00\u59CB\u4F7F\u7528"}},{path:"/map",name:"map",component:()=>h(()=>import("./Map.50b6e35a.js"),["assets/Map.50b6e35a.js","assets/Map.292946e2.css","assets/vendor.e8c9ef2b.js","assets/vendor.0edeb183.css"]),meta:{title:"\u5C55\u793A\u5730\u56FE"}}],d=y({history:g(),routes:V});const j={class:"sidemenu"},w=["onClick"],R={class:"sidemenu-item-icon"},S=["src"],z={class:"sidemenu-item-text"},D=m({setup(l){const n=L();function r(t){d.push(t.path)}return b(()=>{n.value=d.options.routes.map(t=>{var e,s;return{icon:((e=t.meta)==null?void 0:e.icon)||"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",title:((s=t.meta)==null?void 0:s.title)||t.name,path:t.path}})}),(t,e)=>(a(),c("div",j,[(a(!0),c(k,null,$(n.value,(s,o)=>(a(),c("div",{class:C(["sidemenu-item",{"sidemenu-item-active":t.$route.path===s.path}]),key:o,onClick:_=>r(s)},[i("div",R,[i("img",{src:s.icon},null,8,S)]),i("div",z,x(s.title),1)],10,w))),128))]))}});const H={class:"page"},I={class:"sideleft"},M={class:"sidefixed"},q=i("div",{class:"logo"},"Bmap-GL-Vue3",-1),K={class:"content"},T=m({setup(l){return(n,r)=>{const t=E("router-view");return a(),c("div",H,[i("div",I,[i("div",M,[q,p(D)])]),i("div",K,[p(t)])])}}});const u=F(T);u.use(d);u.use(O,{apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88"});u.use(P);u.mount("#app");
