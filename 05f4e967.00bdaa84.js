(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,p(p({ref:t},c),{},{components:r})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1021)),i={id:"gradle",title:"Gradle"},p={unversionedId:"java/gradle",id:"java/gradle",isDocsHomePage:!1,title:"Gradle",description:"Tips",source:"@site/notes/java/gradle.md",slug:"/java/gradle",permalink:"/notes/java/gradle",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/gradle.md",version:"current",sidebar:"docs",previous:{title:"Java",permalink:"/notes/java/java"},next:{title:"\u70ed\u95e8\u95ee\u9898",permalink:"/notes/java/hot-qa"}},l=[{value:"Tips",id:"tips",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/userguide.html"},"Userguide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://guides.gradle.org/building-java-9-modules/"},"Building Java 9 Modules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://sagioto.github.io/maven2gradle/"},"maven 2 gradle"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u8f6c\u6362 dependency")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# https://docs.gradle.org/current/userguide/build_init_plugin.html\n# \u751f\u6210\u57fa\u672c\u914d\u7f6e\n# --type pom,java-application,java-library,scala-library,groovy-library,basic\ngradle init\n\n# \u5237\u65b0\u4f9d\u8d56\ngradlew build --refresh-dependencies\n# \u4ee3\u7406\ngradlew -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=1234 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=1234 build\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"gradle.properties")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"# \u4ee3\u7406\u914d\u7f6e\nsystemProp.http.proxyHost=127.0.0.1\nsystemProp.http.proxyPort=1234\nsystemProp.https.proxyHost=127.0.0.1\nsystemProp.https.proxyPort=1234\n\n# \u5982\u679c\u9700\u8981\u6388\u6743\n# http.proxyUser=usernameProxy\n# http.proxyPassword=yourPassoword\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-groovy"},'// https://docs.gradle.org/current/userguide/declaring_repositories.html\nmavenCentral()\nmaven {\n    url "http://maven.aliyun.com/nexus/content/groups/public"\n}\n')))}s.isMDXComponent=!0}}]);