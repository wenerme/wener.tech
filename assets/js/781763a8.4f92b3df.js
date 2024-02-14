/*! For license information please see 781763a8.4f92b3df.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28428],{60716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(2488),s=t(62780);const o={title:"yq"},l="yq",i={id:"os/linux/shell/yq",title:"yq",description:"- mikefarah/yq",source:"@site/../notes/os/linux/shell/yq.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/yq",permalink:"/notes/os/linux/shell/yq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/yq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"yq"},sidebar:"docs",previous:{title:"xargs",permalink:"/notes/os/linux/shell/xargs"},next:{title:"zsh",permalink:"/notes/os/linux/shell/zsh"}},a={},c=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"yq",children:"yq"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mikefarah/yq",children:"mikefarah/yq"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MIT, Golang"}),"\n",(0,r.jsx)(n.li,{children:"\u7c7b\u4f3c jq \u4f46\u652f\u6301\u66f4\u591a\u683c\u5f0f\u548c\u529f\u80fd"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 YAML, JSON, XML, CSV, TOML, Properties"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301 inplace \u4fee\u6539 - jq \u4e0d\u53ef\u4ee5\uff0c\u6709\u65f6\u5019\u975e\u5e38\u9ebb\u70e6"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mikefarah.gitbook.io/yq/",children:"https://mikefarah.gitbook.io/yq/"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install yq\n\n# npm package.json\nyq -r '[.name,.version] | join(\"@\")' package.json\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},38088:(e,n,t)=>{var r=t(96651),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},2488:(e,n,t)=>{e.exports=t(38088)},62780:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>l});var r=t(96651);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);