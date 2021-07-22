(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{1152:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(a),s=n,O=m["".concat(r,".").concat(s)]||m[s]||o[s]||b;return a?l.a.createElement(O,i(i({ref:t},c),{},{components:a})):l.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<b;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},684:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(8),b=(a(0),a(1152)),r={title:"\u7248\u672c\u5386\u53f2"},i={unversionedId:"os/alpine/alpine-version",id:"os/alpine/alpine-version",isDocsHomePage:!1,title:"\u7248\u672c\u5386\u53f2",description:"AlpineLinux \u7248\u672c\u5386\u53f2",source:"@site/notes/os/alpine/alpine-version.md",slug:"/os/alpine/alpine-version",permalink:"/notes/os/alpine/alpine-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-version.md",version:"current",sidebar:"docs",previous:{title:"AlpineLinux Setup",permalink:"/notes/os/alpine/alpine-setup"},next:{title:"Docker",permalink:"/notes/devops/docker/docker-intro"}},p=[{value:"3.14",id:"314",children:[]},{value:"3.13",id:"313",children:[{value:"\u53d8\u5316",id:"\u53d8\u5316",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[]}]},{value:"3.12",id:"312",children:[]},{value:"3.11",id:"311",children:[]},{value:"3.10",id:"310",children:[]},{value:"3.9",id:"39",children:[]},{value:"3.8",id:"38",children:[]},{value:"3.7",id:"37",children:[]},{value:"\u6211\u7684\u63d0\u4ea4\u6570",id:"\u6211\u7684\u63d0\u4ea4\u6570",children:[]}],c={toc:p};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"alpinelinux-\u7248\u672c\u5386\u53f2"},"AlpineLinux \u7248\u672c\u5386\u53f2"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u53d1\u5e03\u9891\u7387",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6bcf\u5e74\u4e24\u4e2a\u7248\u672c - 5 \u6708\u5de6\u53f3\u4e00\u4e2a\uff0c11 \u6708\u5de6\u53f3\u4e00\u4e2a"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u5e74\u5e74\u5e95\u7684 Linux \u7248\u672c\u4e00\u822c\u4e3a LTS - \u56e0\u6b64\u4e0b\u534a\u5e74\u7248\u672c\u4e00\u822c\u4e5f\u4f1a\u66f4\u65b0\u5185\u6838\u7248\u672c"),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7248\u672c\u7684\u652f\u6301\u5468\u671f\u7ea6\u4e3a\u4e24\u5e74 - \u4e5f\u5c31\u662f\u5171\u8ba1 4 \u4e2a\u6d3b\u8dc3\u652f\u6301\u7248\u672c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"main \u4ed3\u5e93\u652f\u6301\u4e24\u5e74"),Object(b.b)("li",{parentName:"ul"},"community \u4ed3\u5e93\u652f\u6301\u5230\u4e0b\u4e00\u4e2a\u7a33\u5b9a\u7248 - \u4e00\u822c\u534a\u5e74"))))),Object(b.b)("li",{parentName:"ul"},"\u6bcf\u6b21\u53d1\u5e03\u524d\u4f1a\u5148\u7f16\u8bd1\u6240\u6709\u5305\uff0c\u5f53\u5305\u90fd\u6709\u540e\u624d\u4f1a\u6b63\u5f0f\u53d1\u5e03",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f46\u90e8\u5206 test \u65e0\u6cd5\u901a\u8fc7\u7684\u5305\u4f1a\u88ab\u6682\u65f6\u7981\u6b62 - \u5982\u679c\u53d1\u73b0\u53ef\u4ee5\u63d0\u51fa"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/releases/"},"\u53d1\u5e03\u7248\u672c\u5386\u53f2\u65e5\u671f"))),Object(b.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Roadmap")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"3.15 \u9884\u8ba1\u4f1a\u652f\u6301 riscv64"),Object(b.b)("li",{parentName:"ul"},"s6 \u5f00\u53d1\u8005\u5728\u4e3a alpine \u5f00\u53d1 openrc \u540e\u7ee7\u670d\u52a1\u7ba1\u7406",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://skarnet.com/projects/service-manager.html"},"A new service manager for Linux distributions")))),Object(b.b)("li",{parentName:"ul"},"Linux 5.13 \u540e\u53ef\u80fd\u652f\u6301 Apple M1",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u65b0\u589e linux-m1 \u5185\u6838"),Object(b.b)("li",{parentName:"ul"},"16K page")))))),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u7248\u672c\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5347\u7ea7\u4e86 openssh \u5efa\u8bae\u91cd\u542f sshd\uff0c\u5426\u5219\u53ef\u80fd\u4e0d\u4f1a\u63a5\u53d7\u65b0\u7684\u94fe\u63a5"),Object(b.b)("li",{parentName:"ul"},"3.14 musl \u5f00\u542f\u4e86 faccessat2, \u5bf9 docker \u548c libseccomp \u6709\u8981\u6c42",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e0d\u7136\u53ef\u80fd\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u65e0\u6743\u9650\u8bbf\u95ee\u7684\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"Linux 5.8 \u589e\u52a0 faccessat2"))),Object(b.b)("li",{parentName:"ul"},"3.11 \u5185\u6838 vanilla \u53d8\u4e3a lts"),Object(b.b)("li",{parentName:"ul"},"3.8 \u79fb\u9664 hardened, virthardened \u5185\u6838\uff0c\u4f7f\u7528 vanilla \u548c virt \u66ff\u4ee3")))),Object(b.b)("h2",{id:"314"},"3.14"),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("ul",{parentName:"div"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5347\u7ea7\u5bb9\u5668\u5efa\u8bae\u5148\u5347\u7ea7\u4e3b\u673a\uff0c\u56e0\u4e3a faccessat2 \u5bf9 docker \u7248\u672c \u548c libseccomp \u6709\u8981\u6c42",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"3.13 \u6700\u65b0\u7248 docker \u662f 20.10, libseccomp \u662f 2.5 \u90fd\u652f\u6301"),Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c ",Object(b.b)("inlineCode",{parentName:"li"},"scmp_sys_resolver faccessat2")," \u786e\u4fdd\u4e0d\u662f\u8fd4\u56de -1")))))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"2020-07-15"),Object(b.b)("li",{parentName:"ul"},"Linux Kernel 5.10.43"),Object(b.b)("li",{parentName:"ul"},"\ud83c\udd95 \u65b0\u589e\u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"n2n"),Object(b.b)("li",{parentName:"ul"},"openssh-server-krb5, openssh-client-krb5",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"ssh \u652f\u6301 krb5 \u548c pam \u7684 flavor"))))),Object(b.b)("li",{parentName:"ul"},"\ud83c\udd99 \u5347\u7ea7\u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"python 3.9"),Object(b.b)("li",{parentName:"ul"},"lua 5.4.3"),Object(b.b)("li",{parentName:"ul"},"node 14"),Object(b.b)("li",{parentName:"ul"},"nginx 1.20.0, njs 0.5.3"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wener.me/notes/devops/web/haproxy-version/#24---2021-05-13"},"haproxy 2.4")," - \u66f4\u65b0\u975e\u5e38\u5927,\u503c\u5f97\u5173\u6ce8"),Object(b.b)("li",{parentName:"ul"},"PostgreSQL 13"),Object(b.b)("li",{parentName:"ul"},"QEMU 6"),Object(b.b)("li",{parentName:"ul"},"k3s 1.21.1"))),Object(b.b)("li",{parentName:"ul"},"\u53d8\u5316",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"musl \u542f\u7528 faccessat2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8981\u6c42 docker 20.10.0+, libseccomp 2.4.4"),Object(b.b)("li",{parentName:"ul"},"\u68c0\u67e5\u7cfb\u7edf\u652f\u6301 scmp_sys_resolver faccessat2"),Object(b.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5347\u7ea7\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u7684\u53ef\u80fd\u6027\u975e\u5e38\u9ad8"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/opencontainers/runc/issues/2151"},"opencontainers/runc#2151")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/12321"},"alpine/aports#12321"),"\n3.13.0 vs. edge - cmake fails to detect C compiler ABI info"))),Object(b.b)("li",{parentName:"ul"},"\u79fb\u9664 xf86-input-{mouse,keyboard}, \u4f7f\u7528 xf86-input-evdev, xf86-input-libinput")))),Object(b.b)("h2",{id:"313"},"3.13"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"2020-01-14"),Object(b.b)("li",{parentName:"ul"},"Linux Kernel ",Object(b.b)("a",{parentName:"li",href:"https://wener.me/notes/os/linux/linux-version/#510---lts"},"5.10 LTS")),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Release_Notes_for_Alpine_3.13.0"},"Release Notes for Alpine 3.13.0"))))),Object(b.b)("h3",{id:"\u53d8\u5316"},"\u53d8\u5316"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"musl 1.2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"time_t \u5728 32 \u4f4d\u7cfb\u7edf\u4e0a\u4e3a 64 \u4f4d",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5728 64 \u4f4d\u4e0a\u8dd1 32 \u4f4d\u7684\u5bb9\u5668\u53ef\u80fd\u6709\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"\u5f71\u54cd\u5728\u5176\u4ed6 Disto \u4e0a\u8dd1 Alpine \u5bb9\u5668\u7684\u95ee\u9898")),Object(b.b)("li",{parentName:"ul"},"Docker \u7248\u672c\u9700\u8981\u5927\u4e8e 19.03.9 - \u5426\u5219\u4f1a\u6709\u517c\u5bb9\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},"libseccomp >= 2.4.2",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6267\u884c ",Object(b.b)("inlineCode",{parentName:"li"},"scmp_sys_resolver -a x86 clock_gettime64")," \u8fd4\u56de 403 \u5c31\u662f\u652f\u6301\u7684"))))),Object(b.b)("li",{parentName:"ul"},"1.2.1 \u4f7f\u7528\u4e86\u65b0\u7684 ",Object(b.b)("a",{parentName:"li",href:"https://github.com/richfelker/mallocng-draft"},"malloc"),", \u4e5f\u80fd\u914d\u5408 jemalloc \u4f7f\u7528"))),Object(b.b)("li",{parentName:"ul"},"iproute2-minial/tc/ss",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5355\u72ec ip/tc/ss \u547d\u4ee4\u5305\uff0c\u4ece\u4e4b\u524d\u7684 iproute2 \u72ec\u7acb\u51fa\u6765 - \u4f46\u5b89\u88c5 iproute2 \u4f1a\u76f4\u63a5\u5b89\u88c5\u8fd9\u4e9b\u9644\u5c5e\u5305"),Object(b.b)("li",{parentName:"ul"},"alpine-base \u4f1a\u5305\u542b\uff0c busybox \u7684 ip \u529f\u80fd\u6bd4\u8f83\u53d7\u9650"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/commit/62c858b85bb379fb014cfe188f4cb25ed75f76e3"},"commit")))),Object(b.b)("li",{parentName:"ul"},"ifupdown -> ",Object(b.b)("a",{parentName:"li",href:"https://github.com/ifupdown-ng/ifupdown-ng/"},"ifupdown-ng"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5305\u542b\u4e86 vlan\uff0c\u4e0d\u518d\u9700\u8981\u989d\u5916\u5b89\u88c5"),Object(b.b)("li",{parentName:"ul"},"\u517c\u5bb9 /etc/network/if-X.d \u811a\u672c\u4f46\u503e\u5411\u4e8e ",Object(b.b)("inlineCode",{parentName:"li"},"/usr/libexec/ifupdown-ng")),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e /etc/network/ifupdown-ng.conf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"use_hostname_for_dhcp \u9ed8\u8ba4 \u5f00\u542f - ",Object(b.b)("inlineCode",{parentName:"li"},"hostname $(hostname)")))),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u4f9d\u8d56\u5173\u7cfb - ",Object(b.b)("inlineCode",{parentName:"li"},"requires eth0")),Object(b.b)("li",{parentName:"ul"},"\u624b\u52a8\u6307\u5b9a executor - ",Object(b.b)("inlineCode",{parentName:"li"},"use bond")),Object(b.b)("li",{parentName:"ul"},"\u4e0a\u6e38\u652f\u6301 hotplug \u4f46\u76ee\u524d 3.13 \u4e0d\u4f1a\u652f\u6301 - ifmond"),Object(b.b)("li",{parentName:"ul"},"\u540e\u7eed\u53ef\u80fd\u4f1a\u652f\u6301 ifreload"),Object(b.b)("li",{parentName:"ul"},"\u4e4b\u540e\u7248\u672c\u53ef\u80fd\u4f1a\u79fb\u9664 busybox \u4e2d\u7684 ifupdown"),Object(b.b)("li",{parentName:"ul"},"\u26a0\ufe0f \u867d\u7136 ifupdown-ng \u652f\u6301 bond \u548c bridge\uff0c\u4f46 alpinelinux \u5305\u4e2d\u79fb\u9664\u4e86\u811a\u672c\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"bonding")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"bridge")," \u5305\u4f9d\u7136\u9700\u8981",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/blob/e249384af27cdc09490bfbb02ae5153eab1d49e9/main/ifupdown-ng/APKBUILD#L22-27"},"main/ifupdown-ng/APKBUILD")))))),Object(b.b)("li",{parentName:"ul"},"gcc 10",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5f00\u542f\u4e86 ",Object(b.b)("inlineCode",{parentName:"li"},"-fno-common")," - \u67d0\u4e9b\u5305\u7f16\u8bd1\u53ef\u80fd\u5f02\u5e38"))),Object(b.b)("li",{parentName:"ul"},"busybox \u7ec4\u4ef6\u53d8\u5316",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u274c \u79fb\u9664 hdparm - \u4f7f\u7528 hdparm"),Object(b.b)("li",{parentName:"ul"},"\u274c \u79fb\u9664 fdformat,readprofile - \u4f7f\u7528 util-linux"),Object(b.b)("li",{parentName:"ul"},"\u274c \u79fb\u9664 lspci - \u4f7f\u7528 pciutils"),Object(b.b)("li",{parentName:"ul"},"\u274c \u79fb\u9664 sendmail - \u4f7f\u7528 ssmtp, opensmtpd, dma, exim, nullmailer, postfix"),Object(b.b)("li",{parentName:"ul"},"\u274c \u79fb\u9664 conspy, smemcap, dumpleases"))),Object(b.b)("li",{parentName:"ul"},"\u5185\u6838",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"lts \u6dfb\u52a0\u4e86 RBD \u6a21\u5757 - \u4e4b\u524d\u53ea\u6709 virt \u6709 - ceph \u9700\u8981")))),Object(b.b)("h3",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud83c\udd95 \u65b0\u589e\u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"k3s"),Object(b.b)("li",{parentName:"ul"},"cloud-init"),Object(b.b)("li",{parentName:"ul"},"cni-plugins"),Object(b.b)("li",{parentName:"ul"},"php8 - php \u9ed8\u8ba4\u4f9d\u7136\u4e3a php7"))),Object(b.b)("li",{parentName:"ul"},"\ud83c\udd99 \u5347\u7ea7\u5305",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"nodejs 14"),Object(b.b)("li",{parentName:"ul"},"go 1.15",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"1.16 \u652f\u6301 embded - \u4f46\u662f 2021-2 \u53d1\u5e03"))),Object(b.b)("li",{parentName:"ul"},"qemu 5.2"),Object(b.b)("li",{parentName:"ul"},"zfs 2.0.1 - \u4e4b\u524d\u662f 0.8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"zfs \u8c03\u6574\u4e86\u5f00\u53d1\u6a21\u5f0f - ZoL -> OpenZFS"),Object(b.b)("li",{parentName:"ul"},"Linux \u548c BSD \u4f7f\u7528\u76f8\u540c\u7684\u6838\u5fc3\u4ee3\u7801 - \u81ea 2018 \u5e74\u5f00\u59cb\u8fdb\u884c\u8c03\u6574 - \u589e\u52a0\u4e86\u5f88\u591a\u7279\u6027"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u7279\u6027",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Sequential resilver - \u5feb\u901f\u6784\u5efa\u955c\u50cf vdev",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"zpool replace|attach -s")))),Object(b.b)("li",{parentName:"ul"},"Persistent L2ARC - \u91cd\u542f\u540e L2ARC \u7f13\u5b58\u4f9d\u7136\u6709\u6548"),Object(b.b)("li",{parentName:"ul"},"ZStandard \u538b\u7f29 - \u6bd4 gzip \u548c lzm \u66f4\u597d"),Object(b.b)("li",{parentName:"ul"},"zfs send/receive - \u652f\u6301\u90e8\u5206\u6570\u636e",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"zfs redact"),", ",Object(b.b)("inlineCode",{parentName:"li"},"zfs send --redact"),", ",Object(b.b)("inlineCode",{parentName:"li"},"zfs send --saved")))),Object(b.b)("li",{parentName:"ul"},"dRAID")))))))),Object(b.b)("h2",{id:"312"},"3.12"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.12.0-released.html"},"3.12")),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e\u67b6\u6784 mips64 be"),Object(b.b)("li",{parentName:"ul"},"D \u8bed\u8a00"),Object(b.b)("li",{parentName:"ul"},"\u5185\u6838 5.4.43"),Object(b.b)("li",{parentName:"ul"},"QEMU 5.0"),Object(b.b)("li",{parentName:"ul"},"\u79fb\u9664\u4e86 python \u5305 - \u6309\u9700\u5b89\u88c5 python2 \u6216 python3")),Object(b.b)("h2",{id:"311"},"3.11"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"v",Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.11.0-released.html"},"3.11")),Object(b.b)("li",{parentName:"ul"},"5.4.5 \u5185\u6838"),Object(b.b)("li",{parentName:"ul"},"RPi 4 \u652f\u6301"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e GNOME \u548c KDE \u684c\u9762"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301 Vulkan"),Object(b.b)("li",{parentName:"ul"},"MinGW-w64 \u548c DXVK \u652f\u6301"),Object(b.b)("li",{parentName:"ul"},"\u5347\u7ea7\u6ce8\u610f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5185\u6838\u540d\u5b57\u4fee\u6539\u4e3a linux-lts \u4ee5\u524d\u4e3a linux-vanilla"),Object(b.b)("li",{parentName:"ul"},"\u5e9f\u5f03\u5e76\u79fb\u9664\u4e86\u5927\u91cf py2 \u7684\u5305")))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u4e3a 3.11 \u5305\nsed -i -r 's/v[.0-9]+/v3.11/' /etc/apk/repositories\n# \u5347\u7ea7\napk update\napk upgrade\n# \u786e\u8ba4\u5347\u7ea7\u5b8c\u6210\napk version\n\n# \u5207\u6362\u5185\u6838 - \u53ea\u6709\u4f7f\u7528 linux-vanilla \u624d\u9700\u8981 - linux-virt \u4e0d\u9700\u8981\napk add linux-lts\n# \u4fee\u6539\u9ed8\u8ba4\u542f\u52a8\u9879\u4e3a lts\n# \u5728\u5b89\u88c5\u4e24\u4e2a\u540e\u9ed8\u8ba4\u4f1a\u4fee\u6539\u4e3a menu.c32\nsed -i -r 's/DEFAULT .*?/DEFAULT lts/' /boot/extlinux.conf\n# \u91cd\u542f\u4f7f\u7528\u65b0\u7684\u5185\u6838\nreboot\n\n# \u91cd\u542f\u540e\u786e\u8ba4\u4e3a -tls \u5185\u6838\u7248\u672c\nuname -r\n# \u79fb\u9664\u65e7\u7248\u5185\u6838\napk del linux-vanilla\n")),Object(b.b)("h2",{id:"310"},"3.10"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"v",Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.10.0-released.html"},"3.10")),Object(b.b)("li",{parentName:"ul"},"4.19 \u5185\u6838"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e ceph"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e lightdm"),Object(b.b)("li",{parentName:"ul"},"arm \u652f\u6301\u4e32\u53e3\u548c ethernet"),Object(b.b)("li",{parentName:"ul"},"\u79fb\u9664 mongodb")),Object(b.b)("h2",{id:"39"},"3.9"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"v",Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.9.0-released.html"},"3.9")),Object(b.b)("li",{parentName:"ul"},"4.19 \u5185\u6838"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301 armv7"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 OpenSSL \u800c\u4e0d\u662f LibreSSL")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u5347\u7ea7\u4ed3\u5e93\u4e4b\u524d\u53ef\u5148\u5347\u7ea7\u672c\u5730\u5305\napk update\napk upgrade\n\n# \u66f4\u65b0\u4e3a 3.9 \u4ed3\u5e93\nsed -ire 's/v\\d\\.\\d/v3.9/g' /etc/apk/repositories\napk update\napk upgrade\nsync\n")),Object(b.b)("h2",{id:"38"},"3.8"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"v",Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.8.0-released.html"},"3.8")," 2018-06-27"),Object(b.b)("li",{parentName:"ul"},"4.14 \u5185\u6838"),Object(b.b)("li",{parentName:"ul"},"\u6240\u6709\u67b6\u6784\u652f\u6301\u7f51\u7edc\u542f\u52a8 - netboot"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e arm64 \u7684 rpi \u955c\u50cf"),Object(b.b)("li",{parentName:"ul"},"\u652f\u6301 rpi3b+"),Object(b.b)("li",{parentName:"ul"},"\u79fb\u9664 linux-hardened \u5185\u6838 - \u975e\u5b98\u65b9 Grsecurity"),Object(b.b)("li",{parentName:"ul"},"\u62c6\u5206\u4e86 linux-firmware \u5b50\u5305, \u53ef\u5355\u72ec\u5b89\u88c5"),Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"3.8 \u79fb\u9664\u4e86 hardened \u76f8\u5173\u7684 kernel, \u4e4b\u524d\u7248\u672c\u5b89\u88c5\u7684\u90fd\u9700\u8981\u505a\u8c03\u6574"),Object(b.b)("li",{parentName:"ul"},"3.7 \u6ca1\u6709 linut-virt \u53ea\u6709 linut-virthardened \u9700\u8981\u5148\u66f4\u65b0\u4ed3\u5e93")))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u66f4\u65b0\u4e3a 3.8 \u4ed3\u5e93\nsed -ire 's/v\\d\\.\\d/v3.8/g' /etc/apk/repositories\n# \u66f4\u65b0\u4ed3\u5e93\u7d22\u5f15\napk update\n\n\n# 3.8 \u5185\u6838\u5207\u6362\n# ============\n# 3.8 \u79fb\u9664\u4e86 hardened \u5185\u6838, \u5347\u7ea7\u524d\u5148\u5207\u6362\u5230\u975e hardened \u5185\u6838\u7248\u672c\n# \u67e5\u770b\u5f53\u524d\u5185\u6838\napk info -vv | grep hardened\n# \u5982\u679c\u4e3a linux-virthardened \u5219\u5b89\u88c5 linux-virt\n# \u5982\u679c\u4e3a linux-hardened \u5219\u5b89\u88c5 linux-vanilla\n# \u5982\u679c\u4e0d\u662f hardened \u5185\u6838, \u8df3\u8fc7\napk add linux-vanilla\n# \u5982\u679c\u6709\u5176\u4ed6\u5185\u6838\u6a21\u5757\u662f hardened \u4e5f\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684 vanilla \u7248\u672c, zfs, drbd, spl, dahdi, \u4f8b\u5982\n# apk add zfs-vanilla spl-vanilla\n# \u79fb\u9664 hardened \u7684\u542f\u52a8\u83dc\u5355, \u786e\u4fdd\u4e0b\u6b21\u542f\u52a8\u8fdb\u5165\u9009\u62e9\u6b63\u786e\u7684\u5185\u6838\nnano /boot/extlinux.conf\nreboot\n# \u91cd\u542f\u540e\u79fb\u9664\u65e7\u7684\u5185\u6838\napk del linux-hardened\n# \u5982\u679c\u6709\u4f9d\u8d56\u9700\u8981\u4e00\u5e76\u79fb\u9664, \u4f8b\u5982\n# apk del linux-hardened spl-hardened zfs-hardened\n\n# \u66f4\u65b0\u6240\u6709\u7684\u5305\napk upgrade\nsync\nreboot\n")),Object(b.b)("h2",{id:"37"},"3.7"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://alpinelinux.org/posts/Alpine-3.7.0-released.html"},"3.7.0")),Object(b.b)("li",{parentName:"ul"},"\u67e5\u770b\u5f53\u524d\u5185\u6838\u7248\u672c ",Object(b.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/packages?name=linux*&branch=v3.7&repo=main&arch=x86_64"},"https://pkgs.alpinelinux.org/packages?name=linux*&branch=v3.7&repo=main&arch=x86_64")),Object(b.b)("li",{parentName:"ul"},"3.7 \u6dfb\u52a0\u4e86 busybox-extras, \u90e8\u5206\u539f\u5148 busybox \u4e2d\u7684\u5de5\u5177\u88ab\u79fb\u5230\u4e86\u8be5\u5305"),Object(b.b)("li",{parentName:"ul"},"Support for EFI;"),Object(b.b)("li",{parentName:"ul"},"Support in the installer for the GRUB bootloader"),Object(b.b)("li",{parentName:"ul"},"Linux 4.9.65"),Object(b.b)("li",{parentName:"ul"},"GCC 6.4"),Object(b.b)("li",{parentName:"ul"},"LLVM 5.0"),Object(b.b)("li",{parentName:"ul"},"Go 1.9"),Object(b.b)("li",{parentName:"ul"},"Node.js 8.9 (LTS)"),Object(b.b)("li",{parentName:"ul"},"Perl 5.26"),Object(b.b)("li",{parentName:"ul"},"PostgreSQL 10"),Object(b.b)("li",{parentName:"ul"},"Rust 1.22")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"sed -ire 's/v\\d\\.\\d/v3.7/g' /etc/apk/repositories\napk update\n# \u5728\u8fdb\u884c\u5347\u7ea7\u4e4b\u524d\u5148\u66f4\u65b0 apk \u5de5\u5177\napk add --upgrade apk-tools\n# \u66f4\u65b0\u6240\u6709\u7684\u5305, --available \u4f1a\u5f3a\u5236\u66f4\u65b0\u5305, \u5373\u4fbf\u7248\u672c\u662f\u4e00\u6837\u7684\napk upgrade --available\n\n# \u67e5\u770b\u662f\u5426\u8fd8\u6709\u672a\u5347\u7ea7\u7684\napk version\n# \u5185\u6838\u53ef\u80fd\u7531\u4e8e\u4f9d\u8d56\u539f\u56e0\u4e0d\u4f1a\u5347\u7ea7\napk info -r linux-hardened\n# \u5c06\u4f9d\u8d56\u7684\u5305\u8fdb\u884c\u7edf\u4e00\u5347\u7ea7\u5373\u53ef\napk add --upgrade linux-hardened spl-hardened zfs-hardened\n\n# \u5982\u679c\u66f4\u65b0\u4e86\u5185\u6838, \u5219\u9700\u8981\u91cd\u542f\nsync\nreboot\n")),Object(b.b)("h2",{id:"\u6211\u7684\u63d0\u4ea4\u6570"},"\u6211\u7684\u63d0\u4ea4\u6570"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Commits of wener/wenerme")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"version"),Object(b.b)("th",{parentName:"tr",align:null},"commits"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.14.0"),Object(b.b)("td",{parentName:"tr",align:null},"12")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.13.1"),Object(b.b)("td",{parentName:"tr",align:null},"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.13.0"),Object(b.b)("td",{parentName:"tr",align:null},"29")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.12.1"),Object(b.b)("td",{parentName:"tr",align:null},"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.12.0"),Object(b.b)("td",{parentName:"tr",align:null},"16")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.11.0"),Object(b.b)("td",{parentName:"tr",align:null},"11")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.10.0"),Object(b.b)("td",{parentName:"tr",align:null},"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.9.0"),Object(b.b)("td",{parentName:"tr",align:null},"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"3.8.0"),Object(b.b)("td",{parentName:"tr",align:null},"6")))))}u.isMDXComponent=!0}}]);