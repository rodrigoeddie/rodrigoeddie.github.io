import d from"./ContentRenderer.b785f600.js";import{_ as f}from"./layout.358df709.js";import{a as h,Q as n,e as v,c as x,q as y,o as w,R as s,S as g,u as r,U as C}from"./entry.fb076c02.js";import{u as q}from"./asyncData.3a09db42.js";import{q as c}from"./query.cc980b0f.js";import"./ContentRendererMarkdown.a04038e0.js";import"./index.a6ef77ff.js";import"./preview.0f4db803.js";import"./utils.83eccd53.js";const B={class:"container"},N={class:"title"},U={__name:"[slug]",async setup(R){let t,e;const{path:o}=h(),{data:a}=([t,e]=n(()=>q(`content-${o}`,()=>c().where({_path:o,active:!0}).findOne())),t=await t,e(),t),[i,_]=([t,e]=n(()=>c().only(["_path","title"]).where({active:!0}).findSurround(o)),t=await t,e(),t);console.log(i),console.log(_);const{title:u,description:p}=a._value;return v({title:u,description:p}),(S,k)=>{const l=d,m=f;return w(),x(m,{name:"base"},{default:y(()=>[s("div",B,[s("h1",N,g(r(a).title),1),C(l,{value:r(a)},null,8,["value"])])]),_:1})}}};export{U as default};