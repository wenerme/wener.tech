"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73832],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(k,l(l({ref:e},c),{},{components:a})):r.createElement(k,l({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24948:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],s={title:"Citus"},o=void 0,u={unversionedId:"db/relational/postgresql/citus",id:"db/relational/postgresql/citus",title:"Citus",description:"- citusdata/citus",source:"@site/notes/db/relational/postgresql/citus.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/citus",permalink:"/notes/db/relational/postgresql/citus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/citus.md",tags:[],version:"current",frontMatter:{title:"Citus"},sidebar:"docs",previous:{title:"PostgresSQL",permalink:"/notes/db/relational/postgresql/"},next:{title:"Citus Columnar",permalink:"/notes/db/relational/postgresql/citus_columnar"}},c={},p=[{value:"Citus MX",id:"citus-mx",level:2}],m={toc:p};function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus"},"citusdata/citus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AGPL-3.0"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d PG \u552f\u4e00\u7684\u6c34\u5e73\u6269\u5bb9\u65b9\u6848"))),(0,i.kt)("li",{parentName:"ul"},"\u8de8\u8282\u70b9\u4e0d\u652f\u6301",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Window Functions"),(0,i.kt)("li",{parentName:"ul"},"CTEs"),(0,i.kt)("li",{parentName:"ul"},"Set operations"),(0,i.kt)("li",{parentName:"ul"},"Transactional semantics for queries that span across multiple shards"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.citusdata.com/en/stable/get_started/what_is_citus.html#when-to-use-citus"},"When to use"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Multi-Tenant Database"),(0,i.kt)("li",{parentName:"ul"},"Real-Time Analytics"))),(0,i.kt)("li",{parentName:"ul"},"Inappropriate",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Traditional data warehousing with long, free-form SQL"),(0,i.kt)("li",{parentName:"ul"},"Many distributed transactions across multiple shards"),(0,i.kt)("li",{parentName:"ul"},"Queries that return data-heavy ETL results rather than summaries"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2019/01/24/microsoft-acquires-citus-data/"},"Microsoft Acquires Citus Data"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=18990469"},"HN")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2021/03/13/scaling-out-postgres-with-citus-open-source-shard-rebalancer"},"Scaling out Postgres with the Citus open source shard rebalancer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citusdata.com/blog/2021/03/20/sharding-postgres-on-a-single-citus-node/"},"Sharding Postgres on a single Citus node, how why & when"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"scale-out-ready"),(0,i.kt)("li",{parentName:"ul"},"query parallelization, multi-shard queries"),(0,i.kt)("li",{parentName:"ul"},"smaller indexes to create/maintain"),(0,i.kt)("li",{parentName:"ul"},"smaller tables to auto-vacuum (in parallel!), and"),(0,i.kt)("li",{parentName:"ul"},"faster bulk data loads"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.citusdata.com/en/stable/sharding/data_modeling.html#choosing-distribution-column"},"Choosing Distribution Column"))))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5f00\u539f\u7248 rebalancer \u4f1a\u963b\u585e\uff0c\u5546\u4e1a\u7248\u4f7f\u7528 \u903b\u8f91\u670d\u590d\u5236\uff0c\u4e0d\u4f1a\u9501"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus/issues/906"},"#906")," \u4e0d\u652f\u6301 trigger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/citusdata/citus/issues/3854"},"#3854")," \u4e0d\u652f\u6301 ARM")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS \u4e0a\u4f7f\u7528\nbrew install citus\n\necho \"shared_preload_libraries = 'citus'\" >> postgresql.conf\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM master_get_active_worker_nodes();\n")),(0,i.kt)("h2",{id:"citus-mx"},"Citus MX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hash-distributed tables from any node"),(0,i.kt)("li",{parentName:"ul"},"direct reading and writing from worker nodes"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6240\u6709\u547d\u4ee4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DDL commands."),(0,i.kt)("li",{parentName:"ul"},"Citus Utility Functions that change Citus metadata."),(0,i.kt)("li",{parentName:"ul"},"Queries accessing append distributed tables."))),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 FDW"),(0,i.kt)("li",{parentName:"ul"},"seerial \u5217\u5fc5\u987b\u4e3a bigserial")))}d.isMDXComponent=!0}}]);