/*! For license information please see d3578adc.6b6c3145.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92848],{57201:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var r=s(2488),i=s(62780);const d={title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},t="\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",l={id:"os/virt/virt-faq",title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",description:"KVM vs Vmware",source:"@site/../notes/os/virt/virt-faq.md",sourceDirName:"os/virt",slug:"/os/virt/faq",permalink:"/notes/os/virt/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/virt-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709694572,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Virt Awesome",permalink:"/notes/os/virt/awesome"},next:{title:"\u865a\u62df\u5316\u672f\u8bed\u8868",permalink:"/notes/os/virt/glossary"}},c={},h=[{value:"KVM vs Vmware",id:"kvm-vs-vmware",level:2},{value:"XenServer vs VMware vSphere",id:"xenserver-vs-vmware-vsphere",level:2},{value:"VNC vs SPICE",id:"vnc-vs-spice",level:2},{value:"kvm: vcpu0, guest rIP: disabled perfctr wrmsr: 0xc2 data 0xffff",id:"kvm-vcpu0-guest-rip-disabled-perfctr-wrmsr-0xc2-data-0xffff",level:2},{value:"vhd vs vhdx",id:"vhd-vs-vhdx",level:2}];function x(n){const e={a:"a",h1:"h1",h2:"h2",li:"li",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",children:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898"}),"\n",(0,r.jsx)(e.h2,{id:"kvm-vs-vmware",children:"KVM vs Vmware"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.redhat.com/en/topics/virtualization/kvm-vs-vmware-comparison",children:"KVM vs. VMware"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"xenserver-vs-vmware-vsphere",children:"XenServer vs VMware vSphere"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.simplilearn.com/citrix-xenserver-vs-vmware-vsphere-rar338-article",children:"Citrix Xenserver Vs Vmware vSphere"})}),"\n",(0,r.jsxs)(e.li,{children:["VMware vSphere\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"120 VM/Host"}),"\n",(0,r.jsx)(e.li,{children:"2048 GB, 2048 vdisk/Host"}),"\n",(0,r.jsx)(e.li,{children:"160 CPU/Host"}),"\n",(0,r.jsx)(e.li,{children:"2048 vCPU/Host"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["XenServer\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"75 VM/Host"}),"\n",(0,r.jsx)(e.li,{children:"1024 GB, 512 vdisk/Host"}),"\n",(0,r.jsx)(e.li,{children:"160 CPU/Host"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e0d\u652f\u6301\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Dynamic Resource Allocation"}),"\n",(0,r.jsx)(e.li,{children:"Failover"}),"\n",(0,r.jsx)(e.li,{children:"Live Migration"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"vs."}),(0,r.jsx)(e.th,{children:"XenServer"}),(0,r.jsx)(e.th,{children:"vSphere"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u76ee\u6807\u7528\u6237"}),(0,r.jsx)(e.td,{children:"\u4e2a\u4eba\u6216\u4e2d\u5c0f\u4f01\u4e1a"}),(0,r.jsx)(e.td,{children:"\u4e2d\u5c0f\u4f01\u4e1a"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u64cd\u4f5c\u7cfb\u7edf\u865a\u62df\u5316"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"No"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5168\u865a\u62df\u5316"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"x86,x86_64"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FCoE SSD Swap"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"USB,SATA,SASmNFS,iSCSI"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"No"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DAS,FC,NAS"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"eSATA,RDM"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"No"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Virtual Disk Size"}),(0,r.jsx)(e.td,{children:"2000GB"}),(0,r.jsx)(e.td,{children:"2000GB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"GB/vm"}),(0,r.jsx)(e.td,{children:"128 GB"}),(0,r.jsx)(e.td,{children:"1024 GB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vCPUs/vm"}),(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"32"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vNICs"}),(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:"10"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vDisk/vm"}),(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"62"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"vCPUs on Host"}),(0,r.jsx)(e.td,{children:"N/A"}),(0,r.jsx)(e.td,{children:"2048 vCPUs/host"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thin Provisioning"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Asset management"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"No"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Configuration mapping"}),(0,r.jsx)(e.td,{children:"Yes"}),(0,r.jsx)(e.td,{children:"No"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Dynamic Resource Allocation"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Failover"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"Yes"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Live Migration"}),(0,r.jsx)(e.td,{children:"No"}),(0,r.jsx)(e.td,{children:"Yes"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"vnc-vs-spice",children:"VNC vs SPICE"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["VNC\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8bfb\u53d6\u663e\u5b58\u67e5\u5206\u538b\u7f29\u53d1\u9001\u5230\u5ba2\u6237\u7aef"}),"\n",(0,r.jsx)(e.li,{children:"RFB \u534f\u8bae"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["SPICE\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6a21\u62df X11 \u9a71\u52a8\uff0c\u6355\u83b7 X \u534f\u8bae\u548c\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.li,{children:"QXL \u534f\u8bae"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://zee-nix.blogspot.com/2011/06/welcome-to-virtual-world.html",children:"VNC vs SPICE"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"kvm-vcpu0-guest-rip-disabled-perfctr-wrmsr-0xc2-data-0xffff",children:"kvm: vcpu0, guest rIP: disabled perfctr wrmsr: 0xc2 data 0xffff"}),"\n",(0,r.jsx)(e.h2,{id:"vhd-vs-vhdx",children:"vhd vs vhdx"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["vhd - Virtual Hard Disk\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"2TB"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["vhdx - Virtual Hard Disk v2\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"64TB"}),"\n",(0,r.jsx)(e.li,{children:"\u63d0\u4f9b\u65e5\u5fd7\u6587\u4ef6\u4fdd\u62a4\u6570\u636e\u5b89\u5168"}),"\n",(0,r.jsx)(e.li,{children:"\u9488\u5bf9\u73b0\u4ee3\u5b58\u50a8\u786c\u4ef6\u4f18\u5316"}),"\n",(0,r.jsx)(e.li,{children:"Windows Server 2012\u3001Windows 8+"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u81ea\u5b9a\u4e49\u5143\u6570\u636e\u3001\u652f\u6301\u66f4\u5927\u7684\u903b\u8f91\u6247\u533a\u5927\u5c0f"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u7a00\u758f\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},38088:(n,e,s)=>{var r=s(96651),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var r,d={},h=null,x=null;for(r in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)t.call(e,r)&&!c.hasOwnProperty(r)&&(d[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===d[r]&&(d[r]=e[r]);return{$$typeof:i,type:n,key:h,ref:x,props:d,_owner:l.current}}e.Fragment=d,e.jsx=h,e.jsxs=h},2488:(n,e,s)=>{n.exports=s(38088)},62780:(n,e,s)=>{s.d(e,{I:()=>l,M:()=>t});var r=s(96651);const i={},d=r.createContext(i);function t(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);