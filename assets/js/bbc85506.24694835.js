"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95633],{49613:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return c}});var i=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=i.createContext({}),p=function(t){var e=i.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},v=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),v=p(r),c=n,b=v["".concat(s,".").concat(c)]||v[c]||m[c]||a;return r?i.createElement(b,l(l({ref:e},u),{},{components:r})):i.createElement(b,l({ref:e},u))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=v;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},44384:function(t,e,r){r.r(e),r.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return d}});var i=r(49613),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&u(t,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&u(t,r,e[r]);return t};const v={id:"libvirt",title:"Libvirt"},c="Libvirt",b={unversionedId:"os/virt/libvirt",id:"os/virt/libvirt",title:"Libvirt",description:"Tips",source:"@site/../notes/os/virt/libvirt.md",sourceDirName:"os/virt",slug:"/os/virt/libvirt",permalink:"/notes/os/virt/libvirt",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/libvirt.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1605179031,formattedLastUpdatedAt:"Nov 12, 2020",frontMatter:{id:"libvirt",title:"Libvirt"},sidebar:"docs",previous:{title:"Virsh",permalink:"/notes/os/virt/virsh"},next:{title:"Libvirt Daemon",permalink:"/notes/os/virt/libvirtd"}},h={},d=[{value:"Tips",id:"tips",level:2},{value:"\u9a71\u52a8",id:"\u9a71\u52a8",level:2},{value:"invalid argument: Failed to parse user &#39;qemu&#39;",id:"invalid-argument-failed-to-parse-user-qemu",level:2},{value:"XML",id:"xml",level:2},{value:"virt-install",id:"virt-install",level:2}],f={toc:d};function k(t){var e,r=t,{components:n}=r,u=((t,e)=>{var r={};for(var i in t)s.call(t,i)&&e.indexOf(i)<0&&(r[i]=t[i]);if(null!=t&&o)for(var i of o(t))e.indexOf(i)<0&&p.call(t,i)&&(r[i]=t[i]);return r})(r,["components"]);return(0,i.kt)("wrapper",(e=m(m({},f),u),a(e,l({components:n,mdxType:"MDXLayout"}))),(0,i.kt)("h1",m({},{id:"libvirt"}),"Libvirt"),(0,i.kt)("h2",m({},{id:"tips"}),"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://github.com/libvirt/libvirt"}),"libvirt/libvirt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a: c#, go, java, ocaml. perl, python, php, ruby"),(0,i.kt)("li",{parentName:"ul"},"API \u5206\u4e3a: common, domain, domain snapshot, error, event, host, interface, network, node device, network filter, secret, storage, stream"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://libvirt.org/drivers.html"}),"libvirt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LXC \u2013 Linux Container - \u5bb9\u5668"),(0,i.kt)("li",{parentName:"ul"},"OpenVZ \u2013 lightweight Linux container system"),(0,i.kt)("li",{parentName:"ul"},"Kernel-based Virtual Machine/QEMU (KVM) \u2013 open source hypervisor for Linux and SmartOS"),(0,i.kt)("li",{parentName:"ul"},"Xen \u2013 Bare-Metal hypervisor"),(0,i.kt)("li",{parentName:"ul"},"User-mode Linux (UML) paravirtualized kernel"),(0,i.kt)("li",{parentName:"ul"},"VirtualBox \u2013 hypervisor by Oracle (formerly Sun) for Windows, Linux, Mac OS X, and Solaris"),(0,i.kt)("li",{parentName:"ul"},"VMware ESX and GSX \u2013 hypervisors for Intel hardware"),(0,i.kt)("li",{parentName:"ul"},"VMware Workstation and Player \u2013 hypervisors for Windows and Linux"),(0,i.kt)("li",{parentName:"ul"},"Hyper-V \u2013 hypervisor for Windows by Microsoft"),(0,i.kt)("li",{parentName:"ul"},"PowerVM \u2013 hypervisor by IBM for AIX, Linux and IBM i"),(0,i.kt)("li",{parentName:"ul"},"Parallels Workstation \u2013 hypervisor for Mac by Parallels IP Holdings GmbH"),(0,i.kt)("li",{parentName:"ul"},"Bhyve \u2013 hypervisor for FreeBSD 10+."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://wiki.libvirt.org/page/QEMUSwitchToLibvirt"}),"QEMUSwitchToLibvirt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://wiki.libvirt.org/page/UbuntuKVMWalkthrough"}),"UbuntuKVMWalkthrough")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://gist.github.com/itzg/2577205f2036f787a2bd876ae458e18e"}),"libvirt cloud-init with static networking")),(0,i.kt)("li",{parentName:"ul"},"\u6982\u5ff5 - ",(0,i.kt)("a",m({parentName:"li"},{href:"https://libvirt.org/api.html"}),"API"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"domain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Guest Host"))),(0,i.kt)("li",{parentName:"ul"},"network"),(0,i.kt)("li",{parentName:"ul"},"storage pool"),(0,i.kt)("li",{parentName:"ul"},"storage volume"))),(0,i.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"libvirtd \u672a\u6b63\u5e38\u5173\u95ed\u5bfc\u81f4 hang - 6.6.0 \u5e94\u8be5\u4f1a\u4fee\u590d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"}),"alpine/aports#11602")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://gitlab.com/libvirt/libvirt/-/issues/52"}),"libvirt/libvirt#52")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=libvirt-client&arch=x86_64&repo=community"}),"libvirt-client"))),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# macOS\n# \u5b89\u88c5 vbox\nbrew install libvirt\n\n# alpine\napk add virt-install\n\n# \u68c0\u6d4b\u5bbf\u4e3b\u673a\u652f\u6301\u60c5\u51b5\nvirt-host-validate\n\n# \u542f\u52a8\u670d\u52a1\u8fdb\u7a0b\nlibvirtd -v\n\n# \u5ba2\u6237\u7aef\u8fde\u63a5\n# https://libvirt.org/uri.html\n# https://libvirt.org/remote.html\nvirsh -c vbox:///session\n# \u65e5\u5fd7\u63a7\u5236\nLIBVIRT_LOG_FILTERS=1:vbox virsh -c vbox:///session\n# export LIBVIRT_DEFAULT_URI=\"qemu+ssh://root@192.168.1.100/system\"\nvirsh -c 'qemu+ssh://root@192.168.1.2/system'\n\n# \u95ee\u9898\u6392\u67e5\n# user \u4f1a\u4f7f\u7528 /usr/local/var/run/libvirt/libvirt-sock\nLIBVIRT_LOG_FILTERS=1:*  virsh -c 'qemu+ssh://admin@192.168.1.2/system' list\n# \u4fee\u6539\u4f7f\u7528\u7684 socket\nvirsh -c 'qemu+ssh://admin@192.168.1.2/system?socket=/var/run/libvirt/libvirt-sock' list\n\n# user \u4f1a\u4f7f\u7528 /usr/local/var/run/libvirt/libvirt-sock\nvirsh -c 'unix+ssh://admin@192.168.1.2/run/libvirt/libvirt-sock' list\n# \u5982\u679c\u662f\u975e root\uff0c\u5148\u9a8c\u8bc1\u80fd\u8bbf\u95ee\nvirsh -c unix:///run/libvirt/libvirt-sock list\n# \u53ef\u4ee5\u8f6c\u53d1 unix socket\nssh -R /run/libvirt/libvirt-sock:127.0.0.1:16509 admin@192.168.1.2 -Nv\n\nexport VIRSH_DEFAULT_CONNECT_URI=qemu:///system\nvirsh list --all\n\n# \u865a\u62df\u673a\u5217\u8868\nvirsh list\n\n# https://wiki.libvirt.org/page/SSHSetup\necho 'unix_sock_group = \"libvirt\"' >> /etc/libvirt/libvirtd.conf\necho 'unix_sock_rw_perms = \"0770\"' >> /etc/libvirt/libvirtd.conf\nusermod -G libvirt -a $USER\nrc-service libvirtd restart\n\nvirsh -c qemu+ssh://username@hostname/system\n")),(0,i.kt)("h2",m({},{id:"\u9a71\u52a8"}),"\u9a71\u52a8"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"https://pkgs.alpinelinux.org/contents?file=&path=%2Fusr%2Flib%2Flibvirt%2Fconnection-driver&name=&branch=edge&arch=x86_64"}),"https://pkgs.alpinelinux.org/contents?file=&path=%2Fusr%2Flib%2Flibvirt%2Fconnection-driver&name=&branch=edge&arch=x86_64")),(0,i.kt)("h2",m({},{id:"invalid-argument-failed-to-parse-user-qemu"}),"invalid argument: Failed to parse user 'qemu'"),(0,i.kt)("h2",m({},{id:"xml"}),"XML"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",m({parentName:"li"},{href:"https://libvirt.org/format.html"}),"https://libvirt.org/format.html"))),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{}),"virt-xml-validate /path/to/XML/file\n")),(0,i.kt)("h2",m({},{id:"virt-install"}),"virt-install"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'virt-install --virt-type kvm --name xp \\\n--location http://httpredir.debian.org/debian/dists/squeeze/main/installer-amd64/ \\\n--extra-args "console=ttyS0" -v --os-variant debiansqueeze \\\n--disk size=4 --memory 512\n-n xp --vcpus 2 --import winxp\n')),(0,i.kt)("p",null,"virt-install \\\n--connect qemu:///system \\\n--virt-type qemu \\\n--name demo \\\n--ram 500 \\\n--graphics vnc \\\n--disk path=/root/alp.qcow2 \\\n--cdrom /root/alpine-standard-3.8.0-x86_64.iso \\\n--os-variant=generic \\\n--dry-run --print-xml"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"https://wiki.debian.org/KVM"}),"https://wiki.debian.org/KVM")),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{}),"Usage:\n  libvirtd [options]\n\nOptions:\n  -h | --help            Display program help:\n  -v | --verbose         Verbose messages.\n  -d | --daemon          Run as a daemon & write PID file.\n  -l | --listen          Listen for TCP/IP connections.\n  -t | --timeout <secs>  Exit after timeout period.\n  -f | --config <file>   Configuration file.\n  -V | --version         Display version information.\n  -p | --pid-file <file> Change name of PID file.\n\nlibvirt management daemon:\n\n  Default paths:\n\n    Configuration file (unless overridden by -f):\n      $XDG_CONFIG_HOME/libvirt/libvirtd.conf\n\n    Sockets:\n      $XDG_RUNTIME_DIR/libvirt/libvirt-sock\n\n    TLS:\n      CA certificate:     $HOME/.pki/libvirt/cacert.pem\n      Server certificate: $HOME/.pki/libvirt/servercert.pem\n      Server private key: $HOME/.pki/libvirt/serverkey.pem\n\n    PID file:\n      $XDG_RUNTIME_DIR/libvirt/libvirtd.pid\n")),(0,i.kt)("p",null,"virsh -c qemu+ssh://",(0,i.kt)("a",m({parentName:"p"},{href:"mailto:root@127.0.0.1"}),"root@127.0.0.1"),":2222/system?socket=/var/run/libvirt/libvirt-sock list --all"),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"http://rabexc.org/posts/how-to-get-started-with-libvirt-on"}),"http://rabexc.org/posts/how-to-get-started-with-libvirt-on")),(0,i.kt)("p",null,(0,i.kt)("a",m({parentName:"p"},{href:"https://libvirt.org/formatdomain.html"}),"https://libvirt.org/formatdomain.html")),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-conf"}),'listen_tls = 0\nlisten_tcp=1\nauth_tcp="none"\n\n\nunix_sock_dir = "/usr/local/var/run/libvirt"\nunix_sock_ro_perms = "0777"\nunix_sock_rw_perms = "0770"\n\nauth_unix_ro = "none"\nauth_unix_rw = "none"\n')))}k.isMDXComponent=!0}}]);