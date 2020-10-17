(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{504:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var r=n(2),a=n(7),l=(n(0),n(586)),i={id:"olap",title:"OLAP"},c={unversionedId:"db/olap/olap",id:"db/olap/olap",isDocsHomePage:!1,title:"OLAP",description:"Online Analytical Processing",source:"@site/notes/db/olap/README.md",slug:"/db/olap/olap",permalink:"/notes/db/olap/olap",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/olap/README.md",version:"current"},b=[{value:"Tips",id:"tips",children:[]}],p={rightToc:b};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"online-analytical-processing"},"Online Analytical Processing"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6444\u53d6 -> \u6570\u636e\u5b58\u50a8 -> \u6570\u636e\u5904\u7406 -> \u6570\u636e\u8bbf\u95ee"),Object(l.b)("li",{parentName:"ul"},"\u5173\u952e\u6280\u672f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9884\u805a\u5408 - Apache Kylin\u3001Druid",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cube"),Object(l.b)("li",{parentName:"ul"},"\u5df2\u77e5\u4e1a\u52a1\u6307\u6807\u3001\u6570\u636e\u5177\u6709\u4e00\u5b9a\u7ed3\u6784\u6027"))),Object(l.b)("li",{parentName:"ul"},"MPP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e76\u53d1\u6570\u636e\u5904\u7406"))),Object(l.b)("li",{parentName:"ul"},"\u7d22\u5f15 - Elastic\u3001Solr",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u641c\u7d22\u4e3a\u4e3b\uff0c\u5927\u91cf\u6570\u636e\u4e2d\u9009\u62e9\u5c0f\u90e8\u5206\u6570\u636e"))),Object(l.b)("li",{parentName:"ul"},"\u5217\u5b58\u50a8 - Impala",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ad8\u538b\u7f29\u6bd4\u3001\u4f4eIO\u3001\u5feb\u901f\u8fc7\u6ee4"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\uff0c\u4e0d\u9002\u5408\u5927JOIN"))),Object(l.b)("li",{parentName:"ul"},"\u5185\u5b58\u5904\u7406 - Presto",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5feb\u901f\u8ba1\u7b97\u5904\u7406"))))),Object(l.b)("li",{parentName:"ul"},"\u9009\u62e9\u51fa\u53d1\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u7ea7\uff1aG\u3001T\u3001P\u3001\u5355\u8868\u91cf\u7ea7"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u65f6\u5e8f\u3001\u65e5\u5fd7\u3001\u4e8b\u4ef6\u3001\u884c\u4e3a\u3001\u6c47\u603b"),Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u7c7b\u578b\uff1a\u805a\u5408\u3001\u641c\u7d22\u3001\u7edf\u8ba1\u3001\u6307\u6807\u3001JOIN"),Object(l.b)("li",{parentName:"ul"},"\u8bfb\u5199\u7c7b\u578b\uff1a\u8bfb\u4e3a\u4e3b\u3001\u5199\u4e3a\u4e3b\u3001\u6d41\u5199\u5165\u3001\u662f\u5426\u66f4\u65b0"),Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210\u80fd\u529b\uff1a\u652f\u6301\u591a\u5c11\u5916\u90e8\u6570\u636e\u6e90\u3001\u662f\u5426\u80fd\u6d41\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u8ba1\u7b97\uff1a\u504f\u5411\u5b58\u50a8\u8fd8\u662f\u8ba1\u7b97\u5206\u6790"),Object(l.b)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 Hadoop \u751f\u6001"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u65f6\u6548"))),Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c1\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u79d2\u7ea7\u54cd\u5e94"),Object(l.b)("li",{parentName:"ul"},"\u5e76\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u96c6\u5927\u5c0f"),Object(l.b)("li",{parentName:"ul"},"SQL \u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"\u79bb\u7ebf\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u65f6\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u53bb\u91cd"),Object(l.b)("li",{parentName:"ul"},"\u660e\u7ec6"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784\u53d8\u5316"),Object(l.b)("li",{parentName:"ul"},"JOIN"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.slideshare.net/welkaim/big-data-architecture-bi-and-analytics-part-2"}),"Big data architecture: BI and Analytics (Part 2)"),"  ")))))}o.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,j=u["".concat(i,".").concat(m)]||u[m]||O[m]||l;return n?a.a.createElement(j,c(c({ref:t},p),{},{components:n})):a.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);