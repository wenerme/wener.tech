/*! For license information please see cb5342e3.2c7dc9da.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68775],{83720:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(2488),r=o(62780);const a={title:"protoc-gen-validate"},i="protoc-gen-validate",c={id:"service/api/protobuf/protoc-gen-validate",title:"protoc-gen-validate",description:"- envoyproxy/protoc-gen-validate",source:"@site/../notes/service/api/protobuf/protoc-gen-validate.md",sourceDirName:"service/api/protobuf",slug:"/service/api/protobuf/protoc-gen-validate",permalink:"/notes/service/api/protobuf/protoc-gen-validate",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/protobuf/protoc-gen-validate.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"protoc-gen-validate"},sidebar:"docs",previous:{title:"protobuf-web",permalink:"/notes/service/api/protobuf/web"},next:{title:"protoc",permalink:"/notes/service/api/protobuf/protoc"}},s={},p=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"protoc-gen-validate",children:"protoc-gen-validate"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/envoyproxy/protoc-gen-validate",children:"envoyproxy/protoc-gen-validate"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u63d0\u4f9b\u6821\u9a8c\u80fd\u529b"}),"\n",(0,n.jsx)(t.li,{children:"\u652f\u6301 go,java,cc"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'go install github.com/envoyproxy/protoc-gen-validate@latest\n\n# \u4e0b\u8f7d\ngo get -d github.com/envoyproxy/protoc-gen-validate\n\nprotoc \\\n  -I . \\\n  -I ${GOPATH}/src \\\n  -I ${GOPATH}/src/github.com/envoyproxy/protoc-gen-validate \\\n  --go_out=":../generated" \\\n  --validate_out="lang=go:../generated" \\\n  example.proto\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},38088:(e,t,o)=>{var n=o(96651),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,o){var n,a={},p=null,l=null;for(n in void 0!==o&&(p=""+o),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:p,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},2488:(e,t,o)=>{e.exports=o(38088)},62780:(e,t,o)=>{o.d(t,{I:()=>c,M:()=>i});var n=o(96651);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);