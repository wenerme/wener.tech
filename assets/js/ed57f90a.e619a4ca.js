"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"CUE"},u=void 0,c={unversionedId:"languages/cue",id:"languages/cue",title:"CUE",description:"- cue-lang/cue",source:"@site/notes/languages/cue.md",sourceDirName:"languages",slug:"/languages/cue",permalink:"/notes/languages/cue",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/cue.md",tags:[],version:"current",frontMatter:{title:"CUE"},sidebar:"docs",previous:{title:"pkg-config",permalink:"/notes/languages/c/pkg-config"},next:{title:"Diagram",permalink:"/notes/languages/diagram/"}},p={},s=[],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cue-lang/cue"},"cue-lang/cue"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,o.kt)("li",{parentName:"ul"},"Configuration Language"),(0,o.kt)("li",{parentName:"ul"},"Superset of JSON"))),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cue-lang/cue/blob/master/doc/ref/impl.md"},"impl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/pub-tools-public-publication-data/pdf/43438.pdf"},"https://storage.googleapis.com/pub-tools-public-publication-data/pdf/43438.pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cuelang.org/play/"},"https://cuelang.org/play/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cuetorials.com/"},"https://cuetorials.com/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/"},"The Configuration Complexity Curse")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.cedriccharly.com/post/20210523-how-cue-wins/"},"How CUE Wins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mikehadlow.blogspot.com/2012/05/configuration-complexity-clock.html"},"The Configuration Complexity Clock"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hard Coded"),(0,o.kt)("li",{parentName:"ul"},"Config Values"),(0,o.kt)("li",{parentName:"ul"},"Rules Engine"),(0,o.kt)("li",{parentName:"ul"},"DSL"))))),(0,o.kt)("li",{parentName:"ul"},"used by dagger")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},'// Go \u5b9e\u73b0\uff0c\u5bfc\u5165\u4f9d\u8d56\nimport (\n  "strings"\n)\n\n// \u7c7b\u578b\nBob: {\n  Name: string\n  Age: int\n}\n\n\n// JSON \u8bed\u6cd5\n{\n  "Bob": {\n    "Name": "Bob Smith",\n    "Age": 42\n  }\n}\n\n// \u7b49\u540c\nBob: Name: "Bob Smith"\n\n// \u7c7b\u578b\u5b9a\u4e49\n#Person: {\n  Name: string\n  Email?: string\n  Age?: int & >0 & <140\n}\nWener: #Person & {\n  // \u4f7f\u7528\u5bfc\u5165\n  Name: strings.ToTitle("wener"),\n  Age: 18\n}\n')))}g.isMDXComponent=!0}}]);