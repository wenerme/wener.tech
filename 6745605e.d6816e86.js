(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(7),o=(n(0),n(557)),c={id:"postgresql-sql-faq",title:"Pg SQL \u5e38\u89c1\u95ee\u9898"},l={unversionedId:"db/relational/postgresql/postgresql-sql-faq",id:"db/relational/postgresql/postgresql-sql-faq",isDocsHomePage:!1,title:"Pg SQL \u5e38\u89c1\u95ee\u9898",description:"PostgreSQL SQL \u95ee\u9898",source:"@site/contents/notes/db/relational/postgresql/postgresql-sql-faq.md",slug:"/db/relational/postgresql/postgresql-sql-faq",permalink:"/notes/db/relational/postgresql/postgresql-sql-faq",version:"current",sidebar:"docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/notes/db/relational/postgresql/faq"},next:{title:"TimeScale",permalink:"/notes/db/relational/postgresql/timescale"}},s=[{value:"JSON \u6570\u7ec4\u8f6c\u884c",id:"json-\u6570\u7ec4\u8f6c\u884c",children:[]},{value:"JSON \u5bf9\u8c61\u904d\u5386",id:"json-\u5bf9\u8c61\u904d\u5386",children:[]},{value:"\u9759\u6001\u6570\u636e\u884c",id:"\u9759\u6001\u6570\u636e\u884c",children:[]},{value:"\u5206\u7ec4\u805a\u5408",id:"\u5206\u7ec4\u805a\u5408",children:[]}],b={rightToc:s};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"postgresql-sql-\u95ee\u9898"},"PostgreSQL SQL \u95ee\u9898"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/functions-json.html"}),"JSON Functions and Operators"))),Object(o.b)("h2",{id:"json-\u6570\u7ec4\u8f6c\u884c"},"JSON \u6570\u7ec4\u8f6c\u884c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),'-- \u8f6c\u6362\u4e3a\u5355\u884c JSON \u5bf9\u8c61\nselect * from json_array_elements(\'[{"a":1},{"a":2}]\');\n\n-- \u540c\u65f6\u63d0\u53d6\u5217\nselect * from json_to_recordset(\'[{"a":1,"b":"first"},{"a":2,"b":"second"}]\') as (a int, b text);\n')),Object(o.b)("h2",{id:"json-\u5bf9\u8c61\u904d\u5386"},"JSON \u5bf9\u8c61\u904d\u5386"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),'-- (key,value)\nselect * from json_each_text(\'{"a":1,"b":2}\') as d;\n')),Object(o.b)("h2",{id:"\u9759\u6001\u6570\u636e\u884c"},"\u9759\u6001\u6570\u636e\u884c"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SELECT *\nFROM (VALUES (1, 'one'), (2, 'two'), (3, 'three')) AS t (num, letter);\n")),Object(o.b)("h2",{id:"\u5206\u7ec4\u805a\u5408"},"\u5206\u7ec4\u805a\u5408"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/current/cube.html"}),"cube")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.postgresql.org/docs/devel/queries-table-expressions.html#QUERIES-GROUPING-SETS"}),"GROUPING SETS, CUBE, ROLLUP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rollup(a,b,c)")," => ",Object(o.b)("inlineCode",{parentName:"li"},"grouping sets((a,b,c),(a,b),(a),())")),Object(o.b)("li",{parentName:"ul"},"cube((a),(b),(c))  grouping sets((a,b,c),(a,b),(a,c),(a),(b,c),(b),(c),()) ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"GROUP BY a, b, c\n-- \u5bf9\u7b49\n\n\nROLLUP ( a, b , c)\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a       ),\n    (         )\n)\n\nCUBE ( a, b, c )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c ),\n    ( a, b    ),\n    ( a,    c ),\n    ( a       ),\n    (    b, c ),\n    (    b    ),\n    (       c ),\n    (         )\n)\n\nCUBE ( (a, b), (c, d) )\n-- \u5bf9\u7b49\nGROUPING SETS (\n    ( a, b, c, d ),\n    ( a, b       ),\n    (       c, d ),\n    (            )\n)\n")))}i.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=i(n),O=r,d=p["".concat(c,".").concat(O)]||p[O]||u[O]||o;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);