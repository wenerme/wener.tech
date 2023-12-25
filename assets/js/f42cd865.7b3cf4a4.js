/*! For license information please see f42cd865.7b3cf4a4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[43322],{97485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(11527),c=s(47214);const r={title:"bcachefs"},i="bcachefs",d={id:"os/linux/fs/bcachefs",title:"bcachefs",description:"Linux 6.7+ \u5185\u6838\u652f\u6301",source:"@site/../notes/os/linux/fs/bcachefs.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/bcachefs",permalink:"/notes/os/linux/fs/bcachefs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/bcachefs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"bcachefs"},sidebar:"docs",previous:{title:"FS",permalink:"/notes/os/linux/fs/"},next:{title:"Btrfs",permalink:"/notes/os/linux/fs/btrfs"}},o={},a=[];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bcachefs",children:"bcachefs"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Linux 6.7+ \u5185\u6838\u652f\u6301"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://bcachefs.org",children:"bcachefs"})," - ",(0,t.jsx)(n.a,{href:"https://github.com/koverstreet/bcachefs",children:"koverstreet/bcachefs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5bf9\u6807 zfs btrfs"}),"\n",(0,t.jsx)(n.li,{children:"COW"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 \u52a0\u5bc6 - AEAD - ChaCha20, Poly1305"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 \u538b\u7f29 - LZ4, gzip, ZSTD"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 \u5feb\u7167"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 CRC32 checksum"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u4f7f\u7528 \u591a block device"}),"\n",(0,t.jsx)(n.li,{children:"Tiering/writeback caching"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 \u526f\u672c - RAID 1/10"}),"\n",(0,t.jsx)(n.li,{children:"Erasure coding"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Bcache - a block-layer cache system for Linux\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"bcachefs \u4f7f\u7528\u4e86 Bcache 80% \u6e90\u7801"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u975e\u5e38\u65b0 - \u5c1a\u4e0d\u6210\u719f"}),"\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u5c1a\u672a \u5305\u542b\u5728 \u5185\u6838"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bcachefs format /dev/sda\nmount -t bcachefs /dev/sda /mnt\n\n# RAID 0/1\nbcachefs format /dev/sda /dev/sdb --replicas=n\nmount -t bcachefs /dev/sda1:/dev/sdb1 /mnt\n\n# RAID 0/1 + SSD \u7f13\u5b58\nbcachefs format \\\n    --group=ssd /dev/sda /dev/sdb\n    --group=hdd /dev/sdc /dev/sdd /dev/sde /dev/sdf \\\n    --data_replicas=1 --metadata_replicas=2 \\\n    --foreground_target=ssd \\\n    --background_target=hdd \\\n    --promote_target=ssd\nmount -t bcachefs /dev/sda:/dev/sdb:/dev/sdc:/dev/sdd/dev/sde:/dev/sdf /mnt\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3354:(e,n,s)=>{var t=s(50959),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,r={},a=null,l=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:c,type:e,key:a,ref:l,props:r,_owner:d.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var t=s(50959);const c={},r=t.createContext(c);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);