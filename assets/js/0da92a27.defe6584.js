"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62316],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),y=a,m=f["".concat(p,".").concat(y)]||f[y]||c[y]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40706:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),s=["components"],i={title:"Gateway"},p="gateway",u={unversionedId:"devops/kubernetes/network/k8s-gateway",id:"devops/kubernetes/network/k8s-gateway",title:"Gateway",description:"- kubernetes-sigs/gateway-api",source:"@site/../notes/devops/kubernetes/network/k8s-gateway.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-gateway",permalink:"/notes/devops/kubernetes/network/k8s-gateway",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/network/k8s-gateway.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Gateway"},sidebar:"docs",previous:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"},next:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"}},l={},c=[],f={toc:c};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gateway"},"gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/gateway-api"},"kubernetes-sigs/gateway-api"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6bd4 ingress \u66f4\u7ec6\u7684\u8def\u7531\u63a7\u5236"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/v1alpha2/api-types/gatewayclass/"},"API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gateway-api.sigs.k8s.io/implementations/"},"\u5b9e\u73b0")))),(0,o.kt)("li",{parentName:"ul"},"GatewayClass"),(0,o.kt)("li",{parentName:"ul"},"Gateway"),(0,o.kt)("li",{parentName:"ul"},"HTTPRoute")))}y.isMDXComponent=!0}}]);