/*! For license information please see 155197fc.7f746ba5.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76494],{95934:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(11527),r=s(47214);const o={title:"cygwin"},i="cygwin",c={id:"os/windows/cygwin",title:"cygwin",description:"- \u5728 Windows \u4e0b \u63d0\u4f9b POSIX \u73af\u5883",source:"@site/../notes/os/windows/cygwin.md",sourceDirName:"os/windows",slug:"/os/windows/cygwin",permalink:"/notes/os/windows/cygwin",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/windows/cygwin.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627207978,formattedLastUpdatedAt:"Jul 25, 2021",frontMatter:{title:"cygwin"},sidebar:"docs",previous:{title:"Batch",permalink:"/notes/os/windows/batch"},next:{title:"msys2",permalink:"/notes/os/windows/msys2"}},l={},d=[{value:"Tools",id:"tools",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cygwin",children:"cygwin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728 Windows \u4e0b \u63d0\u4f9b POSIX \u73af\u5883"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cygcheck"}),"\n",(0,t.jsx)(n.li,{children:"cygpath - \u6a21\u62df\u73af\u5883\u8def\u5f84\u8f6c Windows \u8def\u5f84"}),"\n",(0,t.jsxs)(n.li,{children:["cygrunsrv - \u6ce8\u518c\u7ba1\u7406 windows \u670d\u52a1\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"-I \u5b89\u88c5 -R \u79fb\u9664 -S \u542f\u52a8 -E \u505c\u6b62 -Q \u641c\u7d22 -L \u663e\u793a\u5217\u8868"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u672c\u5730\u670d\u52a1\u548c\u8fdc\u7a0b\u670d\u52a1 - \u8fdc\u7a0b server/svc_name"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"cygstart"}),"\n",(0,t.jsx)(n.li,{children:"cygwin-console-helper"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# -R \u5220\u9664 service\ncygrunsrv -R msys2_sshd\n# -I \u5b89\u88c5 service\n# -d \u663e\u793a\u540d\u5b57 -p \u5e94\u7528\u8def\u5f84 -a \u53c2\u6570 -y \u4f9d\u8d56\ncygrunsrv -I msys2_sshd -d "MSYS2 sshd" -p /usr/bin/sshd.exe -a "-D -e" -y tcpip\n\ncygrunsrv -L\ncygrunsrv -Q msys2_sshd\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var t=s(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,o={},d=null,a=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(50959);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);