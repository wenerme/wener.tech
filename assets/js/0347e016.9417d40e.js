/*! For license information please see 0347e016.9417d40e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71404],{46269:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=s(11527),t=s(47214);const d={title:"mDNS \u670d\u52a1\u5b9a\u4e49",commands:["dns-sd"]},c="mDNS \u670d\u52a1\u5b9a\u4e49",l={id:"service/network/spec/mdns/mdns-sd",title:"mDNS \u670d\u52a1\u5b9a\u4e49",description:"- services.dns-sd._udp",source:"@site/../notes/service/network/spec/mdns/mdns-sd.md",sourceDirName:"service/network/spec/mdns",slug:"/service/network/spec/mdns/sd",permalink:"/notes/service/network/spec/mdns/sd",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/spec/mdns/mdns-sd.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"mDNS \u670d\u52a1\u5b9a\u4e49",commands:["dns-sd"]},sidebar:"docs",previous:{title:"mDNS",permalink:"/notes/service/network/spec/mdns/"},next:{title:"Squid Conf",permalink:"/notes/service/network/squid-conf"}},i={},o=[{value:"macOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2},{value:"services",id:"services",level:2},{value:"extra",id:"extra",level:3}];function x(n){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"mdns-\u670d\u52a1\u5b9a\u4e49",children:"mDNS \u670d\u52a1\u5b9a\u4e49"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"_services._dns-sd._udp"})}),"\n",(0,r.jsx)(e.li,{children:"Linux avahi"}),"\n",(0,r.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://datatracker.ietf.org/doc/html/rfc6763",children:"rfc6763"})," DNS-Based Service Discovery"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://developer.apple.com/bonjour/printing-specification/bonjourprinting-1.2.1.pdf",children:"Bonjour Printing Specification"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://www.dns-sd.org/",children:"http://www.dns-sd.org/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"macos",children:"macOS"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'# \u66b4\u9732\u670d\u52a1\ndns-sd -R "My test server with metrics-endpoint" _prometheus-http._tcp. . 9000 path=/metrics\n# \u626b\u63cf\ndns-sd -B\n# \u6240\u6709\u670d\u52a1\ndns-sd -B _services._dns-sd._udp local.\n# \u67e5\u627e\u6253\u5370\u673a\ndns-sd -B _ipp._tcp local.\n# \u67e5\u770b\u5185\u5bb9\u91cc\u7684 adminurl\ndns-sd -Z _ipp._tcp local.\n# \u83b7\u53d6 IP\ndns-sd -Gv4v6 LenovoAB66CD.local.\ndns-sd -Gv4v6 LenovoAD69CD.local.\n\n# \u57df\u540d zone \u683c\u5f0f\n# PTR SRV TXT\ndns-sd -Z\n'})}),"\n",(0,r.jsx)(e.h2,{id:"linux",children:"Linux"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"#\napk add avahi avahi-tools\nservice avahi-daemon start\n\navahi-browse --all --ignore-local --resolve --terminate\n# \u53ea\u641c\u7d22 ssh \u4e14\u663e\u793a ip\navahi-browse _ssh._tcp -tr\n"})}),"\n",(0,r.jsx)(e.h2,{id:"services",children:"services"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"type"}),(0,r.jsx)(e.th,{children:"port"}),(0,r.jsx)(e.th,{children:"desc/txt"}),(0,r.jsx)(e.th,{children:"devices"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_adisk"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_afpovertcp._tcp"})}),(0,r.jsx)(e.td,{children:"548"}),(0,r.jsx)(e.td,{children:"AFP"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_airkan._tcp"})}),(0,r.jsx)(e.td,{children:"6088"}),(0,r.jsxs)(e.td,{children:["\u5c0f\u7c73\u76d2\u5b50,milink",(0,r.jsx)(e.br,{}),'"mac=" "music_version=1.0" "platform_id=205" "prottext=Airkan Protocol Version 1.5.17" "protver=16777984" "scrnh=720" "scrnw=1280" "photoport=6089"']}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_airplay._tcp"})}),(0,r.jsx)(e.td,{children:"52266/7000"}),(0,r.jsx)(e.td,{children:"AirePlay"}),(0,r.jsx)(e.td,{children:"\u5c0f\u7c73\u76d2\u5b50"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_burn"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_CGI"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_companion-link._tcp"})}),(0,r.jsx)(e.td,{children:"49282"}),(0,r.jsx)(e.td,{children:'"rpBA=00:00:00:00:00:00" "rpHI=000000000000" "rpAD=000000000000" "rpHA=000000000000" "rpVr=195.2" "rpFl=0x30000" "rpHN=000000000000"'}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_device-info._tcp"})}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"model=Xserve"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_http._tcp"})}),(0,r.jsx)(e.td,{children:"80"}),(0,r.jsx)(e.td,{children:"path=/"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_ipp._tcp"})}),(0,r.jsx)(e.td,{children:"631"}),(0,r.jsxs)(e.td,{children:['"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,r.jsx)(e.a,{href:"http://RNP00.local/",children:"http://RNP00.local/"}),'" "priority=30" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "rp=printer" "qtotal=1" "txtvers=1"']}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_ipps"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_leboremote._tcp"})}),(0,r.jsx)(e.td,{children:"52266"}),(0,r.jsx)(e.td,{children:'"hstv=320.00" "hmd=HappyCast3.2" "etv=1" "atv=0" "htv=1" "vv=2" "appInfo=0" "ver=2.0" "u=" "packagename=com.xiaomi.mitv.smartshare" "lebofeature=223" "feature=223" "channel=LEBO-APK--60013-19516" "mirror=7100" "devicemac=" "lelinkport=52266" "remote=52266" "airplay=52266" "raop=52266" "h=1080" "w=1920" "version=3.2" "port=-1"'}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_miio"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_pdl-datastream._tcp"})}),(0,r.jsx)(e.td,{children:"9100"}),(0,r.jsxs)(e.td,{children:['"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,r.jsx)(e.a,{href:"http://RNP00.local/",children:"http://RNP00.local/"}),'" "priority=10" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "qtotal=1" "txtvers=1"']}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_pdl-datastream"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_printer._tcp"})}),(0,r.jsx)(e.td,{children:"515"}),(0,r.jsxs)(e.td,{children:['"TBCP=T" "Transparent=F" "Binary=T" "Punch=F" "Staple=F" "Sort=T" "PaperCustom=F" "Duplex=T" "Copies=T" "Collate=T" "Color=T" "Bind=T" "adminurl=',(0,r.jsx)(e.a,{href:"http://RNP00.local/",children:"http://RNP00.local/"}),'" "priority=20" "PaperMax=legal-A4" "note=" "ty=RICOH MP C2011" "product=(RICOH MP C2011 PS3)" "pdl=application/postscript" "rp=filetype_RPS" "qtotal=1" "txtvers=1"']}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_psia"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_raop._tcp"})}),(0,r.jsx)(e.td,{children:"52266/7000"}),(0,r.jsx)(e.td,{children:"Remote Audio Output Protocol"}),(0,r.jsx)(e.td,{children:"\u5c0f\u7c73\u76d2\u5b50,AppleTV"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_rc._tcp"})}),(0,r.jsx)(e.td,{children:"6091"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\u5c0f\u7c73\u76d2\u5b50,milink"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_rfb._tcp"})}),(0,r.jsx)(e.td,{children:"5900"}),(0,r.jsx)(e.td,{children:"VNC"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_sleep-proxy._udp"})}),(0,r.jsx)(e.td,{children:"49937"}),(0,r.jsx)(e.td,{children:"AppleTV"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_touch-able._tcp"})}),(0,r.jsx)(e.td,{children:"3689"}),(0,r.jsx)(e.td,{children:"AppleTV - iTunes Remote Client"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_rdlink._tcp"})}),(0,r.jsx)(e.td,{children:"49155"}),(0,r.jsx)(e.td,{children:'"rpAD=" "rpVr=350.2" "rpBA="'}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_appletv-v2._tcp"})}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"raop - Remote Audio Output Protocol"}),"\n",(0,r.jsxs)(e.li,{children:["Service Type\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"_tcp.local."})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"_udp.local."})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Instance Name\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"_ssh"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",metastring:'title="_airplay._tcp"',children:'# AppleTV\n["vv=2" "osvers=8.4.4" "srcvers=220.68" "pi=00000000-0000-0000-0000-000000000000" "pk=0000" "model=AppleTV3,1" "flags=0x44" "features=0x5A7FFFF7,0xE" "deviceid=00:00:00:00:00:00"]\n---\n# \u5c0f\u7c73\u76d2\u5b50\n"pk=" "pi=" "rhd=2.1.0.0" "pw=0" "flags=0x4" "model=AppleTV3,1" "vv=2" "srcvers=220.68" "features=0x5A7FFFF7,0x1E" "deviceid="\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"AppleTV 7000"}),"\n",(0,r.jsx)(e.li,{children:"\u5c0f\u7c73\u76d2\u5b50 52266"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",metastring:'title="_sleep-proxy._udp"',children:'["Ver=131077" "atCV=65539" "DvSv=1792" "DvTy=AppleTV" "CtlN=Apple TV" "DbId=0000000000000000" "atSV=65541" "txtvers=1"]\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",metastring:'title="_companion-link._tcp"',children:'["rpVr=260.3" "rpMac=0" "rpHN=000000000000" "rpFl=0x20000" "rpAD=000000000000" "rpBA=00:00:00:00:00:00"]\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",metastring:'title="_raop._tcp"',children:'"pk=xxx" "vn=65537" "vs=220.68" "sf=0x4" "txtvers=UDP" "tp=UDP" "sv=false" "ss=16" "sr=44100" "pw=false" "rhd=3.0.0.0" "md=0,1,2" "am=AppleTV3,1" "ft=0x5A7FFFF7,0x1E" "vv=2" "et=0,3,5" "da=true" "cn=1,2,3" "ch=2"\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",metastring:'title="_rc._tcp"',children:'"btmac=" "VC=0" "CP=[118463]" "amac=" "wol=1" "miversion=1.5.16" "operator=0" "apmac=" "rid=-1" "photoport=6089" "serverport=6088" "mac=" "server_address=media.v2.t001.ottcn.com" "scrnh=720" "scrnw=1280" "platform_id=205" "prottext=RC Ver 1.0.1.38" "protver=16777510"\n'})}),"\n",(0,r.jsx)(e.h3,{id:"extra",children:"extra"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"type"}),(0,r.jsx)(e.th,{children:"port"}),(0,r.jsx)(e.th,{children:"txt"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"_prometheus-http._tcp"})}),(0,r.jsx)(e.td,{children:"9100"}),(0,r.jsx)(e.td,{children:"path=/metrics"})]})})]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},3354:(n,e,s)=>{var r=s(50959),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var r,d={},o=null,x=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(x=e.ref),e)c.call(e,r)&&!i.hasOwnProperty(r)&&(d[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===d[r]&&(d[r]=e[r]);return{$$typeof:t,type:n,key:o,ref:x,props:d,_owner:l.current}}e.Fragment=d,e.jsx=o,e.jsxs=o},11527:(n,e,s)=>{n.exports=s(3354)},47214:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>c});var r=s(50959);const t={},d=r.createContext(t);function c(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);