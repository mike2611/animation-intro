import{S as g,P as h,W as b,M as u,T as m,a as d,O as x,b as v,B as L}from"./vendor.50dd40f3.js";const M=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}};M();const o=new g,r=new h(75,window.innerWidth/window.innerHeight,.1,1e3),n=new b({canvas:document.querySelector("#bg")});n.setPixelRatio(window.devicePixelRatio);n.setSize(window.innerWidth,window.innerHeight);r.position.setZ(30);n.render(o,r);const f=new u({color:14060583,wireframe:!0}),O=new m(10,1,16,100),i=new d(O,f),P=new m(12,1,16,100),s=new d(P,f);o.add(i);o.add(s);const S=new x(r,n.domElement),T=new v().load("backgroundImg3.png"),w=new d(new L(9,9,9),new u({map:T}));o.add(w);function y(){requestAnimationFrame(y),i.rotation.x+=.005,i.rotation.y+=.0025,i.rotation.z+=.005,s.rotation.x+=.0025,s.rotation.y+=.005,s.rotation.z+=.0025,w.rotation.y+=.0025,S.update(),n.render(o,r)}y();
