"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77766],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33463:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],i={title:"PostgreSQL Replicate"},p="PostgreSQL Replication",s={unversionedId:"db/relational/postgresql/postgresql-replication",id:"db/relational/postgresql/postgresql-replication",title:"PostgreSQL Replicate",description:"- PostgreSQL Replication and Automatic Failover Tutorial",source:"@site/../notes/db/relational/postgresql/postgresql-replication.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/postgresql-replication",permalink:"/notes/db/relational/postgresql/postgresql-replication",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/db/relational/postgresql/postgresql-replication.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"PostgreSQL Replicate"},sidebar:"docs",previous:{title:"PostgreSQL \u94fe\u63a5\u6c60",permalink:"/notes/db/relational/postgresql/postgresql-pool"},next:{title:"Postgresql Scale",permalink:"/notes/db/relational/postgresql/postgresql-scale"}},c={},u=[{value:"Logical Replication",id:"logical-replication",level:2},{value:"Streaming Replication",id:"streaming-replication",level:2},{value:"Backup",id:"backup",level:2}],m={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql-replication"},"PostgreSQL Replication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.enterprisedb.com/postgres-tutorials/postgresql-replication-and-automatic-failover-tutorial"},"PostgreSQL Replication and Automatic Failover Tutorial"))),(0,l.kt)("h2",{id:"logical-replication"},"Logical Replication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u903b\u8f91\u590d\u5236 - v10+"),(0,l.kt)("li",{parentName:"ul"},"SQL \u8bed\u53e5\u7ef4\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"PUBLICATION/SUBSCRIPTION"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u3001\u5185\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/logicaldecoding.html"},"Logical Decoding"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7684\u5185\u90e8\u903b\u8f91"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u81ea\u884c\u5bf9\u63a5\u534f\u8bae\uff0c\u7136\u540e\u5b9e\u73b0\u4fee\u6539 SQL \u7684\u80fd\u529b")))))),(0,l.kt)("admonition",{title:"\u9650\u5236",type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u590d\u5236 DDL - schema \u4fee\u6539"),(0,l.kt)("li",{parentName:"ul"},"sequences \u4e0d\u4f1a\u88ab\u590d\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u552f\u4e00\u4e3b\u952e - \u590d\u5236\u4e3b\u952e - \u6ca1\u6709\u5219\u4f7f\u7528\u6574\u884c\u5bf9\u6bd4\uff08\u4e0d\u5efa\u8bae\uff09 - REPLICA IDENTITY"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4fee\u6539\u590d\u5236\u5185\u5bb9\u8def\u5f84",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Schema \u540d\u5b57\u3001\u5217\u540d \u5fc5\u987b\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u7247\u8868\u540d\u5b57\u5fc5\u987b\u4e00\u81f4"))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Large Object"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ALTER SUBSCRIPTION mysub DISABLE;\nALTER SUBSCRIPTION mysub ENABLE;\n")),(0,l.kt)("h2",{id:"streaming-replication"},"Streaming Replication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION"},"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION"))),(0,l.kt)("h2",{id:"backup"},"Backup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/backup.html"},"https://www.postgresql.org/docs/current/backup.html"))))}g.isMDXComponent=!0}}]);