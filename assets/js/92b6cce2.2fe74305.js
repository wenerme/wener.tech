"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[78281],{50391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(96600),o=n(27279),i=(n(59496),n(3905)),a=["components"],c={title:"initramfs"},s=void 0,u={unversionedId:"os/linux/boot/initramfs",id:"os/linux/boot/initramfs",title:"initramfs",description:"- How to unpack/uncompress and repack/re-compress an initial ramdisk (initrd/initramfs) boot image file?",source:"@site/notes/os/linux/boot/initramfs.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/initramfs",permalink:"/notes/os/linux/boot/initramfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/initramfs.md",tags:[],version:"current",frontMatter:{title:"initramfs"},sidebar:"docs",previous:{title:"GRUB",permalink:"/notes/os/linux/boot/grub"},next:{title:"Syslinux",permalink:"/notes/os/linux/boot/syslinux"}},l={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/solutions/24029"},"How to unpack/uncompress and repack/re-compress an initial ramdisk (initrd/initramfs) boot image file?"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u56e0\u4e3a\u4f1a\u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u4f7f\u7528\u7a7a\u76ee\u5f55\u907f\u514d\u6e05\u7406\nmkdir -p /tmp/initrd\ncd /tmp/initrd\n\n# GZIP\nzcat < /boot/initramfs-lts | cpio -idmv\nfind . | cpio -o -c -R root:root | gzip -9 > /boot/new.img\n\n# xz/LZMA\nxz -dc < /boot/initramfs-lts | cpio -idmv\nfind . 2> /dev/null | cpio -o -c -R root:root | xz -9 --format=lzma > /boot/new.img\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);