"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30997],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,c=d["".concat(m,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],l={title:"fio"},m=void 0,p={unversionedId:"ops/admin/fio",id:"ops/admin/fio",title:"fio",description:"fio",source:"@site/../notes/ops/admin/fio.md",sourceDirName:"ops/admin",slug:"/ops/admin/fio",permalink:"/notes/ops/admin/fio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/admin/fio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"fio"},sidebar:"docs",previous:{title:"crontab",permalink:"/notes/ops/admin/crontab"},next:{title:"gopaas",permalink:"/notes/ops/admin/gopaas"}},u={},s=[{value:"fio",id:"fio",level:2},{value:"iodepth vs numjobs",id:"iodepth-vs-numjobs",level:3}],d={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fio"},"fio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fio - I/O benchmark and stress test"),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IOPS - \u4e00\u822c 4k-64k \u968f\u673a"),(0,i.kt)("li",{parentName:"ul"},"\u541e\u5410 - \u4e00\u822c 512k+ \u987a\u5e8f"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/axboe/fio/blob/master/HOWTO"},"HOWTO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://fio.readthedocs.io/en/latest/"},"\u6587\u6863")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IOPS"},"IOPS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HDD IOPS \u4e00\u822c 55-180"),(0,i.kt)("li",{parentName:"ul"},"SSD IOPS \u4e00\u822c 3,000 \u2013 40,000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tobert.github.io/post/2014-04-17-fio-output-explained.html"},"Fio Output Explained")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.purestorage.com/io-plumbing-tests-with-fio/"},"IO Plumbing tests with FIO"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"opt"),(0,i.kt)("th",{parentName:"tr",align:null},"mean"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u540d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"directory"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u76ee\u5f55")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Job \u540d\u5b57")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"direct"),(0,i.kt)("td",{parentName:"tr",align:null},"true \u65e0 io buffer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"engine"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u5f15\u64ce")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iodepth"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rw"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bfb\u5199\u6a21\u5f0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bs"),(0,i.kt)("td",{parentName:"tr",align:null},"Block size - \u9ed8\u8ba4 4k")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"Job \u5904\u7406\u7684\u6587\u4ef6\u5927\u5c0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numjobs"),(0,i.kt)("td",{parentName:"tr",align:null},"Job/\u7ebf\u7a0b\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time_based"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u6ee1\u8db3 runtime \u800c\u4e0d\u662f size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"runtime"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u957f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"group_reporting"),(0,i.kt)("td",{parentName:"tr",align:null},"numjobs \u65f6\u5206\u7ec4\u663e\u793a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parse-only"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ea\u89e3\u6790\u9009\u9879\uff0c\u4e0d\u6267\u884c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"section"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u914d\u7f6e\u4e2d\u7684\u6307\u5b9a section")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"engine",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sync - \u540c\u6b65\uff0c\u64cd\u4f5c\u7b49\u5f85\u5b8c\u6210"),(0,i.kt)("li",{parentName:"ul"},"io_uring"),(0,i.kt)("li",{parentName:"ul"},"libaio - Linux AIO"),(0,i.kt)("li",{parentName:"ul"},"http"),(0,i.kt)("li",{parentName:"ul"},"mtd"),(0,i.kt)("li",{parentName:"ul"},"nbd"),(0,i.kt)("li",{parentName:"ul"},"libiscsi"),(0,i.kt)("li",{parentName:"ul"},"nfs"))),(0,i.kt)("li",{parentName:"ul"},"iodepth",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f02\u6b65 ioengine \u4e00\u6279\u63d0\u4ea4\u7684\u5355\u5143\u6570"),(0,i.kt)("li",{parentName:"ul"},"=queue depth"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6548\u679c\u53d6\u51b3\u4e8e engine"))),(0,i.kt)("li",{parentName:"ul"},"rw",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"read - \u968f\u673a\u5199"),(0,i.kt)("li",{parentName:"ul"},"write"),(0,i.kt)("li",{parentName:"ul"},"trim - Linux block devices & SCSI"),(0,i.kt)("li",{parentName:"ul"},"randread - \u968f\u673a\u8bfb"),(0,i.kt)("li",{parentName:"ul"},"randwrite"),(0,i.kt)("li",{parentName:"ul"},"randtrim"),(0,i.kt)("li",{parentName:"ul"},"rw,readwrite - \u8bfb\u5199\u6df7\u5408 - \u9ed8\u8ba4 50/50"),(0,i.kt)("li",{parentName:"ul"},"randrw"),(0,i.kt)("li",{parentName:"ul"},"trimwrite - trim & write")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"numjobs \u4e0d\u8981\u8d85\u8fc7 nproc"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apk add fio\n\nfio --name=sync-4k-w -direct=1 --bs=4k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randwrite\nfio --name=sync-4k-r -direct=1 --bs=4k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randread\n\nfio --name=sync-512k-w -direct=1 --bs=512k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randwrite --time_based\nfio --name=sync-512k-r -direct=1 --bs=512k -ioengine sync --numjobs=1 --runtime=60 --size=100m -rw=randread --time_based\n\n# 4k 100% Read or 100% Write 100% 4k\nfio --filename=/data/test --direct=1 --rw=randrw --refill_buffers --norandommap --randrepeat=0 --bs=4k --size=2g --rwmixread=100 --iodepth=16 --numjobs=16 --runtime=60 --group_reporting --name=4ktest\n\n# 8k 70/30 70% Read, 30% Write 100% 8k\nfio --filename=/data/test --rw=randrw --refill_buffers --norandommap --randrepeat=0 --bs=8k --rwmixread=70 --size=2g --iodepth=16 --numjobs=16 --runtime=60 --group_reporting --name=8k7030test\n\n# \u6d4b\u8bd5\u968f\u673a\u5199IOPS\nfio -direct=1 -iodepth=128 -rw=randwrite -ioengine=libaio -bs=4k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u968f\u673a\u8bfbIOPS\nfio -direct=1 -iodepth=128 -rw=randread -ioengine=libaio -bs=4k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u5199\u541e\u5410\u91cf\nfio -direct=1 -iodepth=64 -rw=randwrite -ioengine=libaio -bs=64k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n# \u6d4b\u8bd5\u8bfb\u541e\u5410\u91cf\nfio -direct=1 -iodepth=64 -rw=randread -ioengine=libaio -bs=64k -size=10G -numjobs=1 -runtime=1000 -group_reporting -name=/path/testfile\n\n# fio -iodepth=1 -numjobs=1 -direct=1 -rw=randwrite\nfio --name=randwrite --ioengine=libaio --iodepth=1 --rw=randwrite --bs=4k --direct=0 --size=512M --numjobs=2 --runtime=240 --group_reporting\n\n# Sequential Reads \u2013 Async mode \u2013 8K block size \u2013 Direct IO \u2013 100% Reads\nfio --name=seqread --rw=read --direct=1 --ioengine=libaio --bs=8k --numjobs=8 --size=1G --runtime=600  --group_reporting\n# Sequential Writes \u2013 Async mode \u2013 32K block size \u2013 Direct IO \u2013 100% Writes\nfio --name=seqwrite --rw=write --direct=1 --ioengine=libaio --bs=32k --numjobs=4 --size=2G --runtime=600 --group_reporting\n# Random Reads \u2013 Async mode \u2013 8K block size \u2013 Direct IO \u2013 100% Reads\nfio --name=randread --rw=randread --direct=1 --ioengine=libaio --bs=8k --numjobs=16 --size=1G --runtime=600 --group_reporting\n# Random Writes \u2013 Async mode \u2013 64K block size \u2013 Direct IO \u2013 100% Writes\nfio --name=randwrite --rw=randwrite --direct=1 --ioengine=libaio --bs=64k --numjobs=8 --size=512m --runtime=600 --group_reporting\n# Random Read/Writes \u2013 Async mode \u2013 16K block size \u2013 Direct IO \u2013 90% Reads/10% Writes\nfio --name=randrw --rw=randrw --direct=1 --ioengine=libaio --bs=16k --numjobs=8 --rwmixread=90 --size=1G --runtime=600 --group_reporting\n")),(0,i.kt)("h3",{id:"iodepth-vs-numjobs"},"iodepth vs numjobs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://unix.stackexchange.com/a/459142/47774"},"https://unix.stackexchange.com/a/459142/47774")),(0,i.kt)("p",null,"A sequential job with iodepth=2 will submit two sequential IO requests at a time.\nA sequential job with numjobs=2 will have two threads, each submitting sequential IO."))}k.isMDXComponent=!0}}]);