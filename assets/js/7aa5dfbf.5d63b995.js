"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57227],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(96600),r=n(27279),o=(n(59496),n(49613)),i=["components"],l={id:"uboot",title:"U-Boot"},s="U-Boot",m={unversionedId:"os/linux/boot/uboot",id:"os/linux/boot/uboot",title:"U-Boot",description:"Ttips",source:"@site/../notes/os/linux/boot/uboot.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/uboot",permalink:"/notes/os/linux/boot/uboot",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/boot/uboot.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"uboot",title:"U-Boot"},sidebar:"docs",previous:{title:"Syslinux",permalink:"/notes/os/linux/boot/syslinux"},next:{title:"UEFI",permalink:"/notes/os/linux/boot/uefi"}},d={},p=[{value:"Ttips",id:"ttips",level:2},{value:"image",id:"image",level:2},{value:"boot",id:"boot",level:2},{value:"\u542f\u52a8\u65e5\u5fd7",id:"\u542f\u52a8\u65e5\u5fd7",level:2},{value:"command",id:"command",level:2},{value:"Error loading uncompressed kernel without PVH ELF Note",id:"error-loading-uncompressed-kernel-without-pvh-elf-note",level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"u-boot"},"U-Boot"),(0,o.kt)("h2",{id:"ttips"},"Ttips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://u-boot.readthedocs.io/en/stable/index.html"},"Das U-Boot -- the Universal Boot Loader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.denx.de/wiki/DULG/Manual"},"Manual")),(0,o.kt)("li",{parentName:"ul"},"wikipedia ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Das_U-Boot"},"Das U-Boot")))),(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u5d4c\u5165\u5f0f\u7cfb\u7edf\u7684\u5f00\u673a\u52a0\u8f7d\u7a0b\u5e8f,\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u7ed3\u6784."),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"68k, ARM, Blackfin, MicroBlaze, MIPS, Nios, SuperH, PPC, RISC-V, x86"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"u-boot ",(0,o.kt)("a",{parentName:"li",href:"https://u-boot.readthedocs.io/en/stable/board/emulation/qemu-x86.html"},"qemu-x86")),(0,o.kt)("li",{parentName:"ul"},"\u5305\u5185\u5bb9 ",(0,o.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=uboot-tools&arch=x86_64&repo=main"},"uboot-tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=u-boot-all&branch=edge"},"u-boot-all"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u5f00\u53d1\u677f\u7684 uboot"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elinux.org/RPi_U-Boot"},"RPi U-Boot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/pengdonglin137/p/12194548.html"},"uboot qemu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pandysong.github.io/blog/post/run_u-boot_in_qemu/"},"Run u-boot in qemu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/powerast/files/Firmware/"},"https://sourceforge.net/projects/powerast/files/Firmware/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://variwiki.com/index.php?title=U-Boot_features"},"https://variwiki.com/index.php?title=U-Boot_features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://linux-sunxi.org/U-Boot"},"https://linux-sunxi.org/U-Boot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/DIY_Fully_working_Alpine_Linux_for_Allwinner_and_Other_ARM_SOCs"},"https://wiki.alpinelinux.org/wiki/DIY_Fully_working_Alpine_Linux_for_Allwinner_and_Other_ARM_SOCs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/aports/tree/scripts/mkimg.arm.sh"},"mkimg.arm.sh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?file=&path=&name=raspberrypi-bootloader&branch=edge"},"raspberrypi-bootloader"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\n# \u652f\u6301\u914d\u7f6e https://github.com/u-boot/u-boot/tree/master/configs\n# \u4f9d\u8d56 https://git.alpinelinux.org/aports/tree/main/uboot-tools/APKBUILD\napk add swig python3-dev bison flex openssl-dev linux-headers\nmake qemu-x86_64_defconfig\n# make cscope\nmake all -j $(nproc)\n# test\nqemu-system-x86_64 -nographic -no-reboot -bios u-boot.rom\n\n# vexpress_ca9x4_defconfig\n# menuconfig\nmake qemu_arm64_defconfig\nmake all -j $(nproc)\n\n# export CROSS_COMPILE=arm-linux-gnueabi-\n# export CROSS_COMPILE=aarch64-linux-gnu-\n# make ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- vexpress_ca9x4_defconfig\nmake ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- menuconfig\nmake ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- -j8\n\n# example - /usr/share/doc/uboot-tools/examples/fw_env.config\napk add uboot-tools uboot-tools-examples\n\ncat <<CONF > boot.scr\nusb start\nsetenv bootargs earlyprintk console=tty0 console=ttyAMA0\nCONF\nmkimage -A arm -O linux -T script -C none -n boot.scr -d boot.scr boot.scr.uimg\n\n#\n# mkenvimage -s 1024 /usr/share/doc/uboot-tools/examples/fw_env.config\nfw_printenv -c /usr/share/doc/uboot-tools/examples/fw_env.config\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u677f\u542f\u52a8\u9700\u8981\u6709\u4e32\u53e3\u6765\u8fdb\u884c\u8c03\u8bd5"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e32\u53e3\u914d\u7f6e 115200/8N1 (115200 bps, 8 Bit per character, no parity, 1 stop bit, no handshake)"),(0,o.kt)("li",{parentName:"ul"},"Linux \u4e0b\u63a8\u8350\u4f7f\u7528 kermit \u6216 cu\uff0c\u4e0d\u8981\u4f7f\u7528 minicom\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 screen \u548c picocom\uff0c\u5207\u8bb0\u5173\u95ed\u786c\u4ef6\u548c\u8f6f\u4ef6 flow control")),(0,o.kt)("h2",{id:"image"},"image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u201craw\u201d ELF image (vmlinux)"),(0,o.kt)("li",{parentName:"ul"},"uImage format, which contains the compressed vmlinux plus a few extra bytes of metadata that describe the kernel load address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.denx.de/wiki/view/DULG/HowCanICreateAnUImageFromAELFFile"},"How can I create an uImage from a ELF file"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"arch"),(0,o.kt)("th",{parentName:"tr",align:null},"name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"alpha"),(0,o.kt)("td",{parentName:"tr",align:null},"Alpha")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arc"),(0,o.kt)("td",{parentName:"tr",align:null},"ARC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arm"),(0,o.kt)("td",{parentName:"tr",align:null},"ARM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arm64"),(0,o.kt)("td",{parentName:"tr",align:null},"AArch64")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"avr32"),(0,o.kt)("td",{parentName:"tr",align:null},"AVR32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blackfin"),(0,o.kt)("td",{parentName:"tr",align:null},"Blackfin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ia64"),(0,o.kt)("td",{parentName:"tr",align:null},"IA64")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid ARCH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"m68k"),(0,o.kt)("td",{parentName:"tr",align:null},"M68K")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"microblaze"),(0,o.kt)("td",{parentName:"tr",align:null},"MicroBlaze")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mips"),(0,o.kt)("td",{parentName:"tr",align:null},"MIPS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mips64"),(0,o.kt)("td",{parentName:"tr",align:null},"MIPS 64 Bit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nds32"),(0,o.kt)("td",{parentName:"tr",align:null},"NDS32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nios2"),(0,o.kt)("td",{parentName:"tr",align:null},"NIOS II")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"or1k"),(0,o.kt)("td",{parentName:"tr",align:null},"OpenRISC 1000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"powerpc"),(0,o.kt)("td",{parentName:"tr",align:null},"PowerPC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"riscv"),(0,o.kt)("td",{parentName:"tr",align:null},"RISC-V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"s390"),(0,o.kt)("td",{parentName:"tr",align:null},"IBM S390")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sandbox"),(0,o.kt)("td",{parentName:"tr",align:null},"Sandbox")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sh"),(0,o.kt)("td",{parentName:"tr",align:null},"SuperH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sparc"),(0,o.kt)("td",{parentName:"tr",align:null},"SPARC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sparc64"),(0,o.kt)("td",{parentName:"tr",align:null},"SPARC 64 Bit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x86"),(0,o.kt)("td",{parentName:"tr",align:null},"Intel x86")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x86_64"),(0,o.kt)("td",{parentName:"tr",align:null},"AMD x86_64")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"xtensa"),(0,o.kt)("td",{parentName:"tr",align:null},"Xtensa")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkimage -A arm -O linux -T kernel -C gzip -d vmlinux uImage\nmkimage -A arm64 -O linux -T ramdisk -C gzip -d init.cpio.gz initramfs.uImage\n# https://www.denx.de/wiki/view/DULG/HowCanILoadAndUncompressACompressedImage\n# bootm\n# -T standalone\n")),(0,o.kt)("h2",{id:"boot"},"boot"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"boot.scr.uimg"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mediawiki.compulab.com/w/index.php?title=U-Boot:_Quick_reference"},"https://mediawiki.compulab.com/w/index.php?title=U-Boot:_Quick_reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.digi.com/resources/documentation/digidocs/PDFs/90000852.pdf"},"https://www.digi.com/resources/documentation/digidocs/PDFs/90000852.pdf"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7248\u672c\nversion\n# \u4e3b\u677f\u4fe1\u606f\nbdinfo\n# \u4e32\u53e3\u4fe1\u606f\nconinfo\n# cpu \u4fe1\u606f\ncpu info\ncpu detail\n# QEMU \u56fa\u4ef6\u5217\u8868\nqfw list\n\nvirtio scan\nvirtio info\n\n# \u5b50\u7cfb\u7edf\nide\nusb\nvirtio\nnvme\nmmc\n\n#\ndm tree\n\next4ls ide 0 /\next4ls ide 0:2 /\n\next4load ide 0 ${kernel_addr_r} vmlinuz-lts\next4load ide 0 ${ramdisk_addr_r} initramfs-lts\nzboot ${kernel_addr_r}\n\n# sda\nsetenv bootargs root=/dev/sda1 ro\nload ide 0 ${kernel_addr_r} /vmlinuz-lts\nload ide 0 ${ramdisk_addr_r} /initramfs-lts\nzboot ${kernel_addr_r} - ${ramdisk_addr_r} ${filesize}\n\n# \u6301\u4e45\nsetenv bootargs root=UUID=b2aaf743-0418-4d90-94cc-3e6108d7d968 ro\nsetenv boot zboot 03000000 0 04000000 \\${filesize}\nsetenv bootcmd \"ext2load scsi 0:2 03000000 /boot/vmlinuz-3.13.0-58-generic; ext2load scsi 0:2 04000000 /boot/initrd.img-3.13.0-58-generic; run boot\"\nsaveenv\n\n# vda\nsetenv bootargs root=/dev/vda1 ro\nload virtio 0 03000000 /vmlinuz-lts\nload virtio 0 04000000 /initramfs-lts\nzboot 03000000 0 04000000 ${filesize}\n\nqemu-system-x86_64 -m 1024 -smp 2 -nographic -bios artifacts/uboot/qemu-x86_64/u-boot.rom \\\n -kernel virt/vmlinuz-virt -append 'root=/dev/ram console=ttyS0' \\\n -initrd virt/initramfs-virt\nqfw load\nzboot 01000000 - 04000000 5fe85e\n\npart list mmc 0\nls mmc 0:1\n\nload mmc 0:1 0x60008000 zImage\next4load mmc 0:1 0x60008000 zImage \n\nload mmc 0:1 0x61000000 vexpress-v2p-ca9.dtb\next4load mmc 0:1 0x61000000 vexpress-v2p-ca9.dtb\n\nsetenv bootargs 'root=/dev/mmcblk0p2 rw rootfstype=ext4 rootwait earlycon console=tty0 console=ttyAMA0 init=/linuxrc ignore_loglevel'\nbootz 0x60008000 - 0x61000000\n\n\n\nsetenv ipaddr 10.8.8.100; setenv netmask 255.255.255.0; setenv serverip 10.8.8.3;\nsetenv bootargs 'root=/dev/nfs rw nfsroot=10.8.8.3:/home/macrofun/NFS_HOME init=/linuxrc ip=10.8.8.100 console=ttyAMA0';\nsaveenv\n\ntftp 0x60003000 uImage;\nsetenv bootargs root=/dev/nfs rw nfsroot=10.8.8.3:/home/macrofun/NFS_HOME,proto=tcp,nfsvers=4,nolock init=/linuxrc ip=10.8.8.100 console=ttyAMA0 console=tty0\n# qemu-system-arm -M vexpress-a9 -m 512 -serial stdio  -net nic -net tap,ifname=tap0,script=no -kernel u-boot\n# qemu-system-aarch64 -nographic -curses -machine virt -cpu cortex-a57 -bios u-boot.bin\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"if load ${devtype} ${devnum}:${bootpart} ${kernel_addr_r} /boot/Image; then\n  echo fdt: ${fdtfile}\n  if load ${devtype} ${devnum}:${bootpart} ${fdt_addr_r} /boot/dtbs/${fdtfile}; then\n    if load ${devtype} ${devnum}:${bootpart} ${ramdisk_addr_r} /boot/initramfs-linux.img; then\n      booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r};\n    else\n      booti ${kernel_addr_r} - ${fdt_addr_r};\n    fi;\n  fi;\nfi\n")),(0,o.kt)("h2",{id:"\u542f\u52a8\u65e5\u5fd7"},"\u542f\u52a8\u65e5\u5fd7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Valid Boot Flag\nSetup Size = 0x00004400\nMagic signature found\nUsing boot protocol version 2.0c\nLinux kernel version 3.13.0-58-generic (buildd@allspice) #97-Ubuntu SMP Wed Jul 8 02:56:15 UTC 2015\nBuilding boot_params at 0x00090000\nLoading bzImage at address 100000 (5805728 bytes)\nMagic signature found\nInitial RAM disk at linear address 0x04000000, size 19215259 bytes\nKernel command line: "root=/dev/disk/by-partuuid/965c59ee-1822-4326-90d2-b02446050059 ro"\n\nStarting kernel ...\n')),(0,o.kt)("h2",{id:"command"},"command"),(0,o.kt)("p",null,"? - alias for 'help'\nbase - print or set address offset\nbdinfo - print Board Info structure\nblkcache - block cache diagnostics and control\nboot - boot default, i.e., run 'bootcmd'\nbootd - boot default, i.e., run 'bootcmd'\nbootefi - Boots an EFI payload from memory\nbootelf - Boot from an ELF image in memory\nbootm - boot application image from memory\nbootp - boot image via network using BOOTP/TFTP protocol\nbootstage - Boot stage command\nbootvx - Boot vxWorks from an ELF image\ncmp - memory compare\nconinfo - print console devices and information\ncp - memory copy\ncpu - display information about CPUs\ncrc32 - checksum calculation\ndate - get/set/reset date & time\ndhcp - boot image via network using DHCP/TFTP protocol\ndiskboot - boot from IDE device\ndm - Driver model low level access\necho - echo args to console\neditenv - edit environment variable\nenv - environment handling commands\nexit - exit script\next2load - load binary file from a Ext2 filesystem\next2ls - list files in a directory (default /)\next4load - load binary file from a Ext4 filesystem\next4ls - list files in a directory (default /)\next4size - determine a file's size\next4write - create a file in the root directory\nfalse - do nothing, unsuccessfully\nfatinfo - print information about filesystem\nfatload - load binary file from a dos filesystem\nfatls - list files in a directory (default /)\nfatmkdir - create a directory\nfatrm - delete a file\nfatsize - determine a file's size\nfatwrite - write file into a dos filesystem\nfdt - flattened device tree utility commands\nfstype - Look up a filesystem type\ngettime - get timer val elapsed\ngo - start application at address 'addr'\nhelp - print command description/usage\nide - IDE sub-system\niminfo - print header information for application image\nimxtract - extract a part of a multi-image\ninterrupts- enable or disable interrupts\niod - IO space display\niow - IO space modify\nirqinfo - print information about IRQs\nitest - return true/false on integer compare\nlcdputs - print string on video framebuffer\nln - Create a symbolic link\nload - load binary file from a filesystem\nloadb - load binary file over serial line (kermit mode)\nloads - load S-Record file over serial line\nloadx - load binary file over serial line (xmodem mode)\nloady - load binary file over serial line (ymodem mode)\nloop - infinite loop on address range\nls - list files in a directory (default /)\nmd - memory display\nmii - MII utility commands\nmm - memory modify (auto-incrementing address)\nmtrr - Use x86 memory type range registers (32-bit only)\nmw - memory write (fill)\nnm - memory modify (constant address)\nnvme - NVM Express sub-system\npart - disk partition related commands\npci - list and access PCI Configuration Space\nping - send ICMP ECHO_REQUEST to network host\nprintenv - print environment variables\npxe - commands to get and boot from pxe files\nqfw - QEMU firmware interface\nreset - Perform RESET of the CPU\nrun - run commands in an environment variable\nsave - save file to a filesystem\nscsi - SCSI sub-system\nscsiboot - boot from SCSI device\nsetcurs - set cursor position within screen\nsetenv - set environment variables\nsf - SPI flash sub-system\nshowvar - print local hushshell variables\nsize - determine a file's size\nsleep - delay execution for some time\nsource - run script from memory\nsspi - SPI utility command\nsysboot - command to get and boot from syslinux files\ntest - minimal test like /bin/sh\ntftpboot - boot image via network using TFTP protocol\ntime - run commands and summarize execution time\ntrue - do nothing, successfully\nusb - USB sub-system\nusbboot - boot from USB device\nversion - print monitor, compiler and linker version\nvirtio - virtio block devices sub-system\nzboot - Boot bzImage"),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"error-loading-uncompressed-kernel-without-pvh-elf-note"},"Error loading uncompressed kernel without PVH ELF Note"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-machine type=pc-i440fx-3.1")))}c.isMDXComponent=!0}}]);