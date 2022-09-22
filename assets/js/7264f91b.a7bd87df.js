"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[31351],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var a=r(59496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=l,d=s["".concat(u,".").concat(f)]||s[f]||c[f]||n;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},97201:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(96600),l=r(27279),n=(r(59496),r(49613)),o=["components"],i={title:"Cloudflare Workers"},u="Worker",p={unversionedId:"platform/cloudflare-worker",id:"platform/cloudflare-worker",title:"Cloudflare Workers",description:"- cloudflare/wrangler",source:"@site/../notes/platform/cloudflare-worker.md",sourceDirName:"platform",slug:"/platform/cloudflare-worker",permalink:"/notes/platform/cloudflare-worker",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/platform/cloudflare-worker.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Cloudflare Workers"},sidebar:"docs",previous:{title:"Cloudflare Team",permalink:"/notes/platform/cloudflare-team"},next:{title:"CloudFlare",permalink:"/notes/platform/cloudflare"}},m={},c=[{value:"wrangler",id:"wrangler",level:2},{value:"You have not installed wrangler",id:"you-have-not-installed-wrangler",level:2}],s={toc:c};function f(e){var t=e.components,r=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"worker"},"Worker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/wrangler"},"cloudflare/wrangler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/miniflare"},"cloudflare/miniflare"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fully-local simulator"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/skymethod/denoflare"},"skymethod/denoflare"),(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29142772"},"HN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/losfair/blueboat"},"losfair/blueboat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"open-source alternative to Cloudflare Workers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/production-saas"},"cloudflare/production-saas")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/flareact/flareact"},"flareact/flareact"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Edge-rendered React framework built for Cloudflare Workers"))),(0,n.kt)("li",{parentName:"ul"},"Free",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workers Bundled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10 ms/\u8bf7\u6c42"),(0,n.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u8bf7\u6c42\u540e\u7684\u5ef6\u8fdf\u6700\u4f4e"),(0,n.kt)("li",{parentName:"ul"},"100,000 \u8bf7\u6c42/\u5929"))),(0,n.kt)("li",{parentName:"ul"},"KV",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5168\u5c40\u6027\u7684\u4f4e\u5ef6\u8fdf\u952e\u503c\u8fb9\u7f18\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"100,000 read/day"),(0,n.kt)("li",{parentName:"ul"},"1,000 update or list/day"))))),(0,n.kt)("li",{parentName:"ul"},"Paid Plan - Bundled - US$5/\u6708",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10 million \u8bf7\u6c42/\u6708, +$0.50/million"),(0,n.kt)("li",{parentName:"ul"},"50ms/\u8bf7\u6c42"))),(0,n.kt)("li",{parentName:"ul"},"Paid plan - Unbound",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 million \u8bf7\u6c42/\u6708, + $0.15/million"),(0,n.kt)("li",{parentName:"ul"},"400,000 GB-s, +$12.50/million GB-s")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serverless-nextjs/serverless-next.js/issues/111"},"serverless-next.js#111")))),(0,n.kt)("h2",{id:"wrangler"},"wrangler"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @cloudflare/wrangler -g\n\nwrangler login\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"~/.wrangler/config/default.toml")),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"you-have-not-installed-wrangler"},"You have not installed wrangler"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node $(dirname $(realpath $(which wrangler)))/install-wrangler.js\n")))}f.isMDXComponent=!0}}]);