"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64855],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||c[p]||a;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),s=["components"],l={title:"KSMBD"},i="KSMBD",u={unversionedId:"os/linux/fs/ksmbd",id:"os/linux/fs/ksmbd",title:"KSMBD",description:"- Linux 5.15 in-knernel smbd",source:"@site/../notes/os/linux/fs/ksmbd.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/ksmbd",permalink:"/notes/os/linux/fs/ksmbd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/fs/ksmbd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"KSMBD"},sidebar:"docs",previous:{title:"FUSE",permalink:"/notes/os/linux/fs/fuse"},next:{title:"NFS",permalink:"/notes/os/linux/fs/nfs"}},m={},c=[],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ksmbd"},"KSMBD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux 5.15 in-knernel smbd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"by Samsung"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_SMB_SERVER"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5b9e\u73b0\u6027\u80fd\u76f8\u5173\u7279\u6027\u5230\u5185\u6838",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RDMA for SMB Direct"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/cifs/ksmbd.rst"},"Documentation/filesystems/cifs/ksmbd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cifsd-team/ksmbd-tools"},"cifsd-team/ksmbd-tools"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ksmbd.addshare"),(0,a.kt)("li",{parentName:"ul"},"ksmbd.adduser"),(0,a.kt)("li",{parentName:"ul"},"ksmbd.control"),(0,a.kt)("li",{parentName:"ul"},"ksmbd.mountd")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'apk add ksmbd-tools\n\nmodprobe ksmbd\nmkdir /etc/ksmbd\n# /etc/ksmbd/users.db\nksmbd.adduser -a admin\n\n# https://github.com/cifsd-team/ksmbd-tools/blob/master/smb.conf.example\ntouch /etc/ksmbd/smb.conf\nksmbd.addshare -a myshare -o "guest ok = yes, writable = yes, path = /mnt/data"\n\nksmbd.mountd\n\nksmbd.control -s  # stop\nrmmod ksmbd       # unload module\n\nksmbd.control -d "all"  # debug all\nksmbd.control -d "smb"  # debug smb\n')))}p.isMDXComponent=!0}}]);