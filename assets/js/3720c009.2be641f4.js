"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13751],{87983:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(59496),r=n(45924),l=n(32045),c=n(12127),u=n(27753),s=n(68569),i=n(86120),o=n(92525);function m(e){var t=e.tags,n=(0,l.M)();return a.createElement(c.FG,{className:(0,r.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},a.createElement(c.d,{title:n}),a.createElement(o.Z,{tag:"doc_tags_list"}),a.createElement(s.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("h1",null,n),a.createElement(i.Z,{tags:t}))))))}},41390:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(59496),r=n(45924),l=n(56516),c="tag_aw9P",u="tagRegular_VB9f",s="tagWithCount_pU3i";function i(e){var t=e.permalink,n=e.label,i=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,i?s:u)},n,i&&a.createElement("span",null,i))}},86120:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(59496),r=n(32045),l=n(41390),c="tag_txjM";function u(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(l.Z,e))}))),a.createElement("hr",null))}function s(e){var t=e.tags,n=(0,r.P)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(u,{key:e.letter,letterEntry:e})})))}},32045:function(e,t,n){n.d(t,{M:function(){return r},P:function(){return l}});var a=n(1329),r=function(){return(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);