(window.webpackJsonp=window.webpackJsonp||[]).push([[863],{1129:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),i=p(r),m=n,O=i["".concat(c,".").concat(m)]||i[m]||s[m]||o;return r?a.a.createElement(O,u(u({ref:t},b),{},{components:r})):a.a.createElement(O,u({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},937:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1129)),c={title:"DevOps \u5e38\u89c1\u95ee\u9898"},u={unversionedId:"devops/devops-faq",id:"devops/devops-faq",isDocsHomePage:!1,title:"DevOps \u5e38\u89c1\u95ee\u9898",description:"Kubernetes vs Docker Swarm",source:"@site/notes/devops/devops-faq.md",slug:"/devops/devops-faq",permalink:"/notes/devops/devops-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/devops-faq.md",version:"current"},l=[{value:"Kubernetes vs Docker Swarm",id:"kubernetes-vs-docker-swarm",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kubernetes-vs-docker-swarm"},"Kubernetes vs Docker Swarm"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7ed3\u8bba: \u9009\u62e9 Kubernetes \u6216\u8005 K3S")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Docker Swarm",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f00\u53d1\u7ef4\u62a4\u4e0d\u6d3b\u8dc3"),Object(o.b)("li",{parentName:"ul"},"\u7f51\u7edc\u6a21\u5757\u5f31"))),Object(o.b)("li",{parentName:"ul"},"\u57fa\u672c\u88ab\u6dd8\u6c70"),Object(o.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"))),Object(o.b)("li",{parentName:"ul"},"Kubernetes",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5927\u89c4\u6a21\u90e8\u7f72\u4f7f\u7528"),Object(o.b)("li",{parentName:"ul"},"\u529f\u80fd\u5b8c\u5584\u5404\u65b9\u9762\u652f\u6301\u597d"),Object(o.b)("li",{parentName:"ul"},"\u8f83\u591a\u53d1\u5e03\u7248\u53ef\u9009\u62e9"),Object(o.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5360\u7528\u8d44\u6e90\u591a - \u5c11\u4e8e 50 \u8282\u70b9\u5efa\u8bae\u9009\u62e9 k3s \u8fd9\u79cd\u8f7b\u91cf\u7684\u53d1\u5e03\u7248"),Object(o.b)("li",{parentName:"ul"},"\u9700\u8981\u5b66\u4e60\u66f4\u591a\u77e5\u8bc6 - \u4f46\u503c\u5f97",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5bf9\u5f00\u53d1\u6765\u53d1\u6765\u8bf4\u538b\u529b\u5927"))),Object(o.b)("li",{parentName:"ul"},"\u90e8\u7f72\u7ef4\u62a4\u590d\u6742 - k3s \u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u8f7b\u4e86\u590d\u6742\u5ea6")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2018\u5e74")),Object(o.b)("p",null,"\u5c31\u7a33\u5b9a\u6027\u548c\u529f\u80fd\u7684\u5b8c\u5584\u6027\u4e0a\u6765\u8bf4, Kubernetes \u662f\u5b8c\u8d25 Docker Swarm \u7684.\u4f46\u6613\u7528\u6027\u548c\u7528\u6237\u7684\u53cb\u597d\u5ea6\u6765\u8bf4, Docker Swarm \u662f\u5b8c\u80dc\u7684.\n\u56e0\u6b64\u4ece\u4e0d\u540c\u7684\u89d2\u5ea6\u4e2a\u548c\u4e2a\u4eba\u7684\u8eab\u4efd\u89d2\u8272\u6765\u8bf4,\u5bf9\u8fd9\u4e24\u8005\u7684\u8bc4\u5224\u90fd\u6709\u6240\u4e0d\u540c."),Object(o.b)("p",null,"\u4ece\u8fd0\u7ef4\u4eba\u5458\u6765\u8bf4, Kubernetes \u80af\u5b9a\u662f\u66f4\u597d\u7684,\u4f46\u662f\u524d\u63d0\u662f\u56e2\u961f\u4e2d\u5f97\u6709\u8fd9\u6837\u7684\u8fd0\u7ef4\u4eba\u5458\u5bf9 Kubernetes \u8fdb\u884c\u652f\u6491\u548c\u7ef4\u62a4. Kubernetes \u7684\u642d\u5efa\u76f8\u5bf9\u6765\u8bf4\u662f\u6bd4\u8f83\u56f0\u96be\u7684,\u4f46\u5927\u7684\u56e2\u961f\u90fd\u4f1a\u6709\u81f4\u529b\u4e8e\u7ef4\u62a4\u8fd0\u8425 Kubernetes \u96c6\u7fa4\u7684\u80fd\u529b,\u56e0\u6b64 Kubernetes \u5bf9\u4e8e\u8fd9\u6837\u7684\u56e2\u961f\u6216\u516c\u53f8\u6765\u8bf4\u662f\u66f4\u597d\u7684\u9009\u62e9."),Object(o.b)("p",null,"\u800c\u4ece\u5f00\u53d1\u4eba\u5458\u7684\u89d2\u5ea6\u6765\u8bf4, Docker Swarm \u80fd\u591f\u5feb\u901f\u642d\u5efa\u5e76\u4e14\u4f7f\u7528,\u867d\u7136\u95ee\u9898\u8f83\u591a\u4f46\u662f\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\u7ed5\u8fc7\u6216\u4fee\u6b63\u8fd9\u4e9b\u95ee\u9898\u8fdc\u6bd4\u8fd0\u7ef4\u4e00\u4e2a Kubernetes \u6765\u7684\u8f7b\u677e.\u5982\u679c\u4e00\u4e2a\u56e2\u961f\u4e2d\u6ca1\u6709\u4e13\u95e8\u7684\u8fd0\u7ef4\u4eba\u5458,\u4e14\u65e0\u6cd5\u4f7f\u7528\u5230\u50cf Azure,AWS,GKE \u8fd9\u6837\u7684 IaaS \u670d\u52a1,\u90a3\u4e48 Docker Swarm \u5728\u8fd9\u65f6\u662f\u66f4\u597d\u7684\u9009\u62e9."))}p.isMDXComponent=!0}}]);