"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32088],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(96600),i=n(27279),a=(n(59496),n(49613)),o=["components"],l={title:"Alpine Virt"},p="Alpine Virt",u={unversionedId:"os/alpine/alpine-virt",id:"os/alpine/alpine-virt",title:"Alpine Virt",description:"- alpine virt flavor \u662f\u4ec0\u4e48",source:"@site/../notes/os/alpine/alpine-virt.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-virt",permalink:"/notes/os/alpine/alpine-virt",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/alpine/alpine-virt.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Alpine Virt"},sidebar:"docs",previous:{title:"AlpineLinux \u7248\u672c\u5386\u53f2",permalink:"/notes/os/alpine/alpine-version"},next:{title:"Android Awesome",permalink:"/notes/os/android/android-awesome"}},s={},c=[],m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alpine-virt"},"Alpine Virt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"alpine virt flavor \u662f\u4ec0\u4e48",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u865a\u62df\u5316\u73af\u5883\u7684\u5185\u6838"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u56fa\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"modules \u66f4\u5c11\u66f4\u5c0f - \u5305\u542b virtio \u76f8\u5173\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"/boot 14MB + /lib/modules 61MB=75 MB"),(0,a.kt)("li",{parentName:"ul"},"rootfs \u53ef\u5c0f\u5230 20 MB"))),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 features: ata base cdrom ext4 keymap kms mmc raid scsi usb virtio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-system-x86_64 -m 2048 -enable-kvm -serial stdio \\\n  -cdrom https://dl-cdn.alpinelinux.org/alpine/v3.16/releases/x86_64/alpine-virt-3.16.0-x86_64.iso\n")))}f.isMDXComponent=!0}}]);