"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51940],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,d=k["".concat(o,".").concat(c)]||k[c]||m[c]||r;return n?l.createElement(d,i(i({ref:t},s),{},{components:n})):l.createElement(d,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return k}});var l=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],p={title:"AlpineLinux Install"},o=void 0,u={unversionedId:"os/alpine/alpine-install",id:"os/alpine/alpine-install",isDocsHomePage:!1,title:"AlpineLinux Install",description:"- iso \u4f1a\u52a0\u8f7d /dev/vda1/apkovl",source:"@site/notes/os/alpine/alpine-install.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-install",permalink:"/notes/os/alpine/alpine-install",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-install.md",version:"current",frontMatter:{title:"AlpineLinux Install"},sidebar:"docs",previous:{title:"Alpine FAQ",permalink:"/notes/os/alpine/alpine-faq"},next:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"}},s=[{value:"Tips",id:"tips",children:[]},{value:"flavor",id:"flavor",children:[]},{value:"\u865a\u62df\u673a\u5b89\u88c5",id:"\u865a\u62df\u673a\u5b89\u88c5",children:[]},{value:"setup-disk",id:"setup-disk",children:[]},{value:"\u57fa\u7840\u4f9d\u8d56",id:"\u57fa\u7840\u4f9d\u8d56",children:[{value:"/etc/apk/world/",id:"etcapkworld",children:[]}]}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iso \u4f1a\u52a0\u8f7d /dev/vda1/apkovl")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5feb\u901f dd\n# conv=sync,noerror\ndd if=alpine-lts.img | dd of=/dev/sdb bs=100M conv=notrunc status=progress\n#\ndd if=test.raw of=/dev/rdisk2 conv=sparse status=progress bs=128MB\n\n# \u5206\u533a\npartprobe -s\n")),(0,r.kt)("h2",{id:"flavor"},"flavor"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u540c\u7684\u5185\u6838\u7279\u6027")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"virt"),(0,r.kt)("li",{parentName:"ul"},"lts"),(0,r.kt)("li",{parentName:"ul"},"xen"),(0,r.kt)("li",{parentName:"ul"},"rpi/rpi2/rpi4 - RaspberryPi",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rpi - armhf, armv7, aarch64"),(0,r.kt)("li",{parentName:"ul"},"rpi2 - armhf, armv7"),(0,r.kt)("li",{parentName:"ul"},"rpi4 - armv7, aarch64"))),(0,r.kt)("li",{parentName:"ul"},"gru/elm - aarch64 - testing - chrome book"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices"},"Developer Information for Chrome OS Devices"))))),(0,r.kt)("h2",{id:"\u865a\u62df\u673a\u5b89\u88c5"},"\u865a\u62df\u673a\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"efi",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"boot \u5206\u533a 512M"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 grub"),(0,r.kt)("li",{parentName:"ul"},"ESP -> EFI (Extensible Firmware Interface) system partition")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O http://mirrors.sjtug.sjtu.edu.cn/alpine/v3.13/releases/x86_64/alpine-extended-3.13.5-x86_64.iso\nqemu-system-x86_64 -smp 2 -m 4G -accel hvf -cdrom alpine-extended-3.13.5-x86_64.iso -boot b -hda efi.raw -net nic -net user,hostfwd=tcp::2222-:22\n\n# UEFI \u542f\u52a8\n# -accel hvf \u542f\u52a8\u4f1a\u5931\u8d25\nqemu-system-x86_64 -m 4G -smp 2 -net nic -nic user,hostfwd=tcp::2222-:22 -drive file=efi.raw,if=virtio -display cocoa -bios bios.bin\n")),(0,r.kt)("h2",{id:"setup-disk"},"setup-disk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/alpine-conf/blob/master/setup-disk.in"},"setup-disk")," \u4f1a\u6dfb\u52a0\u4e00\u4e9b\u57fa\u7840\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sfdisk acct alpine-base"),(0,r.kt)("li",{parentName:"ul"},"linux-flavor"),(0,r.kt)("li",{parentName:"ul"},"bootloader",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"syslinux"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6307\u5b9a apkvol \u5219\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"lbu package")," - \u5305\u542b\u5f53\u524d\u6240\u6709\u7684\u5b89\u88c5\u5305"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"ERASE_DISKS")," \u4e3a\u5b89\u88c5\u76d8\u5219\u4e0d\u4f1a\u8be2\u95ee\u662f\u5426\u64e6\u9664")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sys -> native_disk_install/lvm"),(0,r.kt)("li",{parentName:"ul"},"data -> data_only_disk_install/lvm"),(0,r.kt)("li",{parentName:"ul"},"native_disk_install - \u672c\u5730\u5b89\u88c5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"select_bootloader_pkg",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"grub -> grub-bios"),(0,r.kt)("li",{parentName:"ul"},"grub+efi -> grub-efi"),(0,r.kt)("li",{parentName:"ul"},"syslinux"))),(0,r.kt)("li",{parentName:"ul"},"init_progs - \u5b89\u88c5\u4f9d\u8d56",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sfdisk dosfstools e2fsprogs btrfs-progs xfsprogs"))),(0,r.kt)("li",{parentName:"ul"},"setup_partitions - boot, swap, root",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"efi \u7684 boot \u9ed8\u8ba4 512M \u5176\u4ed6 100M"))),(0,r.kt)("li",{parentName:"ul"},"setup_boot_dev - mkfs"),(0,r.kt)("li",{parentName:"ul"},"setup_swap_dev"),(0,r.kt)("li",{parentName:"ul"},"setup_root"))),(0,r.kt)("li",{parentName:"ul"},"setup_root - \u6838\u5fc3\u5b89\u88c5\u903b\u8f91",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"mkfs root, mount root \u5230 SYSROOT=/mnt"),(0,r.kt)("li",{parentName:"ul"},"mount boot -> /mnt/boot"),(0,r.kt)("li",{parentName:"ul"},"mount boot -> /mnt/boot/efi - boot \u548c efi \u5728\u540c\u4e00\u4e2a\u5206\u533a"),(0,r.kt)("li",{parentName:"ul"},"install_mounted_root - \u5728 mount \u7684 root \u8fdb\u884c\u5b89\u88c5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u63d0\u4f9b APKOVL \u4f1a\u57fa\u4e8e\u5f53\u524d\u7cfb\u7edf\u8fdb\u884c lbu \u6784\u5efa APKOVL"),(0,r.kt)("li",{parentName:"ul"},"mkinitfs"),(0,r.kt)("li",{parentName:"ul"},"setup_grub/setup_syslinux/setup_raspberrypi_bootloader/setup_zipl"),(0,r.kt)("li",{parentName:"ul"},"init_chroot_mounts"),(0,r.kt)("li",{parentName:"ul"},"apk add"),(0,r.kt)("li",{parentName:"ul"},"cleanup_chroot_mounts"))),(0,r.kt)("li",{parentName:"ul"},"unmount_partitions")))),(0,r.kt)("h2",{id:"\u57fa\u7840\u4f9d\u8d56"},"\u57fa\u7840\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/v3.12/main/x86_64/alpine-base"},"alpine-base"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alpine-baselayout",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox musl"))),(0,r.kt)("li",{parentName:"ul"},"alpine-conf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox musl openrc"))),(0,r.kt)("li",{parentName:"ul"},"alpine-keys"),(0,r.kt)("li",{parentName:"ul"},"apk-tools",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"libcrypto1.1 libssl1.1 musl zlib"))),(0,r.kt)("li",{parentName:"ul"},"busybox",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"musl"))),(0,r.kt)("li",{parentName:"ul"},"busybox-initscripts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox openrc"))),(0,r.kt)("li",{parentName:"ul"},"busybox-suid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox musl"))),(0,r.kt)("li",{parentName:"ul"},"libc-utils",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"musl-utils",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"musl scanelf"))))),(0,r.kt)("li",{parentName:"ul"},"openrc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"busybox musl")))))),(0,r.kt)("h3",{id:"etcapkworld"},"/etc/apk/world/"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minirootfs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alpine-baselayout\nalpine-keys\napk-tools\nbusybox\nlibc-utils\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"virt.iso")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alpine-base\nopenssl\n")))}k.isMDXComponent=!0}}]);