/*! For license information please see 4fb73a2c.85191519.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98451],{5610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(11527),s=t(47214);const o={tags:["API"]},l="URLPattern",i={id:"web/spec/URLPattern",title:"URLPattern",description:"- URLPattern",source:"@site/../notes/web/spec/URLPattern.md",sourceDirName:"web/spec",slug:"/web/spec/URLPattern",permalink:"/notes/web/spec/URLPattern",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/URLPattern.md",tags:[{label:"API",permalink:"/notes/tags/api"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{tags:["API"]},sidebar:"docs",previous:{title:"\u89c4\u8303",permalink:"/notes/web/spec/"},next:{title:"Drag & Drop",permalink:"/notes/web/spec/dnd"}},c={},d=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"urlpattern",children:"URLPattern"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URLPattern",children:"URLPattern"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["wicg ",(0,r.jsx)(n.a,{href:"https://wicg.github.io/urlpattern",children:"urlpattern"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u8bed\u6cd5\u57fa\u4e8e ",(0,r.jsx)(n.a,{href:"https://github.com/pillarjs/path-to-regexp",children:"path-to-regexp"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/posts/*"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/books/:id"}),","]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/books/:id?"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/books/:id+"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/books/:id*"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/books{/old}?"}),","]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/books/(^\\d)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/books/:id(\\\\d+)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/blog/:id(\\\\d+){-:title}?"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'data\\\\:foo*'"})," - data url"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/*.:filetype(jpg|png)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Chrome 95+"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["polyfill ",(0,r.jsx)(n.a,{href:"https://github.com/kenchris/urlpattern-polyfill",children:"kenchris/urlpattern-polyfill"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new URLPattern({ pathname: '/books/:id' }).exec('https://example.com/books/123').pathname.groups;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(50959);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);