(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{443:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var l=a(2),n=a(7),b=(a(0),a(557)),r={id:"iptables-ref",title:"iptables \u53c2\u8003"},c={unversionedId:"ops/os/linux/network/iptables-ref",id:"ops/os/linux/network/iptables-ref",isDocsHomePage:!1,title:"iptables \u53c2\u8003",description:"iptables \u53c2\u8003",source:"@site/contents/tricks/ops/os/linux/network/iptables-ref.md",slug:"/ops/os/linux/network/iptables-ref",permalink:"/notes/ops/os/linux/network/iptables-ref",version:"current"},i=[{value:"Hook",id:"hook",children:[]},{value:"\u5167\u5efa\u76ee\u6807",id:"\u5167\u5efa\u76ee\u6807",children:[]},{value:"\u8fde\u63a5\u72b6\u6001",id:"\u8fde\u63a5\u72b6\u6001",children:[]},{value:"\u5e38\u7528\u5339\u914d\u6a21\u5757",id:"\u5e38\u7528\u5339\u914d\u6a21\u5757",children:[]},{value:"A Deep Dive into Iptables and Netfilter Architecture",id:"a-deep-dive-into-iptables-and-netfilter-architecture",children:[]},{value:"- DROP vs REJECT",id:"--drop-vs-reject",children:[]},{value:"mangle vs nat",id:"mangle-vs-nat",children:[]}],O={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"iptables-\u53c2\u8003"},"iptables \u53c2\u8003"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-choose-an-effective-firewall-policy-to-secure-your-servers"}),"How To Choose an Effective Firewall Policy to Secure your Servers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.chiark.greenend.org.uk/~peterb/network/drop-vs-reject"}),"Drop versus Reject")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://gist.github.com/mcastelino/c38e71eb0809d1427a6650d843c42ac2"}),"iptables-cheatsheet.md")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://ipset.netfilter.org/ipset.man.html"}),"http://ipset.netfilter.org/ipset.man.html")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/coreos/go-iptables"}),"https://github.com/coreos/go-iptables")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://linux.die.net/man/8/iptables"}),"https://linux.die.net/man/8/iptables")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.netfilter.org/"}),"http://www.netfilter.org/")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"}),"https://wiki.archlinux.org/index.php/Iptables_(\u7b80\u4f53\u4e2d\u6587)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://ipset.netfilter.org/iptables-extensions.man.html"}),"http://ipset.netfilter.org/iptables-extensions.man.html")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.zsythink.net/archives/1199"}),"\u8be6\u89e3 iptables \u6982\u5ff5")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.adminsehow.com/2011/09/iptables-packet-traverse-map/"}),"IPTables packet traverse map")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"http://cn.linux.vbird.org/linux_server/0250simple_firewall.php"}),"\u7b2c\u4e5d\u7ae0\u3001\u9632\u706b\u5899\u4e0e NAT \u670d\u52a1\u5668")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://serverfault.com/questions/140622"}),"How can I port forward with iptables?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html"}),"How To Mangle The Packets"))),Object(b.b)("h2",{id:"hook"},"Hook"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u672c\u5730\u6d41\u5165 PREROUTING -> INPUT"),Object(b.b)("li",{parentName:"ul"},"\u5916\u90e8\u6d41\u91cf PREROUTING -> FORWARD -> POSTROUTING"),Object(b.b)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u51fa OUTPUT -> POSTROUTING")),Object(b.b)("h2",{id:"\u5167\u5efa\u76ee\u6807"},"\u5167\u5efa\u76ee\u6807"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"RETURN - \u4ece chain \u8fd4\u56de"),Object(b.b)("li",{parentName:"ul"},"ACCEPT - \u9000\u51fa chain\uff0c\u9000\u51fa\u5f53\u524d table"),Object(b.b)("li",{parentName:"ul"},"DROP - \u7acb\u5373\u4e22\u5f03\u5305"),Object(b.b)("li",{parentName:"ul"},"QUEUE"),Object(b.b)("li",{parentName:"ul"},"REJECT - \u8fd4\u56de\u62d2\u7edd\u5305 - \u5b58\u5728\u4e8e INPUT, FORWARD, OUTPUT"),Object(b.b)("li",{parentName:"ul"},"DANT - nat \u8868\u7684 PREROUTING, OUTPUT"),Object(b.b)("li",{parentName:"ul"},"SNAT - nat \u8868\u7684 POSTROUTING"),Object(b.b)("li",{parentName:"ul"},"LOG",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'iptables -A INPUT -p tcp -j LOG --log-prefix "INPUT packets"')))),Object(b.b)("li",{parentName:"ul"},"ULOG - \u591a\u64ad\u5230 netlink socket\uff0c\u5e94\u7528\u53ef\u4ee5\u8ba2\u9605\u8fdb\u884c\u5904\u7406"),Object(b.b)("li",{parentName:"ul"},"MARK - mangle \u8868"),Object(b.b)("li",{parentName:"ul"},"MASQUERADE - \u7c7b\u4f3c\u4e8e SNAT\uff0c\u4f46\u7528\u4e8e outbound \u63a5\u53e3\uff0cIP \u53ef\u80fd\u4f1a\u53d8"),Object(b.b)("li",{parentName:"ul"},"REDIRECT - nat \u8868\u7684 PREROUTING, OUTPUT - \u91cd\u5b9a\u5411\u5305\u3001\u6d41\u5230\u673a\u5668"),Object(b.b)("li",{parentName:"ul"},"NOTRACK - raw \u8868 - \u7528\u4e8e\u5173\u95ed\u8fde\u63a5\u8ddf\u8e2a - \u4e0d\u88ab iptables/netfilter \u5904\u7406")),Object(b.b)("h2",{id:"\u8fde\u63a5\u72b6\u6001"},"\u8fde\u63a5\u72b6\u6001"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"NEW",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5305\u672a\u5173\u8054\u8fde\u63a5 - \u7b2c\u4e00\u4e2a\u672a\u5173\u8054\u5305\u4e0d\u4f1a\u8ba4\u4e3a\u662f INVALID"),Object(b.b)("li",{parentName:"ul"},"\u4f1a\u521b\u5efa\u65b0\u7684\u8fde\u63a5"))),Object(b.b)("li",{parentName:"ul"},"ESTABLISHED",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5305\u5df2\u5173\u8054\u8fde\u63a5 - \u4ece NEW \u5173\u8054\u8fde\u63a5"),Object(b.b)("li",{parentName:"ul"},"TCP \u5f53\u8fd4\u56de SYN/ACK \u65f6"),Object(b.b)("li",{parentName:"ul"},"UDP/ICMP \u5f53 src \u548c dst \u4ea4\u6362\u65f6"))),Object(b.b)("li",{parentName:"ul"},"RELATED",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5305\u672a\u5173\u8054\u5df2\u6709\u8fde\u63a5\u4f46\u5173\u8054\u4e86\u7cfb\u7edf\u4e2d\u88ab\u6807\u8bb0\u4e3a RELATED \u7684\u8fde\u63a5"),Object(b.b)("li",{parentName:"ul"},"\u4f1a\u521b\u5efa\u65b0\u7684\u8fde\u63a5\u6216 ICMP \u9519\u8bef"),Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 FTP \u53cc\u7aef\u53e3"))),Object(b.b)("li",{parentName:"ul"},"INVALID - \u65e0\u6cd5\u8bc6\u522b\u3001\u5185\u5b58\u6ea2\u51fa\u3001ICMP \u9519\u8bef\u3001\u65e0\u6cd5\u8def\u7531"),Object(b.b)("li",{parentName:"ul"},"UNTRACKED - \u5728 raw \u4e2d\u4f7f\u7528 NOTRACK"),Object(b.b)("li",{parentName:"ul"},"SNAT - \u865a\u62df\u72b6\u6001\uff0c\u786e\u4fdd\u540e\u7eed \u6062\u590d \u54cd\u5e94\u5305 \u6e90\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"DNAT - \u865a\u62df\u72b6\u6001\uff0c\u786e\u4fdd\u540e\u7eed \u6062\u590d \u54cd\u5e94\u5305 \u76ee\u6807\u5730\u5740")),Object(b.b)("h2",{id:"\u5e38\u7528\u5339\u914d\u6a21\u5757"},"\u5e38\u7528\u5339\u914d\u6a21\u5757"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-m"),"/",Object(b.b)("inlineCode",{parentName:"li"},"--match")," \u6307\u5b9a\u6a21\u5757"),Object(b.b)("li",{parentName:"ul"},"connmark"),Object(b.b)("li",{parentName:"ul"},"conntrack"),Object(b.b)("li",{parentName:"ul"},"ipvs"),Object(b.b)("li",{parentName:"ul"},"mark"),Object(b.b)("li",{parentName:"ul"},"redirect")),Object(b.b)("h2",{id:"a-deep-dive-into-iptables-and-netfilter-architecture"},"A Deep Dive into Iptables and Netfilter Architecture"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/a-deep-dive-into-iptables-and-netfilter-architecture"}),"A Deep Dive into Iptables and Netfilter Architecture")),Object(b.b)("li",{parentName:"ul"},"5 \u4e2a Hook",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"NF_IP_PRE_ROUTING - PREROUTING",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8fdb\u5165\u7f51\u7edc\u6808"),Object(b.b)("li",{parentName:"ul"},"\u5148\u4e8e\u8def\u7531\u51b3\u7b56"))),Object(b.b)("li",{parentName:"ul"},"NF_IP_LOCAL_IN - INPUT",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5305\u88ab\u8def\u7531\u5230\u672c\u5730"))),Object(b.b)("li",{parentName:"ul"},"NF_IP_FORWARD - FORWARD",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5305\u88ab\u8def\u7531\u5230\u5176\u4ed6\u4e3b\u673a"))),Object(b.b)("li",{parentName:"ul"},"NF_IP_LOCAL_OUT - OUTPUT",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u8d77\u6d41\u91cf"))),Object(b.b)("li",{parentName:"ul"},"NF_IP_POST_ROUTING - POSTROUTING",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u8d77\u6d41\u91cf\u6216\u8f6c\u53d1\u6d41\u91cf"),Object(b.b)("li",{parentName:"ul"},"\u5728\u88ab\u53d1\u9001\u4e4b\u524d"))))),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u8868\u6765\u7ec4\u7ec7\u89c4\u5219 - \u901a\u8fc7\u89c4\u5219\u8fd4\u56de\u7684\u51b3\u7b56\u7c7b\u578b\u8fdb\u884c\u8868\u5212\u5206",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"filter - \u8fc7\u6ee4\u5305"),Object(b.b)("li",{parentName:"ul"},"nat - \u5730\u5740\u8f6c\u6362"),Object(b.b)("li",{parentName:"ul"},"mangle - \u4fee\u6539\u5305"),Object(b.b)("li",{parentName:"ul"},"raw - \u7528\u4e8e opt-out \u5305\u8ddf\u8e2a"),Object(b.b)("li",{parentName:"ul"},"security - \u7528\u4e8e\u8bbe\u7f6e SELinux \u4e0a\u4e0b\u6587 mark"))),Object(b.b)("li",{parentName:"ul"},"chain - \u89c4\u5219\u94fe - \u63a7\u5236\u5305\u89c4\u5219\u6c42\u503c\u7684\u8def\u5f84")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Tables\u2193/Chains\u2192"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"PREROUTING"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"INPUT"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"FORWARD"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"OUTPUT"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"POSTROUTING"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"(routing decision)"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"raw"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"(connection tracking enabled)"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mangle"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"nat (DNAT)"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"(routing decision)"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"security"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"nat (SNAT)"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"\u2713")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5230\u672c\u5730\u7684\u5305 PREROUTING -> INPUT"),Object(b.b)("li",{parentName:"ul"},"\u5230\u5176\u4ed6\u4e3b\u673a PREROUTING -> FORWARD -> POSTROUTING"),Object(b.b)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u51fa\u5305 OUTPUT -> POSTROUTING")),Object(b.b)("h1",{id:"faq"},"FAQ"),Object(b.b)("h2",{id:"--drop-vs-reject"},"- DROP vs REJECT"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 REJECT"),Object(b.b)("li",{parentName:"ul"},"DROP - \u4e0d\u5904\u7406\u76f4\u63a5\u4e22\u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"TCP \u4f1a\u8d85\u65f6",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"TCP \u4f1a\u53d1\u8d77\u591a\u6b21\uff0c\u56e0\u4e3a TCP \u672c\u8eab\u534f\u8bae\u53ef\u9760\u4f1a\u91cd\u590d\u53d1\u5305"))),Object(b.b)("li",{parentName:"ul"},"UDP \u8ba4\u4e3a\u670d\u52a1\u7aef\u5df2\u7ecf\u63a5\u6536"),Object(b.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6076\u610f\u653b\u51fb\u4f1a\u8017\u8d39\u66f4\u591a\u5ba2\u6237\u7aef\u8d44\u6e90",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f46\u4e13\u4e1a\u7684\u5de5\u5177\u4e00\u822c\u4e0d\u53d7\u5f71\u54cd"))))),Object(b.b)("li",{parentName:"ul"},"REJECT \u8fd4\u56de\u5931\u8d25 - \u5ba2\u6237\u7aef\u63a5\u6536\u5230\u65e0\u6cd5\u5230\u8fbe",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7 ICMP \u8fd4\u56de"),Object(b.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b\u539f\u56e0"),Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6076\u610f\u653b\u51fb\u53ef\u55c5\u63a2\u5219\u4f1a\u7acb\u5373\u8fd4\u56de\u589e\u52a0\u68c0\u6d4b\u901f\u5ea6"),Object(b.b)("li",{parentName:"ul"},"\u7528\u6237\u4f53\u9a8c\u4f1a\u66f4\u597d")))),Object(b.b)("h2",{id:"mangle-vs-nat"},"mangle vs nat"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f\u64cd\u4f5c\u3001\u4fee\u6539\u5305"),Object(b.b)("li",{parentName:"ul"},"mangle \u5148\u4e8e nat"),Object(b.b)("li",{parentName:"ul"},"mangle",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u670d\u52a1\u7c7b\u578b"),Object(b.b)("li",{parentName:"ul"},"TTL"),Object(b.b)("li",{parentName:"ul"},"Mark"))),Object(b.b)("li",{parentName:"ul"},"nat",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5730\u5740\u8f6c\u6362")))))}p.isMDXComponent=!0},557:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return N}));var l=a(0),n=a.n(l);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},b=Object.keys(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),p=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=p(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),j=p(a),m=l,N=j["".concat(r,".").concat(m)]||j[m]||u[m]||b;return a?n.a.createElement(N,c(c({ref:t},O),{},{components:a})):n.a.createElement(N,c({ref:t},O))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=a.length,r=new Array(b);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var O=2;O<b;O++)r[O]=a[O];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);