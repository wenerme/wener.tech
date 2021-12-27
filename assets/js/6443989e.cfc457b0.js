"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91938],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),v=p(n),m=i,d=v["".concat(s,".").concat(m)]||v[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},12607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return v}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Avahi"},s=void 0,p={unversionedId:"service/network/avahi",id:"service/network/avahi",title:"Avahi",description:"- archlinux Avahi",source:"@site/notes/service/network/avahi.md",sourceDirName:"service/network",slug:"/service/network/avahi",permalink:"/notes/service/network/avahi",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/avahi.md",tags:[],version:"current",frontMatter:{title:"Avahi"},sidebar:"docs",previous:{title:"Tinc \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/network/tinc-faq"},next:{title:"coturn",permalink:"/notes/service/network/coturn"}},l=[{value:"services",id:"services",children:[],level:2},{value:"dbus_bus_request_name(): Connection &quot;:1.3&quot; is not allowed to own the service &quot;org.freedesktop.Avahi&quot; due to security policies in the configuration file",id:"dbus_bus_request_name-connection-13-is-not-allowed-to-own-the-service-orgfreedesktopavahi-due-to-security-policies-in-the-configuration-file",children:[],level:2}],u={toc:l};function v(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"archlinux ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Avahi"},"Avahi")),(0,o.kt)("li",{parentName:"ul"},"Alpine \u6ca1\u6709 nsswitch",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gliderlabs/docker-alpine/issues/367"},"gliderlabs/docker-alpine#367")),(0,o.kt)("li",{parentName:"ul"},"musl \u4e0d\u652f\u6301 nsswitch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://linux.die.net/man/5/avahi.service"},"https://linux.die.net/man/5/avahi.service"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# tools https://pkgs.alpinelinux.org/contents?branch=edge&name=avahi-tools&arch=x86_64&repo=main\napk add avahi avahi-tools\n\n# avahi-daemon\n# avahi-dnsconfd\nservice avahi-daemon start\n\navahi-browse --all --ignore-local --resolve --terminate\n# \u53ea\u641c\u7d22 ssh \u4e14\u663e\u793a ip\navahi-browse _ssh._tcp -tr\n\n# \u65b0\u589e\u670d\u52a1\u5b9a\u4e49\ncat <<XML > /etc/avahi/services/node-exporter.service\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service protocol="ipv4">\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n  </service>\n</service-group>\nXML\n\n# \u76f4\u63a5\u67e5\u627e\u5e76\u6253\u5370\nippfind _ipp._tcp --print\n# \u83b7\u53d6 hostname\nippfind _ipp._tcp,_universal --exec echo \'{service_hostname}\' \\;\n# \u67e5\u627e airprint\navahi-browse -rt _universal._sub._ipp._tcp\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u4e00\u4e2a\u670d\u52a1\u5206\u7ec4 - {name,service:[]} --\x3e\n<service-group>\n  \x3c!-- \u670d\u52a1\u540d --\x3e\n  \x3c!-- replace-wildcards \u66ff\u6362 %h \u4e3a hostname --\x3e\n  <name replace-wildcards="yes">%h</name>\n\n  \x3c!-- {type,port, domain-name?, host-name?, subtype:[], txt-record:[] --\x3e\n  \x3c!-- protocol="ipv4|ipv6|any" - \u9ed8\u8ba4 any --\x3e\n  <service protocol="ipv4">\n    \x3c!-- \u4f8b\u5982 _http._tcp --\x3e\n    <type>_prometheus-http._tcp</type>\n    <port>9090</port>\n\n    \x3c!-- \u5b50\u7c7b\u578b --\x3e\n    <subtype>_anon._sub._metrics._tcp</subtype>\n    \x3c!-- \u6ce8\u518c\u5230\u7684\u7c7b\u578b --\x3e\n    \x3c!-- \u9ed8\u8ba4 .local --\x3e\n    <domain-name>.local</domain-name>\n    \x3c!-- \u4e3b\u673a\u540d FQDN --\x3e\n    <host-name>my.host.test<host-name>\n    \x3c!-- TXT --\x3e\n    <txt-record>path=/metrics</txt-record>\n  </service>\n</service-group>\n')),(0,o.kt)("h2",{id:"services"},"services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service protocol="ipv4">\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n    <txt-record>path=/metrics</txt-record>\n  </service>\n</service-group>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<service-group>\n  <name replace-wildcards="yes">%h</name>\n  <service>\n    <type>_afpovertcp._tcp</type>\n    <port>548</port>\n  </service>\n  <service>\n    <type>_device-info._tcp</type>\n    <port>0</port>\n    <txt-record>model=Xserve</txt-record>\n  </service>\n</service-group>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<service-group>\n <name replace-wildcards="yes">SMB on %h</name>\n <service>\n   <type>_smb._tcp</type>\n   <port>445</port>\n </service>\n</service-group>\n')),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"dbus_bus_request_name-connection-13-is-not-allowed-to-own-the-service-orgfreedesktopavahi-due-to-security-policies-in-the-configuration-file"},'dbus_bus_request_name(): Connection ":1.3" is not allowed to own the service "org.freedesktop.Avahi" due to security policies in the configuration file'))}v.isMDXComponent=!0}}]);