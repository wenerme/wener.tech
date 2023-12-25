/*! For license information please see d44c3f89.62fdc086.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57199],{33654:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=i(11527),s=i(47214);const r={title:"IPTables"},t="IPTable",c={id:"os/linux/network/iptables",title:"IPTables",description:"- SNAT",source:"@site/../notes/os/linux/network/iptables.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables",permalink:"/notes/os/linux/network/iptables",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/iptables.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1646642462,formattedLastUpdatedAt:"Mar 7, 2022",frontMatter:{title:"IPTables"},sidebar:"docs",previous:{title:"iptables \u89c4\u5219",permalink:"/notes/os/linux/network/iptables-rule"},next:{title:"IPVS",permalink:"/notes/os/linux/network/ipvs"}},d={},o=[{value:"empty",id:"empty",level:2},{value:"Notes",id:"notes",level:2},{value:"How to do the port forwarding from one ip to another ip in same network?",id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"iptable",children:"IPTable"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["SNAT\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Source NAT"}),"\n",(0,l.jsx)(e.li,{children:"\u5185\u90e8\u8bbf\u95ee\u5916\u90e8"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["NAT/DNAT\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Destination NAT"}),"\n",(0,l.jsx)(e.li,{children:"\u5916\u90e8\u8bbf\u95ee\u5185\u90e8"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u64cd\u4f5c\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"-A \u8ffd\u52a0"}),"\n",(0,l.jsx)(e.li,{children:"-C \u68c0\u67e5"}),"\n",(0,l.jsx)(e.li,{children:"-D \u5220\u9664"}),"\n",(0,l.jsx)(e.li,{children:"-I \u63d2\u5165"}),"\n",(0,l.jsx)(e.li,{children:"-R \u66ff\u6362"}),"\n",(0,l.jsx)(e.li,{children:"-L \u5217\u8868"}),"\n",(0,l.jsx)(e.li,{children:"-S \u5217\u8868 - \u8f93\u51fa\u7ed3\u679c\u7c7b\u4f3c\u4e8e iptables-save\uff0c\u7ed3\u679c\u53ef\u4ee5\u88ab\u89e3\u6790"}),"\n",(0,l.jsx)(e.li,{children:"-F \u6e05\u7a7a"}),"\n",(0,l.jsx)(e.li,{children:"-Z \u91cd\u7f6e\u8ba1\u6570"}),"\n",(0,l.jsx)(e.li,{children:"-N \u521b\u5efa Chain"}),"\n",(0,l.jsx)(e.li,{children:"-X \u5220\u9664 Chain"}),"\n",(0,l.jsx)(e.li,{children:"-P \u4e3a Chain \u8bbe\u7f6e\u76ee\u6807 - ACCEPT DROP REJECT"}),"\n",(0,l.jsx)(e.li,{children:"-E \u91cd\u547d\u540d Chain"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u6761\u4ef6 - \u652f\u6301 ",(0,l.jsx)(e.code,{children:"!"})," \u53d6\u53cd\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["-p \u534f\u8bae all, tcp, udp, udplite, icmp, esp, ah, sctp \u6d3b\u7740 ",(0,l.jsx)(e.code,{children:"/etc/protocols "})," \u4e2d\u7684\u6570\u5b57"]}),"\n",(0,l.jsxs)(e.li,{children:["-s \u6765\u6e90\u5730\u5740 ",(0,l.jsx)(e.code,{children:"address[/mask]"})]}),"\n",(0,l.jsx)(e.li,{children:"-d \u76ee\u6807\u5730\u5740"}),"\n",(0,l.jsx)(e.li,{children:"-j \u8df3\u8f6c\u5230\u76ee\u6807 - \u505c\u6b62\u5904\u7406\u5f53\u524d Chain - \u5185\u5efa\u76ee\u6807\u6216\u8005\u6269\u5c55"}),"\n",(0,l.jsx)(e.li,{children:"-g \u524d\u5f80\u5230 Chain - \u7ee7\u7eed\u5904\u7406"}),"\n",(0,l.jsxs)(e.li,{children:["-i \u8fdb\u5165\u7684\u7f51\u53e3 - INPUT, FORWARD, PREROUTING - \u7f51\u53e3\u540d\u5b57\u5982\u679c\u4e3a ",(0,l.jsx)(e.code,{children:"eth+"})," \u5219\u4f1a\u5339\u914d eth \u524d\u7f00"]}),"\n",(0,l.jsx)(e.li,{children:"-o \u51fa\u53bb\u7684\u7f51\u53e3 - FORWARD, OUTPUT, POSTROUTING"}),"\n",(0,l.jsx)(e.li,{children:"-f \u89c4\u5219\u53ea\u4f1a\u5904\u7406\u7b2c\u4e8c\u4e2a\u548c\u4e4b\u540e\u7684 fragmented packets, \u4f8b\u5982 ICMP"}),"\n",(0,l.jsx)(e.li,{children:"--src-type \u6765\u6e90\u5730\u5740\u7c7b\u578b"}),"\n",(0,l.jsx)(e.li,{children:"--dst-type \u76ee\u6807\u5730\u5740\u7c7b\u578b"}),"\n",(0,l.jsxs)(e.li,{children:["--connbytes ",(0,l.jsx)(e.code,{children:"from[:to]"})," \u5339\u914d\u5305\u5927\u5c0f"]}),"\n",(0,l.jsx)(e.li,{children:"--ctstate \u94fe\u63a5\u72b6\u6001"}),"\n",(0,l.jsx)(e.li,{children:"--ctproto \u5339\u914d 4 \u5c42\u534f\u8bae"}),"\n",(0,l.jsxs)(e.li,{children:["--src-range ",(0,l.jsx)(e.code,{children:"from[-to]"})," \u6765\u6e90\u5730\u5740\u8303\u56f4"]}),"\n",(0,l.jsxs)(e.li,{children:["--dst-range ",(0,l.jsx)(e.code,{children:"from[-to]"})," \u76ee\u6807\u5730\u5740\u8303\u56f4"]}),"\n",(0,l.jsx)(e.li,{children:"--ipvs \u5c5e\u4e8e IPVS \u7684\u94fe\u63a5"}),"\n",(0,l.jsx)(e.li,{children:"--vproto VIP \u534f\u8bae"}),"\n",(0,l.jsx)(e.li,{children:"--vaddr VIP \u5730\u5740"}),"\n",(0,l.jsx)(e.li,{children:"--vport VIP \u7aef\u53e3"}),"\n",(0,l.jsxs)(e.li,{children:["--vmethod ",(0,l.jsx)(e.code,{children:"{GATE|IPIP|MASQ}"})," IPVS \u8f6c\u53d1\u65b9\u6cd5"]}),"\n",(0,l.jsx)(e.li,{children:"--vportctl \u63a7\u5236\u7aef\u53e3 - \u4f8b\u5982 FTP \u662f 21"}),"\n",(0,l.jsxs)(e.li,{children:["--length ",(0,l.jsx)(e.code,{children:"length[:length]"})," \u5339\u914d 3 \u5c42\u7684\u5305\u957f\u5ea6 - length \u6a21\u5757"]}),"\n",(0,l.jsxs)(e.li,{children:["--limit ",(0,l.jsx)(e.code,{children:"rate[/second|/minute|/hour|/day]"})," \u8fbe\u5230\u9650\u6d41\u540e\u4f1a\u5339\u914d - limit \u6a21\u5757"]}),"\n",(0,l.jsx)(e.li,{children:"--limit-burst \u9650\u6d41\u5cf0\u503c \u9ed8\u8ba4 5"}),"\n",(0,l.jsx)(e.li,{children:"--mac-source MAC \u5730\u5740\u5339\u914d"}),"\n",(0,l.jsxs)(e.li,{children:["--mark ",(0,l.jsx)(e.code,{children:"value[/mask]"})," \u5339\u914d netfilter \u7684 mark \u5b57\u6bb5"]}),"\n",(0,l.jsxs)(e.li,{children:["--source-ports/--sports ",(0,l.jsx)(e.code,{children:"port[,port|,port:port]"})," \u5339\u914d\u6765\u6e90\u7aef\u53e3"]}),"\n",(0,l.jsx)(e.li,{children:"--destination-ports/--dports \u76ee\u6807\u7aef\u53e3"}),"\n",(0,l.jsx)(e.li,{children:"--ports \u76ee\u6807\u548c\u6765\u6e90\u7aef\u53e3"}),"\n",(0,l.jsxs)(e.li,{children:["--uid-owner ",(0,l.jsx)(e.code,{children:"username/userid[-userid]"})]}),"\n",(0,l.jsxs)(e.li,{children:["--gid-owner ",(0,l.jsx)(e.code,{children:"groupname/groupid[-groupid]"})]}),"\n",(0,l.jsx)(e.li,{children:"--socket-exists \u5305\u5173\u8054\u5230 socket"}),"\n",(0,l.jsx)(e.li,{children:"--rateest-lt \u9891\u7387\u5c0f\u4e8e"}),"\n",(0,l.jsx)(e.li,{children:"--rateest-gt \u9891\u7387\u5927\u4e8e"}),"\n",(0,l.jsx)(e.li,{children:"--probability \u6982\u7387\u5339\u914d"}),"\n",(0,l.jsx)(e.li,{children:"--every \u6bcf N \u5305\u5339\u914d"}),"\n",(0,l.jsx)(e.li,{children:"--string \u6a21\u5f0f\u5339\u914d"}),"\n",(0,l.jsx)(e.li,{children:"--hex-string \u6a21\u5f0f\u5339\u914d"}),"\n",(0,l.jsx)(e.li,{children:"--source-port,--sport \u6765\u6e90\u7aef\u53e3"}),"\n",(0,l.jsx)(e.li,{children:"--destination-port,--dport \u76ee\u6807\u7aef\u53e3"}),"\n",(0,l.jsx)(e.li,{children:"--tcp-flags \u5339\u914d TCP \u6807\u8bb0"}),"\n",(0,l.jsx)(e.li,{children:"--syn \u5339\u914d SYN"}),"\n",(0,l.jsx)(e.li,{children:"--tcp-option number \u5339\u914d TCP \u9009\u9879"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u52a8\u4f5c\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["--set-mark ",(0,l.jsx)(e.code,{children:"value[/mask]"})," \u8bbe\u7f6e mark"]}),"\n",(0,l.jsx)(e.li,{children:"--save-mark [--mask mask] \u4fdd\u5b58 mark"}),"\n",(0,l.jsx)(e.li,{children:"--restore-mark [--mask mask] \u6062\u590d mark"}),"\n",(0,l.jsx)(e.li,{children:"--notrack \u5173\u95ed\u94fe\u63a5\u8ddf\u8e2a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"SDNAT \u52a1\u5fc5\u9650\u5b9a\u6765\u6e90\u5730\u5740\u6216\u7f51\u53e3"}),"\n",(0,l.jsx)(e.li,{children:"DNAT \u52a1\u5fc5\u9650\u5b9a\u76ee\u6807\u5730\u5740\u6216\u7f51\u53e3 - \u5426\u5219\u5168\u91cf\u66ff\u6362\u4e0d\u4e00\u5b9a\u662f\u671f\u671b\u7ed3\u679c"}),"\n",(0,l.jsx)(e.li,{children:"\u5904\u7406\u7684\u662f\u8fde\u7eed\u7684\u88ab\u8ddf\u8e2a\u7684\u5305\uff0c\u800c\u4e0d\u662f\u79bb\u6563\u7684 - conntrack"}),"\n",(0,l.jsx)(e.li,{children:"nat \u53ea\u4f1a\u5904\u7406\u8fde\u63a5\u7684\u7b2c\u4e00\u5305"}),"\n"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u64cd\u4f5c\u5bf9\u8c61 Table/Chain\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["filter - \u9ed8\u8ba4\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"INPUT - \u76ee\u6807\u662f\u672c\u5730\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"FORWARD - \u8def\u7531\u7ecf\u8fc7\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"OUTPUT - \u672c\u5730\u751f\u6210\u7684\u5305"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["nat - \u5f53\u521b\u5efa\u65b0\u7684\u5305\u65f6\u4f1a\u4f7f\u7528\u8be5\u8868\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"PREROUTING - \u4fee\u6539\u8fdb\u5165\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"OUTPUT - \u5728\u8def\u7531\u4e4b\u524d\u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"POSTROUTING - \u4fee\u6539\u51fa\u53bb\u7684\u5305"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["mangle - \u7528\u4e8e\u7279\u6b8a\u5305\u4fee\u6539\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"PREROUTING - \u5728\u8def\u7531\u524d \u4fee\u6539\u8fdb\u5165\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"OUTPUT - \u5728\u8def\u7531\u524d \u4fee\u6539\u672c\u5730\u751f\u6210\u7684\u5305"}),"\n",(0,l.jsx)(e.li,{children:"INPUT - packets coming into the box itself"}),"\n",(0,l.jsx)(e.li,{children:"FORWARD - packets being routed through the box"}),"\n",(0,l.jsx)(e.li,{children:"POSTROUTING - altering packets as they are about to go out"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["raw - \u4e3b\u8981\u7528\u4e8e\u914d\u5408 NOTRACK \u4f7f\u7528\uff0c\u5728\u6240\u6709 IP \u8868\u4e4b\u524d\u5904\u7406\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"PREROUTING - packets arriving via any network interface"}),"\n",(0,l.jsx)(e.li,{children:"OUTPUT - packets generated by local processes"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"security - \u7528\u4e8e Mandatory Access Control \u7f51\u7edc\u89c4\u5219\uff0cSELinux"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/Lochnair/xt_tls",children:"Lochnair/xt_tls"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u652f\u6301 SNI \u5339\u914d\u7684\u6269\u5c55"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5904\u7406\u6d41"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"        IN                                             OUT\n         +                                              ^\n         |                                              |\n         |                                              |\n+--------v--------+                            +-----------------+\n|PREROUTING       |                            |POSTROUTING      |\n| nat             |                            | nat             |\n| mangle          |                            | raw             |\n| raw             |                            | mangle          |\n+-----------------+     +----------------+     +--------^--------+\n         |              |FORWARD         |              |\n         +--------------\x3e filter         +--------------+\n     localhost          | mangle         |              |\n+-----------------+     +----------------+     +-----------------+\n|INPUT            |                            |OUTPUT           |\n| filter          |                            | filter          |\n| mangle          +---------\x3e LOCAL +---------\x3e+ nat             |\n|                 |                            | mangle          |\n|                 |                            | raw             |\n+-----------------+                            +-----------------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u91cd\u7f6e iptables\n# ===============\n# \u8bbe\u7f6e\u9ed8\u8ba4\u7b56\u7565\u4e3a ACCEPT\niptables -P INPUT ACCEPT\niptables -P FORWARD ACCEPT\niptables -P OUTPUT ACCEPT\niptables -t nat -F\niptables -t mangle -F\n# \u5220\u9664\u89c4\u5219\niptables -F\n# \u5220\u9664\u989d\u5916 CHAIN\niptables -X\n# \u91cd\u7f6e counter\niptables -Z\n\n# -C --check \u68c0\u6d4b\u662f\u5426\u5b58\u5728\niptables -C FORWARD -i eth0 -j ACCEPT\n# \u4ee5\u524d\u7684\u68c0\u6d4b\u65b9\u5f0f\niptables-save | grep -- \"-A INPUT -p tcp -m tcp --dport 8080 -j ACCEPT\"\n\n# \u67e5\u770b\u72b6\u6001\niptables -nvL\n\n# \u67e5\u770b\u6240\u6709\u89c4\u5219\n# -c \u5305\u542b\u5305\u548c\u5b57\u8282\u8ba1\u6570\n# -t \u6307\u5b9a\u8868\niptables-save\n# \u7eaf\u89c4\u5219 - \u4fbf\u4e8e\u8fdb\u884c diff\niptables-save | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/'\n# \u6392\u9664\u89c4\u5219 - \u6392\u9664 libvirt \u76f8\u5173\u89c4\u5219\niptables-save | grep -v LIBVIRT\n# \u5e38\u7528\nipts(){ iptables-save \"$@\" | grep -v '^#' | sed -r 's/(^:[^[]]+).*/\\1[0:0]/' | grep -v LIBVIRT | grep -i -v DOCKER; }\n\n# \u67e5\u770b nat \u8def\u7531\u8868\niptables -t nat -v -L -n --line-number\n# \u663e\u793a PREROUTING \u8868\niptables -t nat -v -L PREROUTING -n --line-number\n# \u663e\u793a POSTROUTING \u8868\niptables -t nat -v -L POSTROUTING -n --line-number\n# \u901a\u8fc7\u884c\u53f7\u5220\u9664\u89c4\u5219\niptables -t nat -D POSTROUTING 3\n# \u89c4\u5219\u5904\u7406\u7edf\u8ba1\niptables -t nat -L -v\niptables -t nat -A POSTROUTING -s 10.0.0.0/24 ! -d 10.0.0.0/24 -j MASQUERADE\n\n# \u8bbe\u7f6e\u5907\u6ce8\niptables -A INPUT -i eth1 -m comment --comment \"my local LAN\"\n\n# ICMP \u7684\u5e2e\u52a9 - \u652f\u6301 --icmp-type\niptables -p icmp -h\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"NAT \u8868"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"NIC +----\x3e PREROUTING +-------------------\x3e Local\n              +                 ^\n              |                 |\n              |                 |\n              v                 +\nNIC <----+ POSTROUTING <----+ OUTPUT <----+ Local\n"})}),"\n",(0,l.jsx)(e.h2,{id:"empty",children:"empty"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"*mangle\n:PREROUTING ACCEPT [8:584]\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [6:616]\n:POSTROUTING ACCEPT [6:616]\nCOMMIT\n*nat\n:PREROUTING ACCEPT [0:0]\n:INPUT ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n:POSTROUTING ACCEPT [0:0]\nCOMMIT\n*filter\n:INPUT ACCEPT [8:584]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [11:1432]\nCOMMIT\n"})}),"\n",(0,l.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,l.jsx)(e.h2,{id:"how-to-do-the-port-forwarding-from-one-ip-to-another-ip-in-same-network",children:"How to do the port forwarding from one ip to another ip in same network?"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://serverfault.com/q/586486/190601",children:"https://serverfault.com/q/586486/190601"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://torguard.net/knowledgebase.php?action=displayarticle&id=239",children:"https://torguard.net/knowledgebase.php?action=displayarticle&id=239"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark",children:"https://unix.stackexchange.com/questions/499791/is-there-any-way-to-view-nfmark-like-ctmark"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},3354:(n,e,i)=>{var l=i(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,i){var l,r={},o=null,a=null;for(l in void 0!==i&&(o=""+i),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)t.call(e,l)&&!d.hasOwnProperty(l)&&(r[l]=e[l]);if(n&&n.defaultProps)for(l in e=n.defaultProps)void 0===r[l]&&(r[l]=e[l]);return{$$typeof:s,type:n,key:o,ref:a,props:r,_owner:c.current}}e.Fragment=r,e.jsx=o,e.jsxs=o},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>t});var l=i(50959);const s={},r=l.createContext(s);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);