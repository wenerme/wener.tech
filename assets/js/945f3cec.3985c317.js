"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86028],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return N}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=u(a),N=r,c=s["".concat(p,".").concat(N)]||s[N]||k[N]||n;return a?l.createElement(c,i(i({ref:t},o),{},{components:a})):l.createElement(c,i({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},94079:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return k}});var l=a(87462),r=a(63366),n=(a(67294),a(3905)),i=["components"],m={title:"macOS FHS",tags:["\u76ee\u5f55\u7ed3\u6784"]},p=void 0,u={unversionedId:"os/darwin/macos-fhs",id:"os/darwin/macos-fhs",title:"macOS FHS",description:"- FileSystemOverview",source:"@site/notes/os/darwin/macos-fhs.md",sourceDirName:"os/darwin",slug:"/os/darwin/macos-fhs",permalink:"/notes/os/darwin/macos-fhs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/darwin/macos-fhs.md",tags:[{label:"\u76ee\u5f55\u7ed3\u6784",permalink:"/notes/tags/\u76ee\u5f55\u7ed3\u6784"}],version:"current",frontMatter:{title:"macOS FHS",tags:["\u76ee\u5f55\u7ed3\u6784"]},sidebar:"docs",previous:{title:"macOS FAQ",permalink:"/notes/os/darwin/macos-faq"},next:{title:"macOS \u672f\u8bed\u8868",permalink:"/notes/os/darwin/macos-glossary"}},o={},k=[{value:"macOS",id:"macos",level:2},{value:"System/Applications",id:"systemapplications",level:2},{value:"System/Applications/Utilities",id:"systemapplicationsutilities",level:2},{value:"Applications",id:"applications",level:2},{value:"Library",id:"library",level:2},{value:"BSD",id:"bsd",level:2}],s={toc:k};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html"},"FileSystemOverview"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"domain - user,local,network,system"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/foundation/filemanager"},"FileManager")),(0,n.kt)("li",{parentName:"ul"},"Uniform Type Identifiers (UTIs)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"com.apple.bundle"),(0,n.kt)("li",{parentName:"ul"},"com.apple.application-bundle"))),(0,n.kt)("li",{parentName:"ul"},"\u5783\u573e\u7bb1\u4f4d\u4e8e ~/.Trash"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://difyel.com/apple/macos/macos-directory-structure/"},"MacOs Directory Structure"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"man hier\n\ntree -dlL 2 /Volumes\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"linux"),(0,n.kt)("th",{parentName:"tr",align:null},"macos"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/boot"),(0,n.kt)("td",{parentName:"tr",align:null},"/System/Library/Kernels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/home"),(0,n.kt)("td",{parentName:"tr",align:null},"/Users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/root"),(0,n.kt)("td",{parentName:"tr",align:null},"/var/root")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/etc"),(0,n.kt)("td",{parentName:"tr",align:null},"/private/etc")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/etc/auto_master",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"automount")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"src"),(0,n.kt)("th",{parentName:"tr",align:null},"sym link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/etc"),(0,n.kt)("td",{parentName:"tr",align:null},"/private/etc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/tmp"),(0,n.kt)("td",{parentName:"tr",align:null},"/private/tmp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/var"),(0,n.kt)("td",{parentName:"tr",align:null},"/private/var")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"/home"),(0,n.kt)("td",{parentName:"tr",align:null},"/System/Volumes/Data/home")))),(0,n.kt)("h2",{id:"macos"},"macOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/Applications",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Utilities/ - managing the local system"),(0,n.kt)("li",{parentName:"ul"},"Developer/"))),(0,n.kt)("li",{parentName:"ul"},"/Library",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Desktop Pictures/ - \u684c\u9762")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/Network/"),(0,n.kt)("li",{parentName:"ul"},"/Volumes/")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/System/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Applications/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Utilities/"))),(0,n.kt)("li",{parentName:"ul"},"Library/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sounds/ - aiff \u683c\u5f0f"))),(0,n.kt)("li",{parentName:"ul"},"Developer/"),(0,n.kt)("li",{parentName:"ul"},"DriverKit/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Runtime/"),(0,n.kt)("li",{parentName:"ul"},"System/"),(0,n.kt)("li",{parentName:"ul"},"usr/"))),(0,n.kt)("li",{parentName:"ul"},"Volumes/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BaseSystem/"),(0,n.kt)("li",{parentName:"ul"},"Data/"),(0,n.kt)("li",{parentName:"ul"},"Hardware/"),(0,n.kt)("li",{parentName:"ul"},"Preboot/"),(0,n.kt)("li",{parentName:"ul"},"Update/"),(0,n.kt)("li",{parentName:"ul"},"Recovery/"),(0,n.kt)("li",{parentName:"ul"},"VM/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"swapfile"))))),(0,n.kt)("li",{parentName:"ul"},"iOSSupport/")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/Users/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shared/ - \u672c\u5730\u7528\u6237\u5171\u4eab"),(0,n.kt)("li",{parentName:"ul"},"$USER/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Applications/"),(0,n.kt)("li",{parentName:"ul"},"Desktop/"),(0,n.kt)("li",{parentName:"ul"},"Documents/"),(0,n.kt)("li",{parentName:"ul"},"Downloads/"),(0,n.kt)("li",{parentName:"ul"},"Library/ - macOS 10.7+ \u9690\u85cf"),(0,n.kt)("li",{parentName:"ul"},"Movies/"),(0,n.kt)("li",{parentName:"ul"},"Music/"),(0,n.kt)("li",{parentName:"ul"},"Pictures/"),(0,n.kt)("li",{parentName:"ul"},"Public/ - \u5171\u4eab"),(0,n.kt)("li",{parentName:"ul"},"Sites/")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"systemapplications"},"System/Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App Store"),(0,n.kt)("li",{parentName:"ul"},"Automator"),(0,n.kt)("li",{parentName:"ul"},"Books"),(0,n.kt)("li",{parentName:"ul"},"Calculator"),(0,n.kt)("li",{parentName:"ul"},"Calendar"),(0,n.kt)("li",{parentName:"ul"},"Chess"),(0,n.kt)("li",{parentName:"ul"},"Contacts"),(0,n.kt)("li",{parentName:"ul"},"Dictionary"),(0,n.kt)("li",{parentName:"ul"},"FaceTime"),(0,n.kt)("li",{parentName:"ul"},"FindMy"),(0,n.kt)("li",{parentName:"ul"},"Font Book"),(0,n.kt)("li",{parentName:"ul"},"Home"),(0,n.kt)("li",{parentName:"ul"},"Image Capture"),(0,n.kt)("li",{parentName:"ul"},"Launchpad"),(0,n.kt)("li",{parentName:"ul"},"Mail"),(0,n.kt)("li",{parentName:"ul"},"Maps"),(0,n.kt)("li",{parentName:"ul"},"Messages"),(0,n.kt)("li",{parentName:"ul"},"Mission Control"),(0,n.kt)("li",{parentName:"ul"},"Music"),(0,n.kt)("li",{parentName:"ul"},"News"),(0,n.kt)("li",{parentName:"ul"},"Notes"),(0,n.kt)("li",{parentName:"ul"},"Photo Booth"),(0,n.kt)("li",{parentName:"ul"},"Photos"),(0,n.kt)("li",{parentName:"ul"},"Podcasts"),(0,n.kt)("li",{parentName:"ul"},"Preview"),(0,n.kt)("li",{parentName:"ul"},"QuickTime Player"),(0,n.kt)("li",{parentName:"ul"},"Reminders"),(0,n.kt)("li",{parentName:"ul"},"Shortcuts"),(0,n.kt)("li",{parentName:"ul"},"Siri"),(0,n.kt)("li",{parentName:"ul"},"Stickies"),(0,n.kt)("li",{parentName:"ul"},"Stocks"),(0,n.kt)("li",{parentName:"ul"},"System Preferences"),(0,n.kt)("li",{parentName:"ul"},"TV"),(0,n.kt)("li",{parentName:"ul"},"TextEdit"),(0,n.kt)("li",{parentName:"ul"},"Time Machine"),(0,n.kt)("li",{parentName:"ul"},"VoiceMemos")),(0,n.kt)("h2",{id:"systemapplicationsutilities"},"System/Applications/Utilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Activity Monitor"),(0,n.kt)("li",{parentName:"ul"},"AirPort Utility"),(0,n.kt)("li",{parentName:"ul"},"Audio MIDI Setup"),(0,n.kt)("li",{parentName:"ul"},"Bluetooth File Exchange"),(0,n.kt)("li",{parentName:"ul"},"Boot Camp Assistant"),(0,n.kt)("li",{parentName:"ul"},"ColorSync Utility"),(0,n.kt)("li",{parentName:"ul"},"Console"),(0,n.kt)("li",{parentName:"ul"},"Digital Color Meter"),(0,n.kt)("li",{parentName:"ul"},"Disk Utility"),(0,n.kt)("li",{parentName:"ul"},"Grapher"),(0,n.kt)("li",{parentName:"ul"},"Keychain Access"),(0,n.kt)("li",{parentName:"ul"},"Migration Assistant"),(0,n.kt)("li",{parentName:"ul"},"Screenshot"),(0,n.kt)("li",{parentName:"ul"},"Script Editor"),(0,n.kt)("li",{parentName:"ul"},"System Information"),(0,n.kt)("li",{parentName:"ul"},"Terminal"),(0,n.kt)("li",{parentName:"ul"},"VoiceOver Utility")),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/System/Applications"),(0,n.kt)("li",{parentName:"ul"},"/Applications"),(0,n.kt)("li",{parentName:"ul"},"/Users/$USER/Applications")),(0,n.kt)("h2",{id:"library"},"Library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Library - \u5b58\u50a8\u5e94\u7528\u76f8\u5173\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html"},"macOS Library Directory Details"))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/Library",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Documentation/"),(0,n.kt)("li",{parentName:"ul"},"Extensions/ - kext - \u5185\u6838\u6269\u5c55"),(0,n.kt)("li",{parentName:"ul"},"Developer/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CommandLineTools/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SDKs/"),(0,n.kt)("li",{parentName:"ul"},"Library/"),(0,n.kt)("li",{parentName:"ul"},"usr/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bin/"))))))))),(0,n.kt)("li",{parentName:"ul"},"/Users/$USER/Library"),(0,n.kt)("li",{parentName:"ul"},"/System/Library")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application Support/ - \u975e\u7528\u6237\u76f8\u5173\u5e94\u7528\u6570\u636e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u540c\u6837\u7684\u5e94\u7528\u53ef\u4ee5\u5728\u591a\u5904\u5b58\u50a8\u4e0d\u540c\u7eac\u5ea6 Application Support"))),(0,n.kt)("li",{parentName:"ul"},"Caches/ - \u5e94\u7528\u7f13\u5b58\uff0c\u53ef\u80fd\u4f1a\u88ab\u5220\u9664\uff0c\u4e0d\u4f1a\u88ab\u5907\u4efd"),(0,n.kt)("li",{parentName:"ul"},"Frameworks/ - \u591a\u7528\u6237\u5171\u4eab\uff0c iOS \u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u6846\u67b6"),(0,n.kt)("li",{parentName:"ul"},"Preferences/ - \u4f7f\u7528 NSUserDefaults \u64cd\u4f5c\uff0c\u4f1a\u5907\u4efd"),(0,n.kt)("li",{parentName:"ul"},"PrivateFrameworks/"),(0,n.kt)("li",{parentName:"ul"},"Developer/")),(0,n.kt)("h2",{id:"bsd"},"BSD"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/bin/ - \u57fa\u7840\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"/dev/ - block & character device files",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fd/ - file descriptor"))),(0,n.kt)("li",{parentName:"ul"},"/etc/ - \u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u548c\u811a\u672c"),(0,n.kt)("li",{parentName:"ul"},"/mach_kernel - \u5185\u6838\uff0c\u542f\u52a8\u52a0\u8f7d\u5230\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"/sbin/ - \u7cfb\u7edf\u548c\u7ba1\u7406\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"/tmp/"),(0,n.kt)("li",{parentName:"ul"},"/usr/ - \u4e3b\u8981\u7528\u6237\u5de5\u5177\u548c\u5e94\u7528",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bin/"),(0,n.kt)("li",{parentName:"ul"},"include/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"arpa/"),(0,n.kt)("li",{parentName:"ul"},"hfs/"),(0,n.kt)("li",{parentName:"ul"},"machine/"),(0,n.kt)("li",{parentName:"ul"},"net/"),(0,n.kt)("li",{parentName:"ul"},"netinet/"),(0,n.kt)("li",{parentName:"ul"},"nfs/"),(0,n.kt)("li",{parentName:"ul"},"objc/"),(0,n.kt)("li",{parentName:"ul"},"protocols/"),(0,n.kt)("li",{parentName:"ul"},"sys/"),(0,n.kt)("li",{parentName:"ul"},"ufs/"))),(0,n.kt)("li",{parentName:"ul"},"lib/"),(0,n.kt)("li",{parentName:"ul"},"libexec/ - system daemons & system utilities (executed by other programs)"),(0,n.kt)("li",{parentName:"ul"},"local/ - exec & lib not included by the basic operating system"),(0,n.kt)("li",{parentName:"ul"},"sbin/ - system daemons & system utilities (executed by users)"),(0,n.kt)("li",{parentName:"ul"},"share/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"calendar/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man calendar")),(0,n.kt)("li",{parentName:"ul"},"dict/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man look"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"web2 - Webster's Second International"),(0,n.kt)("li",{parentName:"ul"},"web2a"),(0,n.kt)("li",{parentName:"ul"},"propernames"),(0,n.kt)("li",{parentName:"ul"},"connectives"),(0,n.kt)("li",{parentName:"ul"},"words -> ./web2"))),(0,n.kt)("li",{parentName:"ul"},"man/"),(0,n.kt)("li",{parentName:"ul"},"misc/"),(0,n.kt)("li",{parentName:"ul"},"mk/ - make \u6a21\u7248"),(0,n.kt)("li",{parentName:"ul"},"skel/"),(0,n.kt)("li",{parentName:"ul"},"tabset/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man termcap")),(0,n.kt)("li",{parentName:"ul"},"zoneinfo/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man tzfile")))))),(0,n.kt)("li",{parentName:"ul"},"/var/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"at/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man at")),(0,n.kt)("li",{parentName:"ul"},"backups/"),(0,n.kt)("li",{parentName:"ul"},"db/"),(0,n.kt)("li",{parentName:"ul"},"log/"),(0,n.kt)("li",{parentName:"ul"},"mail/"),(0,n.kt)("li",{parentName:"ul"},"run/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"utmpx - ",(0,n.kt)("inlineCode",{parentName:"li"},"man utmpx")))),(0,n.kt)("li",{parentName:"ul"},"rwho/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man rwho")),(0,n.kt)("li",{parentName:"ul"},"spool/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mqueue/ - ",(0,n.kt)("inlineCode",{parentName:"li"},"man sendmail")," - \u672a\u53d1\u9001\u7684\u90ae\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"tmp/"),(0,n.kt)("li",{parentName:"ul"},"folders/\nper-user temporary files and caches")))))}N.isMDXComponent=!0}}]);