"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55863],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66148:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&c(e,r,t[r]);return e};const m={title:"Apisix Ingress"},h="Apisix Ingress",g={unversionedId:"devops/kubernetes/network/apisix-ingress",id:"devops/kubernetes/network/apisix-ingress",title:"Apisix Ingress",description:"- Helm",source:"@site/../notes/devops/kubernetes/network/apisix-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/apisix-ingress",permalink:"/notes/devops/kubernetes/network/apisix-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/apisix-ingress.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Apisix Ingress"},sidebar:"docs",previous:{title:"Kubernates \u7f51\u7edc",permalink:"/notes/devops/kubernetes/network/"},next:{title:"Calico",permalink:"/notes/devops/kubernetes/network/calico"}},k={},f=[{value:"IngressController",id:"ingresscontroller",level:2}],d={toc:f};function b(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},d),c),i(t,s({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"apisix-ingress"}),"Apisix Ingress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://charts.apiseven.com"}),"https://charts.apiseven.com")," apisix",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"apisix \u4f9d\u8d56 apisix-dashboard, apisix-ingress-controller, etcd"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://apache.github.io/apisix-helm-chart/"}),"https://apache.github.io/apisix-helm-chart/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/apisix-helm-chart"}),"apache/apisix-helm-chart")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://charts.bitnami.com/bitnami"}),"https://charts.bitnami.com/bitnami")," etcd"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://apisix.apache.org/docs/ingress-controller/getting-started/"}),"https://apisix.apache.org/docs/ingress-controller/getting-started/"))),(0,n.kt)("h2",u({},{id:"ingresscontroller"}),"IngressController"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ApisixRoute"),(0,n.kt)("li",{parentName:"ul"},"ApisixUpstream",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540d\u5b57\u4e0e service \u540d\u5b57\u76f8\u540c\u4f1a\u81ea\u52a8\u5339\u914d"))),(0,n.kt)("li",{parentName:"ul"},"ApisixTls"),(0,n.kt)("li",{parentName:"ul"},"ApisixClusterConfig",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e prometheus\u3001skywalking"))),(0,n.kt)("li",{parentName:"ul"},"ApisixConsumer"),(0,n.kt)("li",{parentName:"ul"},"ApisixPluginConfig",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ingress \u901a\u8fc7 annotation \u5f15\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},'k8s.apisix.apache.org/plugin-config-name: "echo-and-cors-apc"'))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apisix.apache.org/v2beta3\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: rule1\n      match:\n        hosts:\n          - httpbin.com\n        paths:\n          - /ip\n      backends:\n        - serviceName: httpbin-service-e2e-test\n          servicePort: 80\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'annotations:\n  k8s.apisix.apache.org/enable-cors: "true"\n  k8s.apisix.apache.org/cors-allow-origin: "https://foo.com,http://bar.com:8080"\n  k8s.apisix.apache.org/cors-allow-headers: "Host: https://bar.com:8080"\n  k8s.apisix.apache.org/cors-allow-methods: "GET,POST"\n  k8s.apisix.apache.org/allowlist-source-range: "10.0.5.0/16,127.0.0.1,192.168.3.98"\n  k8s.apisix.apache.org/blocklist-source-range: "127.0.0.1,172.17.0.0/16"\n  k8s.apisix.apache.org/http-allow-methods: "GET,POST"\n  k8s.apisix.apache.org/http-block-method: "PUT,DELETE"\n  k8s.apisix.apache.org/rewrite-target-regex: "/app/(.*)"\n  k8s.apisix.apache.org/rewrite-target-regex-template: "/$1"\n  k8s.apisix.apache.org/http-to-https: "true"\n  k8s.apisix.apache.org/use-regex: "true"\n  k8s.apisix.apache.org/enable-websocket: "true"\n  k8s.apisix.apache.org/enable-response-rewrite: "true"\n  k8s.apisix.apache.org/response-rewrite-status-code: "404"\n  k8s.apisix.apache.org/response-rewrite-body: "bar-body"\n  k8s.apisix.apache.org/response-rewrite-body-base64: "true"\n  # \u53ef\u4ee5\u901a\u8fc7 Prefix \u8def\u7531\n  # path: /helloworld.Greeter/SayHello\n  k8s.apisix.apache.org/upstream-scheme: grpcs\n  # \u8de8 namespace \u5f15\u7528\n  k8s.apisix.apache.org/svc-namespace: test\n')))}b.isMDXComponent=!0}}]);