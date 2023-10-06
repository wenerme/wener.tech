"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39271],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85116:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return y},metadata:function(){return h},toc:function(){return g}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={title:"earthly"},f="earthly",h={unversionedId:"dev/build/earthly",id:"dev/build/earthly",title:"earthly",description:"- earthly/earthly",source:"@site/../notes/dev/build/earthly.md",sourceDirName:"dev/build",slug:"/dev/build/earthly",permalink:"/notes/dev/build/earthly",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/earthly.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634309581,formattedLastUpdatedAt:"Oct 15, 2021",frontMatter:{title:"earthly"},sidebar:"docs",previous:{title:"distcc",permalink:"/notes/dev/build/distcc"},next:{title:"just",permalink:"/notes/dev/build/just"}},b={},g=[],O={toc:g},v="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,s(d(d({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"earthly"}),"earthly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/earthly/earthly"}),"earthly/earthly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Makefile + Dockerfile = Earthfile")))),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install earthly/earthly/earthly && earthly bootstrap\n# macOS manual\ncurl -LO https://github.com/earthly/earthly/releases/download/v0.5.24/earthly-darwin-amd64\nchmod +x earthly-darwin-amd64\nmv earthly-darwin-amd64 ~/go/bin/earthly\n\nearthly +docker\n")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-Earthfile"}),'FROM golang:alpine\nWORKDIR /go-example\n\ndeps:\n    COPY go.mod go.sum ./\n    RUN go mod download\n    # Output these back in case go mod download changes them.\n    SAVE ARTIFACT go.mod AS LOCAL go.mod\n    SAVE ARTIFACT go.sum AS LOCAL go.sum\n\nbuild:\n    FROM +deps\n    COPY main.go .\n    RUN go build -o build/go-example main.go\n    SAVE ARTIFACT build/go-example /go-example AS LOCAL build/go-example\n\ndocker:\n    COPY +build/go-example .\n    ENTRYPOINT ["/go-example/go-example"]\n    SAVE IMAGE go-example:latest\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"~/.earthly/config.yml")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"global:\n  # ~/.earthly/install_id\n  disable_analytics: true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.earthly.dev/docs/earthly-config"}),"https://docs.earthly.dev/docs/earthly-config"))))}w.isMDXComponent=!0}}]);