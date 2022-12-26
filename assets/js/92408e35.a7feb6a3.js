"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9551],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={title:"OpenRC"},c="OpenRC",k={unversionedId:"os/linux/init/openrc",id:"os/linux/init/openrc",title:"OpenRC",description:"- OpenRC \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/init/openrc.md",sourceDirName:"os/linux/init",slug:"/os/linux/init/openrc",permalink:"/notes/os/linux/init/openrc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/init/openrc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672043702,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{title:"OpenRC"},sidebar:"docs",previous:{title:"Init Awesome",permalink:"/notes/os/linux/init/awesome"},next:{title:"s6",permalink:"/notes/os/linux/init/s6"}},f={},g=[{value:"/etc/inittab",id:"etcinittab",level:2},{value:"service",id:"service",level:2},{value:"supervise-daemon",id:"supervise-daemon",level:2},{value:"failed to add service <code>sysfs</code> to <code>runlevel</code> boot&#39;: No such file or directory",id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory",level:2},{value:"is the name of a real and virtual service",id:"is-the-name-of-a-real-and-virtual-service",level:2},{value:"restart",id:"restart",level:2},{value:"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log&#39;: Permission denied",id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied",level:2}],N={toc:g};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},N),u),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"openrc"}),"OpenRC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/OpenRC/openrc"}),"OpenRC")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u8f7b\u91cf\u7ea7 init \u7cfb\u7edf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Linux, FreeBSD, NetBSD"),(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3 900k"))),(0,r.kt)("li",{parentName:"ul"},"2 BSD \u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"C+Shell \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u811a\u672c\u7ed3\u6784\u4e0a\u7c7b\u4f3c\u4e8e sysvinit - \u4f46\u66f4\u7b80\u5355"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 supervise-daemon 0.21+"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 /sbin/init - 0.25+")))),(0,r.kt)("h2",d({},{id:"etcinittab"}),"/etc/inittab"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ini"}),"::sysinit:/sbin/openrc sysinit\n::sysinit:/sbin/openrc boot\n::wait:/sbin/openrc default\n\n# Set up a couple of getty's\ntty1::respawn:/sbin/getty 38400 tty1\ntty2::respawn:/sbin/getty 38400 tty2\ntty3::respawn:/sbin/getty 38400 tty3\ntty4::respawn:/sbin/getty 38400 tty4\ntty5::respawn:/sbin/getty 38400 tty5\ntty6::respawn:/sbin/getty 38400 tty6\n\n# Put a getty on the serial port\n#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100\n\n# Stuff to do for the 3-finger salute\n::ctrlaltdel:/sbin/reboot\n\n# Stuff to do before rebooting\n::shutdown:/sbin/openrc shutdown\n")),(0,r.kt)("h2",d({},{id:"service"}),"service"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-sh"}),'#!/sbin/openrc-run\n\ncommand="/usr/sbin/ntpd"\npidfile="/run/${RC_SVCNAME}.pid"\ncommand_args="-p ${pidfile}"\n\ncommand_args_background="--daemon"\n# start-stop-daemon --make-pidfile\ncommand_background=true\n\ncommand_user="user:group"\n# ^cap_chown,!cap_setpcap\ncapabilities="cap-list"\nprocname="cancd"\n\n# \u5b9a\u4e49\u4f9d\u8d56\ndepend() {\n  need net\n  use dns logger netmount\n  want coolservice\n  # provide\n}\n\nextra_started_commands="reload"\n\nextra_commands="checkconfig"\ncheckconfig() {\n  #\n}\n\nreload() {\n  checkconfig || return $?\n  ebegin "Reloading ${RC_SVCNAME}"\n  start-stop-daemon --signal HUP --pidfile "${pidfile}"\n  eend $?\n}\n\n# \u542f\u52a8\u505c\u6b62\u68c0\u67e5\u914d\u7f6e\nstart_pre() {\n  if [ "${RC_CMD}" != "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n\nstop_pre() {\n  if [ "${RC_CMD}" = "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RC_SVCNAME"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"start"),(0,r.kt)("li",{parentName:"ul"},"stop"),(0,r.kt)("li",{parentName:"ul"},"status"))),(0,r.kt)("li",{parentName:"ul"},"depend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"need - \u5f3a\u5236\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"use - soft dependency - \u5982\u679c\u5728\u76f8\u540c runlevel \u5219 start\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"want - \u5c1d\u8bd5 start\uff0c\u4e0d\u5173\u5fc3 runlevel\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"before"),(0,r.kt)("li",{parentName:"ul"},"after"),(0,r.kt)("li",{parentName:"ul"},"provide - \u63d0\u4f9b\u670d\u52a1 - \u7c7b\u4f3c\u522b\u540d\u6216\u76f8\u540c\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"keyword"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md"}),"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md"))),(0,r.kt)("h2",d({},{id:"supervise-daemon"}),"supervise-daemon"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-u, --user ",(0,r.kt)("inlineCode",{parentName:"td"},"user[:group]")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-D, --respawn-delay ",(0,r.kt)("em",{parentName:"td"},"seconds")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-m, --respawn-max ",(0,r.kt)("em",{parentName:"td"},"count")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-P, --respawn-period ",(0,r.kt)("em",{parentName:"td"},"seconds")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-R, --retry ",(0,r.kt)("inlineCode",{parentName:"td"},"[signal/]timeout")),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"SIGTERM/5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-d, --chdir ",(0,r.kt)("em",{parentName:"td"},"path")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-r, --chroot ",(0,r.kt)("em",{parentName:"td"},"path")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-, --signal ",(0,r.kt)("em",{parentName:"td"},"signal")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-g, --group ",(0,r.kt)("em",{parentName:"td"},"group")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-k, --umask ",(0,r.kt)("em",{parentName:"td"},"mode")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-p, --pidfile ",(0,r.kt)("em",{parentName:"td"},"supervisorpidfile")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-1, --stdout ",(0,r.kt)("em",{parentName:"td"},"logfile")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"-2, --stderr ",(0,r.kt)("em",{parentName:"td"},"logfile")),(0,r.kt)("td",d({parentName:"tr"},{align:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-K, --stop"),(0,r.kt)("li",{parentName:"ul"},"-s, --signal"),(0,r.kt)("li",{parentName:"ul"},"RC_SVCNAME"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon"}),"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md"}),"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html"}),"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html"))),(0,r.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",d({},{id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory"}),"failed to add service ",(0,r.kt)("inlineCode",{parentName:"h2"},"sysfs")," to ",(0,r.kt)("inlineCode",{parentName:"h2"},"runlevel")," boot': No such file or directory"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"for svc in $BOOT_SERVICES; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\n")),(0,r.kt)("h2",d({},{id:"is-the-name-of-a-real-and-virtual-service"}),"is the name of a real and virtual service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"virtual service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f openrc \u4e2d provide \u540e\u9762\u7684\u5185\u5bb9"))),(0,r.kt)("li",{parentName:"ul"},"real service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u662f /etc/init.d \u4e0b\u540d\u5b57")))),(0,r.kt)("p",null,"provide \u7684\u540d\u5b57\u548c\u5b9e\u9645\u670d\u52a1\u540d\u5b57\u51b2\u7a81"),(0,r.kt)("h2",d({},{id:"restart"}),"restart"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# \u9ed8\u8ba4 0\nrespawn_delay=5\n# \u9ed8\u8ba4 10\nrespawn_max=0\n")),(0,r.kt)("p",null,"\u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4 SIGTERM/5\nretry="${TINC_RETRY:-TERM/60/KILL/10}"\n')),(0,r.kt)("h2",d({},{id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied"}),"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log': Permission denied"))}b.isMDXComponent=!0}}]);