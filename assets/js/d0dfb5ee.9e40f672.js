"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89477],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,_=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return r?n.createElement(_,l(l({ref:t},d),{},{components:r})):n.createElement(_,l({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64757:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return _},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&d(e,r,t[r]);return e};const m={id:"dracut"},p="dracut",_={unversionedId:"os/linux/boot/dracut",id:"os/linux/boot/dracut",title:"dracut",description:"- \u662f\u4ec0\u4e48",source:"@site/../notes/os/linux/boot/dracut.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/dracut",permalink:"/notes/os/linux/boot/dracut",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/boot/dracut.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1605179571,formattedLastUpdatedAt:"Nov 12, 2020",frontMatter:{id:"dracut"},sidebar:"docs",previous:{title:"man",permalink:"/notes/os/linux/admin/man"},next:{title:"GRUB",permalink:"/notes/os/linux/boot/grub"}},v={},f=[{value:"modules",id:"modules",level:2},{value:"cmdline",id:"cmdline",level:2},{value:"\u542f\u52a8\u6d41\u7a0b",id:"\u542f\u52a8\u6d41\u7a0b",level:2}],b={toc:f};function k(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),d),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"dracut"}),"dracut"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa initramfs"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4f4d\u548c\u6302\u8f7d rootfs"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 btrfs, DM RAID, MD RAID, LVM2, device mapper multipath I/O, dm-crypt, cifs, FCoE, iSCSI, NBD, NFS"),(0,n.kt)("li",{parentName:"ul"},"\u6e90\u81ea Redhat - \u56e0\u6b64 CentOS\u3001Fedora\u3001RHEL \u90fd\u662f"),(0,n.kt)("li",{parentName:"ul"},"\u9664\u4e86 Redhat \u4e4b\u5916\u9ed8\u8ba4\u4f7f\u7528\u7684 - openSUSE\u3001SLES"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/dracutdevs/dracut"}),"dracutdevs/dracut")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://dracut.wiki.kernel.org"}),"dracut.wiki.kernel.org")),(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5757\u4f4d\u4e8e /usr/lib/dracut/modules.d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/dracutdevs/dracut/tree/master/modules.d"}),"modules.d")),(0,n.kt)("li",{parentName:"ul"},"rngd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u73af\u5883\u6700\u597d\u542f\u52a8 rngd/haveged \u5426\u5219\u542f\u52a8\u975e\u5e38\u6162 200s+"))),(0,n.kt)("li",{parentName:"ul"},"fs-lib",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ext4"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/dracutdevs/dracut/blob/master/modules.d/90qemu/module-setup.sh"}),"qemu"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b virtio"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/dracutdevs/dracut/tree/master/modules.d/98dracut-systemd"}),"dracut-systemd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u5b9e\u9645\u542f\u52a8\u811a\u672c\u903b\u8f91"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://mirrors.edge.kernel.org/pub/linux/utils/boot/dracut/dracut.html"}),"\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://wiki.centos.org/TipsAndTricks/CreateNewInitrd"}),"Creating a New Initial RAM Disk")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rd.luks=0 rd.lvm=0 rd.md=0 rd.dm=0")," - \u4e0d\u626b\u63cf\u4e0d\u5fc5\u8981\u7684\u8bbe\u5907\u53ef\u4ee5\u52a0\u901f\u542f\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u57fa\u7840\u5305\nyum install -y rng-tools nano\nsystemctl enable rngd\n\nlsinitrd /boot/initrd.img-4.6.0-1-amd64\nmodprobe --show-depends dm-raid|grep crc\n\n\n# --hostonly \u4ec5\u5b89\u88c5\u4e3b\u673a\u9700\u8981\u6a21\u5757\n# --add-drivers \u6dfb\u52a0\u5185\u6838\u6a21\u5757\ndracut --kver 4.18.0-193.19.1.el8_2.x86_64 --no-hostonly --add fs-lib initramfs\nlsinitrd initramfs\n\n# rootfs \u53ea\u5b89\u88c5 kernel-core \u7528\u4e8e\u6784\u5efa initrd\nyum install -y yum-utils\nrpm -Uvh --nodeps $(repoquery --location kernel-core)\n\n# \u67e5\u770b\u6240\u6709\u6a21\u5757\ndracut --kver 4.18.0-193.19.1.el8_2.x86_64 --no-hostonly --list-modules\n\ndracut -m "nfs network base" --no-hostonly initramfs-nfs-only.img\n\nyum install -y rng-tools\n# dracut-systemd systemd-initrd\n# virtio_mmio\ndracut initramfs --kver 4.18.0-193.19.1.el8_2.x86_64 \\\n  -f --no-hostonly -v \\\n  -m "base bash systemd dracut-systemd systemd-initrd qemu qemu-net fs-lib rngd busybox"  \\\n  --kernel-cmdline "rd.debug rd.shell rd.udev.debug rd.driver.pre=ext4 rd.driver.pre=virtio_mmio rd.break=cmdline rd.luks=0 rd.lvm=0 rd.md=0"\n\n')),(0,n.kt)("h2",c({},{id:"modules"}),"modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"05-bash - \u5b89\u88c5 bash \u4f5c\u4e3a /bin/sh"),(0,n.kt)("li",{parentName:"ul"},"05-systemd - \u5b89\u88c5 systemd \u548c\u57fa\u7840\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"05-busybox - \u5b89\u88c5 /usr/bin/busybox"),(0,n.kt)("li",{parentName:"ul"},"06-rngd")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# busybox\ncurl -o /usr/bin/busybox https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/busybox-x86_64\nchmod +x /usr/bin/busybox\n\n# rngd\nyum install rng-tools -y\n")),(0,n.kt)("h2",c({},{id:"cmdline"}),"cmdline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"debug",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"rd.info \u65e5\u5fd7\u7ea7\u522b"),(0,n.kt)("li",{parentName:"ul"},"rd.debug Shell \u6267\u884c\u4f1a set -x"),(0,n.kt)("li",{parentName:"ul"},"rd.shell root \u6302\u8f7d\u5931\u8d25\u8fdb\u5165 shell"),(0,n.kt)("li",{parentName:"ul"},"rd.break={cmdline|pre-udev|pre-trigger|initqueue|pre-mount|mount|pre-pivot|cleanup} \u8fdb\u5165 shell"),(0,n.kt)("li",{parentName:"ul"},"rd.udev.info"),(0,n.kt)("li",{parentName:"ul"},"rd.udev.debug")))),(0,n.kt)("p",null,"rd.emergency=","[reboot|poweroff|halt]","\nspecify, what action to execute in case of a critical failure. rd.shell=0 also be specified.\nrd.driver.blacklist=",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\ndo not load kernel module ",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>"),". This parameter can be specified multiple times.\nrd.driver.pre=",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\nforce loading kernel module ",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>"),". This parameter can be specified multiple times.\nrd.driver.post=",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\nforce loading kernel module ",(0,n.kt)("inlineCode",{parentName:"p"},"<drivername>")," after all automatic loading modules have been loaded. This parameter can be specified multiple times.\nrd.retry=",(0,n.kt)("inlineCode",{parentName:"p"},"<seconds>"),"\nspecify how long dracut should retry the initqueue to configure devices. The default is 30 seconds. After 2/3 of the time, degraded raids are force started. If you have hardware, which takes a very long time to announce its drives, you might want to extend this value.\nrd.timeout=",(0,n.kt)("inlineCode",{parentName:"p"},"<seconds>"),"\nspecify how long dracut should wait for devices to appear. The default is 0, which means forever. Note that this timeout should be longer than rd.retry to allow for proper configuration.\nrd.noverifyssl\naccept self-signed certificates for ssl downloads.\nrd.ctty=",(0,n.kt)("inlineCode",{parentName:"p"},"<terminal device>"),'\nspecify the controlling terminal for the console. This is useful, if you have multiple "console=" arguments.'),(0,n.kt)("p",null,"cp -r usr/lib/modules/4.18.0-193.19.1.el8_2.x86_64 lib/modules/"),(0,n.kt)("h2",c({},{id:"\u542f\u52a8\u6d41\u7a0b"}),"\u542f\u52a8\u6d41\u7a0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://mirrors.edge.kernel.org/pub/linux/utils/boot/dracut/dracut.html#dracutbootup7"}),"dracut.bootup"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"                                    systemd-journal.socket\n                                               |\n                                               v\n                                    dracut-cmdline.service\n                                               |\n                                               v\n                                    dracut-pre-udev.service\n                                               |\n                                               v\n                                     systemd-udevd.service\n                                               |\n                                               v\nlocal-fs-pre.target                dracut-pre-trigger.service\n         |                                     |\n         v                                     v\n (various mounts)                systemd-udev-trigger.service\n         |        (swap devices)               |             (various low-level   (various low-level\n         |               |                     |             services: seed,       API VFS mounts:\n         v               v                     v             tmpfiles, random     mqueue, configfs,\n  local-fs.target   swap.target     dracut-initqueue.service    sysctl, ...)        debugfs, ...)\n         |               |                     |                    |                    |\n         \\_______________|____________________ | ___________________|____________________/\n                                              \\|/\n                                               v\n                                        sysinit.target\n                                               |\n                             _________________/|\\___________________\n                            /                  |                    \\\n                            |                  |                    |\n                            v                  |                    v\n                        (various               |              rescue.service\n                       sockets...)             |                    |\n                            |                  |                    v\n                            v                  |              rescue.target\n                     sockets.target            |\n                            |                  |\n                            \\_________________ |                                 emergency.service\n                                              \\|                                         |\n                                               v                                         v\n                                         basic.target                             emergency.target\n                                               |\n                        ______________________/|\n                       /                       |\n                       |                       v\n                       |            dracut-pre-mount.service\n                       |                       |\n                       |                       v\n                       |                  sysroot.mount\n                       |                       |\n                       |                       v\n                       |             initrd-root-fs.target\n           (custom initrd services)            |\n                       |                       v\n                       |             dracut-mount.service\n                       |                       |\n                       |                       v\n                       |            initrd-parse-etc.service\n                       |                       |\n                       |                       v\n                       |            (sysroot-usr.mount and\n                       |             various mounts marked\n                       |               with fstab option\n                       |                x-initrd.mount)\n                       |                       |\n                       |                       v\n                       |                initrd-fs.target\n                       \\______________________ |\n                                              \\|\n                                               v\n                                          initrd.target\n                                               |\n                                               v\n                                    dracut-pre-pivot.service\n                                               |\n                                               v\n                                     initrd-cleanup.service\n                                          isolates to\n                                    initrd-switch-root.target\n                                               |\n                                               v\n                        ______________________/|\n                       /                       |\n                       |        initrd-udevadm-cleanup-db.service\n                       |                       |\n           (custom initrd services)            |\n                       |                       |\n                       \\______________________ |\n                                              \\|\n                                               v\n                                   initrd-switch-root.target\n                                               |\n                                               v\n                                   initrd-switch-root.service\n                                               |\n                                               v\n                                          switch-root\n")))}k.isMDXComponent=!0}}]);