/*! For license information please see b3a9c445.c6267df0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87254],{33643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(11527),r=t(47214);const i={title:"PostgreSQL Tenant"},l="PostgreSQL Tenant",a={id:"db/relational/postgresql/postgresql-tenant",title:"PostgreSQL Tenant",description:"- \u65b9\u6848",source:"@site/../notes/db/relational/postgresql/postgresql-tenant.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/tenant",permalink:"/notes/db/relational/postgresql/tenant",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-tenant.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656205646,formattedLastUpdatedAt:"Jun 26, 2022",frontMatter:{title:"PostgreSQL Tenant"},sidebar:"docs",previous:{title:"Pg SQL \u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/sql-faq"},next:{title:"Trigger",permalink:"/notes/db/relational/postgresql/trigger"}},o={},c=[{value:"context variable",id:"context-variable",level:2},{value:"generate_res_id",id:"generate_res_id",level:2},{value:"generate_res_sid",id:"generate_res_sid",level:2},{value:"RLS",id:"rls",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"postgresql-tenant",children:"PostgreSQL Tenant"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65b9\u6848\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5206\u5e93"}),"\n",(0,s.jsx)(n.li,{children:"\u5206 Schema"}),"\n",(0,s.jsx)(n.li,{children:"\u5206 View - updateable view"}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u7247\u8868"}),"\n",(0,s.jsx)(n.li,{children:"tenant_id \u5217\u5212\u5206"}),"\n",(0,s.jsx)(n.li,{children:"RLS \u6743\u9650\u63a7\u5236"}),"\n",(0,s.jsx)(n.li,{children:"set \u4e0a\u4e0b\u6587\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6269\u5bb9\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6c34\u5e73 - citus"}),"\n",(0,s.jsx)(n.li,{children:"\u5782\u76f4"}),"\n",(0,s.jsx)(n.li,{children:"HA/AA"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/functions-admin.html",children:"System Administration Functions"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/geckoboard/pgulid",children:"geckoboard/pgulid"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pure pgsql ULID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"context-variable",children:"context variable"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["set\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"session - \u94fe\u63a5\u7ef4\u5ea6"}),"\n",(0,s.jsx)(n.li,{children:"local - tx \u7ed3\u675f\u91cd\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u6700\u597d \u524d\u7f00+."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- name, value, local\n-- local \u5982\u679c\u4e3a true \u5219\u4f18\u5148\u8fd4\u56de tx \u8303\u56f4 - \u4e0d\u5b58\u5728\u4e0d\u4f1a\u5f02\u5e38\n-- local \u5982\u679c\u4e3a false \u5219\u8fd4\u56de session \u8303\u56f4 - \u4e0d\u5b58\u5728\u4f1a\u5f02\u5e38\nselect set_config('tenant.id', 1000, true);\nset tenant.id = 1000;\n\n-- name, optional\nselect current_setting('tenant.id',true);\nshow tenant.id;\n\nreset tenant.id;\n\n-- \u7279\u6b8a\nselect current_user;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generate_res_id",children:"generate_res_id"}),"\n",(0,s.jsx)(n.p,{children:"\u9488\u5bf9\u79df\u6237+\u8d44\u6e90\u751f\u6210\u552f\u4e00 ID"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- TENANT-RES-ULID\ncreate or replace function generate_res_id(name text) returns text\nas\n$$\nbegin\n    return concat(current_setting('tenant.id'), '-', name, '-', generate_ulid());\nend\n$$\n    language plpgsql\n    volatile;\n\nselect generate_res_id('user');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generate_res_sid",children:"generate_res_sid"}),"\n",(0,s.jsx)(n.p,{children:"\u9488\u5bf9\u79df\u6237+\u8d44\u6e90\u751f\u6210\u552f\u4e00 \u5e8f\u5217 ID"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u76f4\u63a5\u9884\u5148\u63d2\u5165\u8bb0\u5f55\uff0c\u5219\u53ef\u53ea\u7528 update \u4f1a\u66f4\u597d"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- track sequence\ncreate table system_resource_sequences\n(\n    id        serial,\n    tenant_id bigint,\n    resource  text,\n    value     bigint,\n    unique (tenant_id, resource)\n);\n\n-- generate_res_sid - upsert version\ncreate or replace function generate_res_sid(res text)\n    returns bigint\nas\n$$\ninsert into system_resource_sequences(tenant_id, resource, value)\nvalues (1000, res, 1)\non conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\nreturning value\n$$\n    language sql\n    volatile;\n\n-- generate_res_sid - update and insert version\ncreate or replace function generate_res_sid(res text)\n    returns bigint\nas\n$$\ndeclare\n    id  system_resource_sequences.value%TYPE;\n    tid system_resource_sequences.tenant_id%TYPE := current_setting('tenant.id')::bigint;\nbegin\n    -- trigger less default computing\n    update system_resource_sequences\n    set value=value + 1\n    where tenant_id = tid\n      and resource = res\n    returning value into id;\n    if id is null\n    then\n        insert into system_resource_sequences(tenant_id, resource, value)\n        values (tid, res, 1)\n        on conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\n        returning value into id;\n    end if;\n\n    return id;\nend;\n$$\n    language plpgsql\n    volatile;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- test insert\ninsert into system_resource_sequences(tenant_id, resource, value)\nvalues (current_setting('tenant.id'), 'User', 1)\non conflict(tenant_id,resource) do update set value=system_resource_sequences.value + 1\nreturning value;\n\n-- test function\nselect generate_res_sid('User');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rls",children:"RLS"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5927\u5927\u7b80\u5316 SaaS \u6570\u636e\u9694\u79bb"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u589e\u5220\u6539\u67e5\u90fd\u4f1a\u751f\u6548"}),"\n",(0,s.jsx)(n.li,{children:"superuser \u53ef\u4ee5 BYPASSRLS"}),"\n",(0,s.jsxs)(n.li,{children:["table owner bypasses RLS\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9664\u975e - FORCE ROW LEVEL SECURITY"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u6bcf\u4e2a\u79df\u6237\u7528\u4e00\u4e2a\u7528\u6237 - \u6269\u5bb9\u53d7\u9650"}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7 local/session \u53d8\u91cf\u63a7\u5236 - \u9700\u8981\u989d\u5916\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"SET role"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cazzer.medium.com/a06084f31945",children:"Designing the most performant Row Level Security schema in Postgres"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://aws.amazon.com/cn/blogs/database/multi-tenant-data-isolation-with-postgresql-row-level-security/",children:"Multi-tenant data isolation with PostgreSQL Row Level Security"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE tenant ENABLE ROW LEVEL SECURITY;\n\n-- \u7528\u6237\u7ef4\u5ea6\nCREATE POLICY tenant_isolation_policy ON tenant\nUSING (tenant_id::TEXT = current_user);\n\n-- \u4e0a\u4e0b\u6587\u4fe1\u606f\nCREATE POLICY tenant_isolation_policy ON tenant\nUSING (tenant_id = current_setting('app.current_tenant')::UUID);\n\n-- \u590d\u6742 \u7ea7\u8054\nCREATE POLICY my_fancy_policy\n  ON t_company\n  USING (manager IN ( WITH RECURSIVE t AS\n                        (\n                           SELECT current_user AS person, NULL::text AS manager\n                           FROM t_manager\n                           WHERE manager = CURRENT_USER\n                           UNION ALL\n                           SELECT m.person, m.manager\n                           FROM t_manager m\n                           INNER JOIN t ON t.person = m.manager\n                        )\n                        SELECT person FROM t\n                    )\n        )\n;\n\n-- ACL\ncreate policy item_owner\non items\nas permissive\nfor all\nto application_user\nusing (\n  items.acl_read && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n  or items.acl_write && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n)\nwith check (\n  items.acl_write && regexp_split_to_array(current_setting('jwt.claims.roles'), ',')::uuid[]\n);\n\ncreate policy item_owner\non items\nas permissive\nfor all\nto application_user\nusing (\n  items.public = true\n  or exists(\n    select item_id\n    from permissions\n    where (\n      permissions.user_or_group_id =\n        any(regexp_split_to_array(current_setting('jwt.claims.role'), ',')::uuid[])\n      and permissions.item_id = items.id\n    )\n  )\n)\nwith check (exists(\n  select item_id\n  from permissions\n  where (\n    permissions.user_or_group_id =\n      any(regexp_split_to_array(current_setting('jwt.claims.role'), ',')::uuid[])\n    and permissions.item_id = items.id\n    and permissions.role = 'write'\n  )\n));\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var s=t(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(50959);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);