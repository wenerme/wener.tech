"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[390],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74006:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"libvirt-faq",title:"Libvirt\u5e38\u89c1\u95ee\u9898"},s="Libvirt FAQ",m={unversionedId:"os/virt/libvirt-faq",id:"os/virt/libvirt-faq",isDocsHomePage:!1,title:"Libvirt\u5e38\u89c1\u95ee\u9898",description:"- domain xml",source:"@site/notes/os/virt/libvirt-faq.md",sourceDirName:"os/virt",slug:"/os/virt/libvirt-faq",permalink:"/notes/os/virt/libvirt-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/libvirt-faq.md",version:"current",frontMatter:{id:"libvirt-faq",title:"Libvirt\u5e38\u89c1\u95ee\u9898"},sidebar:"docs",previous:{title:"KSM",permalink:"/notes/os/virt/ksm"},next:{title:"Libvirt \u7f51\u7edc",permalink:"/notes/os/virt/libvirt-net"}},p=[{value:"CPU \u8d44\u6e90\u914d\u989d",id:"cpu-\u8d44\u6e90\u914d\u989d",children:[]},{value:"\u91cd\u542f\u7f51\u7edc",id:"\u91cd\u542f\u7f51\u7edc",children:[]},{value:"\u5904\u7406 libvirt hang \u7684\u95ee\u9898",id:"\u5904\u7406-libvirt-hang-\u7684\u95ee\u9898",children:[]},{value:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e",id:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e",children:[]},{value:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9",id:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9",children:[]},{value:"Refusing to undefine while domain managed save image exists",id:"refusing-to-undefine-while-domain-managed-save-image-exists",children:[]},{value:"host-model vs host-passthrough",id:"host-model-vs-host-passthrough",children:[]},{value:"\u52a8\u6001 CPU \u548c\u5185\u5b58",id:"\u52a8\u6001-cpu-\u548c\u5185\u5b58",children:[]},{value:"At least one numa node has to be configured when enabling memory hotplug",id:"at-least-one-numa-node-has-to-be-configured-when-enabling-memory-hotplug",children:[]},{value:"console \u6ca1\u6709\u7ec8\u7aef",id:"console-\u6ca1\u6709\u7ec8\u7aef",children:[]},{value:"guest CPU doesn&#39;t match specification: missing features: spec-ctrl,stibp,ssbd",id:"guest-cpu-doesnt-match-specification-missing-features-spec-ctrlstibpssbd",children:[]},{value:"\u83b7\u53d6\u4e3b\u673a IP",id:"\u83b7\u53d6\u4e3b\u673a-ip",children:[]},{value:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[{value:"\u9ed8\u8ba4\u7f51\u7edc",id:"\u9ed8\u8ba4\u7f51\u7edc",children:[]},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc",id:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc",children:[]},{value:"\u4f7f\u7528 macvtap",id:"\u4f7f\u7528-macvtap",children:[]},{value:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361",id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361",children:[]},{value:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361",id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361",children:[]}]},{value:"\u57df",id:"\u57df",children:[{value:"\u663e\u5b58\u8c03\u6574",id:"\u663e\u5b58\u8c03\u6574",children:[]},{value:"\u52a8\u6001\u5185\u5b58",id:"\u52a8\u6001\u5185\u5b58",children:[]}]},{value:"memory ballooning",id:"memory-ballooning",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"libvirt-faq"},"Libvirt FAQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"domain ",(0,i.kt)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html"},"xml")),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc ",(0,i.kt)("a",{parentName:"li",href:"https://libvirt.org/formatnetwork.html"},"xml")),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uuid \u548c mac \u7c7b\u5b57\u6bb5\u5982\u679c\u6ca1\u6709\uff0c\u5219\u5bfc\u5165\u7684\u65f6\u5019\u751f\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528\u975e root virsh"))),(0,i.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u914d\u7f6e\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"live - \u8fd0\u884c\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u7acb\u5373\u751f\u6548"))),(0,i.kt)("li",{parentName:"ul"},"inactive - \u4e0d\u6d3b\u8dc3\u7684\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u9700\u8981\u91cd\u542f\u540e\u751f\u6548"))),(0,i.kt)("li",{parentName:"ul"},"current - \u5f53\u524d\u72b6\u6001",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6307\u5411 live \u6216 inactive")))))),(0,i.kt)("h2",{id:"cpu-\u8d44\u6e90\u914d\u989d"},"CPU \u8d44\u6e90\u914d\u989d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html#elementsCPUTuning"},"CPUTuning")),(0,i.kt)("li",{parentName:"ul"},"shares - \u6bcf\u4e2a vCPU"),(0,i.kt)("li",{parentName:"ul"},"period\u3001quota - \u6bcf\u4e2a vCPU\uff0c\u4f46\u4f1a\u9996 quota \u5b9a\u4e49\u9650\u5236"),(0,i.kt)("li",{parentName:"ul"},"emulator_period\u3001emulator_quota - \u6bcf\u4e2a\u6a21\u62df\u7ebf\u7a0b\uff0c\u4e3b\u673a 40-80% \u6027\u80fd")),(0,i.kt)("h2",{id:"\u91cd\u542f\u7f51\u7edc"},"\u91cd\u542f\u7f51\u7edc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aboullaite.me/effectively-restarting-kvm-libvirt-network/"},"https://aboullaite.me/effectively-restarting-kvm-libvirt-network/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aboullaite/useful-scripts/blob/master/kvm-restart-network.sh"},"https://github.com/aboullaite/useful-scripts/blob/master/kvm-restart-network.sh"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'NET_NAME=default\nNET_HOOK=/etc/libvirt/hooks/qemu\n\nvirsh net-destroy $NET_NAME\nvirsh net-start $NET_NAME\n\nVMS=$( virsh list | tail -n +3 | head -n -1 | awk \'{ print $2; }\' )\n\nfor m in $VMS ; do\n\n    echo "$m"\n    MAC_ADDR=$(virsh domiflist "$m" |grep -o -E "([0-9a-f]{2}:){5}([0-9a-f]{2})")\n    NET_MODEL=$(virsh domiflist "$m" | tail -n +3 | head -n -1 | awk \'{ print $4; }\')\n\n    set +e\n    virsh detach-interface "$m" network --mac "$MAC_ADDR" && sleep 3\n    virsh attach-interface "$m" network $NET_NAME --mac "$MAC_ADDR" --model "$NET_MODEL"\n    set -e\n    [ ! -e $NET_HOOK ] || {\n      $NET_HOOK "$m" stopped && sleep 3\n      $NET_HOOK "$m" start\n    }\ndone\n')),(0,i.kt)("h2",{id:"\u5904\u7406-libvirt-hang-\u7684\u95ee\u9898"},"\u5904\u7406 libvirt hang \u7684\u95ee\u9898"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"},"https://gitlab.alpinelinux.org/alpine/aports/-/issues/11602"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'if [ "$1" = \'start\' ]; then\n  modprobe tun\n  sleep 1\n  service virtlogd start\n  sleep 1\n  service virtqemud start\n  sleep 1\n  service virtnetworkd start\n  sleep 1\n  service virtstoraged start\n  sleep 1\n  service libvirtd start\nelif [ "$1" = \'stop\' ]; then\n  service libvirtd stop\n  sleep 1\n  service virtlogd stop\n  sleep 1\n  service virtstoraged stop\n  sleep 1\n  service virtnetworkd stop\n  sleep 1\n  service virtqemud stop\n  killall -9 dnsmasq\nelse\n  printf "Usage $0: start | stop\\n"\nfi\n')),(0,i.kt)("h2",{id:"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e"},"\u5b9e\u65f6\u4fee\u6539\u7f51\u7edc\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\nvirsh net-update --config --live default add ip-dhcp-host \\\n  \"<host mac='52:54:00:01:02:03' name='xyz.example.com' ip='192.168.122.25'/>\"\n")),(0,i.kt)("h2",{id:"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9"},"\u78c1\u76d8\u7a7a\u95f4\u6269\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh blockresize DOMAIN FULL_DISK_PATH 1000G\n\n# \u4f7f\u7528 QEMU \u65b9\u5f0f\n# \u5f53\u524d vm Disk \u4fe1\u606f\n# \u6ce8\u610f alias - \u4f8b\u5982 virtio-disk0\nvirsh dumpxml test | xpath -e /domain/devices/disk\n\n# drive-<alias> \u5373\u4e3a\u5b9e\u9645 disk\nvirsh qemu-monitor-command test block_resize drive-virtio-disk0 100G --hmp\n")),(0,i.kt)("h2",{id:"refusing-to-undefine-while-domain-managed-save-image-exists"},"Refusing to undefine while domain managed save image exists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh managedsave-remove vm\nvirsh undefine vm\n")),(0,i.kt)("h2",{id:"host-model-vs-host-passthrough"},"host-model vs host-passthrough"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/VFIO/comments/a20bf7/hostmodel_vs_hostpassthrough_super_poor_cache/"},"https://www.reddit.com/r/VFIO/comments/a20bf7/hostmodel_vs_hostpassthrough_super_poor_cache/")),(0,i.kt)("h2",{id:"\u52a8\u6001-cpu-\u548c\u5185\u5b58"},"\u52a8\u6001 CPU \u548c\u5185\u5b58"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<maxMemory slots='16' unit='GiB'>64</maxMemory>\n<memory unit='GiB'>32</memory>\n<currentMemory unit='GiB'>32</currentMemory>\n<vcpu placement='static' current='8'>16</vcpu>\n<cpu>\n  <numa>\n    <cell id='0' cpus='0-8' memory='32' unit='GiB'/>\n  </numa>\n  \x3c!-- \u5176\u4ed6\u5185\u5bb9 --\x3e\n</cpu>\n")),(0,i.kt)("h2",{id:"at-least-one-numa-node-has-to-be-configured-when-enabling-memory-hotplug"},"At least one numa node has to be configured when enabling memory hotplug"),(0,i.kt)("p",null,"\u914d\u7f6e\u70ed\u63d2\u62d4\u5185\u5b58\u540e\u9700\u8981\u914d\u7f6e numa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<cpu>\n  <numa>\n    <cell id='0' cpus='0-8' memory='4' unit='GiB'/>\n  </numa>\n  \x3c!-- \u5176\u4ed6\u5185\u5bb9 --\x3e\n</cpu>\n")),(0,i.kt)("h2",{id:"console-\u6ca1\u6709\u7ec8\u7aef"},"console \u6ca1\u6709\u7ec8\u7aef"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u5b9a\u4e49\u6709 Serial")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<serial type='pty'>\n  <target port='0'/>\n</serial>\n<console type='pty'>\n  <target type='serial' port='0'/>\n</console>\n")),(0,i.kt)("p",null,"\u5982\u679c\u8fd8\u662f\u6ca1\u6709\uff0c\u5219\u5c1d\u8bd5\u6dfb\u52a0 kernel \u53c2\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"console=tty0 console=ttyS0\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"console=ttyS0,19200 earlyprint=serial,ttyS0,19200\n")),(0,i.kt)("h2",{id:"guest-cpu-doesnt-match-specification-missing-features-spec-ctrlstibpssbd"},"guest CPU doesn't match specification: missing features: spec-ctrl,stibp,ssbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.berrange.com/posts/2018/06/29/cpu-model-configuration-for-qemu-kvm-on-x86-hosts/"},"https://www.berrange.com/posts/2018/06/29/cpu-model-configuration-for-qemu-kvm-on-x86-hosts/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tree/arch/x86/include/asm/cpufeatures.h"},"https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tree/arch/x86/include/asm/cpufeatures.h")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/43539/what-do-the-flags-in-proc-cpuinfo-mean"},"https://unix.stackexchange.com/questions/43539/what-do-the-flags-in-proc-cpuinfo-mean"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u6700\u7b80\u5355\u7684\u4fee\u590d\u65b9\u5f0f\u662f\u4f7f\u7528\u4e3b\u673a\u7684\u6a21\u578b --\x3e\n<cpu mode='host-model'/>\n")),(0,i.kt)("cpu",{mode:"host-model"},(0,i.kt)("model",{fallback:"forbid"},"core2duo")),(0,i.kt)("cpu",{mode:"host-model",check:"partial"},(0,i.kt)("model",{fallback:"forbid"},"IvyBridge-IBRS"),(0,i.kt)("vendor",null,"Intel"),(0,i.kt)("feature",{policy:"require",name:"ss"}),(0,i.kt)("feature",{policy:"require",name:"pcid"}),(0,i.kt)("feature",{policy:"require",name:"hypervisor"}),(0,i.kt)("feature",{policy:"require",name:"arat"}),(0,i.kt)("feature",{policy:"require",name:"tsc_adjust"}),(0,i.kt)("feature",{policy:"require",name:"umip"}),(0,i.kt)("feature",{policy:"require",name:"xsaveopt"}),(0,i.kt)("feature",{policy:"require",name:"pdpe1gb"}),(0,i.kt)("feature",{policy:"require",name:"stibp"}),(0,i.kt)("feature",{policy:"require",name:"ssbd"})),(0,i.kt)("h2",{id:"\u83b7\u53d6\u4e3b\u673a-ip"},"\u83b7\u53d6\u4e3b\u673a IP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3b\u673a\u540d\u5b57\nHOSTNAME=base\nMAC=$(virsh domiflist $HOSTNAME | awk \u2018{ print $5 }\u2019 | tail -2 | head -1)\narp -a | grep $MAC | awk '{ print $2 }' | sed \u2018s/[()]//g\u2019\n")),(0,i.kt)("h2",{id:"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879"},"\u514b\u9686\u4e3b\u673a\u7684\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6301\u4e45\u5316\u7684\u7f51\u5361\u4fe1\u606f - alpine \u9ed8\u8ba4\u6ca1\u6709\nrm -f /etc/udev/rules.d/70-persistent-net.rules\n\n# \u5220\u9664 ssh \u7684 host id\nrm -rf /etc/ssh/ssh_host_*\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/cloning_virtual_machines"},"CLONING VIRTUAL MACHINES"))),(0,i.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,i.kt)("h3",{id:"\u9ed8\u8ba4\u7f51\u7edc"},"\u9ed8\u8ba4\u7f51\u7edc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>default</name>\n  <uuid/>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name='virbr0' stp='on' delay='0'/>\n  <mac/>\n  <ip address='192.168.122.1' netmask='255.255.255.0'>\n    <dhcp>\n      \x3c!-- DHCP \u8303\u56f4 --\x3e\n      <range start='192.168.122.2' end='192.168.122.254'/>\n      \x3c!-- \u9759\u6001 IP --\x3e\n      \x3c!-- <host mac='52:54:00:70:d9:ee' name='myhost' ip='192.168.122.10'/> --\x3e\n    </dhcp>\n  </ip>\n</network>\n")),(0,i.kt)("h3",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"connections - \u5f53\u524d\u8fde\u63a5\u6570 \u5728\u8fd0\u884c\u4e2d\u7684\u7f51\u7edc\u770b\u5f97\u5230"),(0,i.kt)("li",{parentName:"ul"},"libvirt \u4f1a\u7ef4\u62a4\u4e00\u4e2a dnsmasq \u5b9e\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<network ipv6='yes' trustGuestRxFilters='no' connections='10'>\n  \x3c!-- \u57fa\u672c\u5143\u6570\u636e --\x3e\n  <name>default</name>\n  <uuid>3e3fce45-4f53-4fa7-bb32-11f34168b82b</uuid>\n  <metadata>\n    <app1:foo xmlns:app1=\"http://app1.org/app1/\">..</app1:foo>\n    <app2:bar xmlns:app2=\"http://app1.org/app2/\">..</app2:bar>\n  </metadata>\n  \x3c!-- \u8fde\u63a5\u6027\u914d\u7f6e --\x3e\n  <mtu size=\"9000\"/>\n  \x3c!-- QoS --\x3e\n  <bandwidth>\n    <inbound floor='500' average='1000' peak='5000' burst='5120'/>\n    <outbound average='128' peak='256' burst='256'/>\n  </bandwidth>\n  \x3c!-- \u9759\u6001\u8def\u7531 --\x3e\n  <ip address=\"192.168.122.1\" netmask=\"255.255.255.0\">\n    <dhcp>\n      <range start=\"192.168.122.128\" end=\"192.168.122.254\"/>\n      <host mac=\"00:16:3e:77:e2:ed\" name=\"foo.example.com\" ip=\"192.168.122.10\"/>\n    </dhcp>\n    \x3c!-- tftp --\x3e\n  </ip>\n  <route address=\"192.168.222.0\" prefix=\"24\" gateway=\"192.168.122.2\"/>\n  \x3c!-- \u5730\u5740 - \u53ea\u652f\u6301\u9694\u79bb \u5373 \u975e forward --\x3e\n  \x3c!-- \u6865\u63a5\u7f51\u5361\u8bbe\u5907\u7684 MAC --\x3e\n  <mac address='00:16:3E:5D:C7:9E'/>\n  <domain name=\"example.com\"/>\n  \x3c!-- enable \u9ed8\u8ba4\u5f00\u542f --\x3e\n  \x3c!-- forwardPlainNames \u5982\u679c\u5173\u95ed\u5219\u4e0d\u4f1a\u5904\u7406\u4e0d\u5e26 . \u7684\u540d\u5b57 --\x3e\n  <dns enable='yes' forwardPlainNames='yes'>\n    <txt name=\"example\" value=\"example value\"/>\n    <forwarder addr=\"8.8.8.8\"/>\n    <forwarder domain='example.com' addr=\"8.8.4.4\"/>\n    <forwarder domain='www.example.com'/>\n    <srv service='name' protocol='tcp' domain='test-domain-name' target='.'\n      port='1024' priority='10' weight='10'/>\n    <host ip='192.168.122.2'>\n      <hostname>myhost</hostname>\n      <hostname>myhostalias</hostname>\n    </host>\n  </dns>\n  \x3c!-- \u81ea\u5b9a\u4e49 dnsmasq \u5c5e\u6027 --\x3e\n  <dnsmasq:options>\n    <dnsmasq:option value=\"foo=bar\"/>\n    <dnsmasq:option value=\"cname=*.foo.example.com,master.example.com\"/>\n  </dnsmasq:options>\n</network>\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc"},"\u4f7f\u7528\u73b0\u6709\u5bbf\u4e3b\u673a\u6865\u63a5\u7f51\u7edc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<network>\n  <name>host-bridge</name>\n  <forward mode="bridge"/>\n  <bridge name="br0"/>\n</network>\n')),(0,i.kt)("h3",{id:"\u4f7f\u7528-macvtap"},"\u4f7f\u7528 macvtap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u6865\u63a5\uff0c\u4f46\u4e0d\u9700\u8981\u4e3b\u673a\u5b58\u5728\u6865\u63a5\u7f51\u5361"),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u8be5\u7f51\u5361\u4e0e\u865a\u62df\u673a\u4e0d\u4e92\u901a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<network>\n  <name>direct-macvtap</name>\n  <forward mode="bridge">\n    <interface dev="eth0"/>\n    <interface dev="eth1"/>\n  </forward>\n</network>\n')),(0,i.kt)("h3",{id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361"},"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>host-passthrough</name>\n  \x3c!-- \u8bbe\u5907\u6c60 --\x3e\n  <forward mode='passthrough'>\n    <interface dev='eth10'/>\n    <interface dev='eth11'/>\n    <interface dev='eth12'/>\n    <interface dev='eth13'/>\n    <interface dev='eth14'/>\n  </forward>\n</network>\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361"},"\u4f7f\u7528\u4e3b\u673a\u7f51\u5361\u4e0b\u6302\u8f7d\u7684\u865a\u62df\u7f51\u5361"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>host-passthrough-vnet</name>\n  <forward mode='passthrough'>\n    <pf dev='eth0'/>\n  </forward>\n</network>\n")),(0,i.kt)("h2",{id:"\u57df"},"\u57df"),(0,i.kt)("h3",{id:"\u663e\u5b58\u8c03\u6574"},"\u663e\u5b58\u8c03\u6574"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kvm \u53ef\u4ee5\u4f7f\u7528 cirrus \u505a\u66f4\u597d\u7684\u663e\u793a"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u663e\u5b58\u5927\u5c0f - \u8fc7\u5c0f\u4f1a\u5bfc\u81f4\u663e\u793a\u51fa\u95ee\u9898")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<video>\n  <model type='cirrus' vram='9216' heads='1'/>\n  <address type='pci' domain='0x0000' bus='0x00' slot='0x02' function='0x0'/>\n</video>\n")),(0,i.kt)("h3",{id:"\u52a8\u6001\u5185\u5b58"},"\u52a8\u6001\u5185\u5b58"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<maxMemory slots='16' unit='GiB'>16</maxMemory>\n\x3c!-- memory \u548c currentMemory \u53c2\u6570\u53ef\u9009 --\x3e\n\x3c!-- <memory unit='GiB'>8</memory> --\x3e\n\x3c!-- \u521d\u59cb\u5185\u5b58 --\x3e\n\x3c!-- <currentMemory unit='GiB'>2</currentMemory> --\x3e\n\x3c!-- \u70ed\u63d2\u62d4\u9700\u8981 numa --\x3e\n<cpu>\n  <numa>\n    <cell id='0' cpus='0-2' memory='1' unit='GiB'/>\n  </numa>\n</cpu>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@juergen_thomann/558f1c635972"},"Memory hotplug with Qemu/KVM and libvirt"))),(0,i.kt)("h2",{id:"memory-ballooning"},"memory ballooning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Projects/auto-ballooning"},"https://www.linux-kvm.org/page/Projects/auto-ballooning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-device virtio-balloon,automatic=true")),(0,i.kt)("li",{parentName:"ul"},"deflate-on-oom=on"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://libvirt.org/formatdomain.html#elementsMemBalloon"},"https://libvirt.org/formatdomain.html#elementsMemBalloon")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6dfb\u52a0"),(0,i.kt)("li",{parentName:"ul"},"When you use KVM and want to overcommit memory you can try to enable \u201ckernel same-page merging\u201d (KSM) in the linux kernel on the hypervisor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://packages.debian.org/stretch/ksmtuned"},"https://packages.debian.org/stretch/ksmtuned"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<memballoon model='virtio' autodeflate='on'>\n")))}c.isMDXComponent=!0}}]);