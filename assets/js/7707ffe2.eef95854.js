"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20580],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<s;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1398:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=t(96600),a=t(27279),s=(t(59496),t(49613)),i=["components"],l={title:"Dnsmasq FAQ",tags:["FAQ"]},o="Dnsmasq FAQ",d={unversionedId:"service/dns/dnsmasq-faq",id:"service/dns/dnsmasq-faq",title:"Dnsmasq FAQ",description:"dnsmasq Operation not permitted",source:"@site/../notes/service/dns/dnsmasq-faq.md",sourceDirName:"service/dns",slug:"/service/dns/dnsmasq-faq",permalink:"/notes/service/dns/dnsmasq-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/dns/dnsmasq-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Dnsmasq FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"DNSCrypt",permalink:"/notes/service/dns/dnscrypt"},next:{title:"dnsmasq",permalink:"/notes/service/dns/dnsmasq"}},c={},u=[{value:"dnsmasq: setting capabilities failed: Operation not permitted",id:"dnsmasq-setting-capabilities-failed-operation-not-permitted",level:2},{value:"dnsmasq: failed to bind DHCP server socket: Address in use",id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use",level:2},{value:"libvirtd dnsmasq",id:"libvirtd-dnsmasq",level:2},{value:"dnsmasq as",id:"dnsmasq-as",level:2},{value:"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d",id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dnsmasq-faq"},"Dnsmasq FAQ"),(0,s.kt)("h2",{id:"dnsmasq-setting-capabilities-failed-operation-not-permitted"},"dnsmasq: setting capabilities failed: Operation not permitted"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Docker \u91cc\u9047\u5230"),(0,s.kt)("li",{parentName:"ul"},"\u7528 root \u542f\u52a8")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dnsmasq --user=root\n")),(0,s.kt)("h2",{id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use"},"dnsmasq: failed to bind DHCP server socket: Address in use"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"67 \u7aef\u53e3\u88ab\u5360\u7528"),(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528 bind-interfaces")),(0,s.kt)("h2",{id:"libvirtd-dnsmasq"},"libvirtd dnsmasq"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script=/usr/lib/libvirt/libvirt_leaseshelper\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"##WARNING:  THIS IS AN AUTO-GENERATED FILE. CHANGES TO IT ARE LIKELY TO BE\n##OVERWRITTEN AND LOST.  Changes to this configuration should be made using:\n##    virsh net-edit default\n## or other application using the libvirt API.\n##\n## dnsmasq conf file created by libvirt\nstrict-order\npid-file=/var/run/libvirt/network/default.pid\nexcept-interface=lo\nbind-dynamic\ninterface=virbr0\ndhcp-range=192.168.122.2,192.168.122.254,255.255.255.0\ndhcp-no-override\ndhcp-authoritative\ndhcp-lease-max=253\ndhcp-hostsfile=/var/lib/libvirt/dnsmasq/default.hostsfile\naddn-hosts=/var/lib/libvirt/dnsmasq/default.addnhosts\n")),(0,s.kt)("h2",{id:"dnsmasq-as"},"dnsmasq as"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"auth-server=localhost\nauth-zone=localhost,127.0.0.0/24\n# \u4f1a\u89e3\u6790\u6240\u6709\u7684 cluster.internal \u7ed3\u5c3e\u57df\u540d\n# x.cluster.internal\n# x.x.cluster.internal\naddress=/cluster.internal/192.168.1.1\n")),(0,s.kt)("h2",{id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d"},"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"# \u6240\u6709 example.com \u90fd\u4f1a CNAME \u4e3a wener.me\ncname=*.example.com,wener.me,180\nauth-server=example.com\nauth-zone=example.com\n")))}m.isMDXComponent=!0}}]);