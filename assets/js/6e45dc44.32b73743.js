"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78729],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,m=f["".concat(i,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16611:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],s={tags:["Configuration"]},i="PostgreSQL \u914d\u7f6e",p={unversionedId:"db/relational/postgresql/postgresql-conf",id:"db/relational/postgresql/postgresql-conf",title:"PostgreSQL \u914d\u7f6e",description:"- Server Configuration",source:"@site/notes/db/relational/postgresql/postgresql-conf.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-conf",permalink:"/notes/db/relational/postgresql/postgresql-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgresql-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/notes/db/relational/postgresql/postgresql-cli"},next:{title:"PostgreSQL Cookbook",permalink:"/notes/db/relational/postgresql/postgresql-cookbook"}},c={},u=[{value:"SSL",id:"ssl",level:2}],f={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql-\u914d\u7f6e"},"PostgreSQL \u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/runtime-config.html"},"Server Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jberkus/annotated.conf"},"jberkus/annotated.conf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pgpedia.info/"},"https://pgpedia.info/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://postgresqlco.nf/doc/en/param"},"https://postgresqlco.nf/doc/en/param"))),(0,a.kt)("h2",{id:"ssl"},"SSL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/libpq-ssl.html"},"libpq-ssl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/ssl-tcp.html"},"Secure TCP/IP Connections with SSL")),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e hba \u6765\u5f3a\u5236 ssl")))}g.isMDXComponent=!0}}]);