"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79555],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,f=u["".concat(i,".").concat(y)]||u[y]||s[y]||o;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var l=2;l<o;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e};const u={title:"Caddy"},y="Caddy",f={unversionedId:"devops/web/caddy",id:"devops/web/caddy",title:"Caddy",description:"- mholt/caddy",source:"@site/../notes/devops/web/caddy.md",sourceDirName:"devops/web",slug:"/devops/web/caddy",permalink:"/notes/devops/web/caddy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/caddy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"Caddy"},sidebar:"docs",previous:{title:"Caddy V1",permalink:"/notes/devops/web/caddy-v1"},next:{title:"HAProxy \u914d\u7f6e",permalink:"/notes/devops/web/haproxy-conf"}},m={},b=[],v={toc:b};function w(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),p),o(t,d({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"caddy"}),"Caddy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/mholt/caddy"}),"mholt/caddy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Apache-2.0, Golang")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"brew install caddy # macOS - /usr/local/etc/Caddyfile\n\n# \u542f\u52a8 \u5e76\u76d1\u542c\u914d\u7f6e\u53d8\u5316\ncaddy run --watch --config Caddyfile --adapter caddyfile\n# caddy start # \u540e\u53f0\u542f\u52a8\n\ncaddy build-info\ncaddy list-modules\n\ncaddy reload\n\n# Caddyfile -> JSON\n# --validate --pretty\ncaddy adapt --config Caddyfile | jq\ncaddy validate Caddyfile\ncaddy fmt --overwrite Caddyfile\n\ncaddy trust # \u5b89\u88c5\u8bc1\u4e66\ncaddy untrust\n\n# \u5feb\u901f\u542f\u52a8\u670d\u52a1\n# ==========\n# --root $PWD --listen :80 --templates\ncaddy file-server --access-log # \u6587\u4ef6\u670d\u52a1\ncaddy respond --status 401     # \u8fd4\u56de\u76f8\u540c\u54cd\u5e94 - \u7528\u4e8e\u6d4b\u8bd5\n\ncaddy reverse-proxy --to https://wener.me --internal-certs --from :8081 --change-host-header # \u53cd\u5411\u4ee3\u7406 http://127.0.0.1:8081/\n\n# \u5305\u7ba1\u7406\n# ==========\ncaddy add-package github.com/caddy-dns/cloudflare\n# caddy remove-package\n")))}w.isMDXComponent=!0}}]);