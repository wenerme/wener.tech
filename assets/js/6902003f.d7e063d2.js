/*! For license information please see 6902003f.d7e063d2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7012],{37154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=t(11527),r=t(47214);const c={title:"C Build"},a="C Build",s={id:"languages/c/c-build",title:"C Build",description:"\u7f16\u8bd1\u8fc7\u7a0b",source:"@site/../notes/languages/c/c-build.md",sourceDirName:"languages/c",slug:"/languages/c/build",permalink:"/notes/languages/c/build",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/c/c-build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1625032306,formattedLastUpdatedAt:"Jun 30, 2021",frontMatter:{title:"C Build"},sidebar:"docs",previous:{title:"C Awesome",permalink:"/notes/languages/c/awesome"},next:{title:"C Cookbook",permalink:"/notes/languages/c/cookbook"}},i={},l=[{value:"\u7f16\u8bd1\u8fc7\u7a0b",id:"\u7f16\u8bd1\u8fc7\u7a0b",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"c-build",children:"C Build"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gcc main.c -static\n\n\necho 'int main(){}' > test.c\ngcc -o test test.c\nfile test\n\nCC=arm-linux-gnueabi-gcc\necho 'int main(){}' > test.c\n# ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, for GNU/Linux 3.2.0, BuildID[sha1]=a839e1b10daec5d9c348eef8854bb271f8097d34, not stripped\n# \u6ce8\u610f GNU/Linux 3.2.0\n$CC -o test test.c\nfile test\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u7f16\u8bd1\u8fc7\u7a0b",children:"\u7f16\u8bd1\u8fc7\u7a0b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"          |\n          |----\x3e  Input is Source file(.c)\n          |\n          V\n+=================+\n|                 |\n| C Preprocessor  |\n|                 |\n+=================+\n          |\n          | ---\x3e Pure C file ( comd:cc -E <file.name> )\n          |\n          V\n+=================+\n|                 |\n| Lexical Analyzer|\n|                 |\n+-----------------+\n|                 |\n| Syntax Analyzer |\n|                 |\n+-----------------+\n|                 |\n| Semantic Analyze|\n|                 |\n+-----------------+\n|                 |\n| Pre Optimization|\n|                 |\n+-----------------+\n|                 |\n| Code generation |\n|                 |\n+-----------------+\n|                 |\n| Post Optimize   |\n|                 |\n+=================+\n          |\n          |---\x3e  Assembly code (comd: cc -S <file.name> )\n          |\n          V\n+=================+\n|                 |\n|   Assembler     |\n|                 |\n+=================+\n          |\n          |---\x3e  Object file (.obj) (comd: cc -c <file.name>)\n          |\n          V\n+=================+\n|     Linker      |\n|      and        |\n|     loader      |\n+=================+\n          |\n          |---\x3e  Executable (.Exe/a.out) (com:cc <file.name> )\n          |\n          V\nExecutable file(a.out)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3354:(e,n,t)=>{var o=t(50959),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,c={},l=null,u=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,o)&&!i.hasOwnProperty(o)&&(c[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===c[o]&&(c[o]=n[o]);return{$$typeof:r,type:e,key:l,ref:u,props:c,_owner:s.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(50959);const r={},c=o.createContext(r);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);