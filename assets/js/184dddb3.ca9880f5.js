"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55605],{49613:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44780:function(e,r,t){t.r(r),t.d(r,{assets:function(){return h},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=t(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(l)for(var t of l(r))u.call(r,t)&&d(e,t,r[t]);return e},s=(e,r)=>i(e,o(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const f={id:"arduino",title:"Arduino"},g="Arduino",b={unversionedId:"hardware/microcontroller/dev/arduino",id:"hardware/microcontroller/dev/arduino",title:"Arduino",description:"* arduino/arduino-cli",source:"@site/../notes/hardware/microcontroller/dev/arduino.md",sourceDirName:"hardware/microcontroller/dev",slug:"/hardware/microcontroller/dev/arduino",permalink:"/notes/hardware/microcontroller/dev/arduino",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/microcontroller/dev/arduino.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602925278,formattedLastUpdatedAt:"Oct 17, 2020",frontMatter:{id:"arduino",title:"Arduino"},sidebar:"docs",previous:{title:"\u5185\u5b58",permalink:"/notes/hardware/memory"},next:{title:"TamaGo",permalink:"/notes/hardware/microcontroller/dev/tamago"}},h={},y=[{value:"managers",id:"managers",level:2},{value:"cli",id:"cli",level:2}],v={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(k,s(p(p({},v),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"arduino"}),"Arduino"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/arduino/arduino-cli"}),"arduino/arduino-cli"))),(0,n.kt)("h2",p({},{id:"managers"}),"managers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://arduino.esp8266.com/stable/package_esp8266com_index.json"}),"http://arduino.esp8266.com/stable/package_esp8266com_index.json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://digistump.com/package_digistump_index.json"}),"http://digistump.com/package_digistump_index.json")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"http://drazzy.com/package_drazzy.com_index.json"}),"http://drazzy.com/package_drazzy.com_index.json"))),(0,n.kt)("h2",p({},{id:"cli"}),"cli"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://arduino.stackexchange.com/questions/15893"}),"How to compile, upload and monitor via the Linux command line?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/arduino/serial-discovery"}),"https://github.com/arduino/serial-discovery")),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS - $HOME/Library/Arduino15/arduino-cli.yaml")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# macos\nbrew install arduino-cli\n\n# linux\ncurl -LO https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz\ntar zxvf arduino-cli_latest_Linux_64bit.tar.gz\nsudo mv arduino-cli /usr/local/bin/\n\n# alpinelinux\n# \u4f9d\u7136\u4f1a\u6709 __strdup: symbol not found\n# \u9664\u975e\u4f7f\u7528 glibc \u5426\u5219\u65e0\u89e3\napk add libc6-compat gcompat\n\narduino-cli config init\n\narduino-cli core update-index\narduino-cli core search\n\n# \u5305\u542b\u5f88\u591a\u57fa\u7840\u5de5\u5177\narduino-cli coree install arduino:avr\n\narduino-cli core update-index --additional-urls http://digistump.com/package_digistump_index.json\narduino-cli core install digistump:avr --additional-urls http://digistump.com/package_digistump_index.json\n\n# \u5141\u8bb8\u64cd\u4f5c serial\nsudo adduser $USER dialout\n\narduino-cli board list\n\narduino-cli sketch new FirstSketch\ncd FirstSketch\n# arduino:avr:uno\narduino-cli compile -b digistump:avr:digispark-tiny\n")))}O.isMDXComponent=!0}}]);