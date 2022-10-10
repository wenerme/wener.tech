"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21538],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,d=f["".concat(o,".").concat(m)]||f[m]||u[m]||l;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8705:function(e,t,r){r.r(t),r.d(t,{assets:function(){return q},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};const f={title:"sqlar"},m="sqlar",d={unversionedId:"db/relational/sqlar",id:"db/relational/sqlar",title:"sqlar",description:"- sqlar - \u81ea 2014 \u5e74 3.22.0 \u7248\u672c",source:"@site/../notes/db/relational/sqlar.md",sourceDirName:"db/relational",slug:"/db/relational/sqlar",permalink:"/notes/db/relational/sqlar",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/sqlar.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628355009,formattedLastUpdatedAt:"Aug 7, 2021",frontMatter:{title:"sqlar"},sidebar:"docs",previous:{title:"zedstore",permalink:"/notes/db/relational/postgresql/zedstore"},next:{title:"SQLite FAQ",permalink:"/notes/db/relational/sqlite-faq"}},q={},b=[{value:"sqlarfs",id:"sqlarfs",level:2}],g={toc:b};function w(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),p),l(t,s({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"sqlar"}),"sqlar"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.sqlite.org/sqlar.html"}),"sqlar")," - \u81ea 2014 \u5e74 3.22.0 \u7248\u672c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://www.sqlite.org/src/tarball/sqlite.tar.gz?t=version-3.31.1"}),"https://www.sqlite.org/src/tarball/sqlite.tar.gz?t=version-3.31.1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://sqlite.org/sqlar/doc/trunk/README.md"}),"sqlar")," \u72ec\u7acb\u7a0b\u5e8f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sqlarfs \u652f\u6301\u6302\u8f7d\u4e3a fuse - \u53ea\u8bfb"),(0,a.kt)("li",{parentName:"ul"},"2018-01-07 ",(0,a.kt)("a",u({parentName:"li"},{href:"https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f"}),"https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f"))))),(0,a.kt)("admonition",u({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u5f55 data \u4e3a null, sz=0"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"length(sqlar.blob) < sqlar.sz")," \u90a3\u4e48\u6570\u636e\u5219\u662f\u538b\u7f29\u8fc7"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"length(sqlar.blob) == sqlar.sz")," \u90a3\u4e48\u6570\u636e\u5219\u662f\u6ca1\u538b\u7f29\u8fc7\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u7b26\u53f7\u8fde\u63a5 ",(0,a.kt)("inlineCode",{parentName:"li"},"sz = -1"),", \u8fde\u63a5\u76ee\u6807\u4f7f\u7528\u660e\u6587\u5b58\u50a8\u5728 data"),(0,a.kt)("li",{parentName:"ul"},"\u538b\u7f29\u4f7f\u7528 deflate - \u5305\u542b\u5934 ",(0,a.kt)("inlineCode",{parentName:"li"},"789c")," \u548c\u7ed3\u5c3e 4 \u5b57\u8282\u7684 checksum"))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"-- \u521b\u5efa sqlar \u4f7f\u7528\u7684\u8868\nCREATE TABLE sqlar(\n  name TEXT PRIMARY KEY,  -- name of the file\n  mode INT,               -- access permissions\n  mtime INT,              -- last modification time\n  sz INT,                 -- original file size\n  data BLOB               -- compressed content\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u521b\u5efa\nsqlite3 alltxt.sqlar -Ac *.txt\n# \u66f4\u65b0\nsqlite3 example.sqlar -Au *.md\n# \u663e\u793a\u6587\u4ef6\nsqlite3 example.sqlar -Atv\n# \u63d0\u53d6\nsqlite3 example.sqlar -Ax\n\n# -A \u7b49\u540c\u4e8e .ar\nsqlite3 my.sqlar -Acv file1 file2 file3\nsqlite3 my.sqlar ".ar -cv file1 file2 file3"\n\n# \u7c7b\u4f3c\u4e8e -Atv\nsqlite3 my.sqlar "select name,mode,sz,mtime from sqlar"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"-- \u6587\u4ef6 33188 = 0100644\n-- \u76ee\u5f55 16877 = 040755\n\n-- \u7edf\u4e00\u4fee\u6539 mode\n-- \u6587\u4ef6\nupdate sqlar set mode=33188 where data is not null;\n-- \u76ee\u5f55\nupdate sqlar set mode=16877 where data is null;\n")),(0,a.kt)("h2",u({},{id:"sqlarfs"}),"sqlarfs"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 archive\ncurl https://www.sqlite.org/sqlar/tarball/sqlar.tar.gz?c=4824e7389653a46f -o sqlar-v20180107.tar.gz\n\n# \u6216\u8005\u5355\u6587\u4ef6\ncurl https://sqlite.org/sqlar/raw/sqlar.c?name=bbef7d188353c00bd2144b1d37e64991a62ef062 -o sqlar.c\ncurl https://sqlite.org/sqlar/raw/sqlarfs.c?name=b624195c04067a762ecf16693592d0a263140c63 -o sqlarfs.c\n\n# \u4f9d\u8d56 - \u5982\u679c\u4f7f\u7528\u5d4c\u5165\u7684 sqlite3.c \u5219\u4e0d\u9700\u8981 sqlite-dev\napk add zlib-dev fuse-dev sqlite-dev\n\n# \u7f16\u8bd1\ngcc sqlarfs.c -D_FILE_OFFSET_BITS=64 -lsqlite3 -lfuse -lz -o sqlarfs\ngcc sqlar.c -D_FILE_OFFSET_BITS=64 -lsqlite3 -lz -o sqlar\n")))}w.isMDXComponent=!0}}]);