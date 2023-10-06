"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41764],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=s,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return b},default:function(){return B},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return y}});var r=n(49613),s=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,a(t)),h=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const d={title:"Benchmark"},b="Benchmark",k={unversionedId:"ops/admin/benchmark",id:"ops/admin/benchmark",title:"Benchmark",description:"- https://wiki.archlinux.org/index.php/benchmarking",source:"@site/../notes/ops/admin/benchmark.md",sourceDirName:"ops/admin",slug:"/ops/admin/benchmark",permalink:"/notes/ops/admin/benchmark",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/admin/benchmark.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688206885,formattedLastUpdatedAt:"Jul 1, 2023",frontMatter:{title:"Benchmark"},sidebar:"docs",previous:{title:"augeas",permalink:"/notes/ops/admin/augeas"},next:{title:"crontab",permalink:"/notes/ops/admin/crontab"}},f={},y=[{value:"Disk",id:"disk",level:2},{value:"http",id:"http",level:2},{value:"Network",id:"network",level:2},{value:"sysbench",id:"sysbench",level:2},{value:"cryptsetup benchmark",id:"cryptsetup-benchmark",level:2},{value:"Intel Xeon E5-2660 v2 (20) @ 3.000GHz",id:"intel-xeon-e5-2660-v2-20--3000ghz",level:3},{value:"Intel Xeon E5-2666 v3 (40) @ 3.500GHz",id:"intel-xeon-e5-2666-v3-40--3500ghz",level:3},{value:"stress-ng",id:"stress-ng",level:4},{value:"AMD EPYC 7601 (128) @ 2.200GHz",id:"amd-epyc-7601-128--2200ghz",level:3},{value:"sysbench",id:"sysbench-1",level:4},{value:"stress-ng",id:"stress-ng-1",level:4}],g={toc:y},w="wrapper";function B(e){var t=e,{components:n}=t,s=h(t,["components"]);return(0,r.kt)(w,u(m(m({},g),s),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"benchmark"}),"Benchmark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/benchmarking"}),"https://wiki.archlinux.org/index.php/benchmarking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://www.jens-hartmann.at/Fritzmarks/"}),"http://www.jens-hartmann.at/Fritzmarks/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://openbenchmarking.org/"}),"https://openbenchmarking.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://www.phoronix-test-suite.com/"}),"http://www.phoronix-test-suite.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/phoronix-test-suite/phoronix-test-suite"}),"https://github.com/phoronix-test-suite/phoronix-test-suite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://browser.geekbench.com/"}),"https://browser.geekbench.com/"))),(0,r.kt)("h2",m({},{id:"disk"}),"Disk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u573a\u666f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u987a\u5e8f\u8bfb\u5199 \uff08\u541e\u5410\u91cf\uff0c\u5e38\u7528\u5355\u4f4d\u4e3a MB/s\uff09\uff1a\u6587\u4ef6\u5728\u786c\u76d8\u4e0a\u5b58\u50a8\u4f4d\u7f6e\u662f\u8fde\u7eed\u7684\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a\u5927\u6587\u4ef6\u62f7\u8d1d\uff08\u6bd4\u5982\u89c6\u9891\u97f3\u4e50\uff09\u3002\u901f\u5ea6\u5373\u4f7f\u5f88\u9ad8\uff0c\u5bf9\u6570\u636e\u5e93\u6027\u80fd\u4e5f\u6ca1\u6709\u53c2\u8003\u4ef7\u503c\u3002"))),(0,r.kt)("li",{parentName:"ul"},"4K \u968f\u673a\u8bfb\u5199 \uff08IOPS\uff0c\u5e38\u7528\u5355\u4f4d\u4e3a\u6b21\uff09\uff1a\u5728\u786c\u76d8\u4e0a\u968f\u673a\u4f4d\u7f6e\u8bfb\u5199\u6570\u636e\uff0c\u6bcf\u6b21 4KB\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f\uff1a\u64cd\u4f5c\u7cfb\u7edf\u8fd0\u884c\u3001\u8f6f\u4ef6\u8fd0\u884c\u3001\u6570\u636e\u5e93\u3002"))))),(0,r.kt)("li",{parentName:"ul"},"\u590d\u6742\u538b\u6d4b\u8003\u8651\u4f7f\u7528 ",(0,r.kt)("a",m({parentName:"li"},{href:"#fio"}),"fio"))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'apk add hdparm\n\n# \u7b80\u5355\u7684\u6587\u4ef6\u5199\u5165\u6027\u80fd\n# \u56e0\u4e3a\u5199\u5165\u7684 0 \u9700\u8981\u6ce8\u610f\u5e95\u5c42\u7cfb\u7edf\u662f\u5426\u4f1a\u8fdb\u884c\u538b\u7f29\ndd if=/dev/zero of=test conv=fdatasync bs=384k count=1k status=progress\nrm -f test\n\nhdparm -I /dev/sda  # \u78c1\u76d8\u4fe1\u606f\nhdparm -Tt /dev/sda # \u78c1\u76d8\u6027\u80fd\n\ncd "/usr/local/share/ca-certificates" && curl "https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem" | csplit -f "rds-" - \'/-----BEGIN CERTIFICATE-----/\' \'{*}\'\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tools",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.coker.com.au/bonnie++/"}),"https://www.coker.com.au/bonnie++/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hard drive and file system performance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/benschweizer/iops"}),"https://github.com/benschweizer/iops")))),(0,r.kt)("li",{parentName:"ul"},"block",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://www.iometer.org/"}),"http://www.iometer.org/")))),(0,r.kt)("li",{parentName:"ul"},"by dd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://romanrm.net/dd-benchmark"}),"https://romanrm.net/dd-benchmark")))),(0,r.kt)("li",{parentName:"ul"},"pm-utils",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pm-suspend")))),(0,r.kt)("h2",m({},{id:"http"}),"http"),(0,r.kt)("p",null,"ab\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/rakyll/hey"}),"https://github.com/rakyll/hey"),"\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/JoeDog/siege"}),"https://github.com/JoeDog/siege")),(0,r.kt)("h2",m({},{id:"network"}),"Network"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u901f\u5ea6\u68c0\u6d4b\n# \u670d\u52a1\u7aef\nnc -v -v -l -n -p 8000 | pv > /dev/null\n# \u5ba2\u6237\u7aef\ntime yes | pv | nc -v -v -n 192.168.1.1 8000 > /dev/null\n\n# \u7b80\u5355\u7684 TCP/IP \u5ef6\u65f6\u6d4b\u8bd5\n# \u670d\u52a1\u7aef\nnc -v -v -n -k -l 8000 | pv > /dev/null\n# \u5ba2\u6237\u7aef\n# \u8ba1\u7b97\u63a5\u6536\u548c\u53d1\u9001\u65f6\u95f4\nnmap --packet-trace -p 8000 192.168.1.2\n\n# qperf\n# ==========\napk add --no-cache -X http://mirrors.aliyun.com/alpine/edge/testing qperf\n# \u670d\u52a1\u7aef\nqperf\n# \u5ba2\u6237\u7aef\n# _bw \u5e26\u5bbd, _lat \u5ef6\u8fdf, \u534f\u8bae\u652f\u6301 rds, sctp, sdp, tcp, udp\nqperf 192.168.2.2 tcp_bw tcp_lat\n# \u4e07\u5146 tcp_bw: 1.12 GB/sec tcp_lat: 23.9 us\n# \u5343\u5146 tcp_bw: 117 MB/sec tcp_lat: 41.6 us\n\n# iperf\n# ==========\n# https://iperf.fr/\napk add iperf3\niperf3 -s\niperf3 -c 192.168.1.2\n")),(0,r.kt)("h2",m({},{id:"sysbench"}),"sysbench"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/akopytov/sysbench"}),"akopytov/sysbench")),(0,r.kt)("li",{parentName:"ul"},"\u5167\u5efa\u6d4b\u8bd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fileio: a filesystem-level benchmark"),(0,r.kt)("li",{parentName:"ul"},"cpu: a simple CPU benchmark"),(0,r.kt)("li",{parentName:"ul"},"memory: a memory access benchmark"),(0,r.kt)("li",{parentName:"ul"},"threads: a thread-based scheduler benchmark"),(0,r.kt)("li",{parentName:"ul"},"mutex: a POSIX mutex benchmark")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install sysbench --without-mysql\n# AlpineLinux\napk add sysbench\n\n# build from source\ngit clone --depth=1 https://github.com/akopytov/sysbench\ncd sysbench\n./autogen.sh\n./configure --without-mysql --prefix $PWD/dist\nmake -j 8\nmake install\n\n# \u9ed8\u8ba4 --threads=1 --time=10 --warmup-time=0\nsysbench cpu run\nsysbench cpu run --threads=$(nproc) --warmup-time=10 --time=20\n# \u67e5\u770b\u6d4b\u8bd5\u76f8\u5173\u5e2e\u52a9\nsysbench memory help\n# \u9ed8\u8ba4 --memory-block-size=1K --memory-total-size=100G --memory-oper=write --memory-access-mode=seq\nsysbench memory run\nsysbench memory run --memory-oper=read --memory-access-mode=rnd\n# \u9ed8\u8ba4 --file-num=128 --file-block-size=16384 --file-total-size=2G --file-io-mode=sync --file-rw-ratio=1.5\n# --file-test-mode seqwr, seqrewr, seqrd, rndrd, rndwr, rndrw\n# --file-io-mode sync,async,mmap\nsysbench fileio prepare\nsysbench fileio run --file-test-mode=rndwr --threads=$(nproc) --warmup-time=10 --time=20\n")),(0,r.kt)("h2",m({},{id:"cryptsetup-benchmark"}),"cryptsetup benchmark"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"apk add cryptsetup\ncryptsetup benchmark\n")),(0,r.kt)("h3",m({},{id:"intel-xeon-e5-2660-v2-20--3000ghz"}),"Intel Xeon E5-2660 v2 (20) @ 3.000GHz"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"PBKDF2-sha1       431868 iterations per second for 256-bit key\nPBKDF2-sha256     652911 iterations per second for 256-bit key\nPBKDF2-sha512     451972 iterations per second for 256-bit key\nPBKDF2-ripemd160  309497 iterations per second for 256-bit key\nPBKDF2-whirlpool  173146 iterations per second for 256-bit key\nargon2i       5 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\nargon2id      5 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\n#     Algorithm |       Key |      Encryption |      Decryption\n        aes-cbc        128b       360.1 MiB/s      1103.8 MiB/s\n    serpent-cbc        128b        44.6 MiB/s       177.5 MiB/s\n    twofish-cbc        128b       108.6 MiB/s       206.2 MiB/s\n        aes-cbc        256b       262.2 MiB/s       859.0 MiB/s\n    serpent-cbc        256b        51.6 MiB/s       177.1 MiB/s\n    twofish-cbc        256b       113.7 MiB/s       202.7 MiB/s\n        aes-xts        256b       972.3 MiB/s       967.8 MiB/s\n    serpent-xts        256b       165.3 MiB/s       169.1 MiB/s\n    twofish-xts        256b       187.9 MiB/s       193.4 MiB/s\n        aes-xts        512b       782.2 MiB/s       778.0 MiB/s\n    serpent-xts        512b       177.1 MiB/s       168.4 MiB/s\n    twofish-xts        512b       190.9 MiB/s       187.9 MiB/s\n")),(0,r.kt)("h3",m({},{id:"intel-xeon-e5-2666-v3-40--3500ghz"}),"Intel Xeon E5-2666 v3 (40) @ 3.500GHz"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"PBKDF2-sha1      1046483 iterations per second for 256-bit key\nPBKDF2-sha256    1495828 iterations per second for 256-bit key\nPBKDF2-sha512    1201117 iterations per second for 256-bit key\nPBKDF2-ripemd160  659481 iterations per second for 256-bit key\nPBKDF2-whirlpool  450419 iterations per second for 256-bit key\nargon2i       4 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\nargon2id      4 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\n#     Algorithm |       Key |      Encryption |      Decryption\n        aes-cbc        128b       511.0 MiB/s      2380.8 MiB/s\n    serpent-cbc        128b        78.9 MiB/s       532.0 MiB/s\n    twofish-cbc        128b       147.6 MiB/s       339.5 MiB/s\n        aes-cbc        256b       428.3 MiB/s      1758.8 MiB/s\n    serpent-cbc        256b        82.6 MiB/s       513.0 MiB/s\n    twofish-cbc        256b       172.7 MiB/s       330.4 MiB/s\n        aes-xts        256b      1845.8 MiB/s      2082.5 MiB/s\n    serpent-xts        256b       486.0 MiB/s       452.9 MiB/s\n    twofish-xts        256b       311.6 MiB/s       312.9 MiB/s\n        aes-xts        512b      1670.7 MiB/s      1651.7 MiB/s\n    serpent-xts        512b       481.1 MiB/s       459.3 MiB/s\n    twofish-xts        512b       311.0 MiB/s       303.7 MiB/s\n")),(0,r.kt)("h4",m({},{id:"stress-ng"}),"stress-ng"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"stress-ng --metrics-brief --cpu $(nproc) -t 1m\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"setting to a 60 second run per stressor\ndispatching hogs: 40 cpu\nstressor       bogo ops real time  usr time  sys time   bogo ops/s     bogo ops/s\n                          (secs)    (secs)    (secs)   (real time) (usr+sys time)\ncpu             2096887     60.00   2212.41      0.35     34947.11         947.63\nsuccessful run completed in 60.01s (1 min, 0.01 secs)\n")),(0,r.kt)("h3",m({},{id:"amd-epyc-7601-128--2200ghz"}),"AMD EPYC 7601 (128) @ 2.200GHz"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"PBKDF2-sha1       752206 iterations per second for 256-bit key\nPBKDF2-sha256    1353001 iterations per second for 256-bit key\nPBKDF2-sha512     644088 iterations per second for 256-bit key\nPBKDF2-ripemd160  442064 iterations per second for 256-bit key\nPBKDF2-whirlpool  378820 iterations per second for 256-bit key\nargon2i       4 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\nargon2id      4 iterations, 1048576 memory, 4 parallel threads (CPUs) for 256-bit key (requested 2000 ms time)\n#     Algorithm |       Key |      Encryption |      Decryption\n        aes-cbc        128b       872.1 MiB/s      2663.1 MiB/s\n    serpent-cbc        128b        80.5 MiB/s       316.1 MiB/s\n    twofish-cbc        128b       174.3 MiB/s       320.9 MiB/s\n        aes-cbc        256b       697.7 MiB/s      2286.4 MiB/s\n    serpent-cbc        256b        88.4 MiB/s       316.0 MiB/s\n    twofish-cbc        256b       182.1 MiB/s       320.9 MiB/s\n        aes-xts        256b      2222.5 MiB/s      2224.5 MiB/s\n    serpent-xts        256b       287.5 MiB/s       290.9 MiB/s\n    twofish-xts        256b       293.0 MiB/s       296.7 MiB/s\n        aes-xts        512b      1905.1 MiB/s      1897.8 MiB/s\n    serpent-xts        512b       294.1 MiB/s       291.3 MiB/s\n    twofish-xts        512b       296.6 MiB/s       295.8 MiB/s\n")),(0,r.kt)("h4",m({},{id:"sysbench-1"}),"sysbench"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"sysbench cpu run --threads=$(nproc) --cpu-max-prime=20000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)\n\nRunning the test with following options:\nNumber of threads: 128\nInitializing random number generator from current time\n\n\nPrime numbers limit: 20000\n\nInitializing worker threads...\n\nThreads started!\n\nCPU speed:\n    events per second: 30864.15\n\nGeneral statistics:\n    total time:                          10.0046s\n    total number of events:              308833\n\nLatency (ms):\n         min:                                    1.78\n         avg:                                    4.06\n         max:                                  114.08\n         95th percentile:                        4.10\n         sum:                              1253151.81\n\nThreads fairness:\n    events (avg/stddev):           2412.7578/60.50\n    execution time (avg/stddev):   9.7902/0.15\n")),(0,r.kt)("h4",m({},{id:"stress-ng-1"}),"stress-ng"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"stress-ng --metrics-brief --cpu $(nproc) -t 1m\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"setting to a 60 second run per stressor\ndispatching hogs: 128 cpu\nstressor       bogo ops real time  usr time  sys time   bogo ops/s     bogo ops/s\n                          (secs)    (secs)    (secs)   (real time) (usr+sys time)\ncpu             6770087     60.00   7654.65      0.01    112830.66         884.44\nsuccessful run completed in 60.03s (1 min, 0.03 secs)\n")))}B.isMDXComponent=!0}}]);