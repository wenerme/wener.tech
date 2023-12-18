"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9551],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),c=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const k={title:"OpenRC"},N="OpenRC",g={unversionedId:"os/linux/init/openrc",id:"os/linux/init/openrc",title:"OpenRC",description:"- OpenRC \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/linux/init/openrc.md",sourceDirName:"os/linux/init",slug:"/os/linux/init/openrc",permalink:"/notes/os/linux/init/openrc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/init/openrc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"OpenRC"},sidebar:"docs",previous:{title:"Init Awesome",permalink:"/notes/os/linux/init/awesome"},next:{title:"s6",permalink:"/notes/os/linux/init/s6"}},b={},f=[{value:"/etc/inittab",id:"etcinittab",level:2},{value:"service",id:"service",level:2},{value:"supervise-daemon",id:"supervise-daemon",level:2},{value:"failed to add service <code>sysfs</code> to <code>runlevel</code> boot&#39;: No such file or directory",id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory",level:2},{value:"is the name of a real and virtual service",id:"is-the-name-of-a-real-and-virtual-service",level:2},{value:"restart",id:"restart",level:2},{value:"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log&#39;: Permission denied",id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied",level:2}],y={toc:f},v="wrapper";function h(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(v,d(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"openrc"}),"OpenRC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/OpenRC/openrc"}),"OpenRC")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BSD-2, C, Shell"),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u8f7b\u91cf\u7ea7 init \u7cfb\u7edf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Linux, FreeBSD, NetBSD"),(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3 900k"))),(0,a.kt)("li",{parentName:"ul"},"\u811a\u672c\u7ed3\u6784\u4e0a\u7c7b\u4f3c\u4e8e sysvinit - \u4f46\u66f4\u7b80\u5355"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 supervise-daemon 0.21+"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 /sbin/init - 0.25+"))),(0,a.kt)("li",{parentName:"ul"},"RC_SYS - \u4e3a VSERVER \u548c LXC \u4e0d\u4f1a clean run",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VSERVER"),(0,a.kt)("li",{parentName:"ul"},"LXC"),(0,a.kt)("li",{parentName:"ul"},"OPENVZ"),(0,a.kt)("li",{parentName:"ul"},"SYSTEMD-NSPAWN"),(0,a.kt)("li",{parentName:"ul"},"PREFIX"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/init.d/bootmisc.in"}),"https://github.com/OpenRC/openrc/blob/master/init.d/bootmisc.in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/etc/rc.conf"}),"https://github.com/OpenRC/openrc/blob/master/etc/rc.conf"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"rc_sys"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"docker"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Docker container manager (Linux)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"jail"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Jail (DragonflyBSD or FreeBSD)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"lxc"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Linux Containers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"openvz"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Linux OpenVZ")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"prefix"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rkt"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"CoreOS container management system (Linux)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"subhurd"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hurd subhurds (to be checked)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"systemd-nspawn"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Container created by systemd-nspawn (Linux)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"uml"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Usermode Linux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"vserver"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Linux vserver")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"xen0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Xen0 Domain (Linux and NetBSD)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"xenU"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"XenU Domain (Linux and NetBSD)")))),(0,a.kt)("h2",m({},{id:"etcinittab"}),"/etc/inittab"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"::sysinit:/sbin/openrc sysinit\n::sysinit:/sbin/openrc boot\n::wait:/sbin/openrc default\n\n# Set up a couple of getty's\ntty1::respawn:/sbin/getty 38400 tty1\ntty2::respawn:/sbin/getty 38400 tty2\ntty3::respawn:/sbin/getty 38400 tty3\ntty4::respawn:/sbin/getty 38400 tty4\ntty5::respawn:/sbin/getty 38400 tty5\ntty6::respawn:/sbin/getty 38400 tty6\n\n# Put a getty on the serial port\n#ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100\n\n# Stuff to do for the 3-finger salute\n::ctrlaltdel:/sbin/reboot\n\n# Stuff to do before rebooting\n::shutdown:/sbin/openrc shutdown\n")),(0,a.kt)("h2",m({},{id:"service"}),"service"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sh"}),'#!/sbin/openrc-run\n\ncommand="/usr/sbin/ntpd"\npidfile="/run/${RC_SVCNAME}.pid"\ncommand_args="-p ${pidfile}"\n\ncommand_args_background="--daemon"\n# start-stop-daemon --make-pidfile\ncommand_background=true\n\ncommand_user="user:group"\n# ^cap_chown,!cap_setpcap\ncapabilities="cap-list"\nprocname="cancd"\n\n# \u5b9a\u4e49\u4f9d\u8d56\ndepend() {\n  need net\n  use dns logger netmount\n  want coolservice\n  # provide\n}\n\nextra_started_commands="reload"\n\nextra_commands="checkconfig"\ncheckconfig() {\n  #\n}\n\nreload() {\n  checkconfig || return $?\n  ebegin "Reloading ${RC_SVCNAME}"\n  start-stop-daemon --signal HUP --pidfile "${pidfile}"\n  eend $?\n}\n\n# \u542f\u52a8\u505c\u6b62\u68c0\u67e5\u914d\u7f6e\nstart_pre() {\n  if [ "${RC_CMD}" != "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n\nstop_pre() {\n  if [ "${RC_CMD}" = "restart" ]; then\n    checkconfig || return $?\n  fi\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RC_SVCNAME"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u51fd\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start"),(0,a.kt)("li",{parentName:"ul"},"stop"),(0,a.kt)("li",{parentName:"ul"},"status"))),(0,a.kt)("li",{parentName:"ul"},"depend",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"need - \u5f3a\u5236\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ul"},"use - soft dependency - \u5982\u679c\u5728\u76f8\u540c runlevel \u5219 start\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"),(0,a.kt)("li",{parentName:"ul"},"want - \u5c1d\u8bd5 start\uff0c\u4e0d\u5173\u5fc3 runlevel\uff0c\u5df2\u7ecf start \u4e0d\u5173\u5fc3"),(0,a.kt)("li",{parentName:"ul"},"before - \u5728\u7ed9\u5b9a\u670d\u52a1\u4e4b\u524d\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},"after - \u5728\u7ed9\u5b9a\u670d\u52a1\u4e4b\u540e\u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},"provide - \u63d0\u4f9b\u670d\u52a1 - \u7c7b\u4f3c\u522b\u540d\u6216\u76f8\u540c\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"keyword"),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f71\u54cd\u670d\u52a1\u8d77\u505c"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982: \u91cd\u542f \u670d\u52a1 -> \u4f1a\u5148\u505c\u6b62 ",(0,a.kt)("strong",{parentName:"li"},"\u4f9d\u8d56"),"\uff0c\u91cd\u542f\u670d\u52a1\uff0c\u7136\u540e\u518d\u542f\u52a8 ",(0,a.kt)("strong",{parentName:"li"},"\u4f9d\u8d56")))),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u670d\u52a1 - \u4f1a start \u4f9d\u8d56\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u88ab\u670d\u52a1\u4f9d\u8d56 - \u4f1a stop & start \u4f9d\u8d56\u670d\u52a1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md"}),"https://github.com/OpenRC/openrc/blob/master/service-script-guide.md"))),(0,a.kt)("h2",m({},{id:"supervise-daemon"}),"supervise-daemon"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"flag"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-u, --user ",(0,a.kt)("inlineCode",{parentName:"td"},"user[:group]")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-D, --respawn-delay ",(0,a.kt)("em",{parentName:"td"},"seconds")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-m, --respawn-max ",(0,a.kt)("em",{parentName:"td"},"count")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-P, --respawn-period ",(0,a.kt)("em",{parentName:"td"},"seconds")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-R, --retry ",(0,a.kt)("inlineCode",{parentName:"td"},"[signal/]timeout")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"SIGTERM/5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-d, --chdir ",(0,a.kt)("em",{parentName:"td"},"path")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-r, --chroot ",(0,a.kt)("em",{parentName:"td"},"path")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-, --signal ",(0,a.kt)("em",{parentName:"td"},"signal")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-g, --group ",(0,a.kt)("em",{parentName:"td"},"group")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-k, --umask ",(0,a.kt)("em",{parentName:"td"},"mode")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-p, --pidfile ",(0,a.kt)("em",{parentName:"td"},"supervisorpidfile")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-1, --stdout ",(0,a.kt)("em",{parentName:"td"},"logfile")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-2, --stderr ",(0,a.kt)("em",{parentName:"td"},"logfile")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-K, --stop"),(0,a.kt)("li",{parentName:"ul"},"-s, --signal"),(0,a.kt)("li",{parentName:"ul"},"RC_SVCNAME"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon"}),"https://wiki.gentoo.org/wiki/OpenRC/supervise-daemon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md"}),"https://github.com/OpenRC/openrc/blob/master/supervise-daemon-guide.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html"}),"https://manpages.debian.org/testing/openrc/supervise-daemon.8.en.html"))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"failed-to-add-service-sysfs-to-runlevel-boot-no-such-file-or-directory"}),"failed to add service ",(0,a.kt)("inlineCode",{parentName:"h2"},"sysfs")," to ",(0,a.kt)("inlineCode",{parentName:"h2"},"runlevel")," boot': No such file or directory"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"for svc in $BOOT_SERVICES; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\n")),(0,a.kt)("h2",m({},{id:"is-the-name-of-a-real-and-virtual-service"}),"is the name of a real and virtual service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"virtual service",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f openrc \u4e2d provide \u540e\u9762\u7684\u5185\u5bb9"))),(0,a.kt)("li",{parentName:"ul"},"real service",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u662f /etc/init.d \u4e0b\u540d\u5b57")))),(0,a.kt)("p",null,"provide \u7684\u540d\u5b57\u548c\u5b9e\u9645\u670d\u52a1\u540d\u5b57\u51b2\u7a81"),(0,a.kt)("h2",m({},{id:"restart"}),"restart"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u9ed8\u8ba4 0\nrespawn_delay=5\n# \u9ed8\u8ba4 10\nrespawn_max=0\n")),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4 SIGTERM/5\nretry="${TINC_RETRY:-TERM/60/KILL/10}"\n')),(0,a.kt)("h2",m({},{id:"supervise-daemon-unable-to-open-the-logfile-for-stdout-varlogapplog-permission-denied"}),"supervise-daemon: unable to open the logfile for stdout `/var/log/app.log': Permission denied"))}h.isMDXComponent=!0}}]);