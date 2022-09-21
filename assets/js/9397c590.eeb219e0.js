"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19502],{89442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(96600),l=n(27279),r=(n(59496),n(3905)),o=["components"],i={title:"Go FAQ",tags:["FAQ"]},s=void 0,p={unversionedId:"languages/go/go-faq",id:"languages/go/go-faq",title:"Go FAQ",description:"- golang/go#9200",source:"@site/notes/languages/go/go-faq.md",sourceDirName:"languages/go",slug:"/languages/go/go-faq",permalink:"/notes/languages/go/go-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"Go FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Debugging",permalink:"/notes/languages/go/go-debug"},next:{title:"\u6cdb\u578b",permalink:"/notes/languages/go/go-generic"}},m={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u6307\u5b9a\u7248\u672c Golang \u73af\u5883",id:"\u5b89\u88c5\u6307\u5b9a\u7248\u672c-golang-\u73af\u5883",level:2},{value:"iota",id:"iota",level:2},{value:"GOVCS disallows using git for public",id:"govcs-disallows-using-git-for-public",level:2},{value:"go: cannot find GOROOT directory: /usr/local/go",id:"go-cannot-find-goroot-directory-usrlocalgo",level:2},{value:"golang.org/x",id:"golangorgx",level:2},{value:"\u67e5\u627e\u7528\u5230\u4e86 cgo \u7684\u6a21\u5757",id:"\u67e5\u627e\u7528\u5230\u4e86-cgo-\u7684\u6a21\u5757",level:2},{value:"JSON string to int",id:"json-string-to-int",level:2},{value:"sql null",id:"sql-null",level:2},{value:"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488",id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488",level:2},{value:"text/template vs html/template",id:"texttemplate-vs-htmltemplate",level:2},{value:"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790",id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790",level:2},{value:"Windows \u5b89\u88c5",id:"windows-\u5b89\u88c5",level:2},{value:"reflect.Value.Interface: cannot return value obtained from unexported field or method",id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method",level:2},{value:"bufio.Reader vs bufio.Scanner",id:"bufioreader-vs-bufioscanner",level:2},{value:"pq vs pgx",id:"pq-vs-pgx",level:2},{value:"gc vs gccgo",id:"gc-vs-gccgo",level:2},{value:"compile: version does not match go tool version",id:"compile-version-does-not-match-go-tool-version",level:2},{value:"Cipher CBC / ECB / CFB / GCM",id:"cipher-cbc--ecb--cfb--gcm",level:2},{value:"memstats.gc_sys undefined (type mstats has no field or method gc_sys)",id:"memstatsgc_sys-undefined-type-mstats-has-no-field-or-method-gc_sys",level:2},{value:"go.sum h1",id:"gosum-h1",level:2},{value:"GODEBUG",id:"godebug",level:2},{value:"\u5e38\u89c1\u5927\u5199\u5b57\u6bb5\u540d\u5b57",id:"\u5e38\u89c1\u5927\u5199\u5b57\u6bb5\u540d\u5b57",level:2},{value:"regexp",id:"regexp",level:2},{value:"go build static",id:"go-build-static",level:2},{value:"struct \u53ef\u6bd4\u8f83",id:"struct-\u53ef\u6bd4\u8f83",level:2},{value:"\u5224\u65ad int \u7c7b\u578b",id:"\u5224\u65ad-int-\u7c7b\u578b",level:2},{value:"\u5185\u5b58\u6a21\u578b",id:"\u5185\u5b58\u6a21\u578b",level:2}],g={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/9200"},"golang/go#9200"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"html/template JS \u4e0d\u80fd\u5305\u542b `","`","`"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/13492"},"golang/go#13492"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"musl \u4e0d\u652f\u6301 c-shared"),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a c-shared \u7528\u5230\u4e86 glibc \u6269\u5c55"),(0,r.kt)("li",{parentName:"ul"},"initial-exec TLS resolves to dynamic definition"))))),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"https://go.dev/dl/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mirrors.ustc.edu.cn/golang/"},"https://mirrors.ustc.edu.cn/golang/"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Windows go1.17.6.windows-amd64.zip\n# macOS go1.18.3.darwin-amd64.tar.gz\ncurl -LO https://mirrors.ustc.edu.cn/golang/go1.17.6.windows-amd64.zip\nmkdir -p ~/sdk\nunzip go1.17.6.windows-amd64.zip -d ~/sdk\nmv ~/sdk/go ~/sdk/go1.17.6\n~/sdk/go1.17.6/bin/go version\n\nexport PATH=$HOME/sdk/go1.17.6/bin:$PATH\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u6307\u5b9a\u7248\u672c-golang-\u73af\u5883"},"\u5b89\u88c5\u6307\u5b9a\u7248\u672c Golang \u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4f4d\u7f6e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"H"),(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mi",{parentName:"mrow"},"M"),(0,r.kt)("mi",{parentName:"mrow"},"E"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"o")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"HOME/sdk/go")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"OME"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"))))),"VERSION/go$VERSION.darwin-amd64.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u903b\u8f91 ","[golang.org/dl/internal/version/version.go]","\uff08",(0,r.kt)("a",{parentName:"li",href:"https://cs.opensource.google/go/dl/+/1eec6072:internal/version/version.go"},"https://cs.opensource.google/go/dl/+/1eec6072:internal/version/version.go")),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u4e0d\u4f1a\u5220\u9664\u538b\u7f29\u5305\uff0c\u53ef\u81ea\u5df1\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"tip \u6700\u65b0 latest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0b\u8f7d\u5730\u5740 ",(0,r.kt)("inlineCode",{parentName:"li"},'"https://dl.google.com/go/" + version + "." + goos + "-" + arch + ext'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7d tip \u7248\u672c\ngo install golang.org/dl/gotip@latest\ngotip download\n\n# \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\n# \u4ece dl.google.com \u4e0b\u8f7d\n# \u9ed8\u8ba4\u5b89\u88c5\u5230 ~/sdk/\n# \u5176\u4ed6\u7248\u672c \u4f8b\u5982 go1.18rc1\ngo install golang.org/dl/go1.18@latest\ngo1.18 download\ngo1.18 env GOROOT\n\uff5e/sdk/go1.18/bin/go env\n\n# \u5b89\u88c5\u5230\u522b\u7684\u5730\u65b9\nHOME=/opt ~/go/bin/go1.18 download\n/opt/sdk/go1.18/bin/go env\n\n# \u4ea4\u53c9\u7f16\u8bd1\nmkdir work && cd work\ngo mod init work\ngo get -u golang.org/dl/go1.18\nGOOS=linux go build -o go1.18_linux golang.org/dl/go1.18@latest\n\n# AlpineLinux \u57fa\u7840\u4f9d\u8d56\napk add libc6-compat gcompat\n# AlpineLinux CGO \u4f9d\u8d56\napk add gcc musl-dev\n\n# \u6ce8\u610f\u8bbe\u7f6e GOROOT - \u9ed8\u8ba4 /usr/go\nexport GOROOT=/opt/sdk/go1.18\n\nexport PATH="$GOROOT/bin:$HOME/go/bin:$PATH"\n')),(0,r.kt)("h2",{id:"iota"},"iota"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wiktionary.org/wiki/iota#Etymology"},"https://en.wiktionary.org/wiki/iota#Etymology"))),(0,r.kt)("h2",{id:"govcs-disallows-using-git-for-public"},"GOVCS disallows using git for public"),(0,r.kt)("p",null,"\u6dfb\u52a0 GOVCS \u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"public:git|hg,private:all")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5168\u90e8\u5141\u8bb8\nGOVCS=*:all go get github.com/wenerme/apki\n# \u9650\u5b9a\nGOVCS=github.com:git,*:off go get github.com/wenerme/apki\n")),(0,r.kt)("h2",{id:"go-cannot-find-goroot-directory-usrlocalgo"},"go: cannot find GOROOT directory: /usr/local/go"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece\u6e90\u7801\u6784\u5efa\u9ed8\u8ba4 GOROOT_FINAL=/usr/local/go"),(0,r.kt)("li",{parentName:"ul"},"AlpineLinux \u9ed8\u8ba4\u4e3a /usr/lib/go",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u884c\u6784\u5efa\u53ef\u4fee\u6539 - ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/-/blob/master/community/go/APKBUILD#L135"},"alpinelinix/go/APKBUILD")))),(0,r.kt)("li",{parentName:"ul"},"bazel \u5b89\u88c5\u7684 Go \u4e5f\u6709\u8fd9\u4e2a\u95ee\u9898")),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u76ee\u5f55 - \u63a8\u8350\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /opt/sdk/go1.18beta1 /usr/local/go\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u4fee\u6539 GOROOT \u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GOROOT=/opt/sdk/go1.18beta1 /opt/sdk/go1.18beta1/bin/go env\n# \u5199\u5165\u540e\u4fbf\u4e0d\u4f1a\u62a5\u9519\nGOROOT=/opt/sdk/go1.18beta1 /opt/sdk/go1.18beta1/bin/go env -w GOROOT=/opt/sdk/go1.18beta1\n/opt/sdk/go1.18beta1/bin/go env\n")),(0,r.kt)("h2",{id:"golangorgx"},"golang.org/x"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"x/net",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/net"},"https://github.com/golang/net")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cs.opensource.google/go/x/net"},"https://cs.opensource.google/go/x/net"))))),(0,r.kt)("h2",{id:"\u67e5\u627e\u7528\u5230\u4e86-cgo-\u7684\u6a21\u5757"},"\u67e5\u627e\u7528\u5230\u4e86 cgo \u7684\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'go list -f "{{if .CgoFiles}}{{.ImportPath}}{{end}}" $(go list -f "{{.ImportPath}}{{range .Deps}} {{.}}{{end}}" ./...)\n')),(0,r.kt)("h2",{id:"json-string-to-int"},"JSON string to int"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json.Number - encode \u4fdd\u7559 number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'json:",string"')," - encode \u4f1a\u8f6c string")),(0,r.kt)("h2",{id:"sql-null"},"sql null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528\u6307\u9488",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u3001\u65e0\u5916\u90e8\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"json\u3001mapstructure \u80fd\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u903b\u8f91\u590d\u6742\u4e00\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5bfc\u81f4\u672a\u9884\u671f\u7684\u4fee\u6539"))),(0,r.kt)("li",{parentName:"ul"},"sql.NullType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u903b\u8f91\u6e05\u6670\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u6307\u9488\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"json\u3001mapstructure \u65e0\u6cd5\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u9700\u8981\u81ea\u5b9a\u4e49 Hook"))),(0,r.kt)("li",{parentName:"ul"},"null.Type - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/guregu/null"},"guregu/null"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5916\u90e8\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4fbf\u6377\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 json"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u65e0\u6cd5\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u9700\u8981\u81ea\u5b9a\u4e49 Hook")))),(0,r.kt)("h2",{id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488"},"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528\u6307\u9488 - \u76f4\u63a5\u4f7f\u7528 Struct \u4f1a\u66f4\u5feb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1f \u4f7f\u7528\u6307\u9488\u4f1a\u7528\u5230\u5168\u5c40\u5806\uff0c\u4f7f\u7528 struct \u526f\u672c\u53ef\u76f4\u63a5\u653e\u5230\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5230\u5806\u5c31\u4f1a\u6d89\u53ca\u5230 GC"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Pointer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5bc6\u5ea6\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u526f\u672c\u573a\u666f"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Struct",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bc6\u5ea6\u9ad8\u4f46\u4e0d\u9700\u8981\u7ecf\u5e38\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6570\u636e\u4e0d\u53d1\u751f\u53d8\u5316"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c Struct \u5305\u542b\u4e86\u4e0d\u53ef\u590d\u5236\u5bf9\u8c61\uff0c\u5219\u4e00\u5b9a\u8981\u7528\u6307\u9488 - \u4f8b\u5982 sycn.Mutex"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/a-journey-with-go/44b43b104963"},"Go: Should I Use a Pointer instead of a Copy of my Struct?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ardanlabs.com/blog/2017/06/design-philosophy-on-data-and-semantics.html"},"https://www.ardanlabs.com/blog/2017/06/design-philosophy-on-data-and-semantics.html"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type Server struct {\n  // \u5185\u90e8\u914d\u7f6e\u5bf9\u8c61\u53ef\u4f7f\u7528 Struct\n  conf ServerConf\n}\n// \u56e0\u4e3a\u4f1a\u5bf9 conf \u8fdb\u884c\u9ed8\u8ba4\u503c\u8865\u9f50 - \u56e0\u6b64\u4f20\u5165\u6307\u9488\nfunc NewServer(conf *ServerConf)*Server{\n  // \u4fee\u6539\n  if conf.Bind == "" {\n    conf.Bind = "0.0.0.0"\n  }\n  // \u590d\u5236\u4e00\u4e2a conf \u907f\u514d\u5916\u90e8\u66f4\u6539\n  // Server \u4f7f\u7528\u6307\u9488\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u526f\u672c\n  return &Server{ Conf = *conf }\n}\n')),(0,r.kt)("h2",{id:"texttemplate-vs-htmltemplate"},"text/template vs html/template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"html/template",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u5185\u5bb9\u88ab\u8f6c\u4e49\uff0c\u907f\u514d\u4ee3\u7801\u6ce8\u5165")))),(0,r.kt)("h2",{id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790"},"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/nsswitch.conf")," \u53ef\u4ee5\u89e3\u51b3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'echo "hosts: files dns" > /etc/nsswitch.conf'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gliderlabs/docker-alpine/issues/367#issuecomment-424546457"},"1")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/35305"},"#35305")," - net: prefer /etc/hosts over DNS when no /etc/nsswitch.conf is present"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/22846"},"#22846")," - net: Go DNS resolver does not read /etc/hosts")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/nsswitch.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# /etc/nsswitch.conf\n#\n# As described on the web page https://man7.org/linux/man-pages/man3/gethostbyname.3.html,\n# without the nsswitch.conf file, the gethostbyname() and gethostbyaddr() domain queries\n# will fail to a local name server, thus the /etc/hosts will take no effect.\n#\n# For example, when hostaliases are specified for a kubernetes pod, without proper settings\n# defined in this file, the hostaliases settings will not take effect.\n#\n# Following contents of this file is from the ubuntu:16.04 docker image.\n\npasswd:         compat\ngroup:          compat\nshadow:         compat\ngshadow:        files\n\nhosts:          files dns\nnetworks:       files\n\nprotocols:      db files\nservices:       db files\nethers:         db files\nrpc:            db files\n\nnetgroup:       nis\n")),(0,r.kt)("h2",{id:"windows-\u5b89\u88c5"},"Windows \u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"https://golang.org/dl/")," - \u4e0b\u8f7d MSI \u6216 Zip",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MSI \u9ed8\u8ba4\u5b89\u88c5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\GO"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# msys \u4e0b\nexport GOPATH=$HOME/go\nexport PATH="$PATH:/c/GO/bin:$HOME/go/bin"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n')),(0,r.kt)("h2",{id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method"},"reflect.Value.Interface: cannot return value obtained from unexported field or method"),(0,r.kt)("p",null,"relfect \u4e0d\u5141\u8bb8\u8bbf\u95ee\u672a\u5bfc\u51fa\u5b57\u6bb5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hack access ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43918797/1870054"},"https://stackoverflow.com/a/43918797/1870054"))),(0,r.kt)("h2",{id:"bufioreader-vs-bufioscanner"},"bufio.Reader vs bufio.Scanner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bufio.Scanner",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u8bfb\u4e00\u884c - \u4e0d\u5305\u542b\u5206\u9694\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"\\r\\n")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 64k \u884c\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4f7f\u7528\u53cb\u597d\uff0cScan \u548c \u9519\u8bef \u72ec\u7acb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"io.EOF")," \u65f6 Err \u4e3a nil"))),(0,r.kt)("li",{parentName:"ul"},"bufio.Reader"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8 4k \u7f13\u51b2"),(0,r.kt)("li",{parentName:"ul"},"ReadLine \u4e0d\u8fd4\u56de\u6362\u884c\uff0c\u7c7b\u4f3c Scanner\uff0c\u4f46\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," - ",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u63a8\u8350")," \u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"ReadString - \u8bfb\u53d6\u76f4\u5230\u6307\u5b9a\u5206\u9694\u7b26\uff0c\u8fd4\u56de\u5206\u9694\u7b26 - \u7c7b\u4f3c Scanner"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"io.Reader")," - \u5f88\u591a\u65f6\u5019\u8fd9\u4e2a\u662f\u9009\u62e9\u7684 ",(0,r.kt)("em",{parentName:"li"},"\u51b3\u5b9a\u56e0\u7d20"))),(0,r.kt)("h2",{id:"pq-vs-pgx"},"pq vs pgx"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"pq \u4f5c\u8005\u63a8\u8350\u63a8\u8350\u4f7f\u7528 pgx")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lib/pq"},"pq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5904\u4e8e\u7ef4\u62a4\u6a21\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackc/pgx"},"pgx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709 native \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u903b\u8f91\u590d\u5236\u534f\u8bae")))),(0,r.kt)("h2",{id:"gc-vs-gccgo"},"gc vs gccgo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gc - \u9ed8\u8ba4 Golang \u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u534a\u5e74\u5347\u7ea7\u4e00\u6b21 - \u8ddf\u968f spec \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"1.5 \u540e\u4e0d\u518d\u4f9d\u8d56 C \u7f16\u8bd1\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u7f16\u8bd1 - \u4e0d\u4f9d\u8d56 CGO \u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u7f16\u8bd1 - \u4f53\u79ef\u5927 - HelloWorld 2M+"))),(0,r.kt)("li",{parentName:"ul"},"gccgo - \u57fa\u4e8e GCC \u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u968f GCC \u5347\u7ea7 - \u7248\u672c\u4e00\u822c\u843d\u540e\uff0c\u5347\u7ea7\u6162"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 OS \u63d0\u4f9b GCC \u5305 - \u4e00\u822c\u843d\u540e\u4e3b GCC \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u66f4\u5feb\uff0c\u4f46\u652f\u6301\u66f4\u591a\u4f18\u5316 - \u91cd CPU \u573a\u666f\u6027\u80fd\u66f4\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301 CGO"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u5e73\u53f0 - \u6240\u6709 GCC \u652f\u6301\u7684\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u53c9\u7f16\u8bd1\u975e\u5e38\u96be"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u94fe\u63a5 - \u4f53\u79ef\u975e\u5e38\u5c0f - HelloWorld 250K vs 2MB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"libgo, libm, libgcc, libz, libpthread, ld.so, linux-vdso.so - virtual shared object")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# go \u53ef\u76f4\u63a5\u4f7f\u7528 gccgo \u7f16\u8bd1\ngo build -compiler gccgo myprog\n\n# gccgo flags\ngo build -gccgoflags "-s -w" main.go\n')),(0,r.kt)("h2",{id:"compile-version-does-not-match-go-tool-version"},"compile: version does not match go tool version"),(0,r.kt)("p",null,"\u6ce8\u610f\u8c03\u6574 GOROOT"),(0,r.kt)("h2",{id:"cipher-cbc--ecb--cfb--gcm"},"Cipher CBC / ECB / CFB / GCM"),(0,r.kt)("h2",{id:"memstatsgc_sys-undefined-type-mstats-has-no-field-or-method-gc_sys"},"memstats.gc_sys undefined (type mstats has no field or method gc_sys)"),(0,r.kt)("p",null,"\u5347\u7ea7\u540e\u51fa\u73b0\uff0c\u5c1d\u8bd5\u5378\u8f7d\u91cd\u88c5\u3002"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u5220\u9664\u76ee\u5f55 /usr/lib/go/ \u540e\u91cd\u88c5\u3002"),(0,r.kt)("h2",{id:"gosum-h1"},"go.sum h1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"h1: hash-v1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sha256+base64"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vikyd/go-checksum"},"https://github.com/vikyd/go-checksum"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go.sum"},"<module> <version> <hash>\n<module> <version>/go.mod <hash>\n")),(0,r.kt)("h2",{id:"godebug"},"GODEBUG"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GODEBUG=netdns=go"),(0,r.kt)("li",{parentName:"ul"},"GODEBUG=netdns=cgo"),(0,r.kt)("li",{parentName:"ul"},"GODEBUG=netdns=go+2"),(0,r.kt)("li",{parentName:"ul"},"GODEBUG=netdns=cgo+2")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u5927\u5199\u5b57\u6bb5\u540d\u5b57"},"\u5e38\u89c1\u5927\u5199\u5b57\u6bb5\u540d\u5b57"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ACL\nAPI\nASCII\nCPU\nCSS\nDNS\nEOF\nGUID\nHTML\nHTTP\nHTTPS\nID\nIP\nJSON\nLHS\nQPS\nRAM\nRHS\nRPC\nSLA\nSMTP\nSQL\nSSH\nTCP\nTLS\nTTL\nUDP\nUI\nUID\nURI\nURL\nUTF8\nUUID\nVM\nXML\nXMPP\nXSRF\nXSS\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/lint/blob/6edffad5e6160f5949cdefc81710b2706fbcd4f6/lint.go#L770-L809"},"commonInitialisms"))),(0,r.kt)("h2",{id:"regexp"},"regexp"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Index \u4e3a byte index"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/regexp"},"https://pkg.go.dev/regexp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/regexp/syntax"},"https://pkg.go.dev/regexp/syntax"))),(0,r.kt)("h2",{id:"go-build-static"},"go build static"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CGO_ENABLED=0 go build -a -ldflags '-extldflags \"-static\"'\n# statically linked PIE\nCGO_ENABLED=1 go build -buildmode=pie -tags 'osusergo,netgo,static,static_build' -ldflags '-linkmode=external -extldflags \"-static-pie\"' .\n\nGOOS=linux go build -tags 'osusergo netgo'\nGOFLAGS=-static\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/26492"},"https://github.com/golang/go/issues/26492"))),(0,r.kt)("h2",{id:"struct-\u53ef\u6bd4\u8f83"},"struct \u53ef\u6bd4\u8f83"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6240\u6709\u5b57\u6bb5\u53ef\u6bd4\u8f83\uff0c\u5219 struct \u53ef\u6bd4\u8f83"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 struct \u4f5c\u4e3a context key \u9700\u8981\u6ce8\u610f\u6bd4\u8f83\u903b\u8f91",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6307\u9488\u548c\u975e\u6307\u9488\u6bd4\u8f83\u903b\u8f91\u76f8\u540c")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// nocmp is an uncomparable struct. Embed this inside another struct to make\n// it uncomparable.\n//\n//  type Foo struct {\n//    nocmp\n//    // ...\n//  }\n//\n// This DOES NOT:\n//\n//  - Disallow shallow copies of structs\n//  - Disallow comparison of pointers to uncomparable structs\ntype nocmp [0]func()\n")),(0,r.kt)("h2",{id:"\u5224\u65ad-int-\u7c7b\u578b"},"\u5224\u65ad int \u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "runtime"\n    "unsafe"\n)\n\nfunc main() {\n    fmt.Println("arch", runtime.GOARCH)\n  // 8 -> int64\n  // 4 -> int32\n    fmt.Println("int", unsafe.Sizeof(int(0)))\n}\n')),(0,r.kt)("h2",{id:"\u5185\u5b58\u6a21\u578b"},"\u5185\u5b58\u6a21\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.swtch.com/mm"},"https://research.swtch.com/mm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/ref/mem"},"https://go.dev/ref/mem"))))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return g}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),c=l,k=g["".concat(s,".").concat(c)]||g[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);