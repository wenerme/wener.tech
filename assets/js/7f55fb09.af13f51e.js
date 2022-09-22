"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92060],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return k}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),s=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(r),k=n,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return r?a.createElement(d,i(i({ref:e},u),{},{components:r})):a.createElement(d,i({ref:e},u))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27981:function(t,e,r){r.r(e),r.d(e,{assets:function(){return N},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&u(t,r,e[r]);if(p)for(var r of p(e))s.call(e,r)&&u(t,r,e[r]);return t};const c={id:"esp8266",title:"ESP8266"},k="ESP8266",d={unversionedId:"hardware/soc/esp8266/esp8266",id:"hardware/soc/esp8266/esp8266",title:"ESP8266",description:"- wiki ESP8266",source:"@site/../notes/hardware/soc/esp8266/README.md",sourceDirName:"hardware/soc/esp8266",slug:"/hardware/soc/esp8266/",permalink:"/notes/hardware/soc/esp8266/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/soc/esp8266/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{id:"esp8266",title:"ESP8266"},sidebar:"docs",previous:{title:"ESP32",permalink:"/notes/hardware/soc/esp32/"},next:{title:"\u95ea\u5b58",permalink:"/notes/hardware/storage/flash"}},N={},f=[{value:"Dev",id:"dev",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2}],h={toc:f};function g(t){var e,r=t,{components:n}=r,u=((t,e)=>{var r={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&s.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=m(m({},h),u),l(e,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"esp8266"}),"ESP8266"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wiki ",(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ESP8266"}),"ESP8266")),(0,a.kt)("li",{parentName:"ul"},"ESP8285 \u4e3a ESP8266 1 MiB Flash"),(0,a.kt)("li",{parentName:"ul"},"Spec",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5904\u7406\u5668 L106 32-bit RISC"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"32 KiB instruction RAM"),(0,a.kt)("li",{parentName:"ul"},"32 KiB instruction cache RAM"),(0,a.kt)("li",{parentName:"ul"},"80 KiB user-data RAM"),(0,a.kt)("li",{parentName:"ul"},"16 KiB ETS system-data RAM"))),(0,a.kt)("li",{parentName:"ul"},"\u5916\u90e8 QSPI \u95ea\u5b58 16 MiB - (512 KiB to 4 MiB typically included)"),(0,a.kt)("li",{parentName:"ul"},"IEEE 802.11 b/g/n Wi-Fi",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Integrated TR switch, balun, LNA, power amplifier and matching network"),(0,a.kt)("li",{parentName:"ul"},"WEP or WPA/WPA2 authentication, or open networks"))),(0,a.kt)("li",{parentName:"ul"},"16 GPIO pins"),(0,a.kt)("li",{parentName:"ul"},"SPI"),(0,a.kt)("li",{parentName:"ul"},"I\xb2C (software implementation)"),(0,a.kt)("li",{parentName:"ul"},"I\xb2S interfaces with DMA (sharing pins with GPIO)"),(0,a.kt)("li",{parentName:"ul"},"UART on dedicated pins, plus a transmit-only UART can be enabled on GPIO2"),(0,a.kt)("li",{parentName:"ul"},"10-bit ADC (successive approximation ADC)"))),(0,a.kt)("li",{parentName:"ul"},"modules",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ESP-01 - 2014-8"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/espressif/ESP8266_RTOS_SDK"}),"https://github.com/espressif/ESP8266_RTOS_SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.espressif.com/projects/esp8266-rtos-sdk/en/latest/"}),"https://docs.espressif.com/projects/esp8266-rtos-sdk/en/latest/")),(0,a.kt)("li",{parentName:"ul"},"FreeRTOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/espressif/esptool"}),"https://github.com/espressif/esptool"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ESP8266 and ESP32 serial bootloader utility"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/espressif/esp-at"}),"https://github.com/espressif/esp-at"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AT application for ESP32 ESP-IDF & ESP32S2 ESP-IDF & ESP8266 ESP8266_RTOS_SDK"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/mertenats/NodeMCU-and-JavaScript"}),"https://github.com/mertenats/NodeMCU-and-JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"http://www.espruino.com/"}),"http://www.espruino.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://tinygo.org/microcontrollers/machine/esp8266/"}),"https://tinygo.org/microcontrollers/machine/esp8266/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://tinygo.org/microcontrollers/esp8266/"}),"https://tinygo.org/microcontrollers/esp8266/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/solarwinds/tinygo-lessons"}),"https://github.com/solarwinds/tinygo-lessons")),(0,a.kt)("li",{parentName:"ul"},"ESP8266 \u6700\u65b0 SDK ",(0,a.kt)("a",m({parentName:"li"},{href:"http://wiki.ai-thinker.com/esp8266/sdk"}),"http://wiki.ai-thinker.com/esp8266/sdk"))),(0,a.kt)("h2",m({},{id:"dev"}),"Dev"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.espressif.com/projects/esp-idf/en/release-v3.0/get-started/linux-setup.html#standard-setup-of-toolchain-for-linux"}),"https://docs.espressif.com/projects/esp-idf/en/release-v3.0/get-started/linux-setup.html#standard-setup-of-toolchain-for-linux"))),(0,a.kt)("h2",m({},{id:"\u6a21\u5757"}),"\u6a21\u5757"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ESP8266"}),"ESP8266"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Pins"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"LED"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Shielded"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ESP-01"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u274c"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u84dd\u8272 512 KiB; AI-Thinker \u9ed1\u8272 1 MiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ESP-01S"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"6"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u274c"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1 Mib Flash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ESP-12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"FCC,CE \u6279\u51c6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ESP-12E"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4 MiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ESP-12F"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"12"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5929\u7ebf\u589e\u5f3a")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76d7\u7248 ESP-01",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0a\u7535\u540e\u4e0d\u4f1a\u8f93\u51fa READY \u4fe1\u606f\uff0c\u800c\u662f\u8f93\u51fa INVAILD \u5931\u6548\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5177\u5907\u7279\u6027",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u5e26\u514d\u8d39\u4e91\u670d\u52a1\uff0c\u53ea\u80fd\u5728\u5c40\u57df\u7f51\u5185\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bbe IO \u53e3\u7684\u9ad8\u4f4e\u7535\u5e73"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bfb\u53d6 IO \u53e3\u7535\u5e73\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bfb\u53d6 ADC \u7535\u538b"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u5347\u7ea7\u5230\u5b89\u4fe1\u53ef\u6700\u65b0\u5b98\u65b9\u7248\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u8bbe\u672c\u673a\u5728\u7535\u8111\u4e0a\u663e\u793a\u5728 HOST NAME \u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u7528\u7f51\u7edc\u65e0\u7ebf\u65b9\u5f0f\u6267\u884c AT \u6307\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u540e\u7eed\u7684\u4e0a\u7535\u540e\uff0c\u76f4\u63a5\u7528 APP \u63a7\u5236\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u5b89\u4fe1\u53ef\u5b98\u65b9\u4ea7\u54c1\uff0c\u56e0\u6b64\u4e0d\u80fd\u83b7\u5f97\u6280\u672f\u652f\u6301\u3002")))))))}g.isMDXComponent=!0}}]);