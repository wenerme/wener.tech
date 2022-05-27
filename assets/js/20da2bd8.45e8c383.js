"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[60401],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,y=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54467:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Token List"},s=void 0,c={unversionedId:"blockchain/token-list",id:"blockchain/token-list",title:"Token List",description:"- Uniswap/token-lists",source:"@site/notes/blockchain/token-list.md",sourceDirName:"blockchain",slug:"/blockchain/token-list",permalink:"/notes/blockchain/token-list",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/blockchain/token-list.md",tags:[],version:"current",frontMatter:{title:"Token List"},sidebar:"docs",previous:{title:"thegraph",permalink:"/notes/blockchain/thegraph"},next:{title:"typechain",permalink:"/notes/blockchain/typechain"}},u={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/token-lists"},"Uniswap/token-lists"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tokenlists.org/"},"https://tokenlists.org/")," - Ethereum token list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://uniswap.org/tokenlist.schema.json"},"https://uniswap.org/tokenlist.schema.json"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ExtensionValue = string | number | boolean | null;\n\nexport interface TokenInfo {\n  readonly chainId: number;\n  readonly address: string;\n  readonly name: string;\n  readonly decimals: number;\n  readonly symbol: string;\n  readonly logoURI?: string;\n  readonly tags?: string[];\n  readonly extensions?: {\n    readonly [key: string]: { [key: string]: ExtensionValue } | ExtensionValue;\n  };\n}\n\nexport interface Version {\n  readonly major: number;\n  readonly minor: number;\n  readonly patch: number;\n}\n\nexport interface Tags {\n  readonly [tagId: string]: {\n    readonly name: string;\n    readonly description: string;\n  };\n}\n\nexport interface TokenList {\n  readonly name: string;\n  readonly timestamp: string;\n  readonly version: Version;\n  readonly tokens: TokenInfo[];\n  readonly keywords?: string[];\n  readonly tags?: Tags;\n  readonly logoURI?: string;\n}\n")))}f.isMDXComponent=!0}}]);