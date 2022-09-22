"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46379],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=n(96600),a=n(27279),c=(n(59496),n(49613)),o=["components"],s={title:"bcachefs"},i=void 0,l={unversionedId:"os/linux/fs/bcachefs",id:"os/linux/fs/bcachefs",title:"bcachefs",description:"- bcachefs - koverstreet/bcachefs",source:"@site/notes/os/linux/fs/bcachefs.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/bcachefs",permalink:"/notes/os/linux/fs/bcachefs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/fs/bcachefs.md",tags:[],version:"current",frontMatter:{title:"bcachefs"},sidebar:"docs",previous:{title:"FS",permalink:"/notes/os/linux/fs/"},next:{title:"Btrfs",permalink:"/notes/os/linux/fs/btrfs"}},u={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://bcachefs.org"},"bcachefs")," - ",(0,c.kt)("a",{parentName:"li",href:"https://github.com/koverstreet/bcachefs"},"koverstreet/bcachefs"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u5bf9\u6807 zfs btrfs"),(0,c.kt)("li",{parentName:"ul"},"COW"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 \u52a0\u5bc6 - AEAD - ChaCha20, Poly1305"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 \u538b\u7f29 - LZ4, gzip, ZSTD"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5feb\u7167"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 CRC32 checksum"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528 \u591a block device"),(0,c.kt)("li",{parentName:"ul"},"Tiering/writeback caching"),(0,c.kt)("li",{parentName:"ul"},"\u652f\u6301 \u526f\u672c - RAID 1/10"),(0,c.kt)("li",{parentName:"ul"},"Erasure coding"))),(0,c.kt)("li",{parentName:"ul"},"Bcache - a block-layer cache system for Linux",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"bcachefs \u4f7f\u7528\u4e86 Bcache 80% \u6e90\u7801")))),(0,c.kt)("admonition",{type:"caution"},(0,c.kt)("ul",{parentName:"admonition"},(0,c.kt)("li",{parentName:"ul"},"\u975e\u5e38\u65b0 - \u5c1a\u4e0d\u6210\u719f"),(0,c.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5c1a\u672a \u5305\u542b\u5728 \u5185\u6838"))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"bcachefs format /dev/sda\nmount -t bcachefs /dev/sda /mnt\n\n# RAID 0/1\nbcachefs format /dev/sda /dev/sdb --replicas=n\nmount -t bcachefs /dev/sda1:/dev/sdb1 /mnt\n\n# RAID 0/1 + SSD \u7f13\u5b58\nbcachefs format \\\n    --group=ssd /dev/sda /dev/sdb\n    --group=hdd /dev/sdc /dev/sdd /dev/sde /dev/sdf \\\n    --data_replicas=1 --metadata_replicas=2 \\\n    --foreground_target=ssd \\\n    --background_target=hdd \\\n    --promote_target=ssd\nmount -t bcachefs /dev/sda:/dev/sdb:/dev/sdc:/dev/sdd/dev/sde:/dev/sdf /mnt\n")))}d.isMDXComponent=!0}}]);