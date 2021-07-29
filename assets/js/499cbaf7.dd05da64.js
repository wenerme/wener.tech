"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64805],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53933:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=r(22122),n=r(19756),l=(r(67294),r(3905)),i=["components"],o={title:"ScyllaDB"},c=void 0,p={unversionedId:"db/column/scylladb",id:"db/column/scylladb",isDocsHomePage:!1,title:"ScyllaDB",description:"Tips",source:"@site/notes/db/column/scylladb.md",sourceDirName:"db/column",slug:"/db/column/scylladb",permalink:"/notes/db/column/scylladb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/scylladb.md",version:"current",frontMatter:{title:"ScyllaDB"},sidebar:"docs",previous:{title:"Apache Cassandra",permalink:"/notes/db/column/cassandra"},next:{title:"ArangoDB",permalink:"/notes/db/graph/arangodb"}},s=[{value:"Tips",id:"tips",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scylladb/scylla"},"scylladb/scylla"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AGPL, C++"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 C++ \u5b9e\u73b0\u7684 Cassandra"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7\u4e8b\u52a1 Lightweight Transactions / LWT"),(0,l.kt)("li",{parentName:"ul"},"Amazon DynamoDB \u517c\u5bb9\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\b\u652f\u6301 CDC/Change Data Capture"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scylladb/seastar"},"seastar")," \u6846\u67b6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.scylladb.com/using-scylla/cassandra-compatibility/"},"Apache Cassandra Compatibility"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache Cassandra 3.11"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.scylladb.com/getting-started/system-requirements"},"\u8981\u6c42"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u5c0f 4\u6838, 2G, SSD"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u4ea7 20\u6838, 128G, RAID0 4 SSD 1-5TB"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u6790 28\u6838, 256G, NVMe 10TB"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://manager.docs.scylladb.com/stable/"},"Scylla Manager"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scylladb \u7ba1\u7406\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u5907\u4efd\u3001\u6062\u590d\u3001\u96c6\u7fa4\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8d85\u8fc7 5 \u4e2a\u8282\u70b9\u514d\u8d39"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://monitoring.docs.scylladb.com/stable/"},"Scylla Monitor"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scylladb \u76d1\u63a7\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"Prometheus + Grafana"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scylladb/scylla-operator"},"scylladb/scylla-operator"))))}m.isMDXComponent=!0}}]);