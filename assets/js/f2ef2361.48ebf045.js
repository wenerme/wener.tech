"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74089],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85749:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(96600),a=t(27279),i=(t(59496),t(49613)),l=["components"],o={title:"Gitlab CI \u6280\u5de7"},c="Gitlab CI \u5e38\u7528\u8bed\u6cd5",s={unversionedId:"service/forge/gitlab/gitlab-ci-cookbook",id:"service/forge/gitlab/gitlab-ci-cookbook",title:"Gitlab CI \u6280\u5de7",description:"- . \u5f00\u5934\u7684\u4efb\u52a1\u4e0d\u4f1a\u6267\u884c",source:"@site/../notes/service/forge/gitlab/gitlab-ci-cookbook.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/gitlab-ci-cookbook",permalink:"/notes/service/forge/gitlab/gitlab-ci-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/forge/gitlab/gitlab-ci-cookbook.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Gitlab CI \u6280\u5de7"},sidebar:"docs",previous:{title:"Gitlab",permalink:"/notes/service/forge/gitlab/"},next:{title:"gitlab-ci.yml",permalink:"/notes/service/forge/gitlab/gitlab-ci-yml"}},u={},p=[{value:"Hello World",id:"hello-world",level:2},{value:"kaniko \u955c\u50cf\u6784\u5efa",id:"kaniko-\u955c\u50cf\u6784\u5efa",level:2},{value:"docker \u6784\u5efa",id:"docker-\u6784\u5efa",level:2},{value:"Docker DinD",id:"docker-dind",level:2},{value:"Golang",id:"golang",level:2},{value:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0",id:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0",level:2},{value:"\u751f\u6210",id:"\u751f\u6210",level:2},{value:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",level:2},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:2},{value:"\u4ea7\u51fa",id:"\u4ea7\u51fa",level:2},{value:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c",id:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c",level:2},{value:"Page",id:"page",level:2},{value:"Node",id:"node",level:2},{value:"Publish NPM",id:"publish-npm",level:3}],d={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitlab-ci-\u5e38\u7528\u8bed\u6cd5"},"Gitlab CI \u5e38\u7528\u8bed\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".")," \u5f00\u5934\u7684\u4efb\u52a1\u4e0d\u4f1a\u6267\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u5e38\u7528 key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CI_COMMIT_REF_SLUG"),(0,i.kt)("li",{parentName:"ul"},"CI_BUILD_REF_NAME")))),(0,i.kt)("h2",{id:"hello-world"},"Hello World"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"stage:\n  - build\n\nHello CI:\n  stage: build\n  script:\n    - echo Hello Gitlab CI !\n")),(0,i.kt)("h2",{id:"kaniko-\u955c\u50cf\u6784\u5efa"},"kaniko \u955c\u50cf\u6784\u5efa"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u4f9d\u8d56 docker engine \u5219\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 kaniko"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'publish:\n  stage: publish\n  image:\n    #name: registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:v1.6.0-debug\n    name: gcr.io/kaniko-project/executor:debug\n    entrypoint: [\'\']\n  script:\n    - echo "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n    - /kaniko/executor --context $CI_PROJECT_DIR --dockerfile ./Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n  dependencies:\n    - build\n  only:\n    - master\n')),(0,i.kt)("h2",{id:"docker-\u6784\u5efa"},"docker \u6784\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Build in Docker:\n  image: wener/go:win\n  stage: build\n  services:\n    - docker:dind\n  script:\n    - go env\n")),(0,i.kt)("h2",{id:"docker-dind"},"Docker DinD"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'Build Image:\n  stage: build\n  services:\n    - name: docker:dind\n      # \u53ef\u4ee5\u4fee\u6539\u955c\u50cf\n      # command: ["--registry-mirror", "https://registry-mirror.example.com"]\n  variables:\n    DOCKER_HOST: tcp://docker:2375/\n    DOCKER_DRIVER: overlay2\n    # See https://github.com/docker-library/docker/pull/166\n    DOCKER_TLS_CERTDIR: \'\'\n  before_script:\n    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY\n  script:\n    # - yarn\n    # - yarn build\n    - echo Building image "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"\n    - docker build --pull -t "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" .\n    - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG"\n    # tagged as v20200601121212\n    - CI_REGISTRY_IMAGE_DATA_VER="$CI_REGISTRY_IMAGE:v`date +"%Y%m%d%H%M%S"`"\n    - docker tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_REF_SLUG" "$CI_REGISTRY_IMAGE_DATA_VER"\n    - docker push "$CI_REGISTRY_IMAGE_DATA_VER"\n')),(0,i.kt)("h2",{id:"golang"},"Golang"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7f13\u5b58 GOPATH"),(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8\u4e4b\u524d\u4fee\u6539 GOPATH \u4f7f\u5176\u80fd\u88ab\u7f13\u5b58")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'default:\n  cache:\n    untracked: true\n    key: \'$CI_COMMIT_REF_SLUG\'\n    paths:\n      - .cache\n  before_script:\n    - mkdir -p .cache\n    # - export GOPATH="$CI_PROJECT_DIR/.cache"\n    - export GOPATH="$PWD/.cache"\n    - export PATH="$PWD/.cache/bin:$PATH"\n    - export GO111MODULE=on\n    - export GOPROXY=https://goproxy.io\n')),(0,i.kt)("h2",{id:"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0"},"\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7248\u672c\u66f4\u65b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'deploy-dev:\n  stage: deploy-dev\n  image: alpine:3.8\n  before_script:\n    - apk add --no-cache git curl bash\n    - curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash\n    - mv kustomize /usr/local/bin/\n    - git remote set-url origin https://${CI_USERNAME}:${CI_PUSH_TOKEN}@gitlab.com/andrew.kaczynski/gitops-webapp.git\n    - git config --global user.email "gitlab@gitlab.com"\n    - git config --global user.name "GitLab CI/CD"\n  script:\n    - git checkout -B master\n    - cd deployment/dev\n    - kustomize edit set image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n    - cat kustomization.yaml\n    - git commit -am \'[skip ci] DEV image update\'\n    - git push origin master\n  only:\n    - master\n\ndeploy-prod:\n  stage: deploy-prod\n  image: alpine:3.8\n  before_script:\n    - apk add --no-cache git curl bash\n    - curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash\n    - mv kustomize /usr/local/bin/\n    - git remote set-url origin https://${CI_USERNAME}:${CI_PUSH_TOKEN}@gitlab.com/andrew.kaczynski/gitops-webapp.git\n    - git config --global user.email "gitlab@gitlab.com"\n    - git config --global user.name "GitLab CI/CD"\n  script:\n    - git checkout -B master\n    - git pull origin master\n    - cd deployment/prod\n    - kustomize edit set image $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n    - cat kustomization.yaml\n    - git commit -am \'[skip ci] PROD image update\'\n    - git push origin master\n  only:\n    - master\n  when: manual\n')),(0,i.kt)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),(0,i.kt)("h2",{id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"},"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"build:\n  stage: build\n  script: echo 'FOO=BAR' > build.env\n  artifacts:\n    report:\n      dotenv: build.env\n\ntest:\n  stage: test\n  script: echo $FOO # \"BAR\"\n  needs: [build]\n")),(0,i.kt)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"include:\n  # \u6a21\u677f\u7ee7\u627f\n  template: Serverless.gitlab-ci.yml\n\nfunctions:build:\n  extends: .serverless:build:functions\n  # \u8bbe\u7f6e\u73af\u5883\u4fe1\u606f\n  environment: production\n\nfunctions:deploy:\n  extends: .serverless:deploy:functions\n  environment: production\n")),(0,i.kt)("h2",{id:"\u4ea7\u51fa"},"\u4ea7\u51fa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Build Windows:\n  stage: build\n  tags:\n    - windows\n    - bash\n  script:\n    - make ci-windows\n  artifacts:\n    paths:\n      - dist\n    expire_in: 1 week\n")),(0,i.kt)("h2",{id:"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c"},"\u8ba1\u5212\u8fd0\u884c\u548c\u975e\u8ba1\u5212\u8fd0\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"job:on-schedule:\n  only:\n    - schedules\n  script:\n    - make world\n\njob:\n  except:\n    - schedules\n  script:\n    - make build\n")),(0,i.kt)("h2",{id:"page"},"Page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pages:\n  script:\n    - yarn\n    - yarn build:public\n  artifacts:\n    # \u8def\u5f84\u5fc5\u987b public\n    paths:\n      - public\n  only:\n    - master\n")),(0,i.kt)("h2",{id:"node"},"Node"),(0,i.kt)("h3",{id:"publish-npm"},"Publish NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Publish NPM:\n  stage: deploy\n  script:\n    - echo '//gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}'>.npmrc\n    - yarn lerna publish from-git --yes --registry \"https://gitlab.com/api/v4/projects/${CI_PROJECT_ID}/packages/npm/\"\n  only:\n    - tags\n")))}g.isMDXComponent=!0}}]);