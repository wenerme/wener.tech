"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57233],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return c}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=m(n),c=l,N=k["".concat(u,".").concat(c)]||k[c]||d[c]||r;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},91845:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return o},default:function(){return k}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),i=["components"],p={id:"nftables-rule",title:"nftables \u89c4\u5219"},u="\u8868\u8fbe\u5f0f",m={unversionedId:"os/linux/network/nftables-rule",id:"os/linux/network/nftables-rule",isDocsHomePage:!1,title:"nftables \u89c4\u5219",description:"- accept\u3001drop\u3001queue\u3001continue\u3001return\u3001jump chain\u3001goto chain",source:"@site/notes/os/linux/network/nftables-rule.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/nftables-rule",permalink:"/notes/os/linux/network/nftables-rule",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/nftables-rule.md",version:"current",frontMatter:{id:"nftables-rule",title:"nftables \u89c4\u5219"},sidebar:"docs",previous:{title:"NFTables Cookbook",permalink:"/notes/os/linux/network/nftables-cookbook"},next:{title:"NFTables",permalink:"/notes/os/linux/network/nftables"}},o=[{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",children:[]},{value:"\u5339\u914d",id:"\u5339\u914d",children:[]},{value:"nft",id:"nft",children:[]},{value:"nft cli",id:"nft-cli",children:[]},{value:"\u9ed8\u8ba4\u89c4\u5219",id:"\u9ed8\u8ba4\u89c4\u5219",children:[]},{value:"masquerade",id:"masquerade",children:[]},{value:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",children:[]},{value:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",children:[]},{value:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22",id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22",children:[]}],d={toc:o};function k(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8868\u8fbe\u5f0f"},"\u8868\u8fbe\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"accept\u3001drop\u3001queue\u3001continue\u3001return\u3001jump chain\u3001goto chain"),(0,r.kt)("li",{parentName:"ul"},"masquerade - \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"filter\u3001route\u3001nat")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"family"),(0,r.kt)("th",{parentName:"tr",align:null},"-"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ip"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 - \u9ed8\u8ba4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ip6"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inet"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4/IPv6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arp"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 ARP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bridge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ecf\u8fc7\u6865\u63a5\u8bbe\u5907\u7684\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"netdev"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5165\u53e3\u8bbe\u5907")))),(0,r.kt)("p",null,"[\u5730\u5740\u7c7b\u578b]"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"hook"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prerouting"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8fdb\u5165\u7cfb\u7edf\u7684\u5305\uff0c\u5728\u8def\u7531\u4e4b\u524d\u5904\u7406\uff0c\u53ef\u7528\u4e8e\u8fc7\u6ee4\u548c\u4fee\u6539\u5c5e\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165 \u672c\u5730 \u7cfb\u7edf\u7684\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forward"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u5176\u4ed6 host \u7684\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u5730 \u53d1\u51fa\u7684\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"postrouting"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u79bb\u5f00\u7cfb\u7edf\u7684\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8fdb\u5165\u7cfb\u7edf\u7684\u5305\uff0c L3 \u4e4b\u524d\uff0c\u65e9\u4e8e prerouting\uff0c\u53ea\u80fd\u7528\u4e8e inet")))),(0,r.kt)("p",null,"[Hook \u7c7b\u578b]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5730\u5740 \u652f\u6301\u7684 hook",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ip,ip6,inet,bridge - prerouting,input,forward,output,postrouting"),(0,r.kt)("li",{parentName:"ul"},"arp - input,output"),(0,r.kt)("li",{parentName:"ul"},"netdav - ingress")))),(0,r.kt)("h2",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PRI"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"def"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-400"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_CONNTRACK_DEFRAG"),(0,r.kt)("td",{parentName:"tr",align:null},"priority of defragmentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-300"),(0,r.kt)("td",{parentName:"tr",align:null},"raw"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_RAW"),(0,r.kt)("td",{parentName:"tr",align:null},"traditional priority of the raw table placed before connection tracking operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-225"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_SELINUX_FIRST"),(0,r.kt)("td",{parentName:"tr",align:null},"SELinux operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-200"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_CONNTRACK"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection tracking operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-150"),(0,r.kt)("td",{parentName:"tr",align:null},"mangle"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_MANGLE"),(0,r.kt)("td",{parentName:"tr",align:null},"mangle operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-100"),(0,r.kt)("td",{parentName:"tr",align:null},"dstnat"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_NAT_DST"),(0,r.kt)("td",{parentName:"tr",align:null},"DNAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_FILTER"),(0,r.kt)("td",{parentName:"tr",align:null},"filtering operation, the filter table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"security"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_SECURITY"),(0,r.kt)("td",{parentName:"tr",align:null},"Place of security table where secmark can be set for example")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"srcnat"),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_NAT_SRC"),(0,r.kt)("td",{parentName:"tr",align:null},"SNAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"225"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_SELINUX_LAST"),(0,r.kt)("td",{parentName:"tr",align:null},"SELinux at packet exit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NF_IP_PRI_CONNTRACK_HELPER"),(0,r.kt)("td",{parentName:"tr",align:null},"connection tracking at exit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"bridge \u4f18\u5148\u7ea7")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value \uff5c Hooks"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dstnat"),(0,r.kt)("td",{parentName:"tr",align:null},"-300"),(0,r.kt)("td",{parentName:"tr",align:null},"prerouting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"-200"),(0,r.kt)("td",{parentName:"tr",align:null},"all")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"out"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"srcnat"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"postrouting")))),(0,r.kt)("h2",{id:"\u5339\u914d"},"\u5339\u914d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"meta \uff08\u5143\u5c5e\u6027\uff0c\u5982\u63a5\u53e3\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"oif\u3001iif\u3001oifname\u3001iifname"))),(0,r.kt)("li",{parentName:"ul"},"icmp \uff08ICMP \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type"))),(0,r.kt)("li",{parentName:"ul"},"icmpv6 \uff08ICMPv6 \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"type"))),(0,r.kt)("li",{parentName:"ul"},"ip \uff08IP \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"protocol"),(0,r.kt)("li",{parentName:"ul"},"daddr"),(0,r.kt)("li",{parentName:"ul"},"saddr"))),(0,r.kt)("li",{parentName:"ul"},"ip6 \uff08IPv6 \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"daddr"),(0,r.kt)("li",{parentName:"ul"},"saddr"))),(0,r.kt)("li",{parentName:"ul"},"tcp \uff08TCP \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dport"),(0,r.kt)("li",{parentName:"ul"},"sport"))),(0,r.kt)("li",{parentName:"ul"},"udp \uff08UDP \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dport"),(0,r.kt)("li",{parentName:"ul"},"sport"))),(0,r.kt)("li",{parentName:"ul"},"sctp \uff08SCTP \u534f\u8bae\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dport"),(0,r.kt)("li",{parentName:"ul"},"sport"))),(0,r.kt)("li",{parentName:"ul"},"ct \uff08\u94fe\u63a5\u8ddf\u8e2a\uff09",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"state new | established | related | invalid")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7aef\u53e3\nnft describe tcp dport\n")),(0,r.kt)("h2",{id:"nft"},"nft"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\")," \u7eed\u884c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#")," \u6ce8\u91ca"),(0,r.kt)("li",{parentName:"ul"},"\u6807\u8bc6\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"^[a-zA-Z][a-zA-Z0-9/\\_.]*"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528\u53cc\u5f15\u53f7\u907f\u514d\u51b2\u7a81"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://man.archlinux.org/man/nft.8"},"nft.8"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nft"},"# \u5f15\u5165\u6587\u4ef6\n# -I/--includepath\n# \u5ffd\u7565 . \u5f00\u5934\u6587\u4ef6\ninclude filename\n\n# \u5b9a\u4e49\u53d8\u91cf\ndefine variable = expr\n# \u4f7f\u7528\u53d8\u91cf\n$variable\n")),(0,r.kt)("h2",{id:"nft-cli"},"nft cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63cf\u8ff0\u4fe1\u606f\nnft describe tcp flags\nnft describe ct_state\nnft describe icmp type\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u64cd\u4f5c\u5bf9\u8c61")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rulset - \u6240\u6709\u7684 table \u548c chain",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{list | flush} ruleset [family]")))),(0,r.kt)("li",{parentName:"ul"},"table",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"chain \u5bb9\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 \u5730\u5740\u7c7b\u578b\u548c\u540d\u5b57\u6807\u8bc6")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{add | create} table [family] table [{ flags flags ; }]\n{delete | list | flush} table [family] table\nlist tables [family]\ndelete table [family] handle handle\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"chain",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rule \u5bb9\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u533a\u5206 base chian \u548c regular chain"),(0,r.kt)("li",{parentName:"ul"},"base - entry point for packets from the networking stack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 policy - \u9ed8\u8ba4 accept"))),(0,r.kt)("li",{parentName:"ul"},"regular - may be used as jump target and is used for better rule organization"),(0,r.kt)("li",{parentName:"ul"},"chain type")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"families"),(0,r.kt)("th",{parentName:"tr",align:null},"hooks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"all")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nat"),(0,r.kt)("td",{parentName:"tr",align:null},"ip, ip6, inet"),(0,r.kt)("td",{parentName:"tr",align:null},"prerouting, input, output, postrouting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"ip, ip6"),(0,r.kt)("td",{parentName:"tr",align:null},"output")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nat \u901a\u8fc7\u505a NAT \u5904\u7406\uff0c\u53ea\u5904\u7406\u7b2c\u4e00\u4e2a\u5305 - \u7528\u4e8e created conntrack entry")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{add | create} chain [family] table chain [{ type type hook hook [device device] priority priority ; [policy policy ;] }]\n{delete | list | flush} chain [family] table chain\nlist chains [family]\ndelete chain [family] table handle handle\nrename chain [family] table chain newname\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rule",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u64cd\u4f5c\u89c4\u5219")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{add | insert} rule [family] table chain [handle handle | index index] statement ... [comment comment]\nreplace rule [family] table chain handle handle statement ... [comment comment]\ndelete rule [family] table chain handle handle\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set - ",(0,r.kt)("inlineCode",{parentName:"li"},"{80,443}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u533a\u5206\u533f\u540d\u96c6\u5408\u548c\u6709\u540d\u5b57\u7684\u96c6\u5408"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8f85\u52a9\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"@set_name")," \u5f15\u7528")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"add set [family] table set { type type | typeof expression ; [flags flags ;] [timeout timeout ;] [gc-interval gc-interval ;] [elements = { element[, ...] } ;] [size size ;] [policy policy ;] [auto-merge ;] }\n{delete | list | flush} set [family] table set\nlist sets [family]\ndelete set [family] table handle handle\n{add | delete} element [family] table set { element[, ...] }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"map"),(0,r.kt)("li",{parentName:"ul"},"element"),(0,r.kt)("li",{parentName:"ul"},"flowtable",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"accelerate packet forwarding in software"),(0,r.kt)("li",{parentName:"ul"},"layer 3/4"))),(0,r.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"counter"),(0,r.kt)("li",{parentName:"ul"},"quota"))),(0,r.kt)("li",{parentName:"ul"},"ct helper",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 connection tracking helper"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e ct helper set"))),(0,r.kt)("li",{parentName:"ul"},"ct timeout",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"update connection tracking timeout"))),(0,r.kt)("li",{parentName:"ul"},"ct expectation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create connection expectations"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e ct expectation set"))),(0,r.kt)("li",{parentName:"ul"},"counter"),(0,r.kt)("li",{parentName:"ul"},"quota")),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u89c4\u5219"},"\u9ed8\u8ba4\u89c4\u5219"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6e05\u7a7a\nflush ruleset\n\n# \u57fa\u7840 IPv4/IPv6 \u6709\u72b6\u6001\u7684\u9632\u706b\u5899 - \u7528\u6237\u670d\u52a1\u5668\u6216\u5de5\u4f5c\u7ad9\ntable inet filter {\n    chain input {\n    # \u9ed8\u8ba4 drop input\n        type filter hook input priority 0; policy drop;\n\n    # \u5141\u8bb8\u672c\u5730\u6d41\u91cf\n        iifname lo accept \\\n        comment "Accept any localhost traffic"\n\n    # \u5141\u8bb8\u51fa\u53bb\u7684\u6d41\u91cf\n        ct state { established, related } accept \\\n        comment "Accept traffic originated from us"\n\n    # \u4e22\u5f03\u65e0\u6548\u8fde\u63a5\n        ct state invalid drop \\\n        comment "Drop invalid connections"\n\n    # 113 \u7aef\u53e3\u8fd4\u56de\u7aef\u53e3\u4e0d\u53ef\u8fbe\n    # https://en.wikipedia.org/wiki/Ident_protocol\n    # https://github.com/janikrabe/oidentd\n    # apk add oidentd\n        tcp dport 113 reject with icmpx type port-unreachable \\\n        comment "Reject AUTH to make it fail fast"\n\n        # ICMPv4\n    # \u63a5\u53d7\u6307\u5b9a\u7c7b\u578b\u7684 icmp \u7c7b\u578b\n        ip protocol icmp icmp type {\n            echo-reply,  # type 0\n            destination-unreachable,  # type 3\n            time-exceeded,  # type 11\n            parameter-problem,  # type 12\n        } accept \\\n        comment "Accept ICMP"\n\n    # \u9650\u5236 ping \u901f\u7387\n        ip protocol icmp icmp type echo-request limit rate 1/second accept \\\n        comment "Accept max 1 ping per second"\n\n        # ICMPv6\n\n        ip6 nexthdr icmpv6 icmpv6 type {\n            destination-unreachable,  # type 1\n            packet-too-big,  # type 2\n            time-exceeded,  # type 3\n            parameter-problem,  # type 4\n            echo-reply,  # type 129\n        } accept \\\n        comment "Accept basic IPv6 functionality"\n\n        ip6 nexthdr icmpv6 icmpv6 type echo-request limit rate 1/second accept \\\n        comment "Accept max 1 ping per second"\n\n    # IPv6 SLAAC \u534f\u8bae\n        ip6 nexthdr icmpv6 icmpv6 type {\n            nd-router-solicit,  # type 133\n            nd-router-advert,  # type 134\n            nd-neighbor-solicit,  # type 135\n            nd-neighbor-advert,  # type 136\n        } ip6 hoplimit 255 accept \\\n        comment "Allow IPv6 SLAAC"\n\n    # IPv6 \u591a\u64ad\u94fe\u8def\u53d1\u73b0\n        ip6 nexthdr icmpv6 icmpv6 type {\n            mld-listener-query,  # type 130\n            mld-listener-report,  # type 131\n            mld-listener-reduction,  # type 132\n            mld2-listener-report,  # type 143\n        } ip6 saddr fe80::/10 accept \\\n        comment "Allow IPv6 multicast listener discovery on link-local"\n    }\n\n    chain forward {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8\u8f6c\u53d1\n        type filter hook forward priority 0; policy drop;\n    }\n\n    chain output {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8 output\n        type filter hook output priority 0; policy accept;\n    }\n}\n# \u5305\u542b\u81ea\u5b9a\u4e49\u89c4\u5219\ninclude "/etc/nftables.d/*.nft"\n')),(0,r.kt)("h2",{id:"masquerade"},"masquerade"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n  }\n  chain postrouting {\n    type nat hook postrouting priority 100;\n    # \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740\n    oifname "enp0s2" masquerade\n  }\n}\n')),(0,r.kt)("h2",{id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3"},"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"table inet filter {\n  chain input {\n    type filter hook input priority 0;\n    # allow ssh,http\n    tcp dport {ssh,http,https} accept\n    # http3 use udp\n    udp dport {https} accept\n  }\n}\n")),(0,r.kt)("h2",{id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740"},"\u9650\u5b9a\u6765\u6e90\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"define ALLOWED_NETS = {\n  192.168.0.0/16,\n  1.2.3.4\n}\n\ntable inet firewall {\n  chain inbound {\n    type filter hook input priority 0; policy drop;\n    # \u9650\u5b9a\u6765\u6e90\u8bbf\u95ee\n    tcp dport { http, https } ip saddr $ALLOWED_NETS accept\n    udp dport { http, https } ip saddr $ALLOWED_NETS accept\n  }\n}\n")),(0,r.kt)("h2",{id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22"},"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n    tcp dport != 22 redirect to 22\n  }\n  chain postrouting {\n    type nat hook postrouting priority 0;\n  }\n}\n")))}k.isMDXComponent=!0}}]);