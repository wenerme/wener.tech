/*! For license information please see 406424ff.be1445cb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69856],{79152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(2488),o=t(62780);const s={title:"x-render"},i="alibaba/x-render",a={id:"web/editor/x-render",title:"x-render",description:"- schema \u57fa\u4e8e json-schema",source:"@site/../notes/web/editor/x-render.md",sourceDirName:"web/editor",slug:"/web/editor/x-render",permalink:"/notes/web/editor/x-render",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/x-render.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{title:"x-render"},sidebar:"docs",previous:{title:"unifiedjs",permalink:"/notes/web/editor/unifiedjs"},next:{title:"yjs",permalink:"/notes/web/editor/yjs"}},d={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alibabax-render",children:"alibaba/x-render"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"schema \u57fa\u4e8e json-schema"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/alibaba/x-render/tree/master/tools/schema-generator",children:"fr-generator"})," - \u8868\u5355\u8bbe\u8ba1\u5668\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://xrender.fun/generator/playground",children:"https://xrender.fun/generator/playground"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  // \u5e03\u5c40\u6837\u5f0f\u63a7\u5236\n  "displayType": "row",\n  "labelWidth": 60,\n  "type": "object",\n  "properties": {\n    // \u6570\u636e\u5b57\u6bb5\u5b9a\u4e49\n    "input": {\n      "title": "\u7b80\u5355\u8f93\u5165\u6846",\n      // \u7ec4\u4ef6\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\n      "type": "string",\n      "min": 6,\n      "rules": [\n        {\n          "pattern": "^[A-Za-z0-9]+$",\n          "message": "\u53ea\u5141\u8bb8\u586b\u5199\u82f1\u6587\u5b57\u6bcd\u548c\u6570\u5b57"\n        }\n      ]\n    },\n    "select": {\n      "title": "\u5355\u9009",\n      "type": "string",\n      "enum": ["a", "b", "c"],\n      "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],\n      // \u63a7\u5236\u4f7f\u7528\u7684\u7ec4\u4ef6\n      "widget": "radio"\n    },\n    //\n    "showSetting": {\n      "title": "\u662f\u5426\u5c55\u793a\u7f51\u5740",\n      "type": "boolean"\n    },\n    "siteUrl": {\n      "title": "\u7f51\u5740",\n      "type": "string",\n      "placeholder": "\u6b64\u5904\u5fc5\u586b",\n      // \u8054\u52a8\u63a7\u5236\n      "hidden": "{{formData.showSetting !== true}}",\n      "required": true,\n      "props": {\n        "addonBefore": "https://",\n        "addonAfter": ".com"\n      }\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38088:(e,n,t)=>{var r=t(96651),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var r=t(96651);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);