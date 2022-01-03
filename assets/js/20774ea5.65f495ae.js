"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53841],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49831:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"ProseMirror"},p=void 0,s={unversionedId:"web/editor/prosemirror",id:"web/editor/prosemirror",title:"ProseMirror",description:"- prosemirror",source:"@site/notes/web/editor/prosemirror.md",sourceDirName:"web/editor",slug:"/web/editor/prosemirror",permalink:"/notes/web/editor/prosemirror",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/editor/prosemirror.md",tags:[],version:"current",frontMatter:{title:"ProseMirror"},sidebar:"docs",previous:{title:"editor.js",permalink:"/notes/web/editor/editorjs"},next:{title:"Slate",permalink:"/notes/web/editor/slate"}},u=[],c={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prosemirror.net/"},"prosemirror"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"low-level rte toolkit"))),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u5316\u7684\u6a21\u578b\u6811"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u578b\u4e0d\u53ef\u53d8"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u534f\u4f5c\u7f16\u8f91"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u578b\u53d7 schema \u9650\u5236 - \u5b9e\u73b0\u81ea\u5b9a\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u578b\u72b6\u6001\u53d8\u5316\u7c7b\u4f3c\u4e8e redux"),(0,a.kt)("li",{parentName:"ul"},"\u6574\u4f53\u6982\u5ff5\u7c7b\u4f3c\u4e8e react+redux"),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001 UI \u72ec\u7acb"))),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5757",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"prosemirror-model - \u5b9a\u4e49\u6587\u6863\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"prosemirror-state - \u7f16\u8f91\u5668\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"prosemirror-view - \u7f16\u8f91\u5668\u72b6\u6001\u7684 UI"),(0,a.kt)("li",{parentName:"ul"},"prosemirror-transform - \u72b6\u6001\u4e8b\u52a1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prosemirror.net/docs/ref/"},"Reference manual"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6838\u5fc3\u6a21\u5757\nyarn add prosemirror-{state,view,model,schema-basic,schema-list}\nyarn add --dev @types/prosemirror-{state,view,model,schema-basic,schema-list}\n# \u6269\u5c55\u6a21\u5757\nyarn add prosemirror-{keymap,history,commands,dropcursor,gapcursor,menu,inputrules}\nyarn add --dev @types/prosemirror-{keymap,history,commands,dropcursor,gapcursor,menu,inputrules}\n")))}m.isMDXComponent=!0}}]);