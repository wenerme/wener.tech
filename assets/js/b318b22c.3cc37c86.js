"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7190],{49613:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return d}});var r=e(59496);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var c=r.createContext({}),p=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},u=function(n){var t=p(n.components);return r.createElement(c.Provider,{value:t},n.children)},s={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=p(e),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return e?r.createElement(k,o(o({ref:t},u),{},{components:e})):r.createElement(k,o({ref:t},u))}));function d(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var p=2;p<i;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},92779:function(n,t,e){e.r(t),e.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=e(96600),a=e(27279),i=(e(59496),e(49613)),o=["components"],l={title:"Tinc \u914d\u7f6e",tags:["Configuration"]},c="Tinc \u914d\u7f6e",p={unversionedId:"service/network/tinc/tinc-conf",id:"service/network/tinc/tinc-conf",title:"Tinc \u914d\u7f6e",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/../notes/service/network/tinc/tinc-conf.md",sourceDirName:"service/network/tinc",slug:"/service/network/tinc/tinc-conf",permalink:"/notes/service/network/tinc/tinc-conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/tinc/tinc-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Tinc \u914d\u7f6e",tags:["Configuration"]},sidebar:"docs",previous:{title:"tinc 1.0",permalink:"/notes/service/network/tinc/tinc-1.0"},next:{title:"Tinc \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/network/tinc/tinc-faq"}},u={},s=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"tinc.conf",id:"tincconf",level:2},{value:"host",id:"host",level:2}],m={toc:s};function d(n){var t=n.components,e=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinc-\u914d\u7f6e"},"Tinc \u914d\u7f6e"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/etc/tinc/NETNAME/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tinc.conf"),(0,i.kt)("li",{parentName:"ul"},"conf.d/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*.conf")," - \u989d\u5916\u914d\u7f6e\u6587\u4ef6"))),(0,i.kt)("li",{parentName:"ul"},"hosts/ - \u4e3b\u673a\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"tinc-up"),(0,i.kt)("li",{parentName:"ul"},"tinc-down"),(0,i.kt)("li",{parentName:"ul"},"invitations/"),(0,i.kt)("li",{parentName:"ul"},"invitation-data - \u63a5\u53d7\u9080\u8bf7\u5305\u542b\u7684\u5185\u5bb9")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u811a\u672c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/etc/tinc/NETNAME/ - \u7f51\u7edc\u914d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tinc-up - \u542f\u52a8\u540e\u914d\u7f6e\u7f51\u7edc\u7684\u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},"tinc-down"),(0,i.kt)("li",{parentName:"ul"},"hosts/",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HOSTS-up - HOST \u7684\u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u540e\u7684\u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},"HOSTS-down"))),(0,i.kt)("li",{parentName:"ul"},"host-up - \u5f53\u67d0 HOST \u53ef\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},"host-down - \u5f53\u67d0 HOST \u4e0d\u53ef\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},"subnet-up - \u5f53 subnet \u53ef\u8bbf\u95ee"),(0,i.kt)("li",{parentName:"ul"},"subnet-down"),(0,i.kt)("li",{parentName:"ul"},"invitation-created - \u9080\u8bf7\u521b\u5efa"),(0,i.kt)("li",{parentName:"ul"},"invitation-accepted - \u9080\u8bf7\u63a5\u53d7")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u73af\u5883\u53d8\u91cf")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"env"),(0,i.kt)("th",{parentName:"tr",align:null},"desc"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NETNAME"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"this tinc daemon.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DEVICE"),(0,i.kt)("td",{parentName:"tr",align:null},"virtual network device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INTERFACE"),(0,i.kt)("td",{parentName:"tr",align:null},"virtual network interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NODE"),(0,i.kt)("td",{parentName:"tr",align:null},"host-up/down, subnet-up/down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMOTEADDRESS"),(0,i.kt)("td",{parentName:"tr",align:null},"host-up/down - \u5bf9\u65b9\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMOTEPORT"),(0,i.kt)("td",{parentName:"tr",align:null},"host-up/down - \u5bf9\u65b9\u7aef\u53e3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SUBNET"),(0,i.kt)("td",{parentName:"tr",align:null},"subnet-up/down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WEIGHT"),(0,i.kt)("td",{parentName:"tr",align:null},"subnet-up/down")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INVITATION_FILE"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INVITATION_URL"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"tincconf"},"tinc.conf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tinc-vpn.org/documentation-1.1/tinc.conf.5"},"tinc.conf.5")),(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709 ConnectTo \u4e14 ",(0,i.kt)("inlineCode",{parentName:"li"},"AutoConnect=no")," \u53ef\u4ee5\u8ba4\u4e3a\u662f\u670d\u52a1\u7aef"),(0,i.kt)("li",{parentName:"ul"},"\u6709 ConnectTo \u4e14 ",(0,i.kt)("inlineCode",{parentName:"li"},"AutoConnect=yes")," \u53ef\u4ee5\u8ba4\u4e3a\u662f\u5ba2\u6237\u7aef")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u8282\u70b9\u540d\u5b57 - \u552f\u4e00\u3001\u5fc5\u987b\n# \u53ef\u4ee5\u6307\u5b9a\u4e3a $HOST - \u5982\u679c\u73af\u5883\u53d8\u4e86\u4e0d\u5b58\u5728\u5219 gethostname()\nName = name\n# router | switch | hub\nMode = router\n\n# \u542f\u52a8\u65f6\u8fde\u63a5\u5230\u7684\u8282\u70b9 - meta \u8282\u70b9\n# \u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\n# \u5982\u679c\u4e00\u4e2a\u90fd\u4e0d\u6307\u5b9a\u4e14\u4e5f\u4e0d\u6307\u5b9a AutoConnect \u5219\u8282\u70b9\u5904\u4e8e\u53ea\u63a5\u53d7\u94fe\u63a5\u7684\u72b6\u6001\nConnectTo = name\n\n# \u5982\u679c\u542f\u7528, \u4f1a\u81ea\u52a8\u5c1d\u8bd5\u4e0e\u5176\u4ed6\u8282\u70b9\u5efa\u7acb meta \u94fe\u63a5, \u800c\u4e0d\u9700\u8981\u8bbe\u7f6e ConnectTo\n# \u4e0d\u80fd\u94fe\u63a5 Port=0 \u7684\u8282\u70b9 - \u7cfb\u7edf\u968f\u673a\u7aef\u53e3\n# \u8bd5\u9a8c\u9636\u6bb5\n# yes | no\nAutoConnect = yes\n\n\n# \u5f71\u54cd\u76d1\u542c\u548c\u5916\u90e8 sockets \u5305, any \u4f1a\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u521b\u5efa ipv4 \u548c ipv6\n# ipv4 | ipv6 | any\nAddressFamily = any\n\n# \u7c7b\u4f3c\u4e8e ListenAddress\uff0c\u4f46\u51fa\u53bb\u7684\u6d41\u91cf\u4e5f\u4f1a\u4f7f\u7528\n# \u6709\u591a\u8def\u51fa\u53e3\u65f6\u6709\u7528\n# BindToAddress=address [port]\n\n# \u8bbe\u7f6e\u5e7f\u64ad\u5305\u53d1\u5230\u5176\u4ed6\u8282\u70b9\u7684\u65b9\u5f0f, \u6240\u6709\u8282\u70b9\u9700\u8981\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u5f0f, \u5426\u5219\u53ef\u80fd\u4f1a\u4ea7\u751f\u8def\u7531\u5faa\u73af\n# no \u4e0d\u53d1\u9001\u5e7f\u64ad\u5305\n# mst \u4f7f\u7528 Minimum Spanning Tree, \u4fdd\u8bc1\u53d1\u5f80\u6bcf\u4e2a\u8282\u70b9\n# direct \u53ea\u53d1\u9001\u7ed9\u76f4\u63a5\u8bbf\u95ee\u7684\u8282\u70b9, \u4ece\u5176\u4ed6\u8282\u70b9\u63a5\u6536\u5230\u7684\u4e0d\u8f6c\u53d1. \u5982\u679c\u8bbe\u7f6e\u4e86 IndirectData, \u5e7f\u64ad\u5305\u4e5f\u4f1a\u53d1\u9001\u7ed9\u6709 meta \u94fe\u63a5\u7684\u8282\u70b9\n# \u8bd5\u9a8c\u9636\u6bb5\n# no | mst | direct\nBroadcast = mst\n\n# \u5b9a\u4e49\u5e7f\u64ad\u5730\u5740\n# \u6807\u51c6\u7684\u5e7f\u64ad\u5730\u5740\u5df2\u5305\u542b\n# BroadcastSubnet = address[/prefixlength]\n\n# \u8f6c\u53d1\u524d\u51cf\u5c0f ipv4 \u5305 ttl \u548c ipv6 \u5305\u7684 Hop Limit\n# switc \u6a21\u5f0f\u4e14\u9700\u8981 ipv6 \u5219\u4e0d\u8981\u542f\u7528\n# \u5b9e\u9a8c\u9636\u6bb5\nDecrementTTL=no\n\n# \u9ed8\u8ba4\u81ea\u52a8\u521b\u5efa\n# Device=/dev/tap0\n# dummy,raw_socket,multicast,fd,uml,vde,tun,tunnohead,tunifhead,utun,tap\n# DeviceType=type\n\n# \u81f3\u5c11\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\u4f1a\u8c03\u7528 tinc-up\uff0c\u6ca1\u6709\u8282\u70b9\u65f6\u8c03\u7528 tinc-down\nDeviceStandby=no\n\n# \u4ec5\u76f4\u8fde\u4e0d\u8f6c\u53d1 - \u9002\u7528\u4e8e meta node\n# \u5b9e\u9a8c\u9636\u6bb5\nDirectOnly=no\n\n# Ed25519 key - SPTPS \u534f\u8bae\u4f7f\u7528\n# Ed25519PrivateKeyFile=/etc/tinc/NETNAME/ed25519_key.priv\n\n# \u542f\u7528\u540e, \u4f1a\u5c1d\u8bd5\u4f7f\u7528 SPTPS \u534f\u8bae, key \u4ea4\u6362\u4f1a\u4f7f\u7528 Ephemeral ECDH, \u4f1a\u4f7f\u7528 Ed25519 \u4f5c\u4e3a\u6388\u6743, \u800c\u4e0d\u662f RSA, \u56e0\u6b64\u9700\u8981\u5148\u751f\u6210 Ed25519\n# \u5982\u679c\u5148\u542f\u7528\u4e86\u4e14 join \u4e86\u7f51\u7edc\uff0c\u518d\u6539\u6210 no \u65f6\u9700\u8981\u5148\u51c6\u5907\u597d rsa key\nExperimentalProtocol = yes\n\n# \u8f6c\u53d1\u7b56\u7565\n# \u5b9e\u9a8c\u9636\u6bb5\n# off \u4e0d\u8f6c\u53d1\n# internal \u5185\u90e8\u8f6c\u53d1\n# kernel \u5305\u53d1\u5f80 TUN/TAP \u8bbe\u5907, \u4ea4\u7531\u5185\u6838\u8f6c\u53d1, \u6027\u80fd\u66f4\u4f4e, \u4f46\u80fd\u4f7f\u7528\u5185\u6838\u7684\u8def\u7531\u529f\u80fd\nForwarding = internal\n\n# \u5305\u6253\u4e0a fwmark - \u914d\u5408 iptables \u53ef\u8fdb\u884c\u8fc7\u6ee4\n# \u8bd5\u9a8c\u9636\u6bb5\nFWMark=0\n\n# \u662f\u5426\u89e3\u6790 hostname - dns \u963b\u585e\u67e5\u8be2\u5bf9\u6027\u80fd\u6709\u4e00\u70b9\u5f71\u54cd\nHostnames=no\n\n# tun/tap IFF_ONE_QUEUE\n# \u5b9e\u9a8c\u9636\u6bb5\nIffOneQueue=no\n\n# Interface=interface\n\n# \u9080\u8bf7\u65f6\u6548\u65f6\u95f4\n# \u79d2\nInvitationExpire=604800\n\n# key \u5931\u6548\u65f6\u95f4 - \u79d2\nKeyExpire=3600\n\n# \u9ed8\u8ba4\u76d1\u542c\u6240\u6709\n# address \u53ef\u4ee5\u8bbe\u7f6e\u4e3a *\n# port \u9ed8\u8ba4\u4e3a hosts \u4e0b\u7684 Port \u9009\u9879\u6216 655 - \u8bbe\u7f6e\u4e3a 0 \u5219\u968f\u673a\u9009\u62e9\n# ListenAddress=address port\n\n# \u5c1d\u8bd5\u53d1\u73b0\u672c\u673a\u7f51\u7edc\u4e2d\u7684\u8282\u70b9\n# \u5141\u8bb8\u4e0e\u672c\u5730\u8282\u70b9\u5730\u5740\u5efa\u7acb\u76f4\u63a5\u8fde\u63a5\n# \u76ee\u524d, \u672c\u5730\u53d1\u73b0\u673a\u5236\u662f\u901a\u8fc7\u5728 UDP \u53d1\u73b0\u9636\u6bb5\u53d1\u9001\u672c\u5730\u5730\u5740\u7684\u65b9\u5f0f\nLocalDiscovery = yes\n\nLogLevel=0\n\n# mac \u5730\u5740\u5931\u6548\u65f6\u95f4 - \u79d2\n# switch \u6a21\u5f0f\u6709\u6548\nMACExpire=600\n\n# \u6700\u5927\u7206\u53d1\u8fde\u63a5\u6570 - \u8d85\u8fc7\u7684 1/s \u4e00\u4e2a\nMaxConnectionBurst=100\n\n# \u6700\u5927\u91cd\u8fde\u5ef6\u65f6\nMaxTimeout=900\n\n\n# ping \u95f4\u9694 - \u53d1\u73b0 mtu \u68c0\u6d4b\u8282\u70b9\nPingInterval=60\n# \u8d85\u65f6\u540e\u4e2d\u65ad meta \u94fe\u63a5\nPingTimeout=5\n\n# UDP \u7ee7\u627f TCP \u7684 TOS \u5b57\u6bb5\n# \u5b9e\u9a8c\u9636\u6bb5\nPriorityInheritance=no\n\n# RSA key - \u65e7\u7684\u534f\u8bae\u4f7f\u7528\n# PrivateKey=key\n# PrivateKeyFile=/etc/tinc/NETNAME/rsa_key.priv\n\n# \u8fdb\u7a0b\u4f18\u5148\u7ea7 - \u53ef\u80fd\u5f71\u54cd VPN \u5ef6\u65f6\n# ProcessPriority = low | normal | high\n\n# \u51fa\u7684\u8fde\u63a5\u7ecf\u8fc7\u4ee3\u7406\n# socks4 address port [username]\n# socks5 address port [username password]\n# http address port\n# exec command\n#   \u73af\u5883\u53d8\u91cf NAME, NODE, REMOTEADDRES, REMOTEPORT\n# \u5b9e\u9a8c\u9636\u6bb5\n# Proxy = socks4 | socks5 | http | exec\n\n# byte\nReplayWindow=32\n\n# \u53ea\u5141\u8bb8 /etc/tinc/NETNAME/hosts/ \u4e0b\u7684 Subnet \u4fe1\u606f\n# \u4f8b\u5982 A -> B -> C - C \u4e0d\u4f1a\u5b66\u4e60\u5230 A \u7684\u5b50\u7f51\u4fe1\u606f\n# \u5b9e\u9a8c\u9636\u6bb5\nStrictSubnets = no\n\n# \u4e0d\u4f1a\u8f6c\u53d1\u5176\u4ed6\u8282\u70b9\u95f4\u7684\u4fe1\u606f\uff0c /etc/tinc/NETNAME/hosts/ , \u9690\u6027\u6307\u5b9a StrictSubnets\n# \u5b9e\u9a8c\u9636\u6bb5\nTunnelServer = no\n\nUDPDiscovery=yes\nUDPDiscoveryKeepaliveInterval=9\nUDPDiscoveryInterval=2\nUDPDiscoveryTimeout=30\nUDPInfoInterval=5\nUDPRcvBuf=1048576\nUDPSndBuf=1048576\n\n# \u641c\u7d22 UPnP-IGD\uff0c\u7ba1\u7406\u7ef4\u62a4 tinc \u7684\u7aef\u53e3\u6620\u5c04\n# udponly \u53ea\u7ef4\u62a4 udp \u7aef\u53e3\n# yes | udponly | no\nUPnP=no\nUPnPDiscoverWait=5\nUPnPRefreshPeriod=60\n")),(0,i.kt)("h2",{id:"host"},"host"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5305\u542b\u516c\u5171\u8fde\u63a5\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u53d1\u7ed9\u5176\u4ed6\u4eba\u4f7f\u7528")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u63a8\u8350\u8bbe\u7f6e\u5730\u5740\u4fe1\u606f\n# \u5728\u5916\u8fde\u5230\u8282\u70b9\u65f6\u4f1a\u7528\u5230\n# \u53ef\u6307\u5b9a\u591a\u4e2a\n# Address = address [port]\n\n# clamp maximum segment size - tcp \u5305-> pmtu\nClampMSS=yes\n\n# \u52a0\u5bc6 UDP \u7684\u5806\u6210\u5bc6\u94a5\u52a0\u5bc6\u65b9\u5f0f\n# \u68c0\u6d4b CPU \u662f\u5426\u652f\u6301 aes\n# grep aes /proc/cpuinfo --color auto\n# SHA1 HMAC\n# \u5bf9\u542f\u7528\u4e86 ExperimentalProtocol \u4e0d\u751f\u6548\n# \u8bbe\u7f6e\u4e3a non \u5173\u95ed\u52a0\u5bc6\uff0c\u5efa\u8bae\u4f7f\u7528\u652f\u6301 cbc \u7684\u7b97\u6cd5\uff0c\u4f8b\u5982 aes-128-cbc\nCipher = blowfish\n\n# 1-9 zlib\n# 10 fast lzo\n# 11 best lzo\nCompression=0\n\n# UDP \u5305\u7684\u6458\u8981\u7b97\u6cd5, \u53ef\u4f7f\u7528 LibreSSL \u6216 OpenSSL \u652f\u6301\u7684\u7b97\u6cd5, \u6307\u5b9a none \u53ef\u5173\u95ed\u5305\u9a8c\u8bc1.\n# \u5bf9\u4f7f\u7528 ExperimentalProtocol \u7684\u8282\u70b9\u4e0d\u751f\u6548\nDigest = sha1\n\n# \u5982\u679c\u8bbe\u7f6e\u4e3a yes \u5219\u5fc5\u987b\u5148\u6709\u76f4\u8fde\u7684 meta \u94fe\u63a5\nIndirectData=no\n\n# \u8ba1\u7b97 MAC \u7684\u957f\u5ea6\n# 0-\u6458\u8981\u7b97\u6cd5\u8f93\u51fa\u957f\u5ea6\n# \u65b0\u7b97\u6cd5\u65e0\u6548\nMACLength=4\n\n# \u8282\u70b9\u521d\u59cb\u8def\u5f84 MTU - Path MTU\nPMTU = 1514\n# \u81ea\u52a8\u53d1\u73b0\u5230\u8282\u70b9\u7684 Path MTU\nPMTUDiscovery = yes\n# \u53d1\u9001\u53d1\u73b0 MTU \u6d88\u606f\u7684\u95f4\u9694\nMTUInfoInterval = 5\n\n# \u53ef\u8bbe\u7f6e\u4e3a 0 - \u968f\u673a\nPort=655\n\n# RSA \u516c\u94a5\n# \u5e9f\u5f03\n# PublicKey = key\n# PublicKeyFile = filename\n\n# \u8282\u70b9\u5b50\u7f51\u4fe1\u606f\n# \u652f\u6301\u6307\u5b9a\u591a\u4e2a\n# Subnet = address[/prefixlength[#weight]]\n\n# \u5e9f\u5f03 - \u73b0\u5728\u4f1a\u81ea\u52a8\u68c0\u6d4b\nTCPOnly=no\n\n# \u5f71\u54cd\u8f6c\u53d1\u548c\u5e7f\u64ad\u4f18\u5148\u7ea7\n# weight \u8d8a\u5927\u4f18\u5148\u7ea7\u8d8a\u4f4e\n# Weight=weight\n")))}d.isMDXComponent=!0}}]);