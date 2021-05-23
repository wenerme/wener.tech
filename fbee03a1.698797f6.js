(window.webpackJsonp=window.webpackJsonp||[]).push([[928],{1001:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(1021)),i={id:"db",title:"\u6570\u636e\u5e93"},b={unversionedId:"db/db",id:"db/db",isDocsHomePage:!1,title:"\u6570\u636e\u5e93",description:"Database",source:"@site/notes/db/README.md",slug:"/db/db",permalink:"/notes/db/db",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/README.md",version:"current",sidebar:"docs",previous:{title:"\u5e38\u7528IP\u5730\u5740\u6bb5\u67e5\u8be2",permalink:"/notes/tool/network/ip-lookup"},next:{title:"Database Awesome",permalink:"/notes/db/db-awesome"}},c=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake",id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"database"},"Database"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://db.grussell.org/index.html"},"Database eLearning")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://db-engines.com/en/ranking"},"DB-Engines Ranking")),Object(l.b)("li",{parentName:"ul"},"Aphyr ",Object(l.b)("a",{parentName:"li",href:"https://aphyr.com/tags/jepsen"},"jepsen")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/eventql/eventql"},"EventQL"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://eventql.io/"},"EventQL")," is a distributed, column-oriented database built for large-scale event collection and analytics. It runs super-fast SQL and MapReduce queries."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://crate.io/"},"Carte"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SQL FOR THINGS DATA"),Object(l.b)("li",{parentName:"ul"},"Real-time SQL. Simple scaling. Millions of inserts per second."),Object(l.b)("li",{parentName:"ul"},"CrateDB offers Standard-SQL, real-time queries and document support (JSON) in a simple, horizontal way to scale."),Object(l.b)("li",{parentName:"ul"},"IoT & Sensors",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Stream millions of data points per second into CrateDB and query them in real time to visualize, track, and predict."))),Object(l.b)("li",{parentName:"ul"},"Log & Event Analytics",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Analyze logs from IT infrastructure to monitor security, compliance, usage, billing, and more."))),Object(l.b)("li",{parentName:"ul"},"Time Series, Geospatial, Machine Learning",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Versatile SQL engine enables complex queries, text searches, and aggregations \u2013 in real time or against volumes of historic data."))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/caesar0301/awesome-public-datasets"},"caesar0301/awesome-public-datasets")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://dbmstools.com/"},"https://dbmstools.com/"))),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"oltp-vs-olap-vs-nosql-vs-newsql-vs-data-warehouse-vs-data-mart-vs-data-lake"},"OLTP vs OLAP vs NoSQL vs NewSQL vs Data Warehouse vs Data Mart vs Data Lake"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"OLTP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u4ea4\u6613\u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u5f3a\u4e8b\u52a1\uff0c\u5f3a\u4e00\u81f4\uff0c\u8f83\u4f4e RT\uff0c\u4f4e\u9891\u5ea6\u66f4\u65b0"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5b9e\u65f6\u6570\u636e\uff0c\u6570\u636e\u91cf\u5c0f"))),Object(l.b)("li",{parentName:"ul"},"OLAP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u5206\u6790\u62a5\u8868\u7edf\u8ba1\uff0c\u4ee5\u8bfb\u4e3a\u4e3b"),Object(l.b)("li",{parentName:"ul"},"\u5f31\u4e8b\u52a1\uff0c\u5f31\u4e00\u81f4\u6027\uff0c\u5bf9\u54cd\u5e94\u6709\u4e00\u5b9a\u8981\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u660e\u7ec6\u6570\u636e\uff0c\u5386\u53f2\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927"))),Object(l.b)("li",{parentName:"ul"},"NoSQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u4ed8\u7279\u6b8a\u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a\u541e\u5410\u3001\u5ef6\u65f6\u3001\u64cd\u4f5c\u4fbf\u643a\u3001\u6570\u636e\u91cf\u3001\u5b9e\u65f6\u3001\u5e76\u53d1\u3001\u641c\u7d22\u3001\u5916\u90e8\u96c6\u6210\u3001\u6570\u636e\u7ec4\u7ec7\u6a21\u5f0f\uff08\u56fe\u3001\u7a7a\u95f4\u3001\u65f6\u5e8f\uff09"),Object(l.b)("li",{parentName:"ul"},"\u63a5\u53e3\u5f62\u5f0f\u5404\u4e0d\u76f8\u540c\uff0c\u4e8b\u52a1\u4fdd\u969c\u5404\u90e8\u76f8\u540c"))),Object(l.b)("li",{parentName:"ul"},"NewSQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63a5\u53e3\u662fSQL\u6807\u51c6\u7684 NoSQL"),Object(l.b)("li",{parentName:"ul"},"\u5177\u6709OLTP\u7684\u5c5e\u6027\uff0c\u80fd\u6a2a\u5411\u6269\u5bb9"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c SQL \u5f15\u64ce + \u5206\u5e03\u5f0f KV \u5b58\u50a8\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u4f1a\u5b9e\u73b0 MySQL \u6216 PostgreSQL \u7684\u534f\u8bae"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_warehouse"},"Data Warehouse"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u7eac\u5ea6\u7684\u6570\u636e\u7ba1\u63a7"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u5957\u7cfb\u7edf\uff0c\u4f53\u7cfb\u5316\u7684\u89e3\u51b3\u4f01\u4e1a\u5185\u90e8\u6570\u636e\u5b58\u50a8\u3001\u5904\u7406\u3001\u5206\u6790\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u5de8\u5927\uff0c\u5bf9\u54cd\u5e94\u8981\u6c42\u4f4e"),Object(l.b)("li",{parentName:"ul"},"\u7edf\u4e00\u5e73\u53f0\uff0c\u7531\u5f88\u591a\u90e8\u5206\u7ec4\u6210\uff0c\u6709\u5f00\u53d1\u5e73\u53f0"),Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u5f00\u53d1\u548c BI"),Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u4f01\u4e1a\u6574\u4f53"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u6709\u4e00\u5b9a\u7ed3\u6784"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_mart"},"Data Mart"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u4ed3\u5e93\u7684\u4e00\u79cd\u7279\u6b8a\u5f62\u5f0f\uff0c\u6570\u636e\u4ed3\u5e93\u7684\u5b50\u96c6"),Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u4e1a\u52a1\u3001\u7ec4\u7ec7\u90e8\u95e8\u3001\u67d0\u4e00\u9886\u57df"),Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u4e00\u5b9a\u6570\u636e\u5171\u4eab\uff0c\u6570\u636e\u5177\u6709\u7ed3\u6784\u6027"))),Object(l.b)("li",{parentName:"ul"},"Data Lake",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u539f\u59cb\u6570\u636e\uff0c\u4fdd\u6301\u4f4e\u5ec9\u7684\u5b58\u50a8\u6210\u672c"),Object(l.b)("li",{parentName:"ul"},"\u89c4\u6a21\u548c\u6570\u636e\u91cf\u6bd4 DW \u5927\uff0c\u5904\u7406\u66f4\u6162\uff0c\u8bfb\u53d6\u65f6\u5b9a\u4e49\u6570\u636e\u7ed3\u6784"),Object(l.b)("li",{parentName:"ul"},"Hadoop \u662f DL\uff0c\u800c\u5728\u8fd9\u4e4b\u4e0a\u7684 HBase \u5219\u662f DW"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u6570\u636e\u4e0d\u5141\u8bb8\u66f4\u65b0")))))}p.isMDXComponent=!0},1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,O=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return a?n.a.createElement(O,b(b({ref:t},o),{},{components:a})):n.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);