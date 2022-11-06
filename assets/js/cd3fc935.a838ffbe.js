"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69710],{49613:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(59496);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?t.createElement(g,a(a({ref:r},l),{},{components:n})):t.createElement(g,a({ref:r},l))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42935:function(e,r,n){n.r(r),n.d(r,{assets:function(){return m},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var t=n(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&l(e,n,r[n]);if(p)for(var n of p(r))s.call(r,n)&&l(e,n,r[n]);return e};const f={id:"spring",title:"Spring"},d="Spring",g={unversionedId:"java/spring/spring",id:"java/spring/spring",title:"Spring",description:"Spring Initializer",source:"@site/../notes/java/spring/README.md",sourceDirName:"java/spring",slug:"/java/spring/",permalink:"/notes/java/spring/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"spring",title:"Spring"},sidebar:"docs",previous:{title:"Servlet",permalink:"/notes/java/spec/servlet"},next:{title:"\u53d1\u5e03\u5386\u53f2",permalink:"/notes/java/spring/releases"}},m={},v=[{value:"Spring Initializer",id:"spring-initializer",level:2},{value:"\u6587\u6863\u8def\u5f84",id:"\u6587\u6863\u8def\u5f84",level:2}],O={toc:v};function y(e){var r,n=e,{components:i}=n,l=((e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))r.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=u(u({},O),l),o(r,a({components:i,mdxType:"MDXLayout"}))),(0,t.kt)("h1",u({},{id:"spring"}),"Spring"),(0,t.kt)("h2",u({},{id:"spring-initializer"}),"Spring Initializer"),(0,t.kt)("p",null,(0,t.kt)("a",u({parentName:"p"},{href:"http://start.spring.io/"}),"Spring Initializer")," \u53ef\u7528\u4e8e\u5feb\u901f\u7684\u521b\u5efa\u9879\u76ee\u57fa\u7840."),(0,t.kt)("h2",u({},{id:"\u6587\u6863\u8def\u5f84"}),"\u6587\u6863\u8def\u5f84"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709\u6587\u6863\nhttp://spring.io/docs/reference\n\n# PDF\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/pdf/spring-$PROJECT_NAME-reference.pdf\n# \u5355\u9875 HTML\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/htmlsingle/\n# \u5206\u7ae0\u8282 HTML\nhttp://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/html/\n\nenv PROJECT_NAME=boot sh -c 'echo http://docs.spring.io/spring-$PROJECT_NAME/docs/current/reference/pdf/spring-$PROJECT_NAME-reference.pdf'\n\n# \u6709\u5b50\u9879\u76ee\u7684\u6587\u6863\u5730\u5740\nhttp://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/\n")))}y.isMDXComponent=!0}}]);