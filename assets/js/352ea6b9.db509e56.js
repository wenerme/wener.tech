"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13650],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,k=c["".concat(o,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66332:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p}});var n=a(96600),l=a(27279),r=(a(59496),a(49613)),i=["components"],m={title:"lima"},o="lima",s={unversionedId:"os/virt/lima",id:"os/virt/lima",title:"lima",description:"- lima-vm/lima",source:"@site/../notes/os/virt/lima.md",sourceDirName:"os/virt",slug:"/os/virt/lima",permalink:"/notes/os/virt/lima",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/virt/lima.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"lima"},sidebar:"docs",previous:{title:"Libvirt Daemon",permalink:"/notes/os/virt/libvirtd"},next:{title:"MicroVM",permalink:"/notes/os/virt/microvm"}},u={},p=[{value:"lima.yaml",id:"limayaml",level:2},{value:"mount",id:"mount",level:2},{value:"9p",id:"9p",level:3},{value:"reverse-sshfs",id:"reverse-sshfs",level:3}],c={toc:p};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lima"},"lima"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima"},"lima-vm/lima"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Lima -> Linux on Mac"),(0,r.kt)("li",{parentName:"ul"},"Linux vm on macOS for running containerd"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Qemu"))),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5171\u4eab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 Reverse SSHFS"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528 virtio-9p-pci - virtfs"))),(0,r.kt)("li",{parentName:"ul"},"vm \u5185\u4f1a\u76d1\u542c /proc/net/tcp \u548c iptables \u4e8b\u4ef6\uff0c\u81ea\u52a8 ssh -L"),(0,r.kt)("li",{parentName:"ul"},"used by Rancher Desktop, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/abiosoft/colima"},"Colima"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Colima -> Containers on Linux on Mac"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/blob/master/docs/internal.md"},"https://github.com/lima-vm/lima/blob/master/docs/internal.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/tree/master/examples"},"https://github.com/lima-vm/lima/tree/master/examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml"},"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/alpine-lima"},"lima-vm/alpine-lima"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rd -> Rancher Desktop")))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"alpine-lima \u6682\u4e0d\u652f\u6301 containerd ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/issues/489"},"#489"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"installer \u4f9d\u8d56 systemd"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u81ea\u5df1 provision"))),(0,r.kt)("li",{parentName:"ul"},"Support Virtualization.framework on macOS 13 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/issues/889"},"#889")),(0,r.kt)("li",{parentName:"ul"},"Windows ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/issues/909"},"#909")),(0,r.kt)("li",{parentName:"ul"},"default mount driver from reverse-sshfs to 9p ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lima-vm/lima/issues/971"},"#971")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install lima\n\nsource <(limactl completion bash) # \u8865\u5168\n\n# https://raw.githubusercontent.com/lima-vm/lima/master/examples/alpine.yaml\n# /usr/local/share/lima/examples/fedora.yaml\n# limactl start --name=default template://docker\nlimactl start\n\n# limactl shell <INSTANCE> <COMMAND>\n# LIMA_INSTANCE\nlima uname -a\n\nls /usr/local/share/lima/examples   # \u6a21\u677f\nlimactl start --list-templates      # \u6a21\u677f\u5217\u8868\nlimactl list                        # \u5b9e\u4f8b\nlimactl copy default:/etc/ dst:/etc # \u8de8\u5b9e\u4f8b\u590d\u5236\u6587\u4ef6\nlimactl stop default\nlimactl delete default\nlimactl factory-reset default\nlimactl edit default\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u677f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alpine, buildkit, docker, k3s, nomad, ubuntu-lts"),(0,r.kt)("li",{parentName:"ul"},"default,docker,k3s -> ubuntu-lts")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="alpine.yaml"',title:'"alpine.yaml"'},"images:\n  - location: 'https://github.com/lima-vm/alpine-lima/releases/download/v0.2.18/alpine-lima-std-3.16.0-x86_64.iso'\n    arch: 'x86_64'\n    digest: 'sha512:234e407867a8955b9835b08e605b38583815dbd63c5690b558fbbd7b519af115c53694ddc3ff498cddb112f113e350c9f8b2a3351be038aa443399a39eff6007'\n  - location: 'https://github.com/lima-vm/alpine-lima/releases/download/v0.2.18/alpine-lima-std-3.16.0-aarch64.iso'\n    arch: 'aarch64'\n    digest: 'sha512:4e2cb238c78910384f30fb2aba02892d5b5092d50dfb0e345de71f7f194d24b890c81d2d502a0910d150de023ae77a3dbcda76cd6b71df2dd43e4dbccfc85170'\n\nmountType: '9p'\nmounts:\n  - location: '~'\n  - location: '/tmp/lima'\n    writable: true\n\nfirmware:\n  legacyBIOS: true\n\n# The built-in containerd installer does not support Alpine currently.\n# Hint: use the \"rd\" ISO instead of the \"std\" ISO to enable containerd: https://github.com/lima-vm/alpine-lima/releases/\ncontainerd:\n  # system-wide (aka rootful)  containerd and its dependencies (BuildKit, Stargz Snapshotter)\n  system: false\n  # user-scoped (aka rootless) containerd and its dependencies (currently requires systemd)\n  user: false\n")),(0,r.kt)("h2",{id:"limayaml"},"lima.yaml"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIMA_HOME"),(0,r.kt)("td",{parentName:"tr",align:null},"~/.lima")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIMA_INSTANCE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIMA_SHELL"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIMA_WORKDIR"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIMA_SYSTEM_X86_64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"which qemu-system-x86_64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"QEMU_SYSTEM_AARCH64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"which qemu-system-aarch64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LIMA_CIDATA_*")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LIMA_HOME",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<INSTANCE>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lima.yaml"),(0,r.kt)("li",{parentName:"ul"},"cidata.iso - ",(0,r.kt)("a",{parentName:"li",href:"/notes/ops/infra/cloud-init"},"cloud-init")),(0,r.kt)("li",{parentName:"ul"},"basedisk"),(0,r.kt)("li",{parentName:"ul"},"diffdisk"),(0,r.kt)("li",{parentName:"ul"},"kernel"),(0,r.kt)("li",{parentName:"ul"},"kernel.cmdline"),(0,r.kt)("li",{parentName:"ul"},"initrd"),(0,r.kt)("li",{parentName:"ul"},"qemu.{pid,sock}, serial.{log,sock}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"socat -,echo=0,icanon=0 unix-connect:serial.sock")))),(0,r.kt)("li",{parentName:"ul"},"ssh.sock"),(0,r.kt)("li",{parentName:"ul"},"ga.sock -> /run/lima-guestagent.sock"),(0,r.kt)("li",{parentName:"ul"},"ha.{pid,sock,stdout.log,stderr.log} - Host agent"))))),(0,r.kt)("li",{parentName:"ul"},"~/Library/Caches/lima",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/lima/download/by-url-sha256/<SHA256_OF_URL>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"url"),(0,r.kt)("li",{parentName:"ul"},"data.tmp"))))),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"user-mode, slirp 192.168.5.0/24"),(0,r.kt)("li",{parentName:"ul"},"guest 192.168.5.15"),(0,r.kt)("li",{parentName:"ul"},"host 192.168.5.2 host.lima.internal"),(0,r.kt)("li",{parentName:"ul"},"dns 192.168.5.3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"lima.yaml useHostResolver"))),(0,r.kt)("li",{parentName:"ul"},"vde_vmnet 192.168.105.0/24",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e3a guest \u6dfb\u52a0\u989d\u5916 IP")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# host \u548c guest \u4e0d\u540c\u8fd0\u884c\u4f1a\u975e\u5e38\u6162\narch: 'x86_64'\n# arch: \"aarch64\"\n\n# multi arch\n# https://github.com/lima-vm/lima/blob/master/docs/multi-arch.md\nimages:\n  - location: 'https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64.img'\n    arch: 'x86_64'\n  - location: 'https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-arm64.img'\n    arch: 'aarch64'\n\n# Disable mounts and containerd, otherwise booting up may timeout if the host is slow\nmounts: []\ncontainerd:\n  system: false\n  user: false\n")),(0,r.kt)("h2",{id:"mount"},"mount"),(0,r.kt)("h3",{id:"9p"},"9p"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8981\u6c42\u9ad8\u7248\u672c kernel"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 CentOS, Rocky Linux, AlmaLinux")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'mountType: \'9p\'\nmounts:\n  - location: \'~\'\n    9p:\n      # Supported security models are "passthrough", "mapped-xattr", "mapped-file" and "none".\n      # \ud83d\udfe2 Builtin default: "mapped-xattr"\n      securityModel: null\n      # Select 9P protocol version. Valid options are: "9p2000" (legacy), "9p2000.u", "9p2000.L".\n      # \ud83d\udfe2 Builtin default: "9p2000.L"\n      protocolVersion: null\n      # The number of bytes to use for 9p packet payload, where 4KiB is the absolute minimum.\n      # \ud83d\udfe2 Builtin default: "128KiB"\n      msize: null\n      # Specifies a caching policy. Valid options are: "none", "loose", "fscache" and "mmap".\n      # Try choosing "mmap" or "none" if you see a stability issue with the default "fscache".\n      # See https://www.kernel.org/doc/Documentation/filesystems/9p.txt\n      # \ud83d\udfe2 Builtin default: "fscache" for non-writable mounts, "mmap" for writable mounts\n      cache: null\n')),(0,r.kt)("h3",{id:"reverse-sshfs"},"reverse-sshfs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'mountType: \'reverse-sshfs\'\nmounts:\n  - location: \'~\'\n    sshfs:\n      # Enabling the SSHFS cache will increase performance of the mounted filesystem, at\n      # the cost of potentially not reflecting changes made on the host in a timely manner.\n      # Warning: It looks like PHP filesystem access does not work correctly when\n      # the cache is disabled.\n      # \ud83d\udfe2 Builtin default: true\n      cache: null\n      # SSHFS has an optional flag called \'follow_symlinks\'. This allows mounts\n      # to be properly resolved in the guest os and allow for access to the\n      # contents of the symlink. As a result, symlinked files & folders on the Host\n      # system will look and feel like regular files directories in the Guest OS.\n      # \ud83d\udfe2 Builtin default: false\n      followSymlinks: null\n      # SFTP driver, "builtin" or "openssh-sftp-server". "openssh-sftp-server" is recommended.\n      # \ud83d\udfe2 Builtin default: "openssh-sftp-server" if OpenSSH SFTP Server binary is found, otherwise "builtin"\n      sftpDriver: null\n')))}d.isMDXComponent=!0}}]);