"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64997],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,N=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57345:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&s(e,a,t[a]);return e};const c={title:"Layout"},k="CSS Layout",N={unversionedId:"web/style/css-layout",id:"web/style/css-layout",title:"Layout",description:"Layout is an arrangement or plan, especially the schematic arrangement of parts or areas",source:"@site/../notes/web/style/css-layout.md",sourceDirName:"web/style",slug:"/web/style/css-layout",permalink:"/notes/web/style/css-layout",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/style/css-layout.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Layout"},sidebar:"docs",previous:{title:"CSS in JS",permalink:"/notes/web/style/css-in-js"},next:{title:"CSS Rule",permalink:"/notes/web/style/css-rule"}},d={},f=[{value:"Gird",id:"gird",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}],y={toc:f};function g(e){var t,a=e,{components:r}=a,s=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),s),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"css-layout"}),"CSS Layout"),(0,n.kt)("admonition",m({},{title:"Layout",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Layout is an arrangement or plan, especially the schematic arrangement of parts or areas")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"flex"),(0,n.kt)("li",{parentName:"ul"},"grid - Chrome 57+, Safari 10.1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://drafts.csswg.org/css-grid-3/"}),"https://drafts.csswg.org/css-grid-3/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"}),"subgrid"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FF 71+"))))),(0,n.kt)("li",{parentName:"ul"},"table"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://css-tricks.com/snippets/css/complete-guide-grid/"}),"https://css-tricks.com/snippets/css/complete-guide-grid/"))))),(0,n.kt)("h2",m({},{id:"gird"}),"Gird"),(0,n.kt)("h2",m({},{id:"\u6982\u5ff5"}),"\u6982\u5ff5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"container"),(0,n.kt)("li",{parentName:"ul"},"lines - \u5207\u5206\u884c\u5217"),(0,n.kt)("li",{parentName:"ul"},"tracks - \u884c\u3001\u5217"),(0,n.kt)("li",{parentName:"ul"},"cell - horizontal track & vertical track \u7684\u4ea4\u53c9"),(0,n.kt)("li",{parentName:"ul"},"area - \u903b\u8f91\u4f4d\u7f6e - \u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a cell"),(0,n.kt)("li",{parentName:"ul"},"item - \u653e\u5728 area \u4e2d\u7684\u5185\u5bb9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"grid-area - \u6240\u5c5e\u533a\u57df"))),(0,n.kt)("li",{parentName:"ul"},"gap - tracks \u4e4b\u95f4\u95f4\u9694")),(0,n.kt)("h2",m({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Container")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"display: grid"),(0,n.kt)("li",{parentName:"ul"},"grid-template-columns"),(0,n.kt)("li",{parentName:"ul"},"grid-template-rows"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grid-template: <rows> / <columns>")),(0,n.kt)("li",{parentName:"ul"},"grid-template-areas - \u5b9a\u4e49\u533a\u57df\u540d\u5b57"),(0,n.kt)("li",{parentName:"ul"},"grid-auto-columns - \u8d85\u51fa\u90e8\u5206\u7684\u5b9a\u4e49",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"implicit grid tracks"))),(0,n.kt)("li",{parentName:"ul"},"grid-auto-rows"),(0,n.kt)("li",{parentName:"ul"},"grid-auto-flow",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(row|column) [dense]")))),(0,n.kt)("li",{parentName:"ul"},"grid"),(0,n.kt)("li",{parentName:"ul"},"gap - row-gap, column-gap"),(0,n.kt)("li",{parentName:"ul"},"justify-items - inline axis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start,end,center,stretch"),(0,n.kt)("li",{parentName:"ul"},"justify-self"))),(0,n.kt)("li",{parentName:"ul"},"align-items - block axis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"align-self"))),(0,n.kt)("li",{parentName:"ul"},"place-items - align / justify"),(0,n.kt)("li",{parentName:"ul"},"justify-content - inline axis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start, end, center, stretch, space-around, space-between, space-evenly"),(0,n.kt)("li",{parentName:"ul"},"\u6574\u4f53\u5185\u5bb9\u7684\u5e03\u5c40"))),(0,n.kt)("li",{parentName:"ul"},"align-content"),(0,n.kt)("li",{parentName:"ul"},"place-content - align / justify")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Item")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grid-(column|row)-(start|end)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<line> | ([span] (<number> | <name>)) | auto")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grid-(column|row)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<start-line> / <end-line> | <start-line> / span <value>")))),(0,n.kt)("li",{parentName:"ul"},"grid-area",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<name> | <row-start> / <column-start> / <row-end> / <column-end>")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(justify|align|place)-self"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Size")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"min-content"),(0,n.kt)("li",{parentName:"ul"},"max-content"),(0,n.kt)("li",{parentName:"ul"},"auto"),(0,n.kt)("li",{parentName:"ul"},"fit-content",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"between min and max"))),(0,n.kt)("li",{parentName:"ul"},"fr"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"minmax()"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6700\u5927\u6700\u5c0f"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"min()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"repeat(n,size)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"n",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"auto-fill - \u4f1a\u6784\u9020\u7a7a\u767d\u9690\u6027\u5217"),(0,n.kt)("li",{parentName:"ul"},"auto-fit - \u81ea\u52a8\u586b\u5145\u7a7a\u95f4"))))),(0,n.kt)("li",{parentName:"ul"},"masonry - \u76ee\u524d\u53ea\u6709 ff \u5b9e\u73b0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/"}),"https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/"}),"https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://houdini.glitch.me/"}),"https://houdini.glitch.me/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://drafts.css-houdini.org/css-layout-api/"}),"https://drafts.css-houdini.org/css-layout-api/")))),(0,n.kt)("li",{parentName:"ul"},"subgrid - ff 71+, safari tp",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ee7\u627f parent \u7684 line")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"grid \u56e0\u4e3a\u4e00\u5f00\u59cb\u8981\u5b9a\u4e49\u7684\u5185\u5bb9\u76f8\u5bf9\u591a\uff0c\u5f53\u6709\u4e9b\u5730\u65b9\u53c8\u9700\u8981\u4fdd\u6301\u7075\u6d3b\uff0c\u56e0\u6b64\u9700\u8981\u7075\u6d3b\u4f7f\u7528\u8ba1\u7b97\u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u9002\u5e94")))))))}g.isMDXComponent=!0}}]);