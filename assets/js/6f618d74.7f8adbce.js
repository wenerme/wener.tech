"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6518],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),o=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=o(n),d=a,N=c["".concat(m,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(N,l(l({ref:e},u),{},{components:n})):r.createElement(N,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90137:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"SNMP MIB"},m=void 0,o={unversionedId:"service/network/snmp-mib",id:"service/network/snmp-mib",isDocsHomePage:!1,title:"SNMP MIB",description:"- \u53c2\u8003",source:"@site/notes/service/network/snmp-mib.md",sourceDirName:"service/network",slug:"/service/network/snmp-mib",permalink:"/notes/service/network/snmp-mib",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/snmp-mib.md",tags:[],version:"current",frontMatter:{title:"SNMP MIB"},sidebar:"docs",previous:{title:"\u7f51\u7edc\u670d\u52a1",permalink:"/notes/service/network/README"},next:{title:"Squid",permalink:"/notes/service/network/squid"}},u=[{value:"General",id:"general",children:[]},{value:"Printer",id:"printer",children:[]},{value:"HOST-RESOURCES-MIB",id:"host-resources-mib",children:[]},{value:"UCD-SNMP-MIB",id:"ucd-snmp-mib",children:[]},{value:"UBNT",id:"ubnt",children:[]}],s={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.mibdepot.com"},"mibDepot")," - Free SNMP MIB Search Engine for SNMP MIBs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prometheus/snmp_exporter/blob/main/generator/generator.yml"},"prometheus/snmp_exporter/generator/generator.yml"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"net-snmp-config --default-mibdirs\nmkdir -p ~/.snmp/mibs\n# --create-dirs\ncurl --output-dir ~/.snmp/mibs -O ftp://ftp.cisco.com/pub/mibs/v2/CISCO-SMI.my\ncurl --output-dir ~/.snmp/mibs -O ftp://ftp.cisco.com/pub/mibs/v2/CISCO-RHINO-MIB.my\n\nsnmptranslate -m +CISCO-RHINO-MIB -IR -On ciscoLS1010ChassisFanLed\nsnmptranslate -On CISCO-RHINO-MIB::ciscoLS1010ChassisFanLed\n\n# mibs +ALL\ncat <<CONF >> $HOME/.snmp/snmp.conf\nmibs +CISCO-RHINO-MIB\nCONF\n\n# env\nMIBS=+CISCO-RHINO-MIB:SOME-OTHER-SPIFFY-MIB\nexport MIBS\n")),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sysLocation ",(0,i.kt)("a",{parentName:"li",href:"https://www.alvestrand.no/objectid/1.3.6.1.2.1.1.6.html"},"https://www.alvestrand.no/objectid/1.3.6.1.2.1.1.6.html"))),(0,i.kt)("h2",{id:"printer"},"Printer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Printer MIB v2 ",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc3805"},"https://tools.ietf.org/html/rfc3805")),(0,i.kt)("li",{parentName:"ul"},"Printer MIB ",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc1759"},"https://tools.ietf.org/html/rfc1759"))),(0,i.kt)("h2",{id:"host-resources-mib"},"HOST-RESOURCES-MIB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.oidview.com/mibs/0/HOST-RESOURCES-MIB.html"},"HOST-RESOURCES-MIB"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u8fd0\u884c\u60c5\u51b5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"hrProcessorLoad=1.3.6.1.2.1.25.3.3 CPU %"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.oidview.com/mibs/0/HOST-RESOURCES-TYPES.html"},"http://www.oidview.com/mibs/0/HOST-RESOURCES-TYPES.html")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2790"},"rfc2790"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"snmpwalk -Os -c public -v 2c 192.168.1.1 host\n# \u6216\nsnmpwalk -Os -c public -v 2c 192.168.1.1 1.3.6.1.2.1.25\n")),(0,i.kt)("h2",{id:"ucd-snmp-mib"},"UCD-SNMP-MIB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.oidview.com/mibs/2021/UCD-SNMP-MIB.html"},"UCD-SNMP-MIB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.debianadmin.com/linux-snmp-oids-for-cpumemory-and-disk-statistics.html"},"http://www.debianadmin.com/linux-snmp-oids-for-cpumemory-and-disk-statistics.html"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"oid"),(0,i.kt)("th",{parentName:"tr",align:null},"desc"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.1"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.1"),(0,i.kt)("td",{parentName:"tr",align:null},"1min load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.2"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.2"),(0,i.kt)("td",{parentName:"tr",align:null},"5min load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UCD-SNMP-MIB::laLoad.3"),(0,i.kt)("td",{parentName:"tr",align:null},"1.3.6.1.4.1.2021.10.1.3.3"),(0,i.kt)("td",{parentName:"tr",align:null},"15min load")))),(0,i.kt)("h2",{id:"ubnt"},"UBNT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.circitor.fr/Mibs/Html/U/UBNT-UniFi-MIB.php"},"UBNT UniFi MIB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://dl.ubnt-ut.com/snmp/UBNT-MIB"},"http://dl.ubnt-ut.com/snmp/UBNT-MIB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB"},"http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB")),(0,i.kt)("li",{parentName:"ul"},"unifiIfRxBytes \u4e3a 802.3 - ethternet"),(0,i.kt)("li",{parentName:"ul"},"unifiVapTxBytes \u4e3a 802.11 - \u65e0\u7ebf"),(0,i.kt)("li",{parentName:"ul"},"ng - 2.4 GHz"),(0,i.kt)("li",{parentName:"ul"},"na/ac - 5 GHz"),(0,i.kt)("li",{parentName:"ul"},"\u5e38\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sysUpTime"),(0,i.kt)("li",{parentName:"ul"},"interfaces"),(0,i.kt)("li",{parentName:"ul"},"ifXTable"),(0,i.kt)("li",{parentName:"ul"},"1.3.6.1.4.1.41112.1.4 # ubntAirMAX"),(0,i.kt)("li",{parentName:"ul"},"1.3.6.1.4.1.41112.1.6 # ubntUniFi")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"li"},"\u9ad8\u6027\u80fd\u8bbe\u5907")," \u9009\u9879\u4f1a\u5bfc\u81f4 unifiVapNumStations \u9519\u8bef\u8ba1\u6570",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ec5\u5c06\u9ad8\u6027\u80fd\u5ba2\u6237\u7aef\u8fde\u63a5\u5230 5G"),(0,i.kt)("li",{parentName:"ul"},"unifiVapNumStations.0 \u548c unifiVapNumStations.1 \u8fd4\u56de\u76f8\u540c\u6570\u503c - guest \u548c user")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --output-dir ~/.snmp/mibs -O http://dl.ubnt-ut.com/snmp/UBNT-MIB\ncurl --output-dir ~/.snmp/mibs -O http://dl.ubnt-ut.com/snmp/UBNT-UniFi-MIB\n\nsnmpwalk -v 2c -c public -m +UBNT-UniFi-MIB 192.168.1.1 1.3.6.1.4.1.41112.1.6\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'unifiVapEssId * on(unifiVapIndex) group_right(unifiVapEssId) (unifiVapRadio * on(unifiVapIndex) group_right(unifiVapRadio) unifiVapNumStations)\n\nunifiVapEssId{instance="$instance"} * on(unifiVapIndex) group_right(unifiVapEssId) (unifiVapRadio{instance="$instance"}  * on(unifiVapIndex) group_right(unifiVapRadio)  unifiVapNumStations{instance="$instance"})\n')))}c.isMDXComponent=!0}}]);