(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},708:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(1021)),l={id:"libvirt-faq",title:"Libvirt\u5e38\u89c1\u95ee\u9898"},o={unversionedId:"os/virt/libvirt-faq",id:"os/virt/libvirt-faq",isDocsHomePage:!1,title:"Libvirt\u5e38\u89c1\u95ee\u9898",description:"Libvirt FAQ",source:"@site/notes/os/virt/libvirt-faq.md",slug:"/os/virt/libvirt-faq",permalink:"/notes/os/virt/libvirt-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/libvirt-faq.md",version:"current",sidebar:"docs",previous:{title:"KSM",permalink:"/notes/os/virt/ksm"},next:{title:"Libvirt \u7f51\u7edc",permalink:"/notes/os/virt/libvirt-net"}},c=[{value:"CPU \u8d44\u6e90\u914d\u989d",id:"cpu-\u8d44\u6e90\u914d\u989d",children:[]},{value:"\u91cd\u542f\u7f51\u7edc",id:"\u91cd\u542f\u7f51\u7edc",children:[]},{value:"\u5904\u7406 libvirt hang \u7684\u95ee\u9898",id:"\u5904\u7406-libvirt-hang-\u7684\u95ee\u9898",children:[]},{value:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e",id:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e",children:[]},{value:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9",id:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9",children:[]},{value:"Refusing to undefine while domain managed save image exists",id:"refusing-to-undefine-while-domain-managed-save-image-exists",children:[]},{value:"host-model vs host-passthrough",id:"host-model-vs-host-passthrough",children:[]},{value:"\u52a8\u6001 CPU \u548c\u5185\u5b58",id:"\u52a8\u6001-cpu-\u548c\u5185\u5b58",children:[]},{value:"At least one numa node has to be configured when enabling memory hotplug",id:"at-least-one-numa-node-has-to-be-configured-when-enabling-memory-hotplug",children:[]},{value:"console \u6ca1\u6709\u7ec8\u7aef",id:"console-\u6ca1\u6709\u7ec8\u7aef",children:[]},{value:"guest CPU doesn&#39;t match specification: missing features: spec-ctrl,stibp,ssbd",id:"guest-cpu-doesnt-match-specification-missing-features-spec-ctrlstibpssbd",children:[]},{value:"\u83b7\u53d6\u4e3b\u673a IP",id:"\u83b7\u53d6\u4e3b\u673a-ip",children:[]},{value:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[{value:"\u9ed8\u8ba4\u7f51\u7edc",id:"\u9ed8\u8ba4\u7f51\u7edc",children:[]},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc",id:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc",children:[]},{value:"\u4f7f\u7528 macvtap",id:"\u4f7f\u7528-macvtap",children:[]},{value:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361",id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361",children:[]},{value:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361",id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361",children:[]}]},{value:"\u57df",id:"\u57df",children:[{value:"\u663e\u5b58\u8c03\u6574",id:"\u663e\u5b58\u8c03\u6574",children:[]},{value:"\u52a8\u6001\u5185\u5b58",id:"\u52a8\u6001\u5185\u5b58",children:[]}]},{value:"memory ballooning",id:"memory-ballooning",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"libvirt-faq"},"Libvirt FAQ"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"domain ",Object(i.b)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html"},"xml")),Object(i.b)("li",{parentName:"ul"},"\u7f51\u7edc ",Object(i.b)("a",{parentName:"li",href:"https://libvirt.org/formatnetwork.html"},"xml")),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"uuid \u548c mac \u7c7b\u5b57\u6bb5\u5982\u679c\u6ca1\u6709\uff0c\u5219\u5bfc\u5165\u7684\u65f6\u5019\u751f\u6210"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528\u975e root virsh"))),Object(i.b)("li",{parentName:"ul"},"\u4e09\u79cd\u914d\u7f6e\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"live - \u8fd0\u884c\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u7acb\u5373\u751f\u6548"))),Object(i.b)("li",{parentName:"ul"},"inactive - \u4e0d\u6d3b\u8dc3\u7684\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u9700\u8981\u91cd\u542f\u540e\u751f\u6548"))),Object(i.b)("li",{parentName:"ul"},"current - \u5f53\u524d\u72b6\u6001",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6307\u5411 live \u6216 inactive")))))),Object(i.b)("h2",{id:"cpu-\u8d44\u6e90\u914d\u989d"},"CPU \u8d44\u6e90\u914d\u989d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003 ",Object(i.b)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html#elementsCPUTuning"},"CPUTuning")),Object(i.b)("li",{parentName:"ul"},"shares - \u6bcf\u4e2a vCPU"),Object(i.b)("li",{parentName:"ul"},"period\u3001quota - \u6bcf\u4e2a vCPU\uff0c\u4f46\u4f1a\u9996 quota \u5b9a\u4e49\u9650\u5236"),Object(i.b)("li",{parentName:"ul"},"emulator_period\u3001emulator_quota - \u6bcf\u4e2a\u6a21\u62df\u7ebf\u7a0b\uff0c\u4e3b\u673a 40-80% \u6027\u80fd")),Object(i.b)("h2",{id:"\u91cd\u542f\u7f51\u7edc"},"\u91cd\u542f\u7f51\u7edc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://aboullaite.me/effectively-restarting-kvm-libvirt-network/"},"https://aboullaite.me/effectively-restarting-kvm-libvirt-network/"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/aboullaite/useful-scripts/blob/master/kvm-restart-network.sh"},"https://github.com/aboullaite/useful-scripts/blob/master/kvm-restart-network.sh"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'NET_NAME=default\nNET_HOOK=/etc/libvirt/hooks/qemu\n\nvirsh net-destroy $NET_NAME\nvirsh net-start $NET_NAME\n\nVMS=$( virsh list | tail -n +3 | head -n -1 | awk \'{ print $2; }\' )\n\nfor m in $VMS ; do\n\n    echo "$m"\n    MAC_ADDR=$(virsh domiflist "$m" |grep -o -E "([0-9a-f]{2}:){5}([0-9a-f]{2})")\n    NET_MODEL=$(virsh domiflist "$m" | tail -n +3 | head -n -1 | awk \'{ print $4; }\')\n\n    set +e\n    virsh detach-interface "$m" network --mac "$MAC_ADDR" && sleep 3\n    virsh attach-interface "$m" network $NET_NAME --mac "$MAC_ADDR" --model "$NET_MODEL"\n    set -e\n    [ ! -e $NET_HOOK ] || {\n      $NET_HOOK "$m" stopped && sleep 3\n      $NET_HOOK "$m" start\n    }\ndone\n')),Object(i.b)("h2",{id:"\u5904\u7406-libvirt-hang-\u7684\u95ee\u9898"},"\u5904\u7406 libvirt hang \u7684\u95ee\u9898"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"},"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'if [ "$1" = \'start\' ]; then\n  modprobe tun\n  sleep 1\n  service virtlogd start\n  sleep 1\n  service virtqemud start\n  sleep 1\n  service virtnetworkd start\n  sleep 1\n  service virtstoraged start\n  sleep 1\n  service libvirtd start\nelif [ "$1" = \'stop\' ]; then\n  service libvirtd stop\n  sleep 1\n  service virtlogd stop\n  sleep 1\n  service virtstoraged stop\n  sleep 1\n  service virtnetworkd stop\n  sleep 1\n  service virtqemud stop\n  killall -9 dnsmasq\nelse\n  printf "Usage $0: start | stop\\n"\nfi\n')),Object(i.b)("h2",{id:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e"},"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\nvirsh net-update --config --live default add ip-dhcp-host \\\n  \"<host mac='52:54:00:01:02:03' name='xyz.example.com' ip='192.168.122.25'/>\"\n")),Object(i.b)("h2",{id:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9"},"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"virsh blockresize DOMAIN FULL_DISK_PATH 1000G\n\n# \u4f7f\u7528 QEMU \u65b9\u5f0f\n# \u5f53\u524d vm Disk \u4fe1\u606f\n# \u6ce8\u610f alias - \u4f8b\u5982 virtio-disk0\nvirsh dumpxml test | xpath -e /domain/devices/disk\n\n# drive-<alias> \u5373\u4e3a\u5b9e\u9645 disk\nvirsh qemu-monitor-command test block_resize drive-virtio-disk0 100G --hmp\n")),Object(i.b)("h2",{id:"refusing-to-undefine-while-domain-managed-save-image-exists"},"Refusing to undefine while domain managed save image exists"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"virsh managedsave-remove vm\nvirsh undefine vm\n")),Object(i.b)("h2",{id:"host-model-vs-host-passthrough"},"host-model vs host-passthrough"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.reddit.com/r/VFIO/comments/a20bf7/hostmodel_vs_hostpassthrough_super_poor_cache/"},"https://www.reddit.com/r/VFIO/comments/a20bf7/hostmodel_vs_hostpassthrough_super_poor_cache/")),Object(i.b)("h2",{id:"\u52a8\u6001-cpu-\u548c\u5185\u5b58"},"\u52a8\u6001 CPU \u548c\u5185\u5b58"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<maxMemory slots='16' unit='GiB'>64</maxMemory>\n<memory unit='GiB'>32</memory>\n<currentMemory unit='GiB'>32</currentMemory>\n<vcpu placement='static' current='8'>16</vcpu>\n<cpu>\n  <numa>\n    <cell id='0' cpus='0-8' memory='32' unit='GiB'/>\n  </numa>\n  \x3c!-- \u5176\u4ed6\u5185\u5bb9 --\x3e\n</cpu>\n")),Object(i.b)("h2",{id:"at-least-one-numa-node-has-to-be-configured-when-enabling-memory-hotplug"},"At least one numa node has to be configured when enabling memory hotplug"),Object(i.b)("p",null,"\u914d\u7f6e\u70ed\u63d2\u62d4\u5185\u5b58\u540e\u9700\u8981\u914d\u7f6e numa"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<cpu>\n  <numa>\n    <cell id='0' cpus='0-8' memory='4' unit='GiB'/>\n  </numa>\n  \x3c!-- \u5176\u4ed6\u5185\u5bb9 --\x3e\n</cpu>\n")),Object(i.b)("h2",{id:"console-\u6ca1\u6709\u7ec8\u7aef"},"console \u6ca1\u6709\u7ec8\u7aef"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u786e\u4fdd\u5b9a\u4e49\u6709Serial")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<serial type='pty'>\n  <target port='0'/>\n</serial>\n<console type='pty'>\n  <target type='serial' port='0'/>\n</console>\n")),Object(i.b)("p",null,"\u5982\u679c\u8fd8\u662f\u6ca1\u6709\uff0c\u5219\u5c1d\u8bd5\u6dfb\u52a0 kernel \u53c2\u6570"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"console=tty0 console=ttyS0\n")),Object(i.b)("p",null,"\u6216"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"console=ttyS0,19200 earlyprint=serial,ttyS0,19200\n")),Object(i.b)("h2",{id:"guest-cpu-doesnt-match-specification-missing-features-spec-ctrlstibpssbd"},"guest CPU doesn't match specification: missing features: spec-ctrl,stibp,ssbd"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.berrange.com/posts/2018/06/29/cpu-model-configuration-for-qemu-kvm-on-x86-hosts/"},"https://www.berrange.com/posts/2018/06/29/cpu-model-configuration-for-qemu-kvm-on-x86-hosts/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tree/arch/x86/include/asm/cpufeatures.h"},"https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tree/arch/x86/include/asm/cpufeatures.h")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/43539/what-do-the-flags-in-proc-cpuinfo-mean"},"https://unix.stackexchange.com/questions/43539/what-do-the-flags-in-proc-cpuinfo-mean"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u6700\u7b80\u5355\u7684\u4fee\u590d\u65b9\u5f0f\u662f\u4f7f\u7528\u4e3b\u673a\u7684\u6a21\u578b --\x3e\n<cpu mode='host-model'/>\n")),Object(i.b)("cpu",{mode:"host-model"},Object(i.b)("model",{fallback:"forbid"},"core2duo")),Object(i.b)("cpu",{mode:"host-model",check:"partial"},Object(i.b)("model",{fallback:"forbid"},"IvyBridge-IBRS"),Object(i.b)("vendor",null,"Intel"),Object(i.b)("feature",{policy:"require",name:"ss"}),Object(i.b)("feature",{policy:"require",name:"pcid"}),Object(i.b)("feature",{policy:"require",name:"hypervisor"}),Object(i.b)("feature",{policy:"require",name:"arat"}),Object(i.b)("feature",{policy:"require",name:"tsc_adjust"}),Object(i.b)("feature",{policy:"require",name:"umip"}),Object(i.b)("feature",{policy:"require",name:"xsaveopt"}),Object(i.b)("feature",{policy:"require",name:"pdpe1gb"}),Object(i.b)("feature",{policy:"require",name:"stibp"}),Object(i.b)("feature",{policy:"require",name:"ssbd"})),Object(i.b)("h2",{id:"\u83b7\u53d6\u4e3b\u673a-ip"},"\u83b7\u53d6\u4e3b\u673a IP"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e3b\u673a\u540d\u5b57\nHOSTNAME=base\nMAC=$(virsh domiflist $HOSTNAME | awk \u2018{ print $5 }\u2019 | tail -2 | head -1)\narp -a | grep $MAC | awk '{ print $2 }' | sed \u2018s/[()]//g\u2019\n")),Object(i.b)("h2",{id:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879"},"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u6301\u4e45\u5316\u7684\u7f51\u5361\u4fe1\u606f - alpine \u9ed8\u8ba4\u6ca1\u6709\nrm -f /etc/udev/rules.d/70-persistent-net.rules\n\n# \u5220\u9664 ssh \u7684 host id\nrm -rf /etc/ssh/ssh_host_*\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/cloning_virtual_machines"},"CLONING VIRTUAL MACHINES"))),Object(i.b)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),Object(i.b)("h3",{id:"\u9ed8\u8ba4\u7f51\u7edc"},"\u9ed8\u8ba4\u7f51\u7edc"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>default</name>\n  <uuid/>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name='virbr0' stp='on' delay='0'/>\n  <mac/>\n  <ip address='192.168.122.1' netmask='255.255.255.0'>\n    <dhcp>\n      \x3c!-- DHCP \u8303\u56f4 --\x3e\n      <range start='192.168.122.2' end='192.168.122.254'/>\n      \x3c!-- \u9759\u6001 IP --\x3e\n      \x3c!-- <host mac='52:54:00:70:d9:ee' name='myhost' ip='192.168.122.10'/> --\x3e\n    </dhcp>\n  </ip>\n</network>\n")),Object(i.b)("h3",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"connections - \u5f53\u524d\u8fde\u63a5\u6570 \u5728\u8fd0\u884c\u4e2d\u7684\u7f51\u7edc\u770b\u5f97\u5230"),Object(i.b)("li",{parentName:"ul"},"libvirt \u4f1a\u7ef4\u62a4\u4e00\u4e2a dnsmasq \u5b9e\u4f8b")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<network ipv6='yes' trustGuestRxFilters='no' connections='10'>\n  \x3c!-- \u57fa\u672c\u5143\u6570\u636e --\x3e\n  <name>default</name>\n  <uuid>3e3fce45-4f53-4fa7-bb32-11f34168b82b</uuid>\n  <metadata>\n    <app1:foo xmlns:app1=\"http://app1.org/app1/\">..</app1:foo>\n    <app2:bar xmlns:app2=\"http://app1.org/app2/\">..</app2:bar>\n  </metadata>\n  \x3c!-- \u8fde\u63a5\u6027\u914d\u7f6e --\x3e\n  <mtu size=\"9000\"/>\n  \x3c!-- QoS --\x3e\n  <bandwidth>\n    <inbound floor='500' average='1000' peak='5000' burst='5120'/>\n    <outbound average='128' peak='256' burst='256'/>\n  </bandwidth>\n  \x3c!-- \u9759\u6001\u8def\u7531 --\x3e\n  <ip address=\"192.168.122.1\" netmask=\"255.255.255.0\">\n    <dhcp>\n      <range start=\"192.168.122.128\" end=\"192.168.122.254\"/>\n      <host mac=\"00:16:3e:77:e2:ed\" name=\"foo.example.com\" ip=\"192.168.122.10\"/>\n    </dhcp>\n    \x3c!-- tftp --\x3e\n  </ip>\n  <route address=\"192.168.222.0\" prefix=\"24\" gateway=\"192.168.122.2\"/>\n  \x3c!-- \u5730\u5740 - \u53ea\u652f\u6301\u9694\u79bb \u5373 \u975e forward --\x3e\n  \x3c!-- \u6865\u63a5\u7f51\u5361\u8bbe\u5907\u7684 MAC --\x3e\n  <mac address='00:16:3E:5D:C7:9E'/>\n  <domain name=\"example.com\"/>\n  \x3c!-- enable \u9ed8\u8ba4\u5f00\u542f --\x3e\n  \x3c!-- forwardPlainNames \u5982\u679c\u5173\u95ed\u5219\u4e0d\u4f1a\u5904\u7406\u4e0d\u5e26 . \u7684\u540d\u5b57 --\x3e\n  <dns enable='yes' forwardPlainNames='yes'>\n    <txt name=\"example\" value=\"example value\"/>\n    <forwarder addr=\"8.8.8.8\"/>\n    <forwarder domain='example.com' addr=\"8.8.4.4\"/>\n    <forwarder domain='www.example.com'/>\n    <srv service='name' protocol='tcp' domain='test-domain-name' target='.'\n      port='1024' priority='10' weight='10'/>\n    <host ip='192.168.122.2'>\n      <hostname>myhost</hostname>\n      <hostname>myhostalias</hostname>\n    </host>\n  </dns>\n  \x3c!-- \u81ea\u5b9a\u4e49 dnsmasq \u5c5e\u6027 --\x3e\n  <dnsmasq:options>\n    <dnsmasq:option value=\"foo=bar\"/>\n    <dnsmasq:option value=\"cname=*.foo.example.com,master.example.com\"/>\n  </dnsmasq:options>\n</network>\n")),Object(i.b)("h3",{id:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc"},"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<network>\n  <name>host-bridge</name>\n  <forward mode="bridge"/>\n  <bridge name="br0"/>\n</network>\n')),Object(i.b)("h3",{id:"\u4f7f\u7528-macvtap"},"\u4f7f\u7528 macvtap"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u6865\u63a5\uff0c\u4f46\u4e0d\u9700\u8981\u4e3b\u673a\u5b58\u5728\u6865\u63a5\u7f51\u5361"),Object(i.b)("li",{parentName:"ul"},"\u4e3b\u673a\u8be5\u7f51\u5361\u4e0e\u865a\u62df\u673a\u4e0d\u4e92\u901a")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<network>\n  <name>direct-macvtap</name>\n  <forward mode="bridge">\n    <interface dev="eth0"/>\n    <interface dev="eth1"/>\n  </forward>\n</network>\n')),Object(i.b)("h3",{id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361"},"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>host-passthrough</name>\n  \x3c!-- \u8bbe\u5907\u6c60 --\x3e\n  <forward mode='passthrough'>\n    <interface dev='eth10'/>\n    <interface dev='eth11'/>\n    <interface dev='eth12'/>\n    <interface dev='eth13'/>\n    <interface dev='eth14'/>\n  </forward>\n</network>\n")),Object(i.b)("h3",{id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361"},"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>host-passthrough-vnet</name>\n  <forward mode='passthrough'>\n    <pf dev='eth0'/>\n  </forward>\n</network>\n")),Object(i.b)("h2",{id:"\u57df"},"\u57df"),Object(i.b)("h3",{id:"\u663e\u5b58\u8c03\u6574"},"\u663e\u5b58\u8c03\u6574"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"kvm \u53ef\u4ee5\u4f7f\u7528 cirrus \u505a\u66f4\u597d\u7684\u663e\u793a"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f\u663e\u5b58\u5927\u5c0f - \u8fc7\u5c0f\u4f1a\u5bfc\u81f4\u663e\u793a\u51fa\u95ee\u9898")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<video>\n  <model type='cirrus' vram='9216' heads='1'/>\n  <address type='pci' domain='0x0000' bus='0x00' slot='0x02' function='0x0'/>\n</video>\n")),Object(i.b)("h3",{id:"\u52a8\u6001\u5185\u5b58"},"\u52a8\u6001\u5185\u5b58"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<maxMemory slots='16' unit='GiB'>16</maxMemory>\n\x3c!-- memory \u548c currentMemory \u53c2\u6570\u53ef\u9009 --\x3e\n\x3c!-- <memory unit='GiB'>8</memory> --\x3e\n\x3c!-- \u521d\u59cb\u5185\u5b58 --\x3e\n\x3c!-- <currentMemory unit='GiB'>2</currentMemory> --\x3e\n\x3c!-- \u70ed\u63d2\u62d4\u9700\u8981 numa --\x3e\n<cpu>\n  <numa>\n    <cell id='0' cpus='0-2' memory='1' unit='GiB'/>\n  </numa>\n</cpu>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@juergen_thomann/558f1c635972"},"Memory hotplug with Qemu/KVM and libvirt"))),Object(i.b)("h2",{id:"memory-ballooning"},"memory ballooning"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Projects/auto-ballooning"},"https://www.linux-kvm.org/page/Projects/auto-ballooning")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-device virtio-balloon,automatic=true")),Object(i.b)("li",{parentName:"ul"},"deflate-on-oom=on"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html#elementsMemBalloon"},"https://libvirt.org/formatdomain.html#elementsMemBalloon")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6dfb\u52a0"),Object(i.b)("li",{parentName:"ul"},"When you use KVM and want to overcommit memory you can try to enable \u201ckernel same-page merging\u201d (KSM) in the linux kernel on the hypervisor."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://packages.debian.org/stretch/ksmtuned"},"https://packages.debian.org/stretch/ksmtuned"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<memballoon model='virtio' autodeflate='on'>\n")))}b.isMDXComponent=!0}}]);