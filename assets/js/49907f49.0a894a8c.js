"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48364],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60079:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&s(e,r,t[r]);return e};const m={title:"patroni"},f="patroni",d={unversionedId:"db/relational/postgresql/patroni",id:"db/relational/postgresql/patroni",title:"patroni",description:"- zalando/patroni - template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes",source:"@site/../notes/db/relational/postgresql/patroni.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/patroni",permalink:"/notes/db/relational/postgresql/patroni",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/patroni.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"patroni"},sidebar:"docs",previous:{title:"OrioleDB",permalink:"/notes/db/relational/postgresql/orioledb"},next:{title:"pg_cron",permalink:"/notes/db/relational/postgresql/pg_cron"}},b={},y=[],g={toc:y};function k(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"patroni"}),"patroni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/zalando/patroni"}),"zalando/patroni")," - template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Zookeeper"),(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"consul"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5efa RAFT - BETA"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/zalando/patroni/blob/master/docs/replication_modes.rst"}),"\u590d\u5236\u6a21\u5f0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u5f02\u6b65 stream \u590d\u5236 - maximum_lag_on_failover \u63a7\u5236\u4ece\u8282\u70b9\u5931\u8d25\u5ef6\u8fdf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u65f6\u53ef\u80fd\u4e22\u5931\u4e00\u90e8\u5206\u63d0\u4ea4\u4e8b\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u9009\u4e3e\u65f6\u4e0d\u4f1a\u8003\u8651\u526f\u672c\u65f6\u95f4\u7ebf - ",(0,n.kt)("inlineCode",{parentName:"li"},"check_timeline")))),(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'synchronous_commit: "on"'),(0,n.kt)("li",{parentName:"ul"},'synchronous_standby_names: "',"*",'"'),(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65\u590d\u5236\u4f9d\u7136\u53ef\u80fd\u4e22\u6570\u636e\uff0c\u4f8b\u5982\u4e09\u4e2a\u8282\u70b9\uff0c\u540c\u65f6\u4e24\u4e2a\u5931\u8d25"),(0,n.kt)("li",{parentName:"ul"},"\u5f00\u542f synchronous_mode \u4f1a\u8ba9\u6240\u6709\u8282\u70b9\u90fd\u590d\u5236\u540e\u624d\u8fd4\u56de\uff0c\u4fdd\u8bc1\u4e0d\u4e22\u5931\u4e8b\u52a1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027\u66f4\u4f4e"))))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/administration/postgresql/replication_and_failover.html"}),"PostgreSQL replication and failover with Omnibus GitLab"))))),(0,n.kt)("admonition",c({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4e0d\u8981\u4f7f\u7528 superuer"),(0,n.kt)("li",{parentName:"ul"},"citus \u662f sharding \u6a21\u5f0f\uff0c patroni \u662f \u526f\u672c\u6a21\u5f0f - \u5f53 DB \u5360\u7528\u5185\u5b58\u5927\u4e8e\u5355\u4e2a\u8282\u70b9\u65f6\u8003\u8651 sharding"),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709 mysql_fdw \u6269\u5c55"))))}k.isMDXComponent=!0}}]);