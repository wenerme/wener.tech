/*! For license information please see c220f8d9.b40c5e3c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22526],{78329:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=i(11527),t=i(47214);const s={title:"Tinc \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},l="Tinc FAQ",c={id:"service/network/vpn/tinc/tinc-faq",title:"Tinc \u5e38\u89c1\u95ee\u9898",description:"Could not create a tun/tap interface from /dev/net/tun: Resource busy",source:"@site/../notes/service/network/vpn/tinc/tinc-faq.md",sourceDirName:"service/network/vpn/tinc",slug:"/service/network/vpn/tinc/faq",permalink:"/notes/service/network/vpn/tinc/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/tinc/tinc-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"Tinc \u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"Tinc \u914d\u7f6e",permalink:"/notes/service/network/vpn/tinc/conf"},next:{title:"Tinc Host \u914d\u7f6e",permalink:"/notes/service/network/vpn/tinc/host-conf"}},d={},o=[{value:"Could not create a tun/tap interface from /dev/net/tun: Resource busy",id:"could-not-create-a-tuntap-interface-from-devnettun-resource-busy",level:2},{value:"MTU 1518",id:"mtu-1518",level:2},{value:"Peer had unknown identity",id:"peer-had-unknown-identity",level:2},{value:"Error while decrypting routines:EVP_EncryptUpdate operation",id:"error-while-decrypting-routinesevp_encryptupdate-operation",level:2},{value:"Handshake phase not finished yet",id:"handshake-phase-not-finished-yet",level:2},{value:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931",id:"\u7f51\u7edc\u5361\u987f\u5927\u5305\u4e22\u5931",level:2},{value:"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5",id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5",level:2},{value:"PMTU - Path MTU",id:"pmtu---path-mtu",level:2},{value:"Simple Peer-to-Peer Security - sptps",id:"simple-peer-to-peer-security---sptps",level:2},{value:"tinc 1.0 vs tinc 1.1",id:"tinc-10-vs-tinc-11",level:2},{value:"macOS Router tinc-up",id:"macos-router-tinc-up",level:2},{value:"tun Destination address required",id:"tun-destination-address-required",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tinc-faq",children:"Tinc FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"could-not-create-a-tuntap-interface-from-devnettun-resource-busy",children:"Could not create a tun/tap interface from /dev/net/tun: Resource busy"}),"\n",(0,r.jsx)(n.h2,{id:"mtu-1518",children:"MTU 1518"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tincd -n <netname> -kUSR2"}),", and it will send a list of nodes to the syslog. The MTU should be in it."]}),"\n",(0,r.jsx)(n.p,{children:"There is no MTU limitation for a node talking to itself. So tinc just\nlists the maximum it itself supports, which is 1518."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/opnsense/core/issues/2057",children:"https://github.com/opnsense/core/issues/2057"}),"\n",(0,r.jsx)(n.a,{href:"https://www.tinc-vpn.org/pipermail/tinc/2015-May/004142.html",children:"https://www.tinc-vpn.org/pipermail/tinc/2015-May/004142.html"})]}),"\n",(0,r.jsx)(n.h2,{id:"peer-had-unknown-identity",children:"Peer had unknown identity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Peer 1.2.3.4 port 53291 had unknown identity (node_1)\nError while processing ID from node_1 (1.2.3.4 port 53291)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"error-while-decrypting-routinesevp_encryptupdate-operation",children:"Error while decrypting routines:EVP_EncryptUpdate:invalid operation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["libssl - ",(0,r.jsx)(n.a,{href:"https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=923438",children:"tinc: breaks after upgrading libssl1.1 to v1.1.1b-1"})]}),"\n",(0,r.jsxs)(n.li,{children:["pre+",(0,r.jsx)(n.code,{children:"ExperimentalProtocol=no"})," \u4f1a\u51fa\u73b0\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56e0\u6b64\u8981\u561b\u542f\u7528 1.1 \u534f\u8bae\uff0c\u8981\u561b\u4f7f\u7528 1.0 \u7248\u672c tinc"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gsliepen/tinc/commit/2b0aeec02d64bb4724da9ff1dbc19b7d35d7c904",children:"fix: use EVP_DecryptUpdate while decrypting"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1.18"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Error while decrypting: error:060A7094:digital envelope routines:EVP_EncryptUpdate:invalid operation\nError while decrypting metadata from node_1 (1.2.3.4 port 39080)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"handshake-phase-not-finished-yet",children:"Handshake phase not finished yet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5c1d\u8bd5 ",(0,r.jsx)(n.code,{children:"ExperimentalProtocol = no"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gsliepen/tinc/issues/203",children:"#203"}),' - too many "Invalid packet seqno" in logs']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5173\u8054\u9519\u8bef\u4fe1\u606f"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Handshake phase not finished yet from master_1 (192.168.1.2 port 655)\nNo key from master_1 after 10 seconds, restarting SPTPS\nGot REQ_KEY from master_1 while we already started a SPTPS session!\nInvalid packet seqno: 0 != 1 from master_1 (192.168.1.2 port 655)\nFailed to decrypt and verify packet from master_1 (192.168.1.2 port 655)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7f51\u7edc\u5361\u987f\u5927\u5305\u4e22\u5931",children:"\u7f51\u7edc\u5361\u987f\uff0c\u5927\u5305\u4e22\u5931"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u907f\u514d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Port=0"}),", \u5373\u4fbf\u4e0d\u80fd\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\uff0c\u7a33\u5b9a\u7684\u7aef\u53e3\u4f1a\u8ba9 tinc \u7ec4\u7f51\u66f4\u7a33\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5c3d\u91cf\u5bf9\u5916\u66b4\u9732\u56fa\u5b9a\u7aef\u53e3\uff0cnat \u4f1a\u66f4\u52a0\u901a\u7545\uff0c\u66f4\u5bb9\u6613\u76f4\u8fde"}),"\n",(0,r.jsx)(n.li,{children:"\u914d\u7f6e Address \u8ba9\u672c\u5730\u66f4\u5bb9\u6613\u53d1\u73b0"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 iperf3 \u9884\u70ed\u4e00\u4e0b\u7f51\u7edc - \u770b\u7f51\u7edc\u662f\u5426\u4f1a\u53d8\u5e73\u7a33"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ping--s-1389-\u53ef\u4ee5-1390-\u4e0d\u53ef\u4ee5",children:"ping -s 1389 \u53ef\u4ee5, 1390 \u4e0d\u53ef\u4ee5"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 tinc \u4e00\u6bb5\u65f6\u95f4\u672a\u4f7f\u7528\u540e, ",(0,r.jsx)(n.code,{children:"ping -s 1389"})," \u53ef\u901a, \u4f46\u5927\u7684\u8bf7\u6c42\u4f1a\u5361\u987f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"ping -s 1389 \u5b9e\u9645\u53d1\u9001 1397+20=1417"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/gsliepen/tinc/commit/24d28adf64934c8d726959e25dce8c10dbd10d1f",children:"Use a smarter algorithm for choosing MTU discovery probe sizes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u521d\u59cb mtu \u53d1\u73b0 - 8 \u6b21 probe"}),"\n",(0,r.jsx)(n.li,{children:"1339, 1417 ~1450"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"minmtu + powf(interval, multiplier * cycle_position / (probes_per_cycle - 1))"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"multiplier = 0.982"}),"\n",(0,r.jsx)(n.li,{children:"cycle_position = probes_per_cycle - (n->mtuprobes % probes_per_cycle) - 1"}),"\n",(0,r.jsx)(n.li,{children:"minmtu \u6700\u5c0f 64"}),"\n",(0,r.jsx)(n.li,{children:"interval = maxmtu - minmtu"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pmtu---path-mtu",children:"PMTU - Path MTU"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u81ea\u5df1\u5230\u81ea\u5df1 9018"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u7f51\u7edc MTU \u662f 1500, \u90a3\u4e48 tinc \u68c0\u6d4b\u7684 PMTU \u4e3a 1451\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html",children:"https://www.tinc-vpn.org/pipermail/tinc/2014-February/003614.html"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"tinc \u53d1\u9001\u4e0d\u540c\u7684\u5305\u5927\u5c0f\u68c0\u6d4b mtu - ping"}),"\n",(0,r.jsx)(n.li,{children:"\u6ca1\u6709 udp \u5219\u4f7f\u7528 tcp \u8f6c\u53d1 - mtu \u5219\u4ee5\u9ed8\u8ba4\u4e3a\u4e3b - \u6b64\u65f6 mtu \u65e0\u610f\u4e49"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u670d\u52a1\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"PingInterval=60\nPingTimeout=5\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4e3b\u673a\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"# \u8282\u70b9\u521d\u59cb\u8def\u5f84 MTU - Path MTU\nPMTU = 1514\n# \u81ea\u52a8\u53d1\u73b0\u5230\u8282\u70b9\u7684 Path MTU\nPMTUDiscovery = yes\n# \u53d1\u9001\u53d1\u73b0 MTU \u6d88\u606f\u7684\u95f4\u9694\nMTUInfoInterval = 5\n"})}),"\n",(0,r.jsx)(n.h2,{id:"simple-peer-to-peer-security---sptps",children:"Simple Peer-to-Peer Security - sptps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u57fa\u4e8e TLS 1.2 \u8fdb\u884c\u7cbe\u7b80\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6ca1\u6709 PKI - \u4ea4\u6362\u516c\u94a5"}),"\n",(0,r.jsx)(n.li,{children:"\u6ca1\u6709 cipher suite \u534f\u5546"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u8282\u70b9\u8ba4\u8bc1\u4f7f\u7528 521 bits ECC keys, Diffie-Hellman using ephemeral 521 bits ECC keys is used to provide perfect forward secrecy (PFS), AES-256-CTR is used for encryption, and HMAC-SHA-256 for message authentication."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.tinc-vpn.org/documentation-1.1/Simple-Peer_002dto_002dPeer-Security.html",children:"Simple Peer-to-Peer Security"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tinc-10-vs-tinc-11",children:"tinc 1.0 vs tinc 1.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["1.0\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7a33\u5b9a"}),"\n",(0,r.jsx)(n.li,{children:"rsa"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["1.1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65b0\u7684\u5b9e\u9a8c\u534f\u8bae"}),"\n",(0,r.jsx)(n.li,{children:"tinc \u547d\u4ee4"}),"\n",(0,r.jsx)(n.li,{children:"use of a GCM cipher suite to reduce the cost of HMAC"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528 ECDSA \u6027\u80fd\u53ef\u80fd\u4e0b\u964d\u4e00\u534a"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u901a\u8fc7 sptps_speed \u6d4b\u8bd5\u534f\u8bae\u541e\u5410\u6027\u80fd"}),"\n",(0,r.jsx)(n.li,{children:"Ed25519 \u8ba4\u8bc1"}),"\n",(0,r.jsx)(n.li,{children:"ChaCha20-Poly1305 \u52a0\u5bc6\u901a\u8baf"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 AES-GCM-256"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 IPv6"}),"\n",(0,r.jsx)(n.li,{children:"LAN \u8282\u70b9\u53d1\u73b0"}),"\n",(0,r.jsx)(n.li,{children:"Multiple routing modes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# 1.1\ncd src\nmake sptps_speed\n./sptps_speed\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Intel Pentium G4560 (4) @ 3.500G"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Generating keys for 10 seconds:          22600.52 op/s\nEd25519 sign for 10 seconds:             22027.18 op/s\nEd25519 verify for 10 seconds:            8444.55 op/s\nECDH for 10 seconds:                      6231.71 op/s\nSPTPS/TCP authenticate for 10 seconds:    2923.57 op/s\nSPTPS/TCP transmit for 10 seconds:           2.14 Gbit/s\nSPTPS/UDP authenticate for 10 seconds:    2973.93 op/s\nSPTPS/UDP transmit for 10 seconds:           2.17 Gbit/s\n"})}),"\n",(0,r.jsx)(n.h2,{id:"macos-router-tinc-up",children:"macOS Router tinc-up"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DeviceType = utun"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"ifconfig $INTERFACE 10.66.1.2 10.66.1.1 up\nroute add -net 10.66.1 -interface $INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tun-destination-address-required",children:"tun Destination address required"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"tun \u662f p2p \u534f\u8bae"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ifconfig tun0 inet 10.0.0.1 10.0.0.2 up # A\nifconfig tun0 inet 10.0.0.2 10.0.0.1 up # B\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,i)=>{var r=i(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var r,s={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:a,props:s,_owner:c.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var r=i(50959);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);