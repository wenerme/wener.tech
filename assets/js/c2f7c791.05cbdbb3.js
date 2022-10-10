"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59587],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59371:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e};const s={id:"olap",title:"OLAP"},f="Online Analytical Processing",d={unversionedId:"db/olap/olap",id:"db/olap/olap",title:"OLAP",description:"- \u6570\u636e\u6444\u53d6 -> \u6570\u636e\u5b58\u50a8 -> \u6570\u636e\u5904\u7406 -> \u6570\u636e\u8bbf\u95ee",source:"@site/../notes/db/olap/README.md",sourceDirName:"db/olap",slug:"/db/olap/",permalink:"/notes/db/olap/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/olap/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628160908,formattedLastUpdatedAt:"Aug 5, 2021",frontMatter:{id:"olap",title:"OLAP"},sidebar:"docs",previous:{title:"Realm",permalink:"/notes/db/mobile/realm"},next:{title:"Greenplum",permalink:"/notes/db/olap/greenplum"}},k={},b=[],N={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),c),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"online-analytical-processing"}),"Online Analytical Processing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u6444\u53d6 -> \u6570\u636e\u5b58\u50a8 -> \u6570\u636e\u5904\u7406 -> \u6570\u636e\u8bbf\u95ee"),(0,n.kt)("li",{parentName:"ul"},"\u5173\u952e\u6280\u672f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9884\u805a\u5408 - Apache Kylin\u3001Druid",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cube"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u77e5\u4e1a\u52a1\u6307\u6807\u3001\u6570\u636e\u5177\u6709\u4e00\u5b9a\u7ed3\u6784\u6027"))),(0,n.kt)("li",{parentName:"ul"},"MPP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u6570\u636e\u5904\u7406"))),(0,n.kt)("li",{parentName:"ul"},"\u7d22\u5f15 - Elastic\u3001Solr",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u641c\u7d22\u4e3a\u4e3b\uff0c\u5927\u91cf\u6570\u636e\u4e2d\u9009\u62e9\u5c0f\u90e8\u5206\u6570\u636e"))),(0,n.kt)("li",{parentName:"ul"},"\u5217\u5b58\u50a8 - Impala",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u538b\u7f29\u6bd4\u3001\u4f4e IO\u3001\u5feb\u901f\u8fc7\u6ee4"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5927\uff0c\u4e0d\u9002\u5408\u5927 JOIN"))),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5904\u7406 - Presto",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8ba1\u7b97\u5904\u7406"))))),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u51fa\u53d1\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u7ea7\uff1aG\u3001T\u3001P\u3001\u5355\u8868\u91cf\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u65f6\u5e8f\u3001\u65e5\u5fd7\u3001\u4e8b\u4ef6\u3001\u884c\u4e3a\u3001\u6c47\u603b"),(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7c7b\u578b\uff1a\u805a\u5408\u3001\u641c\u7d22\u3001\u7edf\u8ba1\u3001\u6307\u6807\u3001JOIN"),(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u7c7b\u578b\uff1a\u8bfb\u4e3a\u4e3b\u3001\u5199\u4e3a\u4e3b\u3001\u6d41\u5199\u5165\u3001\u662f\u5426\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u6210\u80fd\u529b\uff1a\u652f\u6301\u591a\u5c11\u5916\u90e8\u6570\u636e\u6e90\u3001\u662f\u5426\u80fd\u6d41\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u8ba1\u7b97\uff1a\u504f\u5411\u5b58\u50a8\u8fd8\u662f\u8ba1\u7b97\u5206\u6790"),(0,n.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 Hadoop \u751f\u6001"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u65f6\u6548"))),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u79d2\u7ea7\u54cd\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6\u5927\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"SQL \u652f\u6301"),(0,n.kt)("li",{parentName:"ul"},"\u79bb\u7ebf\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u53bb\u91cd"),(0,n.kt)("li",{parentName:"ul"},"\u660e\u7ec6"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ed3\u6784\u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},"JOIN"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.slideshare.net/welkaim/big-data-architecture-bi-and-analytics-part-2"}),"Big data architecture: BI and Analytics (Part 2)"))))))}y.isMDXComponent=!0}}]);