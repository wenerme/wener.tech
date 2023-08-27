"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17428],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(r),s=a,N=d["".concat(p,".").concat(s)]||d[s]||g[s]||l;return r?n.createElement(N,i(i({ref:e},m),{},{components:r})):n.createElement(N,i({ref:e},m))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57947:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&m(t,r,e[r]);if(o)for(var r of o(e))u.call(e,r)&&m(t,r,e[r]);return t};const d={title:"Trigger"},s="Trigger",N={unversionedId:"db/relational/postgresql/postgresql-trigger",id:"db/relational/postgresql/postgresql-trigger",title:"Trigger",description:"- trigger \u51fd\u6570\u4e0d\u80fd\u5b9a\u4e49\u53c2\u6570\uff0c\u901a\u8fc7 TG_ARGV \u63a5\u6536\u53c2\u6570",source:"@site/../notes/db/relational/postgresql/postgresql-trigger.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/trigger",permalink:"/notes/db/relational/postgresql/trigger",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-trigger.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"Trigger"},sidebar:"docs",previous:{title:"PostgreSQL Tenant",permalink:"/notes/db/relational/postgresql/tenant"},next:{title:"PostgreSQL Upgrade",permalink:"/notes/db/relational/postgresql/upgrade"}},c={},k=[],f={toc:k};function b(t){var e,r=t,{components:a}=r,m=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=g(g({},f),m),l(e,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",g({},{id:"trigger"}),"Trigger"),(0,n.kt)("admonition",g({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"trigger \u51fd\u6570\u4e0d\u80fd\u5b9a\u4e49\u53c2\u6570\uff0c\u901a\u8fc7 TG_ARGV \u63a5\u6536\u53c2\u6570"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null}),"var"),(0,n.kt)("th",g({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"NEW"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"OLD"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_NAME"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"trigger name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_WHEN"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"BEFORE/AFTER/INSTEAD OF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_LEVEL"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"ROW/STATEMENT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_OP"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"INSERT/UPDATE/DELETE/TRUNCATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_RELID"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"oid of table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("del",{parentName:"td"},"TG_RELNAME")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"name of table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_TABLE_NAME"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"name of table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_TABLE_SCHEMA"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"schema of table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_NARGS"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"number of arguments")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_ARGV"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"arguments")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_EVENT"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"TG_TAG"),(0,n.kt)("td",g({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b ",(0,n.kt)("inlineCode",{parentName:"li"},"trigger")," - \u6570\u636e\u53d8\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b ",(0,n.kt)("inlineCode",{parentName:"li"},"event_trigger")," - \u6570\u636e\u5e93\u4e8b\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u53d8\u91cf ",(0,n.kt)("inlineCode",{parentName:"li"},"TG_<NAME>")),(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"li"},"NULL")," \u6216 record/row"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BEFORE")," row",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"li"},"NULL")," \u5219\u4e0d\u4f1a\u89e6\u53d1\u5b9e\u9645\u64cd\u4f5c - INSERT/UPDATE/DELETE"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539 NEW \u8fd4\u56de\u4f1a\u4f7f\u7528\u65b0\u7684\u503c"),(0,n.kt)("li",{parentName:"ul"},"DELETE \u8fd4\u56de\u5185\u5bb9\u65e0\u610f\u4e49\uff0c\u4f46\u9700\u8981 \u975e NULL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b64\u65f6 NEW \u4e3a NULL\uff0c\u4e00\u822c\u8fd4\u56de OLD"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"INSTEAD OF"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u662f row \u7ea7\u522b\uff0c\u53ea\u652f\u6301 view"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"event_trigger")," - DDL \u4e8b\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TG_EVENT, TG_TAG"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ALTER|CREATE|DROP|COMMENT|GRANT|REVOKE|IMPORT FOREIGN SCHEMA|REFRESH MATERIALIZED VIEW")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SECURITY LABEL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT INTO")))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"https://www.postgresql.org/docs/current/plpgsql-trigger.html"}),"https://www.postgresql.org/docs/current/plpgsql-trigger.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",g({parentName:"li"},{href:"https://www.postgresql.org/docs/current/event-trigger-matrix.html"}),"https://www.postgresql.org/docs/current/event-trigger-matrix.html"))))),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-sql"}),"create or replace function insert_entity_sid() returns trigger as\n$$\nbegin\n    if NEW.sid is null then\n        NEW.sid := next_entity_sid(TG_ARGV[0], NEW.tid);\n    end if;\n    return new;\nend;\n$$ language plpgsql;\n")))}b.isMDXComponent=!0}}]);