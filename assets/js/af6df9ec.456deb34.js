"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76861],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69597:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&l(e,r,t[r]);return e};const m={title:"TSDB"},f="TSDB",b={unversionedId:"service/observability/metrics/prometheus/prometheus-tsdb",id:"service/observability/metrics/prometheus/prometheus-tsdb",title:"TSDB",description:"meta.json",source:"@site/../notes/service/observability/metrics/prometheus/prometheus-tsdb.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/tsdb",permalink:"/notes/service/observability/metrics/prometheus/tsdb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/prometheus/prometheus-tsdb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"TSDB"},sidebar:"docs",previous:{title:"Prometheus \u5b58\u50a8",permalink:"/notes/service/observability/metrics/prometheus/storage"},next:{title:"PromQL",permalink:"/notes/service/observability/metrics/prometheus/promql"}},d={},v=[{value:"meta.json",id:"metajson",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),l),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"tsdb"}),"TSDB"),(0,n.kt)("h2",p({},{id:"metajson"}),"meta.json"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "ulid": "01EEXN48HB03P20AFBR2JV0SX9",\n  // \u65f6\u95f4\u5e8f\u5217\u8303\u56f4\n  "minTime": 1596506400000,\n  "maxTime": 1596513600000,\n  // \u7edf\u8ba1\u4fe1\u606f\n  "stats": {\n    "numSamples": 9805,\n    "numSeries": 1090,\n    "numChunks": 1090\n  },\n  // \u538b\u7f29\n  "compaction": {\n    // \u538b\u7f29\u7ea7\u522b - 1 \u4e3a\u672a\u538b\u7f29\n    "level": 1,\n    "sources": ["01EEXN48HB03P20AFBR2JV0SX9"]\n  },\n  "version": 1\n}\n')))}O.isMDXComponent=!0}}]);