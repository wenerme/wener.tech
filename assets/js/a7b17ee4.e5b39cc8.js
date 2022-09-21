"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26150],{99048:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(96600),a=r(27279),o=(r(59496),r(3905)),i=["components"],s={title:"DFS"},l=void 0,p={unversionedId:"ops/storage/fs/dfs",id:"ops/storage/fs/dfs",title:"DFS",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/storage/fs/dfs.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/dfs",permalink:"/notes/ops/storage/fs/dfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/dfs.md",tags:[],version:"current",frontMatter:{title:"DFS"},sidebar:"docs",previous:{title:"Filesystem",permalink:"/notes/ops/storage/fs/"},next:{title:"ZFS Awesome",permalink:"/notes/ops/storage/fs/zfs-awesome"}},u={},c=[{value:"Samba",id:"samba",level:2}],f={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Distributed File System"),(0,o.kt)("li",{parentName:"ul"},"\u5fae\u8f6f\u5f00\u53d1\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf"),(0,o.kt)("li",{parentName:"ul"},"alternative name space, load balancing, automatic failover"))),(0,o.kt)("li",{parentName:"ul"},"junction \u5b9a\u4f4d\u5143\u4fe1\u606f\uff0c\u7136\u540e\u8bbf\u95ee\u5b9e\u9645 server \u83b7\u53d6\u6570\u636e",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u8054\u90a6"))),(0,o.kt)("li",{parentName:"ul"},"DFS-R - Distributed File System Replication",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 DFS \u4e2d\u7684\u526f\u672c\u673a\u5236"))),(0,o.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u6709\u4f7f\u7528 SMB \u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\uff08\u5355\u673a\uff09\u4f7f\u7528\u6216\u5728\u57df\u4e2d\u90e8\u7f72\u4f7f\u7528")),(0,o.kt)("h2",{id:"samba"},"Samba"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.samba.org/index.php/Distributed_File_System_(DFS)"},"Distributed File System")),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 DFS-R")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"path = /export/dfsroot\nmsdfs root = yes\nhost msdfs = yes\nvfs object = dfs_samba4\n")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);