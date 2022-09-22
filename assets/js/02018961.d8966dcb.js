"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99958],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93716:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(96600),i=r(27279),a=(r(59496),r(49613)),o=["components"],l={title:"M3"},c="M3",s={unversionedId:"service/observability/metrics/m3",id:"service/observability/metrics/m3",title:"M3",description:"- m3db/m3",source:"@site/../notes/service/observability/metrics/m3.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/m3",permalink:"/notes/service/observability/metrics/m3",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/observability/metrics/m3.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"M3"},sidebar:"docs",previous:{title:"Cortex",permalink:"/notes/service/observability/metrics/cortex"},next:{title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/observability/metrics/metrics-faq"}},u={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"m3"},"M3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/m3db/m3"},"m3db/m3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache 2.0, Go"),(0,a.kt)("li",{parentName:"ul"},"Distributed TSDB"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4f9d\u8d56 ETCD"))),(0,a.kt)("li",{parentName:"ul"},"Why",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://logz.io/blog/m3db-prometheus-as-a-service/"},"Why Choose M3DB for Logz.io Prometheus-as-a-Service"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vs. Thanos & Cortex",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u548c\u57fa\u4e8e\u6570\u636e\u5b58\u50a8\u662f\u4e24\u79cd\u4e0d\u540c\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u503e\u5411\u6570\u636e\u5e93"))),(0,a.kt)("li",{parentName:"ul"},"vs. VictoriaMetrics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"scale out \u9ebb\u70e6 - \u9700\u8981\u81ea\u884c sharding")))))))))}f.isMDXComponent=!0}}]);