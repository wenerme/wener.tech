/*! For license information please see 797f58a6.21167f1b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17064],{54288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(2488),a=r(62780);const l={title:"laravel"},s="laravel",o={id:"languages/php/laravel/README",title:"laravel",description:"- production",source:"@site/../notes/languages/php/laravel/README.md",sourceDirName:"languages/php/laravel",slug:"/languages/php/laravel/",permalink:"/notes/languages/php/laravel/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/php/laravel/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"laravel"},sidebar:"docs",previous:{title:"composer",permalink:"/notes/languages/php/composer"},next:{title:"Laravel FAQ",permalink:"/notes/languages/php/laravel/faq"}},i={},p=[{value:"string primary key",id:"string-primary-key",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"laravel",children:"laravel"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["production\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"APP_DEBUG=false"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"string-primary-key",children:"string primary key"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"class UserVerification extends Model\n{\n    protected $primaryKey = 'your_key_name';\n    public $incrementing = false;\n    protected $keyType = 'string';\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38088:(e,n,r)=>{var t=r(96651),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var t,l={},p=null,c=null;for(t in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:a,type:e,key:p,ref:c,props:l,_owner:o.current}}n.Fragment=l,n.jsx=p,n.jsxs=p},2488:(e,n,r)=>{e.exports=r(38088)},62780:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>s});var t=r(96651);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);