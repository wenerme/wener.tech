"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[90115],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18128:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],i={title:"Control plane"},p="Control plane",u={unversionedId:"dev/theory/control-plane",id:"dev/theory/control-plane",title:"Control plane",description:"- \u63a7\u5236\u9762\u677f",source:"@site/../notes/dev/theory/control-plane.md",sourceDirName:"dev/theory",slug:"/dev/theory/control-plane",permalink:"/notes/dev/theory/control-plane",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/theory/control-plane.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Control plane"},sidebar:"docs",previous:{title:"Actor",permalink:"/notes/dev/theory/actor"},next:{title:"\u63a7\u5236\u7406\u8bba",permalink:"/notes/dev/theory/control-theory"}},c={},m=[],d={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"control-plane"},"Control plane"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a7\u5236\u9762\u677f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Control_plane"},"Control plane")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e Data plane - \u7ba1\u7406\u64cd\u4f5c\u8def\u5f84"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_plane"},"Data plane")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5904\u7406\u903b\u8f91 - \u5904\u7406\u6570\u636e - \u7528\u6237\u8bbf\u95ee\u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd - \u53ef\u80fd\u662f\u786c\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Forwarding_plane"},"Forwarding plane")))),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u8f7b\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5355\u4e00"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4e3a\u4ee3\u7406\u670d\u52a1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/ops/deployment/architecture/"},"Istio Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linkerd.io/2.10/reference/architecture/"},"Linkerd Architecture"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"-"),(0,l.kt)("th",{parentName:"tr",align:null},"Control plane"),(0,l.kt)("th",{parentName:"tr",align:null},"Data plane"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Router"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u8f6c\u53d1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Nginx"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingress Controller"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linkerd"),(0,l.kt)("td",{parentName:"tr",align:null},"controller"),(0,l.kt)("td",{parentName:"tr",align:null},"linkerd-proxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Istio"),(0,l.kt)("td",{parentName:"tr",align:null},"istiod"),(0,l.kt)("td",{parentName:"tr",align:null},"envoy+sidecar")))))}s.isMDXComponent=!0}}]);