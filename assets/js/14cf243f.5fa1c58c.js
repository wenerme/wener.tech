"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92208],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36014:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={title:"Firecracker"},l=void 0,s={unversionedId:"os/virt/firecracker",id:"os/virt/firecracker",title:"Firecracker",description:"- firecracker-microvm/firecracker \u662f\u4ec0\u4e48",source:"@site/notes/os/virt/firecracker.md",sourceDirName:"os/virt",slug:"/os/virt/firecracker",permalink:"/notes/os/virt/firecracker",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/firecracker.md",tags:[],version:"current",frontMatter:{title:"Firecracker"},sidebar:"docs",previous:{title:"ESXi",permalink:"/notes/os/virt/esxi"},next:{title:"HAXM",permalink:"/notes/os/virt/haxm"}},m=[{value:"alpine",id:"alpine",children:[],level:2},{value:"ubuntu",id:"ubuntu",children:[],level:2},{value:"centos",id:"centos",children:[],level:2},{value:"network",id:"network",children:[],level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[],level:2},{value:"mount: mounting /dev/vda on /sysroot failed: No such device",id:"mount-mounting-devvda-on-sysroot-failed-no-such-device",children:[],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firecracker"},"firecracker-microvm/firecracker")," \u662f\u4ec0\u4e48",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VMM/Virtual Machine Manager"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u865a\u62df\u673a\u5b9e\u73b0 - \u6700\u521d\u7528\u4e8e serverless \u573a\u666f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u652f\u6301\u5fc5\u987b\u8bbe\u5907 virtio-net, virtio-block, virtio-vsock, serial console, minimal keyboard controller"),(0,a.kt)("li",{parentName:"ul"},"< 125 ms \u542f\u52a8"),(0,a.kt)("li",{parentName:"ul"},"< 5m \u521d\u59cb\u5185\u5b58\u5360\u7528"))),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e KVM \u7684 QEMU \u66ff\u4ee3\u54c1"),(0,a.kt)("li",{parentName:"ul"},"Rust \u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b REST \u63a7\u5236\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"Kernel 4.14+"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firecracker/tree/master/docs"},"https://github.com/firecracker-microvm/firecracker/tree/master/docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firecracker-containerd"},"firecracker-microvm/firecracker-containerd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u901a\u8fc7 containerd \u7ba1\u7406 microVM"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firectl"},"firecracker-microvm/firectl")," - \u8f85\u52a9\u8fd0\u884c firecracker"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/ignite"},"weaveworks/ignite")," - \u7c7b\u4f3c Docker \u7ba1\u7406\u5bb9\u5668\u4e00\u6837\u7ba1\u7406 microVM"),(0,a.kt)("li",{parentName:"ul"},"qemu ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/master/docs/system/i386/microvm.rst"},"docs/system/i386/microvm")," - QEMU \u652f\u6301 microvm"))),(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firecracker/issues/1571"},"#1571")," - virtio memory balloon")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Firecracker \u9650\u5236")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u7535\u6e90\u7ba1\u7406\uff0c\u56e0\u6b64\u4e0d\u652f\u6301\u91cd\u542f\uff0c\u4f1a\u76f4\u63a5\u9000\u51fa"),(0,a.kt)("li",{parentName:"ul"},"alpine \u5185\u6838\u9700\u8981 boot-source.initrd_path => initramfs-virt"),(0,a.kt)("li",{parentName:"ul"},"alpine netboot \u7684 initramfs-virt \u6ca1\u6709 ext4"),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5185 poweroff \u6216 halt \u4e0d\u4f1a\u9000\u51fa - reboot \u4f1a"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u53d1\u9001 SendCtrlAltDel \u9000\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 QCOW2 \u683c\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u914d\u5408 NDB \u4f7f\u7528")))),(0,a.kt)("h2",{id:"alpine"},"alpine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# download\nlatest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/firecracker-microvm/firecracker/releases/latest))\ncurl -LOJ https://github.com/firecracker-microvm/firecracker/releases/download/${latest}/firecracker-${latest}-$(uname -m)\nmv firecracker-${latest}-$(uname -m) firecracker\nchmod +x firecracker\n\n# rootfs\n# =========\n# qemu-img create -f raw alpine.rootfs.ext4 1G\nfallocate -l 1G ubuntu.rootfs.ext4\nmkfs.ext4 ./alpine.rootfs.ext4\nmkdir /tmp/rootfs\nsudo mount alpine.rootfs.ext4 /tmp/rootfs\n\ncurl -OJ https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nsudo tar zxvf alpine-minirootfs-3.12.0-x86_64.tar.gz -C /tmp/rootfs/\n# for mirror\nsudo cp /etc/apk/repositories /tmp/rootfs/etc/apk/repositories\nsudo cp /etc/resolv.conf /tmp/rootfs/etc\nsudo chroot /tmp/rootfs/ /bin/sh\n\napk add alpine-base util-linux linux-virt haveged\nrc-update add haveged\necho root:root | chpasswd\nfor svc in devfs procfs sysfs; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\nexit\n\nln -s agetty /etc/init.d/agetty.ttyS0\necho ttyS0 > /etc/securetty\nrc-update add agetty.ttyS0 default\n\n# this initramfs contain required ext4 module\nsudo cp /tmp/rootfs/boot/initramfs-virt initramfs-virt\nsudo cp /tmp/rootfs/boot/vmlinuz-virt vmlinuz-virt\n\nsudo umount /tmp/rootfs\n\n# kernel\n# ==========\ncurl -LOC- https://raw.githubusercontent.com/torvalds/linux/master/scripts/extract-vmlinux\nchmod +x extract-vmlinux\n./extract-vmlinux $PWD/vmlinuz-virt > vmlinux-virt\n\n# config & start\n# ==========\ncat <<CONF > alpine.json\n{\n  "boot-source": {\n    "initrd_path": "initramfs-virt",\n    "kernel_image_path": "vmlinux-virt",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "alpine.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\n./firecracker --api-sock /tmp/firecracker.socket --config-file alpine.json\n\n# exit\n# ==========\n# api request\ncurl --unix-socket /tmp/firecracker.socket -i \\\n    -X PUT "http://localhost/actions" \\\n    -H  "accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -d \'{"action_type": "SendCtrlAltDel"}\'\n# in vm\nreboot\n\n# \u68c0\u6d4b KVM \u652f\u6301\n[ -r /dev/kvm ] && [ -w /dev/kvm ] && echo "OK" || echo "FAIL"\n\n# vm \u5185\u6e05\u9664\u7f13\u5b58 firecracker \u4e5f\u4e0d\u4f1a\u6536\u56de\u5185\u5b58\uff0c\u56e0\u4e3a\u4e0d\u652f\u6301 balloon\necho 3 > /proc/sys/vm/drop_caches\n\n# \u7c7b\u4f3c qemu - \u4f46 qemu \u66f4\u5bb9\u6613\u6dfb\u52a0\u7f51\u7edc\u4e14\u652f\u6301 vnc\n# firecracker \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 root=/dev/vda\n# \u542f\u52a8\u540e\u7ea6 130 MB \u989d\u5916\u5185\u5b58\u5360\u7528 - firecracker \u7ea6 70 MB\n# pci=off qemu \u65e0\u6cd5\u542f\u52a8\nqemu-system-x86_64 \\\n  -smp 1 -m 1024 -cpu host \\\n  -M pc,accel=kvm \\\n  -no-acpi \\\n  -device virtio-rng-pci -device virtio-balloon -serial stdio \\\n  -kernel vmlinux-virt \\\n  -initrd initramfs-virt \\\n  -append "console=ttyS0 reboot=k panic=1 modules=virtio_mmio,virtio_blk,ext4 rootfstype=ext4 root=/dev/vda" \\\n  -drive file=alpine.rootfs.ext4,if=virtio,cache=writeback\n')),(0,a.kt)("h2",{id:"ubuntu"},"ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO http://cdimage.ubuntu.com/ubuntu-base/releases/20.04/release/ubuntu-base-20.04.1-base-amd64.tar.gz\n\nfallocate -l 1G ubuntu.rootfs.ext4\nsudo mkfs.ext4 ubuntu.rootfs.ext4\n\nmkdir /tmp/rootfs\nsudo mount ubuntu.rootfs.ext4 /tmp/rootfs\nsudo tar -xzvf ubuntu-base-20.04.1-base-amd64.tar.gz -C /tmp/rootfs\nsudo cp /etc/resolv.conf /tmp/rootfs/etc/\nsudo chroot /tmp/rootfs/ /bin/bash\n\napt update\napt install linux-image-kvm -y\napt install init -y\nupdate-initramfs -u\necho root:root | chpasswd\necho ttyS0 > /etc/securetty\nsystemctl enable serial-getty@ttyS0.service\n\nexit\n\nsudo cp /tmp/rootfs/boot/initrd.img .\nsudo cp /tmp/rootfs/boot/vmlinuz .\n\nsudo umount /tmp/rootfs\n\nsudo chown $USER vmlinuz\n./extract-vmlinux $PWD/vmlinuz > vmlinux\n\ncat <<CONF > ubuntu.json\n{\n  "boot-source": {\n    "initrd_path": "initrd.img",\n    "kernel_image_path": "vmlinux",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "alpine.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\n./firecracker --api-sock /tmp/firecracker.socket --config-file ubuntu.json\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# https://packages.debian.org/sid/linux-image-amd64\n")),(0,a.kt)("h2",{id:"centos"},"centos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# https://mirrors.aliyun.com/centos/8/BaseOS/x86_64/os/images/pxeboot/\ncurl --remote-name-all -OC- https://mirrors.aliyun.com/centos/8/BaseOS/x86_64/os/images/pxeboot/{initrd.img,vmlinuz}\n\nextract-vmlinux ./vmlinuz > vmlinux\n\ncat <<CONF > centos.json\n{\n  "boot-source": {\n    "initrd_path": "initrd.img",\n    "kernel_image_path": "vmlinux",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "centos.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\nrm /tmp/firecracker.socket;firecracker --api-sock /tmp/firecracker.socket --config-file centos.json\n')),(0,a.kt)("h1",{id:"firectl"},"firectl"),(0,a.kt)("h2",{id:"network"},"network"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/firecracker-microvm/firecracker/blob/master/docs/network-setup.md"},"https://github.com/firecracker-microvm/firecracker/blob/master/docs/network-setup.md")),(0,a.kt)("h1",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/firecracker-microvm/firecracker/blob/master/src/api_server/swagger/firecracker.yaml"},"api_server/swagger/firecracker.yaml")),(0,a.kt)("li",{parentName:"ul"},"/actions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'{"action_type":""}')),(0,a.kt)("li",{parentName:"ul"},"FlushMetrics,InstanceStart,SendCtrlAltDel"))),(0,a.kt)("li",{parentName:"ul"},"/boot-source - \u4ec5\u542f\u52a8\u524d"),(0,a.kt)("li",{parentName:"ul"},"/drives/{drive_id} - \u4ec5\u542f\u52a8\u524d"),(0,a.kt)("li",{parentName:"ul"},"/logger"),(0,a.kt)("li",{parentName:"ul"},"/machine-config"),(0,a.kt)("li",{parentName:"ul"},"/metrics"),(0,a.kt)("li",{parentName:"ul"},"/mmds - Microvm Metadata Service"),(0,a.kt)("li",{parentName:"ul"},"/mmds/config - \u914d\u7f6e MMDS - \u4ec5\u542f\u52a8\u524d"),(0,a.kt)("li",{parentName:"ul"},"/network-interfaces/{iface_id} - \u4ec5\u542f\u52a8\u524d"),(0,a.kt)("li",{parentName:"ul"},"/snapshot/create - \u521b\u5efa\u4e3a\u6682\u505c\u72b6\u6001\u7684\u865a\u62df\u673a\u521b\u5efa\u5feb\u7167"),(0,a.kt)("li",{parentName:"ul"},"/snapshot/load - \u52a0\u8f7d\u5feb\u7167 - \u65b0\u542f\u52a8\u7684 Firecracker"),(0,a.kt)("li",{parentName:"ul"},"/vm - \u865a\u62df\u673a\u72b6\u6001\u7ba1\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'{"state":""}')),(0,a.kt)("li",{parentName:"ul"},"Paused, Resumed"))),(0,a.kt)("li",{parentName:"ul"},"/vsock - vsock \u8bbe\u5907\u7ba1\u7406")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"boot-source:\n  initrd_path: initrd.img\n  kernel_image_path: vmlinux\n  boot_args: console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4\ndrives:\n  - drive_id: rootfs\n    path_on_host: centos.rootfs.ext4\n    is_root_device: true\n    is_read_only: false\n    # \u53ef\u9009 - is_root_device \u65f6\u7684\u542f\u52a8\u5206\u533a UUID\n    partuuid: 00000000-0000-0000-0000-000000000000\n    # \u53ef\u9009 - \u8bbf\u95ee\u901f\u7387\u9650\u5236\n    rate_limiter:\n      bandwidth: # \u5e26\u5bbd\n        one_time_burst: 0\n        refill_time: 0\n        size: 0\n      ops: # \u64cd\u4f5c\n# \u65e5\u5fd7\u914d\u7f6e\nlogger:\n  log_path: '' # \u5fc5\u987b\n  # Error, Warning, Info, Debug\n  level: Warning\n  show_level: false\n  show_log_origin: false\n# \u673a\u5668\u914d\u7f6e\nmachine-config:\n  # 1-32 - 1 \u6216 1-32 \u4e4b\u95f4\u5076\u6570\n  vcpu_count: 1\n  mem_size_mib: 1024\n  # Hyperthreading\n  ht_enabled: false\n  # C3, C2\n  # cpu_template: C3\n  # \u542f\u7528\u540e\u53ef\u5bf9\u5185\u5b58\u521b\u5efa\u589e\u91cf\u5feb\u7167\n  # track_dirty_pages: false\n\nmetrics:\n  # \u5b58\u50a8 JSON \u683c\u5f0f metric \u7684\u8def\u5f84\n  metrics_path: ''\n\nnetwork-interfaces:\n  - allow_mmds_requests: false # \u542f\u7528\u540e\u4f1a\u54cd\u5e94 HTTP GET \u8bf7\u6c42 MMDS\n    guest_mac: ''\n    host_dev_name: ''\n    iface_id: ''\n    rx_rate_limiter: ''\n    tx_rate_limiter: ''\n\nvsock:\n  guest_cid: 3\n  # UNIX domain socket\n  uds_path: ''\n  vsock_id: ''\n")),(0,a.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5047\u8bbe\u9700\u8981\u6865\u63a5\u7684 virbr0 \u5df2\u7ecf\u5b58\u5728\nip tuntap add dev fc0 mode tap\nip li set fc0 master virbr0\nip li set fc0 up\n\n\nsudo ip link add name br0 type bridge\nsudo ip addr add 172.20.0.1/24 dev br0\nsudo ip link set dev br0 up\nsudo sysctl -w net.ipv4.ip_forward=1\nsudo iptables --table nat --append POSTROUTING --out-interface enp3s0 -j MASQUERADE\nsudo iptables --insert FORWARD --in-interface br0 -j ACCEPT\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network-interfaces": [\n    {\n      "iface_id": "if0",\n      "host_dev_name": "fc0"\n    }\n  ]\n}\n')),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"mount-mounting-devvda-on-sysroot-failed-no-such-device"},"mount: mounting /dev/vda on /sysroot failed: No such device"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4e0d\u652f\u6301 ext4"),(0,a.kt)("li",{parentName:"ul"},"cat /proc/filesystems")))}p.isMDXComponent=!0}}]);