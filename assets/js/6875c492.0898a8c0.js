"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48610],{8625:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(59496),r=a(54024),l=a(19188);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},16315:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(59496),r=a(72161),l=a(79492);function o({items:e,component:t=l.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(r.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},10511:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(59496),r=a(45924),l=a(54024),o=a(75809),s=a(96044),i=a(66809),c=a(3934),g=a(61563),u=a(8625),m=a(57505),p=a(16315),b=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&E(e,a,t[a]);if(d)for(var a of d(t))f.call(t,a)&&E(e,a,t[a]);return e};function v(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function Z({tag:e}){const t=v(e);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:t}),n.createElement(m.Z,{tag:"blog_tags_posts"}))}function P({tag:e,items:t,sidebar:a,listMetadata:r}){const o=v(e);return n.createElement(g.Z,{sidebar:a},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:e.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:t}),n.createElement(u.Z,{metadata:r}))}function k(e){return n.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(Z,w({},e)),n.createElement(P,w({},e)))}}}]);