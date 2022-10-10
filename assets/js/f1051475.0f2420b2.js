"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52109],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=u(n),c=r,s=k["".concat(d,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},p),{},{components:n})):a.createElement(s,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25237:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&p(t,n,e[n]);if(o)for(var n of o(e))u.call(e,n)&&p(t,n,e[n]);return t};const k={title:"Lua"},c="Lua",s={unversionedId:"languages/lua/README",id:"languages/lua/README",title:"Lua",description:"- lua/lua",source:"@site/../notes/languages/lua/README.md",sourceDirName:"languages/lua",slug:"/languages/lua/",permalink:"/notes/languages/lua/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/lua/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"Lua"},sidebar:"docs",previous:{title:"LLVM",permalink:"/notes/languages/llvm/"},next:{title:"Lua Awesome",permalink:"/notes/languages/lua/awesome"}},N={},g=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"metatable",id:"metatable",level:2},{value:"Helper",id:"helper",level:2}],b={toc:g};function f(t){var e,n=t,{components:r}=n,p=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},b),p),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"lua"}),"Lua"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/lua/lua"}),"lua/lua")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.lua.org/manual/5.4/manual.html"}),"5.4/manual"))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u76f4\u63a5\u4e3a Table \u6dfb\u52a0\u989d\u5916\u65b9\u6cd5, \u56e0\u4e3a\u6bcf\u4e2a Table \u90fd\u6709\u81ea\u5df1\u7684 Metadata"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-lua"}),'-- \u81ea\u5b9a\u4e49\u52a0\u8f7d\u76ee\u5f55\npackage.path = package.path .. \';/data/lua/?.lua\'\nT = require("t")\n\n-- dotfile \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\ndofile("/data/lua/my")\n')),(0,a.kt)("h2",m({},{id:"\u8bed\u6cd5"}),"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-lua"}),"-- \u7c7b\nDog = {}\n\nfunction Dog:new()\n  local newObj = {sound = 'woof'}\n  self.__index = self\n  return setmetatable(newObj, self)\nend\n\nfunction Dog:makeSound()\n  print('I say ' .. self.sound)\nend\n-- : \u7b49\u540c\u4e8e\nfunction Dog.makeSound(self)\n  print('I say ' .. self.sound)\nend\n\n-- \u7ee7\u627f\nLoudDog = Dog:new()\n\n-- \u53ef\u9009\nfunction LoudDog:new()\n  local newObj = {}\n  -- \u521d\u59cb\u5316 newObj\n  self.__index = self\n  return setmetatable(newObj, self)\nend\nfunction LoudDog:makeSound()\n  local s = self.sound .. ' '\n  print(s .. s .. s)\nend\n\n-- mod.lua\nlocal M = {}\nfunction M.func()\n  return true\nend\nreturn M\n\n-- \u4f9d\u8d56\u6a21\u5757\n-- require \u4f1a\u7f13\u5b58\n-- dofile \u4e0d\u4f1a\u7f13\u5b58\n-- loadfile \u4e0d\u6267\u884c\uff0c\u8fd4\u56de\u51fd\u6570 - \u7c7b\u4f3c\u4e8e loadstring\nlocal mod = require('mod')\n-- \u7b49\u4ef7\u4e8e\nlocal mod = (function ()\n  -- mod.lua \u5185\u5bb9\n  local M = {}\n  function M.func()\n    return true\n  end\n  return M\nend)()\n")),(0,a.kt)("h2",m({},{id:"metatable"}),"metatable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5143\u8868 - \u64cd\u4f5c\u91cd\u8f7d")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"method"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"demo"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__add(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a + b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__sub(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a - b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__mul(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a * b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__div(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a / b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__mod(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a % b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__pow(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a ^ b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__unm(a)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"-a")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__concat(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a .. b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__len(a)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"#a")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__eq(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a == b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__lt(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a < b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__le(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a <= b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__index(a, b)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a.b")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fn(tbl,key) or a table")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__newindex(a, b, c)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a.b = c")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__call(a, ...)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"a(...)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__gc")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__close")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__mode")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"__name")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("h2",m({},{id:"helper"}),"Helper"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-lua"}),'---------------------------------------------\n---- Lua Table Helper\n---------------------------------------------\nlocal table_meta = { __index = table }\nfunction T(t)\n    -- returns the table passed as parameter or a new table\n    -- with custom metatable already set to resolve methods in `table`\n    return setmetatable(t or {}, table_meta)\nend\n\ntable.T = T\n\nfunction table.filter(tab, f)\n    if type(f) ~= \'function\' then\n        local _v = f\n        f = function(v, i) return v == _v end\n    end\n\n    local t = T {}\n    for k, v in pairs(tab) do\n        if not f(v) then\n            t[#t + 1] = v\n        end\n    end\n    return t\nend\n\nfunction table.map(tab, fn)\n    for k, v in pairs(tab) do\n        tab[k] = fn(v, k)\n    end\n    return tab\nend\n\nfunction string:split(sep)\n    local sep, fields = sep or ",", T {}\n    local pattern = string.format("([^%s]+)", sep)\n    self:gsub(pattern, function(c) fields[#fields + 1] = c end)\n    return fields\nend\n\nreturn T\n')))}f.isMDXComponent=!0}}]);