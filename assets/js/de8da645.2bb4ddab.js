"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61700],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),g=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var g=2;g<a;g++)l[g]=n[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return u}});var o=n(96600),r=n(27279),a=(n(59496),n(49613)),l=["components"],s={title:"Tools"},i="Go Tools",g={unversionedId:"languages/go/go-tools",id:"languages/go/go-tools",title:"Tools",description:"- offcial golang.org/x/tools/cmd",source:"@site/../notes/languages/go/go-tools.md",sourceDirName:"languages/go",slug:"/languages/go/go-tools",permalink:"/notes/languages/go/go-tools",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/go-tools.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1643905121,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"Tools"},sidebar:"docs",previous:{title:"Golang Testing",permalink:"/notes/languages/go/go-test"},next:{title:"Go Version",permalink:"/notes/languages/go/go-version"}},c={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-tools"},"Go Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"offcial ",(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/golang.org/x/tools/cmd"},"golang.org/x/tools/cmd"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bundle, callgraph, digraph, godex, godoc, guru, ssadump"),(0,a.kt)("li",{parentName:"ul"},"eg, gomvpkg, gorename")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u589e\u5f3a\u7248 go fmt\ngo install mvdan.cc/gofumpt@latest\n# \u6392\u5e8f imports\ngo install golang.org/x/tools/cmd/goimports@latest\n\n# stringer\n# \u4e3a enum/const \u751f\u6210 String \u65b9\u6cd5\ngo install golang.org/x/tools/cmd/stringer@latest\n\n# gomodifytags\n# \u4e3a struct \u751f\u6210 json, yaml tag\ngo install github.com/fatih/gomodifytags@latest\ngomodifytags -file dto.go -struct Server -add-tags json -add-options json=omitempty -transform camelcase --skip-unexported\n\n# gowrap\n# \u4e3a interface \u751f\u6210 \u5b9e\u73b0 - \u4fee\u9970\u6a21\u5f0f\ngo install github.com/hexdigest/gowrap/cmd/gowrap@latest\n")))}m.isMDXComponent=!0}}]);