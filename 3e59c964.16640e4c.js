(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,O=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?a.a.createElement(O,l(l({ref:t},b),{},{components:r})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var b=2;b<o;b++)s[b]=r[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},341:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(8),o=(r(0),r(1172)),s={title:"Kubernetes Ingress"},l={unversionedId:"devops/kubernetes/network/k8s-ingress",id:"devops/kubernetes/network/k8s-ingress",isDocsHomePage:!1,title:"Kubernetes Ingress",description:"Tips",source:"@site/notes/devops/kubernetes/network/k8s-ingress.md",slug:"/devops/kubernetes/network/k8s-ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/k8s-ingress.md",version:"current",sidebar:"docs",previous:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"},next:{title:"Kong Ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress"}},i=[{value:"Tips",id:"tips",children:[]}],b={toc:i};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")),Object(o.b)("li",{parentName:"ul"},"\u53ef\u63d0\u4f9b\u80fd\u529b",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8def\u7531\u89c4\u5219"),Object(o.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u89c4\u5219"),Object(o.b)("li",{parentName:"ul"},"\u865a\u62df\u4e3b\u673a"),Object(o.b)("li",{parentName:"ul"},"\u9274\u6743"),Object(o.b)("li",{parentName:"ul"},"\u5355IP\u591a\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(o.b)("li",{parentName:"ul"},"URL \u91cd\u5199"),Object(o.b)("li",{parentName:"ul"},"TLS - LetsEncrypt \u96c6\u6210"),Object(o.b)("li",{parentName:"ul"},"HTTP\u3001gRPC\u3001TCP\u3001UDP\u3001HTTP2\u3001WebSocket"),Object(o.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\u91cd\u5199"),Object(o.b)("li",{parentName:"ul"},"API \u7f51\u5173"),Object(o.b)("li",{parentName:"ul"},"\u6307\u6807"),Object(o.b)("li",{parentName:"ul"},"\u8ddf\u8e2a"))),Object(o.b)("li",{parentName:"ul"},"\u9009\u62e9\u7eac\u5ea6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 Ingress \u8fd8\u662f CDR"),Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u90a3\u4e9b\u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},"\u662f\u5426\u96c6\u6210 ACME"),Object(o.b)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u7528\u6765\u505a API \u7f51\u5173 - \u8003\u8651\u7684\u529f\u80fd\u4e0d\u540c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8ddf\u8e2a\u3001\u6307\u6807\u3001\u63d2\u4ef6\u4fee\u6539\u8bf7\u6c42\u3001\u9650\u6d41"))),Object(o.b)("li",{parentName:"ul"},"\u5e73\u53f0\u9009\u62e9 - Nginx\u3001Haproxy\u3001Traefik\u3001Envoy\u3001\u786c\u4ef6",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Kong - API \u7f51\u5173"),Object(o.b)("li",{parentName:"ul"},"Traefik - ACME"),Object(o.b)("li",{parentName:"ul"},"HAProxy - \u8d1f\u8f7d\u5747\u8861"),Object(o.b)("li",{parentName:"ul"},"Nginx - \u865a\u62df\u4e3b\u673a"))),Object(o.b)("li",{parentName:"ul"},"\u5f00\u6e90\u3001\u5546\u4e1a\u652f\u6301\u3001\u79c1\u6709"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/#additional-controllers"},"Ingress Controller")," \u5b9e\u73b0",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"jcmoraisjr/haproxy-ingress")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech/kubernetes-ingress")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller"},"Kong/kubernetes-ingress-controller")),Object(o.b)("li",{parentName:"ul"},"Traefik CRD ",Object(o.b)("a",{parentName:"li",href:"https://github.com/containous/traefik-helm-chart"},"containous/traefik-helm-chart"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u529f\u80fd"))),Object(o.b)("li",{parentName:"ul"},"Traefik ",Object(o.b)("a",{parentName:"li",href:"https://docs.traefik.io/providers/kubernetes-ingress/"},"Kubernetes Ingress Controller")),Object(o.b)("li",{parentName:"ul"},"istio ",Object(o.b)("a",{parentName:"li",href:"https://istio.io/docs/tasks/traffic-management/ingress/"},"Ingress")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/projectcontour/contour"},"projectcontour/contour")))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/191WWNpjJ2za6-nbG4ZoUMXMpUK8KlCIosvQB0f-oq3k/htmlview"},"Comparison of Kubernetes Ingress controllers"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ingress \u7f51\u5173\u591a\u7eac\u5ea6\u6bd4\u8f83"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://lab.wallarm.com/choose-the-right-ingress-controller-for-your-kubernetes-environment/"},"The Right Ingress Controller for Your K8s")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://caylent.com/kubernetes-top-ingress-controllers"},"Comparison of Kubernetes Top Ingress Controllers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://caylent.com/managing-kubernetes-ingresses"},"Managing Kubernetes Ingresses")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://medium.com/flant-com/comparing-ingress-controllers-for-kubernetes-9b397483b46b"},"Comparing Ingress controllers for Kubernetes"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1DnsHtdHbxjvHmxvlu7VhzWcWgLAn_Mc5L1WlhLDA__k"},"Google Sheet"))))))))}c.isMDXComponent=!0}}]);