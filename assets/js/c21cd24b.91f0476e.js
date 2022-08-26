"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99290],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32243:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Prometheus \u8054\u90a6"},u=void 0,l={unversionedId:"service/observability/metrics/prometheus/prometheus-federation",id:"service/observability/metrics/prometheus/prometheus-federation",title:"Prometheus \u8054\u90a6",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/observability/metrics/prometheus/prometheus-federation.md",sourceDirName:"service/observability/metrics/prometheus",slug:"/service/observability/metrics/prometheus/prometheus-federation",permalink:"/notes/service/observability/metrics/prometheus/prometheus-federation",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus-federation.md",tags:[],version:"current",frontMatter:{title:"Prometheus \u8054\u90a6"},sidebar:"docs",previous:{title:"Prometheus FAQ",permalink:"/notes/service/observability/metrics/prometheus/prometheus-faq"},next:{title:"Prometheus K8S",permalink:"/notes/service/observability/metrics/prometheus/prometheus-k8s"}},c={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Prometheus \u91c7\u96c6 Prometheus"),(0,a.kt)("li",{parentName:"ul"},"\u7ea7\u8054\u8054\u90a6/Hierarchical federation - \u5168\u91cf\u91c7\u96c6 - \u4f8b\u5982 \u591a\u4e2a\u96c6\u7fa4\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u670d\u52a1\u8054\u90a6/Cross-service federation - \u90e8\u5206\u91c7\u96c6 - \u4f8b\u5982 \u591a\u4e2a\u96c6\u7fa4\u90e8\u7f72\u76f8\u540c\u670d\u52a1"))),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u89e3\u51b3\u5206\u5e03\u5f0f\u6307\u6807\u91c7\u96c6\u95ee\u9898"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/federation/"},"FEDERATION")),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u66f4\u597d\u7684\u6761\u4ef6\u5219\u9009\u62e9 Thanos")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u8054\u90a6/Federation \u89e3\u51b3\u7684\u662f\u91c7\u96c6\u95ee\u9898\uff0c\u6ca1\u6709\u89e3\u51b3\u5b58\u50a8\u548c\u67e5\u8be2\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u548c\u67e5\u8be2\u80fd\u529b\u53d7\u5355\u673a\u6027\u80fd\u5f71\u54cd"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7f13\u5b58\u3001\u6ca1\u6709\u67e5\u8be2\u5206\u53d1\u3001\u6ca1\u6709\u5b58\u50a8\u5207\u5206\u5e26\u6765\u7684\u95ee\u9898\u662f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u89c4\u6a21\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u91c7\u96c6\u5ef6\u8fdf - \u96be\u4ee5\u96c6\u4e2d\u544a\u8b66"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5bb9\u91cf\u65e0\u6cd5\u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},"\u5927\u91cf\u67e5\u8be2\u6162"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'federate'\n    scrape_interval: 15s\n    # \u4fdd\u7559\u6240\u6709\u6807\u7b7e\n    honor_labels: true\n    # \u66b4\u9732\u7684\u8054\u90a6\u63a5\u53e3\n    metrics_path: '/federate'\n    # \u9009\u62e9\u6307\u6807 -\n    params:\n      'match[]':\n        - '{job=\"prometheus\"}'\n        - '{__name__=~\"job:.*\"}'\n    # \u9700\u8981\u91c7\u96c6\u7684\u5b9e\u4f8b\n    static_configs:\n      - targets:\n          - 'source-prometheus-1:9090'\n          - 'source-prometheus-2:9090'\n          - 'source-prometheus-3:9090'\n")))}f.isMDXComponent=!0}}]);