"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3702],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return h}});var a=n(49613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e};const c={id:"interfaces"},m="interfaces",f={unversionedId:"os/linux/network/interfaces",id:"os/linux/network/interfaces",title:"interfaces",description:"Tips",source:"@site/../notes/os/linux/network/interfaces.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/interfaces",permalink:"/notes/os/linux/network/interfaces",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/interfaces.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1612428916,formattedLastUpdatedAt:"Feb 4, 2021",frontMatter:{id:"interfaces"},sidebar:"docs",previous:{title:"ifupdown",permalink:"/notes/os/linux/network/ifupdown"},next:{title:"io_uring",permalink:"/notes/os/linux/network/io_uring"}},k={},h=[{value:"Tips",id:"tips",level:2},{value:"inet",id:"inet",level:2},{value:"static",id:"static",level:3},{value:"manual",id:"manual",level:3},{value:"dhcp",id:"dhcp",level:3},{value:"bootp",id:"bootp",level:3},{value:"tunnel",id:"tunnel",level:3},{value:"ppp",id:"ppp",level:3},{value:"wvdial",id:"wvdial",level:3},{value:"ipv4ll",id:"ipv4ll",level:3},{value:"ipx",id:"ipx",level:2},{value:"static",id:"static-1",level:3},{value:"dynamic",id:"dynamic",level:3},{value:"inet6",id:"inet6",level:2},{value:"auto",id:"auto",level:3},{value:"loopback",id:"loopback",level:3},{value:"static",id:"static-2",level:3},{value:"manual",id:"manual-1",level:3},{value:"dhcp",id:"dhcp-1",level:3},{value:"v4tunnel",id:"v4tunnel",level:3},{value:"6to4",id:"6to4",level:3},{value:"can",id:"can",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u591a\u7f51\u53e3",id:"\u591a\u7f51\u53e3",level:3},{value:"macvtap vs macvlan",id:"macvtap-vs-macvlan",level:3},{value:"\u591a\u53e3",id:"\u591a\u53e3",level:2},{value:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04",id:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04",level:2}],v={toc:h};function g(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),p),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"interfaces"}),"interfaces"),(0,a.kt)("h2",u({},{id:"tips"}),"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"debian ",(0,a.kt)("a",u({parentName:"li"},{href:"https://manpages.debian.org/stretch/ifupdown/interfaces.5.en.html"}),"interfaces.5")),(0,a.kt)("li",{parentName:"ul"},"/etc/network/interfaces",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,a.kt)("a",u({parentName:"li"},{href:"https://git.busybox.net/busybox/tree/networking/ifupdown.c"}),"ifupdown")," \u64cd\u4f5c - busybox \u6709\u63d0\u4f9b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/run/ifstate")," \u8bb0\u5f55\u72b6\u6001 - \u6709\u53ef\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/network/run/ifstate")),(0,a.kt)("li",{parentName:"ul"},"inet - manual wvdial ppp static bootp dhcp loopback"),(0,a.kt)("li",{parentName:"ul"},"inet6 - static manual loopback v4tunnel"))),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u63d0\u4f9b ifupdown \u7684\u5305\u4e0d\u540c\uff0c\u529f\u80fd\u53ef\u80fd\u4e0d\u540c"),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u53ef\u901a\u8fc7\u5176\u4ed6\u5305\u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u9636\u6bb5 pre-up up/post-up down/pre-down post-down"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://unix.stackexchange.com/questions/346967"}),"Obtain IP from DHCP sever but set DNS servers statically on Debian")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?file=&path=%2Fetc%2Fnetwork%2F*&name=&branch=edge&arch=x86_64"}),"/etc/network/","*"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"interfaces \u6307\u4ee4\u5904\u7406\u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"static-routing tunnel bonding vlan vde2 bridge openvswitch fwsnort sqm-scripts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://unix.stackexchange.com/questions/128439"}),"Good detailed explanation of /etc/network/interfaces syntax?")))),(0,a.kt)("li",{parentName:"ul"},"network-extras"),(0,a.kt)("li",{parentName:"ul"},"class",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"auto"),(0,a.kt)("li",{parentName:"ul"},"allow-hotplug")))),(0,a.kt)("admonition",u({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"ifupdown \u4e0d\u540c interfaces \u4f1a\u6709\u4e9b\u5fae\u7684\u4e0d\u540c"),(0,a.kt)("li",{parentName:"ul"},"interfaces \u672c\u8d28\u662f\u5c06\u6267\u884c\u7684\u811a\u672c\u4ee5\u914d\u7f6e\u5316\u7684\u65b9\u5f0f\u5448\u73b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"imperative -> declartive"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"var"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"IFACE"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u540d\u5b57 \u6216 ",(0,a.kt)("inlineCode",{parentName:"td"},"--all"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"LOGICAL"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u903b\u8f91\u540d \u6216 ",(0,a.kt)("inlineCode",{parentName:"td"},"auto"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ADDRFAM"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5730\u5740\u7c7b\u578b \u6216 ",(0,a.kt)("inlineCode",{parentName:"td"},"meta"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"METHOD"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u914d\u7f6e\u65b9\u5f0f \u6216 ",(0,a.kt)("inlineCode",{parentName:"td"},"none"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLASS"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u63a5\u53e3\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"td"},"--allow")," \u7684\u503c\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"--all")," \u65f6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"auto"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"MODE"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"start"),",",(0,a.kt)("inlineCode",{parentName:"td"},"stop"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"PHASE"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pre-up, post-up, pre-down, post-down")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"VERBOSITY"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"--verbose")," \u503c\uff0c 1 \u6216 0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"PATH"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"))))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"apk add bonding tunnel static-routing vlan bridge vde2 fwsnort\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5 table \u662f\u5426\u5b58\nip ro li tab mytab 2>/dev/null || echo NO\n\ninstall -Dv /dev/null /etc/udhcpc/udhcpc.conf\necho IF_PEER_DNS=no >> /etc/udhcpc/udhcpc.conf\n# \u4e0d\u8981\u4fee\u6539 resolve.conf\necho RESOLV_CONF=no >> /etc/udhcpc/udhcpc.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u6539\u540d\u5b57\nrename foo=bar\n\n# [VARIABLE]/VALUE[/[OPTIONS]][=LOGICAL]\nauto /eth*=eth\niface eth inet dhcp\n\nauto eth0 eth1\n\n# \u591a\u63a5\u53e3\n# ===================\n# https://www.thomas-krenn.com/en/wiki/Two_Default_Gateways_on_One_System\n# echo '1 tgbe' | tee -a /etc/iprpite2/rt_tables\n\n# \u9002\u7528\u4e8e\u591a\u5b50\u7f51\n# ip route add 10.10.0.0/24 \u5982\u679c\u5b50\u7f51\u5df2\u7ecf\u5b58\u5728\u5219\u4f1a\u5931\u8d25\niface eth2 inet static\n    address 10.10.0.10\n    netmask 255.255.255.0\n    post-up ip route add 10.10.0.0/24 dev eth1 src 10.10.0.10 table tgbe\n    post-up ip route add default via 10.10.0.1 dev eth1 table tgbe\n    post-up ip rule add from 10.10.0.10/32 table tgbe\n    post-up ip rule add to 10.10.0.10/32 table tgbe\n\n# \u4f7f\u7528\u76f8\u540c\u63a5\u53e3\u8fd4\u56de - \u9002\u7528\u4e8e\u9ed8\u8ba4\u7f51\u5173\u5df2\u7ecf\u5b58\u5728\u4f46\u60f3\u8981\u901a\u8fc7 IP \u4f7f\u7528\u7f51\u53e3\u65f6\n# \u4f7f\u7528\u8fd9\u4e2a IP \u5219\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\niface eth2 inet static\n    address 10.10.0.10\n    netmask 255.255.255.0\n    # \u81ea\u52a8\u6dfb\u52a0 table\n    # pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n    post-up ip rule add from 10.10.0.10 table tgbe\n    post-up ip ro add default via 10.10.0.1 dev eth2 table tgbe\n\n# wireguard\n# ===================\n# \u4f9d\u8d56 wireguard-vanilla/wireguard-virt wireguard-tools-wg\nauto wg0\niface wg0 inet static\n    address 10.10.0.1\n    netmask 255.255.255.0\n    pre-up ip link add dev wg0 type wireguard\n    pre-up ip link set dev wg0 mtu 1450\n    pre-up wg setconf wg0 /etc/network/wg0.conf\n    post-down ip link delete dev wg0\n\n# bonding\n# ===================\n# Slaves\nauto eth0\niface eth0 inet manual\n    bond-master bond0\n    bond-primary eth0\n    bond-mode active-backup\n\nauto wlan0\niface wlan0 inet manual\n    wpa-conf /etc/network/wpa.conf\n    bond-master bond0\n    bond-primary eth0\n    bond-mode active-backup\n\n# Master\nauto bond0\niface bond0 inet dhcp\n    bond-slaves none\n    bond-primary eth0\n    bond-mode active-backup\n    bond-miimon 100\n\n# bridge\n# ===================\nauto br0\niface br0 inet dhcp\n  # \u6709\u8be5\u914d\u7f6e\u8bf4\u660e\u662f\u6865\u63a5\n  # \u7279\u6b8a\u503c none all\n  bridge-ports vnet0 vnet1\n  # \u7b49\u5f85\u7aef\u53e3\n  # bridge-waitport 0\n  # bridge-ageing 0\n  # bridge-bridgeprio 0\n  # forward delay - \u9ed8\u8ba4 30s\n  # bridge-fd 30\n  # bridge-gcint 0\n  # bridge-hello 0\n  # bridge-maxage 0\n  # bridge-pathcost 0\n  # 0-65535\n  # bridge-portprio 0\n  # \u662f\u5426\u5f00\u542f STP - \u5982\u679c\u4e0d\u662f\u552f\u4e00\u7684 bridge \u5219\u9700\u8981\u6253\u5f00\n  # bridge-stp on\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5f53\u524d\u7684 mac \u4fe1\u606f\nbridge fdb\n")),(0,a.kt)("h1",u({},{id:"methods"}),"Methods"),(0,a.kt)("h2",u({},{id:"inet"}),"inet"),(0,a.kt)("h3",u({},{id:"static"}),"static"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Address (dotted quad/netmask) required\naddress address\n# Netmask (dotted quad or number of bits) deprecated\nnetmask mask\n# Broadcast address (dotted quad, + or -) deprecated. Default value: "+"\nbroadcast broadcast_address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (dotted quad)\ngateway address\n# Address of other end point (dotted quad). Note the spelling of "point-to".\npointopoint address\n# Link local address or "random".\nhwaddress address\n# MTU size\nmtu size\n# Address validity scope. Possible values: global, link, host\nscope\n')),(0,a.kt)("h3",u({},{id:"manual"}),"manual"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Link local address or "random".\nhwaddress address\n# MTU size\nmtu size\n')),(0,a.kt)("h3",u({},{id:"dhcp"}),"dhcp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Hostname to be requested (pump, dhcpcd, udhcpc)\nhostname hostname\n# Metric for added routes (dhclient)\nmetric metric\n# Preferred lease time in hours (pump)\nleasehours leasehours\n# Preferred lease time in seconds (dhcpcd)\nleasetime leasetime\n# Vendor class identifier (dhcpcd)\nvendor vendor\n# Client identifier (dhcpcd)\nclient client\n# Hardware address.\nhwaddress address\n")),(0,a.kt)("h3",u({},{id:"bootp"}),"bootp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Tell the server to use file as the bootfile.\nbootfile file\n# Use the IP address address to communicate with the server.\nserver address\n# Use addr as the hardware address instead of whatever it really is.\nhwaddr addr\n")),(0,a.kt)("h3",u({},{id:"tunnel"}),"tunnel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This method is used to create GRE or IPIP tunnels. You need to have the ip binary from the iproute package. For GRE tunnels, you will need to load the ip_gre module and the ipip module for IPIP tunnels.")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Local address (dotted quad) required\naddress address\n# Tunnel type (either GRE or IPIP) required\nmode type\n# Address of other tunnel endpoint required\nendpoint address\n# Remote address (remote address inside tunnel)\ndstaddr address\n# Address of the local endpoint\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway\ngateway address\n# TTL setting\nttl time\n# MTU size\nmtu size\n")),(0,a.kt)("h3",u({},{id:"ppp"}),"ppp"),(0,a.kt)("p",null,"This method uses pon/poff to configure a PPP interface"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Use name as the provider (from /etc/ppp/peers).\nprovider name\n# Use number as the ppp unit number.\nunit number\n# Pass string as additional options to pon.\noptions string\n")),(0,a.kt)("h3",u({},{id:"wvdial"}),"wvdial"),(0,a.kt)("p",null,"This method uses wvdial to configure a PPP interface. See that command for more details."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Use name as the provider (from /etc/wvdial.conf).\nprovider name\n")),(0,a.kt)("h3",u({},{id:"ipv4ll"}),"ipv4ll"),(0,a.kt)("p",null,'This method uses avahi-autoipd to configure an interface with an IPv4 Link-Layer address (169.254.0.0/16 family). This method is also known as APIPA or IPAC, and often colloquially referred to as "Zeroconf address".'),(0,a.kt)("h2",u({},{id:"ipx"}),"ipx"),(0,a.kt)("h3",u({},{id:"static-1"}),"static"),(0,a.kt)("p",null,"This method may be used to setup an IPX interface. It requires the ipx_interface command.\nOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# type of Ethernet frames to use (e.g. 802.2)\nframe type\n# Network number\nnetnum id\n")),(0,a.kt)("h3",u({},{id:"dynamic"}),"dynamic"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# type of Ethernet frames to use (e.g. 802.2)\nframe type\n")),(0,a.kt)("h2",u({},{id:"inet6"}),"inet6"),(0,a.kt)("h3",u({},{id:"auto"}),"auto"),(0,a.kt)("p",null,"This method may be used to define interfaces with automatically assigned IPv6 addresses. Using this method on its own doesn't mean that RDNSS options will be applied, too. To make this happen, rdnssd daemon must be installed, properly configured and running. If stateless DHCPv6 support is turned on, then additional network configuration parameters such as DNS and NTP servers will be retrieved from a DHCP server. Please note that on ifdown, the lease is not currently released (a known bug)."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Privacy extensions (RFC4941) (0=off, 1=assign, 2=prefer)\nprivext int\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding). Default value: "2"\naccept_ra int\n# Use stateless DHCPv6 (0=off, 1=on)\ndhcp int\n# Request a prefix through DHCPv6 Prefix Delegation (0=off, 1=on). Default value: "0"\nrequest_prefix int\n# Number of attempts to wait for a link-local address. Default value: "60"\nll-attempts\n# Link-local address polling interval in seconds. Default value: "0.1"\nll-interval\n')),(0,a.kt)("h3",u({},{id:"loopback"}),"loopback"),(0,a.kt)("h3",u({},{id:"static-2"}),"static"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Address (colon delimited/netmask) required\naddress address\n# Netmask (number of bits, eg 64) deprecated\nnetmask mask\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (colon delimited)\ngateway address\n# Medium type, driver dependent\nmedia type\n# Hardware address or "random"\nhwaddress address\n# MTU size\nmtu size\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding)\naccept_ra int\n# Perform stateless autoconfiguration (0=off, 1=on). Default value: "0"\nautoconf int\n# Privacy extensions (RFC3041) (0=off, 1=assign, 2=prefer)\nprivext int\n# Address validity scope. Possible values: global, site, link, host\nscope\n# Time that address remains preferred\npreferred-lifetime int\n# Number of attempts to settle DAD (0 to disable DAD). Default value: "60"\ndad-attempts\n# DAD state polling interval in seconds. Default value: "0.1"\ndad-interval\n')),(0,a.kt)("h3",u({},{id:"manual-1"}),"manual"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Hardware address or "random"\nhwaddress address\n# MTU size\nmtu size\n')),(0,a.kt)("h3",u({},{id:"dhcp-1"}),"dhcp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),'# Hardware address or "random"\nhwaddress address\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding). Default value: "1"\naccept_ra int\n# Perform stateless autoconfiguration (0=off, 1=on)\nautoconf int\n# Request a prefix through DHCPv6 Prefix Delegation (0=off, 1=on). Default value: "0"\nrequest_prefix int\n# Number of attempts to wait for a link-local address. Default value: "60"\nll-attempts\n# Link-local address polling interval in seconds. Default value: "0.1"\nll-interval\n')),(0,a.kt)("h3",u({},{id:"v4tunnel"}),"v4tunnel"),(0,a.kt)("p",null,"IPv6-over-IPv4 tunnel. It requires the ip command from the iproute package."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Address (colon delimited/netmask) required\naddress address\n# Netmask (number of bits, eg 64) deprecated\nnetmask mask\n# Address of other tunnel endpoint (IPv4 dotted quad) required\nendpoint address\n# Address of the local endpoint (IPv4 dotted quad)\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (colon delimited)\ngateway address\n# TTL setting\nttl time\n# MTU size\nmtu size\n# Time that address remains preferred\npreferred-lifetime int\n")),(0,a.kt)("h3",u({},{id:"6to4"}),"6to4"),(0,a.kt)("p",null,"This method may be used to setup an 6to4 tunnel. It requires the ip command from the iproute package."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# Address of the local endpoint (IPv4 dotted quad) required\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# TTL setting\nttl time\n# MTU size\nmtu size\n# Time that address remains preferred\npreferred-lifetime int\n")),(0,a.kt)("h3",u({},{id:"can"}),"can"),(0,a.kt)("p",null,"This method may be used to setup an Controller Area Network (CAN) interface. It requires the the ip command from the iproute"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# bitrate (1..1000000) required\nbitrate bitrate\n# sample point (0.000..0.999)\nsamplepoint samplepoint\n# loop back CAN Messages (on|off)\nloopback loopback\n# listen only mode (on|off)\nlistenonly listenonly\n# activate triple sampling (on|off)\ntriple triple\n# one shot mode (on|off)\noneshot oneshot\n# activate berr reporting (on|off)\nberr berr\n")),(0,a.kt)("h2",u({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",u({},{id:"\u591a\u7f51\u53e3"}),"\u591a\u7f51\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u7f51\u53e3\uff0c\u5219\u4e0d\u8981\u4f7f\u7528\u76f8\u540c\u7f51\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u4f7f\u7528\u76f8\u540c\u7f51\u6bb5\u5219\u914d\u7f6e\u591a\u4e2a\u8def\u7531\u8868"),(0,a.kt)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u4f1a\u54cd\u5e94\u6240\u6709\u672c\u5730 IP - \u5373\u4fbf\u5bf9\u5e94\u7f51\u53e3\u672a\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# \u8c03\u6574 arp \u914d\u7f6e\nnet.ipv4.conf.all.arp_announce = 2\nnet.ipv4.conf.all.arp_ignore = 1\nnet.ipv4.conf.default.accept_source_route = 0\nnet.ipv4.conf.default.arp_announce = 2\nnet.ipv4.conf.default.arp_ignore = 1\nnet.ipv4.conf.default.rp_filter = 1\nnet.ipv4.conf.eth0.arp_announce = 2\nnet.ipv4.conf.eth0.arp_ignore = 1\nnet.ipv4.conf.eth1.arp_announce = 2\nnet.ipv4.conf.eth1.arp_ignore = 1\n")),(0,a.kt)("h3",u({},{id:"macvtap-vs-macvlan"}),"macvtap vs macvlan"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macvlan",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e3b\u7f51\u5361\u7684\u5b50\u7f51\u53e3 - \u4f8b\u5982 eth0.0"))),(0,a.kt)("li",{parentName:"ul"},"macvtap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f\u7c7b\u4f3c\u4e8e macvlan \u7684 tap \u865a\u62df\u7f51\u7edc\u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e libvirt/KVM"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5728\u4e0d\u9700\u8981\u6865\u63a5\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u4e0e\u5e95\u5c42\u8bbe\u5907\u4ea4\u4e92\u5b9e\u73b0\u7c7b\u4f3c\u6865\u63a5\u7684\u6548\u679c")))),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macvtap\nip link add link eth2 macvtap2 address 00:22:33:44:55:66 type macvtap mode bridge\nip link set macvtap2 up\nip link show macvtap2\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://backreference.org/2014/03/20/some-notes-on-macvlanmacvtap/"}),"notes on macvlan/macvtap"))),(0,a.kt)("h2",u({},{id:"\u591a\u53e3"}),"\u591a\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"# \u4ece eth4 10gbe 192.168.1.101 \u6765\u7684\u5c31\u4ece 10gbe \u51fa\nauto eth4\niface eth4 inet static\n  address 192.168.1.101\n  netmask 255.255.252.0\n  mtu 9000\n  pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n  post-up ip ru add from 192.168.1.101 table tgbe\n  post-up ip ro add default via 192.168.1.1 dev eth4 table tgbe\n")),(0,a.kt)("h2",u({},{id:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04"}),"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"auto eth0\niface eth0 inet dhcp\n  hostname my-host\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"ip li set eth0\nudhcpc -i eth0 -h my-host\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"auto bond0\niface bond0 inet dhcp\n  bond-member eth0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"ip li add bond0 type bond\nifenslave bond0 eth0\nip li set eth0 up\nip li set bond0 up\nudhcpc -i bond0\n")))}g.isMDXComponent=!0}}]);