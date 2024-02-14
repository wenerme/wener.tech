/*! For license information please see 9b4b19de.59e875b3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71292],{78208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(2488),i=t(62780);const s={title:"centrifugo"},c="centrifugo",l={id:"service/messaging/centrifugo",title:"centrifugo",description:"- centrifugal/centrifugo",source:"@site/../notes/service/messaging/centrifugo.md",sourceDirName:"service/messaging",slug:"/service/messaging/centrifugo",permalink:"/notes/service/messaging/centrifugo",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/messaging/centrifugo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689238697,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{title:"centrifugo"},sidebar:"docs",previous:{title:"vips",permalink:"/notes/service/media/vips"},next:{title:"\u7f51\u7edc\u670d\u52a1",permalink:"/notes/service/network/"}},o={},u=[];function a(e){const n={a:"a",h1:"h1",li:"li",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"centrifugo",children:"centrifugo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/centrifugal/centrifugo",children:"centrifugal/centrifugo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5b9e\u65f6\u6d88\u606f\u670d\u52a1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f5c\u4e3a\u72ec\u7acb\u670d\u52a1\u5b58\u5728"}),"\n",(0,r.jsx)(n.li,{children:"JWT \u8ba4\u8bc1"}),"\n",(0,r.jsx)(n.li,{children:"\u66b4\u9732 HTTP, GRPC \u63a5\u53e3"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u5c06 RPC Websocket \u8bf7\u6c42\u8f6c\u6362\u4e3a HTTP \u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"MIT \u534f\u8bae"}),"\n",(0,r.jsx)(n.li,{children:"language-agnostic - \u8bed\u8a00\u65e0\u5173"}),"\n",(0,r.jsx)(n.li,{children:"Websocket - JSON, Protobuf"}),"\n",(0,r.jsx)(n.li,{children:"SockJS - polyfill"}),"\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u4f3c\u5546\u4e1a\u4ea7\u54c1\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pusher.com/websockets",children:"https://pusher.com/websockets"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9002\u7528\u573a\u666f\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"php+html - php \u4e0d\u6613\u5904\u7406 ws\uff0c\u4f46\u4f7f\u7528\u8be5\u670d\u52a1\u53ef\u4ee5 php --POST-> centrifugo --WS-> html"}),"\n",(0,r.jsx)(n.li,{children:"vercel \u90e8\u7f72\u8bf7\u6c42\u5fc5\u987b 10s \u5185 - \u5219\u53ef\u4ee5 NextJS \u540e\u7aef -> centrifugo -> \u524d\u7aef"}),"\n",(0,r.jsx)(n.li,{children:"AWS Lambda \u573a\u666f - \u6ca1\u6709\u957f\u94fe\u63a5\uff0c\u9700\u8981\u652f\u6301\u901a\u77e5"}),"\n",(0,r.jsx)(n.li,{children:"Function as a Service \u573a\u666f - \u6ca1\u6709\u94fe\u63a5\u6982\u5ff5\uff0c\u9700\u8981\u652f\u6301\u901a\u77e5"}),"\n",(0,r.jsx)(n.li,{children:"\u804a\u5929\u4ea7\u54c1\u3001\u5b9e\u65f6\u901a\u77e5\u3001\u6d88\u606f\u96c6\u6210\u3001\u4e8b\u4ef6\u9a71\u52a8"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c\u4e8e Kafka\uff0c\u4f46\u662f\u662f\u9762\u5411 C \u7aef\u4ea7\u54c1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["HTTP\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"X-API-Key"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"GRPC"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38088:(e,n,t)=>{var r=t(96651),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,s={},u=null,a=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:u,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>c});var r=t(96651);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);