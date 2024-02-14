/*! For license information please see 2b9c11de.75e72c03.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16584],{41620:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(2488),i=s(62780);const t={title:"Qemu Image"},l="Qemu Image",a={id:"os/virt/qemu/qemu-img",title:"Qemu Image",description:"- \u53c2\u8003",source:"@site/../notes/os/virt/qemu/qemu-img.md",sourceDirName:"os/virt/qemu",slug:"/os/virt/qemu/img",permalink:"/notes/os/virt/qemu/img",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/qemu/qemu-img.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667482099,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Qemu Image"},sidebar:"docs",previous:{title:"QEMU FAQ",permalink:"/notes/os/virt/qemu/faq"},next:{title:"QEMU\u76d1\u89c6\u5668",permalink:"/notes/os/virt/qemu/monitor"}},c={},d=[{value:"\u78c1\u76d8\u683c\u5f0f",id:"\u78c1\u76d8\u683c\u5f0f",level:2},{value:"holes",id:"holes",level:2},{value:"\u78c1\u76d8\u538b\u7f29",id:"\u78c1\u76d8\u538b\u7f29",level:2},{value:"LUKS",id:"luks",level:2},{value:"\u5408\u5e76 backing \u6587\u4ef6",id:"\u5408\u5e76-backing-\u6587\u4ef6",level:2},{value:"ZFS",id:"zfs",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"qemu-image",children:"Qemu Image"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/13252682",children:"Copying a 1TB sparse file"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7ed3\u8bba - GNU tar \u6700\u5feb\uff0c\u5185\u6838 3.1+ \u652f\u6301 SEEK_HOLE"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://wiki.archlinux.org/index.php/sparse_file",children:"Sparse file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://qemu.weilnetz.de/doc/7.0/tools/qemu-img.html",children:"qemu-img"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u6620\u5c04\u60c5\u51b5\nqemu-img map delta.qcow2\n\n# \u521b\u5efa sparse \u6587\u4ef6\nqemu-img create -f raw test.raw 2G\ndd if=/dev/zero of=test.raw seek=2G bs=1 count=1\n\n# \u4f20\u8f93 sparse \u6587\u4ef6\n# \u8fd8\u662f\u76f8\u5bf9\u6162\nrsync -aS test.raw admin@server:~\n# tar \u652f\u6301 sparse\ntar cSvfz - test.raw | ssh admin@server 'tar -C ~ -zvxf -'\n# \u5982\u679c\u662f\u672c\u5730\uff0c\u5219\u4e0d\u538b\u7f29\u66f4\u5feb\ntar cSvf - test.raw | ssh admin@server 'tar -C ~ -vxf -'\n# \u67e5\u770b\u8fdc\u7a0b\u5927\u5c0f\nssh admin@server ls -lahs\n\n# \u538b\u7f29\ntar cSvfz test.tar.gz test.raw\n# \u89e3\u538b\nmkdir test\ntar -xvSf test.tar.gz -C test\n\n# \u590d\u5236\n# \u9ed8\u8ba4\u652f\u6301\uff0c\u4e0d\u52a0 --sparse=always \u4e5f\u53ef\u4ee5\ncp --sparse=always test.raw tmp1.raw\n# \u5c06 sparse \u53bb\u6389\ncp --sparse=never test.raw tmp2.raw\n# \u6062\u590d\u4e3a sparse\nfallocate -d tmp2.raw\n\n# dd \u652f\u6301 sparse\n# https://man7.org/linux/man-pages/man1/dd.1.html\ndd if=test.raw of=tmp3.raw conv=sparse status=progress bs=128MB\n\n# ddrescue \u652f\u6301\u5199\u5165 sparse\nddrescue -S -b8M /dev/sda1 /mount/external/backup/sda1.raw\n\n# convert\n# convert [--object OBJECTDEF] [--image-opts] [--target-image-opts] [--target-is-zero] [--bitmaps] [-U] [-C] [-c] [-p] [-q] [-n] [-f FMT] [-t CACHE] [-T SRC_CACHE] [-O OUTPUT_FMT] [-B BACKING_FILE [-F BACKING_FMT]] [-o OPTIONS] [-l SNAPSHOT_PARAM] [-S SPARSE_SIZE] [-r RATE_LIMIT] [-m NUM_COROUTINES] [-W] [--salvage] FILENAME [FILENAME2 [...]] OUTPUT_FILENAME\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"flag"}),(0,r.jsx)(n.th,{children:"opt"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-f"}),(0,r.jsx)(n.td,{children:"\u7b2c\u4e00\u4e2a\u955c\u50cf\u683c\u5f0f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-F"}),(0,r.jsx)(n.td,{children:"\u7b2c\u4e8c\u4e2a\u955c\u50cf\u683c\u5f0f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-s"}),(0,r.jsx)(n.td,{children:"\u4e25\u683c\u6a21\u5f0f - \u955c\u50cf size \u4e0d\u5339\u914d\uff0callocation \u5931\u8d25\u90fd\u4f1a\u9519\u8bef"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u78c1\u76d8\u683c\u5f0f",children:"\u78c1\u76d8\u683c\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["raw - \u539f\u59cb\u78c1\u76d8\u683c\u5f0f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6027\u80fd\u6700\u597d\uff0c\u5360\u7528\u7a7a\u95f4\u6700\u591a"}),"\n",(0,r.jsx)(n.li,{children:"fallocate \u53ef\u4ee5\u9884\u7559\u7a7a\u95f4"}),"\n",(0,r.jsxs)(n.li,{children:["Linux \u4e0b\u5982\u679c\u6587\u4ef6\u7cfb\u7edf\u652f\u6301 holes(ext2,ext3,NTFS \u7b49) \u5219\u53ea\u6709\u4f7f\u7528\u7684\u7a7a\u95f4\u624d\u4f1a\u88ab\u5360\u7528 - ",(0,r.jsx)(n.code,{children:"ls -ls"})," \u67e5\u770b\u7b2c\u4e00\u5217 \u6216 ",(0,r.jsx)(n.code,{children:"qemu-img info"})," \u67e5\u770b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"bochs: Bochs disk image format"}),"\n",(0,r.jsxs)(n.li,{children:["cloop - compressed loopback disk image format\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"useful only to reuse directly compressed CD-ROM images present for example in the Knoppix CD-ROMs."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["cow - User Mode Linux Copy On Write image format\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a\u4e86\u517c\u5bb9\u5b58\u5728\uff0c\u4e0d\u652f\u6301 Windows"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"dmg - Mac disk image format"}),"\n",(0,r.jsx)(n.li,{children:"iso - CDROM disk image format"}),"\n",(0,r.jsxs)(n.li,{children:["qcow - QEMU v1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a\u4e86\u517c\u5bb9\u5b58\u5728"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["qcow2 - QEMU v2\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u529f\u80fd\u6700\u4e3a\u9f50\u5168"}),"\n",(0,r.jsx)(n.li,{children:"AES \u52a0\u5bc6"}),"\n",(0,r.jsx)(n.li,{children:"zlib \u538b\u7f29"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5feb\u7167"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"qed - QEMU Enhanced Disk image format"}),"\n",(0,r.jsx)(n.li,{children:"vmdk - VMware disk image format"}),"\n",(0,r.jsx)(n.li,{children:"vpc/vhd - Windows Virtual PC disk image format / Microsoft virtual hard disk image format"}),"\n",(0,r.jsx)(n.li,{children:"nbd - Network block device"}),"\n",(0,r.jsx)(n.li,{children:"parallels - Parallels virtualization disk image format"}),"\n",(0,r.jsx)(n.li,{children:"vdi - Oracle VM VirtualBox hard disk image format"}),"\n",(0,r.jsx)(n.li,{children:"vmdk - VMware 3 and 4 compatible image format"}),"\n",(0,r.jsx)(n.li,{children:"vvfat - Virtual VFAT disk image format"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u68c0\u6d4b\u662f\u5426\u652f\u6301 holes\n# \u5982\u679c\u662f\u4e00\u77ac\u95f4\u5c31\u597d\nqemu-img create -f raw test.raw 2G\n# \u7b2c\u4e00\u5217\u4e3a\u5b9e\u9645\u5360\u7528\u5927\u5c0f\nls -lsh test.raw\n"})}),"\n",(0,r.jsx)(n.h2,{id:"holes",children:"holes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"virt-sparsify - libguestfs"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u78c1\u76d8\u538b\u7f29",children:"\u78c1\u76d8\u538b\u7f29"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pve.proxmox.com/wiki/Shrink_Qcow2_Disk_Files",children:"Shrink Qcow2 Disk Files"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://blog.programster.org/qemu-img-cheatsheet",children:"http://blog.programster.org/qemu-img-cheatsheet"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u7f29\u5c0f\n# ==========\n# \u4e3b\u673a\u5185\u6267\u884c\nfstrim -av\n\n# \u8f6c\u6362\u540e\u4f1a\u53d8\u5c0f\nqemu-img convert -O qcow2 alpine.img shrink.qcow2\n# \u4e5f\u53ef\u4ee5\u8fdb\u884c\u538b\u7f29\uff0c\u4f1a\u66f4\u5c0f\uff0c\u4f46\u542f\u52a8\u65f6\u4f1a\u6062\u590d\nqemu-img convert -O qcow2 alpine.img shrink.qcow2 -c\n"})}),"\n",(0,r.jsx)(n.h2,{id:"luks",children:"LUKS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"QCOW2 \u652f\u6301 LUKS"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.qemu.org/docs/master/system/qemu-block-drivers.html",children:"https://www.qemu.org/docs/master/system/qemu-block-drivers.html"})}),"\n",(0,r.jsx)(n.li,{children:"\u76f4\u63a5\u4f7f\u7528 LUKS \u7b49\u540c\u4e8e RAW \u52a0\u5bc6"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u521b\u5efa\u65e0\u5bc6\u7801\u78c1\u76d8\nqemu-img create -f qcow2 demo.qcow2 10M\n# RAW LUKS \u52a0\u5bc6\uff0c\u5bc6\u7801\u4e3a 123\nqemu-img create -f luks --object secret,data=123,id=sec0 -o key-secret=sec0 demo.luks 10M\n# \u5199\u5165 LUKS\nqemu-img convert --target-image-opts --object secret,data=123,id=sec0 -f qcow2 demo.qcow2 -n driver=luks,file.filename=demo.luks,key-secret=sec0\n\n# QCOW2 LUKS\nqemu-img create -f qcow2 --object secret,data=123,id=sec0 -o encrypt.format=luks -o encrypt.key-secret=sec0 demo.luks 10M\nqemu-img convert --target-image-opts --object secret,data=123,id=sec0 -f qcow2 demo.qcow2 -n driver=qcow2,file.filename=demo.luks,encrypt.key-secret=sec0\n\n# QEMU \u4f7f\u7528\n# -drive file=demo.luks,format=luks,key-secret=sec0,if=virtio -object secret,data=123,id=sec0\n\n# AES \u52a0\u5bc6\u5bc6\u94a5\nopenssl rand -base64 32 > key.b64\nKEY=$(base64 -d key.b64 | hexdump -v -e \'/1 "%02X"\')\nopenssl rand -base64 16 > iv.b64\nIV=$(base64 -d iv.b64 | hexdump -v -e \'/1 "%02X"\')\nprintf "123" | openssl enc -aes-256-cbc -a -K $KEY -iv $IV > sec.b64\n\nqemu-system-x86_64 \\\n  -object secret,id=secmaster0,format=base64,file=key.b64 \\\n  -object secret,id=sec0,keyid=secmaster0,format=base64,file=sec.b64,iv=$(< iv.b64) \\\n  -drive file=demo.luks,format=luks,key-secret=sec0,if=virtio\n\n# printf "$SECRET" | openssl enc -d -aes-256-cbc -a -K $KEY -iv $IV\n'})}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"\u5408\u5e76-backing-\u6587\u4ef6",children:"\u5408\u5e76 backing \u6587\u4ef6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://libvirt.org/kbase/backing_chains.html",children:"https://libvirt.org/kbase/backing_chains.html"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b backing\nqemu-img info --backing-chain test.qcow2\n# \u5047\u8bbe test.qcow2 \u7684 base \u662f base.qcow2\ncp base.qcow2 tmp.qcow2\n\n# \u4fee\u6539 base\nqemu-img rebase -b tmp.qcow2 test.qcow2\n# \u63d0\u4ea4\u5230 base\nqemu-img commit test.qcow2\n# \u79fb\u9664\u65e7\u7684\u6587\u4ef6\nmv tmp.qcow2 test.qcow2\n"})}),"\n",(0,r.jsx)(n.h2,{id:"zfs",children:"ZFS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ZVOL \u6027\u80fd\u53ef\u80fd\u4f1a\u6bd4 QEMU2 \u597d\u4e00\u70b9\uff0c\u4f46\u662f\u4e0d\u503c\u5f97"}),"\n",(0,r.jsx)(n.li,{children:"QEMU2 \u66f4\u597d\u7ba1\u7406\u7ef4\u62a4\uff0c\u652f\u6301\u66f4\u591a\u529f\u80fd"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u8003\u8651\u5f00\u542f zfs \u538b\u7f29 - lz4 \u89e3\u538b\u5feb\uff0czstd \u538b\u7f29\u6bd4\u9ad8"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},38088:(e,n,s)=>{var r=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,t={},d=null,o=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:o,props:t,_owner:a.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>l});var r=s(96651);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);