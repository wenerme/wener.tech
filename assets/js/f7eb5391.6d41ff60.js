"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88360],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return N}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=u(a),N=l,d=o["".concat(m,".").concat(N)]||o[N]||k[N]||r;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},31590:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var n=a(96600),l=a(27279),r=(a(59496),a(49613)),i=["components"],p={title:"gitlab-ci.yml"},m=void 0,u={unversionedId:"service/forge/gitlab/gitlab-ci-yml",id:"service/forge/gitlab/gitlab-ci-yml",title:"gitlab-ci.yml",description:"- Gitlab CI YAML",source:"@site/notes/service/forge/gitlab/gitlab-ci-yml.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/gitlab-ci-yml",permalink:"/notes/service/forge/gitlab/gitlab-ci-yml",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/gitlab/gitlab-ci-yml.md",tags:[],version:"current",frontMatter:{title:"gitlab-ci.yml"},sidebar:"docs",previous:{title:"Gitlab CI \u6280\u5de7",permalink:"/notes/service/forge/gitlab/gitlab-ci-cookbook"},next:{title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8",permalink:"/notes/service/forge/gitlab/gitlab-cicd"}},s={},k=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"job:only/except",id:"jobonlyexcept",level:2},{value:"job:rules",id:"jobrules",level:2},{value:"cache",id:"cache",level:2},{value:"workflow",id:"workflow",level:2},{value:"release",id:"release",level:2},{value:"\u90e8\u7f72 pages",id:"\u90e8\u7f72-pages",level:2},{value:"\u6709 Tag \u7684\u65f6\u5019\u624d\u6267\u884c",id:"\u6709-tag-\u7684\u65f6\u5019\u624d\u6267\u884c",level:2},{value:"\u9ed8\u8ba4\u5206\u652f",id:"\u9ed8\u8ba4\u5206\u652f",level:2}],o={toc:k};function N(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gitlab CI ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ce/ci/yaml/index.html"},"YAML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab/tree/master/lib/gitlab/ci/templates"},"\u6a21\u677f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/examples/"},"\u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ce/ci/variables/README.html"},"\u53d8\u91cf\u8bf4\u660e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"},"\u9884\u5b9a\u4e49\u7684\u53d8\u91cf"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 extends \u590d\u7528\u73b0\u6709\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"!reference [.setup, before_script]")," \u590d\u7528\u90e8\u5206\u903b\u8f91 - \u4f8b\u5982\u5408\u5e76\u591a\u4e2a before_script"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 YAML \u5f15\u7528\u903b\u8f91"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u81ea\u5b9a\u4e49\u9ed8\u8ba4\u914d\u7f6e\ndefault:\n  # \u57fa\u7840\u955c\u50cf\n  image: wener/node:docker\n  cache:\n    # \u7f13\u5b58\u4ed3\u5e93\u91cc\u6240\u6709 untracked \u6587\u4ef6\n    untracked: true\n    # \u7f13\u5b58\u6309\u5206\u652f\u5212\u5206 - \u5982\u679c\u6709 tag \u8fd9\u4e2a\u4f1a\u662f tag \u540d\u5b57\n    key: '$CI_COMMIT_REF_NAME'\n    # \u5e38\u89c1\u7684\u7f13\u5b58\u76ee\u5f55\n    paths:\n      - node_modules/\n      - .yarn/\n      - .cache/\n      - .next/\n      - packages/server/.next/cache/\n")),(0,r.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"e.g"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5728\u8fd0\u884c CI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GITLAB_CI"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_REGISTRY"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"gitlab registry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_REGISTRY_USER"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"gitlab registry user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_REGISTRY_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"gitlab registry password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_REGISTRY_IMAGE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u5bb9\u5668\u955c\u50cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_DEFAULT_BRANCH"),(0,r.kt)("td",{parentName:"tr",align:null},"main"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 branch \u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_REF_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"main"),(0,r.kt)("td",{parentName:"tr",align:null},"branch or tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_REF_SLUG"),(0,r.kt)("td",{parentName:"tr",align:null},"main"),(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_REF_NAME \u7528\u4e8e url \u6216\u540d\u5b57\u65f6,63 \u4f4d,\u66ff\u4ee3",(0,r.kt)("inlineCode",{parentName:"td"},"[^0-9a-z]")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_REF_PROTECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u62a4\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_BRANCH"),(0,r.kt)("td",{parentName:"tr",align:null},"main"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_SHA"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_SHORT_SHA"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_TAG"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_COMMIT_TITLE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u884c commit \u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_ENVIRONMENT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_ENVIRONMENT_SLUG"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_ENVIRONMENT_URL"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_ENVIRONMENT_ACTION"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"start, prepare, stop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_ENVIRONMENT_TIER"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"production,staging,testing,development,other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_KUBERNETES_ACTIVE"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5173\u8054\u4e86 k8s \u90e8\u7f72\u96c6\u7fa4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_ID"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_NAMESPACE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d \u6216 \u7ec4\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_ROOT_NAMESPACE"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_PATH_SLUG"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CI_PROJECT_PATH"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY\n# \u5e38\u7528 $CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG\ndocker build --pull -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" ./build\ndocker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"},"Predefined variables reference"))),(0,r.kt)("h2",{id:"jobonlyexcept"},"job:only/except"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3\uff0c\u63a8\u8350\uff0c\u4f7f\u7528 rules"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'build:\n  script: npm run build\n  only:\n    # \u7b80\u5355\u914d\u7f6e - refs\n    # \u5b8c\u6574\u5339\u914d - master \u5206\u652f\u8fd0\u884c\n    - master\n    # \u652f\u6301\u6b63\u5219 \u5339\u914d tag \u6216 branch - \u5982\u679c \u6392\u9664\u4e86 branches \u5219\u662f\u5339\u914d tag\n    - /^issue-.*$/i\n\n    # \u9ad8\u7ea7\u914d\u7f6e\n    # \u4e0d\u6307\u5b9a\u9ed8\u8ba4\u5219\u662f refs \u5339\u914d\n    refs:\n      - master\n      - schedules\n    # \u53d8\u91cf\u5339\u914d\n    variables:\n      - $CI_COMMIT_MESSAGE =~ /run-end-to-end-tests/ # \u5339\u914d\u53d8\u91cf\n      - $RELEASE == "staging" # \u53d8\u91cf\u6ee1\u8db3\n      - $STAGING # \u6709\u53d8\u91cf\n      # \u590d\u6742\u6761\u4ef6\u53d8\u91cf\n      - ($CI_COMMIT_BRANCH == "master" || $CI_COMMIT_BRANCH == "develop") && $MY_VARIABLE\n    # \u5339\u914d\u53d8\u5316\u6587\u4ef6\n    # \u53ea\u6709\u5728 branches external_pull_requests merge_requests \u6709\u6548\n    changes:\n      - README.md\n      - "*.md" # \u4f8b\u5982 \u4ece\u65b0\u751f\u6210\u6587\u6863\n      - base/Dockerfile # \u4f8b\u5982 \u91cd\u6784\u57fa\u7840\u955c\u50cf\n      - "**/*.sql" # \u4f8b\u5982 \u6570\u636e\u5e93\u8fc1\u79fb\n    # \u8981\u6c42\u5f00\u542f\u4e86 k8s \u670d\u52a1\n    kubernetes: active\n  except:\n    # \u652f\u6301\u4f7f\u7528\u5173\u952e\u8bcd - \u5206\u652f\u4e0d\u89e6\u53d1\n    - branches\n    # \u53ef\u5305\u542b\u4ed3\u5e93\u4fe1\u606f\u5339\u914d - \u7528\u4e8e fork \u573a\u666f\n    - /^release/.*$/@gitlab-org/gitlab\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"Pipline API \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"branches"),(0,r.kt)("td",{parentName:"tr",align:null},"ref \u662f\u5206\u652f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatOps \u521b\u5efa\u7684 Pipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8 CI \u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_pull_requests"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u4ed3\u5e93 PR\uff0c\u4f8b\u5982 Github")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merge_requests"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ed3\u5e93\u6536\u5230 pr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipelines"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u6c34\u7ebf\u4e2d\u521b\u5efa\u7684\u591a\u9879\u76ee pipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pushes"),(0,r.kt)("td",{parentName:"tr",align:null},"git push \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schedules"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u5ea6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"ref \u662f tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triggers"),(0,r.kt)("td",{parentName:"tr",align:null},"trigger token \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web"),(0,r.kt)("td",{parentName:"tr",align:null},"Web \u89e6\u53d1/\u8fd0\u884c\u6d41\u6c34\u7ebf")))),(0,r.kt)("h2",{id:"jobrules"},"job:rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9650\u5b9a job \u662f\u5426\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bed\u53e5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c only:variables \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&&"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"||"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"=="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"!="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"=~"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"!~")),(0,r.kt)("li",{parentName:"ul"},"CI_PIPELINE_SOURCE \u7528\u4e8e\u652f\u6301\u7c7b\u4f3c rules \u7684\u5173\u952e\u5b57"))),(0,r.kt)("li",{parentName:"ul"},"changes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c only:changes \u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"exists",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u6307\u5b9a\u6587\u4ef6"))))),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u53e5\u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when - \u9650\u5b9a\u8fd0\u884c\u6761\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"on_success, delayed, always"),(0,r.kt)("li",{parentName:"ul"},"never - \u4e0d\u89e6\u53d1 - \u7b49\u540c\u4e8e rules:except"),(0,r.kt)("li",{parentName:"ul"},"manual - \u624b\u52a8\u89e6\u53d1\u65f6"))),(0,r.kt)("li",{parentName:"ul"},"allow_failure - \u662f\u5426\u5141\u8bb8\u8fd0\u884c\u9519\u8bef"),(0,r.kt)("li",{parentName:"ul"},"changes \u6587\u4ef6\u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},"variables \u5b9a\u4e49\u989d\u5916\u53d8\u91cf")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"build:\n  script: npm run build\n  rules:\n    - if: '$CI_COMMIT_BRANCH == \"master\"'\n      when: delayed\n      start_in: '3 hours'\n      allow_failure: true\n    # \u8981\u6c42\u6709\u53d8\u5316\u6587\u4ef6\n    - if: '$CI_PIPELINE_SOURCE == \"merge_request_event\"'\n      changes:\n        - Dockerfile\n      when: manual\n      allow_failure: true\nbuild:\n  script: npm run build\n  rules:\n    # \u524d\u4e24\u4e2a\u6761\u4ef6\u4e0d\u6ee1\u8db3\u624d\u8fd0\u884c\n    - if: '$CI_PIPELINE_SOURCE == \"merge_request_event\"'\n      when: never\n    - if: '$CI_PIPELINE_SOURCE == \"schedule\"'\n      when: never\n    - when: on_success\n\nbuild:\n  script: npm run build\n  rules:\n    # \u5e38\u89c1\n    - if: $CI_COMMIT_TAG # \u6709 tag\n    - if: $CI_COMMIT_BRANCH # \u5206\u652f\u63a8\u9001\n    - if: '$CI_COMMIT_BRANCH == \"main\"' # \u4e3b\u5206\u652f\n    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH' # \u9ed8\u8ba4\u5206\u652f\n    - if: '$CI_COMMIT_BRANCH =~ /regex-expression/' # \u5206\u652f\u5339\u914d\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"if CI_PIPELINE_SOURCE"),(0,r.kt)("th",{parentName:"tr",align:null},"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api"),(0,r.kt)("td",{parentName:"tr",align:null},"Pipline API \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat"),(0,r.kt)("td",{parentName:"tr",align:null},"ChatOps \u521b\u5efa\u7684 Pipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8 CI \u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_pull_request_event"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u4ed3\u5e93 PR\uff0c\u4f8b\u5982 Github")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merge_request_event"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ed3\u5e93\u6536\u5230 pr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parent_pipeline"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d41\u6c34\u7ebf\u4e2d\u521b\u5efa\u7684\u591a\u9879\u76ee pipeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push"),(0,r.kt)("td",{parentName:"tr",align:null},"git push \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u5ea6\u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"ref \u662f tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"trigger token \u89e6\u53d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web"),(0,r.kt)("td",{parentName:"tr",align:null},"Web \u89e6\u53d1/\u8fd0\u884c\u6d41\u6c34\u7ebf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webide"),(0,r.kt)("td",{parentName:"tr",align:null},"WebIDE")))),(0,r.kt)("h2",{id:"cache"},"cache"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40 - \u4e0d\u63a8\u8350\uff0c\u5efa\u8bae\u4f7f\u7528 default"))),(0,r.kt)("li",{parentName:"ul"},"defaul:cache",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"job \u9ed8\u8ba4\u7f13\u5b58"))),(0,r.kt)("li",{parentName:"ul"},"job:cache",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"job \u7ef4\u5ea6\u7f13\u5b58\u914d\u7f6e")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c5e\u6027")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cache:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u4e3a\u6570\u7ec4 - \u591a\u4e2a\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"key:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 default - \u5168\u5c40\u5171\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"$CI_COMMIT_REF_SLUG")," - \u5206\u652f\u72ec\u7acb\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"files:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prefix:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"${CI_JOB_NAME}")))))))),(0,r.kt)("li",{parentName:"ul"},"untracked:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u4ed3\u5e93\u91cc\u6240\u6709 untracked \u6587\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},"paths:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7684\u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},"when:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"on_success - \u9ed8\u8ba4 \u6210\u529f\u65f6\u4fdd\u5b58\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"on_failure"),(0,r.kt)("li",{parentName:"ul"},"always"))),(0,r.kt)("li",{parentName:"ul"},"policy:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pull-push - \u9ed8\u8ba4 - \u542f\u52a8\u524d\u62c9\uff0c\u5b8c\u6210\u540e\u63a8"),(0,r.kt)("li",{parentName:"ul"},"pull \u53ea\u62c9 - \u7528\u4e8e\u5df2\u77e5\u4e0d\u4f1a\u4fee\u6539\u7f13\u5b58\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"push \u53ea\u63a8")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cache:\n  paths:\n    - my/files\n\nrspec:\n  script: test\n  cache:\n    key: rspec\n    paths:\n      - binaries/\n")),(0,r.kt)("h2",{id:"workflow"},"workflow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9650\u5b9a pipeline \u662f\u5426\u8fd0\u884c/\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u8fd0\u884c\u8986\u76d6\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"workflow:\n  rules:\n    - if: $CI_COMMIT_MESSAGE =~ /-draft$/\n      when: never\n    - if: $CI_COMMIT_REF_NAME =~ /feature/\n      variables:\n        IS_A_FEATURE: 'true' # \u8986\u76d6\u53d8\u91cf\n    - when: always #\n")),(0,r.kt)("h2",{id:"release"},"release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/release-cli/-/tree/master/docs"},"release-cli")," \u547d\u4ee4\u884c\u5de5\u5177",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"image: registry.gitlab.com/gitlab-org/release-cli:latest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/release-cli/-/tree/master/docs/examples/release-assets-as-generic-package/"},"Release assets as Generic packages"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# AlpineLinux\napk add gitlab-release-cli -X https://mirrors.aliyun.com/alpine/edge/testing\n\n# shell executor \u9700\u8981\u5b89\u88c5\u547d\u4ee4\u884c\u6839\u636e\ncurl --location --output /usr/local/bin/release-cli "https://release-cli-downloads.s3.amazonaws.com/latest/release-cli-linux-amd64"\nchmod +x /usr/local/bin/release-cli\n\n# \u786e\u4fdd\u53ef\u7528\nrelease-cli -v\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u57fa\u4e8e tag release\njob:\n  release:\n    tag_name: $CI_COMMIT_TAG\n    description: 'Release description'\n    # name - \u9ed8\u8ba4\u4e3a tag_name\n    # ref - \u5982\u679c\u6ca1\u6709 tag_name \u53ef\u4ee5\u901a\u8fc7 ref \u521b\u5efa\n    # milestones - \u5173\u8054\u91cc\u7a0b\u7891\n    # released_at: '2021-03-15T08:00:00Z' # \u4e0d\u6307\u5b9a\u4f1a\u81ea\u52a8\u751f\u6210\n\n---\n# \u76f4\u63a5\u8c03\u7528\u547d\u4ee4\u884c - \u53ef\u4ee5\u6dfb\u52a0 assets-link\n# gitlab \u5185\u7f6e artifact https://gitlab.com/org/proj/-/jobs/<JOB_ID>/artifacts/browse\nrelease:\n  stage: release\n  image: registry.gitlab.com/gitlab-org/release-cli:v0.4.0\n  # \u624b\u52a8\u89e6\u53d1\n  when: manual\n  rules:\n    - if: $CI_COMMIT_TAG\n      when: never\n\n  script:\n    - >\n      release-cli create --name release-branch-$CI_JOB_ID --description release-branch-$CI_COMMIT_REF_NAME-$CI_JOB_ID\n      --tag-name job-$CI_JOB_ID --ref $CI_COMMIT_SHA\n      --assets-link '{\"name\":\"Asset1\",\"url\":\"https://<domain>/some/location/1\",\"link_type\":\"other\",\"filepath\":\"xzy\"}'\n      --assets-link '{\"name\":\"Asset2\",\"url\":\"https://<domain>/some/location/2\"}'\n      --milestone \"v1.0.0\" --milestone \"v1.0.0-rc\"\n      --released-at \"2020-06-30T07:00:00Z\"\n\n---\nrelease_job:\n  stage: release\n  image: registry.gitlab.com/gitlab-org/release-cli:latest\n  rules:\n    - if: $CI_COMMIT_TAG # Run this job when a tag is created manually\n  script:\n    - echo 'running release_job'\n  release:\n    name: 'Release $CI_COMMIT_TAG'\n    description: 'Created using the release-cli $EXTRA_DESCRIPTION' # $EXTRA_DESCRIPTION must be defined\n    tag_name: '$CI_COMMIT_TAG' # elsewhere in the pipeline.\n    ref: '$CI_COMMIT_TAG'\n    milestones:\n      - 'm1'\n      - 'm2'\n      - 'm3'\n    released_at: '2020-07-15T08:00:00Z' # Optional, is auto generated if not defined, or can use a variable.\n---\nprepare_job:\n  stage: prepare # This stage must run before the release stage\n  rules:\n    - if: $CI_COMMIT_TAG\n      when: never # Do not run this job when a tag is created manually\n    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH # Run this job when commits are pushed or merged to the default branch\n  script:\n    - echo \"EXTRA_DESCRIPTION=some message\" >> variables.env # Generate the EXTRA_DESCRIPTION and TAG environment variables\n    - echo \"TAG=v$(cat VERSION)\" >> variables.env # and append to the variables.env file\n  artifacts:\n    reports:\n      dotenv: variables.env # Use artifacts:reports:dotenv to expose the variables to other jobs\n\nrelease_job:\n  stage: release\n  image: registry.gitlab.com/gitlab-org/release-cli:latest\n  needs:\n    - job: prepare_job\n      artifacts: true\n  rules:\n    - if: $CI_COMMIT_TAG\n      when: never # Do not run this job when a tag is created manually\n    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH # Run this job when commits are pushed or merged to the default branch\n  script:\n    - echo 'running release_job for $TAG'\n  release:\n    name: 'Release $TAG'\n    description: 'Created using the release-cli $EXTRA_DESCRIPTION' # $EXTRA_DESCRIPTION and the $TAG\n    tag_name: '$TAG' # variables must be defined elsewhere\n    ref: '$CI_COMMIT_SHA' # in the pipeline. For example, in the\n    milestones: # prepare_job\n      - 'm1'\n      - 'm2'\n      - 'm3'\n    released_at: '2020-07-15T08:00:00Z' # Optional, is auto generated if not defined, or can use a variable.\n")),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"\u90e8\u7f72-pages"},"\u90e8\u7f72 pages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pages:\n  script:\n    - yarn\n    - yarn build:public\n  artifacts:\n    # \u5fc5\u987b\u662f public \u76ee\u5f55\n    paths:\n      - public\n  only:\n    - master\n")),(0,r.kt)("h2",{id:"\u6709-tag-\u7684\u65f6\u5019\u624d\u6267\u884c"},"\u6709 Tag \u7684\u65f6\u5019\u624d\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6709 tag \u4e14\u6392\u9664\u5206\u652f - ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/23251"},"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/23251"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"build-tag:\n  only:\n    # \u6307\u5b9a\u5206\u652f\n    - master\n    # \u5fc5\u987b\u6709 tag\n    - tags\n")),(0,r.kt)("p",null,"\u6216\u8005"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n  # \u6ca1\u6709 tag \u7684\u65f6\u5019\u624d\u6267\u884c\n  - if: $CI_COMMIT_TAG != ""\n    when: on_success\n  - when: never\n')),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u5206\u652f"},"\u9ed8\u8ba4\u5206\u652f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master \u6216 main \u6216 \u81ea\u5b9a\u4e49\u7684\u9ed8\u8ba4\u5206\u652f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"only:\n  variables:\n    - $CI_DEFAULT_BRANCH == $CI_COMMIT_REF_NAME\n")))}N.isMDXComponent=!0}}]);