"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57060],{49613:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59484:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=r(96600),a=r(27279),l=(r(59496),r(49613)),o=["components"],u={title:"AdGuard"},d="AdGuard",p={unversionedId:"service/dns/adguard",id:"service/dns/adguard",title:"AdGuard",description:"- AdguardTeam/AdGuardHome",source:"@site/../notes/service/dns/adguard.md",sourceDirName:"service/dns",slug:"/service/dns/adguard",permalink:"/notes/service/dns/adguard",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/dns/adguard.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"AdGuard"},sidebar:"docs",previous:{title:"acme-dns",permalink:"/notes/service/dns/acme-dns"},next:{title:"DNS Awesome",permalink:"/notes/service/dns/dns-awesome"}},i={},c=[],m={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"adguard"},"AdGuard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdguardTeam/AdGuardHome"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"53"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"67,68"),(0,l.kt)("td",{parentName:"tr",align:null},"DHCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"80,443,3000"),(0,l.kt)("td",{parentName:"tr",align:null},"DoH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"853"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS over TLS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"784,853,8853"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS over QUIC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5443"),(0,l.kt)("td",{parentName:"tr",align:null},"DNSCrypt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"web")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Docker\n# https://hub.docker.com/r/adguard/adguardhome\n\ndocker run --rm -it \\\n  -v $PWD/work:/opt/adguardhome/work \\\n  -v $PWD/conf:/opt/adguardhome/conf \\\n  -p 53:53/tcp -p 53:53/udp \\\n  -p 67:67/udp -p 68:68/udp \\\n  -p 80:80/tcp -p 443:443/tcp -p 443:443/udp -p 3000:3000/tcp \\\n  -p 853:853/tcp \\\n  -p 784:784/udp -p 853:853/udp -p 8853:8853/udp \\\n  -p 5443:5443/tcp -p 5443:5443/udp \\\n  --name adguardhome adguard/adguardhome\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u672c\u5730\u5b58\u50a8\uff0c\u4e0d\u652f\u6301 HA \u90e8\u7f72 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardHome/issues/573"},"#573")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"conf/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AdGuardHome.yaml"))),(0,l.kt)("li",{parentName:"ul"},"work/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"filters"),(0,l.kt)("li",{parentName:"ul"},"sessions.db"),(0,l.kt)("li",{parentName:"ul"},"stats.db")))))))}s.isMDXComponent=!0}}]);