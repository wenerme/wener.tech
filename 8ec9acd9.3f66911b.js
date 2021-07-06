(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1114:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(a),m=t,u=d["".concat(l,".").concat(m)]||d[m]||o[m]||r;return a?i.a.createElement(u,s(s({ref:n},p),{},{components:a})):i.a.createElement(u,s({ref:n},p))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},659:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return b}));var t=a(3),i=a(8),r=(a(0),a(1114)),l={id:"wireless",title:"\u65e0\u7ebf\u7f51\u7edc"},s={unversionedId:"ops/network/link/wireless",id:"ops/network/link/wireless",isDocsHomePage:!1,title:"\u65e0\u7ebf\u7f51\u7edc",description:"Tips",source:"@site/notes/ops/network/link/wireless.md",slug:"/ops/network/link/wireless",permalink:"/notes/ops/network/link/wireless",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/link/wireless.md",version:"current",sidebar:"docs",previous:{title:"InfiniBand",permalink:"/notes/ops/network/link/infiniband"},next:{title:"\u79c1\u6709\u7f51\u7edc",permalink:"/notes/ops/network/private/intro"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u535a\u901a b43 \u56fa\u4ef6",id:"\u535a\u901a-b43-\u56fa\u4ef6",children:[]},{value:"iw",id:"iw",children:[{value:"iw help",id:"iw-help",children:[]}]},{value:"wireless-tools",id:"wireless-tools",children:[]},{value:"WPA_supplicant",id:"wpa_supplicant",children:[]},{value:"\u70ed\u70b9",id:"\u70ed\u70b9",children:[]},{value:"wavemon",id:"wavemon",children:[]},{value:"802",id:"802",children:[]},{value:"DBm",id:"dbm",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"adhoc vs ap",id:"adhoc-vs-ap",children:[{value:"WiFi authentication times out",id:"wifi-authentication-times-out",children:[]},{value:"brcmfmac: brcmf_cfg80211_scan: scan error",id:"brcmfmac-brcmf_cfg80211_scan-scan-error",children:[]}]},{value:"\u63a5\u53e3\u80fd\u529b",id:"\u63a5\u53e3\u80fd\u529b",children:[]},{value:"\u6269\u5c55\u7279\u6027",id:"\u6269\u5c55\u7279\u6027",children:[]},{value:"\u7ec4\u5408\u65b9\u5f0f",id:"\u7ec4\u5408\u65b9\u5f0f",children:[]}],p={toc:c};function b(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Linux Kernel Wireless",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wireless.wiki.kernel.org/"},"https://wireless.wiki.kernel.org/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wireless.wiki.kernel.org/en/users/documentation"},"documentation")),Object(r.b)("li",{parentName:"ul"},"iw"),Object(r.b)("li",{parentName:"ul"},"wpa_supplicant"),Object(r.b)("li",{parentName:"ul"},"hostapd"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Connecting_to_a_wireless_access_point"},"Connecting to a wireless access point")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/linux-find-wireless-driver-chipset/"},"Linux Find Wireless Driver Chipset Information")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.cyberciti.biz/tips/linux-find-out-wireless-network-speed-signal-strength.html"},"8 Linux Commands: To Find Out Wireless Network Speed, Signal Strength And Other Information")),Object(r.b)("li",{parentName:"ul"},"NOTE",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u535a\u901a b43 \u56fa\u4ef6\u9700\u8981\u81ea\u5df1\u7f16\u8bd1\u5b89\u88c5")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5e38\u7528\u7684\u65e0\u7ebf\u5de5\u5177\napk add iw wireless-tools wpa_supplicant\n\n# \u5b89\u88c5 pci \u5de5\u5177, busybox \u7684 lspci \u4fe1\u606f\u8f83\u5c11\napk add pciutils\n# \u67e5\u770b\u6709\u6ca1\u6709\u65e0\u7ebf\u63a7\u5236\u5668\nlspci | grep -i network\n\n# \u67e5\u770b\u65e0\u7ebf\u8bbe\u5907\niw list\n\n# \u67e5\u770b\u65e0\u7ebf\u4fe1\u606f\ncat /proc/net/wireless\n\n# \u52a0\u8f7d\u7684\u9a71\u52a8\nreadlink /sys/class/net/wlan0/device/driver\n\n# \u7f51\u7edc\u786c\u4ef6\nlshw -class network\n# \u5185\u6838\u6a21\u5757\nlsmod | grep iwlagn\n")),Object(r.b)("h2",{id:"\u535a\u901a-b43-\u56fa\u4ef6"},"\u535a\u901a b43 \u56fa\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"apk add --allow-untrusted \u7f16\u8bd1\u540e\u7684.apk\napk add b43-fwcutter\nmodprobe b43\necho b43 >> /etc/modules\n\n# \u6b64\u65f6\u5e94\u8be5\u770b\u5f97\u5230\u7f51\u7edc\u8bbe\u5907\niw list\n")),Object(r.b)("h2",{id:"iw"},"iw"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wireless.wiki.kernel.org/en/users/Documentation/iw"},"iw"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u66ff\u4ee3 wireless-tools")))),Object(r.b)("p",null,"monitor\nmanaged ","[also station]","\nwds\nmesh ","[also mp]","\nibss ","[also adhoc]"," To see a description of these please read our modes documentation. ",Object(r.b)("a",{parentName:"p",href:"https://wireless.wiki.kernel.org/en/users/documentation/modes"},"https://wireless.wiki.kernel.org/en/users/documentation/modes")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://wireless.wiki.kernel.org/en/users/documentation/wpa_supplicant"},"https://wireless.wiki.kernel.org/en/users/documentation/wpa_supplicant")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u7269\u7406\u8bbe\u5907\niw dev\n# \u94fe\u8def\u72b6\u6001\niw dev wlan0 link\n# AP \u4fe1\u606f\u7edf\u8ba1\niw dev wlan0 station dump\n# \u7701\u7535\u6a21\u5f0f\niw dev wlan0 set power_save on\n# \u94fe\u63a5\u5230\u7f51\u7edc\niw wlan0 connect foo\n# \u67e5\u770b\u8bbe\u5907\niw list\n# \u70ed\u70b9\u626b\u63cf\niw dev wlan0 scan\n\n# \u4e8b\u4ef6\u76d1\u542c\n# -t tuming\n# -f frames\niw event\n\n# \u8bbe\u7f6e\u8bbe\u5907\u6a21\u5f0f\niw phy phy0 interface add moni0 type monitor\n")),Object(r.b)("h3",{id:"iw-help"},"iw help"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Usage:  iw [options] command\nOptions:\n    --debug     enable netlink debugging\n    --version   show version (4.9)\nCommands:\n    help [command]\n    event [-t|-r] [-f]\n    features\n    commands\n    phy\n    list\n    phy <phyname> info\n    phy <phyname> channels\n    dev\n    dev <devname> info\n    dev <devname> del\n    dev <devname> interface add <name> type <type> [mesh_id <meshid>] [4addr on|off] [flags <flag>*] [addr <mac-addr>]\n    phy <phyname> interface add <name> type <type> [mesh_id <meshid>] [4addr on|off] [flags <flag>*] [addr <mac-addr>]\n    dev <devname> ibss join <SSID> <freq in MHz> [NOHT|HT20|HT40+|HT40-|5MHz|10MHz|80MHz] [fixed-freq] [<fixed bssid>] [beacon-interval <TU>] [basic-rates <rate in Mbps,rate2,...>] [mcast-rate <rate in Mbps>] [key d:0:abcde]\n    dev <devname> ibss leave\n    dev <devname> station dump [-v]\n    dev <devname> station set <MAC address> mesh_power_mode <active|light|deep>\n    dev <devname> station set <MAC address> vlan <ifindex>\n    dev <devname> station set <MAC address> plink_action <open|block>\n    dev <devname> station del <MAC address> [subtype <subtype>] [reason-code <code>]\n    dev <devname> station get <MAC address>\n    dev <devname> survey dump\n    dev <devname> ocb leave\n    dev <devname> ocb join <freq in MHz> <5MHz|10MHz>\n    dev <devname> mesh leave\n    dev <devname> mesh join <mesh ID> [[freq <freq in MHz> <NOHT|HT20|HT40+|HT40-|80MHz>] [basic-rates <rate in Mbps,rate2,...>]], [mcast-rate <rate in Mbps>] [beacon-interval <time in TUs>] [dtim-period <value>] [vendor_sync on|off] [<param>=<value>]*\n    dev <devname> mpath dump\n    dev <devname> mpath set <destination MAC address> next_hop <next hop MAC address>\n    dev <devname> mpath new <destination MAC address> next_hop <next hop MAC address>\n    dev <devname> mpath del <MAC address>\n    dev <devname> mpath get <MAC address>\n    dev <devname> mpp dump\n    dev <devname> mpp get <MAC address>\n    dev <devname> scan [-u] [freq <freq>*] [ies <hex as 00:11:..>] [meshid <meshid>] [lowpri,flush,ap-force] [randomise[=<addr>/<mask>]] [ssid <ssid>*|passive]\n    dev <devname> scan sched_stop\n    dev <devname> scan sched_start [interval <in_msecs> | scan_plans [<interval_secs:iterations>*] <interval_secs>] [delay <in_secs>] [freqs <freq>+] [matches [ssid <ssid>]+]] [active [ssid <ssid>]+|passive] [randomise[=<addr>/<mask>]]\n    dev <devname> scan abort\n    dev <devname> scan trigger [freq <freq>*] [ies <hex as 00:11:..>] [meshid <meshid>] [lowpri,flush,ap-force] [randomise[=<addr>/<mask>]] [ssid <ssid>*|passive]\n    dev <devname> scan dump [-u]\n    phy <phyname> reg get\n    reg get\n    reg set <ISO/IEC 3166-1 alpha2>\n    dev <devname> auth <SSID> <bssid> <type:open|shared> <freq in MHz> [key 0:abcde d:1:6162636465]\n    dev <devname> connect [-w] <SSID> [<freq in MHz>] [<bssid>] [key 0:abcde d:1:6162636465]\n    dev <devname> disconnect\n    dev <devname> link\n    dev <devname> offchannel <freq> <duration>\n    dev <devname> cqm rssi <threshold|off> [<hysteresis>]\n    phy <phyname> wowlan show\n    phy <phyname> wowlan disable\n    phy <phyname> wowlan enable [any] [disconnect] [magic-packet] [gtk-rekey-failure] [eap-identity-request] [4way-handshake] [rfkill-release] [net-detect [interval <in_msecs> | scan_plans [<interval_secs:iterations>*] <interval_secs>] [delay <in_secs>] [freqs <freq>+] [matches [ssid <ssid>]+]] [active [ssid <ssid>]+|passive] [randomise[=<addr>/<mask>]]] [tcp <config-file>] [patterns [offset1+]<pattern1> ...]\n    phy <phyname> coalesce show\n    phy <phyname> coalesce disable\n    phy <phyname> coalesce enable <config-file>\n    dev <devname> roc start <freq> <time in ms>\n    wdev <idx> p2p stop\n    wdev <idx> p2p start\n    dev <devname> vendor recvbin <oui> <subcmd> <filename|-|hex data>\n    dev <devname> vendor recv <oui> <subcmd> <filename|-|hex data>\n    dev <devname> vendor send <oui> <subcmd> <filename|-|hex data>\n    phy <phyname> set antenna <bitmap> | all | <tx bitmap> <rx bitmap>\n    dev <devname> set txpower <auto|fixed|limit> [<tx power in mBm>]\n    phy <phyname> set txpower <auto|fixed|limit> [<tx power in mBm>]\n    phy <phyname> set distance <auto|distance>\n    phy <phyname> set coverage <coverage class>\n    phy <phyname> set netns { <pid> | name <nsname> }\n    phy <phyname> set retry [short <limit>] [long <limit>]\n    phy <phyname> set rts <rts threshold|off>\n    phy <phyname> set frag <fragmentation threshold|off>\n    dev <devname> set channel <channel> [HT20|HT40+|HT40-]\n    phy <phyname> set channel <channel> [HT20|HT40+|HT40-]\n    dev <devname> set freq <freq> [HT20|HT40+|HT40-]\n    dev <devname> set freq <control freq> [20|40|80|80+80|160] [<center freq 1>] [<center freq 2>]\n    phy <phyname> set freq <freq> [HT20|HT40+|HT40-]\n    phy <phyname> set name <new name>\n    dev <devname> set mcast_rate <rate in Mbps>\n    dev <devname> set peer <MAC address>\n    dev <devname> set noack_map <map>\n    dev <devname> set 4addr <on|off>\n    dev <devname> set type <type>\n    dev <devname> set meshid <meshid>\n    dev <devname> set monitor <flag>*\n    dev <devname> set mesh_param <param>=<value> [<param>=<value>]*\n    dev <devname> set power_save <on|off>\n    dev <devname> set bitrates [legacy-<2.4|5> <legacy rate in Mbps>*] [ht-mcs-<2.4|5> <MCS index>*] [vht-mcs-<2.4|5> <NSS:MCSx,MCSy... | NSS:MCSx-MCSy>*] [sgi-2.4|lgi-2.4] [sgi-5|lgi-5]\n    dev <devname> get mesh_param [<param>]\n    dev <devname> get power_save <param>\n\nCommands that use the netdev ('dev') can also be given the\n'wdev' instead to identify the device.\n\nYou can omit the 'phy' or 'dev' if the identification is unique,\ne.g. \"iw wlan0 info\" or \"iw phy0 info\". (Don't when scripting.)\n\nDo NOT screenscrape this tool, we don't consider its output stable.\n")),Object(r.b)("h2",{id:"wireless-tools"},"wireless-tools"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.hpl.hp.com/personal/Jean_Tourrilhes/Linux/Tools.html"},"wireless-tools"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5f88\u4e45\u6ca1\u6709\u66f4\u65b0\u4e86"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=wireless-tools&arch=x86_64&repo=main"},"contents")),Object(r.b)("li",{parentName:"ul"},"iwconfig \u57fa\u672c\u65e0\u7ebf\u53c2\u6570\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"iwlist \u5217\u8868\u626b\u63cf"),Object(r.b)("li",{parentName:"ul"},"iwspy \u83b7\u53d6\u6bcf\u4e2a\u8282\u70b9\u7684\u4fe1\u53f7\u5f3a\u5ea6"),Object(r.b)("li",{parentName:"ul"},"iwpriv \u7ba1\u7406\u65e0\u7ebf\u6269\u5c55\u76f8\u5173\u7684\u9a71\u52a8"),Object(r.b)("li",{parentName:"ul"},"ifrename \u7f51\u5361\u547d\u540d")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u65e0\u7ebf\u4fe1\u606f\niwconfig wlan0\n")),Object(r.b)("h2",{id:"wpa_supplicant"},"WPA_supplicant"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://raspberrypi.stackexchange.com/q/11631/38420"},"How to setup multiple WiFi networks?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/WPA_supplicant"},"WPA_supplicant"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"man ",Object(r.b)("a",{parentName:"li",href:"https://linux.die.net/man/8/wpa_supplicant"},"wpa_supplicant")),Object(r.b)("li",{parentName:"ul"},"man ",Object(r.b)("a",{parentName:"li",href:"https://linux.die.net/man/5/wpa_supplicant.conf"},"wpa_supplicant.conf")))),Object(r.b)("li",{parentName:"ul"},"man ",Object(r.b)("a",{parentName:"li",href:"https://linux.die.net/man/8/iwconfig"},"iwconfig")),Object(r.b)("li",{parentName:"ul"},"man ",Object(r.b)("a",{parentName:"li",href:"https://linux.die.net/man/8/iwlist"},"iwlist"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u7f51\u5361\nifconfig wlan0 up\n# \u626b\u63cf\u70ed\u70b9\niwlist scan\n# \u751f\u6210\u914d\u7f6e\u6587\u4ef6 wpa.conf\nwpa_passphrase \u70ed\u70b9\u540d\u5b57 \u5bc6\u7801 > wpa.conf\n# \u53ef\u6dfb\u52a0\u591a\u4e2a\u914d\u7f6e\nwpa_passphrase \u70ed\u70b9\u540d\u5b57 \u5bc6\u7801 >> wpa.conf\n\n# \u5c06\u914d\u7f6e\u653e\u5230\u670d\u52a1\u914d\u7f6e\u4e0b\nmkdir -p /etc/wpa_supplicant\nchmod 750 /etc/wpa_supplicant\ncp wpa.conf /etc/wpa_supplicant/wpa_supplicant.conf\n\n# \u542f\u52a8 wpa \u670d\u52a1\nrc-service wpa_supplicant start\n# \u5f00\u673a\u542f\u52a8\nrc-update add wpa_supplicant boot\n\n# \u4fee\u6539\u7f51\u7edc\u914d\u7f6e, \u6dfb\u52a0 wlan0\n# auto wlan0\n# iface wlan0 inet dhcp\nnano /etc/network/interface\n\n\n# \u8c03\u8bd5\n# ===============\n# \u5728\u524d\u53f0\u8fd0\u884c\u4ee5\u4fbf\u8c03\u8bd5\nwpa_supplicant -Dwext -iwlan0 -c wpa.conf\n# busybox \u81ea\u5e26\u4e86 udhcpc\nudhcpc -fqi wlan0\n")),Object(r.b)("h2",{id:"\u70ed\u70b9"},"\u70ed\u70b9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/software_access_point"},"https://wiki.archlinux.org/index.php/software_access_point")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://wireless.kernel.org/en/users/Documentation/hostapd"},"http://wireless.kernel.org/en/users/Documentation/hostapd"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Supported interface modes:\n#   AP - \u652f\u6301 AP \u6a21\u5f0f\niw list\n\napk add hostapd\n\n# \u5982\u679c\u5df2\u7ecf\u8fde\u63a5\u4e86\u70ed\u70b9\uff0c\u786e\u8ba4\u5148\u5173\u95ed\nservice wpa_supplicant stop\n\n# \u6d4b\u8bd5\u914d\u7f6e\ncat <<CONF > test-ap.conf\ninterface=wlan0\ndriver=nl80211\nssid=test-ap\nchannel=1\nCONF\n# \u542f\u52a8\u540e\u80fd\u641c\u5230\u70ed\u70b9\nhostapd ./test-ap.conf\n\n# \u6d4b\u8bd5\u914d\u7f6e\ncat <<CONF > my-ap.conf\ninterface=wlan0\ndriver=nl80211\nssid=wener-ap\nhw_mode=n\nchannel=6\nmacaddr_acl=0\nauth_algs=1\nignore_broadcast_ssid=0\nwpa=3\nwpa_passphrase=aaaaaaaa\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP\nCONF\n\nip link set wlan0 down\nip addr flush dev wlan0\nip link set wlan0 up\nip addr add 192.168.100.1/24 dev wlan0\n\n# \u542f\u52a8\u70ed\u70b9\nhostapd ./my-ap.conf\n# \u542f\u52a8 DHCP\ndnsmasq\n\niptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\niptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT\niptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT\n")),Object(r.b)("h2",{id:"wavemon"},"wavemon"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7f51\u7edc\u4fe1\u53f7\u76d1\u63a7"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/uoaerg/wavemon"},"uoaerg/wavemon"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"apk add wavemon\nwavemon\n")),Object(r.b)("h2",{id:"802"},"802"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IEEE_802.11"},"IEEE 802.11"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"802.11"),Object(r.b)("th",{parentName:"tr",align:null},"Mb/c"),Object(r.b)("th",{parentName:"tr",align:null},"MHz/c"),Object(r.b)("th",{parentName:"tr",align:null},"Max c"),Object(r.b)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u9891\u7387 (MHz)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"a"),Object(r.b)("td",{parentName:"tr",align:null},"54"),Object(r.b)("td",{parentName:"tr",align:null},"20"),Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"3.7/5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"b"),Object(r.b)("td",{parentName:"tr",align:null},"11"),Object(r.b)("td",{parentName:"tr",align:null},"20"),Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"2.4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g"),Object(r.b)("td",{parentName:"tr",align:null},"54"),Object(r.b)("td",{parentName:"tr",align:null},"20"),Object(r.b)("td",{parentName:"tr",align:null},"A"),Object(r.b)("td",{parentName:"tr",align:null},"2.4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"n"),Object(r.b)("td",{parentName:"tr",align:null},"150"),Object(r.b)("td",{parentName:"tr",align:null},"20/40"),Object(r.b)("td",{parentName:"tr",align:null},"4"),Object(r.b)("td",{parentName:"tr",align:null},"2.4/5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ac"),Object(r.b)("td",{parentName:"tr",align:null},"866"),Object(r.b)("td",{parentName:"tr",align:null},"20/40/80/160"),Object(r.b)("td",{parentName:"tr",align:null},"8"),Object(r.b)("td",{parentName:"tr",align:null},"5")))),Object(r.b)("p",null,"Mb/c \u5355\u901a\u9053\u6700\u5927\u901f\u5ea6\nMHz/c \u901a\u9053\u5bbd\u5ea6"),Object(r.b)("h2",{id:"dbm"},"DBm"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://support.metageek.com/hc/en-us/articles/201955754-Understanding-WiFi-Signal-Strength"},"Understanding WiFi Signal Strength")),Object(r.b)("h2",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"adhoc-vs-ap"},"adhoc vs ap"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"adhoc",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6ca1\u6709\u63a5\u5165\u70b9 - P2P - \u70b9\u5bf9\u70b9\u8fde\u63a5"),Object(r.b)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u76f8\u5f53\u4e8e\u8def\u7531"),Object(r.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u84dd\u7259"),Object(r.b)("li",{parentName:"ul"},"\u7528\u4e8e\u4e34\u65f6\u4e92\u8054"),Object(r.b)("li",{parentName:"ul"},"Wi-Fi Direct \u57fa\u4e8e adhoc"))),Object(r.b)("li",{parentName:"ul"},"ap - Infrastructure",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6865\u63a5\u7f51\u7edc"),Object(r.b)("li",{parentName:"ul"},"\u5de5\u4f5c\u6027\u8d28\u7c7b\u4f3c\u4e8e\u4ea4\u6362\u673a"),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u901a\u8fc7\u4e00\u4e2a\u8282\u70b9\u8fdb\u884c\u5206\u53d1\u4f20\u8f93"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wireless_access_point#Wireless_access_point_vs._ad_hoc_network"},"Wireless access point vs. ad hoc network"))),Object(r.b)("h3",{id:"wifi-authentication-times-out"},"WiFi authentication times out"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://superuser.com/questions/911635"},"WiFi authentication times out"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'echo "options iwlwifi 11n_disable=1 wd_disable=1" | sudo tee /etc/modprobe.d/iwlwifi.conf\n')),Object(r.b)("h3",{id:"brcmfmac-brcmf_cfg80211_scan-scan-error"},"brcmfmac: brcmf_cfg80211_scan: scan error"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"brcmfmac: brcmf_run_escan: error (-52)\nbrcmfmac: brcmf_cfg80211_scan: scan error (-52)\nbrcmfmac: brcmf_escan_timeout: timer expired\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"echo 'options 8192cu rtw_power_mgnt=0 rtw_enusbss=0' >> /etc/modprobe.d/8192cu.conf\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/raspberrypi/linux/issues/1342"},"#1342"))),Object(r.b)("h2",{id:"\u63a5\u53e3\u80fd\u529b"},"\u63a5\u53e3\u80fd\u529b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IBSS"),Object(r.b)("li",{parentName:"ul"},"managed"),Object(r.b)("li",{parentName:"ul"},"AP"),Object(r.b)("li",{parentName:"ul"},"AP/VLAN"),Object(r.b)("li",{parentName:"ul"},"monitor"),Object(r.b)("li",{parentName:"ul"},"P2P-client"),Object(r.b)("li",{parentName:"ul"},"P2P-GO"),Object(r.b)("li",{parentName:"ul"},"P2P-device"),Object(r.b)("li",{parentName:"ul"},"mesh point")),Object(r.b)("h2",{id:"\u6269\u5c55\u7279\u6027"},"\u6269\u5c55\u7279\u6027"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"}),Object(r.b)("li",{parentName:"ul"}),Object(r.b)("li",{parentName:"ul"},"[ SCAN_START_TIME ]",": scan start timestamp"),Object(r.b)("li",{parentName:"ul"},"[ BSS_PARENT_TSF ]",": BSS last beacon/probe TSF"),Object(r.b)("li",{parentName:"ul"},"[ SET_SCAN_DWELL ]",": scan dwell setting"),Object(r.b)("li",{parentName:"ul"},"[ FILS_STA ]",": STA FILS (Fast Initial Link Setup)"),Object(r.b)("li",{parentName:"ul"},"[ CONTROL_PORT_OVER_NL80211 ]",": control port over nl80211"),Object(r.b)("li",{parentName:"ul"},"[ TXQS ]",": FQ-CoDel-enabled intermediate TXQs")),Object(r.b)("h2",{id:"\u7ec4\u5408\u65b9\u5f0f"},"\u7ec4\u5408\u65b9\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"{ managed } <= 1"),Object(r.b)("li",{parentName:"ul"},"{ AP, P2P-client, P2P-GO } <= 1"),Object(r.b)("li",{parentName:"ul"},"{ P2P-device } <= 1"),Object(r.b)("li",{parentName:"ul"},"total <= 3"),Object(r.b)("li",{parentName:"ul"},"channels <= 2",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5141\u8bb8\u5de5\u4f5c\u5728\u4e0d\u540c\u4fe1\u9053")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u865a\u62df\u7f51\u53e3 - ap+sta\niw dev wlan0 interface add wlan0_sta type managed\niw dev wlan0 interface add wlan0_ap type managed\n")))}b.isMDXComponent=!0}}]);