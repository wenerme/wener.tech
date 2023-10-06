"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71480],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65973:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e},g=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"PostGraphile"},h="PostGraphile",f={unversionedId:"db/relational/postgresql/postgraphile",id:"db/relational/postgresql/postgraphile",title:"PostGraphile",description:"- graphile/postgraphile \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/db/relational/postgresql/postgraphile.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgraphile",permalink:"/notes/db/relational/postgresql/postgraphile",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgraphile.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628617278,formattedLastUpdatedAt:"Aug 10, 2021",frontMatter:{title:"PostGraphile"},sidebar:"docs",previous:{title:"plv8",permalink:"/notes/db/relational/postgresql/plv8"},next:{title:"Supabase PostgreSQL Image",permalink:"/notes/db/relational/postgresql/postgres-supabase"}},b={},y=[{value:"embded",id:"embded",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"Schema",id:"schema",level:2}],k={toc:y},v="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,g(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"postgraphile"}),"PostGraphile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/graphile/postgraphile"}),"graphile/postgraphile")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GraphQL over PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"\u5f3a\u8c03 DB \u8bbe\u8ba1 - \u5148 DB \u540e GraphQL"),(0,r.kt)("li",{parentName:"ul"},"TypeScript+NodeJS \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u4e5f\u53ef\u4ee5\u5d4c\u5165\u5230 NodeJS \u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u63a8\u8350\u4f5c\u4e3a\u5e93\u4f7f\u7528\uff0c\u56e0\u4e3a\u65b9\u4fbf\u81ea\u5b9a\u4e49\u548c\u52a0\u63d2\u4ef6")))))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# https://www.graphile.org/postgraphile/usage-cli/\n\n# \u5f00\u53d1\u73af\u5883\u53c2\u6570\npostgraphile \\\n  --subscriptions \\\n  --watch \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --show-error-stack=json \\\n  --extended-errors hint,detail,errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --export-schema-graphql schema.graphql \\\n  --graphiql "/" \\\n  --enhance-graphiql \\\n  --allow-explain \\\n  --enable-query-batching \\\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n\n# \u751f\u4ea7\u73af\u5883\npostgraphile \\\n  --subscriptions \\\n  --retry-on-init-fail \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --extended-errors errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --disable-graphiql \\\n  --enable-query-batching \\\n  --disable-query-log \\ # our default logging has performance issues, but do make sure you have a logging system in place!\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n')),(0,r.kt)("h2",u({},{id:"embded"}),"embded"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst { postgraphile } = require('postgraphile');\n\nconst app = express();\n\n/* Example middleware you might want to put in front of PostGraphile */\n// app.use(require('morgan')(...));\n// app.use(require('compression')({...}));\n// app.use(require('helmet')({...}));\n\napp.use(\n  postgraphile(process.env.DATABASE_URL || 'postgres:///', 'public', {\n    // ...\n    pgSettings: {\n      statement_timeout: '3000',\n    },\n  }),\n);\n\napp.listen(process.env.PORT || 3000);\n")),(0,r.kt)("h2",u({},{id:"\u6700\u4f73\u5b9e\u8df5"}),"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5916\u952e\u6dfb\u52a0\u7d22\u5f15"),(0,r.kt)("li",{parentName:"ul"},"RLS (Row Level Security) \u5982\u679c\u8981\u7528\u5efa\u8bae\u6bcf\u4e2a\u8868\u90fd\u542f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u8868\u6388\u6743 SELECT/DELETE\uff0c\u5217\u6388\u6743 INSERT/UPDATE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5217\u6388\u6743 SELECT \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f18\u5316\uff0c\u4e0d\u80fd ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT *"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RETURNING *"),", \u4e0d\u80fd\u5c06\u884c\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570"))),(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGE sql"),"\uff0c \u907f\u514d ",(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGE plpgsql")),(0,r.kt)("li",{parentName:"ul"},"Trigger \u6dfb\u52a0\u6570\u5b57\u524d\u7f00\uff0c\u56e0\u4e3a\u662f\u6309\u5e8f\u6267\u884c\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_200_do_a_thing")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"_800_do_something_else"))))),(0,r.kt)("h2",u({},{id:"schema"}),"Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.graphile.org/postgraphile/postgresql-schema-design/"}),"https://www.graphile.org/postgraphile/postgresql-schema-design/"))))}w.isMDXComponent=!0}}]);