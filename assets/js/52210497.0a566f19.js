"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64194],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83752:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"DNS Service"},p="DNS Service",s={unversionedId:"service/dns/README",id:"service/dns/README",title:"DNS Service",description:"| server        | e.g.        | for                                                     |",source:"@site/../notes/service/dns/README.md",sourceDirName:"service/dns",slug:"/service/dns/",permalink:"/notes/service/dns/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/dns/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"DNS Service"},sidebar:"docs",previous:{title:"ISO",permalink:"/notes/service/data/std/iso"},next:{title:"acme-dns",permalink:"/notes/service/dns/acme-dns"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dns-service"},"DNS Service"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"server"),(0,i.kt)("th",{parentName:"tr",align:null},"e.g."),(0,i.kt)("th",{parentName:"tr",align:null},"for"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS AS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/notes/service/dns/powerdns/"},"pdns"),",bind"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6743\u5a01 DNS \u8bb0\u5f55")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS Recursor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/notes/service/dns/unbound"},"unbound")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9012\u5f52\u4ece root \u5f00\u59cb\u89e3\u6790")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS Forwarder"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u5176\u4ed6 server - \u4f8b\u5982: \u5b9e\u73b0\u534f\u8bae\u9002\u914d\uff0c\u901a\u8fc7 proxy \u4ee3\u7406")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS Cache"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/notes/service/dns/dnsmasq"},"dnsmasq")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 DNS \u8bb0\u5f55 - \u901a\u5e38\u4e5f\u63d0\u4f9b DHCP \u80fd\u7559")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DHCP \u4e0e DNS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DHCP \u63d0\u4f9b IP \u7ba1\u7406\u548c\u914d\u7f6e\u4e0b\u53d1"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u5e26\u4e0a HOSTNAME"),(0,i.kt)("li",{parentName:"ul"},"DHCP \u9644\u5e26\u7684 DNS \u80fd\u5c06 HOSTNAME \u89e3\u6790\u5230 IP"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"wikipedia ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"Domain Name System")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_DNS_server_software"},"Comparison of DNS server software")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_DNS_record_types"},"List of DNS record types"))))))}m.isMDXComponent=!0}}]);