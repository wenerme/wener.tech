"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8864],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),g=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=g(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=g(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var g=2;g<a;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68638:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return u},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={title:"Golang Linter"},c=void 0,g={unversionedId:"languages/go/go-lint",id:"languages/go/go-lint",title:"Golang Linter",description:"- vet",source:"@site/notes/languages/go/go-lint.md",sourceDirName:"languages/go",slug:"/languages/go/go-lint",permalink:"/notes/languages/go/go-lint",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-lint.md",tags:[],version:"current",frontMatter:{title:"Golang Linter"},sidebar:"docs",previous:{title:"Go GUI Awesome",permalink:"/notes/languages/go/go-gui-awesome"},next:{title:"Golang \u5fae\u670d\u52a1",permalink:"/notes/languages/go/go-microservice"}},u=[{value:"gofumpt",id:"gofumpt",children:[],level:2},{value:"gosec",id:"gosec",children:[],level:2},{value:"golangci-lint",id:"golangci-lint",children:[],level:2}],s={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/securego/gosec"},"securego/gosec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dominikh/go-tools"},"dominikh/go-tools"))),(0,a.kt)("h2",{id:"gofumpt"},"gofumpt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 gofmt - \u66f4\u4e25\u683c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install mvdan.cc/gofumpt@latest\n")),(0,a.kt)("h2",{id:"gosec"},"gosec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'go get github.com/securego/gosec/v2/cmd/gosec\ncat <<CONF > gosec.conf.json\n{\n  "global": {\n    "nosec": "enabled",\n    "audit": "enabled"\n  }\n}\nCONF\ngosec -conf gosec.conf.json ./...\n')),(0,a.kt)("h2",{id:"golangci-lint"},"golangci-lint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml"},"https://github.com/golangci/golangci-lint/blob/master/.golangci.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//nolint\n//nolint:golint,unused\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$VER=1.42.0\ncurl -LO https://github.com/golangci/golangci-lint/releases/download/v$VER/golangci-lint-$VER-darwin-amd64.tar.gz\ntar zxvf golangci-lint-$VER-darwin-amd64.tar.gz\n# curl -LO https://github.com/golangci/golangci-lint/releases/download/v1.32.2/golangci-lint-1.32.2-linux-amd64.tar.gz\n")))}p.isMDXComponent=!0}}]);