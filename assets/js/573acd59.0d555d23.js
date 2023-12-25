/*! For license information please see 573acd59.0d555d23.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50638],{55174:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=l(11527),s=l(47214);const r={title:"Java 8"},t="Java 8",a={id:"java/version/java-8",title:"Java 8",description:"\u65b0\u7279\u6027",source:"@site/../notes/java/version/java-8.md",sourceDirName:"java/version",slug:"/java/version/java-8",permalink:"/notes/java/version/java-8",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-8.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Java 8"},sidebar:"docs",previous:{title:"Java 7",permalink:"/notes/java/version/java-7"},next:{title:"Java 9",permalink:"/notes/java/version/java-9"}},o={},d=[{value:"\u65b0\u7279\u6027",id:"feature",level:2},{value:"Contents",id:"contents",level:2},{value:"Java EE 8",id:"java-ee-8",level:2},{value:"CompletableFuture",id:"completablefuture",level:2},{value:"vJUG24 Session on Optional",id:"vjug24-session-on-optional",level:2},{value:"BUGS",id:"bugs",level:2},{value:"JDK-8064803",id:"jdk-8064803",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"java-8",children:"Java 8"}),"\n",(0,i.jsx)(n.h2,{id:"feature",children:"\u65b0\u7279\u6027"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bed\u6cd5\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lambda"}),"\n",(0,i.jsx)(n.li,{children:"interface default method"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["API\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CompletableFuture"}),"\n",(0,i.jsx)(n.li,{children:"Optional"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"contents",children:"Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr337/index.html",children:"JSR-000337 JavaTM SE 8 Release Contents"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"java-ee-8",children:"Java EE 8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jcp.org/aboutJava/communityprocess/edr/jsr366/index.html",children:"JSR-000366 JavaTM Platform, Enterprise Edition 8"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"completablefuture",children:"CompletableFuture"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684 Promise"}),"\n",(0,i.jsx)(n.li,{children:"\u76f8\u5f53\u4e8e Guava \u4e2d\u7684 SettableFuture, ListenableFuture"}),"\n",(0,i.jsx)(n.li,{children:"\u548c ExecutorCompletionService \u4e5f\u6709\u4e9b\u7c7b\u4f3c"}),"\n",(0,i.jsx)(n.li,{children:"\u5f88\u597d\u7684\u652f\u6301 Lambda"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dzone.com/articles/java-8-completablefuture",children:"Java 8: CompletableFuture in action"})}),"\n",(0,i.jsxs)(n.li,{children:["\u7f3a\u70b9\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CompletableFuture.allOf()"})," \u8fd4\u56de ",(0,i.jsx)(n.code,{children:"CompletableFuture<Void>"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06 Guava \u4e2d ",(0,i.jsx)(n.code,{children:"settable"})," \u548c ",(0,i.jsx)(n.code,{children:"listenable"})," future \u7684\u529f\u80fd\u6df7\u5408\u5728\u4e86\u4e00\u8d77. ",(0,i.jsx)(n.code,{children:"complete()"})," \u65b9\u6cd5\u53ef\u80fd\u9519\u8bef\u7684\u88ab\u7528\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528,\u5bfc\u81f4\u7a0b\u5e8f\u5f02\u5e38."]}),"\n",(0,i.jsxs)(n.li,{children:["API \u6570\u91cf\u8fc7\u591a.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u5206\u79bb ",(0,i.jsx)(n.code,{children:"settable"})," \u548c ",(0,i.jsx)(n.code,{children:"listenable"})," \u7684\u529f\u80fd\u4f1a\u89e3\u51b3\u5f88\u591a\u95ee\u9898."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vjug24-session-on-optional",children:"vJUG24 Session on Optional"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://stuartmarks.wordpress.com/2016/09/27/vjug24-session-on-optional/",children:"vJUG24 Session on Optional"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stuartmarks.files.wordpress.com/2016/09/optionalmotherofallbikesheds3.pdf",children:"PDF"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Optional is intended to provide a limited mechanism for library method return types where there is a clear need to represent \u201cno result,\u201d and where using null for that is overwhelmingly likely to cause errors."}),"\n",(0,i.jsxs)(n.li,{children:["\u57fa\u672c\u89c4\u5219\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0d\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"null"})," \u4f5c\u4e3a Optional \u53d8\u91cf\u6216\u8fd4\u56de\u503c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u9664\u975e\u4f60\u80fd\u4fdd\u8bc1 Optional \u503c\u5b58\u5728\u5426\u5219\u4e0d\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Optional.get()"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c3d\u91cf\u9009\u62e9\u6216\u5b9e\u73b0\u5176\u4ed6\u7684\u63a5\u53e3\u6765\u907f\u514d\u8fdb\u884c ",(0,i.jsx)(n.code,{children:"Optional.isPresent()"})," \u6216 ",(0,i.jsx)(n.code,{children:"Optional.get()"})," \u64cd\u4f5c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u907f\u514d\u901a\u8fc7\u4f7f\u7528 Optional \u6765\u83b7\u53d6\u4e00\u4e2a\u503c. ",(0,i.jsx)(n.code,{children:"Optional.ofNullable(x).orElse(y)"})," -> ",(0,i.jsx)(n.code,{children:"x == null? y: x"})]}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c Optional \u7684\u5185\u5bb9\u8fd8\u662f\u4e00\u4e2a Optional, \u90a3\u8fd9\u5c31\u592a\u8fc7\u4e8e\u590d\u6742\u4e86"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u907f\u514d\u4e8b\u9879\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0d\u8981\u7528\u5728\u5b57\u6bb5"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u8981\u7528\u5728\u65b9\u6cd5\u53c2\u6570"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u8981\u7528\u5728\u96c6\u5408"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u8bb0\u4f4f Optional \u662f\u4e00\u4e2a\u5c01\u88c5, \u6bcf\u4e2a Optional \u662f\u4e2a\u989d\u5916\u7684\u5bf9\u8c61\u4f1a\u5360\u7528 16 \u5b57\u8282\u7684\u8d44\u6e90, \u4f1a\u521b\u5efa\u66f4\u591a\u7684\u5f85\u88ab gc \u7684\u5bf9\u8c61"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bugs",children:"BUGS"}),"\n",(0,i.jsx)(n.h3,{id:"jdk-8064803",children:"JDK-8064803"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://blog.dogan.io/2015/03/02/java-8-compiler-bug/",children:"Story of a Java 8 Compiler Bug (JDK-8064803)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3354:(e,n,l)=>{var i=l(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,l){var i,r={},d=null,c=null;for(i in void 0!==l&&(d=""+l),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,i)&&!o.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},11527:(e,n,l)=>{e.exports=l(3354)},47214:(e,n,l)=>{l.d(n,{Z:()=>a,a:()=>t});var i=l(50959);const s={},r=i.createContext(s);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);