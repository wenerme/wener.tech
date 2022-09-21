"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58350],{47936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var a=n(96600),r=n(27279),i=(n(59496),n(3905)),l=["components"],p={title:"Tinc"},u="tinc",o={unversionedId:"service/network/tinc/README",id:"service/network/tinc/README",title:"Tinc",description:"- gsliepen/tinc \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/network/tinc/README.md",sourceDirName:"service/network/tinc",slug:"/service/network/tinc/",permalink:"/notes/service/network/tinc/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/tinc/README.md",tags:[],version:"current",frontMatter:{title:"Tinc"},sidebar:"docs",previous:{title:"Teleport",permalink:"/notes/service/network/teleport"},next:{title:"tinc 1.0",permalink:"/notes/service/network/tinc/tinc-1.0"}},c={},m=[{value:"\u5b8c\u6574\u7684\u7f51\u7edc\u914d\u7f6e",id:"\u5b8c\u6574\u7684\u7f51\u7edc\u914d\u7f6e",level:2},{value:"FAQ",id:"faq",level:2},{value:"traps: tincd3995 general protection fault ip:7f6ad09944eb sp:7ffda3da5ea8 error:0 in ld-musl-x86_64.so.17f6ad098b000+46000",id:"traps-tincd3995-general-protection-fault-ip7f6ad09944eb-sp7ffda3da5ea8-error0-in-ld-musl-x86_64so17f6ad098b00046000",level:3},{value:"Failed to verify SIG record from infra",id:"failed-to-verify-sig-record-from-infra",level:3},{value:"Got REQ_KEY from node while we already started a SPTPS session!",id:"got-req_key-from-node-while-we-already-started-a-sptps-session",level:3},{value:"\u76f8\u540c key \u6216\u76f8\u540c \u540d\u5b57\uff1f",id:"\u76f8\u540c-key-\u6216\u76f8\u540c-\u540d\u5b57",level:3},{value:"Peer tries to roll back protocol version to 17.0",id:"peer-tries-to-roll-back-protocol-version-to-170",level:3},{value:"Could not open /dev/net/tun: No such file or directory",id:"could-not-open-devnettun-no-such-file-or-directory",level:3},{value:"route",id:"route",level:3},{value:"tinc 1.0 \u5347\u7ea7 1.1",id:"tinc-10-\u5347\u7ea7-11",level:2}],s={toc:m};function N(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinc"},"tinc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc"},"gsliepen/tinc")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GPLv2+, C"),(0,i.kt)("li",{parentName:"ul"},"2 \u5c42\u30013 \u5c42 NAT \u7a7f\u900f\u76f4\u8fde\u7ec4\u7f51\u7684 Mesh VPN"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u3001\u8ba4\u8bc1\u3001\u538b\u7f29"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5168 Mesh \u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"NAT \u7a7f\u900f"),(0,i.kt)("li",{parentName:"ul"},"bridge ethernet segments"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 IPv6"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u6d01 - ~40k loc"))),(0,i.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u65f6\u5019\u53ef\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u7ec4\u7f51 - \u7ba1\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tinc \u8fde\u63a5\u6027\u597d"))),(0,i.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u5e94\u7528\u96c6\u7fa4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Layer 2 \u65b9\u4fbf\u5e94\u7528"))),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981 2 \u5c42\u534f\u8bae",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mdns, upnp"))))),(0,i.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u65f6\u5019\u4e0d\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u4e2d\u5fc3 - \u8003\u8651 wireguard",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u91cf\u8fc7\u5927\uff0cTinc \u4e0d\u9002\u5408 - \u5355\u7ebf\u7a0b"))),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u8bbe\u5907\u63a5\u5165 - \u8003\u8651 nebula",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6ca1\u6709\u79fb\u52a8\u5ba2\u6237\u7aef\uff0c\u9002\u7528\u4e8e\u670d\u52a1\u7aef\u573a\u666f"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u505a\u7ec6\u7c92\u5ea6\u63a7\u5236"))),(0,i.kt)("li",{parentName:"ul"},"\u591a\u79df\u6237 - \u8003\u8651 n2n",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168 mesh\uff0c\u65e0\u6cd5\u63a7\u5236\u8282\u70b9\u6388\u6743"))))),(0,i.kt)("li",{parentName:"ul"},"Tiny VPN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8def\u7531\u6a21\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IP \u534f\u8bae\u4ea4\u6362"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5e7f\u64ad"))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ea4\u6362\u6a21\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ethernet \u534f\u8bae"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e7f\u64ad"))),(0,i.kt)("li",{parentName:"ul"},"\u534f\u8bae\u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"NAT \u7a7f\u900f"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 UDP"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f51\u6bb5"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f6c\u53d1"),(0,i.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728\u7528\u6237\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/platforms/"},"\u591a\u53f0\u652f\u6301"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"iOS/Android"),(0,i.kt)("li",{parentName:"ul"},"macOS/utun"),(0,i.kt)("li",{parentName:"ul"},"Windows/Cygwin/tap64/i386/x86_64"),(0,i.kt)("li",{parentName:"ul"},"Windows/MinGW/tap64/i386/x86_64"),(0,i.kt)("li",{parentName:"ul"},"Linux"),(0,i.kt)("li",{parentName:"ul"},"DragonFlyBSD"),(0,i.kt)("li",{parentName:"ul"},"FreeBSD"),(0,i.kt)("li",{parentName:"ul"},"OpenBSD"),(0,i.kt)("li",{parentName:"ul"},"NetBSD"),(0,i.kt)("li",{parentName:"ul"},"Solaris/sparc32"))),(0,i.kt)("li",{parentName:"ul"},"\u975e\u5e38\u5c0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236 150k, \u5185\u5b58\u5360\u7528 2m \u5de6\u53f3"))))),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/meshbird/meshbird"},"meshbird/meshbird")),(0,i.kt)("li",{parentName:"ul"},"FreeS/WAN"),(0,i.kt)("li",{parentName:"ul"},"IPSeC"),(0,i.kt)("li",{parentName:"ul"},"Wireguard"))),(0,i.kt)("li",{parentName:"ul"},"Arch ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Tinc"},"Tinc")),(0,i.kt)("li",{parentName:"ul"},"1.1 \u540e\u7684\u534f\u8bae\u548c\u4e4b\u524d\u7248\u672c\u7684\u6709\u517c\u5bb9\u95ee\u9898",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u60f3\u8981\u517c\u5bb9, \u9700\u8981\u5728\u6240\u6709 pre \u7248\u672c\u7684\u914d\u7f6e\u91cc\u6dfb\u52a0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExperimentalProtocol = no")))),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d ubuntu \u60f3\u7528\u65b0\u7248\u53ea\u80fd\u81ea\u5df1\u7f16\u8bd1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nwgat.ninja/quick-easy-tinc-1-1-2/"},"https://nwgat.ninja/quick-easy-tinc-1-1-2/")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation-1.1/Simple-Peer_002dto_002dPeer-Security.html"},"SPTPS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Simple Peer-to-Peer Security"),(0,i.kt)("li",{parentName:"ul"},"based on TLS 1.2, but has been simplified: there is no support for exchanging public keys, and there is no cipher suite negotiation. Instead, SPTPS always uses a very strong cipher suite: peers authenticate each other using 521 bits ECC keys, Diffie-Hellman using ephemeral 521 bits ECC keys is used to provide perfect forward secrecy (PFS), AES-256-CTR is used for encryption, and HMAC-SHA-256 for message authentication."))),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u7528\u7aef\u53e3 655/tcp 655/udp"),(0,i.kt)("li",{parentName:"ul"},"macOS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/pipermail/tinc/2016-January/004336.html"},"https://www.tinc-vpn.org/pipermail/tinc/2016-January/004336.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://tuntaposx.sourceforge.net/"},"http://tuntaposx.sourceforge.net/")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation/tinc.conf.5"},"https://www.tinc-vpn.org/documentation/tinc.conf.5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation-1.1/How-connections-work.html"},"https://www.tinc-vpn.org/documentation-1.1/How-connections-work.html")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709 NAT \u95ee\u9898, \u53ef\u4ee5\u5728\u53e6\u5916\u4e00\u53f0\u4e0a\u4e0d\u76f4\u63a5\u8fde\u63a5\u5916\u90e8\u8282\u70b9, \u5148\u8fde\u63a5\u5185\u90e8, \u8fde\u63a5\u4e0a\u540e, \u7f51\u7edc\u90fd\u80fd\u4e92\u901a"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6a21\u5f0f - Mode",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"router",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5b50\u7f51\u4fe1\u606f\u6784\u5efa\u8def\u7531\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e ip \u7684\u5355\u64ad\u901a\u8baf"),(0,i.kt)("li",{parentName:"ul"},"tun \u8bbe\u5907",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mac tun \u53ea\u652f\u6301\u70b9\u5bf9\u70b9 - \u4f8b\u5982 ifconfig tun0 inet 10.2.1.1 10.2.1.2 up"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u8def\u7531 route add -net 10.2 -interface tun0"))))),(0,i.kt)("li",{parentName:"ul"},"switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e mac \u4fe1\u606f\u6784\u5efa\u8def\u7531\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e ethernet \u7684\u5355\u64ad,\u5e7f\u64ad\u901a\u8baf"),(0,i.kt)("li",{parentName:"ul"},"tap \u8bbe\u5907"))),(0,i.kt)("li",{parentName:"ul"},"hub",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u7ef4\u62a4\u8def\u7531\u8868, \u53ea\u505a\u8f6c\u53d1"))))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u8bbe\u5907\u7c7b\u578b - DeviceType",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dummy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u8282\u70b9\u53ea\u8d1f\u8d23\u4e3a\u5176\u4ed6\u8282\u70b9\u8f6c\u53d1\u5305"))),(0,i.kt)("li",{parentName:"ul"},"raw_socket",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u5230\u73b0\u6709 interface \u7684 socket."),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u5305\u4ece\u8be5 interface \u8bfb. \u4ece\u672c\u5730\u8282\u70b9\u6536\u5230\u7684\u5305\u4f1a\u5199\u5230 raw socket."),(0,i.kt)("li",{parentName:"ul"},"\u5728 linux \u4e0b, os \u4e0d\u4f1a\u5904\u7406\u76ee\u7684\u4e3a\u672c\u5730\u8282\u70b9\u7684\u5305"))),(0,i.kt)("li",{parentName:"ul"},"multicast",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u591a\u64ad udp socket, \u7ed1\u5b9a\u5230\u5730\u5740\u548c\u7aef\u53e3, \u7a7a\u683c\u5206\u5272, ttl \u53c2\u6570\u53ef\u9009"),(0,i.kt)("li",{parentName:"ul"},"\u5305\u4ece\u5e7f\u64ad socket \u8bfb\u5199"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8fde\u63a5 UML, QEMU, KVM, \u6240\u6709\u5b9e\u4f8b\u76d1\u542c\u76f8\u540c\u7684\u5e7f\u64ad\u5730\u5740."),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u8fde\u63a5\u591a\u4e2a tinc \u5230\u76f8\u540c\u7684\u591a\u64ad\u5730\u5740, \u5bf9\u5bfc\u81f4\u5faa\u73af\u8def\u7531"),(0,i.kt)("li",{parentName:"ul"},"\u9519\u8bef\u7684\u914d\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u52a0\u5bc6\u7684 vpn \u5305\u53d1\u5230\u5916\u7f51"))),(0,i.kt)("li",{parentName:"ul"},"fd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6587\u4ef6\u63cf\u8ff0\u7b26"))),(0,i.kt)("li",{parentName:"ul"},"uml",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672a\u7f16\u8bd1"),(0,i.kt)("li",{parentName:"ul"},"unix socket"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a Device, \u5219\u4e3a /var/run/NETNAME.umlsocket"),(0,i.kt)("li",{parentName:"ul"},"\u4f1a\u7b49\u5f85\u592a\u6e56\u8fde\u63a5\u8be5 socket"))),(0,i.kt)("li",{parentName:"ul"},"vde",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u672a\u7f16\u8bd1"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 libvdeplug \u8fde\u63a5 vde \u4ea4\u6362\u673a, \u4f7f\u7528 unix socket \u6216 /var/run/vde.ctl"))),(0,i.kt)("li",{parentName:"ul"},"tun"),(0,i.kt)("li",{parentName:"ul"},"tunnohead",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5730\u5740\u5934"))),(0,i.kt)("li",{parentName:"ul"},"tunifhead",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6709\u5730\u5740\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ipv4 \u548c ipv6"))),(0,i.kt)("li",{parentName:"ul"},"utun",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"macOS"),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 ipv4 \u548c ipv6"))),(0,i.kt)("li",{parentName:"ul"},"tap",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5305\u5e26 Ethernet \u5934"))))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://serverfault.com/q/640020/190601"},"How Do I Reach Local Subnet Behind Tinc VPN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/e030dabafd61"},"Tinc \u914d\u7f6e\u7b14\u8bb0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://groverchou.com/blog/2017/07/23/%E4%BD%BF%E7%94%A8-Tinc-%E5%BB%BA%E7%AB%8B-VPN-%E8%BF%9E%E6%8E%A5%E5%B9%B6%E9%85%8D%E7%BD%AE-NAT-%E7%BD%91%E5%85%B3/"},"\u4f7f\u7528 Tinc \u5efa\u7acb VPN \u8fde\u63a5\u5e76\u914d\u7f6e NAT \u7f51\u5173")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://serverfault.com/q/418354/190601"},"How to set up OpenVPN to let the VPN clients to access all the servers inside the server LAN?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/q/91123/47774"},"How to use two gateways with the same IP address?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.swineson.me/use-routeros-qemu-as-tinc-tap-vpn-dhcp-server/"},"\u7528 RouterOS/QEMU \u5728 Tinc TAP VPN \u5185\u90e8\u5b9e\u73b0 DHCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/faq/"},"https://www.tinc-vpn.org/faq/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/pipermail/tinc-devel/2015-September/000790.html"},"Large scale tinc tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/packages/"},"https://www.tinc-vpn.org/packages/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc"},"https://github.com/gsliepen/tinc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.alpinelinux.org/cgit/aports/tree/community/tinc-pre/APKBUILD"},"https://git.alpinelinux.org/cgit/aports/tree/community/tinc-pre/APKBUILD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/freifunk/icvpn"},"freifunk/icvpn")," - InterCity-VPN")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63a8\u8350\u4f7f\u7528 tinc-pre 1.1 \u7248\u672c\n# \u914d\u7f6e\u66f4\u65b9\u4fbf\u4f7f\u7528\u66f4\u7b80\u5355\napk add tinc-pre\n\nmodprobe tun\necho tun >> /etc/modules\n# echo tun >> /etc/modules-load.d/tinc.conf\n\n# \u57fa\u7840\u914d\u7f6e\ntinc init first\ntinc set Interface tun0\ntinc set AddressFamily ipv4\n# \u7b2c\u4e00\u4e2a\u8282\u70b9\u53ef\u8003\u8651\u4e0d\u8bbe\u7f6e\u94fe\u63a5\u8282\u70b9\ntinc set ConnectTo other\n# \u53d8\u91cf\u8bbe\u7f6e\u53ef\u4ee5\u6307\u5b9a host\ntinc set sec.Subnet=10.0.0.2/32\n\n\n# \u5728\u914d\u7f6e\u5355\u4e2a\u7f51\u7edc\u65f6, \u8bbe\u7f6e\u4e2a\u522b\u540d\u4f1a\u6bd4\u8f83\u65b9\u4fbf, \u4f7f\u7528\u4e0d\u540c\u76ee\u5f55\u6216 pid \u4e5f\u53ef\u4ee5\u8fd9\u6837\u64cd\u4f5c\nalias tinc='tinc -n main'\n# \u64cd\u4f5c\u6307\u5b9a\u7f51\u7edc\u540d\u65f6, \u53ef\u4f7f\u7528\u73af\u5883\u53d8\u91cf\nexport NETNAME=main\ntinc dump nodes\n# \u5982\u679c\u6267\u884c\u7684\u547d\u4ee4\u6bd4\u8f83\u591a, \u4e5f\u53ef\u4ee5\u52a0\u5165\u4ea4\u4e92\u6a21\u5f0f\u64cd\u4f5c\ntinc -c .\n\nADDRESS=10.0.0.1\nNETMASK=255.255.255.0\ncat > tinc-up <<SH\n#!/bin/sh\nifconfig \\$INTERFACE $ADDRESS netmask $NETMASK\nSH\ncat > tinc-down <<SH\n#!/bin/sh\nifconfig \\$INTERFACE down\nSH\nchmod +x tinc-*\n\ntincd -Dd4\n\n# \u5bfc\u5165\u522b\u5904 export \u7684\u914d\u7f6e\ntinc import\n\n# \u751f\u6210\u9080\u8bf7\u7801\n# \u6700\u7b80\u4fbf\u7684\u914d\u7f6e\u65b9\u5f0f\ntinc invite \u8282\u70b9\u540d\n# \u52a0\u5165\n# \u4f1a\u5728\u8fdc\u7a0b\u6dfb\u52a0\u4e3b\u673a\u4fe1\u606f\n# \u4f1a\u4f7f\u7528\u76f8\u540c\u7684 netname\n# tinc-up \u548c tinc-down \u9700\u8981\u81ea\u5df1\u914d\u7f6e\ntinc join \u9080\u8bf7\u7801\n\ntinc -n main invite thd\n\n# \u914d\u7f6e\u8981\u542f\u52a8\u7684\u7f51\u7edc\n# NETWORK: main\n# \u4f1a\u4f7f\u7528 /etc/tinc/main \u914d\u7f6e\nnano /etc/conf.d/tinc.networks\nrc-service tincd start\n# \u81ea\u542f\u52a8\nrc-update add tincd\n# \u542f\u52a8\u540e\u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7, 1-5\ntinc -n main log 5\n\n# Docker\n# ======\n# \u5148\u5728 docker \u4e2d\u8fdb\u884c\u914d\u7f6e\u548c\u6d4b\u8bd5\nNETNAME=name\ndocker run --rm -it -e NETNAME=$NETNAME --cap-add=NET_ADMIN --device=/dev/net/tun -v $PWD/tinc:/etc/tinc wener/tinc sh\n# \u5bfc\u5165\u914d\u7f6e\ndocker run --rm -it -e NETNAME=$NETNAME -v $PWD/tinc:/etc/tinc wener/tinc tinc import\n# \u542f\u52a8\ndocker run -d --restart always \\\n  --net host --cap-add=NET_ADMIN --device=/dev/net/tun \\\n  -e NETNAME=$NETNAME -v $PWD/tinc:/etc/tinc \\\n  --name tinc-$NETNAME wener/tinc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\n# http://tuntaposx.sourceforge.net/\n# \u65b0\u7248\u6ca1\u6709\u4e86 devel \u53c2\u6570\n# https://github.com/Homebrew/homebrew-core/tree/master/Formula/tinc.rb\ncurl https://raw.githubusercontent.com/wenerme/homebrew-core/tinc-pre/Formula/tinc-pre.rb > /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/tinc-pre.rb\nbrew install --build-from-source tinc-pre\n\n# utun\n# ===============\n# \u5728 mac \u4e0b, tinc \u652f\u6301 utun, \u53ef\u80fd\u9700\u8981 root \u6743\u9650\ntinc set DeviceType utun\n\n# \u786e\u4fdd\u8def\u5f84\u5b58\u5728, \u5426\u5219 pid \u4f1a\u5b58\u5728\u5f53\u524d\u76ee\u5f55\nmkdir -p /usr/local/Cellar/tinc/1.1pre17/var/run/\n\n# tun/tap\n# ===============\n# tuntap 10.13 \u4f1a\u5b89\u88c5\u5931\u8d25\nbrew cask install tuntap\n# /Library/Extensions/tap.kext\n# /Library/Extensions/tun.kext\n# /Library/StartupItems/tap\n# /Library/StartupItems/tun\n\n# \u624b\u52a8\u52a0\u8f7d\nsudo kextload /Library/Extensions/tun.kext\n# \u5931\u8d25\u65e5\u5fd7\nsudo dmesg\n# tun: could not register PF_INET protocol family: 17\n# Kext net.sf.tuntaposx.tun start failed (result 0x5).\n# Kext net.sf.tuntaposx.tun failed to load (0xdc008017).\n# Failed to load kext net.sf.tuntaposx.tun (error 0xdc008017).\n\n# \u67e5\u770b\u73b0\u6709\u7684\nkextstat | grep tun\n# \u5199\u5728\nsudo kextunload -b \u540d\u5b57\n\n# https://tunnelblick.net\n# \u5305\u542b\u4e86\u65b0\u7684 kext\n\n# \u67e5\u770b\u5177\u4f53\u51fa\u9519\u4fe1\u606f\nsudo kextutil /Volumes/Tunnelblick/Tunnelblick.app/Contents/Resources/tun-signed.kext\n\nsudo kextutil /Library/Extensions/tun.kext\n# Memory allocation failure.\n# Untrusted kexts are not allowed\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"tinc-up")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nbrctl addif br0 $INTERFACE\nifconfig $INTERFACE 0.0.0.0 promisc up\n\n# \u8be5\u8282\u70b9\u4f5c\u4e3a\u8def\u7531\n# iptables -I FORWARD -i $INTERFACE -j ACCEPT\n# iptables -t nat -A POSTROUTING -d 10.88.0.0/16 -o $INTERFACE -j MASQUERADE\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"tinc-fw")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\niptables -I INPUT -p udp --dport 20656 -j ACCEPT\niptables -I INPUT -p tcp --dport 20656 -j ACCEPT\niptables -I INPUT -i tinc -j ACCEPT\niptables -I FORWARD -i tinc -j ACCEPT\n")),(0,i.kt)("h2",{id:"\u5b8c\u6574\u7684\u7f51\u7edc\u914d\u7f6e"},"\u5b8c\u6574\u7684\u7f51\u7edc\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3b\u8282\u70b9\nexport NETNAME=mynet\nexport NODE=mynet\n\ntinc init $NETNAME\ncd /etc/tinc/$NETNAME\n\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\nADDRESS=10.66.1.1\nNETMASK=255.255.0.0\ncat > tinc-up <<SH\n#!/bin/sh\nifconfig \\$INTERFACE $ADDRESS netmask $NETMASK\nSH\ncat > tinc-down <<SH\n#!/bin/sh\nifconfig \\$INTERFACE down\nSH\nchmod +x tinc-*\n\n# \u914d\u7f6e\u4e3b\u8282\u70b9\u5730\u5740\n# \u7528\u4e8e\u5176\u5b83\u8282\u70b9\u8bf7\u6c42\u7684\u5730\u5740, \u5982\u679c\u6709\u5916\u7f51\u5730\u5740\ntinc set $NODE.Address=$(curl ipv4.icanhazip.com)\n# \u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\ntinc set $NODE.Port=12345\n# \u79c1\u6709\u5b50\u7f51\ntinc set $NODE.Subnet=$ADDRESS/32\n# \u542f\u52a8\ntinc start\n\n# \u9080\u8bf7\u5176\u5b83\u8282\u70b9\ntinc invite home\n\n# home \u8282\u70b9\n# =============\nexport NETNAME=mynet\nexport NODE=home\ntinc join <INVITE>\n\ncd /etc/tinc/$NETNAME\n\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\nADDRESS=10.66.1.2\nNETMASK=255.255.0.0\ncat > tinc-up <<SH\n#!/bin/sh\nifconfig \\$INTERFACE $ADDRESS netmask $NETMASK\nSH\ncat > tinc-down <<SH\n#!/bin/sh\nifconfig \\$INTERFACE down\nSH\nchmod +x tinc-*\n\n# \u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\ntinc set $NODE.Port=45678\n# \u79c1\u6709\u5b50\u7f51\ntinc set $NODE.Subnet=$ADDRESS/32\n\n# svr \u8282\u70b9\n# =============\n# \u5982\u679c\u4e0d\u80fd\u5b89\u88c5 tinc-1.1+ \u5219\u53ef\u4ee5\u4f7f\u7528 docker\nexport NETNAME=mynet\nexport NODE=home\ndocker run --rm -it -e NODE=$NODE -e NETNAME=$NETNAME --cap-add=NET_ADMIN --device=/dev/net/tun -v /data/tinc/$NETNAME/$NODE:/etc/tinc wener/tinc sh\n\ntinc join <INVITE>\n\ncd /etc/tinc/$NETNAME\n# \u914d\u7f6e\u542f\u52a8\u811a\u672c\nADDRESS=10.66.1.3\nNETMASK=255.255.0.0\ncat > tinc-up <<SH\n#!/bin/sh\nifconfig \\$INTERFACE $ADDRESS netmask $NETMASK\nSH\ncat > tinc-down <<SH\n#!/bin/sh\nifconfig \\$INTERFACE down\nSH\nchmod +x tinc-*\n\n# \u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\ntinc set $NODE.Port=45678\n# \u79c1\u6709\u5b50\u7f51\ntinc set $NODE.Subnet=$ADDRESS/32\n# \u9000\u51fa\u914d\u7f6e\u5bb9\u5668\nexit\n# \u8fd0\u884c\u670d\u52a1\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  --cap-add=NET_ADMIN --device=/dev/net/tun \\\n  -e NETNAME=$NETNAME \\\n  -v /data/tinc/$NETNAME/$NODE:/etc/tinc \\\n  --name tinc-$NETNAME-$NODE wener/tinc\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"traps-tincd3995-general-protection-fault-ip7f6ad09944eb-sp7ffda3da5ea8-error0-in-ld-musl-x86_64so17f6ad098b00046000"},"traps: tincd","[3995]"," general protection fault ip:7f6ad09944eb sp:7ffda3da5ea8 error:0 in ld-musl-x86_64.so.1","[7f6ad098b000+46000]"),(0,i.kt)("p",null,"tinc pre \u8fd0\u884c\u4e0d\u7a33\u5b9a\uff0c\u52a1\u5fc5\u914d\u7f6e openrc \u81ea\u52a8\u91cd\u542f"),(0,i.kt)("h3",{id:"failed-to-verify-sig-record-from-infra"},"Failed to verify SIG record from infra"),(0,i.kt)("p",null,"\u7b7e\u540d\u9a8c\u8bc1\u5931\u8d25\uff0c\u5c1d\u8bd5\u91cd\u65b0 invite"),(0,i.kt)("h3",{id:"got-req_key-from-node-while-we-already-started-a-sptps-session"},"Got REQ_KEY from node while we already started a SPTPS session!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/issues/203"},"#203"))),(0,i.kt)("h3",{id:"\u76f8\u540c-key-\u6216\u76f8\u540c-\u540d\u5b57"},"\u76f8\u540c key \u6216\u76f8\u540c \u540d\u5b57\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"tinc \u5141\u8bb8\u76f8\u540c key - \u4f46\u4e0d\u5efa\u8bae\uff0c\u5b58\u5728\u5b89\u5168\u9690\u60a3"),(0,i.kt)("li",{parentName:"ul"},"tinc \u4e0d\u5141\u8bb8\u76f8\u540c name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name \u5728\u8282\u70b9\u91cc\u662f\u552f\u4e00\u6807\u8bc6\u7684"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/pipermail/tinc/2015-May/004137.html"},"https://www.tinc-vpn.org/pipermail/tinc/2015-May/004137.html"))),(0,i.kt)("h3",{id:"peer-tries-to-roll-back-protocol-version-to-170"},"Peer tries to roll back protocol version to 17.0"),(0,i.kt)("p",null,"\u4f7f\u7528 1.0 \u534f\u8bae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ExperimentalProtocol = no\n")),(0,i.kt)("h3",{id:"could-not-open-devnettun-no-such-file-or-directory"},"Could not open /dev/net/tun: No such file or directory"),(0,i.kt)("p",null,"\u52a0\u8f7d tun \u5185\u6838\u6a21\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"modprobe tun\necho tun >> /etc/modules\n")),(0,i.kt)("h3",{id:"route"},"route"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Network_bridge"},"https://wiki.archlinux.org/index.php/Network_bridge"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sysctl net.ipv4.ip_forward\nsysctl -w net.ipv4.ip_forward=1\n# 1. \u5141\u8bb8\u5305\u8f6c\u53d1, \u4f1a\u5c06 eth0 \u5b50\u7f51\u7684\u8f6c\u53d1\u5230 mynet, \u9700\u8981\u5728\u7f51\u5173\u8282\u70b9\u6dfb\u52a0 eth0 \u7684\u5b50\u7f51\u624d\u80fd\u505a\u5230\u4e92\u901a\n# iptables -L --line-number -nv\niptables -I FORWARD -i mynet -j ACCEPT\niptables -I FORWARD -i eth0 -j ACCEPT\n\n# 2. NAT \u4f7f\u5f97 eth0 \u5b50\u7f51\u80fd\u8bbf\u95ee\u79c1\u7f51\n# \u5982\u679c\u505a\u4e86\u6865\u63a5, \u8fd9\u91cc\u9700\u8981\u6362\u6210\u6865\u63a5\u7f51\u5361\n# iptables -t nat -L --line-number -nv\niptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE\n# \u5982\u679c\u6709\u591a\u4e2a\u79c1\u7f51, \u4e5f\u53ef\u4ee5\u8003\u8651\u9650\u5236\u76ee\u6807\u7f51\u6bb5\n# iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -d 10.10.0.0/16 -o mynet -j MASQUERADE\n\n# \u521b\u5efa\u7528\u4e8e docker \u4f7f\u7528\u7684\u7f51\u7edc\n# \u5047\u8bbe\u5f53\u524d\u8282\u70b9\u7684\u5b50\u7f51\u662f 10.10.1.0/24 \u5f53\u524d\u8282\u70b9\u7684\u5730\u5740\u662f 10.10.1.0\ndocker network create \\\n  --driver=bridge \\\n  --subnet=10.10.0.0/16 \\\n  --ip-range=10.10.1.0/24 \\\n  --gateway=10.10.1.0 \\\n  --aux-address="my-host=10.10.1.1" \\\n  -o com.docker.network.bridge.name=brmynet \\\n  brmynet\n# \u5141\u8bb8\u6865\u63a5\u7f51\u5361\u8f6c\u53d1\niptables -I FORWARD -i brmynet -j ACCEPT\n# \u5c06 tinc \u4f5c\u4e3a\u8be5\u6865\u63a5\u7684 slave\nip li set master brmynet dev mynet\n# \u6216\u8005\u5728 tinc-up \u4e2d\u8bbe\u7f6e\ncat > tinc-up <<SH\n#!/bin/sh\nip li set master br$INTERFACE dev $INTERFACE\nip li set dev $INTERFACE up\nSH\n\n# \u8c03\u8bd5\ntcpdump -nni mynet icmp\n')),(0,i.kt)("p",null,"How can I set my linux box as a router to forward ip packets?\n",(0,i.kt)("a",{parentName:"p",href:"https://askubuntu.com/q/227369/267103"},"https://askubuntu.com/q/227369/267103")),(0,i.kt)("p",null,"Linux IP Masquerade HOWTO\n",(0,i.kt)("a",{parentName:"p",href:"http://tldp.org/HOWTO/IP-Masquerade-HOWTO/"},"http://tldp.org/HOWTO/IP-Masquerade-HOWTO/")),(0,i.kt)("p",null,"iptables -I FORWARD -i brwenet -j ACCEPT"),(0,i.kt)("h2",{id:"tinc-10-\u5347\u7ea7-11"},"tinc 1.0 \u5347\u7ea7 1.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tinc -n NETNAME generate-ed25519-keys\n")))}N.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return s}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(n),N=r,k=s["".concat(u,".").concat(N)]||s[N]||c[N]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);