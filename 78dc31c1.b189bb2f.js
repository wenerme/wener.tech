(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(9),l=(n(0),n(618)),c={id:"nftables-rule",title:"nftables \u89c4\u5219"},b={id:"ops/network/tool/nftables-rule",title:"nftables \u89c4\u5219",description:"## \u8868\u8fbe\u5f0f",source:"@site/../tricks/ops/network/tool/nftables-rule.md",permalink:"/notes/ops/network/tool/nftables-rule"},i=[{value:"\u8868\u8fbe\u5f0f",id:"\u8868\u8fbe\u5f0f",children:[{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",children:[]},{value:"\u5339\u914d",id:"\u5339\u914d",children:[]}]},{value:"\u9ed8\u8ba4\u89c4\u5219",id:"\u9ed8\u8ba4\u89c4\u5219",children:[]},{value:"masquerade",id:"masquerade",children:[]},{value:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3",children:[]},{value:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740",children:[]},{value:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22",id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22",children:[]}],p={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u8868\u8fbe\u5f0f"},"\u8868\u8fbe\u5f0f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"accept\u3001drop\u3001queue\u3001continue\u3001return\u3001jump chain\u3001goto chain"),Object(l.b)("li",{parentName:"ul"},"masquerade - \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},"type",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"filter\u3001route\u3001nat"))),Object(l.b)("li",{parentName:"ul"},"hook",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ip\u3001ip6\u3001inet - prerouting\u3001input\u3001forward\u3001output\u3001postrouting"),Object(l.b)("li",{parentName:"ul"},"netdav - ingress")))),Object(l.b)("h3",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PRI"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"def"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-400"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_CONNTRACK_DEFRAG"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"priority of defragmentation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-300"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"raw"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_RAW"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"traditional priority of the raw table placed before connection tracking operation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-225"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_SELINUX_FIRST"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SELinux operations")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-200"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_CONNTRACK"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connection tracking operations")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-150"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mangle"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_MANGLE"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mangle operation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-100"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dstnat"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_NAT_DST"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNAT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"filter"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_FILTER"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"filtering operation, the filter table")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"50"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"security"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_SECURITY"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Place of security table where secmark can be set for example")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"srcnat"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_NAT_SRC"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SNAT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"225"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_SELINUX_LAST"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SELinux at packet exit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"300"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NF_IP_PRI_CONNTRACK_HELPER"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"connection tracking at exit")))),Object(l.b)("h3",{id:"\u5339\u914d"},"\u5339\u914d"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"meta \uff08\u5143\u5c5e\u6027\uff0c\u5982\u63a5\u53e3\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"oif\u3001iif\u3001oifname\u3001iifname"))),Object(l.b)("li",{parentName:"ul"},"icmp \uff08ICMP \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"type"))),Object(l.b)("li",{parentName:"ul"},"icmpv6 \uff08ICMPv6 \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"type"))),Object(l.b)("li",{parentName:"ul"},"ip \uff08IP \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"protocol"),Object(l.b)("li",{parentName:"ul"},"daddr"),Object(l.b)("li",{parentName:"ul"},"saddr"))),Object(l.b)("li",{parentName:"ul"},"ip6 \uff08IPv6 \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"daddr"),Object(l.b)("li",{parentName:"ul"},"saddr"))),Object(l.b)("li",{parentName:"ul"},"tcp \uff08TCP \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dport"),Object(l.b)("li",{parentName:"ul"},"sport"))),Object(l.b)("li",{parentName:"ul"},"udp \uff08UDP \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dport"),Object(l.b)("li",{parentName:"ul"},"sport"))),Object(l.b)("li",{parentName:"ul"},"sctp \uff08SCTP \u534f\u8bae\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dport"),Object(l.b)("li",{parentName:"ul"},"sport"))),Object(l.b)("li",{parentName:"ul"},"ct \uff08\u94fe\u63a5\u8ddf\u8e2a\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"state new | established | related | invalid")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u7aef\u53e3\nnft describe tcp dport\n")),Object(l.b)("h2",{id:"\u9ed8\u8ba4\u89c4\u5219"},"\u9ed8\u8ba4\u89c4\u5219"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'# \u6e05\u7a7a\nflush ruleset\n\n# \u57fa\u7840 IPv4/IPv6 \u6709\u72b6\u6001\u7684\u9632\u706b\u5899 - \u7528\u6237\u670d\u52a1\u5668\u6216\u5de5\u4f5c\u7ad9\ntable inet filter {\n    chain input {\n    # \u9ed8\u8ba4 drop input\n        type filter hook input priority 0; policy drop;\n\n    # \u5141\u8bb8\u672c\u5730\u6d41\u91cf\n        iifname lo accept \\\n        comment "Accept any localhost traffic"\n\n    # \u5141\u8bb8\u51fa\u53bb\u7684\u6d41\u91cf\n        ct state { established, related } accept \\\n        comment "Accept traffic originated from us"\n\n    # \u4e22\u5f03\u65e0\u6548\u8fde\u63a5\n        ct state invalid drop \\\n        comment "Drop invalid connections"\n\n    # 113 \u7aef\u53e3\u8fd4\u56de\u7aef\u53e3\u4e0d\u53ef\u8fbe\n    # https://en.wikipedia.org/wiki/Ident_protocol\n    # https://github.com/janikrabe/oidentd\n    # apk add oidentd\n        tcp dport 113 reject with icmpx type port-unreachable \\\n        comment "Reject AUTH to make it fail fast"\n\n        # ICMPv4\n    # \u63a5\u53d7\u6307\u5b9a\u7c7b\u578b\u7684 icmp \u7c7b\u578b\n        ip protocol icmp icmp type {\n            echo-reply,  # type 0\n            destination-unreachable,  # type 3\n            time-exceeded,  # type 11\n            parameter-problem,  # type 12\n        } accept \\\n        comment "Accept ICMP"\n\n    # \u9650\u5236 ping \u901f\u7387\n        ip protocol icmp icmp type echo-request limit rate 1/second accept \\\n        comment "Accept max 1 ping per second"\n\n        # ICMPv6\n\n        ip6 nexthdr icmpv6 icmpv6 type {\n            destination-unreachable,  # type 1\n            packet-too-big,  # type 2\n            time-exceeded,  # type 3\n            parameter-problem,  # type 4\n            echo-reply,  # type 129\n        } accept \\\n        comment "Accept basic IPv6 functionality"\n\n        ip6 nexthdr icmpv6 icmpv6 type echo-request limit rate 1/second accept \\\n        comment "Accept max 1 ping per second"\n\n    # IPv6 SLAAC \u534f\u8bae\n        ip6 nexthdr icmpv6 icmpv6 type {\n            nd-router-solicit,  # type 133\n            nd-router-advert,  # type 134\n            nd-neighbor-solicit,  # type 135\n            nd-neighbor-advert,  # type 136\n        } ip6 hoplimit 255 accept \\\n        comment "Allow IPv6 SLAAC"\n\n    # IPv6 \u591a\u64ad\u94fe\u8def\u53d1\u73b0\n        ip6 nexthdr icmpv6 icmpv6 type {\n            mld-listener-query,  # type 130\n            mld-listener-report,  # type 131\n            mld-listener-reduction,  # type 132\n            mld2-listener-report,  # type 143\n        } ip6 saddr fe80::/10 accept \\\n        comment "Allow IPv6 multicast listener discovery on link-local"\n    }\n\n    chain forward {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8\u8f6c\u53d1\n        type filter hook forward priority 0; policy drop;\n    }\n\n    chain output {\n    # \u9ed8\u8ba4\u4e0d\u5141\u8bb8 output\n        type filter hook output priority 0; policy accept;\n    }\n}\n# \u5305\u542b\u81ea\u5b9a\u4e49\u89c4\u5219\ninclude "/etc/nftables.d/*.nft"\n')),Object(l.b)("h2",{id:"masquerade"},"masquerade"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n  }\n  chain postrouting {\n    type nat hook postrouting priority 100;\n    # \u6e90\u5730\u5740\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u51fa\u53e3\u5730\u5740\n    oifname "enp0s2" masquerade\n  }\n}\n')),Object(l.b)("h2",{id:"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3"},"\u5141\u8bb8\u5e38\u7528\u7aef\u53e3"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"table inet filter {\n  chain input {\n    type filter hook input priority 0;\n    # allow ssh,http\n    tcp dport {ssh,http,https} accept\n    # http3 use udp\n    udp dport {https} accept\n  }\n}\n")),Object(l.b)("h2",{id:"\u9650\u5b9a\u6765\u6e90\u5730\u5740"},"\u9650\u5b9a\u6765\u6e90\u5730\u5740"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"define ALLOWED_NETS = {\n  192.168.0.0/16,\n  1.2.3.4\n}\n\ntable inet firewall {\n  chain inbound {\n    type filter hook input priority 0; policy drop;\n    # \u9650\u5b9a\u6765\u6e90\u8bbf\u95ee\n    tcp dport { http, https } ip saddr $ALLOWED_NETS accept\n    udp dport { http, https } ip saddr $ALLOWED_NETS accept\n  }\n}\n")),Object(l.b)("h2",{id:"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230-22"},"\u6240\u6709\u7aef\u53e3\u91cd\u5b9a\u5411\u5230 22"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"table ip nat {\n  chain prerouting {\n    type nat hook prerouting priority 0;\n    tcp dport != 22 redirect to 22\n  }\n  chain postrouting {\n    type nat hook postrouting priority 0;\n  }\n}\n")))}o.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);