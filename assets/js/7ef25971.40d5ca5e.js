/*! For license information please see 7ef25971.40d5ca5e.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91384],{65420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(11527),t=n(47214);const o={title:"Zerotier"},l="Zerotier",s={id:"service/network/vpn/zerotier",title:"Zerotier",description:"- zerotier/ZeroTierOne",source:"@site/../notes/service/network/vpn/zerotier.md",sourceDirName:"service/network/vpn",slug:"/service/network/vpn/zerotier",permalink:"/notes/service/network/vpn/zerotier",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/vpn/zerotier.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Zerotier"},sidebar:"docs",previous:{title:"Zerotier Controller",permalink:"/notes/service/network/vpn/zerotier-controller"},next:{title:"Wireshark",permalink:"/notes/service/network/wireshark"}},c={},d=[{value:"controller",id:"controller",level:2},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668",id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668",level:3},{value:"REQUESTING_CONFIGURATION",id:"requesting_configuration",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"zerotier",children:"Zerotier"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne",children:"zerotier/ZeroTierOne"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"BSL, C++"}),"\n",(0,i.jsx)(r.li,{children:"\u4e2d\u5fc3\u5316 P2P Mesh VPN"}),"\n",(0,i.jsx)(r.li,{children:"2 \u5c42 \u7f51\u7edc"}),"\n",(0,i.jsx)(r.li,{children:"\u652f\u6301\u6388\u6743\u7ba1\u7406"}),"\n",(0,i.jsx)(r.li,{children:"\u652f\u6301 \u5730\u5740 \u914d\u7f6e"}),"\n",(0,i.jsx)(r.li,{children:"\u652f\u6301\u8def\u7531\u4e0b\u53d1"}),"\n",(0,i.jsx)(r.li,{children:"\u4f9d\u8d56\u5b98\u65b9 root \u670d\u52a1\u5668"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://www.zerotier.com/manual",children:"Manual"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://zerotier.atlassian.net/wiki/spaces/SD/pages/6815768/Router+Configuration+Tips",children:"Router Configuration Tips"})}),"\n",(0,i.jsx)(r.li,{children:"\u9ed8\u8ba4\u7aef\u53e3 9993"}),"\n",(0,i.jsx)(r.li,{children:"\u652f\u6301 uPnP \u6216 NAT-PMP \u76f4\u63a5\u6620\u5c04\u7aef\u53e3\u80fd\u66f4\u5bb9\u6613\u76f4\u8fde"}),"\n",(0,i.jsxs)(r.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://github.com/key-networks/ztncui",children:"key-networks/ztncui"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"web controller"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/xubiaolin/docker-zerotier-planet",children:"xubiaolin/docker-zerotier-planet"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"caution",children:(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u5982\u679c\u5927\u91cf\u4f20\u8f93\u6570\u636e\u53ef\u80fd\u5bfc\u81f4\u88ab\u5b98\u65b9 ZTC block\uff0c\u72b6\u6001\u4e00\u76f4\u5904\u4e8e REQUESTING_CONFIGURATION\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u5220\u9664\u672c\u5730 ID \u91cd\u8fde\u5e94\u8be5\u53ef\u4ee5\u89e3\u51b3"}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/var/lib/zerotier-one/identity.*"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"apk add zerotier-one\nservice zerotier-one start\n\n# \u524d\u5f80 https://my.zerotier.com/ \u6ce8\u518c\u521b\u5efa\u7f51\u7edc\nzerotier-cli join NETWORK\n"})}),"\n",(0,i.jsx)(r.h2,{id:"controller",children:"controller"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["zerotier-one ",(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/blob/master/one.cpp",children:"one.cpp"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"idtool \u548c cli \u662f\u516c\u7528\u540c\u4e00\u4e2a bin"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/blob/master/controller/EmbeddedNetworkController.cpp",children:"EmbeddedNetworkController.cpp"})}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/blob/db813db7e875c257e42c41ab8091c3df1e9300a5/osdep/OSUtils.cpp#L382",children:"platformDefaultHomePath"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["macOS ",(0,i.jsx)(r.code,{children:"/Library/Application Support/ZeroTier/One"})]}),"\n",(0,i.jsxs)(r.li,{children:["linux ",(0,i.jsx)(r.code,{children:"/var/lib/zerotier-one"})]}),"\n",(0,i.jsxs)(r.li,{children:["windows ",(0,i.jsx)(r.code,{children:"C:\\ProgramData\\ZeroTier\\One"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"# macOS controller\n# \u4f7f\u7528 $PWD/controller \u4f5c\u4e3a HOME\nsudo /Library/Application\\ Support/ZeroTier/One/zerotier-one $PWD/controller\n\n# docker controller\ndocker run --rm -it -p 9993:9993 wener:edge\napk update && apk add zerotier-one\n# controller \u9ed8\u8ba4\u7aef\u53e3 9993\nzerotier-one -p9993\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u7b14\u8bb0",children:"\u7b14\u8bb0"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["V1 \u7f51\u7edc\u5c42\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"P2P"}),"\n",(0,i.jsx)(r.li,{children:"\u901a\u8fc7\u6839\u670d\u52a1\u7ec4\u7f51"}),"\n",(0,i.jsx)(r.li,{children:"0 \u914d\u7f6e"}),"\n",(0,i.jsx)(r.li,{children:"1 \u4e2a earth \u6839\u670d\u52a1\u5668\uff0c\u7531 ZeroTier \u8fd0\u8425\uff1b12 \u4e2a\u6839\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(r.li,{children:"\u56f4\u7ed5 earth \u7684\u4e3a moon\uff1b \u7528\u4e8e\u6dfb\u52a0\u7528\u6237\u5b9a\u4e49\u7684\u6839\u670d\u52a1\uff1b\u4f7f\u7528 moon \u8282\u70b9\u53ef\u907f\u514d\u4f9d\u8d56 ZeroTier \u7684\u57fa\u7840\u8bbe\u65bd\uff1b\u53ef\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd"}),"\n",(0,i.jsx)(r.li,{children:"\u6bcf\u4e2a\u51e0\u70b9\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 40 \u4f4d\uff0810 \u4f4d 16 \u8fdb\u5236\u5b57\u7b26\uff09 \u7684\u6807\u8bc6\u7b26\uff1b\u901a\u8fc7\u516c\u94a5\u548c\u79c1\u94a5\u8ba1\u7b97\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(r.h3,{id:"\u8df3\u8fc7-zerotier-\u670d\u52a1\u5668",children:"\u8df3\u8fc7 ZeroTier \u670d\u52a1\u5668"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/issues/610",children:"#610"})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/blob/master/attic/world/mkworld.cpp",children:"mkworld.cpp"})," \u521d\u59cb\u5316\u57fa\u7840\u4fe1\u606f\uff0c\u5305\u542b\u6240\u6709\u7684 root \u670d\u52a1\u5668\uff0c\u9700\u8981\u8df3\u8fc7\u8fd9\u4e9b\u670d\u52a1\u5668\u5219\u9700\u8981\u4fee\u6539\u4ece\u65b0\u751f\u6210\u3002"]}),"\n",(0,i.jsx)(r.h3,{id:"requesting_configuration",children:"REQUESTING_CONFIGURATION"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/zerotier/ZeroTierOne/issues/1214",children:"#1214"})}),"\n",(0,i.jsxs)(r.li,{children:["\u5c1d\u8bd5\u51cf\u5c11 network \u540e\u6062\u590d\u4e86\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u975e\u5e38\u9ebb\u70e6\uff0c\u4e0d\u597d\u6062\u590d"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3354:(e,r,n)=>{var i=n(50959),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var i,o={},d=null,h=null;for(i in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(h=r.ref),r)l.call(r,i)&&!c.hasOwnProperty(i)&&(o[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===o[i]&&(o[i]=r[i]);return{$$typeof:t,type:e,key:d,ref:h,props:o,_owner:s.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},11527:(e,r,n)=>{e.exports=n(3354)},47214:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>l});var i=n(50959);const t={},o=i.createContext(t);function l(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);