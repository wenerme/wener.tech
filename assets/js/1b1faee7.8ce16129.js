"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2927],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(i,".").concat(s)]||m[s]||b[s]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80711:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&c(e,r,t[r]);return e};const m={title:"GRUB"},s="GRUB",f={unversionedId:"os/linux/boot/grub",id:"os/linux/boot/grub",title:"GRUB",description:"- GRUB",source:"@site/../notes/os/linux/boot/grub.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/grub",permalink:"/notes/os/linux/boot/grub",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/boot/grub.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"GRUB"},sidebar:"docs",previous:{title:"dracut",permalink:"/notes/os/linux/boot/dracut"},next:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"}},d={},g=[{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"/etc/grub.d/10_linux",id:"etcgrubd10_linux",level:2},{value:"Install",id:"install",level:2},{value:"grub-probe: error: cannot find a device for /",id:"grub-probe-error-cannot-find-a-device-for-",level:2}],k={toc:g};function N(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=b(b({},k),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",b({},{id:"grub"}),"GRUB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GRUB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 boot \u5206\u533a\u52a0\u5bc6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2.0.4 \u8fd8\u4e0d\u652f\u6301 LUKS2 - \u9700\u8981\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"li"},"--type luks1")))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",b({parentName:"li"},{href:"https://www.gnu.org/software/grub/manual/grub/"}),"grub manual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",b({parentName:"li"},{href:"https://en.wikipedia.org/wiki/GNU_GRUB"}),"GNU GRUB")),(0,n.kt)("li",{parentName:"ul"},"archlinux ",(0,n.kt)("a",b({parentName:"li"},{href:"https://wiki.archlinux.org/title/GRUB"}),"GRUB")),(0,n.kt)("li",{parentName:"ul"},"ubuntu ",(0,n.kt)("a",b({parentName:"li"},{href:"https://help.ubuntu.com/community/Grub2"}),"Grub2")),(0,n.kt)("li",{parentName:"ul"},"alpine ",(0,n.kt)("a",b({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/-/tree/master/main/grub"}),"main/grub"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6709\u52a0 patch \u505a\u4e00\u70b9\u8c03\u6574 - \u4f8b\u5982\u652f\u6301 /etc/update-extlinux.conf")))))),(0,n.kt)("h2",b({},{id:"\u7ed3\u6784"}),"\u7ed3\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/boot/grub/grub.cfg - \u6700\u7ec8\u751f\u6210\u7684\u914d\u7f6e - grub-mkconfig",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/grub.d")," \u751f\u6210"))),(0,n.kt)("li",{parentName:"ul"},"/etc/default/grub - \u73af\u5883\u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f71\u54cd ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/grub.d")," \u811a\u672c\u751f\u6210\u7ed3\u679c"))),(0,n.kt)("li",{parentName:"ul"},"/etc/grub.d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u811a\u672c /etc/grub.d/10_linux"),(0,n.kt)("li",{parentName:"ul"},"/etc/grub.d/41_custom \u4f1a source /boot/grub/custom.cfg")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"/etc/default/grub")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-shell"}),'GRUB_TIMEOUT=2\nGRUB_DISABLE_SUBMENU=y\nGRUB_DISABLE_RECOVERY=true\nGRUB_CMDLINE_LINUX_DEFAULT="modules=sd-mod,usb-storage,ext4 quiet rootfstype=ext4"\n\n# GRUB_DISABLE_OS_PROBER=false\n# GRUB_PRELOAD_MODULES="lvm"\n# GRUB_ENABLE_CRYPTODISK=y\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GRUB_CMDLINE_LINUX_DEFAULT",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u6a21\u5f0f"))),(0,n.kt)("li",{parentName:"ul"},"GRUB_CMDLINE_LINUX",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u548c\u6062\u590d\u6a21\u5f0f\u90fd\u4f1a\u7528\u5230"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",b({parentName:"li"},{href:"https://help.ubuntu.com/community/Grub2/Setup"}),"Grub2/Setup"))))),(0,n.kt)("h2",b({},{id:"etcgrubd10_linux"}),"/etc/grub.d/10_linux"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f1a source /etc/update-extlinux.conf \u5e76\u6dfb\u52a0\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-bash"}),'if [ -f /etc/update-extlinux.conf ]; then\n    . /etc/update-extlinux.conf\n    GRUB_CMDLINE_LINUX_DEFAULT="modules=${modules} ${default_kernel_opts} ${GRUB_CMDLINE_LINUX_DEFAULT}"\nfi\n')),(0,n.kt)("h2",b({},{id:"install"}),"Install"),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-bash"}),'# https://github.com/alpinelinux/alpine-conf/blob/4f960a81e65c7ee1e37b5a4029e2aa47e63e654f/setup-disk.in#L281\ngrub-install --target=x86_64-efi --efi-directory="$mnt"/boot/efi --bootloader-id=alpine --boot-directory="$mnt"/boot --no-nvram\n# fallback\ninstall -D "$mnt"/boot/efi/EFI/alpine/grubx64.efi "$mnt"/boot/efi/EFI/boot/boot$fwa.efi\n\ngrub-install --target=i386-pc /dev/sdX\ngrub-install --target=x86_64-efi --efi-directory=esp --bootloader-id=GRUB\n\ngrub-mkconfig -o /boot/grub/grub.cfg\n')),(0,n.kt)("h1",b({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",b({},{id:"grub-probe-error-cannot-find-a-device-for-"}),"grub-probe: error: cannot find a device for /"),(0,n.kt)("p",null,"\u5148 chroot \u518d mount \u4e00\u6b21"),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-bash"}),"chroot /mnt\nmount -t ext4 /dev/loop0p2 /\n\n# \u73b0\u5728\u6267\u884c\u5c31\u6ca1\u95ee\u9898\u4e86\ngrub-mkconfig -o /boot/grub/grub.cfg.new \\\n    && mv /boot/grub/grub.cfg.new /boot/grub/grub.cfg\n")))}N.isMDXComponent=!0}}]);