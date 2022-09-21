"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84901],{47531:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var n=r(96600),a=r(27279),i=(r(59496),r(3905)),o=["components"],l={title:"lakka tv"},c="lakka",u={unversionedId:"os/lakka",id:"os/lakka",title:"lakka tv",description:"- libretro/Lakka-LibreELEC",source:"@site/notes/os/lakka.md",sourceDirName:"os",slug:"/os/lakka",permalink:"/notes/os/lakka",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/lakka.md",tags:[],version:"current",frontMatter:{title:"lakka tv"},sidebar:"docs",previous:{title:"Fuchsia",permalink:"/notes/os/fuchsia"},next:{title:"LibreELEC",permalink:"/notes/os/libreelec"}},p={},k=[],s={toc:k};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lakka"},"lakka"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/libretro/Lakka-LibreELEC"},"libretro/Lakka-LibreELEC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LibreELEC+RetroArch"))),(0,i.kt)("li",{parentName:"ul"},"RPi Download ",(0,i.kt)("a",{parentName:"li",href:"https://www.lakka.tv/get/linux/rpi/"},"https://www.lakka.tv/get/linux/rpi/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://le-builds.lakka.tv/RPi4.aarch64/Lakka-RPi4.aarch64-4.2.img.gz"},"https://le-builds.lakka.tv/RPi4.aarch64/Lakka-RPi4.aarch64-4.2.img.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://le-builds.lakka.tv/Generic.x86_64/Lakka-Generic.x86_64-4.2.img.gz"},"https://le-builds.lakka.tv/Generic.x86_64/Lakka-Generic.x86_64-4.2.img.gz"))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Lakka \u4e0d\u652f\u6301\u865a\u62df\u5316 - \u9700\u8981\u76f4\u63a5\u64cd\u4f5c GPU\uff0c \u865a\u62df\u5316\u65e0 XServer \u65e0\u6cd5\u663e\u793a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gzip -d Lakka-Generic.x86_64-4.2.img.gz\n# raw \u7ea6 2G, qcow2 \u7ea6 1G\nqemu-img convert -O qcow2 Lakka-Generic.x86_64-4.2.{img,qcow2}\n\nqemu-img create -f qcow2 lakka.qcow2 20G\n# live, installer\n# \u9ed8\u8ba4 live \u6a21\u5f0f\nqemu-system-x86_64 -m 2048 -smp 2 -accel hvf -hda Lakka-Generic.x86_64-4.2.qcow2 -display cocoa -net nic -nic user,hostfwd=tcp::2222-:22\nqemu-system-x86_64 -m 2048 -smp 2 -accel kvm -hda Lakka-Generic.x86_64-4.2.img -vnc :1 -net nic -nic user,hostfwd=tcp::2222-:22\n")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},k),{},{components:r})):n.createElement(f,o({ref:t},k))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);