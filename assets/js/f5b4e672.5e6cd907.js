"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69375],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,g=m["".concat(i,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),s=["components"],p={title:"gopaas"},i="gopaas",c={unversionedId:"ops/admin/gopaas",id:"ops/admin/gopaas",title:"gopaas",description:"- gopasspw/gopass",source:"@site/../notes/ops/admin/gopaas.md",sourceDirName:"ops/admin",slug:"/ops/admin/gopaas",permalink:"/notes/ops/admin/gopaas",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/ops/admin/gopaas.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"gopaas"},sidebar:"docs",previous:{title:"fio",permalink:"/notes/ops/admin/fio"},next:{title:"GPG",permalink:"/notes/ops/admin/gpg"}},u={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gopaas"},"gopaas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gopasspw/gopass"},"gopasspw/gopass")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codecentric/gopass-ui"},"codecentric/gopass-ui")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gopasspw/gopassbridge"},"gopasspw/gopassbridge"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/gopasspw/gopass@latest\n\n# bash \u8865\u5168\nsource <(gopass completion bash)\n\n# ~/.password-store/\n# ~/.local/share/gopass/stores/root\ngopass setup\n")))}f.isMDXComponent=!0}}]);