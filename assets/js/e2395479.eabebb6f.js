/*! For license information please see e2395479.eabebb6f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60928],{99876:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>t});var n=a(2488),l=a(62780);const i={title:"Swap"},m="Swap",r={id:"blockchain/eth/swap/README",title:"Swap",description:"- Swap - \u8d27\u5e01\u4e92\u6362",source:"@site/../notes/blockchain/eth/swap/README.md",sourceDirName:"blockchain/eth/swap",slug:"/blockchain/eth/swap/",permalink:"/notes/blockchain/eth/swap/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/swap/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659680046,formattedLastUpdatedAt:"Aug 5, 2022",frontMatter:{title:"Swap"},sidebar:"docs",previous:{title:"solidity",permalink:"/notes/blockchain/eth/solidity"},next:{title:"PartySwap",permalink:"/notes/blockchain/eth/swap/partyswap"}},c={},t=[{value:"Dev",id:"dev",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",mstyle:"mstyle",msub:"msub",mtable:"mtable",mtd:"mtd",mtr:"mtr",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.M)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"swap",children:"Swap"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Swap - \u8d27\u5e01\u4e92\u6362"}),"\n",(0,n.jsx)(e.li,{children:"Deposit - \u8d27\u5e01\u8d28\u62bc - \u589e\u52a0\u6d41\u52a8\u6027"}),"\n",(0,n.jsxs)(e.li,{children:["Liquite - \u6d41\u52a8\u6027\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A \u5e01+B \u5e01"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"Borrow - \u501f"}),"\n",(0,n.jsx)(e.li,{children:"Loan - \u8d37"}),"\n",(0,n.jsx)(e.li,{children:"Flash Loan"}),"\n",(0,n.jsx)(e.li,{children:"Payback - \u507f\u8fd8"}),"\n",(0,n.jsx)(e.li,{children:"Stake - \u6301\u6709\u8d27\u5e01\uff0c\u589e\u52a0\u7a33\u5b9a\u6027"}),"\n",(0,n.jsx)(e.li,{children:"\u8de8\u94fe\u4e92\u6362"}),"\n",(0,n.jsx)(e.li,{children:"Native <-> ERC20 \u4e92\u6362 - \u65e9\u671f\u7684 Native Currency \u4e0d\u662f ERC20 \u4e0d\u65b9\u4fbf\u4ea4\u6613"}),"\n",(0,n.jsx)(e.li,{children:"Reward fee"}),"\n",(0,n.jsx)(e.li,{children:"Sliperage"}),"\n",(0,n.jsx)(e.li,{children:"liquidation - \u6e05\u7b97"}),"\n",(0,n.jsxs)(e.li,{children:["\u6ed1\u70b9\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u9884\u8bbe\u6210\u4ea4\u4ef7\u4f4d\u4e0e\u771f\u5b9e\u6210\u4ea4\u4ef7\u4f4d\u7684\u504f\u5dee"}),"\n",(0,n.jsx)(e.li,{children:"\u4ea4\u6613\u989d\u8d8a\u5927\uff0c\u6ed1\u70b9\u8d8a\u5927\uff0c\u4ea4\u6613\u8005\u7684\u635f\u5931\u5c31\u8d8a\u5927"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"\u65e0\u5e38\u635f\u5931"}),"\n",(0,n.jsx)(e.li,{children:"CPMMM - Constant Product Market Maker Model - \u6052\u5b9a\u4e58\u79ef\u505a\u5e02\u5546\u6a21\u578b"}),"\n",(0,n.jsx)(e.li,{children:"CFMMs - Constant function market makers"}),"\n",(0,n.jsx)(e.li,{children:"Marginal exchange rate - \u8fb9\u9645\u6c47\u7387"}),"\n",(0,n.jsx)(e.li,{children:"DEX"}),"\n",(0,n.jsx)(e.li,{children:"AMM"}),"\n",(0,n.jsx)(e.li,{children:"MM - Market Maker - \u505a\u5e02\u5546"}),"\n",(0,n.jsx)(e.li,{children:"TWAPs - time-weighted average prices"}),"\n",(0,n.jsx)(e.li,{children:"EMAs"}),"\n",(0,n.jsx)(e.li,{children:"SMAs"}),"\n",(0,n.jsx)(e.li,{children:"arbitrage - \u5957\u5229"}),"\n"]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["LP/Liquidity Provider -Deposit-> Pool\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"+token0, +token1 -> share"}),"\n",(0,n.jsx)(e.li,{children:"reserve0, reserve1"}),"\n",(0,n.jsx)(e.li,{children:"liquidity shares"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Trader -Swap-> Pool\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"token0/token1 + fee -> token1/token0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"dx -> dy"}),"\n"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"{"}),(0,n.jsxs)(e.mtable,{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em",children:[(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"k"})]})})})}),(0,n.jsx)(e.mtr,{children:(0,n.jsx)(e.mtd,{children:(0,n.jsx)(e.mstyle,{scriptlevel:"0",displaystyle:"false",children:(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"k"})]})})})})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\begin{cases}\nxy=k \\\\\n(x+dx)(y-dy)=k\n\\end{cases}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3em",verticalAlign:"-1.25em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size4",children:"{"})}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mtable",children:(0,n.jsx)(e.span,{className:"col-align-l",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.69em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3.69em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-2.25em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.008em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.19em"},children:(0,n.jsx)(e.span,{})})})]})})})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]})}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dy = \\frac {y \\cdot dx} {x+dx}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.1408em",verticalAlign:"-0.7693em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mi,{children:"y"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dx/dy = \\frac {x+dx} y"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"/"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"})]})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mi,{children:"y"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Slippage_{yPrice} = dx/dy - x/y = \\frac {dx} y"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"Sl"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"pp"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ce"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"/"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord",children:"/"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"dx \u6ed1\u70b9\u5c31\u8d8a\u5927\uff0c\u504f\u79bb\u5b9e\u9645\u4ef7\u4f4d\u5c31\u8d8a\u5927"}),"\n",(0,n.jsx)(e.li,{children:"\u6c60\u4e2d\u7684\u8d44\u91d1\u50a8\u5907\u8d8a\u591a\u3001\u4ea4\u6613\u6df1\u5ea6\u8d8a\u5927\uff0c\u5219\u80fd\u5c3d\u91cf\u51cf\u5c11\u6ed1\u70b9\u7684\u6ea2\u4ef7\uff0c\u4f7f\u7528\u6237\u7684\u4ea4\u6613\u635f\u8017\u964d\u4f4e"}),"\n",(0,n.jsxs)(e.li,{children:["Uniswap/sdk-core ",(0,n.jsx)(e.a,{href:"https://github.com/Uniswap/sdk-core/blob/main/src/utils/computePriceImpact.ts",children:"computePriceImpact"})]}),"\n"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PriceImpact = \\frac {midPrice \\cdot dx - dy} {midPrice \\cdot dx}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ce"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"mi"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ce"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"mi"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ce"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"midPrice - x->y = y/x"}),"\n"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"x"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"PriceImpact = \\frac {dx} {x + dx}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ce"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.1408em",verticalAlign:"-0.7693em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"http://k.sina.com.cn/article_6487081523_182a9023302000wdhg.html",children:"http://k.sina.com.cn/article_6487081523_182a9023302000wdhg.html"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"dev",children:"Dev"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["TradeType\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"EXACT_INPUT"}),"\n",(0,n.jsx)(e.li,{children:"EXACT_OUTPUT"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://github.com/Uniswap/widgets",children:"@uniswap/widgets"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"GPLv3"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://github.com/Uniswap/sdk-core",children:"@uniswap/sdk-core"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u5b9a\u4e49\u4e86\u57fa\u672c\u6570\u5b66\u5bf9\u8c61\u548c Token \u6a21\u578b"}),"\n",(0,n.jsx)(e.li,{children:"Price, Percent, Fraction, Token, CurrencyAmount, NativeCurrency"}),"\n",(0,n.jsx)(e.li,{children:"big.js"}),"\n",(0,n.jsx)(e.li,{children:"decimal.js-light"}),"\n",(0,n.jsx)(e.li,{children:"jsbi"}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/toformat",children:"toformat"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"toFormat for big.js, decimal.js"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["118kB/36kB - self 11.6kB\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"bn.js+jsbi+decimal.js-light+@ethersproject/bignumber+js-sha3"}),"\n",(0,n.jsx)(e.li,{children:"@ethersproject/bytes"}),"\n",(0,n.jsx)(e.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://github.com/Uniswap/v2-sdk",children:"@uniswap/v2-sdk"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Pair"}),"\n",(0,n.jsx)(e.li,{children:"Trade"}),"\n",(0,n.jsx)(e.li,{children:"Router"}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.uniswap.org/sdk/2.0.0/guides/quick-start",children:"https://docs.uniswap.org/sdk/2.0.0/guides/quick-start"})}),"\n",(0,n.jsxs)(e.li,{children:["\u79fb\u9664\u4e86 Fetcher\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"@uniswap/sdk \u8fd8\u6709"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["mid price\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.uniswap.org/sdk/2.0.0/guides/pricing",children:"https://docs.uniswap.org/sdk/2.0.0/guides/pricing"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"execution price"}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-solidity",children:"bytes memory bytecode = type(UniswapV2Pair).creationCode;\nbytes32 salt = keccak256(abi.encodePacked(token0, token1));\nassembly {\n    pair := create2(0, add(bytecode, 32), mload(bytecode), salt)\n}\n"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"keccak256(0xff ++ address ++ salt ++ keccak256(init_code))[12:]"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u5408\u7ea6\u521b\u5efa\u8005\u7684\u5730\u5740\uff08address)"}),"\n",(0,n.jsx)(e.li,{children:"\u4f5c\u4e3a\u53c2\u6570\u7684\u6df7\u6dc6\u503c\uff08salt\uff09"}),"\n",(0,n.jsx)(e.li,{children:"\u5408\u7ea6\u521b\u5efa\u4ee3\u7801 (init_code)"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://docs.openzeppelin.com/cli/2.8/deploying-with-create2",children:"https://docs.openzeppelin.com/cli/2.8/deploying-with-create2"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://ctf-wiki.org/blockchain/ethereum/attacks/create2/",children:"https://ctf-wiki.org/blockchain/ethereum/attacks/create2/"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://mirror.xyz/0xB96A958A82eCAbab9e7cF14ae538c38996f2C7B6/T_uMRq4awv37E7lRQKXQd6-pW4_y0JbkibNixgkqu_Y",children:"Uniswap-\u81ea\u52a8\u5316\u4ee3\u5e01\u505a\u5e02\u534f\u8bae"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://mirror.xyz/0xB96A958A82eCAbab9e7cF14ae538c38996f2C7B6",children:"https://mirror.xyz/0xB96A958A82eCAbab9e7cF14ae538c38996f2C7B6"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://ctf-wiki.org/blockchain/introduction/",children:"https://ctf-wiki.org/blockchain/introduction/"})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.M)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},38088:(s,e,a)=>{var n=a(96651),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(s,e,a){var n,i={},t=null,h=null;for(n in void 0!==a&&(t=""+a),void 0!==e.key&&(t=""+e.key),void 0!==e.ref&&(h=e.ref),e)m.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(s&&s.defaultProps)for(n in e=s.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:l,type:s,key:t,ref:h,props:i,_owner:r.current}}e.Fragment=i,e.jsx=t,e.jsxs=t},2488:(s,e,a)=>{s.exports=a(38088)},62780:(s,e,a)=>{a.d(e,{I:()=>r,M:()=>m});var n=a(96651);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);