(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{275:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(7),l=(a(0),a(557)),c={id:"remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762"},b={unversionedId:"ops/service/remote-desktop",id:"ops/service/remote-desktop",isDocsHomePage:!1,title:"\u8fdc\u7a0b\u684c\u9762",description:"Remote Desktop",source:"@site/contents/notes/ops/service/remote-desktop.md",slug:"/ops/service/remote-desktop",permalink:"/notes/ops/service/remote-desktop",version:"current",sidebar:"docs",previous:{title:"Nexus",permalink:"/notes/service/repository/nexus"},next:{title:"Matomo",permalink:"/notes/ops/service/matomo"}},i=[{value:"RDP",id:"rdp",children:[]},{value:"VNC",id:"vnc",children:[]},{value:"guacamole",id:"guacamole",children:[]}],u={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"remote-desktop"},"Remote Desktop"),Object(l.b)("h2",{id:"rdp"},"RDP"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FreeRDP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/awakecoding/FreeRDP-Manuals/blob/master/User/FreeRDP-User-Manual.markdown"}),"User manual")),Object(l.b)("li",{parentName:"ul"},"Mac \u4e0b\u9700\u8981 XQuartz"))),Object(l.b)("li",{parentName:"ul"},"vbox ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.virtualbox.org/manual/ch07.html"}),"Remote virtual machines"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"xfreerdp /v:127.0.0.1:3389\nxfreerdp +clipboard /u:<username> /v:<hostname> /size:<WxH> /p: <port>\n")),Object(l.b)("h2",{id:"vnc"},"VNC"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://tigervnc.org/"}),"TigerVNC")," ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/TigerVNC/tigervnc"}),"Github"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef"),Object(l.b)("li",{parentName:"ul"},"Java TigerVNC-viewer \u5ba2\u6237\u7aef"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://bintray.com/tigervnc/stable/tigervnc"}),"\u4e0b\u8f7d")))),Object(l.b)("li",{parentName:"ul"},"Ubuntu ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://help.ubuntu.com/community/VNC/Servers"}),"VNC Server"))),Object(l.b)("h2",{id:"guacamole"},"guacamole"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://guacamole.incubator.apache.org/"}),"Apache Guacamole"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4f1a\u8bdd\u8bb0\u5f55, \u53ef\u901a\u8fc7 guacenc \u8f6c\u4e3a mp4 \u7b49\u89c6\u9891\u683c\u5f0f"))),Object(l.b)("li",{parentName:"ul"},"guacamole-protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u660e\u6587\u534f\u8bae"))),Object(l.b)("li",{parentName:"ul"},"guacd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"VNC -> guacamole-protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"libguac-client-rdp"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 UltraVNC Repeater \u4f5c\u4e3a\u4ee3\u7406"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 PulseAudio \u63d0\u4f9b\u97f3\u9891"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Clipboard"),Object(l.b)("li",{parentName:"ul"},"VNC \u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://guacamole.incubator.apache.org/doc/gug/configuring-guacamole.html#vnc-servers"}),"vnc-servers")),Object(l.b)("li",{parentName:"ul"},"RealVNC \u6216 TigerVNC \u662f\u6700\u597d\u7684\u9009\u62e9"),Object(l.b)("li",{parentName:"ul"},"TightVNC \u5efa\u8bae\u7981\u7528 JPEG \u7f16\u7801",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a Guacamole \u5747\u4e3a\u65e0\u635f\u7684 PNG \u56fe\u7247"))),Object(l.b)("li",{parentName:"ul"},"x11vnc",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6027\u80fd\u4e0e RealVNC \u548c TigerVNC \u63a5\u8fd1"),Object(l.b)("li",{parentName:"ul"},"\u597d\u5904\u662f\u5728\u4f7f\u7528\u684c\u9762\u7684\u540c\u65f6\u4e5f\u80fd\u901a\u8fc7 VNC \u66b4\u9732\u684c\u9762\u63a7\u5236"))),Object(l.b)("li",{parentName:"ul"},"vino",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u968f Gnome \u5206\u53d1, \u53ef\u901a\u8fc7\u754c\u9762\u4e0a\u7684\u684c\u9762\u5171\u4eab\u5f00\u542f.\u4f46\u66f4\u5efa\u8bae\u4f7f\u7528 x11vnc, \u5728\u6d4b\u8bd5\u4e2d x11vnc \u8868\u73b0\u7684\u6bd4 vino \u597d."))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u662f\u865a\u62df\u673a,\u5efa\u8bae\u5728\u865a\u62df\u673a\u4e2d\u5b89\u88c5 VNC \u670d\u52a1,\u800c\u4e0d\u662f\u76f4\u63a5\u901a\u8fc7\u865a\u62df\u673a\u7ba1\u7406\u5668\u66b4\u9732 VNC \u670d\u52a1."))))),Object(l.b)("li",{parentName:"ul"},"RDP -> guacamole-protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"libguac-client-vnc"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u91cd\u5b9a\u5411 audio, printing, disk \u7b49\u8bbe\u5907",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"audio \u9ed8\u8ba4\u5f00\u542f"),Object(l.b)("li",{parentName:"ul"},"printing \u9700\u8981 guacamole \u670d\u52a1\u5b89\u88c5 GhostScript,\u5f53\u6253\u5370\u7684\u65f6\u5019\u7528\u6237\u4f1a\u6536\u5230\u4e00\u4e2a PDF \u6587\u6863"),Object(l.b)("li",{parentName:"ul"},"\u865a\u62df disk \u53ef\u7528\u4e8e\u57fa\u4e8e SSH \u505a\u6587\u4ef6\u4f20\u8f93\u7b49"),Object(l.b)("li",{parentName:"ul"},"\u9884\u94fe\u63a5 Preconnection PDU",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4e86\u7c7b\u4f3c\u4e8e HyperV \u8fd9\u6837\u7684\u865a\u62df, \u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e0b\u53ef\u80fd\u5bf9\u5e94\u4e86\u591a\u4e2a RDP"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u5728\u673a\u5668\u4e2d\u6267\u884c ",Object(l.b)("inlineCode",{parentName:"li"},"Get-VM VirtualMachineName | Select-Object Id")," \u67e5\u770b\u5b58\u5728\u7684\u865a\u62df\u673a"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u65f6\u94fe\u63a5\u53ef\u6307\u5b9a\u865a\u62df\u673a"))),Object(l.b)("li",{parentName:"ul"},"\u6700\u65b0\u7248\u7684 Windows \u652f\u6301\u5bf9\u5355\u4e2a\u7a0b\u5e8f\u8fdb\u884c\u8fdc\u7a0b"))))),Object(l.b)("li",{parentName:"ul"},"SSH \u6587\u672c\u534f\u8bae+\u7ec8\u7aef\u6a21\u62df\u5668 -> guacamole-protocol",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u4f1a\u8bdd\u5f55\u5236, \u53ef\u8f6c\u4e3a\u89c6\u9891\u6216\u7ec8\u7aef\u91cd\u64ad(scriptreplay)"))),Object(l.b)("li",{parentName:"ul"},"SFTP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6587\u4ef6\u4f20\u8f93"))),Object(l.b)("li",{parentName:"ul"},"Telnet",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"libguac-client-telnet"),Object(l.b)("li",{parentName:"ul"},"\u4e0e SSH \u76f8\u4f3c"),Object(l.b)("li",{parentName:"ul"},"\u975e\u52a0\u5bc6"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6587\u4ef6\u4f20\u8f93"))))),Object(l.b)("li",{parentName:"ul"},"guacamole",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Web \u670d\u52a1")))))}o.isMDXComponent=!0},557:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),o=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(a),O=r,j=p["".concat(c,".").concat(O)]||p[O]||m[O]||l;return a?n.a.createElement(j,b(b({ref:t},u),{},{components:a})):n.a.createElement(j,b({ref:t},u))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var u=2;u<l;u++)c[u]=a[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);