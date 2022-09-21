"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18068],{43258:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(96600),o=r(27279),i=(r(59496),r(3905)),s=["components"],c={title:"TSDB"},a=void 0,u={unversionedId:"service/observability/metrics/prometheus/prometheus-tsdb",id:"service/observability/metrics/prometheus/prometheus-tsdb",title:"TSDB",description:"meta.json",source:"@site/notes/service/observability/metrics/prometheus/prometheus-tsdb.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/prometheus-tsdb",permalink:"/notes/service/observability/metrics/prometheus/prometheus-tsdb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-tsdb.md",tags:[],version:"current",frontMatter:{title:"TSDB"},sidebar:"docs",previous:{title:"Prometheus \u5b58\u50a8",permalink:"/notes/service/observability/metrics/prometheus/storage"},next:{title:"PromQL",permalink:"/notes/service/observability/metrics/prometheus/promql"}},m={},p=[{value:"meta.json",id:"metajson",level:2}],l={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metajson"},"meta.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ulid": "01EEXN48HB03P20AFBR2JV0SX9",\n  // \u65f6\u95f4\u5e8f\u5217\u8303\u56f4\n  "minTime": 1596506400000,\n  "maxTime": 1596513600000,\n  // \u7edf\u8ba1\u4fe1\u606f\n  "stats": {\n    "numSamples": 9805,\n    "numSeries": 1090,\n    "numChunks": 1090\n  },\n  // \u538b\u7f29\n  "compaction": {\n    // \u538b\u7f29\u7ea7\u522b - 1 \u4e3a\u672a\u538b\u7f29\n    "level": 1,\n    "sources": ["01EEXN48HB03P20AFBR2JV0SX9"]\n  },\n  "version": 1\n}\n')))}b.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return l}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),b=o,f=l["".concat(a,".").concat(b)]||l[b]||m[b]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);