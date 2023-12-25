"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38449],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return w}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>a(e,l(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={commands:["ethtool"]},b="ethtool",y={unversionedId:"network/tool/ethtool",id:"network/tool/ethtool",title:"ethtool",description:"- ethtool.8",source:"@site/../notes/network/tool/ethtool.md",sourceDirName:"network/tool",slug:"/network/tool/ethtool",permalink:"/notes/network/tool/ethtool",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/network/tool/ethtool.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1703483037,formattedLastUpdatedAt:"Dec 25, 2023",frontMatter:{commands:["ethtool"]},sidebar:"docs",previous:{title:"\u7f51\u7edc\u76f8\u5173\u5de5\u5177\u96c6",permalink:"/notes/network/tool/"},next:{title:"ifconfig",permalink:"/notes/network/tool/ifconfig"}},h={},w=[],O={toc:w},v="wrapper";function g(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(v,f(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"ethtool"}),"ethtool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://linux.die.net/man/8/ethtool"}),"ethtool.8")),(0,r.kt)("li",{parentName:"ul"},"query or control network driver and hardware settings")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"ethtool eth0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"Settings for eth0:\n    Supported ports: [ TP ]\n    Supported link modes:   10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Supported pause frame use: No\n    Supports auto-negotiation: Yes\n    Advertised link modes:  10baseT/Half 10baseT/Full\n                            100baseT/Half 100baseT/Full\n                            1000baseT/Full\n    Advertised pause frame use: No\n    Advertised auto-negotiation: Yes\n    Speed: 100Mb/s\n    Duplex: Full\n    Port: Twisted Pair\n    PHYAD: 1\n    Transceiver: internal\n    Auto-negotiation: on\n    MDI-X: off\n    Supports Wake-on: g\n    Wake-on: d\n    Link detected: yes\n")))}g.isMDXComponent=!0}}]);