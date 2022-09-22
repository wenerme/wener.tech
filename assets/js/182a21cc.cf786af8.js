"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11216],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),v=r,j=m["".concat(o,".").concat(v)]||m[v]||c[v]||l;return a?n.createElement(j,i(i({ref:t},u),{},{components:a})):n.createElement(j,i({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38823:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return v},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],p={id:"java-10",title:"Java 10"},o="Java 10",s={unversionedId:"java/version/java-10",id:"java/version/java-10",title:"Java 10",description:"Tips",source:"@site/../notes/java/version/java-10.md",sourceDirName:"java/version",slug:"/java/version/java-10",permalink:"/notes/java/version/java-10",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/java/version/java-10.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"java-10",title:"Java 10"},sidebar:"docs",previous:{title:"Java\u7248\u672c",permalink:"/notes/java/version/"},next:{title:"Java 11",permalink:"/notes/java/version/java-11"}},u={},c=[{value:"Tips",id:"tips",level:2},{value:"JEPs",id:"jeps",level:2}],m={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java-10"},"Java 10"),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/projects/jdk/10"},"JDK 10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://cr.openjdk.java.net/~iris/se/10/latestSpec/"},"Final Release Specification"))),(0,l.kt)("h2",{id:"jeps"},"JEPs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"286: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/286"},"Local-Variable Type Inference"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"var")," \u4f5c\u4e3a\u672c\u5730\u53d8\u91cf\u7684\u63a8\u5bfc\u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},"296: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/296"},"Consolidate the JDK Forest into a Single Repository"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5408\u5e76 JDK \u5230\u4e00\u4e2a\u4ed3\u5e93"))),(0,l.kt)("li",{parentName:"ul"},"304: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/304"},"Garbage-Collector Interface"),"  "),(0,l.kt)("li",{parentName:"ul"},"307: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/307"},"Parallel Full GC for G1"),"  "),(0,l.kt)("li",{parentName:"ul"},"310: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/310"},"Application Class-Data Sharing"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55\u73b0\u6709\u7684 CDS\uff0c\u5141\u8bb8\u5e94\u7528\u7c7b\u88ab\u653e\u5728\u5171\u4eab\u7684\u5f52\u6863\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u5347\u542f\u52a8\u65f6\u95f4\uff0c\u4f18\u5316\u5185\u5b58\u5360\u7528"),(0,l.kt)("li",{parentName:"ul"},"CDS \u652f\u6301 JDK \u7684\u8fd0\u884c\u65f6\u955c\u50cf\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"$JAVA_HOME/lib/modules")," \u548c\u5e73\u53f0\u7cfb\u7edf\u7684\u5e94\u7528\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"CDS \u652f\u6301\u81ea\u5b9a\u4e49\u7684\u7c7b\u52a0\u8f7d\u5668"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Xshare:auto")," \u5728 cds \u5185\u5b58\u6620\u5c04\u5931\u8d25\u6216\u8005\u7c7b\u8def\u5f84\u4e0d\u5339\u914d\u65f6\u4e0d\u5f02\u5e38\uff0c\u53ea\u662f\u7981\u7528 cds")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u662f\u9ed8\u8ba4\u542f\u7528\u4e86 CDS \u7684\n# -XX:+UseAppCDS \u542f\u7528 app class loader \u7684 cds\n\n# \u8bb0\u5f55\u6240\u6709\u52a0\u8f7d\u7684\u7c7b\uff0c\u4e0d\u52a0 -XX:+UseAppCDS \u53ea\u4f1a\u663e\u793a\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u7c7b\njava -Xshare:off -XX:+UseAppCDS -XX:DumpLoadedClassList=hello.lst -cp hello.jar HelloWorld\n\n# \u521b\u5efa AppCDS\njava -Xshare:dump -XX:+UseAppCDS -XX:SharedClassListFile=hello.lst -XX:SharedArchiveFile=hello.jsa -cp hello.jar\n# \u4f7f\u7528 AppCDS \u5f52\u6863\njava -Xshare:on -XX:+UseAppCDS -XX:SharedArchiveFile=hello.jsa -cp hello.jar HelloWorld\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"312: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/312"},"Thread-Local Handshakes"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"HotSpot \u5728\u4e0d\u5f71\u54cd VM \u5168\u5c40\u7684\u524d\u63d0\u4e0b\u5b9e\u73b0\u5728\u7ebf\u7a0b\u4e0a\u6267\u884c\u56de\u8c03\u7684\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u5f97\u505c\u6b62\u5355\u4e2a\u7ebf\u7a0b\u7684\u6210\u672c\u8f83\u4f4e\uff0c\u800c\u4e0d\u662f\u505c\u6b62\u6240\u6709\u6216\u90fd\u4e0d\u505c\u6b62"))),(0,l.kt)("li",{parentName:"ul"},"313: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/313"},"Remove the Native-Header Generation Tool (javah)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"javah")," \u672c\u5730\u5934\u6587\u4ef6\u751f\u6210\u6839\u636e  "))),(0,l.kt)("li",{parentName:"ul"},"314: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/314"},"Additional Unicode Language-Tag Extensions"),"  "),(0,l.kt)("li",{parentName:"ul"},"316: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/316"},"Heap Allocation on Alternative Memory Devices"),"  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8 HotSpot VM \u80fd\u5728\u5176\u4ed6\u5185\u5b58\u8bbe\u5907\u4e0a\u7533\u8bf7\u5185\u5b58\uff0c\u4f8b\u5982 NV-DIMM"))),(0,l.kt)("li",{parentName:"ul"},"317: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/317"},"Experimental Java-Based JIT Compiler"),"  "),(0,l.kt)("li",{parentName:"ul"},"319: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/319"},"Root Certificates"),"  "),(0,l.kt)("li",{parentName:"ul"},"322: ",(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/322"},"Time-Based Release Versioning"))))}v.isMDXComponent=!0}}]);