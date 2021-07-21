(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1151:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),c=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=c(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||r;return a?l.a.createElement(O,b(b({ref:t},o),{},{components:a})):l.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<r;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},361:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(3),l=a(8),r=(a(0),a(1151)),i={title:"AlpineLinux Install"},b={unversionedId:"os/alpine/alpine-install",id:"os/alpine/alpine-install",isDocsHomePage:!1,title:"AlpineLinux Install",description:"- iso \u4f1a\u52a0\u8f7d /dev/vda1/apkovl",source:"@site/notes/os/alpine/alpine-install.md",slug:"/os/alpine/alpine-install",permalink:"/notes/os/alpine/alpine-install",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-install.md",version:"current",sidebar:"docs",previous:{title:"Alpine FAQ",permalink:"/notes/os/alpine/alpine-faq"},next:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"}},p=[{value:"Tips",id:"tips",children:[]},{value:"flavor",id:"flavor",children:[]},{value:"\u865a\u62df\u673a\u5b89\u88c5",id:"\u865a\u62df\u673a\u5b89\u88c5",children:[]},{value:"setup-disk",id:"setup-disk",children:[]},{value:"\u57fa\u7840\u4f9d\u8d56",id:"\u57fa\u7840\u4f9d\u8d56",children:[{value:"/etc/apk/world/",id:"etcapkworld",children:[]}]}],o={toc:p};function c(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"iso \u4f1a\u52a0\u8f7d /dev/vda1/apkovl")),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5feb\u901f dd\n# conv=sync,noerror\ndd if=alpine-lts.img | dd of=/dev/sdb bs=100M conv=notrunc status=progress\n#\ndd if=test.raw of=/dev/rdisk2 conv=sparse status=progress bs=128MB\n\n# \u5206\u533a\npartprobe -s\n")),Object(r.b)("h2",{id:"flavor"},"flavor"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u4e0d\u540c\u7684\u5185\u6838\u7279\u6027")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"virt"),Object(r.b)("li",{parentName:"ul"},"lts"),Object(r.b)("li",{parentName:"ul"},"xen"),Object(r.b)("li",{parentName:"ul"},"rpi/rpi2/rpi4 - RaspberryPi",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"rpi - armhf, armv7, aarch64"),Object(r.b)("li",{parentName:"ul"},"rpi2 - armhf, armv7"),Object(r.b)("li",{parentName:"ul"},"rpi4 - armv7, aarch64"))),Object(r.b)("li",{parentName:"ul"},"gru/elm - aarch64 - testing - chrome book"),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices"},"Developer Information for Chrome OS Devices"))))),Object(r.b)("h2",{id:"\u865a\u62df\u673a\u5b89\u88c5"},"\u865a\u62df\u673a\u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"efi",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"boot \u5206\u533a 512M"),Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 grub"),Object(r.b)("li",{parentName:"ul"},"ESP -> EFI (Extensible Firmware Interface) system partition")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -O http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.13/releases/x86_64/alpine-extended-3.13.5-x86_64.iso\nqemu-system-x86_64 -smp 2 -m 4G -accel hvf -cdrom alpine-extended-3.13.5-x86_64.iso -boot b -hda efi.raw -net nic -net user,hostfwd=tcp::2222-:22\n\n# UEFI \u542f\u52a8\n# -accel hvf \u542f\u52a8\u4f1a\u5931\u8d25\nqemu-system-x86_64 -m 4G -smp 2 -net nic -nic user,hostfwd=tcp::2222-:22 -drive file=efi.raw,if=virtio -display cocoa -bios bios.bin\n")),Object(r.b)("h2",{id:"setup-disk"},"setup-disk"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/alpine-conf/blob/master/setup-disk.in"},"setup-disk")," \u4f1a\u6dfb\u52a0\u4e00\u4e9b\u57fa\u7840\u7684",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"sfdisk acct alpine-base"),Object(r.b)("li",{parentName:"ul"},"linux-flavor"),Object(r.b)("li",{parentName:"ul"},"bootloader",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"syslinux"))),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6307\u5b9a apkvol \u5219\u4f1a\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"lbu package")," - \u5305\u542b\u5f53\u524d\u6240\u6709\u7684\u5b89\u88c5\u5305"),Object(r.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(r.b)("inlineCode",{parentName:"li"},"ERASE_DISKS")," \u4e3a\u5b89\u88c5\u76d8\u5219\u4e0d\u4f1a\u8be2\u95ee\u662f\u5426\u64e6\u9664")))),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sys -> native_disk_install/lvm"),Object(r.b)("li",{parentName:"ul"},"data -> data_only_disk_install/lvm"),Object(r.b)("li",{parentName:"ul"},"native_disk_install - \u672c\u5730\u5b89\u88c5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"select_bootloader_pkg",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"grub -> grub-bios"),Object(r.b)("li",{parentName:"ul"},"grub+efi -> grub-efi"),Object(r.b)("li",{parentName:"ul"},"syslinux"))),Object(r.b)("li",{parentName:"ul"},"init_progs - \u5b89\u88c5\u4f9d\u8d56",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"sfdisk dosfstools e2fsprogs btrfs-progs xfsprogs"))),Object(r.b)("li",{parentName:"ul"},"setup_partitions - boot, swap, root",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"efi \u7684 boot \u9ed8\u8ba4 512M \u5176\u4ed6 100M"))),Object(r.b)("li",{parentName:"ul"},"setup_boot_dev - mkfs"),Object(r.b)("li",{parentName:"ul"},"setup_swap_dev"),Object(r.b)("li",{parentName:"ul"},"setup_root"))),Object(r.b)("li",{parentName:"ul"},"setup_root - \u6838\u5fc3\u5b89\u88c5\u903b\u8f91",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"mkfs root, mount root \u5230 SYSROOT=/mnt"),Object(r.b)("li",{parentName:"ul"},"mount boot -> /mnt/boot"),Object(r.b)("li",{parentName:"ul"},"mount boot -> /mnt/boot/efi - boot \u548c efi \u5728\u540c\u4e00\u4e2a\u5206\u533a"),Object(r.b)("li",{parentName:"ul"},"install_mounted_root - \u5728 mount \u7684 root \u8fdb\u884c\u5b89\u88c5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u63d0\u4f9b APKOVL \u4f1a\u57fa\u4e8e\u5f53\u524d\u7cfb\u7edf\u8fdb\u884c lbu \u6784\u5efa APKOVL"),Object(r.b)("li",{parentName:"ul"},"mkinitfs"),Object(r.b)("li",{parentName:"ul"},"setup_grub/setup_syslinux/setup_raspberrypi_bootloader/setup_zipl"),Object(r.b)("li",{parentName:"ul"},"init_chroot_mounts"),Object(r.b)("li",{parentName:"ul"},"apk add"),Object(r.b)("li",{parentName:"ul"},"cleanup_chroot_mounts"))),Object(r.b)("li",{parentName:"ul"},"unmount_partitions")))),Object(r.b)("h2",{id:"\u57fa\u7840\u4f9d\u8d56"},"\u57fa\u7840\u4f9d\u8d56"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/v3.12/main/x86_64/alpine-base"},"alpine-base"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"alpine-baselayout",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"busybox musl"))),Object(r.b)("li",{parentName:"ul"},"alpine-conf",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"busybox musl openrc"))),Object(r.b)("li",{parentName:"ul"},"alpine-keys"),Object(r.b)("li",{parentName:"ul"},"apk-tools",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"libcrypto1.1 libssl1.1 musl zlib"))),Object(r.b)("li",{parentName:"ul"},"busybox",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"musl"))),Object(r.b)("li",{parentName:"ul"},"busybox-initscripts",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"busybox openrc"))),Object(r.b)("li",{parentName:"ul"},"busybox-suid",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"busybox musl"))),Object(r.b)("li",{parentName:"ul"},"libc-utils",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"musl-utils",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"musl scanelf"))))),Object(r.b)("li",{parentName:"ul"},"openrc",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"busybox musl")))))),Object(r.b)("h3",{id:"etcapkworld"},"/etc/apk/world/"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"minirootfs")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"alpine-baselayout\nalpine-keys\napk-tools\nbusybox\nlibc-utils\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"virt.iso")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"alpine-base\nopenssl\n")))}c.isMDXComponent=!0}}]);