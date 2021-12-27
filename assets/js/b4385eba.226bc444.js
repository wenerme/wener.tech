"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22119],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=p(r),s=n,N=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return r?a.createElement(N,i(i({ref:t},m),{},{components:r})):a.createElement(N,i({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},13525:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],u={id:"remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762"},o="Remote Desktop",p={unversionedId:"ops/service/remote-desktop",id:"ops/service/remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762",description:"RDP",source:"@site/notes/ops/service/remote-desktop.md",sourceDirName:"ops/service",slug:"/ops/service/remote-desktop",permalink:"/notes/ops/service/remote-desktop",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/remote-desktop.md",tags:[],version:"current",frontMatter:{id:"remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762"},sidebar:"docs",previous:{title:"rsync",permalink:"/notes/ops/storage/tool/rsync"},next:{title:"Vault",permalink:"/notes/ops/service/vault"}},m=[{value:"RDP",id:"rdp",children:[],level:2},{value:"VNC",id:"vnc",children:[],level:2},{value:"guacamole",id:"guacamole",children:[],level:2}],c={toc:m};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"remote-desktop"},"Remote Desktop"),(0,l.kt)("h2",{id:"rdp"},"RDP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FreeRDP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/awakecoding/FreeRDP-Manuals/blob/master/User/FreeRDP-User-Manual.markdown"},"User manual")),(0,l.kt)("li",{parentName:"ul"},"Mac \u4e0b\u9700\u8981 XQuartz"))),(0,l.kt)("li",{parentName:"ul"},"vbox ",(0,l.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/manual/ch07.html"},"Remote virtual machines"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xfreerdp /v:127.0.0.1:3389\nxfreerdp +clipboard /u:<username> /v:<hostname> /size:<WxH> /p: <port>\n")),(0,l.kt)("h2",{id:"vnc"},"VNC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://tigervnc.org/"},"TigerVNC")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/TigerVNC/tigervnc"},"Github"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef"),(0,l.kt)("li",{parentName:"ul"},"Java TigerVNC-viewer \u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://bintray.com/tigervnc/stable/tigervnc"},"\u4e0b\u8f7d")))),(0,l.kt)("li",{parentName:"ul"},"Ubuntu ",(0,l.kt)("a",{parentName:"li",href:"https://help.ubuntu.com/community/VNC/Servers"},"VNC Server"))),(0,l.kt)("h2",{id:"guacamole"},"guacamole"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://guacamole.incubator.apache.org/"},"Apache Guacamole"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4f1a\u8bdd\u8bb0\u5f55, \u53ef\u901a\u8fc7 guacenc \u8f6c\u4e3a mp4 \u7b49\u89c6\u9891\u683c\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},"guacamole-protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u660e\u6587\u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"guacd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"VNC -> guacamole-protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"libguac-client-rdp"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 UltraVNC Repeater \u4f5c\u4e3a\u4ee3\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 PulseAudio \u63d0\u4f9b\u97f3\u9891"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Clipboard"),(0,l.kt)("li",{parentName:"ul"},"VNC \u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://guacamole.incubator.apache.org/doc/gug/configuring-guacamole.html#vnc-servers"},"vnc-servers")),(0,l.kt)("li",{parentName:"ul"},"RealVNC \u6216 TigerVNC \u662f\u6700\u597d\u7684\u9009\u62e9"),(0,l.kt)("li",{parentName:"ul"},"TightVNC \u5efa\u8bae\u7981\u7528 JPEG \u7f16\u7801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a Guacamole \u5747\u4e3a\u65e0\u635f\u7684 PNG \u56fe\u7247"))),(0,l.kt)("li",{parentName:"ul"},"x11vnc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u4e0e RealVNC \u548c TigerVNC \u63a5\u8fd1"),(0,l.kt)("li",{parentName:"ul"},"\u597d\u5904\u662f\u5728\u4f7f\u7528\u684c\u9762\u7684\u540c\u65f6\u4e5f\u80fd\u901a\u8fc7 VNC \u66b4\u9732\u684c\u9762\u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},"vino",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u968f Gnome \u5206\u53d1, \u53ef\u901a\u8fc7\u754c\u9762\u4e0a\u7684\u684c\u9762\u5171\u4eab\u5f00\u542f.\u4f46\u66f4\u5efa\u8bae\u4f7f\u7528 x11vnc, \u5728\u6d4b\u8bd5\u4e2d x11vnc \u8868\u73b0\u7684\u6bd4 vino \u597d."))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u865a\u62df\u673a,\u5efa\u8bae\u5728\u865a\u62df\u673a\u4e2d\u5b89\u88c5 VNC \u670d\u52a1,\u800c\u4e0d\u662f\u76f4\u63a5\u901a\u8fc7\u865a\u62df\u673a\u7ba1\u7406\u5668\u66b4\u9732 VNC \u670d\u52a1."))))),(0,l.kt)("li",{parentName:"ul"},"RDP -> guacamole-protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"libguac-client-vnc"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u91cd\u5b9a\u5411 audio, printing, disk \u7b49\u8bbe\u5907",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"audio \u9ed8\u8ba4\u5f00\u542f"),(0,l.kt)("li",{parentName:"ul"},"printing \u9700\u8981 guacamole \u670d\u52a1\u5b89\u88c5 GhostScript,\u5f53\u6253\u5370\u7684\u65f6\u5019\u7528\u6237\u4f1a\u6536\u5230\u4e00\u4e2a PDF \u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df disk \u53ef\u7528\u4e8e\u57fa\u4e8e SSH \u505a\u6587\u4ef6\u4f20\u8f93\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u9884\u94fe\u63a5 Preconnection PDU",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86\u7c7b\u4f3c\u4e8e HyperV \u8fd9\u6837\u7684\u865a\u62df, \u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e0b\u53ef\u80fd\u5bf9\u5e94\u4e86\u591a\u4e2a RDP"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5728\u673a\u5668\u4e2d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"Get-VM VirtualMachineName | Select-Object Id")," \u67e5\u770b\u5b58\u5728\u7684\u865a\u62df\u673a"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u65f6\u94fe\u63a5\u53ef\u6307\u5b9a\u865a\u62df\u673a"))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248\u7684 Windows \u652f\u6301\u5bf9\u5355\u4e2a\u7a0b\u5e8f\u8fdb\u884c\u8fdc\u7a0b"))))),(0,l.kt)("li",{parentName:"ul"},"SSH \u6587\u672c\u534f\u8bae+\u7ec8\u7aef\u6a21\u62df\u5668 -> guacamole-protocol",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u4f1a\u8bdd\u5f55\u5236, \u53ef\u8f6c\u4e3a\u89c6\u9891\u6216\u7ec8\u7aef\u91cd\u64ad(scriptreplay)"))),(0,l.kt)("li",{parentName:"ul"},"SFTP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4f20\u8f93"))),(0,l.kt)("li",{parentName:"ul"},"Telnet",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"libguac-client-telnet"),(0,l.kt)("li",{parentName:"ul"},"\u4e0e SSH \u76f8\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u52a0\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6587\u4ef6\u4f20\u8f93"))))),(0,l.kt)("li",{parentName:"ul"},"guacamole",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web \u670d\u52a1")))))}k.isMDXComponent=!0}}]);