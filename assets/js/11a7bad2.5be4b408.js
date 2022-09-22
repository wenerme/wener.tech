"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36347],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),f=o,d=b["".concat(l,".").concat(f)]||b[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},49542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return y}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e};const b={title:"BBR"},f="BBR",d={unversionedId:"os/linux/network/bbr",id:"os/linux/network/bbr",title:"BBR",description:"- BBR - Bottleneck Bandwidth and Round-trip propagation time",source:"@site/../notes/os/linux/network/bbr.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/bbr",permalink:"/notes/os/linux/network/bbr",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/bbr.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"BBR"},sidebar:"docs",previous:{title:"Linux \u7f51\u7edc",permalink:"/notes/os/linux/network/"},next:{title:"Bonding",permalink:"/notes/os/linux/network/bonding"}},m={},y=[],g={toc:y};function k(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"bbr"}),"BBR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BBR - Bottleneck Bandwidth and Round-trip propagation time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u6a21\u578b\u4e3b\u52a8\u63a2\u6d4b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TCP \u62e5\u585e\u63a7\u5236 - \u901a\u5e38 \u57fa\u4e8e\u4e22\u5305\u6765\u4f5c\u4e3a\u964d\u4f4e\u4f20\u8f93\u901f\u7387\u7684\u4fe1\u53f7"))),(0,r.kt)("li",{parentName:"ul"},"\u6709\u66f4\u9ad8\u7684\u541e\u5410\u91cf\u548c\u66f4\u4f4e\u7684\u5ef6\u8fdf"))),(0,r.kt)("li",{parentName:"ul"},"Linux 5.1 BBRv2"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a CUBIC"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/meeting/104/materials/slides-104-iccrg-an-update-on-bbr-00"}),"https://datatracker.ietf.org/meeting/104/materials/slides-104-iccrg-an-update-on-bbr-00")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/bbr"}),"google/bbr"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"sysctl net.ipv4.tcp_available_congestion_control  # \u53ef\u7528\u7684\u62e5\u585e\u63a7\u5236\u534f\u8bae - \u9ed8\u8ba4 reno,cubic\nsysctl net.ipv4.tcp_congestion_control            # \u5f53\u524d\u7684\u534f\u8bae - \u9ed8\u8ba4 cubic\n\n# \u542f\u7528 BBR\nmodprobe tcp_bbr\necho tcp_bbr >> /etc/modules-load.d/bbr.conf\necho net.core.default_qdisc=fq >> /etc/sysctl.d/bbr.conf\necho net.ipv4.tcp_congestion_control=bbr >> /etc/sysctl.d/bbr.conf\nsysctl -p /etc/sysctl.d/bbr.conf\n# \u9a8c\u8bc1\nsysctl net.ipv4.tcp_available_congestion_control\nsysctl net.ipv4.tcp_congestion_control\n")))}k.isMDXComponent=!0}}]);