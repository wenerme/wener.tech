"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97456],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||s;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return h}});var r=n(49613),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>s(e,a(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"ZFS Snapshot"},d="ZFS Snapshot",b={unversionedId:"os/linux/fs/zfs/zfs-snapshot",id:"os/linux/fs/zfs/zfs-snapshot",title:"ZFS Snapshot",description:"- Let\u2019s Talk OpenZFS Snapshots",source:"@site/../notes/os/linux/fs/zfs/zfs-snapshot.md",sourceDirName:"os/linux/fs/zfs",slug:"/os/linux/fs/zfs/snapshot",permalink:"/notes/os/linux/fs/zfs/snapshot",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/zfs/zfs-snapshot.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679060062,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"ZFS Snapshot"},sidebar:"docs",previous:{title:"PostgreSQL & ZFS",permalink:"/notes/os/linux/fs/zfs/postgresql"},next:{title:"Stat",permalink:"/notes/os/linux/fs/zfs/stat"}},O={},h=[],v={toc:h},g="wrapper";function w(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,u(f(f({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"zfs-snapshot"}),"ZFS Snapshot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://klarasystems.com/articles/lets-talk-openzfs-snapshots/"}),"Let\u2019s Talk OpenZFS Snapshots"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a dataset \u4e0d\u8981\u592a\u591a snapshot\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u6027\u80fd")))))}w.isMDXComponent=!0}}]);