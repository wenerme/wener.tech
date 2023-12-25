/*! For license information please see 54dd77b4.8d3fe777.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93443],{72812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(11527),s=t(47214);const i={title:"CBOR",tags:["RFC"]},c="CBOR",d={id:"service/api/cbor",title:"CBOR",description:"- cbor - Concise Binary Object Representation",source:"@site/../notes/service/api/cbor.md",sourceDirName:"service/api",slug:"/service/api/cbor",permalink:"/notes/service/api/cbor",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/cbor.md",tags:[{label:"RFC",permalink:"/notes/tags/rfc"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"CBOR",tags:["RFC"]},sidebar:"docs",previous:{title:"buf",permalink:"/notes/service/api/buf"},next:{title:"Dubbo",permalink:"/notes/service/api/dubbo"}},l={},a=[];function o(e){const n={a:"a",h1:"h1",li:"li",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cbor",children:"CBOR"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://cbor.io/",children:"cbor"})," - Concise Binary Object Representation\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RFC 8949"}),"\n",(0,r.jsx)(n.li,{children:"JSON \u7684\u4e8c\u8fdb\u5236\u66ff\u4ee3"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u822c\u4f1a\u548c JSON \u6df7\u5408\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u9002\u7528\u573a\u666f\uff1a IoT\u3001SOA\u3001\u9700\u8981\u6027\u80fd\u3001\u9700\u8981\u51cf\u5c11\u5e26\u5bbd"}),"\n",(0,r.jsxs)(n.li,{children:["adopted by\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"WebAuthN"}),"\n",(0,r.jsx)(n.li,{children:"WebIntegraty"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://cbor.me",children:"cbor.me"}),"\nOnline converter"]}),"\n",(0,r.jsxs)(n.li,{children:["Golang - ",(0,r.jsx)(n.a,{href:"https://github.com/fxamacker/cbor",children:"fxamacker/cbor"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8949",children:"rfc8949"}),"\nCBOR - Concise Binary Object Representation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8610",children:"rfc8610"}),"\nCDDL - Concise Data Definition Language"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8152",children:"rfc8152"}),"\nCOSE - CBOR Object Signing and Encryption"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8392",children:"rfc8392"}),"\nCWT - CBOR Web Token"]}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8949.html#section-3.1",children:"Major Type"})}),(0,r.jsx)(n.th,{children:"Meaning"}),(0,r.jsx)(n.th,{children:"Content"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"unsigned integer N"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"negative integer -1-N"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"byte string"}),(0,r.jsx)(n.td,{children:"N bytes - base64url - wo pad"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"text string"}),(0,r.jsx)(n.td,{children:"N bytes (UTF-8 text)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"N data items (elements)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"map"}),(0,r.jsx)(n.td,{children:"2N data items (key/ value pairs)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"tag of number N"}),(0,r.jsx)(n.td,{children:"1 data item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"simple/float"}),(0,r.jsx)(n.td,{children:"-"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,o=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:d.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var r=t(50959);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);