import{c as v,a as g,d as m,r as y,o as k,b as a,e as c,F as $,f as L,n as b,g as i,t as C,h as x,i as _,j as E,k as B,l as F}from"./vendor.189a177f.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};N();const O="modulepreload",p={},P="/baidu-map/",w=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${P}${t}`,t in p)return;p[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((d,h)=>{o.addEventListener("load",d),o.addEventListener("error",h)})})).then(()=>n())},S=[{path:"/",name:"home",component:()=>w(()=>import("./Home.5fd63f98.js"),["assets/Home.5fd63f98.js","assets/Home.1588f38e.css","assets/vendor.189a177f.js"]),meta:{title:"\u5F00\u59CB\u4F7F\u7528"}}],f=v({history:g(),routes:S});const V={class:"sidemenu"},j=["onClick"],A={class:"sidemenu-item-icon"},R=["src"],z={class:"sidemenu-item-text"},H=m({setup(u){const n=y();function r(t){console.log(t)}return k(()=>{n.value=f.options.routes.map(t=>{var e,s;return{icon:((e=t.meta)==null?void 0:e.icon)||"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",title:((s=t.meta)==null?void 0:s.title)||t.name,path:t.path}})}),(t,e)=>(a(),c("div",V,[(a(!0),c($,null,L(n.value,(s,o)=>(a(),c("div",{class:b(["sidemenu-item",{"sidemenu-item-active":t.$route.path===s.path}]),key:o,onClick:d=>r(s)},[i("div",A,[i("img",{src:s.icon},null,8,R)]),i("div",z,C(s.title),1)],10,j))),128))]))}});const q={class:"page"},D={class:"sideleft"},I=i("div",{class:"logo"},"Bmap-GL-Vue3",-1),M={class:"content"},W=m({setup(u){return(n,r)=>{const t=x("router-view");return a(),c("div",q,[i("div",D,[I,_(H)]),i("div",M,[_(t)])])}}});const l=E(W);l.use(f);l.use(B);l.use(F);l.mount("#app");