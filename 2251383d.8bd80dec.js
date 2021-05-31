(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1044:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return o}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=r.a.createContext({}),s=function(t){var e=r.a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return r.a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,b=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=s(n),u=a,o=p["".concat(b,".").concat(u)]||p[u]||d[u]||l;return n?r.a.createElement(o,c(c({ref:e},m),{},{components:n})):r.a.createElement(o,c({ref:e},m))}));function o(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,b=new Array(l);b[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,b[1]=c;for(var m=2;m<l;m++)b[m]=n[m];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},211:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return s}));var a=n(3),r=n(8),l=(n(0),n(1044)),b={id:"systemd"},c={unversionedId:"os/linux/init/systemd",id:"os/linux/init/systemd",isDocsHomePage:!1,title:"systemd",description:"Systemd",source:"@site/notes/os/linux/init/systemd.md",slug:"/os/linux/init/systemd",permalink:"/notes/os/linux/init/systemd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/systemd.md",version:"current",sidebar:"docs",previous:{title:"Supervisor",permalink:"/notes/os/linux/init/supervisor"},next:{title:"libc",permalink:"/notes/os/linux/lib/libc"}},i=[{value:"Unit \u6587\u4ef6",id:"unit-\u6587\u4ef6",children:[]},{value:"Target",id:"target",children:[]},{value:"Target vs init/RunLevel",id:"target-vs-initrunlevel",children:[]},{value:"Why archlinux migrate to systemd",id:"why-archlinux-migrate-to-systemd",children:[]},{value:"\u67e5\u770b\u5f00\u542f\u7684\u670d\u52a1",id:"\u67e5\u770b\u5f00\u542f\u7684\u670d\u52a1",children:[]},{value:"crontab",id:"crontab",children:[]}],m={toc:i};function s(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"systemd"},"Systemd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/Software/systemd"},"systemd")),Object(l.b)("li",{parentName:"ul"},"wikipedia ",Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html"},"systemd.unit")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/systemctl.html"},"systemctl manpage")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units"},"How To Use Systemctl to Manage Systemd Services and Units")),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u76ee\u5f55",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/systemd/system/docker.service.d/*.conf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/systemd/system/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/lib/systemd/system/")))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Systemd-networkd"},"https://wiki.archlinux.org/index.php/Systemd-networkd")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"},"Systemd \u5165\u95e8\u6559\u7a0b\uff1a\u547d\u4ee4\u7bc7"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u914d\u7f6e\nsystemctl show docker\n# \u4fee\u6539 Service \u9700\u8981\u91cd\u8f7d\nsystemctl daemon-reload\n# \u67e5\u770b\u5b9a\u4e49\u7684\u914d\u7f6e\nsystemctl show --property=Environment docker\n# \u91cd\u542f\u670d\u52a1\nsystemctl restart docker\n\nsystemctl list-units --all\nsystemctl list-units --type=service\nsystemctl list-unit-files\n# \u67e5\u770b service \u6587\u4ef6\nsystemctl cat docker.service\n# \u67e5\u770b\u4f9d\u8d56\nsystemctl list-dependencies sshd.service\n# mask \u540e\u7684\u670d\u52a1\u4e0d\u80fd\u88ab\u542f\u52a8\nsystemctl mask nginx.service\nsystemctl unmask nginx.service\n# \u7f16\u8f91 service \u6587\u4ef6\nsystemctl edit nginx.service\n# \u7f16\u8f91\u5b8c\u6574\u7684\u6587\u4ef6,\u800c\u4e0d\u662f\u4e00\u4e2a\u7247\u6bb5,\u4f1a\u751f\u6210\u90e8\u5206\u5185\u5bb9\nsystemctl edit --full nginx.service\n\n# \u7cfb\u7edf\u72b6\u6001\nsystemctl status\n# \u670d\u52a1\u72b6\u6001\nsystemctl status prometheus-node-exporter.service\n# \u8fdc\u7a0b\u670d\u52a1\u72b6\u6001\nsystemctl -H root@127.0.0.1 status httpd.service\n# is-active, is-failed, is-enabled\nsystemctl is-active prometheus-node-exporter.service\n# \u7ba1\u7406\n# start stop restart kill reload show\nsystemctl start apache.service\n# \u67e5\u770b\u5c5e\u6027\nsystemctl show -P CPUShare apache.service\n# \u8bbe\u7f6e\u5c5e\u6027\nsystemctl set-property httpd.service CPUShares=500\n#\nsystemctl daemon-reload\n\n# \u67e5\u770b\u4f9d\u8d56\n# --all - \u6240\u6709\nsystemctl list-dependencies nginx.service\n\n# enabled disabled static masked\n# static - \u65e0 [Install]\uff0c \u53ea\u80fd\u88ab\u4f9d\u8d56\n# masked - \u88ab\u7981\u6b62\nsystemctl list-unit-files --type=service\n\n# \u67e5\u770b\u5185\u5bb9\nsystemctl cat atd.service\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"command"),Object(l.b)("th",{parentName:"tr",align:null},"mean"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u8be2"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl list-dependencies"),Object(l.b)("td",{parentName:"tr",align:null},"unit \u4f9d\u8d56")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl list-sockets"),Object(l.b)("td",{parentName:"tr",align:null},"sockets \u72b6\u6001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl list-jobs"),Object(l.b)("td",{parentName:"tr",align:null},"\u6d3b\u8dc3 jobs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl list-unit-files"),Object(l.b)("td",{parentName:"tr",align:null},"unit \u6587\u4ef6\u548c\u72b6\u6001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl list-units"),Object(l.b)("td",{parentName:"tr",align:null},"units loaded/active")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl get-default"),Object(l.b)("td",{parentName:"tr",align:null},"default target (like run level)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl stop ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u505c\u6b62")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl start ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u542f\u52a8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl restart ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u91cd\u542f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl reload ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u91cd\u8f7d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl daemon-reload"),Object(l.b)("td",{parentName:"tr",align:null},"\u91cd\u8f7d unit \u6587\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl status ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1\u72b6\u6001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl --failed"),Object(l.b)("td",{parentName:"tr",align:null},"\u5931\u8d25\u7684\u670d\u52a1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl reset-failed"),Object(l.b)("td",{parentName:"tr",align:null},"\u91cd\u7f6e\u5931\u8d25\u7684\u72b6\u6001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl enable ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1\u81ea\u542f\u52a8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl disable ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u5173\u95ed\u81ea\u542f\u52a8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl show ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u670d\u52a1\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl edit ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u7f16\u8f91 unit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl edit --full ",Object(l.b)("em",{parentName:"td"},"service")),Object(l.b)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u670d\u52a1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl -H ",Object(l.b)("em",{parentName:"td"},"host")," status network"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b\u6267\u884c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u72b6\u6001"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl reboot"),Object(l.b)("td",{parentName:"tr",align:null},"\u91cd\u542f / reboot.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl poweroff"),Object(l.b)("td",{parentName:"tr",align:null},"\u5173\u673a / poweroff.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl emergency"),Object(l.b)("td",{parentName:"tr",align:null},"emergency.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl default"),Object(l.b)("td",{parentName:"tr",align:null},"\u6062\u590d\u5230\u9ed8\u8ba4 multi-user.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u65e5\u5fd7"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journalctl"),Object(l.b)("td",{parentName:"tr",align:null},"\u6240\u6709\u65e5\u5fd7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journalctl -u network.service"),Object(l.b)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u670d\u52a1\u65e5\u5fd7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journalctl -f"),Object(l.b)("td",{parentName:"tr",align:null},"\u8ddf\u968f\u663e\u793a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journalctl -k"),Object(l.b)("td",{parentName:"tr",align:null},"\u5185\u6838\u65e5\u5fd7")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"util"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemctl"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u547d\u4ee4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journalctl"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"notify"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemd-analyze"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u542f\u52a8\u8017\u65f6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cgls"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cgtop"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"loginctl"),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u9646\u7528\u6237")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nspwan"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hostnamectl"),Object(l.b)("td",{parentName:"tr",align:null},"\u67e5\u770b\u548c\u7ba1\u7406\u4e3b\u673a\u4fe1\u606f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"localectl"),Object(l.b)("td",{parentName:"tr",align:null},"\u672c\u5730\u5316\u914d\u7f6e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timedatectl"),Object(l.b)("td",{parentName:"tr",align:null},"\u65f6\u533a")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"daemon"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemd"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"journald"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"networkd"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"logind"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"user session"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"unit"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Service"),Object(l.b)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u670d\u52a1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Target"),Object(l.b)("td",{parentName:"tr",align:null},"\u591a\u4e2a Unit \u6784\u6210\u7684\u4e00\u4e2a\u7ec4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Device"),Object(l.b)("td",{parentName:"tr",align:null},"\u786c\u4ef6\u8bbe\u5907")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Mount"),Object(l.b)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7cfb\u7edf\u7684\u6302\u8f7d\u70b9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Automount"),Object(l.b)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u6302\u8f7d\u70b9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Path"),Object(l.b)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u6216\u8def\u5f84")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Scope"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u662f\u7531 Systemd \u542f\u52a8\u7684\u5916\u90e8\u8fdb\u7a0b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Slice"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u7ec4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Snapshot"),Object(l.b)("td",{parentName:"tr",align:null},"Systemd \u5feb\u7167\uff0c\u53ef\u4ee5\u5207\u56de\u67d0\u4e2a\u5feb\u7167")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Socket"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684 socket")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Swap"),Object(l.b)("td",{parentName:"tr",align:null},"swap \u6587\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Timer"),Object(l.b)("td",{parentName:"tr",align:null},"\u5b9a\u65f6\u5668")))),Object(l.b)("h2",{id:"unit-\u6587\u4ef6"},"Unit \u6587\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=\u63cf\u8ff0\nDocumentation=\u6587\u6863\u5730\u5740\n\nRequires=\u5f3a\u4f9d\u8d56 Unit\nWants=\u5f31\u4f9d\u8d56 Unit\nBindsTo=\u6dfb\u52a0\u4f9d\u8d56\u5230 Unit - \u6307\u5b9a Unit \u9000\u51fa\u5219\u5f53\u524d Unit \u4f1a\u9000\u51fa\nBefore=\nAfter=\nConflicts=\u4e0d\u80fd\u540c\u65f6\u8fd0\u884c Unit\nCondition=\nAssert=\n\n[Install]\nWantedBy=\u6307\u5b9a Target \u4f1a link \u5230 /etc/systemd/system/<Target>.wants\nRequiredBy=\u6307\u5b9a Target \u4f1a link \u5230 /etc/systemd/system/<Target>.required\nAlias=\nAlso=\u540c\u65f6\u542f\u52a8\u5176\u4ed6 Unit\n\n[Service]\n# simple - \u6267\u884c ExecStart\n# forking\n# oneshot - \u4e00\u6b21\u6027\uff0c\u6267\u884c\u5b8c\u6210\u540e\u7ee7\u7eed\n# dbus - \u901a\u8fc7 DBus \u542f\u52a8\n# notify - \u6267\u884c\u5b8c\u6bd5\u901a\u77e5 systemd\n# idle - \u6709\u5176\u4ed6\u4efb\u52a1\u5f53\u524d\u4efb\u52a1\u624d\u6267\u884c\nType=simple\n\nExecStart=\nExecStartPre=\nExecStartPost=\n\nExecReload=\n\nExecStop=\nExecStopPost=\n\nRestartSec=\n# \u91cd\u542f\u60c5\u51b5 - always, on-success, on-failure, on-abnormal, on-abort, on-watchdog\nRestart=\n\nTimeoutSec=\nEnvironment=\n")),Object(l.b)("h2",{id:"target"},"Target"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Unit \u7ec4, \u7c7b\u4f3c\u4e8e\u5176\u4ed6 init \u7684 runlevel \u6982\u5ff5")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"runlevel"),Object(l.b)("th",{parentName:"tr",align:null},"target name"),Object(l.b)("th",{parentName:"tr",align:null},"link"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 0"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel0.target"),Object(l.b)("td",{parentName:"tr",align:null},"poweroff.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 1"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel1.target"),Object(l.b)("td",{parentName:"tr",align:null},"rescue.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 2"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel2.target"),Object(l.b)("td",{parentName:"tr",align:null},"multi-user.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 3"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel3.target"),Object(l.b)("td",{parentName:"tr",align:null},"multi-user.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 4"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel4.target"),Object(l.b)("td",{parentName:"tr",align:null},"multi-user.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 5"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel5.target"),Object(l.b)("td",{parentName:"tr",align:null},"graphical.target")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Runlevel 6"),Object(l.b)("td",{parentName:"tr",align:null},"runlevel6.target"),Object(l.b)("td",{parentName:"tr",align:null},"reboot.target")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u7684\u6240\u6709 Target\nsystemctl list-unit-files --type=target\n\n# \u67e5\u770b\u4e00\u4e2a Target \u5305\u542b\u7684\u6240\u6709 Unit\nsystemctl list-dependencies multi-user.target\n\n# \u67e5\u770b\u542f\u52a8\u65f6\u7684\u9ed8\u8ba4 Target\nsystemctl get-default\n\n# \u8bbe\u7f6e\u542f\u52a8\u65f6\u7684\u9ed8\u8ba4 Target\nsudo systemctl set-default multi-user.target\n\n# \u5207\u6362 Target \u65f6\uff0c\u9ed8\u8ba4\u4e0d\u5173\u95ed\u524d\u4e00\u4e2a Target \u542f\u52a8\u7684\u8fdb\u7a0b\uff0c\n# systemctl isolate \u547d\u4ee4\u6539\u53d8\u8fd9\u79cd\u884c\u4e3a\uff0c\n# \u5173\u95ed\u524d\u4e00\u4e2a Target \u91cc\u9762\u6240\u6709\u4e0d\u5c5e\u4e8e\u540e\u4e00\u4e2a Target \u7684\u8fdb\u7a0b\nsudo systemctl isolate multi-user.target\n")),Object(l.b)("h2",{id:"target-vs-initrunlevel"},"Target vs init/RunLevel"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"init/RunLevel",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 RunLevel /etc/inittab"),Object(l.b)("li",{parentName:"ul"},"\u811a\u672c\u4f4d\u4e8e /etc/init.d - \u7b49\u540c\u4e8e Unit"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u7684\u811a\u672c link \u5230 /etc/rc.d \u6216 /etc/runlevels/"),Object(l.b)("li",{parentName:"ul"},"init \u914d\u7f6e\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/sysconfig")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rc.conf")))),Object(l.b)("li",{parentName:"ul"},"Target",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 /etc/systemd/system/default.target",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"link \u5230 multi-user.target \u6216 graphical.target"))),Object(l.b)("li",{parentName:"ul"},"Unit \u4f4d\u4e8e /lib/systemd/system"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u540e\u4f4d\u4e8e /etc/systemd/system"),Object(l.b)("li",{parentName:"ul"},"systemd \u914d\u7f6e /lib/systemd, /etc/systemd")))),Object(l.b)("h1",{id:"example"},"Example"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/docker/docker/blob/master/contrib/init/systemd/"},"docker systemd"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/systemd/system/prometheus-node-exporter.service")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=Prometheus Node Exporter\nAfter=network-online.target\n\n[Service]\n# User=prometheus\nRestart=on-failure\n\nExecStart=/opt/prometheus/bin/node_exporter\n")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"why-archlinux-migrate-to-systemd"},"Why archlinux migrate to systemd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://bbs.archlinux.org/viewtopic.php?pid=1149530#p1149530"},"Archlinux is moving to systemd")," - 2012-08")),Object(l.b)("h2",{id:"\u67e5\u770b\u5f00\u542f\u7684\u670d\u52a1"},"\u67e5\u770b\u5f00\u542f\u7684\u670d\u52a1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"systemctl list-unit-files --state=enabled\nsystemctl list-unit-files --state=enabled --type=service\nsystemctl list-unit-files | grep enabled\n")),Object(l.b)("h2",{id:"crontab"},"crontab"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/var/spool/cron/root - \u5168\u5c40\uff0c\u65e0\u7528\u6237"),Object(l.b)("li",{parentName:"ul"},"/etc/crontab - root\uff0c\u9700\u8981\u6307\u5b9a\u7528\u6237"),Object(l.b)("li",{parentName:"ul"},"/etc/cron.d/ - \u9700\u8981\u6307\u5b9a\u7528\u6237")))}s.isMDXComponent=!0}}]);