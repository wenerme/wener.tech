(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{519:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(7),b=(n(0),n(557)),l={id:"lua",title:"Lua"},c={unversionedId:"languages/lua/lua",id:"languages/lua/lua",isDocsHomePage:!1,title:"Lua",description:"Lua",source:"@site/contents/notes/languages/lua/README.md",slug:"/languages/lua/lua",permalink:"/notes/languages/lua/lua",version:"current",sidebar:"docs",previous:{title:"go-kit",permalink:"/notes/languages/go/go-kit"},next:{title:"Lua \u7248\u672c",permalink:"/notes/languages/lua/lua-version"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"metatable",id:"metatable",children:[]},{value:"Helper",id:"helper",children:[]}],o={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"lua"},"Lua"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/lua/lua"}),"lua/lua")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.lua.org/manual/5.4/manual.html"}),"5.4/manual")),Object(b.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u76f4\u63a5\u4e3a Table \u6dfb\u52a0\u989d\u5916\u65b9\u6cd5, \u56e0\u4e3a\u6bcf\u4e2a Table \u90fd\u6709\u81ea\u5df1\u7684 Metadata"))),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/openresty/luajit2"}),"openresty/luajit2")," - OpenResty \u7684 LuaJIT fork")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- \u81ea\u5b9a\u4e49\u52a0\u8f7d\u76ee\u5f55\npackage.path = package.path .. \';/data/lua/?.lua\'\nT = require("t")\n\n-- dotfile \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\ndofile("/data/lua/my")\n')),Object(b.b)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"-- \u7c7b\nDog = {}\n\nfunction Dog:new()\n  local newObj = {sound = 'woof'}\n  self.__index = self\n  return setmetatable(newObj, self)\nend\n\nfunction Dog:makeSound()\n  print('I say ' .. self.sound)\nend\n-- : \u7b49\u540c\u4e8e\nfunction Dog.makeSound(self)\n  print('I say ' .. self.sound)\nend\n\n-- \u7ee7\u627f\nLoudDog = Dog:new()\n\n-- \u53ef\u9009\nfunction LoudDog:new()\n  local newObj = {}\n  -- \u521d\u59cb\u5316 newObj\n  self.__index = self\n  return setmetatable(newObj, self)\nend\nfunction LoudDog:makeSound()\n  local s = self.sound .. ' '\n  print(s .. s .. s)\nend\n\n-- mod.lua\nlocal M = {}\nfunction M.func()\n  return true\nend\nreturn M\n\n-- \u4f9d\u8d56\u6a21\u5757\n-- require \u4f1a\u7f13\u5b58\n-- dofile \u4e0d\u4f1a\u7f13\u5b58\n-- loadfile \u4e0d\u6267\u884c\uff0c\u8fd4\u56de\u51fd\u6570 - \u7c7b\u4f3c\u4e8e loadstring\nlocal mod = require('mod')\n-- \u7b49\u4ef7\u4e8e\nlocal mod = (function ()\n  -- mod.lua \u5185\u5bb9\n  local M = {}\n  function M.func()\n    return true\n  end\n  return M\nend)()\n")),Object(b.b)("h2",{id:"metatable"},"metatable"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5143\u8868 - \u64cd\u4f5c\u91cd\u8f7d")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"method"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"demo"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__add(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a + b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__sub(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a - b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__mul(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a * b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__div(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a / b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__mod(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a % b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__pow(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a ^ b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__unm(a)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"-a"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__concat(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a .. b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__len(a)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"#a"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__eq(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a == b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__lt(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a < b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__le(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a <= b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__index(a, b)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a.b"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__newindex(a, b, c)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a.b = c"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__call(a, ...)")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"a(...)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__gc")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__close")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__mode")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h2",{id:"helper"},"Helper"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'---------------------------------------------\n---- Lua Table Helper\n---------------------------------------------\nlocal table_meta = { __index = table }\nfunction T(t)\n    -- returns the table passed as parameter or a new table\n    -- with custom metatable already set to resolve methods in `table`\n    return setmetatable(t or {}, table_meta)\nend\n\ntable.T = T\n\nfunction table.filter(tab, f)\n    if type(f) ~= \'function\' then\n        local _v = f\n        f = function(v, i) return v == _v end\n    end\n\n    local t = T {}\n    for k, v in pairs(tab) do\n        if not f(v) then\n            t[#t + 1] = v\n        end\n    end\n    return t\nend\n\nfunction table.map(tab, fn)\n    for k, v in pairs(tab) do\n        tab[k] = fn(v, k)\n    end\n    return tab\nend\n\nfunction string:split(sep)\n    local sep, fields = sep or ",", T {}\n    local pattern = string.format("([^%s]+)", sep)\n    self:gsub(pattern, function(c) fields[#fields + 1] = c end)\n    return fields\nend\n\nreturn T\n')))}d.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=d(n),O=a,j=u["".concat(l,".").concat(O)]||u[O]||p[O]||b;return n?r.a.createElement(j,c(c({ref:t},o),{},{components:n})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);