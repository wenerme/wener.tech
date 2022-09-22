"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48357],{49613:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return k}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81074:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var n=a(96600),r=a(27279),l=(a(59496),a(49613)),i=["components"],p={title:"\u6865\u63a5\u7f51\u7edc"},d="Bridge",m={unversionedId:"os/linux/network/bridge",id:"os/linux/network/bridge",title:"\u6865\u63a5\u7f51\u7edc",description:"- networking/bridge",source:"@site/../notes/os/linux/network/bridge.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/bridge",permalink:"/notes/os/linux/network/bridge",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/network/bridge.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"\u6865\u63a5\u7f51\u7edc"},sidebar:"docs",previous:{title:"Bonding",permalink:"/notes/os/linux/network/bonding"},next:{title:"ifupdown-ng",permalink:"/notes/os/linux/network/ifupdown-ng"}},o={},u=[{value:"STP",id:"stp",level:2},{value:"bridge vs bonding active-backup",id:"bridge-vs-bonding-active-backup",level:2},{value:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361 Mac \u5730\u5740",id:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361-mac-\u5730\u5740",level:2},{value:"tinc \u8282\u70b9\u907f\u514d mac \u51b2\u7a81",id:"tinc-\u8282\u70b9\u907f\u514d-mac-\u51b2\u7a81",level:2},{value:"received packet on bond0 with own address as source address",id:"received-packet-on-bond0-with-own-address-as-source-address",level:2},{value:"bridge: filtering via arp/ip/ip6tables is no longer available by default",id:"bridge-filtering-via-arpipip6tables-is-no-longer-available-by-default",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bridge"},"Bridge"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.linuxfoundation.org/networking/bridge"},"networking/bridge")),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u7c7b\u4f3c Switch"),(0,l.kt)("li",{parentName:"ul"},"L2 learning and forwarding"),(0,l.kt)("li",{parentName:"ul"},"STP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8ba9\u591a\u8def\u80fd\u6b63\u5e38\u5de5\u4f5c")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-interfaces"},"auto eth0\niface eth0 inet manual\n\nauto br0\niface br0 inet dhcp\n    bridge-ports eth0\n    bridge-stp on\n  # \u81ea\u5b9a\u4e49 mac \u786e\u4fdd dhcp \u7a33\u5b9a\n    # bridge-hw 00:00:00:00:00:00\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ip link set dev $IFACE type bridge ageing_time $IF_BRIDGE_AGEING\n# brctl setageing\n\n# ip link set dev $IFACE type bridge priority $IF_BRIDGE_BRIDGEPRIO\n# brctl setbridgeprio\n\n# ip link set dev $IFACE type bridge forward_delay $IF_BRIDGE_FD\n# brctl setfd\n\n# ip link set dev $IFACE type bridge hello_time $IF_BRIDGE_HELLO\n# brctl sethello\n\n# ip link set dev $IFACE type bridge max_age $IF_BRIDGE_MAXAGE\n# brctl setmaxage\n\n# bridge link set dev $IFACE cost $IF_BRIDGE_PATHCOST\n# brctl setpathcost\n\n# bridge link set dev $IFACE priority $IF_BRIDGE_PORTPRIO\n# brctl setportprio\n\n# ip link set dev $IFACE type bridge stp $(yesno $IF_BRIDGE_STP)\nbrctl stp br0 off\n\n# vlan\n# ip link set dev $IFACE type bridge vlan_filtering $(yesno $IF_BRIDGE_VLAN_AWARE)\n\n#\nbrctl showmacs br0\nbrctl showstp br0\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"brctl setATTR ",(0,l.kt)("strong",{parentName:"th"},"br")," ",(0,l.kt)("em",{parentName:"th"},"val")),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setageing bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set ageing time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setbridgeprio bridge prio"),(0,l.kt)("td",{parentName:"tr",align:null},"Set bridge priority (between 0 and 65535)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setfd bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set bridge forward delay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sethello bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set hello time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmaxage bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set max message age")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setgcint bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set garbage collection interval in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sethashel bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set hash elasticity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sethashmax bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set hash max")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmclmc bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast last member count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcrouter bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast router")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcsnoop bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast snooping")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcsqc bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast startup query count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmclmi bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast last member interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcmi bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast membership interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcqpi bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast querier interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcqi bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast query interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcqri bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast query response interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setmcqri bridge time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set multicast startup query interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setpathcost bridge port cost"),(0,l.kt)("td",{parentName:"tr",align:null},"Set path cost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setportprio bridge port prio"),(0,l.kt)("td",{parentName:"tr",align:null},"Set port priority (between 0 and 255)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setportmcrouter bridge port int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set port multicast router")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sethashel bridge int"),(0,l.kt)("td",{parentName:"tr",align:null},"Set hash elasticity value")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"bridge")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/bridge.8.html"},"bridge.8")),(0,l.kt)("li",{parentName:"ul"},"fdb - Forwarding Database"),(0,l.kt)("li",{parentName:"ul"},"mdb - Multicast group database"),(0,l.kt)("li",{parentName:"ul"},"BPDU"),(0,l.kt)("li",{parentName:"ul"},"link",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"hwmode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vepa"),(0,l.kt)("li",{parentName:"ul"},"veb - \u786c\u4ef6 bridge")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bridge li   # link show\nbridge fdb  # fdb show\nbridge mdb  # mdb show\nbridge vlan # vlan show\n\nbridge monitor\n")),(0,l.kt)("h2",{id:"stp"},"STP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"master \u6bcf 2s \u53d1\u9001\u4e00\u6b21 \u201c\u5fc3\u8df3\u201d/hello \u5305 ",(0,l.kt)("inlineCode",{parentName:"li"},"0180c2000000")),(0,l.kt)("li",{parentName:"ul"},"slave \u63a5\u6536\u5230\u5305",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20s \u5185\u6ca1\u6536\u5230\uff0c\u5219\u8ba4\u4e3a master down"),(0,l.kt)("li",{parentName:"ul"},"30s \u5185\u5efa\u7acb\u597d\u65b0\u7684 stp - \u4f5c\u4e3a master"))),(0,l.kt)("li",{parentName:"ul"},"BPDU - Bridge Protocol Data Unit")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89d2\u8272")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Chinese"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RB"),(0,l.kt)("td",{parentName:"tr",align:null},"Root Bridge"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u6865"),(0,l.kt)("td",{parentName:"tr",align:null},"ID \u6700\u5c0f\u6865")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RP"),(0,l.kt)("td",{parentName:"tr",align:null},"Root Port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u4f73\u8def\u5f84\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DP"),(0,l.kt)("td",{parentName:"tr",align:null},"Designated Port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u4e2a\u7f51\u6bb5\u9009\u62e9\u5230\u6839\u6865\u6700\u8fd1\u7684\u7f51\u6865\u4f5c\u4e3a\u6307\u5b9a\u7f51\u6865, \u8be5\u7f51\u6865\u5230\u8fd9\u4e00\u7f51\u6bb5\u7684\u7aef\u53e3\u4e3a\u6307\u5b9a\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AP"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternated Port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5373\u963b\u585e\u7aef\u53e3, \u65e2\u4e0d\u662f\u6307\u5b9a\u7aef\u53e3, \u4e5f\u4e0d\u662f\u6839\u7aef\u53e3\u7684\u7aef\u53e3")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7aef\u53e3\u72b6\u6001")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Data"),(0,l.kt)("th",{parentName:"tr",align:null},"BPDU"),(0,l.kt)("th",{parentName:"tr",align:null},"Learn Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blocking"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"recv"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Listening"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Learning"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"start")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forwarding"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Blocking(20s) \u2013> Listening(15s) \u2013> Learning(15s) \u2013> Forwarding"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mstpd/mstpd"},"mstpd/mstpd")," - Multiple Spanning Tree Protocol Daemon"),(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spanning_Tree_Protocol"},"Spanning Tree Protocol")),(0,l.kt)("li",{parentName:"ul"},"wikipedia ",(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E6%A0%91%E5%8D%8F%E8%AE%AE"},"\u751f\u6210\u6811\u534f\u8bae")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/hzl6255/p/3259909.html"},"Linux STP \u4ecb\u7ecd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tldp.org/HOWTO/BRIDGE-STP-HOWTO/"},"Linux BRIDGE-STP-HOWTO")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.embeddedlinux.org.cn/linux_net/0596002556/understandlni-CHP-16-SECT-16.html"},"Spanning Tree Protocol")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/824621"},"Linux: bridges, VLANs and RSTP"))))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"bridge-vs-bonding-active-backup"},"bridge vs bonding active-backup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bonding - \u7528\u4e8e\u805a\u5408\u94fe\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u805a\u5408 - \u4f7f\u7528\u540c\u8d28\u7684\u94fe\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u94fe\u8def\u5e76\u884c\u5de5\u4f5c"))),(0,l.kt)("li",{parentName:"ul"},"active-backup - \u53ef\u80fd\u4f7f\u7528\u975e\u540c\u8d28\u94fe\u8def - wlan0+eth0 - eth0 \u4f5c\u4e3a primary",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u94fe\u8def\u72b6\u6001 - \u5207\u6362\u65f6\u95f4\u77ed"))))),(0,l.kt)("li",{parentName:"ul"},"bridge - \u7528\u4e8e\u5b66\u4e60\u548c\u8f6c\u53d1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"members \u53ef\u4ee5\u662f\u865a\u62df\u94fe\u8def\uff0c\u53ef\u4ee5\u662f\u7269\u7406\u94fe\u8def"),(0,l.kt)("li",{parentName:"ul"},"STP - \u5b66\u4e60\u9700\u8981\u65f6\u95f4 - \u9ed8\u8ba4\u524d\u540e\u52a0\u8d77\u6765 50s - \u53ef\u80fd\u66f4\u957f"),(0,l.kt)("li",{parentName:"ul"},"\u7406\u8bba\u4e0a\u6765\u8bf4\u4e5f\u80fd\u5b9e\u73b0 bonding active-backup \u7684\u6548\u679c")))),(0,l.kt)("h2",{id:"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361-mac-\u5730\u5740"},"\u6865\u63a5\u7f51\u5361\u4e0d\u4f7f\u7528\u5b9e\u9645\u7f51\u5361 Mac \u5730\u5740"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6865\u63a5\u7f51\u5361 MAC \u5730\u5740\u4f1a\u53d8\u5bfc\u81f4 dhcp \u83b7\u53d6\u7684\u5730\u5740\u4e0d\u7a33\u5b9a")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u9009\u62e9\u6700\u4f4e mac - \u6392\u5e8f\u6700\u524d\uff0c\u4e00\u822c\u865a\u62df\u7f51\u5361\u7684 mac \u4f1a\u6bd4\u5b9e\u9645\u7684\u66f4\u4f4e\uff0c\u5bfc\u81f4\u88ab\u4f18\u5148\u9009\u62e9\u3002"),(0,l.kt)("p",null,"brctl addif \u6dfb\u52a0 slave \u7684\u65f6\u5019\u4e5f\u4f1a\u53d8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 slave \u7684\u65f6\u5019\u8bb0\u5f55 mac \u518d\u8bbe\u7f6e\u56de\u53bb"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u865a\u62df\u7f51\u5361\u7684 mac \u8bbe\u7f6e\u9ad8\u4e00\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65b9\u6cd5 1\nmac=$(cat /etc/tinc/br0/address)\nip li set $IFACE master br0\nip li set br0 address $mac\n\n# \u65b9\u6cd5 2\nip link set $IFACE address fe:12:34:56:78:9a\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lists.linuxfoundation.org/pipermail/bridge/2006-January/003036.html"},"Bridge Interface MAC address assignment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hansode/linux-bridge-mac-addresses-and-dynamic-ports"},"hansode/linux-bridge-mac-addresses-and-dynamic-ports"))))),(0,l.kt)("h2",{id:"tinc-\u8282\u70b9\u907f\u514d-mac-\u51b2\u7a81"},"tinc \u8282\u70b9\u907f\u514d mac \u51b2\u7a81"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u9ad8 mac"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ip li set $INTERFACE address fe:fe:12:34:56:78\nip li set $INTERFACE master br0\nip li set $INTERFACE up\nip addr add 10.10.1.1/16 dev br0\n")),(0,l.kt)("h2",{id:"received-packet-on-bond0-with-own-address-as-source-address"},"received packet on bond0 with own address as source address"),(0,l.kt)("p",null,"\u5f71\u54cd\u4e0d\u5927\u7684 log \u4fe1\u606f"),(0,l.kt)("h2",{id:"bridge-filtering-via-arpipip6tables-is-no-longer-available-by-default"},"bridge: filtering via arp/ip/ip6tables is no longer available by default"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u662f info log\uff0c\u4ee5\u524d modprobe bridge \u4f1a\u63d0\u4f9b\u7684\u529f\u80fd\u73b0\u5728\u9700\u8981 modprobe br_netfilter")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bridge: filtering via arp/ip/ip6tables is no longer available by default. Update your scripts to load br_netfilter if you need this.\n")))}k.isMDXComponent=!0}}]);