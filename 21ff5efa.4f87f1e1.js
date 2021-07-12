(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.a.createElement(g,s(s({ref:t},i),{},{components:n})):o.a.createElement(g,s({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(8),a=(n(0),n(1129)),l={title:"Kong Ingress"},s={unversionedId:"devops/kubernetes/network/kong-ingress",id:"devops/kubernetes/network/kong-ingress",isDocsHomePage:!1,title:"Kong Ingress",description:"* Kong/kubernetes-ingress-controller",source:"@site/notes/devops/kubernetes/network/kong-ingress.md",slug:"/devops/kubernetes/network/kong-ingress",permalink:"/notes/devops/kubernetes/network/kong-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/kong-ingress.md",version:"current",sidebar:"docs",previous:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"},next:{title:"MetalLB",permalink:"/notes/devops/kubernetes/network/metallb"}},c=[],i={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller"},"Kong/kubernetes-ingress-controller")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/master/docs/deployment/k4k8s.md"},"Kong for Kubernetes")," \u90e8\u7f72",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/master/docs/concepts/deployment.md"},"\u90e8\u7f72\u6982\u5ff5")))),Object(a.b)("li",{parentName:"ul"},"\u7279\u6027",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ingres"),Object(a.b)("li",{parentName:"ul"},"API \u7ba1\u7406",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"kong \u6709\u5927\u91cf\u63d2\u4ef6"))),Object(a.b)("li",{parentName:"ul"},"gRPC \u652f\u6301"),Object(a.b)("li",{parentName:"ul"},"Health checking, Load-balancing",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u652f\u6301\u4e3b\u52a8\u88ab\u52a8\u68c0\u67e5"))),Object(a.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u54cd\u5e94\u8f6c\u6362",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u63d2\u4ef6\u62e6\u622a\u4fee\u6539"))),Object(a.b)("li",{parentName:"ul"},"\u8ba4\u8bc1"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/concepts/custom-resources.md"},"CRD \u914d\u7f6e"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"KongIngress",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6269\u5c55\u9ed8\u8ba4\u7684 Ingress"),Object(a.b)("li",{parentName:"ul"},"Ingress \u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"configuration.konghq.com")," Annotation \u6307\u5411\u8be5\u914d\u7f6e"))),Object(a.b)("li",{parentName:"ul"},"KongPlugin",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ingress \u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"plugins.konghq.com")," Annotation \u6307\u5411\u8be5\u914d\u7f6e"))),Object(a.b)("li",{parentName:"ul"},"KongClusterPlugin",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u7eac\u5ea6\u63d2\u4ef6\u914d\u7f6e"))),Object(a.b)("li",{parentName:"ul"},"KongConsumer",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Kong \u7684 Consumers \u5bf9\u8c61"))),Object(a.b)("li",{parentName:"ul"},"TCPIngress"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/concepts/design.md"},"\u67b6\u6784")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/tree/main/docs/guides"},"\u6587\u6863")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Kong/kubernetes-ingress-controller/blob/main/docs/references/annotations.md"},"annotations"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'helm repo add kong https://charts.konghq.com\nhelm repo update\n\nhelm install kong/kong --generate-name --set ingressController.installCRDs=false\n# \u8bbf\u95ee\u4ee3\u7406\u5730\u5740\nexport PROXY_IP=$(kubectl get -o jsonpath="{.status.loadBalancer.ingress[0].ip}" service -n kong demo-kong-proxy)\n')))}b.isMDXComponent=!0}}]);