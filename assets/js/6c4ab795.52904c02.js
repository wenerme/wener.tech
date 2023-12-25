/*! For license information please see 6c4ab795.52904c02.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49881],{62938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(11527),s=t(47214);const c={title:"gcc"},o="gcc",l={id:"languages/c/gcc",title:"gcc",description:"| gcc version | kernel version |",source:"@site/../notes/languages/c/gcc.md",sourceDirName:"languages/c",slug:"/languages/c/gcc",permalink:"/notes/languages/c/gcc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/c/gcc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"gcc"},sidebar:"docs",previous:{title:"C FAQ",permalink:"/notes/languages/c/faq"},next:{title:"libdl",permalink:"/notes/languages/c/lib/dl"}},i={},a=[{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:2},{value:"Misc",id:"misc",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"gcc",children:"gcc"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"gcc version"}),(0,r.jsx)(n.th,{children:"kernel version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6+"}),(0,r.jsx)(n.td,{children:"3.2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4+"}),(0,r.jsx)(n.td,{children:"2.6.31"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"LD_LIBRARY_PATH=. ./strace\n\ngcc -print-file-name=crt1.o\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ea4\u53c9\u7f16\u8bd1",children:"\u4ea4\u53c9\u7f16\u8bd1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/crosstool-ng/crosstool-ng",children:"crosstool-ng/crosstool-ng"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"cross-toolchain generator"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://releases.linaro.org/components/toolchain/binaries/",children:"https://releases.linaro.org/components/toolchain/binaries/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/dockcross/dockcross",children:"dockcross/dockcross"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://android.googlesource.com/platform/prebuilts/gcc/",children:"https://android.googlesource.com/platform/prebuilts/gcc/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/usr/lib/gcc/x86_64-linux-gnu/10/crtbeginT.o: relocation R_X86_64_32 against hidden symbol `__TMC_END__` can not be used when making a shared object\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u80fd static link"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var r=t(50959),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,d=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:d,props:c,_owner:l.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(50959);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);