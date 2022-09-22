"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47453],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},76064:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return u}});var r=t(96600),o=t(27279),i=(t(59496),t(49613)),l=["components"],a={slug:"hello-cgo",title:"Hello CGO",tags:["\u5f00\u53d1","Golang"]},c="Hello CGO",m={permalink:"/story/hello-cgo",editUrl:"https://github.com/wenerme/wener/edit/master/../story/2020/2020-05-28-hello-cgo.md",source:"@site/../story/2020/2020-05-28-hello-cgo.md",title:"Hello CGO",description:"Tips",date:"2020-05-28T00:00:00.000Z",formattedDate:"May 28, 2020",tags:[{label:"\u5f00\u53d1",permalink:"/story/tags/\u5f00\u53d1"},{label:"Golang",permalink:"/story/tags/golang"}],readingTime:1.445,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"hello-cgo",title:"Hello CGO",tags:["\u5f00\u53d1","Golang"]},prevItem:{title:"\u4e00\u5468 K3S \u5b66\u4e60\u5fc3\u5f97",permalink:"/story/k3s-one-week"},nextItem:{title:"Wener's APIs",permalink:"/story/wener-apis"}},s={authorsImageUrls:[]},u=[{value:"Tips",id:"tips",level:2},{value:"\u521d\u8bd5",id:"\u521d\u8bd5",level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zchee/b9c99695463d8902cd33"},"\u7c7b\u578b\u8f6c\u6362"))),(0,i.kt)("h2",{id:"\u521d\u8bd5"},"\u521d\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u751f\u6210 libdemo.so libdemo.h\ngo build -buildmode=c-shared -o libdemo.so ./demo.go\n# \u7f16\u8bd1 main\ngo build main.go\n./main\n\n# macos - \u67e5\u770b\u5185\u5bb9\nnm libdemo.so | grep hello -i\n# linux\nnm libdemo.so\n# windows\ndumpbin /EXPORTS libdemo.dll\n\n# windows \u4ea4\u53c9\u7f16\u8bd1 - \u9700\u8981\u5b89\u88c5 mingw\nbrew install mingw-w64\n\n# 32 \u4f4d \u4ea4\u53c9\u7f16\u8bd1\nGOOS=windows GOARCH=386 CGO_ENABLED=1 CC=i686-w64-mingw32-gcc go build -buildmode=c-shared -o libdemo.dll ./demo.go\nGOOS=windows GOARCH=386 CGO_ENABLED=1 CC=i686-w64-mingw32-gcc go build main.go\n\n# macos wine \u4e0d\u652f\u6301 32 \u4f4d - mingw \u7248\u672c\u4f4e\u4e0d\u652f\u6301 64 \u4f4d\n# mac \u4f1a\u51fa\u73b0\u5f02\u5e38 cc1: sorry, unimplemented: 64-bit mode not compiled in\n# \u901a\u8fc7 docker \u7f16\u8bd1\ndocker run --rm -v $HOME/go:/root/go -v $PWD:/host -w /host wener/go:win sh\n\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc go build -buildmode=c-shared -o libdemo.dll ./demo.go\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc go build main.go\n\n# \u56de\u5230 mac \u4f7f\u7528 wine \u6267\u884c\n# wine \u65e0\u6cd5\u5728 macos \u4e0a\u7f16\u8bd1\u5b89\u88c5 - \u7cfb\u7edf\u7248\u672c\u95ee\u9898 - \u9700\u8981\u4f7f\u7528 cask \u5b89\u88c5\nbrew cask install wine-stable\nwine64 main.exe\n\n# wine 4.0 \u521d\u59cb\u5316 dll \u5931\u8d25\n# 0010:fixme:winsock:set_dont_fragment IP_DONTFRAGMENT for IPv4 not supported in this platform\n# 0009:err:module:attach_dlls "libdemo.dll" failed to initialize, aborting\n# 0009:err:module:attach_dlls Initializing dlls for L"Z:\\\\Users\\\\wener\\\\demo\\\\main.exe" failed, status c0000005\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"demo.go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "C"\n\n//export Version\nfunc Version() int32 {\n    return 123\n}\n\n//export Hello\nfunc Hello(name *C.char) *C.char {\n    return C.CString("Hello "+C.GoString(name)+"!")\n}\n\nfunc main() {}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"main.go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n/*\n#cgo CFLAGS: -I.\n#cgo LDFLAGS: -L. -ldemo\n#include "libdemo.h"\n*/\nimport "C"\n\nfunc main() {\n    fmt.Printf("Int %v String %v\\n",C.Version(), C.GoString(C.Hello(C.CString("Wener"))))\n}\n')))}d.isMDXComponent=!0}}]);