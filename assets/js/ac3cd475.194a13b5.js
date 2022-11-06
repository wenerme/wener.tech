"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57276],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=s(r),m=a,d=v["".concat(p,".").concat(m)]||v[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},38581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return v},metadata:function(){return d},toc:function(){return f}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&l(e,r,t[r]);return e};const v={title:"Avahi"},m="Avahi",d={unversionedId:"service/network/avahi",id:"service/network/avahi",title:"Avahi",description:"- archlinux Avahi",source:"@site/../notes/service/network/avahi.md",sourceDirName:"service/network",slug:"/service/network/avahi",permalink:"/notes/service/network/avahi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/avahi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658265387,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{title:"Avahi"},sidebar:"docs",previous:{title:"Arkime",permalink:"/notes/service/network/arkime"},next:{title:"clash",permalink:"/notes/service/network/clash"}},h={},f=[{value:"services",id:"services",level:2},{value:"prometheus",id:"prometheus",level:3},{value:"afpd",id:"afpd",level:2},{value:"SMB",id:"smb",level:3},{value:"Misc",id:"misc",level:3},{value:"dbus_bus_request_name(): Connection &quot;:1.3&quot; is not allowed to own the service &quot;org.freedesktop.Avahi&quot; due to security policies in the configuration file",id:"dbus_bus_request_name-connection-13-is-not-allowed-to-own-the-service-orgfreedesktopavahi-due-to-security-policies-in-the-configuration-file",level:2}],y={toc:f};function k(e){var t,r=e,{components:a}=r,l=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),l),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"avahi"}),"Avahi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"archlinux ",(0,n.kt)("a",u({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Avahi"}),"Avahi")),(0,n.kt)("li",{parentName:"ul"},"Alpine \u6ca1\u6709 nsswitch",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/gliderlabs/docker-alpine/issues/367"}),"gliderlabs/docker-alpine#367")),(0,n.kt)("li",{parentName:"ul"},"musl \u4e0d\u652f\u6301 nsswitch"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://linux.die.net/man/5/avahi.service"}),"https://linux.die.net/man/5/avahi.service"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# tools https://pkgs.alpinelinux.org/contents?branch=edge&name=avahi-tools&arch=x86_64&repo=main\napk add avahi avahi-tools\n\n# avahi-daemon\n# avahi-dnsconfd\nservice avahi-daemon start\n\navahi-browse --all --ignore-local --resolve --terminate\n# \u53ea\u641c\u7d22 ssh \u4e14\u663e\u793a ip\navahi-browse _ssh._tcp -tr\n\n# \u65b0\u589e\u670d\u52a1\u5b9a\u4e49\ncat << XML > /etc/avahi/services/node-exporter.service\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service protocol="ipv4">\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n  </service>\n</service-group>\nXML\n\n# \u76f4\u63a5\u67e5\u627e\u5e76\u6253\u5370\nippfind _ipp._tcp --print\n# \u83b7\u53d6 hostname\nippfind _ipp._tcp,_universal --exec echo \'{service_hostname}\' \\;\n# \u67e5\u627e airprint\navahi-browse -rt _universal._sub._ipp._tcp\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml"}),'\x3c!-- \u4e00\u4e2a\u670d\u52a1\u5206\u7ec4 - {name,service:[]} --\x3e\n<service-group>\n  \x3c!-- \u670d\u52a1\u540d --\x3e\n  \x3c!-- replace-wildcards \u66ff\u6362 %h \u4e3a hostname --\x3e\n  <name replace-wildcards="yes">%h</name>\n\n  \x3c!-- {type,port, domain-name?, host-name?, subtype:[], txt-record:[] --\x3e\n  \x3c!-- protocol="ipv4|ipv6|any" - \u9ed8\u8ba4 any --\x3e\n  <service protocol="ipv4">\n    \x3c!-- \u4f8b\u5982 _http._tcp --\x3e\n    <type>_prometheus-http._tcp</type>\n    <port>9090</port>\n\n    \x3c!-- \u5b50\u7c7b\u578b --\x3e\n    <subtype>_anon._sub._metrics._tcp</subtype>\n    \x3c!-- \u6ce8\u518c\u5230\u7684\u7c7b\u578b --\x3e\n    \x3c!-- \u9ed8\u8ba4 .local --\x3e\n    <domain-name>.local</domain-name>\n    \x3c!-- \u4e3b\u673a\u540d FQDN --\x3e\n    <host-name>my.host.test<host-name>\n    \x3c!-- TXT --\x3e\n    <txt-record>path=/metrics</txt-record>\n  </service>\n</service-group>\n')),(0,n.kt)("h2",u({},{id:"services"}),"services"),(0,n.kt)("h3",u({},{id:"prometheus"}),"prometheus"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml",metastring:'title="prometheus.service"',title:'"prometheus.service"'}),'<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service protocol="ipv4">\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n    <txt-record>path=/metrics</txt-record>\n  </service>\n</service-group>\n')),(0,n.kt)("h2",u({},{id:"afpd"}),"afpd"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml",metastring:'title="afpd.service"',title:'"afpd.service"'}),'<?xml version="1.0" standalone=\'no\'?>\n<!DOCTYPE service-group SYSTEM "avahi-service.dtd">\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n  <service>\n    <type>_afpovertcp._tcp</type>\n    <port>548</port>\n  </service>\n  <service>\n    <type>_device-info._tcp</type>\n    <port>0</port>\n    <txt-record>model=Xserve</txt-record>\n  </service>\n</service-group>\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"model - /System/Library/CoreServices/CoreTypes.bundle/Contents/Info.plist",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Xserve"),(0,n.kt)("li",{parentName:"ul"},"PowerBook"),(0,n.kt)("li",{parentName:"ul"},"PowerMac"),(0,n.kt)("li",{parentName:"ul"},"Macmini"),(0,n.kt)("li",{parentName:"ul"},"iMac"),(0,n.kt)("li",{parentName:"ul"},"MacBook"),(0,n.kt)("li",{parentName:"ul"},"MacBookPro"),(0,n.kt)("li",{parentName:"ul"},"MacBookAir"),(0,n.kt)("li",{parentName:"ul"},"MacPro"),(0,n.kt)("li",{parentName:"ul"},"AppleTV1,1"),(0,n.kt)("li",{parentName:"ul"},"AirPort"),(0,n.kt)("li",{parentName:"ul"},"iPhone")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"howl")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'"ServerName" _device-info._tcp local. 1 "TXTVersion=1.0" "model=Xserve"\n"ServerName" _afpovertcp._tcp  local. 548\n')),(0,n.kt)("h3",u({},{id:"smb"}),"SMB"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml",metastring:'title="smb.service"',title:'"smb.service"'}),'<service-group>\n <name replace-wildcards="yes">SMB on %h</name>\n <service>\n   <type>_smb._tcp</type>\n   <port>445</port>\n </service>\n</service-group>\n')),(0,n.kt)("h3",u({},{id:"misc"}),"Misc"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" standalone=\'no\'?>\n<!DOCTYPE service-group SYSTEM "avahi-service.dtd">\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n  <service>\n    <type>_afpovertcp._tcp</type>\n    <port>548</port>\n  </service>\n  <service>\n    <type>_smb._tcp</type>\n    <port>139</port>\n  </service>\n  <service>\n    <type>_rfb._tcp</type>\n    <port>5901</port>\n  </service>\n  <service>\n    <type>_device-info._tcp</type>\n    <port>0</port>\n    <txt-record>model=RackMac</txt-record>\n  </service>\n  <service>\n    <type>_http._tcp</type>\n    <port>80</port>\n  </service>\n  <service>\n    <type>_ssh._tcp</type>\n    <port>22</port>\n  </service>\n  <service>\n    <type>_sftp-ssh._tcp</type>\n    <port>22</port>\n  </service>\n</service-group>\n')),(0,n.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",u({},{id:"dbus_bus_request_name-connection-13-is-not-allowed-to-own-the-service-orgfreedesktopavahi-due-to-security-policies-in-the-configuration-file"}),'dbus_bus_request_name(): Connection ":1.3" is not allowed to own the service "org.freedesktop.Avahi" due to security policies in the configuration file'))}k.isMDXComponent=!0}}]);