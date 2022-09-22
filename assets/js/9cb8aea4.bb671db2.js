"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51553],{8040:function(e,t,r){r.r(t),r.d(t,{LessIsMoreFormula:function(){return v},assets:function(){return y},contentTitle:function(){return g},default:function(){return M},frontMatter:function(){return h},metadata:function(){return w},toc:function(){return b}});var n=r(59496),o=r(49613),a=r(98338),i=r(72469),l=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&f(e,r,t[r]);return e};const h={id:"formula",title:"\u589e\u957f\u76f8\u5173\u516c\u5f0f"},g=void 0,w={unversionedId:"reference/growth/formula",id:"reference/growth/formula",title:"\u589e\u957f\u76f8\u5173\u516c\u5f0f",description:"\u79ef\u5c11\u6210\u591a",source:"@site/../notes/reference/growth/formula.mdx",sourceDirName:"reference/growth",slug:"/reference/growth/formula",permalink:"/notes/reference/growth/formula",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/reference/growth/formula.mdx",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"formula",title:"\u589e\u957f\u76f8\u5173\u516c\u5f0f"},sidebar:"docs",previous:{title:"\u70f9\u996a\u8bcd\u6c47",permalink:"/notes/reference/cook/glossary"},next:{title:"\u589e\u957f\u76f8\u5173\u8bcd\u6c47",permalink:"/notes/reference/growth/glossary"}},y={},b=[{value:"\u79ef\u5c11\u6210\u591a",id:"\u79ef\u5c11\u6210\u591a",level:2}];function v(){const e=n.useMemo((()=>i.ZP.input`
    border: none;
    border-bottom: 1px solid;
    width: ${e=>e.width||"80px"};
    background: none;
    text-align: right;
  `),[]),t=(0,a.hN)((()=>({initial:1e3,rate:101,period:1,get final(){return Math.floor(this.initial*Math.pow(this.rate/100,52*this.period))},get changeRate(){return(this.final/this.initial||0).toFixed(2)}})));return(0,a.SZ)((()=>(0,o.kt)("div",null,"\u5982\u679c\u5f00\u59cb\u6709",(0,o.kt)(e,{size:"small",type:"number",value:t.initial,onChange:e=>t.initial=parseInt(e.target.value),mdxType:"MyInput"}),"\u521d\u59cb\u7528\u6237\uff0c\u5468\u589e\u957f\u4e3a",(0,o.kt)(e,{width:"60px",type:"number",value:t.rate,onChange:e=>t.rate=parseInt(e.target.value),mdxType:"MyInput"}),"%\uff0c\u90a3\u4e48",(0,o.kt)(e,{width:"40px",type:"number",value:t.period,onChange:e=>t.period=parseInt(e.target.value),mdxType:"MyInput"}),"\u5e74\u540e\u7528\u6237\u6570\u4e3a",(0,o.kt)(e,{width:"120px",disabled:!0,value:t.final,mdxType:"MyInput"}),"\uff0c \u524d\u540e\u76f8\u5dee",(0,o.kt)(e,{width:"50px",disabled:!0,value:t.changeRate,mdxType:"MyInput"}),"\u500d \u3002")))}k="MyInput";var k;const x={toc:b,LessIsMoreFormula:v};function M(e){var t,r=e,{components:n}=r,a=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=m(m({},x),a),u(t,s({components:n,mdxType:"MDXLayout"}))),(0,o.kt)("h2",m({},{id:"\u79ef\u5c11\u6210\u591a"}),"\u79ef\u5c11\u6210\u591a"),(0,o.kt)(v,{mdxType:"LessIsMoreFormula"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u4e00\u70b9\u7684\u589e\u957f\uff0c\u7d2f\u8ba1\u4e0b\u6765\u53ef\u80fd\u5927\u4e0d\u4e00\u6837\u3002"))}M.isMDXComponent=!0}}]);