"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2291:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"NFS"},s=void 0,p={unversionedId:"ops/storage/network/nfs",id:"ops/storage/network/nfs",title:"NFS",description:"Tips",source:"@site/notes/ops/storage/network/nfs.md",sourceDirName:"ops/storage/network",slug:"/ops/storage/network/nfs",permalink:"/notes/ops/storage/network/nfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/nfs.md",tags:[],version:"current",frontMatter:{title:"NFS"},sidebar:"docs",previous:{title:"FTP",permalink:"/notes/ops/storage/network/ftp"},next:{title:"Share",permalink:"/notes/ops/storage/network/share"}},u=[{value:"Tips",id:"tips",children:[],level:2},{value:"exports",id:"exports",children:[],level:2},{value:"Neither &#39;subtree_check&#39; or &#39;no_subtree_check&#39; specified for export",id:"neither-subtree_check-or-no_subtree_check-specified-for-export",children:[],level:2},{value:"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use &#39;-o nolock&#39; to keep locks local, or start statd",id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://linux-nfs.org/"},"nfs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ArchLinux ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/NFS"},"NFS")))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/linux-unix-tuning-nfs-server-client-performance/"},"NFS \u6027\u80fd\u8c03\u4f18")))),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"rpc.nfsd"),(0,o.kt)("li",{parentName:"ul"},"rpc.idmapd"),(0,o.kt)("li",{parentName:"ul"},"rpc.mountd - NFS mount daemon",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"-p 32767"))),(0,o.kt)("li",{parentName:"ul"},"rpc.statd - NSM service daemon",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A daemon that listens for reboot notifications from other hosts, and manages the list of hosts to be notified when the local system reboots"),(0,o.kt)("li",{parentName:"ul"},"-p 32765 -o 32766"),(0,o.kt)("li",{parentName:"ul"},"\u9501\u670d\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u53ef\u4f7f\u7528 nolock \u6307\u5b9a\u4e0d\u542f\u7528\u9501"),(0,o.kt)("li",{parentName:"ul"},"sm-notify - A helper program that notifies NFS peers after the local system reboots"))),(0,o.kt)("li",{parentName:"ul"},"rpc.gssd - gss-api generic security api to provide security for protocols using rpc"),(0,o.kt)("li",{parentName:"ul"},"rpc.svcgssd"),(0,o.kt)("li",{parentName:"ul"},"rpc.rquotad - remote quota server")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u907f\u514d NAT \u4f7f\u7528 nfs - \u90e8\u5206\u670d\u52a1\u53ef\u80fd\u6709\u95ee\u9898\uff0c\u4f8b\u5982 statd")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apk add nfs-utils\n# \u542f\u52a8\nservice nfs start\n# \u5f00\u673a\u542f\u52a8\nrc-update add nfs\n# \u5bfc\u51fa\u6240\u6709\u5b9a\u4e49\u7684\u5171\u4eab\n# \u5c06 /etc/exports \u5b9a\u4e49\u8f93\u51fa\u5230 /var/lib/nfs/etab\nexportfs -a\n# \u53d6\u6d88\u6240\u6709\u5171\u4eab - \u6e05\u9664 /var/lib/nfs/etab\nexportfs -au\n\n# \u67e5\u770b\u670d\u52a1\u63d0\u4f9b\u7684\u5171\u4eab\nshowmount -e localhost\n\n# NFSv4 \u53ef\u4ee5\u6302\u5728\u6839\u76ee\u5f55\nmount server:/ /mountpoint/on/client\n# \u6302\u8f7d\u5355\u4e2a\u76ee\u5f55\nmount -t nfs -o vers=4 servername:/srv/nfs/music /mountpoint/on/client\n# fstab\n# servername:/music   /mountpoint/on/client   nfs   defaults,timeo=900,retrans=5,_netdev    0 0\n\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9\u793a\u4f8b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/etc/exports"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5916\u66b4\u9732\u7684\u6587\u4ef6"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/usr/local 192.168.0.1(ro) 192.168.0.2(ro)"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"/home 192.168.0.0/255.255.255.0(rw)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/etc/hosts.allow"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8bbf\u95ee\u7684\u4e3b\u673a"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"portmap:ALL"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/etc/hosts.deny"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62\u8bbf\u95ee\u7684\u4e3b\u673a"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"lockd: 192.168.0.1 , 192.168.0.2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/var/lib/nfs/etab"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u7684\u4e3b\u8868"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"/var/lib/nfs/rmtab"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u670d\u52a1\u7aef\u7684\u5ba2\u6237\u7aef"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"exports"},"exports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://linux.die.net/man/5/exports"},"https://linux.die.net/man/5/exports"))),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"neither-subtree_check-or-no_subtree_check-specified-for-export"},"Neither 'subtree_check' or 'no_subtree_check' specified for export"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u5f71\u54cd\uff0c\u53ea\u662f\u8b66\u544a\u9ed8\u8ba4\u4e3a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"no_subtree_check"),"\uff0c\u4e4b\u524d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"subtree_check"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/data0    *(rw,no_root_squash,no_subtree_check)\n")),(0,o.kt)("h2",{id:"mountnfs-rpcstatd-is-not-running-but-is-required-for-remote-locking-mountnfs-either-use--o-nolock-to-keep-locks-local-or-start-statd"},"mount.nfs: rpc.statd is not running but is required for remote locking. mount.nfs: Either use '-o nolock' to keep locks local, or start statd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u5ba2\u6237\u7aef\u5728 NAT \u540e\u65f6\u53ef\u80fd\u4f1a\u6709\u8fd9\u4e2a\u95ee\u9898 - \u56e0\u4e3a\u7aef\u53e3\u4ece\u65b0\u6620\u5c04\u540e\u4e0d\u4f1a\u662f\u4fdd\u7559\u7aef\u53e3"),(0,o.kt)("li",{parentName:"ul"},"exports \u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"insecure")," \u9009\u9879\u5373\u53ef",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5f00\u542f\u4e86 secure\uff0c\u8981\u6c42\u7aef\u53e3 \u5c0f\u4e8e 1024 IPPORT_RESERVED")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mount.nfs: rpc.statd is not running but is required for remote locking.\nmount.nfs: Either use '-o nolock' to keep locks local, or start statd.\nmount.nfs: Operation not permitted\n")))}m.isMDXComponent=!0}}]);