"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87254],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return _},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={title:"PostgreSQL Tenant"},d="PostgreSQL Tenant",g={unversionedId:"db/relational/postgresql/postgresql-tenant",id:"db/relational/postgresql/postgresql-tenant",title:"PostgreSQL Tenant",description:"- \u65b9\u6848",source:"@site/../notes/db/relational/postgresql/postgresql-tenant.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/tenant",permalink:"/notes/db/relational/postgresql/tenant",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-tenant.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"PostgreSQL Tenant"},sidebar:"docs",previous:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/sql-faq"},next:{title:"Trigger",permalink:"/notes/db/relational/postgresql/trigger"}},_={},f=[{value:"context variable",id:"context-variable",level:2},{value:"generate_res_id",id:"generate_res_id",level:2},{value:"generate_res_sid",id:"generate_res_sid",level:2},{value:"RLS",id:"rls",level:2}],k={toc:f};function v(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),c),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"postgresql-tenant"}),"PostgreSQL Tenant"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6848",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u5206 Schema"),(0,r.kt)("li",{parentName:"ul"},"\u5206 View - updateable view"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u7247\u8868"),(0,r.kt)("li",{parentName:"ul"},"tenant_id \u5217\u5212\u5206"),(0,r.kt)("li",{parentName:"ul"},"RLS \u6743\u9650\u63a7\u5236"),(0,r.kt)("li",{parentName:"ul"},"set \u4e0a\u4e0b\u6587\u4fe1\u606f"))),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5bb9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6c34\u5e73 - citus"),(0,r.kt)("li",{parentName:"ul"},"\u5782\u76f4"),(0,r.kt)("li",{parentName:"ul"},"HA/AA"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.postgresql.org/docs/current/functions-admin.html"}),"System Administration Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/geckoboard/pgulid"}),"geckoboard/pgulid"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pure pgsql ULID")))),(0,r.kt)("h2",p({},{id:"context-variable"}),"context variable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"session - \u94fe\u63a5\u7ef4\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"local - tx \u7ed3\u675f\u91cd\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u53d8\u91cf\u6700\u597d \u524d\u7f00+.")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"-- name, value, local\n-- local \u5982\u679c\u4e3a true \u5219\u4f18\u5148\u8fd4\u56de tx \u8303\u56f4 - \u4e0d\u5b58\u5728\u4e0d\u4f1a\u5f02\u5e38\n-- local \u5982\u679c\u4e3a false \u5219\u8fd4\u56de session \u8303\u56f4 - \u4e0d\u5b58\u5728\u4f1a\u5f02\u5e38\nselect set_config('tenant.id', 1000, true);\nset tenant.id = 1000;\n\n-- name, optional\nselect current_setting('tenant.id',true);\nshow tenant.id;\n\nreset tenant.id;\n\n-- \u7279\u6b8a\nselect current_user;\n")),(0,r.kt)("h2",p({},{id:"generate_res_id"}),"generate_res_id"),(0,r.kt)("p",null,"\u9488\u5bf9\u79df\u6237+\u8d44\u6e90\u751f\u6210\u552f\u4e00 ID"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"-- TENANT-RES-ULID\ncreate or replace function generate_res_id(name text) returns text\nas\n$$\nbegin\n    return concat(current_setting('tenant.id'), '-', name, '-', generate_ulid());\nend\n$$\n    language plpgsql\n    volatile;\n\nselect generate_res_id('user');\n")),(0,r.kt)("h2",p({},{id:"generate_res_sid"}),"generate_res_sid"),(0,r.kt)("p",null,"\u9488\u5bf9\u79df\u6237+\u8d44\u6e90\u751f\u6210\u552f\u4e00 \u5e8f\u5217 ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5\u9884\u5148\u63d2\u5165\u8bb0\u5f55\uff0c\u5219\u53ef\u53ea\u7528 update \u4f1a\u66f4\u597d")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"-- track sequence\ncreate table system_resource_sequences\n(\n    id        serial,\n    tenant_id bigint,\n    resource  text,\n    value     bigint,\n    unique (tenant_id, resource)\n);\n\n-- generate_res_sid - upsert version\ncreate or replace function generate_res_sid(res text)\n    returns bigint\nas\n$$\ninsert into system_resource_sequences(tenant_id, resource, value)\nvalues (1000, res, 1)\non conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\nreturning value\n$$\n    language sql\n    volatile;\n\n-- generate_res_sid - update and insert version\ncreate or replace function generate_res_sid(res text)\n    returns bigint\nas\n$$\ndeclare\n    id  system_resource_sequences.value%TYPE;\n    tid system_resource_sequences.tenant_id%TYPE := current_setting('tenant.id')::bigint;\nbegin\n    -- trigger less default computing\n    update system_resource_sequences\n    set value=value + 1\n    where tenant_id = tid\n      and resource = res\n    returning value into id;\n    if id is null\n    then\n        insert into system_resource_sequences(tenant_id, resource, value)\n        values (tid, res, 1)\n        on conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\n        returning value into id;\n    end if;\n\n    return id;\nend;\n$$\n    language plpgsql\n    volatile;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"-- test insert\ninsert into system_resource_sequences(tenant_id, resource, value)\nvalues (current_setting('tenant.id'), 'User', 1)\non conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\nreturning value;\n\n-- test function\nselect generate_res_sid('User');\n")),(0,r.kt)("h2",p({},{id:"rls"}),"RLS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5927\u5927\u7b80\u5316 SaaS \u6570\u636e\u9694\u79bb")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u589e\u5220\u6539\u67e5\u90fd\u4f1a\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"superuser \u53ef\u4ee5 BYPASSRLS"),(0,r.kt)("li",{parentName:"ul"},"table owner bypasses RLS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9664\u975e - FORCE ROW LEVEL SECURITY"))),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u79df\u6237\u7528\u4e00\u4e2a\u7528\u6237 - \u6269\u5bb9\u53d7\u9650"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 local/session \u53d8\u91cf\u63a7\u5236 - \u9700\u8981\u989d\u5916\u8bbe\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"SET role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://cazzer.medium.com/a06084f31945"}),"Designing the most performant Row Level Security schema in Postgres")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://aws.amazon.com/cn/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/"}),"Multi-tenant data isolation with PostgreSQL Row Level Security"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"ALTER TABLE tenant ENABLE ROW LEVEL SECURITY;\n\n-- \u7528\u6237\u7ef4\u5ea6\nCREATE POLICY tenant_isolation_policy ON tenant\nUSING (tenant_id::TEXT = current_user);\n\n-- \u4e0a\u4e0b\u6587\u4fe1\u606f\nCREATE POLICY tenant_isolation_policy ON tenant\nUSING (tenant_id = current_setting('app.current_tenant')::UUID);\n\n-- \u590d\u6742 \u7ea7\u8054\nCREATE POLICY my_fancy_policy\n  ON t_company\n  USING (manager IN ( WITH RECURSIVE t AS\n                        (\n                           SELECT current_user AS person, NULL::text AS manager\n                           FROM t_manager\n                           WHERE manager = CURRENT_USER\n                           UNION ALL\n                           SELECT m.person, m.manager\n                           FROM t_manager m\n                           INNER JOIN t ON t.person = m.manager\n                        )\n                        SELECT person FROM t\n                    )\n        )\n;\n\n-- ACL\ncreate policy item_owner\non items\nas permissive\nfor all\nto application_user\nusing (\n  items.acl_read && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n  or items.acl_write && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n)\nwith check (\n  items.acl_write && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n);\n\ncreate policy item_owner\non items\nas permissive\nfor all\nto application_user\nusing (\n  items.public = true\n  or exists(\n    select item_id\n    from permissions\n    where (\n      permissions.user_or_group_id =\n        any(regexp_split_to_array(current_setting('jwt.claims.role'), ',')::uuid[])\n      and permissions.item_id = items.id\n    )\n  )\n)\nwith check (exists(\n  select item_id\n  from permissions\n  where (\n    permissions.user_or_group_id =\n      any(regexp_split_to_array(current_setting('jwt.claims.role'), ',')::uuid[])\n    and permissions.item_id = items.id\n    and permissions.role = 'write'\n  )\n));\n")))}v.isMDXComponent=!0}}]);