"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31992],{49613:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var n=t(59496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(t),c=r,v=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return t?n.createElement(v,i(i({ref:a},u),{},{components:t})):n.createElement(v,i({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},19277:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var n=t(96600),r=t(27279),l=(t(59496),t(49613)),i=["components"],p={id:"java-11",title:"Java 11"},o=void 0,m={unversionedId:"java/version/java-11",id:"java/version/java-11",title:"Java 11",description:"- JDK 11",source:"@site/notes/java/version/java-11.md",sourceDirName:"java/version",slug:"/java/version/java-11",permalink:"/notes/java/version/java-11",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/version/java-11.md",tags:[],version:"current",frontMatter:{id:"java-11",title:"Java 11"},sidebar:"docs",previous:{title:"Java 10",permalink:"/notes/java/version/java-10"},next:{title:"Java 7",permalink:"/notes/java/version/java-7"}},u={},s=[{value:"\u53d8\u5316",id:"\u53d8\u5316",level:2},{value:"JEPs",id:"jeps",level:2}],k={toc:s};function c(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/projects/jdk/11/"},"JDK 11")),(0,l.kt)("li",{parentName:"ul"},"2018-09-25"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001 class \u6587\u4ef6\u5e38\u91cf"),(0,l.kt)("li",{parentName:"ul"},"Dynamic Class-File Constants"),(0,l.kt)("li",{parentName:"ul"},"Epsilon: A No-Op Garbage Collector"),(0,l.kt)("li",{parentName:"ul"},"Remove the Java EE and CORBA Modules"),(0,l.kt)("li",{parentName:"ul"},"HTTP Client"),(0,l.kt)("li",{parentName:"ul"},"Local-Variable Syntax for Lambda Parameters"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://winterbe.com/posts/2018/08/29/migrate-maven-projects-to-java-11-jigsaw/"},"\u8fc1\u79fb Maven \u9879\u76ee\u5230 Java 11"))))),(0,l.kt)("p",null,"It\u2019s time! Migrating to Java 11\n",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/criciumadev/5eb3868354f9"},"https://medium.com/criciumadev/5eb3868354f9")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29"},"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://mvnrepository.com/artifact/org.openjfx"},"http://mvnrepository.com/artifact/org.openjfx")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/"},"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/tools/javapackager.htm"},"https://docs.oracle.com/javase/10/tools/javapackager.htm")),(0,l.kt)("p",null,"Remove javapackager sources from OpenJFX repo\n",(0,l.kt)("a",{parentName:"p",href:"https://bugs.openjdk.java.net/browse/JDK-8203379"},"https://bugs.openjdk.java.net/browse/JDK-8203379")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin"},"https://github.com/javafx-maven-plugin/javafx-maven-plugin")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287"},"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/9/tools/jmod.htm"},"https://docs.oracle.com/javase/9/tools/jmod.htm")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://simply-how.com/getting-started-with-java-11"},"https://simply-how.com/getting-started-with-java-11")),(0,l.kt)("h2",{id:"\u53d8\u5316"},"\u53d8\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,l.kt)("inlineCode",{parentName:"li"},"Collection#toArray(IntFunction)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-XX:+UseDynamicNumberOfCompilerThreads"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u63a7\u5236\u7f16\u8bd1\u5668\u7ebf\u7a0b\u6570")))),(0,l.kt)("h2",{id:"jeps"},"JEPs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/181"},"181"),": Nest-Based Access Control",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5d4c\u5957\u7684\u6210\u5458\u8bbf\u95ee\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8be5\u8bbf\u95ee\u4e0a\u4e0b\u6587\u5141\u8bb8\u5d4c\u5957\u7684\u5185\u5bb9\u88ab\u7f16\u8bd1\u5230\u4e0d\u540c\u7684\u7c7b\u6587\u4ef6\uff0c\u5e76\u5141\u8bb8\u8bbf\u95ee\u5f7c\u6b64\u7684\u79c1\u6709\u6210\u5458"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5f88\u591a\u8bed\u8a00\u90fd\u8fd0\u884c\u4e00\u4e2a\u6e90\u6587\u4ef6\u5305\u542b\u591a\u4e2a\u7c7b\uff0c\u5bfc\u81f4\u5f7c\u6b64\u6210\u5458\u8bbf\u95ee\u65f6\u9700\u8981\u751f\u6210\u5305\u7ea7\u522b\u7684\u8bbf\u95ee\u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/309"},"309"),": Dynamic Class-File Constants",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u7c7b\u6587\u4ef6\u5e38\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u6587\u4ef6\u6dfb\u52a0\u65b0\u7684\u5e38\u91cf\u6c60 CONSTANT_Dynamic"),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u8f7d CONSTANT_Dynamic \u4f1a\u4ee3\u7406\u5230\u4e00\u4e2a\u542f\u52a8\u65b9\u6cd5\u4e0a\uff0c\u7c7b\u4f3c\u4e8e invokedynamic \u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u521b\u5efa\u53ef\u56fa\u5316\u7684\u7c7b\u6587\u4ef6\u5e38\u91cf\uff0c\u4e3a\u8bed\u8a00\u8bbe\u8ba1\u8005\u548c\u7f16\u8bd1\u5668\u5b9e\u73b0\u63d0\u4f9b\u66f4\u9ad8\u6548\u7b80\u4fbf\u7684\u64cd\u4f5c\u65b9\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/315"},"315"),": Improve Aarch64 Intrinsics",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5b57\u7b26\u4e32\u548c\u6570\u7ec4\u5185\u5efa\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316 java.lang.Math sin, cos \u548c log \u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/318"},"318"),": Epsilon: A No-Op Garbage Collector",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZeroGC - ZGC"),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u7ba1\u7406\u5185\u5b58\u8bf7\u6c42\u4f46\u4e0d\u4f1a\u56de\u6536\u5185\u5b58\uff0c\u5f53\u5185\u5b58\u7528\u5b8c\u65f6\u5219\u4f1a\u505c\u6b62 JVM"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/320"},"320"),": Remove the Java EE and CORBA Modules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ece JavaSE \u79fb\u9664 JavaEE \u548c CORBA \u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u81ea Java9 \u5e9f\u5f03"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u6a21\u5757",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"java.xml.ws - JAX-WS, SAAJ, Web Services Metadata"),(0,l.kt)("li",{parentName:"ul"},"java.xml.bind - JAXB"),(0,l.kt)("li",{parentName:"ul"},"java.activation - JAF"),(0,l.kt)("li",{parentName:"ul"},"java.xml.ws.annotation - Common Annotations"),(0,l.kt)("li",{parentName:"ul"},"java.corba - CORBA"),(0,l.kt)("li",{parentName:"ul"},"java.transaction - JTA"))),(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5173\u6a21\u5757",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"java.se.ee - Aggregator module for the six modules above"),(0,l.kt)("li",{parentName:"ul"},"jdk.xml.ws - Tools for JAX-WS"),(0,l.kt)("li",{parentName:"ul"},"jdk.xml.bind - Tools for JAXB"))),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u79fb\u9664\u7684\u5de5\u5177",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wsgen, wsimport - jdk.xml.ws"),(0,l.kt)("li",{parentName:"ul"},"schemagen, xjc - jdk.xml.bind"),(0,l.kt)("li",{parentName:"ul"},"idlj, orbd, servertool, tnamesrv - java.corba"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/321"},"321"),": HTTP Client (Standard)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5316 Java9 \u5f15\u5165\u7684 HTTP \u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5b75\u5316\u63a5\u53e3\uff0c\u6dfb\u52a0\u6807\u51c6\u63a5\u53e3\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"java.net.http")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/323"},"323"),": Local-Variable Syntax for Lambda Parameters",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"var")," \u6765\u5b9a\u4e49 lambda \u53c2\u6570\u7684\u63a8\u5bfc\u7c7b\u578b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/324"},"324"),": Key Agreement with Curve25519 and Curve448",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RFC7748: Curve25519,Curve448"),(0,l.kt)("li",{parentName:"ul"},"Java \u5b9e\u73b0, \u5e73\u53f0\u72ec\u7acb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/327"},"327"),": Unicode 10"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/328"},"328"),": Flight Recorder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90 Flight Recorder"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/329"},"329"),": ChaCha20 and Poly1305 Cryptographic Algorithms",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ChaCha20 \u548c Poly1305 \u52a0\u5bc6\u7b97\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/330"},"330"),": Launch Single-File Source-Code Programs",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5355\u6e90\u6587\u4ef6\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"#!")," \u6765\u542f\u52a8 java \u7a0b\u5e8f\uff0c\u7c7b\u4f3c\u4e8e shell"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#!/path/to/java --source version")),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u5141\u8bb8\u76f4\u63a5\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"java -Dtrace=true --source 10 factorial 3")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/331"},"331"),": Low-Overhead Heap Profiling",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 JVMTI \u64cd\u4f5c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/332"},"332"),": Transport Layer Security (TLS) 1.3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/333"},"333"),": ZGC: A Scalable Low-Latency Garbage Collector",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ZGC \u53ef\u6269\u5c55\u7684\u4f4e\u5ef6\u65f6 gc"),(0,l.kt)("li",{parentName:"ul"},"\u8bd5\u9a8c\u9636\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"gc < 10ms"),(0,l.kt)("li",{parentName:"ul"},"mb \u5230 tb"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6bd4 g1\uff0c\u5e94\u7528\u541e\u5410\u91cf\u4e0d\u5e94\u8be5\u635f\u8017\u4e0d\u5e94\u8be5\u8d85\u8fc7 15%"),(0,l.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u672a\u6765\u4f18\u5316\u57fa\u7840"),(0,l.kt)("li",{parentName:"ul"},"\u5148\u652f\u6301 Linux/x64"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/335"},"335"),": Deprecate the Nashorn JavaScript Engine",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 JS \u5f15\u64ce\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u7684\u5305",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"jdk.scripting.nashorn - \u5305\u62ec jdk.nashorn.api.scripting \u548c jdk.nashorn.api.tree"),(0,l.kt)("li",{parentName:"ul"},"jdk.scripting.nashorn.shell - \u5305\u62ec jjs \u5de5\u5177"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/336"},"336"),": Deprecate the Pack200 Tools and API",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 java.util.jar \u4e2d\u7684 pack200, unpack200 \u5de5\u5177\u548c Pack200 \u63a5\u53e3")))))}c.isMDXComponent=!0}}]);