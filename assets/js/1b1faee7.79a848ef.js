"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2927],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(n),s=a,f=b["".concat(i,".").concat(s)]||b[s]||m[s]||l;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},41518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),u=["components"],o={title:"GRUB"},i="GRUB",p={unversionedId:"os/linux/boot/grub",id:"os/linux/boot/grub",title:"GRUB",description:"- GRUB",source:"@site/../notes/os/linux/boot/grub.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/grub",permalink:"/notes/os/linux/boot/grub",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/linux/boot/grub.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"GRUB"},sidebar:"docs",previous:{title:"dracut",permalink:"/notes/os/linux/boot/dracut"},next:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"}},c={},m=[{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"/etc/grub.d/10_linux",id:"etcgrubd10_linux",level:2},{value:"Install",id:"install",level:2},{value:"grub-probe: error: cannot find a device for /",id:"grub-probe-error-cannot-find-a-device-for-",level:2}],b={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grub"},"GRUB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GRUB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 boot \u5206\u533a\u52a0\u5bc6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2.0.4 \u8fd8\u4e0d\u652f\u6301 LUKS2 - \u9700\u8981\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"--type luks1")))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/grub/manual/grub/"},"grub manual")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GNU_GRUB"},"GNU GRUB")),(0,l.kt)("li",{parentName:"ul"},"archlinux ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/GRUB"},"GRUB")),(0,l.kt)("li",{parentName:"ul"},"ubuntu ",(0,l.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/Grub2"},"Grub2")),(0,l.kt)("li",{parentName:"ul"},"alpine ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/tree/master/main/grub"},"main/grub"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6709\u52a0 patch \u505a\u4e00\u70b9\u8c03\u6574 - \u4f8b\u5982\u652f\u6301 /etc/update-extlinux.conf")))))),(0,l.kt)("h2",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/boot/grub/grub.cfg - \u6700\u7ec8\u751f\u6210\u7684\u914d\u7f6e - grub-mkconfig",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/grub.d")," \u751f\u6210"))),(0,l.kt)("li",{parentName:"ul"},"/etc/default/grub - \u73af\u5883\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f71\u54cd ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/grub.d")," \u811a\u672c\u751f\u6210\u7ed3\u679c"))),(0,l.kt)("li",{parentName:"ul"},"/etc/grub.d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u811a\u672c /etc/grub.d/10_linux"),(0,l.kt)("li",{parentName:"ul"},"/etc/grub.d/41_custom \u4f1a source /boot/grub/custom.cfg")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"/etc/default/grub")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'GRUB_TIMEOUT=2\nGRUB_DISABLE_SUBMENU=y\nGRUB_DISABLE_RECOVERY=true\nGRUB_CMDLINE_LINUX_DEFAULT="modules=sd-mod,usb-storage,ext4 quiet rootfstype=ext4"\n\n# GRUB_DISABLE_OS_PROBER=false\n# GRUB_PRELOAD_MODULES="lvm"\n# GRUB_ENABLE_CRYPTODISK=y\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GRUB_CMDLINE_LINUX_DEFAULT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u6a21\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},"GRUB_CMDLINE_LINUX",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u548c\u6062\u590d\u6a21\u5f0f\u90fd\u4f1a\u7528\u5230"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/Grub2/Setup"},"Grub2/Setup"))))),(0,l.kt)("h2",{id:"etcgrubd10_linux"},"/etc/grub.d/10_linux"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f1a source /etc/update-extlinux.conf \u5e76\u6dfb\u52a0\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'if [ -f /etc/update-extlinux.conf ]; then\n    . /etc/update-extlinux.conf\n    GRUB_CMDLINE_LINUX_DEFAULT="modules=${modules} ${default_kernel_opts} ${GRUB_CMDLINE_LINUX_DEFAULT}"\nfi\n')),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# https://github.com/alpinelinux/alpine-conf/blob/4f960a81e65c7ee1e37b5a4029e2aa47e63e654f/setup-disk.in#L281\ngrub-install --target=x86_64-efi --efi-directory="$mnt"/boot/efi --bootloader-id=alpine --boot-directory="$mnt"/boot --no-nvram\n# fallback\ninstall -D "$mnt"/boot/efi/EFI/alpine/grubx64.efi "$mnt"/boot/efi/EFI/boot/boot$fwa.efi\n\ngrub-install --target=i386-pc /dev/sdX\ngrub-install --target=x86_64-efi --efi-directory=esp --bootloader-id=GRUB\n\ngrub-mkconfig -o /boot/grub/grub.cfg\n')),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"grub-probe-error-cannot-find-a-device-for-"},"grub-probe: error: cannot find a device for /"),(0,l.kt)("p",null,"\u5148 chroot \u518d mount \u4e00\u6b21"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chroot /mnt\nmount -t ext4 /dev/loop0p2 /\n\n# \u73b0\u5728\u6267\u884c\u5c31\u6ca1\u95ee\u9898\u4e86\ngrub-mkconfig -o /boot/grub/grub.cfg.new \\\n    && mv /boot/grub/grub.cfg.new /boot/grub/grub.cfg\n")))}s.isMDXComponent=!0}}]);