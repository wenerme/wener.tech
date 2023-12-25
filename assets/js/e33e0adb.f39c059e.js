/*! For license information please see e33e0adb.f39c059e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73237],{89525:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=s(11527),t=s(47214);const a={title:"dnsmasq"},d="dnsmasq",i={id:"service/dns/dnsmasq",title:"dnsmasq",description:"- dnsmasq",source:"@site/../notes/service/dns/dnsmasq.md",sourceDirName:"service/dns",slug:"/service/dns/dnsmasq",permalink:"/notes/service/dns/dnsmasq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/dnsmasq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"dnsmasq"},sidebar:"docs",previous:{title:"Dnsmasq FAQ",permalink:"/notes/service/dns/dnsmasq-faq"},next:{title:"dnstap",permalink:"/notes/service/dns/dnstap"}},c={},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:3},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"\u7cfb\u7edf\u76f8\u5173",id:"\u7cfb\u7edf\u76f8\u5173",level:3},{value:"DNSSEC",id:"dnssec",level:3},{value:"DNS",id:"dns",level:3},{value:"dhcp",id:"dhcp",level:3},{value:"TFTP",id:"tftp",level:3},{value:"PXE",id:"pxe",level:3}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"dnsmasq",children:"dnsmasq"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html",children:"dnsmasq"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8f7b\u91cf\u7ea7\u7684 DNS, TFTP, PXE, router advertisement \u548c DHCP \u670d\u52a1"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301 DNSSEC"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\u4f5c\u4e3a\u5c0f\u578b\u7684 DNS AS/\u6388\u6743\u670d\u52a1\u5668 - \u76f4\u63a5\u63d0\u4f9b\u57df\u540d\u8bb0\u5f55"}),"\n",(0,r.jsx)(e.li,{children:"DNS forwarder"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Archlinux ",(0,r.jsx)(e.a,{href:"https://wiki.archlinux.org/index.php/dnsmasq",children:"dnsmasq"}),"/",(0,r.jsx)(e.a,{href:"https://wiki.archlinux.org/index.php/Dnsmasq_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",children:"\u7b80\u4f53\u4e2d\u6587"})]}),"\n",(0,r.jsxs)(e.li,{children:["Debian HowTo ",(0,r.jsx)(e.a,{href:"https://wiki.debian.org/HowTo/dnsmasq",children:"dnsmasq"})]}),"\n",(0,r.jsxs)(e.li,{children:["musl dns\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/gliderlabs/docker-alpine/blob/master/docs/caveats.md#dns",children:"docker-alpine"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"dns domain \u641c\u7d22\u4e0d\u751f\u6548"}),"\n",(0,r.jsx)(e.li,{children:"\u5e76\u53d1 dns \u670d\u52a1\u6709\u95ee\u9898"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://www.openwall.com/lists/musl/2017/09/28/1",children:"DNS resolution happenning only after timeout"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://wiki.musl-libc.org/functional-differences-from-glibc.html",children:"Functional differences from glibc"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"address=/.domain.tld/192.168.0.1 -> address=/domain.tld/192.168.0.1"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://serverfault.com/a/934681",children:"reload"})," - \u6e05\u9664\u7f13\u5b58\u91cd\u8f7d\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"SIGHUP"}),"\n",(0,r.jsx)(e.li,{children:"/etc/hosts"}),"\n",(0,r.jsx)(e.li,{children:"/etc/ethers"}),"\n",(0,r.jsx)(e.li,{children:"--dhcp-hostsfile"}),"\n",(0,r.jsx)(e.li,{children:"--dhcp-hostsdir"}),"\n",(0,r.jsx)(e.li,{children:"--dhcp-optsfile"}),"\n",(0,r.jsx)(e.li,{children:"--dhcp-optsdir"}),"\n",(0,r.jsx)(e.li,{children:"--dhcp-optsdir"}),"\n",(0,r.jsx)(e.li,{children:"--addn-hosts"}),"\n",(0,r.jsx)(e.li,{children:"--hostsdir"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# \u901f\u5ea6\u6d4b\u8bd5\ntime ping -c 1 baidu.com\ntime ping -4 -c 1 baidu.com\n# \u5982\u679c\u4e0d\u65b9\u4fbf ping \u4e5f\u53ef\u4ee5 wget\ntime wget --spider -q baidu.com\n\n# \u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684 dns\ncat /etc/resolv.conf\n# \u5b89\u88c5\napk add dnsmasq\n\n\n# \u914d\u7f6e\n# \u5982\u679c\u4e0d\u9700\u8981\u5176\u4ed6\u670d\u52a1\u8bbf\u95ee, \u53ef\u4ee5\u4f7f\u7528 127.0.0.1, docker \u4e2d\u4e5f\u4f1a\u65e0\u6cd5\u8bbf\u95ee\n# echo 'listen-address=127.0.0.1' >> /etc/dnsmasq.conf\necho 'resolv-file=/etc/resolv.dnsmasq.conf' >> /etc/dnsmasq.d/local.conf\n# \u6dfb\u52a0 dns\necho 'nameserver 223.5.5.5' >>  /etc/resolv.dnsmasq.conf\necho 'nameserver 114.114.114.114' >>  /etc/resolv.dnsmasq.conf\n# \u8fd9\u91cc\u914d\u7f6e 127.0.0.1, docker \u4e0d\u4f1a\u4f7f\u7528, \u5efa\u8bae\u914d\u7f6e 172.17.0.1 \u6216\u8005\u5b9e\u9645\u9759\u6001 ip\necho 'nameserver 127.0.0.1' > /etc/resolv.conf\n# \u5982\u679c\u6709 Docker \u5efa\u8bae\u914d\u7f6e 172.17.0.1\n# echo 'nameserver 172.17.0.1' > /etc/resolv.conf\n\n# \u6d4b\u8bd5\u914d\u7f6e\ndnsmasq --test\n\n# \u542f\u52a8\nrc-service dnsmasq start\nrc-update add dnsmasq\n\n# \u65e5\u5fd7\u8c03\u8bd5\n# \u8fd8\u53ef\u4ee5\u5f00\u542f log-dhcp\necho 'log-queries' > /etc/dnsmasq.d/log.conf\n# \u670d\u52a1\u91cd\u542f\nrc-service dnsmasq restart\n# \u67e5\u770b\u6d88\u606f\ntail -f /var/log/message\n\n# macOS \u5b89\u88c5 - \u53ef\u4ee5\u4f7f\u7528 dnsmasq \u6765\u66ff\u4ee3 hosts\nbrew install dnsmasq\n# \u914d\u7f6e\u6587\u4ef6 /usr/local/etc/dnsmasq.\ncat <<CONF > /usr/local/etc/dnsmasq.conf\n# \u4e0a\u6e38\nserver=114.114.114.114\nserver=223.5.5.5\nserver=223.6.6.6\n\n# \u7f13\u5b58\u6570\u91cf\ncache-size=655360\n# 10m \u7f13\u5b58\u65f6\u95f4\nmin-cache-ttl=600\n\n# \u81ea\u5b9a\u4e49\u89e3\u6790 - \u66ff\u4ee3 /etc/hosts\n# \u6240\u6709 *.localhost \u90fd\u4f1a\u88ab\u89e3\u6790\u5230\u8be5\u5730\u5740\naddress=/localhost/127.0.0.1\n# \u5176\u4ed6\u6d4b\u8bd5\u670d\u52a1\u5730\u5740\naddress=/cluster.internal/192.168.1.2\naddress=/cluster.lan/192.168.1.3\nCONF\n# \u9a8c\u8bc1\u80fd\u542f\u52a8\nsudo dnsmasq -d -C /usr/local/etc/dnsmasq.conf\n# \u6ca1\u95ee\u9898\u540e\u4f7f\u7528 brew \u542f\u52a8\nbrew service start dnsmasq\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://thekelleys.org.uk/gitweb/?p=dnsmasq.git;a=blob_plain;f=dnsmasq.conf.example;hb=HEAD",children:"dnsmasq.conf.example"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html",children:"dnsmasq-man"})}),"\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e\u7684\u5185\u5bb9\u4e5f\u662f\u547d\u4ee4\u884c\u63a5\u53d7\u7684\u53c2\u6570"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# \u9ed8\u8ba4\u914d\u7f6e\n# conf-dir=/etc/dnsmasq.d/,*.conf\negrep '^[^#]' /etc/dnsmasq.conf\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5e38\u7528\u914d\u7f6e",children:"\u5e38\u7528\u914d\u7f6e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# --no-daemon \u524d\u53f0\u8fd0\u884c\n# \u914d\u7f6e\u76ee\u5f55\nconf-dir=/etc/dnsmasq.d/,*.conf\n# \u53ea\u5141\u8bb8\u672c\u5730\u67e5\u8be2 - \u5f53\u4f5c\u4e3a\u672c\u5730 dns \u7f13\u5b58\u7684\u65f6\u5019\u53ef\u4ee5\u5f00\u542f\nlocal-service\n\n# \u8f6c\u53d1 consul \u4e3b\u57df\u540d - \u6bd4\u5982 abc.consul\n# dig consul.service.consul @127.0.0.1\nserver=/consul/127.0.0.1#8600\n\n# \u4e0a\u6e38 DNS \u670d\u52a1\u5668\nserver=223.5.5.5\nserver=114.114.114.114\n# \u7f13\u5b58\u5927\u5c0f - \u9ed8\u8ba4\u53ea\u6709 150\ncache-size=65536\n\n# \u53ef\u9009\u914d\u7f6e - \u8fd0\u884c\u7684\u8d26\u6237\u4fe1\u606f\nuser=dnsmasq\ngroup=dnsmasq\n\n# \u79c1\u7f51\u81ea\u5b9a\u4e49\u9006\u67e5\u8be2 RFC 1918, 5735, 6598:\n#rev-server=0.0.0.0/8,127.0.0.1#8600\n#rev-server=10.0.0.0/8,127.0.0.1#8600\n#rev-server=100.64.0.0/10,127.0.0.1#8600\n#rev-server=127.0.0.1/8,127.0.0.1#8600\n#rev-server=169.254.0.0/16,127.0.0.1#8600\n#rev-server=172.16.0.0/12,127.0.0.1#8600\n#rev-server=192.168.0.0/16,127.0.0.1#8600\n#rev-server=224.0.0.0/4,127.0.0.1#8600\n#rev-server=240.0.0.0/4,127.0.0.1#8600\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u7840\u914d\u7f6e",children:"\u57fa\u7840\u914d\u7f6e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"conf-file=<file>\nconf-dir=<directory>[,<file-extension>......],\n# \u53ea\u5141\u8bb8 server \u548c rev-server \u914d\u7f6e\nservers-file=<file>\n\n# SIGUSR2 \u4ece\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6 - \u65e5\u5fd7\u6eda\u52a8\nlog-facility=<facility>/<log file>/-\n# \u5f02\u6b65\u65e5\u5fd7 - \u961f\u5217\u884c\u6570\nlog-async[=<lines>]\n\n# \u9ed8\u8ba4 /var/run/dnsmasq.pid\npid-file=<path>\n# setuid setgid\nuser=<username>\ngroup=<groupname>\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u7cfb\u7edf\u76f8\u5173",children:"\u7cfb\u7edf\u76f8\u5173"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u8bb0\u5f55 conntrack \u6807\u793a - \u4e3b\u8981\u7528\u4e8e\u9632\u706b\u5899\u6216\u7edf\u8ba1\nconntrack\n"})}),"\n",(0,r.jsx)(e.h3,{id:"dnssec",children:"DNSSEC"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u9700\u8981\u5b89\u88c5 ",(0,r.jsx)(e.strong,{children:"dnsmasq-dnssec"})," \u800c\u4e0d\u662f dnsmasq"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u542f\u52a8 dnssec - \u7f16\u8bd1\u65f6\u9700\u8981 HAVE_DNSSEC\ndnssec\n# trust-anchors \u914d\u7f6e\nconf-file=/usr/share/dnsmasq/trust-anchors.conf\n# \u624b\u52a8\u6307\u5b9a DS \u8bb0\u5f55\uff0c\u7528\u4e8e DNSSEC \u9a8c\u8bc1\n# https://data.iana.org/root-anchors/root-anchors.xml\n# trust-anchor=[<class>],<domain>,<key-tag>,<algorithm>,<digest-type>,<digest>\n# \u662f\u5426\u5c1d\u8bd5\u5bf9\u672a\u7b7e\u540d\u7684\u8fdb\u884c\u68c0\u67e5\ndnssec-check-unsigned[=no]\ndnssec-no-timecheck\ndnssec-timestamp=<path>\nproxy-dnssec\ndnssec-debug\n"})}),"\n",(0,r.jsx)(e.h3,{id:"dns",children:"DNS"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u4e0d\u8f6c\u53d1\u4e0d\u5305\u542b . \u6216\u57df\u540d\u90e8\u5206\u7684\u540d\u5b57\ndomain-needed\n\n# \u5f53\u5bf9\u79c1\u6709\u5730\u5740\u8fdb\u884c\u53cd\u5411\u67e5\u8be2\u65f6\uff0c\u5982\u679c\u6709\u8bb0\u5f55\u5219\u8fd4\u56de no such domain \u800c\u4e0d\u7ee7\u7eed\u8f6c\u53d1\nbogus-priv\nbogus-nxdomain=<ipaddr>\nignore-address=<ipaddr>\n\n# \u4e0d\u8bfb /etc/hosts\nno-hosts\n# \u6dfb\u52a0 hosts \u6587\u4ef6 - \u652f\u6301\u6307\u5411\u76ee\u5f55 - \u652f\u6301\u591a\u6b21\naddn-hosts=FILE/PATH\n# hosts \u76ee\u5f55 - \u4f1a\u68c0\u6d4b\u6587\u4ef6\u53d8\u52a8\nhostdir=PATH\n# \u5728 /etc/hosts \u6dfb\u52a0\u7b80\u5355\u57df\u540d\u8bb0\u5f55 - \u4e0d\u4f1a\u6dfb\u52a0 CNAME/PTR/TXT \u8fd9\u6837\u7684\nexpand-hosts\n\n# \u5f53\u4ece /etc/hosts \u6216\u914d\u7f6e\u8fd4\u56de\u65f6\u9ed8\u8ba4 ttl \u4e3a 0 - \u8be5\u914d\u7f6e\u4f1a\u4fee\u6539 ttl\nlocal-ttl=<time>\n# \u7c7b\u4f3c\u4e8e local-ttl - \u4f46\u53ea\u5f71\u54cd DHCP\ndhcp-ttl=<time>\nneg-ttl=<time>\n# \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u6700\u5927 TTL\nmax-ttl=<time>\n\nmax-cache-ttl=<time>\n# \u8bbe\u7f6e\u6700\u5c0f\u7f13\u5b58\u65f6\u95f4 - \u5355\u4f4d \u79d2\n# \u9ed8\u8ba4\u6709\u6700\u5927 1h \u6e05\u9664\u7f13\u5b58\nmin-cache-ttl=600\n# \u4ece \u6743\u5a01\u670d\u52a1\u5668/AS \u8fd4\u56de\u7684 TTL\nauth-ttl=<time>\n\n# \u9ed8\u8ba4\u7f13\u5b58 150 \u4e2a\u540d\u5b57\n# \u8bbe\u7f6e\u4e3a 0 \u5219\u7981\u7528\u7f13\u5b58\ncache-size=<cachesize>\n# \u4e0d\u7f13\u5b58\u5426\u5b9a\u7ed3\u679c(\u8fd4\u56de\u57df\u540d\u4e0d\u5b58\u5728)\nno-negcache\n# \u5e76\u53d1\u67e5\u8be2\u7684 dns \u8bb0\u5f55\n# \u9ed8\u8ba4 150\ndns-forward-max=<queries>\n\n# \u524d\u53f0\u8fd0\u884c\nkeep-in-foreground\n# debug \u6a21\u5f0f\n# \u4e0d fork \u5230\u540e\u53f0\u3001\u4e0d\u5199 pid\u3001\u4e0d\u8bbe\u7f6e uid\u3001\u65e5\u5fd7\u5230 stderr\u3001\u63a5\u6536\u8bf7\u6c42\u4e0d\u521b\u5efa\u65b0\u8fdb\u7a0b\n# SIGUSR1 \u751f\u6210\u7f13\u5b58\nno-daemon\n# \u8bb0\u5f55\u5904\u7406\u7684\u67e5\u8be2\n# log-queries=extra \u8bb0\u5f55\u989d\u5916\u4fe1\u606f\nlog-queries\n\n# DNS \u7aef\u53e3 - \u8bbe\u7f6e\u4e3a 0 \u5219\u7981\u7528 DNS\nport=<port>\nedns-packet-max=<size>\n# DNS \u51fa\u7aef\u53e3\nquery-port=<query_port>\nmin-port=<port>\nmax-port=<port>\n\n# \u76d1\u542c\u7aef\u53e3\n# * \u4e3a\u6307\u5b9a\u6240\u6709\ninterface=<interface name>\n# \u6392\u67e5\u7aef\u53e3\nexcept-interface=<interface name>\n\n# \u542f\u7528 DNS \u6388\u6743\u670d\u52a1\u6a21\u5f0f\nauth-server=<domain>,[<interface>|<ip-address>...]\n# \u9488\u5bf9\u6307\u5b9a\u57df\u540d\u4f5c\u4e3a AS \u670d\u52a1\u5668\n# \u5982\u679c\u6307\u5b9a\u4e86\u5b50\u7f51\uff0c\u90a3\u4e48 A\u3001AAAA \u5fc5\u987b\u8981\u5728\u5b50\u7f51\nauth-zone=<domain>[,<subnet>[/<prefix length>][,<subnet>[/<prefix length>].....][,exclude:<subnet>[/<prefix length>]].....]\n# \u4f5c\u4e3a AS \u7684 SOA \u8bb0\u5f55\nauth-soa=<serial>[,<hostmaster>[,<refresh>[,<retry>[,<expiry>]]]]\n# \u4e8c\u7ea7\u670d\u52a1\u5668\nauth-sec-servers=<domain>[,<domain>[,<domain>...]]\nauth-peer=<ip-address>[,<ip-address>[,<ip-address>...]]\n\n# \u53ea\u63a5\u6536\u672c\u5730\u5b50\u7f51\u8bf7\u6c42\nlocal-service\n\n# \u4e0d\u5728\u8fd9\u4e9b\u7aef\u53e3\u63d0\u4f9b DHCP\nno-dhcp-interface=<interface name>\n# \u76d1\u542c\u5730\u5740\nlisten-address=<ipaddr>\n\n# \u7ed1\u5b9a\u5230\u7f51\u5361 - \u4f8b\u5982 \u6307\u5b9a\u4e86 interface\uff0c\u5219\u53ea\u76d1\u542c interface - \u9700\u8981\u5e73\u53f0\u652f\u6301\uff0clinux \u53ef\u4ee5\nbind-interfaces\n# \u4ecb\u4e8e bind-interfaces \u548c \u9ed8\u8ba4 \u4e4b\u95f4\uff0c\u4f1a\u7ed1\u5b9a\u5230\u65b0\u51fa\u73b0\u7684\u5730\u5740\n# \u4ec5 Linux\uff0c\u975e Linux \u56de\u9000\u5230 bind-interfaces \u6a21\u5f0f\nbind-dynamic\n\n# \u4ece /etc/hosts \u8fd4\u56de\u7ed3\u679c\n# \u5f53\u6709\u591a\u6761\u8bb0\u5f55\u5339\u914d\u65f6\uff0c\u4f18\u5148\u9009\u62e9\u76f8\u540c\u5b50\u7f51\u7684\u5730\u5740\u8fd4\u56de - \u53ea\u652f\u6301 IPv4\nlocalise-queries\n\n# \u4fee\u6539\u4e0a\u6e38\u8fd4\u56de\u5730\u5740\n# \u66ff\u6362 old-ip \u4e3a new-ip\nalias=[<old-ip>]|[<start-ip>-<end-ip>],<new-ip>[,<mask>]\n\nfilterwin2k\n\n# \u4e0a\u6e38\u57df\u540d\u670d\u52a1\u5668\u914d\u7f6e\nresolv-file=<file>\n# \u4e0d\u8bfb\u53d6 /etc/resolv.conf\nno-resolv\n# \u4e0d\u68c0\u6d4b resolv.conf \u53d8\u5316\nno-poll\n# \u5f53 resolv.conf \u53d8\u5316\u91cd\u8f7d\u65f6\u6e05\u9664\u7f13\u5b58\nclear-on-reload\n# \u6309\u5e8f\u67e5\u8be2 /etc/resolv.conf \u7684\u670d\u52a1\u5668\nstrict-order\n# \u67e5\u8be2\u6240\u6709\u4e0a\u6e38\uff0c\u76f8\u5e94\u6700\u5148\u8fd4\u56de\u7684 - \u9ed8\u8ba4\u53ea\u67e5\u8be2\u4e00\u4e2a\nall-servers\n# \u901a\u8fc7\u989d\u5916\u7684 txt \u8bb0\u5f55\u6765\u68c0\u6d4b\ndns-loop-detect\n# \u963b\u6b62\u4e0a\u6e38\u8fd4\u56de\u79c1\u7f51\u5730\u5740\nstop-dns-rebind\n# \u5141\u8bb8 127.0.0.0/8\nrebind-localhost-ok\n# \u5141\u8bb8 rebind \u7684\u57df\u540d\nrebind-domain-ok=[<domain>]|[[/<domain>/[<domain>/]\n\n# \u6307\u5b9a\u4e0a\u6e38\u540d\u5b57\n# \u4e5f\u540c\u65f6\u4f1a\u8bfb /etc/resolv.conf - no-resolv \u63a7\u5236\n# \u53ef\u591a\u6b21\u914d\u7f6e - \u4f18\u5148\u9009\u62e9\u5339\u914d\u66f4\u5177\u4f53\u7684\n# \u8f6c\u53d1\u6307\u5b9a\u57df\u540d\u5230\u6307\u5b9a\u670d\u52a1\u5668\n# server=/internal.thekelleys.org.uk/192.168.1.1\n# `#\u2018 \u8868\u793a\u53d1\u9001\u5230\u6807\u51c6\u670d\u52a1\u5668\n# @ \u63a7\u5236\u5982\u4f55\u8bf7\u6c42\u670d\u52a1\u5668 - \u7f51\u8def\u7aef\u53e3\u6216\u5730\u5740\nserver=[/[<domain>]/[domain/]][<ipaddr>[#<port>][@<source-ip>|<interface>[#<port>]]\n\n# \u4ece /etc/hosts \u6216 DHCP \u8fd4\u56de\nlocal\n# \u4e0e server \u914d\u7f6e\u7c7b\u4f3c\uff0c\u6307\u5b9a\u53cd\u5411\u67e5\u8be2\u7684\u670d\u52a1\nrev-server=<ip-address>/<prefix-len>,<ipaddr>[#<port>][@<source-ip>|<interface>[#<port>]]\n\n# \u9488\u5bf9\u57df\u540d\u8fd4\u56de\u5730\u5740\n# \u5982\u679c\u4e0d\u6307\u5b9a\u5730\u5740\uff0c\u5219\u8fd4\u56de no-such-domain\n# \u5982\u679c\u5730\u5740\u4e3a `#' \u5219\u8fd4\u56de NULL \u5730\u5740 0.0.0.0\naddress=/<domain>[/<domain>...]/[<ipaddr>]\n\nipset=/<domain>[/<domain>...]/<ipset>[,<ipset>...]\n# \u6307\u5b9a\u57df\u540d\u8fd4\u56de MX \u8bb0\u5f55\nmx-host=<mx name>[[,<hostname>],<preference>]\n# \u9ed8\u8ba4 MX \u8bb0\u5f55\u57df\u540d\nmx-target=<hostname>\n# \u672c\u5730\u673a\u5668(hosts \u6216 dhcp)\u7684 MX \u8fd4\u56de\u5f53\u524d\u673a\u5668\nselfmx\n# \u672c\u5730\u673a\u5668\u7684 MX \u8fd4\u56de mx-target\nlocalmx\n# \u6307\u5b9a\u8fd4\u56de\u7684 SRV \u8bb0\u5f55\n# \u9ed8\u8ba4\u8fd4\u56de domain\nsrv-host=<_service>.<_prot>.[<domain>],[<target>[,<port>[,<priority>[,<weight>]]]]\n# \u6dfb\u52a0 A\u3001AAAA\u3001PTR \u8bb0\u5f55\nhost-record=<name>[,<name>....],[<IPv4-address>],[<IPv6-address>][,<TTL>]\ntxt-record=<name>[[,<text>],<text>]\nptr-record=<name>[,<target>]\n# RFC3403 NAPTR \u8bb0\u5f55\nnaptr-record=<name>,<order>,<preference>,<flags>,<service>,<regexp>[,<replacement>]\n# RFC6844 CAA \u8bb0\u5f55\ncaa-record=<name>,<flags>,<tag>,<value>\ncname=<cname>,[<cname>,]<target>[,<TTL>]\ndns-rr=<name>,<RR-number>,[<hex data>]\n# \u5173\u8054 dns \u548c\u7f51\u8def\u7aef\u53e3\ninterface-name=<name>,<interface>[/4|/6]\n# \u9488\u5bf9\u8303\u56f4\u5185ip\u7a97 A/AAAA \u548c PTR \u8bb0\u5f55\n#\n# synth-domain=thekelleys.org.uk,192.168.0.50,192.168.0.70,internal-*\n# internal-0.thekelleys.org.uk \u8fd4\u56de 192.168.0.50\n#\n# synth-domain=thekelleys.org.uk,192.168.0.0/24,internal-(no *)\n# internal-192-168-0-56.thekelleys.org.uk \u8fd4\u56de 192.168.0.56\nsynth-domain=<domain>,<address range>[,<prefix>[*]]\n\n# \u8f6c\u50a8\u7684 pcap \u6587\u4ef6 - \u7528\u4e8e debug \u7f51\u7edc\ndumpfile=<path/to/file>\ndumpmask=<mask>\n\n# dns \u67e5\u8be2\u6dfb\u52a0\u67e5\u8be2\u8005\u7684 mac \u5730\u5740\nadd-mac[=base64|text]\n# \u67e5\u8be2\u6dfb\u52a0\u6807\u8bc6\u7b26\nadd-cpe-id=<string>\n# \u5b50\u7f51\u5730\u5740\u8f6c\u53d1\u4e0a\u6e38\nadd-subnet[[=[<IPv4 address>/]<IPv4 prefix length>][,[<IPv6 address>/]<IPv6 prefix length>]]\n\n# \u9ed8\u8ba4\u540d\u5b57 uk.org.thekelleys.dnsmasq\nenable-dbus[=<service-name>]\nenable-ubus\n"})}),"\n",(0,r.jsx)(e.h3,{id:"dhcp",children:"dhcp"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u542f\u7528 DHCP \u670d\u52a1\n# \u79df\u7ea6\u65f6\u95f4\u683c\u5f0f\u53ef\u4ee5\u662f 45m\u30011h\u3001infinite\n# \u9ed8\u8ba4\u79df\u7ea6\u662f 1h - \u6700\u5c0f\u79df\u7ea6\u662f 2m\n# \u8be5\u914d\u7f6e\u53ef\u9488\u5bf9\u4e0d\u540c\u7684\u5730\u5740\u6307\u5b9a\u591a\u6b21\n# \u4e24\u79cd\u914d\u7f6e\u683c\u5f0f\n# dhcp-range=[tag:<tag>[,tag:<tag>],][set:<tag>,]<start-addr>[,<end-addr>|<mode>][,<netmask>[,<broadcast>]][,<lease time>]\n# dhcp-range=[tag:<tag>[,tag:<tag>],][set:<tag>,]<start-IPv6addr>[,<end-IPv6addr>|constructor:<interface>][,<mode>][,<prefix-len>][,<lease time>]\n\n# 192.168.0.50 - 192.168.0.150 12h \u79df\u7ea6\ndhcp-range=192.168.0.50,192.168.0.150,12h\n# \u6307\u5b9a NETMASK\ndhcp-range=192.168.0.50,192.168.0.150,255.255.255.0,12h\n# \u8bbe\u7f6e\u6807\u7b7e\ndhcp-range=set:red,192.168.0.50,192.168.0.150\n# \u6709\u6307\u5b9a\u6807\u7b7e\u624d\u4f1a\u542f\u7528\ndhcp-range=tag:green,192.168.0.50,192.168.0.150,12h\n# \u6307\u5b9a\u9759\u6001\u5b50\u7f51 - \u4e0d\u7528\u4efd\u5730\u5740\u5206\u53d1\ndhcp-range=192.168.0.0,static\n\n# \u5355\u4e2a\u4e3b\u673a\u914d\u7f6e\n# dhcp-host=[<hwaddr>][,id:<client_id>|*][,set:<tag>][,<ipaddr>][,<hostname>][,<lease_time>][,ignore]\n# mac \u7ed1\u5b9a\u5730\u5740\ndhcp-host=11:22:33:44:55:66,192.168.0.60\n# \u8bbe\u7f6e\u540d\u5b57\ndhcp-host=11:22:33:44:55:66,fred\n# mac \u5730\u5740\u7ed1\u5b9a ip\u3001\u540d\u5b57\u3001\u79df\u671f\ndhcp-host=11:22:33:44:55:66,fred,192.168.0.60,45m\n# \u7ed1\u5b9a\u5176\u4e2d\u4e00\u4e2a mac \u5730\u5740\u4fe1\u606f - \u9002\u7528\u4e8e\u7b14\u8bb0\u672c\u4f7f\u7528\u7f51\u5361\u548c\u65e0\u7ebf\ndhcp-host=11:22:33:44:55:66,12:34:56:78:90:12,192.168.0.60\n# \u5c06 client \u540d\u5b57\u7ed1\u5b9a\u5230 ip\ndhcp-host=bert,192.168.0.70,infinite\n# id \u4f5c\u4e3a client \u7ed1\u5b9a ip\ndhcp-host=id:01:02:02:04,192.168.0.60\n# \u9488\u5bf9 /etc/hotes \u4e2d\u7684 judge \u4e3b\u673a\u542f\u7528 dhcp\ndhcp-host=judge\n# \u9488\u5bf9 mac \u7981\u7528 dhcp\ndhcp-host=11:22:33:44:55:66,ignore\ndhcp-host=11:22:33:44:55:66,id:*\n# \u8bbe\u7f6e\u989d\u5916\u6807\u7b7e\u5c5e\u6027\ndhcp-host=11:22:33:44:55:66,set:red\n# mac \u6279\u91cf\u5339\u914d\u8bbe\u7f6e\u5c5e\u6027\ndhcp-host=11:22:33:*:*:*,set:red\n\n# \u6307\u5b9a dhcp \u4e3b\u673a\u914d\u7f6e\u6587\u4ef6\n# SIGHUP \u4ece\u65b0\u8bfb\u53d6\ndhcp-hostsfile=<path>\ndhcp-hostsdir=<path>\n\n# dhcp \u9009\u9879\n# dhcp-option=[tag:<tag>,[tag:<tag>,]][encap:<opt>,][vi-encap:<enterprise>,][vendor:[<vendor-class>],][<opt>|option:<opt-name>|option6:<opt>|option6:<opt-name>],[<value>[,<value>]]\n# dhcp \u914d\u7f6e\u4fe1\u606f\ndhcp-optsfile=<path>\ndhcp-optsdir=<path>\n\n# \u5f3a\u5236\u8bbe\u7f6e\u7684\u5c5e\u6027\ndhcp-option-force=[tag:<tag>,[tag:<tag>,]][encap:<opt>,][vi-encap:<enterprise>,][vendor:[<vendor-class>],]<opt>,[<value>[,<value>]]\n\n# \u5c06\u81ea\u5b9a\u4e49\u7684\u7c7b\u522b\u6620\u5c04\u4e3a\u6807\u7b7e\ndhcp-vendorclass=set:<tag>,[enterprise:<IANA-enterprise number>,]<vendor-class>\n# \u5c06 user-class \u6620\u5c04\u4e3a\u6807\u7b7e\ndhcp-userclass=set:<tag>,<user-class>\n# \u4e3a mac \u5730\u5740\u8bbe\u7f6e\u6807\u7b7e\ndhcp-mac=set:<tag>,<MAC address>\n# \u6620\u5c04 RFC3046 relay agent \u4e3a\u6807\u7b7e\ndhcp-circuitid=set:<tag>,<circuit-id>, --dhcp-remoteid=set:<tag>,<remote-id>\ndhcp-subscrid=set:<tag>,<subscriber-id>\ndhcp-match=set:<tag>,<option number>|option:<option name>|vi-encap:<enterprise>[,<value>]\ndhcp-name-match=set:<tag>,<name>[*]\ntag-if=set:<tag>[,set:<tag>[,tag:<tag>[,tag:<tag>]]]\ndhcp-ignore=tag:<tag>[,tag:<tag>]\ndhcp-ignore-names[=tag:<tag>[,tag:<tag>]]\ndhcp-generate-names=tag:<tag>[,tag:<tag>]\ndhcp-broadcast[=tag:<tag>[,tag:<tag>]]\ndhcp-boot=[tag:<tag>,]<filename>,[<servername>[,<server address>|<tftp_servername>]]\ndhcp-sequential-ip\n\n# \u9488\u5bf9\u5730\u5740\u8fdb\u884c\u4e2d\u7ee7\ndhcp-relay=<local address>,<server address>[,<interface]\n# IPv4 \u4e2d\u7ee7 dhcp \u7684\u5730\u5740\ndhcp-proxy[=<ip addr>]......\ndhcp-reply-delay=[tag:<tag>,]<integer>\n\n# \u6700\u5927\u79df\u671f\ndhcp-lease-max=<number>\n\n# IPv4 \u5176\u4ed6\u7aef\u53e3\ndhcp-alternate-port[=<server port>[,<client port>]]\n\n\n# \u5982\u679c\u7f51\u7edc\u4e2d\u53ea\u6709\u8fd9\u4e00\u4e2a DHCP\ndhcp-authoritative\n\n# DHCPv4 RFC 4039 \u5feb\u901f\u63d0\u4ea4\u9009\u9879\ndhcp-rapid-commit\n\n# DHCPv4 \u4e0d\u590d\u7528 DHCP \u7684\u6587\u4ef6\u540d\u548c\u670d\u52a1\u540d\u5b57\u6bb5\ndhcp-no-override\n\n# \u8bfb\u53d6 /etc/ethers \u4f5c\u4e3a DHCP \u4e3b\u673a\u4fe1\u606f\n# \u683c\u5f0f\u4e3a MAC\u5730\u5740 + \u4e3b\u673a\u540d/IP\nread-ethers\n\n# DHCPv6\n# \u542f\u7528 router advertisements\nenable-ra\nra-param=<interface>,[mtu:<integer>|<interface>|off,][high,|low,]<ra-interval>[,<router lifetime>]\n\n# IPv4 BOOTP \u52a8\u6001\u5730\u5740\nbootp-dynamic[=<network-id>[,<network-id>]]\n# \u4e0d ping \u5206\u53d1\u7684\u5730\u5740\nno-ping\n# \u6dfb\u52a0\u989d\u5916\u65e5\u5fd7\nlog-dhcp\n# \u51cf\u5c11\u65e5\u5fd7\nquiet-dhcp\nquiet-dhcp6\nquiet-ra\n\n# \u8bb0\u5f55\u79df\u671f\u7684\u6587\u4ef6\ndhcp-leasefile=<path>\n# IPv6\ndhcp-duid=<enterprise-id>,<uid>\n# \u521b\u5efa DHCP \u79df\u7ea6\uff0c\u9500\u6bc1 DHCP \u79df\u7ea6\uff0cTFTP \u6587\u4ef6\u4f20\u8f93\u5b8c\u6210\u65f6\u7684\u56de\u8c03\ndhcp-script=<path>\n# \u540c\u4e0a - \u4e0d\u8fc7\u662f lua \u811a\u672c\ndhcp-luascript=<path>\ndhcp-scriptuser\n# \u542f\u7528 arp \u548c arp-old \u56de\u8c03\nscript-arp\n# \u4e0d\u4f7f\u7528\u79df\u7ea6\u6587\u4ef6\uff0c\u901a\u8fc7\u5916\u90e8\u8c03\u7528\u8fd4\u56de\nleasefile-ro\n\nbridge-interface=<interface>,<alias>[,<alias>]\n\n# dhcp \u8fd4\u56de\u7684 dns \u57df\ndomain=<domain>[,<address range>[,local]]\ndhcp-fqdn\ndhcp-client-update\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"tftp",children:"TFTP"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u542f\u7528 TFTP\nenable-tftp[=<interface>[,<interface>]]\ntftp-root=<directory>[,<interface>]\ntftp-no-fail\ntftp-unique-root[=ip|mac]\ntftp-secure\ntftp-lowercase\ntftp-max=<connections>\ntftp-mtu=<mtu size>\ntftp-no-blocksize\ntftp-port-range=<start>,<end>\n"})}),"\n",(0,r.jsx)(e.h3,{id:"pxe",children:"PXE"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"# \u914d\u7f6e PXE \u670d\u52a1\npxe-service=[tag:<tag>,]<CSA>,<menu text>[,<basename>|<bootservicetype>][,<server address>|<server_name>]\n# \u8bbe\u7f6e\u63d0\u793a\u4fe1\u606f\npxe-prompt=[tag:<tag>,]<prompt>[,<timeout>]\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},3354:(n,e,s)=>{var r=s(50959),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var r,a={},o=null,l=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(l=e.ref),e)d.call(e,r)&&!c.hasOwnProperty(r)&&(a[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===a[r]&&(a[r]=e[r]);return{$$typeof:t,type:n,key:o,ref:l,props:a,_owner:i.current}}e.Fragment=a,e.jsx=o,e.jsxs=o},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>d});var r=s(50959);const t={},a=r.createContext(t);function d(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);