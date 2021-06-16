(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1083)),s={id:"ntfs",title:"NTFS"},c={unversionedId:"ops/storage/fs/ntfs",id:"ops/storage/fs/ntfs",isDocsHomePage:!1,title:"NTFS",description:"Tips",source:"@site/notes/ops/storage/fs/ntfs.md",slug:"/ops/storage/fs/ntfs",permalink:"/notes/ops/storage/fs/ntfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/ntfs.md",version:"current",sidebar:"docs",previous:{title:"NFS",permalink:"/notes/ops/storage/fs/nfs"},next:{title:"SMB",permalink:"/notes/ops/storage/fs/smb"}},i=[{value:"Tips",id:"tips",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ntfs-3g \u5728 OSX \u6216 Linux \u4e0a\u90fd\u6709"),Object(a.b)("li",{parentName:"ul"},"\u5426\u9700\u8981 NTFS",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u53ea\u662f PC \u4f7f\u7528 -> \u5efa\u8bae NTFS"),Object(a.b)("li",{parentName:"ul"},"\u5426\u5219 exFAT",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6027\u80fd\u751a\u81f3\u53ef\u80fd\u6bd4 NTFS \u66f4\u597d, \u5e76\u4e14\u6240\u6709\u5e73\u53f0\u90fd\u652f\u6301")))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# Manual http://www.tuxera.com/community/open-source-ntfs-3g/#tab-1414502373-2-22\n# http://www.tuxera.com/community/ntfs-3g-manual/\napk add ntfs-3g ntfs-3g-progs\n\n# \u6302\u8f7d\nmount -t ntfs-3g /dev/sda1 /mnt/windows\n# \u6216\u8005\nntfs-3g /dev/disk2 mnt/file\n\n# fstab \u65b9\u5f0f\necho '/dev/sda1 /mnt/windows ntfs-3g defaults 0 0' >  /etc/fstab\nmount -a\n")))}u.isMDXComponent=!0}}]);