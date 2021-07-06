(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||b[s]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var c=2;c<i;c++)u[c]=n[c];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},433:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(1114)),u={title:"udev"},o={unversionedId:"os/linux/dev/udev",id:"os/linux/dev/udev",isDocsHomePage:!1,title:"udev",description:"- udev",source:"@site/notes/os/linux/dev/udev.md",slug:"/os/linux/dev/udev",permalink:"/notes/os/linux/dev/udev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/dev/udev.md",version:"current",sidebar:"docs",previous:{title:"rootfs",permalink:"/notes/os/linux/dev/rootfs"},next:{title:"dmidecode",permalink:"/notes/os/linux/hardware/dmidecode"}},l=[{value:"unable to create temporary db file &#39;/run/udev/data/c189:39.tmp&#39;: Permission denied",id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"udev",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"systemd \u4e00\u90e8\u5206"),Object(i.b)("li",{parentName:"ul"},"wikipedia ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Udev"},"udev")),Object(i.b)("li",{parentName:"ul"},"archlinux ",Object(i.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/udev"},"udev")))),Object(i.b)("li",{parentName:"ul"},"eudev",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Gentoo's fork of udev"),Object(i.b)("li",{parentName:"ul"},"gentoo wiki ",Object(i.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Eudev"},"eudev")),Object(i.b)("li",{parentName:"ul"},"\u975e systemd \u73af\u5883\u4e00\u822c\u4f7f\u7528 eudev"))),Object(i.b)("li",{parentName:"ul"},"busybox \u7684 mdev \u662f\u4e2a\u66f4\u52a0\u7b80\u5316\u7684\u7248\u672c"),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbe\u5907\u7ba1\u7406\u5668"),Object(i.b)("li",{parentName:"ul"},"\u53d6\u4ee3 hotplug\uff0chwdetect"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/etc/udev/rules.d/*.rules")),Object(i.b)("li",{parentName:"ul"},"/etc/udev/rules.d"),Object(i.b)("li",{parentName:"ul"},"/run/udev/rules.d"),Object(i.b)("li",{parentName:"ul"},"/lib/udev/rules.d"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"},"https://github.com/micronucleus/micronucleus/blob/master/commandline/49-micronucleus.rules"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"apk add eudev\nservice udev start\nrc-update add udev sysinit\n\nudevadm monitor\n\n# \u8bbe\u5907\u4fe1\u606f\nudevadm info -p /devices/pci0000:00/0000:00:14.0/usb1/1-1\nudevadm info -q path -n input/mouse1\nudevadm test /devices/pci0000:00/0000:00:14.0/usb1/1-1\n\nudevadm control --reload-rules\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"unable-to-create-temporary-db-file-runudevdatac18939tmp-permission-denied"},"unable to create temporary db file '/run/udev/data/c189:39.tmp': Permission denied"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"udevadm test \u51fa\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 sudo \u5373\u53ef")))}d.isMDXComponent=!0}}]);