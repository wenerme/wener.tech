"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92358],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,k=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49075:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Wireshark"},l=void 0,s={unversionedId:"service/network/wireshark",id:"service/network/wireshark",title:"Wireshark",description:"Tips",source:"@site/notes/service/network/wireshark.md",sourceDirName:"service/network",slug:"/service/network/wireshark",permalink:"/notes/service/network/wireshark",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/wireshark.md",tags:[],version:"current",frontMatter:{title:"Wireshark"},sidebar:"docs",previous:{title:"WireGuard",permalink:"/notes/service/network/wireguard"},next:{title:"Zerotier",permalink:"/notes/service/network/zerotier"}},c=[{value:"Tips",id:"tips",children:[],level:2},{value:"Filter",id:"filter",children:[],level:2},{value:"Remote",id:"remote",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://packetlife.net/library/cheat-sheets/"},"http://packetlife.net/library/cheat-sheets/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireshark.org/tools/"},"Wireshark \u5de5\u5177")),(0,i.kt)("li",{parentName:"ul"},"How I use Wireshark ",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=17344342"},"https://news.ycombinator.com/item?id=17344342"))),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.wireshark.org/DisplayFilters"},"https://wiki.wireshark.org/DisplayFilters")))),(0,i.kt)("li",{parentName:"ul"},"Capture",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.wireshark.org/CaptureFilters"},"https://wiki.wireshark.org/CaptureFilters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireshark.org/docs/wsug_html_chunked/ChCapCaptureFilterSection.html"},"https://www.wireshark.org/docs/wsug_html_chunked/ChCapCaptureFilterSection.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.tcpdump.org/manpages/pcap-filter.7.html"},"http://www.tcpdump.org/manpages/pcap-filter.7.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireshark.org/tools/string-cf.html"},"\u5b57\u7b26\u4e32\u5339\u914d\u751f\u6210\u5668"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dst host <name/ip>\nsrc host <name/ip>\nhost <name/ip>\n\ndst port <port>\nsrc port <port>\nport <port>\n\nicmp\nudp\ntcp\nrtsp\nrtp\n\nand &&\nor ||\nnot !\n")),(0,i.kt)("h2",{id:"remote"},"Remote"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.wireshark.org/docs/man-pages/sshdump.html"},"https://www.wireshark.org/docs/man-pages/sshdump.html")),(0,i.kt)("li",{parentName:"ul"},"Provide interfaces to capture from a remote host through SSH using a remote capture binary."),(0,i.kt)("li",{parentName:"ul"},"tshark")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh admin@192.168.1.2 tcpdump -U -s0 'not port 22' -i eth0 -w - | wireshark -k -i -\n\nmkfifo /tmp/remote\nwireshark -k -i /tmp/remote\nssh root@firewall \"tcpdump -s 0 -U -n -w - -i eth0 not port 22\" > /tmp/remote\n")))}m.isMDXComponent=!0}}]);