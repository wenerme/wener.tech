(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||b[m]||c;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},976:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),c=(n(0),n(1152)),a={title:"CentOS FAQ"},i={unversionedId:"os/centos/centos-faq",id:"os/centos/centos-faq",isDocsHomePage:!1,title:"CentOS FAQ",description:"- https://wiki.centos.org/FAQ/CentOS8",source:"@site/notes/os/centos/centos-faq.md",slug:"/os/centos/centos-faq",permalink:"/notes/os/centos/centos-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/centos/centos-faq.md",version:"current",sidebar:"docs",previous:{title:"centos",permalink:"/notes/os/centos/centos"},next:{title:"centos-version",permalink:"/notes/os/centos/centos-version"}},s=[{value:"CentOS 8 os vs kickstart",id:"centos-8-os-vs-kickstart",children:[]},{value:"\u4f7f\u7528 alpine \u4e0b\u4f9d\u8d56 musl \u7684\u4e8c\u8fdb\u5236",id:"\u4f7f\u7528-alpine-\u4e0b\u4f9d\u8d56-musl-\u7684\u4e8c\u8fdb\u5236",children:[]},{value:"\u4fee\u6539\u7f51\u5361\u540d\u4e3a eth* \u7684\u5f62\u5f0f",id:"\u4fee\u6539\u7f51\u5361\u540d\u4e3a-eth-\u7684\u5f62\u5f0f",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://wiki.centos.org/FAQ/CentOS8"},"https://wiki.centos.org/FAQ/CentOS8"))),Object(c.b)("h2",{id:"centos-8-os-vs-kickstart"},"CentOS 8 os vs kickstart"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"kickstart",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u66f4\u60f3\uff0c\u53d1\u5e03\u70b9\u7684\u4ed3\u5e93\u72b6\u6001"))),Object(c.b)("li",{parentName:"ul"},"os",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5305\u4f1a\u66f4\u65b0"),Object(c.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e86 update \u4ed3\u5e93")))),Object(c.b)("h2",{id:"\u4f7f\u7528-alpine-\u4e0b\u4f9d\u8d56-musl-\u7684\u4e8c\u8fdb\u5236"},"\u4f7f\u7528 alpine \u4e0b\u4f9d\u8d56 musl \u7684\u4e8c\u8fdb\u5236"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd /etc/yum.repos.d/\nwget https://copr.fedorainfracloud.org/coprs/ngompa/musl-libc/repo/epel-7/ngompa-musl-libc-epel-7.repo\nyum install musl-libc-static\n")),Object(c.b)("h2",{id:"\u4fee\u6539\u7f51\u5361\u540d\u4e3a-eth-\u7684\u5f62\u5f0f"},"\u4fee\u6539\u7f51\u5361\u540d\u4e3a eth","*"," \u7684\u5f62\u5f0f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"http://www.itechlounge.net/2016/04/linux-how-to-rename-the-network-interface-in-centosrhel7/"},"Linux : How to rename the network interface in CentOS/RHEL7"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"nano /etc/default/grub\n# \u5728 GRUB_CMDLINE_LINUX \u4e2d\u6dfb\u52a0 net.ifnames=0 biosdevname=0\n\n# \u4ece\u65b0\u751f\u6210\u914d\u7f6e\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n\n# \u5982\u679c\u73b0\u5728\u5df2\u7ecf\u914d\u7f6e\u4e86\u7f51\u7edc, \u53ef\u5c06 ifcfg-* \u4ece\u547d\u540d\u4e3a ifcfg-eth0 \u7684\u5f62\u5f0f, \u5e76\u4fee\u6539\u914d\u7f6e\u4e2d\u7684 NAME \u548c DEVICE\n")))}u.isMDXComponent=!0}}]);