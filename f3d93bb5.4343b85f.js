(window.webpackJsonp=window.webpackJsonp||[]).push([[1049],{1122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),i=(r(0),r(1169)),c={title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898"},l={unversionedId:"service/observability/metrics/metrics-faq",id:"service/observability/metrics/metrics-faq",isDocsHomePage:!1,title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",description:"Thanos vs VictoriaMetrics",source:"@site/notes/service/observability/metrics/metrics-faq.md",slug:"/service/observability/metrics/metrics-faq",permalink:"/notes/service/observability/metrics/metrics-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/metrics-faq.md",version:"current",sidebar:"docs",previous:{title:"Cortex",permalink:"/notes/service/observability/metrics/cortex"},next:{title:"Thanos \u7248\u672c",permalink:"/notes/service/observability/metrics/thanos-version"}},b=[{value:"Thanos vs VictoriaMetrics",id:"thanos-vs-victoriametrics",children:[]},{value:"VictoriaMetrics vs TimeScaleDB",id:"victoriametrics-vs-timescaledb",children:[]}],o={toc:b};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"thanos-vs-victoriametrics"},"Thanos vs VictoriaMetrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3a Prometheus \u63d0\u4f9b\u957f\u671f\u5b58\u50a8\u670d\u52a1"),Object(i.b)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u65f6\u5e8f\u6307\u6807\u67e5\u8be2"))),Object(i.b)("li",{parentName:"ul"},"Thanos",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5de5\u5177\u96c6 - \u7528\u4e8e\u62fc\u88c5\u51fa\u6ee1\u8db3\u9700\u6c42\u7684 Prometheus \u5b58\u50a8\u67e5\u8be2\u7ed3\u6784"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u8d1f\u8d23\u5b58\u50a8 - \u7531 OSS \u5904\u7406"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8d23\u7ba1\u7406\u5b58\u50a8\u7684\u6570\u636e - \u538b\u7f29\u3001\u5220\u9664\u3001\u4e0b\u91c7\u6837"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8d23\u5206\u6d41\u67e5\u8be2\u3001\u4e0a\u4f20\u672c\u5730\u65f6\u5e8f Chunk\u3001\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c"),Object(i.b)("li",{parentName:"ul"},"\u90e8\u7f72\u7ed3\u6784\u7075\u6d3b - \u5b58\u50a8\u53ef\u9009\u62e9\u6df7\u5408\u90e8\u7f72 - \u4f8b\u5982\u90e8\u5206\u6570\u636e\u4f4d\u4e8e\u79df\u6237\u81ea\u5df1\u673a\u623f"),Object(i.b)("li",{parentName:"ul"},"\u89c4\u6a21\u51e0\u4e4e\u65e0\u9650\u5236\uff0c\u4f46\u8bbe\u8ba1\u975e\u5e38\u591a\u7684\u7ec4\u4ef6\uff0c\u95e8\u69db\u76f8\u5bf9\u66f4\u9ad8\u4e14\u5fc5\u987b\u914d\u5957 OSS \u5b58\u50a8\u670d\u52a1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sidecar \u76f4\u63a5\u4e0a\u4f20 OSS \u7406\u8bba\u4e0a\u6269\u5bb9\u89c4\u6a21\u66f4\u5927 - \u5f02\u5e38\u53ef\u80fd\u4e22\u5931\u90e8\u5206\u6570\u636e 2H"),Object(i.b)("li",{parentName:"ul"},"OSS \u6210\u672c\u6bd4 Block \u5b58\u50a8\u670d\u52a1\u6210\u672c\u66f4\u9ad8"))),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 Promethues \u534f\u8bae"))),Object(i.b)("li",{parentName:"ul"},"VictoriaMetrics - TSDB",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93 - \u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u65f6\u5e8f\u6570\u636e\u5b58\u50a8\u548c\u67e5\u8be2"),Object(i.b)("li",{parentName:"ul"},"\u5782\u76f4\u6269\u5bb9\u4e3a\u4e3b - HA \u6a21\u5f0f\u7684 Replica \u4e5f\u4e0d\u80fd\u4f5c\u4e3a\u9ad8\u53ef\u7528"),Object(i.b)("li",{parentName:"ul"},"HA \u6a21\u578b\u589e\u5f3a\u8bfb\u5199\u6027\u80fd"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u7684\u9ad8\u53ef\u7528\u9700\u8981\u989d\u5916\u4fdd\u8bc1 - \u4f8b\u5982 \u5b58\u50a8\u4e8e Longhorn \u6216 CEPH"),Object(i.b)("li",{parentName:"ul"},"\u89c4\u6a21\u6709\u4e00\u5b9a\u9650\u5236\uff0c\u4f46\u90e8\u7f72\u548c\u4f7f\u7528\u7b80\u5355"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u7684\u534f\u8bae")))),Object(i.b)("h2",{id:"victoriametrics-vs-timescaledb"},"VictoriaMetrics vs TimeScaleDB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u90fd\u662f TSDB"))),Object(i.b)("li",{parentName:"ul"},"TimeScaleDB",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e PostgreSQL",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u719f\u6089\u7684\u8fd0\u7ef4"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8\u6548\u7387\u4f4e\u4e8e\u4e13\u95e8\u7684\u65f6\u5e8f\u5b58\u50a8"),Object(i.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"))),Object(i.b)("li",{parentName:"ul"},"2.0 \u652f\u6301\u96c6\u7fa4"),Object(i.b)("li",{parentName:"ul"},"SQL \u67e5\u8be2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u66f4\u52a0\u7075\u6d3b"),Object(i.b)("li",{parentName:"ul"},"\u66f4\u5bb9\u6613\u4e0e\u4e1a\u52a1\u7ed3\u5408"),Object(i.b)("li",{parentName:"ul"},"\u5b66\u4e60\u95e8\u69db\u76f8\u5bf9\u66f4\u4f4e"))),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u9002\u914d\u5668\u652f\u6301\u5176\u4ed6\u534f\u8bae"),Object(i.b)("li",{parentName:"ul"},"\u5148\u662f\u57fa\u4e8e SQL \u7684 TSDB \u5176\u6b21\u518d\u662f Metric \u6307\u6807\u957f\u671f\u5b58\u50a8\u670d\u52a1"))),Object(i.b)("li",{parentName:"ul"},"VictoriaMetrics",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u81ea\u4e3b\u5b9e\u73b0\u6570\u636e\u5b58\u50a8\u5e95\u5c42 - \u66f4\u9ad8\u6548"),Object(i.b)("li",{parentName:"ul"},"\u589e\u5f3a PromQL \u67e5\u8be2"),Object(i.b)("li",{parentName:"ul"},"\u5206\u4e3a \u5199\u5165\u3001\u67e5\u8be2\u3001\u5b58\u50a8 \u7ec4\u4ef6 - \u5199\u5165\u548c\u67e5\u8be2\u548c\u72ec\u7acb\u6269\u5bb9")))))}u.isMDXComponent=!0},1169:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=u(r),p=a,O=s["".concat(c,".").concat(p)]||s[p]||m[p]||i;return r?n.a.createElement(O,l(l({ref:t},o),{},{components:r})):n.a.createElement(O,l({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=r[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);