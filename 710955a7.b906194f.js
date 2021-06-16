(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,s(s({ref:t},c),{},{components:r})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},520:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(1083)),i={title:"HAProxy Ingress"},s={unversionedId:"devops/kubernetes/network/haproxy-ingress",id:"devops/kubernetes/network/haproxy-ingress",isDocsHomePage:!1,title:"HAProxy Ingress",description:"Tips",source:"@site/notes/devops/kubernetes/network/haproxy-ingress.md",slug:"/devops/kubernetes/network/haproxy-ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/haproxy-ingress.md",version:"current",sidebar:"docs",previous:{title:"Flannel",permalink:"/notes/devops/kubernetes/network/flannel"},next:{title:"Kubernetes Ingress",permalink:"/notes/devops/kubernetes/network/k8s-ingress"}},p=[{value:"Tips",id:"tips",children:[]}],c={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress"},"jcmoraisjr/haproxy-ingress"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://haproxy-ingress.github.io/docs/"},"\u6587\u6863")),Object(o.b)("li",{parentName:"ul"},"\u57fa\u4e8e",Object(o.b)("a",{parentName:"li",href:"https://github.com/jcmoraisjr/haproxy-ingress/blob/master/rootfs/etc/haproxy/template/haproxy.tmpl"},"\u6a21\u677f"),"\u751f\u6210\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 acme"),Object(o.b)("li",{parentName:"ul"},"\u6709\u5f88\u591a\u8f85\u52a9\u914d\u7f6e\u80fd\u591f\u4f7f\u5f97\u914d\u7f6e\u66f4\u52a0\u65b9\u4fbf"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 modsecurity"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress"},"haproxytech/kubernetes-ingress"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/haproxytech/kubernetes-ingress/tree/master/documentation"},"\u6587\u6863")),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/haproxytech/dataplaneapi"},"haproxytech/dataplaneapi")," \u7ba1\u7406\u914d\u7f6e"),Object(o.b)("li",{parentName:"ul"},"\u955c\u50cf ",Object(o.b)("inlineCode",{parentName:"li"},"haproxytech/kubernetes-ingress")," \u57fa\u4e8e ",Object(o.b)("inlineCode",{parentName:"li"},"haproxytech/haproxy-alpine")),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 configmap\u3001ingress\u3001service \u914d\u7f6e")))))}l.isMDXComponent=!0}}]);