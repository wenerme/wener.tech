"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79708],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99471:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),i=["components"],p={title:"Port forward"},l="Port forward",c={unversionedId:"network/port-forward",id:"network/port-forward",title:"Port forward",description:"Tips",source:"@site/../notes/network/port-forward.md",sourceDirName:"network",slug:"/network/port-forward",permalink:"/notes/network/port-forward",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/network/port-forward.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Port forward"},sidebar:"docs",previous:{title:"mDNS",permalink:"/notes/network/mdns"},next:{title:"\u79c1\u6709\u7f51\u7edc",permalink:"/notes/network/private/"}},s={},u=[{value:"Tips",id:"tips",level:2},{value:"DNAT",id:"dnat",level:2},{value:"DNAT+SNAT",id:"dnatsnat",level:2},{value:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1",id:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1",level:2}],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"port-forward"},"Port forward"),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u8d1f\u8f7d\u5747\u8861\u90fd\u80fd\u5b9e\u73b0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nginx - TCP,UDP"),(0,o.kt)("li",{parentName:"ul"},"HAProxy - TCP"),(0,o.kt)("li",{parentName:"ul"},"Keepalived"))),(0,o.kt)("li",{parentName:"ul"},"iptables - \u5185\u6838\u5c42\u5b9e\u73b0"),(0,o.kt)("li",{parentName:"ul"},"SSH"),(0,o.kt)("li",{parentName:"ul"},"socat"),(0,o.kt)("li",{parentName:"ul"},"nc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/samhocevar/rinetd"},"samhocevar/rinetd"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://manpages.debian.org/unstable/rinetd/rinetd.8.en.html"},"rinetd.8")))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-forward-ports-through-a-linux-gateway-with-iptables"},"How To Forward Ports through a Linux Gateway with Iptables"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"socat TCP4-LISTEN:80,fork TCP4:www.yourdomain.org:8080\n\n# \u542f\u7528\u7aef\u53e3\u8f6c\u53d1\necho 1 | sudo tee /proc/sys/net/ipv4/ip_forward\n\n# \u672c\u5730\n#   eth0 192.168.1.2\n#   testnet 10.10.1.1\n# \u76ee\u6807\n#   testnet 10.10.2.1\n# eth0:80 -> testnet 10.10.2.1\n\n# \u5141\u8bb8\u65b0\u7684\u94fe\u63a5 eth0:80 -> testnet\niptables -A FORWARD -i eth0 -o testnet -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT\n# \u5141\u8bb8\u94fe\u63a5\u901a\u4fe1 eth0 -> testnet \u548c testnet -> eth0\niptables -A FORWARD -i eth0 -o testnet -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\niptables -A FORWARD -i testnet -o eth0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT\n\n# \u9ed8\u8ba4\u62d2\u7edd\niptables -P FORWARD DROP\n\n\n# \u4ece\u5916\u90e8\u53ef\u4ee5\u901a\u8fc7\uff0c\u4f46\u662f\u672c\u5730\u662f\u4e0d\u53ef\u4ee5\u7684\ncurl 192.168.1.2\n")),(0,o.kt)("h2",{id:"dnat"},"DNAT"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7f51\u53e3\u8f6c\u53d1\u9700\u8981\u63a7\u5236\u597d SNAT \u5730\u5740")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5141\u8bb8\u8f6c\u53d1 - \u5b9e\u9645\u4f7f\u7528\u65f6\u5efa\u8bae\u8fdb\u884c\u66f4\u7cbe\u7ec6\u5316\u63a7\u5236 - \u9632\u706b\u5899\niptables -A FORWARD -j ACCEPT\n\n# DNAT eth0:80 -> 10.10.2.1\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 10.10.2.1\n# SNAT eth0:80 -> 10.10.2.1 from 10.10.1.1\niptables -t nat -A POSTROUTING -o eth0 -p tcp --dport 80 -d 10.10.2.1 -j SNAT --to-source 10.10.1.1\n\n# \u53ef\u4ee5\u4e00\u4e2a\u7f51\u53e3\u914d\u7f6e\u4e00\u4e2a SNAT - \u6240\u6709\u51fa\u53bb\u7684\u90fd\u662f\u76f8\u540c\u7684 IP\niptables -t nat -A POSTROUTING -o eth0 -j SNAT --to-source 10.10.1.1\n\n# \u5982\u679c\u662f\u52a8\u6001 IP \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 MASQUERADE\niptables -t nat -A POSTROUTING -j MASQUERADE\n")),(0,o.kt)("h2",{id:"dnatsnat"},"DNAT+SNAT"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GUEST",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"192.168.1.3/24"))),(0,o.kt)("li",{parentName:"ul"},"HOST",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"eth0 192.168.1.2/24"),(0,o.kt)("li",{parentName:"ul"},"testnet 10.10.1.1"))),(0,o.kt)("li",{parentName:"ul"},"TARGET",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"testnet 10.10.2.1")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u51c6\u5907\necho 1 > /proc/sys/net/ipv4/ip_forward\niptables -A FORWARD -j ACCEPT\n\n# \u8c03\u8bd5\ntcpdump -ni any 'port 2222 or (host 10.10.2.1 and port 22)'\n\n# DNAT\n# 192.168.1.3=>192.168.1.2:2222 -> 192.168.1.2=>10.10.2.1:22\niptables -t nat -A PREROUTING -i eth0 -p tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22\n# \u4e5f\u53ef\u4ee5\n# iptables -t nat -A PREROUTING -d 192.168.1.2 -p tcp -m tcp --dport 2222 -j DNAT --to-destination 10.10.2.1:22\n\n# SNAT\n# 192.168.1.2=>10.10.2.1:22 -> 10.10.1.1=>10.10.2.1:22\niptables -t nat -A POSTROUTING -s 192.168.1.0/24 -j SNAT --to-source 10.10.1.1\n# \u4e5f\u53ef\u4ee5\n# iptables -t nat -A POSTROUTING -o testnet -j SNAT --to-source 10.10.1.1\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u89c4\u5219\u8f6c\u6362\u4e3a nftables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# DNAT+SNAT\ntable ip nat {\n    chain PREROUTING {\n        type nat hook prerouting priority dstnat; policy accept;\n        iifname "eth0" meta l4proto tcp # xt_tcp counter packets 1 bytes 64 # xt_DNAT\n    }\n\n    chain INPUT {\n        type nat hook input priority 100; policy accept;\n    }\n\n    chain POSTROUTING {\n        type nat hook postrouting priority srcnat; policy accept;\n        oifname "testnet" counter packets 2 bytes 124 # xt_SNAT\n    }\n\n    chain OUTPUT {\n        type nat hook output priority -100; policy accept;\n    }\n}\n# \u5141\u8bb8\u8f6c\u53d1\ntable ip filter {\n    chain INPUT {\n        type filter hook input priority filter; policy accept;\n    }\n\n    chain FORWARD {\n        type filter hook forward priority filter; policy accept;\n        counter packets 9 bytes 509 accept\n    }\n\n    chain OUTPUT {\n        type filter hook output priority filter; policy accept;\n    }\n}\n')),(0,o.kt)("h2",{id:"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1"},"\u672c\u5730\u7aef\u53e3\u8f6c\u53d1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 8001 -> 80\niptables -t nat -A PREROUTING -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80\niptables -t nat -A OUTPUT -s 127.0.0.1 -p tcp --dport 8001 -j REDIRECT --to 80\n")))}m.isMDXComponent=!0}}]);