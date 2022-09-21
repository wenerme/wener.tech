"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21073],{25876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),i=["components"],p={title:"Apache Kylin"},u=void 0,o={unversionedId:"java/apache/kylin",id:"java/apache/kylin",title:"Apache Kylin",description:"- Apache Kylin - Extreme OLAP Engine for Big Data",source:"@site/notes/java/apache/kylin.md",sourceDirName:"java/apache",slug:"/java/apache/kylin",permalink:"/notes/java/apache/kylin",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/apache/kylin.md",tags:[],version:"current",frontMatter:{title:"Apache Kylin"},sidebar:"docs",previous:{title:"Java",permalink:"/notes/java/"},next:{title:"Apache Wicket",permalink:"/notes/java/apache/wicket"}},c={},m=[{value:"NOTES",id:"notes",level:2}],k={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kylin.apache.org"},"Apache Kylin")," - Extreme OLAP Engine for Big Data",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2013 \u5e74\uff0c\u59cb\u4e8e eBay \u4e0a\u6d77\u7814\u53d1\u4e2d\u5fc3\u30022014 \u5e74 10 \u6708 v0.6 \u5f00\u6e90\u30022014 \u5e74 11 \u6708\u52a0\u5165 ASF \u5b75\u5316\u30022015 \u5e74 12 \u6708\u6210\u4e3a\u9876\u7ea7\u9879\u76ee\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Apache_Kylin"},"https://en.wikipedia.org/wiki/Apache_Kylin"))),(0,l.kt)("h2",{id:"notes"},"NOTES"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u57fa\u4e8e Spark \u6267\u884c\uff0cHBase \u5b58\u50a8\u3002"),(0,l.kt)("li",{parentName:"ul"},"Model - \u6570\u636e\u6a21\u578b\u3001\u5143\u6570\u636e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6a21\u578b - \u4e8b\u5b9e\u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u5b9e\u8868\u4e0e\u7eac\u5ea6\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8868\u3001JOIN\u3001\u6761\u4ef6"))))),(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8868\u3001\u5217"))),(0,l.kt)("li",{parentName:"ul"},"\u6307\u6807",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5217 - \u4e8b\u5b9e\u8868"))),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5206\u7247\u5217 - \u4e00\u822c\u4e3a\u5929"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u989d\u5916\u7684\u65f6\u95f4\u5217"))))),(0,l.kt)("li",{parentName:"ul"},"Cube",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u7ef4\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540d\u5b57\u3001\u8868\u3001\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u884d\u751f\u5217\u3001\u7ea7\u8fde\u5217\uff0c\u53ef\u964d\u7eac"))),(0,l.kt)("li",{parentName:"ul"},"\u6307\u6807",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540d\u5b57\u3001\u8868\u8fbe\u5f0f\u3001\u53c2\u6570\u3001\u8fd4\u56de\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"SUM,MIN,MAX,COUNT,COUNT_DISTINCT,TOP_N,RAW"),(0,l.kt)("li",{parentName:"ul"},"COUNT_DISTINCT \u53ea\u6709 Integer \u624d\u652f\u6301\u7cbe\u786e\u7684 COUNT\uff0c\u9ed8\u8ba4\u4e3a HLL \u6709\u4e00\u5b9a\u8bef\u5dee"))),(0,l.kt)("li",{parentName:"ul"},"\u5237\u65b0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7559\u5b58\u5468\u671f"),(0,l.kt)("li",{parentName:"ul"},"\u5408\u5e76\u5468\u671f"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u8ba1\u7b97\u65f6\u95f4"))),(0,l.kt)("li",{parentName:"ul"},"RAWKEY - \u9ed8\u8ba4\u4e3a\u6240\u6709\u7eac\u5ea6"))),(0,l.kt)("li",{parentName:"ul"},"\u589e\u91cf\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u671f Merge - Roll up - \u5468\u671f\u53ef\u914d"),(0,l.kt)("li",{parentName:"ul"},"Fast Cubing")))}s.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(u,".").concat(s)]||k[s]||c[s]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);