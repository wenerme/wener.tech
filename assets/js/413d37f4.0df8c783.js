"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73368],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74015:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(96600),a=n(27279),i=(n(59496),n(49613)),o=["components"],s={title:"FUSE"},l="FUSE",u={unversionedId:"os/linux/fs/fuse",id:"os/linux/fs/fuse",title:"FUSE",description:"- Golang",source:"@site/../notes/os/linux/fs/fuse.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/fuse",permalink:"/notes/os/linux/fs/fuse",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/fs/fuse.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"FUSE"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7cfb\u7edf\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/fs/fs-faq"},next:{title:"KSMBD",permalink:"/notes/os/linux/fs/ksmbd"}},p={},c=[{value:"zip",id:"zip",level:2},{value:"encfs",id:"encfs",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fuse"},"FUSE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Golang",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bazil/fuse"},"bazil/fuse")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fuse-friends/fuse-native"},"fuse-friends/fuse-native"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Docker \u5185\u4f7f\u7528 FUSE\ndocker run --rm -it --privileged --cap-add SYS_ADMIN --cap-add MKNOD --device /dev/fuse -v $PWD:/host -w /host wener/base:alpine\n\n# \u6302\u8f7d loop\nlosetup -P /dev/loop2 harddrive.img\n")),(0,i.kt)("h2",{id:"zip"},"zip"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://avf.sourceforge.net/"},"avfs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bitbucket.org/agalanin/fuse-zip/"},"fuse-zip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cybernoia.de/software/archivemount/"},"archivemount"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ea\u8bfb\u6302\u8f7d\nfuse-zip -r archivetest.zip ~/mnt/zip\narchivemount -o readonly archivetest.zip /mnt\n")),(0,i.kt)("h2",{id:"encfs"},"encfs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vgough/encfs"},"https://github.com/vgough/encfs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vgough/encfs/blob/master/encfs/encfs.pod"},"https://github.com/vgough/encfs/blob/master/encfs/encfs.pod"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# For single file\nopenssl des3 -salt -in unencrypted-data.file -out encrypted-data.file.des3\nopenssl des3 -d -salt -in encrypted-data.file.des3 -out unencrypted-data.file\n\n# For a fs\n# \u7b2c\u4e00\u6b21\u542f\u52a8\u9700\u8981\u914d\u7f6e\nencfs -v -f ~/.crypt ~/mnt/crypt\n\n# \u914d\u5408 zip fs \u4f7f\u7528\ntouch empty\nzip encfs.zip empty\narchivemount encfs.zip ~/mnt/zip\n# \u64cd\u4f5c\u5199\u540e\n# \u6b64\u65f6\u624d\u4f1a\u60f3\u6570\u636e\u5199\u56de zip\numount ~/mnt/zip\n\n# \u914d\u5408\u5355\u6587\u4ef6\u6302\u8f7d\ndd if=/dev/zero of=image.img iflag=fullblock bs=1M count=100 && sync\n\n# \u67e5\u770b\u6240\u6709\u7684 loop fs\nlosetup\n# \u6302\u8f7d\nsudo losetup loop1 image.img\n# losetup -d /dev/loop1\n\n# macOS\nhdiutil attach -nomount image.img\ndiskutil list\n# umount /dev/disk2\n# hdiutil detach disk2\n\n# \u683c\u5f0f\u5316\u5206\u533a\nmkfs\n\n# \u6216\u8005 mac \u4e0b\n# newfs_msdos disk3\n# \u6216\u8005\n# diskutil eraseDisk JHFS+ VolumeName /dev/disk2\n# mount -t msdos /dev/disk3 ~/mnt/file/\n\n# \u6216\u8005\u4e8b\u5148\u683c\u5f0f\u5316 brew install hfsutils\n# hformat -l File image.img\n# mount -t hfs -o loop image.img /mnt/file\n")))}m.isMDXComponent=!0}}]);