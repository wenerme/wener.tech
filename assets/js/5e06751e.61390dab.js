"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11853],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90494:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e};const m={id:"calender",title:"\u65e5\u5386"},s="Calender",f={unversionedId:"dev/domain/calender",id:"dev/domain/calender",title:"\u65e5\u5386",description:"Tips",source:"@site/../notes/dev/domain/calender.md",sourceDirName:"dev/domain",slug:"/dev/domain/calender",permalink:"/notes/dev/domain/calender",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/domain/calender.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"calender",title:"\u65e5\u5386"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u7528\u8bcd\u5b57\u5178",permalink:"/notes/dev/dict"},next:{title:"Unicode",permalink:"/notes/dev/domain/unicode"}},v={},k=[{value:"Tips",id:"tips",level:2},{value:"FAQ",id:"faq",level:2},{value:"CalDAV vs iCalender",id:"caldav-vs-icalender",level:3}],b={toc:k};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"calender"}),"Calender"),(0,n.kt)("h2",d({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ICalendar"}),"iCalender"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540e\u7f00 .ical, .ics, .ifb, .icalendar"),(0,n.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u7c7b\u578b text/calendar"),(0,n.kt)("li",{parentName:"ul"},"RFC5545 -> RFC5546, RFC6868, RFC7529"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/CalDAV"}),"CalDAV"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/infinet/lunar-calendar"}),"infinet/lunar")," - iCal\u519c\u5386, \u8282\u6c14, \u4f20\u7edf\u8282\u65e5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations"}),"Comparison of CalDAV and CardDAV implementations")),(0,n.kt)("li",{parentName:"ul"},"ical, caldav, exchange, ews",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MS Exchange EWS"),(0,n.kt)("li",{parentName:"ul"},"caldav - ",(0,n.kt)("a",d({parentName:"li"},{href:"https://www.google.com/calendar/dav/username@gmail.com/events/"}),"https://www.google.com/calendar/dav/username@gmail.com/events/"))))),(0,n.kt)("h2",d({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",d({},{id:"caldav-vs-icalender"}),"CalDAV vs iCalender"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CalDAV",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTTP/WebDAV \u6269\u5c55"))),(0,n.kt)("li",{parentName:"ul"},"iCalender",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u79cd\u6587\u4ef6\u683c\u5f0f")))))}y.isMDXComponent=!0}}]);