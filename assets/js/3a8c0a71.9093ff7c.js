"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63581],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,d=s["".concat(i,".").concat(f)]||s[f]||g[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),l=["components"],u={title:"Debugging"},i="Go Debug",c={unversionedId:"languages/go/go-debug",id:"languages/go/go-debug",title:"Debugging",description:"- go-delve/delve",source:"@site/../notes/languages/go/go-debug.md",sourceDirName:"languages/go",slug:"/languages/go/go-debug",permalink:"/notes/languages/go/go-debug",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/go-debug.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"Go Cookbook",permalink:"/notes/languages/go/go-cookbook"},next:{title:"Go FAQ",permalink:"/notes/languages/go/go-faq"}},p={},g=[{value:"pprof",id:"pprof",level:2},{value:"benchstat",id:"benchstat",level:2}],s={toc:g};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-debug"},"Go Debug"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-delve/delve"},"go-delve/delve"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'go install github.com/go-delve/delve/cmd/dlv@latest\n\n# \u4ed3\u5e93\u5185\u8fd0\u884c go.mod\ndlv debug --headless --listen=:2345 --api-version=2 --accept-multiclient\n# \u7f16\u8bd1\u540e\u8fdc\u7a0b\u8fd0\u884c\ngo build -gcflags "all=-N -l" github.com/app/demo\ndlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./demo\n')),(0,a.kt)("h2",{id:"pprof"},"pprof"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var cpuprofile = flag.String("cpuprofile", "", "write cpu profile to file")\n\nfunc main() {\n    flag.Parse()\n    if *cpuprofile != "" {\n        f, err := os.Create(*cpuprofile)\n        if err != nil {\n            log.Fatal(err)\n        }\n        pprof.StartCPUProfile(f)\n        defer pprof.StopCPUProfile()\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build main.go\n./main -cpuprofile=out.prof\ngo tool pprof main out.prof\n")),(0,a.kt)("h2",{id:"benchstat"},"benchstat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install golang.org/x/perf/cmd/benchstat@latest\n\n# \u6d4b\u8bd5\u7136\u540e\u8f93\u51fa\u7edf\u8ba1\ngo test ./contextx/ -bench=BenchmarkCopy -benchmem -run=^$ -count=10 > out.txt\nbenchstat out.txt\n\n# \u5bf9\u6bd4\n# delta \u4e3a ~ \u8868\u793a\u4e24\u6b21\u6ca1\u6709\u5dee\u5f02\nbenchstat old.txt new.txt\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"},"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"))))}f.isMDXComponent=!0}}]);