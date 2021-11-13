"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54607],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63004:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={title:"Dnsmasq FAQ",tags:["FAQ"]},l=void 0,d={unversionedId:"service/dns/dnsmasq-faq",id:"service/dns/dnsmasq-faq",isDocsHomePage:!1,title:"Dnsmasq FAQ",description:"dnsmasq Operation not permitted",source:"@site/notes/service/dns/dnsmasq-faq.md",sourceDirName:"service/dns",slug:"/service/dns/dnsmasq-faq",permalink:"/notes/service/dns/dnsmasq-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/dnsmasq-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Dnsmasq FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"dnsmasq",permalink:"/notes/service/dns/dnsmasq"},next:{title:"Domain",permalink:"/notes/service/dns/domain"}},c=[{value:"dnsmasq: setting capabilities failed: Operation not permitted",id:"dnsmasq-setting-capabilities-failed-operation-not-permitted",children:[]},{value:"dnsmasq: failed to bind DHCP server socket: Address in use",id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use",children:[]},{value:"libvirtd dnsmasq",id:"libvirtd-dnsmasq",children:[]},{value:"dnsmasq as",id:"dnsmasq-as",children:[]},{value:"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d",id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dnsmasq-setting-capabilities-failed-operation-not-permitted"},"dnsmasq: setting capabilities failed: Operation not permitted"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker \u91cc\u9047\u5230"),(0,i.kt)("li",{parentName:"ul"},"\u7528 root \u542f\u52a8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dnsmasq --user=root\n")),(0,i.kt)("h2",{id:"dnsmasq-failed-to-bind-dhcp-server-socket-address-in-use"},"dnsmasq: failed to bind DHCP server socket: Address in use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"67 \u7aef\u53e3\u88ab\u5360\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 bind-interfaces")),(0,i.kt)("h2",{id:"libvirtd-dnsmasq"},"libvirtd dnsmasq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script=/usr/lib/libvirt/libvirt_leaseshelper\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"##WARNING:  THIS IS AN AUTO-GENERATED FILE. CHANGES TO IT ARE LIKELY TO BE\n##OVERWRITTEN AND LOST.  Changes to this configuration should be made using:\n##    virsh net-edit default\n## or other application using the libvirt API.\n##\n## dnsmasq conf file created by libvirt\nstrict-order\npid-file=/var/run/libvirt/network/default.pid\nexcept-interface=lo\nbind-dynamic\ninterface=virbr0\ndhcp-range=192.168.122.2,192.168.122.254,255.255.255.0\ndhcp-no-override\ndhcp-authoritative\ndhcp-lease-max=253\ndhcp-hostsfile=/var/lib/libvirt/dnsmasq/default.hostsfile\naddn-hosts=/var/lib/libvirt/dnsmasq/default.addnhosts\n")),(0,i.kt)("h2",{id:"dnsmasq-as"},"dnsmasq as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"auth-server=localhost\nauth-zone=localhost,127.0.0.0/24\n# \u4f1a\u89e3\u6790\u6240\u6709\u7684 cluster.internal \u7ed3\u5c3e\u57df\u540d\n# x.cluster.internal\n# x.x.cluster.internal\naddress=/cluster.internal/192.168.1.1\n")),(0,i.kt)("h2",{id:"\u6240\u6709\u57df\u540d-cname-\u4e3a\u5176\u4ed6\u57df\u540d"},"\u6240\u6709\u57df\u540d CNAME \u4e3a\u5176\u4ed6\u57df\u540d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u6240\u6709 example.com \u90fd\u4f1a CNAME \u4e3a wener.me\ncname=*.example.com,wener.me,180\nauth-server=example.com\nauth-zone=example.com\n")))}p.isMDXComponent=!0}}]);