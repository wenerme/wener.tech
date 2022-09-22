"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87187],{49613:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},o),{},{components:n})):r.createElement(k,l({ref:t},o))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(96600),i=n(27279),a=(n(59496),n(49613)),l=["components"],u={title:"USB"},s="USB",p={unversionedId:"os/linux/sys/usb",id:"os/linux/sys/usb",title:"USB",description:"- libusb",source:"@site/../notes/os/linux/sys/usb.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/usb",permalink:"/notes/os/linux/sys/usb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/sys/usb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"USB"},sidebar:"docs",previous:{title:"sysctl",permalink:"/notes/os/linux/sys/sysctl"},next:{title:"util-linux",permalink:"/notes/os/linux/util-linux"}},o={},m=[{value:"usbids",id:"usbids",level:2},{value:"\u52a0\u5bc6\u72d7",id:"\u52a0\u5bc6\u72d7",level:2},{value:"sniffing",id:"sniffing",level:2},{value:"usbip",id:"usbip",level:2},{value:"usbredir",id:"usbredir",level:2},{value:"usbkey",id:"usbkey",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usb"},"USB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"libusb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gregkh/usbutils"},"gregkh/usbutils"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbutils"},"edge/main/x86_64/usbutils")),(0,a.kt)("li",{parentName:"ul"},"usb-devices"),(0,a.kt)("li",{parentName:"ul"},"usbhid-dump"),(0,a.kt)("li",{parentName:"ul"},"lsusb"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.draisberghof.de/usb_modeswitch/"},"usb-modeswitch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usb-modeswitch"},"edge/main/x86_64/usb-modeswitch")),(0,a.kt)("li",{parentName:"ul"},"usb_modeswitch"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.usblyzer.com/usb-topology.htm"},"USB Topology"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u8bbe\u5907\u6811\nlsusb -t\n# \u67e5\u770b\u5355\u4e2a\u8bbe\u5907\nlsusb -s 2:2\n# \u8bbe\u5907\u8be6\u7ec6\u4fe1\u606f\n# bcdUSB USB version of the port\nlsusb -s 2:2 -vvv\n")),(0,a.kt)("h2",{id:"usbids"},"usbids"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.linux-usb.org/usb-ids.html"},"http://www.linux-usb.org/usb-ids.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O http://www.linux-usb.org/usb.ids\n")),(0,a.kt)("h2",{id:"\u52a0\u5bc6\u72d7"},"\u52a0\u5bc6\u72d7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_protection_dongle"},"Software protection dongle")),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u5168\u4ee4\u724c/",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Security_token"},"Security token"))),(0,a.kt)("h2",{id:"sniffing"},"sniffing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://freeusbanalyzer.com/"},"Free USB Analyzer")),(0,a.kt)("li",{parentName:"ul"},"Wireshark ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.wireshark.org/CaptureSetup/USB"},"USB capture")),(0,a.kt)("li",{parentName:"ul"},"Linux module ",(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/usb/usbmon.txt"},"usbmon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://tjworld.net/wiki/Linux/Ubuntu/USBmonitoring"},"USB Monitoring"))),(0,a.kt)("h2",{id:"usbip"},"usbip"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/usb/usbip_protocol.txt"},"usbip_protocol"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/readme/tools-usb-usbip-README"},"tools-usb-usbip-README"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/torvalds/linux/tree/master/tools/usb/usbip"},"tools/usb/usbip")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7684 usbip \u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"2017 \u5e74\u4f3c\u4e4e\u6709\u4e9b\u4fee\u6539"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://web.archive.org/web/20160403200320/http://blog.3mdeb.com/2015/10/27/linux/"},"Linux, RPi and USB over IP updated"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"usbip-utils"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/tree/master/unmaintained/usbip-utils"},"unmaintained/usbip-utils")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wireless_USB"},"https://en.wikipedia.org/wiki/Wireless_USB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"usbip-vhci"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5185\u6838\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u865a\u62df USB Host Controller \u7528\u4e8e\u4ece\u8fdc\u7a0b\u5bfc\u5165\u8bbe\u5907"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"usbip-host (stub driver)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8bbe\u5907\u9a71\u52a8\u7ed1\u5b9a\u5230\u7269\u7406 USB \u8bbe\u5907, \u4f7f\u5f97\u8bbe\u5907\u53ef\u88ab\u66b4\u9732"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"usbip-vudc"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u865a\u62df\u7684 USB Device Controller, \u5c06\u4f7f\u7528 USB Gadget Subsystem \u521b\u5efa\u7684\u8bbe\u5907\u8fdb\u884c\u66b4\u9732"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"usbip-utils"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u5de5\u5177"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u7ba1\u7406\u548c\u5904\u7406\u94fe\u63a5")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5185\u6838\u914d\u7f6e\ngrep USBIP /boot/config*\n# \u5982\u679c\u4e0a\u9762\u7684\u914d\u7f6e, \u5219\u52a0\u8f7d configs \u67e5\u770b\nmodprobe configs\nzcat /proc/config.gz |grep USBIP\n# CONFIG_USBIP_CORE=m\n# CONFIG_USBIP_VHCI_HCD=m\n# CONFIG_USBIP_HOST=m\n\n# \u670d\u52a1\u7aef\n# ==========\n# \u52a0\u8f7d\u5185\u6838\u6a21\u5757\nmodprobe usbip-core\nmodprobe usbip-host\n# \u542f\u52a8\u670d\u52a1\u7aef\nusbipd -D\n# \u67e5\u770b\u8bbe\u5907\nusbip list -l\n# \u7ed1\u5b9a\u66b4\u9732\nusbip --debug bind -b 1-1.2\n# \u67e5\u770b\u7aef\u53e3\u4fe1\u606f\n# \u88ab\u8fdc\u7a0b\u6302\u8f7d\u540e\u4f1a\u663e\u793a\u76f8\u5173\u4fe1\u606f\nusbip port\n# \u53d6\u6d88\u7ed1\u5b9a\nusbip unbind -b 1-1.3\n\n# \u5ba2\u6237\u7aef\n# ==========\n# \u67e5\u770b\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u66b4\u9732\u7684\u8bbe\u5907\nusbip list -r 192.168.0.1\n# \u52a0\u8f7d\u5185\u6838\nmodprobe vhci-hcd\n# \u6302\u8f7d\u8fdc\u7a0b\u8bbe\u5907\nusbip attach -r 192.168.0.1 -b 1-1.3\n# \u67e5\u770b\u8fdc\u7a0b\u7684\u5206\u533a\u4fe1\u606f\n# \u5047\u8bbe\u6302\u8f7d\u540e\u7684\u8bbe\u5907\u4e3a /dev/sdd\nfdisk -l /dev/sdd\n# \u5378\u8f7d\nusbip detach -p 0\n")),(0,a.kt)("h2",{id:"usbredir"},"usbredir"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SPICE/usbredir"},"SPICE/usbredir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbredir-server"},"edge/main/x86_64/usbredir-server"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OliRead/usbdmx"},"https://github.com/OliRead/usbdmx"),"\nA versatile USB DMX library written in Go for programatic show control and special effects."),(0,a.kt)("p",null,"echi hdc\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)"},"https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Message_Signaled_Interrupts"},"https://en.wikipedia.org/wiki/Message_Signaled_Interrupts")),(0,a.kt)("h2",{id:"usbkey"},"usbkey"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BOC")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/dev/sr0"),(0,a.kt)("li",{parentName:"ul"},"mnt/Setup.exe")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usb 1-8: new full-speed USB device number 4 using xhci_hcd\nusb 1-8: New USB device found, idVendor=096e, idProduct=070a\nusb 1-8: New USB device strings: Mfr=1, Product=2, SerialNumber=0\nusb 1-8: Product: FT Interpass3000\nusb 1-8: Manufacturer: FS\nusb-storage 1-8:1.0: USB Mass Storage device detected\nscsi host7: usb-storage 1-8:1.0\nscsi 7:0:0:0: CD-ROM            FT BOC   Interpass3000    1.00 PQ: 0 ANSI: 2\nsr 7:0:0:0: [sr0] scsi3-mmc drive: 0x/0x caddy\ncdrom: Uniform CD-ROM driver Revision: 3.20\nsr 7:0:0:0: Attached scsi CD-ROM sr0\n")))}d.isMDXComponent=!0}}]);