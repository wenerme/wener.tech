"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36677],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,b=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90872:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return y},default:function(){return x},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Cortex"},y="cortex",v={unversionedId:"service/observability/metrics/cortex",id:"service/observability/metrics/cortex",title:"Cortex",description:"- cortexproject/cortex",source:"@site/../notes/service/observability/metrics/cortex.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/cortex",permalink:"/notes/service/observability/metrics/cortex",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/cortex.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633617108,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{title:"Cortex"},sidebar:"docs",previous:{title:"\u6307\u6807",permalink:"/notes/service/observability/metrics/"},next:{title:"M3",permalink:"/notes/service/observability/metrics/m3"}},d={},k=[],O={toc:k},N="wrapper";function x(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,m(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"cortex"}),"cortex"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/cortexproject/cortex"}),"cortexproject/cortex"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"horizontally scalable, highly available, multi-tenant, long term storage for Prometheus."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://cortexmetrics.io/docs/architecture/"}),"\u67b6\u6784"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8fdc\u7a0b\u5199\u5165\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u652f\u6301 cassandra"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"Chunks \u5b58\u50a8")," \u5e9f\u5f03",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DynamoDB"),(0,n.kt)("li",{parentName:"ul"},"Bigtable"),(0,n.kt)("li",{parentName:"ul"},"Cassandra"))),(0,n.kt)("li",{parentName:"ul"},"chunk",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DynamoDB"),(0,n.kt)("li",{parentName:"ul"},"Bigtable"),(0,n.kt)("li",{parentName:"ul"},"Cassandra"),(0,n.kt)("li",{parentName:"ul"},"S3"),(0,n.kt)("li",{parentName:"ul"},"GCS"),(0,n.kt)("li",{parentName:"ul"},"Azure"))))),(0,n.kt)("li",{parentName:"ul"},"\u5757\u5b58\u50a8 - \u5b9e\u9a8c\u9636\u6bb5 - \u90e8\u5206\u7ec4\u4ef6\u57fa\u4e8e Thanos",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"S3"),(0,n.kt)("li",{parentName:"ul"},"GCS"),(0,n.kt)("li",{parentName:"ul"},"Azure"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u6587\u4ef6 - \u5355\u8282\u70b9"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/cortexproject/cortex/issues/865"}),"#865")," - \u5bf9\u6bd4\u5176\u4ed6\u5b9e\u73b0")))}x.isMDXComponent=!0}}]);