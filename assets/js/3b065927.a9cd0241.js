"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92831],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,f=c["".concat(p,".").concat(g)]||c[g]||s[g]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83926:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(96600),a=t(27279),o=(t(59496),t(49613)),l=["components"],i={title:"ko"},p=void 0,u={unversionedId:"languages/go/lib/ko",id:"languages/go/lib/ko",title:"ko",description:"- google/ko",source:"@site/notes/languages/go/lib/ko.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/ko",permalink:"/notes/languages/go/lib/ko",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/ko.md",tags:[],version:"current",frontMatter:{title:"ko"},sidebar:"docs",previous:{title:"graphql",permalink:"/notes/languages/go/lib/graphql"},next:{title:"kratos",permalink:"/notes/languages/go/lib/kratos"}},m={},s=[],c={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/ko"},"google/ko"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go source to Kubernetes"))),(0,o.kt)("li",{parentName:"ul"},"KO_DOCKER_REPO",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"KO_DOCKER_REPO=ko.local, -L, --local - \u672c\u5730\uff0c\u4e0d push"))),(0,o.kt)("li",{parentName:"ul"},"KO_CONFIG_PATH=.ko.yaml"),(0,o.kt)("li",{parentName:"ul"},"KIND_CLUSTER_NAME"),(0,o.kt)("li",{parentName:"ul"},"--platform=linux/amd64,linux/arm64 - \u591a\u5e73\u53f0\u6784\u5efa"),(0,o.kt)("li",{parentName:"ul"},"KO_DATA_PATH=kodata - \u9759\u6001\u8d44\u6e90\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"GOFLAGS"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5305\u542b -trimpath")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u7528 CGO"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install ko\n# Go install\ngo install github.com/google/ko@latest\n\nko build ./cmd/app\n\nko resolve -f config/ > release.yaml\n# ko resolve -f config/ | kubectl apply -f -\nko apply -f config/\nko delete -f config/\n\nkustomize build config | ko resolve -f -\n\n# bash completion\nko completion\n# go.mod\nko publish -L --bare --platform=linux/amd64 --push=false -t $(git rev-parse HEAD) .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u9ed8\u8ba4\u57fa\u7840\u955c\u50cf\ndefaultBaseImage: gcr.io/distroless/static:nonroot\n\n# \u4fee\u6539\u57fa\u7840\u955c\u50cf\nbaseImageOverrides:\n  github.com/my-user/my-repo/cmd/app: registry.example.com/base/for/app\n  github.com/my-user/my-repo/cmd/foo: registry.example.com/base/for/foo\n\n# \u81ea\u5b9a\u4e49\u6784\u5efa\nbuilds:\n  - id: foo\n    main: ./foobar/foo\n    env:\n      - GOPRIVATE=git.internal.example.com,source.developers.google.com\n    flags:\n      - -tags\n      - netgo\n    ldflags:\n      - -s -w\n      - -extldflags "-static"\n      - -X main.version={{.Env.VERSION}}\n  - id: bar\n    main: ./foobar/bar/main.go\n    env:\n      - GOCACHE=/workspace/.gocache\n    ldflags:\n      - -s\n      - -w\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"template \u652f\u6301\u6a21\u677f - \u4f46\u53ea\u652f\u6301 \u73af\u5883\u53d8\u91cf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ko build ./cmd/app")," \u9ed8\u8ba4\u955c\u50cf\u540d\u5b57 ",(0,o.kt)("inlineCode",{parentName:"li"},"${KO_DOCKER_REPO}/app-<md5>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"--base-import-paths,-B - \u5ffd\u7565 md5"),(0,o.kt)("li",{parentName:"ul"},"--bare - \u53ea\u7528 repo \u90e8\u5206"),(0,o.kt)("li",{parentName:"ul"},"--preserve-import-path,-P - repo \u540e\u518d\u52a0\u4e0a \u6a21\u5757 \u8def\u5f84")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n        - name: my-app\n          # Import Path\n          image: ko://github.com/my-user/my-repo/cmd/app\n")))}g.isMDXComponent=!0}}]);