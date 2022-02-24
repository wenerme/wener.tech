"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45891],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},90176:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={title:"DNS Awesome",tags:["Awesome"]},s=void 0,p={unversionedId:"service/dns/dns-awesome",id:"service/dns/dns-awesome",title:"DNS Awesome",description:"- knot dns",source:"@site/notes/service/dns/dns-awesome.md",sourceDirName:"service/dns",slug:"/service/dns/dns-awesome",permalink:"/notes/service/dns/dns-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/dns-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",frontMatter:{title:"DNS Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"DNS Service",permalink:"/notes/service/dns/"},next:{title:"DNS FAQ",permalink:"/notes/service/dns/dns-faq"}},u=[{value:"Forwarder/Proxy",id:"forwarderproxy",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2},{value:"GFW",id:"gfw",children:[],level:2}],m={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"knot dns"),(0,l.kt)("li",{parentName:"ul"},"knot resolver"),(0,l.kt)("li",{parentName:"ul"},"unbound"),(0,l.kt)("li",{parentName:"ul"},"bind"),(0,l.kt)("li",{parentName:"ul"},"coredns"),(0,l.kt)("li",{parentName:"ul"},"nsd"),(0,l.kt)("li",{parentName:"ul"},"dnsdist"),(0,l.kt)("li",{parentName:"ul"},"pdns recursor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.isc.org/isc-projects/kea"},"kea"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("a",{parentName:"li",href:"https://kea.readthedocs.io/en/latest/man/perfdhcp.8.html"},"perfdhcp")," \u538b\u6d4b\u5de5\u5177")))),(0,l.kt)("h1",{id:"mdns"},"mDNS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/mdns"},"hashicorp/mdns"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,l.kt)("li",{parentName:"ul"},"Simple mDNS client/server library"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pion/mdns"},"pion/mdns"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go"),(0,l.kt)("li",{parentName:"ul"},"Pure Go implementation of Multicast DNS")))),(0,l.kt)("h2",{id:"forwarderproxy"},"Forwarder/Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/IrineSistiana/mosdns"},"IrineSistiana/mosdns"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GPLv3, Golang"),(0,l.kt)("li",{parentName:"ul"},"DNS Forwarder"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/dnsproxy"},"AdguardTeam/dnsproxy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/looterz/grimd"},"looterz/grimd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Golang")))),(0,l.kt)("h2",{id:"misc"},"Misc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dnstap.info/"},"dnstap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/llccd/netfilter-spooftcp"},"llccd/netfilter-spooftcp"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dns spoof"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/gNodeB/status/1443975021840551941"},"iptable drop spoof dns")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jvns.ca/blog/2021/12/15/mess-with-dns/"},"Mess with DNS"))),(0,l.kt)("h2",{id:"gfw"},"GFW"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yangchuansheng/love-gfw"},"yangchuansheng/love-gfw"))))}c.isMDXComponent=!0}}]);