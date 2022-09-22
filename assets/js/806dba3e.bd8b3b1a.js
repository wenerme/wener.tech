"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4046],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,m=f["".concat(s,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const f={tags:["Configuration"]},g="PostgreSQL \u914d\u7f6e",m={unversionedId:"db/relational/postgresql/postgresql-conf",id:"db/relational/postgresql/postgresql-conf",title:"PostgreSQL \u914d\u7f6e",description:"- Server Configuration",source:"@site/../notes/db/relational/postgresql/postgresql-conf.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-conf",permalink:"/notes/db/relational/postgresql/postgresql-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/notes/db/relational/postgresql/postgresql-cli"},next:{title:"PostgreSQL Cookbook",permalink:"/notes/db/relational/postgresql/postgresql-cookbook"}},d={},b=[{value:"SSL",id:"ssl",level:2}],y={toc:b};function h(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),c),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"postgresql-\u914d\u7f6e"}),"PostgreSQL \u914d\u7f6e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/runtime-config.html"}),"Server Configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/jberkus/annotated.conf"}),"jberkus/annotated.conf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://pgtune.leopard.in.ua/"}),"https://pgtune.leopard.in.ua/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://pgpedia.info/"}),"https://pgpedia.info/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://postgresqlco.nf/doc/en/param"}),"https://postgresqlco.nf/doc/en/param"))),(0,n.kt)("h2",u({},{id:"ssl"}),"SSL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/libpq-ssl.html"}),"libpq-ssl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/ssl-tcp.html"}),"Secure TCP/IP Connections with SSL")),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e hba \u6765\u5f3a\u5236 ssl")))}h.isMDXComponent=!0}}]);