"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89186],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={title:"craft.js"},d="craft.js",k={unversionedId:"web/editor/craftjs",id:"web/editor/craftjs",title:"craft.js",description:"- prevwong/craft.js",source:"@site/../notes/web/editor/craftjs.md",sourceDirName:"web/editor",slug:"/web/editor/craftjs",permalink:"/notes/web/editor/craftjs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/editor/craftjs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655100912,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{title:"craft.js"},sidebar:"docs",previous:{title:"CodeMirror",permalink:"/notes/web/editor/codemirror"},next:{title:"Draftjs",permalink:"/notes/web/editor/draftjs"}},N={},f=[{value:"Internal",id:"internal",level:2}],v={toc:f};function b(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"craftjs"}),"craft.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/prevwong/craft.js"}),"prevwong/craft.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, React"),(0,r.kt)("li",{parentName:"ul"},"drag and drop page editors"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u6a21\u5f0f\u5bf9\u73b0\u6709\u7ec4\u4ef6\u4fb5\u5165"))),(0,r.kt)("li",{parentName:"ul"},"@craftjs/core",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"150kb - self 30kb + @craftjs/utils 13kb + lodash 96kb + immer + nanoid")))),(0,r.kt)("admonition",s({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u73b0\u6709\u7ec4\u4ef6\u4fb5\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 Reaact 18 StrictMode ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/prevwong/craft.js/issues/404"}),"#404")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\nimport {Editor, Frame, Canvas, Selector} from "@craftjs/core";\n\nconst TextComponent = ({text}) => {\n  const { connectors: { connect, drag }, isClicked, actions: {setProp} } = useNode(\n    (state) => ({\n      isClicked: state.event.selected,\n    })\n  );\n\n  return (\n    <div ref={dom => connect(drag(dom))}>\n      <h2>{text}</h2>\n      {\n        isClicked ? (\n          <Modal>\n            <input\n              type="text"\n              value={text}\n              onChange={e => setProp(e.target.value)}\n            />\n          </Modal>\n        )\n      }\n    </div>\n  )\n}\n\nconst Container = () => {\n  const { actions: {add}, query: { createNode, node } } = useEditor();\n  const { id, connectors: {drag, connect} } = useNode();\n  return (\n    <div ref={dom => connect(drag(dom))}>\n      <a onClick={() => {\n        const { data: {type, props}} = node(id).get();\n        add(\n          createNode(React.createElement(type, props));\n        );\n      }}>\n        Make a copy of me\n      </a>\n    </div>\n  )\n}\n\nconst SaveButton = () => {\n  const { query } = useEditor();\n  return <a onClick={() => console.log(query.serialize()) }>Get JSON</a>\n}\n\nconst App = () => {\n  return (\n    <div>\n      <header>Editor</header>\n      <Editor>\n        <Frame resolver={{TextComponent, Container}}>\n          <Canvas>\n            <TextComponent text="I\'m already rendered here" />\n          </Canvas>\n        </Frame>\n        <SaveButton/>\n      </Editor>\n    </div>\n  )\n}\n')),(0,r.kt)("h2",s({},{id:"internal"}),"Internal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useMethos \u57fa\u4e8e ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/pelotom/use-methods"}),"pelotom/use-methods")," \u505a\u4e86\u4e00\u5b9a\u8c03\u6574",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52a0\u4e86 QueryMethods - \u7528\u4e8e\u67e5\u8be2\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u4e86\u72b6\u6001\u8ba2\u9605\u673a\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u59cb userMethods \u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"[state, callbacks]"),", \u73b0\u5728\u7684\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"[actions, query, watcher, getState]")),(0,r.kt)("li",{parentName:"ul"},"\u7406\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"useMethos")," \u5bf9\u770b\u61c2 useEditor \u548c useNode \u975e\u5e38\u6709\u5e2e\u52a9"))),(0,r.kt)("li",{parentName:"ul"},"Editor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"onRender - \u6e32\u67d3 hoc"),(0,r.kt)("li",{parentName:"ul"},"resolver - \u7ec4\u4ef6\u5217\u8868"),(0,r.kt)("li",{parentName:"ul"},"enabled - \u662f\u5426\u542f\u7528\u7f16\u8f91"),(0,r.kt)("li",{parentName:"ul"},"indicator - \u7ebf\u6761\u989c\u8272 - success \u548c error"))),(0,r.kt)("li",{parentName:"ul"},"\u72b6\u6001",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nodes - \u6240\u6709\u8282\u70b9"),(0,r.kt)("li",{parentName:"ul"},"events - \u4e8b\u4ef6\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"options - \u914d\u7f6e\u9879"))),(0,r.kt)("li",{parentName:"ul"},"API \u901a\u8fc7 useMethods \u5b9e\u73b0 - actions\u3001queries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u662f\u7ef4\u62a4 node \u7684\u7ed3\u6784 - \u589e\u3001\u5220\u3001\u6539\u3001\u67e5"))))),(0,r.kt)("li",{parentName:"ul"},"Events",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u4e8b\u4ef6\u5904\u7406 - "select" | "hover" | "drag" | "drop" | "create"'),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u8282\u70b9\u4e0a\u7684\u4e8b\u4ef6\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 drop \u7684 \u6807\u8bc6\u52a8\u753b"),(0,r.kt)("li",{parentName:"ul"},"\u903b\u8f91\u76f8\u5bf9\u590d\u6742"))),(0,r.kt)("li",{parentName:"ul"},"NodeElement \u4f1a\u57fa\u4e8e id \u5bf9\u8282\u70b9\u8fdb\u884c memo"),(0,r.kt)("li",{parentName:"ul"},"NodeHandlers \u4f1a\u4ece\u4e8b\u4ef6\u673a\u5236\u884d\u751f\u51fa\u9488\u5bf9\u8282\u70b9\u7684\u4e8b\u4ef6\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"Canvas",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66ff\u4ee3\u7ec4\u4ef6\uff0c\u76f8\u5f53\u4e8e\u7ec4\u4ef6\u7684 decorator\u3001hoc"),(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u5185\u90e8\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 ID \u6620\u5c04\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 internalEditor \u548c internalNode \u7ef4\u62a4\u72b6\u6001"))),(0,r.kt)("li",{parentName:"ul"},"useInternalNode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece NodeContext \u66b4\u9732\u989d\u5916\u4fe1\u606f"))),(0,r.kt)("li",{parentName:"ul"},"NodeContext",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b id, related, connectors"))),(0,r.kt)("li",{parentName:"ul"},"UserComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9644\u52a0\u989d\u5916\u914d\u7f6e\u4fe1\u606f\u7684\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"rules - \u63a7\u5236\u62d6\u62c9\u884c\u4e3a"),(0,r.kt)("li",{parentName:"ul"},"related"),(0,r.kt)("li",{parentName:"ul"},"defaultProps"))),(0,r.kt)("li",{parentName:"ul"},"Node - \u8282\u70b9\u4fe1\u606f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"id"),(0,r.kt)("li",{parentName:"ul"},"data"),(0,r.kt)("li",{parentName:"ul"},"events - selected\u3001dragged\u3001hovered"),(0,r.kt)("li",{parentName:"ul"},"dom"),(0,r.kt)("li",{parentName:"ul"},"related"),(0,r.kt)("li",{parentName:"ul"},"rules - canDrag\u3001canMoveIn\u3001canMoveOut"))),(0,r.kt)("li",{parentName:"ul"},"NodeData - \u8282\u70b9\u6570\u636e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"props"),(0,r.kt)("li",{parentName:"ul"},"type"),(0,r.kt)("li",{parentName:"ul"},"name"),(0,r.kt)("li",{parentName:"ul"},"displayName"),(0,r.kt)("li",{parentName:"ul"},"isCanvas"),(0,r.kt)("li",{parentName:"ul"},"parent"),(0,r.kt)("li",{parentName:"ul"},"index"),(0,r.kt)("li",{parentName:"ul"},"nodes"),(0,r.kt)("li",{parentName:"ul"},"hidden"),(0,r.kt)("li",{parentName:"ul"},"custom"))),(0,r.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316\u4f1a\u6392\u51fa\u9ed8\u8ba4\u7684 type\u3001props\u3001isCanvas\u3001name \u7136\u540e\u5e8f\u5217\u5316\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://craft.js.org/r/docs/acknowledgements/"}),"https://craft.js.org/r/docs/acknowledgements/"))))}b.isMDXComponent=!0}}]);