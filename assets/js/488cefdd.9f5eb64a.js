"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89659],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={title:"PostGraphile"},p=void 0,s={unversionedId:"db/relational/postgresql/postgraphile",id:"db/relational/postgresql/postgraphile",title:"PostGraphile",description:"- graphile/postgraphile \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/db/relational/postgresql/postgraphile.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgraphile",permalink:"/notes/db/relational/postgresql/postgraphile",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgraphile.md",tags:[],version:"current",frontMatter:{title:"PostGraphile"},sidebar:"docs",previous:{title:"pgweb",permalink:"/notes/db/relational/postgresql/pgweb"},next:{title:"PostREST \u5165\u95e8\u90e8\u7f72",permalink:"/notes/db/relational/postgresql/postgrest-hello"}},c=[{value:"embded",id:"embded",children:[],level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],u={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/graphile/postgraphile"},"graphile/postgraphile")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GraphQL over PostgreSQL"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u8c03 DB \u8bbe\u8ba1 - \u5148 DB \u540e GraphQL"),(0,l.kt)("li",{parentName:"ul"},"TypeScript+NodeJS \u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u4e5f\u53ef\u4ee5\u5d4c\u5165\u5230 NodeJS \u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u63a8\u8350\u4f5c\u4e3a\u5e93\u4f7f\u7528\uff0c\u56e0\u4e3a\u65b9\u4fbf\u81ea\u5b9a\u4e49\u548c\u52a0\u63d2\u4ef6")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# https://www.graphile.org/postgraphile/usage-cli/\n\n# \u5f00\u53d1\u73af\u5883\u53c2\u6570\npostgraphile \\\n  --subscriptions \\\n  --watch \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --show-error-stack=json \\\n  --extended-errors hint,detail,errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --export-schema-graphql schema.graphql \\\n  --graphiql "/" \\\n  --enhance-graphiql \\\n  --allow-explain \\\n  --enable-query-batching \\\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n\n# \u751f\u4ea7\u73af\u5883\npostgraphile \\\n  --subscriptions \\\n  --retry-on-init-fail \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --extended-errors errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --disable-graphiql \\\n  --enable-query-batching \\\n  --disable-query-log \\ # our default logging has performance issues, but do make sure you have a logging system in place!\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n')),(0,l.kt)("h2",{id:"embded"},"embded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst { postgraphile } = require('postgraphile');\n\nconst app = express();\n\n/* Example middleware you might want to put in front of PostGraphile */\n// app.use(require('morgan')(...));\n// app.use(require('compression')({...}));\n// app.use(require('helmet')({...}));\n\napp.use(\n  postgraphile(process.env.DATABASE_URL || 'postgres:///', 'public', {\n    // ...\n    pgSettings: {\n      statement_timeout: '3000',\n    },\n  }),\n);\n\napp.listen(process.env.PORT || 3000);\n")),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u952e\u6dfb\u52a0\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},"RLS (Row Level Security) \u5982\u679c\u8981\u7528\u5efa\u8bae\u6bcf\u4e2a\u8868\u90fd\u542f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8868\u6388\u6743 SELECT/DELETE\uff0c\u5217\u6388\u6743 INSERT/UPDATE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5217\u6388\u6743 SELECT \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f18\u5316\uff0c\u4e0d\u80fd ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT *"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"RETURNING *"),", \u4e0d\u80fd\u5c06\u884c\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570"))),(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"LANGUAGE sql"),"\uff0c \u907f\u514d ",(0,l.kt)("inlineCode",{parentName:"li"},"LANGUAGE plpgsql")),(0,l.kt)("li",{parentName:"ul"},"Trigger \u6dfb\u52a0\u6570\u5b57\u524d\u7f00\uff0c\u56e0\u4e3a\u662f\u6309\u5e8f\u6267\u884c\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_200_do_a_thing")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"_800_do_something_else"))))),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/postgresql-schema-design/"},"https://www.graphile.org/postgraphile/postgresql-schema-design/"))))}g.isMDXComponent=!0}}]);