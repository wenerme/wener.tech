"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9396],{49613:function(e,l,t){t.d(l,{Zo:function(){return p},kt:function(){return c}});var a=t(59496);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function o(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?o(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var l=a.useContext(s),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},p=function(e){var l=u(e.components);return a.createElement(s.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},g=a.forwardRef((function(e,l){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(t),c=n,b=g["".concat(s,".").concat(c)]||g[c]||d[c]||o;return t?a.createElement(b,r(r({ref:l},p),{},{components:t})):a.createElement(b,r({ref:l},p))}));function c(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=g;var i={};for(var s in l)hasOwnProperty.call(l,s)&&(i[s]=l[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24870:function(e,l,t){t.r(l),t.d(l,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return z}});var a=t(49613),n=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,l,t)=>l in e?n(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,d=(e,l)=>{for(var t in l||(l={}))s.call(l,t)&&p(e,t,l[t]);if(i)for(var t of i(l))u.call(l,t)&&p(e,t,l[t]);return e};const g={title:"Brazel Go"},c=void 0,b={unversionedId:"dev/build/bazel/bazel-go",id:"dev/build/bazel/bazel-go",title:"Brazel Go",description:"Brazel Go",source:"@site/../notes/dev/build/bazel/bazel-go.md",sourceDirName:"dev/build/bazel",slug:"/dev/build/bazel/bazel-go",permalink:"/notes/dev/build/bazel/bazel-go",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/bazel/bazel-go.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{title:"Brazel Go"},sidebar:"docs",previous:{title:"Bazel FAQ",permalink:"/notes/dev/build/bazel/bazel-faq"},next:{title:"Bazel Java",permalink:"/notes/dev/build/bazel/bazel-java"}},m={},z=[{value:"Brazel Go",id:"brazel-go",level:2},{value:"cross compile",id:"cross-compile",level:3},{value:"go_repository does not support file path replacements",id:"go_repository-does-not-support-file-path-replacements",level:2},{value:"rules_go",id:"rules_go",level:2},{value:"gazelle",id:"gazelle",level:2},{value:"go_sdk",id:"go_sdk",level:2},{value:"found but does not contain package",id:"found-but-does-not-contain-package",level:2},{value:"is not visible from target",id:"is-not-visible-from-target",level:2},{value:"\u7f13\u5b58\u76f8\u5173\u95ee\u9898",id:"\u7f13\u5b58\u76f8\u5173\u95ee\u9898",level:2},{value:"go: cannot find GOROOT directory: /usr/local/go",id:"go-cannot-find-goroot-directory-usrlocalgo",level:2}],_={toc:z};function f(e){var l,t=e,{components:n}=t,p=((e,l)=>{var t={};for(var a in e)s.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))l.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(l=d(d({},_),p),o(l,r({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",d({},{id:"brazel-go"}),"Brazel Go"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle"}),"bazelbuild/bazel-gazelle"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3a go \u548c protobuf \u751f\u6210 BUILD"))),(0,a.kt)("li",{parentName:"ul"},"deps.bzl"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://www.tweag.io/blog/2021-09-08-rules_go-gazelle/"}),"BUILDING A GO PROJECT USING BAZEL"))))),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5f00\u542f trimpath"),(0,a.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301 coverage"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# cross compile no cgo\nbazel build --platforms=@io_bazel_rules_go//go/toolchain:linux_amd64 //cmd\n# cross compile with cgo\nbazel build --platforms=@io_bazel_rules_go//go/toolchain:linux_amd64_cgo //cmd\n")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'workspace(name = "my_project")\n\nload("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")\n\nhttp_archive(\n    name = "io_bazel_rules_go",\n    sha256 = "2b1641428dff9018f9e85c0384f03ec6c10660d935b750e3fa1492a281a53b0f",\n    urls = [\n        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.29.0/rules_go-v0.29.0.zip",\n        "https://github.com/bazelbuild/rules_go/releases/download/v0.29.0/rules_go-v0.29.0.zip",\n    ],\n)\n\nhttp_archive(\n    name = "bazel_gazelle",\n    sha256 = "de69a09dc70417580aabf20a28619bb3ef60d038470c7cf8442fafcf627c21cb",\n    urls = [\n        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.24.0/bazel-gazelle-v0.24.0.tar.gz",\n        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.24.0/bazel-gazelle-v0.24.0.tar.gz",\n    ],\n)\n\nload("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")\nload("@bazel_gazelle//:deps.bzl", "gazelle_dependencies", "go_repository")\n\n#\ngo_rules_dependencies()\ngo_register_toolchains(version = "1.17.2")\ngazelle_dependencies()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py",metastring:'title="BUILD"',title:'"BUILD"'}),'load("@bazel_gazelle//:def.bzl", "gazelle")\n\n# gazelle:prefix zhensikeji.net/inccall/core\ngazelle(name = "gazelle")\n\ngazelle(\n    name = "gazelle-update-repos",\n    args = [\n        "-from_file=go.mod",\n        "-to_macro=deps.bzl%go_dependencies",\n        "-prune",\n        "-build_file_proto_mode=disable_global",\n    ],\n    command = "update-repos",\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"bazel run //:gazelle\n\nbazel run //:gazelle -- update-repos -from_file=go.mod -to_macro=deps.bzl%go_dependencies\nbazel run //:gazelle-update-repos\n")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"go get github.com/bazelbuild/bazel-gazelle/cmd/gazelle\ngazelle -go_prefix github.com/example/project\n")),(0,a.kt)("h3",d({},{id:"cross-compile"}),"cross compile"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'go_library(\n    name = "foo",\n    srcs = [\n        "foo_linux.go",\n        "foo_windows.go",\n    ],\n    deps = select({\n        "@io_bazel_rules_go//go/platform:linux_amd64": [\n            "//bar_linux",\n        ],\n        "@io_bazel_rules_go//go/platform:windows_amd64": [\n            "//bar_windows",\n        ],\n        "//conditions:default": [],\n    }),\n)\n')),(0,a.kt)("h2",d({},{id:"go_repository-does-not-support-file-path-replacements"}),"go_repository does not support file path replacements"),(0,a.kt)("h2",d({},{id:"rules_go"}),"rules_go"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/rules_go"}),"bazelbuild/rules_go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/rules_go/blob/master/go/modes.rst#mode-attributes"}),"Build modes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"static, race, msan, pure, strip, debug, gotags, linkmode"),(0,a.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"--@io_bazel_rules_go//go/config:<mode>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'go_binary(<mode> = "")')))),(0,a.kt)("li",{parentName:"ul"},"toolchain",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"go_register_toolchains -> @go_sdk -> go_download_sdk"),(0,a.kt)("li",{parentName:"ul"},"go_download_sdk - \u4e0b\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"go_local_sdk - \u6307\u5b9a\u672c\u5730 PATH"))),(0,a.kt)("li",{parentName:"ul"},"go_binary",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"out - \u8f93\u51fa\u540d\u5b57",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5982\u679c name \u548c dir \u540d\u5b57\u76f8\u540c\uff0c\u5219\u4f1a\u6dfb\u52a0\u4e0b\u5212\u7ebf")))))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-py"}),'load("@io_bazel_rules_go//go:deps.bzl", "go_rules_dependencies", "go_register_toolchains")\n\ngo_rules_dependencies()\n\ngo_register_toolchains(version = "1.15.5")\n# \u4f7f\u7528 host \u7684 go \u7248\u672c - \u7f16\u8bd1\u4e0d\u4e00\u5b9a\u53ef\u91cd\u73b0\n# \u4f46\u66f4\u5feb\uff0c\u5c11\u4e86\u4e0b\u8f7d\u5b89\u88c5\u8fc7\u7a0b\ngo_register_toolchains(version = "host")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# \u4ea4\u53c9\u7f16\u8bd1\nbazel build --platforms=@io_bazel_rules_go//go/toolchain:linux_amd64 //cmd\n# with CGO\nbazel build --platforms=@io_bazel_rules_go//go/toolchain:linux_amd64_cgo //cmd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u5728 go_binary \u8bbe\u7f6e goos \u548c goarch")),(0,a.kt)("h2",d({},{id:"gazelle"}),"gazelle"),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8981\u6c42 proto \u5305\u540d\u5339\u914d\u76ee\u5f55 \u540d\u5b57 - ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/271"}),"#271"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'go_repository(build_file_proto_mode = "disable_global",)')))))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# \u547d\u4ee4\u884c\u751f\u6210\ngazelle -go_prefix go-micro.dev/v4 -proto disable\n\ngazelle update\n")),(0,a.kt)("h2",d({},{id:"go_sdk"}),"go_sdk"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'# Host\ngo_host_sdk(name="go_sdk")\n# Local\ngo_local_sdk(\n    name = "go_sdk",\n    path = "/Users/wener/sdk/go1.18beta1",\n)\ngo_register_toolchains()\n\n# Download\ngo_register_toolchains(version = "1.17.6")\n# Host\ngo_register_toolchains(version = "host")\n')),(0,a.kt)("h2",d({},{id:"found-but-does-not-contain-package"}),"found but does not contain package"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/953"}),"https://github.com/bazelbuild/bazel-gazelle/issues/953"))),(0,a.kt)("h2",d({},{id:"is-not-visible-from-target"}),"is not visible from target"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/1117"}),"https://github.com/bazelbuild/bazel-gazelle/issues/1117"))),(0,a.kt)("h2",d({},{id:"\u7f13\u5b58\u76f8\u5173\u95ee\u9898"}),"\u7f13\u5b58\u76f8\u5173\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GO_REPOSITORY_USE_HOST_CACHE",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"go env GOPATH")," \u800c\u4e0d\u662f\u4f7f\u7528 bazel \u7f13\u5b58"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/701"}),"https://github.com/bazelbuild/bazel-gazelle/issues/701")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/549"}),"https://github.com/bazelbuild/bazel-gazelle/issues/549")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-gazelle/issues/543"}),"https://github.com/bazelbuild/bazel-gazelle/issues/543"))),(0,a.kt)("h2",d({},{id:"go-cannot-find-goroot-directory-usrlocalgo"}),"go: cannot find GOROOT directory: /usr/local/go"),(0,a.kt)("p",null,"/usr/lib/go"))}f.isMDXComponent=!0}}]);