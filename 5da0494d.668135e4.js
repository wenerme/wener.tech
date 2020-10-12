(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(557)),s={id:"nfs",title:"NFS"},l={unversionedId:"ops/storage/fs/nfs",id:"ops/storage/fs/nfs",isDocsHomePage:!1,title:"NFS",description:"NFS",source:"@site/contents/tricks/ops/storage/fs/nfs.md",slug:"/ops/storage/fs/nfs",permalink:"/notes/ops/storage/fs/nfs",version:"current",sidebar:"docs",previous:{title:"FUSE",permalink:"/notes/ops/storage/fs/fuse"},next:{title:"Samba",permalink:"/notes/ops/storage/fs/smb"}},c=[{value:"Tips",id:"tips",children:[]},{value:"nfs-utils",id:"nfs-utils",children:[]},{value:"CacheFS",id:"cachefs",children:[]},{value:"Ports",id:"ports",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"nfs"},"NFS"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5141\u8bb8\u672c\u5730\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 C/S \u7ed3\u6784\u5728 ","*","nix \u4e4b\u95f4\u5206\u4eab\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u4e24\u4e2a\u673a\u5668\u4e4b\u95f4\u4e0d\u9700\u8981\u5141\u8bb8\u76f8\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 NSF \u6307\u5b9a\u4e2d\u5fc3\u5b58\u50a8\u89e3\u51b3\u65b9\u6848"),Object(i.b)("li",{parentName:"ul"},"\u7528\u6237\u4e0d\u9700\u8981\u5173\u7cfb\u6587\u4ef6\u7684\u7269\u7406\u4f4d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u624b\u52a8\u5237\u65b0\u6765\u663e\u793a\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u7248\u672c\u7684 NFS \u4e5f\u652f\u6301 ACL"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u7528\u8fc7\u9632\u706b\u5899\u548c Kerberos \u6765\u4fdd\u8bc1\u5b89\u5168"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 2049 \u7aef\u53e3"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 Kerberos \u53ef\u4f7f\u7528\u5bc6\u7801\u8fdb\u884c\u9a8c\u8bc1"),Object(i.b)("li",{parentName:"ul"},"showmount",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-e")," \u663e\u793a\u672c\u5730\u5171\u4eab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-e <server-ip or hostname>")," \u663e\u793a\u8fdc\u7a0b\u5171\u4eab"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-d")," \u4f8b\u4e3e\u6240\u6709\u5b50\u76ee\u5f55"))),Object(i.b)("li",{parentName:"ul"},"exportfs",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-v")," \u4f8b\u4e3e\u5171\u4eab\u7684\u6587\u4ef6\u548c\u9009\u9879"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-a")," \u5bfc\u51fa\u6240\u6709 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/exports")," \u4e2d\u7684\u5171\u4eab\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-u")," \u53d6\u6d88\u5171\u4eab ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/exports")," \u4e2d\u7684\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-r")," \u5728\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/exports")," \u540e\u5237\u65b0\u670d\u52a1\u5171\u4eab\u5217\u8868"))),Object(i.b)("li",{parentName:"ul"},"AlpineLinux ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Setting_up_a_nfs-server"}),"Setting up a nfs-server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/s1-nfs-server-config-exports.html"}),"/etc/exports")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://kodi.wiki/view/NFS"}),"http://kodi.wiki/view/NFS")),Object(i.b)("li",{parentName:"ul"},"ArchLinux ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/NFS"}),"NFS"),"/",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/NFS_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"}),"\u7b80\u4f53\u4e2d\u6587")),Object(i.b)("li",{parentName:"ul"},"NFS \u672c\u8eab\u6ca1\u6709\u6388\u6743\u8bbf\u95ee\u673a\u5236, \u57fa\u672c\u53ea\u80fd\u9650\u5236 IP, \u548c Kerberos \u914d\u5408\u662f\u53ef\u4ee5\u7684"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.ubuntu.com/community/NFSv4Howto"}),"https://help.ubuntu.com/community/NFSv4Howto")),Object(i.b)("li",{parentName:"ul"},"cifs \u76f8\u6bd4 NFS \u6709\u6388\u6743"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://serverfault.com/q/597254/190601"}),"SMB vs NFS authentication")),Object(i.b)("li",{parentName:"ul"},"NFS \u5982\u679c\u611f\u89c9\u6709\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 v3 \u7248\u672c ",Object(i.b)("inlineCode",{parentName:"li"},"-o v3"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\napk add nfs-utils\n# \u5f00\u673a\u524d\u542f\u52a8\u670d\u52a1\nrc-update add nfs\nrc-update add nfsmount\n# \u7acb\u5373\u542f\u52a8\u670d\u52a1\nrc-service nfs start\nrc-service nfsmount start\n\n# \u5171\u4eab\u8be5\u76ee\u5f55\nsudo mkdir -p /share\n# \u8d4b\u4e88\u5f53\u524d\u7528\u6237\u5171\u4eab\u76ee\u5f55\u6743\u9650\nsudo chown $USER /share\n\n\n# Linux\n# ========\necho '/nfsshare 192.168.0.101(rw,sync,no_root_squash)' | sudo tee /etc/exports\n\n\n\n# \u5982\u679c\u60f3\u8ba9\u5ba2\u6237\u7aef\u975e root \u8bbf\u95ee\u670d\u52a1\u7aef root \u4fe1\u606f, \u5219\u53ef\u4ee5\n# all_squash,anonuid=0,anongid=0\n# \u4f7f\u6240\u6709\u7528\u6237\u90fd\u4f5c\u4e3a\u533f\u540d\u7528\u6237,\u800c\u533f\u540d\u7528\u6237\u5219\u9ed8\u8ba4\u4e3a root\n# \u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a\u7279\u5b9a\u7684\u7528\u6237,\u4f8b\u5982 id asterisk\n\n# macOS\n# ==========\necho '/share -network 192.168.0.0 -mask 255.255.0.0' | sudo tee /etc/exports\nnfsd enable\nnfsd start\nnfsd status\nnfsd checkexport\n\n# \u5982\u679c\u4fee\u6539\u4e86 exports \u6587\u4ef6\nnfsd update\nshowmount -e\n# \u67e5\u770b\u5171\u4eab\u76ee\u5f55\nshowmount -e 192.168.34.120\n\nmount -t nfs 192.168.0.100:/share /mnt/nfsshare\numount 192.168.0.100:/share\n\n# \u5173\u95ed nfs\nnfsd stop\nnfsd disable\n\n# \u5982\u679c mac \u4e0b mount \u51fa\u73b0 Operation not permitted, \u5219\u6dfb\u52a0 -o resvport\nmount -t nfs -o resvport 192.168.1.1:/ ~/mnt/alpine/\n")),Object(i.b)("p",null,"mount.nfs: access denied by server while mounting\n-o v3"),Object(i.b)("p",null,"nfsstat -m"),Object(i.b)("p",null,"nfs://vers=4,10.0.10.26/srv"),Object(i.b)("h2",{id:"nfs-utils"},"nfs-utils"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/proc/fs/nfsd"),Object(i.b)("li",{parentName:"ul"},"/proc/fs/nfs"),Object(i.b)("li",{parentName:"ul"},"/etc/exports",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5171\u4eab\u76ee\u5f55\u5b9a\u4e49"))),Object(i.b)("li",{parentName:"ul"},"/usr/sbin/exportfs",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7ba1\u7406\u5171\u4eab\u7684\u76ee\u5f55 - ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/nfs/etab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-a")," \u5bfc\u51fa\u6240\u6709 - \u5c06 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/exports")," \u540c\u6b65\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/nfs/etab")," - \u66f4\u65b0\u5185\u6838\u7684\u5bfc\u51fa\u8868"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-u")," \u79fb\u9664\u4e00\u4e2a\u5bfc\u51fa ",Object(i.b)("inlineCode",{parentName:"li"},"-au")," \u79fb\u9664\u6240\u6709\u5bfc\u51fa"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-f")," \u79fb\u9664\u6240\u6709"))),Object(i.b)("li",{parentName:"ul"},"/sbin/rpc.statd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ece\u5176\u5b83\u4e3b\u673a\u76d1\u542c\u91cd\u542f\u901a\u77e5"),Object(i.b)("li",{parentName:"ul"},"\u5f53\u672c\u5730\u7cfb\u7edf\u91cd\u542f\uff0c\u7ba1\u7406\u88ab\u901a\u77e5\u7684\u4e3b\u673a\u5217\u8868"))),Object(i.b)("li",{parentName:"ul"},"/usr/sbin/sm-notify",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53d1\u9001\u91cd\u542f\u901a\u77e5\u5230 NFS \u7aef"))),Object(i.b)("li",{parentName:"ul"},"/sbin/mount.nfs"),Object(i.b)("li",{parentName:"ul"},"/sbin/umount.nfs"),Object(i.b)("li",{parentName:"ul"},"/sbin/umount.nfs4"),Object(i.b)("li",{parentName:"ul"},"/sbin/mount.nfs4"),Object(i.b)("li",{parentName:"ul"},"/usr/sbin/showmount",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u67e5\u770b\u6302\u8f7d\u4fe1\u606f")))),Object(i.b)("p",null,"/sbin/nfsdcld\n/sbin/nfsdcltrack\tnfs-utils\tedge\tmain\tx86_64"),Object(i.b)("p",null,"/usr/sbin/showmount\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpc.nfsd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/nfsidmap\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/start-statd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/mountstats\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpc.svcgssd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/blkmapd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/nfsiostat\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpc.idmapd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpc.gssd\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/nfsstat\tnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpc.mountd\tnfs-utils\tedge\tmain\tx86_64\nnfs-utils\tedge\tmain\tx86_64\n/usr/sbin/rpcdebug\tnfs-utils\tedge\tmain\tx86_64"),Object(i.b)("p",null,"/usr/sbin/nfsconf\tnfs-utils\tedge\tmain\tx86_64\n/var/lib/nfs/rmtab\tnfs-utils\tedge\tmain\tx86_64\n/var/lib/nfs/etab\tnfs-utils\tedge\tmain\tx86_64\n/var/lib/nfs/state"),Object(i.b)("h2",{id:"cachefs"},"CacheFS"),Object(i.b)("p",null,"How can I cache NFS shares on a local disk?\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://askubuntu.com/a/4578/267103"}),"https://askubuntu.com/a/4578/267103")),Object(i.b)("p",null,"FS-Cache & CacheFS: Caching for Network File Systems\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.linux-mag.com/id/7378/"}),"http://www.linux-mag.com/id/7378/")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/CacheFS"}),"https://en.wikipedia.org/wiki/CacheFS"),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pkgs.alpinelinux.org/package/v3.7/community/x86_64/cachefilesd"}),"https://pkgs.alpinelinux.org/package/v3.7/community/x86_64/cachefilesd")),Object(i.b)("p",null,"CacheFiles /var/fscache\nCacheFS block \u7ea7\u522b"),Object(i.b)("p",null,"FS-Cache \u63a5\u53e3"),Object(i.b)("p",null,"netfs nfs,afs,isofs"),Object(i.b)("p",null,"/proc/fs/fscache/stats"),Object(i.b)("p",null,"/proc/fs/fscache/histogram"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/netfs-api.txt"}),"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/netfs-api.txt")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/fscache.txt"}),"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/fscache.txt")),Object(i.b)("h2",{id:"ports"},"Ports"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"program vers proto   port\n 100000    2   tcp    111  portmapper,rpcbind\n 100000    2   udp    111  portmapper\n 100005    1   udp    950  mountd\n 100005    3   udp    950  mountd\n 100005    1   tcp    884  mountd\n 100005    3   tcp    884  mountd\n 100003    2   udp   2049  nfs\n 100003    3   udp   2049  nfs\n 100003    2   tcp   2049  nfs\n 100003    3   tcp   2049  nfs\n 100024    1   udp    644  status\n 100024    1   tcp    918  status\n 100021    0   udp    630  nlockmgr\n 100021    1   udp    630  nlockmgr\n 100021    3   udp    630  nlockmgr\n 100021    4   udp    630  nlockmgr\n 100021    0   tcp    917  nlockmgr\n 100021    1   tcp    917  nlockmgr\n 100021    3   tcp    917  nlockmgr\n 100021    4   tcp    917  nlockmgr\n")))}p.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||o[m]||i;return n?r.a.createElement(f,l(l({ref:t},b),{},{components:n})):r.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var b=2;b<i;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);