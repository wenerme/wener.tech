"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1502],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||p[s]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"lexical"},c="lexical",d={unversionedId:"web/editor/lexical",id:"web/editor/lexical",title:"lexical",description:"- facebook/lexical",source:"@site/../notes/web/editor/lexical.md",sourceDirName:"web/editor",slug:"/web/editor/lexical",permalink:"/notes/web/editor/lexical",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/editor/lexical.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"lexical"},sidebar:"docs",previous:{title:"formily",permalink:"/notes/web/editor/formily"},next:{title:"Low Code Awesome",permalink:"/notes/web/editor/low-code-awesome"}},u={},p=[{value:"Internal",id:"internal",level:2},{value:"Node",id:"node",level:3},{value:"Node Transform",id:"node-transform",level:3},{value:"Command",id:"command",level:3},{value:"Listener",id:"listener",level:3},{value:"Selection",id:"selection",level:3},{value:"EditorState",id:"editorstate",level:3}],m={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lexical"},"lexical"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical"},"facebook/lexical"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, FlowJS"),(0,l.kt)("li",{parentName:"ul"},"by Facebook"),(0,l.kt)("li",{parentName:"ul"},"React \u4f53\u9a8c"),(0,l.kt)("li",{parentName:"ul"},"EditorState single source of truth",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"reconcile DOM"))),(0,l.kt)("li",{parentName:"ul"},"\u7eaf JS \u53ef\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e contentEditable"),(0,l.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 Draft.js"),(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd\u597d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"queueMicrotask"),(0,l.kt)("li",{parentName:"ul"},"React 18+ concurrent \u652f\u6301"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 yjs \u96c6\u6210"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",{parentName:"li",src:"https://badgen.net/bundlephobia/min/lexical?label=lexical",alt:"lexical"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"0 \u4f9d\u8d56"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://playground.lexical.dev/"},"https://playground.lexical.dev/"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u8fd8\u76f8\u5f53\u4e0d\u6210\u719f - \u8fd8\u5904\u4e8e\u5feb\u901f\u5f00\u53d1\u9636\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u66f4\u5efa\u8bae\u4f7f\u7528 Tiptap"))),(0,l.kt)("li",{parentName:"ul"},"\u8282\u70b9\u8026\u5408\u63d2\u4ef6 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical/issues/1262"},"#1262"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u6269\u5c55\u5df2\u6709\u8282\u70b9 - \u505a\u4e0d\u5230 Tiptap \u7684 Extension \u6548\u679c"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# react -> list,link,code,overflow,history,markdown,mark,hashtag,selection,dragon,utils,table,clipboard,rich-text,plain-text\nnpm add lexical @lexical/react\n\nnpm add @lexical/file\n\nnpm add y-websocket yjs @lexical/yjs\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"link-preview-generator")),(0,l.kt)("h2",{id:"internal"},"Internal"),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RootNode"),(0,l.kt)("li",{parentName:"ul"},"LineBreakNode - ",(0,l.kt)("inlineCode",{parentName:"li"},"\\n")),(0,l.kt)("li",{parentName:"ul"},"ElementNode - \u57fa\u7840\u7c7b"),(0,l.kt)("li",{parentName:"ul"},"TextNode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"format - bold, italic, underline, strikethrough, code, subscript, superscript"),(0,l.kt)("li",{parentName:"ul"},"mode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"token - \u5185\u5bb9\u4e0d\u53ef\u7f16\u8f91\uff0c\u4f5c\u4e3a\u6574\u4f53\u5220\u9664 - tiptap atom"),(0,l.kt)("li",{parentName:"ul"},"inert - \u7c7b\u4f3c token\uff0c\u4f1a\u8bbe\u7f6e contenteditable=false"),(0,l.kt)("li",{parentName:"ul"},"segmented"))),(0,l.kt)("li",{parentName:"ul"},"style - CSS \u6837\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},"DecoratorNode - \u4fee\u9970\u73b0\u6709\u8282\u70b9 - tiptap NodeView")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface Node {\n  static getType();\n  static clone(node: typeof this);\n\n  // ElementNode \u6ca1\u6709 EditorConfig\n  // TextNode \u6709 EditorConfig\n\n  createDOM(config: EditorConfig): HTMLElement;\n  // true - replace with createDOM\n  updateDOM(prevNode: CustomParagraph, dom: HTMLElement, config: EditorConfig): boolean;\n\n  // for DecoratorNode<React$Node>\n  decorate(): React$Node;\n}\n")),(0,l.kt)("h3",{id:"node-transform"},"Node Transform"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"editor.registerNodeTransform(TextNode, (textNode) => {\n  //\n});\n")),(0,l.kt)("h3",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// payload\nconst HELLO_WORLD_COMMAND: LexicalCommand<string> = createCommand();\n\neditor.dispatchCommand(HELLO_WORLD_COMMAND, 'Hello World!');\n\neditor.registerCommand(\n  HELLO_WORLD_COMMAND,\n  (payload: string) => {\n    console.log(payload); // Hello World!\n    return false;\n  },\n  LowPriority,\n);\n")),(0,l.kt)("h3",{id:"listener"},"Listener"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {\n  editorState.read(() => {\n    // \u901a\u8fc7 $ \u524d\u7f00\u51fd\u6570 \u8bbf\u95ee\u4e0a\u4e0b\u6587\u72b6\u6001\n  });\n  editor.update(() => {\n    // transaction\n  });\n});\n\nremoveUpdateListener();\n\n// \u76d1\u542c\u5185\u5bb9\u53d8\u5316\neditor.registerTextContentListener((textContent) => {\n  console.log(textContent);\n});\n\n// \u76d1\u542c\u8282\u70b9\u4fee\u6539\neditor.registerMutationListener(MyCustomNode, (mutatedNodes) => {\n  // mutation: created, destroyed, updated\n  for (let [nodeKey, mutation] of mutatedNodes) {\n    console.log(nodeKey, mutation);\n  }\n});\n// \u53ea\u8bfb\u72b6\u6001\u53d8\u5316\neditor.registerReadOnlyListener((readOnly) => {\n  console.log(readOnly);\n});\n//\neditor.registerDecoratorListener((decorators) => {\n  console.log(decorators);\n});\n")),(0,l.kt)("h3",{id:"selection"},"Selection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RangeSelection"),(0,l.kt)("li",{parentName:"ul"},"NodeSelection"),(0,l.kt)("li",{parentName:"ul"},"GridSelection"),(0,l.kt)("li",{parentName:"ul"},"null")),(0,l.kt)("h3",{id:"editorstate"},"EditorState"))}s.isMDXComponent=!0}}]);