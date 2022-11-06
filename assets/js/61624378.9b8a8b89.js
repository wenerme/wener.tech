"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92953],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25916:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&c(t,n,e[n]);return t};const m={title:"Alpine local backup"},k="Alpine local backup",d={unversionedId:"os/alpine/alpine-lbu",id:"os/alpine/alpine-lbu",title:"Alpine local backup",description:"- lbu - Alpine local backup",source:"@site/../notes/os/alpine/alpine-lbu.md",sourceDirName:"os/alpine",slug:"/os/alpine/lbu",permalink:"/notes/os/alpine/lbu",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-lbu.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666229352,formattedLastUpdatedAt:"Oct 20, 2022",frontMatter:{title:"Alpine local backup"},sidebar:"docs",previous:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/intro"},next:{title:"Alpine \u8fd0\u7ef4\u7b14\u8bb0",permalink:"/notes/os/alpine/ops"}},b={},f=[{value:"lbu.conf",id:"lbuconf",level:2},{value:"rootfs.apkvol",id:"rootfsapkvol",level:2},{value:"restore from apkvol",id:"restore-from-apkvol",level:2}],N={toc:f};function g(t){var e,n=t,{components:r}=n,c=((t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=s(s({},N),c),l(e,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",s({},{id:"alpine-local-backup"}),"Alpine local backup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lbu - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Alpine_local_backup"}),"Alpine local backup")),(0,a.kt)("li",{parentName:"ul"},"apkvol.tar.gz")),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"diskless \u5b89\u88c5\u5fc5\u5907 - commit \u4fee\u6539\u5230\u5916\u90e8 media"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u53ea\u5173\u5fc3 /etc \u4e0b\u5185\u5bb9\uff0c\u4e0d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/init.d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a\u6240\u6709 /etc \u4e0b\u7684\u5185\u5bb9\u8fdb\u884c\u5907\u4efd\u6216\u6062\u590d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apk fix")," \u4f1a\u5b89\u88c5\u6240\u9700\u5305"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"abbr."),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"command"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ci"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"commit"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"pkg"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"package"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"st"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"status"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5bf9\u6bd4\u4e0a\u6b21 commit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ls"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"list"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u53d8\u5316\u5217\u8868 - \u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"td"},"lbu status -a"),", \u4e0e ",(0,a.kt)("inlineCode",{parentName:"td"},"lbu package -v /dev/null")," \u8f93\u51fa\u76f8\u540c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"diff"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"inc,add"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"include"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"td"},"/etc/apk/protected_paths.d/lbu.list"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ex,delete"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"exclude"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"lb"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"list-backup"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"revert"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4e0d\u4f1a\u4fee\u6539\u7cfb\u7edf")," - \u4fee\u6539\u5f53\u524d\u6d3b\u8dc3\u7684 apkvol\uff0c\u4e0b\u6b21\u542f\u52a8\u65f6\u52a0\u8f7d")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'lbu st -a # \u5f53\u524d\u7cfb\u7edf\u4fee\u6539\n\nmkdir backups      # \u51c6\u5907\u5907\u4efd\u76ee\u5f55\nlbu pkg -v backups # \u5907\u4efd\nls backups         # \u751f\u6210 <hostname>.apkovl.tar.gz\n\n# \u5907\u4efd\u5230\u672c\u5730\nmkdir /root/lbu-backups\nsed -ri "s@^(#\\s*)?LBU_BACKUPDIR=.*@LBU_BACKUPDIR=/root/lbu-backups@" /etc/lbu/lbu.conf\nlbu ci\nls /root/lbu-backups # <hostname>.apkovl.tar.gz\nlbu st               # \u5df2\u7ecf\u6ca1\u6709\u53d8\u5316\n\nlbu ci\nls /root/lbu-backups # \u65e7\u7684\u53d8\u6210 <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\nlbu lb               # \u4f1a\u663e\u793a <hostname>.<YYYYMMDDHHmmSS>.apkovl.tar.gz\n\n# \u5224\u65ad\u662f\u5426\u6709\u4fee\u6539\n[ $(lbu st | wc -c) = 0 ] && echo No change || lbu ci -v\n\n# \u8fdc\u7a0b\u5907\u4efd\nssh root@client "lbu package -" > client.apkovl.tar.gz\nssh admin@client "sudo lbu package -" > client.apkovl.tar.gz\n# \u6062\u590d\ncat client.aplovl.tar.gz | ssh admin@client \'sudo tar -C / --numeric-owner -zxvf - > /tmp/ovlfiles\'\n\n# diff\ntar df os.apkvol.tar.gz -C / # \u6c47\u62a5\u4fee\u6539\n')),(0,a.kt)("h2",s({},{id:"lbuconf"}),"lbu.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/lbu/lbu.conf"),(0,a.kt)("li",{parentName:"ul"},"/etc/lbu/pre-package.d"),(0,a.kt)("li",{parentName:"ul"},"/etc/lbu/post-package.d"),(0,a.kt)("li",{parentName:"ul"},"/etc/apk/protected_paths.d/lbu.list",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+var/lib/tailscale")," - inlcude - \u589e\u52a0\u5907\u4efd\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-etc/ssh/sshd_host*")," - exclude - \u6392\u9664\u5907\u4efd\u6587\u4ef6")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-conf"}),"# -e\nDEFAULT_CIPHER=aes-256-cbc\n\n# \u9ed8\u8ba4\u5f00\u542f\u52a0\u5bc6\n# ENCRYPTION=$DEFAULT_CIPHER\n\n# \u5b58\u50a8\u7684\u5916\u90e8\u5a92\u4f53\u8bbe\u5907\n# \u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a floppy\n# LBU_MEDIA=usb\n\n# \u5b58\u50a8\u5230\u672c\u5730\u76ee\u5f55\u800c\u4e0d\u662f\u5916\u90e8 \u5a92\u4f53\n# LBU_BACKUPDIR=/root/lbu-backups\n\n# \u6700\u591a\u5b58\u50a8\u591a\u5c11\u5907\u4efd\n# BACKUP_LIMIT=3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a8\u8350")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-pre",metastring:"/etc/apk/protected_paths.d/lbu.list","/etc/apk/protected_paths.d/lbu.list":!0}),"+var/lib/tailscale/\n-etc/ssh/ssh_host*\n\nhome/admin/.ssh\nroot/.ssh\n\n# /etc/init.d/tincd.netname\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684 initd \u811a\u672c - symlink \u9ed8\u8ba4\u4f1a\u590d\u5236"),(0,a.kt)("li",{parentName:"ul"},"\u6062\u590d\u6ce8\u610f \u4fee\u6539 rootfs UUID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/update-extlinux.conf"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6216\u5220\u9664 root"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"blkid -o export /dev/root")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/fstab"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539 UUID"))),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0 mkinitfs \u6216 \u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"/boot/extlinux.conf")),(0,a.kt)("li",{parentName:"ul"},"\u9519\u8bef\u53ef\u80fd\u5bfc\u81f4 rootfs \u53ea\u8bfb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo mount -o remount,rw /dev/vda2 /"))))))),(0,a.kt)("h2",s({},{id:"rootfsapkvol"}),"rootfs.apkvol"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"curl -LO https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nmkdir -p rootfs\ntar zxf alpine-minirootfs-3.12.0-x86_64.tar.gz -C rootfs\n\ncp /etc/apk/repositories rootfs/etc/apk/\n# \u53ef\u9009 - chroot \u540e\u53ef apk add\n# echo nameserver 114.114.114.114 > rootfs/etc/resolv.conf\napk --root rootfs add alpine-conf\n\n# \u83b7\u53d6\u5230 rootfs.apkvol\nchroot rootfs/ lbu pkg rootfs.apkvol.tar.gz\nmv rootfs/rootfs.apkvol.tar.gz .\n")),(0,a.kt)("h2",s({},{id:"restore-from-apkvol"}),"restore from apkvol"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"tar -C / --numeric-owner -zxvf os.apkvol.tar.gz > /tmp/ovlfiles\n\napk fix                   # /etc/apk/world\nhostname -F /etc/hostname # /etc/hostname\nservice modules restart   # /etc/modules-load.d\nservice sysctl restart    # /etc/sysctl.d\nservice sshd reload       # /etc/ssh/sshd_config\n\ngrep etc/tinc/ /tmp/ovlfiles > /dev/null && service tincd restart\ngrep etc/sockd.conf /tmp/ovlfiles > /dev/null && service sockd restart\n\n# service xyz start       # start needed services\n")))}g.isMDXComponent=!0}}]);