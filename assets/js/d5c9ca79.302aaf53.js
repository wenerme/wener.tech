"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6365],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70058:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e};const p={title:"ethersjs"},m="ethersjs",f={unversionedId:"blockchain/eth/lib/ethersjs",id:"blockchain/eth/lib/ethersjs",title:"ethersjs",description:"- ethers-io/ethers.js",source:"@site/../notes/blockchain/eth/lib/ethersjs.md",sourceDirName:"blockchain/eth/lib",slug:"/blockchain/eth/lib/ethersjs",permalink:"/notes/blockchain/eth/lib/ethersjs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/lib/ethersjs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ethersjs"},sidebar:"docs",previous:{title:"EVM",permalink:"/notes/blockchain/eth/evm"},next:{title:"hardhat",permalink:"/notes/blockchain/eth/lib/hardhat"}},b={},h=[{value:"events",id:"events",level:2},{value:"requested too many blocks from 0 to 11846057, maximum is set to 2048",id:"requested-too-many-blocks-from-0-to-11846057-maximum-is-set-to-2048",level:2}],k={toc:h};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),u),s(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"ethersjs"}),"ethersjs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/ethers-io/ethers.js"}),"ethers-io/ethers.js"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, TS"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f6e ether.util.BigNumber - \u5c01\u88c5 BN.js",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"elliptic \u4f7f\u7528\u7684 BN.js - \u56e0\u4e3a\u5fc5\u987b\u5305\u542b elliptic \u6240\u4ee5\u4f7f\u7528 BN.js \u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u5305"),(0,n.kt)("li",{parentName:"ul"},"BN.js \u4e0e ether \u8ba1\u7b97\u903b\u8f91\u76f8\u540c\uff0c\u5e95\u5c42\u4e3a\u7eaf int + decimals\uff0c\u4e24\u4e2a\u6570\u503c\u8ba1\u7b97\u8981\u8003\u8651 decimals"),(0,n.kt)("li",{parentName:"ul"},"bignumber.js \u5e95\u5c42\u5b58\u50a8\u4e86 c,e,s \u8f85\u52a9\u8ba1\u7b97\uff0c\u4e24\u4e2a\u6570\u503c\u53ef\u76f4\u63a5\u8ba1\u7b97"),(0,n.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u4f7f\u7528\u63a8\u8350 ",(0,n.kt)("a",d({parentName:"li"},{href:"/notes/web/script/lib/bignumberjs"}),"bignumber.js")," - \u63a5\u53e3\u66f4\u53cb\u597d"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.ethers.io/v5/"}),"https://docs.ethers.io/v5/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber--notes"}),"Why not BigNumber.js, BN.js, BigDecimal, etc?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://blog.ricmoo.com/human-readable-contract-abis-in-ethers-js-141902f4d917"}),"ethers.js: Human-Readable Contract ABIs"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Unit"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Decimals"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"wei"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"kwei"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"mwei"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"gwei"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"szabo"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"finney"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ether"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"18")))),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// MetaMask\nconst provider = new ethers.providers.Web3Provider(window.ethereum);\nconst signer = provider.getSigner();\n\n// Web3Provider({request,sendAsync,send})\n// WebSocketProvider\n// StaticJsonRpcProvider - \u907f\u514d chainId \u4fee\u6539\u7684\u5f71\u54cd\n// EtherscanProvider - homestead, ropsten, rinkeby, goerli, kovan\n// InfuraProvider\n// AlchemyProvider\n// CloudflareProvider - homestead\n// PocketProvider\n// AnkrProvider - homestead, matic, arbitrum\n// FallbackProvider - \u652f\u6301\u591a\u4e2a Provider\n// IpcProvider\nconst provider = new ethers.providers.JsonRpcProvider('http://localhost:8545', {chainId: '1337', name: 'dev'});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"let ecr20 = [\n  `function name() view returns (string)`,\n  `function symbol() view returns (string)`,\n  `function decimals() view returns (uint8)`,\n  `function totalSupply() view returns (uint256)`,\n  'function balanceOf(address owner) view returns (uint)',\n  'function transfer(address to, uint256 value) returns (bool success)',\n  'function transferFrom(address from, address to, uint256 value) returns (bool success)',\n  'function approve(address spender, uint256 value) returns (bool success)',\n  'function allowance(address owner, address spender)  view returns (uint256 remaining)',\n\n  'event Transfer(address indexed from, address indexed to, uint256 _value)',\n  'event Approval(address indexed owner, address indexed spender, uint256 _value)',\n];\nlet ecr165 = ['function supportsInterface(interfaceId bytes4) view returns (bool)'];\nlet ecr1820registry = [\n  'function getInterfaceImplementer(address addr, bytes32 interfaceHash) view returns (address)',\n  'function setInterfaceImplementer(address addr, bytes32 interfaceHash, address implementer)',\n  'function setManager(address addr, address newManager)',\n  'function getManager(address addr) view returns(address)',\n  'function interfaceHash(string calldata interfaceName) pure returns(bytes32)',\n];\nlet ecr1820implementer = [\n  'function canImplementInterfaceForAddress(bytes32 interfaceHash, address addr) view returns(bytes32)',\n];\n\n// ropsten usdc\nlet contract = new ethers.Contract('0x07865c6E87B9F70255377e024ace6630C1Eaa37F', [...ecr20, ...ecr165], signer);\n\n// 0x01ffc9a7 - 4bytes\nlet interfaceId = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('supportsInterface(bytes4)')).substring(0, 10);\nlet interfaceId = ethers.utils.id('supportsInterface(bytes4)');\ncontract.supportsInterface(interfaceId);\n\nnew ethers.utils.Interface(ecr165).format(ethers.utils.FormatTypes.minimal);\n// balanceOf\nethers.utils.formatUnits(await contract.balanceOf(await signer.getAddress()), await contract.decimals());\n")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'// abi - json,human readable\nlet iface =  new ethers.utils.Interface(abi);\niface.format(ethers.utils.FormatTypes.full);\niface.format(ethers.utils.FormatTypes.minimal);\niface.format(ethers.utils.FormatTypes.json);\n\nethers.utils.formatEther(value)\n// \u9ed8\u8ba4 ether\nethers.utils.formatUnits(value, "ether").\n')),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"interface ECR20 {\n  name(): Promise<string>;\n\n  symbol(): Promise<string>;\n\n  decimals(): Promise<number>;\n\n  balanceOf(address: string): Promise<ethers.BigNumber>;\n}\n\ninterface ECR165 {\n  supportsInterface(interfaceId: any);\n}\n")),(0,n.kt)("h2",d({},{id:"events"}),"events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.ethers.io/v5/concepts/events/"}),"https://docs.ethers.io/v5/concepts/events/"))),(0,n.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",d({},{id:"requested-too-many-blocks-from-0-to-11846057-maximum-is-set-to-2048"}),"requested too many blocks from 0 to 11846057, maximum is set to 2048"),(0,n.kt)("p",null,"API Provider \u9650\u5236\u4e86"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"avax testnet 2048")))}v.isMDXComponent=!0}}]);