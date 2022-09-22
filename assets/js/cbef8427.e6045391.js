"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34309],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91539:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"kroki"},p="kroki",u={unversionedId:"languages/diagram/kroki",id:"languages/diagram/kroki",title:"kroki",description:"- yuzutech/kroki",source:"@site/../notes/languages/diagram/kroki.md",sourceDirName:"languages/diagram",slug:"/languages/diagram/kroki",permalink:"/notes/languages/diagram/kroki",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/diagram/kroki.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"kroki"},sidebar:"docs",previous:{title:"ERD",permalink:"/notes/languages/diagram/erd"},next:{title:"mermaid",permalink:"/notes/languages/diagram/mermaid"}},c={},s=[],m={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kroki"},"kroki"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yuzutech/kroki"},"yuzutech/kroki"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MIT, Java"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kroki.io"},"https://kroki.io")))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://asciiflow.com/"},"asciiflow"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u753b\u56fe\u53ef\u7528 ditaa \u6e32\u67d3"))),(0,i.kt)("li",{parentName:"ul"},"JS Zlib ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nodeca/pako"},"nodeca/pako"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# GET deflate + base64\n# POST plain\nenc=$(echo 'digraph G {Hello->World}' | python -c \"import sys; import base64; import zlib; print(base64.urlsafe_b64encode(zlib.compress(sys.stdin.read(), 9)))\")\ncurl https://kroki.io/graphviz/svg/$enc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'### POST json\nPOST https://kroki.io\n\n{\n  "diagram_source": "digraph G {Hello->World}",\n  "diagram_type": "graphviz",\n  "output_format": "svg"\n}\n\n### POST accept\nPOST https://kroki.io/graphviz\nAccept: image/svg+xml\nContent-Type: text/plain\n\ndigraph G {\n  Hello->World\n}\n\n### POST plain\nPOST https://kroki.io/graphviz/svg\nContent-Type: text/plain\n\ndigraph G {\n  Hello->World\n}\n\n### POST json with format in path\nPOST https://kroki.io/graphviz/svg\n\n{\n  "diagram_source": "digraph G {Hello->World}"\n}\n')))}k.isMDXComponent=!0}}]);