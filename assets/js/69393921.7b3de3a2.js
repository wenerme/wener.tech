/*! For license information please see 69393921.7b3de3a2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48068],{42572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var l=s(2488),i=s(62780);const r={title:"musl"},t="musl",c={id:"os/linux/lib/musl",title:"musl",description:"- malloc \u5927\u573a\u666f\u6027\u80fd\u5f31 - \u6027\u80fd\u8981\u6c42\u9ad8\u7684\u573a\u666f\u4f7f\u7528 jemalloc \u6216 mimaloc",source:"@site/../notes/os/linux/lib/musl.md",sourceDirName:"os/linux/lib",slug:"/os/linux/lib/musl",permalink:"/notes/os/linux/lib/musl",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/lib/musl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1709090151,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{title:"musl"},sidebar:"docs",previous:{title:"malloc",permalink:"/notes/os/linux/lib/malloc"},next:{title:"Linux Awesome",permalink:"/notes/os/linux/awesome"}},d={},h=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"DNS \u95ee\u9898",id:"dns-\u95ee\u9898",level:2},{value:"musl issues",id:"musl-issues",level:2},{value:"malloc performance",id:"malloc-performance",level:2},{value:"pthread_attr_setaffinity_np",id:"pthread_attr_setaffinity_np",level:2},{value:"pthread_rwlockattr_setkind_np",id:"pthread_rwlockattr_setkind_np",level:2},{value:"gcompat",id:"gcompat",level:2},{value:"symbols",id:"symbols",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"musl",children:"musl"}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"malloc \u5927\u573a\u666f\u6027\u80fd\u5f31 - \u6027\u80fd\u8981\u6c42\u9ad8\u7684\u573a\u666f\u4f7f\u7528 jemalloc \u6216 mimaloc"}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 utmp/wtmp - last,who,users \u547d\u4ee4\u90e8\u5206\u529f\u80fd\u4e0d\u53ef\u7528\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b89\u5168\u8003\u8651\u3001\u9690\u79c1\u8003\u8651"}),"\n",(0,l.jsx)(n.li,{children:"\u9700\u8981\u5b9e\u73b0 suid/sgid \u4fee\u6539 \u8bb0\u5f55"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://wiki.musl-libc.org/faq.html",children:"https://wiki.musl-libc.org/faq.html"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://musl.libc.org/",children:"musl"})," - MIT\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.musl-libc.org/faq.html",children:"FAQ"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://wiki.musl-libc.org/functional-differences-from-glibc.html",children:"\u4e0e glibc \u7684\u4e0d\u540c\u70b9"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Env"}),(0,l.jsx)(n.th,{children:"Used by"}),(0,l.jsx)(n.th,{children:"Note"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"PATH"}),(0,l.jsx)(n.td,{children:"execvp, execlp, posix_spawnp"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TZ"}),(0,l.jsx)(n.td,{}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"stdoffset[dst[offset][,start[/time],end[/time]]"})," \u6216 \u540d\u5b57"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"DATEMSK"}),(0,l.jsx)(n.td,{children:"getdate"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"PWD"}),(0,l.jsx)(n.td,{children:"get_current_dir_name, getcwd"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"LOGNAME"}),(0,l.jsx)(n.td,{children:"getlogin"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"LD_PRELOAD"}),(0,l.jsx)(n.td,{children:"setuid, setgid \u5ffd\u7565"}),(0,l.jsx)(n.td,{children:"dl \u9884\u52a0\u8f7d\u52a8\u6001\u5e93\u5217\u8868"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"LD_LIBRARY_PATH"}),(0,l.jsx)(n.td,{children:"setuid, setgid \u5ffd\u7565"}),(0,l.jsx)(n.td,{children:"\u52a8\u6001\u5e93\u641c\u7d22\u76ee\u5f55\u5217\u8868"})]})]})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["TZ \u641c\u7d22\u76ee\u5f55\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"/usr/share/zoneinfo"}),"\n",(0,l.jsx)(n.li,{children:"/share/zoneinfo"}),"\n",(0,l.jsx)(n.li,{children:"/etc/zoneinfo"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://wiki.musl-libc.org/environment-variables.html",children:"Environment Variables"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"dns-\u95ee\u9898",children:"DNS \u95ee\u9898"}),"\n",(0,l.jsx)(n.p,{children:"resolv \u4e0d\u652f\u6301 dns over tcp/edns, \u56e0\u6b64\u4e00\u6b21 resolve \u6700\u591a\u8fd4\u56de \u4e00\u4e2a\u5305\uff0c512 bytes\uff0c\u6709\u65f6\u5019\u89e3\u6790\u4f1a\u56e0\u6b64\u51fa\u73b0\u95ee\u9898\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u95ee\u9898\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://gitlab.alpinelinux.org/alpine/aports/issues/9734",children:"alpine/aports#9734"})," - DNS resolver patch\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AAAA \u4e0d\u8bc6\u522b NotImp \u5bfc\u81f4\u7b49\u5f85\u8d85\u65f6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u4f1a\u540c\u65f6\u53d1\u8d77 A \u548c AAAA \u8bf7\u6c42"}),"\n",(0,l.jsx)(n.li,{children:"glibc's DNS resolver only generates AAAA queries if it can create an IPv6 socket."}),"\n",(0,l.jsx)(n.li,{children:"5s \u8d85\u65f6\u91cd\u8bd5"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"options single-request"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"options timeout:1"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/weaveworks/weave/issues/3287",children:"weaveworks/weave#3287"})," DNS lookup timeouts due to races in conntrack"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/gliderlabs/docker-alpine/issues/255",children:"gliderlabs/docker-alpine#255"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/56903#issuecomment-462252499",children:"kubernetes/kubernetes#56903"})," - DNS intermittent delays of 5s"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://medium.com/techmindtickle/e9de8239e2fa",children:"Intermittent delays in Kubernetes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["resolve.conf \u6dfb\u52a0 ",(0,l.jsx)(n.code,{children:"options single-request-reopen"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://dzone.com/articles/racy-conntrack-and-dns-lookup-timeouts",children:"Racy conntrack and DNS Lookup Timeouts"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u56e0\u4e3a A \u548c AAAA \u901a\u8fc7\u540c\u4e00\u4e2a\u7aef\u53e3\u53d1\u8d77\u8bf7\u6c42\u5bfc\u81f4\u5f02\u5e38"}),"\n",(0,l.jsx)(n.li,{children:"disable parallel lookups, disable IPv6 to avoid AAAA lookups, use TCP for lookups"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.openwall.com/lists/musl/2018/03/30/4",children:"resolver: only exit the search path loop there are a positive number of results give"})," - DNS \u670d\u52a1\u5f02\u5e38\u5bfc\u81f4 musl \u884c\u4e3a\u5f02\u5e38"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://www.openwall.com/lists/musl/2017/10/04/6",children:"DNS resolution happenning only after timeout"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u56e0\u4e3a AAAA \u7684\u95ee\u9898"}),"\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u65e0\u6cd5\u7981\u6b62"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://serverfault.com/questions/632665",children:"How to disable AAAA lookups?"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u6ca1\u6709\u597d\u7684\u65b9\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.math.tamu.edu/~comech/tools/linux-slow-dns-lookup/",children:"Linux slow dns lookup (delay = 5 seconds)"})}),"\n",(0,l.jsxs)(n.li,{children:["dnsmasq \u4e5f\u6ca1\u6709\u76f4\u63a5\u9488\u5bf9 aaaa \u8fd4\u56de nx \u7684\u65b9\u5f0f\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2005q2/000229.html",children:'Is there a way to "block" IPv6 address queries?'})}),"\n",(0,l.jsx)(n.li,{children:"\u53ef\u4ee5\u901a\u8fc7\u51cf\u5c11 DNS \u5916\u90e8\u67e5\u8be2\u4ee5\u8fbe\u5230\u7c7b\u4f3c\u76ee\u7684"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cache-size=65535"})," \u548c ",(0,l.jsx)(n.code,{children:"min-cache-ttl=300"})," \u589e\u52a0\u7f13\u5b58"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["iptables \u7981\u7528 aaaa \u8bb0\u5f55\u67e5\u8be2\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/oskar456/xt_dns",children:"oskar456/xt_dns"})," \u6a21\u5757\u53ef\u4ee5\u5b9e\u73b0 dns \u5339\u914d"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.v2ex.com/t/242793",children:"https://www.v2ex.com/t/242793"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8f6c\u53d1\u5904\u7406 AAAA\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/shawn1m/overture",children:"shawn1m/overture"})," - \u652f\u6301 reject qtype - \u4f46\u662f\u8fd4\u56de ServFail"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5efa\u8bae\u8fd4\u56de NXDOMAIN ",(0,l.jsx)(n.a,{href:"https://github.com/weaveworks/weave/issues/2244",children:"weaveworks/weave#2244"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u76d1\u63a7 DNS \u8bf7\u6c42\ntcpdump -ni eth0 port 53\n\n# \u5b8c\u6574\u67e5\u8be2\u5185\u5bb9\u4f8b\u5982 |03|www|07|example|03|com\n# \u4f7f\u7528 match-set \u7981\u7528 AAAA\niptables -N AAAA\n# iptables -I FORWARD 1 -p udp -s 192.168.0.0/16 --dport 53 -j AAAA\niptables -I OUTPUT 1 -p udp --dport 53 -j AAAA\n# drop \u4f1a\u5bfc\u81f4\u8d85\u65f6 - \u6700\u597d\u662f\u8fd4\u56de NXDATA \u6216\u8005 NXDOMAIN\niptables -A AAAA -m string --algo bm --from 40 --hex-string '|001c|' -j DROP\n"})}),"\n",(0,l.jsx)(n.h2,{id:"musl-issues",children:"musl issues"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://wiki.musl-libc.org/open-issues.html",children:"Open Issues"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u652f\u6301 LC_TIME"}),"\n",(0,l.jsxs)(n.li,{children:["\u65e0 ucontext.h - obsolescent in POSIX.1-2001\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://pubs.opengroup.org/onlinepubs/009695399/functions/makecontext.html#tag_03_356_08",children:"makecontext"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/gluster/glusterfs/issues/268",children:"glusterfs#268"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"glusterfs \u4e0d\u652f\u6301 musl"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/openssl/openssl/issues/7406",children:"openssl#7406"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528 no-async \u7ed5\u8fc7"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 nsswitch\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/pikhq/musl-nscd",children:"pikhq/musl-nscd"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e0d\u652f\u6301 res_uinit\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"asterisk \u65e0\u6cd5\u83b7\u53d6 nameserver"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u65e0 fts"}),"\n",(0,l.jsxs)(n.li,{children:["\u5176\u4ed6\u8f6f\u4ef6\u517c\u5bb9\u95ee\u9898\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Golang runtime: c-shared builds fail with musllibc\n",(0,l.jsx)(n.a,{href:"https://github.com/golang/go/issues/13492",children:"golang/go#13492"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u65e0\u6cd5\u83b7\u53d6 argc, argv - \u57fa\u4e8e glibc \u6269\u5c55"}),"\n",(0,l.jsxs)(n.li,{children:["\u5bfc\u81f4\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FluentBit \u63d2\u4ef6\u4e0d\u652f\u6301 AlpineLinux"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["libasan \u4e0d\u652f\u6301 musl\n",(0,l.jsx)(n.a,{href:"https://github.com/google/sanitizers/issues/1080",children:"google/sanitizers#1080"})]}),"\n",(0,l.jsxs)(n.li,{children:["glusterfs \u4e0d\u652f\u6301 musl ",(0,l.jsx)(n.a,{href:"https://github.com/gluster/glusterfs/issues/268",children:"glusterfs#268"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://wiki.musl-libc.org/bugs-found-by-musl.html",children:"bugs-found-by-musl"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5176\u4ed6\u8f6f\u4ef6\u5df2\u77e5\u56e0\u4e3a musl \u5bfc\u81f4\u7684 bug"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"malloc-performance",children:"malloc performance"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["musl 1.2.1 \u542f\u7528\u4e86\u91cd\u5199\u7684 malloc\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"2020-06"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://andygrove.io/2020/05/why-musl-extremely-slow/",children:"https://andygrove.io/2020/05/why-musl-extremely-slow/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://pythonspeed.com/articles/alpine-docker-python/",children:"https://pythonspeed.com/articles/alpine-docker-python/"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/",children:"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pthread_attr_setaffinity_np",children:"pthread_attr_setaffinity_np"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6ca1\u6709"}),"\n",(0,l.jsx)(n.li,{children:"torch libgomp"}),"\n",(0,l.jsxs)(n.li,{children:["\u66ff\u4ee3 - ",(0,l.jsx)(n.a,{href:"https://patches.dpdk.org/project/dpdk/patch/20210319145730.3555384-15-thomas@monjalon.net/",children:"https://patches.dpdk.org/project/dpdk/patch/20210319145730.3555384-15-thomas@monjalon.net/"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"pthread_yield -> sched_yield"}),"\n",(0,l.jsx)(n.li,{children:"pthread_attr_setaffinity_np -> pthread_create+pthread_setaffinity_np"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pthread_rwlockattr_setkind_np",children:"pthread_rwlockattr_setkind_np"}),"\n",(0,l.jsx)(n.h2,{id:"gcompat",children:"gcompat"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u89e3\u51b3\u4e00\u90e8\u5206\u517c\u5bb9\u95ee\u9898"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"apk add gcompat\nexport LD_PRELOAD=/lib/libgcompat.so.0\n"})}),"\n",(0,l.jsx)(n.h2,{id:"symbols",children:"symbols"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u57fa\u7840\napk add libstdc++ libgcc\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"fcntl64"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://clickhouse.com/codebrowser/ClickHouse/base/glibc-compatibility/musl/fcntl.c.html",children:"https://clickhouse.com/codebrowser/ClickHouse/base/glibc-compatibility/musl/fcntl.c.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://lore.kernel.org/all/20231014153924.54987-1-raj.khem@gmail.com/T/",children:"https://lore.kernel.org/all/20231014153924.54987-1-raj.khem@gmail.com/T/"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},38088:(e,n,s)=>{var l=s(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var l,r={},h=null,o=null;for(l in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,l)&&!d.hasOwnProperty(l)&&(r[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===r[l]&&(r[l]=n[l]);return{$$typeof:i,type:e,key:h,ref:o,props:r,_owner:c.current}}n.Fragment=r,n.jsx=h,n.jsxs=h},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var l=s(96651);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);