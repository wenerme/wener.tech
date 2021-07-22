(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1152:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(t),b=r,m=u["".concat(l,".").concat(b)]||u[b]||s[b]||o;return t?a.a.createElement(m,i(i({ref:n},c),{},{components:t})):a.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),o=(t(0),t(1152)),l={id:"flannel",title:"Flannel"},i={unversionedId:"devops/kubernetes/network/flannel",id:"devops/kubernetes/network/flannel",isDocsHomePage:!1,title:"Flannel",description:"Tips",source:"@site/notes/devops/kubernetes/network/flannel.md",slug:"/devops/kubernetes/network/flannel",permalink:"/notes/devops/kubernetes/network/flannel",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/flannel.md",version:"current",sidebar:"docs",previous:{title:"Kubernates \u7f51\u7edc",permalink:"/notes/devops/kubernetes/network/network"},next:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"}},p=[{value:"Tips",id:"tips",children:[]},{value:"vxlan",id:"vxlan",children:[]},{value:"host-gw",id:"host-gw",children:[]},{value:"wireguard",id:"wireguard",children:[]}],c={toc:p};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md"},"\u652f\u6301\u540e\u7aef"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"vxlan",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5927\u591a\u65f6\u5019\u9ed8\u8ba4"),Object(o.b)("li",{parentName:"ul"},"DirectRouting \u53ef\u4ee5\u5728\u76f8\u540c subnet \u65f6\u76f4\u8fde - \u7c7b\u4f3c host-gw"))),Object(o.b)("li",{parentName:"ul"},"host-gw",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6027\u80fd\u66f4\u597d - ip ro add \u7684\u65b9\u5f0f\u6dfb\u52a0\u8def\u7531"),Object(o.b)("li",{parentName:"ul"},"\u9700\u8981 2 \u5c42\u76f4\u8fde - TincVPN \u53ef\u4ee5"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/coreos/flannel/tree/master/dist"},"\u6267\u884c\u65b9\u5f0f"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# kube-flannel - vxlan\n# https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")),Object(o.b)("h2",{id:"vxlan"},"vxlan"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "PreStartupCommand": "export VNI=1; export IF_NAME=flannel-vxlan; ip link del $IF_NAME 2>/dev/null; ip link add $IF_NAME type vxlan id $VNI dstport 8472 nolearning && ip link set mtu 1450 dev $IF_NAME && cat /sys/class/net/$IF_NAME/address",\n    "PostStartupCommand": "export IF_NAME=flannel-vxlan; export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; ip addr add $SUBNET_IP/32 dev $IF_NAME && ip link set $IF_NAME up",\n    "ShutdownCommand": "export IF_NAME=flannel-vxlan; ip link del $IF_NAME",\n    "SubnetAddCommand": "export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; export IF_NAME=flannel-vxlan; read VTEP; ip route add $SUBNET nexthop via $SUBNET_IP dev $IF_NAME onlink && arp -s $SUBNET_IP $VTEP dev $IF_NAME && bridge fdb add $VTEP dev $IF_NAME self dst $PUBLIC_IP"\n  }\n}\n')),Object(o.b)("h2",{id:"host-gw"},"host-gw"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "SubnetAddCommand": "ip route add $SUBNET via $PUBLIC_IP",\n    "SubnetRemoveCommand": "ip route del $SUBNET via $PUBLIC_IP"\n  }\n}\n')),Object(o.b)("h2",{id:"wireguard"},"wireguard"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "PreStartupCommand": "wg genkey | tee privatekey | wg pubkey",\n    "PostStartupCommand": "export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; ip link del flannel-wg 2>/dev/null; ip link add flannel-wg type wireguard && wg set flannel-wg listen-port 51820 private-key privatekey && ip addr add $SUBNET_IP/32 dev flannel-wg && ip link set flannel-wg up && ip route add $NETWORK dev flannel-wg",\n    "ShutdownCommand": "ip link del flannel-wg",\n    "SubnetAddCommand": "read PUBLICKEY; wg set flannel-wg peer $PUBLICKEY endpoint $PUBLIC_IP:51820 allowed-ips $SUBNET",\n    "SubnetRemoveCommand": "read PUBLICKEY; wg set flannel-wg peer $PUBLICKEY remove"\n  }\n}\n')))}d.isMDXComponent=!0}}]);