(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{396:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),c=(r(0),r(557)),o={id:"cortex",title:"Cortex"},i={unversionedId:"devops/metrics/cortex",id:"devops/metrics/cortex",isDocsHomePage:!1,title:"Cortex",description:"cortex",source:"@site/contents/tricks/devops/metrics/cortex.md",slug:"/devops/metrics/cortex",permalink:"/notes/devops/metrics/cortex",version:"current",sidebar:"docs",previous:{title:"Thanos",permalink:"/notes/devops/metrics/thanos"},next:{title:"Microservices",permalink:"/notes/devops/service/microservices"}},l=[{value:"Tips",id:"tips",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cortex"},"cortex"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cortexproject/cortex"}),"cortexproject/cortex"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"horizontally scalable, highly available, multi-tenant, long term storage for Prometheus."))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cortexmetrics.io/docs/architecture/"}),"\u67b6\u6784"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u8fdc\u7a0b\u5199\u5165\u63a5\u53e3"),Object(c.b)("li",{parentName:"ul"},"\u5b58\u50a8\u652f\u6301 cassandra"),Object(c.b)("li",{parentName:"ul"},"Chunks \u5b58\u50a8 - \u9ed8\u8ba4/\u7a33\u5b9a",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"index",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DynamoDB"),Object(c.b)("li",{parentName:"ul"},"Bigtable"),Object(c.b)("li",{parentName:"ul"},"Cassandra"))),Object(c.b)("li",{parentName:"ul"},"chunk",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DynamoDB"),Object(c.b)("li",{parentName:"ul"},"Bigtable"),Object(c.b)("li",{parentName:"ul"},"Cassandra"),Object(c.b)("li",{parentName:"ul"},"S3"),Object(c.b)("li",{parentName:"ul"},"GCS"),Object(c.b)("li",{parentName:"ul"},"Azure"))))),Object(c.b)("li",{parentName:"ul"},"\u5757\u5b58\u50a8 - \u5b9e\u9a8c\u9636\u6bb5 - \u57fa\u4e8e Thanos",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"S3"),Object(c.b)("li",{parentName:"ul"},"GCS"),Object(c.b)("li",{parentName:"ul"},"Azure"),Object(c.b)("li",{parentName:"ul"},"\u672c\u5730\u6587\u4ef6 - \u5355\u8282\u70b9"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cortexproject/cortex/issues/865"}),"#865")," - \u5bf9\u6bd4\u5176\u4ed6\u5b9e\u73b0")))}p.isMDXComponent=!0},557:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return r?a.a.createElement(O,i(i({ref:t},b),{},{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);