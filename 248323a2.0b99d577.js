(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1172:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=m(a),s=n,d=o["".concat(i,".").concat(s)]||o[s]||u[s]||l;return a?r.a.createElement(d,b(b({ref:t},p),{},{components:a})):r.a.createElement(d,b({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},242:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),l=(a(0),a(1172)),i={id:"qemu",title:"QEMU"},b={unversionedId:"os/virt/qemu",id:"os/virt/qemu",isDocsHomePage:!1,title:"QEMU",description:"- qemu \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/virt/qemu.md",slug:"/os/virt/qemu",permalink:"/notes/os/virt/qemu",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu.md",version:"current",sidebar:"docs",previous:{title:"QEMU Windows \u5bbf\u4e3b\u673a",permalink:"/notes/os/virt/qemu-windows-host"},next:{title:"Virt Awesome",permalink:"/notes/os/virt/virt-awesome"}},c=[{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",children:[]},{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u865a\u62df\u5316\u8bf4\u660e",id:"\u865a\u62df\u5316\u8bf4\u660e",children:[]}],p={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.qemu.org/"},"qemu")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u6e90\u6a21\u62df\u5668\u3001\u865a\u62df\u673a"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u786c\u4ef6\u52a0\u901f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QEMU"},"QEMU:wiki")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.qemu.org/docs/master/"},"QEMU Documentation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://qemu.weilnetz.de/doc/latest/"},"https://qemu.weilnetz.de/doc/latest/")),Object(l.b)("li",{parentName:"ul"},"VirtualBox , Xen \u548c KVM \u57fa\u4e8e QEMU"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5353\u865a\u62df\u673a\u57fa\u4e8e QEMU ARM \u865a\u62df"),Object(l.b)("li",{parentName:"ul"},"QEMU-SystemC \u4f7f\u7528 QEMU \u6765\u6a21\u62df\u4f7f\u7528 SystemC \u5f00\u53d1\u7684\u786c\u4ef6"),Object(l.b)("li",{parentName:"ul"},"Symmetric multiprocessing - SMP"),Object(l.b)("li",{parentName:"ul"},"\u7f51\u7edc",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://blog.san-ss.com.ar/2016/04/setup-nat-network-for-qemu-macosx"},"Setup NAT Network for QEMU in Mac OSX")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_block_device"},"https://en.wikipedia.org/wiki/Network_block_device")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.gitbook.com/book/stamp711/vexpress-a9-on-qemu/details"},"https://www.gitbook.com/book/stamp711/vexpress-a9-on-qemu/details")),Object(l.b)("li",{parentName:"ul"},"qemu-system-ARCH - \u7cfb\u7edf\u865a\u62df\u5316"),Object(l.b)("li",{parentName:"ul"},"qemu-ARCH - \u7528\u6237\u7a7a\u95f4\u6a21\u62df"),Object(l.b)("li",{parentName:"ul"},"qemu-edid - edid generator \u6d4b\u8bd5\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.qemu.org/docs/master/interop/qemu-ga.html"},"qemu-ga")," - Guest Agent",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bbf\u4e3b\u673a\u83b7\u53d6\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u65f6\u95f4"),Object(l.b)("li",{parentName:"ul"},"\u8bfb\u5199\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u540c\u6b65\u3001\u51bb\u7ed3\u6587\u4ef6\u7cfb\u7edf"),Object(l.b)("li",{parentName:"ul"},"\u6682\u5b58/suspend"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u672c\u5730\u5904\u7406\u5668"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5bc6\u7801"))),Object(l.b)("li",{parentName:"ul"},"qemu-img - \u955c\u50cf\u64cd\u4f5c\u5de5\u5177"),Object(l.b)("li",{parentName:"ul"},"qemu-io - Disk exerciser"),Object(l.b)("li",{parentName:"ul"},"qemu-keymap"),Object(l.b)("li",{parentName:"ul"},"qemu-nbd - Disk Network Block Device Server"),Object(l.b)("li",{parentName:"ul"},"qemu-storage-daemon",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"provides access to QEMU block-layer/QMP features like blocks jobs or built-in NBD server without starting a full VM"),Object(l.b)("li",{parentName:"ul"},"\u66b4\u9732 NBD \u670d\u52a1"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.qemu.org/docs/master/interop/pr-helper.html"},"qemu-pr-helper")," - Persistent Reservation helper",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SCSI \u8bbe\u5907\u900f\u4f20, scsi-block, scsi-generic"))),Object(l.b)("li",{parentName:"ul"},"accel - \u786c\u4ef6\u52a0\u901f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"tcg - \u65e0\u52a0\u901f - \u9ed8\u8ba4"),Object(l.b)("li",{parentName:"ul"},"kvm - Linux"),Object(l.b)("li",{parentName:"ul"},"hax - Intel \u5e73\u53f0 - macOS/Windows"),Object(l.b)("li",{parentName:"ul"},"whpa - hyperv"))),Object(l.b)("li",{parentName:"ul"},"\u663e\u793a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"-serial stdio - stdio \u4f5c\u4e3a\u4e32\u53e3"),Object(l.b)("li",{parentName:"ul"},"-curses - \u4f7f\u7528 ncurses \u663e\u793a"),Object(l.b)("li",{parentName:"ul"},"-no-graphics - \u65e0\u663e\u793a"),Object(l.b)("li",{parentName:"ul"},"-vnc :1 - VNC 5901"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/QEMU/Options"},"https://wiki.gentoo.org/wiki/QEMU/Options")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.qemu.org/Features/CPUModels"},"https://wiki.qemu.org/Features/CPUModels")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://remimin.github.io/2019/07/09/qemu_machine_type"},"machine"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Mac \u5b89\u88c5\nbrew install qemu\n\n# \u4f7f\u7528\u786c\u4ef6\u52a0\u901f\u542f\u52a8\u4e00\u4e2a\u7a7a\u865a\u62df\u673a - \u9a8c\u8bc1\u662f\u5426\u652f\u6301\u865a\u62df\u5316\nqemu-system-x86_64 -machine accel=kvm\n\n# \u663e\u793a\u652f\u6301\u7684 accel\nqemu-system-x86_64 -accel help\n\n# \u751f\u6210\u968f\u673a mac \u5730\u5740\u5230 macaddr\nprintf -v macaddr "52:54:%02x:%02x:%02x:%02x" $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff )) $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff ))\n\nrandom-macaddr(){\n  printf "52:54:%02x:%02x:%02x:%02x" $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff )) $(( $RANDOM & 0xff)) $(( $RANDOM & 0xff ))\n}\n\n# -netdev tap,id=t0,ifname=en5,script=no,downscript=no -device e1000,netdev=t0,id=nic0,mac=52:54:00:12:34:58\nqemu-system-x86_64 -hda vdisk.img -cdrom alpine-standard-3.6.2-x86_64.iso -netdev user,id=en5,net=192.168.8.0/22,dhcpstart=192.168.8.1 -device e1000,netdev=en5,id=nic0,mac=$(random-macaddr)\n\n# \u5728 macOS \u4e0b\u4f7f\u7528\u6865\u63a5\n# 1. \u9700\u8981\u5728\u7f51\u7edc\u504f\u597d\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6865\u63a5\u7f51\u7edc,\u9700\u8981\u9009\u62e9\u7269\u7406\u7f51\u5361\n# 2. \u542f\u52a8\u65f6\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u811a\u672c\nqemu-system-x86_64 -smp 2 -vnc :5 -m 1024 -drive file=disk.img,if=virtio -device virtio-balloon -boot c \\\n  -net nic,model=virtio,macaddr=54:54:00:55:55:55 -net tap,script=../scripts/tap-up,downscript=../scripts/tap-down\n\n# tap-up\nTAPDEV="$1"\nBRIDGEDEV="bridge0"\nifconfig $BRIDGEDEV addm $TAPDEV\n\n# tap-down\nTAPDEV="$1"\nBRIDGEDEV="bridge0"\nifconfig $BRIDGEDEV deletem $TAPDEV\n\n# OpenWRT - ARM\n# https://wiki.openwrt.org/doc/howto/qemu\n# \u4e0b\u8f7d\u9875 https://downloads.openwrt.org/snapshots/trunk/realview/generic/\n# \u7531\u4e8e\u6ca1\u6709\u5bf9\u5e94\u7684 PCI \u5b9e\u73b0, \u65e0\u6cd5\u4ece\u78c1\u76d8\u7b49 IDE/SCSI \u63a7\u5236\u5668\u542f\u52a8, \u4f46\u53ef\u4ee5\u4ece SD \u542f\u52a8, \u53ea\u662f\u53ef\u80fd SD \u6709\u5927\u5c0f\u9650\u5236\nwget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-vmlinux-initramfs.elf\nqemu-system-arm -M realview-eb-mpcore -kernel openwrt-realview-vmlinux-initramfs.elf -net nic -net user -nographic\n\n# \u4ece SD \u542f\u52a8\nwget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-vmlinux.elf\nwget https://downloads.openwrt.org/snapshots/trunk/realview/generic/openwrt-realview-sdcard.img\nqemu-system-arm -M realview-pbx-a9 -m 1024M -nographic \\\n  -kernel openwrt-realview-vmlinux.elf \\\n  -sd openwrt-realview-sdcard.img \\\n  -append "console=ttyAMA0 verbose debug root=/dev/mmcblk0p1"\n\n# Alpine - ARM\ntar -zxvf alpine-uboot-3.6.2-armhf.tar.gz -C alpine-uboot-3.6.2-armhf\ncd alpine-uboot-3.6.2-armhf\n# qemu-system-arm -M vexpress-a9 -kernel zImage -initrd initramfs-grsec -dtb vexpress-v2p-ca9.dtb -hda hda.img -serial stdio\nqemu-system-arm -M vexpress-a9 -kernel boot/vmlinuz-hardened \\\n  -initrd boot/initramfs-hardened -dtb boot/dtbs/vexpress-v2p-ca9.dtb \\\n  -append "console=ttyAMA0 verbose debug" -nographic\n\nqemu-system-arm -M vexpress-a9 -kernel boot/vmlinuz-hardened \\\n  -initrd boot/initramfs-hardened -dtb boot/dtbs/vexpress-v2p-ca9.dtb \\\n  -append "console=ttyAMA0 verbose debug root=/dev/mmcblk0" -nographic\n\n')),Object(l.b)("h2",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"M -> \u4fee\u9970\u952e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a Ctrl+Alt"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-alt-grab")," - ",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl-Alt-Shift")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-ctrl-grab")," - \u53f3 Ctrl")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u5feb\u6377\u952e"),Object(l.b)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M-f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5168\u5c4f\u5207\u6362")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M-+"),Object(l.b)("td",{parentName:"tr",align:null},"\u589e\u5927\u5c4f\u5e55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M--"),Object(l.b)("td",{parentName:"tr",align:null},"\u7f29\u5c0f\u5c4f\u5e55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M-u"),Object(l.b)("td",{parentName:"tr",align:null},"\u6062\u590d\u5c4f\u5e55\u5927\u5c0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"M-n"),Object(l.b)("td",{parentName:"tr",align:null},"\u5207\u6362\u4e3a\u865a\u62df\u63a7\u5236\u53f0 'n', 1: \u76ee\u6807\u7cfb\u7edf\u663e\u793a, 2: \u76d1\u89c6\u5668, 3: \u4e32\u53e3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C-A"),Object(l.b)("td",{parentName:"tr",align:null},"\u5207\u6362\u952e\u76d8\u548c\u9f20\u6807\u6355\u83b7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"C-a h"),Object(l.b)("td",{parentName:"tr",align:null},"\u5728 ",Object(l.b)("inlineCode",{parentName:"td"},"-nographic")," \u663e\u793a\u5e2e\u52a9")))),Object(l.b)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5168\u7cfb\u7edf\u6a21\u62df",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u4efb\u610f\u7cfb\u7edf\u4efb\u610f\u67b6\u6784"))),Object(l.b)("li",{parentName:"ul"},"\u7528\u6237\u6a21\u5f0f\u6a21\u62df",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u4e0e\u5bbf\u4e3b\u673a\u67b6\u6784\u76f8\u540c"))),Object(l.b)("li",{parentName:"ul"},"\u865a\u62df\u5316",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u4e8e KVM \u548c XEN"))))),Object(l.b)("li",{parentName:"ul"},"\u7279\u70b9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5728\u6ca1\u6709\u4e3b\u673a\u9a71\u52a8\u7684\u524d\u63d0\u4e0b\u63d0\u4f9b\u53ef\u63a5\u53d7\u7684\u6027\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u591a\u53f0"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7cbe\u786e\u7684\u8f6f\u4ef6\u6a21\u62df FPU"))),Object(l.b)("li",{parentName:"ul"},"PC \u652f\u6301\u6a21\u62df\u7684\u5916\u8bbe",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"i440FX host PCI bridge and PIIX3 PCI to ISA bridge"),Object(l.b)("li",{parentName:"ul"},"Cirrus CLGD 5446 PCI VGA card or dummy VGA card with Bochs VESA extensions (hardware level, including all non standard modes)."),Object(l.b)("li",{parentName:"ul"},"PS/2 mouse and keyboard"),Object(l.b)("li",{parentName:"ul"},"2 PCI IDE interfaces with hard disk and CD-ROM support"),Object(l.b)("li",{parentName:"ul"},"Floppy disk"),Object(l.b)("li",{parentName:"ul"},"PCI and ISA network adapters"),Object(l.b)("li",{parentName:"ul"},"Serial ports"),Object(l.b)("li",{parentName:"ul"},"IPMI BMC, either and internal or external one"),Object(l.b)("li",{parentName:"ul"},"Creative SoundBlaster 16 sound card"),Object(l.b)("li",{parentName:"ul"},"ENSONIQ AudioPCI ES1370 sound card"),Object(l.b)("li",{parentName:"ul"},"Intel 82801AA AC97 Audio compatible sound card"),Object(l.b)("li",{parentName:"ul"},"Intel HD Audio Controller and HDA codec"),Object(l.b)("li",{parentName:"ul"},"Adlib (OPL2) - Yamaha YM3812 compatible chip"),Object(l.b)("li",{parentName:"ul"},"Gravis Ultrasound GF1 sound card"),Object(l.b)("li",{parentName:"ul"},"CS4231A compatible sound card"),Object(l.b)("li",{parentName:"ul"},"PCI UHCI, OHCI, EHCI or XHCI USB controller and a virtual USB-1.1 hub."))),Object(l.b)("li",{parentName:"ul"},"SMP is supported with up to 255 CPUs.")),Object(l.b)("h2",{id:"\u865a\u62df\u5316\u8bf4\u660e"},"\u865a\u62df\u5316\u8bf4\u660e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"x86/x86-64",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 16/32 \u4e3a\u5730\u5740\u6bb5; \u652f\u6301\u6a21\u62df LDT/GDT \u548c IDT; \u652f\u6301 VM86 \u5141\u8bb8 DOSEMU; \u90e8\u5206\u652f\u6301 MMX/3DNow, SSE, SSE2, SSE3, SSE4, x86-64 SVM"),Object(l.b)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u6a21\u62df\u652f\u6301\u4e3b\u673a\u9875\u6587\u4ef6\u5927\u4e8e 4k"),Object(l.b)("li",{parentName:"ul"},"QEMU \u652f\u6301\u5728 x86 \u81ea\u8eab\u6a21\u62df"),Object(l.b)("li",{parentName:"ul"},"\u5305\u542b\u90e8\u5206\u6d4b\u8bd5\u7a0b\u5e8f ",Object(l.b)("inlineCode",{parentName:"li"},"tests/test-i386")))),Object(l.b)("li",{parentName:"ul"},"\u9650\u5236",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Limited x86-64 support"),Object(l.b)("li",{parentName:"ul"},"IPC syscalls are missing"),Object(l.b)("li",{parentName:"ul"},"The x86 segment limits and access rights are not tested at every memory access (yet). Hopefully, very few OSes seem to rely on that for normal use."))))),Object(l.b)("li",{parentName:"ul"},"ARM",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b8c\u5168\u652f\u6301 ARM7 \u7528\u6237\u6a21\u62df"),Object(l.b)("li",{parentName:"ul"},"Linux \u652f\u6301 NWFPE FPU"),Object(l.b)("li",{parentName:"ul"},"\u80fd\u8fd0\u884c\u5927\u90e8\u5206 ARM Linux \u4e8c\u8fdb\u5236\u6587\u4ef6")))))}m.isMDXComponent=!0}}]);