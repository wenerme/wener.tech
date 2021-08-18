"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24066],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50396:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i=["components"],o={id:"olap",title:"OLAP"},p="Online Analytical Processing",u={unversionedId:"db/olap/olap",id:"db/olap/olap",isDocsHomePage:!1,title:"OLAP",description:"- \u6570\u636e\u6444\u53d6 -> \u6570\u636e\u5b58\u50a8 -> \u6570\u636e\u5904\u7406 -> \u6570\u636e\u8bbf\u95ee",source:"@site/notes/db/olap/README.md",sourceDirName:"db/olap",slug:"/db/olap/olap",permalink:"/notes/db/olap/olap",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/olap/README.md",version:"current",frontMatter:{id:"olap",title:"OLAP"},sidebar:"docs",previous:{title:"GraphDB Awesome",permalink:"/notes/db/graph/graphdb-awesome"},next:{title:"Schema Design",permalink:"/notes/db/schema-design"}},c=[],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"online-analytical-processing"},"Online Analytical Processing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6444\u53d6 -> \u6570\u636e\u5b58\u50a8 -> \u6570\u636e\u5904\u7406 -> \u6570\u636e\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u5173\u952e\u6280\u672f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9884\u805a\u5408 - Apache Kylin\u3001Druid",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cube"),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u77e5\u4e1a\u52a1\u6307\u6807\u3001\u6570\u636e\u5177\u6709\u4e00\u5b9a\u7ed3\u6784\u6027"))),(0,l.kt)("li",{parentName:"ul"},"MPP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u6570\u636e\u5904\u7406"))),(0,l.kt)("li",{parentName:"ul"},"\u7d22\u5f15 - Elastic\u3001Solr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u641c\u7d22\u4e3a\u4e3b\uff0c\u5927\u91cf\u6570\u636e\u4e2d\u9009\u62e9\u5c0f\u90e8\u5206\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"\u5217\u5b58\u50a8 - Impala",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u538b\u7f29\u6bd4\u3001\u4f4e IO\u3001\u5feb\u901f\u8fc7\u6ee4"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\uff0c\u4e0d\u9002\u5408\u5927 JOIN"))),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5904\u7406 - Presto",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8ba1\u7b97\u5904\u7406"))))),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u51fa\u53d1\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u7ea7\uff1aG\u3001T\u3001P\u3001\u5355\u8868\u91cf\u7ea7"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u65f6\u5e8f\u3001\u65e5\u5fd7\u3001\u4e8b\u4ef6\u3001\u884c\u4e3a\u3001\u6c47\u603b"),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7c7b\u578b\uff1a\u805a\u5408\u3001\u641c\u7d22\u3001\u7edf\u8ba1\u3001\u6307\u6807\u3001JOIN"),(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u7c7b\u578b\uff1a\u8bfb\u4e3a\u4e3b\u3001\u5199\u4e3a\u4e3b\u3001\u6d41\u5199\u5165\u3001\u662f\u5426\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u96c6\u6210\u80fd\u529b\uff1a\u652f\u6301\u591a\u5c11\u5916\u90e8\u6570\u636e\u6e90\u3001\u662f\u5426\u80fd\u6d41\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u8ba1\u7b97\uff1a\u504f\u5411\u5b58\u50a8\u8fd8\u662f\u8ba1\u7b97\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 Hadoop \u751f\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u65f6\u6548"))),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u79d2\u7ea7\u54cd\u5e94"),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"SQL \u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u79bb\u7ebf\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u53bb\u91cd"),(0,l.kt)("li",{parentName:"ul"},"\u660e\u7ec6"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784\u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"JOIN"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.slideshare.net/welkaim/big-data-architecture-bi-and-analytics-part-2"},"Big data architecture: BI and Analytics (Part 2)"))))))}s.isMDXComponent=!0}}]);