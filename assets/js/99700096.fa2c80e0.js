"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86881],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82444:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={date:"2016-8-6 23:43",tags:["Game","Android"]},s="Play Titans using shell",u={permalink:"/story/2016/08/06/2016/tap-titans",editUrl:"https://github.com/wenerme/wener/edit/master/story/2016/2016-08-06-tap-titans.md",source:"@site/story/2016/2016-08-06-tap-titans.md",title:"Play Titans using shell",description:"Tap Titans on Play Store",date:"2016-08-06T23:43:00.000Z",formattedDate:"August 6, 2016",tags:[{label:"Game",permalink:"/story/tags/game"},{label:"Android",permalink:"/story/tags/android"}],readingTime:.95,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2016-8-6 23:43",tags:["Game","Android"]},prevItem:{title:"Go Redis module",permalink:"/story/go-rm"},nextItem:{title:"BBVM - BeBasic Virtual Machine",permalink:"/story/bbvm"}},p={authorsImageUrls:[]},c=[{value:"Features",id:"features",level:2},{value:"Requirement",id:"requirement",level:2},{value:"Get started",id:"get-started",level:2},{value:"How is works ?",id:"how-is-works-",level:2},{value:"Why fast ?",id:"why-fast-",level:3},{value:"How to detect the screen event ?",id:"how-to-detect-the-screen-event-",level:3},{value:"More",id:"more",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.gamehivecorp.taptitans"},"Tap Titans")," on Play Store"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auto upgrade"),(0,o.kt)("li",{parentName:"ul"},"Auto spell skill"),(0,o.kt)("li",{parentName:"ul"},"Auto start challenge"),(0,o.kt)("li",{parentName:"ul"},"Auto close ad dialog"),(0,o.kt)("li",{parentName:"ul"},"Verify fast tap (0.03s/tap)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Only tested on Nexus 5, different devices may use different coordinates and event dev."),(0,o.kt)("li",{parentName:"ul"},"Used to plat tiantis long time ago, may not works in current version.Different version may use different color and coordinates"))),(0,o.kt)("h2",{id:"requirement"},"Requirement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ADB"),(0,o.kt)("li",{parentName:"ul"},"Image Magic"),(0,o.kt)("li",{parentName:"ul"},"Bash")),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start game"),(0,o.kt)("li",{parentName:"ul"},"Get source ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh"},"tap-titans-play.sh"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x play.sh\n# Connect through lan, so you don't have to use the usb\n./play.sh use-tcp\n# Push the pre-generated event file\nadb push events /mnt/sdcard\n# Start playing\n./play.sh\n")),(0,o.kt)("h2",{id:"how-is-works-"},"How is works ?"),(0,o.kt)("h3",{id:"why-fast-"},"Why fast ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Because I don't use ",(0,o.kt)("inlineCode",{parentName:"li"},"adb shell input tap"),", instead use a generated file that represent a tap event, then ",(0,o.kt)("inlineCode",{parentName:"li"},"cat tap > /dev/input/event1"),"."),(0,o.kt)("li",{parentName:"ul"},"Use generated shell run in android.")),(0,o.kt)("h3",{id:"how-to-detect-the-screen-event-"},"How to detect the screen event ?"),(0,o.kt)("p",null,"Use screen capture, then use the image magic to check the color,kind of slowly, but works."),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh"},"source")))}d.isMDXComponent=!0}}]);