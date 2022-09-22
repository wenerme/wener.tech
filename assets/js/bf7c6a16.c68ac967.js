"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20779],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"SQLite FAQ",tags:["FAQ"]},s="SQLite FAQ",u={unversionedId:"db/relational/sqlite-faq",id:"db/relational/sqlite-faq",title:"SQLite FAQ",description:"attempt to write a readonly database",source:"@site/../notes/db/relational/sqlite-faq.md",sourceDirName:"db/relational",slug:"/db/relational/sqlite-faq",permalink:"/notes/db/relational/sqlite-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/sqlite-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"SQLite FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"sqlar",permalink:"/notes/db/relational/sqlar"},next:{title:"SQLite",permalink:"/notes/db/relational/sqlite"}},p={},c=[{value:"attempt to write a readonly database",id:"attempt-to-write-a-readonly-database",level:2},{value:"\u5220\u9664\u4e0d\u652f\u6301 WHERE \u548c ORDER",id:"\u5220\u9664\u4e0d\u652f\u6301-where-\u548c-order",level:2},{value:"Golang database is locked (5) (SQLITE_BUSY)",id:"golang-database-is-locked-5-sqlite_busy",level:2},{value:"sqlite \u4fee\u590d",id:"sqlite-\u4fee\u590d",level:2},{value:"35% faster than fs",id:"35-faster-than-fs",level:2},{value:"BLOB or Hex TEXT",id:"blob-or-hex-text",level:2},{value:"cannot drop UNIQUE column",id:"cannot-drop-unique-column",level:2},{value:"count slow",id:"count-slow",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sqlite-faq"},"SQLite FAQ"),(0,l.kt)("h2",{id:"attempt-to-write-a-readonly-database"},"attempt to write a readonly database"),(0,l.kt)("p",null,"\u53ef\u80fd\u662f\u6743\u9650\u4e0d\u8db3"),(0,l.kt)("h2",{id:"\u5220\u9664\u4e0d\u652f\u6301-where-\u548c-order"},"\u5220\u9664\u4e0d\u652f\u6301 WHERE \u548c ORDER"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ece\u6e90\u7801\u7f16\u8bd1 ",(0,l.kt)("a",{parentName:"li",href:"https://www.sqlite.org/compile.html#enable_update_delete_limit"},"SQLITE_ENABLE_UPDATE_DELETE_LIMIT"))),(0,l.kt)("h2",{id:"golang-database-is-locked-5-sqlite_busy"},"Golang database is locked (5) (SQLITE_BUSY)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"db.SetMaxOpenConns(1)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4e0d\u540c\u8868\u5e76\u884c\u64cd\u4f5c\uff0c\u8003\u8651\u4f7f\u7528\u591a\u4e2a sqlite \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mattn/go-sqlite3/issues/274#issuecomment-191597862"},"https://github.com/mattn/go-sqlite3/issues/274#issuecomment-191597862"))),(0,l.kt)("h2",{id:"sqlite-\u4fee\u590d"},"sqlite \u4fee\u590d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo ".dump" | sqlite old.db | sqlite new.db\n')),(0,l.kt)("h2",{id:"35-faster-than-fs"},"35% faster than fs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"read",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"avg 10KB"))),(0,l.kt)("li",{parentName:"ul"},"write",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wal"),(0,l.kt)("li",{parentName:"ul"},"synchronous=NORMAL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.sqlite.org/fasterthanfs.html"},"https://www.sqlite.org/fasterthanfs.html"))),(0,l.kt)("h2",{id:"blob-or-hex-text"},"BLOB or Hex TEXT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BLOB - \u5b58\u50a8\u66f4\u5c11\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8c03\u8bd5\u4e0d\u65b9\u4fbf"))),(0,l.kt)("li",{parentName:"ul"},"Hex TEXT - \u5b58\u50a8\u66f4\u591a\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a IO\uff0c\u66f4\u6162"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8c03\u8bd5\u53cb\u597d")))),(0,l.kt)("h2",{id:"cannot-drop-unique-column"},"cannot drop UNIQUE column"),(0,l.kt)("p",null,"SQLite \u4e0d\u652f\u6301 drop unique \u5217\uff0c\u53ea\u6709\u5c1d\u8bd5 rename \u8868\uff0c\u5efa\u7acb\u65b0\u8868\u89e3\u51b3\u3002"),(0,l.kt)("h2",{id:"count-slow"},"count slow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5982\u679c\u6ca1\u8fdb\u884c\u8fc7\u5220\u9664\uff0c\u90a3 max(rowid)=count\nselect max(rowid) from tab;\n-- \u907f\u514d count(*) - expain \u4f1a\u53d1\u73b0\u6267\u884c\u903b\u8f91\u4e0d\u540c\nselect count(rowid) from tab;\n")))}m.isMDXComponent=!0}}]);