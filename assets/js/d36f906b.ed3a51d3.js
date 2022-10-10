"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90115],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6057:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const d={title:"Control plane"},s="Control plane",f={unversionedId:"dev/theory/control-plane",id:"dev/theory/control-plane",title:"Control plane",description:"- \u63a7\u5236\u9762\u677f",source:"@site/../notes/dev/theory/control-plane.md",sourceDirName:"dev/theory",slug:"/dev/theory/control-plane",permalink:"/notes/dev/theory/control-plane",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/theory/control-plane.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1618644387,formattedLastUpdatedAt:"Apr 17, 2021",frontMatter:{title:"Control plane"},sidebar:"docs",previous:{title:"Actor",permalink:"/notes/dev/theory/actor"},next:{title:"\u63a7\u5236\u7406\u8bba",permalink:"/notes/dev/theory/control-theory"}},k={},y=[],N={toc:y};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"control-plane"}),"Control plane"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63a7\u5236\u9762\u677f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Control_plane"}),"Control plane")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e Data plane - \u7ba1\u7406\u64cd\u4f5c\u8def\u5f84"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Data_plane"}),"Data plane")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5904\u7406\u903b\u8f91 - \u5904\u7406\u6570\u636e - \u7528\u6237\u8bbf\u95ee\u8def\u5f84"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd - \u53ef\u80fd\u662f\u786c\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Forwarding_plane"}),"Forwarding plane")))),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u8f7b\u91cf"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5355\u4e00"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4e3a\u4ee3\u7406\u670d\u52a1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://istio.io/latest/docs/ops/deployment/architecture/"}),"Istio Architecture")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://linkerd.io/2.10/reference/architecture/"}),"Linkerd Architecture"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"-"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Control plane"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Data plane"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Router"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u8def\u7531\u8868"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5305\u8f6c\u53d1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Ingress Nginx"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Ingress Controller"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Nginx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Linkerd"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"controller"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"linkerd-proxy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Istio"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"istiod"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"envoy+sidecar")))))}b.isMDXComponent=!0}}]);