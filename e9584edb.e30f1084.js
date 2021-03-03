(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{711:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(7),i=(t(0),t(766)),o={id:"bonding",title:"Bonding"},l={unversionedId:"ops/network/tool/bonding",id:"ops/network/tool/bonding",isDocsHomePage:!1,title:"Bonding",description:"Tips",source:"@site/notes/ops/network/tool/bonding.md",slug:"/ops/network/tool/bonding",permalink:"/notes/ops/network/tool/bonding",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/tool/bonding.md",version:"current",sidebar:"docs",previous:{title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6",permalink:"/notes/ops/network/tool/intro"},next:{title:"dnsmasq",permalink:"/notes/ops/network/tool/dnsmasq"}},b=[{value:"Tips",id:"tips",children:[]},{value:"Link aggregation",id:"link-aggregation",children:[]},{value:"\u914d\u7f6e\u6848\u4f8b",id:"\u914d\u7f6e\u6848\u4f8b",children:[{value:"bonding if hook",id:"bonding-if-hook",children:[]},{value:"\u547d\u4ee4\u63a7\u5236",id:"\u547d\u4ee4\u63a7\u5236",children:[]},{value:"\u6700\u7b80\u5355\u7684\u914d\u7f6e",id:"\u6700\u7b80\u5355\u7684\u914d\u7f6e",children:[]},{value:"\u56db\u7f51\u53e3\u805a\u5408",id:"\u56db\u7f51\u53e3\u805a\u5408",children:[]},{value:"\u65e0\u7ebf\u548c\u6709\u7ebf\u805a\u5408",id:"\u65e0\u7ebf\u548c\u6709\u7ebf\u805a\u5408",children:[]}]},{value:"tree /sys/class/net/bond0",id:"tree-sysclassnetbond0",children:[]}],c={rightToc:b};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"link-aggregation"},"Link aggregation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Link_aggregation"}),"Link aggregation")," - LACP"),Object(i.b)("li",{parentName:"ul"},"Linux ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.linuxfoundation.org/networking/bonding"}),"bonding")),Object(i.b)("li",{parentName:"ul"},"kernel doc ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"}),"bonding.txt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.linux-kvm.org/page/HOWTO_BONDING"}),"http://www.linux-kvm.org/page/HOWTO_BONDING"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Virtualization/3.3/html/Installation_Guide/Bonding_Modes.html"}),"Bonding Modes")),Object(i.b)("li",{parentName:"ul"},"\u6a21\u5f0f - \u9ed8\u8ba4 balance-rr",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"balance-rr - 0 - \u8f6e\u8be2\u8d1f\u8f7d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u552f\u4e00\u5355 TCP/IP \u6d41\u80fd\u5229\u7528\u591a\u4e2a\u7f51\u53e3\u7684\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u4ee3\u4ef7\u662f\u788e\u7247\u5316,\u65e0\u5e8f,\u9700\u8981 TCP/IP \u62e5\u6324\u534f\u8bae\u63a7\u5236"),Object(i.b)("li",{parentName:"ul"},"net.ipv4.tcp_reordering \u63a7\u5236\u62e5\u6324\u7a0b\u5ea6"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5bf9\u987a\u5e8f\u65e0\u8981\u6c42\u7684\u534f\u8bae, \u4f8b\u5982 UDP, \u57fa\u672c\u53ef\u4ee5\u505a\u5230\u7ebf\u6027\u6027\u80fd\u653e\u5927"),Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u4ea4\u6362\u673a\u914d\u7f6e etherchannel \u6216 trunking"))),Object(i.b)("li",{parentName:"ul"},"active-backup - 1 - \u4e3b\u5907",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4fdd\u6301\u76f8\u540c\u7684\u53d1\u9001\u7f51\u53e3"))),Object(i.b)("li",{parentName:"ul"},"balance-xor - 2 - XOR",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e HASH \u7b97\u6cd5\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861"),Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u4ea4\u6362\u673a\u914d\u7f6e etherchannel \u6216 trunking"))),Object(i.b)("li",{parentName:"ul"},"broadcast - 3 - \u5e7f\u64ad",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u7ed1\u5b9a\u7684\u7f51\u5361\u90fd\u6536\u5230\u76f8\u540c\u7684\u6570\u636e, \u7528\u4e8e\u7279\u6b8a\u9700\u6c42, \u4f8b\u5982\u4e24\u4e2a\u4e92\u76f8\u6ca1\u8fde\u63a5\u7684\u4ea4\u6362\u673a\u53d1\u9001\u76f8\u540c\u7684\u6570\u636e"))),Object(i.b)("li",{parentName:"ul"},"802.3ad - 4 - IEEE 802.3ad - LACP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8981\u6c42\u4ea4\u6362\u673a\u652f\u6301 IEEE 802.3ad, \u7f51\u5361\u5e26\u5bbd\u7406\u8bba\u4e0a\u53ef\u4ee5\u7ffb\u500d"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u65b9\u5f0f\u4e5f\u662f\u57fa\u4e8e hash",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u5305\u62ec src ip/mac/port/protocol, dst ip/mac/port/protocol"))),Object(i.b)("li",{parentName:"ul"},"\u56e0\u6b64\u8f83\u591a\u8fde\u63a5\u7684\u65f6\u5019\u624d\u4f1a\u6709\u660e\u663e\u7684\u6548\u679c"))),Object(i.b)("li",{parentName:"ul"},"balance-tlb - Adaptive transmit load balancing - 5 - \u9002\u914d\u5668\u4f20\u8f93\u8d1f\u8f7d\u5747\u8861",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8f93\u51fa\u7684\u6570\u636e\u4f1a\u901a\u8fc7\u6240\u6709\u88ab\u7ed1\u5b9a\u7684\u7f51\u5361\u8f93\u51fa, \u63a5\u6536\u5219\u53ea\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a"))),Object(i.b)("li",{parentName:"ul"},"balance-alb - Adaptive load balancing - 6 - \u9002\u914d\u5668\u8f93\u5165/\u8f93\u51fa\u8d1f\u8f7d\u6a21\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"balance-tlb + receive load balancing (rlb)"),Object(i.b)("li",{parentName:"ul"},"\u5728 5 \u7684\u57fa\u7840\u4e0a, \u63a5\u6536\u6570\u636e\u4e5f\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861"))))),Object(i.b)("li",{parentName:"ul"},"balance-rr, active-backup, balance-tlb \u548c balance-alb \u4e0d\u9700\u8981\u4ea4\u6362\u673a\u652f\u6301"),Object(i.b)("li",{parentName:"ul"},"balance-alb \u548c balance-tlb \u4e0d\u4e00\u5b9a\u6240\u6709\u4ea4\u6362\u673a\u90fd\u80fd\u4f7f\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u6709 arp \u95ee\u9898, \u4f8b\u5982\u6709\u4e9b\u673a\u5668\u4e0d\u80fd\u76f8\u4e92\u8fde\u63a5"),Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u5bf9 miimon, updelay \u8fdb\u884c\u8c03\u8bd5"))),Object(i.b)("li",{parentName:"ul"},"balance-xor \u53ef\u80fd\u4f1a\u9700\u8981\u4ea4\u6362\u673a\u914d\u7f6e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You need to set up an interface group (not LACP) on HP and Cisco switches, but apparently it's not necessary on D-Link, Netgear and Fujitsu switches."))),Object(i.b)("li",{parentName:"ul"},"\u9009\u9879",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"lacp_rate"),Object(i.b)("li",{parentName:"ul"},"downdelay"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://louwrentius.com/achieving-450-mbs-network-file-transfers-using-linux-bonding.html"}),"Achieving 450 MB/s Network File Transfers Using Linux Bonding")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://blogs.technet.microsoft.com/josebda/2012/06/28/the-basics-of-smb-multichannel-a-feature-of-windows-server-2012-and-smb-3-0/"}),"The basics of SMB Multichannel, a feature of Windows Server 2012 and SMB 3.0"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Windows \u7684 SMB \u5171\u4eab\u672c\u8eab\u652f\u6301\u591a\u901a\u9053"),Object(i.b)("li",{parentName:"ul"},"\u534f\u8bae\u652f\u6301\u81ea\u52a8\u53d1\u73b0\u591a\u7f51\u5361, \u5e76\u4e14\u81ea\u52a8\u5229\u7528\u591a\u7f51\u5361\u8fdb\u884c\u7f51\u7edc\u4f20\u8f93"),Object(i.b)("li",{parentName:"ul"},"\u548c\u94fe\u8def\u805a\u5408\u6709\u672c\u8d28\u533a\u522b"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.linux.com/news/what-can-you-do-second-ethernet-port"}),"What can you do with a second Ethernet port ?")))),Object(i.b)("li",{parentName:"ul"},"NOTE",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e0\u8bba\u5982\u4f55\u914d\u7f6e, \u5355\u4e2a\u7f51\u7edc\u94fe\u63a5\u90fd\u4e0d\u4f1a\u8d85\u8fc7\u5355\u4e2a\u7269\u7406\u94fe\u8def\u7684\u901f\u5ea6"),Object(i.b)("li",{parentName:"ul"},"802.3ad \u9700\u8981\u4ea4\u6362\u673a\u652f\u6301 LACP \u7ec4, \u6027\u80fd\u6700\u597d"))),Object(i.b)("li",{parentName:"ul"},"Alpine ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Bonding"}),"Bonding")),Object(i.b)("li",{parentName:"ul"},"ifenslave")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# /etc/network/if-post-down.d/bonding\n# /etc/network/if-pre-up.d/bonding\n# /etc/network/if-up.d/bonding\napk add bonding\n# \u624b\u52a8\u52a0\u8f7d\u9a71\u52a8\nmodprobe bonding\necho bonding | sudo tee -a /etc/modules\n\n# \u67e5\u770b\u6a21\u5f0f\ncat /sys/class/net/bond0/bonding/mode\n# \u67e5\u770b\u72b6\u6001\n# \u80fd\u770b\u5230\u7ec4\u6210\u7f51\u5361\u7684\u5b9e\u9645 mac \u5730\u5740\ncat /proc/net/bonding/bond0\n\nethtool eth0\n\n# jumbo frames\nifconfig bond0 mtu 9000 up\n\n# \u6dfb\u52a0 slave\nifenslave bond0 eth0 eth1 eth2\n# \u79fb\u9664\nifenslave -d bond0 eth1\n# \u8fde\u63a5\nifenslave -c bond0 eth1\n")),Object(i.b)("h2",{id:"\u914d\u7f6e\u6848\u4f8b"},"\u914d\u7f6e\u6848\u4f8b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u5b89\u88c5 bonding \u624d\u80fd\u4f7f\u7528 bond-slaves \u8fd9\u6837\u7684\u6307\u4ee4")),Object(i.b)("h3",{id:"bonding-if-hook"},"bonding if hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'auto eth0\niface eth0 inet manual\n\nauto wlan0\niface wlan0 inet manual\n  # \u53ef\u76f4\u63a5\u8bbe\u7f6e master\n  bond-master eth0\nauto bond0\niface bond0 inet dhcp\n  # \u6240\u6709\u9009\u9879\u4f4d\u4e8e\n  # /sys/class/net/bond0/bonding\n  # \u65e0\n  bond-slaves none\n  # \u6240\u6709 eth\n  bond-slaves all\n  # \u5217\u8868\n  bond-slaves eth0 wlan0\n  # \u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 slaves\n  slaves eth0 wlan0\n\n  # \u4ee5\u4e0b\u9009\u9879\u5747\u53ef\u9009\n  # \u9ed8\u8ba4\u4e3a slaves \u7684\u7b2c\u4e00\u4e2a\n  bond-primary eth0\n  # \u70ed slave\n  bond-active-slave wlan0\n\n  # \u9ed8\u8ba4\n  bond-mode balance-rr\n  bond-miimon 0\n  bond-use-carrier 1\n  bond-updelay 0\n  bond-downdelay 0\n  bond-arp-validate none 0\n  bond-fail-over_mac none 0\n  bond-xmit-hash-policy layer2 0\n  bond-lacp-rate slow 0\n  bond-arp-ip-target ""\n')),Object(i.b)("h3",{id:"\u547d\u4ee4\u63a7\u5236"},"\u547d\u4ee4\u63a7\u5236"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"auto bond0\niface bond0 inet dhcp\n  down 'servicenk set $IFACE down\n  post-down rmmod bonding\n  pre-up modprobe bonding mode=4 miimon=200\n  up 'servicenk set $IFACE up mtu 9000\n  up udevadm trigger\n\nallow-hotplug eth0\niface eth0 inet manual\n  up ifenslave bond0 $IFACE\n  down ifenslave -d bond0 $IFACE 2> /dev/null\n\nallow-hotplug eth1\niface eth1 inet manual\n  up ifenslave bond0 $IFACE\n  down ifenslave -d bond0 $IFACE 2> /dev/null\n")),Object(i.b)("h3",{id:"\u6700\u7b80\u5355\u7684\u914d\u7f6e"},"\u6700\u7b80\u5355\u7684\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"auto bond0\niface bond0 inet static\n    address 192.168.0.2\n    netmask 255.255.255.0\n    gateway 192.168.0.1\n    # specify the ethernet interfaces that should be bonded\n    bond-slaves eth0 eth1 eth2 eth3\n")),Object(i.b)("h3",{id:"\u56db\u7f51\u53e3\u805a\u5408"},"\u56db\u7f51\u53e3\u805a\u5408"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"allow-hotplug eth0\niface eth0 inet manual\n\nallow-hotplug eth1\niface eth1 inet manual\n\nallow-hotplug eth2\niface eth2 inet manual\n\nallow-hotplug eth3\niface eth3 inet manual\n\nauto bond0\niface bond0 inet static\n    address 192.168.1.5\n    netmask 255.255.252.0\n    gateway 192.168.1.1\n    bond-slaves eth0 eth1 eth2 eth3\n    bond-mode active-backup\n    bond-miimon 100\n    bond-downdelay 200\n    bond-updelay 200\n")),Object(i.b)("h3",{id:"\u65e0\u7ebf\u548c\u6709\u7ebf\u805a\u5408"},"\u65e0\u7ebf\u548c\u6709\u7ebf\u805a\u5408"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'allow-hotplug wlan0\niface wlan0 inet manual\n    wpa-ssid "*censored*"\n    wpa-key-mgmt WPA-PSK\n    wpa-group TKIP CCMP\n    wpa-psk *censored*\n    wpa-bridge bond0 # fixes mac address of outgoing packets so that they are consistent\n    bond-master bond0\n    bond-mode active-backup\n    bond-miimon 100 # checks link status every 100 msec\n    bond-give-a-chance 10 # when wlan comes up wait up to 10 seconds for it to \n\nallow-hotplug bond0\niface bond0 inet static\n    address 192.168.178.130\n    netmask 255.255.255.0\n    gateway 192.168.178.1\n    bond-slaves eth0 # automatically brings up eth0 and slaves it to this bond\n    bond-mode active-backup # uses primary if available, otherwise fallback to other\n    bond-primary eth0 # priority to use eth0 when available\n    bond-miimon 100\n')),Object(i.b)("h2",{id:"tree-sysclassnetbond0"},"tree /sys/class/net/bond0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6240\u6709\u4fe1\u606f")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/sys/class/net/bond0\n\u251c\u2500\u2500 addr_assign_type\n\u251c\u2500\u2500 addr_len\n\u251c\u2500\u2500 address\n\u251c\u2500\u2500 bonding\n\u2502\xa0\xa0 \u251c\u2500\u2500 active_slave\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_actor_key\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_actor_sys_prio\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_actor_system\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_aggregator\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_num_ports\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_partner_key\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_partner_mac\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_select\n\u2502\xa0\xa0 \u251c\u2500\u2500 ad_user_port_key\n\u2502\xa0\xa0 \u251c\u2500\u2500 all_slaves_active\n\u2502\xa0\xa0 \u251c\u2500\u2500 arp_all_targets\n\u2502\xa0\xa0 \u251c\u2500\u2500 arp_interval\n\u2502\xa0\xa0 \u251c\u2500\u2500 arp_ip_target\n\u2502\xa0\xa0 \u251c\u2500\u2500 arp_validate\n\u2502\xa0\xa0 \u251c\u2500\u2500 downdelay\n\u2502\xa0\xa0 \u251c\u2500\u2500 fail_over_mac\n\u2502\xa0\xa0 \u251c\u2500\u2500 lacp_rate\n\u2502\xa0\xa0 \u251c\u2500\u2500 lp_interval\n\u2502\xa0\xa0 \u251c\u2500\u2500 mii_status\n\u2502\xa0\xa0 \u251c\u2500\u2500 miimon\n\u2502\xa0\xa0 \u251c\u2500\u2500 min_links\n\u2502\xa0\xa0 \u251c\u2500\u2500 mode\n\u2502\xa0\xa0 \u251c\u2500\u2500 num_grat_arp\n\u2502\xa0\xa0 \u251c\u2500\u2500 num_unsol_na\n\u2502\xa0\xa0 \u251c\u2500\u2500 packets_per_slave\n\u2502\xa0\xa0 \u251c\u2500\u2500 primary\n\u2502\xa0\xa0 \u251c\u2500\u2500 primary_reselect\n\u2502\xa0\xa0 \u251c\u2500\u2500 queue_id\n\u2502\xa0\xa0 \u251c\u2500\u2500 resend_igmp\n\u2502\xa0\xa0 \u251c\u2500\u2500 slaves\n\u2502\xa0\xa0 \u251c\u2500\u2500 tlb_dynamic_lb\n\u2502\xa0\xa0 \u251c\u2500\u2500 updelay\n\u2502\xa0\xa0 \u251c\u2500\u2500 use_carrier\n\u2502\xa0\xa0 \u2514\u2500\u2500 xmit_hash_policy\n\u251c\u2500\u2500 broadcast\n\u251c\u2500\u2500 carrier\n\u251c\u2500\u2500 carrier_changes\n\u251c\u2500\u2500 dev_id\n\u251c\u2500\u2500 dev_port\n\u251c\u2500\u2500 dormant\n\u251c\u2500\u2500 duplex\n\u251c\u2500\u2500 flags\n\u251c\u2500\u2500 gro_flush_timeout\n\u251c\u2500\u2500 ifalias\n\u251c\u2500\u2500 ifindex\n\u251c\u2500\u2500 iflink\n\u251c\u2500\u2500 link_mode\n\u251c\u2500\u2500 lower_eth1 -> ../../../pci0000:00/0000:00:1c.4/0000:02:00.1/net/eth1\n\u251c\u2500\u2500 lower_eth2 -> ../../../pci0000:00/0000:00:1c.4/0000:02:00.2/net/eth2\n\u251c\u2500\u2500 lower_eth3 -> ../../../pci0000:00/0000:00:1c.4/0000:02:00.3/net/eth3\n\u251c\u2500\u2500 mtu\n\u251c\u2500\u2500 name_assign_type\n\u251c\u2500\u2500 netdev_group\n\u251c\u2500\u2500 operstate\n\u251c\u2500\u2500 phys_port_id\n\u251c\u2500\u2500 phys_port_name\n\u251c\u2500\u2500 phys_switch_id\n\u251c\u2500\u2500 power\n\u2502\xa0\xa0 \u251c\u2500\u2500 autosuspend_delay_ms\n\u2502\xa0\xa0 \u251c\u2500\u2500 control\n\u2502\xa0\xa0 \u251c\u2500\u2500 runtime_active_time\n\u2502\xa0\xa0 \u251c\u2500\u2500 runtime_status\n\u2502\xa0\xa0 \u2514\u2500\u2500 runtime_suspended_time\n\u251c\u2500\u2500 proto_down\n\u251c\u2500\u2500 queues\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx-0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 rps_cpus\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 rps_flow_cnt\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx-0\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 byte_queue_limits\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 hold_time\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 inflight\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 limit\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 limit_max\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 limit_min\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tx_maxrate\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tx_timeout\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 xps_cpus\n\u251c\u2500\u2500 speed\n\u251c\u2500\u2500 statistics\n\u2502\xa0\xa0 \u251c\u2500\u2500 collisions\n\u2502\xa0\xa0 \u251c\u2500\u2500 multicast\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_bytes\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_compressed\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_crc_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_dropped\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_fifo_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_frame_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_length_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_missed_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_nohandler\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_over_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 rx_packets\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_aborted_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_bytes\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_carrier_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_compressed\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_dropped\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_fifo_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_heartbeat_errors\n\u2502\xa0\xa0 \u251c\u2500\u2500 tx_packets\n\u2502\xa0\xa0 \u2514\u2500\u2500 tx_window_errors\n\u251c\u2500\u2500 subsystem -> ../../../../class/net\n\u251c\u2500\u2500 tx_queue_len\n\u251c\u2500\u2500 type\n\u2514\u2500\u2500 uevent\n")))}s.isMDXComponent=!0},766:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?r.a.createElement(m,l(l({ref:n},c),{},{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);