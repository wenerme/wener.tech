"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34804],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return a?l.createElement(k,i(i({ref:t},c),{},{components:a})):l.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93753:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return N}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&c(e,a,t[a]);return e};const m={title:"Alpine FAQ",tags:["FAQ"]},d=void 0,k={unversionedId:"os/alpine/alpine-faq",id:"os/alpine/alpine-faq",title:"Alpine FAQ",description:"\u672f\u8bed",source:"@site/../notes/os/alpine/alpine-faq.md",sourceDirName:"os/alpine",slug:"/os/alpine/faq",permalink:"/notes/os/alpine/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1661507210,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"Alpine FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Alpine chroot \u73af\u5883",permalink:"/notes/os/alpine/chroot"},next:{title:"Health Check",permalink:"/notes/os/alpine/health"}},f={},N=[{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2},{value:"Why AlpineLinux",id:"why-alpinelinux",level:2},{value:"\u5386\u53f2",id:"\u5386\u53f2",level:2},{value:"apk 1 error",id:"apk-1-error",level:2},{value:"ifupdown \u5305\u4e0d\u4f1a\u542f\u52a8",id:"ifupdown-\u5305\u4e0d\u4f1a\u542f\u52a8",level:2},{value:"\u6ca1\u6709\u63d0\u793a\u767b\u9646",id:"\u6ca1\u6709\u63d0\u793a\u767b\u9646",level:2},{value:"Login incorrect - \u6ca1\u6709\u8be2\u95ee\u5bc6\u7801",id:"login-incorrect---\u6ca1\u6709\u8be2\u95ee\u5bc6\u7801",level:2},{value:"process &#39;/sbin/getty -L ttyAMA0 115200 vt100&#39; (pid 1929) exited. Scheduling for restart.",id:"process-sbingetty--l-ttyama0-115200-vt100-pid-1929-exited-scheduling-for-restart",level:2},{value:"getty: console: TIOCSCTTY: Operation not permitted",id:"getty-console-tiocsctty-operation-not-permitted",level:2},{value:"\u5185\u6838\u98ce\u683c/kernel flavors",id:"\u5185\u6838\u98ce\u683ckernel-flavors",level:2},{value:"rc-update: failed to add service <code>loadkmap&#39; to runlevel </code>boot&#39;: No such file or directory",id:"rc-update-failed-to-add-service-loadkmap-to-runlevel-boot-no-such-file-or-directory",level:2},{value:"virt vs standard",id:"virt-vs-standard",level:2},{value:"microcode",id:"microcode",level:2},{value:"mount: mounting UUID=x-x-x-x on /sysroot failed: No such file or directory",id:"mount-mounting-uuidx-x-x-x-on-sysroot-failed-no-such-file-or-directory",level:2},{value:"sh: can&#39;t access tty; job control turned off",id:"sh-cant-access-tty-job-control-turned-off",level:2},{value:"initramfs emergency recovery shell launched. Type &#39;exit&#39; to continue boot",id:"initramfs-emergency-recovery-shell-launched-type-exit-to-continue-boot",level:2},{value:"/dev/null/utmp: Not a directory",id:"devnullutmp-not-a-directory",level:2},{value:"Password: chpasswd: PAM: Authentication failure",id:"password-chpasswd-pam-authentication-failure",level:2},{value:"dmesg: read kernel buffer failed: Operation not permitted",id:"dmesg-read-kernel-buffer-failed-operation-not-permitted",level:2},{value:"mirrors",id:"mirrors",level:2},{value:"\u907f\u514d udhcp \u4fee\u6539 DNS",id:"\u907f\u514d-udhcp-\u4fee\u6539-dns",level:2},{value:"alpine musl performance",id:"alpine-musl-performance",level:2},{value:"alpine glibc compat",id:"alpine-glibc-compat",level:2},{value:"apk \u4ece edge \u4ed3\u5e93\u5b89\u88c5",id:"apk-\u4ece-edge-\u4ed3\u5e93\u5b89\u88c5",level:2},{value:"ca-certificates.crt does not contain exactly one certificate or CRL: skipping",id:"ca-certificatescrt-does-not-contain-exactly-one-certificate-or-crl-skipping",level:2},{value:"SSL routines:tls_process_server_certificate:certificate verify failed:ssl/statem/statem_clnt.c:1919",id:"ssl-routinestls_process_server_certificatecertificate-verify-failedsslstatemstatem_clntc1919",level:2}],h={toc:N};function v(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var l in e)p.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&u.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=s(s({},h),c),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,l.kt)("h2",s({},{id:"\u672f\u8bed"}),"\u672f\u8bed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HWE Hardware Enablement",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://askubuntu.com/questions/248914"}),"https://askubuntu.com/questions/248914")))),(0,l.kt)("li",{parentName:"ul"},"ECC - Error-correcting memory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/EDAC_(Linux)"}),"EDAC")," - Error Detection and Correction",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"http://bluesmoke.sourceforge.net/"}),"EDAC Project")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://www.kernel.org/doc/html/v4.19/driver-api/edac.html"}),"EDAC Device"))))),(0,l.kt)("h2",s({},{id:"why-alpinelinux"}),"Why AlpineLinux"),(0,l.kt)("p",null,"small footprint, non-systemd, fast enough, good community, sane defaults."),(0,l.kt)("p",null,"\u963f\u91cc\u4e91\u3001\u817e\u8baf\u4e91\u3001\u7269\u7406\u670d\u52a1\u5668\u3001\u865a\u62df\u673a\u3001\u5bb9\u5668\u90fd\u662f\u7528\u7684 alpinelinux"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u73af\u5883\u90fd\u4e00\u6837\uff0c\u4f7f\u7528\u5404\u65b9\u9762\u719f\u6089\uff0c\u719f\u7ec3"),(0,l.kt)("li",{parentName:"ol"},"\u5c0f/\u5feb - \u963f\u91cc\u4e91 ECS \u53ea\u9700\u8981\u4e0a\u4f20\u4e00\u4e2a \u51e0\u5341 MB \u7684\u955c\u50cf\u5373\u53ef\uff0c\u4ece 0 \u5b89\u88c5\u53ea\u9700\u8981 3 \u5206\u949f"),(0,l.kt)("li",{parentName:"ol"},"\u7b80\u5355 - \u53ef\u4ee5\u7531\u5185\u800c\u5916\u7684\u4e86\u89e3\u6240\u6709 alpine \u7ec6\u8282\uff0c\u5bf9\u4e8e debian \u548c centos \u6211\u90fd\u505a\u4e0d\u5230\uff0c\u56e0\u4e3a\u592a\u590d\u6742"),(0,l.kt)("li",{parentName:"ol"},"\u8ddf\u4e0a\u65f6\u4ee3 - \u5185\u6838 \u4e00\u822c\u662f\u6700\u8fd1\u7684 lts\uff0c\u80fd\u5feb\u901f\u5229\u7528\u4e0a\u65b0\u7684\u5185\u6838\u7279\u6027\uff0c\u6bd4\u5982\u73b0\u5728 linux \u5185\u6838\u652f\u6301 io_uring, ntfs"),(0,l.kt)("li",{parentName:"ol"},"\u5feb\u901f\u66f4\u65b0 - \u5b89\u5168\u95ee\u9898\u54cd\u5e94\u975e\u5e38\u5feb - \u56e0\u4e3a\u4f7f\u7528\u9762\u975e\u5e38\u5e7f"),(0,l.kt)("li",{parentName:"ol"},"\u884d\u751f\u4e1a\u52a1\u96c6\u6210\u7cfb\u7edf - \u7cfb\u7edf\u9884\u88c5\u4e00\u4e9b\u8f6f\u4ef6\u548c\u670d\u52a1 - \u4f8b\u5982: k3sos")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u9002\u7528\u573a\u666f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u673a\u5668\u5b66\u4e60 - ubuntu \u662f\u6700\u597d\u7684 - \u6700\u65b0 Linux \u5f00\u59cb\u8981\u96c6\u6210 Navdia \u9a71\u52a8\uff0c\u60c5\u51b5\u4f1a\u6709\u6240\u597d\u8f6c"),(0,l.kt)("li",{parentName:"ol"},"\u5546\u52a1\u7528\u684c\u9762\u7cfb\u7edf - \u9ed8\u8ba4 xface - ",(0,l.kt)("em",{parentName:"li"},"\u751f\u6001")," \u548c\u4f53\u9a8c\u6ca1\u6709 ubuntu \u597d"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u5236\u5316\u5d4c\u5165\u5f0f\u8bbe\u5907 - alpine \u652f\u6301\u7684 arch \u8fdc\u6ca1\u6709 debian \u7684\u591a\uff0c\u5982\u679c arch \u652f\u6301\u53ef\u4ee5\u8003\u8651 alpine")),(0,l.kt)("h2",s({},{id:"\u5386\u53f2"}),"\u5386\u53f2"),(0,l.kt)("p",null,"alpine \u65e9\u671f\u601d\u60f3\u6765\u81ea\u4e8e FreeBSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/periodic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://apk-tools.sourceforge.net"}),"https://apk-tools.sourceforge.net"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7248 apk-tools \u57fa\u4e8e FreeBSD \u7684 pkg_add"),(0,l.kt)("li",{parentName:"ul"},"2005-06-13 \u7b2c\u4e00\u6b21\u63d0\u4ea4")))),(0,l.kt)("h2",s({},{id:"apk-1-error"}),"apk 1 error"),(0,l.kt)("p",null,"apk \u64cd\u4f5c\u65f6\u663e\u793a\u6709\u9519\u8bef, \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"1 error; 241 MiB in 67 packages"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5373\u53ef\napk fix\n")),(0,l.kt)("h2",s({},{id:"ifupdown-\u5305\u4e0d\u4f1a\u542f\u52a8"}),"ifupdown \u5305\u4e0d\u4f1a\u542f\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ifupdown \u6765\u81ea debian - \u867d\u7136\u4f9d\u8d56 iproute2 \u4f46\u662f\u4e0d\u4f1a\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"busybox \u7684 ifup \u4f1a\u8c03\u7528 ip li set eth0 up"),(0,l.kt)("li",{parentName:"ul"},"3.10 \u662f 0.7.x \u7248\u672c\u7684\uff0c\u4e0b\u4e00\u4e2a\u5927\u7248\u672c\u5e94\u8be5\u53ef\u7528")),(0,l.kt)("h2",s({},{id:"\u6ca1\u6709\u63d0\u793a\u767b\u9646"}),"\u6ca1\u6709\u63d0\u793a\u767b\u9646"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f tty \u4e0d\u5bf9"),(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/inittab")," \u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100")),(0,l.kt)("li",{parentName:"ul"},"qemu aarch64 \u4f7f\u7528\u7684 ttyAMA0")),(0,l.kt)("h2",s({},{id:"login-incorrect---\u6ca1\u6709\u8be2\u95ee\u5bc6\u7801"}),"Login incorrect - \u6ca1\u6709\u8be2\u95ee\u5bc6\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd root \u5173\u95ed\u4e86 serial console \u767b\u9646"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u7684 tty ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/securetty")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u7684 ttyAMA0 \u53ef\u4ee5\u6dfb\u52a0")),(0,l.kt)("h2",s({},{id:"process-sbingetty--l-ttyama0-115200-vt100-pid-1929-exited-scheduling-for-restart"}),"process '/sbin/getty -L ttyAMA0 115200 vt100' (pid 1929) exited. Scheduling for restart."),(0,l.kt)("h2",s({},{id:"getty-console-tiocsctty-operation-not-permitted"}),"getty: console: TIOCSCTTY: Operation not permitted"),(0,l.kt)("h2",s({},{id:"\u5185\u6838\u98ce\u683ckernel-flavors"}),"\u5185\u6838\u98ce\u683c/kernel flavors"),(0,l.kt)("p",null,(0,l.kt)("a",s({parentName:"p"},{href:"https://git.alpinelinux.org/cgit/aports/tree/main/linux-hardened/APKBUILD"}),"https://git.alpinelinux.org/cgit/aports/tree/main/linux-hardened/APKBUILD"),"\n",(0,l.kt)("a",s({parentName:"p"},{href:"https://git.alpinelinux.org/cgit/aports/tree/main/linux-vanilla"}),"https://git.alpinelinux.org/cgit/aports/tree/main/linux-vanilla")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u533a\u522b\u5728\u4e8e\u4e0d\u540c\u7684\u5185\u6838\u7f16\u8bd1\u53c2\u6570\u548c\u5b89\u5168\u8865\u4e01"),(0,l.kt)("li",{parentName:"ul"},"hardened < 3.10",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86, armhf"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528\u4e86\u5185\u6838\u5b89\u5168\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"grsecurity"),(0,l.kt)("li",{parentName:"ul"},"pax"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u540e 500m \u5de6\u53f3, boot 20m \u5de6\u53f3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56fa\u4ef6: 210m"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u6838\u6a21\u5757: 270m"))))),(0,l.kt)("li",{parentName:"ul"},"virthardened < 3.10",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5168\u548c hardened \u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u8c03\u6574\u5185\u6838\u53c2\u6570\u4ee5\u9002\u5e94\u865a\u62df\u5316\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf\u66f4\u5c0f, \u66f4\u5feb, \u6ca1\u6709\u9ed8\u8ba4\u9a71\u52a8\u548c\u56fa\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u540e 100m \u5de6\u53f3, boot 13m \u5de6\u53f3"))),(0,l.kt)("li",{parentName:"ul"},"vanilla < 3.10",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86, s390x, ppc64le, ppc, armhf, aarch64"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u8c03\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5176\u4ed6\u98ce\u683c\u4e0d\u652f\u6301\u7684\u67b6\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u5b89\u5168\u90e8\u76f8\u5173\u7684\u8865\u4e01\u548c\u5185\u6838\u914d\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"virt",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u865a\u62df\u5316\u73af\u5883"))),(0,l.kt)("li",{parentName:"ul"},"lts",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LTS \u7248\u672c\u7684 Linux \u5185\u6838"))),(0,l.kt)("li",{parentName:"ul"},"standard - \u6253\u5305\u5305\u542b\u66f4\u591a\u5185\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7535\u6e90\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"CPU \u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"PCI \u63a7\u5236\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u76d1\u63a7"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u7279\u6b8a\u786c\u4ef6\u76f8\u5173\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7ebf"),(0,l.kt)("li",{parentName:"ul"},"\u84dd\u7259"),(0,l.kt)("li",{parentName:"ul"},"IRDA"),(0,l.kt)("li",{parentName:"ul"},"NFC"),(0,l.kt)("li",{parentName:"ul"},"SIP"),(0,l.kt)("li",{parentName:"ul"},"I2C"),(0,l.kt)("li",{parentName:"ul"},"\u952e\u76d8"),(0,l.kt)("li",{parentName:"ul"},"\u9f20\u6807"),(0,l.kt)("li",{parentName:"ul"},"\u89e6\u5c4f"),(0,l.kt)("li",{parentName:"ul"},"\u535a\u901a SoC"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u7406\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7535\u6e90\u91cd\u7f6e"))),(0,l.kt)("li",{parentName:"ul"},"\u96f7\u7535"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5353"))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u56fa\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u786c\u4ef6\u76f8\u5173\u9a71\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664\u786c\u4ef6\u76f8\u5173\u517c\u5bb9\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 XEN"),(0,l.kt)("li",{parentName:"ul"},"\u79fb\u9664 JFFS, UBIFS")))),(0,l.kt)("h2",s({},{id:"rc-update-failed-to-add-service-loadkmap-to-runlevel-boot-no-such-file-or-directory"}),"rc-update: failed to add service ",(0,l.kt)("inlineCode",{parentName:"h2"},"loadkmap' to runlevel "),"boot': No such file or directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/init.d/loadkmap")," \u5b58\u5728"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/runlevels/boot/")," \u76ee\u5f55\u5b58\u5728"),(0,l.kt)("li",{parentName:"ul"},"chroot \u6dfb\u52a0 boot runlevel \u6709\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ln - ",(0,l.kt)("inlineCode",{parentName:"li"},"ln -s /etc/init.d/$svc /etc/runlevels/boot"))),(0,l.kt)("h2",s({},{id:"virt-vs-standard"}),"virt vs standard"),(0,l.kt)("h2",s({},{id:"microcode"}),"microcode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AlpineLinux \u7684 microcode \u5728 non-free \u4e0b\uff0c\u9700\u8981\u81ea\u5df1\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5b8c\u6210\u53ef\u76f4\u63a5\u62f7\u8d1d\u8fdb\u884c\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"li"},"apk add --allow-untrusted intel-ucode-20180312-r0.apk")),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"/boot/extlinux.conf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981 extlinux \u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\uff0c\u53ef\u53c2\u8003 ",(0,l.kt)("a",s({parentName:"li"},{href:"https://patchwork.alpinelinux.org/patch/3443/"}),"https://patchwork.alpinelinux.org/patch/3443/")))),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u6211\u76ee\u524d\u7684\u8c03\u6574\uff0c\u6bd4\u63cf\u8ff0\u7684\u7b80\u5355\u4e9b")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'if [ -f "/boot/intel-ucode.img" ]; then\n  everbose "Found microcode for Intel CPUs: /boot/intel-ucode.img"\n  echo "  INITRD intel-ucode.img,initramfs-$tag" >> $conf.new\nelse\n  echo "  INITRD initramfs-$tag" >> $conf.new\nfi\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"update-extlinux")," \u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u518d\u6b21\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"/boot/extlinux.conf")," \u4e2d\u7684 INITRD \u6709\u4e86 intel-ucode.img")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u542f\u52a8\u540e\u4f1a\u770b\u5230 microcode \u5347\u7ea7\u7684\u4fe1\u606f\ndmesg | grep microcode\n")),(0,l.kt)("p",null,"\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{}),"microcode: sig=0x906e9, pf=0x2, reversion=0x84\nmicrocode: Microcode Update Driver: v2.2\n")),(0,l.kt)("h2",s({},{id:"mount-mounting-uuidx-x-x-x-on-sysroot-failed-no-such-file-or-directory"}),"mount: mounting UUID=x-x-x-x on /sysroot failed: No such file or directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u7cfb\u7edf\u8fd8\u6ca1\u53d1\u73b0\u8bbe\u5907\u5c31\u5c31\u884c\u6302\u8f7d\u4e86",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u51fa\u73b0\u5728\u4f7f\u7528 usb \u542f\u52a8\u7684\u60c5\u51b5"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a rootdelay \u8fd9\u6837\u7684\u53c2\u6570\u5728 extlinux \u6302\u8f7d\u65f6\u8fd8\u672a\u751f\u6548\uff0c\u53ef\u80fd\u7cfb\u7edf\u542f\u52a8\u4f46\u8bbe\u5907\u8fd8\u672a\u53d1\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4fee\u6539\u542f\u52a8\u811a\u672c\uff0c\u589e\u52a0 sleep 10",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in#L474"}),"https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in#L474")))),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u51fa\u73b0\u65f6\u5019\u53ef\u4ee5\u8003\u8651\u624b\u52a8\u6302\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u8003\u8651\u591a\u91cd\u542f\u51e0\u6b21\uff0c\u6709\u4e00\u5b9a\u51e0\u7387\u8fdb\u5165\u7cfb\u7edf")))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"mount UUID=x-x-x-x /sysroot\n# \u6302\u8f7d\u5b8c\u6210\u540e\u9000\u51fa\u4f1a\u7ee7\u7eed\u542f\u52a8\n# exit\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u542f\u52a8\u5206\u533a\u574f\u4e86 - \u53ef\u4ee5\u76f4\u63a5\u4ece\u73b0\u6709\u7684\u7cfb\u7edf\u590d\u5236 boot \u5185\u5bb9\u5230\u542f\u52a8\u5206\u533a\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u540e\u5207\u8bb0\u4fee\u6539 extlinux.conf \u4e2d\u7684 UUID \u5582\u6b63\u786e\u7684 rootfs\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u540e\u8bb0\u5f97\u68c0\u67e5 kernel \u7248\u672c\uff0c\u786e\u4fdd\u88ab\u590d\u5236\u7684\u5b58\u50a8\u4e0a /lib/modules \u4e0b\u6709\u5bf9\u5e94 kernel \u7248\u672c\u7684\u6a21\u5757\u3002")))),(0,l.kt)("h2",s({},{id:"sh-cant-access-tty-job-control-turned-off"}),"sh: can't access tty; job control turned off"),(0,l.kt)("p",null,"\u4e00\u822c\u4f1a\u4f34\u968f\u5206\u533a\u635f\u574f\u51fa\u73b0\u3002"),(0,l.kt)("h2",s({},{id:"initramfs-emergency-recovery-shell-launched-type-exit-to-continue-boot"}),"initramfs emergency recovery shell launched. Type 'exit' to continue boot"),(0,l.kt)("p",null,"\u5206\u533a\u635f\u574f\u540e\u4f1a\u8fdb\u5165\u6025\u6551\u6a21\u5f0f\u3002"),(0,l.kt)("h2",s({},{id:"devnullutmp-not-a-directory"}),"/dev/null/utmp: Not a directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://bugs.alpinelinux.org/issues/3282"}),"#3282")," - users: /dev/null/utmp: Not a directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c who, last, screen \u65f6"))),(0,l.kt)("li",{parentName:"ul"},"3.16 \u5305\u542b utmp")),(0,l.kt)("h2",s({},{id:"password-chpasswd-pam-authentication-failure"}),"Password: chpasswd: PAM: Authentication failure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"3.6+ BUG ",(0,l.kt)("a",s({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/issues/10209"}),"https://gitlab.alpinelinux.org/alpine/aports/issues/10209"))),(0,l.kt)("h2",s({},{id:"dmesg-read-kernel-buffer-failed-operation-not-permitted"}),"dmesg: read kernel buffer failed: Operation not permitted"),(0,l.kt)("p",null,"3.14 \u5185\u6838\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"CONFIG_SECURITY_DMESG_RESTRICT=y")),(0,l.kt)("p",null,"\u53ef\u4ee5\u5173\u95ed"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"sudo sysctl kernel.dmesg_restrict=0\n")),(0,l.kt)("h2",s({},{id:"mirrors"}),"mirrors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://mirrors.alpinelinux.org"}),"https://mirrors.alpinelinux.org"))),(0,l.kt)("h2",s({},{id:"\u907f\u514d-udhcp-\u4fee\u6539-dns"}),"\u907f\u514d udhcp \u4fee\u6539 DNS"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"mkdir -p /etc/udhcpc\necho 'RESOLV_CONF=no' > /etc/udhcpc/udhcpc.conf\n")),(0,l.kt)("h2",s({},{id:"alpine-musl-performance"}),"alpine musl performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"musl malloc \u6027\u80fd\u5f31\u4e8e glibc malloc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://lists.alpinelinux.org/~alpine/users/%3C6df8863e77b970b466dbfc9a3a5c2bcec3199f48.camel%40aquilenet.fr%3E#%3C4dcedd5d-e2ce-e8e-e231-874997bbe9f6@dereferenced.org%3E"}),"maillist answer")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://superuser.com/a/1234279/242730"}),"https://superuser.com/a/1234279/242730")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/"}),"https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/"))))),(0,l.kt)("h2",s({},{id:"alpine-glibc-compat"}),"alpine glibc compat"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"libc6-compat gcompat")),(0,l.kt)("h2",s({},{id:"apk-\u4ece-edge-\u4ed3\u5e93\u5b89\u88c5"}),"apk \u4ece edge \u4ed3\u5e93\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"apk add tailscale -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/community\n")),(0,l.kt)("h2",s({},{id:"ca-certificatescrt-does-not-contain-exactly-one-certificate-or-crl-skipping"}),"ca-certificates.crt does not contain exactly one certificate or CRL: skipping"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"sudo update-ca-certificates # \u66f4\u65b0 CA \u65f6\u51fa\u73b0\n\nmkdir /usr/local/share/ca-certificates/extra\n")),(0,l.kt)("h2",s({},{id:"ssl-routinestls_process_server_certificatecertificate-verify-failedsslstatemstatem_clntc1919"}),"SSL routines:tls_process_server_certificate:certificate verify failed:ssl/statem/statem_clnt.c:1919"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"openssl s_client -connect wener.me:443 # \u6d4b\u8bd5\u8bc1\u4e66\u662f\u5426\u6b63\u786e\n")))}v.isMDXComponent=!0}}]);