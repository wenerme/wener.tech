(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var l=n(0),a=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),O=l,j=m["".concat(r,".").concat(O)]||m[O]||o[O]||b;return n?a.a.createElement(j,i(i({ref:t},p),{},{components:n})):a.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,r=new Array(b);r[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<b;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},666:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var l=n(3),a=n(8),b=(n(0),n(1083)),r={id:"alpine-intro",title:"Alpine \u5165\u95e8",date:new Date("2018-02-26T00:00:00.000Z")},i={unversionedId:"os/alpine/alpine-intro",id:"os/alpine/alpine-intro",isDocsHomePage:!1,title:"Alpine \u5165\u95e8",description:"Alpine \u7684\u4f18\u70b9",source:"@site/notes/os/alpine/alpine-intro.md",slug:"/os/alpine/alpine-intro",permalink:"/notes/os/alpine/alpine-intro",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-intro.md",version:"current",sidebar:"docs",previous:{title:"AlpineLinux Install",permalink:"/notes/os/alpine/alpine-install"},next:{title:"Alpine local backup",permalink:"/notes/os/alpine/alpine-lbu"}},c=[{value:"Alpine \u7684\u4f18\u70b9",id:"alpine-\u7684\u4f18\u70b9",children:[]},{value:"Alpine \u7684\u7f3a\u70b9",id:"alpine-\u7684\u7f3a\u70b9",children:[]},{value:"\u53c2\u8003\u8d44\u6e90",id:"\u53c2\u8003\u8d44\u6e90",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u7cfb\u7edf\u955c\u50cf\u9009\u62e9",id:"\u7cfb\u7edf\u955c\u50cf\u9009\u62e9",children:[]},{value:"\u7248\u672c\u9009\u62e9",id:"\u7248\u672c\u9009\u62e9",children:[]},{value:"\u4ed3\u5e93\u9009\u62e9",id:"\u4ed3\u5e93\u9009\u62e9",children:[]},{value:"\u4ed3\u5e93\u955c\u50cf\u9009\u62e9",id:"\u4ed3\u5e93\u955c\u50cf\u9009\u62e9",children:[]},{value:"\u5b89\u88c5\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9",id:"\u5b89\u88c5\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9",children:[]},{value:"\u5236\u4f5c\u5b89\u88c5\u76d8",id:"\u5236\u4f5c\u5b89\u88c5\u76d8",children:[]},{value:"\u5f00\u59cb\u5b89\u88c5",id:"\u5f00\u59cb\u5b89\u88c5",children:[]}]},{value:"\u6982\u62ec",id:"\u6982\u62ec",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"alpine-\u7684\u4f18\u70b9"},"Alpine \u7684\u4f18\u70b9"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Small. Simple. Secure."),Object(b.b)("p",{parentName:"blockquote"},"Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox."),Object(b.b)("p",{parentName:"blockquote"},"Alpine Linux \u662f\u4e00\u4e2a\u57fa\u4e8e musl libc \u548c busybox, \u9762\u5411\u5b89\u5168, \u8f7b\u91cf\u7ea7\u7684 Linux \u53d1\u5e03\u7248.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5f00\u6e90"),Object(b.b)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6700\u5c0f\u5b89\u88c5 5MB"),Object(b.b)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u90fd\u662f\u9759\u6001\u94fe\u63a5"),Object(b.b)("li",{parentName:"ul"},"musl"),Object(b.b)("li",{parentName:"ul"},"openrc"))),Object(b.b)("li",{parentName:"ul"},"\u7a33\u5b9a\u6eda\u52a8\u5347\u7ea7",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6709\u7a33\u5b9a\u7248\u548c\u6700\u65b0\u7248"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u534a\u5e74\u4e00\u4e2a\u7a33\u5b9a\u7248"),Object(b.b)("li",{parentName:"ul"},"\u7a33\u5b9a\u7248\u4f1a\u7ef4\u62a4\u4e24\u5e74"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u975e\u5e38\u7b80\u4fbf\u7684\u5347\u7ea7"))),Object(b.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u5305\u7ba1\u7406",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Apk"),Object(b.b)("li",{parentName:"ul"},"\u5305\u7684\u6784\u5efa\u4e5f\u5f88\u7b80\u5355"))),Object(b.b)("li",{parentName:"ul"},"\u73b0\u4ee3\u5316",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5185\u6838\u7248\u672c\u8f83\u65b0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u80fd\u591f\u5229\u7528\u4e0a\u5f88\u591a\u65b0\u5185\u6838\u7684\u529f\u80fd"))),Object(b.b)("li",{parentName:"ul"},"\u5305\u7248\u672c\u6bd4\u8f83\u65b0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 zfs, docker \u7b49\u90fd\u662f\u5bf9\u5e94\u7248\u672c\u7684\u6700\u65b0\u7248"))))),Object(b.b)("li",{parentName:"ul"},"\u751f\u6001\u5708\u4e30\u5bcc",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5305\u975e\u5e38\u591a"))),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u8f83\u591a\u5e73\u53f0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"x86"),Object(b.b)("li",{parentName:"ul"},"x86_64"),Object(b.b)("li",{parentName:"ul"},"armhf"),Object(b.b)("li",{parentName:"ul"},"armv7"),Object(b.b)("li",{parentName:"ul"},"aarch64"),Object(b.b)("li",{parentName:"ul"},"ppc64le"),Object(b.b)("li",{parentName:"ul"},"s390x"))),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u6811\u8393\u6d3e"),Object(b.b)("li",{parentName:"ul"},"\u5f88\u591a docker \u955c\u50cf\u57fa\u4e8e AlpineLinux",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Docker For Mac \u7684\u57fa\u7840\u7cfb\u7edf\u662f AlpineLinux")))),Object(b.b)("h2",{id:"alpine-\u7684\u7f3a\u70b9"},"Alpine \u7684\u7f3a\u70b9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6587\u6863\u4e0d\u591f\u5168\u9762",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Wiki \u5185\u5bb9\u8f83\u5c11, \u66f4\u65b0\u4e0d\u591a"))),Object(b.b)("li",{parentName:"ul"},"musl libc \u53ef\u80fd\u6709\u517c\u5bb9\u95ee\u9898, \u6709\u65f6\u5019\u9700\u8981\u8865\u4e01",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f46\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u4e5f\u90fd\u4f1a\u505a\u517c\u5bb9\u4e86")))),Object(b.b)("h2",{id:"\u53c2\u8003\u8d44\u6e90"},"\u53c2\u8003\u8d44\u6e90"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/notes/os/alpine/alpine-ops"},"\u8fd0\u7ef4\u7b14\u8bb0")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/downloads/"},"\u4e0b\u8f7d\u9875")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Main_Page"},"\u7ef4\u57fa"))),Object(b.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(b.b)("h3",{id:"\u7cfb\u7edf\u955c\u50cf\u9009\u62e9"},"\u7cfb\u7edf\u955c\u50cf\u9009\u62e9"),Object(b.b)("p",null,"\u5b98\u65b9 ",Object(b.b)("a",{parentName:"p",href:"https://alpinelinux.org/downloads/"},"\u4e0b\u8f7d\u9875")," \u5217\u4e86\u51e0\u79cd\u7c7b\u578b\u7684\u955c\u50cf, \u6240\u6709\u955c\u50cf\u7684\u6784\u5efa\u811a\u672c\u4f4d\u4e8e ",Object(b.b)("a",{parentName:"p",href:"https://github.com/alpinelinux/alpine-iso"},"alpinelinux/alpine-iso"),"."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"TIPS")),Object(b.b)("ol",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ol"},"\u505a\u5b89\u88c5\u76d8\u5efa\u8bae\u9009\u62e9 EXTENDED, \u5728\u4e0d\u9700\u8981 setup-repository \u7684\u524d\u63d0\u4e0b\u4e5f\u80fd\u591f\u5b89\u88c5\u5230\u786c\u76d8."),Object(b.b)("li",{parentName:"ol"},"\u4ed3\u5e93\u955c\u50cf\u4e2d\u4e5f\u80fd\u4e0b\u8f7d\u7cfb\u7edf\u955c\u50cf ",Object(b.b)("a",{parentName:"li",href:"http://mirrors.aliyun.com/alpine/v3.10/releases/"},"v3.10/releases")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"STANDARD",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6807\u51c6\u955c\u50cf"),Object(b.b)("li",{parentName:"ul"},"\u955c\u50cf\u8f83\u5c11, \u5b89\u88c5\u9700\u8981\u7f51\u7edc\u8fde\u63a5"))),Object(b.b)("li",{parentName:"ul"},"EXTENDED",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6269\u5c55\u955c\u50cf"),Object(b.b)("li",{parentName:"ul"},"\u9644\u5e26\u4e86\u5e38\u7528\u5305, \u5b89\u88c5\u4e0d\u9700\u8981\u7f51\u7edc\u8fde\u63a5; \u9002\u7528\u4e8e\u8def\u7531\u548c\u670d\u52a1\u5668"))),Object(b.b)("li",{parentName:"ul"},"VANILLA",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u672a ",Object(b.b)("a",{parentName:"li",href:"../linux/security/grsecurity"},"Hardened")," \u7684\u955c\u50cf"),Object(b.b)("li",{parentName:"ul"},"\u81ea 3.8 \u5f00\u59cb\uff0c\u5df2\u7ecf\u6ca1\u6709 hardened \u7684\u5185\u6838\u4e86"))),Object(b.b)("li",{parentName:"ul"},"VIRTUAL",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u865a\u62df\u673a\u7684\u955c\u50cf"))),Object(b.b)("li",{parentName:"ul"},"XEN",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e XEN \u865a\u62df\u5316\u7684\u955c\u50cf"))),Object(b.b)("li",{parentName:"ul"},"MINI ROOT FILESYSTEM",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6700\u5c0f\u6839\u76ee\u5f55\u7cfb\u7edf"),Object(b.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5bb9\u5668\u548c chroot"))),Object(b.b)("li",{parentName:"ul"},"RASPBERRY PI",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6811\u8393\u6d3e\u7cfb\u7edf"))),Object(b.b)("li",{parentName:"ul"},"GENERIC ARM",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u901a\u7528 ARM \u7cfb\u7edf")))),Object(b.b)("h3",{id:"\u7248\u672c\u9009\u62e9"},"\u7248\u672c\u9009\u62e9"),Object(b.b)("p",null,"\u4e3b\u8981\u5206\u4e3a\u7a33\u5b9a\u7248\u548c edge \u7248, \u4e3b\u8981\u533a\u522b\u5728\u4e8e\u5185\u6838\u548c\u5305\u7248\u672c\u4e0d\u540c. \u7a33\u5b9a\u7248\u5f88\u5bb9\u6613\u5347\u7ea7\u5230\u4e0b\u4e00\u4e2a\u7248\u672c, \u4fee\u6539\u4ed3\u5e93\u4e2d\u7684\u7248\u672c\u53f7\u8fdb\u884c\u66f4\u65b0\u5373\u53ef."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"TIPS"),"\n\u63a8\u8350\u4f7f\u7528\u7a33\u5b9a\u7248")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"v3.10",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7a33\u5b9a\u7248"))),Object(b.b)("li",{parentName:"ul"},"edge",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6700\u65b0\u7248")))),Object(b.b)("h3",{id:"\u4ed3\u5e93\u9009\u62e9"},"\u4ed3\u5e93\u9009\u62e9"),Object(b.b)("p",null,"\u4ed3\u5e93\u5206\u4e3a\u4e09\u4e2a\u7248\u672c, \u5b89\u88c5\u5305\u65f6\u53ef\u6307\u5b9a\u4ed3\u5e93."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"TIPS"),"\n\u63a8\u8350\u53ea\u6dfb\u52a0 main \u548c community \u4ed3\u5e93, testing \u4ed3\u5e93\u53ef\u4ee5\u6dfb\u52a0\u5230 @testing \u6807\u7b7e\u4e0b\u6216\u5b89\u88c5\u65f6\u6307\u5b9a.")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"main",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5b98\u65b9\u7ef4\u62a4\u7684\u4e3b\u8981\u4ed3\u5e93"))),Object(b.b)("li",{parentName:"ul"},"community",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u793e\u533a\u7ef4\u62a4\u4ed3\u5e93"))),Object(b.b)("li",{parentName:"ul"},"testing",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6d4b\u8bd5\u4ed3\u5e93"),Object(b.b)("li",{parentName:"ul"},"\u53ea\u6709 edge \u7248\u6709"),Object(b.b)("li",{parentName:"ul"},"\u5f88\u591a\u4e0d\u7a33\u5b9a\u7684, \u6216\u6700\u65b0\u7684\u5305\u5728\u8be5\u4ed3\u5e93\u4e0b")))),Object(b.b)("h3",{id:"\u4ed3\u5e93\u955c\u50cf\u9009\u62e9"},"\u4ed3\u5e93\u955c\u50cf\u9009\u62e9"),Object(b.b)("p",null,"Alpine \u4ed3\u5e93\u6709\u5f88\u591a\u955c\u50cf, \u5728\u4e2d\u56fd\u4e00\u822c\u63a8\u8350\u4f7f\u7528\u56fd\u5185\u7684\u955c\u50cf, \u800c\u4e0d\u662f\u5b98\u65b9\u5217\u8868\u91cc\u7684\u955c\u50cf."),Object(b.b)("p",null,"\u955c\u50cf\u5730\u5740\u4f4d\u4e8e ",Object(b.b)("inlineCode",{parentName:"p"},"/etc/apk/repository"),", \u4e2a\u4eba\u4e00\u822c\u4f7f\u7528",Object(b.b)("a",{parentName:"p",href:"http://mirrors.aliyun.com/alpine"},"\u963f\u91cc\u4e91\u955c\u50cf"),"."),Object(b.b)("h3",{id:"\u5b89\u88c5\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9"},"\u5b89\u88c5\u90e8\u7f72\u65b9\u5f0f\u9009\u62e9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5b66\u4e60\u9636\u6bb5",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 VPS+Takeover \u6765\u4f7f\u7528 AlpineLinux"),Object(b.b)("li",{parentName:"ul"},"\u865a\u62df\u673a/Qemu",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ece CD \u542f\u52a8, \u5b89\u88c5\u5230\u786c\u76d8"),Object(b.b)("li",{parentName:"ul"},"\u4ece\u5df2\u5b89\u88c5\u7684\u786c\u76d8\u955c\u50cf\u542f\u52a8"))))),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5c06\u7cfb\u7edf\u76d8\u505a\u5230 USB \u4ece USB \u542f\u52a8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u65f6\u4e5f\u53ef\u4ee5\u8003\u8651\u5c06\u7cfb\u7edf\u505a\u5728 USB \u4e0a, \u65b9\u4fbf\u7ef4\u62a4\u548c\u670d\u52a1\u5668\u66f4\u6362"),Object(b.b)("li",{parentName:"ul"},"\u5b89\u88c5\u53ef\u4ee5\u5728\u865a\u62df\u673a\u4e2d\u5b89\u88c5, \u6216\u8005\u505a\u4e00\u4e2a\u5de5\u5177 USB \u7cfb\u7edf, \u4e13\u95e8\u7528\u6765\u5b89\u88c5\u7ef4\u62a4"))),Object(b.b)("li",{parentName:"ul"},"\u5c06\u7cfb\u7edf\u76d8\u5b89\u88c5\u5230\u7269\u7406\u786c\u76d8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4ece\u5de5\u5177 USB \u7cfb\u7edf\u8fdb\u5165, \u76f4\u63a5\u53ef\u5b89\u88c5\u5230\u7269\u7406\u786c\u76d8"))))),Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u90e8\u7f72",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7f51\u7edc\u5b89\u88c5")))),Object(b.b)("h3",{id:"\u5236\u4f5c\u5b89\u88c5\u76d8"},"\u5236\u4f5c\u5b89\u88c5\u76d8"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Installation"},"wiki/Installation"))),Object(b.b)("p",null,"\u5c06\u7cfb\u7edf\u955c\u50cf\u505a\u5230 USB \u4ee5\u4fbf\u4e8e\u4ece USB \u542f\u52a8\u5b89\u88c5."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 3.10 \u7248\u672c\nALP_VER=v3.10\n# \u4e0b\u8f7d\u955c\u50cf\nwget http://mirrors.aliyun.com/alpine/$ALP_VER/releases/x86_64/alpine-extended-$ALP_VER.0-x86_64.iso\n\n# \u65b9\u5f0f\u4e00 \u5c06\u542f\u52a8\u76d8\u955c\u50cf\u505a\u5230 USB \u4ece USB \u542f\u52a8\n# ====================\n# \u5047\u8bbe USB \u76d8\u4e3a /dev/sdb\ndd if=alpine-extended-$ALP_VER.0-x86_64.iso of=/dev/sdb\n\n# \u65b9\u5f0f\u4e8c \u5c06\u7cfb\u7edf\u5b89\u88c5\u5230 USB, \u4ece USB \u542f\u52a8\n# ====================\n# VirtualBox \u53ef\u4ee5\u4ece iso \u542f\u52a8, \u5e76\u6dfb\u52a0 USB \u8bbe\u5907, \u5b89\u88c5\u5230 USB\n# Qemu \u53ef\u4ee5\u76f4\u63a5\u547d\u4ee4\u884c\u542f\u52a8\u7136\u540e\u8fdb\u884c\u5b89\u88c5\n# \u6ce8\u610f: macOS \u4e0b\u9700\u8981\u5148\u5c06 USB \u76d8\u8fdb\u884c `diskutil unmountdisk /dev/disk2` \u5378\u8f7d\u64cd\u4f5c, \u5e76\u4e14\u542f\u52a8 qemu \u9700\u8981 sudo\nqemu-system-x86_64 -cdrom alpine-extended-$ALP_VER.0-x86_64.iso -boot b -hda /dev/sdb -net nic -net user\n")),Object(b.b)("h3",{id:"\u5f00\u59cb\u5b89\u88c5"},"\u5f00\u59cb\u5b89\u88c5"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u65b9\u5f0f\u4e00 \u4f7f\u7528\u5b8c\u6574\u7684\u5b89\u88c5\u811a\u672c\u5b89\u88c5\n# ====================\n# \u53ef\u80fd\u4f1a\u9700\u8981\u7f51\u7edc\nsetup-alpine\n\n# \u65b9\u5f0f\u4e8c \u5148\u542f\u52a8\u7f51\u7edc\u548c SSH \u8fdb\u884c\u8fdc\u7a0b\u5b89\u88c5\n# ====================\n# \u914d\u7f6e\u7f51\u7edc\nsetup-interfaces\n# \u91cd\u542f\u7f51\u7edc\u670d\u52a1\nrc-service networking restart\n# \u5b89\u88c5 OpenSSH\nsetup-sshd -c openssh\n# \u5141\u8bb8 root \u8fdc\u7a0b\u767b\u9646\necho 'PermitRootLogin yes' >> /etc/ssh/sshd_config\n# \u91cd\u542f ssh \u670d\u52a1\nrc-service sshd restart\n# \u8bbe\u7f6e\u5bc6\u7801\npasswd\n# \u7136\u540e\u5373\u53ef\u8fdc\u7a0b\u5b89\u88c5\n# \u4e3b\u8981\u4fbf\u4e8e\u7c98\u8d34\u590d\u5236\u547d\u4ee4\n\n# \u65b9\u5f0f\u4e09 \u76f4\u63a5\u5b89\u88c5\u5230\u78c1\u76d8\n# ====================\n# \u4f7f\u7528 extended \u955c\u50cf\u53ef\u76f4\u63a5\u79bb\u7ebf\u5b89\u88c5\u5230\u7269\u7406\u78c1\u76d8, standard \u9700\u8981\u7f51\u7edc\n# \u4f7f\u7528\u8be2\u95ee\u7684\u65b9\u5f0f\u5b89\u88c5\nsetup-disk\n\n# \u76f4\u63a5\u5b89\u88c5\n# -m \u4e3a\u5b89\u88c5\u6a21\u5f0f, sys \u662f\u4f5c\u4e3a\u7cfb\u7edf\u76d8\u5b89\u88c5\n# -s \u6307\u5b9a\u4ea4\u6362\u533a\u5927\u5c0f, 0 \u4e3a\u4e0d\u8981\u4ea4\u6362\u533a\n# -v \u6307\u5b9a\u5b89\u88c5\u76d8\n# \u5b89\u88c5\u65f6\u53ef\u6307\u5b9a\u78c1\u76d8\u683c\u5f0f, \u5bf9\u65b0\u624b\u4e0d\u5efa\u8bae\u4fee\u6539, \u9ed8\u8ba4 ext4, \u5176\u4ed6\u7684\u53ef\u4f7f\u7528 btrfs \u548c lvm \u7b49\nsetup-disk -m sys -s 0 -v /dev/sdb\n")),Object(b.b)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),Object(b.b)("p",null,"Alpine \u7684\u5b89\u88c5\u8fd8\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u5e76\u975e\u5341\u5206\u5feb\u901f\u7b80\u6d01\uff0c\u56e0\u6b64\u53ef\u4ee5\u591a\u591a\u5c1d\u8bd5\u3002Alpine \u7684\u4f7f\u7528\u4f53\u9a8c\u4e5f\u662f\u4e00\u6837\u7684\uff0c\u7b80\u5355\u6613\u7528\uff0c\u5f00\u59cb\u4f60\u7684 Alpine \u4e4b\u65c5\u5427\u3002"))}u.isMDXComponent=!0}}]);