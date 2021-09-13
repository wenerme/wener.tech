"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81746],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return N}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=m(a),N=l,s=k["".concat(p,".").concat(N)]||k[N]||d[N]||r;return a?n.createElement(s,i(i({ref:t},u),{},{components:a})):n.createElement(s,i({ref:t},u))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77885:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={title:"Go Version"},p=void 0,m={unversionedId:"languages/go/go-version",id:"languages/go/go-version",isDocsHomePage:!1,title:"Go Version",description:"- Go-Release-Cycle",source:"@site/notes/languages/go/go-version.md",sourceDirName:"languages/go",slug:"/languages/go/go-version",permalink:"/notes/languages/go/go-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-version.md",tags:[],version:"current",frontMatter:{title:"Go Version"},sidebar:"docs",previous:{title:"Go \u6a21\u677f",permalink:"/notes/languages/go/go-template"},next:{title:"Golang Windows",permalink:"/notes/languages/go/go-windows"}},u=[{value:"1.17",id:"117",children:[]},{value:"1.16",id:"116",children:[]},{value:"1.15",id:"115",children:[]},{value:"1.14",id:"114",children:[]},{value:"1.13",id:"113",children:[]},{value:"1.12",id:"112",children:[]},{value:"1.11",id:"111",children:[]},{value:"1.7",id:"17",children:[]}],d={toc:u};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/Go-Release-Cycle"},"Go-Release-Cycle"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u5e74\u4e24\u4e2a\u7248\u672c - 2 \u6708\uff0c8 \u6708"))),(0,r.kt)("li",{parentName:"ul"},"bugfix backports \u4e00\u4e2a\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"security backports \u4e24\u4e2a\u7248\u672c")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"1.18 (2022-2) \u4f1a\u5305\u542b\u90e8\u5206 generic")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ver"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"macOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Windows"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.18"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit ARM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.17"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-8"),(0,r.kt)("td",{parentName:"tr",align:null},"macOS 10.13 High Sierra"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.16"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.15"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-8"),(0,r.kt)("td",{parentName:"tr",align:null},"macOS 10.12 Sierra"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.14"),(0,r.kt)("td",{parentName:"tr",align:null},"2020-2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.13"),(0,r.kt)("td",{parentName:"tr",align:null},"2019-8"),(0,r.kt)("td",{parentName:"tr",align:null},"macOS 10.11 El Capitan"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows 7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.12"),(0,r.kt)("td",{parentName:"tr",align:null},"2019-2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.11"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-8"),(0,r.kt)("td",{parentName:"tr",align:null},"macOS 10.10 Yosemite"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows 7/NT 4.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.10"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-2"),(0,r.kt)("td",{parentName:"tr",align:null},"OS X 10.8, 10.9"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows XP/Vista")))),(0,r.kt)("h2",{id:"117"},"1.17"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go.mod",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 lazy \u6a21\u5757"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"go mod tidy -go=1.17")," - \u5347\u7ea7 go.mod"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"go mod tidy -compat=1.17")," - \u964d\u7ea7\u517c\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"//Deprecated:")," \u5e9f\u5f03"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&T[N]")," \u8f6c ",(0,r.kt)("inlineCode",{parentName:"li"},"*[N]T")," - slice \u8f6c\u6570\u7ec4\u6307\u9488 - \u957f\u5ea6\u4e0d\u591f\u5219 ",(0,r.kt)("inlineCode",{parentName:"li"},"panic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsafe.Add(ptr, len)")," - \u6307\u9488\u8fd0\u7b97"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsafe.Slice(ptr, len)")," - \u6307\u9488 ",(0,r.kt)("inlineCode",{parentName:"li"},"*T")," \u8f6c slice ",(0,r.kt)("inlineCode",{parentName:"li"},"[]T")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"// +build")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"//go:build")),(0,r.kt)("li",{parentName:"ul"},"go run \u652f\u6301\u7248\u672c - ",(0,r.kt)("inlineCode",{parentName:"li"},"go run example.com/cmd@v1.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtime/cgo.Handle")," - cgo \u548c go \u4e92\u8f6c"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c go \u7248\u672c\u4e0d\u540c vendor/modules.txt \u4f1a\u8bb0\u5f55\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"macOS 10.13 High Sierra"),(0,r.kt)("li",{parentName:"ul"},"windows/arm64"),(0,r.kt)("li",{parentName:"ul"},"openbsd/mips64 cgo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/go1.17"},"go1.17"))),(0,r.kt)("h2",{id:"116"},"1.16"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5165\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"go:embed")),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e io/fs \u5305"),(0,r.kt)("li",{parentName:"ul"},"\u5e9f\u5f03\u5927\u91cf ioutil \u65b9\u6cd5\uff0c\u79fb\u5230 io \u548c os \u5305"),(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"macOS 10.12 Sierra"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 darwin/amd64"),(0,r.kt)("li",{parentName:"ul"},"iOS \u91cd\u547d\u540d\u4e3a ios/arm64 - \u4e4b\u524d\u662f darwin/amd64"),(0,r.kt)("li",{parentName:"ul"},"ios/amd64 - \u7528\u4e8e iOS \u6a21\u62df\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 netbsd/arm64"),(0,r.kt)("li",{parentName:"ul"},"openbsd/mips64 - \u4e0d\u652f\u6301 cgo"),(0,r.kt)("li",{parentName:"ul"},"linux/riscv64 \u652f\u6301 cgo, pie"),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664 GO386=387, \u4f7f\u7528 GO386=softfloat \u652f\u6301 non-SSE2"))),(0,r.kt)("li",{parentName:"ul"},"GOVCS"),(0,r.kt)("li",{parentName:"ul"},"go list - ",(0,r.kt)("inlineCode",{parentName:"li"},"go list -exported -f {{.Export}}")),(0,r.kt)("li",{parentName:"ul"},"windows ",(0,r.kt)("inlineCode",{parentName:"li"},"go build -buildmode=c-shared")," \u751f\u4ea7 Windows ASLR DLLs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"--ldflags=-aslr=false")," \u5173\u95ed")))),(0,r.kt)("h2",{id:"115"},"1.15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f83\u591a\u4f18\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u8f6c unsafe.Pointer \u4e3a uintptr"),(0,r.kt)("li",{parentName:"ul"},"\u5e9f\u5f03 X.509 CommonName - \u4e34\u65f6\u65b9\u6848 x509ignoreCN=0"),(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62 darwin/386"),(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62 darwin/arm"),(0,r.kt)("li",{parentName:"ul"},"windows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ASLR -buildmode=pie"),(0,r.kt)("li",{parentName:"ul"},"Ctrl-C \u4e0d\u518d\u9000\u51fa DLL")))))),(0,r.kt)("h2",{id:"114"},"1.14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go module \u7a33\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"Permit embedding of interfaces with overlapping method sets"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e hash/maphash - \u5c06 bytes \u548c string hash \u4e3a int - \u7528\u4e8e\u5b9e\u73b0 hash table"),(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u505c\u6b62 nacl \u652f\u6301")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u5141\u8bb8\u91cd\u590d\u65b9\u6cd5\ntype ReadWriteCloser interface {\n  io.ReadCloser\n  io.WriteCloser\n}\n")),(0,r.kt)("h2",{id:"113"},"1.13"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 0b,0B \u8868\u793a\u4e8c\u8fdb\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 0o,0O \u8868\u793a\u516b\u8fdb\u5236"),(0,r.kt)("li",{parentName:"ul"},"0x \u652f\u6301\u6d6e\u70b9\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"0x1.0p-1021")),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e0b\u5212\u7ebf\u5206\u5272\u6570\u5b57 ",(0,r.kt)("inlineCode",{parentName:"li"},"1_000")),(0,r.kt)("li",{parentName:"ul"},"shift count \u4e0d\u5728\u8981\u6c42\u662f unsigned"),(0,r.kt)("li",{parentName:"ul"},"go build -trimpath - \u79fb\u9664\u6784\u5efa\u7edd\u5bf9\u8def\u5f84, \u7528\u4e8e\u652f\u6301\u53ef\u590d\u73b0\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"go build -o bin/ ./cmd/...")," - \u76ee\u5f55\u6784\u5efa\u591a\u4e2a\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},"GOPROXY, GOPRIVATE"),(0,r.kt)("li",{parentName:"ul"},"sql.NullTime"),(0,r.kt)("li",{parentName:"ul"},"errors.Unwrap, errors.Is, errors.As"),(0,r.kt)("li",{parentName:"ul"},"TLS 1.3")),(0,r.kt)("h2",{id:"112"},"1.12"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"linux/ppc64 cgo"),(0,r.kt)("li",{parentName:"ul"},"windows/arm")))),(0,r.kt)("h2",{id:"111"},"1.11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"js/wasm")))),(0,r.kt)("h2",{id:"17"},"1.7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"context - ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/pkg/context"},"https://golang.org/pkg/context"))))}k.isMDXComponent=!0}}]);