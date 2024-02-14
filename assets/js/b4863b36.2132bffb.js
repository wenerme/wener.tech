/*! For license information please see b4863b36.2132bffb.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88166],{28764:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=t(2488),i=t(62780);const s={title:"Tiptap Extension"},o="Tiptap Extension",l={id:"web/editor/tiptap/tiptap-extension",title:"Tiptap Extension",description:"- \u7c7b\u578b",source:"@site/../notes/web/editor/tiptap/tiptap-extension.md",sourceDirName:"web/editor/tiptap",slug:"/web/editor/tiptap/extension",permalink:"/notes/web/editor/tiptap/extension",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/tiptap/tiptap-extension.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704307832,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Tiptap Extension"},sidebar:"docs",previous:{title:"tiptap",permalink:"/notes/web/editor/tiptap/"},next:{title:"Tiptap Inside",permalink:"/notes/web/editor/tiptap/inside"}},d={},a=[{value:"Editor",id:"editor",level:2},{value:"Node vs Mark",id:"node-vs-mark",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"tiptap-extension",children:"Tiptap Extension"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u7c7b\u578b\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Node.create - \u589e\u52a0 Node"}),"\n",(0,r.jsx)(e.li,{children:"Mark.create - \u589e\u52a0 Mark"}),"\n",(0,r.jsx)(e.li,{children:"Extension.create - \u589e\u52a0 \u6269\u5c55\u73b0\u6709 Node\u3001Mark"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6269\u5c55 Schema - NodeSpec, MarkSpec\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"extendMarkSchema"}),"\n",(0,r.jsx)(e.li,{children:"extendNodeSchema"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Node + Mark \u7ec4\u6210 ProseMirror \u7684 Schema"}),"\n",(0,r.jsxs)(e.li,{children:["\u65b9\u6cd5\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["chain - \u4e00\u6b21\u6027\u6267\u884c\u591a\u4e2a commands\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728\u4e00\u6b21 tx \u91cc"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["can - \u5224\u65ad command \u80fd\u5426\u81ea\u4fe1\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0d\u4f1a\u4f20\u9012 dispatch"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"getHTML, getJSON, getText"}),"\n",(0,r.jsx)(e.li,{children:"getAttributes"}),"\n",(0,r.jsx)(e.li,{children:"isActive - \u68c0\u67e5\u9009\u4e2d\u5185\u5bb9\u662f\u5426\u5339\u914d\u6761\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"registerPlugin, unregisterPlugin"}),"\n",(0,r.jsx)(e.li,{children:"setOptions, setEditable"}),"\n",(0,r.jsx)(e.li,{children:"destroy"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5c5e\u6027\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["commands - \u6240\u6709\u547d\u4ee4\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"focus - focus Editor"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"storage - \u63d2\u4ef6\u989d\u5916\u4fe1\u606f\u5b58\u50a8"}),"\n",(0,r.jsx)(e.li,{children:"state - \u72b6\u6001\u5b58\u50a8"}),"\n",(0,r.jsx)(e.li,{children:"isEditable"}),"\n",(0,r.jsx)(e.li,{children:"isEmpty"}),"\n",(0,r.jsx)(e.li,{children:"isDestroyed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4e8b\u4ef6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"beforeCreate, creaate"}),"\n",(0,r.jsx)(e.li,{children:"update"}),"\n",(0,r.jsx)(e.li,{children:"selectionUpdate"}),"\n",(0,r.jsx)(e.li,{children:"transaction"}),"\n",(0,r.jsx)(e.li,{children:"focus, blur"}),"\n",(0,r.jsx)(e.li,{children:"destroy"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"node-vs-mark",children:"Node vs Mark"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Node\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"block \u5143\u7d20"}),"\n",(0,r.jsx)(e.li,{children:"tag \u6807\u7b7e"}),"\n",(0,r.jsx)(e.li,{children:"atom \u4e3a\u4e0d\u53ef\u76f4\u63a5\u7f16\u8f91 Node - \u4f8b\u5982 Mention"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Mark\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"node \u7684\u5c5e\u6027"}),"\n",(0,r.jsx)(e.li,{children:"tag \u5c5e\u6027\u3001\u6837\u5f0f"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const MyNode = Node.create({\n  name: 'my-node',\n  content: 'block+', // \u5141\u8bb8\u5185\u5bb9 - +,*,?,|,()\n  group: 'block', // node \u5206\u7ec4\n  inline: true,\n  atom: false,\n  selectable: true,\n  draggable: true,\n  code: false,\n  whitespace: 'pre', // \u63a7\u5236\u7a7a\u767d \u5904\u7406 \u903b\u8f91\n  defining: false, // \u7c98\u8d34\u7684\u65f6\u5019\u662f\u5426\u4fdd\u7559\n  allowGapCursor: false,\n  isolating: false, // \u9694\u79bb\u7f16\u8f91\u8303\u56f4 - \u4f8b\u5982 TableCell\n  tableRole: 'cell', //  Table \u6269\u5c55\u5b9a\u4e49\u7684\u89d2\u8272 - table, row, cell, header_cell\n  marks: 'bold', // \u5141\u8bb8 mark - _ \u4efb\u610f, '' \u4e0d\u5141\u8bb8\n});\nconst MyMark = Node.create({\n  inclusive: false, // \u5149\u6807\u5728\u7ed3\u5c3e\u7684\u65f6\u5019\u662f\u5426\u5305\u542b\u5728\u5f53\u524d mark - \u4f8b\u5982 Link \u4e3a false\n  excludes: 'bold', // \u6392\u4ed6 mark\n  group: 'basic',\n  code: false, // \u5185\u5bb9\u662f\u5426\u4e3a\u4ee3\u7801\n  spanning: false, // \u662f\u5426\u53ef\u4ee5\u8de8\u591a\u4e2a\u8282\u70b9\n});\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// typescript \u7c7b\u578b\u4fe1\u606f\n\ninterface CustomExtensionOptions {}\ninterface CustomExtensionStorage {}\n\ndeclare module '@tiptap/core' {\n  interface Commands<ReturnType> {\n    customExtension: {\n      /**\n       * Comments will be added to the autocomplete.\n       */\n      yourCommand: (someProp: any) => ReturnType;\n    };\n  }\n}\n\n// Node.create, Mark.create\nconst CustomExtension = Extension.create<CustomExtensionOptions, CustomExtensionStorage>({\n  name: 'customExtension',\n\n  content: 'paragraph*',\n  draggable: true,\n\n  addAttributes() {\n    // this.{name,editor,type,options,parent,}\n    return {\n      ...this.parent?.(), // \u6269\u5c55\u65f6 \u7ee7\u627f\u4e0a\u7ea7\n      color: {\n        default: 'pink',\n        rendered: true, // \u662f\u5426\u6e32\u67d3\u5c5e\u6027\n        parseHTML: (element) => element.getAttribute('data-color'),\n        renderHTML: (attributes) => {\n          return {\n            'data-color': attributes.color,\n            style: `color: ${attributes.color}`,\n          };\n        },\n      },\n    };\n  },\n\n  addGlobalAttributes() {\n    // \u5168\u5c40\u5c5e\u6027 - \u589e\u5f3a\u5176\u4ed6\u6269\u5c55\n    return [\n      {\n        // \u6269\u5c55\u76ee\u6807\u7c7b\u578b\u5c5e\u6027\n        types: ['heading', 'paragraph'],\n        // \u6dfb\u52a0\u7684\u989d\u5916\u5c5e\u6027\n        attributes: {\n          textAlign: {\n            default: 'left', // \u9ed8\u8ba4\u503c\n            rendered: true, // \u662f\u5426\u8c03\u7528\u6e32\u67d3\n            keepOnSplit: true, // \u5207\u5206\u5143\u7d20\u65f6\u662f\u5426\u4fdd\u7559\n            renderHTML: (attributes) => ({\n              style: `text-align: ${attributes.textAlign}`,\n            }),\n            parseHTML: (element) => element.style.textAlign || 'left',\n          },\n        },\n      },\n    ];\n  },\n\n  // \u5b9a\u4e49\u5982\u4f55\u6e32\u67d3 HTML\n  renderHTML({ HTMLAttributes }) {\n    // tag,\u5c5e\u6027,children\n    // tag,\u5c5e\u6027,0 - 0 \u8868\u793a content \u63d2\u5165\u4f4d\u7f6e\n    return ['pre', ['code', HTMLAttributes, 0]];\n    // import { mergeAttributes } from '@tiptap/core'\n    return ['a', mergeAttributes(HTMLAttributes, { rel: this.options.rel }), 0];\n  },\n  parseHTML() {\n    return [\n      {\n        tag: 'strong',\n      },\n      {\n        tag: 'b',\n        // node.hasAttribute('style')\n        // node.getAttribute('data-color')\n        getAttrs: (node) => node.style.fontWeight !== 'normal' && null,\n      },\n    ];\n  },\n\n  addCommands() {\n    return {\n      paragraph:\n        () =>\n        ({ commands }) => {\n          // \u8bbf\u95ee\u5176\u4ed6 commands\n          return commands.setNode('paragraph');\n        },\n    };\n  },\n\n  addKeyboardShortcuts() {\n    return {\n      'Mod-l': () => this.editor.commands.toggleBulletList(),\n    };\n  },\n\n  addInputRules() {\n    // \u5f53\u8f93\u5165\u6307\u5b9a\u5185\u5bb9\u65f6\u5339\u914d\u4e3a type - \u4f8b\u5982 markdown \u8bed\u6cd5 ~~ -> Strike\n    // \u89c4\u5219\u4e00\u822c\u4ee5 $ \u7ed3\u5c3e\n    // import { markInputRule } from '@tiptap/core'\n    // const inputRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))$/\n    return [\n      markInputRule({\n        find: inputRegex,\n        type: this.type,\n      }),\n    ];\n  },\n  addPasteRules() {\n    // \u89c4\u5219\u4e00\u822c\u4e0d\u4f1a\u4ee5 $ \u7ed3\u5c3e\n    // import { markPasteRule } from '@tiptap/core'\n    // const pasteRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))/g\n    return [\n      markPasteRule({\n        find: pasteRegex,\n        type: this.type,\n      }),\n    ];\n  },\n\n  // \u5408\u5e76\u5230 options\n  addOptions() {\n    return {};\n  },\n\n  // \u5408\u5e76\u5230 storage\n  addStorage() {\n    // \u5b58\u50a8\u5f15\u7528 editor.extensionStorage[extension.name] = extension.storage\n    // \u5916\u90e8\u8bbf\u95ee editor.storage.customExtension.counter\n    return {\n      counter: 100,\n    };\n  },\n\n  // \u4e8b\u4ef6\n  onUpdate() {\n    this.storage.counter += 1;\n  },\n\n  /* \u9ad8\u7ea7\u6269\u5c55 */\n\n  // \u6269\u5c55 ProseMirror\n  addProseMirrorPlugins() {\n    return [\n      history(),\n      // \u2026\n    ];\n  },\n\n  addNodeView() {\n    // \u4e3a\u7f16\u8f91\u5143\u7d20\u589e\u52a0\u4ea4\u4e92\u529f\u80fd\n    // https://tiptap.dev/guide/node-views\n    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {\n      const { view } = editor;\n      // view.dispatch\n\n      const dom = document.createElement('div');\n      dom.innerHTML = 'Node View';\n\n      const button = document.createElement('button');\n      button.innerHTML = `Counter ${node.attrs.count}`;\n\n      button.addEventListener('click', () => {\n        if (typeof getPos === 'function') {\n          view.dispatch(\n            // \u66f4\u65b0 node\n            view.state.tr.setNodeMarkup(getPos(), undefined, {\n              // node.attrs.count \u8bbf\u95ee\u5b9a\u4e49\u7684 \u5c5e\u6027\n              count: node.attrs.count + 1,\n            }),\n          );\n\n          editor.commands.focus();\n        }\n      });\n\n      const content = document.createElement('div');\n\n      dom.append(button, content);\n\n      return {\n        dom: container,\n        // \u53ef\u7f16\u8f91\u5185\u5bb9 - \u7531 tiptap \u6e32\u67d3\n        contentDOM: content,\n      };\n      // React \u7ec4\u4ef6\n      // import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'\n      // \u7ec4\u4ef6\u5185\u8fd4\u56de NodeViewWrapper\n      // props.node.attrs.count \u8bbf\u95ee node \u5c5e\u6027\n      // props.updateAttributes \u4fee\u6539 \u5c5e\u6027\n      // \u5185\u5bb9\u4f7f\u7528 NodeViewContent\n      return ReactNodeViewRenderer(Component);\n    };\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6269\u5c55\u70b9\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"options, storage - Extension \u672c\u8eab\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"schema - Node, Mark"}),"\n",(0,r.jsx)(e.li,{children:"commands"}),"\n",(0,r.jsx)(e.li,{children:"\u4e8b\u4ef6 - beforeCreate, create, update, selectionUpdate, transaction, focus, blur, destroy"}),"\n",(0,r.jsxs)(e.li,{children:["ProseMirror \u63d2\u4ef6\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u987a\u5e8f - inputRules, pasteRules, keymap, \u5176\u4ed6"}),"\n",(0,r.jsx)(e.li,{children:"inputRulesPlugin(InputRules) - \u5408\u5e76\u4e3a\u4e00\u4e2a\u63d2\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"PasteRules - \u591a\u4e2a\u63d2\u4ef6"}),"\n",(0,r.jsxs)(e.li,{children:["addKeyboardShortcuts\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"prosemirror-keymap"}),"\n",(0,r.jsx)(e.li,{children:"Mod \u6307\u4ee3 Cmd \u6216 Control"}),"\n",(0,r.jsx)(e.li,{children:"Shift, Alt, Control, Cmd"}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://keycode.info/",children:"https://keycode.info/"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"ProseMirrorPlugins - \u539f\u751f\u63d2\u4ef6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["extension \u7684\u6838\u5fc3\u4e0a\u4e0b\u6587\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"name, options, storage, editor, type"}),"\n",(0,r.jsxs)(e.li,{children:["type=getSchemaTypeByName(extension.name, this.schema)\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7528\u4e8e Node \u548c Mark"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},38088:(n,e,t)=>{var r=t(96651),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,t){var r,s={},a=null,c=null;for(r in void 0!==t&&(a=""+t),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(c=e.ref),e)o.call(e,r)&&!d.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:i,type:n,key:a,ref:c,props:s,_owner:l.current}}e.Fragment=s,e.jsx=a,e.jsxs=a},2488:(n,e,t)=>{n.exports=t(38088)},62780:(n,e,t)=>{t.d(e,{I:()=>l,M:()=>o});var r=t(96651);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);