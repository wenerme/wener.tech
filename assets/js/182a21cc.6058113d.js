/*! For license information please see 182a21cc.6058113d.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11216],{44973:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=s(11527),r=s(47214);const l={title:"Java 10"},t="Java 10",i={id:"java/version/java-10",title:"Java 10",description:"- JDK 10",source:"@site/../notes/java/version/java-10.md",sourceDirName:"java/version",slug:"/java/version/java-10",permalink:"/notes/java/version/java-10",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-10.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Java 10"},sidebar:"docs",previous:{title:"Java \u7248\u672c",permalink:"/notes/java/version/"},next:{title:"Java 11",permalink:"/notes/java/version/java-11"}},o={},d=[{value:"JEPs",id:"jeps",level:2}];function j(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"java-10",children:"Java 10"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://openjdk.java.net/projects/jdk/10",children:"JDK 10"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://cr.openjdk.java.net/~iris/se/10/latestSpec/",children:"Final Release Specification"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"jeps",children:"JEPs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["286: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/286",children:"Local-Variable Type Inference"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"var"})," \u4f5c\u4e3a\u672c\u5730\u53d8\u91cf\u7684\u63a8\u5bfc\u7c7b\u578b"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["296: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/296",children:"Consolidate the JDK Forest into a Single Repository"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5408\u5e76 JDK \u5230\u4e00\u4e2a\u4ed3\u5e93"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["304: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/304",children:"Garbage-Collector Interface"})]}),"\n",(0,a.jsxs)(n.li,{children:["307: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/307",children:"Parallel Full GC for G1"})]}),"\n",(0,a.jsxs)(n.li,{children:["310: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/310",children:"Application Class-Data Sharing"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6269\u5c55\u73b0\u6709\u7684 CDS\uff0c\u5141\u8bb8\u5e94\u7528\u7c7b\u88ab\u653e\u5728\u5171\u4eab\u7684\u5f52\u6863\u6587\u4ef6"}),"\n",(0,a.jsx)(n.li,{children:"\u63d0\u5347\u542f\u52a8\u65f6\u95f4\uff0c\u4f18\u5316\u5185\u5b58\u5360\u7528"}),"\n",(0,a.jsxs)(n.li,{children:["CDS \u652f\u6301 JDK \u7684\u8fd0\u884c\u65f6\u955c\u50cf\u6587\u4ef6 ",(0,a.jsx)(n.code,{children:"$JAVA_HOME/lib/modules"})," \u548c\u5e73\u53f0\u7cfb\u7edf\u7684\u5e94\u7528\u7c7b"]}),"\n",(0,a.jsx)(n.li,{children:"CDS \u652f\u6301\u81ea\u5b9a\u4e49\u7684\u7c7b\u52a0\u8f7d\u5668"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"-Xshare:auto"})," \u5728 cds \u5185\u5b58\u6620\u5c04\u5931\u8d25\u6216\u8005\u7c7b\u8def\u5f84\u4e0d\u5339\u914d\u65f6\u4e0d\u5f02\u5e38\uff0c\u53ea\u662f\u7981\u7528 cds"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u662f\u9ed8\u8ba4\u542f\u7528\u4e86 CDS \u7684\n# -XX:+UseAppCDS \u542f\u7528 app class loader \u7684 cds\n\n# \u8bb0\u5f55\u6240\u6709\u52a0\u8f7d\u7684\u7c7b\uff0c\u4e0d\u52a0 -XX:+UseAppCDS \u53ea\u4f1a\u663e\u793a\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u52a0\u8f7d\u7684\u7c7b\njava -Xshare:off -XX:+UseAppCDS -XX:DumpLoadedClassList=hello.lst -cp hello.jar HelloWorld\n\n# \u521b\u5efa AppCDS\njava -Xshare:dump -XX:+UseAppCDS -XX:SharedClassListFile=hello.lst -XX:SharedArchiveFile=hello.jsa -cp hello.jar\n# \u4f7f\u7528 AppCDS \u5f52\u6863\njava -Xshare:on -XX:+UseAppCDS -XX:SharedArchiveFile=hello.jsa -cp hello.jar HelloWorld\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["312: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/312",children:"Thread-Local Handshakes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"HotSpot \u5728\u4e0d\u5f71\u54cd VM \u5168\u5c40\u7684\u524d\u63d0\u4e0b\u5b9e\u73b0\u5728\u7ebf\u7a0b\u4e0a\u6267\u884c\u56de\u8c03\u7684\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.li,{children:"\u4f7f\u5f97\u505c\u6b62\u5355\u4e2a\u7ebf\u7a0b\u7684\u6210\u672c\u8f83\u4f4e\uff0c\u800c\u4e0d\u662f\u505c\u6b62\u6240\u6709\u6216\u90fd\u4e0d\u505c\u6b62"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["313: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/313",children:"Remove the Native-Header Generation Tool (javah)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u79fb\u9664 ",(0,a.jsx)(n.code,{children:"javah"})," \u672c\u5730\u5934\u6587\u4ef6\u751f\u6210\u6839\u636e"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["314: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/314",children:"Additional Unicode Language-Tag Extensions"})]}),"\n",(0,a.jsxs)(n.li,{children:["316: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/316",children:"Heap Allocation on Alternative Memory Devices"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5141\u8bb8 HotSpot VM \u80fd\u5728\u5176\u4ed6\u5185\u5b58\u8bbe\u5907\u4e0a\u7533\u8bf7\u5185\u5b58\uff0c\u4f8b\u5982 NV-DIMM"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["317: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/317",children:"Experimental Java-Based JIT Compiler"})]}),"\n",(0,a.jsxs)(n.li,{children:["319: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/319",children:"Root Certificates"})]}),"\n",(0,a.jsxs)(n.li,{children:["322: ",(0,a.jsx)(n.a,{href:"http://openjdk.java.net/jeps/322",children:"Time-Based Release Versioning"})]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},3354:(e,n,s)=>{var a=s(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var a,l={},d=null,j=null;for(a in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(j=n.ref),n)t.call(n,a)&&!o.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:r,type:e,key:d,ref:j,props:l,_owner:i.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var a=s(50959);const r={},l=a.createContext(r);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);