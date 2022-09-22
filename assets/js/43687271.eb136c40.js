"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26894],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,v=s["".concat(l,".").concat(m)]||s[m]||c[m]||u;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,i=new Array(u);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<u;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73573:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return v},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e};const s={title:"udev"},m="udev",v={unversionedId:"os/linux/dev/udev",id:"os/linux/dev/udev",title:"udev",description:"- udev",source:"@site/../notes/os/linux/dev/udev.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/udev",permalink:"/notes/os/linux/dev/udev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/dev/udev.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623656447,formattedLastUpdatedAt:"Jun 14, 2021",frontMatter:{title:"udev"},sidebar:"docs",previous:{title:"PCI",permalink:"/notes/os/linux/dev/pci"},next:{title:"USB over IP",permalink:"/notes/os/linux/dev/usbip"}},f={},b=[{value:"unable to create temporary db file &#39;/run/udev/data/c189:39.tmp&#39;: Permission denied",id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied",level:2}],k={toc:b};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),p),u(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"udev"}),"udev"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"udev",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"systemd \u4e00\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"wikipedia ",(0,n.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Udev"}),"udev")),(0,n.kt)("li",{parentName:"ul"},"archlinux ",(0,n.kt)("a",c({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/udev"}),"udev")))),(0,n.kt)("li",{parentName:"ul"},"eudev",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gentoo's fork of udev"),(0,n.kt)("li",{parentName:"ul"},"gentoo wiki ",(0,n.kt)("a",c({parentName:"li"},{href:"https://wiki.gentoo.org/wiki/Eudev"}),"eudev")),(0,n.kt)("li",{parentName:"ul"},"\u975e systemd \u73af\u5883\u4e00\u822c\u4f7f\u7528 eudev"))),(0,n.kt)("li",{parentName:"ul"},"busybox \u7684 mdev \u662f\u4e2a\u66f4\u52a0\u7b80\u5316\u7684\u7248\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u7ba1\u7406\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u53d6\u4ee3 hotplug\uff0chwdetect"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/udev/rules.d/*.rules")),(0,n.kt)("li",{parentName:"ul"},"/etc/udev/rules.d"),(0,n.kt)("li",{parentName:"ul"},"/run/udev/rules.d"),(0,n.kt)("li",{parentName:"ul"},"/lib/udev/rules.d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"}),"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"apk add eudev\nservice udev start\nrc-update add udev sysinit\n\nudevadm monitor\n\n# \u8bbe\u5907\u4fe1\u606f\nudevadm info -p /devices/pci0000:00/0000:00:14.0/usb1/1-1\nudevadm info -q path -n input/mouse1\nudevadm test /devices/pci0000:00/0000:00:14.0/usb1/1-1\n\nudevadm control --reload-rules\n")),(0,n.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",c({},{id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied"}),"unable to create temporary db file '/run/udev/data/c189:39.tmp': Permission denied"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"udevadm test \u51fa\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 sudo \u5373\u53ef")))}y.isMDXComponent=!0}}]);