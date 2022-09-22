"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57612],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4847:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"psql"},p="psql",s={unversionedId:"db/relational/postgresql/psql",id:"db/relational/postgresql/psql",title:"psql",description:"| command        | for                      |",source:"@site/../notes/db/relational/postgresql/psql.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/psql",permalink:"/notes/db/relational/postgresql/psql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/psql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"psql"},sidebar:"docs",previous:{title:"PostREST \u5165\u95e8\u90e8\u7f72",permalink:"/notes/db/relational/postgresql/postgrest-hello"},next:{title:"Spilo",permalink:"/notes/db/relational/postgresql/spilo"}},d={},u=[],m={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"psql"},"psql"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"command"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\c <db>")),(0,l.kt)("td",{parentName:"tr",align:null},"switch database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\dn")),(0,l.kt)("td",{parentName:"tr",align:null},"list schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\ds")),(0,l.kt)("td",{parentName:"tr",align:null},"list relation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\dt *.*")),(0,l.kt)("td",{parentName:"tr",align:null},"list all table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\dt")),(0,l.kt)("td",{parentName:"tr",align:null},"list public schema table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\du")),(0,l.kt)("td",{parentName:"tr",align:null},"list users")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\dx")),(0,l.kt)("td",{parentName:"tr",align:null},"list extensions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\l")),(0,l.kt)("td",{parentName:"tr",align:null},"list database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\df[amptwS+]")),(0,l.kt)("td",{parentName:"tr",align:null},"list functions")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a - agg"),(0,l.kt)("li",{parentName:"ul"},"n - normal"),(0,l.kt)("li",{parentName:"ul"},"p - procedure"),(0,l.kt)("li",{parentName:"ul"},"t - trigger"),(0,l.kt)("li",{parentName:"ul"},"w - window"),(0,l.kt)("li",{parentName:"ul"},"S - system object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+")," - \u989d\u5916\u4fe1\u606f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-h,--host=hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-p,--port=port")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4f7f\u7528\u94fe\u63a5\u5b57\u7b26\u4e32\npsql "service=myservice sslmode=require"\npsql postgresql://dbmaster:5433/mydb?sslmode=require\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/app-psql.html"},"psql"))))}c.isMDXComponent=!0}}]);