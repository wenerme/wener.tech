"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63581],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||g[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const s={title:"Debugging"},f="Go Debug",d={unversionedId:"languages/go/go-debug",id:"languages/go/go-debug",title:"Debugging",description:"- go-delve/delve",source:"@site/../notes/languages/go/go-debug.md",sourceDirName:"languages/go",slug:"/languages/go/go-debug",permalink:"/notes/languages/go/go-debug",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-debug.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"Go Cookbook",permalink:"/notes/languages/go/go-cookbook"},next:{title:"Go FAQ",permalink:"/notes/languages/go/go-faq"}},b={},m=[{value:"pprof",id:"pprof",level:2},{value:"benchstat",id:"benchstat",level:2}],v={toc:m};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},v),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",g({},{id:"go-debug"}),"Go Debug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://github.com/go-delve/delve"}),"go-delve/delve"))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),'go install github.com/go-delve/delve/cmd/dlv@latest\n\n# \u4ed3\u5e93\u5185\u8fd0\u884c go.mod\ndlv debug --headless --listen=:2345 --api-version=2 --accept-multiclient\n# \u7f16\u8bd1\u540e\u8fdc\u7a0b\u8fd0\u884c\ngo build -gcflags "all=-N -l" github.com/app/demo\ndlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./demo\n')),(0,r.kt)("h2",g({},{id:"pprof"}),"pprof"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-go"}),'var cpuprofile = flag.String("cpuprofile", "", "write cpu profile to file")\n\nfunc main() {\n    flag.Parse()\n    if *cpuprofile != "" {\n        f, err := os.Create(*cpuprofile)\n        if err != nil {\n            log.Fatal(err)\n        }\n        pprof.StartCPUProfile(f)\n        defer pprof.StopCPUProfile()\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"go build main.go\n./main -cpuprofile=out.prof\ngo tool pprof main out.prof\n")),(0,r.kt)("h2",g({},{id:"benchstat"}),"benchstat"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"go install golang.org/x/perf/cmd/benchstat@latest\n\n# \u6d4b\u8bd5\u7136\u540e\u8f93\u51fa\u7edf\u8ba1\ngo test ./contextx/ -bench=BenchmarkCopy -benchmem -run=^$ -count=10 > out.txt\nbenchstat out.txt\n\n# \u5bf9\u6bd4\n# delta \u4e3a ~ \u8868\u793a\u4e24\u6b21\u6ca1\u6709\u5dee\u5f02\nbenchstat old.txt new.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",g({parentName:"li"},{href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"}),"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"))))}y.isMDXComponent=!0}}]);