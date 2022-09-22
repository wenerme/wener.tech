"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59826],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12007:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={title:"PostgreSQL \u94fe\u63a5\u6c60"},f="PostgreSQL \u94fe\u63a5\u6c60",g={unversionedId:"db/relational/postgresql/postgresql-pool",id:"db/relational/postgresql/postgresql-pool",title:"PostgreSQL \u94fe\u63a5\u6c60",description:"- \u6bcf\u4e2a\u94fe\u63a5\u4e00\u4e2a\u8fdb\u7a0b",source:"@site/../notes/db/relational/postgresql/postgresql-pool.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-pool",permalink:"/notes/db/relational/postgresql/postgresql-pool",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-pool.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{title:"PostgreSQL \u94fe\u63a5\u6c60"},sidebar:"docs",previous:{title:"PL/pgSQL",permalink:"/notes/db/relational/postgresql/postgresql-plpgsql"},next:{title:"PostgreSQL Replicate",permalink:"/notes/db/relational/postgresql/postgresql-replication"}},b={},d=[],k={toc:d};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"postgresql-\u94fe\u63a5\u6c60"}),"PostgreSQL \u94fe\u63a5\u6c60"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u94fe\u63a5\u4e00\u4e2a\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u6700\u5927\u94fe\u63a5\u6570 max_connections"),(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u7a0b\u5185\u5b58\u5206\u4e3a - \u9ed8\u8ba4\u6bcf\u4e2a\u94fe\u63a5 10M \u5de6\u53f3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"work_mem - \u9ed8\u8ba4 4M",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ORDER BY, DISTINCT, JOIN"))),(0,n.kt)("li",{parentName:"ul"},"maintenance_work_mem",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"autovacuum_work_mem"),(0,n.kt)("li",{parentName:"ul"},"VACUUM"))),(0,n.kt)("li",{parentName:"ul"},"temp_buffers - \u9ed8\u8ba4 8M",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868"))))),(0,n.kt)("li",{parentName:"ul"},"\u5171\u4eab\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"shared_buffers"),(0,n.kt)("li",{parentName:"ul"},"wal_buffers"),(0,n.kt)("li",{parentName:"ul"},"Commit Log"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://severalnines.com/database-blog/what-check-if-postgresql-memory-utilization-high"}),"What to Check if PostgreSQL Memory Utilization is High")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.citusdata.com/blog/2017/05/10/scaling-connections-in-postgres"}),"Scaling Connections in Postgres")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pgtune.leopard.in.ua/"}),"https://pgtune.leopard.in.ua/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://gist.github.com/rgreenjr/3637525"}),"https://gist.github.com/rgreenjr/3637525"))))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"select * from pg_stat_activity;\nselect * FROM pg_stat_activity where state <> 'idle';\n\nshow max_connections;\n\nshow work_mem;\nshow autovacuum_work_mem;\nshow maintenance_work_mem;\nshow temp_buffers;\nshow shared_buffers;\nshow wal_buffers;\n")))}y.isMDXComponent=!0}}]);