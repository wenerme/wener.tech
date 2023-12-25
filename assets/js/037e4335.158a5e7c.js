/*! For license information please see 037e4335.158a5e7c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68513],{81518:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(11527),r=s(47214);const i={title:"memtest"},l="memtest",o={id:"os/linux/sys/memtest",title:"memtest",description:"- memtester",source:"@site/../notes/os/linux/sys/memtest.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/memtest",permalink:"/notes/os/linux/sys/memtest",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/memtest.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686636573,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{title:"memtest"},sidebar:"docs",previous:{title:"LSM",permalink:"/notes/os/linux/sys/lsm"},next:{title:"mitigations",permalink:"/notes/os/linux/sys/mitigations"}},m={},c=[{value:"memtest",id:"memtest-1",level:2},{value:"trying mlock ...too many pages, reducing",id:"trying-mlock-too-many-pages-reducing",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"memtest",children:"memtest"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pyropus.ca./software/memtester/",children:"memtester"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"http://www.memtest.org/",children:"memtest86+"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"16-bit, \u4e0d\u652f\u6301 UEFI"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.memtest86.com/",children:"memtest86.com"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u5546\u4e1a, \u6709 free \u7248\u672c"}),"\n",(0,n.jsx)(t.li,{children:"\u652f\u6301 UEFI"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"memtest-1",children:"memtest"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -LO http://www.memtest.org/download/5.31b/memtest86+-5.31b.iso.zip\nunzip memtest86+-5.31b.iso.zip\n\nsudo dd bs=4M if=mt531b.iso of=/dev/sdb conv=fdatasync\nsudo dd bs=4M if=memtest86+-5.31b.bin of=/dev/sdb conv=fdatasync\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# \u68c0\u67e5\u90e8\u5206\u5185\u5b58\nmemtester -p 0xfce20000 64k 128\n"})}),"\n",(0,n.jsx)(t.h1,{id:"memtester",children:"memtester"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pyropus.ca./software/memtester/",children:"memtester"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/jnavila/memtester",children:"jnavila/memtester"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/jnavila/memtester/blob/master/memtester.8",children:"https://github.com/jnavila/memtester/blob/master/memtester.8"})}),"\n",(0,n.jsx)(t.li,{children:"MEMTESTER_TEST_MASK"}),"\n",(0,n.jsx)(t.li,{children:"test_stuck_address"}),"\n",(0,n.jsx)(t.li,{children:"test_random_value"}),"\n",(0,n.jsx)(t.li,{children:"test_xor_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_sub_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_mul_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_div_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_or_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_and_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_solidbits_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_checkerboard_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_blockseq_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_walkbits0_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_walkbits1_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_bitspread_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_bitflip_comparison"}),"\n",(0,n.jsx)(t.li,{children:"test_8bit_wide_random"}),"\n",(0,n.jsx)(t.li,{children:"test_16bit_wide_random"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apk add memtester\n# size iteratio\nmemtester 30G 1\n"})}),"\n",(0,n.jsx)(t.h2,{id:"trying-mlock-too-many-pages-reducing",children:"trying mlock ...too many pages, reducing"}),"\n",(0,n.jsx)(t.p,{children:"\u7528 root \u8d26\u53f7"})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3354:(e,t,s)=>{var n=s(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,i={},c=null,a=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!m.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},11527:(e,t,s)=>{e.exports=s(3354)},47214:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var n=s(50959);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);