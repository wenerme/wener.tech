"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49511],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),g=o,m=f["".concat(p,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75527:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const f={title:"Gitlab Repository"},g="Gitlab Repository",m={unversionedId:"service/forge/gitlab/gitlab-repo",id:"service/forge/gitlab/gitlab-repo",title:"Gitlab Repository",description:"Go Proxy",source:"@site/../notes/service/forge/gitlab/gitlab-repo.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/repo",permalink:"/notes/service/forge/gitlab/repo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitlab/gitlab-repo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629667479,formattedLastUpdatedAt:"Aug 22, 2021",frontMatter:{title:"Gitlab Repository"},sidebar:"docs",previous:{title:"GitLab K8S \u96c6\u6210",permalink:"/notes/service/forge/gitlab/k8s"},next:{title:"Gitlab Runner",permalink:"/notes/service/forge/gitlab/runner"}},b={},y=[{value:"Go Proxy",id:"go-proxy",level:2}],d={toc:y};function v(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},d),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"gitlab-repository"}),"Gitlab Repository"),(0,n.kt)("h2",u({},{id:"go-proxy"}),"Go Proxy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GOENV",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS ",(0,n.kt)("inlineCode",{parentName:"li"},"~/Library/Application Support/go/env")),(0,n.kt)("li",{parentName:"ul"},"~/.go/env"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$GOPATH/env")))),(0,n.kt)("li",{parentName:"ul"},"GOPROXY",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://proxy.golang.org,direct"}),"https://proxy.golang.org,direct")),(0,n.kt)("li",{parentName:"ul"},"\u56fd\u5185\u5efa\u8bae ",(0,n.kt)("a",u({parentName:"li"},{href:"https://goproxy.io,direct"}),"https://goproxy.io,direct")))),(0,n.kt)("li",{parentName:"ul"},"passworkd \u4e3a PTA \u9700\u8981 api \u548c read_api \u6743\u9650")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u5efa\u8bae\u9694\u79bb\u73af\u5883\u914d\u7f6e\ncat \"$(go env GOENV)\"\ngo env GOENV\n\ngo env -w GOPROXY='https://gitlab.com/api/v4/projects/1234/packages/go,https://goproxy.io,direct'\ngo env -w GONOSUMDB='gitlab.com/my/project,<previous value>'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-netrc",metastring:'title="~/.netrc"',title:'"~/.netrc"'}),"machine gitlab.com login <username> password <token>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u6d4b\u8bd5 token\ncurl -u "user:token" https://server/api/v4/projects/:id/repository/archive.zip\n')))}v.isMDXComponent=!0}}]);