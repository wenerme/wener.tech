"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[93089],{46460:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(59496),r=n(45924),l=n(13133),i=n(24722),o=n(32889),c=n(23740),s=n(97157),m=n(7045),p=n(22830),g=Object.defineProperty,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&E(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&E(e,n,t[n]);return e};function v(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:o,permalink:c}=t,s="/"===c?n:o;return a.createElement(a.Fragment,null,a.createElement(i.d,{title:s,description:r}),a.createElement(m.Z,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:n,sidebar:r}=e;return a.createElement(c.Z,{sidebar:r},a.createElement(p.Z,{items:n}),a.createElement(s.Z,{metadata:t}))}function w(e){return a.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(v,f({},e)),a.createElement(h,f({},e)))}},97157:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(59496),r=n(96487),l=n(93537);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&a.createElement(l.Z,{permalink:i,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},22830:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(59496),r=n(80778),l=n(89994);function i({items:e,component:t=l.Z}){return a.createElement(a.Fragment,null,e.map((({content:e})=>a.createElement(r.n,{key:e.metadata.permalink,content:e},a.createElement(t,null,a.createElement(e,null))))))}}}]);