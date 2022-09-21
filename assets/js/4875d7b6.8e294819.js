"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91552],{35624:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),p=["components"],i={title:"mDNS \u670d\u52a1\u5b9a\u4e49"},d=void 0,o={unversionedId:"network/mdns-sd",id:"network/mdns-sd",title:"mDNS \u670d\u52a1\u5b9a\u4e49",description:"- services.dns-sd._udp",source:"@site/notes/network/mdns-sd.md",sourceDirName:"network",slug:"/network/mdns-sd",permalink:"/notes/network/mdns-sd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/network/mdns-sd.md",tags:[],version:"current",frontMatter:{title:"mDNS \u670d\u52a1\u5b9a\u4e49"},sidebar:"docs",previous:{title:"InfiniBand",permalink:"/notes/network/link/infiniband"},next:{title:"mDNS",permalink:"/notes/network/mdns"}},m={},u=[{value:"macOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2},{value:"services",id:"services",level:2},{value:"extra",id:"extra",level:3}],k={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_services._dns-sd._udp")),(0,l.kt)("li",{parentName:"ul"},"Linux avahi"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6763"},"rfc6763")," DNS-Based Service Discovery"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/bonjour/printing-specification/bonjourprinting-1.2.1.pdf"},"Bonjour Printing Specification")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.dns-sd.org/"},"http://www.dns-sd.org/"))))),(0,l.kt)("h2",{id:"macos"},"macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u66b4\u9732\u670d\u52a1\ndns-sd -R "My test server with metrics-endpoint" _prometheus-http._tcp. . 9000 path=/metrics\n# \u626b\u63cf\ndns-sd -B\n# \u6240\u6709\u670d\u52a1\ndns-sd -B _services._dns-sd._udp local.\n# \u67e5\u627e\u6253\u5370\u673a\ndns-sd -B _ipp._tcp local.\n# \u67e5\u770b\u5185\u5bb9\u91cc\u7684 adminurl\ndns-sd -Z _ipp._tcp local.\n# \u83b7\u53d6 IP\ndns-sd -Gv4v6 LenovoAB66CD.local.\n\n# \u57df\u540d zone \u683c\u5f0f\n# PTR SRV TXT\ndns-sd -Z\n')),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\napk add avahi avahi-tools\nservice avahi-daemon start\n\navahi-browse --all --ignore-local --resolve --terminate\n# \u53ea\u641c\u7d22 ssh \u4e14\u663e\u793a ip\navahi-browse _ssh._tcp -tr\n")),(0,l.kt)("h2",{id:"services"},"services"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"desc/txt"),(0,l.kt)("th",{parentName:"tr",align:null},"devices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_adisk")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_afpovertcp._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"548"),(0,l.kt)("td",{parentName:"tr",align:null},"AFP"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_airkan._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"6088"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7c73\u76d2\u5b50,milink",(0,l.kt)("br",null),'"mac=" "music_version=1.0" "platform_id=205" "prottext=Airkan Protocol Version 1.5.17" "protver=16777984" "scrnh=720" "scrnw=1280" "photoport=6089"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_airplay._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"52266/7000"),(0,l.kt)("td",{parentName:"tr",align:null},"AirePlay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7c73\u76d2\u5b50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_burn")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_CGI")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_companion-link._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"49282"),(0,l.kt)("td",{parentName:"tr",align:null},'"rpBA=00:00:00:00:00:00" "rpHI=000000000000" "rpAD=000000000000" "rpHA=000000000000" "rpVr=195.2" "rpFl=0x30000" "rpHN=000000000000"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_device-info._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"model=Xserve")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_http._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"80"),(0,l.kt)("td",{parentName:"tr",align:null},"path=/"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ipp._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"631"),(0,l.kt)("td",{parentName:"tr",align:null},'"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,l.kt)("a",{parentName:"td",href:"http://RNP00.local/%22"},'http://RNP00.local/"'),' "priority=30" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "rp=printer" "qtotal=1" "txtvers=1"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_ipps")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_leboremote._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"52266"),(0,l.kt)("td",{parentName:"tr",align:null},'"hstv=320.00" "hmd=HappyCast3.2" "etv=1" "atv=0" "htv=1" "vv=2" "appInfo=0" "ver=2.0" "u=" "packagename=com.xiaomi.mitv.smartshare" "lebofeature=223" "feature=223" "channel=LEBO-APK--60013-19516" "mirror=7100" "devicemac=" "lelinkport=52266" "remote=52266" "airplay=52266" "raop=52266" "h=1080" "w=1920" "version=3.2" "port=-1"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_miio")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pdl-datastream._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"9100"),(0,l.kt)("td",{parentName:"tr",align:null},'"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,l.kt)("a",{parentName:"td",href:"http://RNP00.local/%22"},'http://RNP00.local/"'),' "priority=10" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "qtotal=1" "txtvers=1"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_pdl-datastream")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_printer._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"515"),(0,l.kt)("td",{parentName:"tr",align:null},'"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,l.kt)("a",{parentName:"td",href:"http://RNP00.local/%22"},'http://RNP00.local/"'),' "priority=20" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "rp=filetype_RPS" "qtotal=1" "txtvers=1"'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_psia")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_raop._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"52266/7000"),(0,l.kt)("td",{parentName:"tr",align:null},"Remote Audio Output Protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7c73\u76d2\u5b50,AppleTV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_rc._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"6091"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7c73\u76d2\u5b50,milink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_rfb._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"5900"),(0,l.kt)("td",{parentName:"tr",align:null},"VNC"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_sleep-proxy._udp")),(0,l.kt)("td",{parentName:"tr",align:null},"49937"),(0,l.kt)("td",{parentName:"tr",align:null},"AppleTV"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_touch-able._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"3689"),(0,l.kt)("td",{parentName:"tr",align:null},"AppleTV - iTunes Remote Client"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_rdlink._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"49155"),(0,l.kt)("td",{parentName:"tr",align:null},'"rpAD=" "rpVr=350.2" "rpBA="'),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_appletv-v2._tcp")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"raop - Remote Audio Output Protocol"),(0,l.kt)("li",{parentName:"ul"},"Service Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_tcp.local.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_udp.local.")))),(0,l.kt)("li",{parentName:"ul"},"Instance Name",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_ssh"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="_airplay._tcp"',title:'"_airplay._tcp"'},'# AppleTV\n["vv=2" "osvers=8.4.4" "srcvers=220.68" "pi=00000000-0000-0000-0000-000000000000" "pk=0000" "model=AppleTV3,1" "flags=0x44" "features=0x5A7FFFF7,0xE" "deviceid=00:00:00:00:00:00"]\n---\n# \u5c0f\u7c73\u76d2\u5b50\n"pk=" "pi=" "rhd=2.1.0.0" "pw=0" "flags=0x4" "model=AppleTV3,1" "vv=2" "srcvers=220.68" "features=0x5A7FFFF7,0x1E" "deviceid="\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AppleTV 7000"),(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u7c73\u76d2\u5b50 52266")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="_sleep-proxy._udp"',title:'"_sleep-proxy._udp"'},'["Ver=131077" "atCV=65539" "DvSv=1792" "DvTy=AppleTV" "CtlN=Apple TV" "DbId=0000000000000000" "atSV=65541" "txtvers=1"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="_companion-link._tcp"',title:'"_companion-link._tcp"'},'["rpVr=260.3" "rpMac=0" "rpHN=000000000000" "rpFl=0x20000" "rpAD=000000000000" "rpBA=00:00:00:00:00:00"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="_raop._tcp"',title:'"_raop._tcp"'},'"pk=xxx" "vn=65537" "vs=220.68" "sf=0x4" "txtvers=UDP" "tp=UDP" "sv=false" "ss=16" "sr=44100" "pw=false" "rhd=3.0.0.0" "md=0,1,2" "am=AppleTV3,1" "ft=0x5A7FFFF7,0x1E" "vv=2" "et=0,3,5" "da=true" "cn=1,2,3" "ch=2"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="_rc._tcp"',title:'"_rc._tcp"'},'"btmac=" "VC=0" "CP=[118463]" "amac=" "wol=1" "miversion=1.5.16" "operator=0" "apmac=" "rid=-1" "photoport=6089" "serverport=6088" "mac=" "server_address=media.v2.t001.ottcn.com" "scrnh=720" "scrnw=1280" "platform_id=205" "prottext=RC Ver 1.0.1.38" "protver=16777510"\n')),(0,l.kt)("h3",{id:"extra"},"extra"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"txt"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_prometheus-http._tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"9100"),(0,l.kt)("td",{parentName:"tr",align:null},"path=/metrics")))))}s.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(d,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(N,p(p({ref:e},u),{},{components:n})):a.createElement(N,p({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);