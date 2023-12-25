/*! For license information please see 70647f55.974ec34e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99234],{7673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var l=r(11527),i=r(47214);const s={id:"remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762"},c="Remote Desktop",t={id:"ops/service/remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762",description:"RDP",source:"@site/../notes/ops/service/remote-desktop.md",sourceDirName:"ops/service",slug:"/ops/service/remote-desktop",permalink:"/notes/ops/service/remote-desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/service/remote-desktop.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"remote-desktop",title:"\u8fdc\u7a0b\u684c\u9762"},sidebar:"docs",previous:{title:"Mirrors",permalink:"/notes/ops/mirrors"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/notes/os/"}},o={},d=[{value:"RDP",id:"rdp",level:2},{value:"VNC",id:"vnc",level:2},{value:"guacamole",id:"guacamole",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"remote-desktop",children:"Remote Desktop"}),"\n",(0,l.jsx)(n.h2,{id:"rdp",children:"RDP"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["FreeRDP\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/awakecoding/FreeRDP-Manuals/blob/master/User/FreeRDP-User-Manual.markdown",children:"User manual"})}),"\n",(0,l.jsx)(n.li,{children:"Mac \u4e0b\u9700\u8981 XQuartz"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["vbox ",(0,l.jsx)(n.a,{href:"https://www.virtualbox.org/manual/ch07.html",children:"Remote virtual machines"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"xfreerdp /v:127.0.0.1:3389\nxfreerdp +clipboard /u:<username> /v:<hostname> /size:<WxH> /p: <port>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"vnc",children:"VNC"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://tigervnc.org/",children:"TigerVNC"})," ",(0,l.jsx)(n.a,{href:"https://github.com/TigerVNC/tigervnc",children:"Github"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u670d\u52a1\u7aef"}),"\n",(0,l.jsx)(n.li,{children:"Java TigerVNC-viewer \u5ba2\u6237\u7aef"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://bintray.com/tigervnc/stable/tigervnc",children:"\u4e0b\u8f7d"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Ubuntu ",(0,l.jsx)(n.a,{href:"https://help.ubuntu.com/community/VNC/Servers",children:"VNC Server"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"guacamole",children:"guacamole"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"http://guacamole.incubator.apache.org/",children:"Apache Guacamole"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u4f1a\u8bdd\u8bb0\u5f55, \u53ef\u901a\u8fc7 guacenc \u8f6c\u4e3a mp4 \u7b49\u89c6\u9891\u683c\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["guacamole-protocol\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u660e\u6587\u534f\u8bae"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["guacd\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["VNC -> guacamole-protocol\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"libguac-client-rdp"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 UltraVNC Repeater \u4f5c\u4e3a\u4ee3\u7406"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 PulseAudio \u63d0\u4f9b\u97f3\u9891"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 Clipboard"}),"\n",(0,l.jsxs)(n.li,{children:["VNC \u670d\u52a1\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://guacamole.incubator.apache.org/doc/gug/configuring-guacamole.html#vnc-servers",children:"vnc-servers"})}),"\n",(0,l.jsx)(n.li,{children:"RealVNC \u6216 TigerVNC \u662f\u6700\u597d\u7684\u9009\u62e9"}),"\n",(0,l.jsxs)(n.li,{children:["TightVNC \u5efa\u8bae\u7981\u7528 JPEG \u7f16\u7801\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u56e0\u4e3a Guacamole \u5747\u4e3a\u65e0\u635f\u7684 PNG \u56fe\u7247"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["x11vnc\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6027\u80fd\u4e0e RealVNC \u548c TigerVNC \u63a5\u8fd1"}),"\n",(0,l.jsx)(n.li,{children:"\u597d\u5904\u662f\u5728\u4f7f\u7528\u684c\u9762\u7684\u540c\u65f6\u4e5f\u80fd\u901a\u8fc7 VNC \u66b4\u9732\u684c\u9762\u63a7\u5236"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["vino\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u968f Gnome \u5206\u53d1, \u53ef\u901a\u8fc7\u754c\u9762\u4e0a\u7684\u684c\u9762\u5171\u4eab\u5f00\u542f.\u4f46\u66f4\u5efa\u8bae\u4f7f\u7528 x11vnc, \u5728\u6d4b\u8bd5\u4e2d x11vnc \u8868\u73b0\u7684\u6bd4 vino \u597d."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u662f\u865a\u62df\u673a,\u5efa\u8bae\u5728\u865a\u62df\u673a\u4e2d\u5b89\u88c5 VNC \u670d\u52a1,\u800c\u4e0d\u662f\u76f4\u63a5\u901a\u8fc7\u865a\u62df\u673a\u7ba1\u7406\u5668\u66b4\u9732 VNC \u670d\u52a1."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["RDP -> guacamole-protocol\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"libguac-client-vnc"}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301 sftp \u4f5c\u4e3a\u6587\u4ef6\u4f20\u8f93"}),"\n",(0,l.jsxs)(n.li,{children:["\u5141\u8bb8\u91cd\u5b9a\u5411 audio, printing, disk \u7b49\u8bbe\u5907\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"audio \u9ed8\u8ba4\u5f00\u542f"}),"\n",(0,l.jsx)(n.li,{children:"printing \u9700\u8981 guacamole \u670d\u52a1\u5b89\u88c5 GhostScript,\u5f53\u6253\u5370\u7684\u65f6\u5019\u7528\u6237\u4f1a\u6536\u5230\u4e00\u4e2a PDF \u6587\u6863"}),"\n",(0,l.jsx)(n.li,{children:"\u865a\u62df disk \u53ef\u7528\u4e8e\u57fa\u4e8e SSH \u505a\u6587\u4ef6\u4f20\u8f93\u7b49"}),"\n",(0,l.jsxs)(n.li,{children:["\u9884\u94fe\u63a5 Preconnection PDU\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528\u4e86\u7c7b\u4f3c\u4e8e HyperV \u8fd9\u6837\u7684\u865a\u62df, \u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e0b\u53ef\u80fd\u5bf9\u5e94\u4e86\u591a\u4e2a RDP"}),"\n",(0,l.jsxs)(n.li,{children:["\u53ef\u5728\u673a\u5668\u4e2d\u6267\u884c ",(0,l.jsx)(n.code,{children:"Get-VM VirtualMachineName | Select-Object Id"})," \u67e5\u770b\u5b58\u5728\u7684\u865a\u62df\u673a"]}),"\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6e\u65f6\u94fe\u63a5\u53ef\u6307\u5b9a\u865a\u62df\u673a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u6700\u65b0\u7248\u7684 Windows \u652f\u6301\u5bf9\u5355\u4e2a\u7a0b\u5e8f\u8fdb\u884c\u8fdc\u7a0b"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["SSH \u6587\u672c\u534f\u8bae+\u7ec8\u7aef\u6a21\u62df\u5668 -> guacamole-protocol\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u65e5\u5fd7\u4f1a\u8bdd\u5f55\u5236, \u53ef\u8f6c\u4e3a\u89c6\u9891\u6216\u7ec8\u7aef\u91cd\u64ad(scriptreplay)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["SFTP\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6587\u4ef6\u4f20\u8f93"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Telnet\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"libguac-client-telnet"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0e SSH \u76f8\u4f3c"}),"\n",(0,l.jsx)(n.li,{children:"\u975e\u52a0\u5bc6"}),"\n",(0,l.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u6587\u4ef6\u4f20\u8f93"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["guacamole\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Web \u670d\u52a1"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var l=r(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var l,s={},d=null,a=null;for(l in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,l)&&!o.hasOwnProperty(l)&&(s[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===s[l]&&(s[l]=n[l]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:t.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>c});var l=r(50959);const i={},s=l.createContext(i);function c(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);