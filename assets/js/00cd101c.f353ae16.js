"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49749],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,_=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(_,i(i({ref:t},c),{},{components:n})):a.createElement(_,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return _},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e};const p={title:"Citus"},m="Citus",_={unversionedId:"db/relational/postgresql/citus",id:"db/relational/postgresql/citus",title:"Citus",description:"Citus is not PostgreSQL",source:"@site/../notes/db/relational/postgresql/citus.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/citus",permalink:"/notes/db/relational/postgresql/citus",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/citus.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"Citus"},sidebar:"docs",previous:{title:"Citus Version",permalink:"/notes/db/relational/postgresql/citus-version"},next:{title:"cstore_fdw",permalink:"/notes/db/relational/postgresql/cstore_fdw"}},k={},N=[{value:"Tenant Demo",id:"tenant-demo",level:2},{value:"Notes",id:"notes",level:2},{value:"Cluster",id:"cluster",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5e7f\u64ad set \u4fe1\u606f",id:"\u5e7f\u64ad-set-\u4fe1\u606f",level:2},{value:"Docker",id:"docker",level:2},{value:"Kuberetes",id:"kuberetes",level:2},{value:"Citus MX",id:"citus-mx",level:2},{value:"\u9009\u62e9\u5206\u7247\u6570\u91cf",id:"\u9009\u62e9\u5206\u7247\u6570\u91cf",level:2},{value:"\u591a\u7528\u6237",id:"\u591a\u7528\u6237",level:2},{value:"\u591a\u6570\u636e\u5e93",id:"\u591a\u6570\u636e\u5e93",level:2},{value:"connection to the remote node failed with the following error: FATAL: &quot;trust&quot; authentication failed",id:"connection-to-the-remote-node-failed-with-the-following-error-fatal-trust-authentication-failed",level:2},{value:"\u8bbe\u7f6e\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u8bca\u65ad\u547d\u4ee4",id:"\u8bca\u65ad\u547d\u4ee4",level:2}],g={toc:N};function h(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"citus"}),"Citus"),(0,a.kt)("p",null,"Citus is not PostgreSQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus"}),"citusdata/citus"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AGPL-3.0, C"),(0,a.kt)("li",{parentName:"ul"},"\u88ab \u5fae\u8f6f \u6536\u8d2d"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d PG \u552f\u4e00\u7684\u6c34\u5e73\u6269\u5bb9\u65b9\u6848"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.citusdata.com/en/stable/get_started/what_is_citus.html#when-to-use-citus"}),"When to use"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Multi-Tenant Database"),(0,a.kt)("li",{parentName:"ul"},"Real-Time Analytics"))),(0,a.kt)("li",{parentName:"ul"},"Inappropriate",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Traditional data warehousing with long, free-form SQL"),(0,a.kt)("li",{parentName:"ul"},"Many distributed transactions across multiple shards"),(0,a.kt)("li",{parentName:"ul"},"Queries that return data-heavy ETL results rather than summaries"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.citusdata.com/blog/2019/01/24/microsoft-acquires-citus-data/"}),"Microsoft Acquires Citus Data"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://news.ycombinator.com/item?id=18990469"}),"HN")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.citusdata.com/blog/2021/03/13/scaling-out-postgres-with-citus-open-source-shard-rebalancer"}),"Scaling out Postgres with the Citus open source shard rebalancer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.citusdata.com/blog/2021/03/20/sharding-postgres-on-a-single-citus-node/"}),"Sharding Postgres on a single Citus node, how why & when"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"scale-out-ready"),(0,a.kt)("li",{parentName:"ul"},"query parallelization, multi-shard queries"),(0,a.kt)("li",{parentName:"ul"},"smaller indexes to create/maintain"),(0,a.kt)("li",{parentName:"ul"},"smaller tables to auto-vacuum (in parallel!), and"),(0,a.kt)("li",{parentName:"ul"},"faster bulk data loads"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.citusdata.com/en/stable/sharding/data_modeling.html#choosing-distribution-column"}),"Choosing Distribution Column")),(0,a.kt)("li",{parentName:"ul"},"pg_conftool ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/credativ/postgresql-common/blob/master/pg_conftool"}),"https://github.com/credativ/postgresql-common/blob/master/pg_conftool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.citusdata.com/blog/2016/12/18/schema-sharding-lessons/"}),"Lessons learned from Postgres schema sharding"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"db/tenant"),(0,a.kt)("li",{parentName:"ul"},"schema/tenant"),(0,a.kt)("li",{parentName:"ul"},"tenant_id/tenant - Scale \u552f\u4e00\u53ef\u884c\u7684\u65b9\u5f0f")))))),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f20\u64ad ",(0,a.kt)("inlineCode",{parentName:"li"},"SET"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"set_config"),", \u914d\u7f6e\u540e\u53ef\u4ee5\u4f20\u64ad ",(0,a.kt)("inlineCode",{parentName:"li"},"SET LOCAL"),", \u6ce8\u610f RLS \u5b9e\u73b0\u65b9\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528\u5e38\u91cf\u503c - \u53ef\u4ee5\u4f18\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 current_user \u5b9e\u73b0\u6ca1\u95ee\u9898 - \u6ce8\u610f authinfo \u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u540c\u6b65 ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus/issues/1327"}),"citus#1327")),(0,a.kt)("li",{parentName:"ul"},"session \u4fe1\u606f\u540c\u6b65 ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus/issues/462"}),"citus#462")))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f20\u64ad ",(0,a.kt)("inlineCode",{parentName:"li"},"search_path")),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u526f\u672c\u95ee\u9898\u9700\u8981\u81ea\u5df1\u5904\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728\u9ed8\u8ba4\u6570\u636e\u5e93 - postgres - \u6bcf\u4e2a\u6570\u636e\u5e93\u72ec\u7acb\uff0c\u65b0\u7684\u6570\u636e\u5e93\u9700\u8981\u91cd\u65b0\u7ef4\u62a4\u8282\u70b9\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus/issues/906"}),"#906")," \u4e0d\u652f\u6301 trigger"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus/issues/3854"}),"#3854")," \u4e0d\u652f\u6301 ARM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"\u5f00\u539f\u7248 rebalancer \u4f1a\u963b\u585e\uff0c\u5546\u4e1a\u7248\u4f7f\u7528 \u903b\u8f91\u670d\u590d\u5236\uff0c\u4e0d\u4f1a\u9501")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u529f\u80fd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ALTER SEQUENCE"),(0,a.kt)("li",{parentName:"ul"},"Correlated subqueries"),(0,a.kt)("li",{parentName:"ul"},"Recursive CTEs"),(0,a.kt)("li",{parentName:"ul"},"Table sample"),(0,a.kt)("li",{parentName:"ul"},"SELECT \u2026 FOR UPDATE"),(0,a.kt)("li",{parentName:"ul"},"Grouping sets"),(0,a.kt)("li",{parentName:"ul"},"Window Functions"),(0,a.kt)("li",{parentName:"ul"},"CTEs"),(0,a.kt)("li",{parentName:"ul"},"Set operations"),(0,a.kt)("li",{parentName:"ul"},"Transactional semantics for queries that span across multiple shards"),(0,a.kt)("li",{parentName:"ul"},"\u4e34\u65f6\u8868"))),(0,a.kt)("li",{parentName:"ul"},"Co-Location \u652f\u6301\u7684\u529f\u80fd\u66f4\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a \u4f20\u64ad \u7684\u5bf9\u8c61",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CREATE DATABASE"),(0,a.kt)("li",{parentName:"ul"},"ALTER \u2026 SET SCHEMA"),(0,a.kt)("li",{parentName:"ul"},"ALTER TABLE ALL IN TABLESPACE"),(0,a.kt)("li",{parentName:"ul"},"v11+ CREATE ROLE/USER, GRANT/REVOKE"))))),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"statement-based shard replication for scaling reads"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# macOS \u4e0a\u4e3a PostgresSQL \u52a0 citus \u6269\u5c55\n# brew install citus\n# echo \"shared_preload_libraries = 'citus'\" >> postgresql.conf\n\n# Docker \u5355\u8282\u70b9\ndocker run --rm -it \\\n  -p 5432:5432 \\\n  -e POSTGRES_PASSWORD=mypass \\\n  -v $PWD/data:/var/lib/postgresql/data \\\n  --name citus citusdata/citus:11-alpine\n")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM master_get_active_worker_nodes();\n\nSELECT version();\nSELECT citus_is_coordinator();\n\n-- \u5206\u7247\u8868\nSELECT create_distributed_table('orgs', 'id');\n-- \u5728\u6240\u6709\u8282\u70b9\u4e0a\u90fd\u5b58\u5728\nSELECT create_reference_table('geo_ips');\n-- \u53d6\u6d88 colocated - \u9ed8\u8ba4\u57fa\u4e8e \u5206\u5e03\u5217 \u7684\u503c\u8fdb\u884c colocated\nSELECT create_distributed_table('A', 'foo', colocate_with => 'none');\n-- \u53d6\u6d88\nSELECT undistribute_table('table_name');\n")),(0,a.kt)("h2",d({},{id:"tenant-demo"}),"Tenant Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"create table orgs\n(\n    id   bigserial primary key,\n    name text not null\n);\n\ncreate table users\n(\n    id     bigserial,\n    org_id bigint references orgs (id),\n    name   text not null,\n    primary key (org_id, id)\n);\n\ncreate table notes\n(\n    id      bigserial,\n    org_id  bigint,\n    user_id bigint,\n    title   text not null,\n    content text not null,\n    primary key (org_id, id),\n    foreign key (org_id, user_id)\n        references users (org_id, id)\n);\nSELECT create_distributed_table('orgs', 'id');\nSELECT create_distributed_table('users', 'org_id');\nSELECT create_distributed_table('notes', 'org_id');\n\n-- \u51c6\u5907\u6570\u636e\ninsert into orgs(name)\nselect 'org-' || num\nfrom generate_series(1, 100) num;\n\ninsert into users(org_id, name)\nselect coalesce(nullif(num % 100, 0), 10), 'user-' || num\nfrom generate_series(1, 10000) num;\n\ninsert into notes(org_id, user_id, title, content)\nselect coalesce(nullif(num % 100, 0), 10), coalesce(nullif(num % 10000, 0), 100), 'note-' || num, 'content-' || num\nfrom generate_series(1, 1000000) num;\n\n-- \u91cd\u65b0\u5e73\u8861\u5206\u7247\nSELECT rebalance_table_shards('notes');\n-- \u9694\u79bb\u79df\u6237\u5206\u7247 - \u8f93\u51fa\u65b0\u7684\u5206\u7247 ID\nSELECT isolate_tenant_to_new_shard('orgs', 5, 'CASCADE');\n\n-- \u67e5\u770b\u5206\u7247\u6240\u5904\u4f4d\u7f6e\nSELECT shardid, nodename, nodeport\nFROM pg_dist_placement AS placement,\n     pg_dist_node AS node\nWHERE placement.groupid = node.groupid\n  AND node.noderole = 'primary'\n--   AND shardid = 102105\nORDER BY shardid\n;\n\n-- \u79fb\u52a8\u5206\u7247\u4f4d\u7f6e\n-- SELECT citus_move_shard_placement(\n--                102240,\n--                'source_host', source_port,\n--                'dest_host', dest_port);\n\n")),(0,a.kt)("h2",d({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u8868/\u5206\u7247\u8868 - table -> table_1001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"create_distributed_table"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u5b58\u5728\u90e8\u5206\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5206\u5e03\u5217"),(0,a.kt)("li",{parentName:"ul"},"Co-Location \u5c3d\u91cf\u8ba9 join \u8868\u5728\u76f8\u540c\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECT create_distributed_table('page', 'tenant_id', colocate_with => 'event');")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"colocate_with => 'none'")," \u53d6\u6d88"))))),(0,a.kt)("li",{parentName:"ul"},"\u5f15\u7528\u8868",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"create_reference_table"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u6570\u636e\u76f8\u540c - \u6570\u636e\u91cf\u5c11\uff0c\u7528\u4e8e join"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 2PC"))),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u8868 - \u4e0d\u53d7 citus \u7ba1\u7406\u7684\u8868")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"table/view"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_shard"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8bb0\u5f55\u8868\u5206\u7247")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_placement"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8bb0\u5f55\u5206\u7247\u6240\u5904\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_node"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8bb0\u5f55\u8282\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_colocation"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_partition"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_authinfo"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u591a\u7528\u6237\u8282\u70b9\u8fde\u63a5\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"pg_dist_poolinfo"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5185\u90e8\u94fe\u63a5\u6c60")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u7247\u6570\u91cf - \u63a8\u8350 32 - 128",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"< 100GB \u63a8\u8350 32 \u5373\u53ef"))),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u548c\u5143\u6570\u636e\u7ba1\u7406\u914d\u7f6e - pg_dist_node",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"citus_add_node('name',5432,-1,'primary','default')",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u540d\u5b57\uff0c\u7aef\u53e3\uff0cgroupid\uff0cprimary/secondary\uff0c\u96c6\u7fa4\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u5728 pg_dist_node \u4e2d\u7684 ID"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5230 pg_dist_node"))),(0,a.kt)("li",{parentName:"ul"},"citus_update_node(node_id, node_name, node_port)"),(0,a.kt)("li",{parentName:"ul"},"citus_set_node_property(node_name, node_port, property, value)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"property - \u76ee\u524d\u53ea\u6709 shouldhaveshards"))),(0,a.kt)("li",{parentName:"ul"},"citus_add_inactive_node(node_name, node_port, group_id, node_role, node_cluster)"),(0,a.kt)("li",{parentName:"ul"},"citus_activate_node(node_name, node_port)"),(0,a.kt)("li",{parentName:"ul"},"citus_disable_node(node_name, node_port)"),(0,a.kt)("li",{parentName:"ul"},"citus_add_secondary_node(node_name, node_port, primary_name, primary_port, node_cluster)"),(0,a.kt)("li",{parentName:"ul"},"citus_remove_node(node_name, node_port)"),(0,a.kt)("li",{parentName:"ul"},"citus_get_active_worker_nodes()"))),(0,a.kt)("li",{parentName:"ul"},"citus_backend_gpid()",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GPID - global process identifier"))),(0,a.kt)("li",{parentName:"ul"},"citus_check_cluster_node_health()"),(0,a.kt)("li",{parentName:"ul"},"citus_set_coordinator_host(host,port=current_setting('port'),node_role='primary',node_cluster='default')",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e3a localhost \u5219\u662f\u5355\u8282\u70b9\u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5230 pg_dist_node"),(0,a.kt)("li",{parentName:"ul"},"groupid=0,shouldhaveshards=false"))),(0,a.kt)("li",{parentName:"ul"},"\u5206\u7247\u4fe1\u606f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"master_get_table_metadata(table_name)"),(0,a.kt)("li",{parentName:"ul"},"get_shard_id_for_distribution_column(table_name,distribution_value)"),(0,a.kt)("li",{parentName:"ul"},"column_to_column_name(table_name, column_var_text)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pg_dist_partition"))),(0,a.kt)("li",{parentName:"ul"},"citus_relation_size(logical_rel_id)"),(0,a.kt)("li",{parentName:"ul"},"citus_table_size(logical_rel_id)"),(0,a.kt)("li",{parentName:"ul"},"citus_total_relation_size(logical_rel_id)"),(0,a.kt)("li",{parentName:"ul"},"citus_stat_statements_reset()"))),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406\u548c\u4fee\u590d",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"citus_move_shard_placement"),(0,a.kt)("li",{parentName:"ul"},"rebalance_table_shards"),(0,a.kt)("li",{parentName:"ul"},"get_rebalance_table_shards_plan"),(0,a.kt)("li",{parentName:"ul"},"get_rebalance_progress"),(0,a.kt)("li",{parentName:"ul"},"citus_add_rebalance_strategy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pg_dist_rebalance_strategy"))),(0,a.kt)("li",{parentName:"ul"},"citus_set_default_rebalance_strategy"),(0,a.kt)("li",{parentName:"ul"},"citus_remote_connection_stats"),(0,a.kt)("li",{parentName:"ul"},"citus_drain_node"),(0,a.kt)("li",{parentName:"ul"},"isolate_tenant_to_new_shard"),(0,a.kt)("li",{parentName:"ul"},"citus_create_restore_point"))),(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\u67e5\u8be2 - \u53ea\u80fd\u5904\u7406\u8fd4\u56de\u5355\u884c,\u4e0d\u4fdd\u8bc1\u4e8b\u52a1\u548c\u4e00\u81f4\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run_command_on_workers($cmd$ show ssl $cmd$)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run_command_on_shards(table_name, $cmd$ $cmd$)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run_command_on_colocated_placements(var_a, var_b, $cmd$ $cmd$)")),(0,a.kt)("li",{parentName:"ul"},"run_command_on_coordinator"),(0,a.kt)("li",{parentName:"ul"},"run_command_on_all_nodes"),(0,a.kt)("li",{parentName:"ul"},"citus_is_coordinator"))),(0,a.kt)("li",{parentName:"ul"},"pg_dist_authinfo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"authinfo \u53ea\u5141\u8bb8 password,sslcert,sslkey - ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/citus/blob/57455dc64dba521514c3bd85b2aab7f3cb2eecf8/src/backend/distributed/metadata/metadata_cache.c#L5203-L5217"}),"authinfo_valid")),(0,a.kt)("li",{parentName:"ul"},"nodeid=0 \u5339\u914d\u6240\u6709"),(0,a.kt)("li",{parentName:"ul"},"nodeid=-1 \u4e3a loopback"))),(0,a.kt)("li",{parentName:"ul"},"pg_dist_poolinfo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"poolinfo \u53ea\u5141\u8bb8 dbname, hostm port")))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"-- \u5206\u7247\u6570\u91cf\nshow citus.shard_count;\n\n-- relation=table/index\n-- main fork - https://www.postgresql.org/docs/current/static/storage-file-layout.html\nselect citus_relation_size('orgs');\n-- citus_relation_size + free space map + visibility map\nselect citus_table_size('orgs');\n-- citus_table_size + indices\nselect citus_total_relation_size('orgs');\n")),(0,a.kt)("h2",d({},{id:"cluster"}),"Cluster"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"coordinator - \u8def\u7531\u63a5\u6536\u8bf7\u6c42 - \u5355\u8282\u70b9\u6216\u591a\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"worker - \u5b9e\u9645\u5904\u7406")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"-- coordinator\n-- \u8bbe\u7f6e worker \u5e94\u8be5\u600e\u4e48\u8fde\u63a5 coordinator\nSELECT citus_set_coordinator_host('coord.example.com', 5432);\n\n-- \u5355\u8282\u70b9\u53ea\u9700\u8981\u8bbe\u7f6e\u4e3a localhost\uff0c\u4e0d\u518d\u9700\u8981 add_node\nSELECT citus_set_coordinator_host('localhost', 5432);\n\n-- \u6dfb\u52a0\u8282\u70b9\nSELECT * from citus_add_node('worker-101', 5432);\nSELECT * from citus_add_node('worker-102', 5432);\n-- \u5220\u9664\u8282\u70b9\nSELECT * from citus_remove_node('worker-102', 5432);\n-- \u6dfb\u52a0\u5197\u4f59\u8282\u70b9\nselect * from citus_add_secondary_node('new-node', 12345, 'primary-node', 12345);\n-- \u6dfb\u52a0\u4e0d\u542f\u7528\nselect * from citus_add_inactive_node('new-node', 12345);\n-- \u6fc0\u6d3b\nselect * from citus_activate_node('new-node', 12345);\n\n-- \u6e05\u7a7a\u8282\u70b9 - \u79fb\u9664\u8282\u70b9\u51c6\u5907\nSELECT * from citus_drain_node('10.0.0.1', 5432);\n-- \u8bbe\u7f6e\u8282\u70b9\u65e0 \u5206\u7247\nSELECT * FROM citus_set_node_property('localhost', 5433, 'shouldhaveshards', false);\n-- \u91cd\u65b0\u5e73\u8861\nSELECT * FROM rebalance_table_shards(drain_only := true);\n\nSELECT * FROM citus_get_active_worker_nodes();\n-- \u5065\u5eb7\u68c0\u67e5\nSELECT * FROM citus_check_cluster_node_health();\n\n-- \u521b\u5efa\u6062\u590d\u70b9\nselect citus_create_restore_point('\u540d\u5b57');\n")),(0,a.kt)("h2",d({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ini"}),"; \u57fa\u7840\u914d\u7f6e\n; ==========\ncitus.max_worker_nodes_tracked=2048\ncitus.cluster_name=\n; always - \u603b\u662f\u8bfb secondary_node\ncitus.use_secondary_nodes=never\n\ncitus.log_distributed_deadlock_detection=false\n; -1 \u7981\u6b62\ncitus.distributed_deadlock_detection_factor=2\n\ncitus.node_connection_timeout=3000\n\n; citus.node_conninfo\n; \u81ea\u5df1\u8fde\u81ea\u5df1\u65f6\u4f7f\u7528\n; citus.local_hostname\n\ncitus.show_shards_for_app_name_prefixes=\n\n; \u67e5\u8be2\u7edf\u8ba1\n; ==========\n; \u5355\u4f4d \u79d2\ncitus.stat_statements_purge_interval=10\ncitus.stat_statements_max=50000\n; none\ncitus.stat_statements_track=all\n\n; Data Loading\n; ============\n; 1pc\ncitus.multi_shard_commit_protocol = 2pc\ncitus.shard_count = 32\ncitus.shard_max_size = 1GB\n\n; \u5728\u8282\u70b9\u6fc0\u6d3b\u65f6\u540c\u6b65 reference \u8868\n; \u8bbe\u7f6e\u4e3a off \u53ef\u589e\u52a0 add_node \u901f\u5ea6 - \u5728\u521b\u5efa shard \u65f6\u540c\u6b65\ncitus.replicate_reference_tables_on_activate = on\n\n; Planner\n; ============\ncitus.local_table_join_policy=auto\n; \u9650\u5236\u62c9\u53d6\u884c\u6570\ncitus.limit_clause_row_fetch_count=-1\ncitus.count_distinct_error_rate=\n; greedy, round-robin, first-replica\ncitus.task_assignment_policy=\n\n; Intermediate Data Transfer\n; ==========================\n; pg >= 14 = true\ncitus.binary_worker_copy_format =\n; \u9ed8\u8ba4 1GB, \u5355\u4f4d KB, -1 \u4e0d\u9650\u5236\ncitus.max_intermediate_result_size =\n\n; DDL\n; ==========================\ncitus.enable_ddl_propagation=true\n; coordinator \u5fc5\u987b\u901a\u8fc7 citus_add_node \u6ce8\u518c\u81ea\u5df1\ncitus.enable_local_reference_table_foreign_keys=true\n\n; \u6267\u884c\u914d\u7f6e\n; ==========================\ncitus.all_modifications_commutative=\n; off,debug,log,notice,warning,error\ncitus.multi_task_query_log_level=\n; local - \u5e7f\u64ad SET LOCAL\ncitus.propagate_set_commands=none\n; join \u975e\u5206\u5e03\u5217\ncitus.enable_repartition_joins=false\n; INSERT INTO \u2026 SELECT\ncitus.enable_repartitioned_insert_select=\ncitus.enable_binary_protocol = true\n; = max_connections\n; -1 \u7981\u7528\ncitus.max_shared_pool_size =\ncitus.max_adaptive_executor_pool_size = 16\n; \u5355\u4f4d ms\ncitus.executor_slow_start_interval = 10\ncitus.max_cached_conns_per_worker = 1\ncitus.force_max_query_parallelization =\n; Explain\n; ==========================\ncitus.explain_all_tasks=false\n; taskId\ncitus.explain_analyze_sort_method = execution-time\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.citusdata.com/en/v11.0/develop/api_guc.html"}),"https://docs.citusdata.com/en/v11.0/develop/api_guc.html"))),(0,a.kt)("h2",d({},{id:"\u5e7f\u64ad-set-\u4fe1\u606f"}),"\u5e7f\u64ad set \u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"set local citus.propagate_set_commands = 'local';\nset local app.tenant.id = 123;\n")),(0,a.kt)("h2",d({},{id:"docker"}),"Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/citusdata/docker"}),"citusdata/docker")),(0,a.kt)("li",{parentName:"ul"},"FROM postgres",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 citus \u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 001-create-citus-extension.sql \u5230 /docker-entrypoint-initdb.d/"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 /pg_healthcheck"),(0,a.kt)("li",{parentName:"ul"},"\u5165\u53e3\u540c\u4e0a\u6e38 ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/docker-library/postgres/blob/master/14/alpine/docker-entrypoint.sh"}),"14/alpine/docker-entrypoint.sh"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c postgres \u5219\u4f1a\u542f\u7528\u5f88\u591a\u9884\u5904\u7406\u903b\u8f91"))))),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f Alpine \u7248\u6ca1\u6709 wait-for-manager.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql",metastring:'title="001-create-citus-extension.sql"',title:'"001-create-citus-extension.sql"'}),"BEGIN;\nCREATE EXTENSION citus;\n-- add Docker flag to node metadata\nUPDATE pg_dist_node_metadata SET metadata=jsonb_insert(metadata, '{docker}', 'true');\nCOMMIT;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sh",metastring:'title="wait-for-manager.sh"',title:'"wait-for-manager.sh"'}),'#!/bin/bash\nset -e\n\nuntil test -f /healthcheck/manager-ready; do\n  echo >&2 "Manager is not ready - sleeping"\n  sleep 1\ndone\n\necho >&2 "Manager is up - starting worker"\n\n# exec gosu postgres "/usr/local/bin/docker-entrypoint.sh" "postgres"\n\n# AlpineLinux\nsu-exec postgres "/usr/local/bin/docker-entrypoint.sh" "postgres"\n')),(0,a.kt)("h2",d({},{id:"kuberetes"}),"Kuberetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/docteurklein/citus-test"}),"docteurklein/citus-test"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u8003")))),(0,a.kt)("h2",d({},{id:"citus-mx"}),"Citus MX"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hash-distributed tables from any node"),(0,a.kt)("li",{parentName:"ul"},"direct reading and writing from worker nodes"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6240\u6709\u547d\u4ee4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DDL commands."),(0,a.kt)("li",{parentName:"ul"},"Citus Utility Functions that change Citus metadata."),(0,a.kt)("li",{parentName:"ul"},"Queries accessing append distributed tables."))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 FDW"),(0,a.kt)("li",{parentName:"ul"},"seerial \u5217\u5fc5\u987b\u4e3a bigserial")),(0,a.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",d({},{id:"\u9009\u62e9\u5206\u7247\u6570\u91cf"}),"\u9009\u62e9\u5206\u7247\u6570\u91cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 32"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u79df\u6237\u573a\u666f\u63a8\u8350 32 - 128",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"< 100GB \u53ef\u4ee5\u4ece 32 \u5f00\u59cb"))),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u5206\u6790\u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e worker \u7684\u6838\u5fc3\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4fdd\u8bc1\u5b8c\u5168\u5e76\u884c\uff0c\u786e\u4fdd\u6bcf\u4e2a worker \u90fd\u6709\u8db3\u591f\u591a\u7684 shard"),(0,a.kt)("li",{parentName:"ul"},"2xCPU - 4xCPU - \u6dfb\u52a0\u65b0\u8282\u70b9\u4e5f\u80fd\u7ee7\u7eed\u5206\u6563\u7b97\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6ce8\u610f: \u6bcf\u4e2a\u67e5\u8be2\u7684 \u6bcf\u4e2a share \u90fd\u4f1a\u5f00\u542f\u4e00\u4e2a\u94fe\u63a5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u8fde\u63a5\u6570: (max concurrent queries ","*"," shard count)"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u603b\u6570: (number of workers ","*"," max_connections per worker)")))))),(0,a.kt)("h2",d({},{id:"\u591a\u7528\u6237"}),"\u591a\u7528\u6237"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728 pg_dist_authinfo \u914d\u7f6e\u7528\u6237\u8fde\u63a5\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"create role test with login password 'test';\ninsert into pg_dist_authinfo(nodeid, rolename, authinfo)\nvalues (0, 'test', 'password=test');\nset role test;\nselect * from test;\n")),(0,a.kt)("h2",d({},{id:"\u591a\u6570\u636e\u5e93"}),"\u591a\u6570\u636e\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"citus \u5de5\u4f5c\u5728\u9ed8\u8ba4\u6570\u636e\u5e93 postgres")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"SELECT run_command_on_workers($cmd$\n SELECT current_database() db;\n$cmd$);\n")),(0,a.kt)("p",null,"\u5728 coordinator \u4e0a create database \u4e0d\u4f1a\u4f20\u64ad\u5230 worker \u8282\u70b9"),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u65b0\u589e\u7684 \u6570\u636e\u5e93 \u90fd\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE EXTENSION citus")),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6570\u636e\u5e93\u8fd8\u9700\u8981\u989d\u5916\u7ef4\u62a4 \u8282\u70b9"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"-- \u5728\u6240\u6709 worker \u8282\u70b9\u6267\u884c\nSELECT run_command_on_workers($cmd$\n create database test;\n$cmd$);\n")),(0,a.kt)("h2",d({},{id:"connection-to-the-remote-node-failed-with-the-following-error-fatal-trust-authentication-failed"}),'connection to the remote node failed with the following error: FATAL: "trust" authentication failed'),(0,a.kt)("h2",d({},{id:"\u8bbe\u7f6e\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4"}),"\u8bbe\u7f6e\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"-- \u9ed8\u8ba4 5 \u5206\u949f\nALTER DATABASE citus\n  SET statement_timeout TO 300000;\nSELECT run_command_on_workers($cmd$\n  ALTER DATABASE citus\n    SET statement_timeout TO 300000;\n$cmd$);\n\n\n-- \u5355\u72ec\u4e8b\u52a1\u4fee\u6539\nBEGIN;\nSET LOCAL statement_timeout TO 300000;\n-- ...\nCOMMIT;\n")),(0,a.kt)("h2",d({},{id:"\u8bca\u65ad\u547d\u4ee4"}),"\u8bca\u65ad\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-sql"}),"-- \u79df\u6237\u6240\u5904\u5206\u7247\nSELECT shardid, shardstate, shardlength, nodename, nodeport, placementid\n  FROM pg_dist_placement AS placement,\n       pg_dist_node AS node\n WHERE placement.groupid = node.groupid\n   AND node.noderole = 'primary'\n   AND shardid = (\n     SELECT get_shard_id_for_distribution_column('stores', 4)\n   );\n\n-- \u8868\u7684\u5206\u5e03\u5217\nSELECT column_to_column_name(logicalrelid, partkey) AS dist_col_name\nFROM pg_dist_partition\nWHERE logicalrelid='products'::regclass;\n\n-- \u68c0\u6d4b \u9501\nSELECT * FROM citus_lock_waits;\n\n-- \u5206\u7247\u5927\u5c0f\nSELECT shardid, table_name, shard_size\nFROM citus_shards\nWHERE table_name = 'my_table';\n\n-- \u6240\u6709\u5206\u5e03\u5f0f\u8868\u7684\u5927\u5c0f\nSELECT table_name, table_size\nFROM citus_tables;\n\n\n-- \u5224\u65ad\u672a\u4f7f\u7528\u7684\u7d22\u5f15\nSELECT *\nFROM run_command_on_shards('my_distributed_table', $cmd$\n  SELECT array_agg(a) as infos\n  FROM (\n    SELECT (\n      schemaname || '.' || relname || '##' || indexrelname || '##'\n                 || pg_size_pretty(pg_relation_size(i.indexrelid))::text\n                 || '##' || idx_scan::text\n    ) AS a\n    FROM  pg_stat_user_indexes ui\n    JOIN  pg_index i\n    ON    ui.indexrelid = i.indexrelid\n    WHERE NOT indisunique\n    AND   idx_scan < 50\n    AND   pg_relation_size(relid) > 5 * 8192\n    AND   (schemaname || '.' || relname)::regclass = '%s'::regclass\n    ORDER BY\n      pg_relation_size(i.indexrelid) / NULLIF(idx_scan, 0) DESC nulls first,\n      pg_relation_size(i.indexrelid) DESC\n  ) sub\n$cmd$);\n\n-- \u5ba2\u6237\u7aef\u8fde\u63a5\u6570\nSELECT state, count(*)\nFROM pg_stat_activity\nGROUP BY state;\n\n-- \u7cfb\u7edf\u6d3b\u8dc3\u67e5\u8be2\nSELECT global_pid, query, state\nFROM citus_stat_activity\nWHERE state != 'idle';\n\n-- \u67e5\u8be2\u7b49\u5f85\u539f\u56e0\nSELECT wait_event || ':' || wait_event_type AS type, count(*) AS number_of_occurences\nFROM pg_stat_activity\nWHERE state != 'idle'\nGROUP BY wait_event, wait_event_type\nORDER BY number_of_occurences DESC;\n\n-- \u7d22\u5f15\u547d\u4e2d\u7387\n-- on coordinator\nSELECT 100 * (sum(idx_blks_hit) - sum(idx_blks_read)) / sum(idx_blks_hit) AS index_hit_rate\n  FROM pg_statio_user_indexes;\n\n-- on workers\nSELECT nodename, result as index_hit_rate\nFROM run_command_on_workers($cmd$\n  SELECT 100 * (sum(idx_blks_hit) - sum(idx_blks_read)) / sum(idx_blks_hit) AS index_hit_rate\n    FROM pg_statio_user_indexes;\n$cmd$);\n\n\n-- \u7f13\u5b58\u547d\u4e2d\u7387\n-- on coordinator\nSELECT\n  sum(heap_blks_read) AS heap_read,\n  sum(heap_blks_hit)  AS heap_hit,\n  100 * sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) AS cache_hit_rate\nFROM\n  pg_statio_user_tables;\n\n-- on workers\nSELECT nodename, result as cache_hit_rate\nFROM run_command_on_workers($cmd$\n  SELECT\n    100 * sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)) AS cache_hit_rate\n  FROM\n    pg_statio_user_tables;\n$cmd$);\n")))}h.isMDXComponent=!0}}]);