"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17983],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"SQLite FAQ",tags:["FAQ"]},u=void 0,s={unversionedId:"db/relational/sqlite-faq",id:"db/relational/sqlite-faq",title:"SQLite FAQ",description:"attempt to write a readonly database",source:"@site/notes/db/relational/sqlite-faq.md",sourceDirName:"db/relational",slug:"/db/relational/sqlite-faq",permalink:"/notes/db/relational/sqlite-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/sqlite-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"SQLite FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"sqlar",permalink:"/notes/db/relational/sqlar"},next:{title:"SQLite",permalink:"/notes/db/relational/sqlite"}},c={},p=[{value:"attempt to write a readonly database",id:"attempt-to-write-a-readonly-database",level:2},{value:"\u5220\u9664\u4e0d\u652f\u6301 WHERE \u548c ORDER",id:"\u5220\u9664\u4e0d\u652f\u6301-where-\u548c-order",level:2},{value:"Golang database is locked (5) (SQLITE_BUSY)",id:"golang-database-is-locked-5-sqlite_busy",level:2},{value:"sqlite \u4fee\u590d",id:"sqlite-\u4fee\u590d",level:2},{value:"35% faster than fs",id:"35-faster-than-fs",level:2},{value:"BLOB or Hex TEXT",id:"blob-or-hex-text",level:2},{value:"cannot drop UNIQUE column",id:"cannot-drop-unique-column",level:2},{value:"count slow",id:"count-slow",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"attempt-to-write-a-readonly-database"},"attempt to write a readonly database"),(0,l.kt)("p",null,"\u53ef\u80fd\u662f\u6743\u9650\u4e0d\u8db3"),(0,l.kt)("h2",{id:"\u5220\u9664\u4e0d\u652f\u6301-where-\u548c-order"},"\u5220\u9664\u4e0d\u652f\u6301 WHERE \u548c ORDER"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u4ece\u6e90\u7801\u7f16\u8bd1 ",(0,l.kt)("a",{parentName:"li",href:"https://www.sqlite.org/compile.html#enable_update_delete_limit"},"SQLITE_ENABLE_UPDATE_DELETE_LIMIT"))),(0,l.kt)("h2",{id:"golang-database-is-locked-5-sqlite_busy"},"Golang database is locked (5) (SQLITE_BUSY)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"db.SetMaxOpenConns(1)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u4e0d\u540c\u8868\u5e76\u884c\u64cd\u4f5c\uff0c\u8003\u8651\u4f7f\u7528\u591a\u4e2a sqlite \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mattn/go-sqlite3/issues/274#issuecomment-191597862"},"https://github.com/mattn/go-sqlite3/issues/274#issuecomment-191597862"))),(0,l.kt)("h2",{id:"sqlite-\u4fee\u590d"},"sqlite \u4fee\u590d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo ".dump" | sqlite old.db | sqlite new.db\n')),(0,l.kt)("h2",{id:"35-faster-than-fs"},"35% faster than fs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"read",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"avg 10KB"))),(0,l.kt)("li",{parentName:"ul"},"write",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wal"),(0,l.kt)("li",{parentName:"ul"},"synchronous=NORMAL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.sqlite.org/fasterthanfs.html"},"https://www.sqlite.org/fasterthanfs.html"))),(0,l.kt)("h2",{id:"blob-or-hex-text"},"BLOB or Hex TEXT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BLOB - \u5b58\u50a8\u66f4\u5c11\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8c03\u8bd5\u4e0d\u65b9\u4fbf"))),(0,l.kt)("li",{parentName:"ul"},"Hex TEXT - \u5b58\u50a8\u66f4\u591a\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a IO\uff0c\u66f4\u6162"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8c03\u8bd5\u53cb\u597d")))),(0,l.kt)("h2",{id:"cannot-drop-unique-column"},"cannot drop UNIQUE column"),(0,l.kt)("p",null,"SQLite \u4e0d\u652f\u6301 drop unique \u5217\uff0c\u53ea\u6709\u5c1d\u8bd5 rename \u8868\uff0c\u5efa\u7acb\u65b0\u8868\u89e3\u51b3\u3002"),(0,l.kt)("h2",{id:"count-slow"},"count slow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5982\u679c\u6ca1\u8fdb\u884c\u8fc7\u5220\u9664\uff0c\u90a3 max(rowid)=count\nselect max(rowid) from tab;\n-- \u907f\u514d count(*) - expain \u4f1a\u53d1\u73b0\u6267\u884c\u903b\u8f91\u4e0d\u540c\nselect count(rowid) from tab;\n")))}m.isMDXComponent=!0}}]);