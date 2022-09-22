"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24348],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),k=n,d=u["".concat(o,".").concat(k)]||u[k]||p[k]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47306:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&c(e,a,t[a]);return e};const u={title:"Qemu Image"},k="Qemu Image",d={unversionedId:"os/virt/qemu-img",id:"os/virt/qemu-img",title:"Qemu Image",description:"- \u53c2\u8003",source:"@site/../notes/os/virt/qemu-img.md",sourceDirName:"os/virt",slug:"/os/virt/qemu-img",permalink:"/notes/os/virt/qemu-img",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/qemu-img.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658265387,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{title:"Qemu Image"},sidebar:"docs",previous:{title:"QEMU FAQ",permalink:"/notes/os/virt/qemu-faq"},next:{title:"QEMU\u76d1\u89c6\u5668",permalink:"/notes/os/virt/qemu-monitor"}},f={},g=[{value:"\u78c1\u76d8\u683c\u5f0f",id:"\u78c1\u76d8\u683c\u5f0f",level:2},{value:"holes",id:"holes",level:2},{value:"\u78c1\u76d8\u538b\u7f29",id:"\u78c1\u76d8\u538b\u7f29",level:2},{value:"LUKS",id:"luks",level:2},{value:"\u5408\u5e76 backing \u6587\u4ef6",id:"\u5408\u5e76-backing-\u6587\u4ef6",level:2},{value:"ZFS",id:"zfs",level:2}],b={toc:g};function v(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),c),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"qemu-image"}),"Qemu Image"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://stackoverflow.com/questions/13252682"}),"Copying a 1TB sparse file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ed3\u8bba - GNU tar \u6700\u5feb\uff0c\u5185\u6838 3.1+ \u652f\u6301 SEEK_HOLE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/sparse_file"}),"Sparse file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://qemu.weilnetz.de/doc/7.0/tools/qemu-img.html"}),"qemu-img"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u6620\u5c04\u60c5\u51b5\nqemu-img map delta.qcow2\n\n# \u521b\u5efa sparse \u6587\u4ef6\nqemu-img create -f raw test.raw 2G\ndd if=/dev/zero of=test.raw seek=2G bs=1 count=1\n\n# \u4f20\u8f93 sparse \u6587\u4ef6\n# \u8fd8\u662f\u76f8\u5bf9\u6162\nrsync -aS test.raw admin@server:~\n# tar \u652f\u6301 sparse\ntar cSvfz - test.raw | ssh admin@server 'tar -C ~ -zvxf -'\n# \u5982\u679c\u662f\u672c\u5730\uff0c\u5219\u4e0d\u538b\u7f29\u66f4\u5feb\ntar cSvf - test.raw | ssh admin@server 'tar -C ~ -vxf -'\n# \u67e5\u770b\u8fdc\u7a0b\u5927\u5c0f\nssh admin@server ls -lahs\n\n# \u538b\u7f29\ntar cSvfz test.tar.gz test.raw\n# \u89e3\u538b\nmkdir test\ntar -xvSf test.tar.gz -C test\n\n# \u590d\u5236\n# \u9ed8\u8ba4\u652f\u6301\uff0c\u4e0d\u52a0 --sparse=always \u4e5f\u53ef\u4ee5\ncp --sparse=always test.raw tmp1.raw\n# \u5c06 sparse \u53bb\u6389\ncp --sparse=never test.raw tmp2.raw\n# \u6062\u590d\u4e3a sparse\nfallocate -d tmp2.raw\n\n# dd \u652f\u6301 sparse\n# https://man7.org/linux/man-pages/man1/dd.1.html\ndd if=test.raw of=tmp3.raw conv=sparse status=progress bs=128MB\n\n# ddrescue \u652f\u6301\u5199\u5165 sparse\nddrescue -S -b8M /dev/sda1 /mount/external/backup/sda1.raw\n\n# convert\n# convert [--object OBJECTDEF] [--image-opts] [--target-image-opts] [--target-is-zero] [--bitmaps] [-U] [-C] [-c] [-p] [-q] [-n] [-f FMT] [-t CACHE] [-T SRC_CACHE] [-O OUTPUT_FMT] [-B BACKING_FILE [-F BACKING_FMT]] [-o OPTIONS] [-l SNAPSHOT_PARAM] [-S SPARSE_SIZE] [-r RATE_LIMIT] [-m NUM_COROUTINES] [-W] [--salvage] FILENAME [FILENAME2 [...]] OUTPUT_FILENAME\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"opt"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-f"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u7b2c\u4e00\u4e2a\u955c\u50cf\u683c\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-F"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u7b2c\u4e8c\u4e2a\u955c\u50cf\u683c\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-s"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u4e25\u683c\u6a21\u5f0f - \u955c\u50cf size \u4e0d\u5339\u914d\uff0callocation \u5931\u8d25\u90fd\u4f1a\u9519\u8bef")))),(0,r.kt)("h2",p({},{id:"\u78c1\u76d8\u683c\u5f0f"}),"\u78c1\u76d8\u683c\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"raw - \u539f\u59cb\u78c1\u76d8\u683c\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6027\u80fd\u6700\u597d\uff0c\u5360\u7528\u7a7a\u95f4\u6700\u591a"),(0,r.kt)("li",{parentName:"ul"},"fallocate \u53ef\u4ee5\u9884\u7559\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},"Linux \u4e0b\u5982\u679c\u6587\u4ef6\u7cfb\u7edf\u652f\u6301 holes(ext2,ext3,NTFS \u7b49) \u5219\u53ea\u6709\u4f7f\u7528\u7684\u7a7a\u95f4\u624d\u4f1a\u88ab\u5360\u7528 - ",(0,r.kt)("inlineCode",{parentName:"li"},"ls -ls")," \u67e5\u770b\u7b2c\u4e00\u5217 \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"qemu-img info")," \u67e5\u770b"))),(0,r.kt)("li",{parentName:"ul"},"bochs: Bochs disk image format"),(0,r.kt)("li",{parentName:"ul"},"cloop - compressed loopback disk image format",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useful only to reuse directly compressed CD-ROM images present for example in the Knoppix CD-ROMs."))),(0,r.kt)("li",{parentName:"ul"},"cow - User Mode Linux Copy On Write image format",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u517c\u5bb9\u5b58\u5728\uff0c\u4e0d\u652f\u6301 Windows"))),(0,r.kt)("li",{parentName:"ul"},"dmg - Mac disk image format"),(0,r.kt)("li",{parentName:"ul"},"iso - CDROM disk image format"),(0,r.kt)("li",{parentName:"ul"},"qcow - QEMU v1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u517c\u5bb9\u5b58\u5728"))),(0,r.kt)("li",{parentName:"ul"},"qcow2 - QEMU v2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6700\u4e3a\u9f50\u5168"),(0,r.kt)("li",{parentName:"ul"},"AES \u52a0\u5bc6"),(0,r.kt)("li",{parentName:"ul"},"zlib \u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u7167"))),(0,r.kt)("li",{parentName:"ul"},"qed - QEMU Enhanced Disk image format"),(0,r.kt)("li",{parentName:"ul"},"vmdk - VMware disk image format"),(0,r.kt)("li",{parentName:"ul"},"vpc/vhd - Windows Virtual PC disk image format / Microsoft virtual hard disk image format"),(0,r.kt)("li",{parentName:"ul"},"nbd - Network block device"),(0,r.kt)("li",{parentName:"ul"},"parallels - Parallels virtualization disk image format"),(0,r.kt)("li",{parentName:"ul"},"vdi - Oracle VM VirtualBox hard disk image format"),(0,r.kt)("li",{parentName:"ul"},"vmdk - VMware 3 and 4 compatible image format"),(0,r.kt)("li",{parentName:"ul"},"vvfat - Virtual VFAT disk image format")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u6d4b\u662f\u5426\u652f\u6301 holes\n# \u5982\u679c\u662f\u4e00\u77ac\u95f4\u5c31\u597d\nqemu-img create -f raw test.raw 2G\n# \u7b2c\u4e00\u5217\u4e3a\u5b9e\u9645\u5360\u7528\u5927\u5c0f\nls -lsh test.raw\n")),(0,r.kt)("h2",p({},{id:"holes"}),"holes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"virt-sparsify - libguestfs")),(0,r.kt)("h2",p({},{id:"\u78c1\u76d8\u538b\u7f29"}),"\u78c1\u76d8\u538b\u7f29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://pve.proxmox.com/wiki/Shrink_Qcow2_Disk_Files"}),"Shrink Qcow2 Disk Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"http://blog.programster.org/qemu-img-cheatsheet"}),"http://blog.programster.org/qemu-img-cheatsheet"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u7f29\u5c0f\n# ==========\n# \u4e3b\u673a\u5185\u6267\u884c\nfstrim -av\n\n# \u8f6c\u6362\u540e\u4f1a\u53d8\u5c0f\nqemu-img convert -O qcow2 alpine.img shrink.qcow2\n# \u4e5f\u53ef\u4ee5\u8fdb\u884c\u538b\u7f29\uff0c\u4f1a\u66f4\u5c0f\uff0c\u4f46\u542f\u52a8\u65f6\u4f1a\u6062\u590d\nqemu-img convert -O qcow2 alpine.img shrink.qcow2 -c\n")),(0,r.kt)("h2",p({},{id:"luks"}),"LUKS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QCOW2 \u652f\u6301 LUKS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.qemu.org/docs/master/system/qemu-block-drivers.html"}),"https://www.qemu.org/docs/master/system/qemu-block-drivers.html")),(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528 LUKS \u7b49\u540c\u4e8e RAW \u52a0\u5bc6")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# \u521b\u5efa\u65e0\u5bc6\u7801\u78c1\u76d8\nqemu-img create -f qcow2 demo.qcow2 10M\n# RAW LUKS \u52a0\u5bc6\uff0c\u5bc6\u7801\u4e3a 123\nqemu-img create -f luks --object secret,data=123,id=sec0 -o key-secret=sec0 demo.luks 10M\n# \u5199\u5165 LUKS\nqemu-img convert --target-image-opts --object secret,data=123,id=sec0 -f qcow2 demo.qcow2 -n driver=luks,file.filename=demo.luks,key-secret=sec0\n\n# QCOW2 LUKS\nqemu-img create -f qcow2 --object secret,data=123,id=sec0 -o encrypt.format=luks -o encrypt.key-secret=sec0 demo.luks 10M\nqemu-img convert --target-image-opts --object secret,data=123,id=sec0 -f qcow2 demo.qcow2 -n driver=qcow2,file.filename=demo.luks,encrypt.key-secret=sec0\n\n# QEMU \u4f7f\u7528\n# -drive file=demo.luks,format=luks,key-secret=sec0,if=virtio -object secret,data=123,id=sec0\n\n# AES \u52a0\u5bc6\u5bc6\u94a5\nopenssl rand -base64 32 > key.b64\nKEY=$(base64 -d key.b64 | hexdump -v -e \'/1 "%02X"\')\nopenssl rand -base64 16 > iv.b64\nIV=$(base64 -d iv.b64 | hexdump -v -e \'/1 "%02X"\')\nprintf "123" | openssl enc -aes-256-cbc -a -K $KEY -iv $IV > sec.b64\n\nqemu-system-x86_64 \\\n  -object secret,id=secmaster0,format=base64,file=key.b64 \\\n  -object secret,id=sec0,keyid=secmaster0,format=base64,file=sec.b64,iv=$(< iv.b64) \\\n  -drive file=demo.luks,format=luks,key-secret=sec0,if=virtio\n\n# printf "$SECRET" | openssl enc -d -aes-256-cbc -a -K $KEY -iv $IV\n')),(0,r.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",p({},{id:"\u5408\u5e76-backing-\u6587\u4ef6"}),"\u5408\u5e76 backing \u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://libvirt.org/kbase/backing_chains.html"}),"https://libvirt.org/kbase/backing_chains.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b backing\nqemu-img info --backing-chain test.qcow2\n# \u5047\u8bbe test.qcow2 \u7684 base \u662f base.qcow2\ncp base.qcow2 tmp.qcow2\n\n# \u4fee\u6539 base\nqemu-img rebase -b tmp.qcow2 test.qcow2\n# \u63d0\u4ea4\u5230 base\nqemu-img commit test.qcow2\n# \u79fb\u9664\u65e7\u7684\u6587\u4ef6\nmv tmp.qcow2 test.qcow2\n")),(0,r.kt)("h2",p({},{id:"zfs"}),"ZFS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZVOL \u6027\u80fd\u53ef\u80fd\u4f1a\u6bd4 QEMU2 \u597d\u4e00\u70b9\uff0c\u4f46\u662f\u4e0d\u503c\u5f97"),(0,r.kt)("li",{parentName:"ul"},"QEMU2 \u66f4\u597d\u7ba1\u7406\u7ef4\u62a4\uff0c\u652f\u6301\u66f4\u591a\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u5f00\u542f zfs \u538b\u7f29 - lz4 \u89e3\u538b\u5feb\uff0czstd \u538b\u7f29\u6bd4\u9ad8")))}v.isMDXComponent=!0}}]);