"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79108],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return h}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"drone"},g="drone",k={unversionedId:"service/forge/drone/README",id:"service/forge/drone/README",title:"drone",description:"- harness/drone",source:"@site/../notes/service/forge/drone/README.md",sourceDirName:"service/forge/drone",slug:"/service/forge/drone/",permalink:"/notes/service/forge/drone/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/drone/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675652392,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"drone"},sidebar:"docs",previous:{title:"Copilot",permalink:"/notes/service/forge/copilot"},next:{title:"Drone Pipeline",permalink:"/notes/service/forge/drone/pipeline"}},E={},h=[{value:"server",id:"server",level:2},{value:"drone cli",id:"drone-cli",level:2},{value:"No stage specified, assuming &#39;default&#39;",id:"no-stage-specified-assuming-default",level:2},{value:"trigger: skipping build, no matching pipelines",id:"trigger-skipping-build-no-matching-pipelines",level:2},{value:"cannot accept stage error=&quot;Optimistic Lock Error&quot;",id:"cannot-accept-stage-erroroptimistic-lock-error",level:2},{value:"could not read Username",id:"could-not-read-username",level:2},{value:"http: no content returned: re-connect and re-try",id:"http-no-content-returned-re-connect-and-re-try",level:2}],N={toc:h},b="wrapper";function O(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(b,d(u(u({},N),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"drone"}),"drone"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/harness/drone"}),"harness/drone"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," \u5f00\u53d1\u4e0d\u6d3b\u8dc3")),(0,r.kt)("admonition",u({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"drone \u547d\u4ee4\u884c\u5de5\u5177\u529f\u80fd\u76f8\u5bf9\u5b8c\u5584"))),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u6ca1\u6709 build \u4e4b\u524d\u65e0\u6cd5\u521b\u5efa build"),(0,r.kt)("li",{parentName:"ul"},"UI \u4e0a\u5982\u679c\u6ca1\u6743\u9650\u4f1a\u76f4\u63a5\u5f02\u5e38 - \u7a7a\u767d"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u7684\u7b2c\u4e00\u4e2a\u8d26\u53f7\u4e0d\u4f1a\u88ab\u8ba4\u4e3a\u662f admin",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u624b\u52a8\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"update users set user_admin=1 where user_login='drone';")),(0,r.kt)("li",{parentName:"ul"},"\u6216\u8005 \u8bb0\u5f97\u8bbe\u7f6e DRONE_USER_CREATE=username:password,admin:true"))),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u5730\u65b9\u770b\u5f53\u524d\u8d26\u53f7\u7684\u540d\u5b57\u662f\u4ec0\u4e48"),(0,r.kt)("li",{parentName:"ul"},"kubernetes runner \u8fd8\u5904\u4e8e ",(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u9a8c\u9636\u6bb5")," - \u4e0d\u63a8\u8350"),(0,r.kt)("li",{parentName:"ul"},"exec runner \u4e0d\u7ef4\u62a4\u4e86\uff0c\u65e0\u6cd5\u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u673a\u5236\u4f9d\u8d56 image \u8fd0\u884c"))),(0,r.kt)("li",{parentName:"ul"},"kubernetes secrets \u9700\u8981\u989d\u5916\u5b9a\u4e49 secret \u8d44\u6e90\uff0c\u9700\u8981 name+key"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u6587\u6863\u5728 ",(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.drone.io/"}),"https://docs.drone.io/")," \u4fa7\u680f\u770b\u4e0d\u5230"))),(0,r.kt)("h2",u({},{id:"server"}),"server"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"# \u5fc5\u987b - \u9884\u751f\u4ea7\nDRONE_RPC_SECRET=\n# \u670d\u52a1\u4fe1\u606f - \u7528\u4e8e\u914d\u7f6e webhook \u4e4b\u7c7b\nDRONE_SERVER_HOST=\nDRONE_SERVER_PROTO=\n\n# \u4ee3\u7801\u4ed3\u5e93\nDRONE_GITEA_CLIENT_ID=\nDRONE_GITEA_CLIENT_SECRET=\nDRONE_GITEA_SERVER=\n\n#\nDRONE_GIT_ALWAYS_AUTH=\nDRONE_GIT_USERNAME=\nDRONE_GIT_PASSWORD=\n\n# \u53ef\u4fee\u6539\u4f7f\u7528\u7684\u6570\u636e\u5e93 - \u9ed8\u8ba4\u4f7f\u7528 sqlite\nDRONE_DATABASE_DRIVER=postgres\nDRONE_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/postgres?sslmode=disable\n\n# \u4f7f\u7528 s3 \u5b58\u50a8 build log - \u9ed8\u8ba4\u5b58\u50a8\u5728 sqlite\nAWS_ACCESS_KEY_ID=\nAWS_SECRET_ACCESS_KEY=\nAWS_DEFAULT_REGION=\nAWS_REGION=\n\nDRONE_S3_BUCKET=logs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.drone.io/server/reference/"}),"https://docs.drone.io/server/reference/"))),(0,r.kt)("h2",u({},{id:"drone-cli"}),"drone cli"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# brew install drone\ncurl -L https://github.com/harness/drone-cli/releases/latest/download/drone_darwin_amd64.tar.gz | tar zx\ninstall -t ~/bin drone\n\nexport DRONE_SERVER=https://drone.example.com\nexport DRONE_TOKEN=\ndrone info\n\n# --branch=main --event=pull_request\n# --trusted \u63d0\u9ad8\u6743\u9650\ndrone exec                                     # \u672c\u5730\u6267\u884c .drone.yml\ndrone exec --pipeline=test                     # \u6267\u884c\u5355\u4e2a step - \u652f\u6301 --include,--exclude\ndrone exec --secret-file=.env.local            #\nDRONE_SYSTEM_HOST=drone.company.com drone exec #\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u7528 orgsecret \u80fd\u7b80\u5316\u4e00\u4e9b\u914d\u7f6e\ndrone orgsecret add org DOCKER_REGISTRY http://registry.example.com\ndrone orgsecret add org DOCKER_REGISTRY_USER user\ndrone orgsecret add org DOCKER_REGISTRY_PASSWORD user\n")),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"no-stage-specified-assuming-default"}),"No stage specified, assuming 'default'"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"drone exec\n")),(0,r.kt)("h2",u({},{id:"trigger-skipping-build-no-matching-pipelines"}),"trigger: skipping build, no matching pipelines"),(0,r.kt)("p",null,"\u5220\u9664 trigger"),(0,r.kt)("h2",u({},{id:"cannot-accept-stage-erroroptimistic-lock-error"}),'cannot accept stage error="Optimistic Lock Error"'),(0,r.kt)("p",null,"\u4e00\u822c\u4e0d\u5f71\u54cd\uff0c\u5e76\u53d1\u9519\u8bef\u3002"),(0,r.kt)("h2",u({},{id:"could-not-read-username"}),"could not read Username"),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"exec runner \u73b0\u5728\u7528\u4e0d\u4e86"))),(0,r.kt)("p",null,"DRONE_GIT_ALWAYS_AUTH=true"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://community.harness.io/t/fatal-could-not-read-username-for/10998"}),"https://community.harness.io/t/fatal-could-not-read-username-for/10998")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://community.harness.io/t/solved-fatal-could-not-read-username-for-fqdn-terminal-prompts-disabled-gitea/11663"}),"https://community.harness.io/t/solved-fatal-could-not-read-username-for-fqdn-terminal-prompts-disabled-gitea/11663"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"gitea \u9700\u8981\u628a\u7528\u6237 add \u5230 org"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/appleboy/drone-git-push/issues/49"}),"https://github.com/appleboy/drone-git-push/issues/49"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"~/.netrc")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-.netrc"}),"machine github.com\nlogin technoweenie\npassword SECRET\n\nmachine api.github.com\nlogin technoweenie\npassword SECRET\n")),(0,r.kt)("h2",u({},{id:"http-no-content-returned-re-connect-and-re-try"}),"http: no content returned: re-connect and re-try"))}O.isMDXComponent=!0}}]);