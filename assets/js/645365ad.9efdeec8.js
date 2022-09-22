"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19952],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(a),k=r,g=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},71186:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],u={title:"bluge"},o="bluge",p={unversionedId:"languages/go/lib/bluge",id:"languages/go/lib/bluge",title:"bluge",description:"- blugelabs/bluge",source:"@site/../notes/languages/go/lib/bluge.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/bluge",permalink:"/notes/languages/go/lib/bluge",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/bluge.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"bluge"},sidebar:"docs",previous:{title:"atlas",permalink:"/notes/languages/go/lib/atlas"},next:{title:"chi",permalink:"/notes/languages/go/lib/chi"}},m={},c=[{value:"Notes",id:"notes",level:2}],s={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bluge"},"bluge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/blugelabs/bluge"},"blugelabs/bluge"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b57\u6bb5\u7c7b\u578b - Text, Numeric, Date, Geo Point",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u5b57\u5185\u90e8\u8868\u793a\u4e3a float64 - int \u53ea\u80fd\u7cbe\u786e\u5230 \xb12^53"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67e5\u8be2\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Term, Phrase, Match, Match Phrase, Prefix"),(0,l.kt)("li",{parentName:"ul"},"Conjunction, Disjunction, Boolean"),(0,l.kt)("li",{parentName:"ul"},"Numeric Range, Date Range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Okapi_BM25"},"BM25")))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u805a\u5408",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"sum, min, max, avg, weighted avg"),(0,l.kt)("li",{parentName:"ul"},"count"),(0,l.kt)("li",{parentName:"ul"},"duration"),(0,l.kt)("li",{parentName:"ul"},"cardinality estimation"),(0,l.kt)("li",{parentName:"ul"},"quantil approximation"),(0,l.kt)("li",{parentName:"ul"},"buckets"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/blugelabs/query_string"},"blugelabs/query_string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"blevel \u5f62\u5f0f\u7684\u67e5\u8be2\u5b57\u7b26\u4e32"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/blugelabs/ice"},"blugelabs/ice"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"segment plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/blevesearch/segment"},"blevesearch/segment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unicode Text Segmentation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.unicode.org/reports/tr29/"},"http://www.unicode.org/reports/tr29/")),(0,l.kt)("li",{parentName:"ul"},"SegmentWords"),(0,l.kt)("li",{parentName:"ul"},"ragel")))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u641c\u7d22\u5b57\u6bb5\u540d ",(0,l.kt)("inlineCode",{parentName:"li"},"_all")),(0,l.kt)("li",{parentName:"ul"},"analyzer.NewStandardAnalyzer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tokenizer.UnicodeTokenizer"),(0,l.kt)("li",{parentName:"ul"},"token.LowerCaseFilter"))),(0,l.kt)("li",{parentName:"ul"},"similarity.NewBM25Similarity"))),(0,l.kt)("li",{parentName:"ul"},"analyzer.Analyzer = CharFilters+Tokenizer+TokenFilters",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u91cc\u7684 \u9ed8\u8ba4 analyzer \u53ea\u7528\u4e8e\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b57\u6bb5\u5173\u8054 analyzer"))),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u63a8\u8350\u4f7f\u7528 Batch \u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u6392\u5e8f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_score")),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," \u524d\u7f00 \u8868\u793a desc"))),(0,l.kt)("li",{parentName:"ul"},"Tokenizer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ExceptionsTokenizer"),(0,l.kt)("li",{parentName:"ul"},"CharacterTokenizer"),(0,l.kt)("li",{parentName:"ul"},"RegexpTokenizer"),(0,l.kt)("li",{parentName:"ul"},"SingleTokenTokenizer"),(0,l.kt)("li",{parentName:"ul"},"UnicodeTokenizer"))),(0,l.kt)("li",{parentName:"ul"},"\u805a\u5408",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WithStandardAggregations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Count"),(0,l.kt)("li",{parentName:"ul"},"Duration"),(0,l.kt)("li",{parentName:"ul"},"max_score"))))),(0,l.kt)("li",{parentName:"ul"},"Query",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u7c7b\u578b\u7684 Searcher"),(0,l.kt)("li",{parentName:"ul"},"FuzzQuery - vellum, Levenshtein"),(0,l.kt)("li",{parentName:"ul"},"Prefix, Regex, Term, TermRange, Wildcard")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"batch.Insert(doc)\nbatch.Update(doc.ID(), doc)\nbatch.Delete(doc)\n")))}k.isMDXComponent=!0}}]);