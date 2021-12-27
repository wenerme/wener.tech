"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92117],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return I}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=o(i),I=n,N=s["".concat(m,".").concat(I)]||s[I]||c[I]||a;return i?r.createElement(N,l(l({ref:t},p),{},{components:i})):r.createElement(N,l({ref:t},p))}));function I(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=s;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var o=2;o<a;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}s.displayName="MDXCreateElement"},5645:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var r=i(87462),n=i(63366),a=(i(67294),i(3905)),l=["components"],u={title:"\u786c\u4ef6\u63a5\u53e3"},m=void 0,o={unversionedId:"hardware/interface",id:"hardware/interface",title:"\u786c\u4ef6\u63a5\u53e3",description:"USB",source:"@site/notes/hardware/interface.md",sourceDirName:"hardware",slug:"/hardware/interface",permalink:"/notes/hardware/interface",editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/interface.md",tags:[],version:"current",frontMatter:{title:"\u786c\u4ef6\u63a5\u53e3"},sidebar:"docs",previous:{title:"\u786c\u4ef6\u8bcd\u6c47",permalink:"/notes/hardware/glossary"},next:{title:"Home Assistant",permalink:"/notes/hardware/iot/home-assistant"}},p=[{value:"USB",id:"usb",children:[],level:2},{value:"PCIe",id:"pcie",children:[],level:2},{value:"Mini PCIe",id:"mini-pcie",children:[],level:2}],c={toc:p};function s(e){var t=e.components,u=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usb"},"USB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/USB#System_design"},"\u7cfb\u7edf\u7ed3\u6784"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Host + one or more downstream ports + multiple peripherals"),(0,a.kt)("li",{parentName:"ul"},"Hubs - \u6700\u591a 5 \u5c42"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u53ef\u4ee5\u6709\u591a\u4e2a\u63a7\u5236\u5668\uff0c\u6bcf\u4e2a\u63a7\u5236\u5668\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a host \u6700\u591a 127 \u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8bbe\u5907\u53ef\u4ee5\u6709\u591a\u4e2a\u903b\u8f91\u8bbe\u5907 - device functions"),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u8bbe\u5907\u53ef\u63d0\u4f9b\u591a\u4e2a\u529f\u80fd - webcam + microphone"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u5408\u8bbe\u5907\u8fde\u63a5\u903b\u8f91\u8bbe\u5907\u5230\u5185\u5efa Hub")))),(0,a.kt)("h2",{id:"pcie"},"PCIe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/PCI_Express"},"PCI Express"))),(0,a.kt)("h2",{id:"mini-pcie"},"Mini PCIe"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{src:i(87709).Z})),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://pinoutguide.com/Slots/mini_pcie_pinout.shtml"},"pinout"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/PCI_Express#Electrical_interface"},"PCI Express Mini \u63a5\u53e3"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PCIe/PCI Express \xd71 - \u5e26 SMBus"),(0,a.kt)("li",{parentName:"ul"},"USB 2.0"),(0,a.kt)("li",{parentName:"ul"},"\u8bca\u65ad LEDs - \u4f8b\u5982 WiFi \u7f51\u7edc\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"SIM \u5361 - \u9488\u5bf9 GSM, WCDMA \u5e94\u7528 - UIM signals on spec"),(0,a.kt)("li",{parentName:"ul"},"\u672a\u6765\u6269\u5c55 PCIe lane"),(0,a.kt)("li",{parentName:"ul"},"1.5v, 3.3v \u4f9b\u7535"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://electronics.stackexchange.com/questions/26961"},"WiFi module says \u201cmini PCI-e format\u201d with \u201cUSB host interface\u201d - what does this mean?"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PCIe \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"USB2 data \u4f7f\u7528 pin 36, 38")))))),(0,a.kt)("h1",{id:"hdmi"},"HDMI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HDMI 2.1 4K60 HDR10, Dolby Vision"),(0,a.kt)("li",{parentName:"ul"},"HDMI 2.0a 2160p, Dolby Vision, HDR10"),(0,a.kt)("li",{parentName:"ul"},"HDMI 1.4 720p 1080p")))}s.isMDXComponent=!0},87709:function(e,t){t.Z="data:image/gif;base64,R0lGODlhpwE4AMQfAMDAwAAAAPz8ABN4NBeRPxaNPampAJeXAOzsABWEOdraAPT0ABeUQLOzAMvLAMPDALu7ANPTAOTkABaKPA9YJ4uLABWHOhFnLfDw8KSjAN/fABR/NwMDA5+fAAMDAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVDQUJEMUYyQ0M0RkU4MTFCMUU3RTU4RTU2NEM1MUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY2NkJFMEExNEZEMDExRTg5OEUwRTQyMEUxNTNFOUE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY2NkJFMEEwNEZEMDExRTg5OEUwRTQyMEUxNTNFOUE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NURBQkQxRjJDQzRGRTgxMUIxRTdFNThFNTY0QzUxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUNBQkQxRjJDQzRGRTgxMUIxRTdFNThFNTY0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"}}]);