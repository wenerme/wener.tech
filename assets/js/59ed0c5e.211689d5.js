"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64596],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=n,f=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8994:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return h}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&m(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const f={tags:["Awesome"]},g="Forge Awesome",N={unversionedId:"service/forge/forge-awesome",id:"service/forge/forge-awesome",title:"Forge Awesome",description:"- Git",source:"@site/../notes/service/forge/forge-awesome.md",sourceDirName:"service/forge",slug:"/service/forge/awesome",permalink:"/notes/service/forge/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/forge-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699940620,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{tags:["Awesome"]},sidebar:"docs",previous:{title:"Drone Runner",permalink:"/notes/service/forge/drone/runner"},next:{title:"Forge FAQ",permalink:"/notes/service/forge/faq"}},d={},h=[{value:"Package",id:"package",level:2},{value:"CI/CD Pipeline",id:"cicd-pipeline",level:2}],b={toc:h},v="wrapper";function w(e){var t=e,{components:r}=t,n=k(t,["components"]);return(0,a.kt)(v,c(s(s({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"forge-awesome"}),"Forge Awesome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/git/"}),"Git")),(0,a.kt)("li",{parentName:"ul"},"hg"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://fossil-scm.org/"}),"fossil"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VCS, tickets, wiki, docs, notes, forum, chat, UI, RBAC"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://fossil-scm.org/home/doc/trunk/www/fossil-v-git.wiki"}),"vs Git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://www.sqlite.org/whynotgit.html"}),"whynotgit")))),(0,a.kt)("li",{parentName:"ul"},"Hosted",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"gitee"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"./github.md"}),"github")),(0,a.kt)("li",{parentName:"ul"},"gitee",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CI/CD Jenkins,GiteeGo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/coding"}),"coding"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u817e\u8baf"),(0,a.kt)("li",{parentName:"ul"},"CI/CD Jenkins"))),(0,a.kt)("li",{parentName:"ul"},"Codeberg",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Gitea (2019)"),(0,a.kt)("li",{parentName:"ul"},"fork Gitea -> Forgejo (2022)"))))),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u6e90",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/onedev"}),"theonedev/onedev"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, Java"),(0,a.kt)("li",{parentName:"ul"},"CI/CD"),(0,a.kt)("li",{parentName:"ul"},"Symbol Search, Navigation - \u7c7b\u4f3c IDE \u4f53\u9a8c"),(0,a.kt)("li",{parentName:"ul"},"Static Analysis"),(0,a.kt)("li",{parentName:"ul"},"Kanban"),(0,a.kt)("li",{parentName:"ul"},"SLOC trend"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://code.onedev.io/"}),"https://code.onedev.io/")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/gitlab/"}),"gitlab"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u975e\u5e38\u91cd"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"./gitea.md"}),"gitea"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e package"),(0,a.kt)("li",{parentName:"ul"},"\u65e0 CI/CD - \u53ef\u5916\u7f6e drone"))),(0,a.kt)("li",{parentName:"ul"},"gogs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/harness/gitness"}),"gitness"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,a.kt)("li",{parentName:"ul"},"by Harness"),(0,a.kt)("li",{parentName:"ul"},"Drone \u53c2\u8003\u91cd\u547d\u540d\u4e3a\u4e86 gitness"),(0,a.kt)("li",{parentName:"ul"},"Drone 3.0 ~-> Drone+/Code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://news.ycombinator.com/item?id=37598082"}),"https://news.ycombinator.com/item?id=37598082"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Harness \u540d\u58f0\u4e0d\u592a\u597d")))))))),(0,a.kt)("h2",s({},{id:"package"}),"Package"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",s({},{id:"cicd-pipeline"}),"CI/CD Pipeline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/jenkins/"}),"Jenkins"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, Java"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/gocd/gocd"}),"GoCD"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Java"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/rundeck"}),"rundeck")),(0,a.kt)("li",{parentName:"ul"},"CircleCI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/drone/"}),"drone"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u592a\u6d3b\u8dc3"),(0,a.kt)("li",{parentName:"ul"},"\u975e\u5b8c\u5168\u5f00\u6e90\u534f\u8bae"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/woodpecker/"}),"woodpecker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,a.kt)("li",{parentName:"ul"},"community fork of the Drone CI 0.8"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/notes/service/forge/gitlab/runner"}),"gitlab runner"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd Gitlab"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u6210\u5ea6\u6700\u9ad8"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/agola-io/agola"}),"agola-io/agola")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"../../devops/kubernetes/app/argocd.md"}),"argocd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"../../devops/kubernetes/app/argo-workflow.md"}),"argo workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/dagger/dagger"}),"dagger/dagger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Apache-2.0, Go, CUE"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u5728\u672c\u5730\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CUE \u5b9a\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 BuildKit \u6784\u5efa"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://docs.dagger.io/1222/core-actions-reference/"}),"https://docs.dagger.io/1222/core-actions-reference/")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/earthly/earthly"}),"earthly/earthly"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MPLv2, Go"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/openspug/spug"}),"openspug/spug"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u5e73\u53f0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/concourse/concourse"}),"concourse/concourse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/buildbot/buildbot"}),"https://github.com/buildbot/buildbot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/spinnaker/spinnaker"}),"spinnaker/spinnaker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u505c\u6ede")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"brew install dagger/tap/dagger\n")))}w.isMDXComponent=!0}}]);