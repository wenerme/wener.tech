"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13729],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(96600),i=n(27279),a=(n(59496),n(49613)),l=["components"],p={title:"Tinc \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},o="Tinc FAQ",c={unversionedId:"service/network/tinc/tinc-faq",id:"service/network/tinc/tinc-faq",title:"Tinc \u5e38\u89c1\u95ee\u9898",description:"Peer had unknown identity",source:"@site/notes/service/network/tinc/tinc-faq.md",sourceDirName:"service/network/tinc",slug:"/service/network/tinc/tinc-faq",permalink:"/notes/service/network/tinc/tinc-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/tinc/tinc-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Tinc \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Tinc \u914d\u7f6e",permalink:"/notes/service/network/tinc/tinc-conf"},next:{title:"tinyproxy",permalink:"/notes/service/network/tinyproxy"}},s={},u=[{value:"Peer had unknown identity",id:"peer-had-unknown-identity",level:2},{value:"Error while decrypting routines:EVP_EncryptUpdate:invalid operation",id:"error-while-decrypting-routinesevp_encryptupdateinvalid-operation",level:2},{value:"Handshake phase not finished yet",id:"handshake-phase-not-finished-yet",level:2},{value:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5361\u987f\u5927\u5305\u4e22\u5931",level:2},{value:"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5",id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5",level:2},{value:"PMTU - Path MTU",id:"pmtu---path-mtu",level:2},{value:"Simple Peer-to-Peer Security - sptps",id:"simple-peer-to-peer-security---sptps",level:2},{value:"Tinc 1.0 init",id:"tinc-10-init",level:2},{value:"tinc 1.0 vs tinc 1.1",id:"tinc-10-vs-tinc-11",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tinc-faq"},"Tinc FAQ"),(0,a.kt)("h2",{id:"peer-had-unknown-identity"},"Peer had unknown identity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Peer 1.2.3.4 port 53291 had unknown identity (node_1)\nError while processing ID from node_1 (1.2.3.4 port 53291)\n")),(0,a.kt)("h2",{id:"error-while-decrypting-routinesevp_encryptupdateinvalid-operation"},"Error while decrypting routines:EVP_EncryptUpdate:invalid operation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"libssl - ",(0,a.kt)("a",{parentName:"li",href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=923438"},"tinc: breaks after upgrading libssl1.1 to v1.1.1b-1")),(0,a.kt)("li",{parentName:"ul"},"pre+",(0,a.kt)("inlineCode",{parentName:"li"},"ExperimentalProtocol=no")," \u4f1a\u51fa\u73b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u8981\u561b\u542f\u7528 1.1 \u534f\u8bae\uff0c\u8981\u561b\u4f7f\u7528 1.0 \u7248\u672c tinc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/commit/2b0aeec02d64bb4724da9ff1dbc19b7d35d7c904"},"fix: use EVP_DecryptUpdate while decrypting"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1.18")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error while decrypting: error:060A7094:digital envelope routines:EVP_EncryptUpdate:invalid operation\nError while decrypting metadata from node_1 (1.2.3.4 port 39080)\n")),(0,a.kt)("h2",{id:"handshake-phase-not-finished-yet"},"Handshake phase not finished yet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5 ",(0,a.kt)("inlineCode",{parentName:"li"},"ExperimentalProtocol = no")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/issues/203"},"#203"),' - too many "Invalid packet seqno" in logs')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u8054\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Handshake phase not finished yet from master_1 (192.168.1.2 port 655)\nNo key from master_1 after 10 seconds, restarting SPTPS\nGot REQ_KEY from master_1 while we already started a SPTPS session!\nInvalid packet seqno: 0 != 1 from master_1 (192.168.1.2 port 655)\nFailed to decrypt and verify packet from master_1 (192.168.1.2 port 655)\n")),(0,a.kt)("h2",{id:"\u7f51\u7edc\u5361\u987f\u5927\u5305\u4e22\u5931"},"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Port=0"),", \u5373\u4fbf\u4e0d\u80fd\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\uff0c\u7a33\u5b9a\u7684\u7aef\u53e3\u4f1a\u8ba9 tinc \u7ec4\u7f51\u66f4\u7a33\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u5bf9\u5916\u66b4\u9732\u56fa\u5b9a\u7aef\u53e3\uff0cnat \u4f1a\u66f4\u52a0\u901a\u7545\uff0c\u66f4\u5bb9\u6613\u76f4\u8fde"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e Address \u8ba9\u672c\u5730\u66f4\u5bb9\u6613\u53d1\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 iperf3 \u9884\u70ed\u4e00\u4e0b\u7f51\u7edc - \u770b\u7f51\u7edc\u662f\u5426\u4f1a\u53d8\u5e73\u7a33")),(0,a.kt)("h2",{id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5"},"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5"),(0,a.kt)("p",null,"\u5728 tinc \u4e00\u6bb5\u65f6\u95f4\u672a\u4f7f\u7528\u540e, ",(0,a.kt)("inlineCode",{parentName:"p"},"ping -s 1389")," \u53ef\u901a, \u4f46\u5927\u7684\u8bf7\u6c42\u4f1a\u5361\u987f\u3002"),(0,a.kt)("p",null,"ping -s 1389 \u5b9e\u9645\u53d1\u9001 1397+20=1417"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/commit/24d28adf64934c8d726959e25dce8c10dbd10d1f"},"Use a smarter algorithm for choosing MTU discovery probe sizes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb mtu \u53d1\u73b0 - 8 \u6b21 probe"),(0,a.kt)("li",{parentName:"ul"},"1339, 1417 ~1450"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minmtu + powf(interval, multiplier * cycle_position / (probes_per_cycle - 1))"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"multiplier = 0.982"),(0,a.kt)("li",{parentName:"ul"},"cycle_position = probes_per_cycle - (n->mtuprobes % probes_per_cycle) - 1"),(0,a.kt)("li",{parentName:"ul"},"minmtu \u6700\u5c0f 64"),(0,a.kt)("li",{parentName:"ul"},"interval = maxmtu - minmtu")))))),(0,a.kt)("h2",{id:"pmtu---path-mtu"},"PMTU - Path MTU"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u5230\u81ea\u5df1 9018"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7f51\u7edc MTU \u662f 1500, \u90a3\u4e48 tinc \u68c0\u6d4b\u7684 PMTU \u4e3a 1451",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html"},"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html")))),(0,a.kt)("li",{parentName:"ul"},"tinc \u53d1\u9001\u4e0d\u540c\u7684\u5305\u5927\u5c0f\u68c0\u6d4b mtu - ping"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 udp \u5219\u4f7f\u7528 tcp \u8f6c\u53d1 - mtu \u5219\u4ee5\u9ed8\u8ba4\u4e3a\u4e3b - \u6b64\u65f6 mtu \u65e0\u610f\u4e49")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"PingInterval=60\nPingTimeout=5\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# \u8282\u70b9\u521d\u59cb\u8def\u5f84 MTU - Path MTU\nPMTU = 1514\n# \u81ea\u52a8\u53d1\u73b0\u5230\u8282\u70b9\u7684 Path MTU\nPMTUDiscovery = yes\n# \u53d1\u9001\u53d1\u73b0 MTU \u6d88\u606f\u7684\u95f4\u9694\nMTUInfoInterval = 5\n")),(0,a.kt)("h2",{id:"simple-peer-to-peer-security---sptps"},"Simple Peer-to-Peer Security - sptps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e TLS 1.2 \u8fdb\u884c\u7cbe\u7b80",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 PKI - \u4ea4\u6362\u516c\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 cipher suite \u534f\u5546"))),(0,a.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8ba4\u8bc1\u4f7f\u7528 521 bits ECC keys, Diffie-Hellman using ephemeral 521 bits ECC keys is used to provide perfect forward secrecy (PFS), AES-256-CTR is used for encryption, and HMAC-SHA-256 for message authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation-1.1/Simple-Peer_002dto_002dPeer-Security.html"},"Simple Peer-to-Peer Security"))),(0,a.kt)("h2",{id:"tinc-10-init"},"Tinc 1.0 init"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation/tinc.conf.5"},"tinc.conf.5"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export NETWORK=kubenet\nNODENAME=$(hostname|tr - _)\n\nmodprobe tun\n\nmkdir -p /etc/tinc/$NETWORK/hosts\ncd /etc/tinc/$NETWORK\n\ntincd -n $NETWORK -K 4096\ncat <<CONF > tinc.conf\nName=$NODENAME\nMode=switch\nDevice = /dev/net/tun\nAddressFamily = ipv4\nCONF\n\ncat <<'SHELL' > tinc-up\nip link set $INTERFACE up\nip addr add 10.10.1.1 dev $INTERFACE\nip route add 10.10.1.0/24 dev $INTERFACE\nSHELL\ncat <<'SHELL' > tinc-down\nip link set $INTERFACE down\nSHELL\nchmod -v +x tinc-up tinc-down\n\ncp rsa_key.pub hosts/$NODENAME.rsa_key.pub\ncat <<CONF > hosts/$NODENAME\nPublicKeyFile=$NODENAME.rsa_key.pub\nCONF\n\n# \u524d\u53f0\u542f\u52a8 - debug\ntincd -n $NETWORK -Dd 5\n\n# \u670d\u52a1\u542f\u52a8\necho \"NETWORK: $NETWORK\" >> /etc/conf.d/tinc.networks\nservice tincd start\n")),(0,a.kt)("h2",{id:"tinc-10-vs-tinc-11"},"tinc 1.0 vs tinc 1.1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7a33\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"rsa"))),(0,a.kt)("li",{parentName:"ul"},"1.1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7684\u5b9e\u9a8c\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"tinc \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"use of a GCM cipher suite to reduce the cost of HMAC"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ECDSA \u6027\u80fd\u53ef\u80fd\u4e0b\u964d\u4e00\u534a"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 sptps_speed \u6d4b\u8bd5\u534f\u8bae\u541e\u5410\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"Ed25519 \u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"ChaCha20-Poly1305 \u52a0\u5bc6\u901a\u8baf"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 AES-GCM-256"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 IPv6"),(0,a.kt)("li",{parentName:"ul"},"LAN \u8282\u70b9\u53d1\u73b0"),(0,a.kt)("li",{parentName:"ul"},"Multiple routing modes")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# 1.1\ncd src\nmake sptps_speed\n./sptps_speed\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Intel Pentium G4560 (4) @ 3.500G")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Generating keys for 10 seconds:          22600.52 op/s\nEd25519 sign for 10 seconds:             22027.18 op/s\nEd25519 verify for 10 seconds:            8444.55 op/s\nECDH for 10 seconds:                      6231.71 op/s\nSPTPS/TCP authenticate for 10 seconds:    2923.57 op/s\nSPTPS/TCP transmit for 10 seconds:           2.14 Gbit/s\nSPTPS/UDP authenticate for 10 seconds:    2973.93 op/s\nSPTPS/UDP transmit for 10 seconds:           2.17 Gbit/s\n")))}d.isMDXComponent=!0}}]);