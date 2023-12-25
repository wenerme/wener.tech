/*! For license information please see 3d4e4007.22d3e222.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55988],{99758:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(11527),o=t(47214);const i={title:"Alpine chroot \u73af\u5883"},s="Alpine chroot \u73af\u5883",a={id:"os/alpine/alpine-chroot",title:"Alpine chroot \u73af\u5883",description:"- Alpine Linux in a chroot",source:"@site/../notes/os/alpine/alpine-chroot.md",sourceDirName:"os/alpine",slug:"/os/alpine/chroot",permalink:"/notes/os/alpine/chroot",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-chroot.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"Alpine chroot \u73af\u5883"},sidebar:"docs",previous:{title:"Alpin Boot",permalink:"/notes/os/alpine/boot"},next:{title:"Alpine FAQ",permalink:"/notes/os/alpine/faq"}},c={},d=[{value:"alpine 3.1 armhf",id:"alpine-31-armhf",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"alpine-chroot-\u73af\u5883",children:"Alpine chroot \u73af\u5883"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://wiki.alpinelinux.org/wiki/Alpine_Linux_in_a_chroot",children:"Alpine Linux in a chroot"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'mirror=http://mirrors.sjtug.sjtu.edu.cn/alpine/\narch=armhf\nversion=2.12.1-r0\ncurl -LO ${mirror}/latest-stable/main/${arch}/apk-tools-static-${version}.apk\n\ncurl -LO http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.10/main/armhf/apk-tools-static-2.10.4-r2.apk\n\n./sbin/apk.static -X ${mirror}/latest-stable/main -U --allow-untrusted -p ${chroot_dir} --initdb add alpine-base\nmount -o bind /dev ${chroot_dir}/dev\n\nmknod -m 666 ${chroot_dir}/dev/full c 1 7\nmknod -m 666 ${chroot_dir}/dev/ptmx c 5 2\nmknod -m 644 ${chroot_dir}/dev/random c 1 8\nmknod -m 644 ${chroot_dir}/dev/urandom c 1 9\nmknod -m 666 ${chroot_dir}/dev/zero c 1 5\nmknod -m 666 ${chroot_dir}/dev/tty c 5 0\n\n# scsi\n# mknod -m 666 ${chroot_dir}/dev/sda b 8 0\n# mknod -m 666 ${chroot_dir}/dev/sda1 b 8 1\n# mknod -m 666 ${chroot_dir}/dev/sda2 b 8 2\n# mknod -m 666 ${chroot_dir}/dev/sda3 b 8 3\n# mknod -m 666 ${chroot_dir}/dev/sdb b 8 16\n# mknod -m 666 ${chroot_dir}/dev/sdb1 b 8 17\n\nmount -t proc none ${chroot_dir}/proc\nmount -o bind /sys ${chroot_dir}/sys\ncp -L /etc/resolv.conf ${chroot_dir}/etc/\n\nmkdir -p ${chroot_dir}/etc/apk\necho "${mirror}/${branch}/main" > ${chroot_dir}/etc/apk/repositories\n\n# \u6216\u8005\u53ef\u4ee5\u4f7f\u7528 busybox\ncurl -O https://busybox.net/downloads/binaries/1.21.1/busybox-armv6l\n'})}),"\n",(0,r.jsx)(e.h2,{id:"alpine-31-armhf",children:"alpine 3.1 armhf"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6700\u65e9\u7684 armhf"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main/armhf/\ncurl -LO http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main/armhf/apk-tools-static-2.5.0_rc1-r1.apk\n\ntar -zxvf apk-tools-static-2.5.0_rc1-r1.apk sbin/apk.static --strip-components 1\nmkdir root\nsudo apk.static -X http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.1/main -U --allow-untrusted -p root --initdb add alpine-base\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},3354:(n,e,t)=>{var r=t(50959),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)s.call(e,r)&&!c.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:o,type:n,key:d,ref:l,props:i,_owner:a.current}}e.Fragment=i,e.jsx=d,e.jsxs=d},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var r=t(50959);const o={},i=r.createContext(o);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);