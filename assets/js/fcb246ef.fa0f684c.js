"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[25034],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),b=o,k=f["".concat(c,".").concat(b)]||f[b]||u[b]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return d}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const f={title:"NFTables Cookbook"},b="NFTables Cookbook",k={unversionedId:"os/linux/network/nftables-cookbook",id:"os/linux/network/nftables-cookbook",title:"NFTables Cookbook",description:"- \u53c2\u8003",source:"@site/../notes/os/linux/network/nftables-cookbook.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/nftables-cookbook",permalink:"/notes/os/linux/network/nftables-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/nftables-cookbook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625589155,formattedLastUpdatedAt:"Jul 6, 2021",frontMatter:{title:"NFTables Cookbook"},sidebar:"docs",previous:{title:"NetworkManager",permalink:"/notes/os/linux/network/networkmanager"},next:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"}},m={},d=[{value:"\u9632\u706b\u5899\u529f\u80fd",id:"\u9632\u706b\u5899\u529f\u80fd",level:2},{value:"\u57fa\u7840 NAT \u529f\u80fd",id:"\u57fa\u7840-nat-\u529f\u80fd",level:2}],y={toc:d};function w(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"nftables-cookbook"}),"NFTables Cookbook"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes"}),"Quick reference-nftables in 10 minutes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://wiki.gentoo.org/wiki/Nftables/Examples"}),"Nftables/Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://wiki.nftables.org/wiki-nftables/index.php/Performing_Network_Address_Translation_(NAT)"}),"Performing Network Address Translation (NAT)"))))),(0,r.kt)("h2",u({},{id:"\u9632\u706b\u5899\u529f\u80fd"}),"\u9632\u706b\u5899\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-nft"}),'table ip filter {\n  # \u5141\u8bb8\u672c\u5730\u8bf7\u6c42\n    chain output {\n        type filter hook output priority 100; policy accept;\n    }\n\n  # \u5141\u8bb8\u5c40\u57df\u7f51\u5230 fw\uff0c\u4e0d\u5141\u8bb8 WAN \u5230 fw\n    chain input {\n        type filter hook input priority 0; policy accept;\n        iifname "lan0" accept\n        iifname "wan0" drop\n    }\n\n  # \u5141\u8bb8 LAN \u8bf7\u6c42 WAN - \u5141\u8bb8 WAN \u56de\u5e94 LAN \u8bf7\u6c42\n    chain forward {\n        type filter hook forward priority 0; policy drop;\n        iifname "lan0" oifname "wan0" accept\n        iifname "wan0" oifname "lan0" ct state related,established accept\n    }\n}\n')),(0,r.kt)("h2",u({},{id:"\u57fa\u7840-nat-\u529f\u80fd"}),"\u57fa\u7840 NAT \u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),'table ip nat {\n    chain prerouting {\n        type nat hook prerouting priority 0; policy accept;\n    }\n\n  # \u4ece WAN \u51fa\u7684\u5305\uff0c\u5728\u7ed3\u675f\u8def\u7531\u540e\u66ff\u6362 \u6765\u6e90\u5730\u5740 \u4e3a wan0 \u7684\u4e3b\u8981\u5730\u5740\n    chain postrouting {\n        type nat hook postrouting priority 100; policy accept;\n        oifname "wan0" masquerade\n    }\n}\n')))}w.isMDXComponent=!0}}]);