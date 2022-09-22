"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85609],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),v=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=v(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=v(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var v=2;v<o;v++)i[v]=n[v];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return y}});var a=n(49613),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))v.call(t,n)&&u(e,n,t[n]);return e};const p={title:"Java 7"},d="Java 7",f={unversionedId:"java/version/java-7",id:"java/version/java-7",title:"Java 7",description:"Contents",source:"@site/../notes/java/version/java-7.md",sourceDirName:"java/version",slug:"/java/version/java-7",permalink:"/notes/java/version/java-7",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-7.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Java 7"},sidebar:"docs",previous:{title:"Java 11",permalink:"/notes/java/version/java-11"},next:{title:"Java 8",permalink:"/notes/java/version/java-8"}},m={},y=[{value:"Contents",id:"contents",level:2},{value:"Java EE 7",id:"java-ee-7",level:2},{value:"New in Java 7",id:"new-in-java-7",level:2},{value:"\u8bed\u8a00\u589e\u5f3a",id:"\u8bed\u8a00\u589e\u5f3a",level:3},{value:"\u7c7b\u52a0\u8f7d",id:"\u7c7b\u52a0\u8f7d",level:3},{value:"\u5e76\u53d1",id:"\u5e76\u53d1",level:3},{value:"\u5b89\u5168",id:"\u5b89\u5168",level:3},{value:"I/O \u548c NIO",id:"io-\u548c-nio",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u56fd\u9645\u5316",id:"\u56fd\u9645\u5316",level:3},{value:"Swing \u548c Java 2D \u52a0\u5f3a",id:"swing-\u548c-java-2d-\u52a0\u5f3a",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3}],j={toc:y};function b(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&v.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},j),u),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"java-7"}),"Java 7"),(0,a.kt)("h2",s({},{id:"contents"}),"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr336/index.html"}),"JSR-000336 JavaTM SE 7 Release Contents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"http://docs.oracle.com/javase/7/docs/webnotes/adoptionGuide/"}),"Adoption Guide"))),(0,a.kt)("h2",s({},{id:"java-ee-7"}),"Java EE 7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[JSR-000342 JavaTM Platform, Enterprise Edition 7]","(JSR-000342 JavaTM Platform, Enterprise Edition 7 Specification )")),(0,a.kt)("h2",s({},{id:"new-in-java-7"}),"New in Java 7"),(0,a.kt)("h3",s({},{id:"\u8bed\u8a00\u589e\u5f3a"}),"\u8bed\u8a00\u589e\u5f3a"),(0,a.kt)("h3",s({},{id:"\u7c7b\u52a0\u8f7d"}),"\u7c7b\u52a0\u8f7d"),(0,a.kt)("h3",s({},{id:"\u5e76\u53d1"}),"\u5e76\u53d1"),(0,a.kt)("h3",s({},{id:"\u5b89\u5168"}),"\u5b89\u5168"),(0,a.kt)("h3",s({},{id:"io-\u548c-nio"}),"I/O \u548c NIO"),(0,a.kt)("h3",s({},{id:"\u7f51\u7edc"}),"\u7f51\u7edc"),(0,a.kt)("h3",s({},{id:"\u56fd\u9645\u5316"}),"\u56fd\u9645\u5316"),(0,a.kt)("h3",s({},{id:"swing-\u548c-java-2d-\u52a0\u5f3a"}),"Swing \u548c Java 2D \u52a0\u5f3a"),(0,a.kt)("h3",s({},{id:"\u90e8\u7f72"}),"\u90e8\u7f72"),(0,a.kt)("h3",s({},{id:""})),(0,a.kt)("p",null,"Java Language Enhancements\nClass Loaders\nConcurrency\nSecurity\nI/O and NIO\nNetworking\nInternationalization\nSwing & Java 2D Enhancements\nJDBC Enhancements\nJava DB Enhancements\nJava XML Technology Enhancements\nDeployment Enhancements\nJava Virtual Machine (JVM)"))}b.isMDXComponent=!0}}]);