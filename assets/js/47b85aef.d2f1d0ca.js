/*! For license information please see 47b85aef.d2f1d0ca.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24064],{5628:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var o=r(2488),s=r(62780);const c={title:"chrony"},i="chrony",t={id:"os/linux/chrony",title:"chrony",description:"- \u6ce8\u610f\u914d\u7f6e minpoll - \u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u65f6\u95f4\u4e0d\u51c6",source:"@site/../notes/os/linux/chrony.md",sourceDirName:"os/linux",slug:"/os/linux/chrony",permalink:"/notes/os/linux/chrony",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/chrony.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702882608,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"chrony"},sidebar:"docs",previous:{title:"Build",permalink:"/notes/os/linux/build"},next:{title:"Linux cluster awesome",permalink:"/notes/os/linux/cluster/awesome"}},l={},d=[{value:"chrony.conf",id:"chronyconf",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"chrony",children:"chrony"}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u6ce8\u610f\u914d\u7f6e minpoll - \u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u65f6\u95f4\u4e0d\u51c6"}),"\n"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u5982\u679c\u65f6\u95f4\u5dee\u8ddd\u7279\u522b\u5927 chrony \u53ef\u80fd\u4e0d\u4f1a\u540c\u6b65\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u914d\u7f6e ",(0,o.jsx)(e.code,{children:"makestep 1 -1"})," \u7136\u540e\u91cd\u542f - \u5f3a\u5236\u63a5\u53d7\u540c\u6b65\u6e90"]}),"\n",(0,o.jsx)(e.li,{children:"\u6216\u8005 maxdistance"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://chrony.tuxfamily.org/",children:"chrony.tuxfamily.org"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"GPLv2"}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://chrony.tuxfamily.org/doc/3.4/chrony.conf.html",children:"chrony.conf"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://docs.fedoraproject.org/en-US/Fedora/18/html/System_Administrators_Guide/sect-Checking_if_chrony_is_synchronized.html",children:"Checking if chrony is Synchronized"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"chronyc tracking    # \u67e5\u770b\u5f53\u524d\u72b6\u6001\nchronyc sources     # \u67e5\u770b\u540c\u6b65\u6e90\nchronyc -a makestep # \u4e3b\u52a8\u540c\u6b65\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-conf",metastring:"title=/etc/chrony/chrony.conf",children:"# \u5f3a\u5236\u6bcf 2^8=256 \u79d2\u540c\u6b65\u4e00\u6b21\nserver pool.ntp.org minpoll 8\n"})}),"\n",(0,o.jsx)(e.h2,{id:"chronyconf",children:"chrony.conf"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"server hostname [option]"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["minpoll=6\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"-6 < 24"})}),"\n",(0,o.jsx)(e.li,{children:"2^6=64 seconds"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["maxpoll=10\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"2^10=1024 seconds"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"pool name [options]"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u7c7b\u4f3c server\uff0c\u4f1a\u89e3\u6790\u4e3a\u591a\u4e2a server"}),"\n",(0,o.jsx)(e.li,{children:"\u6240\u6709 server \u53c2\u6570\u90fd\u53ef\u4ee5\u7528\u4e8e pool"}),"\n",(0,o.jsxs)(e.li,{children:["maxsources=4\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u9650\u5236\u53d6\u7684 source \u6570\u91cf"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u9ed8\u8ba4"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"pool pool.ntp.org iburst\ninitstepslew 10 pool.ntp.org\ndriftfile /var/lib/chrony/chrony.drift\nrtcsync\ncmdport 0\n"})})]})}function a(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},38088:(n,e,r)=>{var o=r(96651),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,r){var o,c={},d=null,h=null;for(o in void 0!==r&&(d=""+r),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(h=e.ref),e)i.call(e,o)&&!l.hasOwnProperty(o)&&(c[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps)void 0===c[o]&&(c[o]=e[o]);return{$$typeof:s,type:n,key:d,ref:h,props:c,_owner:t.current}}e.Fragment=c,e.jsx=d,e.jsxs=d},2488:(n,e,r)=>{n.exports=r(38088)},62780:(n,e,r)=>{r.d(e,{I:()=>t,M:()=>i});var o=r(96651);const s={},c=o.createContext(s);function i(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);