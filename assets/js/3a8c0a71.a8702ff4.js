/*! For license information please see 3a8c0a71.a8702ff4.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63581],{42634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=t(11527),r=t(47214);const l={title:"Debugging"},a="Go Debug",s={id:"languages/go/go-debug",title:"Debugging",description:"- go-delve/delve",source:"@site/../notes/languages/go/go-debug.md",sourceDirName:"languages/go",slug:"/languages/go/debug",permalink:"/notes/languages/go/debug",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-debug.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"Debugging"},sidebar:"docs",previous:{title:"Go Cookbook",permalink:"/notes/languages/go/cookbook"},next:{title:"Go FAQ",permalink:"/notes/languages/go/faq"}},i={},c=[{value:"pprof",id:"pprof",level:2},{value:"benchstat",id:"benchstat",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"go-debug",children:"Go Debug"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/go-delve/delve",children:"go-delve/delve"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'go install github.com/go-delve/delve/cmd/dlv@latest\n\n# \u4ed3\u5e93\u5185\u8fd0\u884c go.mod\ndlv debug --headless --listen=:2345 --api-version=2 --accept-multiclient\n# \u7f16\u8bd1\u540e\u8fdc\u7a0b\u8fd0\u884c\ngo build -gcflags "all=-N -l" github.com/app/demo\ndlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./demo\n'})}),"\n",(0,o.jsx)(n.h2,{id:"pprof",children:"pprof"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'var cpuprofile = flag.String("cpuprofile", "", "write cpu profile to file")\n\nfunc main() {\n    flag.Parse()\n    if *cpuprofile != "" {\n        f, err := os.Create(*cpuprofile)\n        if err != nil {\n            log.Fatal(err)\n        }\n        pprof.StartCPUProfile(f)\n        defer pprof.StopCPUProfile()\n    }\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go build main.go\n./main -cpuprofile=out.prof\ngo tool pprof main out.prof\n"})}),"\n",(0,o.jsx)(n.h2,{id:"benchstat",children:"benchstat"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go install golang.org/x/perf/cmd/benchstat@latest\n\n# \u6d4b\u8bd5\u7136\u540e\u8f93\u51fa\u7edf\u8ba1\ngo test ./contextx/ -bench=BenchmarkCopy -benchmem -run=^$ -count=10 > out.txt\nbenchstat out.txt\n\n# \u5bf9\u6bd4\n# delta \u4e3a ~ \u8868\u793a\u4e24\u6b21\u6ca1\u6709\u5dee\u5f02\nbenchstat old.txt new.txt\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat",children:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},3354:(e,n,t)=>{var o=t(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,l={},c=null,g=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(g=n.ref),n)a.call(n,o)&&!i.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:g,props:l,_owner:s.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(50959);const r={},l=o.createContext(r);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);