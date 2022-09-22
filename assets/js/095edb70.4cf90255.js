"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45708],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=m(a),k=l,N=c["".concat(o,".").concat(k)]||c[k]||p[k]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96217:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return g}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&s(e,a,t[a]);return e};const c={title:"atlas"},k="atlas",N={unversionedId:"languages/go/lib/atlas",id:"languages/go/lib/atlas",title:"atlas",description:"- ariga/atlas",source:"@site/../notes/languages/go/lib/atlas.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/atlas",permalink:"/notes/languages/go/lib/atlas",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/atlas.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"atlas"},sidebar:"docs",previous:{title:"Go2",permalink:"/notes/languages/go/go2"},next:{title:"bluge",permalink:"/notes/languages/go/lib/bluge"}},d={},g=[{value:"DSL",id:"dsl",level:2}],f={toc:g};function b(e){var t,a=e,{components:l}=a,s=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},f),s),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"atlas"}),"atlas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/ariga/atlas"}),"ariga/atlas"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"Schema \u8fc1\u79fb\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 PostgresSQL, MySQL, MariaDB, SQLite"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f5c\u4e3a terraform \u7684 provider")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'brew install ariga/tap/atlas\n\natlas schema apply -u "sqlite://test.db" -f schema.hcl # \u5e94\u7528\u8fc1\u79fb\natlas schema inspect -u "sqlite://test.db"             # \u751f\u6210 schema\natlas serve --storage "sqlite://test.db"               # WebUI\n\n# dev \u73af\u5883\u7528\u4e8e\u9884\u5148\u9a8c\u8bc1\natlas schema apply --url "sqlite://prod.db" --dev-url "sqlite://prod.db" -f schema.hcl\n\natlas migrate new          # \u751f\u6210 migrations/\u65f6\u95f4\u6233.sql\natlas migrate validate     # \u5bf9\u6bd4 migrations/atlas.sum\natlas migrate hash --force # \u5f3a\u5236\u91cd\u65b0\u751f\u6210 migrations/atlas.sum\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-hcl",metastring:'title="schema.hcl"',title:'"schema.hcl"'}),'schema "main" {\n\n}\n\ntable "users" {\n  schema = schema.main\n  column "id" {\n    null = false\n    type = int\n  }\n  column "name" {\n    null = true\n    type = varchar(100)\n  }\n  primary_key {\n    columns = [column.id]\n  }\n}\n\ntable "posts" {\n  schema = schema.main\n  column "id" {\n    null = false\n    type = int\n  }\n  column "title" {\n    null = true\n    type = varchar(100)\n  }\n  column "body" {\n    null = true\n    type = text\n  }\n  column "author_id" {\n    null = true\n    type = int\n  }\n  primary_key {\n    columns = [column.id]\n  }\n  foreign_key "fk_posts_author_id" {\n    columns     = [column.author_id]\n    ref_columns = [table.users.column.id]\n    on_update   = NO_ACTION\n    on_delete   = NO_ACTION\n  }\n  index "idx_posts_author_id" {\n    unique  = false\n    columns = [column.author_id]\n  }\n}\n')),(0,n.kt)("h2",p({},{id:"dsl"}),"DSL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 DSL \u540d\u5b57 atlas.hcl"),(0,n.kt)("li",{parentName:"ul"},"schema",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"charset"),(0,n.kt)("li",{parentName:"ul"},"collate"),(0,n.kt)("li",{parentName:"ul"},"comment"))),(0,n.kt)("li",{parentName:"ul"},"table",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"schema - \u5f15\u7528\u5b9a\u4e49\u7684 schema"),(0,n.kt)("li",{parentName:"ul"},"column",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"type"),(0,n.kt)("li",{parentName:"ul"},"null"),(0,n.kt)("li",{parentName:"ul"},"default"),(0,n.kt)("li",{parentName:"ul"},"as - \u751f\u6210\u5217"),(0,n.kt)("li",{parentName:"ul"},"comment"),(0,n.kt)("li",{parentName:"ul"},"collate"),(0,n.kt)("li",{parentName:"ul"},"auto_increment - MySQL, SQLite"),(0,n.kt)("li",{parentName:"ul"},"identity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"generated - ALWAYS"),(0,n.kt)("li",{parentName:"ul"},"start"),(0,n.kt)("li",{parentName:"ul"},"increment"))))),(0,n.kt)("li",{parentName:"ul"},"primary_key",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"columns"))),(0,n.kt)("li",{parentName:"ul"},"foreign_key",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"columns"),(0,n.kt)("li",{parentName:"ul"},"ref_columns"),(0,n.kt)("li",{parentName:"ul"},"on_delete - CASCADE, NO_ACTION"),(0,n.kt)("li",{parentName:"ul"},"on_update"))),(0,n.kt)("li",{parentName:"ul"},"index",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"on",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"column"),(0,n.kt)("li",{parentName:"ul"},"desc"),(0,n.kt)("li",{parentName:"ul"},"prefix - \u7d22\u5f15\u591a\u957f - MySQL, MariaDB"))),(0,n.kt)("li",{parentName:"ul"},"unique"),(0,n.kt)("li",{parentName:"ul"},"type - HASH, GIN, BRIN, FULLTEXT"),(0,n.kt)("li",{parentName:"ul"},"options",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"page_per_range"))),(0,n.kt)("li",{parentName:"ul"},"where - \u90e8\u5206\u7d22\u5f15 - PostgreSQL, SQLite"))),(0,n.kt)("li",{parentName:"ul"},"check",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"expr"))),(0,n.kt)("li",{parentName:"ul"},"partition - PostgreSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"type=RANGE"),(0,n.kt)("li",{parentName:"ul"},"by",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"column"),(0,n.kt)("li",{parentName:"ul"},"expr"))))))),(0,n.kt)("li",{parentName:"ul"},"variable"),(0,n.kt)("li",{parentName:"ul"},"env - ",(0,n.kt)("inlineCode",{parentName:"li"},"--env local"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"src"),(0,n.kt)("li",{parentName:"ul"},"url"),(0,n.kt)("li",{parentName:"ul"},"dev"),(0,n.kt)("li",{parentName:"ul"},"schemas"),(0,n.kt)("li",{parentName:"ul"},"migration_dir",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"url - ",(0,n.kt)("inlineCode",{parentName:"li"},"file://migrations")),(0,n.kt)("li",{parentName:"ul"},"format - atlas, flyway, liquibase, goose, golang-migrate"))),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5c5e\u6027\u4f1a\u4f5c\u4e3a schema.hcl \u7684\u53d8\u91cf - ",(0,n.kt)("inlineCode",{parentName:"li"},"--var tenant=wener"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-hcl"}),'schema "a" {}\nschema "b" {}\n\n// \u591a schema \u540c\u540d\u8868\ntable "a" "users" {\n  schema = schema.a\n}\ntable "b" "users" {\n  schema = schema.b\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-hcl"}),'env "local" {\n  src = "schema.hcl"\n\n  url = "sqlite://prod.db"\n  dev = "sqlite://dev.db"\n\n  schemas = ["main"]\n}\n')))}b.isMDXComponent=!0}}]);