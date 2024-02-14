/*! For license information please see 82b64ff1.41dff576.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47923],{25684:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var t=i(2488),l=i(62780);const o={title:"Golang Linter"},r="Golang Linter",s={id:"languages/go/go-lint",title:"Golang Linter",description:"- vet",source:"@site/../notes/languages/go/go-lint.md",sourceDirName:"languages/go",slug:"/languages/go/lint",permalink:"/notes/languages/go/lint",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-lint.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668846252,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{title:"Golang Linter"},sidebar:"docs",previous:{title:"Go GUI Awesome",permalink:"/notes/languages/go/gui-awesome"},next:{title:"Golang \u5fae\u670d\u52a1",permalink:"/notes/languages/go/microservice"}},c={},g=[{value:"gofumpt",id:"gofumpt",level:2},{value:"gosec",id:"gosec",level:2},{value:"golangci-lint",id:"golangci-lint",level:2},{value:"revive",id:"revive",level:2},{value:"gocritic",id:"gocritic",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"golang-linter",children:"Golang Linter"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"vet"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/securego/gosec",children:"securego/gosec"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/dominikh/go-tools",children:"dominikh/go-tools"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"gofumpt",children:"gofumpt"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u66ff\u4ee3 gofmt - \u66f4\u4e25\u683c"}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/mvdan/gofumpt",children:"mvdan/gofumpt"})}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"go install mvdan.cc/gofumpt@latest\n"})}),"\n",(0,t.jsx)(e.h2,{id:"gosec",children:"gosec"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'go get github.com/securego/gosec/v2/cmd/gosec\ncat <<CONF > gosec.conf.json\n{\n  "global": {\n    "nosec": "enabled",\n    "audit": "enabled"\n  }\n}\nCONF\ngosec -conf gosec.conf.json ./...\n'})}),"\n",(0,t.jsx)(e.h2,{id:"golangci-lint",children:"golangci-lint"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"//nolint\n//nolint:golint,unused\n//nolint:golint,unused // \u89e3\u91ca\u8bf4\u660e\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"VER=1.50.1\n# curl -LO https://github.com/golangci/golangci-lint/releases/download/v$VER/golangci-lint-$VER-darwin-amd64.tar.gz\ncurl -LO https://ghproxy.com/https://github.com/golangci/golangci-lint/releases/download/v$VER/golangci-lint-$VER-darwin-amd64.tar.gz\ntar zxvf golangci-lint-$VER-darwin-amd64.tar.gz\nmv golangci-lint-$VER-darwin-amd64/golangci-lint ~/go/bin/\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://golangci-lint.run/usage/configuration/",children:"https://golangci-lint.run/usage/configuration/"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://golangci-lint.run/usage/linters",children:"https://golangci-lint.run/usage/linters"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Support of generics ",(0,t.jsx)(e.a,{href:"https://github.com/golangci/golangci-lint/issues/2649",children:"#2649"})]}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/golangci/golangci-lint-action",children:"golangci/golangci-lint-action"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml",children:"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/github/git-sizer/blob/master/.golangci.toml",children:"https://github.com/github/git-sizer/blob/master/.golangci.toml"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"revive",children:"revive"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/mgechev/revive",children:"mgechev/revive"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"gocritic",children:"gocritic"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/go-critic/go-critic",children:"go-critic/go-critic"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://go-critic.com/overview.html",children:"https://go-critic.com/overview.html"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},38088:(n,e,i)=>{var t=i(96651),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function g(n,e,i){var t,o={},g=null,a=null;for(t in void 0!==i&&(g=""+i),void 0!==e.key&&(g=""+e.key),void 0!==e.ref&&(a=e.ref),e)r.call(e,t)&&!c.hasOwnProperty(t)&&(o[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===o[t]&&(o[t]=e[t]);return{$$typeof:l,type:n,key:g,ref:a,props:o,_owner:s.current}}e.Fragment=o,e.jsx=g,e.jsxs=g},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>s,M:()=>r});var t=i(96651);const l={},o=t.createContext(l);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);