"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69819],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,N=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11723:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&d(e,n,t[n]);return e};const c={title:"CNI"},s="CNI",N={unversionedId:"devops/container/cni",id:"devops/container/cni",title:"CNI",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/container/cni.md",sourceDirName:"devops/container",slug:"/devops/container/cni",permalink:"/notes/devops/container/cni",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/cni.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"CNI"},sidebar:"docs",previous:{title:"buildkit",permalink:"/notes/devops/container/buildkit"},next:{title:"Container Awesome",permalink:"/notes/devops/container/awesome"}},k={},f=[{value:"spec",id:"spec",level:2},{value:"bridge",id:"bridge",level:2},{value:"Windows",id:"windows",level:2},{value:"error while GETHNSNewtorkByName(mynet): hnsCall failed in Win32: The specified module could not be found. (0x7e)",id:"error-while-gethnsnewtorkbynamemynet-hnscall-failed-in-win32-the-specified-module-could-not-be-found-0x7e",level:2},{value:"failed to find plugin flannel in path /usr/libexec/cni",id:"failed-to-find-plugin-flannel-in-path-usrlibexeccni",level:2}],g={toc:f};function b(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"cni"}),"CNI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u5bb9\u5668\u7f51\u7edc\u63a5\u53e3\u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},"cni-plugins \u63d0\u4f9b\u4e86\u5927\u91cf\u5b9e\u73b0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/containernetworking/cni"}),"containernetworking/cni")," - \u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/containernetworking/plugins"}),"containernetworking/plugins")," - \u53c2\u8003\u5b9e\u73b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=cni-plugins&arch=x86_64&repo=community"}),"\u5305\u5185\u5bb9")))),(0,a.kt)("li",{parentName:"ul"},"alpine \u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/libexec/cni/")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7f51\u7edc\u914d\u7f6e\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/cni/net.d")),(0,a.kt)("li",{parentName:"ul"},"CNI \u5305\u542b\u4e86\u542f\u52a8\u811a\u672c - ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/containernetworking/cni/tree/master/scripts"}),"cni/scripts"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c netns - ",(0,a.kt)("inlineCode",{parentName:"li"},"ip netns")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec-plugins add|del CNI_CONTAINERID CNI_NETNS"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CNI_CONTAINERID - \u5bb9\u5668 ID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00\u6807\u793a\u76ee\u7684\uff0c\u53ef\u4ee5\u968f\u673a\u751f\u6210"),(0,a.kt)("li",{parentName:"ul"},"docker \u53ef\u76f4\u63a5\u4f7f\u7528 \u5bb9\u5668 ID"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"printf '%x%x%x%x' $RANDOM $RANDOM $RANDOM $RANDOM")))),(0,a.kt)("li",{parentName:"ul"},"CNI_NETNS - \u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u8def\u5f84",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/proc/<pid>/ns/net")))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/flannel-io/flannel"}),"flannel-io/flannel"))),(0,a.kt)("admonition",m({},{type:"warning"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"cni-plugins v1 \u4e4b\u540e\u4e0d\u5305\u542b flannel - AlpineLinux 3.15",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"apk add flannel -X ",(0,a.kt)("a",m({parentName:"li"},{href:"https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing"}),"https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing")))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Main: \u7f51\u53e3\u521b\u5efa"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bridge"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u521b\u5efa\u6865\u63a5\uff0c\u6dfb\u52a0\u5bbf\u4e3b\u673a\u548c\u5bb9\u5668\u7f51\u7edc\u5230\u6865\u63a5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ipvlan"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6dfb\u52a0 ipvlan \u5230\u5bb9\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"loopback"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ip li set lo1 up")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"macvlan"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u521b\u5efa macvlan \u7ed9\u5bb9\u5668\uff0c\u8f6c\u53d1 mac \u6d41\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ptp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"veth \u5bf9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"vlan"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u521b\u5efa vlan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"host-device"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u900f\u4f20\u5df2\u5b58\u5728\u8bbe\u5907")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Windows"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"win-bridge"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"win-overlay"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"IPAM: IP \u5730\u5740\u7533\u8bf7"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"dhcp"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"DHCP \u7533\u8bf7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"host-local"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u7ba1\u7406\u672c\u5730\u7533\u8bf7\u5230\u7684 IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"static"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4f7f\u7528\u9759\u6001\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Meta: \u5176\u4ed6\u63d2\u4ef6"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"flannel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u57fa\u4e8e flannel \u751f\u6210\u7f51\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"tuning"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u901a\u8fc7 sysctl \u4fee\u6539\u7f51\u53e3\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"portmap"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u57fa\u4e8e iptables \u7684\u7aef\u53e3\u6620\u5c04 - \u4e3b\u673a\u5730\u5740\u7aef\u53e3\u5230\u5bb9\u5668")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bandwidth"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u8fdb\u51fa\u5e26\u5bbd\u9650\u5236")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"sbr"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u57fa\u4e8e\u6765\u6e90\u7684\u8def\u7531")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"firewall"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u57fa\u4e8e iptables \u6216 firewalld \u7684\u9632\u706b\u5899\u63a7\u5236")))),(0,a.kt)("h2",m({},{id:"spec"}),"spec"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add,delete,version"),(0,a.kt)("li",{parentName:"ul"},"stdin, stdout"),(0,a.kt)("li",{parentName:"ul"},"CNI_ARGS, CAP_ARGS")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'cat <<CONF > bridge.conf\n{\n  "name": "mynet",\n  "type": "bridge",\n  "ipam": {\n    "type":"host-local",\n    "subnet": "10.10.1.0/24"\n  }\n}\nCONF\nip netns add ns1\n\nCNI_COMMAND=ADD CNI_CONTAINERID=ns1 CNI_NETNS=/var/run/netns/ns1 CNI_IFNAME=eth2 CNI_PATH="$PWD" \\\nbridge < bridge.conf\n')),(0,a.kt)("h2",m({},{id:"bridge"}),"bridge"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "cniVersion": "0.3.1",\n  // \u7f51\u7edc\u540d\u5b57\n  "name": "mynet",\n  // \u7f51\u7edc\u7c7b\u578b - \u5bf9\u5e94 /usr/libexec/cni/\n  "type": "bridge",\n\n  // \u6865\u63a5\u540d\u5b57 - \u9ed8\u8ba4 cni0\n  "bridge": "cni0",\n  // \u8bbe\u7f6e\u7684 IP \u4f5c\u4e3a\u9ed8\u8ba4\u8def\u7531\n  "isDefaultGateway": false,\n  // \u8bbe\u5426\u8bbe\u7f6e\u65b0\u7684 IP \u5730\u5740\n  "forceAddress": false,\n  // \u662f\u5426\u914d\u7f6e masquerade\n  "ipMasq": false,\n  // MTU \u9ed8\u8ba4\u53d6\u51b3\u4e8e \u5185\u6838\n  "mtu": 0,\n  // hairpin \u6a21\u5f0f\n  "hairpinMode": false,\n  // IP \u5730\u5740\u7ba1\u7406 - L2 \u7f51\u7edc\n  "ipam": {\n    "type": "host-local",\n    "subnet": "10.10.0.0/16"\n  },\n  // promiscuous \u6a21\u5f0f\n  "promiscMode": false\n  // \u662f\u5426\u8bbe\u7f6e VLAN tag\n  // "vlan":0\n}\n')),(0,a.kt)("h2",m({},{id:"windows"}),"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"win-overlay"),(0,a.kt)("li",{parentName:"ul"},"win-bridge"),(0,a.kt)("li",{parentName:"ul"},"host-local"),(0,a.kt)("li",{parentName:"ul"},"flannel")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'cat <<CONF > overlay.conf\n{\n    "name": "mynet",\n    "type": "win-overlay",\n    "ipMasq": true,\n    "endpointMacPrefix": "0E-2A",\n    "ipam": {\n        "type": "host-local",\n        "subnet": "10.10.0.0/16"\n    },\n  "loopbackDSR": true,\n  "capabilites": {\n      "dns": true\n  }\n}\nCONF\n\nCNI_COMMAND=ADD CNI_CONTAINERID=ns1 CNI_NETNS=/var/run/netns/ns1 CNI_IFNAME=eth2 CNI_PATH="$PWD" \\\n./win-overlay < overlay.conf\n')),(0,a.kt)("h2",m({},{id:"error-while-gethnsnewtorkbynamemynet-hnscall-failed-in-win32-the-specified-module-could-not-be-found-0x7e"}),"error while GETHNSNewtorkByName(mynet): hnsCall failed in Win32: The specified module could not be found. (0x7e)"),(0,a.kt)("h2",m({},{id:"failed-to-find-plugin-flannel-in-path-usrlibexeccni"}),"failed to find plugin flannel in path /usr/libexec/cni"),(0,a.kt)("p",null,"cni-plugins v1 \u540e\u6ca1\u6709 flannel"))}b.isMDXComponent=!0}}]);