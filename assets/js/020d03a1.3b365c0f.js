"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71063],{49613:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=p(a),s=n,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return a?r.createElement(k,i(i({ref:e},c),{},{components:a})):r.createElement(k,i({ref:e},c))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62373:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),i=["components"],u={title:"Data FAQ",tags:["FAQ"]},o="Data FAQ",p={unversionedId:"service/data/data-faq",id:"service/data/data-faq",title:"Data FAQ",description:"\u6570\u636e\u5206\u6790\u7c7b\u578b",source:"@site/../notes/service/data/data-faq.md",sourceDirName:"service/data",slug:"/service/data/data-faq",permalink:"/notes/service/data/data-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/data/data-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Data FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Conv",permalink:"/notes/service/data/data-conv"},next:{title:"IMDB",permalink:"/notes/service/data/imdb"}},c={},d=[{value:"\u6570\u636e\u5206\u6790\u7c7b\u578b",id:"\u6570\u636e\u5206\u6790\u7c7b\u578b",level:2},{value:"\u51b3\u7b56\u63a8\u65ad\u7c7b\u578b",id:"\u51b3\u7b56\u63a8\u65ad\u7c7b\u578b",level:2},{value:"data lake vs data warehouse",id:"data-lake-vs-data-warehouse",level:2}],m={toc:d};function s(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-faq"},"Data FAQ"),(0,l.kt)("h2",{id:"\u6570\u636e\u5206\u6790\u7c7b\u578b"},"\u6570\u636e\u5206\u6790\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0 - Descriptive - \u53d1\u751f\u4e86\u4ec0\u4e48",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e05\u6d17\u3001\u6570\u636e\u53ef\u89c6\u5316"))),(0,l.kt)("li",{parentName:"ul"},"\u8bca\u65ad - Diagnostic - \u4e3a\u4ec0\u4e48\u53d1\u751f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u94bb\u5206\u6790"))),(0,l.kt)("li",{parentName:"ul"},"\u9884\u6d4b - Predictive - \u5c06\u4f1a\u53d1\u751f\u4ec0\u4e48",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5386\u53f2\u6570\u636e\u7684\u6a21\u5f0f\u5bf9\u672a\u6765\u8fdb\u884c\u63a8\u6d4b"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7b97\u6cd5\u8fdb\u884c\u81ea\u52a8\u5206\u6790"))),(0,l.kt)("li",{parentName:"ul"},"\u6307\u5bfc - ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Prescriptive_analytics"},"Prescriptive")," - \u5e94\u8be5\u505a\u4ec0\u4e48",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6d3b\u52a8\u6216\u6d4b\u8bd5\u63a8\u8350\u51b3\u7b56")))),(0,l.kt)("h2",{id:"\u51b3\u7b56\u63a8\u65ad\u7c7b\u578b"},"\u51b3\u7b56\u63a8\u65ad\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u89c4\u5219 - Rule-based decision making",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u662f\u5426\uff0c\u4f8b\u5982\u903b\u8f91\u56de\u5f52"))),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u5f52\u56e0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u6570\u503c\uff0c\u4f8b\u5982\u7ebf\u6027\u56de\u5f52"))),(0,l.kt)("li",{parentName:"ul"},"\u673a\u5668\u5b66\u4e60",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u4efb\u610f\u6570\u5b57\u6027\u7684\u6570\u636e\uff0c\u4f8b\u5982\u5206\u7c7b"))),(0,l.kt)("li",{parentName:"ul"},"\u4eba\u5de5\u667a\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6700\u4f73\u65b9\u6cd5")))),(0,l.kt)("h2",{id:"data-lake-vs-data-warehouse"},"data lake vs data warehouse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"vs."),(0,l.kt)("th",{parentName:"tr",align:null},"Data Lake"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Warehouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7ed3\u6784"),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u59cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fc7\u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76ee\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f85\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u79d1\u5b66"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5546\u4e1a\u5206\u6790")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u8bbf\u95ee\u6027"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6613\u4e8e\u8bbf\u95ee\u66f4\u65b0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u66f4\u52a0\u590d\u6742\uff0c\u66f4\u65b0\u7ed3\u6784\u4f1a\u6709\u6210\u672c")))))}s.isMDXComponent=!0}}]);