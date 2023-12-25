/*! For license information please see 72dd10ba.7f2a79d0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36361],{73157:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(11527),s=t(47214);const r={tags:["Insight"]},o="Tiptap Inside",a={id:"web/editor/tiptap-inside",title:"Tiptap Inside",description:"- \u4f20\u53c2\u4f7f\u7528\u5bf9\u8c61\uff0c prosemirror \u4f7f\u7528\u72ec\u7acb\u53c2\u6570",source:"@site/../notes/web/editor/tiptap-inside.md",sourceDirName:"web/editor",slug:"/web/editor/tiptap-inside",permalink:"/notes/web/editor/tiptap-inside",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/tiptap-inside.md",tags:[{label:"Insight",permalink:"/notes/tags/insight"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666756281,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{tags:["Insight"]},sidebar:"docs",previous:{title:"Tiptap Extension",permalink:"/notes/web/editor/tiptap-extension"},next:{title:"tiptap",permalink:"/notes/web/editor/tiptap"}},d={},l=[];function c(n){const e={code:"code",h1:"h1",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"tiptap-inside",children:"Tiptap Inside"}),"\n",(0,i.jsx)(e.mermaid,{value:"classDiagram\nEventEmitter <|-- Editor\nEditor *-- CommandManager\nEditor *-- ExtensionManager\nEditor -- EditorState\nEditor *-- EditorView\nclass Editor {\n    +commandManager CommandManager\n    +extensionManager ExtensionManager\n    +schema Schema\n    +view EditorView\n    +state EditorState\n\n    +setOptions()\n    +setEditable()\n}\n\nclass ExtensionManager {\n    +editor Editor\n    +schema Schema\n    +extensions Extensions\n    commands() RawCommands\n    plugins() Plugin[]\n    attributes()\n    nodeViews()\n}\nCommandManager -- EditorState\nclass CommandManager {\n    +editor Editor\n    +rawCommands AnyCommands\n    +state EditorState\n\n    +commands() SingleCommands\n    +can() CanCpmmands\n    +chain() CanCpmmands\n}\nEditorView *-- EditorState\nclass EditorView{\n    <<prosemirror-view>>\n    +state EditorState\n    +setProps()\n    +updateState(state EditorState)\n    +dispatch(tr Transaction)\n}\n\nclass EditorState{\n    <<prosemirror-state>>\n    +doc Node\n    +selection Selection\n    +storedMarks Mark[]\n    +schema() Schema\n    +plugins() Plugin[]\n    +apply(tr Transaction) EditorState\n    +tr() Transaction\n    +reconfigure(config)\n}\n\nclass EventEmitter{\n    +on()\n    +off()\n    +emit()\n}"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f20\u53c2\u4f7f\u7528\u5bf9\u8c61\uff0c prosemirror \u4f7f\u7528\u72ec\u7acb\u53c2\u6570"}),"\n",(0,i.jsxs)(e.li,{children:["Editor\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5c01\u88c5\u6240\u6709\u76f8\u5173\u5bf9\u8c61"}),"\n",(0,i.jsx)(e.li,{children:"EditorView, Extension, Command"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ExtensionManager\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u63d2\u4ef6\u7cfb\u7edf"}),"\n",(0,i.jsx)(e.li,{children:"\u5305\u542b\u4e86 prosemirror \u7684 Plugin \u903b\u8f91"}),"\n",(0,i.jsxs)(e.li,{children:["Extension \u5305\u542b\u4e86\u975e prosemirror Plugin \u7684\u529f\u80fd\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6dfb\u52a0 command"}),"\n",(0,i.jsx)(e.li,{children:"\u4e8b\u4ef6"}),"\n",(0,i.jsx)(e.li,{children:"\u4e00\u4e9b\u989d\u5916 hook"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4e8b\u4ef6\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"beforeCreate, create, update, selectionUpdate, transaction"}),"\n",(0,i.jsx)(e.li,{children:"focus, blur"}),"\n",(0,i.jsx)(e.li,{children:"destroy"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["CommandManager\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5c06\u79bb\u6563\u7684 commands \u5c01\u88c5\u5728\u4e00\u8d77"}),"\n",(0,i.jsx)(e.li,{children:"\u63d0\u4f9b can \u548c chain \u8f85\u52a9\u64cd\u4f5c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { EditorView } from 'prosemirror-view';\n\nclass Editor extends EventEmitter<EditorEvents> {\n  commandManager!: CommandManager;\n  extensionManager!: ExtensionManager;\n  css!: HTMLStyleElement;\n  schema!: Schema;\n  view!: EditorView;\n  isFocused = false;\n  extensionStorage: Record<string, any> = {};\n\n  options: EditorOptions;\n\n  get storage(): Record<string, any>;\n  get commands(): SingleCommands;\n  chain(): ChainedCommands;\n  can(): CanCommands;\n  setOptions(options: Partial<EditorOptions> = {}): void;\n  setEditable(editable: boolean): void;\n  get isEditable(): boolean;\n  get state(): EditorState;\n\n  registerPlugin(plugin: Plugin, handlePlugins?: (newPlugin: Plugin, plugins: Plugin[]) => Plugin[]): void;\n  unregisterPlugin(nameOrPluginKey: string | PluginKey): void;\n\n  getJSON(): JSONContent {\n    return this.state.doc.toJSON();\n  }\n  getHTML(): string;\n  getText(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer> }): string;\n  get isEmpty(): boolean;\n  destroy(): void;\n  get isDestroyed(): boolean;\n}\n\nclass ExtensionManager {\n  editor: Editor;\n  schema: Schema;\n  extensions: Extensions;\n  constructor(extensions: Extensions, editor: Editor);\n  get commands(): RawCommands;\n  get plugins(): Plugin[]; // inputRules, pasteRules, others\n  get attributes();\n  get nodeViews();\n\n  static resolve(extensions: Extensions): Extensions;\n  static flatten(extensions: Extensions): Extensions;\n  static sort(extensions: Extensions): Extensions;\n}\nclass CommandManager {\n  editor: Editor;\n  rawCommands: AnyCommands;\n  customState?: EditorState;\n  constructor(props: { editor: Editor; state?: EditorState });\n  get state(): EditorState;\n  get commands(): SingleCommands;\n  get chain(): () => ChainedCommands;\n  get can(): () => CanCommands;\n}\n\ntype CommandProps = {\n  tr: Transaction;\n  editor: Editor;\n  view;\n  state: ChainableState;\n  dispatch?;\n  chain: () => ChainCommands;\n  can: () => CanCommands;\n  get commands();\n};\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},3354:(n,e,t)=>{var i=t(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var i,r={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(c=e.ref),e)o.call(e,i)&&!d.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===r[i]&&(r[i]=e[i]);return{$$typeof:s,type:n,key:l,ref:c,props:r,_owner:a.current}}e.Fragment=r,e.jsx=l,e.jsxs=l},11527:(n,e,t)=>{n.exports=t(3354)},47214:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>o});var i=t(50959);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);