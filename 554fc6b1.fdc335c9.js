(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1021)),l={title:"SMB"},o={unversionedId:"ops/storage/fs/smb",id:"ops/storage/fs/smb",isDocsHomePage:!1,title:"SMB",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/storage/fs/smb.md",slug:"/ops/storage/fs/smb",permalink:"/notes/ops/storage/fs/smb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/fs/smb.md",version:"current",sidebar:"docs",previous:{title:"NTFS",permalink:"/notes/ops/storage/fs/ntfs"},next:{title:"ZFS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/storage/fs/zfs-faq"}},b=[{value:"CIFS vs SMB",id:"cifs-vs-smb",children:[]},{value:"mounting cifs: \u201cOperation not supported\u201d",id:"mounting-cifs-operation-not-supported",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Server Message Block"),Object(i.b)("li",{parentName:"ul"},"1983 IBM \u521b\u5efa"))),Object(i.b)("li",{parentName:"ul"},"\u7248\u672c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"1983 SMBv1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u81ea Windows Server 2003\uff0cWindows 2000"),Object(i.b)("li",{parentName:"ul"},"Windows Server 2012 R2 \u5e9f\u5f03\u652f\u6301"),Object(i.b)("li",{parentName:"ul"},"Windows Server 2016\uff0cWindows 10 \u65e0 SMBv1 \u652f\u6301"),Object(i.b)("li",{parentName:"ul"},"Samba 4.11 \u9ed8\u8ba4\u7981\u7528"))),Object(i.b)("li",{parentName:"ul"},"2006 SMBv2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u81ea Windows Vista in 2006\uff0cWindows Server 2008"),Object(i.b)("li",{parentName:"ul"},"Samba 3.6"),Object(i.b)("li",{parentName:"ul"},"\u51cf\u5c11\u6307\u4ee4\uff0c\u652f\u6301\u7b26\u53f7\u94fe\u63a5\uff0c\u7f13\u5b58\u6587\u4ef6\u5c5e\u6027"),Object(i.b)("li",{parentName:"ul"},"\u5f00\u53d1\u534f\u8bae\u89c4\u8303"),Object(i.b)("li",{parentName:"ul"},"OS X 10.9 \u4ece afp \u8fc1\u79fb\u5230 SMBv2"),Object(i.b)("li",{parentName:"ul"},"Linux 3.7 CIFS \u652f\u6301 SMBv2"))),Object(i.b)("li",{parentName:"ul"},"2009 SMBv2.1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u81ea Windows 7, Windows Server 2008 R2"),Object(i.b)("li",{parentName:"ul"},"opportunistic locking mechanism"))),Object(i.b)("li",{parentName:"ul"},"2012 SMBv3 - SMBv2.2",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SMB Direct Protocol - SMB RDMA"),Object(i.b)("li",{parentName:"ul"},"\u591a\u901a\u9053 - \u4e00\u4e2a\u4f1a\u8bdd\u591a\u4e2a\u8fde\u63a5"),Object(i.b)("li",{parentName:"ul"},"\u4f20\u8f93\u5c42 Failover"),Object(i.b)("li",{parentName:"ul"},"\u7aef\u5230\u7aef\u52a0\u5bc6"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e AES \u7b7e\u540d\u7b97\u6cd5 - \u4e4b\u524d\u662f HMAC SHA-256"))),Object(i.b)("li",{parentName:"ul"},"2013 SMB 3.0.2 - 3.02",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7981\u7528 SMBv1"))),Object(i.b)("li",{parentName:"ul"},"2016 SMB 3.1.1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5728 AES-128 CCM \u65b0\u589e AES-128 GCM"),Object(i.b)("li",{parentName:"ul"},"SHA-512 \u6bcf\u6b21\u8ba4\u8bc1\u5b8c\u6574\u6027\u68c0\u67e5"),Object(i.b)("li",{parentName:"ul"},"\u5f3a\u5236\u5b89\u5168\u534f\u8bae\u534f\u5546")))))),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"cifs-vs-smb"},"CIFS vs SMB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CIFS - Common Internet File System",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SMB \u7684\u65b9\u8a00"),Object(i.b)("li",{parentName:"ul"},"SMB \u7531 IBM \u521b\u5efa"),Object(i.b)("li",{parentName:"ul"},"1996 \u5fae\u8f6f \u5c1d\u8bd5\u91cd\u547d\u540d\u4e3a CIFS\uff0c \u5bf9\u5e94 SMBv1\uff0c\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd"),Object(i.b)("li",{parentName:"ul"},"Linux \u7684 CIFS \u6a21\u5757\u652f\u6301 SMBv2"))),Object(i.b)("li",{parentName:"ul"},"\u5efa\u8bae\u7edf\u4e00\u4f7f\u7528 SMB"),Object(i.b)("li",{parentName:"ul"},"Windows Vista/Windows 2006 SMBv2"),Object(i.b)("li",{parentName:"ul"},"Windows 8/Windows 2012 SMBv3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.varonis.com/cifs-vs-smb/"},"CIFS vs SMB"))),Object(i.b)("h2",{id:"mounting-cifs-operation-not-supported"},"mounting cifs: \u201cOperation not supported\u201d"),Object(i.b)("p",null,"\u5c1d\u8bd5\u6dfb\u52a0 vers=3.0 \u9009\u9879"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mount -t cifs //192.168.1.1/share /mnt -o user=username,password=passwordd,vers=3.0\n")))}p.isMDXComponent=!0}}]);