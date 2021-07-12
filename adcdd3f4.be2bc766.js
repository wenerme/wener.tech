(window.webpackJsonp=window.webpackJsonp||[]).push([[722],{1129:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,g=p["".concat(a,".").concat(b)]||p[b]||m[b]||i;return t?r.a.createElement(g,c(c({ref:n},l),{},{components:t})):r.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},795:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),i=(t(0),t(1129)),a={id:"go-windows",title:"Golang Windows"},c={unversionedId:"languages/go/go-windows",id:"languages/go/go-windows",isDocsHomePage:!1,title:"Golang Windows",description:"Tips",source:"@site/notes/languages/go/go-windows.md",slug:"/languages/go/go-windows",permalink:"/notes/languages/go/go-windows",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-windows.md",version:"current",sidebar:"docs",previous:{title:"Go Version",permalink:"/notes/languages/go/go-version"},next:{title:"Go XML",permalink:"/notes/languages/go/go-xml"}},s=[{value:"Tips",id:"tips",children:[]},{value:"code",id:"code",children:[]},{value:"is incompatible with i386:x86-64 output .rsrc merge failure: corrupt .rsrc section",id:"is-incompatible-with-i386x86-64-output-rsrc-merge-failure-corrupt-rsrc-section",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'-ldflags="-H=windowsgui"')," \u53ef\u4ee5\u907f\u514d\u663e\u793a\u63a7\u5236\u53f0"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://studygolang.com/articles/7497"},"golang\u4f7f\u7528execCommand\u8c03\u7528\u7684\u65f6\u5019\u5b50\u8fdb\u7a0b\u5982\u4f55\u6740\u6389\u5904\u7406\u65b9\u6cd5"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Linux \u53ef\u4ee5\u4f7f\u7528 Setpgid"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/go-cmd/cmd"},"go-cmd/cmd")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/AllenDang/w32"},"AllenDang/w32")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pkg.go.dev/golang.org/x/sys/windows/svc/mgr"},"golang.org/x/sys/windows/svc/mgr"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# CGO \u4ea4\u53c9\u7f16\u8bd1\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CXX=x86_64-w64-mingw32-g++ CC=x86_64-w64-mingw32-gcc go build main.go\n\n# ICON\n# ==========\n# \u751f\u6210 syso\ngo get github.com/akavel/rsrc\n# rsrc [-manifest FILE.exe.manifest] [-ico FILE.ico[,FILE2.ico...]] -o FILE.syso\nrsrc -manifest main.exe.manifest -ico pkg/icon/icon.ico -o cmd/launcher/main.syso\n\n# \u652f\u6301\u7248\u672c\u7b49\u8be6\u7ec6\u4fe1\u606f\ngo get github.com/josephspurrier/goversioninfo/cmd/goversioninfo\ngoversioninfo -icon=pkg/icon/icon.ico -manifest=main.exe.manifest -o cmd/launcher/main.syso\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"main.exe.manifest")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n</assembly>\n')),Object(i.b)("h2",{id:"code"},"code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'import "github.com/gonutz/ide/w32"\n\nfunc hideConsole() {\n    console := w32.GetConsoleWindow()\n    if console == 0 {\n        return // no console attached\n    }\n    // If this application is the process that created the console window, then\n    // this program was not compiled with the -H=windowsgui flag and on start-up\n    // it created a console along with the main application window. In this case\n    // hide the console window.\n    // See\n    // http://stackoverflow.com/questions/9009333/how-to-check-if-the-program-is-run-from-a-console\n    _, consoleProcID := w32.GetWindowThreadProcessId(console)\n    if w32.GetCurrentProcessId() == consoleProcID {\n        w32.ShowWindowAsync(console, w32.SW_HIDE)\n    }\n}\n')),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"is-incompatible-with-i386x86-64-output-rsrc-merge-failure-corrupt-rsrc-section"},"is incompatible with i386:x86-64 output .rsrc merge failure: corrupt .rsrc section"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"-64")," \u53c2\u6570")))}u.isMDXComponent=!0}}]);