"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50157],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(96600),r=n(27279),i=(n(59496),n(49613)),l=["components"],o={title:"LUKS"},p="LUKS",s={unversionedId:"ops/storage/encryption/luks",id:"ops/storage/encryption/luks",title:"LUKS",description:"- LUKS - Linux Unified Key Setup",source:"@site/../notes/ops/storage/encryption/luks.md",sourceDirName:"ops/storage/encryption",slug:"/ops/storage/encryption/luks",permalink:"/notes/ops/storage/encryption/luks",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/storage/encryption/luks.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"LUKS"},sidebar:"docs",previous:{title:"Encryption",permalink:"/notes/ops/storage/encryption/"},next:{title:"Filesystem",permalink:"/notes/ops/storage/fs/"}},d={},m=[{value:"\u5bc6\u94a5\u7ba1\u7406",id:"\u5bc6\u94a5\u7ba1\u7406",level:2},{value:"Root \u5206\u533a\u52a0\u5bc6\u5b89\u88c5",id:"root-\u5206\u533a\u52a0\u5bc6\u5b89\u88c5",level:2},{value:"WARNING: Locking directory /run/cryptsetup is missing!",id:"warning-locking-directory-runcryptsetup-is-missing",level:2},{value:"LUKS vs LUKS2",id:"luks-vs-luks2",level:2},{value:"\u8c03\u6574\u5206\u533a\u5927\u5c0f",id:"\u8c03\u6574\u5206\u533a\u5927\u5c0f",level:2},{value:"help",id:"help",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"luks"},"LUKS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LUKS - ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup"},"Linux Unified Key Setup"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dm-crypt"},"dm-crypt")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/admin-guide/device-mapper/dm-crypt.html"},"admin-guide/device-mapper/dm-crypt")),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5757\u8bbe\u5907\u5bc6\u7801\u72ec\u7acb",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 keyfile \u7136\u540e\u4f7f\u7528 crypttab \u6302\u8f7d"))))),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u65b9\u6848",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ROOT \u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"\u975e ROOT \u52a0\u5bc6"))),(0,i.kt)("li",{parentName:"ul"},"kernel",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AlpineLinux \u914d\u7f6e\u65b9\u5f0f ",(0,i.kt)("inlineCode",{parentName:"li"},"cryptroot=UUID=<UUID> cryptdm=cryptroot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cryptdm - mapper \u540d\u5b57"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5904\u7406\u811a\u672c ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/mkinitfs/blob/961726b6aeb8e12176009675f22ed0ffc2b26e14/initramfs-init.in#L443-L482"},"initramfs-init.in#L443-L482")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cryptdevice=UUID=<UUID>:cryptroot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root=UUID={unencrypted} rw cryptdevice=/dev/disk/by-uuid/{encrypted}:root quiet"),"\nnomodeset quiet rootfstype=ext4 cryptroot=UUID=3cb7aacf-4975-466b-bb6d-92a13ad60496 cryptdm=rootCrypt cryptdiscards cryptkey"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ArchLinux ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Dm-crypt"},"dm-crypt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/isclouder/article/details/80731388"},"qemu luks"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apk add cryptsetup util-linux\n# userspace DM \u7ba1\u7406\n# dmsetup dmstats\napk add device-mapper\n\nblkid -t TYPE=crypto_LUKS\n\n# \u4fee\u6539\u5bc6\u7801\ncryptsetup luksChangeKey /dev/sdb2\n\nuuidgen | tr -d '\\n' > new-key.txt\ncryptsetup luksAddKey /dev/sdb2 new-key.txt -d key.txt\n\n# \u67e5\u770b\u4e0a\u7ea7\u8bbe\u5907\ndmsetup deps -o devname /dev/mapper/decrypted\n")),(0,i.kt)("h2",{id:"\u5bc6\u94a5\u7ba1\u7406"},"\u5bc6\u94a5\u7ba1\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709 slot\ncryptsetup luksDump /dev/sdb2\n\n# \u5224\u65ad slot\n# \u4e00\u4e2a\u4e2a\u5c1d\u8bd5\ncryptsetup open --test-passphrase --key-slot 0 /dev/sda2\n\n# \u6d4b\u8bd5\u5bc6\u7801\n# --verbose \u4f1a\u663e\u793a key slot \u4fe1\u606f\ncryptsetup open --verbose --test-passphrase /dev/sda2\ncryptsetup open --verbose --test-passphrase /dev/sda2 -d key\n\n# \u79fb\u9664\u672a\u77e5\u7684 key slot\ncryptsetup -v luksKillSlot /dev/sdb2 1\n\n# \u67e5\u770b\u5f53\u524d\u7684 DM\ndmsetup table --showkeys\n\n# \u5bfc\u51fa master key\ncryptsetup luksDump --dump-master-key /dev/loop0p2 -d key.txt\n\nxxd -r -p masker-key.txt masker-key.bin\n\n# \u4f7f\u7528 master key \u5219\u4e0d\u9700\u8981\u5bc6\u7801\ncryptsetup luksAddKey /dev/sdb1 --master-key-file <(cat masker-key.bin)\ncryptsetup luksAddKey /dev/sdb2 -d key.txt < new-key.txt\n")),(0,i.kt)("h2",{id:"root-\u5206\u533a\u52a0\u5bc6\u5b89\u88c5"},"Root \u5206\u533a\u52a0\u5bc6\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apk add cryptsetup util-linux\n\n# \u5206\u533a\ndev=/dev/sdb\nboot_dev=${dev}1\nroot_dev=${dev}2\n\n\n# +128M - boot\n# rest  - root\ncat <<CONF | sfdisk --wipe always ${dev}\nlabel: dos\nunit: sectors\nsector-size: 512\n\n/dev/sdb1 : size=+128M, type=83, bootable\n/dev/sdb2 : type=83\nCONF\n\n\n# \u521d\u59cb\u5316\n# ======\n# \u683c\u5f0f\u5316 - \u8bbe\u7f6e\u5bc6\u7801\n# \u8bbe\u7f6e\u5bc6\u7801\u6587\u4ef6 - \u6216\u8005\u4f7f\u7528 cryptsetup \u751f\u6210\nuuidgen > key.txt\nyes | cryptsetup -y -v luksFormat $root_dev -d key.txt\n# \u6253\u5f00 - \u6302\u8f7d\u4e3a mapper\ncryptsetup open $root_dev cryptroot -d key.txt\n# \u683c\u5f0f\u5316 fs\nmkfs.ext4 /dev/mapper/cryptroot\n# \u6302\u8f7d\u5230\u76ee\u5f55\nmount /dev/mapper/cryptroot /mnt\n\n# \u5378\u8f7d\u518d\u6b21\u6302\u8f7d\u786e\u4fdd\u751f\u6548\numount /mnt\ncryptsetup close cryptroot\n\n# format bootfs\nmkfs.ext4 $boot_dev\n\n# root\ncryptsetup open $root_dev cryptroot -d key.txt\nmount /dev/mapper/cryptroot /mnt\n\n# boot\nmkdir -p /mnt/boot\nmount $boot_dev /mnt/boot\n\n# install system\nsetup-disk -m sys -o sysfs.apkvol.tar.gz -s 0 -v -k virt $/mnt\napk --root /mnt add syslinux\n\n# setup luks support\napk --root /mnt add cryptsetup util-linux\necho \'features="ata base ide scsi usb virtio ext4 cryptsetup cryptkey"\' > /mnt/etc/mkinitfs/mkinitfs.conf\nmkinitfs -c /mnt/etc/mkinitfs/mkinitfs.conf -b /mnt/ $(ls /mnt/lib/modules/)\n\n# add cryptroot\n# cryptroot=UUID=<UUID> cryptdm=cryptroot\n# other options - https://github.com/alpinelinux/mkinitfs/blob/961726b6aeb8e12176009675f22ed0ffc2b26e14/initramfs-init.in#L443-L482\nsed -i -r "s/^(default_kernel_opts)=\\"([^\\"]*)\\"/\\1=\\"\\2 cryptroot=UUID=$(blkid ${ROOT_DEV} -o value | head -n 1) cryptdm=cryptroot\\"/" /mnt/etc/update-extlinux.conf\nchroot /mnt update-extlinux\n\n# done - close\numount -R /mnt\ncryptsetup close cryptroot\n')),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"warning-locking-directory-runcryptsetup-is-missing"},"WARNING: Locking directory /run/cryptsetup is missing!"),(0,i.kt)("h2",{id:"luks-vs-luks2"},"LUKS vs LUKS2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LUKS2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full disk authenticated (FDA) \u63d0\u4f9b\u6570\u636e confidentiality \u548c data integrity protection",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Integrity cannot prevent a replay attack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cryptsetup luksFormat --type luks2 <device>")),(0,i.kt)("li",{parentName:"ul"},"\u65b0\u7684\u683c\u5f0f\uff0c\u4e0e LUKS1 \u4e0d\u517c\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"sector \u7ea7\u522b\u5b8c\u6574\u6027\u6821\u9a8c - Linux 4.12 - dm-integrity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integritysetup")," - \u547d\u4ee4"))),(0,i.kt)("li",{parentName:"ul"},"veritysetup \u652f\u6301\u8bbe\u5907 FEC\uff08Forward Error Correction\uff09 - \u5b89\u88c5 Linux 4.5 \u5df2\u6709\u5728\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"sector \u6700\u5927\u652f\u6301 4096",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u786c\u4ef6\u4f7f\u7528\u76f8\u540c\u5927\u5c0f\uff0c\u5982\u679c\u786c\u4ef6 sector \u66f4\u5c0f\u53ef\u80fd\u5bfc\u81f4\u6570\u636e\u635f\u574f - \u90e8\u5206 sector \u5199\u5165"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Argon2i \u548c Argon2id \u4f5c\u4e3a PBKDF",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"memory-hard - \u589e\u52a0\u5185\u5b58\u4f7f\u7528 - \u662f\u7684 GPU \u653b\u51fb\u66f4\u96be - \u56e0\u4e3a GPU \u5185\u5b58\u6210\u672c\u9ad8"),(0,i.kt)("li",{parentName:"ul"},"\u8d62\u5f97 Password Hashing Competition \u7684\u7b97\u6cd5"))),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Argon2i (data independent variant) - \u5185\u5b58 cost 128MB\uff0c\u65f6\u95f4 cost 800ms\uff0c\u5e76\u884c\u53d6\u51b3\u4e8e CPU <= 4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5355\u72ec\u914d\u7f6e --pbkdf, --pbkdf-memory, --pbkdf-parallel, --iter-time"),(0,i.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u5468\u671f --pbkdf-force-iterations"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Token \u72ec\u7acb\u62bd\u8c61 cryptsetup \u786c\u4ef6\u90e8\u5206"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--persistent")," - \u6301\u4e45\u6253\u5f00\uff0c\u4e4b\u540e\u6253\u5f00\u4e0d\u9700\u8981\u5bc6\u94a5"),(0,i.kt)("li",{parentName:"ul"},"Linux kernel keyring",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u6bcf\u6b21 ioctl \u53d1\u9001\u5bc6\u94a5"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u89e3\u9501 - \u4f8b\u5982\u4f7f\u7528 TMP \u5b58\u50a8\u7528\u6237\u5bc6\u94a5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.man7.org/linux/man-pages/man7/keyrings.7.html"},"keyrings.7"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apk add keyutils")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/security/keys.txt"},"KERNEL KEY RETENTION SERVICE")))),(0,i.kt)("li",{parentName:"ul"},"Keyslot priorities",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"normal,prefer,ignore"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cryptsetup config <device> --key-slot 1 --priority prefer")))),(0,i.kt)("li",{parentName:"ul"},"LUKS2 label and subsystem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'cryptsetup config <device> --label my_device --subsystem ""')))),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f6c\u6362",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cryptsetup convert <device> --type luks2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cryptsetup convert <device> --type luks1")),(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 ",(0,i.kt)("inlineCode",{parentName:"li"},"cryptsetup luksDump <device>")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LUKS1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full disk encryption (FDE)"),(0,i.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u957f\u5ea6\u52a0\u5bc6 - length-preserving - encryption - \u660e\u6587\u5bc6\u6587\u957f\u5ea6\u76f8\u540c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u6570\u636e\u53ef\u4fe1 \uff08confidentiality\uff09\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u6570\u636e\u5b8c\u6574\u6027"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 PBKDF (Password-Based Key Derivation Function) \u589e\u52a0\u653b\u51fb\u8005\u8017\u65f6"),(0,i.kt)("li",{parentName:"ul"},"PBKDF2 \u589e\u52a0\u8fed\u4ee3\u6b21\u6570",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524d GPU \u5df2\u7ecf\u53ef\u4ee5\u5e76\u884c\u6267\u884c"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/cryptsetup/cryptsetup/blob/master/docs/v2.0.0-ReleaseNotes"},"Cryptsetup 2.0.0 Release Notes"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# aes-xts-plain64 + hmac-sha256 / hmac-sha512 \u4f5c\u4e3a authentication tag - IEEE 1619.1\n# (Common FDE mode + independent authentication tag. Authentication key for HMAC is independently generated. This mode is very slow.)\ncryptsetup luksFormat --type luks2 <device> --cipher aes-xts-plain64 --integrity hmac-sha256\n\n# aes-gcm-random (native AEAD mode) - IEEE 1619.1\n# \u4e0d\u8981\u7528\u4e8e\u751f\u4ea7 - GCM \u4f7f\u7528 96-bit nonce - GCM \u786c\u4ef6\u652f\u6301\u597d - AES-NI - \u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u6d4b\u8bd5\ncryptsetup luksFormat --type luks2 <device> --cipher aes-gcm-random --integrity aead\n\n# ChaCha20 with Poly1305 authenticator (according to RFC7539)\ncryptsetup luksFormat --type luks2 <device> --cipher chacha20-random --integrity poly1305\n\n# LUKS2 Token\n# \u6dfb\u52a0 Token\ncryptsetup token add --key-description "my_token" <device>\n# \u6dfb\u52a0\u5bc6\u7801\u5230 keyring user sessing\necho -n <passphrase> | keyctl padd user my_token @u\n# \u5982\u679c\u627e\u5230\u4e86\u5bc6\u7801\u5219\u81ea\u52a8\u4f1a\u6253\u5f00\ncryptsetup open <device> <name>\n')),(0,i.kt)("h2",{id:"\u8c03\u6574\u5206\u533a\u5927\u5c0f"},"\u8c03\u6574\u5206\u533a\u5927\u5c0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apk add util-linux\n# \u786e\u4fdd luks \u5206\u533a\u5df2\u7ecf\u586b\u6ee1\necho -e 'd\\n\\nn\\n\\n\\n\\n\\n\\np\\nw\\n' | fdisk /dev/sdb\n\n# \u8c03\u6574\u5927\u5c0f\ncryptsetup open /dev/sdb2 root\ncryptsetup resize root\n\n# \u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\napk add e2fsprogs-extra\nresize2fs /dev/mapper/root\n")),(0,i.kt)("h2",{id:"help"},"help"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"action"),(0,i.kt)("th",{parentName:"tr",align:null},"desc"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"open ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [--type <type>][<name>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u8bbe\u5907\uff0c\u6620\u5c04\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"<name>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"close ",(0,i.kt)("inlineCode",{parentName:"td"},"<name>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed\u8bbe\u5907\uff0c\u79fb\u9664\u6620\u5c04")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resize ",(0,i.kt)("inlineCode",{parentName:"td"},"<name>")),(0,i.kt)("td",{parentName:"tr",align:null},"resize active device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status ",(0,i.kt)("inlineCode",{parentName:"td"},"<name>")),(0,i.kt)("td",{parentName:"tr",align:null},"show device status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"benchmark ",(0,i.kt)("inlineCode",{parentName:"td"},"[--cipher <cipher>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u538b\u6d4b\u7f16\u7801\u89e3\u7801\u6027\u80fd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"repair ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4fee\u590d\u5143\u6570\u636e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reencrypt ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"LUKS2 \u4ece\u65b0\u52a0\u5bc6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"erase ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u64e6\u9664\u6240\u6709 key\uff0c\u79fb\u9664\u52a0\u5bc6\u5bc6\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"convert ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"LUKS\u3001LUKS2 \u683c\u5f0f\u8f6c\u6362")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"config ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"LUKS2 \u914d\u7f6e")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksFormat ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [<new key file>]")),(0,i.kt)("td",{parentName:"tr",align:null},"LUKS \u683c\u5f0f\u5316")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksAddKey ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [<new key file>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u5bc6\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksRemoveKey ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [<key file>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u5bc6\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksChangeKey ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [<key file>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5bc6\u94a5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksConvertKey ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> [<key file>]")),(0,i.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5bc6\u94a5\u4e3a\u65b0\u7684 pbkdf \u53c2\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksKillSlot ",(0,i.kt)("inlineCode",{parentName:"td"},"<device> <key slot>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664 key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksUUID ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"UUID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isLuks ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b luks \u5206\u533a\u5934")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksDump ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5206\u533a\u4fe1\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tcryptDump ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"TCRYPT \u4fe1\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bitlkDump ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"BITLK \u4fe1\u606f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksSuspend ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62 LUKS \u8bbe\u5907\uff0c\u79fb\u9664 key\uff0c\u7ec8\u6b62\u6240\u6709 IO")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksResume ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6062\u590d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksHeaderBackup ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5907\u4efd\u5934")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"luksHeaderRestore ",(0,i.kt)("inlineCode",{parentName:"td"},"<device>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u5934")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token `<add"),(0,i.kt)("td",{parentName:"tr",align:null},"remove")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cryptsetup --help\ncryptsetup 2.3.2\nUsage: cryptsetup [OPTION...] <action> <action-specific>\n  -v, --verbose                         Shows more detailed error messages\n      --debug                           Show debug messages\n      --debug-json                      Show debug messages including JSON metadata\n  -c, --cipher=STRING                   The cipher used to encrypt the disk (see /proc/crypto)\n  -h, --hash=STRING                     The hash used to create the encryption key from the passphrase\n  -y, --verify-passphrase               Verifies the passphrase by asking for it twice\n  -d, --key-file=STRING                 Read the key from a file\n      --master-key-file=STRING          Read the volume (master) key from file.\n      --dump-master-key                 Dump volume (master) key instead of keyslots info\n  -s, --key-size=BITS                   The size of the encryption key\n  -l, --keyfile-size=bytes              Limits the read from keyfile\n      --keyfile-offset=bytes            Number of bytes to skip in keyfile\n      --new-keyfile-size=bytes          Limits the read from newly added keyfile\n      --new-keyfile-offset=bytes        Number of bytes to skip in newly added keyfile\n  -S, --key-slot=INT                    Slot number for new key (default is first free)\n  -b, --size=SECTORS                    The size of the device\n      --device-size=bytes               Use only specified device size (ignore rest of device). DANGEROUS!\n  -o, --offset=SECTORS                  The start offset in the backend device\n  -p, --skip=SECTORS                    How many sectors of the encrypted data to skip at the beginning\n  -r, --readonly                        Create a readonly mapping\n  -q, --batch-mode                      Do not ask for confirmation\n  -t, --timeout=secs                    Timeout for interactive passphrase prompt (in seconds)\n      --progress-frequency=secs         Progress line update (in seconds)\n  -T, --tries=INT                       How often the input of the passphrase can be retried\n      --align-payload=SECTORS           Align payload at <n> sector boundaries - for luksFormat\n      --header-backup-file=STRING       File with LUKS header and keyslots backup\n      --use-random                      Use /dev/random for generating volume key\n      --use-urandom                     Use /dev/urandom for generating volume key\n      --shared                          Share device with another non-overlapping crypt segment\n      --uuid=STRING                     UUID for device to use\n      --allow-discards                  Allow discards (aka TRIM) requests for device\n      --header=STRING                   Device or file with separated LUKS header\n      --test-passphrase                 Do not activate device, just check passphrase\n      --tcrypt-hidden                   Use hidden header (hidden TCRYPT device)\n      --tcrypt-system                   Device is system TCRYPT drive (with bootloader)\n      --tcrypt-backup                   Use backup (secondary) TCRYPT header\n      --veracrypt                       Scan also for VeraCrypt compatible device\n      --veracrypt-pim=INT               Personal Iteration Multiplier for VeraCrypt compatible device\n      --veracrypt-query-pim             Query Personal Iteration Multiplier for VeraCrypt compatible device\n  -M, --type=STRING                     Type of device metadata: luks, luks1, luks2, plain, loopaes, tcrypt,\n                                        bitlk\n      --force-password                  Disable password quality check (if enabled)\n      --perf-same_cpu_crypt             Use dm-crypt same_cpu_crypt performance compatibility option\n      --perf-submit_from_crypt_cpus     Use dm-crypt submit_from_crypt_cpus performance compatibility option\n      --deferred                        Device removal is deferred until the last user closes it\n      --serialize-memory-hard-pbkdf     Use global lock to serialize memory hard PBKDF (OOM workaround)\n  -i, --iter-time=msecs                 PBKDF iteration time for LUKS (in ms)\n      --pbkdf=STRING                    PBKDF algorithm (for LUKS2): argon2i, argon2id, pbkdf2\n      --pbkdf-memory=kilobytes          PBKDF memory cost limit\n      --pbkdf-parallel=threads          PBKDF parallel cost\n      --pbkdf-force-iterations=LONG     PBKDF iterations cost (forced, disables benchmark)\n      --priority=STRING                 Keyslot priority: ignore, normal, prefer\n      --disable-locks                   Disable locking of on-disk metadata\n      --disable-keyring                 Disable loading volume keys via kernel keyring\n  -I, --integrity=STRING                Data integrity algorithm (LUKS2 only)\n      --integrity-no-journal            Disable journal for integrity device\n      --integrity-no-wipe               Do not wipe device after format\n      --integrity-legacy-padding        Use inefficient legacy padding (old kernels)\n      --token-only                      Do not ask for passphrase if activation by token fails\n      --token-id=INT                    Token number (default: any)\n      --key-description=STRING          Key description\n      --sector-size=INT                 Encryption sector size (default: 512 bytes)\n      --persistent                      Set activation flags persistent for device\n      --label=STRING                    Set label for the LUKS2 device\n      --subsystem=STRING                Set subsystem label for the LUKS2 device\n      --unbound                         Create or dump unbound (no assigned data segment) LUKS2 keyslot\n      --json-file=STRING                Read or write the json from or to a file\n      --luks2-metadata-size=bytes       LUKS2 header metadata area size\n      --luks2-keyslots-size=bytes       LUKS2 header keyslots area size\n      --refresh                         Refresh (reactivate) device with new parameters\n      --keyslot-key-size=BITS           LUKS2 keyslot: The size of the encryption key\n      --keyslot-cipher=STRING           LUKS2 keyslot: The cipher used for keyslot encryption\n      --encrypt                         Encrypt LUKS2 device (in-place encryption).\n      --decrypt                         Decrypt LUKS2 device (remove encryption).\n      --init-only                       Initialize LUKS2 reencryption in metadata only.\n      --resume-only                     Resume initialized LUKS2 reencryption only.\n      --reduce-device-size=bytes        Reduce data device size (move data offset). DANGEROUS!\n      --hotzone-size=bytes              Maximal reencryption hotzone size.\n      --resilience=STRING               Reencryption hotzone resilience type (checksum,journal,none)\n      --resilience-hash=STRING          Reencryption hotzone checksums hash\n      --active-name=STRING              Override device autodetection of dm device to be reencrypted\n\nHelp options:\n  -?, --help                            Show this help message\n      --usage                           Display brief usage\n  -V, --version                         Print package version\n\n<action> is one of:\n    open <device> [--type <type>] [<name>] - open device as <name>\n    close <name> - close device (remove mapping)\n    resize <name> - resize active device\n    status <name> - show device status\n    benchmark [--cipher <cipher>] - benchmark cipher\n    repair <device> - try to repair on-disk metadata\n    reencrypt <device> - reencrypt LUKS2 device\n    erase <device> - erase all keyslots (remove encryption key)\n    convert <device> - convert LUKS from/to LUKS2 format\n    config <device> - set permanent configuration options for LUKS2\n    luksFormat <device> [<new key file>] - formats a LUKS device\n    luksAddKey <device> [<new key file>] - add key to LUKS device\n    luksRemoveKey <device> [<key file>] - removes supplied key or key file from LUKS device\n    luksChangeKey <device> [<key file>] - changes supplied key or key file of LUKS device\n    luksConvertKey <device> [<key file>] - converts a key to new pbkdf parameters\n    luksKillSlot <device> <key slot> - wipes key with number <key slot> from LUKS device\n    luksUUID <device> - print UUID of LUKS device\n    isLuks <device> - tests <device> for LUKS partition header\n    luksDump <device> - dump LUKS partition information\n    tcryptDump <device> - dump TCRYPT device information\n    bitlkDump <device> - dump BITLK device information\n    luksSuspend <device> - Suspend LUKS device and wipe key (all IOs are frozen)\n    luksResume <device> - Resume suspended LUKS device\n    luksHeaderBackup <device> - Backup LUKS device header and keyslots\n    luksHeaderRestore <device> - Restore LUKS device header and keyslots\n    token <add|remove|import|export> <device> - Manipulate LUKS2 tokens\n\nYou can also use old <action> syntax aliases:\n    open: create (plainOpen), luksOpen, loopaesOpen, tcryptOpen, bitlkOpen\n    close: remove (plainClose), luksClose, loopaesClose, tcryptClose, bitlkClose\n\n<name> is the device to create under /dev/mapper\n<device> is the encrypted device\n<key slot> is the LUKS key slot number to modify\n<key file> optional key file for the new key for luksAddKey action\n\nDefault compiled-in metadata format is LUKS2 (for luksFormat action).\n\nDefault compiled-in key and passphrase parameters:\n    Maximum keyfile size: 8192kB, Maximum interactive passphrase length 512 (characters)\nDefault PBKDF for LUKS1: pbkdf2, iteration time: 2000 (ms)\nDefault PBKDF for LUKS2: argon2i\n    Iteration time: 2000, Memory required: 1048576kB, Parallel threads: 4\n\nDefault compiled-in device cipher parameters:\n    loop-AES: aes, Key 256 bits\n    plain: aes-cbc-essiv:sha256, Key: 256 bits, Password hashing: ripemd160\n    LUKS: aes-xts-plain64, Key: 256 bits, LUKS header hashing: sha256, RNG: /dev/urandom\n    LUKS: Default keysize with XTS mode (two internal keys) will be doubled.\n")))}u.isMDXComponent=!0}}]);