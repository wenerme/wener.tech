/*! For license information please see f9da9693.dba884d2.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58664],{97286:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=o(11527),i=o(47214);const t={id:"go-windows",title:"Golang Windows"},r="Golang Windows",c={id:"languages/go/go-windows",title:"Golang Windows",description:"Tips",source:"@site/../notes/languages/go/go-windows.md",sourceDirName:"languages/go",slug:"/languages/go/windows",permalink:"/notes/languages/go/windows",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-windows.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1605179031,formattedLastUpdatedAt:"Nov 12, 2020",frontMatter:{id:"go-windows",title:"Golang Windows"},sidebar:"docs",previous:{title:"Go WASM",permalink:"/notes/languages/go/wasm"},next:{title:"Go XML",permalink:"/notes/languages/go/xml"}},l={},a=[{value:"Tips",id:"tips",level:2},{value:"code",id:"code",level:2},{value:"is incompatible with i386 output .rsrc merge failure: corrupt .rsrc section",id:"is-incompatible-with-i386-output-rsrc-merge-failure-corrupt-rsrc-section",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"golang-windows",children:"Golang Windows"}),"\n",(0,s.jsx)(e.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6ce8\u610f\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'-ldflags="-H=windowsgui"'})," \u53ef\u4ee5\u907f\u514d\u663e\u793a\u63a7\u5236\u53f0"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://studygolang.com/articles/7497",children:"golang\u4f7f\u7528execCommand\u8c03\u7528\u7684\u65f6\u5019\u5b50\u8fdb\u7a0b\u5982\u4f55\u6740\u6389\u5904\u7406\u65b9\u6cd5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Linux \u53ef\u4ee5\u4f7f\u7528 Setpgid"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/go-cmd/cmd",children:"go-cmd/cmd"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/AllenDang/w32",children:"AllenDang/w32"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/golang.org/x/sys/windows/svc/mgr",children:"golang.org/x/sys/windows/svc/mgr"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# CGO \u4ea4\u53c9\u7f16\u8bd1\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CXX=x86_64-w64-mingw32-g++ CC=x86_64-w64-mingw32-gcc go build main.go\n\n# ICON\n# ==========\n# \u751f\u6210 syso\ngo get github.com/akavel/rsrc\n# rsrc [-manifest FILE.exe.manifest] [-ico FILE.ico[,FILE2.ico...]] -o FILE.syso\nrsrc -manifest main.exe.manifest -ico pkg/icon/icon.ico -o cmd/launcher/main.syso\n\n# \u652f\u6301\u7248\u672c\u7b49\u8be6\u7ec6\u4fe1\u606f\ngo get github.com/josephspurrier/goversioninfo/cmd/goversioninfo\ngoversioninfo -icon=pkg/icon/icon.ico -manifest=main.exe.manifest -o cmd/launcher/main.syso\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"main.exe.manifest"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n</assembly>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"code",children:"code"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gonutz/ide/w32"\n\nfunc hideConsole() {\n    console := w32.GetConsoleWindow()\n    if console == 0 {\n        return // no console attached\n    }\n    // If this application is the process that created the console window, then\n    // this program was not compiled with the -H=windowsgui flag and on start-up\n    // it created a console along with the main application window. In this case\n    // hide the console window.\n    // See\n    // http://stackoverflow.com/questions/9009333/how-to-check-if-the-program-is-run-from-a-console\n    _, consoleProcID := w32.GetWindowThreadProcessId(console)\n    if w32.GetCurrentProcessId() == consoleProcID {\n        w32.ShowWindowAsync(console, w32.SW_HIDE)\n    }\n}\n'})}),"\n",(0,s.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(e.h2,{id:"is-incompatible-with-i386-output-rsrc-merge-failure-corrupt-rsrc-section",children:"is incompatible with i386:x86-64 output .rsrc merge failure: corrupt .rsrc section"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6dfb\u52a0 ",(0,s.jsx)(e.code,{children:"-64"})," \u53c2\u6570"]}),"\n"]})]})}function g(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},3354:(n,e,o)=>{var s=o(50959),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(n,e,o){var s,t={},a=null,d=null;for(s in void 0!==o&&(a=""+o),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(d=e.ref),e)r.call(e,s)&&!l.hasOwnProperty(s)&&(t[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===t[s]&&(t[s]=e[s]);return{$$typeof:i,type:n,key:a,ref:d,props:t,_owner:c.current}}e.Fragment=t,e.jsx=a,e.jsxs=a},11527:(n,e,o)=>{n.exports=o(3354)},47214:(n,e,o)=>{o.d(e,{Z:()=>c,a:()=>r});var s=o(50959);const i={},t=s.createContext(i);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);