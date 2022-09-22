"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36677],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"Cortex"},c="cortex",u={unversionedId:"service/observability/metrics/cortex",id:"service/observability/metrics/cortex",title:"Cortex",description:"- cortexproject/cortex",source:"@site/../notes/service/observability/metrics/cortex.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/cortex",permalink:"/notes/service/observability/metrics/cortex",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/metrics/cortex.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Cortex"},sidebar:"docs",previous:{title:"\u6307\u6807",permalink:"/notes/service/observability/metrics/"},next:{title:"M3",permalink:"/notes/service/observability/metrics/m3"}},p={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cortex"},"cortex"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cortexproject/cortex"},"cortexproject/cortex"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"horizontally scalable, highly available, multi-tenant, long term storage for Prometheus."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cortexmetrics.io/docs/architecture/"},"\u67b6\u6784"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8fdc\u7a0b\u5199\u5165\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u652f\u6301 cassandra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Chunks \u5b58\u50a8")," \u5e9f\u5f03",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"index",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DynamoDB"),(0,i.kt)("li",{parentName:"ul"},"Bigtable"),(0,i.kt)("li",{parentName:"ul"},"Cassandra"))),(0,i.kt)("li",{parentName:"ul"},"chunk",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DynamoDB"),(0,i.kt)("li",{parentName:"ul"},"Bigtable"),(0,i.kt)("li",{parentName:"ul"},"Cassandra"),(0,i.kt)("li",{parentName:"ul"},"S3"),(0,i.kt)("li",{parentName:"ul"},"GCS"),(0,i.kt)("li",{parentName:"ul"},"Azure"))))),(0,i.kt)("li",{parentName:"ul"},"\u5757\u5b58\u50a8 - \u5b9e\u9a8c\u9636\u6bb5 - \u90e8\u5206\u7ec4\u4ef6\u57fa\u4e8e Thanos",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"S3"),(0,i.kt)("li",{parentName:"ul"},"GCS"),(0,i.kt)("li",{parentName:"ul"},"Azure"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u6587\u4ef6 - \u5355\u8282\u70b9"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cortexproject/cortex/issues/865"},"#865")," - \u5bf9\u6bd4\u5176\u4ed6\u5b9e\u73b0")))}f.isMDXComponent=!0}}]);