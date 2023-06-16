"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70560],{49613:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return y}});var t=n(59496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),y=o,m=f["".concat(p,".").concat(y)]||f[y]||u[y]||a;return n?t.createElement(m,c(c({ref:r},s),{},{components:n})):t.createElement(m,c({ref:r},s))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26043:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return g}});var t=n(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))p.call(r,n)&&s(e,n,r[n]);if(i)for(var n of i(r))l.call(r,n)&&s(e,n,r[n]);return e};const f={title:"proxychains-ng"},y="proxychains-ng",m={unversionedId:"service/network/proxy/proxychain-ng",id:"service/network/proxy/proxychain-ng",title:"proxychains-ng",description:"- rofl0r/proxychains-ng",source:"@site/../notes/service/network/proxy/proxychain-ng.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/proxychain-ng",permalink:"/notes/service/network/proxy/proxychain-ng",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/proxychain-ng.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"proxychains-ng"},sidebar:"docs",previous:{title:"Proxy FAQ",permalink:"/notes/service/network/proxy/faq"},next:{title:"SNI Reverse Proxy",permalink:"/notes/service/network/proxy/sni-rev-proxy"}},d={},g=[],b={toc:g};function v(e){var r,n=e,{components:o}=n,s=((e,r)=>{var n={};for(var t in e)p.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&l.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=u(u({},b),s),a(r,c({components:o,mdxType:"MDXLayout"}))),(0,t.kt)("h1",u({},{id:"proxychains-ng"}),"proxychains-ng"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",u({parentName:"li"},{href:"https://github.com/rofl0r/proxychains-ng"}),"rofl0r/proxychains-ng")),(0,t.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u5e94\u7528\u8fdb\u884c\u4ee3\u7406\uff0c\u901a\u8fc7 preload \u6765\u5c06\u8fd0\u884c\u65f6\u7684\u7f51\u7edc\u8bf7\u6c42\u8fdb\u884c\u52a8\u6001\u4ee3\u7406\u3002"),(0,t.kt)("li",{parentName:"ul"},"/usr/local/etc/proxychains.conf")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install proxychains-ng\n\n# \u7f51\u7edc\u8bf7\u6c42\u4f1a\u88ab\u4ee3\u7406\nproxychains4 curl google.com\n")))}v.isMDXComponent=!0}}]);