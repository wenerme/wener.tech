"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11853],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),l=["components"],o={id:"calender",title:"\u65e5\u5386"},c="Calender",p={unversionedId:"dev/domain/calender",id:"dev/domain/calender",title:"\u65e5\u5386",description:"Tips",source:"@site/../notes/dev/domain/calender.md",sourceDirName:"dev/domain",slug:"/dev/domain/calender",permalink:"/notes/dev/domain/calender",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/domain/calender.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"calender",title:"\u65e5\u5386"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u7528\u8bcd\u5b57\u5178",permalink:"/notes/dev/dict"},next:{title:"Unicode",permalink:"/notes/dev/domain/unicode"}},u={},d=[{value:"Tips",id:"tips",level:2},{value:"FAQ",id:"faq",level:2},{value:"CalDAV vs iCalender",id:"caldav-vs-icalender",level:3}],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"calender"},"Calender"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ICalendar"},"iCalender"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u540e\u7f00 .ical, .ics, .ifb, .icalendar"),(0,i.kt)("li",{parentName:"ul"},"\u5a92\u4f53\u7c7b\u578b text/calendar"),(0,i.kt)("li",{parentName:"ul"},"RFC5545 -> RFC5546, RFC6868, RFC7529"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/CalDAV"},"CalDAV"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinet/lunar-calendar"},"infinet/lunar")," - iCal\u519c\u5386, \u8282\u6c14, \u4f20\u7edf\u8282\u65e5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations"},"Comparison of CalDAV and CardDAV implementations")),(0,i.kt)("li",{parentName:"ul"},"ical, caldav, exchange, ews",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MS Exchange EWS"),(0,i.kt)("li",{parentName:"ul"},"caldav - ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/calendar/dav/username@gmail.com/events/"},"https://www.google.com/calendar/dav/username@gmail.com/events/"))))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"caldav-vs-icalender"},"CalDAV vs iCalender"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CalDAV",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HTTP/WebDAV \u6269\u5c55"))),(0,i.kt)("li",{parentName:"ul"},"iCalender",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e00\u79cd\u6587\u4ef6\u683c\u5f0f")))))}s.isMDXComponent=!0}}]);