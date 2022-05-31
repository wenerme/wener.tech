"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55245],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42832:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Tiptap Extension"},u=void 0,s={unversionedId:"web/editor/tiptap-extension",id:"web/editor/tiptap-extension",title:"Tiptap Extension",description:"- \u7c7b\u578b",source:"@site/notes/web/editor/tiptap-extension.md",sourceDirName:"web/editor",slug:"/web/editor/tiptap-extension",permalink:"/notes/web/editor/tiptap-extension",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/editor/tiptap-extension.md",tags:[],version:"current",frontMatter:{title:"Tiptap Extension"},sidebar:"docs",previous:{title:"TinaCMS",permalink:"/notes/web/editor/tinacms"},next:{title:"tiptap",permalink:"/notes/web/editor/tiptap"}},p={},d=[{value:"Editor",id:"editor",level:2},{value:"Node vs Mark",id:"node-vs-mark",level:2},{value:"Editor",id:"editor-1",level:2},{value:"Node vs Mark",id:"node-vs-mark-1",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node.create - \u589e\u52a0 Node"),(0,o.kt)("li",{parentName:"ul"},"Mark.create - \u589e\u52a0 Mark"),(0,o.kt)("li",{parentName:"ul"},"Extension.create - \u589e\u52a0 \u6269\u5c55\u73b0\u6709 Node\u3001Mark")))),(0,o.kt)("h2",{id:"editor"},"Editor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node + Mark \u7ec4\u6210 ProseMirror \u7684 Schema"),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"chain - \u4e00\u6b21\u6027\u6267\u884c\u591a\u4e2a commands"),(0,o.kt)("li",{parentName:"ul"},"getHTML, getJSON, getText"),(0,o.kt)("li",{parentName:"ul"},"getAttributes"),(0,o.kt)("li",{parentName:"ul"},"isActive - \u68c0\u67e5\u9009\u4e2d\u5185\u5bb9\u662f\u5426\u5339\u914d\u6761\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"registerPlugin, unregisterPlugin"),(0,o.kt)("li",{parentName:"ul"},"setOptions, setEditable, isEditable, isEmpty"))),(0,o.kt)("li",{parentName:"ul"},"commands",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"focus - focus Editor"))),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"beforeCreate, creaate"),(0,o.kt)("li",{parentName:"ul"},"update"),(0,o.kt)("li",{parentName:"ul"},"selectionUpdate"),(0,o.kt)("li",{parentName:"ul"},"transaction"),(0,o.kt)("li",{parentName:"ul"},"focus, blur"),(0,o.kt)("li",{parentName:"ul"},"destroy")))),(0,o.kt)("h2",{id:"node-vs-mark"},"Node vs Mark"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"block \u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},"tag \u6807\u7b7e"),(0,o.kt)("li",{parentName:"ul"},"atom \u4e3a\u4e0d\u53ef\u76f4\u63a5\u7f16\u8f91 Node - \u4f8b\u5982 Mention"))),(0,o.kt)("li",{parentName:"ul"},"Mark",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"node \u7684\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ul"},"tag \u5c5e\u6027\u3001\u6837\u5f0f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MyNode = Node.create({\n  name: 'my-node',\n  content: 'block+', // \u5141\u8bb8\u5185\u5bb9 - +,*,?,|,()\n  group: 'block', // node \u5206\u7ec4\n  inline: true,\n  atom: false,\n  selectable: true,\n  draggable: true,\n  code: false,\n  whitespace: 'pre', // \u63a7\u5236\u7a7a\u767d \u5904\u7406 \u903b\u8f91\n  defining: false, // \u7c98\u8d34\u7684\u65f6\u5019\u662f\u5426\u4fdd\u7559\n  allowGapCursor: false,\n  isolating: false, // \u9694\u79bb\u7f16\u8f91\u8303\u56f4 - \u4f8b\u5982 TableCell\n  tableRole: 'cell', //  Table \u6269\u5c55\u5b9a\u4e49\u7684\u89d2\u8272 - table, row, cell, header_cell\n  marks: 'bold', // \u5141\u8bb8 mark - _ \u4efb\u610f, '' \u4e0d\u5141\u8bb8\n});\nconst MyMark = Node.create({\n  inclusive: false, // \u5149\u6807\u5728\u7ed3\u5c3e\u7684\u65f6\u5019\u662f\u5426\u5305\u542b\u5728\u5f53\u524d mark - \u4f8b\u5982 Link \u4e3a false\n  excludes: 'bold', // \u6392\u4ed6 mark\n  group: 'basic',\n  code: false, // \u5185\u5bb9\u662f\u5426\u4e3a\u4ee3\u7801\n  spanning: false, // \u662f\u5426\u53ef\u4ee5\u8de8\u591a\u4e2a\u8282\u70b9\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// typescript \u7c7b\u578b\u4fe1\u606f\n\ninterface CustomExtensionOptions {}\ninterface CustomExtensionStorage {}\n\ndeclare module '@tiptap/core' {\n  interface Commands<ReturnType> {\n    customExtension: {\n      /**\n       * Comments will be added to the autocomplete.\n       */\n      yourCommand: (someProp: any) => ReturnType;\n    };\n  }\n}\n\n// Node.create, Mark.create\nconst CustomExtension = Extension.create<CustomExtensionOptions, CustomExtensionStorage>({\n  name: 'customExtension',\n\n  content: 'paragraph*',\n  draggable: true,\n\n  addAttributes() {\n    // this.{name,editor,type,options,parent,}\n    return {\n      ...this.parent?.(), // \u6269\u5c55\u65f6 \u7ee7\u627f\u4e0a\u7ea7\n      color: {\n        default: 'pink',\n        rendered: true, // \u662f\u5426\u6e32\u67d3\u5c5e\u6027\n        parseHTML: (element) => element.getAttribute('data-color'),\n        renderHTML: (attributes) => {\n          return {\n            'data-color': attributes.color,\n            style: `color: ${attributes.color}`,\n          };\n        },\n      },\n    };\n  },\n\n  addGlobalAttributes() {\n    // \u5168\u5c40\u5c5e\u6027 - \u589e\u5f3a\u5176\u4ed6\u6269\u5c55\n    return [\n      {\n        // \u6269\u5c55\u76ee\u6807\u7c7b\u578b\u5c5e\u6027\n        types: ['heading', 'paragraph'],\n        // \u6dfb\u52a0\u7684\u989d\u5916\u5c5e\u6027\n        attributes: {\n          textAlign: {\n            default: 'left', // \u9ed8\u8ba4\u503c\n            rendered: true, // \u662f\u5426\u8c03\u7528\u6e32\u67d3\n            keepOnSplit: true, // \u5207\u5206\u5143\u7d20\u65f6\u662f\u5426\u4fdd\u7559\n            renderHTML: (attributes) => ({\n              style: `text-align: ${attributes.textAlign}`,\n            }),\n            parseHTML: (element) => element.style.textAlign || 'left',\n          },\n        },\n      },\n    ];\n  },\n\n  // \u5b9a\u4e49\u5982\u4f55\u6e32\u67d3 HTML\n  renderHTML({ HTMLAttributes }) {\n    // tag,\u5c5e\u6027,children\n    // tag,\u5c5e\u6027,0 - 0 \u8868\u793a content \u63d2\u5165\u4f4d\u7f6e\n    return ['pre', ['code', HTMLAttributes, 0]];\n    // import { mergeAttributes } from '@tiptap/core'\n    return ['a', mergeAttributes(HTMLAttributes, { rel: this.options.rel }), 0];\n  },\n  parseHTML() {\n    return [\n      {\n        tag: 'strong',\n      },\n      {\n        tag: 'b',\n        // node.hasAttribute('style')\n        // node.getAttribute('data-color')\n        getAttrs: (node) => node.style.fontWeight !== 'normal' && null,\n      },\n    ];\n  },\n\n  addCommands() {\n    return {\n      paragraph:\n        () =>\n        ({ commands }) => {\n          // \u8bbf\u95ee\u5176\u4ed6 commands\n          return commands.setNode('paragraph');\n        },\n    };\n  },\n\n  addKeyboardShortcuts() {\n    return {\n      'Mod-l': () => this.editor.commands.toggleBulletList(),\n    };\n  },\n\n  addInputRules() {\n    // \u5f53\u8f93\u5165\u6307\u5b9a\u5185\u5bb9\u65f6\u5339\u914d\u4e3a type - \u4f8b\u5982 markdown \u8bed\u6cd5 ~~ -> Strike\n    // \u89c4\u5219\u4e00\u822c\u4ee5 $ \u7ed3\u5c3e\n    // import { markInputRule } from '@tiptap/core'\n    // const inputRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))$/\n    return [\n      markInputRule({\n        find: inputRegex,\n        type: this.type,\n      }),\n    ];\n  },\n  addPasteRules() {\n    // \u89c4\u5219\u4e00\u822c\u4e0d\u4f1a\u4ee5 $ \u7ed3\u5c3e\n    // import { markPasteRule } from '@tiptap/core'\n    // const pasteRegex = /(?:^|\\s)((?:~)((?:[^~]+))(?:~))/g\n    return [\n      markPasteRule({\n        find: pasteRegex,\n        type: this.type,\n      }),\n    ];\n  },\n\n  addStorage() {\n    // \u5916\u90e8\u8bbf\u95ee editor.storage.customExtension.counter\n    return {\n      counter: 100,\n    };\n  },\n\n  // \u4e8b\u4ef6\n  onUpdate() {\n    this.storage.counter += 1;\n  },\n\n  /* \u9ad8\u7ea7\u6269\u5c55 */\n\n  // \u6269\u5c55 ProseMirror\n  addProseMirrorPlugins() {\n    return [\n      history(),\n      // \u2026\n    ];\n  },\n\n  addNodeView() {\n    // \u4e3a\u7f16\u8f91\u5143\u7d20\u589e\u52a0\u4ea4\u4e92\u529f\u80fd\n    // https://tiptap.dev/guide/node-views\n    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {\n      const { view } = editor;\n      // view.dispatch\n\n      const dom = document.createElement('div');\n      dom.innerHTML = 'Node View';\n\n      const button = document.createElement('button');\n      button.innerHTML = `Counter ${node.attrs.count}`;\n\n      button.addEventListener('click', () => {\n        if (typeof getPos === 'function') {\n          view.dispatch(\n            // \u66f4\u65b0 node\n            view.state.tr.setNodeMarkup(getPos(), undefined, {\n              // node.attrs.count \u8bbf\u95ee\u5b9a\u4e49\u7684 \u5c5e\u6027\n              count: node.attrs.count + 1,\n            }),\n          );\n\n          editor.commands.focus();\n        }\n      });\n\n      const content = document.createElement('div');\n\n      dom.append(button, content);\n\n      return {\n        dom: container,\n        // \u53ef\u7f16\u8f91\u5185\u5bb9 - \u7531 tiptap \u6e32\u67d3\n        contentDOM: content,\n      };\n      // React \u7ec4\u4ef6\n      // import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react'\n      // \u7ec4\u4ef6\u5185\u8fd4\u56de NodeViewWrapper\n      // props.node.attrs.count \u8bbf\u95ee node \u5c5e\u6027\n      // props.updateAttributes \u4fee\u6539 \u5c5e\u6027\n      // \u5185\u5bb9\u4f7f\u7528 NodeViewContent\n      return ReactNodeViewRenderer(Component);\n    };\n  },\n});\n")),(0,o.kt)("h2",{id:""}),(0,o.kt)("h2",{id:"editor-1"},"Editor"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node + Mark \u7ec4\u6210 ProseMirror \u7684 Schema"),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"chain - \u4e00\u6b21\u6027\u6267\u884c\u591a\u4e2a commands"),(0,o.kt)("li",{parentName:"ul"},"getHTML, getJSON, getText"),(0,o.kt)("li",{parentName:"ul"},"getAttributes"),(0,o.kt)("li",{parentName:"ul"},"isActive - \u68c0\u67e5\u9009\u4e2d\u5185\u5bb9\u662f\u5426\u5339\u914d\u6761\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"registerPlugin, unregisterPlugin"),(0,o.kt)("li",{parentName:"ul"},"setOptions, setEditable, isEditable, isEmpty"))),(0,o.kt)("li",{parentName:"ul"},"commands",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"focus - focus Editor"))),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"beforeCreate, creaate"),(0,o.kt)("li",{parentName:"ul"},"update"),(0,o.kt)("li",{parentName:"ul"},"selectionUpdate"),(0,o.kt)("li",{parentName:"ul"},"transaction"),(0,o.kt)("li",{parentName:"ul"},"focus, blur"),(0,o.kt)("li",{parentName:"ul"},"destroy")))),(0,o.kt)("h2",{id:"node-vs-mark-1"},"Node vs Mark"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"block \u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},"tag \u6807\u7b7e"),(0,o.kt)("li",{parentName:"ul"},"atom \u4e3a\u4e0d\u53ef\u76f4\u63a5\u7f16\u8f91 Node - \u4f8b\u5982 Mention"))),(0,o.kt)("li",{parentName:"ul"},"Mark",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"node \u7684\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ul"},"tag \u5c5e\u6027\u3001\u6837\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u5e94\u7528\u4e8e\u90e8\u5206 Node")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MyNode = Node.create({\n  name: 'my-node',\n  content: 'block+', // \u5141\u8bb8\u5185\u5bb9 - +,*,?,|,()\n  group: 'block', // node \u5206\u7ec4\n  inline: true,\n  atom: false,\n  selectable: true,\n  draggable: true,\n  code: false,\n  whitespace: 'pre', // \u63a7\u5236\u7a7a\u767d \u5904\u7406 \u903b\u8f91\n  defining: false, // \u7c98\u8d34\u7684\u65f6\u5019\u662f\u5426\u4fdd\u7559\n  allowGapCursor: false,\n  isolating: false, // \u9694\u79bb\u7f16\u8f91\u8303\u56f4 - \u4f8b\u5982 TableCell\n  tableRole: 'cell', //  Table \u6269\u5c55\u5b9a\u4e49\u7684\u89d2\u8272 - table, row, cell, header_cell\n  marks: 'bold', // \u5141\u8bb8 mark - _ \u4efb\u610f, '' \u4e0d\u5141\u8bb8\n});\nconst MyMark = Mark.create({\n  inclusive: false, // \u5149\u6807\u5728\u7ed3\u5c3e\u7684\u65f6\u5019\u662f\u5426\u5305\u542b\u5728\u5f53\u524d mark - \u4f8b\u5982 Link \u4e3a false\n  excludes: 'bold', // \u6392\u4ed6 mark\n  group: 'basic',\n  code: false, // \u5185\u5bb9\u662f\u5426\u4e3a\u4ee3\u7801\n  spanning: false, // \u662f\u5426\u53ef\u4ee5\u8de8\u591a\u4e2a\u8282\u70b9\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"addKeyboardShortcuts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mod \u6307\u4ee3 Cmd \u6216 Control"),(0,o.kt)("li",{parentName:"ul"},"Shift, Alt, Control, Cmd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://keycode.info/"},"https://keycode.info/"))))))}m.isMDXComponent=!0}}]);