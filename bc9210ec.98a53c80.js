(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{590:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),b=(n(0),n(766)),i={id:"rethinkdb",title:"RethinkDB"},l={unversionedId:"db/document/rethinkdb",id:"db/document/rethinkdb",isDocsHomePage:!1,title:"RethinkDB",description:"Tips",source:"@site/notes/db/document/rethinkdb.md",slug:"/db/document/rethinkdb",permalink:"/notes/db/document/rethinkdb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/document/rethinkdb.md",version:"current",sidebar:"docs",previous:{title:"MongoDB",permalink:"/notes/db/document/mongodb"},next:{title:"Key Value",permalink:"/notes/db/kv/kv"}},c=[{value:"Tips",id:"tips",children:[]}],o={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/blob/next/packaging/assets/config/default.conf.sample"}),"default.conf.sample"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5e26\u6ce8\u91ca\u7684\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u5e76\u4e0d\u591a,\u57fa\u672c\u6240\u6709\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u6307\u5b9a"))),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5ba2\u6237\u7aef\u7aef\u53e3 28015"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u96c6\u7fa4\u7aef\u53e3 29015"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7ba1\u7406\u7aef\u53e3 8080"),Object(b.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u534f\u8bae\u7684 ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/blob/next/src/rdb_protocol/ql2.proto"}),"ql2.proto")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://rethinkdb.com/limitations/"}),"\u9650\u5236"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u96c6\u7fa4",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6700\u5927 64 \u4e2a\u5206\u7247"))),Object(b.b)("li",{parentName:"ul"},"\u6587\u6863",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u8868\u5927\u7ea6\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u8981\u5360\u7528 10 MB, \u4e00\u4e2a\u7a7a\u8868\u5927\u7ea6\u9700\u8981 4 MB"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8868\u81f3\u5c11\u9700\u8981 8 MB \u5185\u5b58"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6587\u6863\u5efa\u8bae\u4e0d\u8d85\u8fc7 16 MB"),Object(b.b)("li",{parentName:"ul"},"\u6700\u5927\u7684 JSON \u67e5\u8be2\u65f6 64MB"),Object(b.b)("li",{parentName:"ul"},"RethinkDB \u9700\u8981\u5c06\u7ed3\u6784\u8bb0\u5f55\u5728\u5185\u5b58\u4e2d, \u5927\u7ea6\u9700\u8981\u6570\u636e 1% \u7684\u5185\u5b58"))),Object(b.b)("li",{parentName:"ul"},"\u952e",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e3b\u952e\u6700\u957f 127 \u4e2a\u5b57\u7b26"),Object(b.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u952e\u53ea\u4f1a\u7d22\u5f15\u524d 238 - \u4e3b\u952e\u957f\u5ea6 \u7684\u5b57\u8282,"),Object(b.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u7d22\u5f15\u4e0d\u4f1a\u7d22\u5f15\u5bf9\u8c61\u6216 null"),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u952e\u5b57\u7b26\u4e32\u4e0d\u80fd\u5305\u542b null"))),Object(b.b)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6570\u5b57\u4e3a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570, -2^53 - 2^53, \u6570\u5b57\u4e0d\u80fd\u4e3a NaN \u6216\u65e0\u9650"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6570\u7ec4\u4e0d\u80fd\u8d85\u8fc7 100,000,\u53ef\u901a\u8fc7 arrayLimit \u9009\u9879\u4fee\u6539"))),Object(b.b)("li",{parentName:"ul"},"\u5176\u4ed6",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7d22\u5f15\u4f7f\u7528\u5b57\u8282\u5e8f,\u800c\u975e\u5b57\u7b26\u987a\u5e8f"),Object(b.b)("li",{parentName:"ul"},"\u90e8\u5206\u6587\u4ef6\u7cfb\u7edf(\u4f8b\u5982\u52a0\u5bc6\u7684,\u538b\u7f29\u7684)\u4e0d\u652f\u6301 direct-io \u9009\u9879"),Object(b.b)("li",{parentName:"ul"},"btrfs \u7684 direct-io \u652f\u6301\u6709\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, RethinkDB \u4f1a\u8fd4\u56de\u8fd8\u6ca1\u63d0\u4ea4\u5230\u78c1\u76d8\u7684\u5e76\u53d1\u5199\u8bf7\u6c42, \u53ef\u901a\u8fc7 read_mode \u9009\u9879\u63a7\u5236\u9694\u79bb\u7ea7\u522b."))))),Object(b.b)("li",{parentName:"ul"},"ReQL",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://rethinkdb.com/docs/sql-to-reql/javascript/"}),"SQL to ReQL")))),Object(b.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rethinkdb/rethinkdb/issues/6618"}),"#6618")," Is rethinkdb dead ?")))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\u4e24\u4e2a\u793a\u4f8b,\u7ec4\u6210\u4e00\u4e2a\u96c6\u7fa4,\u6570\u636e\u4f1a\u5206\u522b\u5b58\u50a8\u5230 data-a \u548c data-b\nrethinkdb -d data-a -n svr_a\nrethinkdb -d data-b -n svr_b -o 100 -j 127.0.0.1\n")))}p.isMDXComponent=!0},766:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(i,".").concat(d)]||u[d]||m[d]||b;return n?a.a.createElement(O,l(l({ref:t},o),{},{components:n})):a.a.createElement(O,l({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,i=new Array(b);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);