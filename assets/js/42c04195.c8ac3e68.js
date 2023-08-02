"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43272],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86264:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&c(e,a,t[a]);return e};const m={title:"\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},d="Java FAQ",v={unversionedId:"java/java-faq",id:"java/java-faq",title:"\u5e38\u89c1\u95ee\u9898",description:"javac \u4e71\u7801",source:"@site/../notes/java/java-faq.md",sourceDirName:"java",slug:"/java/faq",permalink:"/notes/java/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/java-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Concurrent",permalink:"/notes/java/concurrent"},next:{title:"Java Native",permalink:"/notes/java/native"}},h={},f=[{value:"javac \u4e71\u7801",id:"javac-\u4e71\u7801",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"Property",id:"property",level:2},{value:"\u9009\u62e9 JUL \u7c7b\u903b\u8f91",id:"\u9009\u62e9-jul-\u7c7b\u903b\u8f91",level:2},{value:"Why is generic of a return type erased when there is an unchecked conversion of a method parameter in Java 8?",id:"why-is-generic-of-a-return-type-erased-when-there-is-an-unchecked-conversion-of-a-method-parameter-in-java-8",level:2},{value:"Proxy performance",id:"proxy-performance",level:2},{value:"deploy",id:"deploy",level:2},{value:"Memory usage",id:"memory-usage",level:2},{value:"A fatal error has been detected by the Java Runtime Environment",id:"a-fatal-error-has-been-detected-by-the-java-runtime-environment",level:2}],y={toc:f};function k(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),c),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"java-faq"}),"Java FAQ"),(0,n.kt)("h2",u({},{id:"javac-\u4e71\u7801"}),"javac \u4e71\u7801"),(0,n.kt)("p",null,"\u5f3a\u5236\u4f7f\u7528 UTF-8"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"javac -J-Dfile.encoding=UTF-8\n")),(0,n.kt)("h2",u({},{id:"\u73af\u5883\u53d8\u91cf"}),"\u73af\u5883\u53d8\u91cf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JAVA_TOOL_OPTIONS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"java, javac, jar \u4f1a\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"-agentlib:hprof")),(0,n.kt)("li",{parentName:"ul"},"JVMTI \u5b9a\u4e49"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_JAVA_OPTIONS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c JAVA_TOOL_OPTIONS\uff0c\u4f46\u4f18\u5148\u7ea7\u66f4\u9ad8"),(0,n.kt)("li",{parentName:"ul"},"\u9488\u5bf9 Hotspot"))),(0,n.kt)("li",{parentName:"ul"},"JAVA_OPTS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7531\u5176\u4ed6\u5de5\u5177\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"java \u4e0d\u7528"))),(0,n.kt)("li",{parentName:"ul"},"JDK_JAVA_OPTIONS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"jdk9+"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c JAVA_TOOL_OPTIONS\uff0c\u4f46\u53ea\u6709 java \u4f1a\u7528"),(0,n.kt)("li",{parentName:"ul"},"java"))),(0,n.kt)("li",{parentName:"ul"},"JAVA_HOME")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#tooloptions"}),"https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html#tooloptions"))),(0,n.kt)("h2",u({},{id:"property"}),"Property"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"file.encoding=UTF-8\nuser.language=en\nuser.country=US\nuser.variant=\njava.io.tmpdir=\njavax.net.ssl.keyStore=\njavax.net.ssl.keyStorePassword=\njavax.net.ssl.keyStoreType=\njavax.net.ssl.trustStore=\njavax.net.ssl.trustStorePassword=\njavax.net.ssl.trustStoreType=\ncom.sun.management.jmxremote=\n")),(0,n.kt)("h2",u({},{id:"\u9009\u62e9-jul-\u7c7b\u903b\u8f91"}),"\u9009\u62e9 JUL \u7c7b\u903b\u8f91"),(0,n.kt)("mermaid",u({},{value:"graph TD\n\n    Start[\u9009\u62e9JUL\u7c7b] --\x3e KVorV[KV or Value only?]\n    KVorV --Value--\x3e Duplicate[\u662f\u5426\u5141\u8bb8\u91cd\u590d?]\n    Duplicate --Yes--\x3e Sync[\u662f\u5426\u7ebf\u7a0b\u540c\u6b65?]\n    Duplicate--No--\x3eOrdered[\u662f\u5426\u6709\u5e8f?]\n    Ordered--No--\x3eHasSet\n    Ordered--Yes--\x3eByInsertOrValue[\u63d2\u5165\u6392\u5e8f\u8fd8\u662f\u503c\u6392\u5e8f?]\n    ByInsertOrValue--Insert--\x3eLinkedHashSet\n    ByInsertOrValue--Value--\x3eTreeSet\n    Sync--Yes--\x3eLIFO[LIFO\u5806\u6808\u64cd\u4f5c?]\n    LIFO--Yes--\x3eStack\n    LIFO--No--\x3eVector\n    Sync --No--\x3e RandomAccess[\u968f\u673a\u8bbf\u95ee?]\n    RandomAccess--Yes--\x3eArrayList\n    RandomAccess --No--\x3e SeqAccess[\u987a\u5e8f\u8bbf\u95ee?]\n    SeqAccess --Yes--\x3e LinkedList\n    SeqAccess --No--\x3e Queue[\u961f\u5217\u64cd\u4f5c?]\n    Queue --No--\x3e ArrayList\n    Queue --Yes--\x3e FastQueue[\u5feb\u901f\u961f\u5217?]\n    FastQueue --No--\x3e LinkedList\n    FastQueue --Yes--\x3e ArrayDeque\n\n    KVorV--KV--\x3eEntryOrdered[\u6709\u5e8f?]\n    EntryOrdered--Yes--\x3eEntryOrderedBy[\u987a\u5e8f\u57fa\u4e8e?]\n    EntryOrderedBy--Insert--\x3eLinkedHashMap\n    EntryOrderedBy--Key--\x3eKVSync[\u7ebf\u7a0b\u540c\u6b65?]\n    KVSync--Yes--\x3eHashTable\n    KVSync--No--\x3eTreeMap\n    EntryOrdered--No--\x3eCache[\u4f5c\u4e3a\u7f13\u5b58/Value\u6784\u5efa\u6210\u672c\u9ad8?]\n    Cache--Yes--\x3eWeakHashMap\n    Cache--No--\x3eEquals[equals/==?]\n    Equals--equals--\x3eHashMap\n    Equals--==--\x3eIdentityHashMap"})),(0,n.kt)("h2",u({},{id:"why-is-generic-of-a-return-type-erased-when-there-is-an-unchecked-conversion-of-a-method-parameter-in-java-8"}),"Why is generic of a return type erased when there is an unchecked conversion of a method parameter in Java 8?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/q/30918308/1870054"}),"Why is generic of a return type erased when there is an unchecked conversion of a method parameter in Java 8?"))),(0,n.kt)("p",null,"Collection\n",(0,n.kt)("a",u({parentName:"p"},{href:"http://fastutil.di.unimi.it/"}),"http://fastutil.di.unimi.it/"),"\n",(0,n.kt)("a",u({parentName:"p"},{href:"http://pcollections.org/"}),"http://pcollections.org/"),"\n",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/hrldcpr/pcollections"}),"https://github.com/hrldcpr/pcollections")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://mvnrepository.com/artifact/org.eclipse.collections/eclipse-collections"}),"https://mvnrepository.com/artifact/org.eclipse.collections/eclipse-collections"),"\n",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/eclipse/eclipse-collections"}),"https://github.com/eclipse/eclipse-collections")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"http://java-performance.info/hashmap-overview-jdk-fastutil-goldman-sachs-hppc-koloboke-trove-january-2015/"}),"http://java-performance.info/hashmap-overview-jdk-fastutil-goldman-sachs-hppc-koloboke-trove-january-2015/")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://mvnrepository.com/open-source/collections"}),"https://mvnrepository.com/open-source/collections")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.carrotsearch</groupId>\n    <artifactId>hppc</artifactId>\n    <version>0.8.1</version>\n</dependency>\n")),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/carrotsearch/hppc"}),"https://github.com/carrotsearch/hppc")),(0,n.kt)("h2",u({},{id:"proxy-performance"}),"Proxy performance"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"https://stackoverflow.com/q/1856242/1870054"}),"https://stackoverflow.com/q/1856242/1870054")),(0,n.kt)("h2",u({},{id:"deploy"}),"deploy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-Dspring.profiles.active=development")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SPRING_PROFILES_ACTIVE"))),(0,n.kt)("h2",u({},{id:"memory-usage"}),"Memory usage"),(0,n.kt)("h2",u({},{id:"a-fatal-error-has-been-detected-by-the-java-runtime-environment"}),"A fatal error has been detected by the Java Runtime Environment"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"# A fatal error has been detected by the Java Runtime Environment:\n#\n#  SIGSEGV (0xb) at pc=0x00000000000207f6, pid=1, tid=0x00007f9256df8b38\n#\n# JRE version: OpenJDK Runtime Environment (8.0_345-b01) (build 1.8.0_345-b01)\n# Java VM: OpenJDK 64-Bit Server VM (25.345-b01 mixed mode linux-amd64 compressed oops)\n# Derivative: IcedTea 3.24.0\n# Distribution: Custom build (Tue Nov  8 21:00:08 UTC 2022)\n# Problematic frame:\n# C  0x00000000000207f6\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"netty musl",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"-Dio.micrometer.shaded.io.netty.transport.noNative=true"),(0,n.kt)("li",{parentName:"ul"},"-Dio.grpc.netty.shaded.io.netty.transport.noNative=true"),(0,n.kt)("li",{parentName:"ul"},"-Dorg.apache.rocketmq.shaded.io.grpc.netty.shaded.io.netty.transport.noNative=true"),(0,n.kt)("li",{parentName:"ul"},"Netty 4.1.77.Final+ \u907f\u514d segfaulting",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"[netty#11701]","(- ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/netty/netty/issues/11701"}),"https://github.com/netty/netty/issues/11701"),")")))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add gcompat\nexport LD_PRELOAD=/lib/libgcompat.so.0\n")))}k.isMDXComponent=!0}}]);