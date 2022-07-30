"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45891],{3905:function(t,a,e){e.d(a,{Zo:function(){return u},kt:function(){return o}});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var m=n.createContext({}),d=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=d(t.components);return n.createElement(m.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),N=d(e),o=l,g=N["".concat(m,".").concat(o)]||N[o]||k[o]||r;return e?n.createElement(g,i(i({ref:a},u),{},{components:e})):n.createElement(g,i({ref:a},u))}));function o(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=N;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},90176:function(t,a,e){e.r(a),e.d(a,{assets:function(){return u},contentTitle:function(){return m},default:function(){return o},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var n=e(87462),l=e(63366),r=(e(67294),e(3905)),i=["components"],p={title:"DNS Awesome",tags:["Awesome"]},m=void 0,d={unversionedId:"service/dns/dns-awesome",id:"service/dns/dns-awesome",title:"DNS Awesome",description:"- \u57df\u540d.\u4fe1\u606f",source:"@site/notes/service/dns/dns-awesome.md",sourceDirName:"service/dns",slug:"/service/dns/dns-awesome",permalink:"/notes/service/dns/dns-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/dns-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"DNS Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"AdGuard",permalink:"/notes/service/dns/adguard"},next:{title:"DNS FAQ",permalink:"/notes/service/dns/dns-faq"}},u={},k=[{value:"Server",id:"server",level:2},{value:"Block",id:"block",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Forwarder/Proxy",id:"forwarderproxy",level:2},{value:"Misc",id:"misc",level:2},{value:"GFW",id:"gfw",level:2},{value:"Well Known Domains",id:"well-known-domains",level:2},{value:"Public DNS",id:"public-dns",level:2},{value:"\u6c61\u67d3\u5c01\u7981\u57df\u540d\u5217\u8868",id:"\u6c61\u67d3\u5c01\u7981\u57df\u540d\u5217\u8868",level:2}],N={toc:k};function o(t){var a=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},N,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://%E5%9F%9F%E5%90%8D.%E4%BF%A1%E6%81%AF"},"\u57df\u540d.\u4fe1\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alidns.com/"},"alidns")),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dns.google/"},"dns.google")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dnssec-analyzer.verisignlabs.com/"},"dnssec-analyzer")))),(0,r.kt)("li",{parentName:"ul"},"DoT 853 \u88ab GFW \u62e6\u622a")),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"knot dns"),(0,r.kt)("li",{parentName:"ul"},"knot resolver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/notes/service/dns/unbound"},"unbound")),(0,r.kt)("li",{parentName:"ul"},"bind"),(0,r.kt)("li",{parentName:"ul"},"coredns"),(0,r.kt)("li",{parentName:"ul"},"nsd"),(0,r.kt)("li",{parentName:"ul"},"dnsdist"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/notes/service/dns/dnscrypt"},"dnscrypt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/notes/service/dns/powerdns/powerdns-rec"},"pdns recursor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/notes/service/dns/powerdns/"},"pdns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.isc.org/isc-projects/kea"},"kea"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,r.kt)("a",{parentName:"li",href:"https://kea.readthedocs.io/en/latest/man/perfdhcp.8.html"},"perfdhcp")," \u538b\u6d4b\u5de5\u5177"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/serverless-dns/serverless-dns"},"serverless-dns/serverless-dns"))),(0,r.kt)("h2",{id:"block"},"Block"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/0xERR0R/blocky"},"0xERR0R/blocky")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nicholasb2101/PiHole"},"nicholasb2101/PiHole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/michaelx/316dc4882f125a8325150e4e2fa9edd6"},"https://gist.github.com/michaelx/316dc4882f125a8325150e4e2fa9edd6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://firebog.net/"},"https://firebog.net/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/privacy-protection-tools/anti-AD"},"privacy-protection-tools/anti-AD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Mosney/anti-anti-AD"},"Mosney/anti-anti-AD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neoFelhz/neohosts"},"neoFelhz/neohosts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vokins/yhosts"},"vokins/yhosts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/blocklistproject/Lists"},"blocklistproject/Lists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nextdns/metadata/tree/master/privacy"},"https://github.com/nextdns/metadata/tree/master/privacy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"blocklisk \u62e6\u622a\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"native \u7cfb\u7edf\u7ea7\u8ddf\u8e2a\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jdlingyu/ad-wars"},"jdlingyu/ad-wars")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/badmojr/1Hosts"},"https://github.com/badmojr/1Hosts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://o0.pages.dev/Xtra/hosts.txt"},"https://o0.pages.dev/Xtra/hosts.txt")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters"},"AdguardTeam/AdguardFilters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdguardTeam/AdGuardSDNSFilter"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts -so ad-wars.txt\n# \u62c6\u5206\u4e3a 1000 \u5217\u8868\u65b9\u4fbf cloudflare \u5bfc\u5165\ngrep '127.0.0.1' ad-wars.txt | grep -v '#' | awk '{print $2}' | sort -u | split -l 1000 -d --additional-suffix '.csv' - ad-wars-\n")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://whotracks.me/trackers/markmonitor.html"},"https://whotracks.me/trackers/markmonitor.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://whotracks.me/trackers/adguard.html"},"https://whotracks.me/trackers/adguard.html"))),(0,r.kt)("h2",{id:"protocol"},"Protocol"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"nmae"),(0,r.kt)("th",{parentName:"tr",align:null},"abbr."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS-over-UDP/53"),(0,r.kt)("td",{parentName:"tr",align:null},"Do53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS-over-TCP/53"),(0,r.kt)("td",{parentName:"tr",align:null},"Do53/TCP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNSCrypt"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS-over-TLS"),(0,r.kt)("td",{parentName:"tr",align:null},"DoT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS-over-HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},"DoH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS-over-TOR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oblivious DNS-over-HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},"ODoH")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oblivious DNS over HTTPS - ODoH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d Provider \u611f\u77e5\u5230\u7528\u6237 IP - \u7c7b\u4f3c anonymized DNScrypt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/oblivious-dns/"},"https://blog.cloudflare.com/oblivious-dns/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/draft-pauly-dprive-oblivious-doh-03"},"https://tools.ietf.org/html/draft-pauly-dprive-oblivious-doh-03")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/odoh-go"},"cloudflare/odoh-go"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Resolve\n# dig - bind-utils\ndig wener.me @114.114.114.114\ndig wener.me @114.114.114.114 +tcp\n# DoH\n# knot-dnsutils\nkdig -d @8.8.8.8 +tls-ca +tls-host=dns.google.com wener.me\n# \u76f4\u63a5\u5f3a\u6c42 DoH\ncurl -H 'accept: application/dns-json' 'https://dns.cloudflare.com/dns-query?name=wener.me&type=A' | jq .\n# curl \u4f7f\u7528 DoT \u89e3\u6790\ncurl --doh-url https://dns.cloudflare.com/dns-query https://wener.me\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ogham/dog"},"ogham/dog"))),(0,r.kt)("h1",{id:"mdns"},"mDNS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/mdns"},"hashicorp/mdns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,r.kt)("li",{parentName:"ul"},"Simple mDNS client/server library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pion/mdns"},"pion/mdns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"Pure Go implementation of Multicast DNS")))),(0,r.kt)("h2",{id:"forwarderproxy"},"Forwarder/Proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/IrineSistiana/mosdns"},"IrineSistiana/mosdns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPLv3, Golang"),(0,r.kt)("li",{parentName:"ul"},"DNS Forwarder"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/dnsproxy"},"AdguardTeam/dnsproxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/looterz/grimd"},"looterz/grimd"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Golang")))),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dnstap.info/"},"dnstap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/llccd/netfilter-spooftcp"},"llccd/netfilter-spooftcp"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dns spoof"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/gNodeB/status/1443975021840551941"},"iptable drop spoof dns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2021/12/15/mess-with-dns/"},"Mess with DNS"))),(0,r.kt)("h2",{id:"gfw"},"GFW"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yangchuansheng/love-gfw"},"yangchuansheng/love-gfw"))),(0,r.kt)("h2",{id:"well-known-domains"},"Well Known Domains"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"domain"),(0,r.kt)("th",{parentName:"tr",align:null},"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pki.goog"},"https://pki.goog")),(0,r.kt)("td",{parentName:"tr",align:null},"Google Trust Services")))),(0,r.kt)("h2",{id:"public-dns"},"Public DNS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"-"),(0,r.kt)("th",{parentName:"tr",align:null},"Primary"),(0,r.kt)("th",{parentName:"tr",align:null},"Secondary"),(0,r.kt)("th",{parentName:"tr",align:null},"IPv6 Primary"),(0,r.kt)("th",{parentName:"tr",align:null},"IPv6 Secondary"),(0,r.kt)("th",{parentName:"tr",align:null},"DoH"),(0,r.kt)("th",{parentName:"tr",align:null},"DoT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"223.5.5.5"),(0,r.kt)("td",{parentName:"tr",align:null},"223.6.6.6"),(0,r.kt)("td",{parentName:"tr",align:null},"2400:3200::1"),(0,r.kt)("td",{parentName:"tr",align:null},"2400:3200:baba::1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dns.alidns.com/dns-query"},"https://dns.alidns.com/dns-query")),(0,r.kt)("td",{parentName:"tr",align:null},"tls://dns.alidns.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5357\u4eac\u4fe1\u98ce"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.114.114"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.115.115"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5357\u4eac\u4fe1\u98ce Safe"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.114.119"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.115.119"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5357\u4eac\u4fe1\u98ce Family"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.114.110"),(0,r.kt)("td",{parentName:"tr",align:null},"114.114.115.110"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNSPod"),(0,r.kt)("td",{parentName:"tr",align:null},"119.29.29.29"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d\u56fd\u7535\u4fe1"),(0,r.kt)("td",{parentName:"tr",align:null},"218.102.23.228"),(0,r.kt)("td",{parentName:"tr",align:null},"218.108.23.1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d\u56fd\u4e92\u8054\u7f51\u7edc\u4fe1\u606f\u4e2d\u5fc3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.4.8"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9999\u6e2f"),(0,r.kt)("td",{parentName:"tr",align:null},"206.80.96.10"),(0,r.kt)("td",{parentName:"tr",align:null},"206.80.96.9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9999\u6e2f"),(0,r.kt)("td",{parentName:"tr",align:null},"203.80.96.10"),(0,r.kt)("td",{parentName:"tr",align:null},"203.80.96.9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9999\u6e2f"),(0,r.kt)("td",{parentName:"tr",align:null},"61.10.0.130"),(0,r.kt)("td",{parentName:"tr",align:null},"61.10.1.130"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53f0\u6e7e\u4e2d\u534e"),(0,r.kt)("td",{parentName:"tr",align:null},"168.95.1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"168.95.192.1,168.95.1.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Baidu"),(0,r.kt)("td",{parentName:"tr",align:null},"180.76.76.76"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u901a"),(0,r.kt)("td",{parentName:"tr",align:null},"106.185.46.149"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8054\u901a"),(0,r.kt)("td",{parentName:"tr",align:null},"121.40.240.227"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7535\u4fe1"),(0,r.kt)("td",{parentName:"tr",align:null},"139.196.12.167"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u56fd\u5916")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u97e9\u56fd\u957f\u5b89\u5927\u5b66"),(0,r.kt)("td",{parentName:"tr",align:null},"168.126.63.1"),(0,r.kt)("td",{parentName:"tr",align:null},"168.126.63.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u97e9\u56fd"),(0,r.kt)("td",{parentName:"tr",align:null},"168.126.63.15"),(0,r.kt)("td",{parentName:"tr",align:null},"168.126.63.16"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u97e9\u56fd"),(0,r.kt)("td",{parentName:"tr",align:null},"112.106.53.22"),(0,r.kt)("td",{parentName:"tr",align:null},"112.105.54.34,112.106.23.34"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Google"),(0,r.kt)("td",{parentName:"tr",align:null},"8.8.8.8"),(0,r.kt)("td",{parentName:"tr",align:null},"8.8.4.4"),(0,r.kt)("td",{parentName:"tr",align:null},"2001:4860:4860::8888"),(0,r.kt)("td",{parentName:"tr",align:null},"2001:4860:4860::8844"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dns.google/dns-query"},"https://dns.google/dns-query")),(0,r.kt)("td",{parentName:"tr",align:null},"tls://dns.google")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f8e\u56fd\u8d5b\u95e8\u94c1\u514b\u8bfa\u987f"),(0,r.kt)("td",{parentName:"tr",align:null},"198.153.194.1"),(0,r.kt)("td",{parentName:"tr",align:null},"198.153.192.1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenDNS"),(0,r.kt)("td",{parentName:"tr",align:null},"208.67.222.222"),(0,r.kt)("td",{parentName:"tr",align:null},"208.67.220.220"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f8e\u56fd Psychz"),(0,r.kt)("td",{parentName:"tr",align:null},"208.87.241.170"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f8e\u56fd"),(0,r.kt)("td",{parentName:"tr",align:null},"64.81.45.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"23.41.21.106"),(0,r.kt)("td",{parentName:"tr",align:null},"23.45.157.25"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pacific SuperNet"),(0,r.kt)("td",{parentName:"tr",align:null},"202.14.67.4"),(0,r.kt)("td",{parentName:"tr",align:null},"202.238.95.26"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pacific SuperNet"),(0,r.kt)("td",{parentName:"tr",align:null},"202.238.95.24"),(0,r.kt)("td",{parentName:"tr",align:null},"202.14.67.14"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u672c MINET"),(0,r.kt)("td",{parentName:"tr",align:null},"203.112.2.4"),(0,r.kt)("td",{parentName:"tr",align:null},"203.112.2.5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"203.112.2.4"),(0,r.kt)("td",{parentName:"tr",align:null},"203.112.2.5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"202.45.84.58"),(0,r.kt)("td",{parentName:"tr",align:null},"202.45.84.59"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"202.67.240.221"),(0,r.kt)("td",{parentName:"tr",align:null},"202.67.240.220"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"202.69.209.5"),(0,r.kt)("td",{parentName:"tr",align:null},"202.69.209.133"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"202.81.252.1"),(0,r.kt)("td",{parentName:"tr",align:null},"202.81.252.2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"202.98.198.167"),(0,r.kt)("td",{parentName:"tr",align:null},"202.98.192.67"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"123.125.81.6"),(0,r.kt)("td",{parentName:"tr",align:null},"123.206.21.48"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"4.4.4.4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"101.226.4.6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^"),(0,r.kt)("td",{parentName:"tr",align:null},"210.2.4.8"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1111"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dns.cloudflare.com/dns-query"},"https://dns.cloudflare.com/dns-query")),(0,r.kt)("td",{parentName:"tr",align:null},"tls://1dot1dot1dot1.cloudflare-dns.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare Security"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0.2"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1112"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://security.cloudflare-dns.com/dns-query"},"https://security.cloudflare-dns.com/dns-query")),(0,r.kt)("td",{parentName:"tr",align:null},"tls://security.cloudflare-dns.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cloudflare Family"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1113"),(0,r.kt)("td",{parentName:"tr",align:null},"2606:4700:4700::1003"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://family.cloudflare-dns.com/dns-query"},"https://family.cloudflare-dns.com/dns-query")),(0,r.kt)("td",{parentName:"tr",align:null},"tls://family.cloudflare-dns.com")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Safe - block phishing, malcious and other unsafe websites"),(0,r.kt)("li",{parentName:"ul"},"Family - block adult websites and inappropriate contents"),(0,r.kt)("li",{parentName:"ul"},"Cloudflare Security - Malware blocking")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kb.adguard.com/general/dns-providers"},"https://kb.adguard.com/general/dns-providers"))),(0,r.kt)("h2",{id:"\u6c61\u67d3\u5c01\u7981\u57df\u540d\u5217\u8868"},"\u6c61\u67d3\u5c01\u7981\u57df\u540d\u5217\u8868"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u8981\u8d70\u56fd\u5185\u89e3\u6790")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"facebook.com\ngithub.com\ngithub.io\ngoog\ngoogle\ngoogle.com\nhbo.com\nimdb.com\ninstagram.com\njp\nmedium.com\nmega.nz\nnetflix.com\nnintendo.com\nnordvpn.com\npornhub.com\nquora.com\nrarbg.to\nrarbgprx.org\nreddit.com\nslack.com\nspotify.com\nt.co\ntelegram.org\nthepiratebay.org\ntwitter.com\nuk\nwhatsapp.com\nwikileaks.org\nwikipedia.org\nwikiquote.org\nwsj.com\nxvideos.com\nyoutube.com\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E8%A2%AB%E5%B0%81%E9%94%81%E7%BD%91%E7%AB%99%E5%88%97%E8%A1%A8"},"\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u88ab\u5c01\u9501\u7f51\u7ad9\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paulmillr/encrypted-dns"},"https://github.com/paulmillr/encrypted-dns"))))}o.isMDXComponent=!0}}]);