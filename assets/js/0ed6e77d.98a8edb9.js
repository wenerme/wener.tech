"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70179],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(r),f=a,m=y["".concat(u,".").concat(f)]||y[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},81610:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return y}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={title:"Gateway"},u="gateway",p={unversionedId:"devops/kubernetes/network/k8s-gateway",id:"devops/kubernetes/network/k8s-gateway",isDocsHomePage:!1,title:"Gateway",description:"- kubernetes-sigs/gateway-api",source:"@site/notes/devops/kubernetes/network/k8s-gateway.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-gateway",permalink:"/notes/devops/kubernetes/network/k8s-gateway",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/k8s-gateway.md",version:"current",frontMatter:{title:"Gateway"},sidebar:"docs",previous:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"},next:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"}},l=[],c={toc:l};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gateway"},"gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/gateway-api"},"kubernetes-sigs/gateway-api"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6bd4 ingress \u66f4\u7ec6\u7684\u8def\u7531\u63a7\u5236"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/v1alpha2/api-types/gatewayclass/"},"API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/implementations/"},"\u5b9e\u73b0")))),(0,o.kt)("li",{parentName:"ul"},"GatewayClass"),(0,o.kt)("li",{parentName:"ul"},"Gateway"),(0,o.kt)("li",{parentName:"ul"},"HTTPRoute")))}y.isMDXComponent=!0}}]);