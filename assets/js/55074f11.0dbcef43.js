"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87664],{61715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(96600),o=n(27279),a=(n(59496),n(3905)),i=["components"],l={title:"NFTables Cookbook"},p=void 0,c={unversionedId:"os/linux/network/nftables-cookbook",id:"os/linux/network/nftables-cookbook",title:"NFTables Cookbook",description:"- \u53c2\u8003",source:"@site/notes/os/linux/network/nftables-cookbook.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/nftables-cookbook",permalink:"/notes/os/linux/network/nftables-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/nftables-cookbook.md",tags:[],version:"current",frontMatter:{title:"NFTables Cookbook"},sidebar:"docs",previous:{title:"NetworkManager",permalink:"/notes/os/linux/network/networkmanager"},next:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"}},u={},s=[{value:"\u9632\u706b\u5899\u529f\u80fd",id:"\u9632\u706b\u5899\u529f\u80fd",level:2},{value:"\u57fa\u7840 NAT \u529f\u80fd",id:"\u57fa\u7840-nat-\u529f\u80fd",level:2}],f={toc:s};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes"},"Quick reference-nftables in 10 minutes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Nftables/Examples"},"Nftables/Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.nftables.org/wiki-nftables/index.php/Performing_Network_Address_Translation_(NAT)"},"Performing Network Address Translation (NAT)"))))),(0,a.kt)("h2",{id:"\u9632\u706b\u5899\u529f\u80fd"},"\u9632\u706b\u5899\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nft"},'table ip filter {\n  # \u5141\u8bb8\u672c\u5730\u8bf7\u6c42\n    chain output {\n        type filter hook output priority 100; policy accept;\n    }\n\n  # \u5141\u8bb8\u5c40\u57df\u7f51\u5230 fw\uff0c\u4e0d\u5141\u8bb8 WAN \u5230 fw\n    chain input {\n        type filter hook input priority 0; policy accept;\n        iifname "lan0" accept\n        iifname "wan0" drop\n    }\n\n  # \u5141\u8bb8 LAN \u8bf7\u6c42 WAN - \u5141\u8bb8 WAN \u56de\u5e94 LAN \u8bf7\u6c42\n    chain forward {\n        type filter hook forward priority 0; policy drop;\n        iifname "lan0" oifname "wan0" accept\n        iifname "wan0" oifname "lan0" ct state related,established accept\n    }\n}\n')),(0,a.kt)("h2",{id:"\u57fa\u7840-nat-\u529f\u80fd"},"\u57fa\u7840 NAT \u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'table ip nat {\n    chain prerouting {\n        type nat hook prerouting priority 0; policy accept;\n    }\n\n  # \u4ece WAN \u51fa\u7684\u5305\uff0c\u5728\u7ed3\u675f\u8def\u7531\u540e\u66ff\u6362 \u6765\u6e90\u5730\u5740 \u4e3a wan0 \u7684\u4e3b\u8981\u5730\u5740\n    chain postrouting {\n        type nat hook postrouting priority 100; policy accept;\n        oifname "wan0" masquerade\n    }\n}\n')))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),k=o,m=f["".concat(p,".").concat(k)]||f[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);