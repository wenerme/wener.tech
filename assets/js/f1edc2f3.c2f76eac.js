"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59573],{9751:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=t(96600),a=t(27279),o=(t(59496),t(3905)),i=["components"],s={title:"EIP-777"},d=void 0,c={unversionedId:"blockchain/eth/eip-777",id:"blockchain/eth/eip-777",title:"EIP-777",description:"",source:"@site/notes/blockchain/eth/eip-777.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/eip-777",permalink:"/notes/blockchain/eth/eip-777",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/blockchain/eth/eip-777.md",tags:[],version:"current",frontMatter:{title:"EIP-777"},sidebar:"docs",previous:{title:"ERC721",permalink:"/notes/blockchain/eth/eip-721"},next:{title:"Ethereum Awesome",permalink:"/notes/blockchain/eth/eth-awesome"}},u={},l=[],p={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"interface ERC777Token {\n    function name() external view returns (string memory);\n    function symbol() external view returns (string memory);\n    function totalSupply() external view returns (uint256);\n    function balanceOf(address holder) external view returns (uint256);\n    function granularity() external view returns (uint256);\n\n    function defaultOperators() external view returns (address[] memory);\n    function isOperatorFor(\n        address operator,\n        address holder\n    ) external view returns (bool);\n    function authorizeOperator(address operator) external;\n    function revokeOperator(address operator) external;\n\n    function send(address to, uint256 amount, bytes calldata data) external;\n    function operatorSend(\n        address from,\n        address to,\n        uint256 amount,\n        bytes calldata data,\n        bytes calldata operatorData\n    ) external;\n\n    function burn(uint256 amount, bytes calldata data) external;\n    function operatorBurn(\n        address from,\n        uint256 amount,\n        bytes calldata data,\n        bytes calldata operatorData\n    ) external;\n\n    event Sent(\n        address indexed operator,\n        address indexed from,\n        address indexed to,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event Minted(\n        address indexed operator,\n        address indexed to,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event Burned(\n        address indexed operator,\n        address indexed from,\n        uint256 amount,\n        bytes data,\n        bytes operatorData\n    );\n    event AuthorizedOperator(\n        address indexed operator,\n        address indexed holder\n    );\n    event RevokedOperator(address indexed operator, address indexed holder);\n}\n")))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return p}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);