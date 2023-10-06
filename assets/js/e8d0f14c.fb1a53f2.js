"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30730],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return b}});var l=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=n,b=s["".concat(u,".").concat(k)]||s[k]||c[k]||r;return a?l.createElement(b,i(i({ref:t},m),{},{components:a})):l.createElement(b,i({ref:t},m))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89217:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return g}});var l=a(49613),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>r(e,i(t)),k=(e,t)=>{var a={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&p.call(e,l)&&(a[l]=e[l]);return a};const b={title:"Bazel"},d="Bazel",N={unversionedId:"dev/build/bazel/README",id:"dev/build/bazel/README",title:"Bazel",description:"- bazelbuild/bazel",source:"@site/../notes/dev/build/bazel/README.md",sourceDirName:"dev/build/bazel",slug:"/dev/build/bazel/",permalink:"/notes/dev/build/bazel/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/bazel/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{title:"Bazel"},sidebar:"docs",previous:{title:"\u6784\u5efa",permalink:"/notes/dev/build/"},next:{title:"Bazel Awesome",permalink:"/notes/dev/build/bazel/awesome"}},h={},g=[{value:"Starlark",id:"starlark",level:2},{value:"Notes",id:"notes",level:2},{value:"Remote Execution",id:"remote-execution",level:2},{value:"Remote Caching",id:"remote-caching",level:2},{value:"The remote downloader can only be used in combination with gRPC caching",id:"the-remote-downloader-can-only-be-used-in-combination-with-grpc-caching",level:2},{value:"Failed to query remote execution capabilities: INTERNAL: http2 exception",id:"failed-to-query-remote-execution-capabilities-internal-http2-exception",level:2},{value:".bazelrc",id:"bazelrc",level:2},{value:"Notes",id:"notes-1",level:2},{value:"query",id:"query",level:2},{value:"bzlmod",id:"bzlmod",level:2},{value:"BUILD vs BUILD.bazel",id:"build-vs-buildbazel",level:2},{value:"Fetching @local_config_xcode",id:"fetching-local_config_xcode",level:2},{value:"from google",id:"from-google",level:2},{value:"output",id:"output",level:2}],z={toc:g},f="wrapper";function _(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,l.kt)(f,c(s(s({},z),n),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"bazel"}),"Bazel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/bazel"}),"bazelbuild/bazel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u5e73\u53f0"),(0,l.kt)("li",{parentName:"ul"},"Starlark DSL"),(0,l.kt)("li",{parentName:"ul"},"reproduce build"),(0,l.kt)("li",{parentName:"ul"},"remote cache",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WebDAV"),(0,l.kt)("li",{parentName:"ul"},"bazel-remote"))),(0,l.kt)("li",{parentName:"ul"},"remote build"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u884c\u51c6\u5907\u73af\u5883 - \u4e0b\u8f7d JDK\u3001\u4e0b\u8f7d Golang SDK \u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u884c\u7ef4\u62a4\u4f9d\u8d56 - \u4e0b\u8f7d JAR\u3001\u4e0b\u8f7d go mod"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/examples"}),"bazelbuild/examples")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/google/bazel-common"}),"google/bazel-common")),(0,l.kt)("li",{parentName:"ul"},"\u955c\u50cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://mirror.bazel.build"}),"https://mirror.bazel.build"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/rules_python/issues/400#issuecomment-776810051"}),"https://github.com/bazelbuild/rules_python/issues/400#issuecomment-776810051")))),(0,l.kt)("li",{parentName:"ul"},"Bazel \u955c\u50cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://mirrors.huaweicloud.com/bazel/"}),"https://mirrors.huaweicloud.com/bazel/")))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://bazel.build/users.html"}),"Users"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Abseil, TensorFlow, gRPC"))),(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.21 \u79fb\u9664 bazel \u6784\u5efa - ",(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/BenTheElder/enhancements/blob/master/keps/sig-testing/2420-reducing-kubernetes-build-maintenance/README.md"}),"KEP#2420"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"go build cache \u8db3\u591f\u4f18\u79c0"))),(0,l.kt)("li",{parentName:"ul"},"Pants, Buck: created and developed by ex-Googlers at Twitter and Foursquare, and Facebook")))),(0,l.kt)("admonition",s({},{title:"When to use Bazel",type:"tip"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u6784\u5efa"),(0,l.kt)("li",{parentName:"ul"},"\u589e\u91cf\u7f16\u8bd1"),(0,l.kt)("li",{parentName:"ul"},"Remote Cache \u548c Remote Execution"),(0,l.kt)("li",{parentName:"ul"},"Reproduce \u6784\u5efa"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u8bed\u8a00\u591a\u5e73\u53f0\u590d\u6742\u6784\u5efa"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5927\u591a\u65f6\u5019\u4e0d\u9700\u8981\u4f7f\u7528 Bazel")))),(0,l.kt)("admonition",s({},{type:"caution"}),(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"When ",(0,l.kt)("strong",{parentName:"mdxAdmonitionTitle"},"not")," to use Bazel"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u88ab\u4f9d\u8d56\u7684\u5185\u5bb9\u90fd\u4f1a\u8fdb\u884c\u660e\u786e\u5b9a\u4e49 - \u76ee\u5f55\u4e0b\u5305\u542b BUILD.bazel"),(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u53d8\u5316\u9700\u8981\u91cd\u65b0\u751f\u6210\u5404\u79cd BUILD.bazel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u79cd\u5f00\u53d1\u8d1f\u62c5 - \u56e0\u6b64\u89c4\u6a21\u4e0d\u5927\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528 Bazel"))),(0,l.kt)("li",{parentName:"ul"},"Bazel \u4f1a\u7ef4\u62a4\u81ea\u5df1\u7684\u7f13\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f7f\u7528 go \u7684\u5168\u5c40\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u4f7f\u7528 npm/yarn \u7684\u5168\u5c40\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u597d\u5904: Remote \u6267\u884c, \u8de8\u4e3b\u673a\u5171\u4eab"),(0,l.kt)("li",{parentName:"ul"},"\u574f\u5904: \u78c1\u76d8\u7a7a\u95f4, \u7f51\u7edc\u73af\u5883"))),(0,l.kt)("li",{parentName:"ul"},"Bazel \u4f1a\u7ef4\u62a4\u81ea\u5df1\u7684\u5de5\u5177\u94fe",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a WORKSPACE \u90fd\u4f1a\u4e0b\u8f7d toolchain - \u4f8b\u5982 go,node"),(0,l.kt)("li",{parentName:"ul"},"\u597d\u5904: \u786e\u4fdd\u73af\u5883\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"\u574f\u5904: \u5360\u7528\u78c1\u76d8\u7a7a\u95f4, \u56fd\u5185\u73af\u5883\u4e0b\u8f7d\u53ef\u80fd\u6709\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},"Bazel \u8fd0\u884c\u73af\u5883\u590d\u6742 - \u5982\u679c\u9700\u8981\u5206\u53d1\u7ed9\u5176\u4ed6\u4eba\u7f16\u8f91\u6784\u5efa\u7684\u573a\u666f\u4e0d\u5efa\u8bae\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JDK, Python, coreutils"))),(0,l.kt)("li",{parentName:"ul"},"Bazel \u542f\u52a8\u548c\u5206\u6790\u9700\u8981\u65f6\u95f4 - \u5982\u679c\u73b0\u884c\u6784\u5efa\u65f6\u95f4 < 10m \u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528"))),(0,l.kt)("admonition",s({},{type:"warning"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Bazel \u5b98\u65b9\u6784\u5efa\u7684\u4e0d\u652f\u6301 musl"))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'brew install bazel\n\n# \u6784\u5efa\nbazel build //:ProjectRunner\n# \u67e5\u770b\u4f9d\u8d56\u56fe\nbazel query  --nohost_deps --noimplicit_deps "deps(//:ProjectRunner)" --output graph | dot -Tpng -o graph.png\nimgcat graph.png\n\n# \u505c\u6b62\u540e\u53f0\u670d\u52a1\nbazel shutdown\n\n# Build all\nbazel build //...\n')),(0,l.kt)("h2",s({},{id:"starlark"}),"Starlark"),(0,l.kt)("p",null,(0,l.kt)("a",s({parentName:"p"},{href:"https://docs.bazel.build/versions/master/skylark/language.html"}),"https://docs.bazel.build/versions/master/skylark/language.html")),(0,l.kt)("h2",s({},{id:"notes"}),"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"workspace - \u5de5\u4f5c\u7a7a\u95f4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WORKSPACE, WORKSPACE.bazel \u6240\u5728\u76ee\u5f55"))),(0,l.kt)("li",{parentName:"ul"},"repository - \u4ed3\u5e93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@")," - root repository - WORKSPACE \u6240\u5728\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5b9a\u4e49\u5916\u90e8\u4ed3\u5e93 - ",(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/external.html"}),"external"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bind, local_repository, new_local_repository"))))),(0,l.kt)("li",{parentName:"ul"},"package",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BUILD \u6240\u5728\u76ee\u5f55"))),(0,l.kt)("li",{parentName:"ul"},"target",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"=files+rules"),(0,l.kt)("li",{parentName:"ul"},"files \u5206\u4e3a\u6e90\u6587\u4ef6\u548c\u751f\u6210\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"package_group"))),(0,l.kt)("li",{parentName:"ul"},"label - \u6807\u7b7e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"target \u7684\u540d\u5b57\u53eb\u505a label - label \u552f\u4e00\u6807\u8bc6 target"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@myrepo//my/app/main:app_binary"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@myrepo// - \u4ed3\u5e93\u540d\u5b57",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 repo \u5185\u53ef\u5ffd\u7565\uff0c\u5199\u4f5c ",(0,l.kt)("inlineCode",{parentName:"li"},"//my/app/main:app_binary")))),(0,l.kt)("li",{parentName:"ul"},"my/app/main - un-qualified package name - \u5305\u540d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"+repo=fully-qualified package name"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5305\u5185\u53ef\u5ffd\u7565\uff0c\u5199\u4f5c ",(0,l.kt)("inlineCode",{parentName:"li"},":app_binary")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"app_binary")))),(0,l.kt)("li",{parentName:"ul"},"app_binary - un-qualified target name",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u540d\u5b57\u4e0e\u6700\u540e\u90e8\u5206\u540d\u5b57\u76f8\u540c\uff0c\u53ef\u5ffd\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"//my/app/lib:lib")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"//my/app/lib")))))))))),(0,l.kt)("li",{parentName:"ul"},".bzl - extension"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/be/overview.html"}),"be")," - Bazel BUILD Encyclopedia")),(0,l.kt)("h2",s({},{id:"remote-execution"}),"Remote Execution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/master/remote-execution.html"}),"Remote Execution")),(0,l.kt)("li",{parentName:"ul"},"Self Host",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/twitter/scoot"}),"twitter/scoot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-buildfarm"}),"bazelbuild/bazel-buildfarm"))))),(0,l.kt)("h2",s({},{id:"remote-caching"}),"Remote Caching"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/master/remote-caching.html"}),"Remote Caching")),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nginx"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/buchgr/bazel-remote/"}),"bazel-remote")))),(0,l.kt)("li",{parentName:"ul"},"ac.v2 cas.v2 raw.v2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"hash, blob"),(0,l.kt)("li",{parentName:"ul"},"cas=Content addressed storage"),(0,l.kt)("li",{parentName:"ul"},"ac=Action cache"))),(0,l.kt)("li",{parentName:"ul"},"bazel \u4e0d\u8d1f\u8d23\u5220\u9664\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/command-line-reference.html#flag--experimental_remote_downloader"}),"--experimental_remote_downloader")),(0,l.kt)("li",{parentName:"ul"},"HTTP 8080"),(0,l.kt)("li",{parentName:"ul"},"gRPC 9092"),(0,l.kt)("li",{parentName:"ul"},"Profiling 6060"),(0,l.kt)("li",{parentName:"ul"},"--config_file BAZEL_REMOTE_CONFIG_FILE"),(0,l.kt)("li",{parentName:"ul"},"--experimental_remote_asset_api")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it \\\n  -u 1000 \\\n  -v $PWD/cache:/data -p 8080:8080 -p 9092:9092 \\\n  --name bazel-remote-cache buchgr/bazel-remote-cache\ncurl http://localhost:8080/status\n\nbazel build //src/main:app --remote_cache=http://localhost:9092\n# remote asset\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9092 --remote_cache=grpc://localhost:9092\n")),(0,l.kt)("admonition",s({},{title:"remote asset is broken",type:"caution"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"not works with go-sdk ",(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/bazel/issues/13206"}),"#13206")))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{}),"build:cache --remote_download_minimal\nbuild:cache --remote_cache=http://localhost:8080\n")),(0,l.kt)("h2",s({},{id:"the-remote-downloader-can-only-be-used-in-combination-with-grpc-caching"}),"The remote downloader can only be used in combination with gRPC caching"),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# from\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9090 --remote_cache=http://localhost:9090\n# to\nbazel build //src/main:app --experimental_remote_downloader=grpc://localhost:9090 --remote_cache=grpc://localhost:9090\n")),(0,l.kt)("h2",s({},{id:"failed-to-query-remote-execution-capabilities-internal-http2-exception"}),"Failed to query remote execution capabilities: INTERNAL: http2 exception"),(0,l.kt)("h2",s({},{id:"bazelrc"}),".bazelrc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},".bazelignore")),(0,l.kt)("admonition",s({},{type:"caution"}),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u4efb\u610f\u73af\u5883\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8003\u8651\u9884\u5148\u751f\u6210 ",(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/stratum/stratum/pull/878/files"}),"https://github.com/stratum/stratum/pull/878/files")))))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"system",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/etc/bazel.bazelrc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%ProgramData%\\bazel.bazelrc")),(0,l.kt)("li",{parentName:"ul"},"BAZEL_SYSTEM_BAZELRC_PATH"),(0,l.kt)("li",{parentName:"ul"},"--nosystem_rc"))),(0,l.kt)("li",{parentName:"ul"},"workspace",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},".bazelrc"),(0,l.kt)("li",{parentName:"ul"},"--noworkspace_rc"),(0,l.kt)("li",{parentName:"ul"},"$workspace/tools/bazel.rc"),(0,l.kt)("li",{parentName:"ul"},"--nomaster_bazelrc"))),(0,l.kt)("li",{parentName:"ul"},"home",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"$HOME/.bazelrc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.bazelrc"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%HOME%/.bazelrc")),(0,l.kt)("li",{parentName:"ul"},"--nohome_rc"))),(0,l.kt)("li",{parentName:"ul"},"--bazelrc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/tensorflow/tensorflow/blob/master/.bazelrc"}),"https://github.com/tensorflow/tensorflow/blob/master/.bazelrc")),(0,l.kt)("li",{parentName:"ul"},"\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"%workspace%")))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"build --announce_rc\nbuild --copt -O0\nbuild --disk_cache=/tmp/bazel-disk-cache\n# Set convenient location for Bazel files to cache\nstartup --output_user_root=/tmp/bazel-cache/output-root\n\nbuild --verbose_failures=true\n# Profile build\nbuild --profile=/tmp/bazel.profile.json\n\n# JVM \u9650\u5236\n# startup --host_jvm_args=-Xmx3g --host_jvm_args=-Xms2g\n\n\ntry-import %workspace%/.bazelrc.user\n\n# Include git version info\nbuild --stamp\nbuild --workspace_status_command 'echo STABLE_GIT_COMMIT $(git rev-parse HEAD)'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# https://github.com/bazelbuild/bazelisk/blob/master/stamp.sh\nbuild:release -c opt --stamp --workspace_status_command="$PWD/stamp.sh"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"# Running bazel inside a `docker build` command causes trouble, cf:\n#   https://github.com/bazelbuild/bazel/issues/134\n# The easiest solution is to set up a bazelrc file forcing --batch.\nstartup --batch\n\n# Similarly, we need to workaround sandboxing issues:\n#   https://github.com/bazelbuild/bazel/issues/418\nbuild  --verbose_failures --spawn_strategy=standalone --strategy=Genrule=standalone\ntest --spawn_strategy=standalone\n\n# Force bazel output to use colors (good for jenkins) and print useful errors.\ncommon --color=yes\n\n# Configure tests - increase timeout, print errors and timeout warnings\ntest --verbose_failures --test_output=errors --test_verbose_timeout_warnings\n")),(0,l.kt)("h2",s({},{id:"notes-1"}),"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/build-ref.html"}),"https://docs.bazel.build/versions/main/build-ref.html")),(0,l.kt)("li",{parentName:"ul"},"workspace"),(0,l.kt)("li",{parentName:"ul"},"package",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BUILD"))),(0,l.kt)("li",{parentName:"ul"},"target"),(0,l.kt)("li",{parentName:"ul"},"label")),(0,l.kt)("h2",s({},{id:"query"}),"query"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bazel-collector"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/query.html"}),"https://docs.bazel.build/versions/main/query.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/query-how-to.html"}),"https://docs.bazel.build/versions/main/query-how-to.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'bazel query //...\n\nbazel query set(BUILD, some-dir/BUILD)\nbazel query rdeps(//..., set(//:all //some-dir:all))\nbazel query rdeps(//..., set(some-file.java, some-file.sh))\n\nbazel query rebuildfiles(some-ext.bzl, some-dir/another-ext.bzl)\n\nbazel query kind("*_test", <sub query>)\nbazel query kind("artifact_ci_release", <sub query>)\n\nbazel query "allpaths(//foo, third_party/...)" --notool_deps --output graph | dot -Tsvg > /tmp/deps.svg\n')),(0,l.kt)("h2",s({},{id:"bzlmod"}),"bzlmod"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bazel 5.0+"),(0,l.kt)("li",{parentName:"ul"},"MODULE.bazel"),(0,l.kt)("li",{parentName:"ul"},"--experimental_enable_bzlmod"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/bazel-central-registry"}),"https://github.com/bazelbuild/bazel-central-registry")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/bzlmod.html"}),"https://docs.bazel.build/versions/main/bzlmod.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.google.com/document/d/1moQfNcEIttsk6vYanNKIy3ZuK53hQUFq1b1r0rmsYVg/edit"}),"https://docs.google.com/document/d/1moQfNcEIttsk6vYanNKIy3ZuK53hQUFq1b1r0rmsYVg/edit"))),(0,l.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,l.kt)("h2",s({},{id:"build-vs-buildbazel"}),"BUILD vs BUILD.bazel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://github.com/bazelbuild/bazel/issues/4517"}),"bazel#4517"))),(0,l.kt)("h2",s({},{id:"fetching-local_config_xcode"}),"Fetching @local_config_xcode"),(0,l.kt)("h2",s({},{id:"from-google"}),"from google"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",s({parentName:"tr"},{align:null}),"google"),(0,l.kt)("th",s({parentName:"tr"},{align:null}),"os"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"blaze"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"bazel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"sponge"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"bru, BuildBuddy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"tap"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"BuildKite, CircleCI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"forge"),(0,l.kt)("td",s({parentName:"tr"},{align:null}),"BuildFarm, BuildBarn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",s({parentName:"tr"},{align:null}),"cider"),(0,l.kt)("td",s({parentName:"tr"},{align:null}))))),(0,l.kt)("h2",s({},{id:"output"}),"output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS /private/var/tmp"),(0,l.kt)("li",{parentName:"ul"},"Linux ~/.cache/bazel"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",s({parentName:"li"},{href:"https://docs.bazel.build/versions/main/output_directories.html"}),"https://docs.bazel.build/versions/main/output_directories.html")),(0,l.kt)("li",{parentName:"ul"},"out/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_bazel_$USER")," - outputUserRoot - ",(0,l.kt)("inlineCode",{parentName:"li"},"--output_user_root"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"install/ - installBase",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"$MD5(installation manifest)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"_","embedded_binaries/"),(0,l.kt)("li",{parentName:"ul"},"builtins_bzl/"),(0,l.kt)("li",{parentName:"ul"},"platforms/"))))),(0,l.kt)("li",{parentName:"ul"},"$MD5(workspace path) - outputBase - ",(0,l.kt)("inlineCode",{parentName:"li"},"--output_base"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"command.log"),(0,l.kt)("li",{parentName:"ul"},"java.log"),(0,l.kt)("li",{parentName:"ul"},"action_cache/"),(0,l.kt)("li",{parentName:"ul"},"action_outs/"),(0,l.kt)("li",{parentName:"ul"},"external/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"go_sdk/ - \u7f13\u5b58\u7684 Go SDK"),(0,l.kt)("li",{parentName:"ul"},"bazel_gazelle_go_repository_cache/ - \u7f13\u5b58\u7684 Go \u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ul"},"org_golang_google_genproto/"),(0,l.kt)("li",{parentName:"ul"},"remotejdk11_macos/"),(0,l.kt)("li",{parentName:"ul"},"remote_java_tools_darwin/"),(0,l.kt)("li",{parentName:"ul"},"com_google_protobuf/"))),(0,l.kt)("li",{parentName:"ul"},"server/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"jvm.out"))),(0,l.kt)("li",{parentName:"ul"},"execroot/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__main__"),"/ - $WORKSPACE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bazel-out/ - outputPath",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"stable-status.txt"),(0,l.kt)("li",{parentName:"ul"},"volatile-status.txt"),(0,l.kt)("li",{parentName:"ul"},"darwin-fastbuild/",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bin/ - $(BINDIR)"))),(0,l.kt)("li",{parentName:"ul"},"host/ - BuildConfiguration"))),(0,l.kt)("li",{parentName:"ul"},"external"),(0,l.kt)("li",{parentName:"ul"},"$PACKAGES -> realpath"))))),(0,l.kt)("li",{parentName:"ul"},"bazel-remote-logs/"),(0,l.kt)("li",{parentName:"ul"},"bazel-workers/"),(0,l.kt)("li",{parentName:"ul"},"install -> installBase"))))))),(0,l.kt)("li",{parentName:"ul"},"bazel-out"),(0,l.kt)("li",{parentName:"ul"},"bazel-bin"),(0,l.kt)("li",{parentName:"ul"},"bazel-testlogs"),(0,l.kt)("li",{parentName:"ul"},"bazel-$WORKSPACE"),(0,l.kt)("li",{parentName:"ul"},"TEST_TMPDIR=~/.cache/bazel"),(0,l.kt)("li",{parentName:"ul"},"--output_user_root"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project_dir = ctx.path(ctx.attr.file_in_project).dirname"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"__workspace_dir__"))))),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# all go_sdk - \u6bcf\u4e2a 400MB\ndu -csh /private/var/tmp/_bazel_$USER/*/external/go_sdk\n\n# outputPath & action_cache\nbazel clean\n")))}_.isMDXComponent=!0}}]);