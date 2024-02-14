/*! For license information please see 8c1940f2.8a55ba28.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67444],{82080:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=s(2488),r=s(62780);const i={id:"fts",title:"PostgreSQL \u5168\u6587\u68c0\u7d22"},t="PostgreSQL \u5168\u6587\u68c0\u7d22",c={id:"db/relational/postgresql/fts",title:"PostgreSQL \u5168\u6587\u68c0\u7d22",description:"- \u7b80\u5355\u573a\u666f - 80%: like \u6216 fuzzystrmatch",source:"@site/../notes/db/relational/postgresql/postgresql-fts.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/fts",permalink:"/notes/db/relational/postgresql/fts",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-fts.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685890478,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{id:"fts",title:"PostgreSQL \u5168\u6587\u68c0\u7d22"},sidebar:"docs",previous:{title:"PostgreSQL FDW",permalink:"/notes/db/relational/postgresql/fdw"},next:{title:"Functions",permalink:"/notes/db/relational/postgresql/func"}},d={},h=[{value:"pg_trgm",id:"pg_trgm",level:2},{value:"\u6a21\u7cca\u641c\u7d22",id:"\u6a21\u7cca\u641c\u7d22",level:2},{value:"zhparser",id:"zhparser",level:2},{value:"\u5185\u5efa\u5168\u6587\u641c\u7d22",id:"\u5185\u5efa\u5168\u6587\u641c\u7d22",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"postgresql-\u5168\u6587\u68c0\u7d22",children:"PostgreSQL \u5168\u6587\u68c0\u7d22"}),"\n",(0,l.jsx)(n.admonition,{title:"\u600e\u4e48\u9009\u62e9",type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7b80\u5355\u573a\u666f - 80%: like \u6216 fuzzystrmatch\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u91cf\u5c11 - \u4e1a\u52a1\u6570\u636e - \u80fd\u591f\u626b\u8868"}),"\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u7ecf\u5e38\u53d8\u5316"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u57fa\u7840\u573a\u666f - 15%: \u5185\u5efa tssearch + \u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6 - zhparser,pg_trgm\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6570\u636e\u91cf\u5927 - \u9700\u8981\u7d22\u5f15"}),"\n",(0,l.jsx)(n.li,{children:"\u68c0\u7d22\u5927\u91cf\u6587\u672c"}),"\n",(0,l.jsx)(n.li,{children:"\u76f8\u5173\u6027\u6392\u5e8f"}),"\n",(0,l.jsx)(n.li,{children:"\u4e2d\u6587\u5206\u8bcd\u64cd\u4f5c\u8d77\u6765\u6709\u70b9\u9ebb\u70e6\uff0c\u4f46\u5b9a\u5236\u6027\u9ad8"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6269\u5c55\u573a\u666f - 3%: \u4e0d\u8003\u8651\u4f7f\u7528\u5185\u5efa FTS \u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"/notes/db/relational/postgresql/pgroonga",children:"pgroonga"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9700\u8981\u652f\u6301\u8865\u5168\u548c\u591a\u79cd\u8bed\u8a00"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u641c\u7d22\u5f15\u64ce\u573a\u666f - 2%: Solr, Elasticsearch\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u8981\u4f7f\u7528 PG - \u5c06\u6570\u636e\u540c\u6b65\u5230\u4e13\u4e1a\u7684\u641c\u7d22\u5f15\u64ce"}),"\n",(0,l.jsx)(n.li,{children:"\u7d22\u5f15\u7684\u5185\u5bb9\u4e0d\u600e\u4e48\u53d8\u5316"}),"\n",(0,l.jsx)(n.li,{children:"\u4e13\u95e8\u505a\u7d22\u5f15\u4e1a\u52a1"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6269\u5c55\u573a\u666f - pgvector, postgresql ml\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5411\u91cf\u5316"}),"\n",(0,l.jsx)(n.li,{children:"Embedding"}),"\n",(0,l.jsx)(n.li,{children:"\u7406\u89e3\u81ea\u7136\u8bed\u8a00"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7279\u6b8a\u573a\u666f\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"GEO - PostGIS"}),"\n",(0,l.jsx)(n.li,{children:"\u5bfb\u8def - pgRouting"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53ef\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"https://github.com/postgrespro/rum",children:"postgrespro/rum"})," \u7d22\u5f15\u63d0\u9ad8\u6548\u7387\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e GIN \u7d22\u5f15"}),"\n",(0,l.jsx)(n.li,{children:"\u6392\u5e8f\u66f4\u5feb"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u989d\u5916\u5b57\u6bb5\u4fe1\u606f"}),"\n",(0,l.jsx)(n.li,{children:"\u6784\u5efa\u548c\u63d2\u5165\u66f4\u6162"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=27973497",children:"https://news.ycombinator.com/item?id=27973497"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.postgresql.eu/events/pgconfeu2018/sessions/session/2116/slides/137/pgconf.eu-2018-fts.pdf",children:"Do you need a Full-Text Search in PostgreSQL ?"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e2d\u6587\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/jaiminpan/pg_jieba",children:"jaiminpan/pg_jieba"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/amutu/zhparser",children:"amutu/zhparser"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pg_trgm",children:"pg_trgm"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5c06\u6587\u672c\u8fdb\u884c ",(0,l.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/N-gram",children:"ngram"})," \u5206\u8bcd"]}),"\n",(0,l.jsx)(n.li,{children:"\u66b4\u529b\u641c\u7d22\uff0c\u53ef\u4ee5\u88ab\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.li,{children:["\u4eca\u5929\u5929\u6c14\u5f88\u597d\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["2 -> ",(0,l.jsx)(n.code,{children:"\u4eca\u5929 \u5929\u6c14 \u5f88\u597d"})]}),"\n",(0,l.jsxs)(n.li,{children:["3 -> ",(0,l.jsx)(n.code,{children:"\u4eca\u5929\u5929 \u6c14\u5f88\u597d"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create extension pg_trgm;\n\n-- 0.2\nselect similarity('\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u4f60\u8fd8\u597d\u4e48\uff1f','\u4eca\u5929\u4f60\u597d\u4e48');\n\n-- \u5206\u8bcd\nselect show_trgm('\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u4f60\u8fd8\u597d\u4e48\uff1f');\n\n-- \u7d22\u5f15\nCREATE TABLE words AS SELECT word FROM\n        ts_stat('SELECT to_tsvector(''simple'', bodytext) FROM documents');\nCREATE INDEX words_idx ON words USING GIN (word gin_trgm_ops);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6a21\u7cca\u641c\u7d22",children:"\u6a21\u7cca\u641c\u7d22"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/fuzzystrmatch.html",children:"\u6a21\u7cca\u5339\u914d"})}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u80fd\u88ab\u7d22\u5f15"}),"\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d soundex, metaphone, dmetaphone \u5bf9 UTF8 \u652f\u6301\u4e0d\u592a\u597d"}),"\n",(0,l.jsx)(n.li,{children:"\u56e0\u6b64\u53ef\u9009\u9879\u53ea\u6709 levenshtein"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create extension fuzzystrmatch;\n\n-- \u6765\u6587\u65af\u5766\u8ddd\u79bb\n-- 7\nselect levenshtein('\u4eca\u5929\u5929\u6c14\u5f88\u597d\uff0c\u4f60\u8fd8\u597d\u4e48\uff1f','\u4eca\u5929\u4f60\u597d\u4e48');\n"})}),"\n",(0,l.jsx)(n.h2,{id:"zhparser",children:"zhparser"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e2d\u6587\u5206\u8bcd"}),"\n",(0,l.jsxs)(n.li,{children:["\u57fa\u4e8e ",(0,l.jsx)(n.a,{href:"http://www.xunsearch.com/scws",children:"scws"})," \u5206\u8bcd\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/hightman/scws",children:"hightman/scws"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5185\u5efa\u5168\u6587\u641c\u7d22",children:"\u5185\u5efa\u5168\u6587\u641c\u7d22"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u80fd\u652f\u6301\u4e2d\u6587 - \u65e0\u6cd5\u5206\u8bcd"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/textsearch.html",children:"Full Text Search"})}),"\n",(0,l.jsx)(n.li,{children:"\u57fa\u4e8e\u6587\u6863\u7684\u5012\u6392\u7d22\u5f15"}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528 GIN \u8fdb\u884c\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/textsearch-limitations.html",children:"\u9650\u5236"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"lexeme < 2Kb"}),"\n",(0,l.jsx)(n.li,{children:"tsvector (lexemes + positions) < 1Mb"}),"\n",(0,l.jsx)(n.li,{children:"lexemes \u6570\u91cf < 2^64"}),"\n",(0,l.jsx)(n.li,{children:"tsvector \u4e2d\u7684\u4f4d\u7f6e > 0 < 16383"}),"\n",(0,l.jsxs)(n.li,{children:["The match distance in a ",(0,l.jsx)(n.code,{children:"<N>"})," (FOLLOWED BY) tsquery operator cannot be more than 16,384"]}),"\n",(0,l.jsx)(n.li,{children:"\u6bcf\u4e2a lexeme \u4e0d\u8d85\u8fc7 256 \u4e2a\u4f4d\u7f6e"}),"\n",(0,l.jsx)(n.li,{children:"The number of nodes (lexemes + operators) in a tsquery must be less than 32,768"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7c7b\u578b\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"document - \u6587\u6863"}),"\n",(0,l.jsx)(n.li,{children:"tsvector - \u6587\u672c\u641c\u7d22\u5411\u91cf"}),"\n",(0,l.jsx)(n.li,{children:"tsquery - \u6587\u672c\u67e5\u8be2\u5bf9\u8c61"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/textsearch-dictionaries.html",children:"\u5b57\u5178"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8f85\u52a9\u5206\u8bcd"}),"\n",(0,l.jsx)(n.li,{children:"\u8bb0\u5f55\u505c\u6b62\u8bcd"}),"\n",(0,l.jsxs)(n.li,{children:["\u7cfb\u7edf\u5206\u8bcd\u5b58\u50a8\u4e8e ",(0,l.jsx)(n.code,{children:"$SHAREDIR/tsearch_data/english.stop"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["SHAREDIR - ",(0,l.jsx)(n.code,{children:"pg_config --sharedir"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u5206\u8bcd\n-- have \u548c a \u4f1a\u88ab\u53bb\u6389 - 'day':4 'nice':3\n-- \u8bcd\u540e\u9762\u662f\u4f4d\u7f6e\n-- english \u53ef\u4ee5\u5199\u6210 pg_catalog.english\nSELECT to_tsvector('english', 'have a nice day');\n-- \u90fd\u4f1a\u4fdd\u7559 - 'a':2 'day':4 'have':1 'nice':3\nSELECT to_tsvector('simple', 'have a nice day');\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- \u81ea\u5b9a\u4e49\u5206\u8bcd\nCREATE TEXT SEARCH DICTIONARY public.simple_dict (\n    TEMPLATE = pg_catalog.simple,\n    STOPWORDS = english\n);\n\nALTER TEXT SEARCH DICTIONARY public.simple_dict ( Accept = false );\n\nSELECT ts_lexize('public.simple_dict','YeS');\n\n-- debug \u5206\u8bcd\u903b\u8f91\nSELECT * FROM ts_debug('english', 'Paris');\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},38088:(e,n,s)=>{var l=s(96651),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var l,i={},h=null,o=null;for(l in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,l)&&!d.hasOwnProperty(l)&&(i[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===i[l]&&(i[l]=n[l]);return{$$typeof:r,type:e,key:h,ref:o,props:i,_owner:c.current}}n.Fragment=i,n.jsx=h,n.jsxs=h},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var l=s(96651);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);