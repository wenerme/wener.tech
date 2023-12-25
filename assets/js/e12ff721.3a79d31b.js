/*! For license information please see e12ff721.3a79d31b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24368],{45834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(11527),i=t(47214);const s={title:"IoT"},l="IoT",a={id:"hardware/iot/README",title:"IoT",description:"Notes",source:"@site/../notes/hardware/iot/README.md",sourceDirName:"hardware/iot",slug:"/hardware/iot/",permalink:"/notes/hardware/iot/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/iot/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"IoT"},sidebar:"docs",previous:{title:"USB",permalink:"/notes/hardware/interface/usb"},next:{title:"Home Assistant",permalink:"/notes/hardware/iot/home-assistant"}},o={},d=[{value:"Notes",id:"notes",level:2},{value:"Dev",id:"dev",level:2},{value:"\u5e73\u53f0",id:"\u5e73\u53f0",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"iot",children:"IoT"}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["IoT \u4e3b\u65e8\u662f let things accessible\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6269\u5c55/\u6253\u7834\u73b0\u6709\u8fb9\u754c"}),"\n",(0,r.jsx)(n.li,{children:"\u884d\u751f\u65b0\u7684\u4ea7\u54c1\u65b9\u5411"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u76ee\u524d\u7684\u4e3b\u8981\u8bbf\u95ee\u65b9\u5f0f\u662f\u7f51\u7edc\u53ef\u8bbf\u95ee - \u6700\u7ec8\u63a5\u5165\u7f51\u7edc"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0a\u4e00\u4ee3\u53ef\u80fd\u4f7f\u7528 zigbee \u4e4b\u7c7b\u7684\u8def\u7531 hub \u63a5\u5165\u7f51\u7edc\uff0c\u800c\u73b0\u5728\u5927\u591a\u76f4\u63a5\u63a5\u5165 wifi"}),"\n",(0,r.jsx)(n.li,{children:"\u5927\u591a\u65f6\u5019\u4e0e\u5916\u8bbe\u6253\u4ea4\u9053\uff0c\u719f\u6089\u5404\u79cd\u63a5\u53e3\u534f\u8bae\u5c24\u4e3a\u91cd\u8981"}),"\n",(0,r.jsxs)(n.li,{children:["\u9009\u62e9\u4e0d\u540c\u7684\u5e73\u53f0\u662f\u6210\u672c\u63a7\u5236\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 RPiZeroW 100 \u5143\u5de6\u53f3\uff0c\u4f46\u4f7f\u7528 ESP32 \u80fd\u5b9e\u73b0\u6240\u9700\u53ef\u80fd\u5219\u5f88\u597d\u7684\u63a7\u5236\u4e86\u6210\u672c"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 \u4e0d\u9700\u8981\u7f51\u7edc\uff0c\u9009\u62e9\u4e86 attiny \u8fdb\u884c\u903b\u8f91\u63a7\u5236\u5b9e\u73b0\u7684\u529f\u80fd\u53c8\u964d\u4f4e\u4e86\u6210\u672c"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9009\u62e9\u5e73\u53f0\u548c\u8bed\u8a00\u957f\u671f\u6295\u5165\u7684\u56de\u62a5\u662f\u590d\u7528\u6027\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 arm \u5e73\u53f0\uff0cavr \u5e73\u53f0\uff0cmips \u5e73\u53f0"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 C\u3001JS\u3001Golang\u3001Lua"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u9009\u62e9\u5e73\u53f0\u8fd8\u610f\u5473\u7740\u9009\u62e9\u82af\u7247 - esp32\u3001attiny\u3001stm32"}),"\n",(0,r.jsx)(n.li,{children:"\u9009\u62e9\u5916\u8bbe\u63a5\u53e3\u540c\u6837\u91cd\u8981"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dev",children:"Dev"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Golang\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Mainflux/mainflux",children:"Mainflux/mainflux"})," - Messaging and Device Management Platform"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.mainflux.com/",children:"https://www.mainflux.com/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5e73\u53f0",children:"\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/taosdata/TDengine",children:"taosdata/TDengine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.taosdata.com",children:"taosdata.com"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.taosdata.com/cn/documentation20",children:"\u4e2d\u6587\u6587\u6863"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3354:(e,n,t)=>{var r=t(50959),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(50959);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);