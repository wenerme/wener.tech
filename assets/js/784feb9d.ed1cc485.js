"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56896],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,v=f["".concat(l,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50264:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(96600),i=r(27279),o=(r(59496),r(49613)),a=["components"],s={title:"virtio-fs"},l="virtio-fs",p={unversionedId:"os/virt/virtiofs",id:"os/virt/virtiofs",title:"virtio-fs",description:"- virtio-fs - A Shared File System for Virtual Machines",source:"@site/../notes/os/virt/virtiofs.md",sourceDirName:"os/virt",slug:"/os/virt/virtiofs",permalink:"/notes/os/virt/virtiofs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/virt/virtiofs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"virtio-fs"},sidebar:"docs",previous:{title:"Virtio",permalink:"/notes/os/virt/virtio"},next:{title:"VmWare",permalink:"/notes/os/virt/vmware"}},u={},c=[],f={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtio-fs"},"virtio-fs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fosdem.org/2020/schedule/event/vai_virtio_fs/attachments/slides/3666/export/events/attachments/vai_virtio_fs/slides/3666/virtio_fs_A_Shared_File_System_for_Virtual_Machines_FOSDEM.pdf"},"virtio-fs - A Shared File System for Virtual Machines"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"File System as a Service"),(0,o.kt)("li",{parentName:"ul"},"Boot guest from directory on host"),(0,o.kt)("li",{parentName:"ul"},"Linux FUSE as Protocol"),(0,o.kt)("li",{parentName:"ul"},"VIRTIO as Transport",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"shared memory resources"))))),(0,o.kt)("li",{parentName:"ul"},"9p",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/9p_virtio"},"https://www.linux-kvm.org/page/9p_virtio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.qemu.org/Documentation/9psetup"},"https://wiki.qemu.org/Documentation/9psetup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kernel.taobao.org/2019/11/virtio-fs-intro-and-perf-optimize/"},"https://kernel.taobao.org/2019/11/virtio-fs-intro-and-perf-optimize/")),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 host \u4e0a overlayfs\uff0c\u80fd\u5145\u5206\u5229\u7528 host pagecache\uff1b\u90e8\u7f72\u7b80\u5355\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u7ec4\u4ef6")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- libvirtd --\x3e\n<filesystem type='mount' accessmode='passthrough'>\n  <driver type='virtiofs'/>\n  <source dir='/var/www'/>\n  <target dir='website'/> \x3c!-- not treated as a path --\x3e\n</filesystem>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mount -t virtiofs website /var/www\n")))}m.isMDXComponent=!0}}]);