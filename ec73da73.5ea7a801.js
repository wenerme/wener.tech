(window.webpackJsonp=window.webpackJsonp||[]).push([[971],{1044:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),c=(t(0),t(1114)),l={title:"V Reference"},i={unversionedId:"languages/v/v-reference",id:"languages/v/v-reference",isDocsHomePage:!1,title:"V Reference",description:"\u5185\u5b58\u7ba1\u7406",source:"@site/notes/languages/v/v-reference.md",slug:"/languages/v/v-reference",permalink:"/notes/languages/v/v-reference",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/v/v-reference.md",version:"current",sidebar:"docs",previous:{title:"Vlang FAQ",permalink:"/notes/languages/v/v-faq"},next:{title:"Zig",permalink:"/notes/languages/zig/README"}},o=[{value:"\u5185\u5b58\u7ba1\u7406",id:"\u5185\u5b58\u7ba1\u7406",children:[]},{value:"C \u4ea4\u4e92",id:"c-\u4ea4\u4e92",children:[{value:"C \u8f6c V",id:"c-\u8f6c-v",children:[]}]},{value:"\u6c47\u7f16",id:"\u6c47\u7f16",children:[]}],b={toc:o};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u5185\u5b58\u7ba1\u7406"},"\u5185\u5b58\u7ba1\u7406"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"-autofree - v0.3 \u9ed8\u8ba4\u5f00\u542f - \u4e0d\u5f00\u542f\u53ef\u80fd\u4f1a\u6cc4\u6f0f\u5185\u5b58"),Object(c.b)("li",{parentName:"ul"},"-manualfree, ",Object(c.b)("inlineCode",{parentName:"li"},"[manualfree]")),Object(c.b)("li",{parentName:"ul"},"-prealloc")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-vlang"},"struct MyType {}\n\n[unsafe]\nfn (data &MyType) free() {\n    // \u81ea\u5b9a\u4e49 free \u903b\u8f91\n}\n")),Object(c.b)("h2",{id:"c-\u4ea4\u4e92"},"C \u4ea4\u4e92"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"v"),Object(c.b)("th",{parentName:"tr",align:null},"c"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"voidptr"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"void*"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"&byte"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"byte*"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"&char"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"char*"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"&&char"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"char**"))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-vlang"},'// -I,-L,-l,-D\n#flag -lsqlite3\n#include "sqlite3.h"\n\n// \u73af\u5883\u533a\u5206\n#flag linux -lsdl2\n\n// \u4f7f\u7528 pkgconfig \u751f\u6210 flag - PKG_CONFIG_PATH\n#pkgconfig r_core\n#pkgconfig --cflags --libs r_core\n\nstruct C.sqlite3 {\n}\n\nstruct C.sqlite3_stmt {\n}\n\ntype FnSqlite3Callback = fn (voidptr, int, &&char, &&char) int\nfn C.sqlite3_open(&char, &&C.sqlite3) int\nfn C.sqlite3_close(&C.sqlite3) int\n\n\nfn main(){\n  // null \u7ed3\u5c3e\u5b57\u7b26\u4e32\u8f6c v string - \u5b57\u7b26\u4e32\u53ef\u80fd\u9700\u8981 dup \u4f7f\u7528 cstring_to_vstring(cstring)\n  unsafe { &char(cstring).vstring() }\n  // \u5df2\u77e5\u957f\u5ea6\u8f6c string\n  unsafe { &char(cstring).vstring_with_len(len) }\n  // windows wide \u8f6c\u5b57\u7b26\u4e32 string_from_wide(&u16(cwidestring))\n}\n')),Object(c.b)("p",null,"\u53ef\u76f4\u63a5\u5305\u542b c \u4ee3\u7801, \u5728 v.mod \u6dfb\u52a0"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'#flag -I @VMODROOT/c\n#flag @VMODROOT/c/implementation.o\n#include "header.h"\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"@VMODROOT \u4f1a\u88ab\u81ea\u52a8\u66ff\u6362\u4e3a\u6700\u8fd1\u7684 parent module")),Object(c.b)("h3",{id:"c-\u8f6c-v"},"C \u8f6c V"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"v translate test.c\n# \u751f\u6210 wrapper\nv wrapper c_code/libsodium/src/libsodium\n")),Object(c.b)("h2",{id:"\u6c47\u7f16"},"\u6c47\u7f16"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-v"},"a := 100\nb := 20\nmut c := 0\nasm amd64 {\n    mov eax, a\n    add eax, b\n    mov c, eax\n    ; =r (c) as c // output\n    ; r (a) as a // input\n      r (b) as b\n}\nprintln('a: $a') // 100\nprintln('b: $b') // 20\nprintln('c: $c') // 120\n")))}u.isMDXComponent=!0},1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),u=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return t?a.a.createElement(m,i(i({ref:n},b),{},{components:t})):a.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);