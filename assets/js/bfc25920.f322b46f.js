"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38094],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8e4:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const f={title:"Spilo"},m="Spilo",d={unversionedId:"db/relational/postgresql/spilo",id:"db/relational/postgresql/spilo",title:"Spilo",description:"- zalando/spilo",source:"@site/../notes/db/relational/postgresql/spilo.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/spilo",permalink:"/notes/db/relational/postgresql/spilo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/spilo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"Spilo"},sidebar:"docs",previous:{title:"psql",permalink:"/notes/db/relational/postgresql/psql"},next:{title:"TimeScale",permalink:"/notes/db/relational/postgresql/timescale"}},b={},y=[],g={toc:y};function O(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),c),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"spilo"}),"Spilo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/zalando/spilo"}),"zalando/spilo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HA PostgreSQL cluster using Docker"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("a",u({parentName:"li"},{href:"/notes/db/relational/postgresql/patroni"}),"patroni")))),(0,n.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/zalando/spilo/blob/master/ENVIRONMENT.rst"}),"ENVIRONMENT")),(0,n.kt)("li",{parentName:"ul"},"patronictl"),(0,n.kt)("li",{parentName:"ul"},"/scripts")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"patronictl list\npatronictl show-config\n")))}O.isMDXComponent=!0}}]);