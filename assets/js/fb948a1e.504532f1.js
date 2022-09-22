"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[77553],{49613:function(e,n,s){s.d(n,{Zo:function(){return c},kt:function(){return y}});var t=s(59496);function i(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){i(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function m(e,n){if(null==e)return{};var s,t,i=function(e,n){if(null==e)return{};var s,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var p=t.createContext({}),o=function(e){var n=t.useContext(p),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},c=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var s=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=o(s),y=i,O=u["".concat(p,".").concat(y)]||u[y]||l[y]||r;return s?t.createElement(O,a(a({ref:n},c),{},{components:s})):t.createElement(O,a({ref:n},c))}));function y(e,n){var s=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=s.length,a=new Array(r);a[0]=u;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m.mdxType="string"==typeof e?e:i,a[1]=m;for(var o=2;o<r;o++)a[o]=s[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},59623:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return l}});var t=s(96600),i=s(27279),r=(s(59496),s(49613)),a=["components"],m={id:"net-snmp",title:"NetSNMP"},p="NetSNMP",o={unversionedId:"service/network/net-snmp",id:"service/network/net-snmp",title:"NetSNMP",description:"Tips",source:"@site/../notes/service/network/net-snmp.md",sourceDirName:"service/network",slug:"/service/network/net-snmp",permalink:"/notes/service/network/net-snmp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/net-snmp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"net-snmp",title:"NetSNMP"},sidebar:"docs",previous:{title:"nebula",permalink:"/notes/service/network/nebula"},next:{title:"Network Awesome",permalink:"/notes/service/network/network-awesome"}},c={},l=[{value:"Tips",id:"tips",level:2},{value:"EdgeOS system",id:"edgeos-system",level:2},{value:"unifi system",id:"unifi-system",level:2}],u={toc:l};function y(e){var n=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"netsnmp"},"NetSNMP"),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.net-snmp.org"},"net-snmp"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"wikipedia ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Net-SNMP"},"net-snmp")),(0,r.kt)("li",{parentName:"ul"},"alpine ",(0,r.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/net-snmp"},"net-snmp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Snmpd"},"snmpd")))),(0,r.kt)("li",{parentName:"ul"},"\u7248\u672c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getnext"))),(0,r.kt)("li",{parentName:"ul"},"2c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"buildget"))),(0,r.kt)("li",{parentName:"ul"},"3 - \u52a0\u5bc6\u901a\u4fe1\u3001\u8ba4\u8bc1"))),(0,r.kt)("li",{parentName:"ul"},"/usr/share/snmp/mibs"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"unifi \u63a7\u5236\u5668\u542f\u7528 snmp \u662f\u542f\u7528 AP \u7684 snmp \u4e0d\u662f\u81ea\u5df1\u7684")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u626b\u63cf\u6709 SNMP \u7684\u8bbe\u5907\nsudo apk add nmap nmap-scripts\nsudo nmap -sU -p 161 --script default,snmp-sysdescr 192.169.1.0/24\n\napk add net-snmp net-snmp-tools\n\n# SNMP \u914d\u7f6e\u76ee\u5f55\nnet-snmp-config --snmpconfpath\n\n# snmpv1 \u904d\u5386\u7cfb\u7edf\u4fe1\u606f\nsnmpwalk -Os -c public -v 1 192.168.1.1 system\n\n# ipv6\nsnmpwalk -v2c -c public udp6:[2001:0db8:85a3:0:0:8a2e:0370:99]:161 system\n\n# snmpv3\nsnmpwalk -v 3 -u joe -l authNoPriv -A joe12 sys1 system\n\n#\nsnmpget -c public sys1 system.sysDescr.0\n# ICMP object (OID=56.1.1.1.1)\nsnmpget -c public -v 2c sys1 .1.3.6.1.2.1.56.1.1.1.1\n\n#\nsnmpbulkget -v2c -Cn1 -Cr3 -Os -c public sys1 system ifTable\n# IPv6 object (OID=55.1)\nsnmpbulkget -c public -v 2c 192.0.2.19 .1.3.6.1.2.1.55.1\n\n#\nsnmpbulkwalk -v2c -Os -c public sys1 system\n# udp tcp uptime interface\nsnmpbulkwalk -v2c -c public  192.0.2.19 udp\n\n# \u5f00\u53d1\napk add net-snmp-dev\n# \u53c2\u6570\nnet-snmp-config --agent-libs\n")),(0,r.kt)("h2",{id:"edgeos-system"},"EdgeOS system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ snmpwalk -Os -c public -v 1 192.168.1.1 system\nsysDescr.0 = STRING: EdgeOS v2.0.1.5174690.190312.1614\nsysObjectID.0 = OID: enterprises.41112.1.5\nsysUpTimeInstance = Timeticks: (3210) 0:00:32.10\nsysContact.0 = STRING: root\nsysName.0 = STRING: ubnt\nsysLocation.0 = STRING: Unknown\nsysServices.0 = INTEGER: 14\nsysORLastChange.0 = Timeticks: (14) 0:00:00.14\nsysORID.1 = OID: snmpMPDCompliance\nsysORID.2 = OID: usmMIBCompliance\nsysORID.3 = OID: snmpFrameworkMIBCompliance\nsysORID.4 = OID: snmpMIB\nsysORID.5 = OID: vacmBasicGroup\nsysORID.6 = OID: tcpMIB\nsysORID.7 = OID: ip\nsysORID.8 = OID: udpMIB\nsysORID.9 = OID: snmpNotifyFullCompliance\nsysORID.10 = OID: notificationLogMIB\nsysORDescr.1 = STRING: The MIB for Message Processing and Dispatching.\nsysORDescr.2 = STRING: The management information definitions for the SNMP User-based Security Model.\nsysORDescr.3 = STRING: The SNMP Management Architecture MIB.\nsysORDescr.4 = STRING: The MIB module for SNMPv2 entities\nsysORDescr.5 = STRING: View-based Access Control Model for SNMP.\nsysORDescr.6 = STRING: The MIB module for managing TCP implementations\nsysORDescr.7 = STRING: The MIB module for managing IP and ICMP implementations\nsysORDescr.8 = STRING: The MIB module for managing UDP implementations\nsysORDescr.9 = STRING: The MIB modules for managing SNMP Notification, plus filtering.\nsysORDescr.10 = STRING: The MIB module for logging SNMP Notifications.\nsysORUpTime.1 = Timeticks: (11) 0:00:00.11\nsysORUpTime.2 = Timeticks: (11) 0:00:00.11\nsysORUpTime.3 = Timeticks: (11) 0:00:00.11\nsysORUpTime.4 = Timeticks: (13) 0:00:00.13\nsysORUpTime.5 = Timeticks: (13) 0:00:00.13\nsysORUpTime.6 = Timeticks: (13) 0:00:00.13\nsysORUpTime.7 = Timeticks: (13) 0:00:00.13\nsysORUpTime.8 = Timeticks: (13) 0:00:00.13\nsysORUpTime.9 = Timeticks: (14) 0:00:00.14\nsysORUpTime.10 = Timeticks: (14) 0:00:00.14\n")),(0,r.kt)("h2",{id:"unifi-system"},"unifi system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sysDescr.0 = STRING: UAP-AC-Lite 4.3.20.11298\nsysObjectID.0 = OID: netSnmpAgentOIDs.10\nsysUpTimeInstance = Timeticks: (35927661) 4 days, 3:47:56.61\nsysContact.0 = STRING: root@localhost\nsysName.0 = STRING: D\nsysLocation.0 = STRING: Unknown\nsysServices.0 = INTEGER: 79\nsysORLastChange.0 = Timeticks: (67) 0:00:00.67\nsysORID.1 = OID: ip\nsysORID.2 = OID: snmpMIB\nsysORID.3 = OID: udpMIB\nsysORID.4 = OID: vacmBasicGroup\nsysORID.5 = OID: snmpFrameworkMIBCompliance\nsysORID.6 = OID: snmpMPDCompliance\nsysORID.7 = OID: usmMIBCompliance\nsysORID.8 = OID: transmission.131\nsysORDescr.1 = STRING: The MIB module for managing IP and ICMP implementations\nsysORDescr.2 = STRING: The MIB module for SNMPv2 entities\nsysORDescr.3 = STRING: The MIB module for managing UDP implementations\nsysORDescr.4 = STRING: View-based Access Control Model for SNMP.\nsysORDescr.5 = STRING: The SNMP Management Architecture MIB.\nsysORDescr.6 = STRING: The MIB for Message Processing and Dispatching.\nsysORDescr.7 = STRING: The management information definitions for the SNMP User-based Security Model.\nsysORDescr.8 = STRING: RFC 2667 TUNNEL-MIB implementation for Linux 2.2.x kernels.\nsysORUpTime.1 = Timeticks: (35) 0:00:00.35\nsysORUpTime.2 = Timeticks: (35) 0:00:00.35\nsysORUpTime.3 = Timeticks: (35) 0:00:00.35\nsysORUpTime.4 = Timeticks: (35) 0:00:00.35\nsysORUpTime.5 = Timeticks: (35) 0:00:00.35\nsysORUpTime.6 = Timeticks: (35) 0:00:00.35\nsysORUpTime.7 = Timeticks: (36) 0:00:00.36\nsysORUpTime.8 = Timeticks: (67) 0:00:00.67\n")))}y.isMDXComponent=!0}}]);