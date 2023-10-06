"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45414],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return g},metadata:function(){return d},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"ko"},k="ko",d={unversionedId:"languages/go/lib/ko",id:"languages/go/lib/ko",title:"ko",description:"- google/ko",source:"@site/../notes/languages/go/lib/ko.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/ko",permalink:"/notes/languages/go/lib/ko",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/ko.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"ko"},sidebar:"docs",previous:{title:"graphql",permalink:"/notes/languages/go/lib/graphql"},next:{title:"kratos",permalink:"/notes/languages/go/lib/kratos"}},b={},y=[],O={toc:y},v="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,m(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"ko"}),"ko"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/ko"}),"google/ko"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go source to Kubernetes"))),(0,r.kt)("li",{parentName:"ul"},"KO_DOCKER_REPO",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"KO_DOCKER_REPO=ko.local, -L, --local - \u672c\u5730\uff0c\u4e0d push"))),(0,r.kt)("li",{parentName:"ul"},"KO_CONFIG_PATH=.ko.yaml"),(0,r.kt)("li",{parentName:"ul"},"KIND_CLUSTER_NAME"),(0,r.kt)("li",{parentName:"ul"},"--platform=linux/amd64,linux/arm64 - \u591a\u5e73\u53f0\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"KO_DATA_PATH=kodata - \u9759\u6001\u8d44\u6e90\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"GOFLAGS"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5305\u542b -trimpath")),(0,r.kt)("admonition",s({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u7528 CGO"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install ko\n# Go install\ngo install github.com/google/ko@latest\n\nko build ./cmd/app\n\nko resolve -f config/ > release.yaml\n# ko resolve -f config/ | kubectl apply -f -\nko apply -f config/\nko delete -f config/\n\nkustomize build config | ko resolve -f -\n\n# bash completion\nko completion\n# go.mod\nko publish -L --bare --platform=linux/amd64 --push=false -t $(git rev-parse HEAD) .\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),'# \u9ed8\u8ba4\u57fa\u7840\u955c\u50cf\ndefaultBaseImage: gcr.io/distroless/static:nonroot\n\n# \u4fee\u6539\u57fa\u7840\u955c\u50cf\nbaseImageOverrides:\n  github.com/my-user/my-repo/cmd/app: registry.example.com/base/for/app\n  github.com/my-user/my-repo/cmd/foo: registry.example.com/base/for/foo\n\n# \u81ea\u5b9a\u4e49\u6784\u5efa\nbuilds:\n  - id: foo\n    main: ./foobar/foo\n    env:\n      - GOPRIVATE=git.internal.example.com,source.developers.google.com\n    flags:\n      - -tags\n      - netgo\n    ldflags:\n      - -s -w\n      - -extldflags "-static"\n      - -X main.version={{.Env.VERSION}}\n  - id: bar\n    main: ./foobar/bar/main.go\n    env:\n      - GOCACHE=/workspace/.gocache\n    ldflags:\n      - -s\n      - -w\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"template \u652f\u6301\u6a21\u677f - \u4f46\u53ea\u652f\u6301 \u73af\u5883\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ko build ./cmd/app")," \u9ed8\u8ba4\u955c\u50cf\u540d\u5b57 ",(0,r.kt)("inlineCode",{parentName:"li"},"${KO_DOCKER_REPO}/app-<md5>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"--base-import-paths,-B - \u5ffd\u7565 md5"),(0,r.kt)("li",{parentName:"ul"},"--bare - \u53ea\u7528 repo \u90e8\u5206"),(0,r.kt)("li",{parentName:"ul"},"--preserve-import-path,-P - repo \u540e\u518d\u52a0\u4e0a \u6a21\u5757 \u8def\u5f84")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n        - name: my-app\n          # Import Path\n          image: ko://github.com/my-user/my-repo/cmd/app\n")))}N.isMDXComponent=!0}}]);