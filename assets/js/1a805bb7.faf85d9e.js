"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24559],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],i={title:"pgloader"},p=void 0,s={unversionedId:"db/relational/postgresql/pgloader",id:"db/relational/postgresql/pgloader",title:"pgloader",description:"- dimitri/pgloader",source:"@site/notes/db/relational/postgresql/pgloader.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgloader",permalink:"/notes/db/relational/postgresql/pgloader",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/pgloader.md",tags:[],version:"current",frontMatter:{title:"pgloader"},sidebar:"docs",previous:{title:"PgBouncer",permalink:"/notes/db/relational/postgresql/pgbouncer"},next:{title:"pgroonga",permalink:"/notes/db/relational/postgresql/pgroonga"}},u={},c=[{value:"10 fell through ECASE expression. Wanted one of (0 2 3 4 5 6 7 8).",id:"10-fell-through-ecase-expression-wanted-one-of-0-2-3-4-5-6-7-8",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dimitri/pgloader"},"dimitri/pgloader"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL, SQLite, MS SQL Server, CSV, HTTP, Archive, PostgreSQL to PostgreSQL, Citus"),(0,l.kt)("li",{parentName:"ul"},"MySQL to PostgreSQL Continuous Migration"),(0,l.kt)("li",{parentName:"ul"},"COPY streaming"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"postgresql://[user[:password]@][netloc][:port][/dbname][?option=value&...]")),(0,l.kt)("li",{parentName:"ul"},"sqlite",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FROM - url, file, .zip"),(0,l.kt)("li",{parentName:"ul"},"WITH",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"include drop"),(0,l.kt)("li",{parentName:"ul"},"include no drop"),(0,l.kt)("li",{parentName:"ul"},"truncate"),(0,l.kt)("li",{parentName:"ul"},"no truncate"),(0,l.kt)("li",{parentName:"ul"},"disable triggers"),(0,l.kt)("li",{parentName:"ul"},"create ","[no]"," indexes/tables"),(0,l.kt)("li",{parentName:"ul"},"drop indexes"),(0,l.kt)("li",{parentName:"ul"},"reset ","[no]"," sequences"),(0,l.kt)("li",{parentName:"ul"},"schema only"),(0,l.kt)("li",{parentName:"ul"},"data only"),(0,l.kt)("li",{parentName:"ul"},"encoding = UTF-8"))),(0,l.kt)("li",{parentName:"ul"},"including only table names like 'invoice%'"),(0,l.kt)("li",{parentName:"ul"},"excluding table names like 'appointments'")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it --name pgloader dimitri/pgloader:latest pgloader --version\n\npgloader --context ./sqlite.ini ./sqlite.load\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:'title="sqlite.load"',title:'"sqlite.load"'},"load database\n  from '{{DBPATH}}'\n  into postgresql:///pgloader;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="sqlite.ini"',title:'"sqlite.ini"'},"[pgloader]\nDBPATH = sqlite/sqlite.db\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"load database\n   from mysql://user@host/dbname\n   into pgsql://user@host/dbname\n  with create no schema\n  alter schema 'dbname' rename to 'public';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"load database\n     from sqlite:///data/tags.db\n     into postgresql:///tags\n\n with include drop, create tables, create indexes, reset sequences\n\n  set work_mem to '16MB', maintenance_work_mem to '512 MB';\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"10-fell-through-ecase-expression-wanted-one-of-0-2-3-4-5-6-7-8"},"10 fell through ECASE expression. Wanted one of (0 2 3 4 5 6 7 8)."),(0,l.kt)("p",null,"\u4e0d\u652f\u6301\u65b0\u7248 14+ \u7684\u9ed8\u8ba4 auth \u903b\u8f91"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pg_hba.conf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scram-sha-256 -> md5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dimitri/pgloader/issues/1207"},"https://github.com/dimitri/pgloader/issues/1207"))))}d.isMDXComponent=!0}}]);