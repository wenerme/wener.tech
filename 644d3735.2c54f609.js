(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(7),l=(n(0),n(586)),i={id:"gitlab-cicd",title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8"},c={unversionedId:"ops/service/gitlab-cicd",id:"ops/service/gitlab-cicd",isDocsHomePage:!1,title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8",description:"Gitlab CI/CD",source:"@site/notes/ops/service/gitlab-cicd.md",slug:"/ops/service/gitlab-cicd",permalink:"/notes/ops/service/gitlab-cicd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/gitlab-cicd.md",version:"current",sidebar:"docs",previous:{title:"GitLab\u914d\u7f6e",permalink:"/notes/ops/service/gitlab-config"},next:{title:"GitLab K8S \u96c6\u6210",permalink:"/notes/ops/service/gitlab-k8s"}},b=[{value:"Tips",id:"tips",children:[]},{value:"serverless",id:"serverless",children:[{value:"echo-js example",id:"echo-js-example",children:[]}]},{value:"gitlabktl",id:"gitlabktl",children:[]},{value:"Auto DevOps",id:"auto-devops",children:[]}],o={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".gitlab-ci.yml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e94\u7528\u6784\u5efa\u5b9a\u4e49"),Object(l.b)("li",{parentName:"ul"},"K8S Runner \u4e0b\u4f7f\u7528 Kaniko \u6784\u5efa\u955c\u50cf"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlabktl"}),"gitlabktl")," \u90e8\u7f72\u670d\u52a1\u548c\u5e94\u7528\u5230 knative"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"serverless.yml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u670d\u52a1\u51fd\u6570 - \u9700\u8981 Knative"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u90e8\u7f72 ",Object(l.b)("em",{parentName:"li"},"\u51fd\u6570")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u751f\u6210 Dockerfile"),Object(l.b)("li",{parentName:"ul"},"Gitlab ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/serverless/runtimes"}),"\u8fd0\u884c\u65f6")," \u652f\u6301 go ruby nodejs Dockerfile"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 OpenFaaS \u7684\u8fd0\u884c\u65f6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Dockerfile"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u670d\u52a1\u5e94\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u5e94\u7528\u6784\u5efa\u65b9\u5f0f\u3001\u5e94\u7528\u8fd0\u884c\u65f6"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9700\u8981\u66b4\u9732 8080"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u7684\u5e94\u7528\u955c\u50cf\u9700\u8981 PUSH \u5230\u4ed3\u5e93 - \u56e0\u6b64\u9700\u8981\u914d\u7f6e\u4ed3\u5e93\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/-/issues/21619"}),"#21619")," - \u5982\u679c\u955c\u50cf\u4e0d\u662f latest \u6807\u7b7e\u4e0d\u4f1a\u6bcf\u6b21\u62c9"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/variables"}),"CI\u53d8\u91cf\u8bf4\u660e")),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://about.gitlab.com/devops-tools/sonatype-nexus-repo-vs-gitlab.html"}),"Gitlab \u4ed3\u5e93 vs Nexus"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Nexus \u4f1a\u66f4\u597d"),Object(l.b)("li",{parentName:"ul"},"Gitlab \u53ea\u6709 Docker \u4ed3\u5e93\u662f\u514d\u8d39\u4f7f\u7528\u7684"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.sonatype.com/how-to-use-gitlab-ci-with-nexus"}),"Gitlab CI \u4e2d\u4f7f\u7528 Nexus"))))),Object(l.b)("h2",{id:"serverless"},"serverless"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"[knative-examplesknative-examples)")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u67e5\u770b\u90e8\u7f72\u7684\u51fd\u6570\u670d\u52a1\nkubectl -n "$KUBE_NAMESPACE" get services.serving.knative.dev\n\n# \u8bf7\u6c42\ncurl \\\n--header "Content-Type: application/json" \\\n--request POST \\\n--data \'{"GitLab":"FaaS"}\' \\\nhttp://functions-echo.functions-1.functions.example.com/\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"OpenFaaS \u8fd0\u884c\u65f6")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'hello:\n  source: ./hello\n  runtime: openfaas/classic/ruby\n  description: "Ruby function using OpenFaaS classic runtime"\n')),Object(l.b)("h3",{id:"echo-js-example"},"echo-js example"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},".gitlab.yml")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"include:\n  # \u6a21\u677f\u7ee7\u627f\n  template: Serverless.gitlab-ci.yml\n\nfunctions:build:\n  extends: .serverless:build:functions\n  # \u8bbe\u7f6e\u73af\u5883\u4fe1\u606f\n  environment: production\n\nfunctions:deploy:\n  extends: .serverless:deploy:functions\n  environment: production\n\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"serverless.yml")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# \u670d\u52a1\u540d\u5b57\nservice: functions\n# \u670d\u52a1\u63cf\u8ff0\ndescription: "GitLab Serverless functions using Knative"\n\nprovider:\n  # \u6267\u884c serverless.yml \u7684 provider\n  name: triggermesh\n  # \u73af\u5883\u53d8\u91cf\n  environment:\n    FOO: value\n\nfunctions:\n  echo-js:\n    # \u51fd\u6570\u540d\u5b57\n    handler: echo-js\n    # \u76ee\u5f55\n    source: ./echo-js\n    # \u8fd0\u884c\u65f6 - \u53ef\u9009 - \u53ef\u4ee5\u5728 source \u4e0b\u5b9a\u4e49 Dockerfile\n    runtime: https://gitlab.com/gitlab-org/serverless/runtimes/nodejs\n    # \u51fd\u6570\u63cf\u8ff0\n    description: "node.js runtime function"\n    # \u73af\u5883\u53d8\u91cf\n    environment:\n      MY_FUNCTION: echo-js\n')),Object(l.b)("h2",{id:"gitlabktl"},"gitlabktl"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlabktl"}),"GitLab Knative tool"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u65e0\u6cd5\u76f4\u63a5 build \u53ef\u4ee5\u4f7f\u7528\u955c\u50cf\ndocker pull registry.gitlab.com/gitlab-org/gitlabktl\n# \u4f5c\u4e3a\u547d\u4ee4\u4f7f\u7528\ngitlabktl(){ docker run --rm -it ${OPT} -v $PWD:/host -w /host registry.gitlab.com/gitlab-org/gitlabktl gitlabktl $*;}\n# \u6784\u5efa\n# \u9700\u8981\u955c\u50cf\u73af\u5883 CI_REGISTRY CI_REGISTRY_USER CI_REGISTRY_PASSWORD\ngitlabktl serverless build\n# \u4f1a\u5728\u76ee\u5f55\u4e0b\u751f\u6210 Dockerfile\n# \u4f1a\u5f80 registry-internal.wener.me/demo/\u51fd\u6570\u540d \u63a8\u9001\u955c\u50cf\nOPT=\"-e CI_REGISTRY=registry.wener.me -e CI_REGISTRY_USER='' -e CI_REGISTRY_PASSWORD='' -e CI_REGISTRY_IMAGE=registry-internal.wener.me/demo \" gitlabktl serverless build\n# \u8fd0\u884c\u521a\u624d\u63a8\u9001\u7684\u4ed3\u5e93 - \u4f7f\u7528\u7684 functions-echo-js\ndocker run -it --rm -p 8080:8080 registry-internal.incos.dev/demo/functions-echo-js\n")),Object(l.b)("h2",{id:"auto-devops"},"Auto DevOps"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Auto CI/CD \u4f7f\u7528\u7c7b\u4f3c heroku \u7684 buildpack"),Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u5b8c\u6210\u540e\u4f1a\u521b\u5efa\u955c\u50cf\u5b58\u5165\u4ed3\u5e93 - \u57fa\u7840\u955c\u50cf ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gliderlabs/herokuish"}),"gliderlabs/herokuish")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6709\u4e09\u4e2a\u6b65\u9aa4 build test deploy - \u9ed8\u8ba4 test \u5305\u542b code_quality \u548c test"),Object(l.b)("li",{parentName:"ul"},"code_quality \u4f1a\u4f7f\u7528 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/codeclimate/codeclimate"}),"https://github.com/codeclimate/codeclimate")),Object(l.b)("li",{parentName:"ul"},"build \u4f7f\u7528\u5171\u4eab runner - \u4f1a\u6bd4\u8f83\u6162"),Object(l.b)("li",{parentName:"ul"},"\u76f8\u8f83\u4e8e\u4e13\u95e8\u9879\u76ee\u7684 deploy - \u4f8b\u5982 now - \u4f1a\u6162\u5f88\u591a\uff0c 10\u5206\u949f \u548c 1\u5206\u949f\u7684\u533a\u522b"),Object(l.b)("li",{parentName:"ul"},"\u8ba1\u5212\u652f\u6301 cron - \u53ef\u4ee5\u5f53\u4f5c\u4e00\u4e2a webcron \u6765\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u5b9e\u9645\u64cd\u4f5c\u5185\u5bb9\u5b9a\u4e49\u5728 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Auto-DevOps.gitlab-ci.yml"}),"Auto-DevOps.gitlab-ci.yml"))))}s.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);