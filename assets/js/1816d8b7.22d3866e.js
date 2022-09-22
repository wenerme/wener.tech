"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85250],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28663:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(96600),i=r(27279),o=(r(59496),r(49613)),a=["components"],c={title:"\u6307\u6807"},l="Metrics",s={unversionedId:"service/observability/metrics/README",id:"service/observability/metrics/README",title:"\u6307\u6807",description:"- Micrometer",source:"@site/../notes/service/observability/metrics/README.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/",permalink:"/notes/service/observability/metrics/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/metrics/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"\u6307\u6807"},sidebar:"docs",previous:{title:"Syslog",permalink:"/notes/service/observability/logging/syslog"},next:{title:"Cortex",permalink:"/notes/service/observability/metrics/cortex"}},u={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metrics"},"Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://micrometer.io/"},"Micrometer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://micrometer.io/docs/concepts"},"\u6982\u5ff5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7eac\u5ea6\u65b9\u5f0f: \u7eac\u5ea6\u3001\u7ea7\u8054"),(0,o.kt)("li",{parentName:"ul"},"\u9891\u7387\u805a\u5408: \u5ba2\u6237\u7aef\u805a\u5408\u3001\u670d\u52a1\u7aef\u805a\u5408"),(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u62a5\u65b9\u5f0f: \u63a8\u3001\u62c9"))))),(0,o.kt)("li",{parentName:"ul"},"Spring Boot ",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-metrics.html"},"Production-ready Metrics"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Micrometer"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9 Prometheus \u66b4\u9732 ",(0,o.kt)("inlineCode",{parentName:"li"},"/actuator/prometheus"))))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u6307\u6807\u672c\u8eab\u662f\u591a\u7ef4\u6570\u636e"))))}f.isMDXComponent=!0}}]);