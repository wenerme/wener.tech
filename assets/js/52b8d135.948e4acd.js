"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54555],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99890:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e};const f={title:"Apache Solr"},m="Apache Solr",d={unversionedId:"db/search/solr",id:"db/search/solr",title:"Apache Solr",description:"- Apache Solr",source:"@site/../notes/db/search/solr.md",sourceDirName:"db/search",slug:"/db/search/solr",permalink:"/notes/db/search/solr",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/search/solr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628617278,formattedLastUpdatedAt:"Aug 10, 2021",frontMatter:{title:"Apache Solr"},sidebar:"docs",previous:{title:"Search Glossary",permalink:"/notes/db/search/glossary"},next:{title:"sonic",permalink:"/notes/db/search/sonic"}},b={},y=[],O={toc:y};function h(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},O),u),a(r,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"apache-solr"}),"Apache Solr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Apache Solr",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Lucense \u7684\u641c\u7d22\u5f15\u64ce"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f6e Tika \u96c6\u6210",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u76f4\u63a5\u7d22\u5f15\u5927\u591a\u7c7b\u578b\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7d22\u5f15 Word\u3001PDF"))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 XML, CSV, JSON \u6570\u636e\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bfc\u5165 JDBC, CSV, XML, Tika, URL, Flat File"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4f9d\u8d56 ZooKeeper")))))}h.isMDXComponent=!0}}]);