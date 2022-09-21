"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59444],{28095:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return g},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var a=n(96600),o=n(27279),l=(n(59496),n(3905)),r=["components"],i={title:"Golang"},g=void 0,u={unversionedId:"languages/go/README",id:"languages/go/README",title:"Golang",description:"- \u5c3d\u91cf\u907f\u514d cgo",source:"@site/notes/languages/go/README.md",sourceDirName:"languages/go",slug:"/languages/go/",permalink:"/notes/languages/go/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/README.md",tags:[],version:"current",frontMatter:{title:"Golang"},sidebar:"docs",previous:{title:"\u5b57\u5178",permalink:"/notes/languages/english/dict"},next:{title:"Go Awesome",permalink:"/notes/languages/go/go-awesome"}},p={},s=[{value:"Install golang under linux",id:"install-golang-under-linux",level:2},{value:"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C",id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c",level:2},{value:"Export function",id:"export-function",level:3},{value:"Inline C code",id:"inline-c-code",level:3},{value:"Reference",id:"reference",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1/Cross compile",id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile",level:2},{value:"xgo",id:"xgo",level:3},{value:"Go &amp; C++",id:"go--c",level:2},{value:"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size",id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size",level:2},{value:"Profiling",id:"profiling",level:2},{value:"Beego",id:"beego",level:2},{value:"Self Update",id:"self-update",level:2},{value:"\u53c2\u8003/Reference",id:"\u53c2\u8003reference",level:2},{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",level:3},{value:"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5",id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5",level:3}],m={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u5b9e\u8df5",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u907f\u514d cgo"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u590d\u4ee3\u7801\u5c3d\u91cf \u751f\u6210"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"go get")," \u4e0d\u4f1a\u4e0b\u8f7d\u6e90\u7801\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"~/go/src")," \u4e86 - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/31529"},"#31529")),(0,l.kt)("li",{parentName:"ul"},"c-shared \u4e0d\u652f\u6301 musl - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/13492"},"golang/go#13492")),(0,l.kt)("li",{parentName:"ul"},"json omitempty \u4e0d\u652f\u6301 struct ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/11939"},"golang/go#11939")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.ardanlabs.com/blog/2017/06/design-philosophy-on-data-and-semantics.html"},"Design Philosophy On Data And Semantics"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Websocket ",(0,l.kt)("a",{parentName:"li",href:"http://goroutines.com/10m"},"C10M"))),(0,l.kt)("p",null,'Directory and file names that begin with "." or ',(0,l.kt)("inlineCode",{parentName:"p"},"_"),' are ignored by the go tool, as are directories named "testdata".'),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u66f4\u65b0 Go \u8fc7\u540e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6bcf\u4e2a\u9879\u76ee\u90fd\u4f1a\u91cd\u590d\u6784\u5efa, \u5bfc\u81f4\u7f16\u8bd1\u5f88\u6162, \u9488\u5bf9\u5355\u4e2a\u9879\u76ee\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u65b9\u5f0f\u5904\u7406\n# \u628a\u6240\u6709\u7684\u4f9d\u8d56\u4ece\u65b0\u7f16\u8bd1\ngo build -v 2> /tmp/build-tmp\nsed -i \'$ d\' /tmp/build-tmp\n# \u66f4\u65b0\u6240\u6709\u4f9d\u8d56\ncat /tmp/build-tmp | xargs -n 1 go get -u -v\n\n# go build -v 2> /tmp/build-tmp;sed -i \'$ d\' /tmp/build-tmp;cat /tmp/build-tmp | xargs -n 1 go get -u -v\n# \u91cd\u65b0\u6784\u5efa\u5e76\u7f13\u5b58, \u8fd9\u6837\u4e0b\u6b21\u6784\u5efa\u5c31\u4f1a\u5f88\u5feb\u4e86\ngo build -i -v ./...\n\n# \u8de8\u5e73\u53f0\u7f16\u8bd1\nenv GOOS=linux GOARCH=amd64 go build  -o main-linux-amd64 main.go\n\n# \u79fb\u52a8\u5305\ngo get github.com/golang/tools/cmd/gomvpkg/main.go\ngomvpkg -from github.com/wenerme/before -to github.com/wenerme/after\n\n# \u5c06\u6784\u5efa\u65f6\u95f4\u6dfb\u52a0\u5230\u751f\u6210\u7684\u5185\u5bb9\u4e2d\ngo build -ldflags "-X main.minversion=`date -u +.%Y%m%d.%H%M%S`" service.go\ngo run -ldflags "-X main.xyz=abc" main.go\ngo run -ldflags "-X main.build=`date +%Y%m%d.%H%M%S`" main.go\n\n\n# Guru\ngo get github.com/golang/tools/cmd/guru/main.go\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mholt.github.io/json-to-go/"},"https://mholt.github.io/json-to-go/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mholt.github.io/curl-to-go/"},"https://mholt.github.io/curl-to-go/"))),(0,l.kt)("h2",{id:"install-golang-under-linux"},"Install golang under linux"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GOVERSION=1.7.3\n# \u67e5\u770b\u53ef\u9009\u67b6\u6784 https://storage.googleapis.com/golang/\n# Windows 64 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-amd64.zip\n# Windows 32 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-386.zip\nwget https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz\n# \u6216\u8005\u4f7f\u7528\u4ee3\u7406\u4e0b\u8f7d\n# https_proxy=socks://127.0.0.1:8888 curl https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz -o go$GOVERSION.linux-amd64.tar.gz\nsudo tar -C /usr/local -xzf go$GOVERSION.linux-amd64.tar.gz\nexport GOROOT=/usr/local/go\nexport PATH=$GOROOT/bin:$PATH\nexport GOPATH=$HOME/go\nexport PATH=$GOPATH/bin:$PATH\n# \u6216\u5c06\u73af\u5883\u53d8\u91cf\u653e\u5230\u542f\u52a8\u811a\u672c\ncd ~\necho 'export GOROOT=/usr/local/go' >> $HOME/.bashrc\necho 'export GOPATH=$HOME/go' >> $HOME/.bashrc\necho 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> $HOME/.bashrc\nsource $HOME/.bashrc\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UNINSTALL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo rm -rf /usr/local/go\n")),(0,l.kt)("h2",{id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c"},"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install -buildmode=shared -linkshared  std\ngo install  -buildmode=shared -linkshared userownpackage\ngo build -linkshared yourprogram\n")),(0,l.kt)("h3",{id:"export-function"},"Export function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'//export SayHello\nfunc SayHello(name string) {\n    fmt.Printf("Nautilus says: Hello, %s!\\n", name)\n}\n')),(0,l.kt)("h3",{id:"inline-c-code"},"Inline C code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// typedef int (*intFunc) ();\n//\n// int\n// bridge_int_func(intFunc f)\n// {\n//      return f();\n// }\n//\n// int fortytwo()\n// {\n//      return 42;\n// }\nimport "C"\nimport "fmt"\n\nfunc main() {\n    f := C.intFunc(C.fortytwo)\n    fmt.Println(int(C.bridge_int_func(f)))\n    // Output: 42\n}\n')),(0,l.kt)("h3",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://blog.ralch.com/tutorial/golang-sharing-libraries/"},"golang-sharing-libraries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1nr-TQHw_er6GOQRsF6T43GGhFDelrAP0NqSS_00RgZQ/edit"},"Go Execution Mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://golang.org/cmd/cgo/"},"cmd/cgo"))),(0,l.kt)("h2",{id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile"},"\u4ea4\u53c9\u7f16\u8bd1/Cross compile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\u4e3a Linux \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=linux GOARCH=amd64 go build -o RedHat/clbeat -v github.com/wenerme/clbeat\n# \u7f16\u8bd1\u4e3a Windows \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=windows GOARCH=amd64 go build -o main.exe -v\n")),(0,l.kt)("p",null,"\u90e8\u5206\u9700\u8981 linux cgo \u7f16\u8bd1\u7684\u53ef\u4f7f\u7528 docker \u955c\u50cf\u5b8c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $GOPATH:/go -w /go/src/\u5e94\u7528\u5305 golang go build -i -v\n# \u56e0\u4e3a\u662f\u4f7f\u7528 alphie \u7f16\u8bd1\u7684,\u56e0\u6b64\u6784\u5efa\u7684 docker \u4e2d\u9700\u8981\u6dfb\u52a0\n# RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2\n# \u9700\u8981\u6ce8\u610f https://github.com/golang/go/issues/9344\n")),(0,l.kt)("h3",{id:"xgo"},"xgo"),(0,l.kt)("p",null,"\u53ef\u4f7f\u7528 xgo \u4e00\u6b21\u6027\u7f16\u8bd1\u591a\u4e2a\u5e73\u53f0\u7684\u53ef\u6267\u884c\u6587\u4ef6,\u53ef\u4f7f\u7528 xgo \u955c\u50cf\u4ee5\u4fbf\u4e8e\u8de8\u5e73\u53f0\u7f16\u8bd1 cgo."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u73af\u5883 ",(0,l.kt)("a",{parentName:"li",href:"https://golang.org/doc/install/source#environment"},"environment"))),(0,l.kt)("h2",{id:"go--c"},"Go & C++"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.swig.org/Doc3.0/SWIGDocumentation.html#Go"},"Swig 3.0 Document for GO"))),(0,l.kt)("p",null,"\u4f7f\u7528 Go \u548c C++ \u53ef\u901a\u8fc7 Swig \u5b9e\u73b0,\u4e5f\u53ef\u901a\u8fc7\u5c06 C++ \u7684\u65b9\u6cd5\u5168\u5c01\u88c5\u4e3a C \u65b9\u6cd5,\u7136\u540e\u518d\u901a\u8fc7 Go \u8c03\u7528.\n\u5728\u91cf\u8f83\u5c11\u7684\u65f6\u5019,\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\u7684,\u4f46\u662f\u5982\u679c\u60f3\u8981\u628a\u5927\u91cf\u7684\u63a5\u53e3\u5bfc\u51fa\u5230 Go, \u5e76\u4e14\u4fdd\u6301\u7c7b\u7279\u6027,\u5219\u53ea\u80fd\u4f7f\u7528 Swig."),(0,l.kt)("p",null,"Go \u81ea 1.1 \u5f00\u5c31\u652f\u6301 Swig \u4e86."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/swig/swig/tree/master/Examples/go"},"Swig Go Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u76f8\u5173\u5e2e\u52a9\nswig -go -help\nswig -go -intgosize 64 -c++ -cgo director.i\ngo install\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"swig -go --help")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Go Options (available with -go)\n     -cgo                - Generate cgo input files\n     -gccgo              - Generate code for gccgo rather than 6g/8g\n     -go-pkgpath <p>     - Like gccgo -fgo-pkgpath option\n     -go-prefix <p>      - Like gccgo -fgo-prefix option\n     -intgosize <s>      - Set size of Go int type--32 or 64 bits\n     -package <name>     - Set name of the Go package to <name>\n     -use-shlib          - Force use of a shared library\n     -soname <name>      - Set shared library holding C/C++ code to <name>\n")),(0,l.kt)("h2",{id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size"},"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# A Hello world in Golang 1.6 is 2.2M\n\n# 2.1M\nstrip main\n\n# -s    disable symbol table\n# -w    disable DWARF generation\n# 1.7M\ngo build -ldflags "-s -w"  main.go\n\n# UPX can not compress drawin.amd64\nenv GOOS=linux GOARCH=amd64 go build  -o main.linux.amd64 main.go # 2.2M\nenv GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" -o main.linux.amd64.flag main.go # 1.6M\n\nupx --best main.linux.amd64 # 666K\nupx -9 --ultra-brute main.linux.amd64 # 508K\n\nupx --best main.linux.amd64 # 478K\nupx -9 --ultra-brute main.linux.amd64 # 363K\n')),(0,l.kt)("h2",{id:"profiling"},"Profiling"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.golang.org/profiling-go-programs"},"https://blog.golang.org/profiling-go-programs"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/pprof/"},"https://golang.org/pkg/net/http/pprof/")),(0,l.kt)("h2",{id:"beego"},"Beego"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/beego/bee\ngo get -u github.com/astaxie/beego\n\nbee api bapi\ncd bapi\nbee run -downdoc=true -gendoc=true\n")),(0,l.kt)("h2",{id:"self-update"},"Self Update"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jpillora/overseer"},"https://github.com/jpillora/overseer"))),(0,l.kt)("h2",{id:"\u53c2\u8003reference"},"\u53c2\u8003/Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Articles",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.infoq.com/news/2016/03/go-patterns"},"Go Patterns")))),(0,l.kt)("li",{parentName:"ul"},"Video",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=xxDZuPEgbBU"},"Profiling & Optimizing in Go")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://golang.org/cmd/go/"},"cmd/go")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1Bz5-UB7g2uPBdOx-rw5t9MxJwkfpx90cqG9AFL0JAYo/edit"},"vender")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1vrAy9gMpMoS3uaVphB32uVXX4pi-HnNjkMEgyAHX4N4/edit#heading=h.vuko0u3txoew"},"Summary of Go Generics Discussions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://golang.org/doc/faq"},"FAQ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/lavalamp/4bd23295a9f32706a48f"},"The Three Go Landmines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tip.golang.org/pkg/plugin/"},"pkg/plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.to/vladimirvivien/calling-go-functions-from-other-languages"},"Calling Go Functions from Other Languages"))),(0,l.kt)("h3",{id:"\u5b66\u4e60\u8d44\u6e90"},"\u5b66\u4e60\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unknwon/go-fundamental-programming"},"\u300aGo \u7f16\u7a0b\u57fa\u7840\u300b"),"\n\u662f\u4e00\u5957\u9488\u5bf9 Google \u51fa\u54c1\u7684 Go \u8bed\u8a00\u7684\u89c6\u9891\u8bed\u97f3\u6559\u7a0b\uff0c\u4e3b\u8981\u9762\u5411\u65b0\u624b\u7ea7\u522b\u7684\u5b66\u4e60\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mikespook/Learning-Go-zh-cn"},"Learning-Go")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unknwon/go-web-foundation"},"Go Web \u57fa\u7840")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unknwon/go-rock-libraries-showcases"},"Go \u540d\u5e93\u8bb2\u89e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Unknwon/go-study-index"},"Go \u8bed\u8a00\u5b66\u4e60\u8d44\u6599\u4e0e\u793e\u533a\u7d22\u5f15"))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u63a5\u6536\u4f7f\u7528\u6307\u9488"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709\u7591\u95ee\u65f6, \u4f7f\u7528\u6307\u9488"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u7ed3\u6784\u4f53\u6bd4\u8f83\u5927, \u6216\u4f1a\u53d1\u751f\u53d8\u5316\u65f6\u4f7f\u7528\u6307\u9488")),(0,l.kt)("h3",{id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5"},"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://godoc.org/golang.org/x/tools/cmd/stringer"},"Stringer")," \u751f\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684\u9ed8\u8ba4\u6587\u4ef6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"<type>_string.go"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u4e3a\u7c7b\u578b MyType \u751f\u6210 Stringer\n//go:generate stringer -type=MyType\n// \u8f93\u51fa\u5230 strings.go\n//go:generate stringer -type=MyType -output=strings.go\n")))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=a.createContext({}),u=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,d=m["".concat(g,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(d,r(r({ref:t},s),{},{components:n})):a.createElement(d,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=s;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);