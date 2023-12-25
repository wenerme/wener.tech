/*! For license information please see c8269441.2d9454ab.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10145],{27197:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=r(11527),s=r(47214);const i={title:"OpenWrt"},l="OpenWrt",o={id:"os/network/openwrt",title:"OpenWrt",description:"- [OpenWrt] - open wireless router",source:"@site/../notes/os/network/openwrt.md",sourceDirName:"os/network",slug:"/os/network/openwrt",permalink:"/notes/os/network/openwrt",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/network/openwrt.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"OpenWrt"},sidebar:"docs",previous:{title:"ImmortalWrt",permalink:"/notes/os/network/immortalwrt"},next:{title:"pfSense",permalink:"/notes/os/network/pfsense"}},c={},h=[{value:"Mesh",id:"mesh",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"openwrt",children:"OpenWrt"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/openwrt/openwrt",children:"OpenWrt"})," - open wireless router\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u81ea 2004 \u5e74 1 \u6708"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["OpenWrt \u884d\u751f\u7cfb\u7edf\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u90e8\u5206 \u5c0f\u7c73\u8def\u7531\u5668\u3001TP-Link \u8def\u7531\u5668\u56fa\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"Ubiquiti \u65e0\u7ebf\u8def\u7531\u56fa\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"immortalwrt"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u7ec4\u4ef6\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"util-linux, musl, busybox, ash, opkg"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.openwrt.org/doc/howto/docker_openwrt_image",children:"Docker OpenWrt Image"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://downloads.openwrt.org",children:"\u4e0b\u8f7d"})}),"\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["wikipedia ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OpenWrt",children:"OpenWrt"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/openwrt/packages",children:"openwrt/packages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5305\u542b apk-tools"}),"\n",(0,t.jsxs)(n.li,{children:["\u5b98\u65b9\u5f00\u59cb\u652f\u6301 APK - ",(0,t.jsx)(n.a,{href:"https://github.com/openwrt/openwrt/pull/4294",children:"openwrt/openwrt#4294"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u793e\u533a\u4ed3\u5e93\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/coolsnowwolf/packages",children:"coolsnowwolf/packages"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/openwrt/routing",children:"openwrt/routing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8def\u7531"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/openwrt/luci",children:"openwrt/luci"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OpenWrt Configuration Interface"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://openwrt.org/supported_devices",children:"\u652f\u6301\u8bbe\u5907"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6240\u6709 \u6811\u8393\u6d3e"}),"\n",(0,t.jsx)(n.li,{children:"NanoPi ROS"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openwrt.org/toh/recommended_routers",children:"\u63a8\u8350\u8def\u7531"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/gekmihesg/ansible-openwrt",children:"gekmihesg/ansible-openwrt"})}),"\n",(0,t.jsxs)(n.li,{children:["ansible ",(0,t.jsx)(n.a,{href:"https://docs.ansible.com/ansible/latest/collections/community/general/opkg_module.html",children:"opkg"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://downloads.asu.aparcar.org/apkwrt/",children:"https://downloads.asu.aparcar.org/apkwrt/"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"apk3 \u4ed3\u5e93"}),"\n",(0,t.jsx)(n.li,{children:"\u65b0\u7684 openwrt \u7528 apk \u66ff\u4ee3 opkg"}),"\n",(0,t.jsx)(n.li,{children:"apk - alpine package manager"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mesh",children:"Mesh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B.A.T.M.A.N."}),"\n",(0,t.jsx)(n.li,{children:"OLSR"}),"\n",(0,t.jsx)(n.li,{children:"\u652f\u6301 IEEE 802.11s \u7684 WNIC"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var t=r(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var t,i={},h=null,a=null;for(t in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:h,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=h,n.jsxs=h},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(50959);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);