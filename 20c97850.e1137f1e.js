(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=m(a),O=n,j=u["".concat(b,".").concat(O)]||u[O]||p[O]||l;return a?r.a.createElement(j,c(c({ref:t},i),{},{components:a})):r.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},203:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),l=(a(0),a(1021)),b={title:"Guava \u7b80\u4ecb",slug:"guava-intro",date:new Date("2015-10-02T00:00:00.000Z"),tags:["Java"]},c={permalink:"/story/guava-intro",editUrl:"https://github.com/wenerme/wener/edit/master/story/2015/2015-10-02-guava-intro.md",source:"@site/story/2015/2015-10-02-guava-intro.md",description:"Overviews - Five Ws",date:"2015-10-02T00:00:00.000Z",tags:[{label:"Java",permalink:"/story/tags/java"}],title:"Guava \u7b80\u4ecb",readingTime:1.175,truncated:!0,prevItem:{title:"BBVM - BeBasic Virtual Machine",permalink:"/story/bbvm"},nextItem:{title:"\u8f6c\u6218 Hugo, \u535a\u5ba2\u8fc1\u79fb\u4e4b\u8def",permalink:"/story/2015/09/25/blog-hugo"}},o=[{value:"Overviews - Five Ws",id:"overviews---five-ws",children:[]},{value:"Features",id:"features",children:[]},{value:"Who use Guava",id:"who-use-guava",children:[]},{value:"vs common-lang",id:"vs-common-lang",children:[]},{value:"Reference",id:"reference",children:[]}],i={toc:o};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overviews---five-ws"},"Overviews - Five Ws"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u95ee\u9898"),Object(l.b)("th",{parentName:"tr",align:null},"\u7b54\u6848"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u662f\u4ec0\u4e48"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e00\u5957\u5f00\u6e90\u7684 Java \u516c\u5171\u7ec4\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8c01\u5f00\u53d1\u7684"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u7531 Google \u5de5\u7a0b\u5e08\u5f00\u53d1\u7ef4\u62a4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u54ea\u91cc\u7528"),Object(l.b)("td",{parentName:"tr",align:null},"\u6240\u6709\u4f7f\u7528 Java \u7684\u5730\u65b9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u4ec0\u4e48\u65f6\u5019\u51fa\u73b0\u7684"),Object(l.b)("td",{parentName:"tr",align:null},"2008 \u5e74\u4e5d\u6708 \u7b2c\u4e00\u4e2a Google Collection \u7248\u672c\u51fa\u73b0\u5728 ",Object(l.b)("a",{parentName:"td",href:"http://mvnrepository.com/artifact/com.google.collections/google-collections"},"maven \u4ed3\u5e93"),";",Object(l.b)("br",null),"2010 \u5e74\u56db\u6708\u7b2c\u4e00\u4e2a Guava \u7248\u672c\u51fa\u73b0\u5728",Object(l.b)("a",{parentName:"td",href:"http://mvnrepository.com/artifact/com.google.guava/guava"},"maven \u4ed3\u5e93"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u4ec0\u4e48\u4f7f\u7528"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528 ?")))),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"TIPS")," \u53ef\u53c2\u8003",Object(l.b)("a",{parentName:"p",href:"https://code.google.com/p/guava-libraries/wiki/GuavaExplained"},"GuavaExplained"),"\u7684\u5de6\u8fb9\u680f.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u96c6\u5408\u521d\u59cb\u5316\u5de5\u5177\u548c\u8f85\u52a9\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"\u6709\u9650\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5e38\u7528\u7684\u7279\u6b8a\u96c6\u5408\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"\u6392\u5e8f\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u603b\u7ebf"),Object(l.b)("li",{parentName:"ul"},"\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u5e76\u53d1\u8f85\u52a9\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"\u539f\u5b50\u7c7b\u578b\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"IO \u8f85\u52a9"),Object(l.b)("li",{parentName:"ul"},"\u54c8\u5e0c\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u53cd\u5c04\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u6570\u5b66\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"....")),Object(l.b)("h2",{id:"who-use-guava"},"Who use Guava"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728 Maven \u4e2d\u592e\u4ed3\u5e93\u5927\u7ea6\u6709 ",Object(l.b)("a",{parentName:"li",href:"http://mvnrepository.com/artifact/com.google.guava/guava"},"4500")," \u4e2a\u9879\u76ee\u4f9d\u8d56 Guava"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://code.google.com/p/guava-libraries/wiki/FriendsOfGuava"},"FriendsOfGuava")," \u5217\u4e3e\u4e86\u4e00\u4e9b Guava \u53cb\u597d\u7684\u9879\u76ee"),Object(l.b)("li",{parentName:"ul"},"\u5e38\u89c1\u7684\u4f7f\u7528 Guava \u7684\u9879\u76ee\n",Object(l.b)("em",{parentName:"li"}," GSON\n")," Guice\n",Object(l.b)("em",{parentName:"li"}," Hadoop,HBase,Spark \u7b49 Hadoop \u751f\u6001\u5708\u9879\u76ee\n")," Cassandra ","*"," ....")),Object(l.b)("h2",{id:"vs-common-lang"},"vs common-lang"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maven \u4e2d\u592e\u4ed3\u5e93\u5927\u7ea6\u6709 ",Object(l.b)("a",{parentName:"li",href:"http://mvnrepository.com/artifact/commons-lang/commons-lang"},"3500")," \u4e2a\u9879\u76ee\u4f9d\u8d56 commons-lang"),Object(l.b)("li",{parentName:"ul"},"Maven \u4e2d\u592e\u4ed3\u5e93\u5927\u7ea6\u6709 ",Object(l.b)("a",{parentName:"li",href:"http://mvnrepository.com/artifact/org.apache.commons/commons-lang3"},"2000")," \u4e2a\u9879\u76ee\u4f9d\u8d56 ",Object(l.b)("a",{parentName:"li",href:"http://commons.apache.org/proper/commons-lang/"},"commons-lang3")),Object(l.b)("li",{parentName:"ul"},"Maven \u4e2d\u592e\u4ed3\u5e93\u5927\u7ea6\u6709 ",Object(l.b)("a",{parentName:"li",href:"http://mvnrepository.com/artifact/com.google.guava/guava"},"4500")," \u4e2a\u9879\u76ee\u4f9d\u8d56 Guava")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"-"),Object(l.b)("th",{parentName:"tr",align:null},"\u7248\u672c"),Object(l.b)("th",{parentName:"tr",align:null},"\u751f\u4ea7\u65e5\u671f"),Object(l.b)("th",{parentName:"tr",align:null},"\u5927\u5c0f"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Guava"),Object(l.b)("td",{parentName:"tr",align:null},"18.0"),Object(l.b)("td",{parentName:"tr",align:null},"2014.8"),Object(l.b)("td",{parentName:"tr",align:null},"2.2 MB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"commons-lang3"),Object(l.b)("td",{parentName:"tr",align:null},"v3.4"),Object(l.b)("td",{parentName:"tr",align:null},"2015.4"),Object(l.b)("td",{parentName:"tr",align:null},"425 KB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"commons-lang"),Object(l.b)("td",{parentName:"tr",align:null},"v2.6"),Object(l.b)("td",{parentName:"tr",align:null},"2015.4"),Object(l.b)("td",{parentName:"tr",align:null},"278 KB")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"TIPS"),"\nGuava \u5e76\u6ca1\u6709\u5c06\u5404\u4e2a\u6a21\u5757\u5206\u79bb\u5f00\u6765,\u800c\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5927\u7684 jar \u5305,\u5b98\u65b9\u63a8\u8350\u7684\u662f,\u4f7f\u7528 ProGuard \u6765\u5254\u9664\u81ea\u5df1\u4e0d\u4f7f\u7528\u7684\u5185\u5bb9\ncommons-lang \u53ea\u662f Apache Commons \u4e0b\u7684\u4e00\u5c0f\u90e8\u5206,\u5176\u4ed6\u7684\u8fd8\u6709 commons-io \u7b49")),Object(l.b)("p",null,"Guava \u4e0e Commons-Lang \u5e76\u4e0d\u662f\u76f8\u4e92\u5bf9\u7acb\u7684\u5173\u7cfb,\u800c\u662f\u53ef\u4ee5\u76f8\u4e92\u5e76\u5b58\u7684,\u5176\u4ea4\u96c6\u53ef\u80fd\u5728\u96c6\u5408\u5de5\u5177\u7ec4\u4ef6\u8f83\u591a,\u800c\u5176\u4ed6\u65b9\u9762\u90fd\u662f\u5404\u6709\u6240\u957f,\u56e0\u4e3a\u5e76\u975e\u4e8c\u9009\u4e00\u7684\u95ee\u9898."),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/google/guava"},"Guava@Github")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://code.google.com/p/guava-libraries/wiki/GuavaExplained"},"GuavaExplained")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/goldmansachs/gs-collections"},"gs-collections")," A supplement or replacement for the Java Collections Framework.")))}m.isMDXComponent=!0}}]);