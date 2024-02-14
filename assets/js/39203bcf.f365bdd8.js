/*! For license information please see 39203bcf.f365bdd8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82902],{61820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(2488),r=t(62780);const o={title:"NFS"},i="NFS",l={id:"devops/storage/network/nfs",title:"NFS",description:"Tips",source:"@site/../notes/devops/storage/network/nfs.md",sourceDirName:"devops/storage/network",slug:"/devops/storage/network/nfs",permalink:"/notes/devops/storage/network/nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/storage/network/nfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"NFS"},sidebar:"docs",previous:{title:"FTP",permalink:"/notes/devops/storage/network/ftp"},next:{title:"Share",permalink:"/notes/devops/storage/network/share"}},c={},d=[{value:"Tips",id:"tips",level:2},{value:"exports",id:"exports",level:2},{value:"Neither &#39;subtree_check&#39; or &#39;no_subtree_check&#39; specified for export",id:"neither-subtree_check-or-no_subtree_check-specified-for-export",level:2},{value:"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use &#39;-o nolock&#39; to keep locks local, or start statd",id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nfs",children:"NFS"}),"\n",(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://linux-nfs.org/",children:"nfs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["ArchLinux ",(0,s.jsx)(n.a,{href:"https://wiki.archlinux.org/index.php/NFS",children:"NFS"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.cyberciti.biz/faq/linux-unix-tuning-nfs-server-client-performance/",children:"NFS \u6027\u80fd\u8c03\u4f18"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7ec4\u4ef6\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rpc.nfsd"}),"\n",(0,s.jsx)(n.li,{children:"rpc.idmapd"}),"\n",(0,s.jsxs)(n.li,{children:["rpc.mountd - NFS mount daemon\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"-p 32767"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["rpc.statd - NSM service daemon\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A daemon that listens for reboot notifications from other hosts, and manages the list of hosts to be notified when the local system reboots"}),"\n",(0,s.jsx)(n.li,{children:"-p 32765 -o 32766"}),"\n",(0,s.jsx)(n.li,{children:"\u9501\u670d\u52a1"}),"\n",(0,s.jsx)(n.li,{children:"\u6302\u8f7d\u53ef\u4f7f\u7528 nolock \u6307\u5b9a\u4e0d\u542f\u7528\u9501"}),"\n",(0,s.jsx)(n.li,{children:"sm-notify - A helper program that notifies NFS peers after the local system reboots"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"rpc.gssd - gss-api generic security api to provide security for protocols using rpc"}),"\n",(0,s.jsx)(n.li,{children:"rpc.svcgssd"}),"\n",(0,s.jsx)(n.li,{children:"rpc.rquotad - remote quota server"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u907f\u514d NAT \u4f7f\u7528 nfs - \u90e8\u5206\u670d\u52a1\u53ef\u80fd\u6709\u95ee\u9898\uff0c\u4f8b\u5982 statd"}),"\n"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apk add nfs-utils\n# \u542f\u52a8\nservice nfs start\n# \u5f00\u673a\u542f\u52a8\nrc-update add nfs\n# \u5bfc\u51fa\u6240\u6709\u5b9a\u4e49\u7684\u5171\u4eab\n# \u5c06 /etc/exports \u5b9a\u4e49\u8f93\u51fa\u5230 /var/lib/nfs/etab\nexportfs -a\n# \u53d6\u6d88\u6240\u6709\u5171\u4eab - \u6e05\u9664 /var/lib/nfs/etab\nexportfs -au\n\n# \u67e5\u770b\u670d\u52a1\u63d0\u4f9b\u7684\u5171\u4eab\nshowmount -e localhost\n\n# NFSv4 \u53ef\u4ee5\u6302\u5728\u6839\u76ee\u5f55\nmount server:/ /mountpoint/on/client\n# \u6302\u8f7d\u5355\u4e2a\u76ee\u5f55\nmount -t nfs -o vers=4 servername:/srv/nfs/music /mountpoint/on/client\n# fstab\n# servername:/music   /mountpoint/on/client   nfs   defaults,timeo=900,retrans=5,_netdev\t0 0\n\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u914d\u7f6e\u6587\u4ef6"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(n.th,{children:"\u5185\u5bb9\u793a\u4f8b"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/etc/exports"}),(0,s.jsx)(n.td,{children:"\u5bf9\u5916\u66b4\u9732\u7684\u6587\u4ef6"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/usr/local 192.168.0.1(ro) 192.168.0.2(ro)"}),(0,s.jsx)(n.br,{}),(0,s.jsx)(n.code,{children:"/home 192.168.0.0/255.255.255.0(rw)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/etc/hosts.allow"}),(0,s.jsx)(n.td,{children:"\u5141\u8bb8\u8bbf\u95ee\u7684\u4e3b\u673a"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"portmap:ALL"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/etc/hosts.deny"}),(0,s.jsx)(n.td,{children:"\u7981\u6b62\u8bbf\u95ee\u7684\u4e3b\u673a"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"lockd: 192.168.0.1 , 192.168.0.2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/var/lib/nfs/etab"}),(0,s.jsx)(n.td,{children:"\u5bfc\u51fa\u7684\u4e3b\u8868"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/var/lib/nfs/rmtab"}),(0,s.jsx)(n.td,{children:"\u8bbf\u95ee\u670d\u52a1\u7aef\u7684\u5ba2\u6237\u7aef"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exports",children:"exports"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://linux.die.net/man/5/exports",children:"https://linux.die.net/man/5/exports"})}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(n.h2,{id:"neither-subtree_check-or-no_subtree_check-specified-for-export",children:"Neither 'subtree_check' or 'no_subtree_check' specified for export"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0d\u5f71\u54cd\uff0c\u53ea\u662f\u8b66\u544a\u9ed8\u8ba4\u4e3a\u4e86 ",(0,s.jsx)(n.code,{children:"no_subtree_check"}),"\uff0c\u4e4b\u524d\u662f ",(0,s.jsx)(n.code,{children:"subtree_check"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/data0    *(rw,no_root_squash,no_subtree_check)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd",children:"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use '-o nolock' to keep locks local, or start statd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f53\u5ba2\u6237\u7aef\u5728 NAT \u540e\u65f6\u53ef\u80fd\u4f1a\u6709\u8fd9\u4e2a\u95ee\u9898 - \u56e0\u4e3a\u7aef\u53e3\u4ece\u65b0\u6620\u5c04\u540e\u4e0d\u4f1a\u662f\u4fdd\u7559\u7aef\u53e3"}),"\n",(0,s.jsxs)(n.li,{children:["exports \u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"insecure"})," \u9009\u9879\u5373\u53ef\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9ed8\u8ba4\u5f00\u542f\u4e86 secure\uff0c\u8981\u6c42\u7aef\u53e3 \u5c0f\u4e8e 1024 IPPORT_RESERVED"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mount.nfs: rpc.statd is not running but is required for remote locking.\nmount.nfs: Either use '-o nolock' to keep locks local, or start statd.\nmount.nfs: Operation not permitted\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},38088:(e,n,t)=>{var s=t(96651),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,o={},d=null,h=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,s)&&!c.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:h,props:o,_owner:l.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var s=t(96651);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);