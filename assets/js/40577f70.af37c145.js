"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52231],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59725:function(t,e,n){n.r(e),n.d(e,{assets:function(){return _},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&p(t,n,e[n]);if(s)for(var n of s(e))u.call(e,n)&&p(t,n,e[n]);return t};const d={tags:["Version"]},m="Citus Version",k={unversionedId:"db/relational/postgresql/citus-version",id:"db/relational/postgresql/citus-version",title:"Citus Version",description:"| version                 | date       |",source:"@site/../notes/db/relational/postgresql/citus-version.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/citus-version",permalink:"/notes/db/relational/postgresql/citus-version",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/citus-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{tags:["Version"]},sidebar:"docs",previous:{title:"Citus Columnar",permalink:"/notes/db/relational/postgresql/citus-columnar"},next:{title:"Citus",permalink:"/notes/db/relational/postgresql/citus"}},_={},N=[{value:"Citus v11",id:"citus-v11",level:2},{value:"Citus v10",id:"citus-v10",level:2}],b={toc:N};function f(t){var e,n=t,{components:r}=n,p=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&s)for(var a of s(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=c(c({},b),p),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"citus-version"}),"Citus Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"version"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"#citus-v11"}),"Citus v11")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2022-06-15")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("a",c({parentName:"td"},{href:"#citus-v10"}),"Citus v10")),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"2021-02-16")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.citusdata.com/updates/"}),"https://www.citusdata.com/updates/"))),(0,a.kt)("h2",c({},{id:"citus-v11"}),"Citus v11"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u6240\u6709\u4f01\u4e1a\u7248\u529f\u80fd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Citus v10 \u5f00\u6e90\u4e86\u5206\u7247\u5e73\u8861"),(0,a.kt)("li",{parentName:"ul"},"Citus v11 \u5f00\u6e90\u4e86\u6240\u6709\u5269\u4e0b\u7684\u4f01\u4e1a\u7248\u529f\u80fd"))),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u903b\u8f91\u590d\u5236\u7684 Rebalance - \u4e0d\u963b\u585e\u5199"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5b8c\u5584\u7684\u5143\u6570\u636e\u540c\u6b65 - \u591a\u7528\u6237\u3001RLS - \u96c6\u7fa4\u89d2\u8272\u3001\u6388\u6743",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u8fde\u4efb\u610f\u8282\u70b9\uff0c\u4e0d\u518d\u9700\u8981\u8fde coordinator",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9690\u85cf\u5206\u7247\u8868 - \u907f\u514d\u770b\u8d77\u6765\u5f88\u4e71",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u9488\u5bf9\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"li"},"SET citus.show_shards_for_app_name_prefixes TO 'psql';")),(0,a.kt)("li",{parentName:"ul"},"\u5168\u90e8\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"li"},"SET citus.override_table_visibility TO off;")))))))),(0,a.kt)("li",{parentName:"ul"},"\u79df\u6237\u9694\u79bb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u79df\u6237\u7684 citus_stat_statements"))),(0,a.kt)("li",{parentName:"ul"},"\u7ec6\u7c92\u5ea6\u63a7\u5236\u8282\u70b9\u95f4\u6388\u6743",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pg_dist_authinfo"),(0,a.kt)("li",{parentName:"ul"},"citus.node_conninfo \u652f\u6301 sslkey,sslcert"))),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u94fe\u63a5\u8d70\u5185\u90e8\u94fe\u63a5\u6c60\u8def\u7531",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pg_dist_poolinfo"))),(0,a.kt)("li",{parentName:"ul"},"COPY \u907f\u514d\u6821\u9a8c JSON/JSONB - \u63d0\u9ad8\u6570\u636e\u52a0\u8f7d\u6027\u80fd - \u4e4b\u524d\u4f1a\u5bfc\u81f4\u4e24\u6b21\u6821\u9a8c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"li"},"SET citus.skip_jsonb_validation_in_copy TO off;")))),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4fe1\u606f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"citus_check_cluster_node_health()"),(0,a.kt)("li",{parentName:"ul"},"citus_backend_gpid() - gpid -> global_pid - \u5168\u5c40\u8bc6\u522b\u6bcf\u4e2a\u4f1a\u8bdd"),(0,a.kt)("li",{parentName:"ul"},"citus_stat_activity"),(0,a.kt)("li",{parentName:"ul"},"citus_dist_stat_activity"),(0,a.kt)("li",{parentName:"ul"},"citus_lock_waits"),(0,a.kt)("li",{parentName:"ul"},"pg_cancel_backend() \u548c pg_terminate_backend() \u652f\u6301 gpid"))),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e helper",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"run_command_on_coordinator"),(0,a.kt)("li",{parentName:"ul"},"run_command_on_all_nodes"),(0,a.kt)("li",{parentName:"ul"},"citus_is_coordinator"))),(0,a.kt)("li",{parentName:"ul"},"Preview",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Triggers on distributed tables",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SET citus.enable_unsafe_triggers TO on;"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-sql"}),"-- \u5347\u7ea7\nALTER EXTENSION citus\nUPDATE\n;\n\nCALL citus_finish_citus_upgrade();\n\n-- \u591a\u7528\u6237\n-- =======\n-- ALTER|CREATE|DROP ROLE \u4f1a \u540c\u6b65/\u5e7f\u64ad \u5230\u5176\u4ed6\u8282\u70b9\n-- GRANT/REVOKE \u4e5f\u4f1a \u540c\u6b65 \u5230\u5176\u4ed6\u8282\u70b9\n-- \u914d\u7f6e citus.enable_alter_database_owner \u540c\u6b65\u4fee\u6539 db owner - ALTER DATABASE \u2026 OWNER TO\nCREATE ROLE create_role_test CREATEDB CREATEROLE LOGIN REPLICATION CONNECTION\nLIMIT\n  105 PASSWORD 'type_your_passwd' VALID UNTIL '2045-05-05 00:00:00.00+00';\n\n-- \u56e0\u4e3a\u7528\u6237\u548c\u6743\u9650\u90fd\u540c\u6b65\u4e86\uff0c\u6240\u4ee5 RLS \u4e5f\u80fd\u751f\u6548\nCREATE POLICY user_mod ON events FOR\nSELECT\n  TO rls_tenant_1 USING (current_user = 'rls_tenant_' | | tenant_id:: text);\n\n-- \u91cd\u65b0\u5e73\u8861\n-- =======\nSELECT\n  rebalance_table_shards();\n\n-- \u5355\u4e2a\u8868\nSELECT\n  rebalance_table_shards('users');\n\n-- \u6ca1\u6709 pk \u6216 replica identity,\n-- \u9002\u7528\u4e8e\u6ca1\u6709\u66f4\u65b0\u548c\u5220\u9664\u7684\u8868 - \u8fc1\u79fb\u5b8c\u6210\u540e\u6062\u590d\nSELECT\n  rebalance_table_shards(\n    'test_table',\n    shard_transfer_mode = > 'force_logical'\n  );\n\n-- \u79df\u6237\u9694\u79bb\n-- =======\nSELECT\n  isolate_tenant_to_new_shard('table_name', tenant_id);\n\nSELECT\n  isolate_tenant_to_new_shard('orders', 135);\n\n-- CASCADE \u540c\u65f6\u9650\u5b9a co-located \u8868\nSELECT\n  isolate_tenant_to_new_shard('orders', 135, 'CASCADE');\n\n-- \u96c6\u7fa4\u4fe1\u606f\n-- =======\nselect\n  key,\n  citus_backend_gpid()\nFROM\n  distributed_table;\n\nSELECT\n  global_pid,\n  query,\n  state\nFROM\n  citus_stat_activity\nWHERE\n  query ilike 'INSER%'\n  and global_pid != citus_backend_gpid();\n\n-- \u7c7b\u4f3c citus_stat_activity\uff0c\u4f46\u4e0d\u5305\u542b\u5185\u90e8\u540e\u7aef\nSELECT\n  global_pid,\n  query,\n  state\nFROM\n  citus_dist_stat_activity\nWHERE\n  query ilike 'INSER%'\n  and global_pid != citus_backend_gpid();\n\nSELECT\n  *\nFROM\n  citus_lock_waits;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u5e9f\u5f03",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Shard placement invalidation"),(0,a.kt)("li",{parentName:"ul"},"Append-distributed tables - \u63a8\u8350\u4f7f\u7528 hash-distributed tables"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f cstore_fdw \u8868 - v10 \u5185\u7f6e\u5217\u5b58\u50a8"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.citusdata.com/updates/v11-0/"}),"https://www.citusdata.com/updates/v11-0/"))))),(0,a.kt)("h2",c({},{id:"citus-v10"}),"Citus v10"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shard rebalance - \u4f1a\u963b\u585e\u8bfb"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u5217\u5b58\u50a8 - columner")))}f.isMDXComponent=!0}}]);