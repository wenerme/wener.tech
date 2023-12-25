/*! For license information please see 4afe6f6a.6bf96aad.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31278],{79883:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=l(11527),i=l(47214);const s={title:"plv8"},r="PLV8",o={id:"db/relational/postgresql/plv8",title:"plv8",description:"- plv8/plv8",source:"@site/../notes/db/relational/postgresql/plv8.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/plv8",permalink:"/notes/db/relational/postgresql/plv8",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/plv8.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"plv8"},sidebar:"docs",previous:{title:"pgweb",permalink:"/notes/db/relational/postgresql/pgweb"},next:{title:"PostGraphile",permalink:"/notes/db/relational/postgresql/postgraphile"}},c={},d=[{value:"Trigger",id:"trigger",level:2},{value:"build",id:"build",level:2},{value:"commonjs module",id:"commonjs-module",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"plv8",children:"PLV8"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/plv8/plv8",children:"plv8/plv8"})}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{title:"\u5c3d\u91cf\u8d70 globalThis \u6267\u884c",type:"tip",children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"create or replace function my_function(name text,options jsonb default jsonb_build_object()) returns jsonb immutable strict as $JS$\n\nif(globalThis.my_function)return globalThis.my_function(name,options);\n\n// Real code\n\nglobalThis.my_function = my_function;\nreturn globalThis.my_function(name,options);\n\n$JS$ language plv8;\n"})}),(0,t.jsx)(e.p,{children:"\u51cf\u5c11\u4ee3\u7801\u6267\u884c\u91cf"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"e.g. 4500 loc, 300ms -> 3ms"}),"\n"]})]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u56e0\u4e3a PostgreSQL \u4f7f\u7528  forking model\uff0c\u56e0\u6b64\u4e0d\u4f1a\u6709\u771f\u6b63\u7684\u5168\u5c40\u4e0a\u4e0b\u6587\uff0c\u6bcf\u4e2a context \u4f1a\u5728 connection \u5173\u95ed\u65f6\u9500\u6bc1\u3002"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"CREATE EXTENSION plv8;\nSELECT plv8_version();\nSELECT plv8_info();\n\n-- reset globalThis\nSELECT plv8_reset();\nSELECT plv8_reset('context');\n\nDO $$ plv8.elog(NOTICE, \"hello there!\"); $$ LANGUAGE plv8;\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["plv8.memory_limit=265\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"MB"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"plv8.max_eval_size=2MB"}),"\n",(0,t.jsx)(e.li,{children:"plv8.v8_flags"}),"\n",(0,t.jsx)(e.li,{children:"plv8.execution_timeout=300"}),"\n",(0,t.jsxs)(e.li,{children:["builtins\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"plv8.elog(LEVEL,messages...)"})}),"\n",(0,t.jsx)(e.li,{children:"plv8.quote_literal, plv8.nullable, plv8.quote_ident"}),"\n",(0,t.jsx)(e.li,{children:"plv8.find_function"}),"\n",(0,t.jsx)(e.li,{children:"plv8.version"}),"\n",(0,t.jsx)(e.li,{children:"plv8.memory_usage"}),"\n",(0,t.jsx)(e.li,{children:"plv8.run_script - eval"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"plv8.execute(sql [, args])"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"plv8.prepare(sql [, typenames])"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"PreparedPlan.execute([ args ])"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"PreparedPlan.cursor([ args ])"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"PreparedPlan.free"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Cursor.fetch([ nrows ])"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Cursor.move"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"Cursor.close"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"plv8.subtransaction"})}),"\n",(0,t.jsx)(e.li,{children:"WindowObject"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/divyenduz/plv8ify",children:"divyenduz/plv8ify"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"trigger",children:"Trigger"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"NEW"}),"\n",(0,t.jsx)(e.li,{children:"OLD"}),"\n",(0,t.jsx)(e.li,{children:"TG_NAME"}),"\n",(0,t.jsx)(e.li,{children:"TG_WHEN"}),"\n",(0,t.jsx)(e.li,{children:"TG_LEVEL"}),"\n",(0,t.jsx)(e.li,{children:"TG_OP"}),"\n",(0,t.jsx)(e.li,{children:"TG_RELID"}),"\n",(0,t.jsx)(e.li,{children:"TG_TABLE_NAME"}),"\n",(0,t.jsx)(e.li,{children:"TG_TABLE_SCHEMA"}),"\n",(0,t.jsx)(e.li,{children:"TG_ARGV"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"build",children:"build"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-makefile",children:"my_function:\n\tpnpm esbuild --format=cjs --charset=utf8 --legal-comments=external --bundle --define:process.env.NODE_ENV=\\\"production\\\" --define:__DEV__=false \\\n\t\t--minify-syntax \\\n\t\t--minify-whitespace \\\n\t\t--outfile=dist/my_function.cjs \\\n\t\t--banner:js='const module = { exports: {} }' \\\n\t\t./src/functions/my_function.ts\n\techo 'create or replace function my_function(name text,options jsonb default jsonb_build_object()) returns jsonb immutable strict as $$JS$$' > dist/my_function.sql\n\tpnpm prettier --write dist/my_function.cjs\n\techo 'if(globalThis.my_function)return globalThis.my_function(name,options);' >> dist/my_function.sql\n\tcat dist/my_function.cjs >> dist/my_function.sql\n\techo 'globalThis.my_function = my_function' >> dist/my_function.sql\n\techo 'return globalThis.my_function(name,options);' >> dist/my_function.sql\n\techo '$$JS$$ language plv8;' >> dist/my_function.sql\n\tcp dist/my_function.sql ./db/migrations/100001_my_function.sql\n"})}),"\n",(0,t.jsx)(e.h2,{id:"commonjs-module",children:"commonjs module"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/JerrySievert/plv8-modules/blob/master/sql/001-startup.sql",children:"https://github.com/JerrySievert/plv8-modules/blob/master/sql/001-startup.sql"})}),"\n",(0,t.jsx)(e.li,{children:"plv8.start_proc = 'commonjs.plv8_startup'"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},3354:(n,e,l)=>{var t=l(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,l){var t,s={},d=null,a=null;for(t in void 0!==l&&(d=""+l),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(a=e.ref),e)r.call(e,t)&&!c.hasOwnProperty(t)&&(s[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===s[t]&&(s[t]=e[t]);return{$$typeof:i,type:n,key:d,ref:a,props:s,_owner:o.current}}e.Fragment=s,e.jsx=d,e.jsxs=d},11527:(n,e,l)=>{n.exports=l(3354)},47214:(n,e,l)=>{l.d(e,{Z:()=>o,a:()=>r});var t=l(50959);const i={},s=t.createContext(i);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);