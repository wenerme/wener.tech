"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34492],{49613:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return s}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=m(a),s=n,c=N["".concat(u,".").concat(s)]||N[s]||o[s]||r;return a?l.createElement(c,i(i({ref:t},k),{},{components:a})):l.createElement(c,i({ref:t},k))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},94566:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return s},default:function(){return P},frontMatter:function(){return N},metadata:function(){return c},toc:function(){return d}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&k(e,a,t[a]);if(p)for(var a of p(t))m.call(t,a)&&k(e,a,t[a]);return e};const N={title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",keywords:["VPN FAQ","VPN \u5e38\u89c1\u95ee\u9898"],tags:["FAQ"]},s="\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",c={unversionedId:"service/network/vpn-faq",id:"service/network/vpn-faq",title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",description:"- macOS \u76ee\u524d tuntap \u5b89\u88c5\u76f8\u5bf9\u9ebb\u70e6",source:"@site/../notes/service/network/vpn-faq.md",sourceDirName:"service/network",slug:"/service/network/vpn-faq",permalink:"/notes/service/network/vpn-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",keywords:["VPN FAQ","VPN \u5e38\u89c1\u95ee\u9898"],tags:["FAQ"]},sidebar:"docs",previous:{title:"VPN Awesome",permalink:"/notes/service/network/vpn-awesome"},next:{title:"WireGuard",permalink:"/notes/service/network/wireguard"}},v={},d=[{value:"Proxy vs VPN",id:"proxy-vs-vpn",level:2},{value:"Why Tinc",id:"why-tinc",level:2},{value:"Tinc vs ZeroTier vs Wireguard vs IPSec vs SoftEther",id:"tinc-vs-zerotier-vs-wireguard-vs-ipsec-vs-softether",level:2},{value:"Tinc vs ZeroTier",id:"tinc-vs-zerotier",level:2},{value:"Tinc vs Nebula",id:"tinc-vs-nebula",level:2},{value:"Tinc vs N2N",id:"tinc-vs-n2n",level:2},{value:"StrongSwan vs Openswan vs Libreswan vs Freeswan",id:"strongswan-vs-openswan-vs-libreswan-vs-freeswan",level:2},{value:"Site to Site/\u7ad9\u70b9\u5bf9\u7ad9\u70b9 VPN",id:"site-to-site\u7ad9\u70b9\u5bf9\u7ad9\u70b9-vpn",level:2},{value:"L2TP vs IPSec vs L2TP/IPSec",id:"l2tp-vs-ipsec-vs-l2tpipsec",level:2}],f={toc:d};function P(e){var t,a=e,{components:n}=a,k=((e,t)=>{var a={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&p)for(var l of p(e))t.indexOf(l)<0&&m.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=o(o({},f),k),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,l.kt)("h1",o({},{id:"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898"}),"\u79c1\u6709\u865a\u62df\u7f51\u7edc\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("admonition",o({},{type:"caution"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"macOS \u76ee\u524d tuntap \u5b89\u88c5\u76f8\u5bf9\u9ebb\u70e6"),(0,l.kt)("li",{parentName:"ul"},"macOS \u539f\u751f\u652f\u6301 utun - \u7b49\u540c\u4e8e tun \u8bbe\u5907"))),(0,l.kt)("h2",o({},{id:"proxy-vs-vpn"}),"Proxy vs VPN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Proxy - tunnel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u9053\u3001\u7aef\u53e3\u7ef4\u5ea6"))),(0,l.kt)("li",{parentName:"ul"},"VPN - overlay",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u7ef4\u5ea6 - \u6709 IP")))),(0,l.kt)("h2",o({},{id:"why-tinc"}),"Why Tinc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Why Tinc")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53bb\u4e2d\u5fc3\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u5168 Mesh \u7f51\u7edc"),(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301 L2 \u548c L3 \u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301 Relay"),(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301 VIP - \u591a\u4e2a\u8282\u70b9\u76f8\u540c IP"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u4f9d\u8d56\u5916\u90e8\u670d\u52a1 - self contained")),(0,l.kt)("admonition",o({},{type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u57fa\u7840\u8bbe\u65bd"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Why Not Tinc")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65e0\u4e2d\u5fc3\u5316\u8ba4\u8bc1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4ece\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u52a0\u5165 - \u4e00\u4e2a\u8282\u70b9\u88ab\u5165\u4fb5\u53ef\u5bfc\u81f4\u522b\u7684\u8282\u70b9\u52a0\u5165\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u8282\u70b9\u9700\u8981\u6574\u4e2a\u7f51\u7edc\u8c03\u6574"))),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u6b21\u53ea\u80fd\u7ec4\u6210\u4e00\u4e2a\u7f51\u7edc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u63d0\u4f9b\u7c7b\u4f3c SaaS \u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7f51\u7edc\u9700\u8981\u72ec\u7acb tinc \u8fdb\u7a0b"))),(0,l.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u5185\u7f6e IPAM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"L2 \u53ef\u4ee5\u4f7f\u7528 dhcpd"),(0,l.kt)("li",{parentName:"ul"},"L3 \u53ea\u80fd\u81ea\u5df1\u81ea\u5df1\u5206\u914d"))),(0,l.kt)("li",{parentName:"ol"},"\u5355\u7ebf\u7a0b")),(0,l.kt)("h2",o({},{id:"tinc-vs-zerotier-vs-wireguard-vs-ipsec-vs-softether"}),"Tinc vs ZeroTier vs Wireguard vs IPSec vs SoftEther"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5171\u540c\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"P2P \u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a0\u5bc6"))),(0,l.kt)("li",{parentName:"ul"},"Tinc \u5b8c\u5168\u4e2d\u5fc3\u5316\uff0c\u65e0\u63a7\u5236\u5668\uff0c\u7f51\u7edc\u8fde\u63a5\u6027\u4f1a\u66f4\u597d\uff0ctinc 1.1pre \u4f7f\u7528\u975e\u5e38\u7b80\u5355",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u7684 Android \u548c iOS \u5e94\u7528\uff0c\u4f46\u672a\u7ef4\u62a4\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 UDP"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Switch \u6a21\u5f0f - 2 \u5c42\u7f51\u7edc - MAC \u5bfb\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Router \u6a21\u5f0f - TCP/IP \u5bfb\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u7ebf\u7a0b - \u6027\u80fd\u6709\u4e00\u5b9a\u74f6\u9888 - \u4f8b\u5982 1Gb \u7f51\u5361\u53ef\u80fd\u53ea\u80fd\u8dd1\u6ee1 300-600 Mb"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4f7f\u7528\u914d\u7f6e\u65b9\u4fbf - 1.1 \u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355 LOC ~ 3k"))),(0,l.kt)("li",{parentName:"ul"},"ZeroTier \u6709\u4e2d\u5fc3\u63a7\u5236\u5668\uff0c\u80fd\u591f\u8fdb\u884c\u9a8c\u8bc1\u6388\u6743\uff0c\u4f7f\u7528\u7b80\u5355\uff0c\u6709\u7ba1\u7406\u63a5\u53e3\u548c\u9875\u9762",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u95ed\u6e90 Android \u548c iOS \u5e94\u7528 - \u53ef\u5728\u5e94\u7528\u5546\u5e97\u5b89\u88c5"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e SelfHost \u4e2d\u5fc3\u8282\u70b9\u4e0d\u53cb\u597d - \u7b80\u5355\u914d\u7f6e\u662f\u57fa\u4e8e\u4f7f\u7528 ZeroTier \u7684\u670d\u52a1\u4e4b\u4e0a"),(0,l.kt)("li",{parentName:"ul"},"QoS \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e TCP"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6587\u672c\u914d\u7f6e\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8fde\u63a5\u6027 < TINC\u3001\u914d\u7f6e\u6027 > TINC"))),(0,l.kt)("li",{parentName:"ul"},"Wireguard",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6ca1\u6709\u6bd4\u8f83\u597d\u7684 mesh \u65b9\u6848 - \u9700\u8981\u6240\u6709\u8282\u70b9\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e0d\u80fd\u81ea\u52a8\u53d1\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u8282\u70b9\u4e4b\u95f4\u76f4\u8fde - \u4e0d\u80fd\u901a\u8fc7\u4e2d\u7ee7\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 Layer 3 - \u4e0d\u80fd DHCP \u6216\u6865\u63a5 - \u4f7f\u7528 IP \u5bfb\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 UDP \u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 OpenVPN \u548c IPsec"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355 LOC ~ 4k"),(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u53ef\u7528\u7684 Android \u548c iOS \u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u652f\u6301\u5e7f\u6cdb"),(0,l.kt)("li",{parentName:"ul"},"Linux \u5185\u6838\u652f\u6301"))),(0,l.kt)("li",{parentName:"ul"},"IPSec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u6210\u719f\u7684\u6807\u51c6"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u76f8\u5bf9\u6ca1\u90a3\u4e48\u53cb\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u521d\u6b21\u914d\u7f6e\u76f8\u5bf9\u590d\u6742"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd - \u5982\u679c\u53ea\u5728\u670d\u52a1\u7aef\u4f7f\u7528\u9700\u8981\u5f88\u9ad8\u7684\u6027\u80fd\u5219\u4f18\u5148\u9009\u62e9 IPSec - 1Gb \u7f51\u7edc\u57fa\u672c\u80fd\u8fbe\u5230 900+Mb"),(0,l.kt)("li",{parentName:"ul"},"Android \u548c iOS \u539f\u751f\u652f\u6301"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/SoftEther_VPN"}),"SoftEther"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u8def\u8d1f\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6027\u80fd\u5bf9\u6bd4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:null}),"iperf3\\10s"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Transfer"),(0,l.kt)("th",o({parentName:"tr"},{align:null}),"Bitrate"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"Native"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"1.10 GBytes"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"943 Mbits/sec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"TINC"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"385 MBytes"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"323 Mbits/sec")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:null}),"WireGuard"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"1.05 GBytes"),(0,l.kt)("td",o({parentName:"tr"},{align:null}),"898 Mbits/sec")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"TINC \u6700\u5f31 - \u56e0\u4e3a\u670d\u52a1\u5668\u5355\u6838\u8f83\u5f31 - \u5355\u6838 CPU 100%\nIntel(R) Xeon(R) CPU E5-2651 v2 @ 1.80GHz")),(0,l.kt)("h2",o({},{id:"tinc-vs-zerotier"}),"Tinc vs ZeroTier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u90fd\u662f Mesh \u7f51\u7edc"))),(0,l.kt)("li",{parentName:"ul"},"Tinc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u4e2d\u5fc3\u8282\u70b9\uff0c\u4f46\u6709\u6838\u5fc3 meta \u8282\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fdd\u8bc1\u94fe\u63a5\uff0c\u4e0d\u8d1f\u8d23 IP \u5206\u914d - \u53ef\u5229\u7528 DHCP \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"host \u652f\u6301\u914d\u7f6e subnet - \u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u63a7\u5236\u6743\u9650\uff0c\u53ef\u901a\u8fc7 meta \u63a7\u5236\u8282\u70b9\u5bc6\u94a5\u6765\u63a7\u5236\u63a5\u5165"))),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 meta \u8282\u70b9\u80fd\u88ab\u5176\u4ed6\u8282\u70b9\u76f4\u63a5\u8bbf\u95ee",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7b49\u540c\u4e8e\u9700\u8981\u516c\u7f51 IP"))),(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u6027\u597d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u662f\u76f4\u63a5\u914d\u7f6e meta \u5730\u5740\uff0c\u6240\u4ee5\u5f88\u5bb9\u6613\u5224\u65ad"))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898\u6613\u4e8e\u6392\u67e5\uff0c\u900f\u660e IP"),(0,l.kt)("li",{parentName:"ul"},"\u7a33\u5b9a\u6027\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1.17 \u51fa\u73b0 crash \u95ee\u9898 - \u901a\u8fc7 openrc \u8bbe\u7f6e\u81ea\u52a8\u91cd\u542f\u89e3\u51b3"))))),(0,l.kt)("li",{parentName:"ul"},"ZeroTier",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 ZT \u63a7\u5236\u5668 - \u53ef\u81ea\u884c\u7ef4\u62a4\uff0c\u4f46\u53d1\u73b0\u4f9d\u8d56 ZT \u7f51\u7edc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IP \u5206\u914d"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u4e0b\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u6027\u5f31",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 ZT \u542f\u52a8\u6162 - \u7279\u522b\u5728\u56fd\u5185"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u65e0\u6cd5\u8bf7\u6c42\u5230\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u63d0\u4f9b\u4e2d\u8f6c\u53d1\u73b0\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"Nat \u7a7f\u900f\u6027\u5f31\u4e8e Tinc"))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898\u96be\u6392\u67e5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u6709\u552f\u4e00 ID"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7f51\u7edc\u6709\u552f\u4e00 ID"),(0,l.kt)("li",{parentName:"ul"},"\u4fe1\u606f\u4e0d\u900f\u660e"))),(0,l.kt)("li",{parentName:"ul"},"\u7a33\u5b9a\u6027\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5076\u73b0 daemon \u5f02\u5e38 cpu 100% - \u4e00\u6bb5\u65f6\u95f4\u540e\u6062\u590d\u6216\u91cd\u542f ZeroTier One"),(0,l.kt)("li",{parentName:"ul"},"\u51fa\u73b0\u8282\u70b9\u4e00\u76f4\u5904\u4e8e REQUESTING_CONFIGURATION \u72b6\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u76ee\u524d\u65e0\u89e3"))))))))),(0,l.kt)("h2",o({},{id:"tinc-vs-nebula"}),"Tinc vs Nebula"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u70b9\u5bf9\u70b9\u7f51\u7edc"))),(0,l.kt)("li",{parentName:"ul"},"Tinc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPL 2.0"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u7528\u4e8e\u670d\u52a1\u7aef\u7ec4\u7f51 - \u6ca1\u6709 Android \u548c iOS"),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u57fa\u4e8e\u5bc6\u94a5\u8ba4\u8bc1 - \u5bf9\u7b49"),(0,l.kt)("li",{parentName:"ul"},"L2\u3001L3 \u7ec4\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 meta \u8282\u70b9 - \u5bf9\u5916\u66b4\u9732\u8282\u70b9\u7ec4\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8282\u70b9 relay"))),(0,l.kt)("li",{parentName:"ul"},"Nebula - \u53d7 tinc \u542f\u53d1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u7528\u4e8e\u670d\u52a1\u8bbf\u95ee - \u6709 Android \u548c iOS"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 lighthouse PKI \u8ba4\u8bc1 \u7ec4\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u975e lighthouse \u8282\u70b9\u53ea\u6709 key \u548c cert \u6ca1\u6709 ca"),(0,l.kt)("li",{parentName:"ul"},"lighthouse \u7c7b\u4f3c tinc \u7684 meta \u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"L3 \u7ec4\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 relay"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u5b89\u5168\u6027\u7ba1\u63a7 - \u9ed8\u8ba4\u4e0d\u5141\u8bb8\u8bbf\u95ee\u975e\u8282\u70b9\u7f51 - unsafe_routes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tinc \u53ef\u914d\u7f6e\u4efb\u610f, L2 \u53ef\u8def\u7531\u4efb\u610f"))),(0,l.kt)("li",{parentName:"ul"},"lighthouse \u4e2d\u5fc3\u5316\u7ba1\u63a7")))),(0,l.kt)("h2",o({},{id:"tinc-vs-n2n"}),"Tinc vs N2N"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f8\u540c\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 L2 Mesh"),(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 tuntap"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u7ebf\u7a0b"))),(0,l.kt)("li",{parentName:"ul"},"n2n - since 2008",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u5206\u4e3a supernode \u548c edge"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316 supernode signal - \u652f\u6301\u4e2d\u7ee7"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a supernode \u652f\u6301\u591a\u4e2a\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u65f6\u5019\u9700\u8981\u81ea\u5df1\u7f16\u8bd1 - \u5b98\u65b9\u63d0\u4f9b\u90e8\u5206\u4e0b\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u56fa\u5b9a MTU - \u652f\u6301\u5f00\u542f PMTU"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 L2 \u7f51\u7edc - TAP"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5efa\u6d41\u91cf\u63a7\u5236 - ACL"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u52a8\u5206\u914d IP"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u53ef\u4ee5\u63a7\u5236\u5305\u8f6c\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6bd4 tinc \u66f4\u52a0\u53cb\u597d\u7b80\u5355 - \u4f53\u9a8c\u7c7b\u4f3c zerotier"))),(0,l.kt)("li",{parentName:"ul"},"tinc - since 1998",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u53bb\u4e2d\u5fc3\u5316 - \u8282\u70b9\u5173\u7cfb\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u90fd\u8fde\u63a5\u7684\u8282\u70b9\u7684\u79f0\u4e3a metanode - \u548c\u666e\u901a\u8282\u70b9\u76f8\u540c - \u652f\u6301\u4e2d\u7ee7"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7f51\u7edc\u9700\u8981\u4e00\u4e2a metanode"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u5e73\u53f0\u90fd\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u81ea\u9002\u5e94 MTU - MSS clamping- PMTU"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 L2 \u548c L3 \u7f51\u7edc - TAP/TUN")))),(0,l.kt)("admonition",o({},{type:"caution"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"tinc \u548c n2n \u540c\u65f6\u8fd0\u884c\u53ef\u80fd\u5bfc\u81f4 n2n \u5b9e\u9645\u8d70\u7684 tinc \u7f51\u7edc"))),(0,l.kt)("h2",o({},{id:"strongswan-vs-openswan-vs-libreswan-vs-freeswan"}),"StrongSwan vs Openswan vs Libreswan vs Freeswan"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FreeS/WAN"),(0,l.kt)("li",{parentName:"ul"},"Libreswan \u5373 Openswan",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2003 fork freeswan \u547d\u540d\u4e3a openswan"),(0,l.kt)("li",{parentName:"ul"},"2011 \u88ab\u5f3a\u5236\u8981\u6c42\u66f4\u540d - \u547d\u540d\u4e3a libreswan"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a",(0,l.kt)("a",o({parentName:"li"},{href:"https://libreswan.org/wiki/OCF_Hardware_crypto_acceleration"}),"\u786c\u4ef6\u52a0\u5bc6")," - \u53ef\u80fd\u9700\u8981\u5185\u6838\u8865\u4e01"))),(0,l.kt)("li",{parentName:"ul"},"StrongSwan",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f8\u8f83 Libreswan \u505a\u4e86\u66f4\u591a\u7684\u63d0\u5347\u548c\u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 EAP - \u66f4\u6613\u4e8e\u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,l.kt)("a",o({parentName:"li"},{href:"https://wiki.strongswan.org/projects/strongswan/wiki/HighAvailability"}),"\u96c6\u7fa4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301")," ",(0,l.kt)("a",o({parentName:"li"},{href:"https://wiki.strongswan.org/issues/2160"}),"OE"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\u53c2\u8003")),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",o({parentName:"li"},{href:"https://libreswan.org/wiki/History"}),"Libreswan History")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",o({parentName:"li"},{href:"https://serverfault.com/a/655752/190601"}),"strongswan vs openswan")))),(0,l.kt)("h2",o({},{id:"site-to-site\u7ad9\u70b9\u5bf9\u7ad9\u70b9-vpn"}),"Site to Site/\u7ad9\u70b9\u5bf9\u7ad9\u70b9 VPN"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u4e24\u4e2a\u5b50\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5730\u57df\u4e0a\u5206\u79bb\u7684\u4e24\u4e2a\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4eba\u5458 -VPN-> Site to Site VPN --\x3e \u963f\u91cc\u4e91\u5185\u7f51")))),(0,l.kt)("h2",o({},{id:"l2tp-vs-ipsec-vs-l2tpipsec"}),"L2TP vs IPSec vs L2TP/IPSec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"L2TP - Layer 2 Tunneling Protocol - 2 \u5c42\u901a\u9053\u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u5728 2 \u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8ba4\u8bc1\u548c\u52a0\u5bc6"))),(0,l.kt)("li",{parentName:"ul"},"IPSec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u5728 3 \u5c42 - IP \u5c42"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8ba4\u8bc1\u548c\u52a0\u5bc6"))),(0,l.kt)("li",{parentName:"ul"},"L2TP over IPSec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IPSec \u63d0\u4f9b\u8ba4\u8bc1\u548c\u52a0\u5bc6\u901a\u9053"),(0,l.kt)("li",{parentName:"ul"},"L2TP \u63d0\u4f9b\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"IP \u5305\u4e4b\u4e0a\u6dfb\u52a0 L2TP \u5305\u5934")))))}P.isMDXComponent=!0}}]);