"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17822],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var r=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(a),c=l,d=k["".concat(o,".").concat(c)]||k[c]||s[c]||n;return a?r.createElement(d,i(i({ref:e},u),{},{components:a})):r.createElement(d,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31381:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=a(96600),l=a(27279),n=(a(59496),a(49613)),i=["components"],p={title:"tiptap"},o="tiptap",m={unversionedId:"web/editor/tiptap",id:"web/editor/tiptap",title:"tiptap",description:"- ueberdosis/tiptap",source:"@site/../notes/web/editor/tiptap.md",sourceDirName:"web/editor",slug:"/web/editor/tiptap",permalink:"/notes/web/editor/tiptap",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/editor/tiptap.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"tiptap"},sidebar:"docs",previous:{title:"Tiptap Extension",permalink:"/notes/web/editor/tiptap-extension"},next:{title:"unifiedjs",permalink:"/notes/web/editor/unifiedjs"}},u={},s=[{value:"@tiptap/html",id:"tiptaphtml",level:2},{value:"Extensions",id:"extensions",level:2},{value:"nextcloud/text",id:"nextcloudtext",level:2},{value:"Schema",id:"schema",level:2},{value:"Tiptap v1 vs Tiptap v2",id:"tiptap-v1-vs-tiptap-v2",level:2}],k={toc:s};function c(t){var e=t.components,a=(0,l.Z)(t,i);return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tiptap"},"tiptap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ueberdosis/tiptap"},"ueberdosis/tiptap"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Typescript"),(0,n.kt)("li",{parentName:"ul"},"Headlees\uff0c\u6846\u67b6\u65e0\u5173\u7684\u7f16\u8f91\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ProseMirror"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u4f5c\u7f16\u8f91 - y.js"),(0,n.kt)("li",{parentName:"ul"},"Pro \u63d0\u4f9b\u90e8\u5206\u989d\u5916\u6269\u5c55 - emoji, details"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/@tiptap/core?label=@tiptap/core%20min",alt:"@tiptap/core min"}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"prosemirror 188k - prosemirror-{view,model,transform,state,commands,schema-list,keymap}"),(0,n.kt)("li",{parentName:"ul"},"@tiptap/core +58k"),(0,n.kt)("li",{parentName:"ul"},"@tiptap/starter-kit +4k - \u6269\u5c55\u90fd\u5f88\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"@tiptap/react \u5305\u542b @popperjs/core, tippy.js ~ +60k"),(0,n.kt)("li",{parentName:"ul"},"~310kb")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a inject \u4e00\u70b9 css - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ueberdosis/tiptap/blob/main/packages/core/src/style.ts"},"packages/core/src/style.ts")),(0,n.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u5185\u7f6e Markdown \u652f\u6301 - \u53ef\u4f7f\u7528 prosemirror-markdown",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/text"},"nextcloud/text")))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @tiptap/{starter-kit,html}\n# starter \u4ee5\u5916\u5e38\u7528\u6269\u5c55\nnpm add @tiptap/extension-{underline,text-style,text-align,underline,link,font-family,color,character-count}\n\nnpm add @tiptap/extension-image\nnpm add @tiptap/extension-table{,-row,-cell,-header}\nnpm add @tiptap/extension-task-{list,item}\n\nnpm add @tiptap/extension-horizontal-rule\n")),(0,n.kt)("h2",{id:"tiptaphtml"},"@tiptap/html"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSON <-> HTML"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 Editor \u5b9e\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e zeed-dom",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"+85k"),(0,n.kt)("li",{parentName:"ul"},"css-what +10k"))),(0,n.kt)("li",{parentName:"ul"},"HTML \u4e5f\u662f\u57fa\u4e8e JSON \u6a21\u578b\u751f\u6210\u7684",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"prosemirror-model - DOMSerializer, DOMParser")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// Browser + server-side\nimport { generateHTML, generateJSON } from '@tiptap/html';\n// \u8f7b\u91cf\u7ea7\nimport { generateHTML, generateJSON } from '@tiptap/core';\n")),(0,n.kt)("h2",{id:"extensions"},"Extensions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@tiptap/extension-{name}")),(0,n.kt)("li",{parentName:"ul"},"\u6837\u5f0f/Mark",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"code - ",(0,n.kt)("inlineCode",{parentName:"li"},"<code>")),(0,n.kt)("li",{parentName:"ul"},"bold - strong, b, style.font-weight=bold/bolder/500-900"),(0,n.kt)("li",{parentName:"ul"},"color - \u57fa\u4e8e text-style - style.color"),(0,n.kt)("li",{parentName:"ul"},"font-family - \u57fa\u4e8e text-style - style.fontFamily"),(0,n.kt)("li",{parentName:"ul"},"link - a"),(0,n.kt)("li",{parentName:"ul"},"subscript - sub, style.vertical-align=sub"),(0,n.kt)("li",{parentName:"ul"},"superscript - sup, style.vertical-align=super"),(0,n.kt)("li",{parentName:"ul"},"text-align - style.textAlign"),(0,n.kt)("li",{parentName:"ul"},"text-style - \u5b9e\u73b0\u81ea\u5b9a\u4e49\u5c5e\u6027 - \u5305\u88c5\u4e3a span,"),(0,n.kt)("li",{parentName:"ul"},"typography - \u5e38\u7528\u5b57\u7b26\u66ff\u6362 - addInputRules - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"+-")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"\xb1")),(0,n.kt)("li",{parentName:"ul"},"underline - u"),(0,n.kt)("li",{parentName:"ul"},"strike - s, del, strike, style.text-decoration=line-through"),(0,n.kt)("li",{parentName:"ul"},"italic - em, i, style.font-style=italic"),(0,n.kt)("li",{parentName:"ul"},"highlight - data-color, style.backgroundColor"))),(0,n.kt)("li",{parentName:"ul"},"\u5143\u7d20/node",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"blockquote - ",(0,n.kt)("inlineCode",{parentName:"li"},"<blockquote>")),(0,n.kt)("li",{parentName:"ul"},"code-block - ",(0,n.kt)("inlineCode",{parentName:"li"},'<pre><code class="lang">')),(0,n.kt)("li",{parentName:"ul"},"code-block-lowlight - \u8bed\u6cd5\u9ad8\u4eae - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wooorm/lowlight"},"lowlight")," \u57fa\u4e8e highlight.js"),(0,n.kt)("li",{parentName:"ul"},"document - ",(0,n.kt)("inlineCode",{parentName:"li"},"Node.create({name: 'doc',topNode: true,content: 'block+'})")),(0,n.kt)("li",{parentName:"ul"},"emoji - PRO"),(0,n.kt)("li",{parentName:"ul"},"hard-break - br"),(0,n.kt)("li",{parentName:"ul"},"hash-tag - WIP"),(0,n.kt)("li",{parentName:"ul"},"details - PRO - DetailsSummary, DetailsContent"),(0,n.kt)("li",{parentName:"ul"},"heading - h1-h6"),(0,n.kt)("li",{parentName:"ul"},"horizontal-rule - hr"),(0,n.kt)("li",{parentName:"ul"},"image - ",(0,n.kt)("inlineCode",{parentName:"li"},"<img src>")),(0,n.kt)("li",{parentName:"ul"},"list-item - li"),(0,n.kt)("li",{parentName:"ul"},"mention - ",(0,n.kt)("inlineCode",{parentName:"li"},"<span data-id data-label>")),(0,n.kt)("li",{parentName:"ul"},"ordered-list - ol"),(0,n.kt)("li",{parentName:"ul"},"bullet-list - ul"),(0,n.kt)("li",{parentName:"ul"},"paragraph - p"),(0,n.kt)("li",{parentName:"ul"},"text - ",(0,n.kt)("inlineCode",{parentName:"li"},"Node.create({name: 'text',group: 'inline'})")),(0,n.kt)("li",{parentName:"ul"},"table",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"table-cell"),(0,n.kt)("li",{parentName:"ul"},"table-header"),(0,n.kt)("li",{parentName:"ul"},"table-row"))),(0,n.kt)("li",{parentName:"ul"},"task-list",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"task-item"))))),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"placeholder - Editor \u5185\u5bb9\u4e3a\u7a7a\u65f6\u7684\u5360\u4f4d\u5185\u5bb9 - ProseMirrorPlugin"),(0,n.kt)("li",{parentName:"ul"},"history - undo, redo"),(0,n.kt)("li",{parentName:"ul"},"bubble-menu - \u9009\u4e2d\u65f6\u51fa\u73b0\u7684\u83dc\u5355 - \u57fa\u4e8e tippy.js"),(0,n.kt)("li",{parentName:"ul"},"floating-menu - \u7a7a\u767d\u884c\u51fa\u73b0"),(0,n.kt)("li",{parentName:"ul"},"character-count - \u8bb0\u5f55\u6570\u91cf - \u53ef\u9650\u5b9a\u8f93\u5165\u6570\u91cf"),(0,n.kt)("li",{parentName:"ul"},"focus - \u5982\u679c Node \u6709 focus \u6dfb\u52a0 className has-focus - ProseMirrorPlugin"),(0,n.kt)("li",{parentName:"ul"},"dropcursor - prosemirror-dropcursor"),(0,n.kt)("li",{parentName:"ul"},"gapcursor - \u5904\u7406 Node \u4e0a\u7684 allowGapCursor \u5c5e\u6027 - prosemirror-gapcursor"))),(0,n.kt)("li",{parentName:"ul"},"\u534f\u4f5c - y-prosemirror",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"collaboration"),(0,n.kt)("li",{parentName:"ul"},"collaboration-cursor"))),(0,n.kt)("li",{parentName:"ul"},"starter-kit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"blockquote, bullet-list, list-item, ordered-list, paragraph, code, code-block, document, heading"),(0,n.kt)("li",{parentName:"ul"},"strike, bold, text, italic"),(0,n.kt)("li",{parentName:"ul"},"hard-break, horizontal-rule"),(0,n.kt)("li",{parentName:"ul"},"history"),(0,n.kt)("li",{parentName:"ul"},"dropcursor, gapcursor")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55\u529f\u80fd Node \u4f1a\u8bb0\u5f55\u7c7b\u578b\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"data-type")," - \u4f8b\u5982 TaskList -> ",(0,n.kt)("inlineCode",{parentName:"li"},"ul[data-type=taskList]")),(0,n.kt)("li",{parentName:"ul"},"Mark \u5e38\u89c1 command \u6a21\u5f0f ",(0,n.kt)("inlineCode",{parentName:"li"},"set<Mark>"),",",(0,n.kt)("inlineCode",{parentName:"li"},"unset<Mark>"),",",(0,n.kt)("inlineCode",{parentName:"li"},"toggle<Mark>")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Community Extensions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ueberdosis/tiptap/issues/819"},"ueberdosis/tiptap#819")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tiptap.dev/experiments/commands"},"https://tiptap.dev/experiments/commands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ueberdosis/tiptap/issues/1036"},"https://github.com/ueberdosis/tiptap/issues/1036"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"indent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Leecason/element-tiptap/tree/master/src/extensions"},"https://github.com/Leecason/element-tiptap/tree/master/src/extensions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"tiptap v1"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tiptap.dev/api/extensions"},"https://tiptap.dev/api/extensions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ueberdosis/tiptap/tree/main/packages"},"https://github.com/ueberdosis/tiptap/tree/main/packages")),(0,n.kt)("li",{parentName:"ul"},"jump-anchor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/mackmm145/f100a62de841464872785e3d041be13f"},"https://gist.github.com/mackmm145/f100a62de841464872785e3d041be13f")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab/-/tree/master/spec/frontend/content_editor"},"https://gitlab.com/gitlab-org/gitlab/-/tree/master/spec/frontend/content_editor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gitlab \u4f7f\u7528 tiptap")))),(0,n.kt)("h2",{id:"nextcloudtext"},"nextcloud/text"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9/Node",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/text/blob/master/src/extensions/Emoji.js"},"Emoji"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9009\u53d6\u7ec4\u4ef6 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/nextcloud-vue/blob/master/src/components/EmojiPicker/EmojiPicker.vue"},"EmojiPicker.vue")),(0,n.kt)("li",{parentName:"ul"},"React \u7248 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/missive/emoji-mart"},"missive/emoji-mart")),(0,n.kt)("li",{parentName:"ul"},"Vue fork ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serebrov/emoji-mart-vue"},"serebrov/emoji-mart-vue")))))),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55/Extension",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Keymap - Ctrl-f \u89e6\u53d1\u6d4f\u89c8\u5668\u641c\u7d22\u800c\u975e Editor"),(0,n.kt)("li",{parentName:"ul"},"Markdown - \u589e\u52a0 toMarkdown\uff0c\u4f7f\u7528 prosemirror-markdown \u8fdb\u884c\u9ed8\u8ba4\u5e8f\u5217\u5316"),(0,n.kt)("li",{parentName:"ul"},"Collaboration"),(0,n.kt)("li",{parentName:"ul"},"UserColor")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nextcloud/text"},"nextcloud/text"))),(0,n.kt)("h2",{id:"schema"},"Schema"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tiptap.dev/api/schema"},"schema"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="model.json"',title:'"model.json"'},'{\n  "type": "doc",\n  "content": [\n    {\n      "type": "paragraph",\n      "content": [\n        {\n          "type": "text",\n          "text": "Wow, this editor instance exports its content as JSON."\n        }\n      ]\n    }\n  ]\n}\n')),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("h2",{id:"tiptap-v1-vs-tiptap-v2"},"Tiptap v1 vs Tiptap v2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tiptap v1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Vue"))),(0,n.kt)("li",{parentName:"ul"},"Tiptap v2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3 Headless"),(0,n.kt)("li",{parentName:"ul"},"React, Vue, Alpine, Svelte"),(0,n.kt)("li",{parentName:"ul"},"\u534f\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"@mentions \u8865\u5168")))))}c.isMDXComponent=!0}}]);