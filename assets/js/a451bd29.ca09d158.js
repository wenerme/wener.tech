/*! For license information please see a451bd29.ca09d158.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14380],{1936:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(2488),t=o(62780);const s={title:"pgroonga"},l="pgroonga",i={id:"db/relational/postgresql/pgroonga",title:"pgroonga",description:"- pgroonga/pgroonga",source:"@site/../notes/db/relational/postgresql/pgroonga.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/pgroonga",permalink:"/notes/db/relational/postgresql/pgroonga",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/pgroonga.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633940899,formattedLastUpdatedAt:"Oct 11, 2021",frontMatter:{title:"pgroonga"},sidebar:"docs",previous:{title:"pgloader",permalink:"/notes/db/relational/postgresql/pgloader"},next:{title:"pgweb",permalink:"/notes/db/relational/postgresql/pgweb"}},a={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pgroonga",children:"pgroonga"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/pgroonga/pgroonga",children:"pgroonga/pgroonga"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u57fa\u4e8e ",(0,r.jsx)(n.a,{href:"https://groonga.org/",children:"Groonga"})]}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u7d22\u5f15 string int array jsonb"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u64cd\u4f5c\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"&@ \u641c\u7d22\u5355\u4e2a\u5173\u952e\u8bcd"}),"\n",(0,r.jsxs)(n.li,{children:["&@~ \u641c\u7d22\u591a\u4e2a\u5173\u952e\u8bcd ",(0,r.jsx)(n.code,{children:"Hello OR Hi"})," - \u9ed8\u8ba4\u7a7a\u683c\u95f4\u9694\u4e3a AND \u5173\u7cfb"]}),"\n",(0,r.jsxs)(n.li,{children:["LIKE - ",(0,r.jsx)(n.code,{children:"like '%engine%'"})," -> ",(0,r.jsx)(n.code,{children:"&@ 'engine'"})]}),"\n",(0,r.jsx)(n.li,{children:"ILIKE"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"&~"})," \u6b63\u5219"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"&@*"})," \u76f8\u4f3c\u641c\u7d22"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["pgroonga_snippet_html - \u9ad8\u4eae\u5185\u5bb9\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:'<span class="keyword">fast</span>'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pgroonga.github.io/reference/functions/pgroonga-tokenize.html",children:"pgroonga_tokenize"})}),"\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4 TokenBigram"}),"\n",(0,r.jsxs)(n.li,{children:["double precision pgroonga_score(tableoid, ctid)\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5206\u6570 - \u591a\u5c11\u4e2a\u8bcd\u5339\u914d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u57fa\u4e8e postgres:12-alpine\ndocker pull groonga/pgroonga:latest-alpine-12\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create extension if not exists pgroonga;\n\nCREATE TABLE memos (\n  id integer,\n  content text\n);\nCREATE INDEX pgroonga_content_index ON memos USING pgroonga (content);\n\n-- \u6d4b\u8bd5\u7981\u7528 seqscan \u5f3a\u5236\u8d70\u7d22\u5f15\nSET enable_seqscan = off;\n\n-- \u57fa\u4e8e\u5206\u6570\u6392\u5e8f\nSELECT *, pgroonga_score(tableoid, ctid) AS score\nFROM score_memos\nWHERE content &@ 'PGroonga' OR content &@ 'PostgreSQL'\nORDER BY pgroonga_score(tableoid, ctid) DESC;\n\n-- \u5982\u679c\u81ea\u5df1\u52a0\u4e86 friso \u63d2\u4ef6\uff0c\u53ef\u4ee5\u6ce8\u518c\nSELECT pgroonga_command('register tokenizer/friso');\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},38088:(e,n,o)=>{var r=o(96651),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var r,s={},c=null,d=null;for(r in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},2488:(e,n,o)=>{e.exports=o(38088)},62780:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>l});var r=o(96651);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);