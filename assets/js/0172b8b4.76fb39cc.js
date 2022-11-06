"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24840],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return S},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const u={tags:["Insight"]},d=void 0,k={unversionedId:"web/editor/prosemirror-inside",id:"web/editor/prosemirror-inside",title:"prosemirror-inside",description:"ProseMirror Inside",source:"@site/../notes/web/editor/prosemirror-inside.md",sourceDirName:"web/editor",slug:"/web/editor/prosemirror-inside",permalink:"/notes/web/editor/prosemirror-inside",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/prosemirror-inside.md",tags:[{label:"Insight",permalink:"/notes/tags/insight"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666756281,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{tags:["Insight"]},sidebar:"docs",previous:{title:"\u524d\u7aef\u7ec4\u4ef6\u6570\u636e\u6a21\u578b",permalink:"/notes/web/editor/model-awesome"},next:{title:"ProseMirror",permalink:"/notes/web/editor/prosemirror"}},N={},g=[{value:"ProseMirror Inside",id:"prosemirror-inside",level:2}],f={toc:g};function S(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},f),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"prosemirror-inside"}),"ProseMirror Inside"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-mermaid",metastring:'title="\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb"',title:'"\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb"'}),"graph TD;\n    state --\x3e model & view & transform\n    view --\x3e state & model & transform\n    transform --\x3e model\n    model --\x3e orderedmap\n    commands --\x3e model & state & transform\n    schema-list --\x3e model & state & transform\n    schema-basic --\x3e model\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," view \u548c state \u76f8\u4e92\u4f9d\u8d56")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u6a21\u5757 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/orgs/ProseMirror/repositories"}),"https://github.com/orgs/ProseMirror/repositories")),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757 - ",(0,r.kt)("inlineCode",{parentName:"li"},"prosemirror-<module>")),(0,r.kt)("li",{parentName:"ul"},"prosemirror-model - \u5b9a\u4e49\u6587\u6863\u6a21\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Slice"),(0,r.kt)("li",{parentName:"ul"},"ResolvedPos"),(0,r.kt)("li",{parentName:"ul"},"NodeRange"),(0,r.kt)("li",{parentName:"ul"},"Schema"),(0,r.kt)("li",{parentName:"ul"},"ContentMatch"),(0,r.kt)("li",{parentName:"ul"},"DOMParser"),(0,r.kt)("li",{parentName:"ul"},"DOMSerializer")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"type Attrs = Record<string, any>;\n\nclass NodeType {\n  name: string;\n  schema: Schema;\n  spec: NodeSpec;\n  create(attrs?: Attrs, content?: Fragment | Node | readonly Node[] | null, marks?: readonly Mark[]): Node;\n  isBlock: boolean;\n  isTextBlock: boolean;\n  inlineContent: boolean;\n  isInline: boolean;\n  isText: boolean;\n  isLeaf: boolean;\n  isAtom: boolean; // \u6574\u4f53\u64cd\u4f5c\n}\nclass Node {\n  type: NodeType;\n  attrs: Attrs;\n  marks: readonly Mark[];\n  content: Fragment;\n  text: string;\n  readonly nodeSize: number;\n  readonly childCount: number;\n\n  toJSON(): any;\n  static fromJSON();\n}\n\n// node's collection of child nodes\nclass Fragment {}\n\nclass MarkType {\n  name: string;\n  schema: Schema;\n  spec: MarkSpec;\n  create(attrs?: Attrs): Mark;\n}\nclass Mark {\n  type: MarkType;\n  attrs: Attrs;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prosemirror-transform - \u72b6\u6001\u4e8b\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ba9\u4fee\u6539 \u53ef\u8bb0\u5f55\u3001\u53ef\u91cd\u8fd4\u3001\u91cd\u6392\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"Step - ReplaceStep, ReplaceAroundStep, AddMarkStep, RemoveMarkStep",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u539f\u5b50\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u5e8f\u5217\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a Step \u7684 class prototype \u4e0a\u6709 jsonID \u6765\u8ddf\u8e2a"))),(0,r.kt)("li",{parentName:"ul"},"StepResult"),(0,r.kt)("li",{parentName:"ul"},"Mappable - StepMap, Mapping"),(0,r.kt)("li",{parentName:"ul"},"MapResult"),(0,r.kt)("li",{parentName:"ul"},"Transform")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"abstract class Step {\n  abstract apply(doc: Node): StepResult;\n  abstract invert(doc: Node): Step;\n  abstract map(mapping: Mappable): Step;\n}\n\nclass Transform {\n  steps: Step[];\n  docs: Node[];\n  mapping: Mapping;\n  doc: Node;\n  before: Node;\n  after: Node;\n  docChanged: boolean;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/ProseMirror/prosemirror-state"}),"prosemirror-state")," - \u7f16\u8f91\u5668\u72b6\u6001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EditorState"),(0,r.kt)("li",{parentName:"ul"},"Transaction"),(0,r.kt)("li",{parentName:"ul"},"Selection - from,to - anchor,head",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TextSelection"),(0,r.kt)("li",{parentName:"ul"},"NodeSelection - node"),(0,r.kt)("li",{parentName:"ul"},"AllSelection"))),(0,r.kt)("li",{parentName:"ul"},"Plugin"),(0,r.kt)("li",{parentName:"ul"},"PluginKey")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"// \u662f\u4e00\u4e2a\u5f88\u8f7b\u91cf\u7684\u5bf9\u8c61\nclass EditorState {\n  doc: Node;\n  selection: Selection;\n  storedMarks: readonly Mark[]; // \u4e0b\u6b21\u8f93\u5165\u4f1a\u5e94\u7528\u7684 mark\n  schema: Schema;\n  plugins: readonly Plugin[];\n  apply(tr: Transaction): EditorState;\n  applyTransaction(rootTr: Transaction): {\n    state: EditorState;\n    transactions: readonly Transaction[];\n  };\n  readonly tr: Transaction; // \u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\n  // \u4fdd\u7559\u72b6\u6001\n  reconfigure(config: Object): EditorState;\n\n  static create(config: EditorStateConfig): EditorState;\n\n  // \u5e8f\u5217\u5316 - \u5927\u81f4\u7ed3\u6784\n  // {doc,selection,storedMarks?, [pluginField] = plugin.spec.state?.toJSON?.()}\n  toJSON(pluginFields?: Object<Plugin>): any;\n  // \u53cd\u5e8f\u5217\u5316\n  // doc=Node.fromJSON, selection = Selection.fromJSON\n  // storeMarks=schema.markFromJSON\n  // plugin.spec.state?.fromJSON\n  static fromJSON(config: Object, json: any, pluginFields?: Object<Plugin>): EditorState;\n}\n\ninterface EditorStateConfig {\n  schema?: Schema;\n  doc?: Node;\n  selection?: Selection;\n  storedMarks?: readonly Mark[];\n  plugins?: readonly Plugin[];\n}\n\n// \u5305\u542b\u9488\u5bf9 EditorState \u7684\u64cd\u4f5c\n// \u80fd\u5b58\u50a8\u989d\u5916\u7684 meta \u4fe1\u606f\nclass Transaction extends Transform {}\n\ntype Command = (\n  state: EditorState,\n  dispatch?: (tr: Transaction) => void, // dry run \u65f6\u6ca1\u6709\n  view?: EditorView,\n) => boolean; // \u8fd4\u56de false \u8868\u793a\u4e0d\u9002\u7528\n\ninterface PluginSpec<PluginState> {\n  key?: PluginKey;\n  props?: EditorProps<Plugin<PluginState>>;\n  state?: StateField<PluginState>;\n\n  // DOM \u4ea4\u4e92\n  view?: (view: EditorView) => PluginView;\n  // \u53ef\u4ee5\u53d6\u6d88 tr\n  filterTransaction?: (tr: Transaction, state: EditorState) => boolean;\n  appendTransaction?: (\n    transactions: readonly Transaction[],\n    oldState: EditorState,\n    newState: EditorState,\n  ) => Transaction;\n\n  [key: string]: any;\n}\n\ninterface StateField<T> {\n  init: (config: EditorStateConfig, instance: EditorState) => T;\n  apply: (tr: Transaction, value: T, oldState: EditorState, newState: EditorState) => T;\n\n  toJSON?: (value: T) => any;\n  fromJSON?: (config: EditorStateConfig, value: any, state: EditorState) => T;\n}\ntype PluginView = {\n  update?: (view: EditorView, prevState: EditorState) => void;\n  destroy?: () => void;\n};\n\nclass Plugin<PluginState = any> {\n  constructor(spec: PluginSpec<PluginState>);\n  spec: PluginSpec<PluginState>;\n  props: EditorProps<Plugin<PluginState>>;\n  getState(state: EditorState): PluginState;\n}\nclass PluginKey<PluginState = any> {\n  constructor(name: string = 'key');\n  get(state: EditorState): Plugin<PluginState>;\n  getState(state: EditorState): PluginState;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prosemirror-view - Web \u7f16\u8f91\u5668 - DOM <-> State",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EditorView"),(0,r.kt)("li",{parentName:"ul"},"Decoration"),(0,r.kt)("li",{parentName:"ul"},"DecorationSet")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"class EditorView {\n  state: EditorState;\n  dom: HTMLElement;\n  editable: boolean;\n\n  dispatchEvent(event: Event): void;\n  dispatch(tr: Transaction): void;\n}\ninterface EditorProps<P = any> {}\ninterface NodeView {\n  dom: DOMNode;\n  contentDOM?: HTMLElement;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prosemirror-commands - \u9884\u8bbe\u7684 state \u64cd\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"joinBackward"),(0,r.kt)("li",{parentName:"ul"},"selectNodeBackward"),(0,r.kt)("li",{parentName:"ul"},"joinForward"),(0,r.kt)("li",{parentName:"ul"},"selectNodeForward"),(0,r.kt)("li",{parentName:"ul"},"joinUp"),(0,r.kt)("li",{parentName:"ul"},"joinDown"),(0,r.kt)("li",{parentName:"ul"},"lift"),(0,r.kt)("li",{parentName:"ul"},"newlineInCode"),(0,r.kt)("li",{parentName:"ul"},"exitCode"),(0,r.kt)("li",{parentName:"ul"},"deleteSelection"),(0,r.kt)("li",{parentName:"ul"},"selectAll"),(0,r.kt)("li",{parentName:"ul"},"selectTextblockStart - \u79fb\u52a8\u5149\u6807\u5230 block \u5f00\u5934"),(0,r.kt)("li",{parentName:"ul"},"selectTextblockEnd"),(0,r.kt)("li",{parentName:"ul"},"setBlockType"),(0,r.kt)("li",{parentName:"ul"},"toggleMark"))),(0,r.kt)("li",{parentName:"ul"},"prosemirror-keymap"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-history"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-inputrules - \u8f93\u5165\u7279\u5b9a\u5185\u5bb9\uff0c\u89e6\u53d1\u547d\u4ee4 - \u5b9e\u73b0 Markdown \u8f93\u5165\u8bed\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"InputRule"))),(0,r.kt)("li",{parentName:"ul"},"prosemirror-collab"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-gapcursor"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-schema-basic - \u7c7b CommonMark \u7684 Schema, \u4e0d\u5305\u542b list",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nodes - doc, paragraph, blockquote, horizontal_rule, heading, code_block, text, image, hard_break"),(0,r.kt)("li",{parentName:"ul"},"marks - line, em, strong, code"))),(0,r.kt)("li",{parentName:"ul"},"prosemirror-schema-list - \u7c7b CommonMark \u7684 \u5217\u8868 schema",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"orderedList, bulletList, listItem"))),(0,r.kt)("li",{parentName:"ul"},"prosemirror-markdown"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-menu"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-dropcursor"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-table"),(0,r.kt)("li",{parentName:"ul"},"prosemirror-changeset")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-json",metastring:'title="model"',title:'"model"'}),'{\n  "type": "",\n  "attrs": {},\n  "content": {},\n  "marks": [\n    {\n      "type": "",\n      "attr": {}\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"// \u6570\u7ec4 - ['tag',{},0]\ntype DOMOutputSpec = string | DOMNode | { dom: DOMNode; contentDOM?: HTMLElement } | [string, ...any];\n// \u4f9b DOMSerializer \u4f7f\u7528\ntype NodeToDOM = (node: Node) => DOMOutputSpe;\ntype MarkToDOM = (mark: Mark, inline: boolean) => DOMOutputSpec;\n")))}S.isMDXComponent=!0}}]);