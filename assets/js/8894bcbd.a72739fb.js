"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[29026],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return c}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.createContext({}),u=function(e){var t=l.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=u(e.components);return l.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,d=k["".concat(m,".").concat(c)]||k[c]||s[c]||i;return n?l.createElement(d,r(r({ref:t},o),{},{components:n})):l.createElement(d,r({ref:t},o))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return o},default:function(){return k}});var l=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],p={id:"qemu-doc",title:"QEMU \u6587\u6863"},m="QEMU Document",u={unversionedId:"os/virt/qemu-doc",id:"os/virt/qemu-doc",title:"QEMU \u6587\u6863",description:"Tips",source:"@site/notes/os/virt/qemu-doc.md",sourceDirName:"os/virt",slug:"/os/virt/qemu-doc",permalink:"/notes/os/virt/qemu-doc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-doc.md",tags:[],version:"current",frontMatter:{id:"qemu-doc",title:"QEMU \u6587\u6863"},sidebar:"docs",previous:{title:"QEMU",permalink:"/notes/os/virt/qemu"},next:{title:"QEMU FAQ",permalink:"/notes/os/virt/qemu-faq"}},o=[{value:"Tips",id:"tips",children:[{value:"Device URL Syntax",id:"device-url-syntax",children:[],level:3}],level:2},{value:"\u955c\u50cf",id:"\u955c\u50cf",children:[{value:"\u53ea\u8bfb\u683c\u5f0f",id:"\u53ea\u8bfb\u683c\u5f0f",children:[],level:3},{value:"\u78c1\u76d8\u955c\u50cf",id:"\u78c1\u76d8\u955c\u50cf",children:[],level:3},{value:"\u7f51\u7edc\u5757\u8bbe\u5907",id:"\u7f51\u7edc\u5757\u8bbe\u5907",children:[],level:3}],level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[],level:2},{value:"\u5916\u8bbe",id:"\u5916\u8bbe",children:[{value:"USB",id:"usb",children:[],level:3},{value:"PCI",id:"pci",children:[],level:3}],level:2},{value:"\u7528\u6237\u7a7a\u95f4\u865a\u62df",id:"\u7528\u6237\u7a7a\u95f4\u865a\u62df",children:[],level:2},{value:"\u663e\u793a",id:"\u663e\u793a",children:[],level:2}],s={toc:o};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"qemu-document"},"QEMU Document"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"QEMU ",(0,i.kt)("a",{parentName:"p",href:"https://qemu.weilnetz.de/doc/qemu-doc.html"},"Doc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u865a\u62df\u6a21\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PC \u7cfb\u7edf\u6a21\u62df\u5668"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6807\u51c6\u9009\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5757\u8bbe\u5907\u9009\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB \u9009\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u663e\u793a\u9009\u9879"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-display [type]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sdl,curses,none,gtk,vnc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-nographic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-alt-grab")," - Ctrl-Alt-Shift"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-ctrl-grab")," - Right-Ctrl"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-spice option[,option[,...]]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"spice \u8fdc\u7a0b\u684c\u9762\u534f\u8bae"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-full-screen")," \u5168\u5c4f\u7684\u65b9\u5f0f\u6253\u5f00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-g widthxheight[xdepth]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u521d\u59cb\u5927\u5c0f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-vnc display[,option[,option[,...]]]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7f51\u7edc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b57\u7b26\u8bbe\u5907")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u84dd\u7259")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TPM \u8bbe\u5907")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linux/Multiboot \u542f\u52a8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8c03\u8bd5\u548c\u4e13\u5bb6\u9009\u9879"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-serial [dev]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u865a\u62df\u4e32\u53e3\u5230\u4e3b\u673a\u7684\u5b57\u7b26\u8bbe\u5907"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vc[:WxH]")," Virtual console"),(0,i.kt)("li",{parentName:"ul"},"pty, none, null, chardev:id, /dev/XXX, stdio, pipe:filename,, COMn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"udp:[remote_host]:remote_port[@[src_ip]:src_port]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tcp:[host]:port[,server][,nowait][,nodelay][,reconnect=seconds]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"telnet:host:port[,server][,nowait][,nodelay]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unix:path[,server][,nowait][,reconnect=seconds]")),(0,i.kt)("li",{parentName:"ul"},"/dev/parportN"),(0,i.kt)("li",{parentName:"ul"},"mon:dev_string"),(0,i.kt)("li",{parentName:"ul"},"braille"),(0,i.kt)("li",{parentName:"ul"},"msmouse"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-S")," - \u542f\u52a8\u65f6\u4e0d\u542f\u52a8 CPU, \u624b\u52a8\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-bios file")," - \u6307\u5b9a BIOS \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-no-reboot")," - \u9000\u51fa\u800c\u4e0d\u662f\u91cd\u542f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-enable-kvm"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u542f\u7528 KVM"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-enable-hax"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u662f\u5426\u542f\u7528 HAX (Hardware-based Acceleration eXecution)"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5bf9 Mac \u548c Windows \u6709\u6548"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-loadvm [file]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u4fdd\u5b58\u7684\u72b6\u6001"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-daemonize")," -  \u540e\u53f0\u8fd0\u884c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-readconfig file")," - \u4ece\u6587\u4ef6\u8bfb\u53d6\u8bbe\u5907\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-writeconfig file")," - \u5c06\u8bbe\u5907\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76d1\u63a7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u78c1\u76d8\u955c\u50cf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7f51\u7edc\u6a21\u62df\u5668")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5176\u4ed6\u8bbe\u5907")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76f4\u63a5 Linux \u542f\u52a8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB \u6a21\u62df\u5668")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"VNC \u5b89\u5168\u76f8\u5173")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5e73\u53f0\u76f8\u5173\u9009\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u975e PC \u7cfb\u7edf\u6a21\u62df\u5668"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PowerPC"),(0,i.kt)("li",{parentName:"ul"},"Sparc32"),(0,i.kt)("li",{parentName:"ul"},"Sparec64"),(0,i.kt)("li",{parentName:"ul"},"MIPS"),(0,i.kt)("li",{parentName:"ul"},"ARM"),(0,i.kt)("li",{parentName:"ul"},"Cris"),(0,i.kt)("li",{parentName:"ul"},"ClodFire"),(0,i.kt)("li",{parentName:"ul"},"Cris"),(0,i.kt)("li",{parentName:"ul"},"Microblaze"),(0,i.kt)("li",{parentName:"ul"},"Sh4"),(0,i.kt)("li",{parentName:"ul"},"Xtensa"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u8c03\u7528")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7528\u6237\u7a7a\u95f4\u6a21\u62df\u5668"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Linux"),(0,i.kt)("li",{parentName:"ul"},"BSD")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u652f\u6301\u7684\u673a\u5668\nqemu-system-x86_64 -machine help\n# \u652f\u6301\u7684 CPU\nqemu-system-x86_64 -cpu help\n# ARM \u652f\u6301 raspi2\nqemu-system-arm -machine help | grep rasp\n# \u67e5\u770b\u65e5\u5fd7\u9879\nqemu-system-x86_64 -d help\n\n# Alpine virt \u7248, 30M \u5de6\u53f3, alpine-standard \u4e3a 100M \u5de6\u53f3\nwget http://dl-cdn.alpinelinux.org/alpine/v3.6/releases/x86_64/alpine-virt-3.6.2-x86_64.iso\n\n# WARNING: Image format was not specified for 'alpine-virt-3.6.2-x86_64.iso' and probing guessed raw.\n#          Automatically detecting the format is dangerous for raw images, write operations on block 0 will be restricted.\n#          Specify the 'raw' format explicitly to remove the restrictions.\nqemu-system-x86_64 alpine-virt-3.6.2-x86_64.iso\n# \u8fd9\u6837\u5c31\u4e0d\u4f1a\u51fa\u73b0\u8b66\u544a\nqemu-system-x86_64 -cdrom alpine-virt-3.6.2-x86_64.iso\n\n\n# \u5c06\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u865a\u62df\u7684 fat \u78c1\u76d8\u955c\u50cf, \u9ed8\u8ba4\u53ea\u8bfb\nqemu-system-i386 linux.img -hdb fat:/my_directory\n")),(0,i.kt)("h3",{id:"device-url-syntax"},"Device URL Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8bbe\u5907 URL \u8bed\u6cd5\n# ===========\n# iSCSI\n# iscsi://<target-ip>[:<port>]/<target-iqn>/<lun>\n# \u65e0\u6388\u6743\nqemu-system-i386 \\\n  -iscsi initiator-name=iqn.2001-04.com.example:my-initiator \\\n  -cdrom iscsi://192.0.2.1/iqn.2001-04.com.example/2 \\\n  -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1\n# \u5728 URL \u4e0a\u6307\u5b9a CHAP \u8d26\u53f7\u5bc6\u7801\nqemu-system-i386 \\\n  -drive file=iscsi://user%password@192.0.2.1/iqn.2001-04.com.example/1\n# \u5728\u73af\u5883\u53d8\u91cf\u4e2d\u6307\u5b9a CHAP \u8d26\u53f7\u5bc6\u7801\nLIBISCSI_CHAP_USERNAME="user" \\\nLIBISCSI_CHAP_PASSWORD="password" \\\nqemu-system-i386 -drive file=iscsi://192.0.2.1/iqn.2001-04.com.example/1\n\n# NBD\n# nbd:<server-ip>:<port>[:exportname=<export>]\n# TCP\nqemu-system-i386 --drive file=nbd:192.0.2.1:30000\n# Unix Domain Sockets\nqemu-system-i386 --drive file=nbd:unix:/tmp/nbd-socket\n\n# Sheepdog\n# a distributed storage system for QEMU.\n# supports using either local sheepdog devices or remote networked devices.\n# sheepdog[+tcp|+unix]://[host:port]/vdiname[?socket=path][#snapid|#tag]\n# https://sheepdog.github.io/sheepdog/\nqemu-system-i386 --drive file=sheepdog://192.0.2.1:30000/MyVirtualMachine\n\n# GlusterFS\n# a user space distributed file system. \n# supports the use of GlusterFS volumes for hosting VM disk images using TCP, Unix Domain Sockets and RDMA transport protocols.\n# URI:\n# gluster[+type]://[host[:port]]/volume/path[?socket=...][,debug=N][,logfile=...]\n# JSON:\n# \'json:{"driver":"qcow2","file":{"driver":"gluster","volume":"testvol","path":"a.img","debug":N,"logfile":"...",\n#                                  "server":[{"type":"tcp","host":"...","port":"..."},\n#                                            {"type":"unix","socket":"..."}]}}\'\n# URI\nqemu-system-x86_64 --drive file=gluster://192.0.2.1/testvol/a.img,file.debug=9,file.logfile=/var/log/qemu-gluster.log\n# JSON\nqemu-system-x86_64 \'json:{"driver":"qcow2",\n                          "file":{"driver":"gluster",\n                                   "volume":"testvol","path":"a.img",\n                                   "debug":9,"logfile":"/var/log/qemu-gluster.log",\n                                   "server":[{"type":"tcp","host":"1.2.3.4","port":24007},\n                                             {"type":"unix","socket":"/var/run/glusterd.socket"}]}}\'\nqemu-system-x86_64 -drive driver=qcow2,file.driver=gluster,file.volume=testvol,file.path=/path/a.img,\\\n                                      file.debug=9,file.logfile=/var/log/qemu-gluster.log,\\\n                                      file.server.0.type=tcp,file.server.0.host=1.2.3.4,file.server.0.port=24007,\\\n                                      file.server.1.type=unix,file.server.1.socket=/var/run/glusterd.socket\\\n\n# HTTP/HTTPS/FTP/FTPS\n# QEMU supports read-only access to files accessed over http(s) and ftp(s).\n# <protocol>://[<username>[:<password>]@]<host>/<path>\n')),(0,i.kt)("h2",{id:"\u955c\u50cf"},"\u955c\u50cf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"raw",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u539f\u59cb\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6587\u4ef6\u7cfb\u7edf\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"li"},"holes"),"(ext2,ext3,ntfs), \u90a3\u4f1a\u5360\u4e0d\u4e86\u591a\u5c11\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},"\u9009\u9879",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"preallocation - \u9884\u5206\u914d\u6a21\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"off, falloc, full"))))))),(0,i.kt)("li",{parentName:"ul"},"qcow2",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"QEMU \u955c\u50cf\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6700\u591a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"COW - \u53ea\u9488\u5bf9 btrfs \u6709\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u538b\u7f29"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5bc6 - aes,luks"))))),(0,i.kt)("li",{parentName:"ul"},"qed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e7\u7684 QEMU \u955c\u50cf\u683c\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},"qcow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e7\u7684 QEMU \u955c\u50cf\u683c\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},"luks",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LUKS v1 \u52a0\u5bc6\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u4e0e Linux dm-crypt/cryptsetup \u517c\u5bb9"))),(0,i.kt)("li",{parentName:"ul"},"vdi",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vbox 1.1 \u517c\u5bb9\u683c\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},"vmdk",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vm 3,4 \u517c\u5bb9\u683c\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},"vpc",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Virtual PC \u517c\u5bb9\u683c\u5f0f (VHD)"))),(0,i.kt)("li",{parentName:"ul"},"VHDX",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hyper-V \u517c\u5bb9\u7684\u955c\u50cf\u683c\u5f0f")))),(0,i.kt)("h3",{id:"\u53ea\u8bfb\u683c\u5f0f"},"\u53ea\u8bfb\u683c\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bochs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"growing \u7684 Bochs \u955c\u50cf"))),(0,i.kt)("li",{parentName:"ul"},"cloop",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Linux Compressed Loop \u955c\u50cf"))),(0,i.kt)("li",{parentName:"ul"},"dmg",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Apple \u7684\u78c1\u76d8\u683c\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},"parallels",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Parallels \u78c1\u76d8\u955c\u50cf\u683c\u5f0f")))),(0,i.kt)("h3",{id:"\u78c1\u76d8\u955c\u50cf"},"\u78c1\u76d8\u955c\u50cf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"qemu-img")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u78c1\u76d8\u955c\u50cf\nqemu-img create demo.img 100m\n# \u67e5\u770b\u57fa\u672c\u4fe1\u606f\nqemu-img info demo.img\n# \u67e5\u770b\u6620\u5c04\u4fe1\u606f\nqemu-img map demo.img\n# \u63a8\u8350\u4f7f\u7528 qcow2 \u683c\u5f0f\nqemu-img create -f qcow2 sys.qcow2 2g\n")),(0,i.kt)("h3",{id:"\u7f51\u7edc\u5757\u8bbe\u5907"},"\u7f51\u7edc\u5757\u8bbe\u5907"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"qemu-nbd"),(0,i.kt)("li",{parentName:"ul"},"\u5728 linux \u4e0b\u4e00\u822c\u4f1a\u6302\u8f7d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/ndb*")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sheepdog/sheepdog/"},"https://github.com/sheepdog/sheepdog/")),(0,i.kt)("li",{parentName:"ul"},"iSCSI LUN")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 \u8fdc\u7a0b NBD \u534f\u8bae\nqemu-system-i386 linux.img -hdb nbd://my_nbd_server.mydomain.org:1024/\n# \u4f7f\u7528 unix socket\nqemu-system-i386 linux.img -hdb nbd+unix://?socket=/tmp/my_socket\n\n# \u66b4\u9732\u4e3a unix socket\nqemu-nbd --socket=/tmp/my_socket my_disk.qcow2\n# \u5141\u8bb8\u591a\u4e2a\u5ba2\u6237\u7aef\u5171\u4eab\nqemu-nbd --socket=/tmp/my_socket --share=2 my_disk.qcow2\n# \u540c\u65f6\u4f7f\u7528\nqemu-system-i386 linux1.img -hdb nbd+unix://?socket=/tmp/my_socket\nqemu-system-i386 linux2.img -hdb nbd+unix://?socket=/tmp/my_socket\n# \u5982\u679c\u670d\u52a1\u7aef\u6307\u5b9a\u4e86\u540d\u5b57, \u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u65f6\u4e5f\u9700\u8981\u6307\u5b9a\u540d\u5b57\nqemu-system-i386 -cdrom nbd://localhost/debian-500-ppc-netinst\nqemu-system-i386 -cdrom nbd://localhost/openSUSE-11.1-ppc-netinst\n")),(0,i.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Networking"},"https://www.linux-kvm.org/page/Networking"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u652f\u6301\u7684 NIC\nqemu-system-x86_64 -net nic,model=help\n# \u6700\u7b80\u5355\u7684\u7f51\u7edc\n# 10.0.2.0/24 \u9ed8\u8ba4\u8d77\u59cb\u5730\u5740 x.x.x.15-13, \u4e3b\u673a\u5730\u5740 x.x.x.2 dns x.x.x.3\n# \u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u865a\u62df\u673a\nqemu-system-x86_64 -hda vdisk.img -cdrom alpine-standard-3.6.2-x86_64.iso -net nic -net user\n\n# \u4f7f\u7528 tap \u53ef\u4ee5\u521b\u5efa\u865a\u62df\u7f51\u7edc\u8bbe\u5907\u4f7f\u4e3b\u673a\u4e92\u901a\nqemu-system-x86_64 -m 512M -net nic -net tap,script=no,downscript=no\n# \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u5b57\nqemu-system-x86_64 -m 512M -net nic -net tap,ifname=tap0,script=no,downscript=no\n# -net nic,model=virtio -net tap,ifname=tap0,script=no,downscript=no\n# \u786e\u4fdd\u6743\u9650\n# ip tuntap add dev tap0 mode tap group netdev\n# \u6216\u8005\u4f7f\u7528 tunctl \u63a7\u5236\n# tunctl -p -t tap0 -u $USER\n# tunctl -t tap0 -g netdev\n")),(0,i.kt)("h2",{id:"\u5916\u8bbe"},"\u5916\u8bbe"),(0,i.kt)("h3",{id:"usb"},"USB"),(0,i.kt)("h3",{id:"pci"},"PCI"),(0,i.kt)("h2",{id:"\u7528\u6237\u7a7a\u95f4\u865a\u62df"},"\u7528\u6237\u7a7a\u95f4\u865a\u62df"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qemu-*")),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 Linix, BSD"),(0,i.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u8c03\u7528\u8f6c\u6362"),(0,i.kt)("li",{parentName:"ul"},"POSIX \u4fe1\u53f7\u5904\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# -L / \u544a\u8bc9\u52a8\u6001\u8fde\u63a5\u5668\u4ece / \u5f00\u59cb\u641c\u7d22\nqemu-i386 -L / /bin/ls\n# \u4e5f\u53ef\u4ee5\u518d qemu \u4e2d\u5141\u8bb8 qemu\nqemu-i386 -L / qemu-i386 -L / /bin/ls\n\n# \u5728\u975e x86 CPU \u4e0a\u8fd0\u884c\n# \u81f3\u5c11\u9700\u8981 x86 \u7684 glibc(qemu-runtime-i386-*)\n# \u786e\u4fdd\u672a\u8bbe\u7f6e LD_LIBRARY_PATH\nunset LD_LIBRARY_PATH\n# \u6267\u884c\u9884\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u6587\u4ef6\nqemu-i386 tests/i386/ls\n\n# \u4f7f\u7528 Wine\n# \u786e\u4fdd\u5b89\u88c5 wine(qemu-*-i386-wine)\n# \u81f3\u5c11\u5148\u786e\u4fdd\u6709 i386\nqemu-i386 /usr/local/qemu-i386/bin/ls-i386\n# \u914d\u7f6e\n# \u914d\u7f6e\u4f4d\u4e8e ~/.wine, \u4e4b\u524d\u7684\u914d\u7f6e\u4f1a\u88ab\u5b58\u4e8e ~/.wine.org\n/usr/local/qemu-i386/bin/wine-conf.sh\nqemu-i386 /usr/local/qemu-i386/wine/bin/wine \\\n          /usr/local/qemu-i386/wine/c/Program\\ Files/putty.exe\n")),(0,i.kt)("h2",{id:"\u663e\u793a"},"\u663e\u793a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.spice-space.org"},"https://www.spice-space.org")),(0,i.kt)("li",{parentName:"ul"},"vnc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install tiger-vnc\n\n# 5900\nqemu-system-x86_64 -vga std -nographic -vnc :0\nvncviewer :0\n\n# 5901\nqemu-system-x86_64 sys.vhd-display vnc=:1\nvncviewer :1\n\n\n")))}k.isMDXComponent=!0}}]);