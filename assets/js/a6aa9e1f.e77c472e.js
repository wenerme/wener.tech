"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93089],{2976:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(50959),r=a(5341),l=a(52098),i=a(75084),o=a(87056),s=a(50815),c=a(81994),m=a(1843),p=a(61632),g=Object.defineProperty,b=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&E(e,a,t[a]);if(b)for(var a of b(t))u.call(t,a)&&E(e,a,t[a]);return e};function v(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:r}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.Z,{sidebar:r},n.createElement(p.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function Z(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(v,f({},e)),n.createElement(h,f({},e)))}},81994:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(50959),r=a(93510),l=a(10117);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},61632:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(50959),r=a(97557),l=a(76193);function i({items:e,component:t=l.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(r.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},60770:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(50959),r=a(43075);r.L.initialize({startOnLoad:!0});const l=({chart:e})=>((0,n.useEffect)((()=>{r.L.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},e))}}]);