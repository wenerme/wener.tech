(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=o(a),s=n,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return a?r.a.createElement(O,u(u({ref:t},c),{},{components:a})):r.a.createElement(O,u({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},426:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),l=(a(0),a(1172)),i={title:"Lua \u7248\u672c"},u={unversionedId:"languages/lua/lua-version",id:"languages/lua/lua-version",isDocsHomePage:!1,title:"Lua \u7248\u672c",description:"- LuaJIT \u505c\u7559\u5728 5.1",source:"@site/notes/languages/lua/lua-version.md",slug:"/languages/lua/lua-version",permalink:"/notes/languages/lua/lua-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/lua/lua-version.md",version:"current",sidebar:"docs",previous:{title:"Lua Awesome",permalink:"/notes/languages/lua/lua-awesome"},next:{title:"rust",permalink:"/notes/languages/rust/rust"}},b=[{value:"5.4",id:"54",children:[]},{value:"5.3",id:"53",children:[]}],c={toc:b};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"LuaJIT \u505c\u7559\u5728 5.1")),Object(l.b)("h2",{id:"54"},"5.4"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u7684 GC"),Object(l.b)("li",{parentName:"ul"},"math.random \u65b0\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u544a\u8b66\u7cfb\u7edf"),Object(l.b)("li",{parentName:"ul"},"utf8 codepoint \u652f\u6301\u5230 2^31"),Object(l.b)("li",{parentName:"ul"},"allocation function allowed to fail when shrinking a memory block"),Object(l.b)("li",{parentName:"ul"},"debug information about function arguments and returns"))),Object(l.b)("li",{parentName:"ul"},"\u8bed\u8a00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"const \u53d8\u91cf"),Object(l.b)("li",{parentName:"ul"},"userdata can have multiple user values"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u7684 for \u6570\u5b57\u5faa\u73af\u8bed\u6cd5"),Object(l.b)("li",{parentName:"ul"},"to-be-closed variables"))),Object(l.b)("li",{parentName:"ul"},"\u5e93",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"string.gmatch \u53c2\u6570 init \u53ef\u9009"),Object(l.b)("li",{parentName:"ul"},"string.format \u65b0\u589e ",Object(l.b)("inlineCode",{parentName:"li"},"%p")),Object(l.b)("li",{parentName:"ul"},"string-to-number coercions moved to the string library"))),Object(l.b)("li",{parentName:"ul"},"C API",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e\u51fd\u6570 lua_resetthread coroutine.close"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.lua.org/manual/5.4/readme.html#changes"},"Changes"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23686297"},"HN"))))))),Object(l.b)("h2",{id:"53"},"5.3"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6574\u6570\u9ed8\u8ba4 64 \u4f4d"),Object(l.b)("li",{parentName:"ul"},"official support for 32-bit numbers"),Object(l.b)("li",{parentName:"ul"},"bitwise operators"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u7840 utf-8 \u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"functions for packing and unpacking values"))),Object(l.b)("li",{parentName:"ul"},"\u8bed\u8a00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"userdata can have any Lua value as uservalue"),Object(l.b)("li",{parentName:"ul"},"floor division"),Object(l.b)("li",{parentName:"ul"},"more flexible rules for some metamethods"))),Object(l.b)("li",{parentName:"ul"},"Libraries",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ipairs and the table library respect metamethods"),Object(l.b)("li",{parentName:"ul"},"strip option in string.dump"),Object(l.b)("li",{parentName:"ul"},"table library respects metamethods"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u65b9\u6cd5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"table.move"),Object(l.b)("li",{parentName:"ul"},"string.pack"),Object(l.b)("li",{parentName:"ul"},"string.unpack"),Object(l.b)("li",{parentName:"ul"},"string.packsize"))))),Object(l.b)("li",{parentName:"ul"},"C API",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"simpler API for continuation functions in C"),Object(l.b)("li",{parentName:"ul"},"lua_gettable and similar functions return type of resulted value"),Object(l.b)("li",{parentName:"ul"},"strip option in lua_dump"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u65b9\u6cd5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"lua_geti"),Object(l.b)("li",{parentName:"ul"},"lua_seti"),Object(l.b)("li",{parentName:"ul"},"lua_isyieldable"),Object(l.b)("li",{parentName:"ul"},"lua_numbertointeger"),Object(l.b)("li",{parentName:"ul"},"lua_rotate"),Object(l.b)("li",{parentName:"ul"},"lua_stringtonumber"))),Object(l.b)("li",{parentName:"ul"},"Lua standalone interpreter"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8ba1\u7b97\u5668 - \u4e0d\u518d\u9700\u8981\u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"=")," \u524d\u7f00"),Object(l.b)("li",{parentName:"ul"},"arg table available to all code"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.lua.org/manual/5.3/readme.html#changes"},"Changes"))))))}o.isMDXComponent=!0}}]);