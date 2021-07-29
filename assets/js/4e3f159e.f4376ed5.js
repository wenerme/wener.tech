"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3634],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=["components"],i={id:"ntfs",title:"NTFS"},u=void 0,c={unversionedId:"ops/storage/fs/ntfs",id:"ops/storage/fs/ntfs",isDocsHomePage:!1,title:"NTFS",description:"Tips",source:"@site/notes/ops/storage/fs/ntfs.md",sourceDirName:"ops/storage/fs",slug:"/ops/storage/fs/ntfs",permalink:"/notes/ops/storage/fs/ntfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/ntfs.md",version:"current",frontMatter:{id:"ntfs",title:"NTFS"},sidebar:"docs",previous:{title:"NFS",permalink:"/notes/ops/storage/fs/nfs"},next:{title:"SMB",permalink:"/notes/ops/storage/fs/smb"}},p=[{value:"Tips",id:"tips",children:[]}],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ntfs-3g \u5728 OSX \u6216 Linux \u4e0a\u90fd\u6709"),(0,a.kt)("li",{parentName:"ul"},"\u5426\u9700\u8981 NTFS",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u662f PC \u4f7f\u7528 -> \u5efa\u8bae NTFS"),(0,a.kt)("li",{parentName:"ul"},"\u5426\u5219 exFAT",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u751a\u81f3\u53ef\u80fd\u6bd4 NTFS \u66f4\u597d, \u5e76\u4e14\u6240\u6709\u5e73\u53f0\u90fd\u652f\u6301")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Manual http://www.tuxera.com/community/open-source-ntfs-3g/#tab-1414502373-2-22\n# http://www.tuxera.com/community/ntfs-3g-manual/\napk add ntfs-3g ntfs-3g-progs\n\n# \u6302\u8f7d\nmount -t ntfs-3g /dev/sda1 /mnt/windows\n# \u6216\u8005\nntfs-3g /dev/disk2 mnt/file\n\n# fstab \u65b9\u5f0f\necho '/dev/sda1 /mnt/windows ntfs-3g defaults 0 0' >  /etc/fstab\nmount -a\n")))}f.isMDXComponent=!0}}]);