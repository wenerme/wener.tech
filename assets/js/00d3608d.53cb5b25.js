"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3904],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,d=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return t?n.createElement(d,f(f({ref:r},u),{},{components:t})):n.createElement(d,f({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,f=new Array(a);f[0]=s;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,f[1]=c;for(var l=2;l<a;l++)f[l]=t[l];return n.createElement.apply(null,f)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},71767:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return y}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,f=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&u(e,t,r[t]);return e};const s={title:"cf-terraforming"},m="cf-terraforming",d={unversionedId:"ops/infra/terraform/terraform-cf",id:"ops/infra/terraform/terraform-cf",title:"cf-terraforming",description:"* cloudflare/cf-terraforming",source:"@site/../notes/ops/infra/terraform/terraform-cf.md",sourceDirName:"ops/infra/terraform",slug:"/ops/infra/terraform/cf",permalink:"/notes/ops/infra/terraform/cf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/terraform/terraform-cf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{title:"cf-terraforming"},sidebar:"docs",previous:{title:"Terraform Awesome",permalink:"/notes/ops/infra/terraform/awesome"},next:{title:"Terraform \u5e38\u7528\u811a\u672c",permalink:"/notes/ops/infra/terraform/cookbook"}},b={},y=[],g={toc:y};function O(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=p(p({},g),u),a(r,f({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"cf-terraforming"}),"cf-terraforming"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/cloudflare/cf-terraforming"}),"cloudflare/cf-terraforming"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"brew install --cask cloudflare/cloudflare/cf-terraforming\n")))}O.isMDXComponent=!0}}]);