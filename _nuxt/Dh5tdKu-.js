import{_ as g}from"./lOHc66u9.js";import{_ as y}from"./Cwn4dJ-e.js";import{i as k,u as C,f as b,r as B,o as r,g as L,w as p,a as s,c as _,j as u,F as m,h as N,k as q,t as f,b as P,d as S}from"./CSqgY8Le.js";import{q as V}from"./CW3DDV2V.js";import{_ as A}from"./DlAUqK2U.js";import"./CyBeemJH.js";const E={class:"container"},F={class:"filter"},j=["onClick"],D={class:"wrapper-contents"},H={class:"wrap-content"},I=k({__name:"index",async setup(M){let o,l;C({title:"Blog"});const c=([o,l]=b(()=>V("blog").where({active:!0}).find()),o=await o,l(),o);let d=B(c);const h=c.map(a=>a.category),x=[...new Set(h)],v=async(a,n)=>{document.querySelectorAll(".item-filter").forEach(t=>t.classList.remove("active")),a.target.classList.add("active");const i=await c.filter(t=>t.category==n);d.value=i};return(a,n)=>{const i=g,t=y;return r(),L(t,{name:"base"},{default:p(()=>[s("div",E,[n[0]||(n[0]=s("h3",null,"Posts:",-1)),s("div",F,[(r(),_(m,null,u(x,e=>s("button",{class:"item-filter",onClick:q(w=>{v(w,e)},["prevent"])},f(e),9,j)),64))]),s("div",D,[(r(!0),_(m,null,u(N(d),e=>(r(),_("div",H,[P(i,{to:e._path},{default:p(()=>[S(" -> "+f(e.title),1)]),_:2},1032,["to"])]))),256))])])]),_:1})}}}),O=A(I,[["__scopeId","data-v-1b122af9"]]);export{O as default};
