"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25090],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||g[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e};const u={title:"pgroonga"},m="pgroonga",f={unversionedId:"db/relational/postgresql/pgroonga",id:"db/relational/postgresql/pgroonga",title:"pgroonga",description:"- pgroonga/pgroonga",source:"@site/../notes/db/relational/postgresql/pgroonga.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgroonga",permalink:"/notes/db/relational/postgresql/pgroonga",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/pgroonga.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633940899,formattedLastUpdatedAt:"Oct 11, 2021",frontMatter:{title:"pgroonga"},sidebar:"docs",previous:{title:"pgloader",permalink:"/notes/db/relational/postgresql/pgloader"},next:{title:"pgweb",permalink:"/notes/db/relational/postgresql/pgweb"}},d={},b=[],k={toc:b};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},k),c),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",g({},{id:"pgroonga"}),"pgroonga"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://github.com/pgroonga/pgroonga"}),"pgroonga/pgroonga"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,r.kt)("a",g({parentName:"li"},{href:"https://groonga.org/"}),"Groonga")),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7d22\u5f15 string int array jsonb"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u64cd\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"&@ \u641c\u7d22\u5355\u4e2a\u5173\u952e\u8bcd"),(0,r.kt)("li",{parentName:"ul"},"&@~ \u641c\u7d22\u591a\u4e2a\u5173\u952e\u8bcd ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello OR Hi")," - \u9ed8\u8ba4\u7a7a\u683c\u95f4\u9694\u4e3a AND \u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"LIKE - ",(0,r.kt)("inlineCode",{parentName:"li"},"like '%engine%'")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"&@ 'engine'")),(0,r.kt)("li",{parentName:"ul"},"ILIKE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&~")," \u6b63\u5219"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&@*")," \u76f8\u4f3c\u641c\u7d22"))),(0,r.kt)("li",{parentName:"ul"},"pgroonga_snippet_html - \u9ad8\u4eae\u5185\u5bb9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<span class="keyword">fast</span>')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://pgroonga.github.io/reference/functions/pgroonga-tokenize.html"}),"pgroonga_tokenize")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 TokenBigram"),(0,r.kt)("li",{parentName:"ul"},"double precision pgroonga_score(tableoid, ctid)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5206\u6570 - \u591a\u5c11\u4e2a\u8bcd\u5339\u914d")))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"# \u57fa\u4e8e postgres:12-alpine\ndocker pull groonga/pgroonga:latest-alpine-12\n")),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-sql"}),"create extension if not exists pgroonga;\n\nCREATE TABLE memos (\n  id integer,\n  content text\n);\nCREATE INDEX pgroonga_content_index ON memos USING pgroonga (content);\n\n-- \u6d4b\u8bd5\u7981\u7528 seqscan \u5f3a\u5236\u8d70\u7d22\u5f15\nSET enable_seqscan = off;\n\n-- \u57fa\u4e8e\u5206\u6570\u6392\u5e8f\nSELECT *, pgroonga_score(tableoid, ctid) AS score\nFROM score_memos\nWHERE content &@ 'PGroonga' OR content &@ 'PostgreSQL'\nORDER BY pgroonga_score(tableoid, ctid) DESC;\n\n-- \u5982\u679c\u81ea\u5df1\u52a0\u4e86 friso \u63d2\u4ef6\uff0c\u53ef\u4ee5\u6ce8\u518c\nSELECT pgroonga_command('register tokenizer/friso');\n")))}y.isMDXComponent=!0}}]);