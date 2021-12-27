"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96006],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"ifconfig",title:"ifconfig"},c=void 0,p={unversionedId:"ops/network/tool/ifconfig",id:"ops/network/tool/ifconfig",title:"ifconfig",description:"Tips",source:"@site/notes/ops/network/tool/ifconfig.md",sourceDirName:"ops/network/tool",slug:"/ops/network/tool/ifconfig",permalink:"/notes/ops/network/tool/ifconfig",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/tool/ifconfig.md",tags:[],version:"current",frontMatter:{id:"ifconfig",title:"ifconfig"},sidebar:"docs",previous:{title:"Bonding",permalink:"/notes/ops/network/tool/bonding"},next:{title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6",permalink:"/notes/ops/network/tool/"}},u=[{value:"Tips",id:"tips",children:[],level:2},{value:"\u591a\u7f51\u5361\u914d\u7f6e",id:"\u591a\u7f51\u5361\u914d\u7f6e",children:[],level:2}],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5224\u65ad\u8def\u7531\u4f1a\u600e\u4e48\u8d70\nip route get 192.168.8.135 from 192.168.8.140\n\nsysctl net.ipv4.ip_forward\n\nip rule add from <source>/<mask> table <name>\nip route add 1.2.3.4/24 via <router> dev eth4 table <name>\n# http://wiki.wlug.org.nz/SourceBasedRouting\n# http://lartc.org/howto/lartc.rpdb.html\n\necho 200 isp2 >> /etc/iproute2/rt_tables\nip rule add from <interface_IP> dev <interface> table isp2\nip route add default via <gateway_IP> dev <interface> table isp2\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"socat \u53ef\u4ee5\u6307\u5b9a interface, nc \u4e0d\u53ef\u4ee5"),(0,i.kt)("li",{parentName:"ul"},"socat \u5728\u5404\u4e2a\u5e73\u53f0\u4e0b\u7edf\u4e00, nc \u6709\u517c\u5bb9\u95ee\u9898")),(0,i.kt)("h2",{id:"\u591a\u7f51\u5361\u914d\u7f6e"},"\u591a\u7f51\u5361\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.hi-linux.com/posts/64963.html"},"https://www.hi-linux.com/posts/64963.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Network_configuration"},"Network configuration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Network_configuration_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"},"\u7b80\u4f53\u4e2d\u6587"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f53\u524d\u8def\u7531\u72b6\u6001\nip route show\n# main \u8868\u4e2d\u7684\u8def\u7531\nip route list table main\n\n# Linux \u652f\u6301 256 \u5f20\u8def\u7531\u8868\n# \u5f53\u524d\u8def\u7531\u8868\u522b\u540d\ncat /etc/iproute2/rt_tables\n\n# \u7b80\u5355\u7684\u8ba9\u4e00\u4e2a ip \u8d70\u5355\u4e2a\u7f51\u5361\n# \u5982\u679c\u6709\u591a\u7f51\u5361\u65f6\u53ef\u4ee5\u5229\u7528\nip route add default via 192.168.1.120 dev eth1 table 120\nip rule add from 192.168.1.120 table 120\n")))}f.isMDXComponent=!0}}]);