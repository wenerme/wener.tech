/*! For license information please see 1f2bb26d.b93cf555.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70420],{11472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=i(2488),s=i(62780);const l={id:"vmware",title:"VmWare"},t="VmWare",c={id:"os/virt/vmware",title:"VmWare",description:"Tips",source:"@site/../notes/os/virt/vmware.md",sourceDirName:"os/virt",slug:"/os/virt/vmware",permalink:"/notes/os/virt/vmware",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/vmware.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625032306,formattedLastUpdatedAt:"Jun 30, 2021",frontMatter:{id:"vmware",title:"VmWare"},sidebar:"docs",previous:{title:"virtio-fs",permalink:"/notes/os/virt/virtiofs"},next:{title:"VNC Awesome",permalink:"/notes/os/virt/vnc-awesome"}},d={},o=[{value:"Tips",id:"tips",level:2},{value:"ESXi vs vSphere vs vCenter",id:"esxi-vs-vsphere-vs-vcenter",level:2},{value:"\u78c1\u76d8\u6ca1\u6709 UUID",id:"\u78c1\u76d8\u6ca1\u6709-uuid",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vmware",children:"VmWare"}),"\n",(0,r.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u684c\u9762\u4ea7\u54c1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Workstation"}),"\n",(0,r.jsx)(n.li,{children:"Fusion"}),"\n",(0,r.jsx)(n.li,{children:"Workstation Player - \u514d\u8d39\u975e\u5546\u4e1a\u7248"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u670d\u52a1\u7aef\u4ea7\u54c1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ESXi"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e91\u4ea7\u54c1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VMware vRealize Suite - \u6df7\u5408\u4e91\u7ba1\u7406\u5e73\u53f0"}),"\n",(0,r.jsx)(n.li,{children:"VMware Go - VMware vSphere Hypervisor Web \u5b89\u88c5\u5de5\u5177"}),"\n",(0,r.jsx)(n.li,{children:"VMware Cloud Foundation - \u79c1\u6709\u4e91\u5b89\u88c5\u90e8\u7f72 - SDDC \u7cfb\u7edf\u96c6\u6210"}),"\n",(0,r.jsx)(n.li,{children:"VMware Horizon View - virtual desktop infrastructure (VDI)"}),"\n",(0,r.jsxs)(n.li,{children:["VMware vSphere\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VMware Infrastructure 4 \u4e4b\u524d\u540d\u5b57"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"vCenter Server Appliance with an Embedded Platform Services Controller (PSC)"}),"\n",(0,r.jsxs)(n.li,{children:["Wikipedia ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/VMware_VMFS",children:"VMFS"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://kb.vmware.com/s/article/1003746",children:"Virtual machine hardware versions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ESXi 7.0 vmx-17+"}),"\n",(0,r.jsx)(n.li,{children:"ESXi 6.0 vmx-11+"}),"\n",(0,r.jsx)(n.li,{children:"ESXi 5.0 vmx-8+"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# QCOW2 \u8f6c vmdk\n# flat \u683c\u5f0f\uff0c\u80fd\u5bfc\u5165\uff0c\u4f46\u662f\u662f\u5b8c\u6574\u5927\u5c0f\u955c\u50cf\uff0c\u4e0a\u4f20\u975e\u5e38\u6162\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n# https://kb.vmware.com/s/article/2144687\nqemu-img convert -f qcow2 -O vmdk -o subformat=streamOptimized alpine.qcow2 alpine.vmdk\nprintf '\\x03' | dd conv=notrunc of=alpine.vmdk bs=1 seek=$((0x4))\n"})}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"esxi-vs-vsphere-vs-vcenter",children:"ESXi vs vSphere vs vCenter"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["vSphere\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ea7\u54c1\u96c6/\u5e73\u53f0"}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4e2d Hypervisor \u4e3a ESXi"}),"\n",(0,r.jsx)(n.li,{children:"Web \u7ba1\u7406\u7aef\u64cd\u4f5c ESXi"}),"\n",(0,r.jsxs)(n.li,{children:["\u529f\u80fd\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u865a\u62df\u6570\u636e\u4e2d\u5fc3\u7ba1\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u8fc1\u79fb"}),"\n",(0,r.jsx)(n.li,{children:"\u8fdc\u7a0b\u7ba1\u7406"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["vCenter\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u96c6\u4e2d\u7ba1\u7406 - \u7ba1\u7406 ESXi \u96c6\u7fa4"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u822c\u865a\u62df\u673a\u65b9\u5f0f\u5b89\u88c5"}),"\n",(0,r.jsxs)(n.li,{children:["\u529f\u80fd\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5355\u70b9\u767b\u9646"}),"\n",(0,r.jsx)(n.li,{children:"\u8bbe\u5907\u8bbe\u65bd\u4ed3\u5e93"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u77e5\u544a\u8b66"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3b\u673a\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ESXi\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hypervisor"}),"\n",(0,r.jsx)(n.li,{children:"\u76f4\u63a5\u5b89\u88c5\u5728\u7269\u7406\u673a\u4e0a"}),"\n",(0,r.jsx)(n.li,{children:"\u5b9e\u9645\u8fd0\u884c\u865a\u62df\u673a"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e Xen \u7684 dom0"}),"\n",(0,r.jsx)(n.li,{children:"\u5355\u8282\u70b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u78c1\u76d8\u6ca1\u6709-uuid",children:"\u78c1\u76d8\u6ca1\u6709 UUID"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ESX/ESXi 4.1 \u589e\u52a0\u53c2\u6570 disk.enableUUID"}),"\n",(0,r.jsx)(n.li,{children:"\u65e9\u8d77\u7248\u672c\u8fc1\u79fb\u53ef\u80fd\u4f1a\u6709\u51b2\u7a81"}),"\n",(0,r.jsx)(n.li,{children:"\u5c06 disk.enableUUID \u8bbe\u7f6e\u4e3a true \u542f\u7528 UUID"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://kb.vmware.com/s/article/2009065",children:"https://kb.vmware.com/s/article/2009065"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://communities.vmware.com/t5/VMware-vSphere-Discussions/Why-is-disk-enableuuid-TRUE-not-the-default/td-p/518472",children:"Why is disk.enableuuid=TRUE not the default?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3b\u8981\u5f71\u54cd clone"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,i)=>{var r=i(96651),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var r,l={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:l,_owner:c.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},2488:(e,n,i)=>{e.exports=i(38088)},62780:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>t});var r=i(96651);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);