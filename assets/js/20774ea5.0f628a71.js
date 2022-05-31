"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53841],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49831:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"ProseMirror"},p=void 0,m={unversionedId:"web/editor/prosemirror",id:"web/editor/prosemirror",title:"ProseMirror",description:"- prosemirror",source:"@site/notes/web/editor/prosemirror.md",sourceDirName:"web/editor",slug:"/web/editor/prosemirror",permalink:"/notes/web/editor/prosemirror",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/editor/prosemirror.md",tags:[],version:"current",frontMatter:{title:"ProseMirror"},sidebar:"docs",previous:{title:"MarkDoc",permalink:"/notes/web/editor/markdoc"},next:{title:"react-page",permalink:"/notes/web/editor/react-page"}},u={},s=[{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2}],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prosemirror.net/"},"prosemirror"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"low-level rte toolkit"))),(0,o.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u5316\u7684\u6a21\u578b\u6811"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u578b\u4e0d\u53ef\u53d8"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u4f5c\u7f16\u8f91"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u578b\u53d7 schema \u9650\u5236 - \u5b9e\u73b0\u81ea\u5b9a\u4e49"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u578b\u72b6\u6001\u53d8\u5316\u7c7b\u4f3c\u4e8e redux"),(0,o.kt)("li",{parentName:"ul"},"\u6574\u4f53\u6982\u5ff5\u7c7b\u4f3c\u4e8e react+redux"),(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001 UI \u72ec\u7acb"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prosemirror.net/docs/ref/"},"Reference manual"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6838\u5fc3\u6a21\u5757\nnpm add prosemirror-{state,view,model,schema-basic,schema-list}\nnpm add --dev @types/prosemirror-{state,view,model,schema-basic,schema-list}\n# \u6269\u5c55\u6a21\u5757\nnpm add prosemirror-{keymap,history,commands,dropcursor,gapcursor,menu,inputrules}\nnpm add --dev @types/prosemirror-{keymap,history,commands,dropcursor,gapcursor,menu,inputrules}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { schema } from 'prosemirror-schema-basic';\nimport { EditorState } from 'prosemirror-state';\nimport { EditorView } from 'prosemirror-view';\nimport { DOMParser } from 'prosemirror-model';\n\nimport { baseKeymap } from 'prosemirror-commands';\nimport { undo, redo, history } from 'prosemirror-history';\nimport { keymap } from 'prosemirror-keymap';\n\nlet content = document.getElementById('content');\nlet state = EditorState.create({\n  // \u521d\u59cb\u72b6\u6001\n  doc: DOMParser.fromSchema(schema).parse(content),\n  schema,\n  plugins: [history(), keymap({ 'Mod-z': undo, 'Mod-y': redo }), keymap(baseKeymap)],\n});\nlet view = new EditorView(document.body, { state });\n\n// \u57fa\u4e8e schema \u53ef\u76f4\u63a5\u6784\u5efa doc\nlet doc = schema.node('doc', null, [\n  schema.node('paragraph', null, [schema.text('One.')]),\n  schema.node('horizontal_rule'),\n  schema.node('paragraph', null, [schema.text('Two!')]),\n]);\n\n// Schema \u5305\u542b nodes, marks\nnew Schema({\n  nodes: {\n    doc: { content: 'block+' },\n    paragraph: {\n      group: 'block',\n      content: 'text*',\n      marks: '_',\n\n      toDOM(node) {\n        return ['p', 0];\n      },\n    },\n    heading: { group: 'block', content: 'text*', marks: '', attrs: { level: { default: 1 } } },\n    text: { inline: true },\n  },\n  marks: {\n    strong: {},\n    em: {\n      parseDOM: [\n        { tag: 'em' }, // Match <em> nodes\n        { tag: 'i' }, // and <i> nodes\n        { style: 'font-style=italic' }, // and inline 'font-style: italic'\n      ],\n    },\n  },\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"content \u8bed\u6cd5 - \u7c7b\u4f3c\u4e8e PEG \u8bed\u6cd5\u3001RegExp \u8bed\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paragraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paragraph+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paragraph*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paragraph{2}"),",",(0,o.kt)("inlineCode",{parentName:"li"},"paragraph{2,}"),",",(0,o.kt)("inlineCode",{parentName:"li"},"paragraph{2,3}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"heading paragraph+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(paragraph | blockquote)+")))),(0,o.kt)("li",{parentName:"ul"},"marks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_")," \u8868\u793a\u4efb\u610f"))),(0,o.kt)("li",{parentName:"ul"},"group \u5b9a\u4e49\u7c7b\u578b\u7ec4\u5408"),(0,o.kt)("li",{parentName:"ul"},"Plugin",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"props",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"decorations"))),(0,o.kt)("li",{parentName:"ul"},"state"))),(0,o.kt)("li",{parentName:"ul"},"EditorView - typing, clicking, copying, pasting, dragging")),(0,o.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757 - ",(0,o.kt)("inlineCode",{parentName:"li"},"prosemirror-<module>")),(0,o.kt)("li",{parentName:"ul"},"prosemirror-state - \u7f16\u8f91\u5668\u72b6\u6001",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"EditorState"),(0,o.kt)("li",{parentName:"ul"},"Transaction"),(0,o.kt)("li",{parentName:"ul"},"Selection - from,to - anchor,head",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"TextSelection"),(0,o.kt)("li",{parentName:"ul"},"NodeSelection - node"),(0,o.kt)("li",{parentName:"ul"},"AllSelection"))),(0,o.kt)("li",{parentName:"ul"},"Plugin"),(0,o.kt)("li",{parentName:"ul"},"PluginKey"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-view - Web \u7f16\u8f91\u5668 - DOM <-> State",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"EditorView"),(0,o.kt)("li",{parentName:"ul"},"Decoration"),(0,o.kt)("li",{parentName:"ul"},"DecorationSet"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-model - \u5b9a\u4e49\u6587\u6863\u6a21\u578b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node"),(0,o.kt)("li",{parentName:"ul"},"Fragment - node's collection of child nodes"),(0,o.kt)("li",{parentName:"ul"},"Mark"),(0,o.kt)("li",{parentName:"ul"},"Slice"),(0,o.kt)("li",{parentName:"ul"},"ResolvedPos"),(0,o.kt)("li",{parentName:"ul"},"NodeRange"),(0,o.kt)("li",{parentName:"ul"},"Schema"),(0,o.kt)("li",{parentName:"ul"},"NodeType"),(0,o.kt)("li",{parentName:"ul"},"MarkType"),(0,o.kt)("li",{parentName:"ul"},"ContentMatch"),(0,o.kt)("li",{parentName:"ul"},"DOMParser"),(0,o.kt)("li",{parentName:"ul"},"DOMSerializer"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-transform - \u72b6\u6001\u4e8b\u52a1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Step - ReplaceStep, ReplaceAroundStep, AddMarkStep, RemoveMarkStep"),(0,o.kt)("li",{parentName:"ul"},"StepResult"),(0,o.kt)("li",{parentName:"ul"},"Mappable - StepMap, Mapping"),(0,o.kt)("li",{parentName:"ul"},"MapResult"),(0,o.kt)("li",{parentName:"ul"},"Transform"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-commands"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-keymap"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-history"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-inputrules - \u8f93\u5165\u7279\u5b9a\u5185\u5bb9\uff0c\u89e6\u53d1\u547d\u4ee4 - \u5b9e\u73b0 Markdown \u8f93\u5165\u8bed\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"InputRule"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-collab"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-gapcursor"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-schema-basic - \u7c7b CommonMark \u7684 Schema, \u4e0d\u5305\u542b list",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"nodes - doc, paragraph, blockquote, horizontal_rule, heading, code_block, text, image, hard_break"),(0,o.kt)("li",{parentName:"ul"},"marks - line, em, strong, code"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-schema-list - \u7c7b CommonMark \u7684 \u5217\u8868 schema",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"orderedList, bulletList, listItem"))),(0,o.kt)("li",{parentName:"ul"},"prosemirror-markdown"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-menu"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-dropcursor"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-table"),(0,o.kt)("li",{parentName:"ul"},"prosemirror-changeset")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="model"',title:'"model"'},'{\n  "type": "",\n  "attrs": {},\n  "content": {},\n  "marks": [\n    {\n      "type": "",\n      "attr": {}\n    }\n  ]\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6570\u7ec4 - ['tag',{},0]\ntype DOMOutputSpec = string | DOMNode | {dom: DOMNode, contentDOM?: HTMLElement} | [string, ...any]\n// \u4f9b DOMSerializer \u4f7f\u7528\ntype NodeToDOM = (node: Node) => DOMOutputSpe\ntype MarkToDOM = (mark: Mark, inline: boolean) => DOMOutputSpec\n\ninterface PluginSpec{\n  key\u2060?: PluginKey\n  props\u2060?: EditorProps\n  state\u2060?: StateField<any>\n\n    view\u2060?: (view: EditorView) => PluginView\n    filterTransaction\u2060?: (tr: Transaction, state: EditorState)=> boolean\n    appendTransaction\u2060?: (\n      transactions: /*readonly*/ Transaction[],\n      oldState: EditorState,\n      newState: EditorState\n    )=> Transaction | null | undefined\n}\n")))}d.isMDXComponent=!0}}]);