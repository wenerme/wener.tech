(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{684:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(7),l=(a(0),a(766)),b={id:"datatype",title:"\u6570\u636e\u7c7b\u578b"},c={unversionedId:"db/relational/postgresql/datatype",id:"db/relational/postgresql/datatype",isDocsHomePage:!1,title:"\u6570\u636e\u7c7b\u578b",description:"Postgres \u6570\u636e\u7c7b\u578b",source:"@site/notes/db/relational/postgresql/postgresql-datatype.md",slug:"/db/relational/postgresql/datatype",permalink:"/notes/db/relational/postgresql/datatype",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-datatype.md",version:"current",sidebar:"docs",previous:{title:"PgBouncer",permalink:"/notes/db/relational/postgresql/pgbouncer"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"}},i=[{value:"VARCHAR vs TEXT",id:"varchar-vs-text",children:[]},{value:"INT vs BIGINT",id:"int-vs-bigint",children:[]},{value:"UUID",id:"uuid",children:[]},{value:"\u65f6\u95f4\u65e5\u671f",id:"\u65f6\u95f4\u65e5\u671f",children:[]},{value:"\u4e8c\u8fdb\u5236\u6570\u636e",id:"\u4e8c\u8fdb\u5236\u6570\u636e",children:[]},{value:"\u91d1\u989d\u7c7b\u578b",id:"\u91d1\u989d\u7c7b\u578b",children:[]},{value:"\u7ecf\u7eac\u5ea6",id:"\u7ecf\u7eac\u5ea6",children:[]}],p={rightToc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"postgres-\u6570\u636e\u7c7b\u578b"},"Postgres \u6570\u636e\u7c7b\u578b"),Object(l.b)("h2",{id:"varchar-vs-text"},"VARCHAR vs TEXT"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5b8c\u5168\u76f8\u540c"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u662f VARCHAR \u4f1a\u505a\u957f\u5ea6\u9a8c\u8bc1"),Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u90fd\u4f7f\u7528 TEXT, \u5728\u5e94\u7528\u5c42\u505a\u9650\u5236"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/a/4849030/1870054"}),"PostgreSQL: Difference between text and varchar (character varying)"))))),Object(l.b)("h2",{id:"int-vs-bigint"},"INT vs BIGINT"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728 64 \u4f4d\u7684\u670d\u52a1\u5668\u4e0a, \u4e24\u8005\u5360\u7528\u7684\u7a7a\u95f4\u76f8\u540c"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u5efa\u8bae\u4f7f\u7528 bigint")),Object(l.b)("h2",{id:"uuid"},"UUID"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u539f\u751f\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"uuid")," \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u751f\u6210 UUID \u9700\u8981\u6269\u5c55")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE EXTENSION IF NOT EXISTS pgcrypto;\n-- pg 13 \u540e\u4e0d\u9700\u8981\u6269\u5c55\u4e5f\u80fd\u4f7f\u7528\u8be5\u51fd\u6570\nSELECT gen_random_uuid();\n")),Object(l.b)("h2",{id:"\u65f6\u95f4\u65e5\u671f"},"\u65f6\u95f4\u65e5\u671f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/datatype-datetime.html"}),"Date/Time Types"))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Min"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Max"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Resolution"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Size"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4713 BC"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"294276 AD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5fae\u79d2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timestamptz"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4713 BC"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"294276 AD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5fae\u79d2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"date"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4713 BC"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5874897 AD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5929"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"time"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"00:00:00"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24:00:00"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5fae\u79d2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timetz"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"00:00:00+1459"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24:00:00-1459"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5fae\u79d2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interval"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-178000000 years"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"178000000 years"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5fae\u79d2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16 bytes")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"-- \u65f6\u533a\u7f29\u5199\nselect * from pg_timezone_abbrevs;\n-- \u65f6\u533a\u540d\u5b57\nselect * from pg_timezone_names;\n")),Object(l.b)("h2",{id:"\u4e8c\u8fdb\u5236\u6570\u636e"},"\u4e8c\u8fdb\u5236\u6570\u636e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.postgresql.org/wiki/BinaryFilesInDB"}),"BinaryFilesInDB")),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 bytea \u6216 text\uff0c\u90fd\u4f7f\u7528 toast"),Object(l.b)("li",{parentName:"ul"},"\u5355\u8bb0\u5f55\u6700\u5927 1G"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8868\u6700\u591a 40\u4ebf > 2KB \u7684\u8bb0\u5f55"),Object(l.b)("li",{parentName:"ul"},"\u5728\u8bfb\u5199\u65f6\u53ef\u80fd\u9700\u8981\u7f16\u7801\u89e3\u7801"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u5185\u5b58\u8981\u6c42\u8f83\u9ad8\uff0c\u5373\u4fbf\u6570\u636e\u91cf\u8f83\u5c11")),Object(l.b)("h2",{id:"\u91d1\u989d\u7c7b\u578b"},"\u91d1\u989d\u7c7b\u578b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u60c5\u51b5\u4f1a\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"decimal(12,2)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"decimal")," \u662f ",Object(l.b)("inlineCode",{parentName:"li"},"numeric")," \u7684\u522b\u540d"),Object(l.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u8003\u8651\u76f4\u63a5\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"integer")," \u6765\u5b58\u5206"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/datatype-money.html"}),"money"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u529f\u80fd\u6709\u9650"),Object(l.b)("li",{parentName:"ul"},"\u6bd4 ",Object(l.b)("inlineCode",{parentName:"li"},"numeric")," \u6027\u80fd\u66f4\u597d"),Object(l.b)("li",{parentName:"ul"},"\u5386\u53f2\u9057\u7559 - \u4e0d\u8981\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/q/15726535/1870054"}),"PostgreSQL: Which Datatype should be used for Currency?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/static/datatype-numeric.html"}),"\u6570\u5b57\u7c7b\u578b"))))),Object(l.b)("h2",{id:"\u7ecf\u7eac\u5ea6"},"\u7ecf\u7eac\u5ea6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"float8 \u5b58\u50a8\u5355\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"point \u5b58\u50a8\u4e24\u4e2a\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86 PostGIS \u5219\u7528 geometry \u6216 geography \u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/a/8150944/1870054"}),"Which data type for latitude and longitude?"))))))}O.isMDXComponent=!0},766:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=O(a),j=n,m=u["".concat(b,".").concat(j)]||u[j]||o[j]||l;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);