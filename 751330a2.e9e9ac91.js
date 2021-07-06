(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return s}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,s=g["".concat(l,".").concat(m)]||g[m]||u[m]||r;return n?a.a.createElement(s,c(c({ref:t},b),{},{components:n})):a.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},551:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(1114)),l={title:"Golang \u6a21\u5757"},c={unversionedId:"languages/go/go-module",id:"languages/go/go-module",isDocsHomePage:!1,title:"Golang \u6a21\u5757",description:"- \u6ce8\u610f",source:"@site/notes/languages/go/go-module.md",slug:"/languages/go/go-module",permalink:"/notes/languages/go/go-module",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-module.md",version:"current",sidebar:"docs",previous:{title:"Golang \u5fae\u670d\u52a1",permalink:"/notes/languages/go/go-microservice"},next:{title:"Go net/rpc",permalink:"/notes/languages/go/go-pkg-net-rpc"}},i=[{value:"GOPROXY",id:"goproxy",children:[]},{value:"\u79c1\u6709\u6a21\u5757",id:"\u79c1\u6709\u6a21\u5757",children:[]}],b={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Git \u5b50\u76ee\u5f55 - ",Object(r.b)("a",{parentName:"li",href:"https://github.com/golang/go/issues/34055"},"#34055"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5df2\u63a5\u53d7\uff0c\u5b9e\u73b0\u4e2d")))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f9d\u8d56\u7ba1\u7406\ngo get -d github.com/path/to/module       # \u6dfb\u52a0\u3001\u5347\u7ea7\ngo get -d github.com/dep/two/v2@v2.1.0    # \u5347\u7ea7\u5230\u7248\u672c\ngo get -d github.com/dep/commit@branch    # \u4f7f\u7528\u5206\u652f\ngo get -d -u ./...                        # \u5347\u7ea7\u5168\u90e8\n\ngo get -d github.com/dep/legacy@none      # \u79fb\u9664\u4f9d\u8d56\n\n# \u6a21\u5757\u64cd\u4f5c\ngo mod init github.com/path/to/module     # \u521d\u59cb\u5316\u6a21\u5757\ngo mod tidy                               # \u7ec4\u7ec7/\u6e05\u7406 go.mod go.sum\ngo mod download                           # \u4e0b\u8f7d\u4f9d\u8d56\u5230\u7f13\u5b58\ngo mod why -m github.com/path/to/module   # \u4f9d\u8d56\u539f\u56e0\ngo install github.com/path/to/bin@latest  # \u5b89\u88c5\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-go.mod"},"module github.com/wenerme/astgo\ngo 1.16\nrequire (\n  github.com/wenerme/gou v1.0.0\n)\nexclude github.com/dep/legacy v1.9.2\nreplace github.com/dep/one => github.com/fork/one\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<meta name="go-import" content="nhooyr.io/websocket git https://github.com/nhooyr/websocket mod" />\n')),Object(r.b)("h2",{id:"goproxy"},"GOPROXY"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://proxy.golang.org/"},"proxy.golang.org")," - Go Module Mirror, Index, and Checksum Database"),Object(r.b)("li",{parentName:"ul"},"GOPROXY",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"li"},"proxy.golang.org,direct")))),Object(r.b)("li",{parentName:"ul"},"GOPRIVATE = GONOPROXY",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9017\u53f7\u5206\u5272\u79c1\u6709\u6a21\u5757\u5217\u8868"))),Object(r.b)("li",{parentName:"ul"},"GOSUMDB='off' \u53ef\u5173\u95ed checksum"),Object(r.b)("li",{parentName:"ul"},"direct",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"GET ",Object(r.b)("inlineCode",{parentName:"li"},"https://{module or package name}?go-get=1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'<meta name="go-import" content="git.example.com/golibs/logo git https://git.example.com/scm/golibs/logo.git"/>')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/gomods/athens"},"gomods/athens")," - Go module datastore and proxy",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4ee3\u7406\u534f\u8bae\uff0c\u901a\u8fc7\u914d\u7f6e netrc \u6765\u7edf\u4e00\u652f\u6301\u79c1\u6709\u4ed3\u5e93"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301 disk, mongo, gcs, s3, minio, \u5916\u90e8\u5b58\u50a8"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://goproxy.io"},"goproxy.io")," - \u5168\u7403\u4ee3\u7406"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/govanityurls"},"GoogleCloudPlatform/govanityurls"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u57df\u540d\u4f5c\u4e3a\u5bfc\u5165\u8def\u5f84")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"gitlab")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/packages/go_proxy/"},"Go proxy for GitLab"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# GitLab\ngo env -w GOPROXY='https://gitlab.example.com/api/v4/projects/1234/packages/go,https://proxy.golang.org,direct'\n\n# \u9700\u8981\u5173\u95ed SUM \u56e0\u4e3a\u79c1\u6709\u9879\u76ee\u65e0\u6cd5\u88ab SUM\ngo env -w GONOSUMDB='gitlab.com/my/project,<previous value>'\n")),Object(r.b)("h2",{id:"\u79c1\u6709\u6a21\u5757"},"\u79c1\u6709\u6a21\u5757"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9a private repo\ngo env -w GOPRIVATE=github.com/myrepo\n# git \u6dfb\u52a0\u6388\u6743\u4fe1\u606f\n# \u53ef\u4ee5 SSH url."git@github.com".insteadOf "https://github.com"\n# \u53ef\u4ee5 netrc\ngit config --global url."https://$USERNAME:$ACCESS_TOKEN@github.com".insteadOf "https://github.com"\n\n# git \u786e\u8ba4\u53ef\u4ee5\u8bbf\u95ee\ngit ls-remote -q https://github.com/myrepo/module.git\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"~/.netrc")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"machine <url> login <username> password <token>\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},".gitconfig")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},'[url "ssh://git@git.example.com:7999"]\n    insteadOf = https://git.example.com/scm\n')))}p.isMDXComponent=!0}}]);