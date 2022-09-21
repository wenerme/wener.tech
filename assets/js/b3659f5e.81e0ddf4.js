"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11048],{76890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(96600),o=r(27279),i=(r(59496),r(3905)),a=["components"],l={title:"SocketIO"},c=void 0,p={unversionedId:"web/script/lib/socketio",id:"web/script/lib/socketio",title:"SocketIO",description:"- https://admin.socket.io/",source:"@site/notes/web/script/lib/socketio.md",sourceDirName:"web/script/lib",slug:"/web/script/lib/socketio",permalink:"/notes/web/script/lib/socketio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/lib/socketio.md",tags:[],version:"current",frontMatter:{title:"SocketIO"},sidebar:"docs",previous:{title:"PopperJS",permalink:"/notes/web/script/lib/popperjs"},next:{title:"SystemJS",permalink:"/notes/web/script/lib/systemjs"}},s={},u=[{value:"namespace vs room",id:"namespace-vs-room",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://admin.socket.io/"},"https://admin.socket.io/"))),(0,i.kt)("h2",{id:"namespace-vs-room"},"namespace vs room"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76f8\u540c\u70b9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\u548c\u623f\u95f4\u90fd\u662f\u5728\u670d\u52a1\u7aef\u521b\u5efa"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u53ea\u4f1a\u5c06\u6d88\u606f\u5206\u53d1\u7ed9\u8fde\u63a5\u5230\u4e86\u76f8\u5e94\u547d\u540d\u7a7a\u95f4\u548c\u623f\u95f4\u7684\u5ba2\u6237\u7aef")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u70b9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e00\u4e2a\u8fde\u63a5,\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u623f\u95f4\u5171\u4eab\u4e00\u4e2a\u8fde\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53ef\u4efb\u610f\u79bb\u5f00\u623f\u95f4,\u4f46\u8981\u79bb\u5f00\u547d\u540d\u7a7a\u95f4\u53ea\u80fd\u65ad\u5f00\u8fde\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53ea\u80fd\u8fde\u63a5\u5230\u670d\u52a1\u5668\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u670d\u52a1\u5668\u7aef\u8fdb\u5165\u623f\u95f4,\u4f46\u5b9e\u73b0\u4e00\u4e2a\u4ece\u5ba2\u6237\u7aef\u63a7\u5236\u670d\u52a1\u7aef\u52a0\u5165\u623f\u95f4\u7684\u547d\u4ee4\u5f88\u7b80\u5355."),(0,i.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\u53ef\u8fdb\u884c\u6388\u6743\u9a8c\u8bc1"),(0,i.kt)("li",{parentName:"ul"},"\u623f\u95f4\u867d\u7136\u4e0d\u652f\u6301\u6388\u6743\u9a8c\u8bc1,\u4f46\u81ea\u5b9a\u4e49\u4e00\u4e2a\u6388\u6743\u9a8c\u8bc1\u8fd8\u662f\u5f88\u5bb9\u6613\u7684."),(0,i.kt)("li",{parentName:"ul"},"\u623f\u95f4\u662f\u547d\u540d\u7a7a\u95f4\u7684\u4e00\u90e8\u5206,\u9ed8\u8ba4\u4e3a 'global' \u547d\u540d\u7a7a\u95f4")),(0,i.kt)("p",null,"\u56e0\u6b64\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\u6700\u597d\u4f7f\u7528\u670d\u52a1\u5668\u4e0a\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684,\u800c\u623f\u95f4\u4e3b\u8981\u7528\u4e8e\u52a8\u6001\u521b\u5efa\u7684."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://stackoverflow.com/questions/10930286"},"http://stackoverflow.com/questions/10930286")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://divillysausages.com/2015/07/12/an-intro-to-socket-io/"},"https://divillysausages.com/2015/07/12/an-intro-to-socket-io/"))))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,k=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);