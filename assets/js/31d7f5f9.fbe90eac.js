"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4295],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),s=a,k=d["".concat(u,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93783:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e};const d={title:"RethinkDB"},s="RethinkDB",k={unversionedId:"db/document/rethinkdb",id:"db/document/rethinkdb",title:"RethinkDB",description:"- default.conf.sample",source:"@site/../notes/db/document/rethinkdb.md",sourceDirName:"db/document",slug:"/db/document/rethinkdb",permalink:"/notes/db/document/rethinkdb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/document/rethinkdb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"RethinkDB"},sidebar:"docs",previous:{title:"MongoDB",permalink:"/notes/db/document/mongo"},next:{title:"agensgraph",permalink:"/notes/db/graph/agensgraph"}},f={},b=[],h={toc:b};function N(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),c),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"rethinkdb"}),"RethinkDB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/blob/next/packaging/assets/config/default.conf.sample"}),"default.conf.sample"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e26\u6ce8\u91ca\u7684\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u5e76\u4e0d\u591a,\u57fa\u672c\u6240\u6709\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u6307\u5b9a"))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5ba2\u6237\u7aef\u7aef\u53e3 28015"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u96c6\u7fa4\u7aef\u53e3 29015"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7ba1\u7406\u7aef\u53e3 8080"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u534f\u8bae\u7684 ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/blob/next/src/rdb_protocol/ql2.proto"}),"ql2.proto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://rethinkdb.com/limitations/"}),"\u9650\u5236"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6700\u5927 64 \u4e2a\u5206\u7247"))),(0,n.kt)("li",{parentName:"ul"},"\u6587\u6863",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8868\u5927\u7ea6\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u8981\u5360\u7528 10 MB, \u4e00\u4e2a\u7a7a\u8868\u5927\u7ea6\u9700\u8981 4 MB"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8868\u81f3\u5c11\u9700\u8981 8 MB \u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6587\u6863\u5efa\u8bae\u4e0d\u8d85\u8fc7 16 MB"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684 JSON \u67e5\u8be2\u65f6 64MB"),(0,n.kt)("li",{parentName:"ul"},"RethinkDB \u9700\u8981\u5c06\u7ed3\u6784\u8bb0\u5f55\u5728\u5185\u5b58\u4e2d, \u5927\u7ea6\u9700\u8981\u6570\u636e 1% \u7684\u5185\u5b58"))),(0,n.kt)("li",{parentName:"ul"},"\u952e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u6700\u957f 127 \u4e2a\u5b57\u7b26"),(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u952e\u53ea\u4f1a\u7d22\u5f15\u524d 238 - \u4e3b\u952e\u957f\u5ea6 \u7684\u5b57\u8282,"),(0,n.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7d22\u5f15\u4e0d\u4f1a\u7d22\u5f15\u5bf9\u8c61\u6216 null"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u5b57\u7b26\u4e32\u4e0d\u80fd\u5305\u542b null"))),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u5b57\u4e3a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570, -2^53 - 2^53, \u6570\u5b57\u4e0d\u80fd\u4e3a NaN \u6216\u65e0\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6570\u7ec4\u4e0d\u80fd\u8d85\u8fc7 100,000,\u53ef\u901a\u8fc7 arrayLimit \u9009\u9879\u4fee\u6539"))),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u4f7f\u7528\u5b57\u8282\u5e8f,\u800c\u975e\u5b57\u7b26\u987a\u5e8f"),(0,n.kt)("li",{parentName:"ul"},"\u90e8\u5206\u6587\u4ef6\u7cfb\u7edf(\u4f8b\u5982\u52a0\u5bc6\u7684,\u538b\u7f29\u7684)\u4e0d\u652f\u6301 direct-io \u9009\u9879"),(0,n.kt)("li",{parentName:"ul"},"btrfs \u7684 direct-io \u652f\u6301\u6709\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, RethinkDB \u4f1a\u8fd4\u56de\u8fd8\u6ca1\u63d0\u4ea4\u5230\u78c1\u76d8\u7684\u5e76\u53d1\u5199\u8bf7\u6c42, \u53ef\u901a\u8fc7 read_mode \u9009\u9879\u63a7\u5236\u9694\u79bb\u7ea7\u522b."))))),(0,n.kt)("li",{parentName:"ul"},"ReQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://rethinkdb.com/docs/sql-to-reql/javascript/"}),"SQL to ReQL")))),(0,n.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/issues/6618"}),"#6618")," Is rethinkdb dead ?")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\u4e24\u4e2a\u793a\u4f8b,\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4,\u6570\u636e\u4f1a\u5206\u522b\u5b58\u50a8\u5230 data-a \u548c data-b\nrethinkdb -d data-a -n svr_a\nrethinkdb -d data-b -n svr_b -o 100 -j 127.0.0.1\n")))}N.isMDXComponent=!0}}]);