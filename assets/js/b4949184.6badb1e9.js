"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76126],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"athens"},s=void 0,m={unversionedId:"service/repository/athens",id:"service/repository/athens",title:"athens",description:"- gomods/athens \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/repository/athens.md",sourceDirName:"service/repository",slug:"/service/repository/athens",permalink:"/notes/service/repository/athens",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/repository/athens.md",tags:[],version:"current",frontMatter:{title:"athens"},sidebar:"docs",previous:{title:"\u4ed3\u5e93",permalink:"/notes/service/repository/"},next:{title:"Nexus",permalink:"/notes/service/repository/nexus"}},p={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u79c1\u6709\u4ed3\u5e93",id:"\u79c1\u6709\u4ed3\u5e93",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gomods/athens"},"gomods/athens")," \u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go module datastore and proxy"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 disk, mongo, gcs, s3, minio, \u5916\u90e8\u5b58\u50a8/\u81ea\u5b9a\u4e49"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 etcd, redis, redis-sentinel, gcp, azureblob \u9501"))),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u5bf9\u5185\u7684 \u6a21\u5757 \u4ee3\u7406",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u907f\u514d\u5f00\u653e\u6240\u6709 git \u8bbf\u95ee"),(0,o.kt)("li",{parentName:"ul"},"\u7531 athens \u4e2d\u8f6c\u8bf7\u6c42")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 checksum"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8ba4\u8bc1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gomods/athens/issues/1166"},"gomods/athens#1166")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/26232"},"golang/go#26232"))))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u672c\u5730\u78c1\u76d8\u5b58\u50a8\ndocker run -d --restart always \\\n  -v $PWD/data:/var/lib/athens \\\n  -e ATHENS_DISK_STORAGE_ROOT=/var/lib/athens \\\n  -e ATHENS_STORAGE_TYPE=disk \\\n  -p 3000:3000 \\\n  --name athens-proxy \\\n  gomods/athens:latest\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gomods/athens/blob/main/config.dev.toml"},"config.dev.toml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'# \u907f\u514d CHECKSUM \u53d1\u9001\u5230\u4e0a\u6e38\n# ATHENS_GONOSUM_PATTERNS="github.com/mycompany/*,github.com/secret/*"\n# \u907f\u514d go sum \u5931\u8d25\n# export GONOSUMDB="github.com/mycompany/*,github.com/secret/*"\nNoSumPatterns = ["github.com/mycompany/*", "github.com/secret/*"]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6a21\u5f0f\u914d\u7f6e\u6587\u4ef6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0b\u8f7d\u6a21\u5f0f\u914d\u7f6e\u6587\u4ef6",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 config.toml DownloadMode \u6307\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ATHENS_DOWNLOAD_MODE \u6307\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"file:$FILE_PATH - \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"custom:$BASE_64 - inline \u914d\u7f6e"))),(0,o.kt)("li",{parentName:"ul"},"sync - \u9ed8\u8ba4\u6a21\u5f0f - go mod download - \u4e0b\u8f7d\u5b8c\u6210\u8fd4\u56de"),(0,o.kt)("li",{parentName:"ul"},"async - \u8fd4\u56de 404 \u5f02\u6b65\u4e0b\u8f7d"),(0,o.kt)("li",{parentName:"ul"},"none - \u8fd4\u56de 404 - \u53ef\u7528\u4e8e\u8bbf\u95ee\u63a7\u5236"),(0,o.kt)("li",{parentName:"ul"},"redirect - \u91cd\u5b9a\u5411\u5230\u4e0a\u6e38 - \u53ef\u51cf\u8f7b\u5b58\u50a8\u538b\u529b"),(0,o.kt)("li",{parentName:"ul"},"async_redirect - \u91cd\u5b9a\u5411\u5230\u4e0a\u6e38\u4e14\u5f00\u59cb\u5f02\u6b65\u4e0b\u8f7d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'# \u4e0a\u6e38\u5730\u5740\ndownloadURL = "https://proxy.golang.org"\n\nmode = "async_redirect"\n\ndownload "github.com/gomods/*" {\n    mode = "sync"\n}\n\ndownload "golang.org/x/*" {\n    mode = "none"\n}\n\ndownload "github.com/pkg/*" {\n    mode = "redirect"\n    downloadURL = "https://gocenter.io"\n}\n')),(0,o.kt)("h2",{id:"\u79c1\u6709\u4ed3\u5e93"},"\u79c1\u6709\u4ed3\u5e93"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"git SSH \u5bc6\u94a5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6620\u5c04 /root/.ssh \u63d0\u4f9b\u5bc6\u94a5",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"config"),(0,o.kt)("li",{parentName:"ul"},"id_rsa"))),(0,o.kt)("li",{parentName:"ul"},"\u6620\u5c04 /root/.gitconfig \u914d\u7f6e\u91cd\u5199\u89c4\u5219"))),(0,o.kt)("li",{parentName:"ul"},"git SSH Agent",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b SSH_AUTH_SOCK")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".ssh/config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"Host git.example.com\nHostname git.example.com\nStrictHostKeyChecking no\nIdentityFile /root/.ssh/id_rsa\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".gitconfig")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'[url "ssh://git@git.example.com:7999"]\n    insteadOf = https://git.example.com/scm\n')))}d.isMDXComponent=!0}}]);