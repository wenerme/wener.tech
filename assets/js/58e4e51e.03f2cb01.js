"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11214],{85899:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(96600),a=r(27279),o=(r(59496),r(3905)),l=["components"],i={title:"groonga"},c=void 0,s={unversionedId:"db/search/groonga",id:"db/search/groonga",title:"groonga",description:"- groonga/groonga",source:"@site/notes/db/search/groonga.md",sourceDirName:"db/search",slug:"/db/search/groonga",permalink:"/notes/db/search/groonga",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/search/groonga.md",tags:[],version:"current",frontMatter:{title:"groonga"},sidebar:"docs",previous:{title:"TiDB",permalink:"/notes/db/relational/tidb"},next:{title:"manticoresearch",permalink:"/notes/db/search/manticoresearch"}},u={},p=[],m={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/groonga/groonga"},"groonga/groonga"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LGPL-2.1, C"),(0,o.kt)("li",{parentName:"ul"},"\u641c\u7d22\u5f15\u64ce\u548c\u5217\u5b58\u50a8"),(0,o.kt)("li",{parentName:"ul"},"\u6709 MySQL \u548c PostgreSQL \u63d2\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5165"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 CS \u7ed3\u6784 - Groonga Query Transfer Protocol ",(0,o.kt)("a",{parentName:"li",href:"https://groonga.org/docs/spec/gqtp.html"},"GQTP")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://groonga.org/docs/reference/normalizers.html"},"normalizers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://groonga.org/docs/reference/tokenizers.html"},"tokenizers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://groonga.org/docs/reference/token_filters.html"},"token filters")),(0,o.kt)("li",{parentName:"ul"},"friso \u4e2d\u6587\u5206\u8bcd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lionsoul2014/friso"},"lionsoul2014/friso")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/groonga/groonga-tokenizer-friso"},"groonga/groonga-tokenizer-friso"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install groonga\ngroonga -n /tmp/test/test.db  # \u521b\u5efa\u6570\u636e\u5e93\ngroonga /tmp/test/test.db     # \u8fdb\u5165\u6570\u636e\u5e93\n\n# Docker\ndocker run -v $PWD/db:/db groonga/groonga /db\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"status"),(0,o.kt)("li",{parentName:"ul"},"table_list"),(0,o.kt)("li",{parentName:"ul"},"column_list"),(0,o.kt)("li",{parentName:"ul"},"table_create"),(0,o.kt)("li",{parentName:"ul"},"column_create"),(0,o.kt)("li",{parentName:"ul"},"select"),(0,o.kt)("li",{parentName:"ul"},"load"),(0,o.kt)("li",{parentName:"ul"},"quite")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"status\n\ntable_create --name Site --flags TABLE_HASH_KEY --key_type ShortText\nselect --table Site\n\ncolumn_create --table Site --name title --type ShortText\nselect --table Site\nload --table Site\n\nselect --table Site --query _id:1\nselect --table Site --query '_key:\"http://example.org/\"'\n\ntable_create --name Terms --flags TABLE_PAT_KEY --key_type ShortText --default_tokenizer TokenBigram --normalizer NormalizerAuto\ncolumn_create --table Terms --name blog_title --flags COLUMN_INDEX|WITH_POSITION --type Site --source title\n\n# \u5168\u6587\u641c\u7d22\nselect --table Site --query title:@this\n\nselect --table Site --match_columns title --query this\nselect --table Site --output_columns _key,title,_score --query title:@test\nselect --table Site --offset 0 --limit 3\n\nselect --table Site --sort_keys -_id\n")))}g.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);