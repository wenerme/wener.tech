"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86671],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4735:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={title:"meshery"},d="meshery",y={unversionedId:"devops/service/meshery",id:"devops/service/meshery",title:"meshery",description:"- meshery/meshery",source:"@site/../notes/devops/service/meshery.md",sourceDirName:"devops/service",slug:"/devops/service/meshery",permalink:"/notes/devops/service/meshery",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/service/meshery.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637477347,formattedLastUpdatedAt:"Nov 21, 2021",frontMatter:{title:"meshery"},sidebar:"docs",previous:{title:"lura",permalink:"/notes/devops/service/lura"},next:{title:"Microservices",permalink:"/notes/devops/service/microservices"}},f={},k=[],b={toc:k};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"meshery"}),"meshery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/meshery/meshery"}),"meshery/meshery"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"servicemesh \u7ba1\u7406\u9762\u677f"),(0,n.kt)("li",{parentName:"ul"},"\u9002\u914d\u7ba1\u7406\u591a\u79cd servicemesh \u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 docker \u90e8\u7f72 - \u7ba1\u7406\u5916\u90e8 kube \u96c6\u7fa4"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 istio, linkerd, consul, nsm, octarine, kuma, cpx, osm, traefik-mesh, nginx-sm, app-mesh, yanzi-sm")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Components"),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Server"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang, gRPC, GraphQL, SMP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Adapters"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang, gRPC, CloudEvents, SMI, OAM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery WASM Filters"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Rust and C++")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery UI"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ReactJS, NextJS, BillboardJS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Provider UI"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ReactJS, NextJS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Remote Providers"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"any - must adhere to Meshery Extension Points")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Operator"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u21b3 MeshSync"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"\u21b3 Broker"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang, NATS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Meshery Database"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Golang, SQLlite")))))}v.isMDXComponent=!0}}]);