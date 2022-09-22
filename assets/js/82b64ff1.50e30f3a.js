"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[28268],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),c=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(g,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const p={title:"Golang Linter"},m="Golang Linter",f={unversionedId:"languages/go/go-lint",id:"languages/go/go-lint",title:"Golang Linter",description:"- vet",source:"@site/../notes/languages/go/go-lint.md",sourceDirName:"languages/go",slug:"/languages/go/lint",permalink:"/notes/languages/go/lint",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-lint.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"Golang Linter"},sidebar:"docs",previous:{title:"Go GUI Awesome",permalink:"/notes/languages/go/gui-awesome"},next:{title:"Golang \u5fae\u670d\u52a1",permalink:"/notes/languages/go/microservice"}},d={},h=[{value:"gofumpt",id:"gofumpt",level:2},{value:"gosec",id:"gosec",level:2},{value:"golangci-lint",id:"golangci-lint",level:2},{value:"revive",id:"revive",level:2},{value:"gocritic",id:"gocritic",level:2}],b={toc:h};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"golang-linter"}),"Golang Linter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/securego/gosec"}),"securego/gosec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/dominikh/go-tools"}),"dominikh/go-tools"))),(0,r.kt)("h2",s({},{id:"gofumpt"}),"gofumpt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 gofmt - \u66f4\u4e25\u683c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/mvdan/gofumpt"}),"mvdan/gofumpt"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"go install mvdan.cc/gofumpt@latest\n")),(0,r.kt)("h2",s({},{id:"gosec"}),"gosec"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'go get github.com/securego/gosec/v2/cmd/gosec\ncat <<CONF > gosec.conf.json\n{\n  "global": {\n    "nosec": "enabled",\n    "audit": "enabled"\n  }\n}\nCONF\ngosec -conf gosec.conf.json ./...\n')),(0,r.kt)("h2",s({},{id:"golangci-lint"}),"golangci-lint"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-go"}),"//nolint\n//nolint:golint,unused\n//nolint:golint,unused // \u89e3\u91ca\u8bf4\u660e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"VER=1.46.2\n# curl -LO https://github.com/golangci/golangci-lint/releases/download/v$VER/golangci-lint-$VER-darwin-amd64.tar.gz\ncurl -LO https://ghproxy.com/https://github.com/golangci/golangci-lint/releases/download/v$VER/golangci-lint-$VER-darwin-amd64.tar.gz\ntar zxvf golangci-lint-$VER-darwin-amd64.tar.gz\nmv golangci-lint-$VER-darwin-amd64/golangci-lint ~/go/bin/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://golangci-lint.run/usage/configuration/"}),"https://golangci-lint.run/usage/configuration/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://golangci-lint.run/usage/linters"}),"https://golangci-lint.run/usage/linters")))),(0,r.kt)("li",{parentName:"ul"},"Support of generics ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/golangci/golangci-lint/issues/2649"}),"#2649")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/golangci/golangci-lint-action"}),"golangci/golangci-lint-action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml"}),"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/github/git-sizer/blob/master/.golangci.toml"}),"https://github.com/github/git-sizer/blob/master/.golangci.toml"))),(0,r.kt)("h2",s({},{id:"revive"}),"revive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/mgechev/revive"}),"mgechev/revive"))),(0,r.kt)("h2",s({},{id:"gocritic"}),"gocritic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/go-critic/go-critic"}),"go-critic/go-critic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://go-critic.com/overview.html"}),"https://go-critic.com/overview.html"))))}v.isMDXComponent=!0}}]);