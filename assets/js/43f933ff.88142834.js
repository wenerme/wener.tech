"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22891],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),g=i,b=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12112:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(96600),i=r(27279),o=(r(59496),r(49613)),a=["components"],c={title:"Signoz"},s="Signoz",l={unversionedId:"service/observability/tracing/signoz",id:"service/observability/tracing/signoz",title:"Signoz",description:"- SigNoz/signoz",source:"@site/../notes/service/observability/tracing/signoz.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/signoz",permalink:"/notes/service/observability/tracing/signoz",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/tracing/signoz.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Signoz"},sidebar:"docs",previous:{title:"Sentry",permalink:"/notes/service/observability/tracing/sentry"},next:{title:"SkyWalking",permalink:"/notes/service/observability/tracing/skywalking"}},u={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"signoz"},"Signoz"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SigNoz/signoz"},"SigNoz/signoz"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,o.kt)("li",{parentName:"ul"},"APM, ClickHouse")))))}g.isMDXComponent=!0}}]);