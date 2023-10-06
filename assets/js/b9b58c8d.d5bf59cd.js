"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87187],{49613:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||i;return r?n.createElement(d,l(l({ref:t},o),{},{components:r})):n.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},37019:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&o(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),b=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"USB"},k="USB",f={unversionedId:"os/linux/sys/usb",id:"os/linux/sys/usb",title:"USB",description:"- libusb",source:"@site/../notes/os/linux/sys/usb.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/usb",permalink:"/notes/os/linux/sys/usb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/usb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"USB"},sidebar:"docs",previous:{title:"Trace",permalink:"/notes/os/linux/sys/trace"},next:{title:"zram",permalink:"/notes/os/linux/sys/zram"}},h={},g=[{value:"usbids",id:"usbids",level:2},{value:"\u52a0\u5bc6\u72d7",id:"\u52a0\u5bc6\u72d7",level:2},{value:"sniffing",id:"sniffing",level:2},{value:"usbip",id:"usbip",level:2},{value:"usbredir",id:"usbredir",level:2},{value:"usbkey",id:"usbkey",level:2}],N={toc:g},w="wrapper";function v(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(w,c(m(m({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"usb"}),"USB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"libusb"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/gregkh/usbutils"}),"gregkh/usbutils"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbutils"}),"edge/main/x86_64/usbutils")),(0,n.kt)("li",{parentName:"ul"},"usb-devices"),(0,n.kt)("li",{parentName:"ul"},"usbhid-dump"),(0,n.kt)("li",{parentName:"ul"},"lsusb"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.draisberghof.de/usb_modeswitch/"}),"usb-modeswitch"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usb-modeswitch"}),"edge/main/x86_64/usb-modeswitch")),(0,n.kt)("li",{parentName:"ul"},"usb_modeswitch"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.usblyzer.com/usb-topology.htm"}),"USB Topology"))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u8bbe\u5907\u6811\nlsusb -t\n# \u67e5\u770b\u5355\u4e2a\u8bbe\u5907\nlsusb -s 2:2\n# \u8bbe\u5907\u8be6\u7ec6\u4fe1\u606f\n# bcdUSB USB version of the port\nlsusb -s 2:2 -vvv\n")),(0,n.kt)("h2",m({},{id:"usbids"}),"usbids"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.linux-usb.org/usb-ids.html"}),"http://www.linux-usb.org/usb-ids.html"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"curl -O http://www.linux-usb.org/usb.ids\n")),(0,n.kt)("h2",m({},{id:"\u52a0\u5bc6\u72d7"}),"\u52a0\u5bc6\u72d7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Software_protection_dongle"}),"Software protection dongle")),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u4ee4\u724c/",(0,n.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Security_token"}),"Security token"))),(0,n.kt)("h2",m({},{id:"sniffing"}),"sniffing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://freeusbanalyzer.com/"}),"Free USB Analyzer")),(0,n.kt)("li",{parentName:"ul"},"Wireshark ",(0,n.kt)("a",m({parentName:"li"},{href:"https://wiki.wireshark.org/CaptureSetup/USB"}),"USB capture")),(0,n.kt)("li",{parentName:"ul"},"Linux module ",(0,n.kt)("a",m({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/usb/usbmon.txt"}),"usbmon")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://tjworld.net/wiki/Linux/Ubuntu/USBmonitoring"}),"USB Monitoring"))),(0,n.kt)("h2",m({},{id:"usbip"}),"usbip"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://www.kernel.org/doc/Documentation/usb/usbip_protocol.txt"}),"usbip_protocol"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://www.kernel.org/doc/readme/tools-usb-usbip-README"}),"tools-usb-usbip-README"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/torvalds/linux/tree/master/tools/usb/usbip"}),"tools/usb/usbip")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b0\u7684 usbip \u4ee3\u7801"),(0,n.kt)("li",{parentName:"ul"},"2017 \u5e74\u4f3c\u4e4e\u6709\u4e9b\u4fee\u6539"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"http://web.archive.org/web/20160403200320/http://blog.3mdeb.com/2015/10/27/linux/"}),"Linux, RPi and USB over IP updated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usbip-utils"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/alpinelinux/aports/tree/master/unmaintained/usbip-utils"}),"unmaintained/usbip-utils")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Wireless_USB"}),"https://en.wikipedia.org/wiki/Wireless_USB"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usbip-vhci"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5185\u6838\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u865a\u62df USB Host Controller \u7528\u4e8e\u4ece\u8fdc\u7a0b\u5bfc\u5165\u8bbe\u5907"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usbip-host (stub driver)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8bbe\u5907\u9a71\u52a8\u7ed1\u5b9a\u5230\u7269\u7406 USB \u8bbe\u5907, \u4f7f\u5f97\u8bbe\u5907\u53ef\u88ab\u66b4\u9732"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usbip-vudc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u865a\u62df\u7684 USB Device Controller, \u5c06\u4f7f\u7528 USB Gadget Subsystem \u521b\u5efa\u7684\u8bbe\u5907\u8fdb\u884c\u66b4\u9732"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"usbip-utils"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u7ba1\u7406\u548c\u5904\u7406\u94fe\u63a5")))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u5185\u6838\u914d\u7f6e\ngrep USBIP /boot/config*\n# \u5982\u679c\u4e0a\u9762\u7684\u914d\u7f6e, \u5219\u52a0\u8f7d configs \u67e5\u770b\nmodprobe configs\nzcat /proc/config.gz |grep USBIP\n# CONFIG_USBIP_CORE=m\n# CONFIG_USBIP_VHCI_HCD=m\n# CONFIG_USBIP_HOST=m\n\n# \u670d\u52a1\u7aef\n# ==========\n# \u52a0\u8f7d\u5185\u6838\u6a21\u5757\nmodprobe usbip-core\nmodprobe usbip-host\n# \u542f\u52a8\u670d\u52a1\u7aef\nusbipd -D\n# \u67e5\u770b\u8bbe\u5907\nusbip list -l\n# \u7ed1\u5b9a\u66b4\u9732\nusbip --debug bind -b 1-1.2\n# \u67e5\u770b\u7aef\u53e3\u4fe1\u606f\n# \u88ab\u8fdc\u7a0b\u6302\u8f7d\u540e\u4f1a\u663e\u793a\u76f8\u5173\u4fe1\u606f\nusbip port\n# \u53d6\u6d88\u7ed1\u5b9a\nusbip unbind -b 1-1.3\n\n# \u5ba2\u6237\u7aef\n# ==========\n# \u67e5\u770b\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u66b4\u9732\u7684\u8bbe\u5907\nusbip list -r 192.168.0.1\n# \u52a0\u8f7d\u5185\u6838\nmodprobe vhci-hcd\n# \u6302\u8f7d\u8fdc\u7a0b\u8bbe\u5907\nusbip attach -r 192.168.0.1 -b 1-1.3\n# \u67e5\u770b\u8fdc\u7a0b\u7684\u5206\u533a\u4fe1\u606f\n# \u5047\u8bbe\u6302\u8f7d\u540e\u7684\u8bbe\u5907\u4e3a /dev/sdd\nfdisk -l /dev/sdd\n# \u5378\u8f7d\nusbip detach -p 0\n")),(0,n.kt)("h2",m({},{id:"usbredir"}),"usbredir"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/SPICE/usbredir"}),"SPICE/usbredir")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/usbredir-server"}),"edge/main/x86_64/usbredir-server"))),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/OliRead/usbdmx"}),"https://github.com/OliRead/usbdmx"),"\nA versatile USB DMX library written in Go for programatic show control and special effects."),(0,n.kt)("p",null,"echi hdc\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)"}),"https://en.wikipedia.org/wiki/Host_controller_interface_(USB,_Firewire)")),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Message_Signaled_Interrupts"}),"https://en.wikipedia.org/wiki/Message_Signaled_Interrupts")),(0,n.kt)("h2",m({},{id:"usbkey"}),"usbkey"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"BOC")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/dev/sr0"),(0,n.kt)("li",{parentName:"ul"},"mnt/Setup.exe")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"usb 1-8: new full-speed USB device number 4 using xhci_hcd\nusb 1-8: New USB device found, idVendor=096e, idProduct=070a\nusb 1-8: New USB device strings: Mfr=1, Product=2, SerialNumber=0\nusb 1-8: Product: FT Interpass3000\nusb 1-8: Manufacturer: FS\nusb-storage 1-8:1.0: USB Mass Storage device detected\nscsi host7: usb-storage 1-8:1.0\nscsi 7:0:0:0: CD-ROM            FT BOC   Interpass3000    1.00 PQ: 0 ANSI: 2\nsr 7:0:0:0: [sr0] scsi3-mmc drive: 0x/0x caddy\ncdrom: Uniform CD-ROM driver Revision: 3.20\nsr 7:0:0:0: Attached scsi CD-ROM sr0\n")))}v.isMDXComponent=!0}}]);