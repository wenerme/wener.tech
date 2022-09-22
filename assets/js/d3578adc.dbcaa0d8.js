"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26933],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=m(r),k=n,N=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return r?a.createElement(N,i(i({ref:e},u),{},{components:r})):a.createElement(N,i({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18385:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return v}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&u(t,r,e[r]);if(p)for(var r of p(e))m.call(e,r)&&u(t,r,e[r]);return t};const d={title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},k="\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",N={unversionedId:"os/virt/virt-faq",id:"os/virt/virt-faq",title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",description:"KVM vs Vmware",source:"@site/../notes/os/virt/virt-faq.md",sourceDirName:"os/virt",slug:"/os/virt/faq",permalink:"/notes/os/virt/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/virt-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637157808,formattedLastUpdatedAt:"Nov 17, 2021",frontMatter:{title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Virt Awesome",permalink:"/notes/os/virt/awesome"},next:{title:"\u5d4c\u5957\u865a\u62df\u5316",permalink:"/notes/os/virt/nested"}},c={},v=[{value:"KVM vs Vmware",id:"kvm-vs-vmware",level:2},{value:"XenServer vs VMware vSphere",id:"xenserver-vs-vmware-vsphere",level:2},{value:"VNC vs SPICE",id:"vnc-vs-spice",level:2},{value:"kvm: vcpu0, guest rIP: disabled perfctr wrmsr: 0xc2 data 0xffff",id:"kvm-vcpu0-guest-rip-disabled-perfctr-wrmsr-0xc2-data-0xffff",level:2}],f={toc:v};function g(t){var e,r=t,{components:n}=r,u=((t,e)=>{var r={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&m.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=s(s({},f),u),l(e,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898"}),"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h2",s({},{id:"kvm-vs-vmware"}),"KVM vs Vmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.redhat.com/en/topics/virtualization/kvm-vs-vmware-comparison"}),"KVM vs. VMware"))),(0,a.kt)("h2",s({},{id:"xenserver-vs-vmware-vsphere"}),"XenServer vs VMware vSphere"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.simplilearn.com/citrix-xenserver-vs-vmware-vsphere-rar338-article"}),"Citrix Xenserver Vs Vmware vSphere")),(0,a.kt)("li",{parentName:"ul"},"VMware vSphere",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"120 VM/Host"),(0,a.kt)("li",{parentName:"ul"},"2048 GB, 2048 vdisk/Host"),(0,a.kt)("li",{parentName:"ul"},"160 CPU/Host"),(0,a.kt)("li",{parentName:"ul"},"2048 vCPU/Host"))),(0,a.kt)("li",{parentName:"ul"},"XenServer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"75 VM/Host"),(0,a.kt)("li",{parentName:"ul"},"1024 GB, 512 vdisk/Host"),(0,a.kt)("li",{parentName:"ul"},"160 CPU/Host"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dynamic Resource Allocation"),(0,a.kt)("li",{parentName:"ul"},"Failover"),(0,a.kt)("li",{parentName:"ul"},"Live Migration")))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"vs."),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"XenServer"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"vSphere"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u76ee\u6807\u7528\u6237"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e2a\u4eba\u6216\u4e2d\u5c0f\u4f01\u4e1a"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e2d\u5c0f\u4f01\u4e1a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u7cfb\u7edf\u865a\u62df\u5316"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5168\u865a\u62df\u5316"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"x86,x86_64"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"FCoE SSD Swap"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"USB,SATA,SASmNFS,iSCSI"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"DAS,FC,NAS"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"eSATA,RDM"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Virtual Disk Size"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"2000GB"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"2000GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"GB/vm"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"128 GB"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"1024 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"vCPUs/vm"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"16"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"vNICs"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"7"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"vDisk/vm"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"16"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"62")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"vCPUs on Host"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"N/A"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"2048 vCPUs/host")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Thin Provisioning"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Asset management"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Configuration mapping"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Dynamic Resource Allocation"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Failover"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Live Migration"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("h2",s({},{id:"vnc-vs-spice"}),"VNC vs SPICE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VNC",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u663e\u5b58\u67e5\u5206\u538b\u7f29\u53d1\u9001\u5230\u5ba2\u6237\u7aef"),(0,a.kt)("li",{parentName:"ul"},"RFB \u534f\u8bae"))),(0,a.kt)("li",{parentName:"ul"},"SPICE",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6a21\u62df X11 \u9a71\u52a8\uff0c\u6355\u83b7 X \u534f\u8bae\u548c\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"QXL \u534f\u8bae"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"http://zee-nix.blogspot.com/2011/06/welcome-to-virtual-world.html"}),"VNC vs SPICE"))))),(0,a.kt)("h2",s({},{id:"kvm-vcpu0-guest-rip-disabled-perfctr-wrmsr-0xc2-data-0xffff"}),"kvm: vcpu0, guest rIP: disabled perfctr wrmsr: 0xc2 data 0xffff"))}g.isMDXComponent=!0}}]);