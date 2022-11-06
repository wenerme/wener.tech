"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65006],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,f=c["".concat(o,".").concat(k)]||c[k]||m[k]||s;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52239:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return d}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={title:"Kubernetes Ingress"},k="Kubernetes Ingress",f={unversionedId:"devops/kubernetes/network/k8s-ingress",id:"devops/kubernetes/network/k8s-ingress",title:"Kubernetes Ingress",description:"- Ingress",source:"@site/../notes/devops/kubernetes/network/k8s-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/k8s-ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/k8s-ingress.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1630662479,formattedLastUpdatedAt:"Sep 3, 2021",frontMatter:{title:"Kubernetes Ingress"},sidebar:"docs",previous:{title:"Gateway",permalink:"/notes/devops/kubernetes/network/k8s-gateway"},next:{title:"Kubernetes Networking Awesome",permalink:"/notes/devops/kubernetes/network/k8s-network-awesome"}},g={},d=[{value:"Ingress",id:"ingress",level:2},{value:"IngressClass",id:"ingressclass",level:2}],b={toc:d};function N(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),u),s(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"kubernetes-ingress"}),"Kubernetes Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"}),"Ingress")),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u63d0\u4f9b\u80fd\u529b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8def\u7531\u89c4\u5219"),(0,r.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u89c4\u5219"),(0,r.kt)("li",{parentName:"ul"},"\u865a\u62df\u4e3b\u673a"),(0,r.kt)("li",{parentName:"ul"},"\u9274\u6743"),(0,r.kt)("li",{parentName:"ul"},"\u5355 IP \u591a\u5e94\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("li",{parentName:"ul"},"URL \u91cd\u5199"),(0,r.kt)("li",{parentName:"ul"},"TLS - LetsEncrypt \u96c6\u6210"),(0,r.kt)("li",{parentName:"ul"},"HTTP\u3001gRPC\u3001TCP\u3001UDP\u3001HTTP2\u3001WebSocket"),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\u91cd\u5199"),(0,r.kt)("li",{parentName:"ul"},"API \u7f51\u5173"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u6807"),(0,r.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a"))),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u7eac\u5ea6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Ingress \u8fd8\u662f CDR"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u90a3\u4e9b\u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u96c6\u6210 ACME"),(0,r.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u7528\u6765\u505a API \u7f51\u5173 - \u8003\u8651\u7684\u529f\u80fd\u4e0d\u540c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ddf\u8e2a\u3001\u6307\u6807\u3001\u63d2\u4ef6\u4fee\u6539\u8bf7\u6c42\u3001\u9650\u6d41"))),(0,r.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u9009\u62e9 - Nginx\u3001Haproxy\u3001Traefik\u3001Envoy\u3001\u786c\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kong - API \u7f51\u5173"),(0,r.kt)("li",{parentName:"ul"},"Traefik - ACME"),(0,r.kt)("li",{parentName:"ul"},"HAProxy - \u8d1f\u8f7d\u5747\u8861"),(0,r.kt)("li",{parentName:"ul"},"Nginx - \u865a\u62df\u4e3b\u673a"))),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u3001\u5546\u4e1a\u652f\u6301\u3001\u79c1\u6709"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview"}),"Comparison of Kubernetes Ingress controllers"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ingress \u7f51\u5173\u591a\u7eac\u5ea6\u6bd4\u8f83"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://lab.wallarm.com/choose-the-right-ingress-controller-for-your-kubernetes-environment/"}),"The Right Ingress Controller for Your K8s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://caylent.com/kubernetes-top-ingress-controllers"}),"Comparison of Kubernetes Top Ingress Controllers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://caylent.com/managing-kubernetes-ingresses"}),"Managing Kubernetes Ingresses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://medium.com/flant-com/comparing-ingress-controllers-for-kubernetes-9b397483b46b"}),"Comparing Ingress controllers for Kubernetes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.google.com/spreadsheets/d/1DnsHtdHbxjvHmxvlu7VhzWcWgLAn_Mc5L1WlhLDA__k"}),"Google Sheet"))))))),(0,r.kt)("admonition",m({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86\u591a\u4e2a \u9ed8\u8ba4 ingressclass \u5219\u5fc5\u987b\u4e3a ingress \u6307\u5b9a class"))),(0,r.kt)("h2",m({},{id:"ingress"}),"Ingress"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="default-ingress-backend.yaml"',title:'"default-ingress-backend.yaml"'}),"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: default-ingress-backend\nspec:\n  defaultBackend:\n    service:\n      name: test\n      port:\n        number: 80\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pathType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ImplementationSpecific - \u5927\u591a\u5b9e\u73b0\u9ed8\u8ba4\u4e3a Prefix"),(0,r.kt)("li",{parentName:"ul"},"Exact - \u5b8c\u6574\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"Prefix - \u524d\u7f00\u5339\u914d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8def\u5f84 Prefix \u800c\u4e0d\u662f \u5b57\u7b26\u4e32 Prefix"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 /a \u5339\u914d /a/ \u548c /a/b \u4f46\u662f\u4e0d\u5339\u914d /aa"))),(0,r.kt)("li",{parentName:"ul"},"Mixed - Prefix+Exact")))),(0,r.kt)("h2",m({},{id:"ingressclass"}),"IngressClass"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1\nkind: IngressClass\nmetadata:\n  name: external-lb\n  annotations:\n    # \u6807\u8bb0\u4e3a\u9ed8\u8ba4 ingress\n    ingressclass.kubernetes.io/is-default-class: true\nspec:\n  controller: example.com/ingress-controller\n  parameters:\n    apiGroup: k8s.example.com\n    kind: IngressParameters\n    name: external-lb\n    namespace: external-configuration\n    # v1.22 beta\n    scope: Namespace\n")))}N.isMDXComponent=!0}}]);