"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6202],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var a=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,m=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),k=l,N=c["".concat(m,".").concat(k)]||c[k]||o[k]||n;return r?a.createElement(N,i(i({ref:t},s),{},{components:r})):a.createElement(N,i({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=c;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97064:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return f}});var a=r(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&s(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&s(e,r,t[r]);return e};const c={title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},k="\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",N={unversionedId:"service/observability/metrics/metrics-faq",id:"service/observability/metrics/metrics-faq",title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",description:"vmagent vs prometheus vs prometheus agent",source:"@site/../notes/service/observability/metrics/metrics-faq.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/metrics-faq",permalink:"/notes/service/observability/metrics/metrics-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/metrics/metrics-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646989992,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"M3",permalink:"/notes/service/observability/metrics/m3"},next:{title:"Prometheus",permalink:"/notes/service/observability/metrics/prometheus/"}},v={},f=[{value:"vmagent vs prometheus vs prometheus agent",id:"vmagent-vs-prometheus-vs-prometheus-agent",level:2},{value:"vmsingle vs prometheus",id:"vmsingle-vs-prometheus",level:2},{value:"Thanos vs VictoriaMetrics",id:"thanos-vs-victoriametrics",level:2},{value:"VictoriaMetrics vs TimeScaleDB",id:"victoriametrics-vs-timescaledb",level:2}],h={toc:f};function b(e){var t,r=e,{components:l}=r,s=((e,t)=>{var r={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=o(o({},h),s),n(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",o({},{id:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898"}),"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h2",o({},{id:"vmagent-vs-prometheus-vs-prometheus-agent"}),"vmagent vs prometheus vs prometheus agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vmagent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bd4 prometheus \u4f7f\u7528\u66f4\u5c11\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e2a remoteWrite.url \u963b\u585e\u4e0d\u5f71\u54cd\u5176\u4ed6\u5065\u5eb7 remoteWrite"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301 pull & push"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 relabel"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e remote write \u573a\u666f"))),(0,a.kt)("li",{parentName:"ul"},"prometheus",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5b8c\u5584 - \u63d0\u4f9b\u67e5\u8be2\u3001\u7d22\u5f15\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u9762\u5411\u72ec\u7acb\u4f7f\u7528\u573a\u666f"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u78c1\u76d8\u6709\u4e00\u5b9a\u8981\u6c42"))),(0,a.kt)("li",{parentName:"ul"},"prometheus agent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0e vmagent \u89d2\u8272\u76f8\u4f3c"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd pull"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd relabel"))),(0,a.kt)("li",{parentName:"ul"},"prometheus pushgateway",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b push \u80fd\u529b")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://docs.victoriametrics.com/FAQ.html#what-is-the-difference-between-vmagent-and-prometheus"}),"What is the difference between vmagent and Prometheus?"))),(0,a.kt)("h2",o({},{id:"vmsingle-vs-prometheus"}),"vmsingle vs prometheus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vmsingle",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u57fa\u672c\u7b49\u540c prometheus"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6027\u80fd\u4f18\u4e8e prometheus"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 RemoteRead"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u7684 vmui \u6bd4 prometheus \u5f31"))),(0,a.kt)("li",{parentName:"ul"},"prometheus",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5b8c\u5584"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 RemoteRead")))),(0,a.kt)("h2",o({},{id:"thanos-vs-victoriametrics"}),"Thanos vs VictoriaMetrics"),(0,a.kt)("p",null,"\u4e24\u8005\u533a\u522b\u70b9\u5927\u4e8e\u76f8\u540c\u70b9\u3002"),(0,a.kt)("p",null,"VictoriaMetrics \u662f TSDB - \u8d1f\u8d23\u5b58\u50a8\u6570\u636e\uff0cinsert \u548c select \u76f8\u5f53\u4e8e storage \u7684\u63a5\u53e3\u3002\n\u7740\u91cd\u8003\u8651\u8bfb\u5199\u8def\u5f84\u3002"),(0,a.kt)("p",null,"Thanos \u662f Prometheus \u4f53\u7cfb\u4e0b\u6269\u5bb9\u7684\u5de5\u5177\u96c6\u3002\n\u4e0d\u8d1f\u8d23\u5b58\u50a8\uff0c\u4f46\u9488\u5bf9\u67e5\u8be2\u6709\u8f83\u591a\u4f18\u5316 - \u5206\u7247\u3001\u7f13\u5b58\u3002"),(0,a.kt)("p",null,"\u4e24\u8005\u53ef\u914d\u5408\u4f7f\u7528\u4ee5\u8fbe\u5230\u6700\u4f73\u6548\u679c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3a Prometheus \u63d0\u4f9b\u957f\u671f\u5b58\u50a8\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u65f6\u5e8f\u6307\u6807\u67e5\u8be2"))),(0,a.kt)("li",{parentName:"ul"},"Thanos",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5408\u96c6/\u5de5\u5177\u96c6 - sidecar, store, query, compact, rule, receive, query-frontend",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u62fc\u88c5\u51fa\u6ee1\u8db3\u9700\u6c42\u7684 Prometheus \u5b58\u50a8\u67e5\u8be2\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u4f7f\u7528\uff0c\u914d\u5957\u7ec4\u5408\u5b9e\u73b0\u6240\u9700\u67b6\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u7075\u6d3b - \u590d\u6742"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5173\u5fc3\u6570\u636e\u5982\u4f55\u5b58\u50a8 - \u63d2\u4ef6\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u7075\u6d3b\uff0c\u9488\u5bf9\u67e5\u8be2\u6709\u8f83\u591a\u4f18\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8d1f\u8d23\u5b58\u50a8 - \u7531 OSS \u5904\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u5b58\u50a8\u6570\u636e")))),(0,a.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u7ba1\u7406\u5b58\u50a8\u7684\u6570\u636e - \u538b\u7f29\u3001\u5220\u9664\u3001\u4e0b\u91c7\u6837"),(0,a.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u5206\u6d41\u67e5\u8be2\u3001\u4e0a\u4f20\u672c\u5730\u65f6\u5e8f Chunk\u3001\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u7ed3\u6784\u7075\u6d3b - \u5b58\u50a8\u53ef\u9009\u62e9\u6df7\u5408\u90e8\u7f72 - \u4f8b\u5982\u90e8\u5206\u6570\u636e\u4f4d\u4e8e\u79df\u6237\u81ea\u5df1\u673a\u623f"),(0,a.kt)("li",{parentName:"ul"},"\u89c4\u6a21\u51e0\u4e4e\u65e0\u9650\u5236\uff0c\u4f46\u8bbe\u8ba1\u975e\u5e38\u591a\u7684\u7ec4\u4ef6\uff0c\u95e8\u69db\u76f8\u5bf9\u66f4\u9ad8\u4e14\u5fc5\u987b\u914d\u5957 OSS \u5b58\u50a8\u670d\u52a1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sidecar \u76f4\u63a5\u4e0a\u4f20 OSS \u7406\u8bba\u4e0a\u6269\u5bb9\u89c4\u6a21\u66f4\u5927 - \u5f02\u5e38\u53ef\u80fd\u4e22\u5931\u90e8\u5206\u6570\u636e 2H"),(0,a.kt)("li",{parentName:"ul"},"OSS \u6210\u672c\u6bd4 Block \u5b58\u50a8\u670d\u52a1\u6210\u672c\u66f4\u9ad8"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Promethues \u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u4e30\u5bcc\u3001\u7075\u6d3b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 OSS \u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"compact \u9700\u8981\u62c9\u56de oss \u6570\u636e\u8fdb\u884c\u64cd\u4f5c - oss \u6d41\u91cf\u5927\uff0c\u901f\u5ea6\u5f71\u54cd compact \u65f6\u95f4"))))),(0,a.kt)("li",{parentName:"ul"},"VictoriaMetrics - TSDB",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93 - \u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u65f6\u5e8f\u6570\u636e\u5b58\u50a8\u548c\u67e5\u8be2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f1a\u5b9e\u9645\u5b58\u50a8\u6570\u636e")))),(0,a.kt)("li",{parentName:"ul"},"\u5782\u76f4\u6269\u5bb9\u4e3a\u4e3b - HA \u6a21\u5f0f\u7684 Replica \u4e5f\u4e0d\u80fd\u4f5c\u4e3a\u9ad8\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},"HA \u6a21\u578b\u589e\u5f3a\u8bfb\u5199\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u7684\u9ad8\u53ef\u7528\u9700\u8981\u989d\u5916\u4fdd\u8bc1 - \u4f8b\u5982 \u5b58\u50a8\u4e8e Longhorn \u6216 CEPH"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u7684\u534f\u8bae - prometheis,datalog,influx,opentsdb"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7248\u672c\u5305\u542b\u4e09\u4e2a\u57fa\u672c\u7ec4\u4ef6 - insert, storage, select"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u6b21\u67e5\u8be2\u4e0d\u53ef\u8de8\u79df\u6237"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f18\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vmsingle \u90e8\u7f72\u548c\u4f7f\u7528\u7b80\u5355"),(0,a.kt)("li",{parentName:"ul"},"vmcluster \u7ed3\u6784\u7075\u6d3b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56\u5916\u90e8\u5b58\u50a8\u670d\u52a1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f3a\u70b9"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vmsingle \u548c vmcluster \u5dee\u5f02\u5927 - \u5efa\u8bae\u652f\u6301\u4f7f\u7528 vmcluster"),(0,a.kt)("li",{parentName:"ul"},"vmsingle \u4e0d\u652f\u6301\u591a\u79df\u6237")))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"https://docs.victoriametrics.com/FAQ.html#what-is-the-difference-between-victoriametrics-and-thanos"}),"VictoriaMetrics vs Thanos"))),(0,a.kt)("h2",o({},{id:"victoriametrics-vs-timescaledb"}),"VictoriaMetrics vs TimeScaleDB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u90fd\u662f TSDB"))),(0,a.kt)("li",{parentName:"ul"},"TimeScaleDB",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e PostgreSQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u719f\u6089\u7684\u8fd0\u7ef4"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6548\u7387\u4f4e\u4e8e\u4e13\u95e8\u7684\u65f6\u5e8f\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"))),(0,a.kt)("li",{parentName:"ul"},"2.0 \u652f\u6301\u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"SQL \u67e5\u8be2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u7075\u6d3b"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5bb9\u6613\u4e0e\u4e1a\u52a1\u7ed3\u5408"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u95e8\u69db\u76f8\u5bf9\u66f4\u4f4e"))),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u9002\u914d\u5668\u652f\u6301\u5176\u4ed6\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5148\u662f\u57fa\u4e8e SQL \u7684 TSDB \u5176\u6b21\u518d\u662f Metric \u6307\u6807\u957f\u671f\u5b58\u50a8\u670d\u52a1"))),(0,a.kt)("li",{parentName:"ul"},"VictoriaMetrics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u4e3b\u5b9e\u73b0\u6570\u636e\u5b58\u50a8\u5e95\u5c42 - \u66f4\u9ad8\u6548"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u5f3a PromQL \u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u4e3a \u5199\u5165\u3001\u67e5\u8be2\u3001\u5b58\u50a8 \u7ec4\u4ef6 - \u5199\u5165\u548c\u67e5\u8be2\u548c\u72ec\u7acb\u6269\u5bb9")))))}b.isMDXComponent=!0}}]);