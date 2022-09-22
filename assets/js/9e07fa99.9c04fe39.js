"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6903],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15910:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),i=["components"],l={title:"USB over IP"},u="USB over IP",p={unversionedId:"os/linux/dev/usbip",id:"os/linux/dev/usbip",title:"USB over IP",description:"- USB/IP",source:"@site/../notes/os/linux/dev/usbip.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/usbip",permalink:"/notes/os/linux/dev/usbip",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/dev/usbip.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626706991,formattedLastUpdatedAt:"Jul 19, 2021",frontMatter:{title:"USB over IP"},sidebar:"docs",previous:{title:"udev",permalink:"/notes/os/linux/dev/udev"},next:{title:"FS",permalink:"/notes/os/linux/fs/"}},c={},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usb-over-ip"},"USB over IP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB/IP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"C/S \u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"TCP \u534f\u8bae"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/readme/tools-usb-usbip-README"},"tools-usb-usbip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/usb/usbip_protocol.html"},"USB/IP protocol")),(0,a.kt)("li",{parentName:"ul"},"archlinux ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/USB/IP"},"USB/IP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cezanne/usbip-win"},"cezanne/usbip-win"),"\nUSB/IP server and a client on Windows platform"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lcgamboa/USBIP-Virtual-USB-Device"},"lcgamboa/USBIP-Virtual-USB-Device"),"\nUSBIP hardware emulation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spice-space.org/usbredir.html"},"usbredir")),(0,a.kt)("li",{parentName:"ul"},"spice ",(0,a.kt)("a",{parentName:"li",href:"https://people.freedesktop.org/~teuf/spice-doc/html/ch02s06.html"},"usb redirection"))))))}f.isMDXComponent=!0}}]);