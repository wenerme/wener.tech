"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73057],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"patroni"},p=void 0,s={unversionedId:"db/relational/postgresql/patroni",id:"db/relational/postgresql/patroni",title:"patroni",description:"- zalando/patroni - template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes",source:"@site/notes/db/relational/postgresql/patroni.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/patroni",permalink:"/notes/db/relational/postgresql/patroni",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/patroni.md",tags:[],version:"current",frontMatter:{title:"patroni"},sidebar:"docs",previous:{title:"Odyssey",permalink:"/notes/db/relational/postgresql/odyssey"},next:{title:"pg_cron",permalink:"/notes/db/relational/postgresql/pg_cron"}},u={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zalando/patroni"},"zalando/patroni")," - template for PostgreSQL High Availability with Etcd, Consul, ZooKeeper, or Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u914d\u7f6e",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Zookeeper"),(0,o.kt)("li",{parentName:"ul"},"etcd"),(0,o.kt)("li",{parentName:"ul"},"consul"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5efa RAFT - BETA"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zalando/patroni/blob/master/docs/replication_modes.rst"},"\u590d\u5236\u6a21\u5f0f"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528\u5f02\u6b65 stream \u590d\u5236 - maximum_lag_on_failover \u63a7\u5236\u4ece\u8282\u70b9\u5931\u8d25\u5ef6\u8fdf",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u65f6\u53ef\u80fd\u4e22\u5931\u4e00\u90e8\u5206\u63d0\u4ea4\u4e8b\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u9009\u4e3e\u65f6\u4e0d\u4f1a\u8003\u8651\u526f\u672c\u65f6\u95f4\u7ebf - ",(0,o.kt)("inlineCode",{parentName:"li"},"check_timeline")))),(0,o.kt)("li",{parentName:"ul"},"\u540c\u6b65",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'synchronous_commit: "on"'),(0,o.kt)("li",{parentName:"ul"},'synchronous_standby_names: "',"*",'"'),(0,o.kt)("li",{parentName:"ul"},"\u540c\u6b65\u590d\u5236\u4f9d\u7136\u53ef\u80fd\u4e22\u6570\u636e\uff0c\u4f8b\u5982\u4e09\u4e2a\u8282\u70b9\uff0c\u540c\u65f6\u4e24\u4e2a\u5931\u8d25"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u542f synchronous_mode \u4f1a\u8ba9\u6240\u6709\u8282\u70b9\u90fd\u590d\u5236\u540e\u624d\u8fd4\u56de\uff0c\u4fdd\u8bc1\u4e0d\u4e22\u5931\u4e8b\u52a1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027\u66f4\u4f4e"))))))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/administration/postgresql/replication_and_failover.html"},"PostgreSQL replication and failover with Omnibus GitLab"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4e0d\u8981\u4f7f\u7528 superuer"),(0,o.kt)("li",{parentName:"ul"},"citus \u662f sharding \u6a21\u5f0f\uff0c patroni \u662f \u526f\u672c\u6a21\u5f0f - \u5f53 DB \u5360\u7528\u5185\u5b58\u5927\u4e8e\u5355\u4e2a\u8282\u70b9\u65f6\u8003\u8651 sharding"),(0,o.kt)("li",{parentName:"ul"},"\u6ca1\u6709 mysql_fdw \u6269\u5c55")))))}d.isMDXComponent=!0}}]);