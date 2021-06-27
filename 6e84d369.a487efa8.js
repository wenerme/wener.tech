(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},515:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(1096)),l={id:"interfaces"},o={unversionedId:"os/linux/network/interfaces",id:"os/linux/network/interfaces",isDocsHomePage:!1,title:"interfaces",description:"interfaces",source:"@site/notes/os/linux/network/interfaces.md",slug:"/os/linux/network/interfaces",permalink:"/notes/os/linux/network/interfaces",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/interfaces.md",version:"current",sidebar:"docs",previous:{title:"ifupdown",permalink:"/notes/os/linux/network/ifupdown"},next:{title:"IPRoute2",permalink:"/notes/os/linux/network/iproute2"}},d=[{value:"Tips",id:"tips",children:[]},{value:"inet",id:"inet",children:[{value:"static",id:"static",children:[]},{value:"manual",id:"manual",children:[]},{value:"dhcp",id:"dhcp",children:[]},{value:"bootp",id:"bootp",children:[]},{value:"tunnel",id:"tunnel",children:[]},{value:"ppp",id:"ppp",children:[]},{value:"wvdial",id:"wvdial",children:[]},{value:"ipv4ll",id:"ipv4ll",children:[]}]},{value:"ipx",id:"ipx",children:[{value:"static",id:"static-1",children:[]},{value:"dynamic",id:"dynamic",children:[]}]},{value:"inet6",id:"inet6",children:[{value:"auto",id:"auto",children:[]},{value:"loopback",id:"loopback",children:[]},{value:"static",id:"static-2",children:[]},{value:"manual",id:"manual-1",children:[]},{value:"dhcp",id:"dhcp-1",children:[]},{value:"v4tunnel",id:"v4tunnel",children:[]},{value:"6to4",id:"6to4",children:[]},{value:"can",id:"can",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u591a\u7f51\u53e3",id:"\u591a\u7f51\u53e3",children:[]},{value:"macvtap vs macvlan",id:"macvtap-vs-macvlan",children:[]}]},{value:"\u591a\u53e3",id:"\u591a\u53e3",children:[]},{value:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04",id:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04",children:[]}],c={toc:d};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interfaces"},"interfaces"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"debian ",Object(i.b)("a",{parentName:"li",href:"https://manpages.debian.org/stretch/ifupdown/interfaces.5.en.html"},"interfaces.5")),Object(i.b)("li",{parentName:"ul"},"/etc/network/interfaces",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(i.b)("a",{parentName:"li",href:"https://git.busybox.net/busybox/tree/networking/ifupdown.c"},"ifupdown")," \u64cd\u4f5c - busybox \u6709\u63d0\u4f9b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/var/run/ifstate")," \u8bb0\u5f55\u72b6\u6001 - \u6709\u53ef\u80fd\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/network/run/ifstate")),Object(i.b)("li",{parentName:"ul"},"inet - manual wvdial ppp static bootp dhcp loopback"),Object(i.b)("li",{parentName:"ul"},"inet6 - static manual loopback v4tunnel"))),Object(i.b)("li",{parentName:"ul"},"\u6839\u636e\u63d0\u4f9b ifupdown \u7684\u5305\u4e0d\u540c\uff0c\u529f\u80fd\u53ef\u80fd\u4e0d\u540c"),Object(i.b)("li",{parentName:"ul"},"\u547d\u4ee4\u53ef\u901a\u8fc7\u5176\u4ed6\u5305\u6269\u5c55"),Object(i.b)("li",{parentName:"ul"},"\u6267\u884c\u9636\u6bb5 pre-up up/post-up down/pre-down post-down"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/346967"},"Obtain IP from DHCP sever but set DNS servers statically on Debian")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?file=&path=%2Fetc%2Fnetwork%2F*&name=&branch=edge&arch=x86_64"},"/etc/network/","*"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"interfaces \u6307\u4ee4\u5904\u7406\u811a\u672c"),Object(i.b)("li",{parentName:"ul"},"static-routing tunnel bonding vlan vde2 bridge openvswitch fwsnort sqm-scripts"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/128439"},"Good detailed explanation of /etc/network/interfaces syntax?")))),Object(i.b)("li",{parentName:"ul"},"network-extras"),Object(i.b)("li",{parentName:"ul"},"class",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"auto"),Object(i.b)("li",{parentName:"ul"},"allow-hotplug")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"ifupdown \u4e0d\u540c interfaces \u4f1a\u6709\u4e9b\u5fae\u7684\u4e0d\u540c"),Object(i.b)("li",{parentName:"ul"},"interfaces \u672c\u8d28\u662f\u5c06\u6267\u884c\u7684\u811a\u672c\u4ee5\u914d\u7f6e\u5316\u7684\u65b9\u5f0f\u5448\u73b0",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"imperative -> declartive")))))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"var"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"IFACE"),Object(i.b)("td",{parentName:"tr",align:null},"\u540d\u5b57 \u6216 ",Object(i.b)("inlineCode",{parentName:"td"},"--all"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"LOGICAL"),Object(i.b)("td",{parentName:"tr",align:null},"\u903b\u8f91\u540d \u6216 ",Object(i.b)("inlineCode",{parentName:"td"},"auto"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"ADDRFAM"),Object(i.b)("td",{parentName:"tr",align:null},"\u5730\u5740\u7c7b\u578b \u6216 ",Object(i.b)("inlineCode",{parentName:"td"},"meta"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"METHOD"),Object(i.b)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u65b9\u5f0f \u6216 ",Object(i.b)("inlineCode",{parentName:"td"},"none"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CLASS"),Object(i.b)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u7c7b\u578b ",Object(i.b)("inlineCode",{parentName:"td"},"--allow")," \u7684\u503c\uff0c\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"td"},"--all")," \u65f6\u4e3a ",Object(i.b)("inlineCode",{parentName:"td"},"auto"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MODE"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"start"),",",Object(i.b)("inlineCode",{parentName:"td"},"stop"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PHASE"),Object(i.b)("td",{parentName:"tr",align:null},"pre-up, post-up, pre-down, post-down")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"VERBOSITY"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--verbose")," \u503c\uff0c 1 \u6216 0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PATH"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apk add bonding tunnel static-routing vlan bridge vde2 fwsnort\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u68c0\u67e5 table \u662f\u5426\u5b58\nip ro li tab mytab 2>/dev/null || echo NO\n\ninstall -Dv /dev/null /etc/udhcpc/udhcpc.conf\necho IF_PEER_DNS=no >> /etc/udhcpc/udhcpc.conf\n# \u4e0d\u8981\u4fee\u6539 resolve.conf\necho RESOLV_CONF=no >> /etc/udhcpc/udhcpc.conf\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u540d\u5b57\nrename foo=bar\n\n# [VARIABLE]/VALUE[/[OPTIONS]][=LOGICAL]\nauto /eth*=eth\niface eth inet dhcp\n\nauto eth0 eth1\n\n# \u591a\u63a5\u53e3\n# ===================\n# https://www.thomas-krenn.com/en/wiki/Two_Default_Gateways_on_One_System\n# echo '1 tgbe' | tee -a /etc/iprpite2/rt_tables\n\n# \u9002\u7528\u4e8e\u591a\u5b50\u7f51\n# ip route add 10.10.0.0/24 \u5982\u679c\u5b50\u7f51\u5df2\u7ecf\u5b58\u5728\u5219\u4f1a\u5931\u8d25\niface eth2 inet static\n    address 10.10.0.10\n    netmask 255.255.255.0\n    post-up ip route add 10.10.0.0/24 dev eth1 src 10.10.0.10 table tgbe\n    post-up ip route add default via 10.10.0.1 dev eth1 table tgbe\n    post-up ip rule add from 10.10.0.10/32 table tgbe\n    post-up ip rule add to 10.10.0.10/32 table tgbe\n\n# \u4f7f\u7528\u76f8\u540c\u63a5\u53e3\u8fd4\u56de - \u9002\u7528\u4e8e\u9ed8\u8ba4\u7f51\u5173\u5df2\u7ecf\u5b58\u5728\u4f46\u60f3\u8981\u901a\u8fc7 IP \u4f7f\u7528\u7f51\u53e3\u65f6\n# \u4f7f\u7528\u8fd9\u4e2a IP \u5219\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\niface eth2 inet static\n    address 10.10.0.10\n    netmask 255.255.255.0\n    # \u81ea\u52a8\u6dfb\u52a0 table\n    # pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n    post-up ip rule add from 10.10.0.10 table tgbe\n    post-up ip ro add default via 10.10.0.1 dev eth2 table tgbe\n\n# wireguard\n# ===================\n# \u4f9d\u8d56 wireguard-vanilla/wireguard-virt wireguard-tools-wg\nauto wg0\niface wg0 inet static\n    address 10.10.0.1\n    netmask 255.255.255.0\n    pre-up ip link add dev wg0 type wireguard\n    pre-up ip link set dev wg0 mtu 1450\n    pre-up wg setconf wg0 /etc/network/wg0.conf\n    post-down ip link delete dev wg0\n\n# bonding\n# ===================\n# Slaves\nauto eth0\niface eth0 inet manual\n    bond-master bond0\n    bond-primary eth0\n    bond-mode active-backup\n\nauto wlan0\niface wlan0 inet manual\n    wpa-conf /etc/network/wpa.conf\n    bond-master bond0\n    bond-primary eth0\n    bond-mode active-backup\n\n# Master\nauto bond0\niface bond0 inet dhcp\n    bond-slaves none\n    bond-primary eth0\n    bond-mode active-backup\n    bond-miimon 100\n\n# bridge\n# ===================\nauto br0\niface br0 inet dhcp\n  # \u6709\u8be5\u914d\u7f6e\u8bf4\u660e\u662f\u6865\u63a5\n  # \u7279\u6b8a\u503c none all\n  bridge-ports vnet0 vnet1\n  # \u7b49\u5f85\u7aef\u53e3\n  # bridge-waitport 0\n  # bridge-ageing 0\n  # bridge-bridgeprio 0\n  # forward delay - \u9ed8\u8ba4 30s\n  # bridge-fd 30\n  # bridge-gcint 0\n  # bridge-hello 0\n  # bridge-maxage 0\n  # bridge-pathcost 0\n  # 0-65535\n  # bridge-portprio 0\n  # \u662f\u5426\u5f00\u542f STP - \u5982\u679c\u4e0d\u662f\u552f\u4e00\u7684 bridge \u5219\u9700\u8981\u6253\u5f00\n  # bridge-stp on\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5f53\u524d\u7684 mac \u4fe1\u606f\nbridge fdb\n")),Object(i.b)("h1",{id:"methods"},"Methods"),Object(i.b)("h2",{id:"inet"},"inet"),Object(i.b)("h3",{id:"static"},"static"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Address (dotted quad/netmask) required\naddress address\n# Netmask (dotted quad or number of bits) deprecated\nnetmask mask\n# Broadcast address (dotted quad, + or -) deprecated. Default value: "+"\nbroadcast broadcast_address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (dotted quad)\ngateway address\n# Address of other end point (dotted quad). Note the spelling of "point-to".\npointopoint address\n# Link local address or "random".\nhwaddress address\n# MTU size\nmtu size\n# Address validity scope. Possible values: global, link, host\nscope\n')),Object(i.b)("h3",{id:"manual"},"manual"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Link local address or "random".\nhwaddress address\n# MTU size\nmtu size\n')),Object(i.b)("h3",{id:"dhcp"},"dhcp"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Hostname to be requested (pump, dhcpcd, udhcpc)\nhostname hostname\n# Metric for added routes (dhclient)\nmetric metric\n# Preferred lease time in hours (pump)\nleasehours leasehours\n# Preferred lease time in seconds (dhcpcd)\nleasetime leasetime\n# Vendor class identifier (dhcpcd)\nvendor vendor\n# Client identifier (dhcpcd)\nclient client\n# Hardware address.\nhwaddress address\n")),Object(i.b)("h3",{id:"bootp"},"bootp"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Tell the server to use file as the bootfile.\nbootfile file\n# Use the IP address address to communicate with the server.\nserver address\n# Use addr as the hardware address instead of whatever it really is.\nhwaddr addr\n")),Object(i.b)("h3",{id:"tunnel"},"tunnel"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This method is used to create GRE or IPIP tunnels. You need to have the ip binary from the iproute package. For GRE tunnels, you will need to load the ip_gre module and the ipip module for IPIP tunnels.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Local address (dotted quad) required\naddress address\n# Tunnel type (either GRE or IPIP) required\nmode type\n# Address of other tunnel endpoint required\nendpoint address\n# Remote address (remote address inside tunnel)\ndstaddr address\n# Address of the local endpoint\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway\ngateway address\n# TTL setting\nttl time\n# MTU size\nmtu size\n")),Object(i.b)("h3",{id:"ppp"},"ppp"),Object(i.b)("p",null,"This method uses pon/poff to configure a PPP interface"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Use name as the provider (from /etc/ppp/peers).\nprovider name\n# Use number as the ppp unit number.\nunit number\n# Pass string as additional options to pon.\noptions string\n")),Object(i.b)("h3",{id:"wvdial"},"wvdial"),Object(i.b)("p",null,"This method uses wvdial to configure a PPP interface. See that command for more details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Use name as the provider (from /etc/wvdial.conf).\nprovider name\n")),Object(i.b)("h3",{id:"ipv4ll"},"ipv4ll"),Object(i.b)("p",null,'This method uses avahi-autoipd to configure an interface with an IPv4 Link-Layer address (169.254.0.0/16 family). This method is also known as APIPA or IPAC, and often colloquially referred to as "Zeroconf address".'),Object(i.b)("h2",{id:"ipx"},"ipx"),Object(i.b)("h3",{id:"static-1"},"static"),Object(i.b)("p",null,"This method may be used to setup an IPX interface. It requires the ipx_interface command.\nOptions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# type of Ethernet frames to use (e.g. 802.2)\nframe type\n# Network number\nnetnum id\n")),Object(i.b)("h3",{id:"dynamic"},"dynamic"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# type of Ethernet frames to use (e.g. 802.2)\nframe type\n")),Object(i.b)("h2",{id:"inet6"},"inet6"),Object(i.b)("h3",{id:"auto"},"auto"),Object(i.b)("p",null,"This method may be used to define interfaces with automatically assigned IPv6 addresses. Using this method on its own doesn't mean that RDNSS options will be applied, too. To make this happen, rdnssd daemon must be installed, properly configured and running. If stateless DHCPv6 support is turned on, then additional network configuration parameters such as DNS and NTP servers will be retrieved from a DHCP server. Please note that on ifdown, the lease is not currently released (a known bug)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Privacy extensions (RFC4941) (0=off, 1=assign, 2=prefer)\nprivext int\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding). Default value: "2"\naccept_ra int\n# Use stateless DHCPv6 (0=off, 1=on)\ndhcp int\n# Request a prefix through DHCPv6 Prefix Delegation (0=off, 1=on). Default value: "0"\nrequest_prefix int\n# Number of attempts to wait for a link-local address. Default value: "60"\nll-attempts\n# Link-local address polling interval in seconds. Default value: "0.1"\nll-interval\n')),Object(i.b)("h3",{id:"loopback"},"loopback"),Object(i.b)("h3",{id:"static-2"},"static"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Address (colon delimited/netmask) required\naddress address\n# Netmask (number of bits, eg 64) deprecated\nnetmask mask\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (colon delimited)\ngateway address\n# Medium type, driver dependent\nmedia type\n# Hardware address or "random"\nhwaddress address\n# MTU size\nmtu size\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding)\naccept_ra int\n# Perform stateless autoconfiguration (0=off, 1=on). Default value: "0"\nautoconf int\n# Privacy extensions (RFC3041) (0=off, 1=assign, 2=prefer)\nprivext int\n# Address validity scope. Possible values: global, site, link, host\nscope\n# Time that address remains preferred\npreferred-lifetime int\n# Number of attempts to settle DAD (0 to disable DAD). Default value: "60"\ndad-attempts\n# DAD state polling interval in seconds. Default value: "0.1"\ndad-interval\n')),Object(i.b)("h3",{id:"manual-1"},"manual"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Hardware address or "random"\nhwaddress address\n# MTU size\nmtu size\n')),Object(i.b)("h3",{id:"dhcp-1"},"dhcp"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},'# Hardware address or "random"\nhwaddress address\n# Accept router advertisements (0=off, 1=on, 2=on+forwarding). Default value: "1"\naccept_ra int\n# Perform stateless autoconfiguration (0=off, 1=on)\nautoconf int\n# Request a prefix through DHCPv6 Prefix Delegation (0=off, 1=on). Default value: "0"\nrequest_prefix int\n# Number of attempts to wait for a link-local address. Default value: "60"\nll-attempts\n# Link-local address polling interval in seconds. Default value: "0.1"\nll-interval\n')),Object(i.b)("h3",{id:"v4tunnel"},"v4tunnel"),Object(i.b)("p",null,"IPv6-over-IPv4 tunnel. It requires the ip command from the iproute package."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Address (colon delimited/netmask) required\naddress address\n# Netmask (number of bits, eg 64) deprecated\nnetmask mask\n# Address of other tunnel endpoint (IPv4 dotted quad) required\nendpoint address\n# Address of the local endpoint (IPv4 dotted quad)\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# Default gateway (colon delimited)\ngateway address\n# TTL setting\nttl time\n# MTU size\nmtu size\n# Time that address remains preferred\npreferred-lifetime int\n")),Object(i.b)("h3",{id:"6to4"},"6to4"),Object(i.b)("p",null,"This method may be used to setup an 6to4 tunnel. It requires the ip command from the iproute package."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# Address of the local endpoint (IPv4 dotted quad) required\nlocal address\n# Routing metric for default gateway (integer)\nmetric metric\n# TTL setting\nttl time\n# MTU size\nmtu size\n# Time that address remains preferred\npreferred-lifetime int\n")),Object(i.b)("h3",{id:"can"},"can"),Object(i.b)("p",null,"This method may be used to setup an Controller Area Network (CAN) interface. It requires the the ip command from the iproute"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# bitrate (1..1000000) required\nbitrate bitrate\n# sample point (0.000..0.999)\nsamplepoint samplepoint\n# loop back CAN Messages (on|off)\nloopback loopback\n# listen only mode (on|off)\nlistenonly listenonly\n# activate triple sampling (on|off)\ntriple triple\n# one shot mode (on|off)\noneshot oneshot\n# activate berr reporting (on|off)\nberr berr\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"\u591a\u7f51\u53e3"},"\u591a\u7f51\u53e3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u591a\u7f51\u53e3\uff0c\u5219\u4e0d\u8981\u4f7f\u7528\u76f8\u540c\u7f51\u6bb5"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u8981\u4f7f\u7528\u76f8\u540c\u7f51\u6bb5\u5219\u914d\u7f6e\u591a\u4e2a\u8def\u7531\u8868"),Object(i.b)("li",{parentName:"ul"},"Linux \u9ed8\u8ba4\u4f1a\u54cd\u5e94\u6240\u6709\u672c\u5730 IP - \u5373\u4fbf\u5bf9\u5e94\u7f51\u53e3\u672a\u914d\u7f6e")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ini"},"# \u8c03\u6574 arp \u914d\u7f6e\nnet.ipv4.conf.all.arp_announce = 2\nnet.ipv4.conf.all.arp_ignore = 1\nnet.ipv4.conf.default.accept_source_route = 0\nnet.ipv4.conf.default.arp_announce = 2\nnet.ipv4.conf.default.arp_ignore = 1\nnet.ipv4.conf.default.rp_filter = 1\nnet.ipv4.conf.eth0.arp_announce = 2\nnet.ipv4.conf.eth0.arp_ignore = 1\nnet.ipv4.conf.eth1.arp_announce = 2\nnet.ipv4.conf.eth1.arp_ignore = 1\n")),Object(i.b)("h3",{id:"macvtap-vs-macvlan"},"macvtap vs macvlan"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"macvlan",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e3b\u7f51\u5361\u7684\u5b50\u7f51\u53e3 - \u4f8b\u5982 eth0.0"))),Object(i.b)("li",{parentName:"ul"},"macvtap",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u662f\u7c7b\u4f3c\u4e8e macvlan \u7684 tap \u865a\u62df\u7f51\u7edc\u8bbe\u5907"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e libvirt/KVM"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5728\u4e0d\u9700\u8981\u6865\u63a5\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u4e0e\u5e95\u5c42\u8bbe\u5907\u4ea4\u4e92\u5b9e\u73b0\u7c7b\u4f3c\u6865\u63a5\u7684\u6548\u679c")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# macvtap\nip link add link eth2 macvtap2 address 00:22:33:44:55:66 type macvtap mode bridge\nip link set macvtap2 up\nip link show macvtap2\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://backreference.org/2014/03/20/some-notes-on-macvlanmacvtap/"},"notes on macvlan/macvtap"))),Object(i.b)("h2",{id:"\u591a\u53e3"},"\u591a\u53e3"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# \u4ece eth4 10gbe 192.168.1.101 \u6765\u7684\u5c31\u4ece 10gbe \u51fa\nauto eth4\niface eth4 inet static\n  address 192.168.1.101\n  netmask 255.255.252.0\n  mtu 9000\n  pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n  post-up ip ru add from 192.168.1.101 table tgbe\n  post-up ip ro add default via 192.168.1.1 dev eth4 table tgbe\n")),Object(i.b)("h2",{id:"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04"},"\u914d\u7f6e\u547d\u4ee4\u6620\u5c04"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"auto eth0\niface eth0 inet dhcp\n  hostname my-host\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ip li set eth0\nudhcpc -i eth0 -h my-host\n")),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"auto bond0\niface bond0 inet dhcp\n  bond-member eth0\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ip li add bond0 type bond\nifenslave bond0 eth0\nip li set eth0 up\nip li set bond0 up\nudhcpc -i bond0\n")))}s.isMDXComponent=!0}}]);