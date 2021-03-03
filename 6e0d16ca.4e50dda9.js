(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{357:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),l=(r(0),r(766)),c={id:"kv",title:"Key Value"},i={unversionedId:"db/kv/kv",id:"db/kv/kv",isDocsHomePage:!1,title:"Key Value",description:"Tips",source:"@site/notes/db/kv/README.md",slug:"/db/kv/kv",permalink:"/notes/db/kv/kv",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/README.md",version:"current",sidebar:"docs",previous:{title:"RethinkDB",permalink:"/notes/db/document/rethinkdb"},next:{title:"LevelDB",permalink:"/notes/db/kv/leveldb"}},o=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"RocksDB vs LevelDB",id:"rocksdb-vs-leveldb",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.influxdata.com/blog/benchmarking-leveldb-vs-rocksdb-vs-hyperleveldb-vs-lmdb-performance-for-influxdb/"}),"Benchmarking LevelDB vs. RocksDB vs. HyperLevelDB vs. LMDB Performance for InfluxDB")," - 2014-06-04",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5927\u90e8\u573a\u666f LevelDB \u548c RocksDB \u662f\u66f4\u597d\u7684\u9009\u62e9"),Object(l.b)("li",{parentName:"ul"},"LevelDB \u6709\u66f4\u597d\u7684\u78c1\u76d8\u5229\u7528\u7387\uff0cRocksDB \u7684\u8bfb\u5199\u6027\u80fd\u66f4\u52a0\u4f18\u5f02"),Object(l.b)("li",{parentName:"ul"},"\u786c\u76d8\u548c\u5b58\u50a8\u914d\u7f6e\u5bf9\u6027\u80fd\u5f71\u54cd\u975e\u5e38\u660e\u663e")))))),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"rocksdb-vs-leveldb"},"RocksDB vs LevelDB"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"RocksDB"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e8e 2012 Fork LevelDB - \u63d0\u5347\u5728\u670d\u52a1\u7aef\u7684\u6027\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u4f5c\u4e3a\u5176\u4ed6\u6570\u636e\u7684\u5f15\u64ce\uff0c\u529f\u80fd\u8f83\u591a\u4e14\u590d\u6742"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\uff1aArangoDB\u3001TiDB\u3001Apache Flink\u3001CockroachDB"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"LevelDB"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u6982\u5ff5\u6765\u6e90\u4e8e Google Bigtable \u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5168\u5e73\u53f0 - \u6d4f\u89c8\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u3001\u5d4c\u5165\u5f0f\u8bbe\u5907"),Object(l.b)("li",{parentName:"ul"},"\u529f\u80fd\u7b80\u5355\uff0c\u4e00\u822c\u76f4\u63a5\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\uff1aIndexedDB\u3001Bitcoin Core\u3001go-ethereum"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/rocksdb/wiki/Features-Not-in-LevelDB"}),"RocksDB Features that are not in LevelDB")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5217\u7c07"),Object(l.b)("li",{parentName:"ul"},"\u4e8b\u52a1"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://db-engines.com/en/system/LevelDB%3BRocksDB"}),"LevelDB vs. RocksDB")," - DB Engines"))))}p.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<l;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);