(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(o,".").concat(m)]||s[m]||f[m]||a;return n?i.a.createElement(b,c(c({ref:t},l),{},{components:n})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(1021)),o={slug:"fix-init-script",title:"\u8bb0\u5f55\u4e00\u6b21\u4fee\u590d init \u811a\u672c\u7684\u7ecf\u5386",tags:["AlpineLinux","\u8fd0\u7ef4"]},c={permalink:"/story/fix-init-script",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-02-27-fix-init-script.md",source:"@site/story/2021/2021-02-27-fix-init-script.md",description:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",date:"2021-02-27T00:00:00.000Z",tags:[{label:"AlpineLinux",permalink:"/story/tags/alpine-linux"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],title:"\u8bb0\u5f55\u4e00\u6b21\u4fee\u590d init \u811a\u672c\u7684\u7ecf\u5386",readingTime:1.425,truncated:!0,prevItem:{title:"OpenVox VoxStack \u7f51\u5173\u5206\u6790",permalink:"/story/openvox-gw-inside"},nextItem:{title:"AlpineLinux \u5b89\u88c5 Xfce \u684c\u9762",permalink:"/story/alpinelinux-setup-xfce"}},p=[{value:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",id:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b"},"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b"),Object(a.b)("p",null,"\u7531\u4e8e\u5b9a\u5236\u5316\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/share/mkinitfs/initramfs-init")," \u811a\u672c\uff0c\u5728\u5347\u7ea7\u5927\u7248\u672c\u540e\uff0c\u8be5\u6587\u4ef6\u88ab\u8986\u76d6\uff0c\u5bfc\u81f4\u751f\u6210\u7684 initramfs \u65e0\u6cd5\u542f\u52a8\u7cfb\u7edf\u3002"),Object(a.b)("p",null,"\u6b63\u5e38\u60c5\u51b5\u5347\u7ea7 ",Object(a.b)("inlineCode",{parentName:"p"},"/etc")," \u4e0b\u4f1a\u4ea7\u751f ",Object(a.b)("inlineCode",{parentName:"p"},".apk-new")," \u540e\u7f00\u6587\u4ef6\u907f\u514d\u5347\u7ea7\u8986\u76d6\uff0c\u4f46\u7531\u4e8e\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/share")," \u4e0b\u6587\u4ef6\uff0c\u56e0\u6b64\u5bfc\u81f4\u8986\u76d6\u3002"))}u.isMDXComponent=!0}}]);