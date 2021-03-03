(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{514:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(7),o=(r(0),r(766)),a={id:"virtio",title:"Virtio"},c={unversionedId:"os/virt/virtio",id:"os/virt/virtio",isDocsHomePage:!1,title:"Virtio",description:"Virtio",source:"@site/notes/os/virt/virtio.md",slug:"/os/virt/virtio",permalink:"/notes/os/virt/virtio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/virtio.md",version:"current",sidebar:"docs",previous:{title:"\u5d4c\u5957\u865a\u62df\u5316",permalink:"/notes/os/virt/virt-nested"},next:{title:"VmWare",permalink:"/notes/os/virt/vmware"}},s=[{value:"Virtio",id:"virtio",children:[]},{value:"ref",id:"ref",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"virtio"},"Virtio"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"virtio-net"),Object(o.b)("li",{parentName:"ul"},"virtio-blk",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"/sys/block/vda"))),Object(o.b)("li",{parentName:"ul"},"virtio-scsi"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://virtio-fs.gitlab.io/"}),"virtio-fs"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"9p"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://blogs.oracle.com/linux/how-to-emulate-block-devices-with-qemu"}),"https://blogs.oracle.com/linux/how-to-emulate-block-devices-with-qemu")),Object(o.b)("li",{parentName:"ul"},"virtio-balloon",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/qemu/qemu/blob/master/docs/virtio-balloon-stats.txt"}),"virtio-balloon-stats")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://pmhahn.github.io/virtio-balloon/"}),"https://pmhahn.github.io/virtio-balloon/")))),Object(o.b)("li",{parentName:"ul"},"virtio-serial-pci"),Object(o.b)("li",{parentName:"ul"},"virtio-balloon-pci"),Object(o.b)("li",{parentName:"ul"},"virtio-blk\t-drive file=disk.img,if=virtio"),Object(o.b)("li",{parentName:"ul"},"virtio-scsi-pci\t-device virtio-scsi-pci -drive file=disk.img,if=none,id=hd0 -device scsi-hd,drive=hd0")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"qemu-system-x86_64 \\\n# vda - \u5b58\u50a8\n-drive file=alpine.qcow2,if=virtio \\\n# \u7f51\u7edc\n-netdev user,id=user.0,hostfwd=tcp::4287-:22 \\\n-device virtio-net,netdev=user.0\n\n# PCI 10 GbE virtio-net-pci\n-net nic,model=virtio\n\n# libvirt <memballoon model='virtio' autodeflate='on'>\n-device virtio-balloon,deflate-on-oom=on\n\n# Linux AIO\n-drive file=disk.qcow2,if=virtio,aio=native,cache.direct=on\n\n# RNG/Random Number Generator\n# =========================\n# \u9ed8\u8ba4\n# \u652f\u6301\u9650\u901f \u4f8b\u5982 512 bytes/s -> max-bytes=512,period=1000\n-device virtio-rng-pci\n# UNIX \u73af\u5883\n-object rng-random,filename=/dev/random,id=rng0\n# \u786c\u4ef6 rng\n-object rng-random,filename=/dev/hwrng,id=rng0\n# \u7f51\u7edc RNG\n-chardev socket,host=10.199.13.151,port=9000,id=chr0 -object rng-egd,chardev=chr0,id=rng0\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),"<domain>\n  \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n  <iothreads>1</iothreads>\n  <disk type='file' device='disk'>\n    \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n    <driver name='qemu' type='raw' cache='none' iothread='1'/>\n    \x3c!-- virtio --\x3e\n    <target dev='vda' bus='virtio'/>\n  </disk>\n  <devices>\n    <controller type='scsi' index='0' model='virtio-scsi'>\n      \x3c!-- \u5355\u7ebf\u7a0b --\x3e\n      <driver iothread='1'/>\n    </controller>\n  </devices>\n</domain>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# cluster_size \u63d0\u9ad8\u6027\u80fd\nqemu-img create -f qcow2 -o cluster_size=2M my.qcow2 100G\n\n# \u8bbe\u7f6e cache-size \u63d0\u9ad8\u6027\u80fd\nqemu-system-x86_64 -drive file=my.qcow2,if=none,id=drive0,aio=native,cache=none,cache-size=16M\n\n# mode\n# off - \u4e0d\u9884\u5148\u7533\u8bf7\n# falloc - \u4f7f\u7528 posix_fallocate() \u9884\u7559\u7a7a\u95f4\n# full - \u586b 0 \u9884\u7559\nqemu-img create -f $fmt -o preallocation=$mode test.img 100G\n")),Object(o.b)("h1",{id:"virtio-fs"},"virtio-fs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"/usr/lib/qemu/virtiofsd"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.qemu.org/docs/master/interop/virtiofsd.html"}),"virtiofsd")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.qemu.org/docs/master/interop/virtfs-proxy-helper.html"}),"virtfs-proxy-helper"))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8 daemon\nvirtiofsd --socket-path=/var/run/vm001-vhost-fs.sock -o source=/var/lib/fs/vm001\n\n# -virtfs local,path=/tank/storage,mount_tag=host0,security_model=passthrough,id=host0\n\n# QEMU\nqemu-system-x86_64 \\\n  -chardev socket,id=char0,path=/var/run/vm001-vhost-fs.sock \\\n  -device vhost-user-fs-pci,chardev=char0,tag=myfs \\\n  -object memory-backend-memfd,id=mem,size=4G,share=on \\\n  -numa node,memdev=mem\n# Guest \u6302\u8f7d\nmount -t virtiofs myfs /mnt\n\n\n# virtfs-proxy-helper\n")),Object(o.b)("h2",{id:"ref"},"ref"),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.linux-kvm.org/page/9p_virtio"}),"https://www.linux-kvm.org/page/9p_virtio"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.csdn.net/gatieme/article/details/82912921"}),"https://blog.csdn.net/gatieme/article/details/82912921"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://wiki.libvirt.org/page/Virtio"}),"https://wiki.libvirt.org/page/Virtio"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.linux-kvm.org/page/Virtio"}),"https://www.linux-kvm.org/page/Virtio"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"http://wiki.osdev.org/Virtio"}),"http://wiki.osdev.org/Virtio"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/developerworks/library/l-virtio/"}),"https://www.ibm.com/developerworks/library/l-virtio/"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://fedoraproject.org/wiki/Windows_Virtio_Drivers"}),"https://fedoraproject.org/wiki/Windows_Virtio_Drivers"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikibooks.org/wiki/QEMU/Devices/Virtio"}),"https://en.wikibooks.org/wiki/QEMU/Devices/Virtio"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://wiki.qemu.org/Features/VirtioVsock"}),"https://wiki.qemu.org/Features/VirtioVsock"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso"}),"https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.google.com/compute/docs/machine-types#verifying_the_driver_installation"}),"https://cloud.google.com/compute/docs/machine-types#verifying_the_driver_installation"),"\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf"}),"https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf")),Object(o.b)("h1",{id:"block-format-raw-does-not-support-the-option-boot"},"Block format 'raw' does not support the option 'boot'"))}p.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var i=r(0),n=r.n(i);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=i,u=b["".concat(a,".").concat(d)]||b[d]||m[d]||o;return r?n.a.createElement(u,c(c({ref:t},l),{},{components:r})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);