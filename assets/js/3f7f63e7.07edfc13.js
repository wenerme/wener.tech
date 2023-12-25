/*! For license information please see 3f7f63e7.07edfc13.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30997],{90716:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(11527),t=i(47214);const s={title:"fio"},d=void 0,o={id:"ops/admin/fio",title:"fio",description:"fio",source:"@site/../notes/ops/admin/fio.md",sourceDirName:"ops/admin",slug:"/ops/admin/fio",permalink:"/notes/ops/admin/fio",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/admin/fio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687429668,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"fio"},sidebar:"docs",previous:{title:"crontab",permalink:"/notes/ops/admin/crontab"},next:{title:"gopaas",permalink:"/notes/ops/admin/gopaas"}},l={},c=[{value:"fio",id:"fio",level:2},{value:"iodepth vs numjobs",id:"iodepth-vs-numjobs",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"fio",children:"fio"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"fio - I/O benchmark and stress test"}),"\n",(0,r.jsxs)(e.li,{children:["\u6d4b\u8bd5\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"IOPS - \u4e00\u822c 4k-64k \u968f\u673a"}),"\n",(0,r.jsx)(e.li,{children:"\u541e\u5410 - \u4e00\u822c 512k+ \u987a\u5e8f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/axboe/fio/blob/master/HOWTO",children:"HOWTO"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://fio.readthedocs.io/en/latest/",children:"\u6587\u6863"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/IOPS",children:"IOPS"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"HDD IOPS \u4e00\u822c 55-180"}),"\n",(0,r.jsx)(e.li,{children:"SSD IOPS \u4e00\u822c 3,000 \u2013 40,000"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tobert.github.io/post/2014-04-17-fio-output-explained.html",children:"Fio Output Explained"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://blog.purestorage.com/io-plumbing-tests-with-fio/",children:"IO Plumbing tests with FIO"})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"opt"}),(0,r.jsx)(e.th,{children:"mean"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"filename"}),(0,r.jsx)(e.td,{children:"\u6587\u4ef6\u540d"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"directory"}),(0,r.jsx)(e.td,{children:"\u6587\u4ef6\u76ee\u5f55"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"name"}),(0,r.jsx)(e.td,{children:"Job \u540d\u5b57"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"direct"}),(0,r.jsx)(e.td,{children:"true \u65e0 io buffer"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"engine"}),(0,r.jsx)(e.td,{children:"\u6267\u884c\u5f15\u64ce"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"iodepth"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rw"}),(0,r.jsx)(e.td,{children:"\u8bfb\u5199\u6a21\u5f0f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"bs"}),(0,r.jsx)(e.td,{children:"Block size - \u9ed8\u8ba4 4k"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"size"}),(0,r.jsx)(e.td,{children:"Job \u5904\u7406\u7684\u6587\u4ef6\u5927\u5c0f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"numjobs"}),(0,r.jsx)(e.td,{children:"Job/\u7ebf\u7a0b\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"time_based"}),(0,r.jsx)(e.td,{children:"\u4f18\u5148\u6ee1\u8db3 runtime \u800c\u4e0d\u662f size"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"runtime"}),(0,r.jsx)(e.td,{children:"\u8fd0\u884c\u65f6\u957f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"group_reporting"}),(0,r.jsx)(e.td,{children:"numjobs \u65f6\u5206\u7ec4\u663e\u793a"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"parse-only"}),(0,r.jsx)(e.td,{children:"\u53ea\u89e3\u6790\u9009\u9879\uff0c\u4e0d\u6267\u884c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"section"}),(0,r.jsx)(e.td,{children:"\u6267\u884c\u914d\u7f6e\u4e2d\u7684\u6307\u5b9a section"})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["engine\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"sync - \u540c\u6b65\uff0c\u64cd\u4f5c\u7b49\u5f85\u5b8c\u6210"}),"\n",(0,r.jsx)(e.li,{children:"psync - \u9ed8\u8ba4"}),"\n",(0,r.jsx)(e.li,{children:"io_uring"}),"\n",(0,r.jsx)(e.li,{children:"libaio - Linux AIO"}),"\n",(0,r.jsx)(e.li,{children:"http"}),"\n",(0,r.jsx)(e.li,{children:"mtd"}),"\n",(0,r.jsx)(e.li,{children:"nbd"}),"\n",(0,r.jsx)(e.li,{children:"libiscsi"}),"\n",(0,r.jsx)(e.li,{children:"nfs"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["iodepth\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5f02\u6b65 ioengine \u4e00\u6279\u63d0\u4ea4\u7684\u5355\u5143\u6570"}),"\n",(0,r.jsx)(e.li,{children:"=queue depth"}),"\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u6548\u679c\u53d6\u51b3\u4e8e engine"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["rw\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"read - \u968f\u673a\u5199"}),"\n",(0,r.jsx)(e.li,{children:"write"}),"\n",(0,r.jsx)(e.li,{children:"trim - Linux block devices & SCSI"}),"\n",(0,r.jsx)(e.li,{children:"randread - \u968f\u673a\u8bfb"}),"\n",(0,r.jsx)(e.li,{children:"randwrite"}),"\n",(0,r.jsx)(e.li,{children:"randtrim"}),"\n",(0,r.jsx)(e.li,{children:"rw,readwrite - \u8bfb\u5199\u6df7\u5408 - \u9ed8\u8ba4 50/50"}),"\n",(0,r.jsx)(e.li,{children:"randrw"}),"\n",(0,r.jsx)(e.li,{children:"trimwrite - trim & write"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{type:"caution",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"numjobs \u4e0d\u8981\u8d85\u8fc7 nproc"}),"\n"]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"apk add fio\n\nfio --name=sync-4k-w -direct=1 --bs=4k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randwrite\nfio --name=sync-4k-r -direct=1 --bs=4k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randread\n\nfio --name=sync-512k-w -direct=1 --bs=512k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randwrite --time_based\nfio --name=sync-512k-r -direct=1 --bs=512k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randread --time_based\n\n# 4k 100% Read or 100% Write 100% 4k\nfio --filename=/data/test --direct=1 --rw=randrw --refill_buffers --norandommap --randrepeat=0 --bs=4k --size=2g --rwmixread=100 --iodepth=16 --numjobs=16 --runtime=60 --group_reporting --name=4ktest\n\n# 8k 70/30 70% Read, 30% Write 100% 8k\nfio --filename=/data/test --rw=randrw --refill_buffers --norandommap --randrepeat=0 --bs=8k --rwmixread=70 --size=2g --iodepth=16 --numjobs=16 --runtime=60 --group_reporting --name=8k7030test\n\n# \u6d4b\u8bd5\u968f\u673a\u5199IOPS\nfio -direct=1 -iodepth=128 -rw=randwrite -ioengine=libaio -bs=4k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u968f\u673a\u8bfbIOPS\nfio -direct=1 -iodepth=128 -rw=randread -ioengine=libaio -bs=4k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u5199\u541e\u5410\u91cf\nfio -direct=1 -iodepth=64 -rw=randwrite -ioengine=libaio -bs=64k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u8bfb\u541e\u5410\u91cf\nfio -direct=1 -iodepth=64 -rw=randread -ioengine=libaio -bs=64k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n\n# fio -iodepth=1 -numjobs=1 -direct=1 -rw=randwrite\nfio --name=randwrite --ioengine=libaio --iodepth=1 --rw=randwrite --bs=4k --direct=0 --size=512M --numjobs=2 --runtime=240 --group_reporting\n\n# Sequential Reads \u2013 Async mode \u2013 8K block size \u2013 Direct IO \u2013 100% Reads\nfio --name=seqread --rw=read --direct=1 --ioengine=libaio --bs=8k --numjobs=8 --size=1G --runtime=600  --group_reporting\n# Sequential Writes \u2013 Async mode \u2013 32K block size \u2013 Direct IO \u2013 100% Writes\nfio --name=seqwrite --rw=write --direct=1 --ioengine=libaio --bs=32k --numjobs=4 --size=2G --runtime=600 --group_reporting\n# Random Reads \u2013 Async mode \u2013 8K block size \u2013 Direct IO \u2013 100% Reads\nfio --name=randread --rw=randread --direct=1 --ioengine=libaio --bs=8k --numjobs=16 --size=1G --runtime=600 --group_reporting\n# Random Writes \u2013 Async mode \u2013 64K block size \u2013 Direct IO \u2013 100% Writes\nfio --name=randwrite --rw=randwrite --direct=1 --ioengine=libaio --bs=64k --numjobs=8 --size=512m --runtime=600 --group_reporting\n# Random Read/Writes \u2013 Async mode \u2013 16K block size \u2013 Direct IO \u2013 90% Reads/10% Writes\nfio --name=randrw --rw=randrw --direct=1 --ioengine=libaio --bs=16k --numjobs=8 --rwmixread=90 --size=1G --runtime=600 --group_reporting\n"})}),"\n",(0,r.jsx)(e.h3,{id:"iodepth-vs-numjobs",children:"iodepth vs numjobs"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://unix.stackexchange.com/a/459142/47774",children:"https://unix.stackexchange.com/a/459142/47774"})}),"\n",(0,r.jsx)(e.p,{children:"A sequential job with iodepth=2 will submit two sequential IO requests at a time.\nA sequential job with numjobs=2 will have two threads, each submitting sequential IO."})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},3354:(n,e,i)=>{var r=i(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,i){var r,s={},c=null,a=null;for(r in void 0!==i&&(c=""+i),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(a=e.ref),e)d.call(e,r)&&!l.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:t,type:n,key:c,ref:a,props:s,_owner:o.current}}e.Fragment=s,e.jsx=c,e.jsxs=c},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>d});var r=i(50959);const t={},s=r.createContext(t);function d(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);