"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88402],{82225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(96600),i=n(27279),a=(n(59496),n(3905)),o=["components"],l={title:"iwd"},u=void 0,c={unversionedId:"os/linux/network/iwd",id:"os/linux/network/iwd",title:"iwd",description:"- iwd",source:"@site/notes/os/linux/network/iwd.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iwd",permalink:"/notes/os/linux/network/iwd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iwd.md",tags:[],version:"current",frontMatter:{title:"iwd"},sidebar:"docs",previous:{title:"IPVS",permalink:"/notes/os/linux/network/ipvs"},next:{title:"MTU",permalink:"/notes/os/linux/network/mtu"}},p={},s=[{value:"iw",id:"iw",level:2}],d={toc:s};function w(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=iwd&arch=x86_64&repo=community"},"iwd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"/usr/libexec/iwd - \u5b88\u62a4\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"/usr/libexec/ead - Ethernet authentication daemon"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin/iwmon - \u76d1\u542c RF \u5305"),(0,a.kt)("li",{parentName:"ul"},"/usr/bin/iwctl - \u901a\u8fc7 dbus \u4e0e iwd \u4ea4\u4e92",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f\u5206\u522b\u4f7f\u7528\u76f8\u540c\u540d\u5b57\u7684\u547d\u4ee4\u53bb\u63a7\u5236"))))),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/iwd")),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u8981\u6c42 8-63 \u4f4d ASCII \u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u6709\u4e09\u79cd\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"station - \u63a5\u6536/\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"ap - \u53d1\u9001/\u63d0\u4f9b/\u70ed\u70b9"),(0,a.kt)("li",{parentName:"ul"},"ad-hoc",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wireless_ad_hoc_network"},"Wireless adhoc network"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apk add iwd\nservice iwd start\n")),(0,a.kt)("h2",{id:"iw"},"iw"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"device list\ndevice wlan0 show\ndevice wlan0 set-property Powered on\ndevice wlan0 set-property Mode station\n\nstation wlan0 scan\n# \u8fde\u63a5 - \u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\nstation wlan0 connect <SSID>\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\nadapter list\nadapter wlan0 show\n# \u67e5\u770b\u8fde\u63a5\u8fc7\u7684\u7f51\u7edc\n# \u53ef\u4ee5\u8bbe\u7f6e AutoConnect - \u9ed8\u8ba4\u5f00\u542f\nknown-networks list\n\n# \u67e5\u770b\u652f\u6301 wsc \u7684\u8bbe\u5907\nwsc list\n")))}w.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),w=i,m=d["".concat(u,".").concat(w)]||d[w]||p[w]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);