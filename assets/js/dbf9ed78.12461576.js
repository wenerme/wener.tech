"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65860],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),v=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=v(e.components);return a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=v(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var v=2;v<i;v++)o[v]=t[v];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84787:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return v},toc:function(){return s}});var a=t(96600),r=t(27279),i=(t(59496),t(49613)),o=["components"],l={title:"Java 7"},c=void 0,v={unversionedId:"java/version/java-7",id:"java/version/java-7",title:"Java 7",description:"Contents",source:"@site/notes/java/version/java-7.md",sourceDirName:"java/version",slug:"/java/version/java-7",permalink:"/notes/java/version/java-7",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/version/java-7.md",tags:[],version:"current",frontMatter:{title:"Java 7"},sidebar:"docs",previous:{title:"Java 11",permalink:"/notes/java/version/java-11"},next:{title:"Java 8",permalink:"/notes/java/version/java-8"}},u={},s=[{value:"Contents",id:"contents",level:2},{value:"Java EE 7",id:"java-ee-7",level:2},{value:"New in Java 7",id:"new-in-java-7",level:2},{value:"\u8bed\u8a00\u589e\u5f3a",id:"\u8bed\u8a00\u589e\u5f3a",level:3},{value:"\u7c7b\u52a0\u8f7d",id:"\u7c7b\u52a0\u8f7d",level:3},{value:"\u5e76\u53d1",id:"\u5e76\u53d1",level:3},{value:"\u5b89\u5168",id:"\u5b89\u5168",level:3},{value:"I/O \u548c NIO",id:"io-\u548c-nio",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u56fd\u9645\u5316",id:"\u56fd\u9645\u5316",level:3},{value:"Swing \u548c Java 2D \u52a0\u5f3a",id:"swing-\u548c-java-2d-\u52a0\u5f3a",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:3}],p={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr336/index.html"},"JSR-000336 JavaTM SE 7 Release Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.oracle.com/javase/7/docs/webnotes/adoptionGuide/"},"Adoption Guide"))),(0,i.kt)("h2",{id:"java-ee-7"},"Java EE 7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[JSR-000342 JavaTM Platform, Enterprise Edition 7]","(JSR-000342 JavaTM Platform, Enterprise Edition 7 Specification )")),(0,i.kt)("h2",{id:"new-in-java-7"},"New in Java 7"),(0,i.kt)("h3",{id:"\u8bed\u8a00\u589e\u5f3a"},"\u8bed\u8a00\u589e\u5f3a"),(0,i.kt)("h3",{id:"\u7c7b\u52a0\u8f7d"},"\u7c7b\u52a0\u8f7d"),(0,i.kt)("h3",{id:"\u5e76\u53d1"},"\u5e76\u53d1"),(0,i.kt)("h3",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,i.kt)("h3",{id:"io-\u548c-nio"},"I/O \u548c NIO"),(0,i.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,i.kt)("h3",{id:"\u56fd\u9645\u5316"},"\u56fd\u9645\u5316"),(0,i.kt)("h3",{id:"swing-\u548c-java-2d-\u52a0\u5f3a"},"Swing \u548c Java 2D \u52a0\u5f3a"),(0,i.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("h3",{id:""}),(0,i.kt)("p",null,"Java Language Enhancements\nClass Loaders\nConcurrency\nSecurity\nI/O and NIO\nNetworking\nInternationalization\nSwing & Java 2D Enhancements\nJDBC Enhancements\nJava DB Enhancements\nJava XML Technology Enhancements\nDeployment Enhancements\nJava Virtual Machine (JVM)"))}d.isMDXComponent=!0}}]);