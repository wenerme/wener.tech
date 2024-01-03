/*! For license information please see ebb9a19e.5865b6d6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36249],{37559:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=i(11527),s=i(47214);const t={title:"unifiedjs"},l="unifiedjs",d={id:"web/editor/unifiedjs",title:"unifiedjs",description:"- unifiedjs/unified",source:"@site/../notes/web/editor/unifiedjs.md",sourceDirName:"web/editor",slug:"/web/editor/unifiedjs",permalink:"/notes/web/editor/unifiedjs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/unifiedjs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"unifiedjs"},sidebar:"docs",previous:{title:"Tiptap Inside",permalink:"/notes/web/editor/tiptap/inside"},next:{title:"x-render",permalink:"/notes/web/editor/x-render"}},c={},o=[];function a(n){const e={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"unifiedjs",children:"unifiedjs"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/unifiedjs/unified",children:"unifiedjs/unified"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"interface for parsing, inspecting, transforming, and serializing content through syntax trees"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://unifiedjs.com/learn/",children:"learn"})}),"\n",(0,r.jsxs)(e.li,{children:["\u4e3b\u8981\u5904\u7406\u6a21\u5757\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"retext - natural language"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://remark.js.org/",children:"remark"})," - markdown\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md",children:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"rehype - HTML"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/vfile/vfile",children:"vfile"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Virtual file format for text processing"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"mdast-util-to-hast"}),"\n",(0,r.jsxs)(e.li,{children:["AST - \u8bed\u6cd5\u6811\u7ed3\u6784\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/syntax-tree/unist",children:"unist"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Universal Syntax Tree"}),"\n",(0,r.jsx)(e.li,{children:"\u57fa\u7840 AST - \u5176\u4ed6 AST \u6269\u5c55\u4e8e\u8be5 AST"}),"\n",(0,r.jsxs)(e.li,{children:["Node\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"type"}),"\n",(0,r.jsx)(e.li,{children:"data"}),"\n",(0,r.jsxs)(e.li,{children:["position: Position\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["start: Point\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"line, column, offset"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"end, indent"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Parent extends Node\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"children: Node[]"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Literal extends Node\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"value: any"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/syntax-tree/mdast",children:"mdast"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Markdown Abstract Syntax Tree"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/syntax-tree/hast",children:"hast"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"HTML, SVG, MathML"}),"\n",(0,r.jsx)(e.li,{children:"Hypertext Abstract Syntax Tree"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"nlcst - for natural language"}),"\n",(0,r.jsx)(e.li,{children:"xast - for XML"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://github.com/micromark/micromark",children:"micromark"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"state machine"}),"\n",(0,r.jsx)(e.li,{children:"\u66ff\u4ee3 remark-parse"}),"\n",(0,r.jsx)(e.li,{children:"SyntaxExtension"}),"\n",(0,r.jsx)(e.li,{children:"HtmlExtension"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import { micromark } from 'micromark';\nimport { gfm, gfmHtml } from 'micromark-extension-gfm';\n\nconst value = '* [x] done';\n\nconst result = micromark(value, {\n  extensions: [gfm()],\n  htmlExtensions: [gfmHtml()],\n});\n\n// \u8f93\u51fa HTML\nconsole.log(result);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["MDN\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/mdn/yari/tree/main/markdown",children:"https://github.com/mdn/yari/tree/main/markdown"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},3354:(n,e,i)=>{var r=i(50959),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,i){var r,t={},o=null,a=null;for(r in void 0!==i&&(o=""+i),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)l.call(e,r)&&!c.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:s,type:n,key:o,ref:a,props:t,_owner:d.current}}e.Fragment=t,e.jsx=o,e.jsxs=o},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>l});var r=i(50959);const s={},t=r.createContext(s);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);