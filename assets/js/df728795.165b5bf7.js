/*! For license information please see df728795.165b5bf7.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[72526],{49097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(11527),o=n(47214);const r={title:"ShadowDOM"},i="ShadowDOM",a={id:"web/spec/shadowdom",title:"ShadowDOM",description:"- mdn ShadowRoot",source:"@site/../notes/web/spec/shadowdom.md",sourceDirName:"web/spec",slug:"/web/spec/shadowdom",permalink:"/notes/web/spec/shadowdom",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/shadowdom.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1698118598,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{title:"ShadowDOM"},sidebar:"docs",previous:{title:"PWA",permalink:"/notes/web/spec/pwa"},next:{title:"SVG",permalink:"/notes/web/spec/svg"}},d={},c=[{value:"Failed to execute &#39;attachShadow&#39; on &#39;Element&#39;: Shadow root cannot be created on a host which already hosts a shadow tree.",id:"failed-to-execute-attachshadow-on-element-shadow-root-cannot-be-created-on-a-host-which-already-hosts-a-shadow-tree",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"shadowdom",children:"ShadowDOM"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["mdn ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot",children:"ShadowRoot"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://wicg.github.io/construct-stylesheets/",children:"construct-stylesheets"})}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["vite css ",(0,s.jsx)(t.a,{href:"https://github.com/vitejs/vite/issues/11855",children:"https://github.com/vitejs/vite/issues/11855"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/web-widget/vite-plugin-shadow-dom-css",children:"https://github.com/web-widget/vite-plugin-shadow-dom-css"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["HeadlessUI Portal\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/tailwindlabs/headlessui/discussions/874",children:"https://github.com/tailwindlabs/headlessui/discussions/874"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["AntD style & portal\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ant-design/ant-design/issues/38911",children:"https://github.com/ant-design/ant-design/issues/38911"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["react-hot-toast inject style\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/timolins/react-hot-toast/issues/189",children:"https://github.com/timolins/react-hot-toast/issues/189"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"AntD"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import React from 'react';\nimport { ConfigProvider as AntdConfigProvider } from 'antd';\nimport { StyleProvider as AntdStyleProvider } from '@ant-design/cssinjs';\nimport enUS from 'antd/es/locale/en_US';\n\nconst container = myShadowRootHere;\n\nconst App = () => {\n  return (\n    <AntdStyleProvider container={container}>\n      <AntdConfigProvider\n        locale={enUS}\n        theme={{\n          token: {\n            colorPrimary: '#000',\n          },\n        }}\n      >\n        {/* Rest of the code */}\n      </AntdConfigProvider>\n    </AntdStyleProvider>\n  );\n};\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"function patchHeadlessUiPortalRoot(host) {\n  const portal = document.getElementById('headlessui-portal-root');\n  const _shadow = host.shadowRoot?.children[0];\n  if (_shadow && portal) {\n    _shadow.appendChild(portal);\n    return true;\n  }\n  return false;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"failed-to-execute-attachshadow-on-element-shadow-root-cannot-be-created-on-a-host-which-already-hosts-a-shadow-tree",children:"Failed to execute 'attachShadow' on 'Element': Shadow root cannot be created on a host which already hosts a shadow tree."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3354:(e,t,n)=>{var s=n(50959),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,l=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(50959);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);