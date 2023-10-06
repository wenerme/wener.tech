"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68624],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=u(a),c=r,N=k["".concat(m,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67519:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return s},default:function(){return C},frontMatter:function(){return N},metadata:function(){return g},toc:function(){return y}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&o(t,a,e[a]);if(i)for(var a of i(e))u.call(e,a)&&o(t,a,e[a]);return t},d=(t,e)=>l(t,p(e)),c=(t,e)=>{var a={};for(var n in t)m.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a};const N={title:"Observe"},s="Observe",g={unversionedId:"java/java-observe",id:"java/java-observe",title:"Observe",description:"jps",source:"@site/../notes/java/java-observe.md",sourceDirName:"java",slug:"/java/observe",permalink:"/notes/java/observe",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/java-observe.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{title:"Observe"},sidebar:"docs",previous:{title:"Java Native",permalink:"/notes/java/native"},next:{title:"Tuning",permalink:"/notes/java/tuning"}},b={},y=[{value:"jps",id:"jps",level:2},{value:"jstat",id:"jstat",level:2}],v={toc:y},f="wrapper";function C(t){var e=t,{components:a}=e,r=c(e,["components"]);return(0,n.kt)(f,d(k(k({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",k({},{id:"observe"}),"Observe"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"java -XX:+PrintFlagsFinal -version | grep HeapSize\n\njcmd 1 VM.flags\n")),(0,n.kt)("h2",k({},{id:"jps"}),"jps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[protocol:][[//]hostname][:port][/servername]"))),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"jps -lvm\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"-q"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u4e0d\u8f93\u51fa ClassName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"-m"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u663e\u793a\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"-l"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5b8c\u6574\u5305\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"-v"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u865a\u62df\u673a\u53c2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"-J<option>")),(0,n.kt)("td",k({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",k({},{id:"jstat"}),"jstat"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# Garbage-collected heap statistics.\njstat -gc 1\n# Summary of garbage collection statistics.\njstat -gcutil 1\n")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"# Memory pool generation and space capacities.\njstat -gccapacity 1\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"NGCMN"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"NGCMX"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"NGC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"S0C"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"S1C"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"EC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"OGCMN"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"OGCMX"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"OGC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"OC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"MCMN"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"MCMX"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"MC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"CCSMN"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"CCSMX"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"CCSC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"YGC"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"FGC"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"81920.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1302528.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"50176.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"3072.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2560.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"44032.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"163840.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"2605056.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"220672.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"220672.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1130496.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"92888.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"0.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"1048576.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"11776.0"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"751"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"3")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"col"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"for"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"mean"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"NGCMN"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Minimum new generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65b0\u751f\u4ee3\u6700\u5c0f\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"NGCMX"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Maximum new generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u65b0\u751f\u4ee3\u6700\u5927\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"NGC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current new generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d\u65b0\u751f\u4ee3\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"S0C"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current survivor space 0 capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d survivor space 0 \u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"S1C"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current survivor space 1 capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d survivor space 1 \u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"EC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current eden space capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d eden \u7a7a\u95f4\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OGCMN"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Minimum old generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u8001\u5e74\u4ee3\u6700\u5c0f\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OGCMX"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Maximum old generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u8001\u5e74\u4ee3\u6700\u5927\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OGC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current old generation capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d\u8001\u5e74\u4ee3\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"OC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Current old space capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5f53\u524d\u8001\u5e74\u4ee3\u7a7a\u95f4\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"MCMN"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Minimum metaspace capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5143\u6570\u636e\u7a7a\u95f4\u6700\u5c0f\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"MCMX"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Maximum metaspace capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5143\u6570\u636e\u7a7a\u95f4\u6700\u5927\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"MC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Metaspace capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5143\u6570\u636e\u7a7a\u95f4\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CCSMN"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Compressed class space minimum capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u538b\u7f29 class \u7a7a\u95f4\u6700\u5c0f\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CCSMX"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Compressed class space maximum capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u538b\u7f29 class \u7a7a\u95f4\u6700\u5927\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"CCSC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Compressed class space capacity (kB)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u538b\u7f29 class \u7a7a\u95f4\u5bb9\u91cf (kB)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"YGC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Number of young generation GC events"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5e74\u8f7b\u4ee3 GC \u6b21\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"FGC"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Number of full GC events"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5b8c\u5168 GC \u6b21\u6570")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html"}),"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html"))))}C.isMDXComponent=!0}}]);