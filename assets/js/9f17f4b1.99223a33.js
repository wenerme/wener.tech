"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69533],{49613:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return s}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=m(a),s=l,c=N["".concat(u,".").concat(s)]||N[s]||o[s]||r;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},78712:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return N},metadata:function(){return c},toc:function(){return g}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&k(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&k(t,a,e[a]);return t};const N={title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},s="\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",c={unversionedId:"os/linux/network/network-faq",id:"os/linux/network/network-faq",title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",description:"Tuning",source:"@site/../notes/os/linux/network/network-faq.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/faq",permalink:"/notes/os/linux/network/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/network-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",tags:["FAQ"]},sidebar:"docs",previous:{title:"MTU",permalink:"/notes/os/linux/network/mtu"},next:{title:"Network \u8bcd\u6c47\u8868",permalink:"/notes/os/linux/network/glossary"}},d={},g=[{value:"Tuning",id:"tuning",level:2},{value:"VTI vs XFRM",id:"vti-vs-xfrm",level:2},{value:"VPN vs Mesh Network",id:"vpn-vs-mesh-network",level:2},{value:"bridge vs macvlan",id:"bridge-vs-macvlan",level:2},{value:"DROP vs REJECT",id:"drop-vs-reject",level:2},{value:"mangle vs nat",id:"mangle-vs-nat",level:2},{value:"MASQUERADE vs SNAT",id:"masquerade-vs-snat",level:2},{value:"Nginx/HAProxy \u7aef\u53e3\u8f6c\u53d1 vs IPTables \u7aef\u53e3\u8f6c\u53d1",id:"nginxhaproxy-\u7aef\u53e3\u8f6c\u53d1-vs-iptables-\u7aef\u53e3\u8f6c\u53d1",level:2},{value:"ifconfig eth0:0 \u8bed\u6cd5",id:"ifconfig-eth00-\u8bed\u6cd5",level:2},{value:"ping: sendto: Invalid argument",id:"ping-sendto-invalid-argument",level:2},{value:"ping Destination Host Unreachable",id:"ping-destination-host-unreachable",level:2},{value:"IPVS vs IPTables",id:"ipvs-vs-iptables",level:2}],v={toc:g};function f(t){var e,a=t,{components:l}=a,k=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=o(o({},v),k),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",o({},{id:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898"}),"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h2",o({},{id:"tuning"}),"Tuning"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"sysctl net.ipv4.tcp_{,r,w}mem net.core.rmem_{default,max} net.core.wmem_{default,max} net.core.optmem_max\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"item"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"value/alpine"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"for"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"tune"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.ipv4.tcp_mem"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"189234 252315 378468"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.ipv4.tcp_rmem"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4096 131072 6291456"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4k 128k 6m"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"10240 88064 12582912"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"10k 86k 12m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.ipv4.tcp_wmem"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4096 16384 4194304"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4k 16k 4m"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"10240 88064 12582912"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"10k 86k 12m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.core.rmem_default"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"212992"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"218 k"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.core.rmem_max"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"212992"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"218 k"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"12582912"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"12m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.core.wmem_default"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"212992"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"218 k"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.core.wmem_max"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"212992"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"218 k"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"12582912"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"12m")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"net.core.optmem_max"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"20480"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"net.ipv4.tcp_wmem= 10240 88064 12582912\nnet.ipv4.tcp_rmem= 10240 88064 12582912\nnet.core.rmem_max= 12582912\n\nnet.ipv4.tcp_window_scaling = 1\nnet.ipv4.tcp_timestamps = 1\nnet.ipv4.tcp_sack = 1\nnet.ipv4.tcp_no_metrics_save = 1\nnet.core.netdev_max_backlog = 5000\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc1323"}),"rfc1323"),",",(0,n.kt)("a",o({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc7323"}),"rfc7323"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tcp_window_scaling"),(0,n.kt)("li",{parentName:"ul"},"tcp_timestamps - 2: Like 1, but without random offsets."))),(0,n.kt)("li",{parentName:"ul"},"RFC1122"),(0,n.kt)("li",{parentName:"ul"},"RFC1323"),(0,n.kt)("li",{parentName:"ul"},"RFC1337"),(0,n.kt)("li",{parentName:"ul"},"RFC1620"),(0,n.kt)("li",{parentName:"ul"},"RFC1700"),(0,n.kt)("li",{parentName:"ul"},"RFC1812"),(0,n.kt)("li",{parentName:"ul"},"RFC2236"),(0,n.kt)("li",{parentName:"ul"},"RFC2461"),(0,n.kt)("li",{parentName:"ul"},"RFC2861"),(0,n.kt)("li",{parentName:"ul"},"RFC3041"),(0,n.kt)("li",{parentName:"ul"},"RFC3069"),(0,n.kt)("li",{parentName:"ul"},"RFC3168"),(0,n.kt)("li",{parentName:"ul"},"RFC3376"),(0,n.kt)("li",{parentName:"ul"},"RFC3493"),(0,n.kt)("li",{parentName:"ul"},"RFC3704"),(0,n.kt)("li",{parentName:"ul"},"RFC3758"),(0,n.kt)("li",{parentName:"ul"},"RFC3810"),(0,n.kt)("li",{parentName:"ul"},"RFC4191"),(0,n.kt)("li",{parentName:"ul"},"RFC4429"),(0,n.kt)("li",{parentName:"ul"},"RFC4821"),(0,n.kt)("li",{parentName:"ul"},"RFC4861"),(0,n.kt)("li",{parentName:"ul"},"RFC5061"),(0,n.kt)("li",{parentName:"ul"},"RFC5682"),(0,n.kt)("li",{parentName:"ul"},"RFC5961"),(0,n.kt)("li",{parentName:"ul"},"RFC6437"),(0,n.kt)("li",{parentName:"ul"},"RFC6438"),(0,n.kt)("li",{parentName:"ul"},"RFC6636"),(0,n.kt)("li",{parentName:"ul"},"RFC6675"),(0,n.kt)("li",{parentName:"ul"},"RFC6691"),(0,n.kt)("li",{parentName:"ul"},"RFC6724"),(0,n.kt)("li",{parentName:"ul"},"RFC6980"),(0,n.kt)("li",{parentName:"ul"},"RFC7217"),(0,n.kt)("li",{parentName:"ul"},"RFC7413"),(0,n.kt)("li",{parentName:"ul"},"RFC7527"),(0,n.kt)("li",{parentName:"ul"},"RFC7690"),(0,n.kt)("li",{parentName:"ul"},"RFC7829"),(0,n.kt)("li",{parentName:"ul"},"\u4e09\u503c\u5206\u522b\u4e3a \u6700\u5c0f\uff0c\u521d\u59cb\uff0c\u6700\u5927 - min,initial,max"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"/notes/os/linux/network/bbr"}),"bbr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.cyberciti.biz/faq/linux-tcp-tuning/"}),"https://www.cyberciti.biz/faq/linux-tcp-tuning/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size"}),"https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt"}),"https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt"))),(0,n.kt)("h2",o({},{id:"vti-vs-xfrm"}),"VTI vs XFRM"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"XFRM \u6bd4 VTI \u66f4\u597d")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VTI - Linux 3.6+",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"L3 \u901a\u9053\uff0c\u6307\u5b9a\u7ec8\u7aef\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u5730\u5740\u65cf"),(0,n.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u901a\u9053\u6a21\u5f0f"))),(0,n.kt)("li",{parentName:"ul"},"XFRM - Linux 4.19+",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u914d\u7f6e\u901a\u9053\u5730\u5740",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d VTI SAs:interface \u7684 1:1 \u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"SAs peers \u5171\u4eab interface"))),(0,n.kt)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301 IPv4 IPv6"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5305\u62ec\u901a\u9053\u7684\u5176\u4ed6\u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"XFRM interface ID \u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d GRP key \u548c XFRM mark \u914d\u7f6e")))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://wiki.strongswan.org/projects/strongswan/wiki/RouteBasedVPN"}),"RouteBasedVPN"))))),(0,n.kt)("h2",o({},{id:"vpn-vs-mesh-network"}),"VPN vs Mesh Network"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VPN",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6307\u4f20\u7edf VPN - \u4f8b\u5982 OpenVPN, IPSec"),(0,n.kt)("li",{parentName:"ul"},"\u6240\u6709 Endpoint \u8fde\u4e0a\u4e00\u4e2a Server, \u7f51\u7edc\u901a\u8fc7\u6307\u5b9a\u7684\u8282\u70b9\u51fa"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u4e3a Client, Server \u6a21\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u9762\u6d88\u8d39\u7aef - Consumer"))),(0,n.kt)("li",{parentName:"ul"},"Mesh Network",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u7ec4\u5efa\u79c1\u6709\u7f51\u7edc\u7684\u6280\u672f - VPN"),(0,n.kt)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9\u76f4\u8fde"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u4e3a\u5e73\u7b49\u8282\u70b9\u5173\u7cfb - Server to Server"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u7528\u4e8e\u57fa\u7840\u7f51\u7edc\u5efa\u8bbe")))),(0,n.kt)("h2",o({},{id:"bridge-vs-macvlan"}),"bridge vs macvlan"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"bridge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u5b66\u4e60 Mac \u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u5185\u90e8\u8f6c\u53d1\u5339\u914d Mac \u7684\u5305"))),(0,n.kt)("li",{parentName:"ul"},"macvlan",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7406\u89e3\u4e3a\u7b80\u5355\u7684 bridge"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5b66\u4e60 Mac \u5730\u5740\uff0c\u4e0d\u4f1a\u5185\u90e8\u8f6c\u53d1 - \u56e0\u6b64\u7a0d\u5fae\u4f1a\u5feb\u4e00\u70b9\uff0c\u5185\u5b58\u5c11\u4e00\u70b9"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://hicu.be/bridge-vs-macvlan"}),"Bridge vs Macvlan"))),(0,n.kt)("h2",o({},{id:"drop-vs-reject"}),"DROP vs REJECT"),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u4f7f\u7528 REJECT")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DROP - \u4e0d\u5904\u7406\u76f4\u63a5\u4e22\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TCP \u4f1a\u8d85\u65f6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TCP \u4f1a\u53d1\u8d77\u591a\u6b21\uff0c\u56e0\u4e3a TCP \u672c\u8eab\u534f\u8bae\u53ef\u9760\u4f1a\u91cd\u590d\u53d1\u5305"))),(0,n.kt)("li",{parentName:"ul"},"UDP \u8ba4\u4e3a\u670d\u52a1\u7aef\u5df2\u7ecf\u63a5\u6536"),(0,n.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u6076\u610f\u653b\u51fb\u4f1a\u8017\u8d39\u66f4\u591a\u5ba2\u6237\u7aef\u8d44\u6e90",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f46\u4e13\u4e1a\u7684\u5de5\u5177\u4e00\u822c\u4e0d\u53d7\u5f71\u54cd"))))),(0,n.kt)("li",{parentName:"ul"},"REJECT \u8fd4\u56de\u5931\u8d25 - \u5ba2\u6237\u7aef\u63a5\u6536\u5230\u65e0\u6cd5\u5230\u8fbe",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ICMP \u8fd4\u56de"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b\u539f\u56e0"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6076\u610f\u653b\u51fb\u53ef\u55c5\u63a2\u5219\u4f1a\u7acb\u5373\u8fd4\u56de\u589e\u52a0\u68c0\u6d4b\u901f\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u4f53\u9a8c\u4f1a\u66f4\u597d")))),(0,n.kt)("h2",o({},{id:"mangle-vs-nat"}),"mangle vs nat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f\u64cd\u4f5c\u3001\u4fee\u6539\u5305"),(0,n.kt)("li",{parentName:"ul"},"mangle \u5148\u4e8e nat"),(0,n.kt)("li",{parentName:"ul"},"mangle",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"TTL"),(0,n.kt)("li",{parentName:"ul"},"Mark"),(0,n.kt)("li",{parentName:"ul"},"POSTROUTING \u5728\u8def\u7531\u51b3\u7b56\u4e4b\u524d\uff0c\u56e0\u6b64 mark \u6807\u8bb0\u8fdb\u5165\u4e0d\u540c\u7684\u8def\u7531\u8868\u6bd4\u8f83\u91cd\u8981"))),(0,n.kt)("li",{parentName:"ul"},"nat",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5730\u5740\u8f6c\u6362")))),(0,n.kt)("h2",o({},{id:"masquerade-vs-snat"}),"MASQUERADE vs SNAT"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e24\u8005\u90fd\u505a \u6765\u6e90\u5730\u5740\u8f6c\u6362 - Source NAT")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SNAT",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56fa\u5b9a\u76ee\u6807 IP - ",(0,n.kt)("inlineCode",{parentName:"li"},"--to-source")))),(0,n.kt)("li",{parentName:"ul"},"MASQUERADE",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u52a8\u6001\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"\u6bd4 SNAT \u6162 - \u6bcf\u4e2a\u5305\u90fd\u9700\u8981\u68c0\u6d4b\u5e94\u8be5\u4f7f\u7528\u7684\u5730\u5740")))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\niptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 192.168.8.2\n")),(0,n.kt)("h2",o({},{id:"nginxhaproxy-\u7aef\u53e3\u8f6c\u53d1-vs-iptables-\u7aef\u53e3\u8f6c\u53d1"}),"Nginx/HAProxy \u7aef\u53e3\u8f6c\u53d1 vs IPTables \u7aef\u53e3\u8f6c\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IPTables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u6700\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4e2d\u65ad"))),(0,n.kt)("li",{parentName:"ul"},"Nginx/HAProxy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5c42\u529f\u80fd\u66f4\u5f3a")))),(0,n.kt)("h2",o({},{id:"ifconfig-eth00-\u8bed\u6cd5"}),"ifconfig eth0:0 \u8bed\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f ifconfig \u652f\u6301\u591a ip \u7684\u5199\u6cd5\uff0c\u7b49\u540c\u4e8e iproute2 \u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"ip addr add")),(0,n.kt)("li",{parentName:"ul"},"\u540e\u9762\u7684\u540d\u5b57\u662f\u5730\u5740\u7684\u6807\u7b7e, linux 2.0 \u7f51\u7edc\u522b\u540d, \u4ee5\u8bbe\u5907\u540d\u5b57+",(0,n.kt)("inlineCode",{parentName:"li"},":"),"\u4e3a\u5f00\u5934, \u6700\u957f 15"),(0,n.kt)("li",{parentName:"ul"},"ip addr add \u6ca1\u6709\u6807\u7b7e ifconfig \u5219\u4e0d\u4f1a\u663e\u793a")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"ifconfig eth0:0 192.168.1.2 netmask 255.255.255.0\n# \u5bf9\u7b49\u8bed\u6cd5\nip addr add 192.168.1.2/24 dev eth0 label eth0:0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://manpages.ubuntu.com/manpages/hirsute/en/man8/ip-address.8.html"}),"ip-address.8"))))),(0,n.kt)("h2",o({},{id:"ping-sendto-invalid-argument"}),"ping: sendto: Invalid argument"),(0,n.kt)("h2",o({},{id:"ping-destination-host-unreachable"}),"ping Destination Host Unreachable"),(0,n.kt)("h2",o({},{id:"ipvs-vs-iptables"}),"IPVS vs IPTables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IPVS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 ping \u865a\u62df IP"),(0,n.kt)("li",{parentName:"ul"},"\u94fe\u63a5 O(1) \u5904\u7406\u590d\u6742\u5ea6 - \u4e0d\u53d7 \u8282\u70b9/\u670d\u52a1/Pod \u6570\u91cf\u5f71\u54cd"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u7684\u8c03\u5ea6\u7b97\u6cd5"),(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u6d41\u7a0b\u4e0d\u540c\u4e8e iptables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f88\u96be\u914d\u5408\u5176\u4ed6 iptabels \u89c4\u5219"))))),(0,n.kt)("li",{parentName:"ul"},"IPTables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9488\u5bf9 \u9632\u706b\u5899 \u8bbe\u8ba1"),(0,n.kt)("li",{parentName:"ul"},"LB \u901a\u8fc7 NAT pre-routing \u5b9e\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u751f\u6001\u66f4\u597d"),(0,n.kt)("li",{parentName:"ul"},"O(n) \u5904\u7406\u590d\u6742\u5ea6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728 1000+ \u670d\u52a1\u65f6\u53ef\u80fd\u4f1a\u6709\u4e00\u70b9\u5f71\u54cd"),(0,n.kt)("li",{parentName:"ul"},"keepalive \u53ef\u51cf\u5c11\u5f71\u54cd - \u56e0\u4e3a conntrack\uff0c\u4e0d\u518d\u8d70\u89c4\u5219\u5339\u914d")))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.tigera.io/blog/comparing-kube-proxy-modes-iptables-or-ipvs/"}),"https://www.tigera.io/blog/comparing-kube-proxy-modes-iptables-or-ipvs/"))))}f.isMDXComponent=!0}}]);