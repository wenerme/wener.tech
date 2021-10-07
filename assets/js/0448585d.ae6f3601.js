"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16307],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},14170:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"flannel",title:"Flannel"},p=void 0,u={unversionedId:"devops/kubernetes/network/flannel",id:"devops/kubernetes/network/flannel",isDocsHomePage:!1,title:"Flannel",description:"- flannel-io/flannel",source:"@site/notes/devops/kubernetes/network/flannel.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/flannel",permalink:"/notes/devops/kubernetes/network/flannel",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/flannel.md",tags:[],version:"current",frontMatter:{id:"flannel",title:"Flannel"},sidebar:"docs",previous:{title:"Calico",permalink:"/notes/devops/kubernetes/network/calico"},next:{title:"HAProxy Ingress",permalink:"/notes/devops/kubernetes/network/haproxy-ingress"}},d=[{value:"vxlan",id:"vxlan",children:[]},{value:"host-gw",id:"host-gw",children:[]},{value:"wireguard",id:"wireguard",children:[]}],s={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/flannel-io/flannel"},"flannel-io/flannel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"layer 2"),(0,l.kt)("li",{parentName:"ul"},"overlay network"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md"},"\u652f\u6301\u540e\u7aef"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"vxlan",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u65f6\u5019\u9ed8\u8ba4"),(0,l.kt)("li",{parentName:"ul"},"DirectRouting \u53ef\u4ee5\u5728\u76f8\u540c subnet \u65f6\u76f4\u8fde - \u7c7b\u4f3c host-gw"))),(0,l.kt)("li",{parentName:"ul"},"host-gw",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u66f4\u597d - ip ro add \u7684\u65b9\u5f0f\u6dfb\u52a0\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981 2 \u5c42\u76f4\u8fde - TincVPN, n2n \u53ef\u4ee5"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel/tree/master/dist"},"\u6267\u884c\u65b9\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kube-flannel - vxlan\n# https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")),(0,l.kt)("h2",{id:"vxlan"},"vxlan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "PreStartupCommand": "export VNI=1; export IF_NAME=flannel-vxlan; ip link del $IF_NAME 2>/dev/null; ip link add $IF_NAME type vxlan id $VNI dstport 8472 nolearning && ip link set mtu 1450 dev $IF_NAME && cat /sys/class/net/$IF_NAME/address",\n    "PostStartupCommand": "export IF_NAME=flannel-vxlan; export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; ip addr add $SUBNET_IP/32 dev $IF_NAME && ip link set $IF_NAME up",\n    "ShutdownCommand": "export IF_NAME=flannel-vxlan; ip link del $IF_NAME",\n    "SubnetAddCommand": "export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; export IF_NAME=flannel-vxlan; read VTEP; ip route add $SUBNET nexthop via $SUBNET_IP dev $IF_NAME onlink && arp -s $SUBNET_IP $VTEP dev $IF_NAME && bridge fdb add $VTEP dev $IF_NAME self dst $PUBLIC_IP"\n  }\n}\n')),(0,l.kt)("h2",{id:"host-gw"},"host-gw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "SubnetAddCommand": "ip route add $SUBNET via $PUBLIC_IP",\n    "SubnetRemoveCommand": "ip route del $SUBNET via $PUBLIC_IP"\n  }\n}\n')),(0,l.kt)("h2",{id:"wireguard"},"wireguard"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Network": "10.50.0.0/16",\n  "Backend": {\n    "Type": "extension",\n    "PreStartupCommand": "wg genkey | tee privatekey | wg pubkey",\n    "PostStartupCommand": "export SUBNET_IP=`echo $SUBNET | cut -d\'/\' -f 1`; ip link del flannel-wg 2>/dev/null; ip link add flannel-wg type wireguard && wg set flannel-wg listen-port 51820 private-key privatekey && ip addr add $SUBNET_IP/32 dev flannel-wg && ip link set flannel-wg up && ip route add $NETWORK dev flannel-wg",\n    "ShutdownCommand": "ip link del flannel-wg",\n    "SubnetAddCommand": "read PUBLICKEY; wg set flannel-wg peer $PUBLICKEY endpoint $PUBLIC_IP:51820 allowed-ips $SUBNET",\n    "SubnetRemoveCommand": "read PUBLICKEY; wg set flannel-wg peer $PUBLICKEY remove"\n  }\n}\n')))}c.isMDXComponent=!0}}]);