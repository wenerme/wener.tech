(window.webpackJsonp=window.webpackJsonp||[]).push([[1008],{1081:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(1169)),o={title:"OpenRC"},c={unversionedId:"os/linux/init/openrc",id:"os/linux/init/openrc",isDocsHomePage:!1,title:"OpenRC",description:"- OpenRC \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/linux/init/openrc.md",slug:"/os/linux/init/openrc",permalink:"/notes/os/linux/init/openrc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/openrc.md",version:"current",sidebar:"docs",previous:{title:"Init Awesome",permalink:"/notes/os/linux/init/init-awesome"},next:{title:"s6",permalink:"/notes/os/linux/init/s6"}},l=[{value:"/etc/inittab",id:"etcinittab",children:[]},{value:"failed to add service <code>sysfs&#39; to runlevel</code>boot&#39;: No such file or directory",id:"failed-to-add-service-sysfs-to-runlevelboot-no-such-file-or-directory",children:[]},{value:"is the name of a real and virtual service",id:"is-the-name-of-a-real-and-virtual-service",children:[]},{value:"restart",id:"restart",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/OpenRC/openrc"},"OpenRC")," \u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u8f7b\u91cf\u7ea7 init \u7cfb\u7edf",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 Linux, FreeBSD, NetBSD"),Object(a.b)("li",{parentName:"ul"},"\u6838\u5fc3 900k"))),Object(a.b)("li",{parentName:"ul"},"2 BSD \u534f\u8bae"),Object(a.b)("li",{parentName:"ul"},"C+Shell \u5b9e\u73b0"),Object(a.b)("li",{parentName:"ul"},"\u811a\u672c\u7ed3\u6784\u4e0a\u7c7b\u4f3c\u4e8e sysvinit - \u4f46\u66f4\u7b80\u5355"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 supervise-daemon 0.21+"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 /sbin/init - 0.25+")))),Object(a.b)("h2",{id:"etcinittab"},"/etc/inittab"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"::sysinit:/sbin/openrc sysinit\n::sysinit:/sbin/openrc boot\n::wait:/sbin/openrc default\n\n# Set up a couple of getty's\ntty1::respawn:/sbin/getty 38400 tty1\ntty2::respawn:/sbin/getty 38400 tty2\ntty3::respawn:/sbin/getty 38400 tty3\ntty4::respawn:/sbin/getty 38400 tty4\ntty5::respawn:/sbin/getty 38400 tty5\ntty6::respawn:/sbin/getty 38400 tty6\n\n# Put a getty on the serial port\n#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100\n\n# Stuff to do for the 3-finger salute\n::ctrlaltdel:/sbin/reboot\n\n# Stuff to do before rebooting\n::shutdown:/sbin/openrc shutdown\n")),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"failed-to-add-service-sysfs-to-runlevelboot-no-such-file-or-directory"},"failed to add service ",Object(a.b)("inlineCode",{parentName:"h2"},"sysfs' to runlevel"),"boot': No such file or directory"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"for svc in $BOOT_SERVICES; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\n")),Object(a.b)("h2",{id:"is-the-name-of-a-real-and-virtual-service"},"is the name of a real and virtual service"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"virtual service",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u662f openrc \u4e2d provide \u540e\u9762\u7684\u5185\u5bb9"))),Object(a.b)("li",{parentName:"ul"},"real service",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u662f /etc/init.d \u4e0b\u540d\u5b57")))),Object(a.b)("p",null,"provide \u7684\u540d\u5b57\u548c\u5b9e\u9645\u670d\u52a1\u540d\u5b57\u51b2\u7a81"),Object(a.b)("h2",{id:"restart"},"restart"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4 0\nrespawn_delay=5\n# \u9ed8\u8ba4 10\nrespawn_max=0\n")),Object(a.b)("p",null,"\u6216"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# \u9ed8\u8ba4 SIGTERM/5\nretry="${TINC_RETRY:-TERM/60/KILL/10}"\n')))}u.isMDXComponent=!0},1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);