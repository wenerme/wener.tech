"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87168],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,v=c["".concat(o,".").concat(k)]||c[k]||s[k]||i;return r?a.createElement(v,l(l({ref:t},m),{},{components:r})):a.createElement(v,l({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},75777:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],u={id:"vmware",title:"VmWare"},o=void 0,p={unversionedId:"os/virt/vmware",id:"os/virt/vmware",title:"VmWare",description:"Tips",source:"@site/notes/os/virt/vmware.md",sourceDirName:"os/virt",slug:"/os/virt/vmware",permalink:"/notes/os/virt/vmware",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/vmware.md",tags:[],version:"current",frontMatter:{id:"vmware",title:"VmWare"},sidebar:"docs",previous:{title:"virtio-fs",permalink:"/notes/os/virt/virtiofs"},next:{title:"Windows",permalink:"/notes/os/windows/"}},m={},s=[{value:"Tips",id:"tips",level:2},{value:"ESXi vs vSphere vs vCenter",id:"esxi-vs-vsphere-vs-vcenter",level:2},{value:"\u78c1\u76d8\u6ca1\u6709 UUID",id:"\u78c1\u76d8\u6ca1\u6709-uuid",level:2}],c={toc:s};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u684c\u9762\u4ea7\u54c1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Workstation"),(0,i.kt)("li",{parentName:"ul"},"Fusion"),(0,i.kt)("li",{parentName:"ul"},"Workstation Player - \u514d\u8d39\u975e\u5546\u4e1a\u7248"))),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u4ea7\u54c1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ESXi"))),(0,i.kt)("li",{parentName:"ul"},"\u4e91\u4ea7\u54c1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VMware vRealize Suite - \u6df7\u5408\u4e91\u7ba1\u7406\u5e73\u53f0"),(0,i.kt)("li",{parentName:"ul"},"VMware Go - VMware vSphere Hypervisor Web \u5b89\u88c5\u5de5\u5177"),(0,i.kt)("li",{parentName:"ul"},"VMware Cloud Foundation - \u79c1\u6709\u4e91\u5b89\u88c5\u90e8\u7f72 - SDDC \u7cfb\u7edf\u96c6\u6210"),(0,i.kt)("li",{parentName:"ul"},"VMware Horizon View - virtual desktop infrastructure (VDI)"),(0,i.kt)("li",{parentName:"ul"},"VMware vSphere",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VMware Infrastructure 4 \u4e4b\u524d\u540d\u5b57"))))),(0,i.kt)("li",{parentName:"ul"},"vCenter Server Appliance with an Embedded Platform Services Controller (PSC)"),(0,i.kt)("li",{parentName:"ul"},"Wikipedia ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/VMware_VMFS"},"VMFS")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kb.vmware.com/s/article/1003746"},"Virtual machine hardware versions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ESXi 7.0 vmx-17+"),(0,i.kt)("li",{parentName:"ul"},"ESXi 6.0 vmx-11+"),(0,i.kt)("li",{parentName:"ul"},"ESXi 5.0 vmx-8+")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# QCOW2 \u8f6c vmdk\n# flat \u683c\u5f0f\uff0c\u80fd\u5bfc\u5165\uff0c\u4f46\u662f\u662f\u5b8c\u6574\u5927\u5c0f\u955c\u50cf\uff0c\u4e0a\u4f20\u975e\u5e38\u6162\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n# https://kb.vmware.com/s/article/2144687\nqemu-img convert -f qcow2 -O vmdk -o subformat=streamOptimized alpine.qcow2 alpine.vmdk\nprintf '\\x03' | dd conv=notrunc of=alpine.vmdk bs=1 seek=$((0x4))\n")),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"esxi-vs-vsphere-vs-vcenter"},"ESXi vs vSphere vs vCenter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"vSphere",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u96c6/\u5e73\u53f0"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4e2d Hypervisor \u4e3a ESXi"),(0,i.kt)("li",{parentName:"ul"},"Web \u7ba1\u7406\u7aef\u64cd\u4f5c ESXi"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u865a\u62df\u6570\u636e\u4e2d\u5fc3\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u8fc1\u79fb"),(0,i.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u7ba1\u7406"))))),(0,i.kt)("li",{parentName:"ul"},"vCenter",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u96c6\u4e2d\u7ba1\u7406 - \u7ba1\u7406 ESXi \u96c6\u7fa4"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u822c\u865a\u62df\u673a\u65b9\u5f0f\u5b89\u88c5"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5355\u70b9\u767b\u9646"),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u8bbe\u65bd\u4ed3\u5e93"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u77e5\u544a\u8b66"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u4fe1\u606f"))))),(0,i.kt)("li",{parentName:"ul"},"ESXi",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hypervisor"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5b89\u88c5\u5728\u7269\u7406\u673a\u4e0a"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u8fd0\u884c\u865a\u62df\u673a"),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Xen \u7684 dom0"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u8282\u70b9")))),(0,i.kt)("h2",{id:"\u78c1\u76d8\u6ca1\u6709-uuid"},"\u78c1\u76d8\u6ca1\u6709 UUID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESX/ESXi 4.1 \u589e\u52a0\u53c2\u6570 disk.enableUUID"),(0,i.kt)("li",{parentName:"ul"},"\u65e9\u8d77\u7248\u672c\u8fc1\u79fb\u53ef\u80fd\u4f1a\u6709\u51b2\u7a81"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 disk.enableUUID \u8bbe\u7f6e\u4e3a true \u542f\u7528 UUID"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kb.vmware.com/s/article/2009065"},"https://kb.vmware.com/s/article/2009065")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://communities.vmware.com/t5/VMware-vSphere-Discussions/Why-is-disk-enableuuid-TRUE-not-the-default/td-p/518472"},"Why is disk.enableuuid=TRUE not the default?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5f71\u54cd clone")))))))}k.isMDXComponent=!0}}]);