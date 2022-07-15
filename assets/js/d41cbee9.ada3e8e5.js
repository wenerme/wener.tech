"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52711],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31291:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Alpine local backup"},p=void 0,s={unversionedId:"os/alpine/alpine-lbu",id:"os/alpine/alpine-lbu",title:"Alpine local backup",description:"- lbu - Alpine local backup",source:"@site/notes/os/alpine/alpine-lbu.md",sourceDirName:"os/alpine",slug:"/os/alpine/alpine-lbu",permalink:"/notes/os/alpine/alpine-lbu",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-lbu.md",tags:[],version:"current",frontMatter:{title:"Alpine local backup"},sidebar:"docs",previous:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"},next:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/alpine-ops"}},c={},u=[{value:"lbu.conf",id:"lbuconf",level:2},{value:"rootfs.apkvol",id:"rootfsapkvol",level:2},{value:"restore from apkvol",id:"restore-from-apkvol",level:2}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lbu - ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Alpine_local_backup"},"Alpine local backup")),(0,l.kt)("li",{parentName:"ul"},"apkvol.tar.gz")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"diskless \u5b89\u88c5\u5fc5\u5907 - commit \u4fee\u6539\u5230\u5916\u90e8 media"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u5173\u5fc3 /etc \u4e0b\u5185\u5bb9\uff0c\u4e0d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/init.d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a\u6240\u6709 /etc \u4e0b\u7684\u5185\u5bb9\u8fdb\u884c\u5907\u4efd\u6216\u6062\u590d"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apk fix")," \u4f1a\u5b89\u88c5\u6240\u9700\u5305")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"abbr."),(0,l.kt)("th",{parentName:"tr",align:null},"command"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ci"),(0,l.kt)("td",{parentName:"tr",align:null},"commit"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pkg"),(0,l.kt)("td",{parentName:"tr",align:null},"package"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"st"),(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u6bd4\u4e0a\u6b21 commit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ls"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u5316\u5217\u8868 - \u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"td"},"lbu status -a"),", \u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"lbu package -v /dev/null")," \u8f93\u51fa\u76f8\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"diff"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inc,add"),(0,l.kt)("td",{parentName:"tr",align:null},"include"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"td"},"/etc/apk/protected_paths.d/lbu.list"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ex,delete"),(0,l.kt)("td",{parentName:"tr",align:null},"exclude"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lb"),(0,l.kt)("td",{parentName:"tr",align:null},"list-backup"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"revert"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u4e0d\u4f1a\u4fee\u6539\u7cfb\u7edf")," - \u4fee\u6539\u5f53\u524d\u6d3b\u8dc3\u7684 apkvol\uff0c\u4e0b\u6b21\u542f\u52a8\u65f6\u52a0\u8f7d")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'lbu st -a # \u5f53\u524d\u7cfb\u7edf\u4fee\u6539\n\nmkdir backups\nlbu pkg -v backups\nls backups          # <hostname>.apkovl.tar.gz\n\n# \u5907\u4efd\u5230\u672c\u5730\nmkdir /root/lbu-backups\nsed -ri "s@^(#\\s*)?LBU_BACKUPDIR=.*@LBU_BACKUPDIR=/root/lbu-backups@" /etc/lbu/lbu.conf\nlbu ci\nls /root/lbu-backups  # <hostname>.apkovl.tar.gz\nlbu st                # \u5df2\u7ecf\u6ca1\u6709\u53d8\u5316\n\nlbu ci\nls /root/lbu-backups  # \u65e7\u7684\u53d8\u6210 <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\nlbu lb                # \u4f1a\u663e\u793a <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\n\n# \u5224\u65ad\u662f\u5426\u6709\u4fee\u6539\n[ $(lbu st | wc -c) = 0 ] && echo No change || lbu ci -v\n\n# \u8fdc\u7a0b\u5907\u4efd\nssh root@client "lbu package -" >client.apkovl.tar.gz\n')),(0,l.kt)("h2",{id:"lbuconf"},"lbu.conf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/lbu.conf"),(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/pre-package.d"),(0,l.kt)("li",{parentName:"ul"},"/etc/lbu/post-package.d"),(0,l.kt)("li",{parentName:"ul"},"/etc/apk/protected_paths.d/lbu.list",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+var/lib/tailscale")," - inlcude - \u589e\u52a0\u5907\u4efd\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-etc/ssh/sshd_host*")," - exclude - \u6392\u9664\u5907\u4efd\u6587\u4ef6")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"# -e\nDEFAULT_CIPHER=aes-256-cbc\n\n# \u9ed8\u8ba4\u5f00\u542f\u52a0\u5bc6\n# ENCRYPTION=$DEFAULT_CIPHER\n\n# \u5b58\u50a8\u7684\u5916\u90e8\u5a92\u4f53\u8bbe\u5907\n# \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a floppy\n# LBU_MEDIA=usb\n\n# \u5b58\u50a8\u5230\u672c\u5730\u76ee\u5f55\u800c\u4e0d\u662f\u5916\u90e8 \u5a92\u4f53\n# LBU_BACKUPDIR=/root/lbu-backups\n\n# \u6700\u591a\u5b58\u50a8\u591a\u5c11\u5907\u4efd\n# BACKUP_LIMIT=3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pre",metastring:"/etc/apk/protected_paths.d/lbu.list","/etc/apk/protected_paths.d/lbu.list":!0},"+var/lib/tailscale/\n-etc/ssh/ssh_host*\n")),(0,l.kt)("h2",{id:"rootfsapkvol"},"rootfs.apkvol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nmkdir -p rootfs\ntar zxf alpine-minirootfs-3.12.0-x86_64.tar.gz -C rootfs\n\ncp /etc/apk/repositories rootfs/etc/apk/\n# \u53ef\u9009 - chroot \u540e\u53ef apk add\n# echo nameserver 114.114.114.114 > rootfs/etc/resolv.conf\napk --root rootfs add alpine-conf\n\n# \u83b7\u53d6\u5230 rootfs.apkvol\nchroot rootfs/ lbu pkg rootfs.apkvol.tar.gz\nmv rootfs/rootfs.apkvol.tar.gz .\n")),(0,l.kt)("h2",{id:"restore-from-apkvol"},"restore from apkvol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tar -C / --numeric-owner -zxvf os.apkvol.tar.gz > /tmp/ovlfiles\n\napk fix                   # /etc/apk/world\nhostname -F /etc/hostname # /etc/hostname\nservice modules restart   # /etc/modules-load.d\nservice sysctl restart    # /etc/sysctl.d\n\nservice sshd reload       # /etc/ssh/sshd_config\n\ngrep etc/tinc/ /tmp/ovlfiles > /dev/null && service tincd restart\ngrep etc/sockd.conf /tmp/ovlfiles > /dev/null && service sockd restart\n\n# service xyz start       # start needed services\n")))}k.isMDXComponent=!0}}]);