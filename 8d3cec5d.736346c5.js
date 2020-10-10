(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{398:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),l=(a(0),a(618)),i={id:"java-8",title:"Java 8"},o={id:"java/version/java-8",title:"Java 8",description:"# Java 8",source:"@site/../tricks/java/version/java-8.md",permalink:"/notes/java/version/java-8",sidebar:"docs",previous:{title:"Java 9",permalink:"/notes/java/version/java-9"},next:{title:"Java 7",permalink:"/notes/java/version/java-7"}},b=[{value:"Contents",id:"contents",children:[]},{value:"Java EE 8",id:"java-ee-8",children:[]},{value:"CompletableFuture",id:"completablefuture",children:[]},{value:"vJUG24 Session on Optional",id:"vjug24-session-on-optional",children:[]},{value:"BUGS",id:"bugs",children:[{value:"JDK-8064803",id:"jdk-8064803",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"java-8"},"Java 8"),Object(l.b)("h2",{id:"contents"},"Contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr337/index.html"}),"JSR-000337 JavaTM SE 8 Release Contents"))),Object(l.b)("h2",{id:"java-ee-8"},"Java EE 8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://jcp.org/aboutJava/communityprocess/edr/jsr366/index.html"}),"JSR-000366 JavaTM Platform, Enterprise Edition 8"))),Object(l.b)("h2",{id:"completablefuture"},"CompletableFuture"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684 Promise"),Object(l.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e Guava \u4e2d\u7684 SettableFuture, ListenableFuture"),Object(l.b)("li",{parentName:"ul"},"\u548c  ExecutorCompletionService \u4e5f\u6709\u4e9b\u7c7b\u4f3c"),Object(l.b)("li",{parentName:"ul"},"\u5f88\u597d\u7684\u652f\u6301 Lambda"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://dzone.com/articles/java-8-completablefuture"}),"Java 8: CompletableFuture in action")),Object(l.b)("li",{parentName:"ul"},"\u7f3a\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CompletableFuture.allOf()")," \u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"li"},"CompletableFuture<Void>")),Object(l.b)("li",{parentName:"ul"},"\u5c06 Guava \u4e2d ",Object(l.b)("inlineCode",{parentName:"li"},"settable")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"listenable")," future \u7684\u529f\u80fd\u6df7\u5408\u5728\u4e86\u4e00\u8d77. ",Object(l.b)("inlineCode",{parentName:"li"},"complete()")," \u65b9\u6cd5\u53ef\u80fd\u9519\u8bef\u7684\u88ab\u7528\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528,\u5bfc\u81f4\u7a0b\u5e8f\u5f02\u5e38."),Object(l.b)("li",{parentName:"ul"},"API \u6570\u91cf\u8fc7\u591a.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u5206\u79bb ",Object(l.b)("inlineCode",{parentName:"li"},"settable")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"listenable")," \u7684\u529f\u80fd\u4f1a\u89e3\u51b3\u5f88\u591a\u95ee\u9898.")))))),Object(l.b)("h2",{id:"vjug24-session-on-optional"},"vJUG24 Session on Optional"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stuartmarks.wordpress.com/2016/09/27/vjug24-session-on-optional/"}),"vJUG24 Session on Optional"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stuartmarks.files.wordpress.com/2016/09/optionalmotherofallbikesheds3.pdf"}),"PDF")))),Object(l.b)("li",{parentName:"ul"},"Optional is intended to provide a limited mechanism for library method return types where there is a clear need to represent \u201cno result,\u201d and where using null for that is overwhelmingly likely to cause errors. "),Object(l.b)("li",{parentName:"ul"},"\u57fa\u672c\u89c4\u5219",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"\u4e0d\u8981\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"null")," \u4f5c\u4e3a Optional \u53d8\u91cf\u6216\u8fd4\u56de\u503c"),Object(l.b)("li",{parentName:"ol"},"\u9664\u975e\u4f60\u80fd\u4fdd\u8bc1 Optional \u503c\u5b58\u5728\u5426\u5219\u4e0d\u8981\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"Optional.get()")),Object(l.b)("li",{parentName:"ol"},"\u5c3d\u91cf\u9009\u62e9\u6216\u5b9e\u73b0\u5176\u4ed6\u7684\u63a5\u53e3\u6765\u907f\u514d\u8fdb\u884c ",Object(l.b)("inlineCode",{parentName:"li"},"Optional.isPresent()")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"Optional.get()")," \u64cd\u4f5c"),Object(l.b)("li",{parentName:"ol"},"\u907f\u514d\u901a\u8fc7\u4f7f\u7528 Optional \u6765\u83b7\u53d6\u4e00\u4e2a\u503c. ",Object(l.b)("inlineCode",{parentName:"li"},"Optional.ofNullable(x).orElse(y)")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"x == null? y: x")),Object(l.b)("li",{parentName:"ol"},"\u5982\u679c Optional \u7684\u5185\u5bb9\u8fd8\u662f\u4e00\u4e2a Optional, \u90a3\u8fd9\u5c31\u592a\u8fc7\u4e8e\u590d\u6742\u4e86"))),Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u4e8b\u9879",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u65b9\u6cd5\u53c2\u6570"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u96c6\u5408"))),Object(l.b)("li",{parentName:"ul"},"\u8bb0\u4f4f Optional \u662f\u4e00\u4e2a\u5c01\u88c5, \u6bcf\u4e2a Optional \u662f\u4e2a\u989d\u5916\u7684\u5bf9\u8c61\u4f1a\u5360\u7528 16 \u5b57\u8282\u7684\u8d44\u6e90, \u4f1a\u521b\u5efa\u66f4\u591a\u7684\u5f85\u88ab gc \u7684\u5bf9\u8c61")),Object(l.b)("h2",{id:"bugs"},"BUGS"),Object(l.b)("h3",{id:"jdk-8064803"},"JDK-8064803"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.dogan.io/2015/03/02/java-8-compiler-bug/"}),"Story of a Java 8 Compiler Bug (JDK-8064803)"))))}p.isMDXComponent=!0},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return a?r.a.createElement(O,o(o({ref:t},c),{},{components:a})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);