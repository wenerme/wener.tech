"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99655],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},48454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return _},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),b=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Bazel FAQ",tags:["FAQ"]},f="Bazel FAQ",g={unversionedId:"dev/build/bazel/bazel-faq",id:"dev/build/bazel/bazel-faq",title:"Bazel FAQ",description:"Central cache for external repositories",source:"@site/../notes/dev/build/bazel/bazel-faq.md",sourceDirName:"dev/build/bazel",slug:"/dev/build/bazel/faq",permalink:"/notes/dev/build/bazel/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/bazel/bazel-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642767775,formattedLastUpdatedAt:"Jan 21, 2022",frontMatter:{title:"Bazel FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Bazel Container",permalink:"/notes/dev/build/bazel/container"},next:{title:"Brazel Go",permalink:"/notes/dev/build/bazel/go"}},h={},v=[{value:"Central cache for external repositories",id:"central-cache-for-external-repositories",level:2},{value:"git add",id:"git-add",level:2},{value:"Bazel4 on AlpineLinux",id:"bazel4-on-alpinelinux",level:2},{value:"gcc: fatal error: cannot execute &#39;cc1plus&#39;: execvp: No such file or directory",id:"gcc-fatal-error-cannot-execute-cc1plus-execvp-no-such-file-or-directory",level:2},{value:"/usr/bin/bazel-real: <code>_ZSt28__throw_bad_array_new_lengthv</code>: symbol not found",id:"usrbinbazel-real-_zst28__throw_bad_array_new_lengthv-symbol-not-found",level:2},{value:"glob: recursive wildcard must be its own segment",id:"glob-recursive-wildcard-must-be-its-own-segment",level:2}],y={toc:v},k="wrapper";function _(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,n.kt)(k,d(p(p({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"bazel-faq"}),"Bazel FAQ"),(0,n.kt)("h2",p({},{id:"central-cache-for-external-repositories"}),"Central cache for external repositories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"repository_cache - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.bazel.build/versions/main/command-line-reference.html#flag--repository_cache"}),"https://docs.bazel.build/versions/main/command-line-reference.html#flag--repository_cache"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"~/.cache/bazel/_bazel_$USER/cache/repos/v1/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/private/var/tmp/_bazel_$USER/cache/repos/v1/content_addressable/sha256/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.bazel.build/versions/main/guide.html#repository-cache"}),"https://docs.bazel.build/versions/main/guide.html#repository-cache")),(0,n.kt)("li",{parentName:"ul"},"experimental_repository_cache_hardlinks"),(0,n.kt)("li",{parentName:"ul"},"experimental_repository_cache_urls_as_default_canonical_id")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"du -sh /private/var/tmp/_bazel_$USER/cache/repos/v1/content_addressable/sha256\n")),(0,n.kt)("h2",p({},{id:"git-add"}),"git add"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"git add --ignore-errors '**/BUILD.bazel' WORKSPACE deps.bzl BUILD.bazel\n")),(0,n.kt)("h2",p({},{id:"bazel4-on-alpinelinux"}),"Bazel4 on AlpineLinux"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# ALpineLinux 3.15\napk add openjdk17-jdk bazel4 -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing\n\n# AlpineLinux Bazel \u73af\u5883\napk add xz python3 coreutils tar patch diffutils gcc g++\nln -s /usr/bin/python3 /usr/bin/python\n\n# ALpineLinux <= 3.15\napk upgrade g++ libstdc++ -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/main\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bazel \u5b98\u65b9\u6784\u5efa\u7684\u4e0d\u652f\u6301 musl",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Using standalone binary on Alpine ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bazelbuild/bazel/issues/5891"}),"#5891")),(0,n.kt)("li",{parentName:"ul"},"musl support in CI ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/bazelbuild/continuous-integration/issues/1190"}),"#1190")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/aports/-/blob/master/testing/bazel4/APKBUILD"}),"https://gitlab.alpinelinux.org/alpine/aports/-/blob/master/testing/bazel4/APKBUILD"))))),(0,n.kt)("h2",p({},{id:"gcc-fatal-error-cannot-execute-cc1plus-execvp-no-such-file-or-directory"}),"gcc: fatal error: cannot execute 'cc1plus': execvp: No such file or directory"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add g++\n")),(0,n.kt)("h2",p({},{id:"usrbinbazel-real-_zst28__throw_bad_array_new_lengthv-symbol-not-found"}),"/usr/bin/bazel-real: ",(0,n.kt)("inlineCode",{parentName:"h2"},"_ZSt28__throw_bad_array_new_lengthv"),": symbol not found"),(0,n.kt)("p",null,"install bazel from edge testing"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# sync libstdc++ version\napk upgrade libstdc++ -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/main\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"ldd /usr/bin/bazel-real\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"    /lib/ld-musl-x86_64.so.1 (0x7f8198234000)\n    libstdc++.so.6 => /usr/lib/libstdc++.so.6 (0x7f8197d6a000)\n    libgcc_s.so.1 => /usr/lib/libgcc_s.so.1 (0x7f8197d50000)\n    libc.musl-x86_64.so.1 => /lib/ld-musl-x86_64.so.1 (0x7f8198234000)\nError relocating /usr/bin/bazel-real: _ZSt28__throw_bad_array_new_lengthv: symbol not found\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# Missing\nobjdump -T /usr/lib/libstdc++.so.6 | grep throw_bad_array\n")),(0,n.kt)("h2",p({},{id:"glob-recursive-wildcard-must-be-its-own-segment"}),"glob: recursive wildcard must be its own segment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'glob("src/**.c")')," -> ",(0,n.kt)("inlineCode",{parentName:"li"},'glob("src/**/*.c")'))))}_.isMDXComponent=!0}}]);