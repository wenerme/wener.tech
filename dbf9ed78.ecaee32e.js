(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{1096:function(e,n,t){"use strict";t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},v=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=s(t),p=a,b=v["".concat(o,".").concat(p)]||v[p]||d[p]||i;return t?r.a.createElement(b,c(c({ref:n},u),{},{components:t})):r.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},959:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),i=(t(0),t(1096)),o={id:"java-7",title:"Java 7"},c={unversionedId:"java/version/java-7",id:"java/version/java-7",isDocsHomePage:!1,title:"Java 7",description:"Contents",source:"@site/notes/java/version/java-7.md",slug:"/java/version/java-7",permalink:"/notes/java/version/java-7",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/version/java-7.md",version:"current",sidebar:"docs",previous:{title:"Java 6",permalink:"/notes/java/version/java-6"},next:{title:"Java 8",permalink:"/notes/java/version/java-8"}},l=[{value:"Contents",id:"contents",children:[]},{value:"Java EE 7",id:"java-ee-7",children:[]},{value:"New in Java 7",id:"new-in-java-7",children:[{value:"\u8bed\u8a00\u589e\u5f3a",id:"\u8bed\u8a00\u589e\u5f3a",children:[]},{value:"\u7c7b\u52a0\u8f7d",id:"\u7c7b\u52a0\u8f7d",children:[]},{value:"\u5e76\u53d1",id:"\u5e76\u53d1",children:[]},{value:"\u5b89\u5168",id:"\u5b89\u5168",children:[]},{value:"I/O \u548c NIO",id:"io-\u548c-nio",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[]},{value:"\u56fd\u9645\u5316",id:"\u56fd\u9645\u5316",children:[]},{value:"Swing \u548c Java 2D \u52a0\u5f3a",id:"swing-\u548c-java-2d-\u52a0\u5f3a",children:[]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[]}]}],u={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"contents"},"Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr336/index.html"},"JSR-000336 JavaTM SE 7 Release Contents")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://docs.oracle.com/javase/7/docs/webnotes/adoptionGuide/"},"Adoption Guide"))),Object(i.b)("h2",{id:"java-ee-7"},"Java EE 7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[JSR-000342 JavaTM Platform, Enterprise Edition 7]","(JSR-000342 JavaTM Platform, Enterprise Edition 7 Specification )")),Object(i.b)("h2",{id:"new-in-java-7"},"New in Java 7"),Object(i.b)("h3",{id:"\u8bed\u8a00\u589e\u5f3a"},"\u8bed\u8a00\u589e\u5f3a"),Object(i.b)("h3",{id:"\u7c7b\u52a0\u8f7d"},"\u7c7b\u52a0\u8f7d"),Object(i.b)("h3",{id:"\u5e76\u53d1"},"\u5e76\u53d1"),Object(i.b)("h3",{id:"\u5b89\u5168"},"\u5b89\u5168"),Object(i.b)("h3",{id:"io-\u548c-nio"},"I/O \u548c NIO"),Object(i.b)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),Object(i.b)("h3",{id:"\u56fd\u9645\u5316"},"\u56fd\u9645\u5316"),Object(i.b)("h3",{id:"swing-\u548c-java-2d-\u52a0\u5f3a"},"Swing \u548c Java 2D \u52a0\u5f3a"),Object(i.b)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),Object(i.b)("h3",{id:""}),Object(i.b)("p",null,"Java Language Enhancements\nClass Loaders\nConcurrency\nSecurity\nI/O and NIO\nNetworking\nInternationalization\nSwing & Java 2D Enhancements\nJDBC Enhancements\nJava DB Enhancements\nJava XML Technology Enhancements\nDeployment Enhancements\nJava Virtual Machine (JVM)"))}s.isMDXComponent=!0}}]);