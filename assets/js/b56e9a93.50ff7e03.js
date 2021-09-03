"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19135],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(u,".").concat(c)]||m[c]||k[c]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33947:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o=["components"],i={title:"K8S Network FAQ"},u=void 0,p={unversionedId:"devops/kubernetes/network/k8s-network-faq",id:"devops/kubernetes/network/k8s-network-faq",isDocsHomePage:!1,title:"K8S Network FAQ",description:"LB/Load Balance vs Ingress vs ClusterIP vs API Gateway",source:"@site/notes/devops/kubernetes/network/k8s-network-faq.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-network-faq",permalink:"/notes/devops/kubernetes/network/k8s-network-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/k8s-network-faq.md",version:"current",frontMatter:{title:"K8S Network FAQ"},sidebar:"docs",previous:{title:"Networking Awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome"},next:{title:"Kong Ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress"}},s=[{value:"LB/Load Balance vs Ingress vs ClusterIP vs API Gateway",id:"lbload-balance-vs-ingress-vs-clusterip-vs-api-gateway",children:[]}],k={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lbload-balance-vs-ingress-vs-clusterip-vs-api-gateway"},"LB/Load Balance vs Ingress vs ClusterIP vs API Gateway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LB/Load Balance - \u8d1f\u8f7d\u5747\u8861",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u662f\u4e00\u79cd\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u8868\u793a\u805a\u5408\u4e86\u540e\u7aef\u591a\u4e2a\u670d\u52a1/\u8282\u70b9\uff0c\u5bf9\u5916\u8fdb\u884c\u7edf\u4e00\u66b4\u9732"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u6e38\u76d1\u63a7\u72b6\u6001\u76d1\u63a7 - \u5ffd\u7565\u5f02\u5e38\u8282\u70b9/\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u8f6e\u8be2"))))),(0,l.kt)("li",{parentName:"ul"},"Ingress - \u6d41\u91cf\u5165\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u80fd\u611f\u77e5 7 \u5c42\u534f\u8bae\u7684 LB - TCP/UDP/HTTP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e 4 \u5c42\u5b9e\u73b0 7 \u5c42"))),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u80fd\u611f\u77e5 7 \u5c42\u534f\u8bae\uff0c\u6240\u4ee5\u53ef\u4ee5\u652f\u6301\u66f4\u591a\u7684\u8def\u7531\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd - \u57fa\u4e8e HTTP \u534f\u8bae Host+Path \u7684 LB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Hots/\u4e3b\u673a\u540d \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e \u8def\u5f84 \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"TLS Offload"))),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: nginx, haproxy, envoy, traefik"))),(0,l.kt)("li",{parentName:"ul"},"ClusterIP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"4 \u5c42\u534f\u8bae\u7684 LB - IP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u57fa\u4e8e 2 \u5c42\u5b9e\u73b0 4 \u5c42 - MAC"))),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u865a\u62df IP - \u8be5 IP \u53ef\u4ee5\u662f\u79c1\u6709\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u63d0\u4f9b\u7684\u516c\u7f51 IP"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u79cd\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u529f\u80fd - \u57fa\u4e8e IP \u7684 LB"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: metallb"))),(0,l.kt)("li",{parentName:"ul"},"API Gateway - \u63a5\u53e3\u7f51\u5173",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u5c42\u534f\u8bae\u4e4b\u4e0a\u96c6\u6210\u66f4\u591a\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"API Gateway \u662f Ingress \u8d85\u96c6"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u66f4\u4e0a\u5c42\u7684\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u611f\u77e5\u66f4\u591a\u534f\u8bae - \u4f8b\u5982 gRPC/MQTT/MySQL/PostgreSQL/GraphQL"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u57fa\u4e8e\u670d\u52a1\u8fdb\u884c\u8def\u7531",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC \u4e0d\u540c\u670d\u52a1\u8fdb\u884c\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"MQTT \u8def\u7531"))),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u611f\u77e5\u5ba2\u6237\u7aef\u66f4\u591a\u4fe1\u606f - \u4f8b\u5982 \u5b9e\u73b0 Auth\u3001\u9650\u6d41 \u7b49\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u5bf9\u8f93\u5165\u8f93\u51fa\u8fdb\u884c\u64cd\u4f5c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539 HTTP \u8fd4\u56de JSON \u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8bf7\u6c42\u54cd\u5e94\u8fdb\u884c Instrument - \u4f8b\u5982 tracing"))),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u63a5\u8fd1\u5f00\u53d1 - \u901a\u5e38\u652f\u6301 Hook \u4ee3\u7801\u6216\u5916\u90e8\u5e94\u7528\u8fdb\u884c\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u6392\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4e0e\u670d\u52a1\u53d1\u73b0\u7ed3\u5408\u4f7f\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u62bd\u8c61\u66f4\u9ad8\u5c42\u7684\u6982\u5ff5 - \u670d\u52a1\u3001\u8def\u7531\u3001Consumer\u3001Plugin"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5b9e\u73b0: ambassador, kong, apisix")))))}m.isMDXComponent=!0}}]);