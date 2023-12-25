/*! For license information please see d8d5a366.c5dbdf4b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34050],{35807:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var i=r(11527),s=r(47214);const l={title:"\u5185\u5b58"},d="\u5185\u5b58",t={id:"hardware/memory",title:"\u5185\u5b58",description:"\u540d\u8bcd",source:"@site/../notes/hardware/memory.md",sourceDirName:"hardware",slug:"/hardware/memory",permalink:"/notes/hardware/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/memory.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1687329439,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"\u5185\u5b58"},sidebar:"docs",previous:{title:"LoRa",permalink:"/notes/hardware/iot/lora"},next:{title:"Arduino",permalink:"/notes/hardware/microcontroller/dev/arduino"}},c={},h=[{value:"\u540d\u8bcd",id:"\u540d\u8bcd",level:2},{value:"GTK",id:"gtk",level:2},{value:"MHz",id:"mhz",level:2},{value:"UDIMM vs RDIMM",id:"udimm-vs-rdimm",level:2},{value:"Rank",id:"rank",level:2},{value:"DDR3 vs DDR4",id:"ddr3-vs-ddr4",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5185\u5b58",children:"\u5185\u5b58"}),"\n",(0,i.jsx)(n.h2,{id:"\u540d\u8bcd",children:"\u540d\u8bcd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Registered_memory",children:"REG"})," / \u5bc4\u5b58\u5668\u5185\u5b58\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bc4\u5b58\u5668\u5185\u5b58\u65e0\u6cd5\u5728\u975e\u4e3a\u5176\u8bbe\u8ba1\u7684\u4e3b\u677f\u4e0a\u4f7f\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u5bc4\u5b58\u5668\u5185\u5b58\u4e0e\u975e\u5bc4\u5b58\u5668\u5185\u5b58\u4e0d\u80fd\u6df7\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/DIMM",children:"DIMM"})," \u53cc\u5217\u76f4\u63d2\u5f0f\u5185\u5b58\u6a21\u5757\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RDIMM - Buffered/Registered DIMM"}),"\n",(0,i.jsxs)(n.li,{children:["UDIMM - Unbuffered/Unregistered DIMM\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6bd4\u8f83\u5c11\uff0c\u4ef7\u683c\u9ad8\uff0c\u5efa\u8bae\u7528 RDIMM"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"FBDIMM - Buffered/Registered"}),"\n",(0,i.jsxs)(n.li,{children:["SO-DIMM\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7b14\u8bb0\u672c\u5185\u5b58"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u65e0\u7f13\u51b2\u5185\u5b58\uff08unbuffered memory\uff09\u6216\u975e\u5bc4\u5b58\u5668\u5185\u5b58\uff08unregistered memory\uff09"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.crucial.com/support/articles-faq-memory/how-much-power-does-memory-use",children:"How Much Power Does Memory Use?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"3w 8G"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.anandtech.com/show/15912/ddr5-specification-released-setting-the-stage-for-ddr56400-and-beyond",children:"DDR5 Memory Specification Released: Setting the Stage for DDR5-6400 And Beyond"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"64 Gbit 128 GB 6.4 Gbps"}),"\n",(0,i.jsx)(n.li,{children:"\u81ea\u5e26 ECC"}),"\n",(0,i.jsx)(n.li,{children:"\u6700\u5927 32TB - 8 Channel 16 DIMM per socket"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://news.ycombinator.com/item?id=23860779",children:"HN"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Multi-bit ECC - Fully buffered\n# Single-bit ECC - Unbuffered\n# None - \u65e0 ECC\ndmidecode -t 16 | grep "Error Correction Type:"\n# \u5185\u5b58\u578b\u53f7\ndmidecode -t 17 | grep "Part Number:"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"gtk",children:"GTK"}),"\n",(0,i.jsxs)(n.p,{children:["\u53e6\u5916, 1G43 \u8bf4\u660e\u662f E-die x8 \u6392\u5217(B-die \u7684\u4e2d\u95f4\u90a3\u4e2a\u5b57\u6bcd\u90fd\u662f K), \u4e5f\u5c31\u662f ",(0,i.jsx)(n.code,{children:"1Rank=512MB*64/8=4G"}),"B, \u5355\u6761 2Ranks \u7684 E-die \u53ea\u80fd\u662f 8GB"]}),"\n",(0,i.jsx)(n.p,{children:"Non-ECC UDIMM \u548c ECC UDIMM \u90fd\u4e0d\u4f1a\u91c7\u7528 x4 \u6392\u5217(\u9897\u7c92\u6570\u592a\u591a), \u6240\u4ee5\u8981\u60f3 16GB \u5355\u6761\u53ea\u80fd\u662f 2Ranks \u7684 B-die"}),"\n",(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GDDR5=DDR3"}),"\n",(0,i.jsx)(n.li,{children:"DDR4 SDRAM - Double Data Rate 4 Synchronous Dynamic Random-Access Memory"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Module"}),(0,i.jsx)(n.th,{children:"Date"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DDR4 SDRAM"}),(0,i.jsx)(n.td,{children:"2014Q2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DDR3 SDRAM"}),(0,i.jsx)(n.td,{children:"2007"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DDR2 SDRAM"}),(0,i.jsx)(n.td,{children:"200309"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"mhz",children:"MHz"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MHz"}),"\n",(0,i.jsx)(n.li,{children:"Memory clock MHZ"}),"\n",(0,i.jsx)(n.li,{children:"I/O bus clock MHz"}),"\n",(0,i.jsx)(n.li,{children:"Data rate - MT/s = megatransfers per second"}),"\n",(0,i.jsx)(n.li,{children:"DDR - double data rate - 100MHz=200MT/s"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/DDR4_SDRAM",children:"https://en.wikipedia.org/wiki/DDR4_SDRAM"})}),"\n",(0,i.jsx)(n.li,{children:"Column address strobe latency - CAS latency CL"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"udimm-vs-rdimm",children:"UDIMM vs RDIMM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["UDIMM\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c0f\u670d\u52a1\u5668\uff0c\u4e24\u6761\u5185\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"\u53ea\u80fd\u53cc\u901a\u9053"}),"\n",(0,i.jsx)(n.li,{children:"\u5355\u901a\u9053\u65f6\u6027\u80fd\u4f1a\u597d\u4e00\u70b9"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RDIMM\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5927\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(n.li,{children:"\u53cc\u901a\u9053\u6216\u4e09\u901a\u9053\u65f6\u5019\u5e26\u5bbd\u66f4\u9ad8"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://serverfault.com/a/289102/190601",children:"https://serverfault.com/a/289102/190601"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rank",children:"Rank"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 Rank - 1 \u82af\u7247 1 \u5185\u5b58 - 1 Rank 1 Bank"}),"\n",(0,i.jsx)(n.li,{children:"2 Rank - 2 \u4e2a \u5355 Rank \u7ec4\u6210\u4e00\u4e2a\u6a21\u5757 - \u540c\u65f6\u53ea\u80fd\u8bbf\u95ee\u4e00\u4e2a Rank \u5185\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"4 Rank - 2 \u4e2a \u53cc Rank \u7ec4\u6210\u4e00\u4e2a\u6a21\u5757 - \u540c\u65f6\u53ea\u80fd\u8bbf\u95ee\u4e00\u4e2a Rank"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2R*8"})," vs ",(0,i.jsx)(n.code,{children:"2R*4"})," vs ",(0,i.jsx)(n.code,{children:"4R*4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bb9\u91cf 32G \u5185\u5b58"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2R*8"})," = ",(0,i.jsx)(n.code,{children:"2*2*8"})," - \u6bcf\u4e2a Rank 2G\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9891\u7387 2666MHz"}),"\n",(0,i.jsx)(n.li,{children:"\u4ef7\u683c\u9ad8"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2R*4"})," = ",(0,i.jsx)(n.code,{children:"2*4*4"})," - \u6bcf\u4e2a Rank 4G\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9891\u7387 2400MHz"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"4R*4"})," = ",(0,i.jsx)(n.code,{children:"4*2*4"})," - \u6bcf\u4e2a Rank 2G\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5355\u4e2a Rank \u5bc6\u5ea6\u66f4\u4f4e"}),"\n",(0,i.jsx)(n.li,{children:"\u9891\u7387 2133MHz"}),"\n",(0,i.jsx)(n.li,{children:"\u4ef7\u683c\u4f4e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u80fd\u770b\u5230 Rank \u548c \u9891\u7387\ndmidecode -t memory\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AMD \u8981\u6c42 2R"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://techlibrary.hpe.com/docs/iss/DL380pGen8/setup_install/advanced/Content/138678.htm",children:"https://techlibrary.hpe.com/docs/iss/DL380pGen8/setup_install/advanced/Content/138678.htm"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ddr3-vs-ddr4",children:"DDR3 vs DDR4"})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var i=r(50959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var i,l={},h=null,a=null;for(i in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,i)&&!c.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:s,type:e,key:h,ref:a,props:l,_owner:t.current}}n.Fragment=l,n.jsx=h,n.jsxs=h},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>d});var i=r(50959);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);