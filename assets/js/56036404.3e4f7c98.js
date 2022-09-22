"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42767],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=u,v=s["".concat(o,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:u,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(96600),u=n(27279),a=(n(59496),n(49613)),i=["components"],l={title:"udev"},o=void 0,d={unversionedId:"os/linux/dev/udev",id:"os/linux/dev/udev",title:"udev",description:"- udev",source:"@site/notes/os/linux/dev/udev.md",sourceDirName:"os/linux/dev",slug:"/os/linux/dev/udev",permalink:"/notes/os/linux/dev/udev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/dev/udev.md",tags:[],version:"current",frontMatter:{title:"udev"},sidebar:"docs",previous:{title:"PCI",permalink:"/notes/os/linux/dev/pci"},next:{title:"USB over IP",permalink:"/notes/os/linux/dev/usbip"}},c={},p=[{value:"unable to create temporary db file &#39;/run/udev/data/c189:39.tmp&#39;: Permission denied",id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied",level:2}],s={toc:p};function m(e){var t=e.components,n=(0,u.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"udev",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"systemd \u4e00\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"wikipedia ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Udev"},"udev")),(0,a.kt)("li",{parentName:"ul"},"archlinux ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/udev"},"udev")))),(0,a.kt)("li",{parentName:"ul"},"eudev",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Gentoo's fork of udev"),(0,a.kt)("li",{parentName:"ul"},"gentoo wiki ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Eudev"},"eudev")),(0,a.kt)("li",{parentName:"ul"},"\u975e systemd \u73af\u5883\u4e00\u822c\u4f7f\u7528 eudev"))),(0,a.kt)("li",{parentName:"ul"},"busybox \u7684 mdev \u662f\u4e2a\u66f4\u52a0\u7b80\u5316\u7684\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u7ba1\u7406\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u53d6\u4ee3 hotplug\uff0chwdetect"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/udev/rules.d/*.rules")),(0,a.kt)("li",{parentName:"ul"},"/etc/udev/rules.d"),(0,a.kt)("li",{parentName:"ul"},"/run/udev/rules.d"),(0,a.kt)("li",{parentName:"ul"},"/lib/udev/rules.d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"},"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apk add eudev\nservice udev start\nrc-update add udev sysinit\n\nudevadm monitor\n\n# \u8bbe\u5907\u4fe1\u606f\nudevadm info -p /devices/pci0000:00/0000:00:14.0/usb1/1-1\nudevadm info -q path -n input/mouse1\nudevadm test /devices/pci0000:00/0000:00:14.0/usb1/1-1\n\nudevadm control --reload-rules\n")),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied"},"unable to create temporary db file '/run/udev/data/c189:39.tmp': Permission denied"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"udevadm test \u51fa\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 sudo \u5373\u53ef")))}m.isMDXComponent=!0}}]);