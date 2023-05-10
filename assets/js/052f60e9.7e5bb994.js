"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88388],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13281:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&u(e,a,t[a]);return e};const m={title:"macOS FAQ",tags:["FAQ"]},d="macOS \u5e38\u89c1\u95ee\u9898",k={unversionedId:"os/macos/macos-faq",id:"os/macos/macos-faq",title:"macOS FAQ",description:"Inside",source:"@site/../notes/os/macos/macos-faq.md",sourceDirName:"os/macos",slug:"/os/macos/faq",permalink:"/notes/os/macos/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/macos/macos-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1683689500,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"macOS FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"macOS Core Foundation",permalink:"/notes/os/macos/cf"},next:{title:"macOS FHS",permalink:"/notes/os/macos/fhs"}},h={},f=[{value:"Inside",id:"inside",level:2},{value:"Memory",id:"memory",level:2},{value:"AXIS AX88179 \u7f51\u5361\u7528\u4e0d\u4e86",id:"axis-ax88179-\u7f51\u5361\u7528\u4e0d\u4e86",level:2},{value:"staff &amp; wheel",id:"staff--wheel",level:2},{value:"\u672a\u8fdb\u5165\u4f11\u7720",id:"\u672a\u8fdb\u5165\u4f11\u7720",level:2},{value:"tuntap",id:"tuntap",level:2},{value:"\u7a97\u53e3\u53ea\u80fd\u770b\u5230\u8fb9\u7f18\u6ca1\u6709 Title \u5982\u4f55\u62d6\u52a8\uff1f",id:"\u7a97\u53e3\u53ea\u80fd\u770b\u5230\u8fb9\u7f18\u6ca1\u6709-title-\u5982\u4f55\u62d6\u52a8",level:2},{value:"cannot be opened because the developer cannot be verified",id:"cannot-be-opened-because-the-developer-cannot-be-verified",level:2},{value:"\u5237\u65b0 Finder",id:"\u5237\u65b0-finder",level:2},{value:"macOS vs Darwin",id:"macos-vs-darwin",level:2},{value:"\u8f7d\u5165\u66f4\u65b0\u5931\u8d25",id:"\u8f7d\u5165\u66f4\u65b0\u5931\u8d25",level:2},{value:"\u5236\u4f5c\u5b89\u88c5\u76d8",id:"\u5236\u4f5c\u5b89\u88c5\u76d8",level:2},{value:"Installer can&#39;t verified \u5b89\u88c5\u5668\u4e0d\u80fd\u88ab\u9a8c\u8bc1",id:"installer-cant-verified-\u5b89\u88c5\u5668\u4e0d\u80fd\u88ab\u9a8c\u8bc1",level:2},{value:"\u91cd\u7f6e\u6df7\u5408\u78c1\u76d8/Fusion Drive",id:"\u91cd\u7f6e\u6df7\u5408\u78c1\u76d8fusion-drive",level:2},{value:"SIP \u5f71\u54cd",id:"sip-\u5f71\u54cd",level:2},{value:"\u7f51\u7edc\u5b58\u50a8\u8bbe\u5907\u4e0d\u5199 DS_Store \u6587\u4ef6",id:"\u7f51\u7edc\u5b58\u50a8\u8bbe\u5907\u4e0d\u5199-ds_store-\u6587\u4ef6",level:2},{value:".DS_Store",id:"ds_store",level:2},{value:"interface \u6dfb\u52a0\u5730\u5740",id:"interface-\u6dfb\u52a0\u5730\u5740",level:2},{value:"QuickLookSatellite",id:"quicklooksatellite",level:2},{value:"syncpolicyd",id:"syncpolicyd",level:2},{value:"rtcreportingd",id:"rtcreportingd",level:2},{value:"qlgenerator - QuickLook Generator",id:"qlgenerator---quicklook-generator",level:2},{value:"Install qlgenerator",id:"install-qlgenerator",level:2},{value:"sysmond",id:"sysmond",level:2},{value:"Why ZSH",id:"why-zsh",level:2},{value:"installd",id:"installd",level:2},{value:"Mach-O universal binary",id:"mach-o-universal-binary",level:2},{value:"com.apple.MobileSoftwareUpdate.UpdateBrainService",id:"comapplemobilesoftwareupdateupdatebrainservice",level:2},{value:"otool",id:"otool",level:2},{value:"coreaudiod",id:"coreaudiod",level:2},{value:"bindfs",id:"bindfs",level:2},{value:"\u8f93\u5165\u6cd5\u5361\u987f",id:"\u8f93\u5165\u6cd5\u5361\u987f",level:2},{value:"Powerup Hours",id:"powerup-hours",level:2}],v={toc:f};function N(e){var t,a=e,{components:l}=a,u=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),u),r(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"macos-\u5e38\u89c1\u95ee\u9898"}),"macOS \u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h2",c({},{id:"inside"}),"Inside"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://gist.github.com/kconner/cff08fe3e0bb857ea33b47d965b3e19f"}),"https://gist.github.com/kconner/cff08fe3e0bb857ea33b47d965b3e19f"))),(0,n.kt)("h2",c({},{id:"memory"}),"Memory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory - \u865a\u62df\u5185\u5b58 - \u4ee3\u7801+\u6570\u636e+\u52a8\u6001\u5e93+\u5806\u6808 \u7b49"),(0,n.kt)("li",{parentName:"ul"},"Real Memory - \u5b9e\u9645\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"Real Private Memory - \u5806\u6808+\u5b57\u4f53\u7f13\u5b58+OpenGL \u7b49 - \u72ec\u7acb\u5360\u7528"),(0,n.kt)("li",{parentName:"ul"},"VM Compressed - \u538b\u7f29\u4e0d\u5e38\u7528\u865a\u62df\u5185\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"li"},'sudo nvram boot-args="vm_compressor=1"')))),(0,n.kt)("li",{parentName:"ul"},"Real Shared Memory - \u5171\u4eab\u5185\u5b58")),(0,n.kt)("h2",c({},{id:"axis-ax88179-\u7f51\u5361\u7528\u4e0d\u4e86"}),"AXIS AX88179 \u7f51\u5361\u7528\u4e0d\u4e86"),(0,n.kt)("p",null,"\u5230\u5b98\u7f51\u4e0b\u8f7d\u6700\u65b0\u9a71\u52a8 ",(0,n.kt)("a",c({parentName:"p"},{href:"https://asix.com.tw/en/product/USBEthernet/Super-SpeedUSBEthernet/AX88179"}),"https://asix.com.tw/en/product/USBEthernet/Super-SpeedUSBEthernet/AX88179")),(0,n.kt)("h2",c({},{id:"staff--wheel"}),"staff & wheel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"staff - \u4e00\u822c\u7528\u6237"),(0,n.kt)("li",{parentName:"ul"},"wheel - \u66f4\u9ad8\u6743\u9650\u7528\u6237",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"root \u5728\u8be5\u5206\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5 su"))),(0,n.kt)("li",{parentName:"ul"},"everyone"),(0,n.kt)("li",{parentName:"ul"},"localaccounts"),(0,n.kt)("li",{parentName:"ul"},"admin"),(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6 ","_","appserverusr ","_","appserveradm ","_","lpadmin com.apple.sharepoint.group.1 ","_","appstore ","_","lpoperator ","_","developer ","_","analyticsusers com.apple.access_ftp com.apple.access_screensharing com.apple.access_ssh com.apple.access_remote_ae"),(0,n.kt)("li",{parentName:"ul"},"staff \u548c wheel \u8d77\u6e90\u4e8e BSD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://superuser.com/a/191969/242730"}),"https://superuser.com/a/191969/242730")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.dictionary.com/browse/big-wheel"}),"big wheel"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"an influential or important person"),(0,n.kt)("li",{parentName:"ul"},"\u91cd\u8981\u4eba\u7269")))))),(0,n.kt)("h2",c({},{id:"\u672a\u8fdb\u5165\u4f11\u7720"}),"\u672a\u8fdb\u5165\u4f11\u7720"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728 Console.app \u4e2d\u641c\u7d22 ",(0,n.kt)("inlineCode",{parentName:"li"},"PreventUserIdleSystemSleep")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pmset -g")," \u786e\u8ba4\u5f53\u524d\u7684\u914d\u7f6e\u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"sleep \u662f\u5426\u6709 prevent \u4fe1\u606f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u963b\u788d\u7ebf\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sharingd"),(0,n.kt)("li",{parentName:"ul"},"backupd"),(0,n.kt)("li",{parentName:"ul"},"AddressBookSourceSync"))))))),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5f53\u524d\u7cfb\u7edf\u72b6\u6001\n# \u4e3b\u8981\u662f PreventUserIdleSystemSleep\npmset -g assertions\n\n# \u67e5\u770b\u72b6\u6001\u53d8\u66f4\u65e5\u5fd7\n# InternalPreventSleep \u548c PreventUserIdleSystemSleep\npmset -g assertionslog\n\n# \u67e5\u770b\u5524\u8d77\u539f\u56e0\nlog show --style syslog --start '2019-05-27 17:50:00' | grep \"Wake reason\"\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"\nShutdown the computer, wait 30 seconds, restart the computer.\n\nDisconnect all third-party peripherals.\nResetting your Mac\u2019s PRAM and NVRAM\nReset the System Management Controller (SMC)\nReset your Startup Disk and Sound preferences.\nStart the computer in Safe Mode. Test in safe mode to see if the problem persists, then restart normally.\nUse Apple Hardware Test to see if there is any hardware malfunction.\n\nRepair the disk by booting from the Recovery HD. Immediately after the chime hold down the Command and R keys until the Utility Menu appears. Choose Disk Utility and click on the Continue button. Select the indented (usually, Macintosh HD) volume entry from the side list. Click on the First Aid button in the toolbar. Wait for the Done button to appear. Quit Disk Utility and return to the Utility Menu. Restart the computer from the Apple Menu.\n\nRepair permissions on the Home folder: Resolve issues caused by changing the permissions of items in your home folder.\n\nreset NVRAM\nhttps://support.apple.com/en-us/HT204063\n\nOption, Command, P, and R. You can release the keys after about 20 seconds, during which your Mac might appear to restart.\n\nOn Mac computers that play a startup sound, you can release the keys after the second startup sound.\nOn Mac computers that have the Apple T2 Security Chip, you can release the keys after the Apple logo appears and disappears for the second time.\n\nhttps://support.apple.com/zh-cn/HT201295\n\n\u6709 T2 \u82af\u7247\u7684 Mac \u7b14\u8bb0\u672c\u7535\u8111\n\u5148\u5c1d\u8bd5\u4ee5\u4e0b\u64cd\u4f5c\uff1a\n\n\u9009\u53d6\u82f9\u679c\u83dc\u5355 >\u201c\u5173\u673a\u201d\u3002\n\u5728 Mac \u5173\u673a\u540e\uff0c\u6309\u4f4f\u7535\u6e90\u6309\u94ae 10 \u79d2\u949f\u3002\n\u677e\u5f00\u7535\u6e90\u6309\u94ae\uff0c\u7136\u540e\u7b49\u5f85\u51e0\u79d2\u949f\u3002\n\u518d\u6b21\u6309\u4e0b\u7535\u6e90\u6309\u94ae\u4ee5\u5f00\u542f Mac\u3002\n\u5982\u679c\u4e0a\u8ff0\u64cd\u4f5c\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a\n\n\u9009\u53d6\u82f9\u679c\u83dc\u5355 >\u201c\u5173\u673a\u201d\u3002\n\u5728 Mac \u5173\u673a\u540e\uff0c\u6309\u4f4f\u53f3 Shift \u952e\u3001\u5de6 Option \u952e\u548c\u5de6 Control \u952e 7 \u79d2\u949f\u3002\u7136\u540e\uff0c\u5728\u6309\u4f4f\u7535\u6e90\u6309\u94ae\u7684\u540c\u65f6\u7ee7\u7eed\u6309\u4f4f\u8fd9\u4e9b\u6309\u952e 7 \u79d2\u949f\u3002\n\u677e\u5f00\u6240\u6709\u4e09\u4e2a\u6309\u952e\u548c\u7535\u6e90\u6309\u94ae\uff0c\u7136\u540e\u7b49\u5f85\u51e0\u79d2\u949f\u3002\n\u518d\u6b21\u6309\u4e0b\u7535\u6e90\u6309\u94ae\u4ee5\u5f00\u542f Mac\u3002\n")),(0,n.kt)("h2",c({},{id:"tuntap"}),"tuntap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS \u652f\u6301 utun - \u7b49\u540c\u4e8e tun",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f46\u4e0d\u652f\u6301 tap"))),(0,n.kt)("li",{parentName:"ul"},"tuntap \u6269\u5c55 11.5 macOS BigSur \u540e\u5185\u6838\u6269\u5c55\u4e0d\u53ef\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.apple.com/support/kernel-extensions/"}),"Deprecated Kernel Extensions and System Extension Alternatives")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://tunnelblick.net/cTunTapConnections.html"}),"https://tunnelblick.net/cTunTapConnections.html")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/ntop/n2n/issues/773#issuecomment-1143051664"}),"https://github.com/ntop/n2n/issues/773#issuecomment-1143051664"))),(0,n.kt)("h2",c({},{id:"\u7a97\u53e3\u53ea\u80fd\u770b\u5230\u8fb9\u7f18\u6ca1\u6709-title-\u5982\u4f55\u62d6\u52a8"}),"\u7a97\u53e3\u53ea\u80fd\u770b\u5230\u8fb9\u7f18\u6ca1\u6709 Title \u5982\u4f55\u62d6\u52a8\uff1f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9f20\u6807\u653e\u5230\u8fb9\u7f18\uff0c\u53d8\u6210\u7bad\u5934"),(0,n.kt)("li",{parentName:"ul"},"\u6309\u4f4f Cmd \u5373\u53ef\u62d6\u52a8")),(0,n.kt)("h2",c({},{id:"cannot-be-opened-because-the-developer-cannot-be-verified"}),"cannot be opened because the developer cannot be verified"),(0,n.kt)("p",null,"\u4e0b\u8f7d\u7684\u6587\u4ef6\u65e0\u6cd5\u6267\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# xattr -r -d com.apple.quarantine <\u6587\u4ef6>\n# \u4f8b\u5982\nxattr -r -d com.apple.quarantine $HOME/Development/graalvm/\n")),(0,n.kt)("h2",c({},{id:"\u5237\u65b0-finder"}),"\u5237\u65b0 Finder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u6302\u8f7d smb \u7684\u65f6\u5019\u8fdc\u7a0b\u76ee\u5f55\u53d1\u751f\u53d8\u5316")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"osascript -e 'tell application \"Finder\" to tell front window to update every item'\n")),(0,n.kt)("h2",c({},{id:"macos-vs-darwin"}),"macOS vs Darwin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e73\u53f0"),(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u6846\u67b6\u548c\u670d\u52a1"),(0,n.kt)("li",{parentName:"ul"},"\u754c\u9762"),(0,n.kt)("li",{parentName:"ul"},"\u8f6f\u4ef6\u7a0b\u5e8f\u5305"))),(0,n.kt)("li",{parentName:"ul"},"Darwin",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8f6f\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"XUN",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u6838"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u7ba1\u7406"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",c({parentName:"li"},{href:"https://www.quora.com/Whats-the-difference-between-Mac-OS-X-Darwin-OS-and-a-popular-Linux-distribution-like-Ubuntu-What-can-be-done-on-Darwin"}),"What's the difference between Mac OS X, Darwin OS and a popular Linux distribution like Ubuntu? What can be done on Darwin?"))),(0,n.kt)("h2",c({},{id:"\u8f7d\u5165\u66f4\u65b0\u5931\u8d25"}),"\u8f7d\u5165\u66f4\u65b0\u5931\u8d25"),(0,n.kt)("p",null,"\u8fdb\u5165\u6062\u590d\u6a21\u5f0f\u5173\u95ed sip - System Integrity Protection"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"csrutil disable\n")),(0,n.kt)("p",null,"\u91cd\u542f, \u8fdb\u5165\u6062\u590d, \u5b89\u88c5\u5b8c\u6210\u540e\u91cd\u65b0\u542f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"csrutil enable\n")),(0,n.kt)("h2",c({},{id:"\u5236\u4f5c\u5b89\u88c5\u76d8"}),"\u5236\u4f5c\u5b89\u88c5\u76d8"),(0,n.kt)("p",null,"\u5f53\u4e0b\u8f7d\u597d\u5b89\u88c5\u5668\u540e\u53ef\u76f4\u63a5\u4f7f\u7528\u5b89\u88c5\u5668\u91cc\u9644\u5e26\u7684\u7a0b\u5e8f\u5236\u4f5c\u5b89\u88c5\u5305"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u66ff\u6362 MyVolume \u4e3a\u5b9e\u9645\u7684\u6302\u8f7d\u76d8\n# Big Sur\nsudo /Applications/Install\\ macOS\\ Big\\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n# Catalina\nsudo /Applications/Install\\ macOS\\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n# Mojave\nsudo /Applications/Install\\ macOS\\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n# High Sierra\nsudo /Applications/Install\\ macOS\\ High\\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume\n# Sierra\nsudo /Applications/Install\\ macOS\\ Sierra.app/Contents/Resources/createinstallmedia --applicationpath /Applications/Install\\ macOS\\ Sierra.app --volume /Volumes/MyVolume\n# El Capitan\nsudo /Applications/Install\\ OS\\ X\\ El\\ Capitan.app/Contents/Resources/createinstallmedia --applicationpath /Applications/Install\\ OS\\ X\\ El\\ Capitan.app --volume /Volumes/MyVolume\n# Yosemite\nsudo /Applications/Install\\ OS\\ X\\ Yosemite.app/Contents/Resources/createinstallmedia --applicationpath /Applications/Install\\ OS\\ X\\ Yosemite.app --volume /Volumes/MyVolume\n# Mavericks\nsudo /Applications/Install\\ OS\\ X\\ Mavericks.app/Contents/Resources/createinstallmedia --applicationpath /Applications/Install\\ OS\\ X\\ Mavericks.app --volume /Volumes/MyVolume\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://support.apple.com/en-us/HT201372"}),"Create a bootable installer for OS X")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://diskmakerx.com/"}),"Disk Maker X")),(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"App Store ",(0,n.kt)("a",c({parentName:"li"},{href:"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=11&path=mac%2fmacossierra"}),"macOS Sierra"))))),(0,n.kt)("h2",c({},{id:"installer-cant-verified-\u5b89\u88c5\u5668\u4e0d\u80fd\u88ab\u9a8c\u8bc1"}),"Installer can't verified \u5b89\u88c5\u5668\u4e0d\u80fd\u88ab\u9a8c\u8bc1"),(0,n.kt)("p",null,"\u4f7f\u7528\u65e7\u7684\u5b89\u88c5\u5e94\u7528, 2016.2.14 \u4e4b\u524d,\u53ef\u80fd\u4f1a\u7531\u4e8e\u8bc1\u4e66\u8fc7\u671f\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528,\u901a\u8fc7\u4fee\u6539\u7cfb\u7edf\u65f6\u95f4\u6765\u89c4\u907f"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5728\u5b89\u88c5\u524d\u8fdb\u5165\u7ec8\u7aef\u6267\u884c\ndate 0101010116\n")),(0,n.kt)("h2",c({},{id:"\u91cd\u7f6e\u6df7\u5408\u78c1\u76d8fusion-drive"}),"\u91cd\u7f6e\u6df7\u5408\u78c1\u76d8/Fusion Drive"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"diskutil resetFusion\n")),(0,n.kt)("h2",c({},{id:"sip-\u5f71\u54cd"}),"SIP \u5f71\u54cd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://developer.apple.com/library/archive/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html"}),"System Integrity Protection Guide Introduction")),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7cfb\u7edf\u4fdd\u62a4"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u4fdd\u62a4"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u6838\u4fdd\u62a4")),(0,n.kt)("h2",c({},{id:"\u7f51\u7edc\u5b58\u50a8\u8bbe\u5907\u4e0d\u5199-ds_store-\u6587\u4ef6"}),"\u7f51\u7edc\u5b58\u50a8\u8bbe\u5907\u4e0d\u5199 DS_Store \u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"defaults write com.apple.desktopservices DSDontWriteNetworkStores true\n")),(0,n.kt)("h2",c({},{id:"ds_store"}),".DS_Store"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://eclecticlight.co/2021/11/27/explainer-ds_store-files/"}),"https://eclecticlight.co/2021/11/27/explainer-ds_store-files/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://news.ycombinator.com/item?id=29358932"}),"https://news.ycombinator.com/item?id=29358932"))),(0,n.kt)("h2",c({},{id:"interface-\u6dfb\u52a0\u5730\u5740"}),"interface \u6dfb\u52a0\u5730\u5740"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sudo ifconfig en0 alias 128.133.123.83/24 up\n# \u79fb\u9664\nsudo ifconfig en0 -alias 128.133.123.83/24 up\n")),(0,n.kt)("h2",c({},{id:"quicklooksatellite"}),"QuickLookSatellite"),(0,n.kt)("p",null,"\u7528\u4e8e\u751f\u6210 QuickLook\uff0c\u4f8b\u5982 \u5a92\u4f53\u6587\u4ef6\u9884\u89c8\u56fe\u3002"),(0,n.kt)("p",null,"\u5f02\u5e38\u9ad8 CPU \u5360\u7528\uff0c\u4e0d\u505c\u91cd\u542f\u3002"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\u53ef\u80fd\u662f\u56e0\u4e3a Finder \u6253\u5f00\u7684\u67d0\u4e2a\u76ee\u5f55\uff0c\u76ee\u5f55\u4e0b\u5a92\u4f53\u6587\u4ef6\u6709\u5f02\u5e38\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982 \u6211 Finder \u4e00\u4e2a\u76ee\u5f55\u4e0b\u7684 AVI \u6587\u4ef6\u5f02\u5e38\uff0c\u5bfc\u81f4\u4e0d\u505c\u51fa\u73b0 QuickLookSatellite\uff0c\u4e14 CPU \u975e\u5e38\u9ad8\uff0c\u5173\u95ed Finder \u5373\u53ef\u3002"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://superuser.com/a/617672/242730"}),"https://superuser.com/a/617672/242730"))))),(0,n.kt)("h2",c({},{id:"syncpolicyd"}),"syncpolicyd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"introduced in macOS 10.7.3 with the Gatekeeper feature."),(0,n.kt)("li",{parentName:"ul"},"act as the centralized daemon for answering Gatekeeper questions."),(0,n.kt)("li",{parentName:"ul"},"In addition to assessing applications before running, the daemon also handles authorizing the loading of KEXTs as well as tracking legacy applications that the user has run. In Mojave syspolicyd has expanded again and is responsible for handling software notarization checks as well. We\u2019ll start with a very high level look at the daemon startup process and then dive deeper into each of syspolicyd\u2019s subsystems.")),(0,n.kt)("h2",c({},{id:"rtcreportingd"}),"rtcreportingd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"connect to pancake.apple.com"),(0,n.kt)("li",{parentName:"ul"},"phone home to verify that your device is authorised for home sharing")),(0,n.kt)("h2",c({},{id:"qlgenerator---quicklook-generator"}),"qlgenerator - QuickLook Generator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS Catalina+ /Library/QuickLook/"),(0,n.kt)("li",{parentName:"ul"},"~/Library/QuickLook/")),(0,n.kt)("h2",c({},{id:"install-qlgenerator"}),"Install qlgenerator"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sudo mv ~/Downloads/AVIFQuickLook.qlgenerator /Library/QuickLook/\nxattr -d -r com.apple.quarantine /Library/QuickLook/AVIFQuickLook.qlgenerator\nqlmanage -r\n\nqlmanage -p input.avif    # preview\nqlmanage -t input.avif -x # generate thumnail\n\n# if using ~/Library/QuickLook/\nmkdir -p ~/Library/QuickLook/\nxattr -d -r com.apple.quarantine ~/Library/QuickLook/AVIFQuickLook.qlgenerator\n")),(0,n.kt)("h2",c({},{id:"sysmond"}),"sysmond"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS \u7684 Activity Monitor/\u6d3b\u52a8\u76d1\u63a7 \u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u9009\u62e9 Memory tab \u4e14\u663e\u793a\u4e86 shared memory \u548c private memory \u4f1a\u5bfc\u81f4\u9ad8 CPU \u5360\u7528")),(0,n.kt)("h2",c({},{id:"why-zsh"}),"Why ZSH"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bash 4 \u4e3a GPLv3"),(0,n.kt)("li",{parentName:"ul"},"\u82f9\u679c\u62d2\u7edd\u4f7f\u7528 GPLv3"),(0,n.kt)("li",{parentName:"ul"},"10 \u5e74\u540e\u8fc1\u79fb\u4e3a\u4f7f\u7528 ZSH - MIT")),(0,n.kt)("h2",c({},{id:"installd"}),"installd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PackageKit framework"),(0,n.kt)("li",{parentName:"ul"},"Software Update"),(0,n.kt)("li",{parentName:"ul"},"/System/Library/PrivateFrameworks/PackageKit.framework/Resources/installd"),(0,n.kt)("li",{parentName:"ul"},"CPU \u9ad8\u662f\u56e0\u4e3a compile the current list of software installed on your computer, and compare with the current version list received from Apple's servers"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://apple.stackexchange.com/a/91963/103557"}),"What is the ",(0,n.kt)("inlineCode",{parentName:"a"},"installd")," process, and why is it eating my CPU?"))))),(0,n.kt)("h2",c({},{id:"mach-o-universal-binary"}),"Mach-O universal binary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x86_64"),(0,n.kt)("li",{parentName:"ul"},"arm64e")),(0,n.kt)("h2",c({},{id:"comapplemobilesoftwareupdateupdatebrainservice"}),"com.apple.MobileSoftwareUpdate.UpdateBrainService"),(0,n.kt)("h2",c({},{id:"otool"}),"otool"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS \u4e0b\u7684 ldd \u5bf9\u7b49\u5de5\u5177")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"otool -L a.out\n")),(0,n.kt)("h2",c({},{id:"coreaudiod"}),"coreaudiod"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4fee\u590d\u9ad8 CPU \u5360\u7528\u95ee\u9898")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"mkdir ~/Library/Preferences/Audio\nsudo chown _coreaudiod:admin ~/Library/Preferences/Audio\n\nstat ~/Library/Preferences/Audio\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://forums.macrumors.com/threads/fix-sustained-12-15-coreaudiod-cpu-usage-on-m1-possibly-intel-too.2331498/"}),"https://forums.macrumors.com/threads/fix-sustained-12-15-coreaudiod-cpu-usage-on-m1-possibly-intel-too.2331498/"))),(0,n.kt)("h2",c({},{id:"bindfs"}),"bindfs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fuse")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"brew install gromgit/fuse/bindfs-mac\n\nbindfs a b\n")),(0,n.kt)("h2",c({},{id:"\u8f93\u5165\u6cd5\u5361\u987f"}),"\u8f93\u5165\u6cd5\u5361\u987f"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"kill -9 $(pgrep SCIM)\n")),(0,n.kt)("h2",c({},{id:"powerup-hours"}),"Powerup Hours"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"brew install smartmontools\nsmartctl -a disk0 # Power On Hours\nac                # connect time accounting /var/run/utmpx\n")))}N.isMDXComponent=!0}}]);