"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74549],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,k=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1637:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=r(96600),n=r(27279),i=(r(59496),r(49613)),l=["components"],o={title:"Storage"},s="Storage",p={unversionedId:"ops/storage/README",id:"ops/storage/README",title:"Storage",description:"Tips",source:"@site/../notes/ops/storage/README.md",sourceDirName:"ops/storage",slug:"/ops/storage/",permalink:"/notes/ops/storage/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/storage/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Storage"},sidebar:"docs",previous:{title:"Vault",permalink:"/notes/ops/service/vault"},next:{title:"Fiber Channel",permalink:"/notes/ops/storage/block/fc"}},u={},c=[{value:"Tips",id:"tips",level:2},{value:"Transfer",id:"transfer",level:2},{value:"Disk",id:"disk",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storage"},"Storage"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/restic/restic"},"restic/restic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://restic.github.io/"},"restic")),(0,i.kt)("li",{parentName:"ul"},"Fast, secure, efficient backup program"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rclone.org/"},"Rclone"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ncw/rclone"},"ncw/rclone")),(0,i.kt)("li",{parentName:"ul"},"Rclone is a command line program to sync files and directories to and from"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mountainduck.io/"},"Mountain Duck"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mount server and cloud storage as a local disk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mountainduck.io/comparison/"},"comparison")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cyberduck.io/"},"Cyberduck"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iterate-ch/cyberduck"},"iterate-ch/cyberduck")),(0,i.kt)("li",{parentName:"ul"},"Cyberduck is a libre FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift, Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox browser for Mac and Windows."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cryptomator.org/"},"Cryptomator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cryptomator/cryptomator"},"cryptomator/cryptomator")),(0,i.kt)("li",{parentName:"ul"},"Free client-side encryption for your cloud files. Open source software: No backdoors, no registration."),(0,i.kt)("li",{parentName:"ul"},"Transparent encryption"),(0,i.kt)("li",{parentName:"ul"},"Files get encrypted individually"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cryptomator/cryptofs"},"cryptomator/cryptofs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Java Filesystem Provider with integrated encryption"))))),(0,i.kt)("li",{parentName:"ul"},"Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lookfirst/sardine"},"lookfirst/sardine"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"an easy to use webdav client for java"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dCache/nfs4j"},"dCache/nfs4j"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pure Java NFSv3 and NFSv4.1 implementation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hierynomus/sshj"},"ssh, scp and sftp for java")))),(0,i.kt)("li",{parentName:"ul"},"Golang",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spf13/afero"},"spf13/afero")))),(0,i.kt)("li",{parentName:"ul"},"S3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse/s3fs-fuse"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u968f\u673a\u5199\u6216 append \u4f1a\u91cd\u5199\u6574\u4e2a\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"list \u6574\u4e2a\u76ee\u5f55\u7684\u6027\u80fd\u8f83\u5dee, \u53d6\u51b3\u4e8e\u7f51\u7edc\u5ef6\u8fdf"),(0,i.kt)("li",{parentName:"ul"},"\u6700\u7ec8\u4e00\u81f4\u6027\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8bfb\u53d6\u8fc7\u671f\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u4e0d\u662f\u539f\u5b50\u6027\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u7aef\u6302\u8f7d\u4e0d\u4f1a\u8fdb\u884c\u534f\u8c03"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u786c\u8fde\u63a5"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kahing/goofys"},"kahing/goofys"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Goofys is a high-performance, POSIX-ish Amazon S3 file system written in Go"))))),(0,i.kt)("li",{parentName:"ul"},"B2 Cloud Storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.backblaze.com/b2/cloud-storage-pricing.html"},"Pricing")),(0,i.kt)("li",{parentName:"ul"},"\u975e\u5e38\u4fbf\u5b9c\u7684\u4e91\u5b58\u50a8"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8 0.005$/GB/Month"),(0,i.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d 0.02$/GB"))),(0,i.kt)("li",{parentName:"ul"},"FS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kahing/catfs"},"kahing/catfs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Catfs is a caching filesystem written in Rust"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.snia.org/sites/default/files/SDC/2016/presentations/erasure_coding/DrorGoldenberg_Optimize_Storage_Efficiency-v2.pdf"},"Optimize Storage Efficiency")),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u7684\u6587\u4ef6\u540d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Windows ",(0,i.kt)("inlineCode",{parentName:"li"},'\\/:*?"<>|')),(0,i.kt)("li",{parentName:"ul"},"Linux, macOS ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"/"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install s3fs\n\nbrew install goofys\n\nexport AWS_ACCESS_KEY_ID=${ID}\nexport AWS_SECRET_ACCESS_KEY=${KEY}\n# goofys <bucket> <mountpoint>\n# goofys <bucket:prefix> <mountpoint>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'find dir/ -name "offender1" -mtime -1 -print0 | du --files0-from=- -hc | tail -n1\n')),(0,i.kt)("h2",{id:"transfer"},"Transfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e24\u4e2a\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u5927\u91cf\u5c0f\u6587\u4ef6\u65f6\u975e\u5e38\u5feb\n# \u89c9\u5f97 gzip \u6162\u53ef\u4ee5\u4f7f\u7528 pigz\ntar c some/dir/ | gzip - | ssh host2 tar xz -C /other/dir/\n# \u5168\u91cf\u540c\u6b65\u540e\u518d\u8fdb\u884c\u589e\u91cf\u540c\u6b65\nrsync -azv some/dir/ user@host:/other/dir/\n\n")),(0,i.kt)("h2",{id:"disk"},"Disk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Disk_cloning"},"Disk cloning"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#\nlsblk --output NAME,SIZE,VENDOR,FSTYPE,LABEL,UUID,MODE\n\n# \u514b\u9686\u5355\u4e2a\u78c1\u76d8\ndd if=/dev/sda1 of=/dev/sdb1 bs=64K conv=noerror,sync status=progress\n# \u514b\u9686\u6574\u4e2a\u78c1\u76d8\ndd if=/dev/sdX of=/dev/sdY bs=64K conv=noerror,sync status=progress\n\n# \u5907\u4efd\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u5907\u4efd\u542f\u52a8\u5206\u533a\n# https://wiki.archlinux.org/index.php/disk_cloning\ndd if=/dev/sda1 of=/mnt/dst/bios-boot bs=64K conv=noerror,sync status=progress\n\n# \u5907\u4efd\u5206\u533a\nsfdisk -d /dev/sda > part_table\n# \u6062\u590d\u5206\u533a\nsfdisk /dev/sda < part_table\n# wipefs \u4e5f\u53ef\u4ee5\n')))}f.isMDXComponent=!0}}]);