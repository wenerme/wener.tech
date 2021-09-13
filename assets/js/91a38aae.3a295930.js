"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64734],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64772:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"Linkerd Version",tags:["Version"]},p=void 0,u={unversionedId:"devops/service/linkerd-version",id:"devops/service/linkerd-version",isDocsHomePage:!1,title:"Linkerd Version",description:"| ver  | release date |",source:"@site/notes/devops/service/linkerd-version.md",sourceDirName:"devops/service",slug:"/devops/service/linkerd-version",permalink:"/notes/devops/service/linkerd-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/linkerd-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",frontMatter:{title:"Linkerd Version",tags:["Version"]},sidebar:"docs",previous:{title:"Linkerd",permalink:"/notes/devops/service/linkerd"},next:{title:"meshery",permalink:"/notes/devops/service/meshery"}},s=[{value:"2.11",id:"211",children:[]},{value:"2.10",id:"210",children:[]},{value:"2.9",id:"29",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ver"),(0,i.kt)("th",{parentName:"tr",align:null},"release date"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.10"),(0,i.kt)("td",{parentName:"tr",align:null},"2021-03-11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.9"),(0,i.kt)("td",{parentName:"tr",align:null},"2021-11-7")))),(0,i.kt)("h2",{id:"211"},"2.11"),(0,i.kt)("h2",{id:"210"},"2.10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Control Plane \u652f\u6301\u6269\u5c55",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u8d44\u6e90\u5360\u7528\u51cf\u5c11 - 2.9 cp ~500mb -> 200mb"),(0,i.kt)("li",{parentName:"ul"},"viz - Prometheus, Grafana, Dashboard"),(0,i.kt)("li",{parentName:"ul"},"multicluster"),(0,i.kt)("li",{parentName:"ul"},"jaeger"))),(0,i.kt)("li",{parentName:"ul"},"multi-cluster TCP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2.8 \u5f15\u5165 \u591a\u96c6\u7fa4 HTTP \u652f\u6301"))),(0,i.kt)("li",{parentName:"ul"},"proxy \u652f\u6301 opaque ports",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u900f\u660e\u7aef\u53e3 - \u4e0d\u4f1a\u505a\u534f\u8bae\u68c0\u6d4b"),(0,i.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u662f\u5ffd\u7565\uff0c\u73b0\u5728\u662f\u6807\u8bb0\u4e3a opaque"),(0,i.kt)("li",{parentName:"ul"},"annotation config.linkerd.io/opaque-ports"),(0,i.kt)("li",{parentName:"ul"},"linkerd inject --opaque-ports"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 25,443,587,3306,5432,11211"))),(0,i.kt)("li",{parentName:"ul"},"proxy \u4f7f\u7528 tlsv1.3"),(0,i.kt)("li",{parentName:"ul"},"docker \u4f7f\u7528 cr.l5d.io \u4ed3\u5e93")),(0,i.kt)("h2",{id:"29"},"2.9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mTLS TCP"),(0,i.kt)("li",{parentName:"ul"},"ARM"),(0,i.kt)("li",{parentName:"ul"},"proxy \u652f\u6301\u591a\u6838"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},"Service Topology"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4f18\u5148\u8bf7\u6c42\u672c\u8282\u70b9\u670d\u52a1"))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 EndpointSlice - ",(0,i.kt)("inlineCode",{parentName:"li"},"--enable-endpoint-slices")),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8 Prometheus - ",(0,i.kt)("inlineCode",{parentName:"li"},"global.prometheusUrl")),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u589e\u6ce8\u89e3 ",(0,i.kt)("inlineCode",{parentName:"li"},"linkerd.io/inject: ingress"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7406\u652f\u6301 service profiles"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTP \u6d41\u91cf\u5207\u5206"))),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5b58\u653e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"linkerd-config")," ConfigMap"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linkerd.io/2020/11/09/announcing-linkerd-2.9/"},"Announcing Linkerd 2.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/releases/tag/stable-2.9.0"},"stable-2.9.0"))))))}m.isMDXComponent=!0}}]);