"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92881],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),u=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,v=d["".concat(m,".").concat(c)]||d[c]||p[c]||o;return t?a.createElement(v,l(l({ref:n},s),{},{components:t})):a.createElement(v,l({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14036:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"VirtualBox"},m=void 0,u={unversionedId:"ops/admin/vbox",id:"ops/admin/vbox",title:"VirtualBox",description:"- \u78c1\u76d8\u7c7b\u578b",source:"@site/notes/ops/admin/vbox.md",sourceDirName:"ops/admin",slug:"/ops/admin/vbox",permalink:"/notes/ops/admin/vbox",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/admin/vbox.md",tags:[],version:"current",frontMatter:{title:"VirtualBox"},sidebar:"docs",previous:{title:"Tmux",permalink:"/notes/ops/admin/tmux"},next:{title:"\u57fa\u7840\u8bbe\u65bd",permalink:"/notes/ops/infra/"}},s=[{value:"\u6dfb\u52a0 USB \u8bbe\u5907",id:"\u6dfb\u52a0-usb-\u8bbe\u5907",children:[],level:3},{value:"\u547d\u4ee4\u884c\u521b\u5efa\u865a\u62df\u673a",id:"\u547d\u4ee4\u884c\u521b\u5efa\u865a\u62df\u673a",children:[],level:3},{value:"Vagrant",id:"vagrant",children:[],level:2},{value:"Vagrantfile",id:"vagrantfile",children:[{value:"\u6dfb\u52a0\u989d\u5916\u78c1\u76d8\u548c\u5206\u533a",id:"\u6dfb\u52a0\u989d\u5916\u78c1\u76d8\u548c\u5206\u533a",children:[{value:"\u78c1\u76d8\u63a7\u5236",id:"\u78c1\u76d8\u63a7\u5236",children:[],level:4}],level:3}],level:2},{value:"Vagrant Tips",id:"vagrant-tips",children:[],level:2},{value:"FAQ",id:"faq",children:[{value:"\u627e\u4e0d\u5230 64bit \u7684\u865a\u62df",id:"\u627e\u4e0d\u5230-64bit-\u7684\u865a\u62df",children:[],level:3},{value:"VBoxManage: error: Could not rename the directory",id:"vboxmanage-error-could-not-rename-the-directory",children:[],level:3},{value:"Vagrant \u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86\u5927\u91cf\u6587\u4ef6",id:"vagrant-\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86\u5927\u91cf\u6587\u4ef6",children:[],level:3}],level:2},{value:"Windows \u4e0b\u5f00\u673a\u542f\u52a8",id:"windows-\u4e0b\u5f00\u673a\u542f\u52a8",children:[],level:2}],p={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u78c1\u76d8\u7c7b\u578b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"VDI",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"vbox \u81ea\u5df1\u7684\u78c1\u76d8\u683c\u5f0f"))),(0,o.kt)("li",{parentName:"ul"},"VMDK",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6700\u5148\u7531 vm \u63d0\u51fa,\u5927\u591a\u865a\u62df\u73af\u5883\u90fd\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u5212\u5206\u4e3a 2G \u5c0f\u6587\u4ef6\u529f\u80fd"))),(0,o.kt)("li",{parentName:"ul"},"VHD",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5728 Windows \u4e2d\u4f7f\u7528"),(0,o.kt)("li",{parentName:"ul"},"HyperV \u9ed8\u8ba4\u78c1\u76d8\u7c7b\u578b"))),(0,o.kt)("li",{parentName:"ul"},"VHDX",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/ticket/12616"},"#12616")),(0,o.kt)("li",{parentName:"ul"},"\u6682\u65f6\u53ea\u80fd\u53ea\u8bfb"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8f6c\u6362\u4e3a\u5176\u4ed6\u683c\u5f0f\u518d\u6302\u8f7d ",(0,o.kt)("inlineCode",{parentName:"li"},"VBoxManage clonemedium disk <input VHDX> <output image>")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/ticket/819"},"vboxvfs seems to have problems with mmapped access to files => retry with 3.1.4"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"vbox \u6620\u5c04\u7684\u76ee\u5f55\u4e0d\u80fd\u505a mmap"),(0,o.kt)("li",{parentName:"ul"},"\u5bfc\u81f4 boot2docker \u5f88\u955c\u50cf\u591a\u4e0d\u80fd\u7528, mongodb, realmdb, ipfs \u7b49")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Download and install vbox and extension pack\n# https://www.virtualbox.org/wiki/Linux_Downloads\nVBoxManage extpack install  --replace FILE_NAME\n\n# \u78c1\u76d8\u683c\u5f0f\u8f6c\u6362\nVBoxManage clonemedium disk <input VHDX> <output image>\n\n# \u5bfc\u51fa\u78c1\u76d8\nVBoxManage clonehd --format RAW debian.vdi debian.img\n#\nVBoxManage internalcommands converttoraw Ubuntu.vdi Ubuntu.raw\n")),(0,o.kt)("h3",{id:"\u6dfb\u52a0-usb-\u8bbe\u5907"},"\u6dfb\u52a0 USB \u8bbe\u5907"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528 USB \u8bbe\u5907\u63a7\u5236\u5668,\u9700\u8981\u865a\u62df\u673a\u672a\u8fd0\u884c\n# ohci -> usb1.0, echi -> usb2.0 ,xchi -> usb3.0\n# echi \u548c xchi \u9700\u8981\u5b89\u88c5 ext packet\nVBoxManage modifyvm <\u4e3b\u673a\u540d> --usb on --usbxhci on\n\n# \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\nVBoxManage list runningvms\n# \u67e5\u770b\u4e3b\u673a\u4e0a\u7684 USB \u8bbe\u5907\nVBoxManage list usbhost\n# \u6302\u8f7d USB \u8bbe\u5907\u865a\u62df\u673a\nVBoxManage controlvm <\u4e3b\u673a\u540d> usbattach <\u8bbe\u5907 UUID>\n# \u786e\u8ba4\u6302\u8f7d\u6210\u529f\nVBoxManage showvminfo <\u4e3b\u673a\u540d>\n# \u79fb\u9664 USB \u8bbe\u5907\nVBoxManage controlvm <\u4e3b\u673a\u540d> usbdetach <\u8bbe\u5907 UUID>\n")),(0,o.kt)("h3",{id:"\u547d\u4ee4\u884c\u521b\u5efa\u865a\u62df\u673a"},"\u547d\u4ee4\u884c\u521b\u5efa\u865a\u62df\u673a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash -ex\n## \u865a\u62df\u673a\u540d\u5b57\nvmname="Win7ult"\n\n## \u865a\u62df\u673a\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u7cfb\u7edf\u955c\u50cf\n## vboxmanage list ostypes \u67e5\u770b\u652f\u6301\u7684\u7cfb\u7edf, \u4f7f\u7528 ID \u4f5c\u4e3a ostype\nostype="Windows7_64"\nisofile="/data/vm/vbox/iso_files/Windows7_UltimateNL_32bit_SP1.iso"\n\n## \u5185\u5b58\u548c\u663e\u5b58\nmemory="2048"\nvram="32"\n\n## \u4e91\u76d8\u7a7a\u95f4\nhddsize="8192"\n\n## VRDP \u7aef\u53e3\u8303\u56f4\nvrdeport="5041-5049"\n\n## \u58f0\u5361\n#audio="alsa --audiocontroller ac97"\naudio="none"\n\n#######################################################################\n### \u521b\u5efa\u865a\u62df\u673a\n#######################################################################\n# \u5b9a\u4e49\u78c1\u76d8\u6587\u4ef6\u8def\u5f84\nhddfile=/data/vm/vbox/vbox_guests/${vmname}/${vmname}.vdi\nclear\n\n# \u521b\u5efa\u865a\u62df\u673a\nvboxmanage createvm --name $vmname --ostype $ostype --register\n\n# \u8bbe\u7f6e\u5185\u5b58\u663e\u5b58\u58f0\u5361\u548c vdre \u7684\u7aef\u53e3\u8303\u56f4\nvboxmanage modifyvm $vmname --memory $memory --vram $vram --acpi on --ioapic on --cpus 1 --cpuexecutioncap 75 --rtcuseutc on --cpuhotplug on --pae on --hwvirtex on\nvboxmanage modifyvm $vmname --nic1 bridged --bridgeadapter1 eth0 --cableconnected1 on\nvboxmanage modifyvm $vmname --audio $audio\nvboxmanage modifyvm $vmname --vrde on --vrdeport $vrdeport --vrdeauthtype null\n\n\n# \u521b\u5efa HDD \u548c SATA \u63a7\u5236\u5668\nvboxmanage createhd --filename $hddfile --size $hddsize\nvboxmanage storagectl $vmname --name "SATA controller" --add sata\nvboxmanage storageattach $vmname --storagectl "SATA controller" --port 0 --device 0 --type hdd --medium $hddfile\n\n# \u521b\u5efa IDE \u63a7\u5236\u5668\u5e76\u6dfb\u52a0 DVD\nvboxmanage storagectl $vmname --name "IDE controller" --add ide\nvboxmanage storageattach $vmname --storagectl "IDE controller"  --port 0 --device 0 --type dvddrive --medium $isofile\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u865a\u62df\u673a\nvboxmanage startvm $vmname --type headless\n# \u67e5\u770b RDP \u7684\u4fe1\u606f\nvboxmanage showvminfo $vmname | grep VRDE:\n# \u901a\u8fc7 RDP \u8fdc\u7a0b\u8fde\u63a5\n\nvboxmanage list vms\nvboxmanage list runningvms\nvboxmanage showvminfo $vmname\n\n# \u67e5\u770b VRDE \u7aef\u53e3\u4ee5\u4fbf\u8fdc\u7a0b\u8fde\u63a5\nvboxmanage showvminfo $vmname |grep VRDE:\n\n# \u91cd\u542f\nvboxmanage controlvm $vmname reset\n# \u65ad\u7535\nvboxmanage controlvm $vmname poweroff\n# \u79fb\u9664\u865a\u62df\u673a\nvboxmanage unregistervm $vmname\n# \u79fb\u9664\u5e76\u5220\u9664\u76f8\u5173\u6587\u4ef6\nvboxmanage unregistervm $vmname --delete\n")),(0,o.kt)("h2",{id:"vagrant"},"Vagrant"),(0,o.kt)("h2",{id:"vagrantfile"},"Vagrantfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'Vagrant.configure(2) do |config|\n  # \u914d\u7f6e\u53ef\u53c2\u8003https://docs.vagrantup.com.\n\n  # \u914d\u7f6e\u4f7f\u7528\u7684\u865a\u62df\u673a\n  config.vm.box = "ubuntu/trusty64"\n  # \u662f\u5426\u9700\u8981\u81ea\u52a8\u66f4\u65b0\u955c\u50cf,\u5efa\u8bae\u5173\u95ed,\u56e0\u4e3a\u56fd\u5185\u7f51\u7edc\u8f83\u5dee,\u5f71\u54cd\u542f\u52a8\u901f\u5ea6\n  config.vm.box_check_update = false\n  # \u914d\u7f6e\u5171\u4eab\u6587\u4ef6\u5939,\u4ee5\u4e0b\u914d\u7f6e\u4f1a\u5c06\u4e3b\u673a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 data \u5171\u4eab\u5230\u865a\u62df\u673a\u4e2d\u7684 /host\n  config.vm.synced_folder "./data", "/host"\n  # \u914d\u7f6e\u5916\u90e8\u7f51\u7edc\u5730\u5740,\u5c40\u57df\u7f51\u53ef\u8bbf\u95ee\n  config.vm.network "public_network", ip: "10.4.231.186"\n  # \u914d\u7f6e\u5185\u90e8\u7f51\u7edc\u5730\u5740,\u53ea\u6709\u4e3b\u673a\u80fd\u8bbf\u95ee\n  config.vm.network "private_network", ip: "192.168.33.9"\n  # \u7aef\u53e3\u8f6c\u53d1,\u4ee5\u4e0b\u914d\u7f6e\u4f1a\u5c06\u865a\u62df\u673a\u7684 8080 \u7aef\u53e3\u8f6c\u53d1\u5230\u4e3b\u673a\u7684 80 \u7aef\u53e3\n  config.vm.network "forwarded_port", guest: 80, host: 8080\n\n  # \u5bf9\u4e0d\u540c\u7684\u8fd0\u884c\u73af\u5883\u8fdb\u884c\u914d\u7f6e\n  config.vm.provider "virtualbox" do |vb|\n    # virtualbox \u76f8\u5173\u914d\u7f6e\u53ef\u53c2\u8003 https://www.vagrantup.com/docs/virtualbox/configuration.html\n    # \u5728\u542f\u52a8\u65f6\u7981\u7528 VirtualBox \u56fe\u5f62\u754c\u9762\n    vb.gui = false\n\n    # \u6307\u5b9a\u865a\u62df\u673a\u4f7f\u7528\u7684\u5185\u5b58\u91cf\n    vb.memory = "1024"\n    # \u6307\u5b9a\u865a\u62df\u673a\u4f7f\u7528\u7684\u6838\u6570\n    vb.cpus = 2\n  end\n\n  # \u914d\u7f6e\u76d1\u542c,\u5728\u865a\u62df\u673a\u542f\u52a8\u540e\u6267\u884c\n  config.vm.provision "shell", inline: <<-SHELL\n    echo Cool stuff\n    date >> /host/hello.txt\n  SHELL\n\n  # \u53ef\u914d\u7f6e\u591a\u4e2a\u4e3b\u673a,\u53ef\u901a\u8fc7 vagrant up \u4e3b\u673a\u540d, vagrant ssh \u4e3b\u673a\u540d \u64cd\u4f5c\u5355\u4e2a\u4e3b\u673a\n  config.vm.define "db-1" do |node|\n    node.vm.network "private_network", ip: "192.168.33.10"\n    node.vm.provision "shell",\n      inline: "echo hello from node db-1"\n  end\nend\n')),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u989d\u5916\u78c1\u76d8\u548c\u5206\u533a"},"\u6dfb\u52a0\u989d\u5916\u78c1\u76d8\u548c\u5206\u533a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"Vagrant.configure(2) do |config|\n\n  config.vm.box = \"ubuntu/trusty64\"\n  config.vm.box_check_update = false\n  config.vm.network \"private_network\", ip: \"192.168.33.9\"\n  config.vm.provider \"virtualbox\" do |vb|\n    vb.gui = false\n    vb.memory = \"1024\"\n    # machine name in virtualbox\n    vb.name = \"try_disk\"\n\n    file_to_disk = File.realpath( \".\" ).to_s + \"/disk.vdi\"\n\n    if ARGV[0] == \"up\" && ! File.exist?(file_to_disk)\n       vb.customize [\n            'createhd',\n            '--filename', file_to_disk,\n            '--format', 'VDI',\n            '--size', 30 * 1024 # 30 GB\n            ]\n       vb.customize [\n            'storageattach', :id,\n            # The name may vary, found by\n            # VBoxManage showvminfo try_disk|grep 'Storage Controller Name'|\n            '--storagectl', 'SATAController',\n            '--port', 1, '--device', 0,\n            '--type', 'hdd', '--medium',\n            file_to_disk\n            ]\n    end\n  end\n\n  # Tow partition in one disk 10G,20G\n  config.vm.provision \"shell\", inline: <<-SHELL\nset -e\nset -x\n\nif [ -f /etc/provision_env_disk_added_date ]\nthen\n   echo \"Provision runtime already done.\"\n   exit 0\nfi\n\n\nfdisk -u /dev/sdb <<EOF\nn\np\n1\n\n+10G\nn\np\n2\n\n\nw\nEOF\n\nmkfs.ext4 /dev/sdb1\nmkfs.ext4 /dev/sdb2\nmkdir -p /{data,extra}\necho '/dev/sdb1 /data ext4 defaults 0 0'>> /etc/fstab\necho '/dev/sdb2 /extra ext4 defaults 0 0'>> /etc/fstab\nmount -a\n\ndate > /etc/provision_env_disk_added_date\n  SHELL\n\n  config.vm.provision \"shell\", inline: <<-SHELL\n    echo Well done\n  SHELL\nend\n")),(0,o.kt)("h4",{id:"\u78c1\u76d8\u63a7\u5236"},"\u78c1\u76d8\u63a7\u5236"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d\u78c1\u76d8\nlsblk -io KNAME,TYPE,SIZE,MODEL\n# \u521b\u5efa\u78c1\u76d8\nVBoxManage createhd --filename disk.vid --format VDI --size 1000\n# \u6dfb\u52a0\u5a92\u4ecb\nVBoxManage storageattach try_disk --storagectl SATA --port 1 --device 0 --type hdd --medium `pwd`/disk.vid\n\n# \u5728\u65b0\u78c1\u76d8\u4e0a\u521b\u5efa\u5355\u4e2a\u5206\u533a\nsudo fdisk -u /dev/sdb <<EOF\nn\np\n1\n\n\nt\n8e\nw\nEOF\n# \u4f7f\u7528 ext4 \u78c1\u76d8\nmkfs.ext4 /dev/sdb1\n# \u6302\u8f7d\u78c1\u76d8\nmount -t ext4 /dev/sdb1 /data\n# \u5224\u65ad\u6302\u8f7d\u6210\u529f\ndf  -h\n")),(0,o.kt)("h2",{id:"vagrant-tips"},"Vagrant Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u540e\u8fd0\u884c\u547d\u4ee4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'config.vm.provision "shell", inline: "echo Hello"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u540c\u65f6\u542f\u52a8\u591a\u4e2a\u865a\u62df\u673a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'(1..3).each do |i|\n  config.vm.define "node-#{i}" do |node|\n    node.vm.provision "shell",\n      inline: "echo hello from node #{i}"\n  end\nend\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ea\u542f\u52a8\u914d\u7f6e\u4e2d\u7684\u6307\u5b9a\u865a\u62df\u673a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant up node-1\nvagrant up /node-(1|2)/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f20\u9012\u73af\u5883\u53d8\u91cf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'ENV["LC_ALL"] = "en_US.UTF-8"\n\nVagrant.configure("2") do |config|\n  # ...\nend\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'# \u7aef\u53e3\u8f6c\u53d1\nconfig.vm.network "forwarded_port", guest: 80, host: 8080\n# \u6307\u5b9a\u516c\u7f51\u5730\u5740\nconfig.vm.network "public_network", ip: "192.168.0.17"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5171\u4eab\u76ee\u5f55")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'# create \u81ea\u52a8\u521b\u5efa\u4e3b\u673a\u4e2d\u7684\u76ee\u5f55\n# disabled \u7981\u7528\nconfig.vm.synced_folder "src/", "/srv/website", create: true, owner: "root", group: "root"\n# \u7981\u7528\u9ed8\u8ba4\u6302\u8f7d\u76ee\u5f55\nconfig.vm.synced_folder \'.\', \'/vagrant\', disabled: true\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5b89\u88c5 box")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant box add laravel/homestead path/to/your/box/file.box\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u7528 BOX")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centos/7\nubuntu/trusty64\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u7528\u547d\u4ee4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant up # \u542f\u52a8\nvagrant halt # \u5173\u673a\nvagrant destroy # \u6e05\u9664\u865a\u62df\u673a\nvagrant status # \u67e5\u770b\u8fd0\u884c\u72b6\u6001\nvagrant suspend # \u4f7f\u673a\u5668\u6302\u8d77\nvagrant ssh # SSH \u8fdb\u5165\u673a\u5668\nvagrant reload # \u91cd\u542f\u673a\u5668\nvagrant global-status # \u67e5\u770b\u6240\u6709\u865a\u62df\u673a\u7684\u8fd0\u884c\u72b6\u6001,\u4e0d\u9700\u8981\u5f53\u524d\u76ee\u5f55\u6709 Vagrantfile\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u7528\u63d2\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"landrush"),(0,o.kt)("li",{parentName:"ul"},"vagrant-vbguest"),(0,o.kt)("li",{parentName:"ul"},"vagrant-cachier"),(0,o.kt)("li",{parentName:"ul"},"vagrant-omnibus"),(0,o.kt)("li",{parentName:"ul"},"vagrant-proxyconf"),(0,o.kt)("li",{parentName:"ul"},"vagrant-share"))),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u989d\u5916\u78c1\u76d8\u5206\u533a\u548c\u4fee\u6539\u78c1\u76d8\u5927\u5c0f\u548c\u901a\u8fc7\u5b9a\u5236\u5316\u53c2\u6570\u5b9e\u73b0,\u5177\u4f53\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mitchellh/vagrant/issues/2339#issuecomment-33064917"},"\u8fd9\u91cc")),(0,o.kt)("li",{parentName:"ul"},"\u641c\u7d22 BOX",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.vagrantbox.es/"},"vagrantbox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://atlas.hashicorp.com/boxes/search"},"boxes/search")))),(0,o.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u7f51\u7ad9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"Vagrantup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/downloads.html"},"\u8f6f\u4ef6\u4e0b\u8f7d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/docs/"},"\u5b98\u65b9\u6587\u4ef6\u6587\u6863")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/docs/vagrantfile/"},"\u914d\u7f6e\u6587\u4ef6\u6587\u6863"))))),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"\u627e\u4e0d\u5230-64bit-\u7684\u865a\u62df"},"\u627e\u4e0d\u5230 64bit \u7684\u865a\u62df"),(0,o.kt)("p",null,"\u53ef\u80fd\u7531\u4e8e CPU \u4e0d\u652f\u6301\u786c\u4ef6\u865a\u62df\u5316\u6280\u672f(Intel VT-x \u6216 AMD-v),\u6216\u8005\u88ab\u5176\u4ed6\u7a0b\u5e8f\u5360\u7528,\u4f8b\u5982\u88c5\u4e86 HyperV."),(0,o.kt)("h3",{id:"vboxmanage-error-could-not-rename-the-directory"},"VBoxManage: error: Could not rename the directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant destroy -f\nrm ~/VirtualBox\\ VMs/YOUR_NAME_HERE\n")),(0,o.kt)("h3",{id:"vagrant-\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86\u5927\u91cf\u6587\u4ef6"},"Vagrant \u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86\u5927\u91cf\u6587\u4ef6"),(0,o.kt)("p",null,"\u8fd9\u662f\u7531\u4e8e\u4e34\u65f6\u76ee\u5f55\u5f02\u5e38\u5bfc\u81f4\u7684,\u53ef\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mitchellh/vagrant/issues/3493"},"#3493")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mitchellh/vagrant/issues/3514"},"#3514")),(0,o.kt)("li",{parentName:"ul"},"Vagrant \u5224\u65ad\u8be5\u76ee\u5f55\u7684",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ruby/ruby/blob/2254fc650b681c2582f25aa0d2be2cc8aba3cb8e/lib/tmpdir.rb#L25"},"\u4ee3\u7801"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u5c5e\u6027\u6b63\u786e\nchmod 1777 /tmp\n# \u6216\u5c1d\u8bd5 \u9700\u8c28\u614e!\nchmod +s /tmp\n")),(0,o.kt)("h2",{id:"windows-\u4e0b\u5f00\u673a\u542f\u52a8"},"Windows \u4e0b\u5f00\u673a\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-batch"},'# Win 10 \u7684\u5f00\u542f\u542f\u52a8\u76ee\u5f55\u662f\u9690\u85cf\u7684\nshell:startup\n# \u6216\u8005\u76f4\u63a5\u6253\u5f00\nstart C:\\Users\\$USER\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\n# \u521b\u5efa\u7528\u4e8e\u542f\u52a8\u7684 bat\n# "C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" startvm "NameOfYourVM" --type "headless"\n')),(0,o.kt)("p",null,"\u4f5c\u4e3a\u670d\u52a1\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://stackoverflow.com/a/19017826/1870054"},"http://stackoverflow.com/a/19017826/1870054"))))}d.isMDXComponent=!0}}]);