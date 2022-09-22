"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62352],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var i=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},l=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),l=d(t),p=a,b=l["".concat(c,".").concat(p)]||l[p]||u[p]||s;return t?i.createElement(b,o(o({ref:n},m),{},{components:t})):i.createElement(b,o({ref:n},m))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=l;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<s;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}l.displayName="MDXCreateElement"},97695:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var i=t(96600),a=t(27279),s=(t(59496),t(49613)),o=["components"],r={id:"qemu-monitor",title:"QEMU\u76d1\u89c6\u5668"},c="QEMU Monitor",d={unversionedId:"os/virt/qemu-monitor",id:"os/virt/qemu-monitor",title:"QEMU\u76d1\u89c6\u5668",description:"* QEMU Monitor",source:"@site/notes/os/virt/qemu-monitor.md",sourceDirName:"os/virt",slug:"/os/virt/qemu-monitor",permalink:"/notes/os/virt/qemu-monitor",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-monitor.md",tags:[],version:"current",frontMatter:{id:"qemu-monitor",title:"QEMU\u76d1\u89c6\u5668"},sidebar:"docs",previous:{title:"Qemu Image",permalink:"/notes/os/virt/qemu-img"},next:{title:"QEMU QMP",permalink:"/notes/os/virt/qemu-qmp"}},m={},u=[{value:"\u78c1\u76d8\u70ed\u63d2\u62d4",id:"\u78c1\u76d8\u70ed\u63d2\u62d4",level:2},{value:"help",id:"help",level:2}],l={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"qemu-monitor"},"QEMU Monitor"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.qemu.org/docs/master/system/monitor.html"},"QEMU Monitor")),(0,s.kt)("li",{parentName:"ul"},"wikibooks ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikibooks.org/wiki/QEMU/Monitor"},"QEMU/Monitor")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/cn/linux/l-cn-qemu-monitor/"},"\u4f7f\u7528 monitor command \u76d1\u63a7 QEMU \u8fd0\u884c\u72b6\u6001")),(0,s.kt)("li",{parentName:"ul"},"\u5982\u4f55\u8bbf\u95ee Monitor",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"curses",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Esc+1, Esc+2"))),(0,s.kt)("li",{parentName:"ul"},"nographic",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Ctrl+a c"))),(0,s.kt)("li",{parentName:"ul"},"graphic",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Ctrl+Alt+2"))),(0,s.kt)("li",{parentName:"ul"},"stdio\n",(0,s.kt)("inlineCode",{parentName:"li"},"-monitor stdio")))),(0,s.kt)("li",{parentName:"ul"},"\u76f8\u5173\u9009\u9879")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"-monitor dev\nRedirect the monitor to host device dev (same devices as the serial port). The default device is vc in graphical mode and stdio in non graphical mode. Use -monitor none to disable the default monitor.\n\n-qmp dev\nLike -monitor but opens in \u2019control\u2019 mode.\n\n-qmp-pretty dev\nLike -qmp but uses pretty JSON formatting.\n\n-mon [chardev=]name[,mode=readline|control][,pretty[=on|off]]\nSetup monitor on chardev name. pretty turns on JSON pretty printing easing human reading and debugging.\n\n-debugcon dev\nRedirect the debug console to host device dev (same devices as the serial port). The debug console is an I/O port which is typically port 0xe9; writing to that I/O port sends output to this device. The default device is vc in graphical mode and stdio in non graphical mode.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# telnet \u76d1\u542c\nqemu-system-i386 -monitor telnet:127.0.0.1:55555,server,nowait;\necho system_powerdown |telnet 127.0.0.1 55555\n# tcp \u76d1\u542c\nqemu-system-i386 -monitor tcp:127.0.0.1:55555,server,nowait;\necho 'info kvm' |nc -N 127.0.0.1 55555\necho system_powerdown |nc -N 127.0.0.1 55555\n\n# unix\n# -qmp JSON \u534f\u8bae\nqemu-system-i386 monitor unix:qemu-monitor-socket,server,nowai\nsocat -,echo=0,icanon=0 unix-connect:qemu-monitor-socket\n\necho \"info status\" | socat - unix-connect:qemu-monitor-socket\necho \"info status\" | socat - unix-connect:qemu-monitor-socket | tail --lines=+2 | grep -v '^(qemu)'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7248\u672c\ninfo version\n\n# qemu -vnc :1,password\n# \u7ed9 VNC \u8bbe\u7f6e\u5bc6\u7801\nchange vnc password\n\n# qemu -S\n# \u9ed8\u8ba4\u4e0d\u542f\u52a8 cpu, \u624b\u52a8\u542f\u52a8\nc\n")),(0,s.kt)("p",null,"system_powerdown"),(0,s.kt)("p",null,"qemu-system-i386 -net nic,model=rtl8139 -net user,hostfwd=tcp::3389-:3389 -redir tcp:443::443 -redir tcp:992::992 -redir tcp:1194::1194 -redir tcp:5555::5555 -redir udp:1194::1194 -redir udp:500::500 -redir udp:4500::4500 -m 512M -localtime -cpu core2duo,+nx -smp 2 -usbdevice tablet -k en-us -hda win.img -nographic"),(0,s.kt)("h2",{id:"\u78c1\u76d8\u70ed\u63d2\u62d4"},"\u78c1\u76d8\u70ed\u63d2\u62d4"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://wiki.ubuntu.com/QemuDiskHotplug"},"https://wiki.ubuntu.com/QemuDiskHotplug")),(0,s.kt)("p",null,"-usb"),(0,s.kt)("p",null,"device_add usb-ehci"),(0,s.kt)("p",null,"drive_add 0 file=hotplug.raw,format=raw,if=none,id=usb_disk1\ndevice_add usb-storage,drive=usb_disk1,id=usb_disk11,removable=on\ndevice_del  usb_disk11\ndrive_del  usb_disk1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"drive_add [-n] [[<domain>:]<bus>:]<slot>\n[file=file][,if=type][,bus=n]\n[,unit=m][,media=d][,index=i]\n[,cyls=c,heads=h,secs=s[,trans=t]]\n[,snapshot=on|off][,cache=on|off]\n[,readonly=on|off][,copy-on-read=on|off] -- add drive to PCI storage controller\n")),(0,s.kt)("p",null,"device_add ?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Controller/Bridge/Hub devices:\nname "i82801b11-bridge", bus PCI\nname "ioh3420", bus PCI, desc "Intel IOH device id 3420 PCIE Root Port"\nname "pci-bridge", bus PCI, desc "Standard PCI Bridge"\nname "pci-bridge-seat", bus PCI, desc "Standard PCI Bridge (multiseat)"\nname "pcie-pci-bridge", bus PCI\nname "pcie-root-port", bus PCI, desc "PCI Express Root Port"\nname "pxb", bus PCI, desc "PCI Expander Bridge"\nname "pxb-pcie", bus PCI, desc "PCI Express Expander Bridge"\nname "usb-hub", bus usb-bus\nname "x3130-upstream", bus PCI, desc "TI X3130 Upstream Port of PCI Express Switch"\nname "xio3130-downstream", bus PCI, desc "TI X3130 Downstream Port of PCI Express Switch"\n\nUSB devices:\nname "ich9-usb-ehci1", bus PCI\nname "ich9-usb-ehci2", bus PCI\nname "ich9-usb-uhci1", bus PCI\nname "ich9-usb-uhci2", bus PCI\nname "ich9-usb-uhci3", bus PCI\nname "ich9-usb-uhci4", bus PCI\nname "ich9-usb-uhci5", bus PCI\nname "ich9-usb-uhci6", bus PCI\nname "nec-usb-xhci", bus PCI\nname "pci-ohci", bus PCI, desc "Apple USB Controller"\nname "piix3-usb-uhci", bus PCI\nname "piix4-usb-uhci", bus PCI\nname "qemu-xhci", bus PCI\nname "usb-ehci", bus PCI\nname "vt82c686b-usb-uhci", bus PCI\n\nStorage devices:\nname "am53c974", bus PCI, desc "AMD Am53c974 PCscsi-PCI SCSI adapter"\nname "dc390", bus PCI, desc "Tekram DC-390 SCSI adapter"\nname "floppy", bus floppy-bus, desc "virtual floppy drive"\nname "ich9-ahci", bus PCI, alias "ahci"\nname "ide-cd", bus IDE, desc "virtual IDE CD-ROM"\nname "ide-drive", bus IDE, desc "virtual IDE disk or CD-ROM (legacy)"\nname "ide-hd", bus IDE, desc "virtual IDE disk"\nname "isa-fdc", bus ISA\nname "isa-ide", bus ISA\nname "lsi53c810", bus PCI\nname "lsi53c895a", bus PCI, alias "lsi"\nname "megasas", bus PCI, desc "LSI MegaRAID SAS 1078"\nname "megasas-gen2", bus PCI, desc "LSI MegaRAID SAS 2108"\nname "nvme", bus PCI, desc "Non-Volatile Memory Express"\nname "piix3-ide", bus PCI\nname "piix3-ide-xen", bus PCI\nname "piix4-ide", bus PCI\nname "pvscsi", bus PCI\nname "scsi-cd", bus SCSI, desc "virtual SCSI CD-ROM"\nname "scsi-disk", bus SCSI, desc "virtual SCSI disk or CD-ROM (legacy)"\nname "scsi-hd", bus SCSI, desc "virtual SCSI disk"\nname "sdhci-pci", bus PCI\nname "usb-bot", bus usb-bus\nname "usb-mtp", bus usb-bus, desc "USB Media Transfer Protocol device"\nname "usb-storage", bus usb-bus\nname "usb-uas", bus usb-bus\nname "virtio-blk-device", bus virtio-bus\nname "virtio-blk-pci", bus PCI, alias "virtio-blk"\nname "virtio-scsi-device", bus virtio-bus\nname "virtio-scsi-pci", bus PCI, alias "virtio-scsi"\n\nNetwork devices:\nname "e1000", bus PCI, alias "e1000-82540em", desc "Intel Gigabit Ethernet"\nname "e1000-82544gc", bus PCI, desc "Intel Gigabit Ethernet"\nname "e1000-82545em", bus PCI, desc "Intel Gigabit Ethernet"\nname "e1000e", bus PCI, desc "Intel 82574L GbE Controller"\nname "i82550", bus PCI, desc "Intel i82550 Ethernet"\nname "i82551", bus PCI, desc "Intel i82551 Ethernet"\nname "i82557a", bus PCI, desc "Intel i82557A Ethernet"\nname "i82557b", bus PCI, desc "Intel i82557B Ethernet"\nname "i82557c", bus PCI, desc "Intel i82557C Ethernet"\nname "i82558a", bus PCI, desc "Intel i82558A Ethernet"\nname "i82558b", bus PCI, desc "Intel i82558B Ethernet"\nname "i82559a", bus PCI, desc "Intel i82559A Ethernet"\nname "i82559b", bus PCI, desc "Intel i82559B Ethernet"\nname "i82559c", bus PCI, desc "Intel i82559C Ethernet"\nname "i82559er", bus PCI, desc "Intel i82559ER Ethernet"\nname "i82562", bus PCI, desc "Intel i82562 Ethernet"\nname "i82801", bus PCI, desc "Intel i82801 Ethernet"\nname "ne2k_isa", bus ISA\nname "ne2k_pci", bus PCI\nname "pcnet", bus PCI\nname "rocker", bus PCI, desc "Rocker Switch"\nname "rtl8139", bus PCI\nname "usb-bt-dongle", bus usb-bus\nname "usb-net", bus usb-bus\nname "virtio-net-device", bus virtio-bus\nname "virtio-net-pci", bus PCI, alias "virtio-net"\nname "vmxnet3", bus PCI, desc "VMWare Paravirtualized Ethernet v3"\n\nInput devices:\nname "ipoctal232", bus IndustryPack, desc "GE IP-Octal 232 8-channel RS-232 IndustryPack"\nname "isa-parallel", bus ISA\nname "isa-serial", bus ISA\nname "pci-serial", bus PCI\nname "pci-serial-2x", bus PCI\nname "pci-serial-4x", bus PCI\nname "tpci200", bus PCI, desc "TEWS TPCI200 IndustryPack carrier"\nname "usb-braille", bus usb-bus\nname "usb-ccid", bus usb-bus, desc "CCID Rev 1.1 smartcard reader"\nname "usb-kbd", bus usb-bus\nname "usb-mouse", bus usb-bus\nname "usb-serial", bus usb-bus\nname "usb-tablet", bus usb-bus\nname "usb-wacom-tablet", bus usb-bus, desc "QEMU PenPartner Tablet"\nname "virtconsole", bus virtio-serial-bus\nname "virtio-keyboard-device", bus virtio-bus\nname "virtio-keyboard-pci", bus PCI, alias "virtio-keyboard"\nname "virtio-mouse-device", bus virtio-bus\nname "virtio-mouse-pci", bus PCI, alias "virtio-mouse"\nname "virtio-serial-device", bus virtio-bus\nname "virtio-serial-pci", bus PCI, alias "virtio-serial"\nname "virtio-tablet-device", bus virtio-bus\nname "virtio-tablet-pci", bus PCI, alias "virtio-tablet"\nname "virtserialport", bus virtio-serial-bus\n\nDisplay devices:\nname "cirrus-vga", bus PCI, desc "Cirrus CLGD 54xx VGA"\nname "isa-cirrus-vga", bus ISA\nname "isa-vga", bus ISA\nname "secondary-vga", bus PCI\nname "sga", bus ISA, desc "Serial Graphics Adapter"\nname "VGA", bus PCI\nname "virtio-gpu-device", bus virtio-bus\nname "virtio-gpu-pci", bus PCI, alias "virtio-gpu"\nname "virtio-vga", bus PCI\nname "vmware-svga", bus PCI\n\nSound devices:\nname "AC97", bus PCI, desc "Intel 82801AA AC97 Audio"\nname "adlib", bus ISA, desc "Yamaha YM3812 (OPL2)"\nname "cs4231a", bus ISA, desc "Crystal Semiconductor CS4231A"\nname "ES1370", bus PCI, desc "ENSONIQ AudioPCI ES1370"\nname "gus", bus ISA, desc "Gravis Ultrasound GF1"\nname "hda-duplex", bus HDA, desc "HDA Audio Codec, duplex (line-out, line-in)"\nname "hda-micro", bus HDA, desc "HDA Audio Codec, duplex (speaker, microphone)"\nname "hda-output", bus HDA, desc "HDA Audio Codec, output-only (line-out)"\nname "ich9-intel-hda", bus PCI, desc "Intel HD Audio Controller (ich9)"\nname "intel-hda", bus PCI, desc "Intel HD Audio Controller (ich6)"\nname "sb16", bus ISA, desc "Creative Sound Blaster 16"\nname "usb-audio", bus usb-bus\n\nMisc devices:\nname "at24c-eeprom", bus i2c-bus\nname "i6300esb", bus PCI\nname "ib700", bus ISA\nname "isa-applesmc", bus ISA\nname "isa-debug-exit", bus ISA\nname "isa-debugcon", bus ISA\nname "kvaser_pci", bus PCI, desc "Kvaser PCICANx"\nname "mioe3680_pci", bus PCI, desc "Mioe3680 PCICANx"\nname "pc-testdev", bus ISA\nname "pci-testdev", bus PCI, desc "PCI Test Device"\nname "pcm3680_pci", bus PCI, desc "Pcm3680i PCICANx"\nname "pvpanic", bus ISA\nname "tpm-crb"\nname "virtio-balloon-device", bus virtio-bus\nname "virtio-balloon-pci", bus PCI, alias "virtio-balloon"\nname "virtio-crypto-device", bus virtio-bus\nname "virtio-crypto-pci", bus PCI\nname "virtio-rng-device", bus virtio-bus\nname "virtio-rng-pci", bus PCI, alias "virtio-rng"\nname "vmcoreinfo"\nname "vmgenid"\n\nCPU devices:\nname "486-x86_64-cpu"\nname "athlon-x86_64-cpu"\nname "base-x86_64-cpu"\nname "Broadwell-IBRS-x86_64-cpu"\nname "Broadwell-noTSX-IBRS-x86_64-cpu"\nname "Broadwell-noTSX-x86_64-cpu"\nname "Broadwell-x86_64-cpu"\nname "Conroe-x86_64-cpu"\nname "core2duo-x86_64-cpu"\nname "coreduo-x86_64-cpu"\nname "EPYC-IBPB-x86_64-cpu"\nname "EPYC-x86_64-cpu"\nname "Haswell-IBRS-x86_64-cpu"\nname "Haswell-noTSX-IBRS-x86_64-cpu"\nname "Haswell-noTSX-x86_64-cpu"\nname "Haswell-x86_64-cpu"\nname "host-x86_64-cpu"\nname "IvyBridge-IBRS-x86_64-cpu"\nname "IvyBridge-x86_64-cpu"\nname "kvm32-x86_64-cpu"\nname "kvm64-x86_64-cpu"\nname "max-x86_64-cpu"\nname "n270-x86_64-cpu"\nname "Nehalem-IBRS-x86_64-cpu"\nname "Nehalem-x86_64-cpu"\nname "Opteron_G1-x86_64-cpu"\nname "Opteron_G2-x86_64-cpu"\nname "Opteron_G3-x86_64-cpu"\nname "Opteron_G4-x86_64-cpu"\nname "Opteron_G5-x86_64-cpu"\nname "Penryn-x86_64-cpu"\nname "pentium-x86_64-cpu"\nname "pentium2-x86_64-cpu"\nname "pentium3-x86_64-cpu"\nname "phenom-x86_64-cpu"\nname "qemu32-x86_64-cpu"\nname "qemu64-x86_64-cpu"\nname "SandyBridge-IBRS-x86_64-cpu"\nname "SandyBridge-x86_64-cpu"\nname "Skylake-Client-IBRS-x86_64-cpu"\nname "Skylake-Client-x86_64-cpu"\nname "Skylake-Server-IBRS-x86_64-cpu"\nname "Skylake-Server-x86_64-cpu"\nname "Westmere-IBRS-x86_64-cpu"\nname "Westmere-x86_64-cpu"\n\nUncategorized devices:\nname "amd-iommu", bus System\nname "AMDVI-PCI", bus PCI\nname "edu", bus PCI\nname "i8042", bus ISA\nname "igd-passthrough-isa-bridge", bus PCI, desc "ISA bridge faked to support IGD PT"\nname "intel-iommu", bus System\nname "ipmi-bmc-extern"\nname "ipmi-bmc-sim"\nname "isa-ipmi-bt", bus ISA\nname "isa-ipmi-kcs", bus ISA\nname "loader", desc "Generic Loader"\nname "mptsas1068", bus PCI, desc "LSI SAS 1068"\nname "nvdimm", desc "DIMM memory module"\nname "pc-dimm", desc "DIMM memory module"\nname "sd-card", bus sd-bus\nname "tpm-tis", bus ISA\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"drive_add 0 if=none,file=/tmp/test.img,format=raw,id=disk1\ninfo block\n")),(0,s.kt)("h2",{id:"help"},"help"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"acl_add aclname match allow|deny [index] -- add a match rule to the access control list\nacl_policy aclname allow|deny -- set default access control list policy\nacl_remove aclname match -- remove a match rule from the access control list\nacl_reset aclname -- reset the access control list\nacl_show aclname -- list rules in the access control list\nballoon target -- request VM to change its memory allocation (in MB)\nblock_job_cancel [-f] device -- stop an active background block operation (use -f\n             if you want to abort the operation immediately\n             instead of keep running until data is in sync)\nblock_job_complete device -- stop an active background block operation\nblock_job_pause device -- pause an active background block operation\nblock_job_resume device -- resume a paused background block operation\nblock_job_set_speed device speed -- set maximum speed for a background block operation\nblock_passwd block_passwd device password -- set the password of encrypted block devices\nblock_resize device size -- resize a block image\nblock_set_io_throttle device bps bps_rd bps_wr iops iops_rd iops_wr -- change I/O throttle limits for a block drive\nblock_stream device [speed [base]] -- copy data from a backing file into a block device\nboot_set bootdevice -- define new values for the boot device list\nchange device filename [format [read-only-mode]] -- change a removable medium, optional format\nchardev-add args -- add chardev\nchardev-change id args -- change chardev\nchardev-remove id -- remove chardev\nchardev-send-break id -- send a break on chardev\nclient_migrate_info protocol hostname port tls-port cert-subject -- set migration information for remote display\nclosefd closefd name -- close a file descriptor previously passed via SCM rights\ncommit device|all -- commit changes to the disk images (if -snapshot is used) or backing files\ncpu index -- set the default CPU\ncpu-add id -- add cpu\nc|cont  -- resume emulation\ndelvm tag|id -- delete a VM snapshot from its tag or id\ndevice_add driver[,prop=value][,...] -- add device, like -device on the command line\ndevice_del device -- remove device\ndrive_add [-n] [[<domain>:]<bus>:]<slot>\n[file=file][,if=type][,bus=n]\n[,unit=m][,media=d][,index=i]\n[,cyls=c,heads=h,secs=s[,trans=t]]\n[,snapshot=on|off][,cache=on|off]\n[,readonly=on|off][,copy-on-read=on|off] -- add drive to PCI storage controller\ndrive_backup [-n] [-f] [-c] device target [format] -- initiates a point-in-time\n            copy for a device. The device's contents are\n            copied to the new image file, excluding data that\n            is written after the command is started.\n            The -n flag requests QEMU to reuse the image found\n            in new-image-file, instead of recreating it from scratch.\n            The -f flag requests QEMU to copy the whole disk,\n            so that the result does not need a backing file.\n            The -c flag requests QEMU to compress backup data\n            (if the target format supports it).\n\ndrive_del device -- remove host block device\ndrive_mirror [-n] [-f] device target [format] -- initiates live storage\n            migration for a device. The device's contents are\n            copied to the new image file, including data that\n            is written after the command is started.\n            The -n flag requests QEMU to reuse the image found\n            in new-image-file, instead of recreating it from scratch.\n            The -f flag requests QEMU to copy the whole disk,\n            so that the result does not need a backing file.\n\ndump-guest-memory [-p] [-d] [-z|-l|-s] filename [begin length] -- dump guest memory into file 'filename'.\n            -p: do paging to get guest's memory mapping.\n            -d: return immediately (do not wait for completion).\n            -z: dump in kdump-compressed format, with zlib compression.\n            -l: dump in kdump-compressed format, with lzo compression.\n            -s: dump in kdump-compressed format, with snappy compression.\n            begin: the starting physical address.\n            length: the memory size, in bytes.\neject [-f] device -- eject a removable medium (use -f to force it)\nexpire_password protocol time -- set spice/vnc password expire-time\ngdbserver [device] -- start gdbserver on given device (default 'tcp::1234'), stop with 'none'\ngetfd getfd name -- receive a file descriptor via SCM rights and assign it a name\ngpa2hva addr -- print the host virtual address corresponding to a guest physical address\nhelp|? [cmd] -- show the help\nhostfwd_add [hub_id name]|[netdev_id] [tcp|udp]:[hostaddr]:hostport-[guestaddr]:guestport -- redirect TCP or UDP connections from host to guest (requires -net user)\nhostfwd_remove [hub_id name]|[netdev_id] [tcp|udp]:[hostaddr]:hostport -- remove host-to-guest TCP or UDP redirection\ni /fmt addr -- I/O port read\ninfo [subcommand] -- show various information about the system state\nloadvm tag|id -- restore a VM snapshot from its tag or id\nlog item1[,...] -- activate logging of the specified items\nlogfile filename -- output logs to 'filename'\nmce [-b] cpu bank status mcgstatus addr misc -- inject a MCE on the given CPU [and broadcast to other CPUs with -b option]\nmemsave addr size file -- save to disk virtual memory dump starting at 'addr' of size 'size'\nmigrate [-d] [-b] [-i] uri -- migrate to URI (using -d to not wait for completion)\n             -b for migration without shared storage with full copy of disk\n             -i for migration without shared storage with incremental copy of disk (base image shared between src and destination)\nmigrate_cancel  -- cancel the current VM migration\nmigrate_continue state -- Continue migration from the given paused state\nmigrate_incoming uri -- Continue an incoming migration from an -incoming defer\nmigrate_set_cache_size value -- set cache size (in bytes) for XBZRLE migrations,the cache size will be rounded down to the nearest power of 2.\nThe cache size affects the number of cache misses.In case of a high cache miss ratio you need to increase the cache size\nmigrate_set_capability capability state -- Enable/Disable the usage of a capability for migration\nmigrate_set_downtime value -- set maximum tolerated downtime (in seconds) for migrations\nmigrate_set_parameter parameter value -- Set the parameter for migration\nmigrate_set_speed value -- set maximum speed (in bytes) for migrations. Defaults to MB if no size suffix is specified, ie. B/K/M/G/T\nmigrate_start_postcopy  -- Followup to a migration command to switch the migration to postcopy mode. The postcopy-ram capability must be set on both source and destination before the original migration command .\nmouse_button state -- change mouse button state (1=L, 2=M, 4=R)\nmouse_move dx dy [dz] -- send mouse move events\nmouse_set index -- set which mouse device receives events\nnbd_server_add nbd_server_add [-w] device [name] -- export a block device via NBD\nnbd_server_remove nbd_server_remove [-f] name -- remove an export previously exposed via NBD\nnbd_server_start nbd_server_start [-a] [-w] host:port -- serve block devices on the given host and port\nnbd_server_stop nbd_server_stop -- stop serving block devices using the NBD protocol\nnetdev_add [user|tap|socket|vde|bridge|hubport|netmap|vhost-user],id=str[,prop=value][,...] -- add host network device\nnetdev_del id -- remove host network device\nnmi  -- inject an NMI\no /fmt addr value -- I/O port write\nobject_add [qom-type=]type,id=str[,prop=value][,...] -- create QOM object\nobject_del id -- destroy QOM object\npcie_aer_inject_error [-a] [-c] id <error_status> [<tlp header> [<tlp header prefix>]] -- inject pcie aer error\n             -a for advisory non fatal error\n             -c for correctable error\n            <id> = qdev device id\n            <error_status> = error string or 32bit\n            <tlb header> = 32bit x 4\n            <tlb header prefix> = 32bit x 4\npmemsave addr size file -- save to disk physical memory dump starting at 'addr' of size 'size'\np|print /fmt expr -- print expression value (use $reg for CPU register access)\nqemu-io [device] \"[command]\" -- run a qemu-io command on a block device\nqom-list path -- list QOM properties\nqom-set path property value -- set QOM property\nq|quit  -- quit the emulator\nringbuf_read device size -- Read from a ring buffer character device\nringbuf_write device data -- Write to a ring buffer character device\nsavevm [tag|id] -- save a VM snapshot. If no tag or id are provided, a new snapshot is created\nscreendump filename [device [head]] -- save screen from head 'head' of display device 'device' into PPM image 'filename'\nsendkey keys [hold_ms] -- send keys to the VM (e.g. 'sendkey ctrl-alt-f1', default hold time=100 ms)\nset_link name on|off -- change the link status of a network adapter\nset_password protocol password action-if-connected -- set spice/vnc password\nsinglestep [on|off] -- run emulation in singlestep mode or switch to normal mode\nsnapshot_blkdev [-n] device [new-image-file] [format] -- initiates a live snapshot\n            of device. If a new image file is specified, the\n            new image file will become the new root image.\n            If format is specified, the snapshot file will\n            be created in that format.\n            The default format is qcow2.  The -n flag requests QEMU\n            to reuse the image found in new-image-file, instead of\n            recreating it from scratch.\nsnapshot_blkdev_internal device name -- take an internal snapshot of device.\n            The format of the image used by device must\n            support it, such as qcow2.\n\nsnapshot_delete_blkdev_internal device name [id] -- delete an internal snapshot of device.\n            If id is specified, qemu will try delete\n            the snapshot matching both id and name.\n            The format of the image used by device must\n            support it, such as qcow2.\n\nstop  -- stop emulation\nstopcapture capture index -- stop capture\nsum addr size -- compute the checksum of a memory region\nsystem_powerdown  -- send system power down event\nsystem_reset  -- reset the system\nsystem_wakeup  -- wakeup guest from suspend\ntrace-event name on|off [vcpu] -- changes status of a specific trace event (vcpu: vCPU to set, default is all)\nwatchdog_action [reset|shutdown|poweroff|pause|debug|none] -- change watchdog action\nwavcapture path [frequency [bits [channels]]] -- capture audio to a wave file (default frequency=44100 bits=16 channels=2)\nx /fmt addr -- virtual memory dump starting at 'addr'\nx_colo_lost_heartbeat  -- Tell COLO that heartbeat is lost,\n            a failover or takeover is needed.\nxp /fmt addr -- physical memory dump starting at 'addr'\n")))}p.isMDXComponent=!0}}]);