"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63307],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,k=m["".concat(o,".").concat(g)]||m[g]||c[g]||i;return n?t.createElement(k,l(l({ref:r},s),{},{components:n})):t.createElement(k,l({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33840:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"Parsing Expression Grammars",sidebar_label:"PEG"},o="PEG",u={unversionedId:"languages/parser/peg",id:"languages/parser/peg",title:"Parsing Expression Grammars",description:"- PEG \u7c7b\u4f3c CFG\uff0c\u4f46\u4e0d\u5b58\u5728\u6b67\u4e49",source:"@site/notes/languages/parser/peg.md",sourceDirName:"languages/parser",slug:"/languages/parser/peg",permalink:"/notes/languages/parser/peg",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/parser/peg.md",tags:[],version:"current",frontMatter:{title:"Parsing Expression Grammars",sidebar_label:"PEG"},sidebar:"docs",previous:{title:"\u8bed\u6cd5\u89e3\u6790",permalink:"/notes/languages/parser/parsing"},next:{title:"peggy",permalink:"/notes/languages/parser/peggy"}},s={},c=[{value:"\u8bed\u6cd5\u5185\u5bb9",id:"\u8bed\u6cd5\u5185\u5bb9",level:2},{value:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7",id:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7",level:2},{value:"Packrat",id:"packrat",level:2}],m={toc:c};function g(e){var r=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"peg"},"PEG"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PEG \u7c7b\u4f3c CFG\uff0c\u4f46\u4e0d\u5b58\u5728\u6b67\u4e49",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u56de\u6eaf\u6267\u884c - \u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"a|ab")," \u53ea\u4f1a\u5339\u914d\u7b2c\u4e00\u4e2a"))),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5316",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Packrat"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Parsing_expression_grammar"},"Parsing expression grammar"))),(0,i.kt)("h2",{id:"\u8bed\u6cd5\u5185\u5bb9"},"\u8bed\u6cd5\u5185\u5bb9"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c regex"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684 PEG \u5b9e\u73b0\u8bed\u6cd5\u7565\u6709\u4e0d\u540c\uff0c\u4f46\u6838\u5fc3\u5185\u5bb9\u76f8\u540c"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bcd\u7ec4 - ",(0,i.kt)("inlineCode",{parentName:"li"},"a")),(0,i.kt)("li",{parentName:"ul"},"\u8303\u56f4 - ",(0,i.kt)("inlineCode",{parentName:"li"},"a{1,3}")),(0,i.kt)("li",{parentName:"ul"},"\u91cd\u590d - ",(0,i.kt)("inlineCode",{parentName:"li"},"a+"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"a*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"a?")),(0,i.kt)("li",{parentName:"ul"},"\u5e8f\u5217 - ",(0,i.kt)("inlineCode",{parentName:"li"},"a b")),(0,i.kt)("li",{parentName:"ul"},"\u6216 - ",(0,i.kt)("inlineCode",{parentName:"li"},"a|b")),(0,i.kt)("li",{parentName:"ul"},"Lookahead - ",(0,i.kt)("inlineCode",{parentName:"li"},"(=b)a")),(0,i.kt)("li",{parentName:"ul"},"Negative Lookahead - ",(0,i.kt)("inlineCode",{parentName:"li"},"(!=b)a"))),(0,i.kt)("h2",{id:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7"},"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7"),(0,i.kt)("p",null,"\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"!true || !false && (true ^ false)")),(0,i.kt)("p",null,"\u5b9a\u4e49\u8bed\u6cd5\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pegjs"},'Exp = AndExp\nAndExp = OrExp ( _ "&&" _ AndExp)?\nOrExp = ExOrExp ( _ "||" _ OrExp)?\nExOrExp = PrefixExp ( _ "^" _ ExOrExp)?\nPrefixExp = PrimaryExp / _ "!" _ PrefixExp\nPrimaryExp = "(" _ Exp _ ")" / Boolean\nBoolean = "true" / "false"\n\n_ "whitespace" = [ \\t\\n\\r]*\n')),(0,i.kt)("p",null,"\u8be5\u9884\u53d1\u80fd\u6b63\u786e\u5904\u7406\u5404\u64cd\u4f5c\u7b26\u7684\u4f18\u5148\u7ea7\uff0c\u5728\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"LLR")," \u4e2d\u4e00\u822c\u8fd9\u6837\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pegjs"},'Exp = AndExp\nAndExp = a:OrExp ( _ "&&" _ b:AndExp)? {return b?[a,"AND",b]:a}\nOrExp = a:ExOrExp ( _ "||" _ b:OrExp)? {return b?[a,"OR",b]:a}\nExOrExp = a:PrefixExp ( _ "^" _ b:ExOrExp)? {return b?[a,"XOR",b]:a}\nPrefixExp = PrimaryExp / _ "!" _ PrefixExp\nPrimaryExp = "(" _ Exp _ ")" / Boolean\nBoolean = "true" / "false"\n\n_ "whitespace" = [ \\t\\n\\r]*\n')),(0,i.kt)("h2",{id:"packrat"},"Packrat"))}g.isMDXComponent=!0}}]);