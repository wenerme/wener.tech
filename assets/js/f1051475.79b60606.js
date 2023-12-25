/*! For license information please see f1051475.79b60606.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52109],{7735:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=a(11527),t=a(47214);const r={title:"Lua"},o="Lua",d={id:"languages/lua/README",title:"Lua",description:"- lua/lua",source:"@site/../notes/languages/lua/README.md",sourceDirName:"languages/lua",slug:"/languages/lua/",permalink:"/notes/languages/lua/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/lua/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"Lua"},sidebar:"docs",previous:{title:"LLVM",permalink:"/notes/languages/llvm/"},next:{title:"Lua Awesome",permalink:"/notes/languages/lua/awesome"}},s={},c=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"metatable",id:"metatable",level:2},{value:"Helper",id:"helper",level:2}];function i(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"lua",children:"Lua"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://github.com/lua/lua",children:"lua/lua"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.lua.org/manual/5.4/manual.html",children:"5.4/manual"})}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"caution",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e0d\u80fd\u76f4\u63a5\u4e3a Table \u6dfb\u52a0\u989d\u5916\u65b9\u6cd5, \u56e0\u4e3a\u6bcf\u4e2a Table \u90fd\u6709\u81ea\u5df1\u7684 Metadata"}),"\n"]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:'-- \u81ea\u5b9a\u4e49\u52a0\u8f7d\u76ee\u5f55\npackage.path = package.path .. \';/data/lua/?.lua\'\nT = require("t")\n\n-- dotfile \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\ndofile("/data/lua/my")\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:"-- \u7c7b\nDog = {}\n\nfunction Dog:new()\n  local newObj = {sound = 'woof'}\n  self.__index = self\n  return setmetatable(newObj, self)\nend\n\nfunction Dog:makeSound()\n  print('I say ' .. self.sound)\nend\n-- : \u7b49\u540c\u4e8e\nfunction Dog.makeSound(self)\n  print('I say ' .. self.sound)\nend\n\n-- \u7ee7\u627f\nLoudDog = Dog:new()\n\n-- \u53ef\u9009\nfunction LoudDog:new()\n  local newObj = {}\n  -- \u521d\u59cb\u5316 newObj\n  self.__index = self\n  return setmetatable(newObj, self)\nend\nfunction LoudDog:makeSound()\n  local s = self.sound .. ' '\n  print(s .. s .. s)\nend\n\n-- mod.lua\nlocal M = {}\nfunction M.func()\n  return true\nend\nreturn M\n\n-- \u4f9d\u8d56\u6a21\u5757\n-- require \u4f1a\u7f13\u5b58\n-- dofile \u4e0d\u4f1a\u7f13\u5b58\n-- loadfile \u4e0d\u6267\u884c\uff0c\u8fd4\u56de\u51fd\u6570 - \u7c7b\u4f3c\u4e8e loadstring\nlocal mod = require('mod')\n-- \u7b49\u4ef7\u4e8e\nlocal mod = (function ()\n  -- mod.lua \u5185\u5bb9\n  local M = {}\n  function M.func()\n    return true\n  end\n  return M\nend)()\n"})}),"\n",(0,l.jsx)(e.h2,{id:"metatable",children:"metatable"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5143\u8868 - \u64cd\u4f5c\u91cd\u8f7d"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["| method                | demo      |\n| --------------------- | --------- | ---------------------- |\n| ",(0,l.jsx)(e.code,{children:"__add(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a + b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__sub(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a - b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__mul(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a * b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__div(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a / b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__mod(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a % b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__pow(a, b)"}),"         | ",(0,l.jsx)(e.code,{children:"a ^ b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__unm(a)"}),"            | ",(0,l.jsx)(e.code,{children:"-a"}),"      |\n| ",(0,l.jsx)(e.code,{children:"__concat(a, b)"}),"      | ",(0,l.jsx)(e.code,{children:"a .. b"}),"  |\n| ",(0,l.jsx)(e.code,{children:"__len(a)"}),"            | ",(0,l.jsx)(e.code,{children:"#a"}),"      |\n| ",(0,l.jsx)(e.code,{children:"__eq(a, b)"}),"          | ",(0,l.jsx)(e.code,{children:"a == b"}),"  |\n| ",(0,l.jsx)(e.code,{children:"__lt(a, b)"}),"          | ",(0,l.jsx)(e.code,{children:"a < b"}),"   |\n| ",(0,l.jsx)(e.code,{children:"__le(a, b)"}),"          | ",(0,l.jsx)(e.code,{children:"a <= b"}),"  |\n| ",(0,l.jsx)(e.code,{children:"__index(a, b)"}),"       | ",(0,l.jsx)(e.code,{children:"a.b"}),"     | fn(tbl,key) or a table |\n| ",(0,l.jsx)(e.code,{children:"__newindex(a, b, c)"})," | ",(0,l.jsx)(e.code,{children:"a.b = c"})," |\n| ",(0,l.jsx)(e.code,{children:"__call(a, ...)"}),"      | ",(0,l.jsx)(e.code,{children:"a(...)"}),"  |\n| ",(0,l.jsx)(e.code,{children:"__gc"}),"                |           |\n| ",(0,l.jsx)(e.code,{children:"__close"}),"             |           |\n| ",(0,l.jsx)(e.code,{children:"__mode"}),"              |           |\n| ",(0,l.jsx)(e.code,{children:"__name"}),"              |           |"]}),"\n",(0,l.jsx)(e.h2,{id:"helper",children:"Helper"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:'---------------------------------------------\n---- Lua Table Helper\n---------------------------------------------\nlocal table_meta = { __index = table }\nfunction T(t)\n    -- returns the table passed as parameter or a new table\n    -- with custom metatable already set to resolve methods in `table`\n    return setmetatable(t or {}, table_meta)\nend\n\ntable.T = T\n\nfunction table.filter(tab, f)\n    if type(f) ~= \'function\' then\n        local _v = f\n        f = function(v, i) return v == _v end\n    end\n\n    local t = T {}\n    for k, v in pairs(tab) do\n        if not f(v) then\n            t[#t + 1] = v\n        end\n    end\n    return t\nend\n\nfunction table.map(tab, fn)\n    for k, v in pairs(tab) do\n        tab[k] = fn(v, k)\n    end\n    return tab\nend\n\nfunction string:split(sep)\n    local sep, fields = sep or ",", T {}\n    local pattern = string.format("([^%s]+)", sep)\n    self:gsub(pattern, function(c) fields[#fields + 1] = c end)\n    return fields\nend\n\nreturn T\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(i,{...n})}):i(n)}},3354:(n,e,a)=>{var l=a(50959),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,a){var l,r={},c=null,i=null;for(l in void 0!==a&&(c=""+a),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(i=e.ref),e)o.call(e,l)&&!s.hasOwnProperty(l)&&(r[l]=e[l]);if(n&&n.defaultProps)for(l in e=n.defaultProps)void 0===r[l]&&(r[l]=e[l]);return{$$typeof:t,type:n,key:c,ref:i,props:r,_owner:d.current}}e.Fragment=r,e.jsx=c,e.jsxs=c},11527:(n,e,a)=>{n.exports=a(3354)},47214:(n,e,a)=>{a.d(e,{Z:()=>d,a:()=>o});var l=a(50959);const t={},r=l.createContext(t);function o(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);