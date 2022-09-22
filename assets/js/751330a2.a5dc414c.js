"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86468],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=o.createContext({}),m=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,d=s["".concat(g,".").concat(c)]||s[c]||u[c]||r;return n?o.createElement(d,l(l({ref:t},p),{},{components:n})):o.createElement(d,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return g},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var o=n(96600),a=n(27279),r=(n(59496),n(49613)),l=["components"],i={title:"Golang \u6a21\u5757"},g=void 0,m={unversionedId:"languages/go/go-module",id:"languages/go/go-module",title:"Golang \u6a21\u5757",description:"- \u4e0d\u652f\u6301 Git \u5b50\u76ee\u5f55 - #34055",source:"@site/notes/languages/go/go-module.md",sourceDirName:"languages/go",slug:"/languages/go/go-module",permalink:"/notes/languages/go/go-module",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-module.md",tags:[],version:"current",frontMatter:{title:"Golang \u6a21\u5757"},sidebar:"docs",previous:{title:"Golang \u5fae\u670d\u52a1",permalink:"/notes/languages/go/go-microservice"},next:{title:"Go net/rpc",permalink:"/notes/languages/go/go-pkg-net-rpc"}},p={},u=[{value:"\u4f9d\u8d56\u66f4\u65b0",id:"\u4f9d\u8d56\u66f4\u65b0",level:2},{value:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e",id:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e",level:2},{value:"\u4f9d\u8d56\u7ba1\u7406",id:"\u4f9d\u8d56\u7ba1\u7406",level:2},{value:"go.work",id:"gowork",level:2},{value:"go get",id:"go-get",level:2},{value:"\u81ea\u5b9a\u4e49\u5bfc\u5165\u8def\u5f84",id:"\u81ea\u5b9a\u4e49\u5bfc\u5165\u8def\u5f84",level:2},{value:"GOPROXY",id:"goproxy",level:2},{value:"\u79c1\u6709\u6a21\u5757",id:"\u79c1\u6709\u6a21\u5757",level:2},{value:"vendor",id:"vendor",level:2},{value:"monorepo go mod tidy",id:"monorepo-go-mod-tidy",level:2}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Git \u5b50\u76ee\u5f55 - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/34055"},"#34055"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5df2\u63a5\u53d7\uff0c\u5b9e\u73b0\u4e2d"))),(0,r.kt)("li",{parentName:"ul"},"\u79c1\u6709\u6a21\u5757\u76ee\u524d\u4e0d\u597d\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"Not Ready"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u5f00\u53d1 + CI/CD \u90fd\u4f1a\u9047\u5230\u5f88\u591a\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\u8003\u8651 monorepo + replace"),(0,r.kt)("li",{parentName:"ul"},"\u8003\u8651 vendor"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/ref/mod"},"https://golang.org/ref/mod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cmd/go#hdr-Package_lists_and_patterns"},"Package lists and patterns"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"main"),(0,r.kt)("li",{parentName:"ul"},"all"),(0,r.kt)("li",{parentName:"ul"},"std"),(0,r.kt)("li",{parentName:"ul"},"cmd")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f9d\u8d56\u7ba1\u7406\ngo get -d github.com/path/to/module       # \u6dfb\u52a0\u3001\u5347\u7ea7\ngo get -d github.com/dep/two/v2@v2.1.0    # \u5347\u7ea7\u5230\u7248\u672c\ngo get -d github.com/dep/commit@branch    # \u4f7f\u7528\u5206\u652f\ngo get -d -u ./...                        # \u5347\u7ea7\u5168\u90e8\n\ngo get -d github.com/dep/legacy@none      # \u79fb\u9664\u4f9d\u8d56\n\n# \u6a21\u5757\u64cd\u4f5c\ngo mod init github.com/path/to/module     # \u521d\u59cb\u5316\u6a21\u5757\ngo mod tidy                               # \u7ec4\u7ec7/\u6e05\u7406 go.mod go.sum\ngo mod download                           # \u4e0b\u8f7d\u4f9d\u8d56\u5230\u7f13\u5b58\ngo mod why -m github.com/path/to/module   # \u4f9d\u8d56\u539f\u56e0\ngo install github.com/path/to/bin@latest  # \u5b89\u88c5\n\n# \u5347\u7ea7 go.mod\ngo mod tidy -go=1.17\n# \u7528 1.6 \u9009\u62e9\u903b\u8f91 \u7136\u540e\u5347\u7ea7 1.7\ngo mod tidy -go=1.16 && go mod tidy -go=1.17\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go-mod"},"module github.com/wenerme/astgo\ngo 1.16\nrequire (\n  github.com/wenerme/gou v1.0.0\n)\nexclude github.com/dep/legacy v1.9.2\nreplace github.com/dep/one => github.com/fork/one\n\n# use vendored\nreplace github.com/wenerme/go-wecom => ./modules/wecom\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="go-import" content="nhooyr.io/websocket git https://github.com/nhooyr/websocket mod" />\n')),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u66f4\u65b0"},"\u4f9d\u8d56\u66f4\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6709\u66f4\u65b0\u7684\u6a21\u5757\ngo list -u -m all\n# \u67e5\u770b\u76f4\u63a5\u4f9d\u8d56\n# https://pkg.go.dev/cmd/go/internal/modinfo#ModulePublic\ngo list -u -m -f '{{.}}{{if .Indirect}} IAMINDIRECT{{end}}' all\n# \u53ea\u663e\u793a\u6709\u66f4\u65b0\u7684\ngo list -u -m -f '{{if .Update}}{{.}}{{end}}' all\n# \u53ea\u663e\u793a\u76f4\u63a5\u4f9d\u8d56\ngo list -u -m -f '{{if not .Indirect}}{{.}}{{end}}' all\n\n# \u66f4\u65b0 minor \u548c patch\ngo get -u -v ./...\n# \u66f4\u65b0 patch\ngo get -u=patch -v ./...\n# \u66f4\u65b0\u6d4b\u8bd5\u4f9d\u8d56\ngo get -t -u ./...\n")),(0,r.kt)("h2",{id:"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e"},"\u67e5\u770b\u6a21\u5757\u6240\u5728\u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go list -f '{{.Dir}}' -m github.com/pkg/errors\n\n# \u6a21\u5757\u7f13\u5b58\u76ee\u5f55\ngo env GOMODCACHE\n")),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u7ba1\u7406"},"\u4f9d\u8d56\u7ba1\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/modules/managing-dependencies"},"managing-dependencies"))),(0,r.kt)("h2",{id:"gowork"},"go.work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u591a\u7a7a\u95f4 - monorepo"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.googlesource.com/proposal/+/master/design/45713-workspace.md"},"https://go.googlesource.com/proposal/+/master/design/45713-workspace.md"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go work init\ngo work use ./modules/hello\ngo work sync\n")),(0,r.kt)("h2",{id:"go-get"},"go get"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/cmd/go/#hdr-Remote_import_paths"},"go-import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/gddo/wiki/Source-Code-Links"},"go-source"))),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5bfc\u5165\u8def\u5f84"},"\u81ea\u5b9a\u4e49\u5bfc\u5165\u8def\u5f84"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/govanityurls"},"GoogleCloudPlatform/govanityurls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rsc/go-import-redirector"},"rsc/go-import-redirector"))),(0,r.kt)("h2",{id:"goproxy"},"GOPROXY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://proxy.golang.org/"},"proxy.golang.org")," - Go Module Mirror, Index, and Checksum Database"),(0,r.kt)("li",{parentName:"ul"},"GOPROXY",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy.golang.org,direct")))),(0,r.kt)("li",{parentName:"ul"},"GOPRIVATE = GONOPROXY",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9017\u53f7\u5206\u5272\u79c1\u6709\u6a21\u5757\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},"GOSUMDB='off' \u53ef\u5173\u95ed checksum"),(0,r.kt)("li",{parentName:"ul"},"direct",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"https://{module or package name}?go-get=1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<meta name="go-import" content="git.example.com/golibs/logo git https://git.example.com/scm/golibs/logo.git"/>')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gomods/athens"},"gomods/athens")," - Go module datastore and proxy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4ee3\u7406\u534f\u8bae\uff0c\u901a\u8fc7\u914d\u7f6e netrc \u6765\u7edf\u4e00\u652f\u6301\u79c1\u6709\u4ed3\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 disk, mongo, gcs, s3, minio, \u5916\u90e8\u5b58\u50a8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://goproxy.io"},"goproxy.io")," - \u5168\u7403\u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://goproxy.cn/"},"https://goproxy.cn/")," - \u4e03\u725b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mirrors.aliyun.com/goproxy/"},"https://mirrors.aliyun.com/goproxy/")," - \u963f\u91cc\u4e91"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gocenter.io"},"https://gocenter.io")," - jfrog"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/govanityurls"},"GoogleCloudPlatform/govanityurls"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u57df\u540d\u4f5c\u4e3a\u5bfc\u5165\u8def\u5f84")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gitlab")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/packages/go_proxy/"},"Go proxy for GitLab"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go env -w GOPROXY=https://proxy.golang.com.cn,direct\ngo env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct\n\n# GitLab\ngo env -w GOPROXY='https://gitlab.example.com/api/v4/projects/1234/packages/go,https://proxy.golang.org,direct'\n\n# \u9700\u8981\u5173\u95ed SUM \u56e0\u4e3a\u79c1\u6709\u9879\u76ee\u65e0\u6cd5\u88ab SUM\ngo env -w GONOSUMDB='gitlab.com/my/project,<previous value>'\n")),(0,r.kt)("h2",{id:"\u79c1\u6709\u6a21\u5757"},"\u79c1\u6709\u6a21\u5757"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u79c1\u6709\u6a21\u5757\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u9ebb\u70e6"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/29953"},"https://github.com/golang/go/issues/29953"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9a private repo\ngo env -w GOPRIVATE=github.com/myrepo\n# \u6574\u4e2a\u7ec4\u7ec7\ngo env -w GOPRIVATE=gitlab.com/myorg/*\n\n# git \u6dfb\u52a0\u6388\u6743\u4fe1\u606f - \u5982\u679c\u672c\u5730\u6709 ssh-agent \u5e94\u8be5\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\n# \u53ef\u4ee5 SSH url."git@github.com".insteadOf "https://github.com"\n# \u53ef\u4ee5 netrc\ngit config --global url."https://$USERNAME:$ACCESS_TOKEN@github.com".insteadOf "https://github.com"\n\n# git \u786e\u8ba4\u53ef\u4ee5\u8bbf\u95ee\ngit ls-remote -q https://github.com/myrepo/module.git\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"~/.netrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"machine <url> login <username> password <token>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".gitconfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'[url "ssh://git@git.example.com:7999"]\n    insteadOf = https://git.example.com/scm\n')),(0,r.kt)("h2",{id:"vendor"},"vendor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vendor/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"modules.txt")))),(0,r.kt)("h2",{id:"monorepo-go-mod-tidy"},"monorepo go mod tidy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls **/*/go.mod | xargs dirname | xargs -I {} sh -c 'cd {}; go mod tidy'\n# or\nfind . -name go.mod | xargs dirname | xargs -I {} sh -c 'cd {}; go mod tidy'\n")))}c.isMDXComponent=!0}}]);