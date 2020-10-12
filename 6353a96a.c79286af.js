(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{255:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return O}));var a=n(2),b=n(7),l=(n(0),n(557)),r={id:"alpine-boot",title:"Alpin Boot"},i={unversionedId:"ops/os/alpine/alpine-boot",id:"ops/os/alpine/alpine-boot",isDocsHomePage:!1,title:"Alpin Boot",description:"Alpin Boot",source:"@site/contents/notes/ops/os/alpine/alpine-boot.md",slug:"/ops/os/alpine/alpine-boot",permalink:"/notes/ops/os/alpine/alpine-boot",version:"current",sidebar:"docs",previous:{title:"Alpine local backup",permalink:"/notes/ops/os/alpine/alpine-lbu"},next:{title:"\u7248\u672c\u5386\u53f2",permalink:"/notes/ops/os/alpine/alpine-version"}},c=[{value:"Tips",id:"tips",children:[]},{value:"syslinux",id:"syslinux",children:[{value:"/etc/update-extlinux.conf",id:"etcupdate-extlinuxconf",children:[]}]},{value:"mkinitfs",id:"mkinitfs",children:[{value:"initramfs",id:"initramfs",children:[]}]},{value:"inittab",id:"inittab",children:[]}],p={rightToc:c};function O(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"alpin-boot"},"Alpin Boot"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u987a\u5e8f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"POST - \u786c\u4ef6\u81ea\u68c0"),Object(l.b)("li",{parentName:"ul"},"BIOS"),Object(l.b)("li",{parentName:"ul"},"mbr/gpt"),Object(l.b)("li",{parentName:"ul"},"syslinux/grub - loader",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sh"))),Object(l.b)("li",{parentName:"ul"},"initramfs-init",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'/bin/busybox switch_root $sysroot $chart_init "$KOPT_init" $KOPT_init_args')))),Object(l.b)("li",{parentName:"ul"},"/sbin/init",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"busybox init",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/inittab")))))),Object(l.b)("li",{parentName:"ul"},"/sbin/openrc - ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/init.d"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sysinit",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"devfs dmesg hwdrivers mdev"))),Object(l.b)("li",{parentName:"ul"},"boot",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"bootmisc hostname hwclock loadkmap modules swap sysctl syslog"))),Object(l.b)("li",{parentName:"ul"},"default")))))),Object(l.b)("h2",{id:"syslinux"},"syslinux"),Object(l.b)("h3",{id:"etcupdate-extlinuxconf"},"/etc/update-extlinux.conf"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),'# \u8986\u76d6 - \u5426\u5219\u5199\u5165\u5230 /boot/extlinux.conf.new\noverwrite=1\n# vesamenu.c32 - serial \u4e0d\u652f\u6301\nvesa_menu=0\n\n# \u9ed8\u8ba4\u5185\u6838\u53c2\u6570\n# \u4f8b\u5982 cryptroot=UUID=5f68e5dc-3e88-4fa4-ad0b-4f47a0190000 cryptdm=cryptroot\ndefault_kernel_opts="nomodeset quiet rootfstype=ext4"\n# \u5728\u5207\u6362 root \u524d\u52a0\u8f7d\u7684\u6a21\u5757\nmodules=sd-mod,usb-storage,ext4\n# roofs - \u9ed8\u8ba4 blkid -o export /dev/root\nroot=UUID=58364fae-49ec-0000-0000-16698934f7e2\n\n# \u9ed8\u8ba4\u5185\u6838\ndefault=lts\n\nverbose=0\n\n# \u9690\u85cf\u542f\u52a8\u83dc\u5355\nhidden=1\n# \u542f\u52a8\u7b49\u5f85\u65f6\u95f4\ntimeout=3\n\n\n# \u4e32\u53e3\u53f7 - \u6ca1\u6709\u5219\u7981\u7528\nserial_port=\n# serial_baud\n# the baudrate for the serial port. Will use 115200 if unset\nserial_baud=115200\n\n# xen_opts\n# options to hand to xen hypervisor, useful ones are:\n#    dom0_mem=256M (give domain-0 environment 256M ram)\nxen_opts=dom0_mem=256M\n\n# \u590d\u5236 /usr/share/syslinux/reboot.c32 \u5230 /boot/ \u4f1a\u751f\u6210 reboot \u83dc\u5355\n\n# \u4ece /usr/share/syslinux/ \u590d\u5236 hdt.c32, libgpl.c32, \u548c libmenu.c32\n# \u5230 /boot/, \u4f1a\u751f\u6210 HDT \u83dc\u5355\n\n# \u5b89\u88c5 /boot/memtest, \u4e14\u542f\u7528\u4e86 HDT\uff0c\u5219\u4f1a\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u751f\u6210\u989d\u5916\u7684 memtest \u83dc\u5355\n\n# \u5bc6\u7801 - \u4f8b\u5982\u4f7f\u7528 mkpasswd \u751f\u6210 SHA512 \u5bc6\u7801\n# \u8bbe\u7f6e\u4e86\u5bc6\u7801\u8bb0\u5f97\u4fee\u6539\u8be5\u6587\u4ef6\u6743\u9650 600\n#\n# \u8bbe\u7f6e\u4e86\u5bc6\u7801\u83dc\u5355\u4e0d\u80fd\u7f16\u8f91\uff0cHDT\u53d7\u5bc6\u7801\u4fdd\u62a4\n# \u4e5f\u53ef\u4ee5\u5728 /etc/update-extlinux.d/ \u914d\u7f6e "MENU PASSWD"\npassword=\'\'\n')),Object(l.b)("h2",{id:"mkinitfs"},"mkinitfs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/alpinelinux/mkinitfs"}),"alpinelinux/mkinitfs"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mkinitfs -L")," - \u7279\u6027 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/alpinelinux/mkinitfs/tree/master/features.d"}),"features.d")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/mkinitfs/mkinitfs.conf")," - \u9ed8\u8ba4 ",Object(l.b)("inlineCode",{parentName:"li"},"ata base ide scsi usb virtio ext4")))),Object(l.b)("li",{parentName:"ul"},"features",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cryptsetup",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"LUKS"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"apk add cryptsetup")),Object(l.b)("li",{parentName:"ul"},"append ",Object(l.b)("inlineCode",{parentName:"li"},"cryptroot=UUID=<UUID>")))))),Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840\u6587\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/usr/share/mkinitfs"),Object(l.b)("li",{parentName:"ul"},"/etc/mkinitfs/features.d"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/alpinelinux/mkinitfs/blob/master/mkinitfs.in"}),"mkinitfs"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"source \u914d\u7f6e\u6587\u4ef6")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u6240\u6709\u7279\u6027\nmkinitfs -L\n\n# \u81ea\u5b9a\u4e49\u7279\u6027\napk --root /mnt add dmidecode\nchroot /mnt which dmidecode > /mnt/etc/mkinitfs/features.d/dmidecode.files\n\n# \u65b0\u589e\u7279\u6027\n# \u5e38\u89c1\u9ed8\u8ba4\u503c\n# features="ata base ide scsi usb virtio ext4"\nsed -i -r "s/^(features)=\\"([^\\"]*)\\"/\\1=\\"\\2 dmidecode\\"/" /mnt/etc/mkinitfs/mkinitfs.conf\n\n# \u67e5\u770b\u9664\u5185\u6838\u4e4b\u5916\u7684\u6587\u4ef6\u5217\u8868\nmkinitfs -l -n -c /mnt/etc/mkinitfs/mkinitfs.conf -b /mnt/ $(ls /mnt/lib/modules/)\n\n# chroot \u5b89\u88c5\nmkinitfs -c /mnt/etc/mkinitfs/mkinitfs.conf -b /mnt/ $(ls /mnt/lib/modules/)\n\n# \u4e0d\u8bbe\u7f6e -P \u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u4e3b\u673a\u7684 features.d\n# \u4e0d\u8bbe\u7f6e -i \u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u4e3b\u673a\u7684 initramfs-init\nmkinitfs -P /mnt/etc/mkinitfs/features.d -c /mnt/etc/mkinitfs/mkinitfs.conf -i /mnt/usr/share/mkinitfs/initramfs-init -b /mnt/ $(ls /mnt/lib/modules/)\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"usage: mkinitfs [-hkKLln] [-b basedir] [-c configfile] [-F features] [-f fstab]\n        [-C initramfs compression] [-i initfile] [-o outfile]\n        [-P featuresdir] [-t tempdir] [kernelversion]\noptions:\n    -b  prefix files and kernel modules with basedir\n    -c  use configfile instead of /etc/mkinitfs/mkinitfs.conf\n    -C  initramfs compression (gzip|xz defaults to gzip)\n    -f  use fstab instead of /usr/share/mkinitfs/fstab\n    -F  use specified features\n    -h  print this help\n    -i  use initfile as init instead of /usr/share/mkinitfs/initramfs-init\n    -k  keep tempdir\n    -K  copy also host keys to initramfs\n    -l  only list files that would have been used\n    -L  list available features\n    -n  don't include kernel modules or firmware\n    -o  set another outfile\n    -P  prepend features.d search path\n    -q  Quiet mode\n    -s  Include modloop signature\n    -t  use tempdir when creating initramfs image\n")),Object(l.b)("h3",{id:"initramfs"},"initramfs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/usr/share/mkinitfs/initramfs-init"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in"}),"initramfs-init"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6838\u5fc3\u542f\u52a8\u903b\u8f91"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u5b8c\u6210\u540e\u8fdb\u884c switch root ",Object(l.b)("inlineCode",{parentName:"li"},'/bin/busybox switch_root $sysroot $chart_init "$KOPT_init" $KOPT_init_args')),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u65b9\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6709 root",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6302\u8f7d"),Object(l.b)("li",{parentName:"ul"},"switch_root"))),Object(l.b)("li",{parentName:"ul"},"\u65e0 root",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"apkvol - \u5c1d\u8bd5\u6784\u5efa root",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672c\u5730\u6216\u8fdc\u7a0b"))),Object(l.b)("li",{parentName:"ul"},"\u65e0\u76d8\u6a21\u5f0f")))))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"opt"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"defaul"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BOOTIF"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"alpine_dev"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"alpine_repo"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"auto")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"http://..."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"alpine_start"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"apkovl"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"autodetect"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"autoraid"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"blacklist"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/etc/modprobe.d/boot-opt-blacklist.conf"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"chart"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bootchart")," logging")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptdiscards"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -D")," - allow discards on crypto device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptdm"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -m")," - use CRYPTNAME name for crypto device mapping")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptheader"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptkey"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -k ${cryptkey:-/crypto_keyfile.bin}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptoffset"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -o")," - cryptsetup payload offset")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cryptroot"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -c")," - run cryptsetup luksOpen when CRYPTDEVICE is found")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dasd"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"modprobe ",Object(l.b)("inlineCode",{parentName:"td"},"dasd_mod dasd_eckd_mod dasd_fba_mod"),Object(l.b)("br",null),Object(l.b)("inlineCode",{parentName:"td"},"/sys/bus/ccw/devices/${dash}/online"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"debug_init"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"set -x"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dma"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"init"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/sbin/init")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"init_args"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ip"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"keep_apk_new"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"modules"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"${rootfstype} loop squashfs")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"nbd"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"overlaytmpfs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mount root ro, tmpfs root rw,")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ovl_dev"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pkgs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"quiet"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dmesg -n 1"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resume"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/sys/power/resume"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"root"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"root_size"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"tmpfs sysroot,\u4f7f\u7528 rootflags ",Object(l.b)("inlineCode",{parentName:"td"},",size="))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rootflags"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ro"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rootfstype"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"ext4"),", ",Object(l.b)("inlineCode",{parentName:"td"},"zfs"),", ",Object(l.b)("inlineCode",{parentName:"td"},"btrfs"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"s390x_net"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"modprobe ",Object(l.b)("inlineCode",{parentName:"td"},"qeth qeth_l2 qeth_l3"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"single,s,1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SINGLEMODE",Object(l.b)("br",null),"\u6709 root\uff0c\u76f4\u63a5\u8fdb\u5165 sh\uff0c\u4e0d\u6302\u8f7d",Object(l.b)("br",null)," \u65e0 root\uff0c\u53ef\u80fd\u542f\u52a8\u7f51\u7edc\u548c\u6302\u8f7d\u8bbe\u5907\u540e\u8fdb\u5165 sh")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"splash"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u65e0 root \u65f6, \u9ed8\u8ba4\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"td"},"/media/*/fbsplash.ppm"),",",Object(l.b)("inlineCode",{parentName:"td"},"/media/*/fbsplash$num.ppm"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ssh_key"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"usbdelay"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"nlplug-findfs -t")," delay, second")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6392\u5e8f: ",Object(l.b)("inlineCode",{parentName:"p"},"pbpaste | sort | pbcopy"))),Object(l.b)("h2",{id:"inittab"},"inittab"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"debian ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://manpages.debian.org/jessie/sysvinit-core/inittab.5.en.html"}),"inittab.5"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"<id>:<runlevels>:<action>:<process>\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"busybox \u6ca1\u6709 runlevels")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"id - \u547d\u4ee4\u7ec8\u7aef"),Object(l.b)("li",{parentName:"ul"},"action - \u8fd0\u884c\u6761\u4ef6"),Object(l.b)("li",{parentName:"ul"},"program - \u7a0b\u5e8f")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"action"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"respawn"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u81ea\u52a8\u91cd\u542f\uff0c\u4f8b\u5982 getty")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"wait"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runlevel \u8fdb\u5165 init \u540e\u7b49\u5f85\u8be5\u8fdb\u7a0b\u5b8c\u6210")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"once"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runlevel \u8fdb\u5165 \u540e\u6267\u884c\u4e00\u6b21")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boot"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5ffd\u7565 runlevel\uff0cboot \u65f6\u6267\u884c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bootwait"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5ffd\u7565 runlevel\uff0cboot \u65f6\u6267\u884c\uff0c\u7b49\u5f85 init \u5b8c\u6210")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"off"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e0d\u505a\u4efb\u4f55\u4e8b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ondemand"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u6309\u9700\u7684 runlevel\uff0c\u8c03\u7528\u5230 runlevel \u65f6\u6267\u884c\uff0ca\u3001b\u3001c runlevel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initdefault"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boot \u540e\u8fdb\u5165\u7684\u9ed8\u8ba4 init\uff0c\u4e0d\u5b58\u5728\u5219\u8be2\u95ee runlevel\uff0c\u5ffd\u7565 process")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sysinit"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boot \u540e\u8fdb\u5165\u7a0b\u5e8f\uff0c\u5728 boot \u548c botwait \u4e4b\u524d\u6267\u884c\uff0c\u5ffd\u7565 runlevel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"powerwait"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5173\u95ed\u7535\u6e90\u65f6\u6267\u884c\uff0c\u4e00\u822c\u7528\u4e8e USP \u901a\u4fe1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"powerfail"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u4f3c\u4e8e powerwait\uff0c\u4f46\u4e0d\u7b49\u5f85\u5b8c\u6210")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"powerokwait"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"init \u88ab\u544a\u77e5\u7535\u6e90\u6062\u590d\u65f6\u6267\u884c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"powerfailnow"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u544a\u77e5 init \u5916\u90e8 UPS \u6ca1\u7535\u4e86")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ctrlaltdel"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SIGINT \u4fe1\u53f7\uff0c",Object(l.b)("inlineCode",{parentName:"td"},"CTRL-ALT-DEL"),"\uff0c\u7528\u4e8e\u91cd\u542f\u548c\u5173\u673a\u573a\u666f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kbrequest"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"init \u5904\u7406\u5feb\u6377\u952e\u7ec4\u5408\uff0c\u9700\u8981\u6620\u5c04 KeyboardSignal\uff0c\u4f7f\u7528 keymaps \u6587\u4ef6")))),Object(l.b)("p",null,"\u9ed8\u8ba4 AlpineLinux inittab \u914d\u7f6e"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/inittab")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ini"}),"::sysinit:/sbin/openrc sysinit\n::sysinit:/sbin/openrc boot\n::wait:/sbin/openrc default\n\n# Set up a couple of getty's\ntty1::respawn:/sbin/getty 38400 tty1\ntty2::respawn:/sbin/getty 38400 tty2\ntty3::respawn:/sbin/getty 38400 tty3\ntty4::respawn:/sbin/getty 38400 tty4\ntty5::respawn:/sbin/getty 38400 tty5\ntty6::respawn:/sbin/getty 38400 tty6\n\n# Put a getty on the serial port\n#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100\n\n# Stuff to do for the 3-finger salute\n::ctrlaltdel:/sbin/reboot\n\n# Stuff to do before rebooting\n::shutdown:/sbin/openrc shutdown\n")))}O.isMDXComponent=!0},557:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return d}));var a=n(0),b=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,b=function(t,e){if(null==t)return{};var n,a,b={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var p=b.a.createContext({}),O=function(t){var e=b.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=O(t.components);return b.a.createElement(p.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},m=b.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,r=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),o=O(n),m=a,d=o["".concat(r,".").concat(m)]||o[m]||j[m]||l;return n?b.a.createElement(d,i(i({ref:e},p),{},{components:n})):b.a.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);