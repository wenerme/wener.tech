"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54081],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),y=a,m=k["".concat(c,".").concat(y)]||k[y]||u[y]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return d},frontMatter:function(){return k},metadata:function(){return m},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const k={title:"SkyWalking"},y="Apache SkyWalking",m={unversionedId:"service/observability/tracing/skywalking",id:"service/observability/tracing/skywalking",title:"SkyWalking",description:"- apache/skywalking",source:"@site/../notes/service/observability/tracing/skywalking.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/skywalking",permalink:"/notes/service/observability/tracing/skywalking",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/tracing/skywalking.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"SkyWalking"},sidebar:"docs",previous:{title:"Signoz",permalink:"/notes/service/observability/tracing/signoz"},next:{title:"Tracing Awesome",permalink:"/notes/service/observability/tracing/awesome"}},g={},f=[{value:"\u5b58\u50a8",id:"\u5b58\u50a8",level:2}],b={toc:f};function d(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"apache-skywalking"}),"Apache SkyWalking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/skywalking"}),"apache/skywalking"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Java"),(0,r.kt)("li",{parentName:"ul"},"Application Performance Monitoring System"),(0,r.kt)("li",{parentName:"ul"},"OAP - Observability Analysis Platform"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8: H2, OpenSearch, ElasticSearch 7/8, MySQL, PostgreSQL, BanyanDB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://skywalking.apache.org/docs/main/next/en/concepts-and-designs/overview/"}),"https://skywalking.apache.org/docs/main/next/en/concepts-and-designs/overview/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/skywalking-kubernetes"}),"apache/skywalking-kubernetes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Helm"),(0,r.kt)("li",{parentName:"ul"},"oap, ui, satellite"),(0,r.kt)("li",{parentName:"ul"},"elasticsearch, postgresql"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/skywalking-swck"}),"apache/skywalking-swck"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SWCK - SkyWalking Cloud on Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Operator"),(0,r.kt)("li",{parentName:"ul"},"Java Agent Injector")))),(0,r.kt)("h2",u({},{id:"\u5b58\u50a8"}),"\u5b58\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H2, OpenSearch, ElasticSearch 7/8, MySQL, PostgreSQL, BanyanDB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/apache/skywalking-banyandb"}),"apache/skywalking-banyandb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://skywalking.apache.org/docs/main/next/en/setup/backend/backend-storage/"}),"https://skywalking.apache.org/docs/main/next/en/setup/backend/backend-storage/"))))}d.isMDXComponent=!0}}]);