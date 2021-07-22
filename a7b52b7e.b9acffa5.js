(window.webpackJsonp=window.webpackJsonp||[]).push([[709],{1152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),O=n,d=u["".concat(l,".").concat(O)]||u[O]||b[O]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},782:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1152)),l={title:"\u53ef\u66f4\u65b0\u89c6\u56fe"},i={unversionedId:"db/relational/postgresql/postgresql-view",id:"db/relational/postgresql/postgresql-view",isDocsHomePage:!1,title:"\u53ef\u66f4\u65b0\u89c6\u56fe",description:"\u53ef\u66f4\u65b0\u89c6\u56fe",source:"@site/notes/db/relational/postgresql/postgresql-view.md",slug:"/db/relational/postgresql/postgresql-view",permalink:"/notes/db/relational/postgresql/postgresql-view",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-view.md",version:"current",sidebar:"docs",previous:{title:"\u7248\u672c\u5386\u53f2",permalink:"/notes/db/relational/postgresql/version"},next:{title:"PostREST \u5165\u95e8\u90e8\u7f72",permalink:"/notes/db/relational/postgresql/postgrest-hello"}},c=[{value:"\u53ef\u66f4\u65b0\u89c6\u56fe",id:"\u53ef\u66f4\u65b0\u89c6\u56fe",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u53ef\u66f4\u65b0\u89c6\u56fe"},"\u53ef\u66f4\u65b0\u89c6\u56fe"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5217\u6ca1\u6709\u9ed8\u8ba4\u503c"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ON CONFLICT")," \u65e0\u6548"))),Object(o.b)("li",{parentName:"ul"},"\u9650\u5236",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"FROM \u53ea\u80fd\u6709\u4e00\u4e2a\u8868\uff0c\u53ef\u4ee5\u662f\u53e6\u5916\u4e00\u4e2a\u53ef\u66f4\u65b0\u89c6\u56fe"),Object(o.b)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b WITH, DISTINCT, GROUP BY, HAVING, LIMIT, OFFSET"),Object(o.b)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b\u96c6\u5408\u64cd\u4f5c UNION, INTERSECT, EXCEPT"),Object(o.b)("li",{parentName:"ul"},"\u89c6\u56fe\u5217\u4e0d\u5141\u8bb8\u5305\u542b\u805a\u5408\u3001\u7a97\u53e3\u51fd\u6570\u3001\u96c6\u5408\u8fd4\u56de\u51fd\u6570"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://hasura.io/blog/the-pros-and-cons-of-updatable-views/"},"The pros and cons of updatable views in PostgreSQL"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE articles (\n  id integer NOT NULL PRIMARY KEY\n  , title text NOT NULL\n  , description text\n  , public bool NOT NULL DEFAULT 'false'\n);\n\nCREATE VIEW public_articles AS\n  SELECT * FROM articles\n  WHERE public;\n")))}s.isMDXComponent=!0}}]);