/*! For license information please see b31ce9d6.3f5f0ba8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27712],{76769:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(11527),t=r(47214);const o={title:"Firecracker"},s="Firecracker",c={id:"os/virt/firecracker",title:"Firecracker",description:"- firecracker-microvm/firecracker \u662f\u4ec0\u4e48",source:"@site/../notes/os/virt/firecracker.md",sourceDirName:"os/virt",slug:"/os/virt/firecracker",permalink:"/notes/os/virt/firecracker",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/firecracker.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"Firecracker"},sidebar:"docs",previous:{title:"ESXi",permalink:"/notes/os/virt/esxi"},next:{title:"Apache Guacamole",permalink:"/notes/os/virt/guacamole"}},a={},l=[{value:"alpine",id:"alpine",level:2},{value:"ubuntu",id:"ubuntu",level:2},{value:"centos",id:"centos",level:2},{value:"network",id:"network",level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"mount: mounting /dev/vda on /sysroot failed: No such device",id:"mount-mounting-devvda-on-sysroot-failed-no-such-device",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"firecracker",children:"Firecracker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker",children:"firecracker-microvm/firecracker"})," \u662f\u4ec0\u4e48\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VMM/Virtual Machine Manager"}),"\n",(0,i.jsxs)(n.li,{children:["\u6700\u5c0f\u865a\u62df\u673a\u5b9e\u73b0 - \u6700\u521d\u7528\u4e8e serverless \u573a\u666f\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ec5\u652f\u6301\u5fc5\u987b\u8bbe\u5907 virtio-net, virtio-block, virtio-vsock, serial console, minimal keyboard controller"}),"\n",(0,i.jsx)(n.li,{children:"< 125 ms \u542f\u52a8"}),"\n",(0,i.jsx)(n.li,{children:"< 5m \u521d\u59cb\u5185\u5b58\u5360\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e KVM \u7684 QEMU \u66ff\u4ee3\u54c1"}),"\n",(0,i.jsx)(n.li,{children:"Rust \u5b9e\u73b0"}),"\n",(0,i.jsx)(n.li,{children:"\u63d0\u4f9b REST \u63a7\u5236\u63a5\u53e3"}),"\n",(0,i.jsx)(n.li,{children:"Kernel 4.14+"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fly.io/docs/reference/machines/",children:"https://fly.io/docs/reference/machines/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker/tree/master/docs",children:"https://github.com/firecracker-microvm/firecracker/tree/master/docs"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker-containerd",children:"firecracker-microvm/firecracker-containerd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u901a\u8fc7 containerd \u7ba1\u7406 microVM"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firectl",children:"firecracker-microvm/firectl"})," - \u8f85\u52a9\u8fd0\u884c firecracker"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/weaveworks/ignite",children:"weaveworks/ignite"})," - \u7c7b\u4f3c Docker \u7ba1\u7406\u5bb9\u5668\u4e00\u6837\u7ba1\u7406 microVM"]}),"\n",(0,i.jsxs)(n.li,{children:["qemu ",(0,i.jsx)(n.a,{href:"https://github.com/qemu/qemu/blob/master/docs/system/i386/microvm.rst",children:"docs/system/i386/microvm"})," - QEMU \u652f\u6301 microvm"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u95ee\u9898\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker/issues/1571",children:"#1571"})," - virtio memory balloon"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Firecracker \u9650\u5236",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6ca1\u6709\u7535\u6e90\u7ba1\u7406\uff0c\u56e0\u6b64\u4e0d\u652f\u6301\u91cd\u542f\uff0c\u4f1a\u76f4\u63a5\u9000\u51fa"}),"\n",(0,i.jsx)(n.li,{children:"alpine \u5185\u6838\u9700\u8981 boot-source.initrd_path => initramfs-virt"}),"\n",(0,i.jsx)(n.li,{children:"alpine netboot \u7684 initramfs-virt \u6ca1\u6709 ext4"}),"\n",(0,i.jsx)(n.li,{children:"\u7cfb\u7edf\u5185 poweroff \u6216 halt \u4e0d\u4f1a\u9000\u51fa - reboot \u4f1a"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u53d1\u9001 SendCtrlAltDel \u9000\u51fa"}),"\n",(0,i.jsx)(n.li,{children:"\u4e0d\u652f\u6301 QCOW2 \u683c\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u914d\u5408 NDB \u4f7f\u7528"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"alpine",children:"alpine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# download\nlatest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/firecracker-microvm/firecracker/releases/latest))\ncurl -LOJ https://github.com/firecracker-microvm/firecracker/releases/download/${latest}/firecracker-${latest}-$(uname -m)\nmv firecracker-${latest}-$(uname -m) firecracker\nchmod +x firecracker\n\n# rootfs\n# =========\n# qemu-img create -f raw alpine.rootfs.ext4 1G\nfallocate -l 1G ubuntu.rootfs.ext4\nmkfs.ext4 ./alpine.rootfs.ext4\nmkdir /tmp/rootfs\nsudo mount alpine.rootfs.ext4 /tmp/rootfs\n\ncurl -OJ https://mirrors.aliyun.com/alpine/v3.12/releases/x86_64/alpine-minirootfs-3.12.0-x86_64.tar.gz\nsudo tar zxvf alpine-minirootfs-3.12.0-x86_64.tar.gz -C /tmp/rootfs/\n# for mirror\nsudo cp /etc/apk/repositories /tmp/rootfs/etc/apk/repositories\nsudo cp /etc/resolv.conf /tmp/rootfs/etc\nsudo chroot /tmp/rootfs/ /bin/sh\n\napk add alpine-base util-linux linux-virt haveged\nrc-update add haveged\necho root:root | chpasswd\nfor svc in devfs procfs sysfs; do ln -fs /etc/init.d/$svc /etc/runlevels/boot; done\nexit\n\nln -s agetty /etc/init.d/agetty.ttyS0\necho ttyS0 > /etc/securetty\nrc-update add agetty.ttyS0 default\n\n# this initramfs contain required ext4 module\nsudo cp /tmp/rootfs/boot/initramfs-virt initramfs-virt\nsudo cp /tmp/rootfs/boot/vmlinuz-virt vmlinuz-virt\n\nsudo umount /tmp/rootfs\n\n# kernel\n# ==========\ncurl -LOC- https://raw.githubusercontent.com/torvalds/linux/master/scripts/extract-vmlinux\nchmod +x extract-vmlinux\n./extract-vmlinux $PWD/vmlinuz-virt > vmlinux-virt\n\n# config & start\n# ==========\ncat <<CONF > alpine.json\n{\n  "boot-source": {\n    "initrd_path": "initramfs-virt",\n    "kernel_image_path": "vmlinux-virt",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "alpine.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\n./firecracker --api-sock /tmp/firecracker.socket --config-file alpine.json\n\n# exit\n# ==========\n# api request\ncurl --unix-socket /tmp/firecracker.socket -i \\\n    -X PUT "http://localhost/actions" \\\n    -H  "accept: application/json" \\\n    -H  "Content-Type: application/json" \\\n    -d \'{"action_type": "SendCtrlAltDel"}\'\n# in vm\nreboot\n\n# \u68c0\u6d4b KVM \u652f\u6301\n[ -r /dev/kvm ] && [ -w /dev/kvm ] && echo "OK" || echo "FAIL"\n\n# vm \u5185\u6e05\u9664\u7f13\u5b58 firecracker \u4e5f\u4e0d\u4f1a\u6536\u56de\u5185\u5b58\uff0c\u56e0\u4e3a\u4e0d\u652f\u6301 balloon\necho 3 > /proc/sys/vm/drop_caches\n\n# \u7c7b\u4f3c qemu - \u4f46 qemu \u66f4\u5bb9\u6613\u6dfb\u52a0\u7f51\u7edc\u4e14\u652f\u6301 vnc\n# firecracker \u9ed8\u8ba4\u4f1a\u6dfb\u52a0 root=/dev/vda\n# \u542f\u52a8\u540e\u7ea6 130 MB \u989d\u5916\u5185\u5b58\u5360\u7528 - firecracker \u7ea6 70 MB\n# pci=off qemu \u65e0\u6cd5\u542f\u52a8\nqemu-system-x86_64 \\\n  -smp 1 -m 1024 -cpu host \\\n  -M pc,accel=kvm \\\n  -no-acpi \\\n  -device virtio-rng-pci -device virtio-balloon -serial stdio \\\n  -kernel vmlinux-virt \\\n  -initrd initramfs-virt \\\n  -append "console=ttyS0 reboot=k panic=1 modules=virtio_mmio,virtio_blk,ext4 rootfstype=ext4 root=/dev/vda" \\\n  -drive file=alpine.rootfs.ext4,if=virtio,cache=writeback\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ubuntu",children:"ubuntu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -LO http://cdimage.ubuntu.com/ubuntu-base/releases/20.04/release/ubuntu-base-20.04.1-base-amd64.tar.gz\n\nfallocate -l 1G ubuntu.rootfs.ext4\nsudo mkfs.ext4 ubuntu.rootfs.ext4\n\nmkdir /tmp/rootfs\nsudo mount ubuntu.rootfs.ext4 /tmp/rootfs\nsudo tar -xzvf ubuntu-base-20.04.1-base-amd64.tar.gz -C /tmp/rootfs\nsudo cp /etc/resolv.conf /tmp/rootfs/etc/\nsudo chroot /tmp/rootfs/ /bin/bash\n\napt update\napt install linux-image-kvm -y\napt install init -y\nupdate-initramfs -u\necho root:root | chpasswd\necho ttyS0 > /etc/securetty\nsystemctl enable serial-getty@ttyS0.service\n\nexit\n\nsudo cp /tmp/rootfs/boot/initrd.img .\nsudo cp /tmp/rootfs/boot/vmlinuz .\n\nsudo umount /tmp/rootfs\n\nsudo chown $USER vmlinuz\n./extract-vmlinux $PWD/vmlinuz > vmlinux\n\ncat <<CONF > ubuntu.json\n{\n  "boot-source": {\n    "initrd_path": "initrd.img",\n    "kernel_image_path": "vmlinux",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "alpine.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\n./firecracker --api-sock /tmp/firecracker.socket --config-file ubuntu.json\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# https://packages.debian.org/sid/linux-image-amd64\n"})}),"\n",(0,i.jsx)(n.h2,{id:"centos",children:"centos"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# https://mirrors.aliyun.com/centos/8/BaseOS/x86_64/os/images/pxeboot/\ncurl --remote-name-all -OC- https://mirrors.aliyun.com/centos/8/BaseOS/x86_64/os/images/pxeboot/{initrd.img,vmlinuz}\n\nextract-vmlinux ./vmlinuz > vmlinux\n\ncat <<CONF > centos.json\n{\n  "boot-source": {\n    "initrd_path": "initrd.img",\n    "kernel_image_path": "vmlinux",\n    "boot_args": "console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4"\n  },\n  "drives": [\n    {\n      "drive_id": "rootfs",\n      "path_on_host": "centos.rootfs.ext4",\n      "is_root_device": true,\n      "is_read_only": false\n    }\n  ],\n  "machine-config": {\n    "vcpu_count": 1,\n    "mem_size_mib": 1024,\n    "ht_enabled": false\n  }\n}\nCONF\n\nrm /tmp/firecracker.socket;firecracker --api-sock /tmp/firecracker.socket --config-file centos.json\n'})}),"\n",(0,i.jsx)(n.h1,{id:"firectl",children:"firectl"}),"\n",(0,i.jsx)(n.h2,{id:"network",children:"network"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker/blob/master/docs/network-setup.md",children:"https://github.com/firecracker-microvm/firecracker/blob/master/docs/network-setup.md"})}),"\n",(0,i.jsx)(n.h1,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker/blob/master/src/api_server/swagger/firecracker.yaml",children:"api_server/swagger/firecracker.yaml"})}),"\n",(0,i.jsxs)(n.li,{children:["/actions\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'{"action_type":""}'})}),"\n",(0,i.jsx)(n.li,{children:"FlushMetrics,InstanceStart,SendCtrlAltDel"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"/boot-source - \u4ec5\u542f\u52a8\u524d"}),"\n",(0,i.jsx)(n.li,{children:"/drives/{drive_id} - \u4ec5\u542f\u52a8\u524d"}),"\n",(0,i.jsx)(n.li,{children:"/logger"}),"\n",(0,i.jsx)(n.li,{children:"/machine-config"}),"\n",(0,i.jsx)(n.li,{children:"/metrics"}),"\n",(0,i.jsx)(n.li,{children:"/mmds - Microvm Metadata Service"}),"\n",(0,i.jsx)(n.li,{children:"/mmds/config - \u914d\u7f6e MMDS - \u4ec5\u542f\u52a8\u524d"}),"\n",(0,i.jsx)(n.li,{children:"/network-interfaces/{iface_id} - \u4ec5\u542f\u52a8\u524d"}),"\n",(0,i.jsx)(n.li,{children:"/snapshot/create - \u521b\u5efa\u4e3a\u6682\u505c\u72b6\u6001\u7684\u865a\u62df\u673a\u521b\u5efa\u5feb\u7167"}),"\n",(0,i.jsx)(n.li,{children:"/snapshot/load - \u52a0\u8f7d\u5feb\u7167 - \u65b0\u542f\u52a8\u7684 Firecracker"}),"\n",(0,i.jsxs)(n.li,{children:["/vm - \u865a\u62df\u673a\u72b6\u6001\u7ba1\u7406\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'{"state":""}'})}),"\n",(0,i.jsx)(n.li,{children:"Paused, Resumed"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"/vsock - vsock \u8bbe\u5907\u7ba1\u7406"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"boot-source:\n  initrd_path: initrd.img\n  kernel_image_path: vmlinux\n  boot_args: console=ttyS0 reboot=k panic=1 pci=off modules=virtio_mmio,ext4 rootfstype=ext4\ndrives:\n  - drive_id: rootfs\n    path_on_host: centos.rootfs.ext4\n    is_root_device: true\n    is_read_only: false\n    # \u53ef\u9009 - is_root_device \u65f6\u7684\u542f\u52a8\u5206\u533a UUID\n    partuuid: 00000000-0000-0000-0000-000000000000\n    # \u53ef\u9009 - \u8bbf\u95ee\u901f\u7387\u9650\u5236\n    rate_limiter:\n      bandwidth: # \u5e26\u5bbd\n        one_time_burst: 0\n        refill_time: 0\n        size: 0\n      ops: # \u64cd\u4f5c\n# \u65e5\u5fd7\u914d\u7f6e\nlogger:\n  log_path: '' # \u5fc5\u987b\n  # Error, Warning, Info, Debug\n  level: Warning\n  show_level: false\n  show_log_origin: false\n# \u673a\u5668\u914d\u7f6e\nmachine-config:\n  # 1-32 - 1 \u6216 1-32 \u4e4b\u95f4\u5076\u6570\n  vcpu_count: 1\n  mem_size_mib: 1024\n  # Hyperthreading\n  ht_enabled: false\n  # C3, C2\n  # cpu_template: C3\n  # \u542f\u7528\u540e\u53ef\u5bf9\u5185\u5b58\u521b\u5efa\u589e\u91cf\u5feb\u7167\n  # track_dirty_pages: false\n\nmetrics:\n  # \u5b58\u50a8 JSON \u683c\u5f0f metric \u7684\u8def\u5f84\n  metrics_path: ''\n\nnetwork-interfaces:\n  - allow_mmds_requests: false # \u542f\u7528\u540e\u4f1a\u54cd\u5e94 HTTP GET \u8bf7\u6c42 MMDS\n    guest_mac: ''\n    host_dev_name: ''\n    iface_id: ''\n    rx_rate_limiter: ''\n    tx_rate_limiter: ''\n\nvsock:\n  guest_cid: 3\n  # UNIX domain socket\n  uds_path: ''\n  vsock_id: ''\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7f51\u7edc",children:"\u7f51\u7edc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u5047\u8bbe\u9700\u8981\u6865\u63a5\u7684 virbr0 \u5df2\u7ecf\u5b58\u5728\nip tuntap add dev fc0 mode tap\nip li set fc0 master virbr0\nip li set fc0 up\n\n\nsudo ip link add name br0 type bridge\nsudo ip addr add 172.20.0.1/24 dev br0\nsudo ip link set dev br0 up\nsudo sysctl -w net.ipv4.ip_forward=1\nsudo iptables --table nat --append POSTROUTING --out-interface enp3s0 -j MASQUERADE\nsudo iptables --insert FORWARD --in-interface br0 -j ACCEPT\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "network-interfaces": [\n    {\n      "iface_id": "if0",\n      "host_dev_name": "fc0"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h2,{id:"mount-mounting-devvda-on-sysroot-failed-no-such-device",children:"mount: mounting /dev/vda on /sysroot failed: No such device"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u80fd\u4e0d\u652f\u6301 ext4"}),"\n",(0,i.jsx)(n.li,{children:"cat /proc/filesystems"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var i=r(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var i,o={},l=null,d=null;for(i in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,i)&&!a.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var i=r(50959);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);