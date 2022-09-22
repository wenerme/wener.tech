"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41879],{49613:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=m(a),k=l,c=g["".concat(u,".").concat(k)]||g[k]||d[k]||r;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},14522:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var n=a(96600),l=a(27279),r=(a(59496),a(49613)),i=["components"],o={title:"Go Build"},u="Go Build",m={unversionedId:"languages/go/go-build",id:"languages/go/go-build",title:"Go Build",description:"- Go package guidelines",source:"@site/../notes/languages/go/go-build.md",sourceDirName:"languages/go",slug:"/languages/go/go-build",permalink:"/notes/languages/go/go-build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/go-build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"Go Build"},sidebar:"docs",previous:{title:"Go Awesome",permalink:"/notes/languages/go/go-awesome"},next:{title:"CGO",permalink:"/notes/languages/go/go-cgo"}},p={},d=[{value:"\u81ea\u5b9a\u4e49\u5e38\u91cf",id:"\u81ea\u5b9a\u4e49\u5e38\u91cf",level:2},{value:"\u9650\u5b9a Build Tag",id:"\u9650\u5b9a-build-tag",level:2},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:2},{value:"\u6784\u5efa\u7f13\u5b58",id:"\u6784\u5efa\u7f13\u5b58",level:2},{value:"musl static",id:"musl-static",level:2},{value:"docker builder",id:"docker-builder",level:2},{value:"GOAMD64",id:"goamd64",level:2},{value:"GOARM",id:"goarm",level:2},{value:"unrecognized command-line option &#39;-marm&#39;",id:"unrecognized-command-line-option--marm",level:2},{value:"arm-none-eabi-gcc: error: unrecognized command-line option &#39;-pthread&#39;",id:"arm-none-eabi-gcc-error-unrecognized-command-line-option--pthread",level:2},{value:"loadinternal: cannot find runtime/cgo",id:"loadinternal-cannot-find-runtimecgo",level:2},{value:"FATAL: kernel too old",id:"fatal-kernel-too-old",level:2},{value:"implicit declaration of function &#39;_beginthread&#39;; did you mean &#39;OpenThread&#39;",id:"implicit-declaration-of-function-_beginthread-did-you-mean-openthread",level:2},{value:"c-shared \u5185\u5b58\u6cc4\u6f0f",id:"c-shared-\u5185\u5b58\u6cc4\u6f0f",level:2}],g={toc:d};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go-build"},"Go Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Go_package_guidelines"},"Go package guidelines")),(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"-trimpath -ldflags '-s -w -extldflags \"-static\"'")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/GoArm"},"GoArm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63"},"go-os-arch.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/PortingPolicy"},"PortingPolicy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/install/source"},"Installing Go from source"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"c-shared",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"musl \u73af\u5883\u4e0d\u652f\u6301\u6784\u5efa c-shared ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/13492"},"golang/go#13492"),"\nruntime: c-shared builds fail with musllibc"),(0,r.kt)("li",{parentName:"ul"},"windows \u4e0b\u6784\u5efa c-shared \u9700\u8981\u4f7f\u7528 TDM-GCC"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5 dlclose, offload c-shared ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/11100"},"#11100"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u5230 VM"))))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"note"),(0,r.kt)("th",{parentName:"tr",align:null},"macOS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOENV"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"~/Library/Application Support/go/env")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOCACHE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"~/Library/Caches/go-build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOMODCACHE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"~/go/pkg/mod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOTOOLDIR"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOMOD"),(0,r.kt)("td",{parentName:"tr",align:null},"go.mod \u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOWORK"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u4ea4\u53c9\u7f16\u8bd1\u5217\u8868\ngo tool dist list\n# \u5305\u542b cgo \u652f\u6301\u60c5\u51b5\ngo tool dist list -json\n\n# \u79fb\u9664 mod \u7f13\u5b58\ngo clean -modcache\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"buildmode"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"build non-main, ",(0,r.kt)("inlineCode",{parentName:"td"},".a"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c-archive"),(0,r.kt)("td",{parentName:"tr",align:null},"main+imports, cgo ",(0,r.kt)("inlineCode",{parentName:"td"},"//export"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c-shared"),(0,r.kt)("td",{parentName:"tr",align:null},"main+imports, cgo ",(0,r.kt)("inlineCode",{parentName:"td"},"//export"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"main+non-main, exec\uff0c ",(0,r.kt)("inlineCode",{parentName:"td"},".a"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exe"),(0,r.kt)("td",{parentName:"tr",align:null},"main+imports,exec, \u5ffd\u7565\u975e main \u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pie"),(0,r.kt)("td",{parentName:"tr",align:null},"main+imports, exec, pie")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"main+imports, plugin, \u5ffd\u7565\u975e main \u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"shared")),(0,r.kt)("td",{parentName:"tr",align:null},"non-main, for -linkshared - module \u51fa\u6765\u540e \u5f02\u5e38")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ldflags"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-w"),(0,r.kt)("td",{parentName:"tr",align:null},"disable DWARF generation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s"),(0,r.kt)("td",{parentName:"tr",align:null},"disable symbol table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-X 'wener.me/gou/build.Version=123'"),(0,r.kt)("td",{parentName:"tr",align:null},"add definition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-linkmode=external"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'-extldflags "$LDFLAGS"'),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"gcflags"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-N"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable optimizations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-l"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable inlining")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"flags"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-modcacherw"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u7684 mod \u7f13\u5b58 rw - \u53ef\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"rm -rf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-trimpath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u73af\u5883\u76f8\u5173\u8def\u5f84\uff0creproduceable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'-ldflags "$GOLDFLAGS"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-mod=readonly"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u52a8 go.mod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-buildmode=pie"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# https://pkg.go.dev/cmd/compile\ngo tool compile -help\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOMAXPROCS"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Max Thread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOGC"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"off \u5173\u95ed GC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOOS"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOARCH"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5e38\u91cf"},"\u81ea\u5b9a\u4e49\u5e38\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nvar Version = "dev"\nvar CommitTime = ""\nvar CommitID = ""\nvar BuildTime = ""\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DEF_FLAGS=\"\n-X 'wener.me/tools/build.Version=$(git describe --tags --abbrev=0)'\n-X 'wener.me/tools/build.CommitID=$(git rev-parse --short HEAD)'\n-X 'wener.me/tools/build.CommitTime=$(git log -1 --format=%cd --date=iso8601)'\n-X 'wener.me/tools/build.BuildTime=$(date --iso-8601=seconds)'\n\"\ngo build -o bin/cli -ldflags \"$DEF_FLAGS\" ./cmd/cli\n")),(0,r.kt)("h2",{id:"\u9650\u5b9a-build-tag"},"\u9650\u5b9a Build Tag"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e Tag",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7248\u672c - \u4f8b\u5982 go1.18"),(0,r.kt)("li",{parentName:"ul"},"cgo"),(0,r.kt)("li",{parentName:"ul"},"gc, gccgo"),(0,r.kt)("li",{parentName:"ul"},"GOOS"),(0,r.kt)("li",{parentName:"ul"},"GOARCH")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"//go:build tag\n//+build tag1,tag2\n\n// \u590d\u6742\u9650\u5b9a\n//go:build (linux && 386) || (darwin && !cgo)\n\npackage main\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'go build -tags "tag1 tag2"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cmd/go#hdr-Build_constraints"},"https://pkg.go.dev/cmd/go#hdr-Build_constraints"))),(0,r.kt)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/GoArm"},"GoArm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63"},"GOOS and GOARCH"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CC_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-gcc CXX_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-g++ RANLIB_FOR_TARGET=/path/to/arm-unknown-linux-gnueabi-ranlib\n\nCC=i586-mingw32-gcc GOOS=windows GOARCH=386 CGO_ENABLED=1 go build -v -o myprogram.exe -ldflags="-extld=$CC"\nCC=x86_64-pc-linux-gcc GOOS=linux GOARCH=amd64 CGO_ENABLED=1 go build -v -o myprogram -ldflags="-extld=$CC"\nCC=arm-linux-gnueabihf-gcc GOOS=linux GOARCH=arm GOARM=6 CGO_ENABLED=1 go build -v -o myprogram -ldflags="-extld=$CC"\n')),(0,r.kt)("h2",{id:"\u6784\u5efa\u7f13\u5b58"},"\u6784\u5efa\u7f13\u5b58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# macOS $HOME/Library/Caches/go-build\n# linux $HOME/.cache/go-build\ngo env GOCACHE\n\n# CI \u7684\u65f6\u5019\u53ef\u4fee\u6539 GOPATH \u66f4\u597d\u5229\u7528\u7f13\u5b58\nexport GOPATH="$PWD/.cache"\nexport PATH="$PWD/.cache/bin:$PATH"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n\n# \u6e05\u9664\u7f13\u5b58\ngo clean -cache\n')),(0,r.kt)("h2",{id:"musl-static"},"musl static"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'-linkmode external -extldflags "-static"\n')),(0,r.kt)("h2",{id:"docker-builder"},"docker builder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus/golang-builder"},"prometheus/golang-builder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"arm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"arm-linux-gnueabi"),(0,r.kt)("li",{parentName:"ul"},"arm64-apple-darwin20.2"),(0,r.kt)("li",{parentName:"ul"},"arm64e-apple-darwin20.2")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull quay.io/prometheus/golang-builder:arm\ndocker run --rm -it --entrypoint bash \\\n  --name go-builder quay.io/prometheus/golang-builder:arm\n")),(0,r.kt)("h1",{id:"ports"},"Ports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/MinimumRequirements"},"MinimumRequirements"))),(0,r.kt)("h2",{id:"goamd64"},"GOAMD64"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"go 1.18 \u65b0\u589e GOAMD64 \u73af\u5883\u53d8\u91cf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 - \u9ed8\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"v2 - CMPXCHG16B, LAHF, SAHF, POPCNT, SSE3, SSE4.1, SSE4.2, SSSE3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2009: Nehalem, Jaguar, Intel Atom Silvermont, QEMU"))),(0,r.kt)("li",{parentName:"ul"},"v3 - AVX, AVX2, BMI1, BMI2, F16C, FMA, LZCNT, MOVBE, OSXSAVE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2015 - Haswell, Excavator"))),(0,r.kt)("li",{parentName:"ul"},"v4 - AVX512F, AVX512BW, AVX512CD, AVX512DQ, AVX512VL"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/MinimumRequirements#amd64"},"GOAMD64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/X86-64#Microarchitecture_levels"},"Microarchitecture levels"))))),(0,r.kt)("h2",{id:"goarm"},"GOARM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ARM \u6d6e\u70b9\u6570\u903b\u8f91")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u57fa\u4e8e\u6784\u5efa\u73af\u5883\u81ea\u52a8\u76d1\u6d4b\uff0c\u76d1\u6d4b\u5931\u8d25\u5219\u4f7f\u7528 6")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GOARM=5: use software floating point; when CPU doesn't have VFP co-processor"),(0,r.kt)("li",{parentName:"ul"},"GOARM=6: use VFPv1 only; default if cross compiling; usually ARM11 or better cores (VFPv2 or better is also supported)"),(0,r.kt)("li",{parentName:"ul"},"GOARM=7: use VFPv3; usually Cortex-A cores")),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"unrecognized-command-line-option--marm"},"unrecognized command-line option '-marm'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CC=arm-linux-gnueabi-gcc\n")),(0,r.kt)("h2",{id:"arm-none-eabi-gcc-error-unrecognized-command-line-option--pthread"},"arm-none-eabi-gcc: error: unrecognized command-line option '-pthread'"),(0,r.kt)("p",null,"\u9700\u8981 arm-linux-eabi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# musl \u4e0d\u5305\u542b pthread \u53ef\u521b\u5efa\u7a7a\u5305\u6ee1\u8db3\n# \u7a7a\u5305\n# ar -rc /usr/lib/libpthread.a\n# \u4ea4\u53c9\u7f16\u8bd1\u73af\u5883\narm-none-eabi-ar -rc /usr/arm-none-eabi/lib/libpthread.a\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gcc-arm-none-eabi",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cortex-M0/M0+/M3/M4, Cortex-R4/R5/R7, Cortex-A"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ebf\u7a0b")))),(0,r.kt)("h2",{id:"loadinternal-cannot-find-runtimecgo"},"loadinternal: cannot find runtime/cgo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLED=1\n")),(0,r.kt)("h2",{id:"fatal-kernel-too-old"},"FATAL: kernel too old"),(0,r.kt)("p",null,"\u6ce8\u610f gcc \u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CC=arm-linux-gnueabi-gcc\necho 'int main(){}' > test.c\n# ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, for GNU/Linux 3.2.0, BuildID[sha1]=a839e1b10daec5d9c348eef8854bb271f8097d34, not stripped\n# \u6ce8\u610f GNU/Linux 3.2.0\n$CC -o test test.c\nfile test\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus/node_exporter/issues/914"},"prometheus/node_exporter#914")),(0,r.kt)("li",{parentName:"ul"},"debian ",(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/unstable/gcc-arm-linux-gnueabi"},"gcc-arm-linux-gnueabi"))),(0,r.kt)("h2",{id:"implicit-declaration-of-function-_beginthread-did-you-mean-openthread"},"implicit declaration of function '","_","beginthread'; did you mean 'OpenThread'"),(0,r.kt)("p",null,"\u6362 C \u7f16\u8bd1\u5668, \u5c1d\u8bd5\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jmeubank/tdm-gcc"},"TDM-GCC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/c/TDM-GCC-64/bin:$PATH\nLC_ALL=c gcc -v\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/InstallFromSource"},"https://github.com/golang/go/wiki/InstallFromSource")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/12029"},"https://github.com/golang/go/issues/12029"))),(0,r.kt)("h2",{id:"c-shared-\u5185\u5b58\u6cc4\u6f0f"},"c-shared \u5185\u5b58\u6cc4\u6f0f"),(0,r.kt)("p",null,"\u4f7f\u7528 c-shared \u7684\u65b9\u5f0f\u5f88\u96be\u80fd\u4fdd\u8bc1\u6700\u540e valgrind \u4e0d\u663e\u793a\u6709\u6ea2\u51fa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/30490"},"https://github.com/golang/go/issues/30490"))))}k.isMDXComponent=!0}}]);