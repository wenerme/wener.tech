"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6937],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,g=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52845:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return X},frontMatter:function(){return g},metadata:function(){return N},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),d=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a};const g={title:"Tuning",tags:["Tuning"]},k="Java Tuning",N={unversionedId:"java/java-tuning",id:"java/java-tuning",title:"Tuning",description:"| -X   | for               | default |",source:"@site/../notes/java/java-tuning.md",sourceDirName:"java",slug:"/java/tuning",permalink:"/notes/java/tuning",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/java-tuning.md",tags:[{label:"Tuning",permalink:"/notes/tags/tuning"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"Tuning",tags:["Tuning"]},sidebar:"docs",previous:{title:"Observe",permalink:"/notes/java/observe"},next:{title:"JDWP",permalink:"/notes/java/jdwp"}},v={},f=[{value:"\u5185\u5b58\u9650\u5236",id:"memort-limit",level:2},{value:"GC",id:"gc",level:2}],b={toc:f},h="wrapper";function X(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.kt)(h,c(s(s({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"java-tuning"}),"Java Tuning"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"-X"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"for"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-Xms"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"initial heap size"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-Xmx"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"max heap size"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"25%,\u6700\u592725G")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"-XX:flag"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"InitialRAMPercentage"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u521d\u59cb ",(0,n.kt)("strong",{parentName:"td"},"\u5806\u5185\u5b58")," \u6bd4\u4f8b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"MaxRAMPercentage"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u6700\u5927 ",(0,n.kt)("strong",{parentName:"td"},"\u5806\u5185\u5b58")," \u6bd4\u4f8b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"MinRAMPercentage"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u6700\u5c0f ",(0,n.kt)("strong",{parentName:"td"},"\u5806\u5185\u5b58")," \u6bd4\u4f8b")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"-Xmx12g -Xms12g -Xmn8g -XX:MaxMetaspaceSize=512m -XX:MaxDirectMemorySize=256M  -XX:+UseContainerSupport -XX:+UseG1GC -XX:MaxGCPauseMillis=200\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"-XX:+UseContainerSupport -XX:InitialRAMPercentage=70.0 -XX:MaxRAMPercentage=70.0 -XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:/home/admin/nas/gc-${POD_IP}-$(date '+%s').log -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nas/dump-${POD_IP}-$(date '+%s').hprof\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JAVA_TOOL_OPTIONS"),(0,n.kt)("li",{parentName:"ul"},"JDK_JAVA_OPTIONS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java 9+"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://chriswhocodes.com/"}),"https://chriswhocodes.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://eclipse.dev/openj9/docs/xx_jvm_commands/"}),"https://eclipse.dev/openj9/docs/xx_jvm_commands/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.alibabacloud.com/help/en/sae/latest/best-practices-for-jvm-heap-size-configuration"}),"https://www.alibabacloud.com/help/en/sae/latest/best-practices-for-jvm-heap-size-configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://cloud.tencent.com/developer/article/1198524"}),"https://cloud.tencent.com/developer/article/1198524"))),(0,n.kt)("h2",s({},{id:"memort-limit"}),"\u5185\u5b58\u9650\u5236"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"java -XshowSettings:vm -version\njava -XX:+PrintFlagsFinal -version\n\njava -XX:+PrintFlagsFinal -version | grep -E 'Container|RAM|HeapSize'\njava -XX:+PrintFlagsFinal -XX:MaxRAMPercentage=100.0 -version | grep -E 'Container|RAM'\n\n# limits\ncat /sys/fs/cgroup/memory/memory.limit_in_bytes\n\n# \u65b0\u7248\u672c JAVA\njava -Xlog:os+container=trace -version\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UseContainerSupport",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5f00\u542f"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MaxRAMPercentage=25%"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"limit"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"MaxRAM"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"< 1GB"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"50%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"1GB < 2GB"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"512MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"> 2GB"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"75%")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"-Xcompressedrefs")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"3-bit shift"),(0,n.kt)("li",{parentName:"ul"},"heap size 25GB \u4e0a\u9650"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"-XX:MaxRAMPercentage")," \u6216\u8005 ",(0,n.kt)("inlineCode",{parentName:"li"},"-Xmx")," \u8986\u76d6"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"-verbose:sizes"))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"-Xmx"),(0,n.kt)("li",{parentName:"ul"},"-XX:MaxRAMPercentage, -XX:MinRAMPercentage, -XX:InitialRAMPercentage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java 8 update 191+"))),(0,n.kt)("li",{parentName:"ul"},"-XX:MaxRAMFraction, -XX:MinRAMFraction",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Java 8 update 131 -> Java 8 update 190")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"java -XX:MaxRAMPercentage=50 -XshowSettings:vm -version\n\njava -XshowSettings:vm -version\njava -Xmx512m -XshowSettings:vm -version\njava -XX:+UseContainerSupport -XshowSettings:vm -version\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u9700\u8981/1024\ncat /sys/fs/cgroup/cpu/cpu.shares\n")),(0,n.kt)("h2",s({},{id:"gc"}),"GC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://docs.oracle.com/en/java/javase/17/gctuning/ergonomics.html"}),"https://docs.oracle.com/en/java/javase/17/gctuning/ergonomics.html"))))}X.isMDXComponent=!0}}]);