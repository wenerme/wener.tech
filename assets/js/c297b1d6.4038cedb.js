/*! For license information please see c297b1d6.4038cedb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37418],{20124:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var l=i(11527),s=i(47214);const r={title:"solidity"},t="solidity",c={id:"blockchain/eth/solidity",title:"solidity",description:"- ethereum/solidity",source:"@site/../notes/blockchain/eth/solidity.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/solidity",permalink:"/notes/blockchain/eth/solidity",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/solidity.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659221825,formattedLastUpdatedAt:"Jul 30, 2022",frontMatter:{title:"solidity"},sidebar:"docs",previous:{title:"Polygon",permalink:"/notes/blockchain/eth/polygon"},next:{title:"Swap",permalink:"/notes/blockchain/eth/swap/"}},d={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"_;",id:"_",level:2},{value:"Stack too deep when compiling inline assembly",id:"stack-too-deep-when-compiling-inline-assembly",level:2},{value:"Type struct Moloch.Proposal is only valid in storage because it contains a (nested) mapping",id:"type-struct-molochproposal-is-only-valid-in-storage-because-it-contains-a-nested-mapping",level:2}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"solidity",children:"solidity"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/ethereum/solidity",children:"ethereum/solidity"})}),"\n",(0,l.jsx)(e.li,{children:".sol"}),"\n",(0,l.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://binaries.soliditylang.org/",children:"https://binaries.soliditylang.org/"})}),"\n",(0,l.jsxs)(e.li,{children:["wikipedia ",(0,l.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Solidity",children:"Solidity"})]}),"\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1: ganache, hardhat, solcjs"}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/niftymints/contract-interface",children:"niftymints/contract-interface"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://docs.soliditylang.org/en/develop/solidity-by-example.html",children:"Solidity by Example"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/cyrusadkisson/solidity-baby-steps",children:"cyrusadkisson/solidity-baby-steps"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.stateofthedapps.com/",children:"https://www.stateofthedapps.com/"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u667a\u80fd\u5408\u7ea6 - \u6295\u7968\u3001\u4f17\u7b79\u3001\u62cd\u5356\u3001\u8d27\u5e01\u3001NTF\u3001DAO"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# NPM\nnpm install -g solc\n\n# solc by docker\ndocker run --rm -it ethereum/solc:stable solc --version\ndocker run --rm -it -v $PWD:/src ethereum/solc:stable -o /src/output --abi --bin /src/Contract.sol\n\n# brew\nbrew install ethereum/ethereum/solidity\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["solc\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"npm install -g solc"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"docker run ethereum/solc:stable"})}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://binaries.soliditylang.org/",children:"https://binaries.soliditylang.org/"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/ethereum/solc-bin",children:"ethereum/solc-bin"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["remix online\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/ethereum/remix-live",children:"https://github.com/ethereum/remix-live"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://remix.ethereum.org/",children:"https://remix.ethereum.org/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"unit"}),(0,l.jsx)(e.th,{children:"value"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"wei"}),(0,l.jsx)(e.td,{children:"1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"gwei"}),(0,l.jsx)(e.td,{children:"1e9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ether"}),(0,l.jsx)(e.td,{children:"1e18"})]})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u65f6\u95f4\u5355\u4f4d seconds, minutes, hours, days, weeks"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"block"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"basefee, chainid, coinbase, difficulty, gaslimit, number, timestamp"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"gasleft() returns (uint256)"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"blockhash(uint blockNumber) returns (bytes32)"})}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"msg"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"data, sender, sig, value"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"tx"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"gasprice, origin"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"abi"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"decode, encode, encodePacked, encodeWithSelector, encodeWithSignature, encodeCall"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["error\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"assert, require, revert"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["math\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"addmod, mulmod, keccak256, sha256, ripemd160, ecrecover"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"this"})," - \u5f53\u524d\u5408\u7ea6\u5730\u5740"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"selfdestruct(address payable recipient)"})," - \u9500\u6bc1\u5408\u7ea6"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"type(xyz)"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"name, creationCode, runtimeCode, interfaceId, min, max"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"pragma"}),"\n",(0,l.jsx)(e.li,{children:"import"}),"\n",(0,l.jsx)(e.li,{children:"contract"}),"\n",(0,l.jsx)(e.li,{children:"library"}),"\n",(0,l.jsx)(e.li,{children:"interface"}),"\n",(0,l.jsxs)(e.li,{children:["\u7c7b\u578b\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["bool - ",(0,l.jsx)(e.code,{children:"!,&&,||,==,!="})]}),"\n",(0,l.jsxs)(e.li,{children:["uint,int - ",(0,l.jsx)(e.code,{children:"<=,<,==,!=,>=,>"}),", ",(0,l.jsx)(e.code,{children:"&,|,^,~"}),", ",(0,l.jsx)(e.code,{children:"<<,>>"}),", ",(0,l.jsx)(e.code,{children:"+,-.*./,%,**"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"type(int).{min,max}"})," \u7c7b\u578b\u6700\u5927\u6700\u5c0f\u503c"]}),"\n",(0,l.jsx)(e.li,{children:"8,16,24,32,64,128,160,256"}),"\n",(0,l.jsx)(e.li,{children:"8-256, step 8"}),"\n",(0,l.jsx)(e.li,{children:"uint,int -> uint256, int256"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["fixed, ufixed - MxN - ",(0,l.jsx)(e.code,{children:"M.N"})," - 8 < M < 256, 0 < N < 80"]}),"\n",(0,l.jsxs)(e.li,{children:["address, address payable\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"bytes20, uint160"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"<address>"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"balance, code, codehash, call, delegatecall, staticcall"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"<address payable>"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"transfer"}),"\n",(0,l.jsx)(e.li,{children:"send"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"bytesN - 1 < N < 32"}),"\n",(0,l.jsx)(e.li,{children:"bytes - \u52a8\u6001\u6570\u7ec4"}),"\n",(0,l.jsx)(e.li,{children:"string - \u6570\u7ec4"}),"\n",(0,l.jsx)(e.li,{children:"enum"}),"\n",(0,l.jsxs)(e.li,{children:["valute type - ",(0,l.jsx)(e.code,{children:"type UFixed256x18 is uint256"})]}),"\n",(0,l.jsxs)(e.li,{children:["modifier\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"pure,view,payable,immutable,anonymous,indexed,virtual,override"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["event\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"anonymous - \u4e0d\u5b58\u50a8\u4e8b\u4ef6\u7b7e\u540d\u4f5c\u4e3a topic"}),"\n",(0,l.jsx)(e.li,{children:"indexed - \u5b58\u50a8\u53c2\u6570\u4f5c\u4e3a topic"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["function\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"pure - \u4e0d\u80fd\u8bbf\u95ee state"}),"\n",(0,l.jsx)(e.li,{children:"view - \u4e0d\u80fd\u4fee\u6539 state"}),"\n",(0,l.jsx)(e.li,{children:"payable - \u53ef\u63a5\u53d7 ether"}),"\n",(0,l.jsx)(e.li,{children:"virtual - \u53ef\u4fee\u6539"}),"\n",(0,l.jsx)(e.li,{children:"override"}),"\n",(0,l.jsxs)(e.li,{children:["\u53ef\u89c1\u6027\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"public, private, external, internal"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"<function>"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"address"}),"\n",(0,l.jsx)(e.li,{children:"selector"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"contract - \u7c7b\u4f3c class"}),"\n",(0,l.jsxs)(e.li,{children:["\u5f15\u7528\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"memory"}),", ",(0,l.jsx)(e.code,{children:"storage"}),", ",(0,l.jsx)(e.code,{children:"calldata"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["mapping - \u7c7b\u4f3c map\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["key \u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"keccak256"})," \u8ba1\u7b97 - \u4e0d\u5b58\u50a8 key \u503c"]}),"\n",(0,l.jsx)(e.li,{children:"\u6ca1\u6709\u957f\u5ea6\uff0c\u4e0d\u80fd\u904d\u5386"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"struct"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"delete xyz"})," - \u8bbe\u7f6e\u4e3a\u521d\u59cb\u503c\uff0c\u53ef \u5220\u9664\u6570\u7ec4/mapping \u5143\u7d20"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u53d8\u91cf\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u72b6\u6001\u53d8\u91cf - \u4f4d\u4e8e storage"}),"\n",(0,l.jsx)(e.li,{children:"\u672c\u5730\u53d8\u91cf"}),"\n",(0,l.jsx)(e.li,{children:"\u5168\u5c40\u53d8\u91cf"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u51fd\u6570 - private, public, external, internal, view, pure\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9ed8\u8ba4 public"}),"\n",(0,l.jsxs)(e.li,{children:["external \u4e0d\u80fd\u81ea\u5df1\u8c03\u7528\uff0c\u53ea\u80fd\u7ed9\u5916\u90e8\u8c03\u7528\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u63a8\u8350\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"internal - \u7c7b\u4f3c protected"}),"\n",(0,l.jsx)(e.li,{children:"view - \u53ea\u8bfb"}),"\n",(0,l.jsx)(e.li,{children:"pure - \u4e0d\u8bfb\u4e5f\u4e0d\u5199\u72b6\u6001\u53d8\u91cf"}),"\n",(0,l.jsxs)(e.li,{children:["\u652f\u6301\u81ea\u5b9a\u4e49 modifier - \u652f\u6301\u63a5\u53d7\u53c2\u6570\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"_;"})," \u8868\u793a\u539f\u59cb\u4ee3\u7801"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://docs.soliditylang.org/en/latest/types.html",children:"https://docs.soliditylang.org/en/latest/types.html"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://docs.soliditylang.org/en/latest/units-and-global-variables.html",children:"https://docs.soliditylang.org/en/latest/units-and-global-variables.html"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Ownable, CloneFactory, ECR20"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-solidity",children:"// EIP-1167\ninterface CloneFactory {\n  function createClone(address target) internal returns (address result);\n\n  function isClone(address target, address query) internal view returns (bool result);\n}\n\n"})}),"\n",(0,l.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,l.jsx)(e.h2,{id:"_",children:"_;"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-solidity",children:"modifier onlyOwner {\n    if (msg.sender != owner) throw;\n    _; // \u539f\u672c\u7684\u4ee3\u7801\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f8b\u5982"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-solidity",children:"function setValue(uint256 _val) onlyOwner {\n  value = _val;\n}\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53d8\u6210"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-solidity",children:"function setValue(uint256 _val) {\n  if (msg.sender != owner) throw;\n  value = _val;\n}\n\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://gavofyork.medium.com/condition-orientated-programming-969f6ba0161a",children:"Condition-Orientated Programming"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"stack-too-deep-when-compiling-inline-assembly",children:"Stack too deep when compiling inline assembly"}),"\n",(0,l.jsx)(e.p,{children:"EVM \u53ea\u6709 16 slots, \u5c1d\u8bd5\u5c06 storage \u79fb\u5230 memory"}),"\n",(0,l.jsx)(e.p,{children:"\u6216\u8005\u8bbe\u7f6e optimizer"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"const config: HardhatUserConfig = {\n  solidity: {\n    version: '0.8.4',\n    settings: {\n      optimizer: {\n        runs: 200,\n        enabled: true,\n      },\n    },\n  },\n};\nexport default config;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"type-struct-molochproposal-is-only-valid-in-storage-because-it-contains-a-nested-mapping",children:"Type struct Moloch.Proposal is only valid in storage because it contains a (nested) mapping"}),"\n",(0,l.jsx)(e.p,{children:"struct \u5305\u542b mapping\uff0c\u4e0d\u80fd\u4f7f\u7528 memory\uff0c\u4f7f\u7528 storage"})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},3354:(n,e,i)=>{var l=i(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,i){var l,r={},h=null,o=null;for(l in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(o=e.ref),e)t.call(e,l)&&!d.hasOwnProperty(l)&&(r[l]=e[l]);if(n&&n.defaultProps)for(l in e=n.defaultProps)void 0===r[l]&&(r[l]=e[l]);return{$$typeof:s,type:n,key:h,ref:o,props:r,_owner:c.current}}e.Fragment=r,e.jsx=h,e.jsxs=h},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>t});var l=i(50959);const s={},r=l.createContext(s);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);