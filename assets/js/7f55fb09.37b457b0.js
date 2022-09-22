"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92060],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(a),k=n,d=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(d,i(i({ref:e},u),{},{components:a})):r.createElement(d,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57333:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),i=["components"],p={id:"esp8266",title:"ESP8266"},o="ESP8266",s={unversionedId:"hardware/soc/esp8266/esp8266",id:"hardware/soc/esp8266/esp8266",title:"ESP8266",description:"- wiki ESP8266",source:"@site/../notes/hardware/soc/esp8266/README.md",sourceDirName:"hardware/soc/esp8266",slug:"/hardware/soc/esp8266/",permalink:"/notes/hardware/soc/esp8266/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/hardware/soc/esp8266/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"esp8266",title:"ESP8266"},sidebar:"docs",previous:{title:"ESP32",permalink:"/notes/hardware/soc/esp32/"},next:{title:"\u95ea\u5b58",permalink:"/notes/hardware/storage/flash"}},u={},m=[{value:"Dev",id:"dev",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2}],c={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"esp8266"},"ESP8266"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wiki ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ESP8266"},"ESP8266")),(0,l.kt)("li",{parentName:"ul"},"ESP8285 \u4e3a ESP8266 1 MiB Flash"),(0,l.kt)("li",{parentName:"ul"},"Spec",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5904\u7406\u5668 L106 32-bit RISC"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"32 KiB instruction RAM"),(0,l.kt)("li",{parentName:"ul"},"32 KiB instruction cache RAM"),(0,l.kt)("li",{parentName:"ul"},"80 KiB user-data RAM"),(0,l.kt)("li",{parentName:"ul"},"16 KiB ETS system-data RAM"))),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8 QSPI \u95ea\u5b58 16 MiB - (512 KiB to 4 MiB typically included)"),(0,l.kt)("li",{parentName:"ul"},"IEEE 802.11 b/g/n Wi-Fi",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Integrated TR switch, balun, LNA, power amplifier and matching network"),(0,l.kt)("li",{parentName:"ul"},"WEP or WPA/WPA2 authentication, or open networks"))),(0,l.kt)("li",{parentName:"ul"},"16 GPIO pins"),(0,l.kt)("li",{parentName:"ul"},"SPI"),(0,l.kt)("li",{parentName:"ul"},"I\xb2C (software implementation)"),(0,l.kt)("li",{parentName:"ul"},"I\xb2S interfaces with DMA (sharing pins with GPIO)"),(0,l.kt)("li",{parentName:"ul"},"UART on dedicated pins, plus a transmit-only UART can be enabled on GPIO2"),(0,l.kt)("li",{parentName:"ul"},"10-bit ADC (successive approximation ADC)"))),(0,l.kt)("li",{parentName:"ul"},"modules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ESP-01 - 2014-8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/espressif/ESP8266_RTOS_SDK"},"https://github.com/espressif/ESP8266_RTOS_SDK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp8266-rtos-sdk/en/latest/"},"https://docs.espressif.com/projects/esp8266-rtos-sdk/en/latest/")),(0,l.kt)("li",{parentName:"ul"},"FreeRTOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/espressif/esptool"},"https://github.com/espressif/esptool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ESP8266 and ESP32 serial bootloader utility"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/espressif/esp-at"},"https://github.com/espressif/esp-at"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AT application for ESP32 ESP-IDF & ESP32S2 ESP-IDF & ESP8266 ESP8266_RTOS_SDK"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mertenats/NodeMCU-and-JavaScript"},"https://github.com/mertenats/NodeMCU-and-JavaScript")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.espruino.com/"},"http://www.espruino.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tinygo.org/microcontrollers/machine/esp8266/"},"https://tinygo.org/microcontrollers/machine/esp8266/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tinygo.org/microcontrollers/esp8266/"},"https://tinygo.org/microcontrollers/esp8266/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/solarwinds/tinygo-lessons"},"https://github.com/solarwinds/tinygo-lessons")),(0,l.kt)("li",{parentName:"ul"},"ESP8266 \u6700\u65b0 SDK ",(0,l.kt)("a",{parentName:"li",href:"http://wiki.ai-thinker.com/esp8266/sdk"},"http://wiki.ai-thinker.com/esp8266/sdk"))),(0,l.kt)("h2",{id:"dev"},"Dev"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/release-v3.0/get-started/linux-setup.html#standard-setup-of-toolchain-for-linux"},"https://docs.espressif.com/projects/esp-idf/en/release-v3.0/get-started/linux-setup.html#standard-setup-of-toolchain-for-linux"))),(0,l.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ESP8266"},"ESP8266"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Pins"),(0,l.kt)("th",{parentName:"tr",align:null},"LED"),(0,l.kt)("th",{parentName:"tr",align:null},"Shielded"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ESP-01"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u8272 512 KiB; AI-Thinker \u9ed1\u8272 1 MiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ESP-01S"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Mib Flash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ESP-12"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"FCC,CE \u6279\u51c6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ESP-12E"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"4 MiB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ESP-12F"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5929\u7ebf\u589e\u5f3a")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76d7\u7248 ESP-01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u7535\u540e\u4e0d\u4f1a\u8f93\u51fa READY \u4fe1\u606f\uff0c\u800c\u662f\u8f93\u51fa INVAILD \u5931\u6548\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5177\u5907\u7279\u6027",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u5e26\u514d\u8d39\u4e91\u670d\u52a1\uff0c\u53ea\u80fd\u5728\u5c40\u57df\u7f51\u5185\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bbe IO \u53e3\u7684\u9ad8\u4f4e\u7535\u5e73"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bfb\u53d6 IO \u53e3\u7535\u5e73\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u8bfb\u53d6 ADC \u7535\u538b"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u6307\u4ee4\u5347\u7ea7\u5230\u5b89\u4fe1\u53ef\u6700\u65b0\u5b98\u65b9\u7248\u672c"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 AT \u8bbe\u672c\u673a\u5728\u7535\u8111\u4e0a\u663e\u793a\u5728 HOST NAME \u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u7528\u7f51\u7edc\u65e0\u7ebf\u65b9\u5f0f\u6267\u884c AT \u6307\u4ee4\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u540e\u7eed\u7684\u4e0a\u7535\u540e\uff0c\u76f4\u63a5\u7528 APP \u63a7\u5236\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u5b89\u4fe1\u53ef\u5b98\u65b9\u4ea7\u54c1\uff0c\u56e0\u6b64\u4e0d\u80fd\u83b7\u5f97\u6280\u672f\u652f\u6301\u3002")))))))}k.isMDXComponent=!0}}]);