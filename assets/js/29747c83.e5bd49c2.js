/*! For license information please see 29747c83.e5bd49c2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1502],{81068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(11527),l=t(47214);const r={title:"lexical"},o="lexical",s={id:"web/editor/lexical",title:"lexical",description:"- facebook/lexical",source:"@site/../notes/web/editor/lexical.md",sourceDirName:"web/editor",slug:"/web/editor/lexical",permalink:"/notes/web/editor/lexical",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/lexical.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1698118598,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{title:"lexical"},sidebar:"docs",previous:{title:"hocus",permalink:"/notes/web/editor/hocus"},next:{title:"Low Code Design",permalink:"/notes/web/editor/low-code/"}},d={},c=[{value:"Notes",id:"notes",level:2},{value:"Node",id:"node",level:3},{value:"Node Transform",id:"node-transform",level:3},{value:"Command",id:"command",level:3},{value:"Listener",id:"listener",level:3},{value:"Selection",id:"selection",level:3},{value:"EditorState",id:"editorstate",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"lexical",children:"lexical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/facebook/lexical",children:"facebook/lexical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MIT, FlowJS"}),"\n",(0,i.jsx)(n.li,{children:"by Facebook"}),"\n",(0,i.jsx)(n.li,{children:"React \u4f53\u9a8c"}),"\n",(0,i.jsxs)(n.li,{children:["EditorState single source of truth\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"reconcile DOM"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u7eaf JS \u53ef\u4f7f\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e contentEditable"}),"\n",(0,i.jsx)(n.li,{children:"\u66ff\u4ee3 Draft.js"}),"\n",(0,i.jsxs)(n.li,{children:["\u6027\u80fd\u597d\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"queueMicrotask"}),"\n",(0,i.jsx)(n.li,{children:"React 18+ concurrent \u652f\u6301"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301 yjs \u96c6\u6210"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["adopted by\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"payloadcms"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.img,{src:"https://badgen.net/bundlephobia/min/lexical?label=lexical",alt:"lexical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"0 \u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playground.lexical.dev/",children:"https://playground.lexical.dev/"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u76ee\u524d\u8fd8\u76f8\u5f53\u4e0d\u6210\u719f - \u8fd8\u5904\u4e8e\u5feb\u901f\u5f00\u53d1\u9636\u6bb5\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d\u66f4\u5efa\u8bae\u4f7f\u7528 Tiptap"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8282\u70b9\u8026\u5408\u63d2\u4ef6 - ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/lexical/issues/1262",children:"#1262"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65e0\u6cd5\u6269\u5c55\u5df2\u6709\u8282\u70b9 - \u505a\u4e0d\u5230 Tiptap \u7684 Extension \u6548\u679c"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# react -> list,link,code,overflow,history,markdown,mark,hashtag,selection,dragon,utils,table,clipboard,rich-text,plain-text\nnpm add lexical @lexical/react\n\nnpm add @lexical/file\n\nnpm add y-websocket yjs @lexical/yjs\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"link-preview-generator"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RootNode"}),"\n",(0,i.jsxs)(n.li,{children:["LineBreakNode - ",(0,i.jsx)(n.code,{children:"\\n"})]}),"\n",(0,i.jsx)(n.li,{children:"ElementNode - \u57fa\u7840\u7c7b"}),"\n",(0,i.jsxs)(n.li,{children:["TextNode\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"format - bold, italic, underline, strikethrough, code, subscript, superscript"}),"\n",(0,i.jsxs)(n.li,{children:["mode\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"token - \u5185\u5bb9\u4e0d\u53ef\u7f16\u8f91\uff0c\u4f5c\u4e3a\u6574\u4f53\u5220\u9664 - tiptap atom"}),"\n",(0,i.jsx)(n.li,{children:"inert - \u7c7b\u4f3c token\uff0c\u4f1a\u8bbe\u7f6e contenteditable=false"}),"\n",(0,i.jsx)(n.li,{children:"segmented"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"style - CSS \u6837\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"DecoratorNode - \u4fee\u9970\u73b0\u6709\u8282\u70b9 - tiptap NodeView"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface Node {\n  static getType();\n  static clone(node: typeof this);\n\n  // ElementNode \u6ca1\u6709 EditorConfig\n  // TextNode \u6709 EditorConfig\n\n  createDOM(config: EditorConfig): HTMLElement;\n  // true - replace with createDOM\n  updateDOM(prevNode: CustomParagraph, dom: HTMLElement, config: EditorConfig): boolean;\n\n  // for DecoratorNode<React$Node>\n  decorate(): React$Node;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"node-transform",children:"Node Transform"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"editor.registerNodeTransform(TextNode, (textNode) => {\n  //\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"command",children:"Command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// payload\nconst HELLO_WORLD_COMMAND: LexicalCommand<string> = createCommand();\n\neditor.dispatchCommand(HELLO_WORLD_COMMAND, 'Hello World!');\n\neditor.registerCommand(\n  HELLO_WORLD_COMMAND,\n  (payload: string) => {\n    console.log(payload); // Hello World!\n    return false;\n  },\n  LowPriority,\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"listener",children:"Listener"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {\n  editorState.read(() => {\n    // \u901a\u8fc7 $ \u524d\u7f00\u51fd\u6570 \u8bbf\u95ee\u4e0a\u4e0b\u6587\u72b6\u6001\n  });\n  editor.update(() => {\n    // transaction\n  });\n});\n\nremoveUpdateListener();\n\n// \u76d1\u542c\u5185\u5bb9\u53d8\u5316\neditor.registerTextContentListener((textContent) => {\n  console.log(textContent);\n});\n\n// \u76d1\u542c\u8282\u70b9\u4fee\u6539\neditor.registerMutationListener(MyCustomNode, (mutatedNodes) => {\n  // mutation: created, destroyed, updated\n  for (let [nodeKey, mutation] of mutatedNodes) {\n    console.log(nodeKey, mutation);\n  }\n});\n// \u53ea\u8bfb\u72b6\u6001\u53d8\u5316\neditor.registerReadOnlyListener((readOnly) => {\n  console.log(readOnly);\n});\n//\neditor.registerDecoratorListener((decorators) => {\n  console.log(decorators);\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RangeSelection"}),"\n",(0,i.jsx)(n.li,{children:"NodeSelection"}),"\n",(0,i.jsx)(n.li,{children:"GridSelection"}),"\n",(0,i.jsx)(n.li,{children:"null"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"editorstate",children:"EditorState"})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var i=t(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,r={},c=null,a=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:l,type:e,key:c,ref:a,props:r,_owner:s.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(50959);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);