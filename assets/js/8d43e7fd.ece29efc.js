/*! For license information please see 8d43e7fd.ece29efc.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1247],{57395:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>g});var o=i(11527),l=i(47214);const r={title:"Golang"},s="Golang",t={id:"languages/go/README",title:"Golang",description:"- \u5c3d\u91cf\u907f\u514d cgo",source:"@site/../notes/languages/go/README.md",sourceDirName:"languages/go",slug:"/languages/go/",permalink:"/notes/languages/go/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"Golang"},sidebar:"docs",previous:{title:"\u5b57\u5178",permalink:"/notes/languages/english/dict"},next:{title:"Go Awesome",permalink:"/notes/languages/go/awesome"}},a={},g=[{value:"Install golang under linux",id:"install-golang-under-linux",level:2},{value:"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C",id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c",level:2},{value:"Export function",id:"export-function",level:3},{value:"Inline C code",id:"inline-c-code",level:3},{value:"Reference",id:"reference",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1/Cross compile",id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile",level:2},{value:"xgo",id:"xgo",level:3},{value:"Go &amp; C++",id:"go--c",level:2},{value:"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size",id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size",level:2},{value:"Profiling",id:"profiling",level:2},{value:"Beego",id:"beego",level:2},{value:"Self Update",id:"self-update",level:2},{value:"\u53c2\u8003/Reference",id:"\u53c2\u8003reference",level:2},{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",level:3},{value:"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5",id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5",level:3}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"golang",children:"Golang"}),"\n",(0,o.jsx)(e.admonition,{title:"\u5b9e\u8df5",type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u5c3d\u91cf\u907f\u514d cgo"}),"\n",(0,o.jsx)(e.li,{children:"\u91cd\u590d\u4ee3\u7801\u5c3d\u91cf \u751f\u6210"}),"\n"]})}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"go get"})," \u4e0d\u4f1a\u4e0b\u8f7d\u6e90\u7801\u5230 ",(0,o.jsx)(e.code,{children:"~/go/src"})," \u4e86 - ",(0,o.jsx)(e.a,{href:"https://github.com/golang/go/issues/31529",children:"#31529"})]}),"\n",(0,o.jsxs)(e.li,{children:["c-shared \u4e0d\u652f\u6301 musl - ",(0,o.jsx)(e.a,{href:"https://github.com/golang/go/issues/13492",children:"golang/go#13492"})]}),"\n",(0,o.jsxs)(e.li,{children:["json omitempty \u4e0d\u652f\u6301 struct ",(0,o.jsx)(e.a,{href:"https://github.com/golang/go/issues/11939",children:"golang/go#11939"})]}),"\n"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.ardanlabs.com/blog/2017/06/design-philosophy-on-data-and-semantics.html",children:"Design Philosophy On Data And Semantics"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Websocket ",(0,o.jsx)(e.a,{href:"http://goroutines.com/10m",children:"C10M"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:['Directory and file names that begin with "." or ',(0,o.jsx)(e.code,{children:"_"}),' are ignored by the go tool, as are directories named "testdata".']}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'# \u66f4\u65b0 Go \u8fc7\u540e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6bcf\u4e2a\u9879\u76ee\u90fd\u4f1a\u91cd\u590d\u6784\u5efa, \u5bfc\u81f4\u7f16\u8bd1\u5f88\u6162, \u9488\u5bf9\u5355\u4e2a\u9879\u76ee\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u7684\u65b9\u5f0f\u5904\u7406\n# \u628a\u6240\u6709\u7684\u4f9d\u8d56\u4ece\u65b0\u7f16\u8bd1\ngo build -v 2> /tmp/build-tmp\nsed -i \'$ d\' /tmp/build-tmp\n# \u66f4\u65b0\u6240\u6709\u4f9d\u8d56\ncat /tmp/build-tmp | xargs -n 1 go get -u -v\n\n# go build -v 2> /tmp/build-tmp;sed -i \'$ d\' /tmp/build-tmp;cat /tmp/build-tmp | xargs -n 1 go get -u -v\n# \u91cd\u65b0\u6784\u5efa\u5e76\u7f13\u5b58, \u8fd9\u6837\u4e0b\u6b21\u6784\u5efa\u5c31\u4f1a\u5f88\u5feb\u4e86\ngo build -i -v ./...\n\n# \u8de8\u5e73\u53f0\u7f16\u8bd1\nenv GOOS=linux GOARCH=amd64 go build  -o main-linux-amd64 main.go\n\n# \u79fb\u52a8\u5305\ngo get github.com/golang/tools/cmd/gomvpkg/main.go\ngomvpkg -from github.com/wenerme/before -to github.com/wenerme/after\n\n# \u5c06\u6784\u5efa\u65f6\u95f4\u6dfb\u52a0\u5230\u751f\u6210\u7684\u5185\u5bb9\u4e2d\ngo build -ldflags "-X main.minversion=`date -u +.%Y%m%d.%H%M%S`" service.go\ngo run -ldflags "-X main.xyz=abc" main.go\ngo run -ldflags "-X main.build=`date +%Y%m%d.%H%M%S`" main.go\n\n\n# Guru\ngo get github.com/golang/tools/cmd/guru/main.go\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://mholt.github.io/json-to-go/",children:"https://mholt.github.io/json-to-go/"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://mholt.github.io/curl-to-go/",children:"https://mholt.github.io/curl-to-go/"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"install-golang-under-linux",children:"Install golang under linux"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"GOVERSION=1.7.3\n# \u67e5\u770b\u53ef\u9009\u67b6\u6784 https://storage.googleapis.com/golang/\n# Windows 64 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-amd64.zip\n# Windows 32 \u4f4d https://storage.googleapis.com/golang/go$GOVERSION.windows-386.zip\nwget https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz\n# \u6216\u8005\u4f7f\u7528\u4ee3\u7406\u4e0b\u8f7d\n# https_proxy=socks://127.0.0.1:8888 curl https://storage.googleapis.com/golang/go$GOVERSION.linux-amd64.tar.gz -o go$GOVERSION.linux-amd64.tar.gz\nsudo tar -C /usr/local -xzf go$GOVERSION.linux-amd64.tar.gz\nexport GOROOT=/usr/local/go\nexport PATH=$GOROOT/bin:$PATH\nexport GOPATH=$HOME/go\nexport PATH=$GOPATH/bin:$PATH\n# \u6216\u5c06\u73af\u5883\u53d8\u91cf\u653e\u5230\u542f\u52a8\u811a\u672c\ncd ~\necho 'export GOROOT=/usr/local/go' >> $HOME/.bashrc\necho 'export GOPATH=$HOME/go' >> $HOME/.bashrc\necho 'export PATH=$PATH:$GOROOT/bin:$GOPATH/bin' >> $HOME/.bashrc\nsource $HOME/.bashrc\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"UNINSTALL"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"sudo rm -rf /usr/local/go\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u4e0e-c-\u4ea4\u4e92\u64cd\u4f5cinterop-with-c",children:"\u4e0e C \u4ea4\u4e92\u64cd\u4f5c/Interop with C"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"go install -buildmode=shared -linkshared  std\ngo install  -buildmode=shared -linkshared userownpackage\ngo build -linkshared yourprogram\n"})}),"\n",(0,o.jsx)(e.h3,{id:"export-function",children:"Export function"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'//export SayHello\nfunc SayHello(name string) {\n\tfmt.Printf("Nautilus says: Hello, %s!\\n", name)\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"inline-c-code",children:"Inline C code"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'// typedef int (*intFunc) ();\n//\n// int\n// bridge_int_func(intFunc f)\n// {\n//\t\treturn f();\n// }\n//\n// int fortytwo()\n// {\n//\t    return 42;\n// }\nimport "C"\nimport "fmt"\n\nfunc main() {\n\tf := C.intFunc(C.fortytwo)\n\tfmt.Println(int(C.bridge_int_func(f)))\n\t// Output: 42\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"http://blog.ralch.com/tutorial/golang-sharing-libraries/",children:"golang-sharing-libraries"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://docs.google.com/document/d/1nr-TQHw_er6GOQRsF6T43GGhFDelrAP0NqSS_00RgZQ/edit",children:"Go Execution Mode"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://golang.org/cmd/cgo/",children:"cmd/cgo"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4ea4\u53c9\u7f16\u8bd1cross-compile",children:"\u4ea4\u53c9\u7f16\u8bd1/Cross compile"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"# \u7f16\u8bd1\u4e3a Linux \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=linux GOARCH=amd64 go build -o RedHat/clbeat -v github.com/wenerme/clbeat\n# \u7f16\u8bd1\u4e3a Windows \u53ef\u6267\u884c\u6587\u4ef6\nenv GOOS=windows GOARCH=amd64 go build -o main.exe -v\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u90e8\u5206\u9700\u8981 linux cgo \u7f16\u8bd1\u7684\u53ef\u4f7f\u7528 docker \u955c\u50cf\u5b8c\u6210"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"docker run --rm -v $GOPATH:/go -w /go/src/\u5e94\u7528\u5305 golang go build -i -v\n# \u56e0\u4e3a\u662f\u4f7f\u7528 alphie \u7f16\u8bd1\u7684,\u56e0\u6b64\u6784\u5efa\u7684 docker \u4e2d\u9700\u8981\u6dfb\u52a0\n# RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2\n# \u9700\u8981\u6ce8\u610f https://github.com/golang/go/issues/9344\n"})}),"\n",(0,o.jsx)(e.h3,{id:"xgo",children:"xgo"}),"\n",(0,o.jsx)(e.p,{children:"\u53ef\u4f7f\u7528 xgo \u4e00\u6b21\u6027\u7f16\u8bd1\u591a\u4e2a\u5e73\u53f0\u7684\u53ef\u6267\u884c\u6587\u4ef6,\u53ef\u4f7f\u7528 xgo \u955c\u50cf\u4ee5\u4fbf\u4e8e\u8de8\u5e73\u53f0\u7f16\u8bd1 cgo."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u73af\u5883 ",(0,o.jsx)(e.a,{href:"https://golang.org/doc/install/source#environment",children:"environment"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"go--c",children:"Go & C++"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"http://www.swig.org/Doc3.0/SWIGDocumentation.html#Go",children:"Swig 3.0 Document for GO"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528 Go \u548c C++ \u53ef\u901a\u8fc7 Swig \u5b9e\u73b0,\u4e5f\u53ef\u901a\u8fc7\u5c06 C++ \u7684\u65b9\u6cd5\u5168\u5c01\u88c5\u4e3a C \u65b9\u6cd5,\u7136\u540e\u518d\u901a\u8fc7 Go \u8c03\u7528.\n\u5728\u91cf\u8f83\u5c11\u7684\u65f6\u5019,\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\u7684,\u4f46\u662f\u5982\u679c\u60f3\u8981\u628a\u5927\u91cf\u7684\u63a5\u53e3\u5bfc\u51fa\u5230 Go, \u5e76\u4e14\u4fdd\u6301\u7c7b\u7279\u6027,\u5219\u53ea\u80fd\u4f7f\u7528 Swig."}),"\n",(0,o.jsx)(e.p,{children:"Go \u81ea 1.1 \u5f00\u5c31\u652f\u6301 Swig \u4e86."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/swig/swig/tree/master/Examples/go",children:"Swig Go Example"})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"# \u76f8\u5173\u5e2e\u52a9\nswig -go -help\nswig -go -intgosize 64 -c++ -cgo director.i\ngo install\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"swig -go --help"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"Go Options (available with -go)\n     -cgo                - Generate cgo input files\n     -gccgo              - Generate code for gccgo rather than 6g/8g\n     -go-pkgpath <p>     - Like gccgo -fgo-pkgpath option\n     -go-prefix <p>      - Like gccgo -fgo-prefix option\n     -intgosize <s>      - Set size of Go int type--32 or 64 bits\n     -package <name>     - Set name of the Go package to <name>\n     -use-shlib          - Force use of a shared library\n     -soname <name>      - Set shared library holding C/C++ code to <name>\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u7a0b\u5e8f\u7626\u8eabreduce-binary-size",children:"\u7a0b\u5e8f\u7626\u8eab/Reduce binary size"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'# A Hello world in Golang 1.6 is 2.2M\n\n# 2.1M\nstrip main\n\n# -s\tdisable symbol table\n# -w\tdisable DWARF generation\n# 1.7M\ngo build -ldflags "-s -w"  main.go\n\n# UPX can not compress drawin.amd64\nenv GOOS=linux GOARCH=amd64 go build  -o main.linux.amd64 main.go # 2.2M\nenv GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" -o main.linux.amd64.flag main.go # 1.6M\n\nupx --best main.linux.amd64 # 666K\nupx -9 --ultra-brute main.linux.amd64 # 508K\n\nupx --best main.linux.amd64 # 478K\nupx -9 --ultra-brute main.linux.amd64 # 363K\n'})}),"\n",(0,o.jsx)(e.h2,{id:"profiling",children:"Profiling"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://blog.golang.org/profiling-go-programs",children:"https://blog.golang.org/profiling-go-programs"}),"\n",(0,o.jsx)(e.a,{href:"https://golang.org/pkg/net/http/pprof/",children:"https://golang.org/pkg/net/http/pprof/"})]}),"\n",(0,o.jsx)(e.h2,{id:"beego",children:"Beego"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"go get -u github.com/beego/bee\ngo get -u github.com/astaxie/beego\n\nbee api bapi\ncd bapi\nbee run -downdoc=true -gendoc=true\n"})}),"\n",(0,o.jsx)(e.h2,{id:"self-update",children:"Self Update"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/jpillora/overseer",children:"https://github.com/jpillora/overseer"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u53c2\u8003reference",children:"\u53c2\u8003/Reference"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Articles\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"http://www.infoq.com/news/2016/03/go-patterns",children:"Go Patterns"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Video\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.youtube.com/watch?v=xxDZuPEgbBU",children:"Profiling & Optimizing in Go"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://golang.org/cmd/go/",children:"cmd/go"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://docs.google.com/document/d/1Bz5-UB7g2uPBdOx-rw5t9MxJwkfpx90cqG9AFL0JAYo/edit",children:"vender"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://docs.google.com/document/d/1vrAy9gMpMoS3uaVphB32uVXX4pi-HnNjkMEgyAHX4N4/edit#heading=h.vuko0u3txoew",children:"Summary of Go Generics Discussions"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"http://golang.org/doc/faq",children:"FAQ"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://gist.github.com/lavalamp/4bd23295a9f32706a48f",children:"The Three Go Landmines"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://tip.golang.org/pkg/plugin/",children:"pkg/plugin"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://dev.to/vladimirvivien/calling-go-functions-from-other-languages",children:"Calling Go Functions from Other Languages"})}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u5b66\u4e60\u8d44\u6e90",children:"\u5b66\u4e60\u8d44\u6e90"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://github.com/Unknwon/go-fundamental-programming",children:"\u300aGo \u7f16\u7a0b\u57fa\u7840\u300b"}),"\n\u662f\u4e00\u5957\u9488\u5bf9 Google \u51fa\u54c1\u7684 Go \u8bed\u8a00\u7684\u89c6\u9891\u8bed\u97f3\u6559\u7a0b\uff0c\u4e3b\u8981\u9762\u5411\u65b0\u624b\u7ea7\u522b\u7684\u5b66\u4e60\u8005\u3002"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/mikespook/Learning-Go-zh-cn",children:"Learning-Go"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/Unknwon/go-web-foundation",children:"Go Web \u57fa\u7840"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/Unknwon/go-rock-libraries-showcases",children:"Go \u540d\u5e93\u8bb2\u89e3"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/Unknwon/go-study-index",children:"Go \u8bed\u8a00\u5b66\u4e60\u8d44\u6599\u4e0e\u793e\u533a\u7d22\u5f15"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(e.h3,{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488",children:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u6307\u9488"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u65b9\u6cd5\u63a5\u6536\u4f7f\u7528\u6307\u9488"}),"\n",(0,o.jsx)(e.li,{children:"\u5f53\u6709\u7591\u95ee\u65f6, \u4f7f\u7528\u6307\u9488"}),"\n",(0,o.jsx)(e.li,{children:"\u5f53\u7ed3\u6784\u4f53\u6bd4\u8f83\u5927, \u6216\u4f1a\u53d1\u751f\u53d8\u5316\u65f6\u4f7f\u7528\u6307\u9488"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u4e3a\u679a\u4e3e\u751f\u6210-string-\u65b9\u6cd5",children:"\u4e3a\u679a\u4e3e\u751f\u6210 String \u65b9\u6cd5"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,o.jsx)(e.a,{href:"https://godoc.org/golang.org/x/tools/cmd/stringer",children:"Stringer"})," \u751f\u6210"]}),"\n",(0,o.jsxs)(e.li,{children:["\u751f\u6210\u7684\u9ed8\u8ba4\u6587\u4ef6\u4e3a ",(0,o.jsx)(e.code,{children:"<type>_string.go"})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"// \u4e3a\u7c7b\u578b MyType \u751f\u6210 Stringer\n//go:generate stringer -type=MyType\n// \u8f93\u51fa\u5230 strings.go\n//go:generate stringer -type=MyType -output=strings.go\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},3354:(n,e,i)=>{var o=i(50959),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function g(n,e,i){var o,r={},g=null,c=null;for(o in void 0!==i&&(g=""+i),void 0!==e.key&&(g=""+e.key),void 0!==e.ref&&(c=e.ref),e)s.call(e,o)&&!a.hasOwnProperty(o)&&(r[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps)void 0===r[o]&&(r[o]=e[o]);return{$$typeof:l,type:n,key:g,ref:c,props:r,_owner:t.current}}e.Fragment=r,e.jsx=g,e.jsxs=g},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>s});var o=i(50959);const l={},r=o.createContext(l);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);