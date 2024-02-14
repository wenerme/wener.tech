/*! For license information please see df2fcb27.5a64d9a6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76012],{45360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(2488),i=n(62780);const o={title:"MicroVM"},s="MicroVM",c={id:"os/virt/microvm",title:"MicroVM",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/virt/microvm.md",sourceDirName:"os/virt",slug:"/os/virt/microvm",permalink:"/notes/os/virt/microvm",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/microvm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1614944674,formattedLastUpdatedAt:"Mar 5, 2021",frontMatter:{title:"MicroVM"},sidebar:"docs",previous:{title:"lima",permalink:"/notes/os/virt/lima"},next:{title:"noVNC",permalink:"/notes/os/virt/novnc"}},a={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"microvm",children:"MicroVM"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u662f\u4ec0\u4e48\uff1f\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"QEMU \u53d7 Firecracker \u542f\u53d1\u5f00\u53d1\u7684\u4e00\u79cd\u673a\u5668\u7c7b\u578b"}),"\n",(0,r.jsx)(t.li,{children:"\u6700\u5c0f\u5316 - \u4e0d\u652f\u6301 PCI \u548c ACPI"}),"\n",(0,r.jsx)(t.li,{children:"\u9002\u7528\u4e8e\u77ed\u671f\u8fd0\u884c Guest"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["QEMU ",(0,r.jsx)(t.a,{href:"https://github.com/qemu/qemu/blob/master/docs/system/i386/microvm.rst",children:"microvm"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# with Legacy\nqemu-system-x86_64 -M microvm \\\n   -enable-kvm -cpu host -m 512m -smp 2 \\\n   -kernel vmlinux -append "earlyprintk=ttyS0 console=ttyS0 root=/dev/vda" \\\n   -nodefaults -no-user-config -nographic \\\n   -serial stdio \\\n   -drive id=test,file=test.img,format=raw,if=none \\\n   -device virtio-blk-device,drive=test \\\n   -netdev tap,id=tap0,script=no,downscript=no \\\n   -device virtio-net-device,netdev=tap0\n\n# no Legacy\nqemu-system-x86_64 \\\n   -M microvm,x-option-roms=off,pit=off,pic=off,isa-serial=off,rtc=off \\\n   -enable-kvm -cpu host -m 512m -smp 2 \\\n   -kernel vmlinux -append "console=hvc0 root=/dev/vda" \\\n   -nodefaults -no-user-config -nographic \\\n   -chardev stdio,id=virtiocon0 \\\n   -device virtio-serial-device \\\n   -device virtconsole,chardev=virtiocon0 \\\n   -drive id=test,file=test.img,format=raw,if=none \\\n   -device virtio-blk-device,drive=test \\\n   -netdev tap,id=tap0,script=no,downscript=no \\\n   -device virtio-net-device,netdev=tap0\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},38088:(e,t,n)=>{var r=n(96651),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},2488:(e,t,n)=>{e.exports=n(38088)},62780:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>s});var r=n(96651);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);