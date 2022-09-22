"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55988],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63616:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const d={title:"Alpine chroot \u73af\u5883"},m="Alpine chroot \u73af\u5883",f={unversionedId:"os/alpine/alpine-chroot",id:"os/alpine/alpine-chroot",title:"Alpine chroot \u73af\u5883",description:"- Alpine Linux in a chroot",source:"@site/../notes/os/alpine/alpine-chroot.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-chroot",permalink:"/notes/os/alpine/alpine-chroot",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-chroot.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"Alpine chroot \u73af\u5883"},sidebar:"docs",previous:{title:"Alpin Boot",permalink:"/notes/os/alpine/alpine-boot"},next:{title:"Alpine FAQ",permalink:"/notes/os/alpine/alpine-faq"}},h={},b=[{value:"alpine 3.1 armhf",id:"alpine-31-armhf",level:2}],v={toc:b};function k(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"alpine-chroot-\u73af\u5883"}),"Alpine chroot \u73af\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Alpine_Linux_in_a_chroot"}),"Alpine Linux in a chroot"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mirror=http://mirrors.sjtug.sjtu.edu.cn/alpine/\narch=armhf\nversion=2.12.1-r0\ncurl -LO ${mirror}/latest-stable/main/${arch}/apk-tools-static-${version}.apk\n\ncurl -LO http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.10/main/armhf/apk-tools-static-2.10.4-r2.apk\n\n./sbin/apk.static -X ${mirror}/latest-stable/main -U --allow-untrusted -p ${chroot_dir} --initdb add alpine-base\nmount -o bind /dev ${chroot_dir}/dev\n\nmknod -m 666 ${chroot_dir}/dev/full c 1 7\nmknod -m 666 ${chroot_dir}/dev/ptmx c 5 2\nmknod -m 644 ${chroot_dir}/dev/random c 1 8\nmknod -m 644 ${chroot_dir}/dev/urandom c 1 9\nmknod -m 666 ${chroot_dir}/dev/zero c 1 5\nmknod -m 666 ${chroot_dir}/dev/tty c 5 0\n\n# scsi\n# mknod -m 666 ${chroot_dir}/dev/sda b 8 0\n# mknod -m 666 ${chroot_dir}/dev/sda1 b 8 1\n# mknod -m 666 ${chroot_dir}/dev/sda2 b 8 2\n# mknod -m 666 ${chroot_dir}/dev/sda3 b 8 3\n# mknod -m 666 ${chroot_dir}/dev/sdb b 8 16\n# mknod -m 666 ${chroot_dir}/dev/sdb1 b 8 17\n\nmount -t proc none ${chroot_dir}/proc\nmount -o bind /sys ${chroot_dir}/sys\ncp -L /etc/resolv.conf ${chroot_dir}/etc/\n\nmkdir -p ${chroot_dir}/etc/apk\necho "${mirror}/${branch}/main" > ${chroot_dir}/etc/apk/repositories\n\n# \u6216\u8005\u53ef\u4ee5\u4f7f\u7528 busybox\ncurl -O https://busybox.net/downloads/binaries/1.21.1/busybox-armv6l\n')),(0,n.kt)("h2",u({},{id:"alpine-31-armhf"}),"alpine 3.1 armhf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u65e9\u7684 armhf")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main/armhf/\ncurl -LO http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main/armhf/apk-tools-static-2.5.0_rc1-r1.apk\n\ntar -zxvf apk-tools-static-2.5.0_rc1-r1.apk sbin/apk.static --strip-components 1\nmkdir root\nsudo apk.static -X http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main -U --allow-untrusted -p root --initdb add alpine-base\n")))}k.isMDXComponent=!0}}]);