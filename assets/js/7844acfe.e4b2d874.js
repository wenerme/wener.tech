"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71782],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={title:"Tiptap Extension"},m="Tiptap Extension",k={unversionedId:"web/editor/tiptap-extension",id:"web/editor/tiptap-extension",title:"Tiptap Extension",description:"- \u7c7b\u578b",source:"@site/../notes/web/editor/tiptap-extension.md",sourceDirName:"web/editor",slug:"/web/editor/tiptap-extension",permalink:"/notes/web/editor/tiptap-extension",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/tiptap-extension.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666756281,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{title:"Tiptap Extension"},sidebar:"docs",previous:{title:"TinaCMS",permalink:"/notes/web/editor/tinacms"},next:{title:"Tiptap Inside",permalink:"/notes/web/editor/tiptap-inside"}},N={},f=[{value:"Editor",id:"editor",level:2},{value:"Node vs Mark",id:"node-vs-mark",level:2}],b={toc:f};function g(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",d({},{id:"tiptap-extension"}),"Tiptap Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Node.create - \u589e\u52a0 Node"),(0,r.kt)("li",{parentName:"ul"},"Mark.create - \u589e\u52a0 Mark"),(0,r.kt)("li",{parentName:"ul"},"Extension.create - \u589e\u52a0 \u6269\u5c55\u73b0\u6709 Node\u3001Mark"))),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55 Schema - NodeSpec, MarkSpec",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"extendMarkSchema"),(0,r.kt)("li",{parentName:"ul"},"extendNodeSchema")))),(0,r.kt)("h2",d({},{id:"editor"}),"Editor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node + Mark \u7ec4\u6210 ProseMirror \u7684 Schema"),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"chain - \u4e00\u6b21\u6027\u6267\u884c\u591a\u4e2a commands",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e00\u6b21 tx \u91cc"))),(0,r.kt)("li",{parentName:"ul"},"can - \u5224\u65ad command \u80fd\u5426\u81ea\u4fe1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f20\u9012 dispatch"))),(0,r.kt)("li",{parentName:"ul"},"getHTML, getJSON, getText"),(0,r.kt)("li",{parentName:"ul"},"getAttributes"),(0,r.kt)("li",{parentName:"ul"},"isActive - \u68c0\u67e5\u9009\u4e2d\u5185\u5bb9\u662f\u5426\u5339\u914d\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"registerPlugin, unregisterPlugin"),(0,r.kt)("li",{parentName:"ul"},"setOptions, setEditable"),(0,r.kt)("li",{parentName:"ul"},"destroy"))),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"commands - \u6240\u6709\u547d\u4ee4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"focus - focus Editor"))),(0,r.kt)("li",{parentName:"ul"},"storage - \u63d2\u4ef6\u989d\u5916\u4fe1\u606f\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"state - \u72b6\u6001\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},"isEditable"),(0,r.kt)("li",{parentName:"ul"},"isEmpty"),(0,r.kt)("li",{parentName:"ul"},"isDestroyed"))),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"beforeCreate, creaate"),(0,r.kt)("li",{parentName:"ul"},"update"),(0,r.kt)("li",{parentName:"ul"},"selectionUpdate"),(0,r.kt)("li",{parentName:"ul"},"transaction"),(0,r.kt)("li",{parentName:"ul"},"focus, blur"),(0,r.kt)("li",{parentName:"ul"},"destroy")))),(0,r.kt)("h2",d({},{id:"node-vs-mark"}),"Node vs Mark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"block \u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"tag \u6807\u7b7e"),(0,r.kt)("li",{parentName:"ul"},"atom \u4e3a\u4e0d\u53ef\u76f4\u63a5\u7f16\u8f91 Node - \u4f8b\u5982 Mention"))),(0,r.kt)("li",{parentName:"ul"},"Mark",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node \u7684\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"tag \u5c5e\u6027\u3001\u6837\u5f0f")))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"const MyNode = Node.create({\n  name: 'my-node',\n  content: 'block+', // \u5141\u8bb8\u5185\u5bb9 - +,*,?,|,()\n  group: 'block', // node \u5206\u7ec4\n  inline: true,\n  atom: false,\n  selectable: true,\n  draggable: true,\n  code: false,\n  whitespace: 'pre', // \u63a7\u5236\u7a7a\u767d \u5904\u7406 \u903b\u8f91\n  defining: false, // \u7c98\u8d34\u7684\u65f6\u5019\u662f\u5426\u4fdd\u7559\n  allowGapCursor: false,\n  isolating: false, // \u9694\u79bb\u7f16\u8f91\u8303\u56f4 - \u4f8b\u5982 TableCell\n  tableRole: 'cell', //  Table \u6269\u5c55\u5b9a\u4e49\u7684\u89d2\u8272 - table, row, cell, header_cell\n  marks: 'bold', // \u5141\u8bb8 mark - _ \u4efb\u610f, '' \u4e0d\u5141\u8bb8\n});\nconst MyMark = Node.create({\n  inclusive: false, // \u5149\u6807\u5728\u7ed3\u5c3e\u7684\u65f6\u5019\u662f\u5426\u5305\u542b\u5728\u5f53\u524d mark - \u4f8b\u5982 Link \u4e3a false\n  excludes: 'bold', // \u6392\u4ed6 mark\n  group: 'basic',\n  code: false, // \u5185\u5bb9\u662f\u5426\u4e3a\u4ee3\u7801\n  spanning: false, // \u662f\u5426\u53ef\u4ee5\u8de8\u591a\u4e2a\u8282\u70b9\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// typescript \u7c7b\u578b\u4fe1\u606f\n\ninterface CustomExtensionOptions {}\ninterface CustomExtensionStorage {}\n\ndeclare module '@tiptap/core' {\n  interface Commands<ReturnType> {\n    customExtension: {\n      /**\n       * Comments will be added to the autocomplete.\n       */\n      yourCommand: (someProp: any) => ReturnType;\n    };\n  }\n}\n\n// Node.create, Mark.create\nconst CustomExtension = Extension.create<CustomExtensionOptions, CustomExtensionStorage>({\n  name: 'customExtension',\n\n  content: 'paragraph*',\n  draggable: true,\n\n  addAttributes() {\n    // this.{name,editor,type,options,parent,}\n    return {\n      ...this.parent?.(), // \u6269\u5c55\u65f6 \u7ee7\u627f\u4e0a\u7ea7\n      color: {\n        default: 'pink',\n        rendered: true, // \u662f\u5426\u6e32\u67d3\u5c5e\u6027\n        parseHTML: (element) => element.getAttribute('data-color'),\n        renderHTML: (attributes) => {\n          return {\n            'data-color': attributes.color,\n            style: `color: ${attributes.color}`,\n          };\n        },\n      },\n    };\n  },\n\n  addGlobalAttributes() {\n    // \u5168\u5c40\u5c5e\u6027 - \u589e\u5f3a\u5176\u4ed6\u6269\u5c55\n    return [\n      {\n        // \u6269\u5c55\u76ee\u6807\u7c7b\u578b\u5c5e\u6027\n        types: ['heading', 'paragraph'],\n        // \u6dfb\u52a0\u7684\u989d\u5916\u5c5e\u6027\n        attributes: {\n          textAlign: {\n            default: 'left', // \u9ed8\u8ba4\u503c\n            rendered: true, // \u662f\u5426\u8c03\u7528\u6e32\u67d3\n            keepOnSplit: true, // \u5207\u5206\u5143\u7d20\u65f6\u662f\u5426\u4fdd\u7559\n            renderHTML: (attributes) => ({\n              style: `text-align: ${attributes.textAlign}`,\n            }),\n            parseHTML: (element) => element.style.textAlign || 'left',\n          },\n        },\n      },\n    ];\n  },\n\n  // \u5b9a\u4e49\u5982\u4f55\u6e32\u67d3 HTML\n  renderHTML({ HTMLAttributes }) {\n    // tag,\u5c5e\u6027,children\n    // tag,\u5c5e\u6027,0 - 0 \u8868\u793a content \u63d2\u5165\u4f4d\u7f6e\n    return ['pre', ['code', HTMLAttributes, 0]];\n    // import { mergeAttributes } from '@tiptap/core'\n    return ['a', mergeAttributes(HTMLAttributes, { rel: this.options.rel }), 0];\n  },\n  parseHTML() {\n    return [\n      {\n        tag: 'strong',\n      },\n      {\n        tag: 'b',\n        // node.hasAttribute('style')\n        // node.getAttribute('data-color')\n        getAttrs: (node) => node.style.fontWeight !== 'normal' && null,\n      },\n    ];\n  },\n\n  addCommands() {\n    return {\n      paragraph:\n        () =>\n        ({ commands }) => {\n          // \u8bbf\u95ee\u5176\u4ed6 commands\n          return commands.setNode('paragraph');\n        },\n    };\n  },\n\n  addKeyboardShortcuts() {\n    return {\n      'Mod-l': () => this.editor.commands.toggleBulletList(),\n    };\n  },\n\n  addInputRules() {\n    // \u5f53\u8f93\u5165\u6307\u5b9a\u5185\u5bb9\u65f6\u5339\u914d\u4e3a type - \u4f8b\u5982 markdown \u8bed\u6cd5 ~~ -> Strike\n    // \u89c4\u5219\u4e00\u822c\u4ee5 $ \u7ed3\u5c3e\n    // import { markInputRule } from '@tiptap/core'\n    // const inputRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))$/\n    return [\n      markInputRule({\n        find: inputRegex,\n        type: this.type,\n      }),\n    ];\n  },\n  addPasteRules() {\n    // \u89c4\u5219\u4e00\u822c\u4e0d\u4f1a\u4ee5 $ \u7ed3\u5c3e\n    // import { markPasteRule } from '@tiptap/core'\n    // const pasteRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))/g\n    return [\n      markPasteRule({\n        find: pasteRegex,\n        type: this.type,\n      }),\n    ];\n  },\n\n  // \u5408\u5e76\u5230 options\n  addOptions() {\n    return {};\n  },\n\n  // \u5408\u5e76\u5230 storage\n  addStorage() {\n    // \u5b58\u50a8\u5f15\u7528 editor.extensionStorage[extension.name] = extension.storage\n    // \u5916\u90e8\u8bbf\u95ee editor.storage.customExtension.counter\n    return {\n      counter: 100,\n    };\n  },\n\n  // \u4e8b\u4ef6\n  onUpdate() {\n    this.storage.counter += 1;\n  },\n\n  /* \u9ad8\u7ea7\u6269\u5c55 */\n\n  // \u6269\u5c55 ProseMirror\n  addProseMirrorPlugins() {\n    return [\n      history(),\n      // \u2026\n    ];\n  },\n\n  addNodeView() {\n    // \u4e3a\u7f16\u8f91\u5143\u7d20\u589e\u52a0\u4ea4\u4e92\u529f\u80fd\n    // https://tiptap.dev/guide/node-views\n    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {\n      const { view } = editor;\n      // view.dispatch\n\n      const dom = document.createElement('div');\n      dom.innerHTML = 'Node View';\n\n      const button = document.createElement('button');\n      button.innerHTML = `Counter ${node.attrs.count}`;\n\n      button.addEventListener('click', () => {\n        if (typeof getPos === 'function') {\n          view.dispatch(\n            // \u66f4\u65b0 node\n            view.state.tr.setNodeMarkup(getPos(), undefined, {\n              // node.attrs.count \u8bbf\u95ee\u5b9a\u4e49\u7684 \u5c5e\u6027\n              count: node.attrs.count + 1,\n            }),\n          );\n\n          editor.commands.focus();\n        }\n      });\n\n      const content = document.createElement('div');\n\n      dom.append(button, content);\n\n      return {\n        dom: container,\n        // \u53ef\u7f16\u8f91\u5185\u5bb9 - \u7531 tiptap \u6e32\u67d3\n        contentDOM: content,\n      };\n      // React \u7ec4\u4ef6\n      // import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'\n      // \u7ec4\u4ef6\u5185\u8fd4\u56de NodeViewWrapper\n      // props.node.attrs.count \u8bbf\u95ee node \u5c5e\u6027\n      // props.updateAttributes \u4fee\u6539 \u5c5e\u6027\n      // \u5185\u5bb9\u4f7f\u7528 NodeViewContent\n      return ReactNodeViewRenderer(Component);\n    };\n  },\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"options, storage - Extension \u672c\u8eab\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"schema - Node, Mark"),(0,r.kt)("li",{parentName:"ul"},"commands"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6 - beforeCreate, create, update, selectionUpdate, transaction, focus, blur, destroy"),(0,r.kt)("li",{parentName:"ul"},"ProseMirror \u63d2\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u987a\u5e8f - inputRules, pasteRules, keymap, \u5176\u4ed6"),(0,r.kt)("li",{parentName:"ul"},"inputRulesPlugin(InputRules) - \u5408\u5e76\u4e3a\u4e00\u4e2a\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"PasteRules - \u591a\u4e2a\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"addKeyboardShortcuts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prosemirror-keymap"),(0,r.kt)("li",{parentName:"ul"},"Mod \u6307\u4ee3 Cmd \u6216 Control"),(0,r.kt)("li",{parentName:"ul"},"Shift, Alt, Control, Cmd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://keycode.info/"}),"https://keycode.info/")))),(0,r.kt)("li",{parentName:"ul"},"ProseMirrorPlugins - \u539f\u751f\u63d2\u4ef6"))))),(0,r.kt)("li",{parentName:"ul"},"extension \u7684\u6838\u5fc3\u4e0a\u4e0b\u6587",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name, options, storage, editor, type"),(0,r.kt)("li",{parentName:"ul"},"type=getSchemaTypeByName(extension.name, this.schema)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e Node \u548c Mark")))))))}g.isMDXComponent=!0}}]);