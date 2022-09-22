"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59495],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return t?o.createElement(d,a(a({ref:n},u),{},{components:t})):o.createElement(d,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34643:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=t(96600),r=t(27279),i=(t(59496),t(49613)),a=["components"],s={id:"go-windows",title:"Golang Windows"},c=void 0,l={unversionedId:"languages/go/go-windows",id:"languages/go/go-windows",title:"Golang Windows",description:"Tips",source:"@site/notes/languages/go/go-windows.md",sourceDirName:"languages/go",slug:"/languages/go/go-windows",permalink:"/notes/languages/go/go-windows",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-windows.md",tags:[],version:"current",frontMatter:{id:"go-windows",title:"Golang Windows"},sidebar:"docs",previous:{title:"Go WASM",permalink:"/notes/languages/go/go-wasm"},next:{title:"Go XML",permalink:"/notes/languages/go/go-xml"}},u={},p=[{value:"Tips",id:"tips",level:2},{value:"code",id:"code",level:2},{value:"is incompatible with i386:x86-64 output .rsrc merge failure: corrupt .rsrc section",id:"is-incompatible-with-i386x86-64-output-rsrc-merge-failure-corrupt-rsrc-section",level:2}],m={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'-ldflags="-H=windowsgui"')," \u53ef\u4ee5\u907f\u514d\u663e\u793a\u63a7\u5236\u53f0"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://studygolang.com/articles/7497"},"golang\u4f7f\u7528execCommand\u8c03\u7528\u7684\u65f6\u5019\u5b50\u8fdb\u7a0b\u5982\u4f55\u6740\u6389\u5904\u7406\u65b9\u6cd5"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Linux \u53ef\u4ee5\u4f7f\u7528 Setpgid"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/go-cmd/cmd"},"go-cmd/cmd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AllenDang/w32"},"AllenDang/w32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/golang.org/x/sys/windows/svc/mgr"},"golang.org/x/sys/windows/svc/mgr"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# CGO \u4ea4\u53c9\u7f16\u8bd1\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CXX=x86_64-w64-mingw32-g++ CC=x86_64-w64-mingw32-gcc go build main.go\n\n# ICON\n# ==========\n# \u751f\u6210 syso\ngo get github.com/akavel/rsrc\n# rsrc [-manifest FILE.exe.manifest] [-ico FILE.ico[,FILE2.ico...]] -o FILE.syso\nrsrc -manifest main.exe.manifest -ico pkg/icon/icon.ico -o cmd/launcher/main.syso\n\n# \u652f\u6301\u7248\u672c\u7b49\u8be6\u7ec6\u4fe1\u606f\ngo get github.com/josephspurrier/goversioninfo/cmd/goversioninfo\ngoversioninfo -icon=pkg/icon/icon.ico -manifest=main.exe.manifest -o cmd/launcher/main.syso\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"main.exe.manifest")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n</assembly>\n')),(0,i.kt)("h2",{id:"code"},"code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/gonutz/ide/w32"\n\nfunc hideConsole() {\n    console := w32.GetConsoleWindow()\n    if console == 0 {\n        return // no console attached\n    }\n    // If this application is the process that created the console window, then\n    // this program was not compiled with the -H=windowsgui flag and on start-up\n    // it created a console along with the main application window. In this case\n    // hide the console window.\n    // See\n    // http://stackoverflow.com/questions/9009333/how-to-check-if-the-program-is-run-from-a-console\n    _, consoleProcID := w32.GetWindowThreadProcessId(console)\n    if w32.GetCurrentProcessId() == consoleProcID {\n        w32.ShowWindowAsync(console, w32.SW_HIDE)\n    }\n}\n')),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"is-incompatible-with-i386x86-64-output-rsrc-merge-failure-corrupt-rsrc-section"},"is incompatible with i386:x86-64 output .rsrc merge failure: corrupt .rsrc section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"li"},"-64")," \u53c2\u6570")))}g.isMDXComponent=!0}}]);