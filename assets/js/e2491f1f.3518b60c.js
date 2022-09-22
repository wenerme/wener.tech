"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85164],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&l(e,n,t[n]);return e};const p={title:"EIP-777"},f="EIP-777",m={unversionedId:"blockchain/eth/eip-777",id:"blockchain/eth/eip-777",title:"EIP-777",description:"",source:"@site/../notes/blockchain/eth/eip-777.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/eip-777",permalink:"/notes/blockchain/eth/eip-777",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/eip-777.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"EIP-777"},sidebar:"docs",previous:{title:"ERC721",permalink:"/notes/blockchain/eth/eip-721"},next:{title:"Ethereum Awesome",permalink:"/notes/blockchain/eth/eth-awesome"}},b={},y=[],v={toc:y};function O(e){var t,n=e,{components:a}=n,l=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),l),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"eip-777"}),"EIP-777"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-solidity"}),"interface ERC777Token {\n    function name() external view returns (string memory);\n    function symbol() external view returns (string memory);\n    function totalSupply() external view returns (uint256);\n    function balanceOf(address holder) external view returns (uint256);\n    function granularity() external view returns (uint256);\n\n    function defaultOperators() external view returns (address[] memory);\n    function isOperatorFor(\n        address operator,\n        address holder\n    ) external view returns (bool);\n    function authorizeOperator(address operator) external;\n    function revokeOperator(address operator) external;\n\n    function send(address to, uint256 amount, bytes calldata data) external;\n    function operatorSend(\n        address from,\n        address to,\n        uint256 amount,\n        bytes calldata data,\n        bytes calldata operatorData\n    ) external;\n\n    function burn(uint256 amount, bytes calldata data) external;\n    function operatorBurn(\n        address from,\n        uint256 amount,\n        bytes calldata data,\n        bytes calldata operatorData\n    ) external;\n\n    event Sent(\n        address indexed operator,\n        address indexed from,\n        address indexed to,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event Minted(\n        address indexed operator,\n        address indexed to,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event Burned(\n        address indexed operator,\n        address indexed from,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event AuthorizedOperator(\n        address indexed operator,\n        address indexed holder\n    );\n    event RevokedOperator(address indexed operator, address indexed holder);\n}\n")))}O.isMDXComponent=!0}}]);