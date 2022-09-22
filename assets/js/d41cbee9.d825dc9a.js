"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52711],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,o(o({ref:e},s),{},{components:n})):a.createElement(d,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77511:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],p={title:"Alpine local backup"},i=void 0,u={unversionedId:"os/alpine/alpine-lbu",id:"os/alpine/alpine-lbu",title:"Alpine local backup",description:"- lbu - Alpine local backup",source:"@site/notes/os/alpine/alpine-lbu.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-lbu",permalink:"/notes/os/alpine/alpine-lbu",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-lbu.md",tags:[],version:"current",frontMatter:{title:"Alpine local backup"},sidebar:"docs",previous:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"},next:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/alpine-ops"}},s={},c=[{value:"lbu.conf",id:"lbuconf",level:2},{value:"rootfs.apkvol",id:"rootfsapkvol",level:2},{value:"restore from apkvol",id:"restore-from-apkvol",level:2}],m={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lbu - ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_local_backup"},"Alpine local backup")),(0,l.kt)("li",{parentName:"ul"},"apkvol.tar.gz")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"diskless \u5b89\u88c5\u5fc5\u5907 - commit \u4fee\u6539\u5230\u5916\u90e8 media"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u5173\u5fc3 /etc \u4e0b\u5185\u5bb9\uff0c\u4e0d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/init.d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a\u6240\u6709 /etc \u4e0b\u7684\u5185\u5bb9\u8fdb\u884c\u5907\u4efd\u6216\u6062\u590d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apk fix")," \u4f1a\u5b89\u88c5\u6240\u9700\u5305"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr."),(0,l.kt)("th",{parentName:"tr",align:null},"command"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ci"),(0,l.kt)("td",{parentName:"tr",align:null},"commit"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pkg"),(0,l.kt)("td",{parentName:"tr",align:null},"package"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"st"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u6bd4\u4e0a\u6b21 commit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ls"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u5316\u5217\u8868 - \u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"td"},"lbu status -a"),", \u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"lbu package -v /dev/null")," \u8f93\u51fa\u76f8\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"diff"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inc,add"),(0,l.kt)("td",{parentName:"tr",align:null},"include"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"td"},"/etc/apk/protected_paths.d/lbu.list"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ex,delete"),(0,l.kt)("td",{parentName:"tr",align:null},"exclude"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lb"),(0,l.kt)("td",{parentName:"tr",align:null},"list-backup"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"revert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u4f1a\u4fee\u6539\u7cfb\u7edf")," - \u4fee\u6539\u5f53\u524d\u6d3b\u8dc3\u7684 apkvol\uff0c\u4e0b\u6b21\u542f\u52a8\u65f6\u52a0\u8f7d")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'lbu st -a # \u5f53\u524d\u7cfb\u7edf\u4fee\u6539\n\nmkdir backups\nlbu pkg -v backups\nls backups          # <hostname>.apkovl.tar.gz\n\n# \u5907\u4efd\u5230\u672c\u5730\nmkdir /root/lbu-backups\nsed -ri "s@^(#\\s*)?LBU_BACKUPDIR=.*@LBU_BACKUPDIR=/root/lbu-backups@" /etc/lbu/lbu.conf\nlbu ci\nls /root/lbu-backups  # <hostname>.apkovl.tar.gz\nlbu st                # \u5df2\u7ecf\u6ca1\u6709\u53d8\u5316\n\nlbu ci\nls /root/lbu-backups  # \u65e7\u7684\u53d8\u6210 <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\nlbu lb                # \u4f1a\u663e\u793a <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\n\n# \u5224\u65ad\u662f\u5426\u6709\u4fee\u6539\n[ $(lbu st | wc -c) = 0 ] && echo No change || lbu ci -v\n\n# \u8fdc\u7a0b\u5907\u4efd\nssh root@client "lbu package -" >client.apkovl.tar.gz\n\n# diff\ntar df os.apkvol.tar.gz -C / # \u6c47\u62a5\u4fee\u6539\n')),(0,l.kt)("h2",{id:"lbuconf"},"lbu.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/lbu.conf"),(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/pre-package.d"),(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/post-package.d"),(0,l.kt)("li",{parentName:"ul"},"/etc/apk/protected_paths.d/lbu.list",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+var/lib/tailscale")," - inlcude - \u589e\u52a0\u5907\u4efd\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-etc/ssh/sshd_host*")," - exclude - \u6392\u9664\u5907\u4efd\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"# -e\nDEFAULT_CIPHER=aes-256-cbc\n\n# \u9ed8\u8ba4\u5f00\u542f\u52a0\u5bc6\n# ENCRYPTION=$DEFAULT_CIPHER\n\n# \u5b58\u50a8\u7684\u5916\u90e8\u5a92\u4f53\u8bbe\u5907\n# \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a floppy\n# LBU_MEDIA=usb\n\n# \u5b58\u50a8\u5230\u672c\u5730\u76ee\u5f55\u800c\u4e0d\u662f\u5916\u90e8 \u5a92\u4f53\n# LBU_BACKUPDIR=/root/lbu-backups\n\n# \u6700\u591a\u5b58\u50a8\u591a\u5c11\u5907\u4efd\n# BACKUP_LIMIT=3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:"/etc/apk/protected_paths.d/lbu.list","/etc/apk/protected_paths.d/lbu.list":!0},"+var/lib/tailscale/\n-etc/ssh/ssh_host*\n")),(0,l.kt)("h2",{id:"rootfsapkvol"},"rootfs.apkvol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nmkdir -p rootfs\ntar zxf alpine-minirootfs-3.12.0-x86_64.tar.gz -C rootfs\n\ncp /etc/apk/repositories rootfs/etc/apk/\n# \u53ef\u9009 - chroot \u540e\u53ef apk add\n# echo nameserver 114.114.114.114 > rootfs/etc/resolv.conf\napk --root rootfs add alpine-conf\n\n# \u83b7\u53d6\u5230 rootfs.apkvol\nchroot rootfs/ lbu pkg rootfs.apkvol.tar.gz\nmv rootfs/rootfs.apkvol.tar.gz .\n")),(0,l.kt)("h2",{id:"restore-from-apkvol"},"restore from apkvol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar -C / --numeric-owner -zxvf os.apkvol.tar.gz > /tmp/ovlfiles\n\napk fix                   # /etc/apk/world\nhostname -F /etc/hostname # /etc/hostname\nservice modules restart   # /etc/modules-load.d\nservice sysctl restart    # /etc/sysctl.d\n\nservice sshd reload       # /etc/ssh/sshd_config\n\ngrep etc/tinc/ /tmp/ovlfiles > /dev/null && service tincd restart\ngrep etc/sockd.conf /tmp/ovlfiles > /dev/null && service sockd restart\n\n# service xyz start       # start needed services\n")))}k.isMDXComponent=!0}}]);