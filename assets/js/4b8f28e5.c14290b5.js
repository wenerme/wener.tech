"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63558],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28985:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return g},default:function(){return _},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return N}});var r=t(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>l(e,i(n)),m=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const k={title:"Gitlab Runner"},g="Gitlab Runner",b={unversionedId:"service/forge/gitlab/gitlab-runner",id:"service/forge/gitlab/gitlab-runner",title:"Gitlab Runner",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/forge/gitlab/gitlab-runner.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/runner",permalink:"/notes/service/forge/gitlab/runner",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitlab/gitlab-runner.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672817159,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{title:"Gitlab Runner"},sidebar:"docs",previous:{title:"Gitlab Repository",permalink:"/notes/service/forge/gitlab/repo"},next:{title:"Gitlab SAST",permalink:"/notes/service/forge/gitlab/sast"}},h={},N=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Docker in Docker",id:"docker-in-docker",level:2},{value:"\u5c06\u5171\u4eab runner \u4fee\u6539\u4e3a \u79c1\u6709",id:"\u5c06\u5171\u4eab-runner-\u4fee\u6539\u4e3a-\u79c1\u6709",level:2},{value:"Windows",id:"windows",level:2},{value:"AlpineLinux",id:"alpinelinux",level:2},{value:"Shell in Docker",id:"shell-in-docker",level:2},{value:"Kubernetes Executor",id:"kubernetes-executor",level:2},{value:"zombie process in Runner",id:"zombie-process-in-runner",level:2}],f={toc:N},v="wrapper";function _(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(v,d(p(p({},f),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"gitlab-runner"}),"Gitlab Runner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Gitlab \u8fd0\u884c CI/CD \u4efb\u52a1\u7684\u7ec8\u7aef"),(0,r.kt)("li",{parentName:"ul"},"Golang \u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784 x86, AMD64, ARM64, ARM, s390x"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e73\u53f0 Linux, Windows, macOS, FreeBSD"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65b9\u5f0f Docker, Helm, Shell"))),(0,r.kt)("li",{parentName:"ul"},"Runner \u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"shell",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5 Shell \u6267\u884c\u811a\u672c\uff0c\u6700\u5feb\uff0c\u4e0d\u9700\u8981\u542f\u52a8\u5bb9\u5668 - \u4f8b\u5982\u6784\u5efa Golang \u53ef\u80fd\u53ea\u9700\u8981\u5341\u6765\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u73af\u5883\u9700\u8981\u63d0\u524d\u51c6\u5907\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 root \u6743\u9650\uff0c\u56e0\u6b64\u5efa\u8bae\u901a\u8fc7 docker \u6765\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},"docker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 image \u6307\u5b9a\u955c\u50cf"))),(0,r.kt)("li",{parentName:"ul"},"ssh",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 SSH \u6267\u884c\u547d\u4ee4\uff0cCI \u6267\u884c\u4efb\u52a1\u65f6\u53ef\u80fd\u66f4\u6709\u610f\u4e49"))),(0,r.kt)("li",{parentName:"ul"},"kubernetes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u96c6\u7fa4\u73af\u5883\u4e0b"))),(0,r.kt)("li",{parentName:"ul"},"docker-windows, docker-ssh, parallels, virtualbox, docker+machine, docker-ssh+machine"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://about.gitlab.com/blog/2020/05/27/best-practices-for-kubernetes-runners/"}),"Best practices to keep your Kubernetes runners moving"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# \u67e5\u770b\u6ce8\u518c\u53c2\u6570\ndocker run --rm -it gitlab/gitlab-runner:alpine register --help\n# \u4ea4\u4e92\u5f0f\u6ce8\u518c\ndocker run --rm -it gitlab/gitlab-runner:alpine register\n# \u975e\u4ea4\u4e92\u5f0f\u6ce8\u518c\nTOKEN=""\n# \u6ce8\u518c\u4e3a docker executor\ndocker run --rm \\\n  -v /data/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:alpine register \\\n  --non-interactive \\\n  --executor "docker" \\\n  --docker-image wener/base:latest \\\n  --url "https://gitlab.com/" \\\n  --registration-token "$TOKEN" \\\n  --description "docker-runner" \\\n  --tag-list "docker,internal" \\\n  --run-untagged="true" \\\n  --locked="false" \\\n  --access-level="not_protected"\n\n# \u4f1a\u751f\u6210\u914d\u7f6e /data/gitlab-runner/config/config.toml\n\n# \u542f\u52a8 runner\ndocker run -d --restart always -e TZ=Asia/Shanghai \\\n  -v /data/gitlab-runner/config:/etc/gitlab-runner \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner gitlab/gitlab-runner:alpine\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"register"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"env"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-r,--registration-token=VALUE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"REGISTRATION_TOKEN"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u65b0\u6ce8\u518c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-t,--token"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"CI_SERVER_TOKEN"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"\u8bc6\u522b\u5df2\u7ecf\u6ce8\u518c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-u,--url"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"CI_SERVER_URL"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"-n,--non-interactive"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"REGISTER_NON_INTERACTIVE"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"--builds-dir"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RUNNER_BUILDS_DIR"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"--cache-dir"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RUNNER_CACHE_DIR"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"--executor"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RUNNER_EXECUTOR"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"shell, docker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"--name,--description"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"RUNNER_NAME"),(0,r.kt)("td",p({parentName:"tr"},{align:null}))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"export REGISTER_NON_INTERACTIVE=true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.gitlab.com/runner/commands/#gitlab-runner-register"}),"https://docs.gitlab.com/runner/commands/#gitlab-runner-register"))),(0,r.kt)("h2",p({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/etc/gitlab-runner/config.toml - ",(0,r.kt)("inlineCode",{parentName:"li"},"*nix")),(0,r.kt)("li",{parentName:"ul"},"~/.gitlab-runner/config.tom - ",(0,r.kt)("inlineCode",{parentName:"li"},"*nix")," \u975e root"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./config.toml")," - \u5176\u4ed6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.gitlab.com/runner/configuration/advanced-configuration.html"}),"Advanced configuration"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),'concurrent=4\n# debug, info, warn, error, fatal, panic\nlog_level=info\n# runner, text, json\nlog_format=runner\n# \u68c0\u6d4b\u4efb\u52a1\u7684\u95f4\u9694 - \u6700\u4f4e 3s\ncheck_interval=3\n# \u9519\u8bef\u53d1\u9001\u5230 Sentry\nsentry_dsn=false\n# metrics \u5730\u5740\n# listen_address=0.0.0.0:9090\n\n# \u591a runner \u534f\u540c\u7528\u7684\u4f1a\u8bdd\u670d\u52a1\n[session_server]\n  listen_address = "[::]:8093"\n  advertise_address = "runner-host-name.tld:8093"\n  session_timeout = 1800\n\n[[runners]]\n  name = "My Docker Runner"\n  # Gitlab \u5730\u5740\n  url = "http://127.0.0.1:3000/"\n  # \u5185\u90e8\u7279\u6b8a token\n  token = "$TOKEN"\n  # tls-ca-file\n  # tls-cert-file\n  # tls-key-file\n  # \u8be5 token \u80fd\u5e76\u884c\u5904\u7406\u7684\u4efb\u52a1\u6570 - 0 \u4e0d\u9650\n  limit=0\n  # shell, docker, docker-windows, docker-ssh, ssh, parallels, virtualbox, docker+machine\n  # docker-ssh+machine, kubernetes\n  executor = "docker"\n  # bash, sh, powershell, pwsh (PowerShell Core)\n  shell=""\n  # \u6784\u5efa\u76ee\u5f55 - Locally, Docker, SSH\n  # builds_dir=/build\n  # \u7f13\u5b58\u76ee\u5f55 - Locally, Docker, SSH - docker \u73af\u5883\u9700\u8981\u8be5\u76ee\u5f55\u5728 volume \u4e2d\n  # cache_dir=/cache\n  # \u73af\u5883\u53d8\u91cf\n  # environment=["ENV=value", "LC_ALL=en_US.UTF-8"]\n  # \u8bf7\u6c42\u4efb\u52a1\u7684\u5e76\u53d1\n  request_concurrency=1\n  # \u65e5\u5fd7\u5927\u5c0f - \u9ed8\u8ba4 4MB\n  output_limit=4096\n  # clone \u4e4b\u524d hook \u811a\u672c\n  # pre_clone_script=\n  # pre_build_script\n  # post_build_script\n\n  # \u4fee\u6539 clone \u7528\u7684\u5730\u5740\n  # clone_url\n\n  # \u662f\u5426\u7981\u7528 CI_DEBUG_TRACE \u7279\u6027\n  # debug_trace_disabled\n  # Extra job monitoring workers that pass their results as job artifacts to GitLab\n  # referees\n\n# \u81ea\u5b9a\u4e49\u6784\u5efa\u76ee\u5f55\n# GIT_CLONE_PATH\n[runners.custom_build_dir]\n# \u9ed8\u8ba4\u542f\u7528\u73af\u5883 kubernetes, docker, docker-ssh, docker+machine, docker-ssh+machine\n  # enabled = true\n[runners.docker]\n  # \u4f18\u5148\u4f7f\u7528 DOCKER_HOST\n  host=unix:///var/run/docker.sock\n  hostname=""\n  runtime=""\n\n  # ca.pem, cert.pem, key.pem\n  # tls_cert_path\n  # tls_verify\n\n  # build \u4f7f\u7528\u955c\u50cf\n  image = "docker:stable"\n  # \u5185\u5b58\u9650\u5236 - \u4f8b\u5982 1G\n  memory=""\n  memory_swap=""\n  memory_reservation=""\n\n  # OOM \u65f6\u4e0d kill\n  oom_kill_disable=false\n  # OOM kill \u4f18\u5148\u7ea7\n  oom_score_adjust=0\n\n  # CPU \u9650\u5236\n  cpuset_cpus=0\n  cpu_shares=1024\n  cpus=""\n\n  dns=[]\n  dns_search=[]\n\n  privileged=false\n\n  # \u662f\u5426\u7981\u6b62\u4fee\u6539\u5165\u53e3\n  disable_entrypoint_overwrite=false\n  userns_mode=\n  cap_add=[]\n  cap_drop=[]\n  security_opt=[]\n  devices=[]\n  cache_dir=""\n  # docker volume \u6784\u5efa\u65f6\u7f13\u5b58\n  disable_cache=true\n  network_mode=\n  wait_for_services_timeout=\n  volumes = ["/certs/client", "/cache"]\n  # \u6620\u5c04\u73b0\u6709\u955c\u50cf\u914d\u7f6e\n  # volumes = ["/opt/docker/daemon.json:/etc/docker/daemon.json:ro"]\n  volumes_from=[]\n  volume_driver=[]\n  extra_hosts=[]\n  shm_size = 0\n  links=[]\n  allowed_images=[]\n  allowed_services=[]\n  # never, if-not-present, always\n  pull_policy=always\n  sysctls=[]\n  # \u4fee\u6539\u9ed8\u8ba4 helper\n  # helper_image=""\n\n  # \u5b9a\u4e49\u670d\u52a1\u548c\u522b\u540d\n  [[runners.docker.services]]\n    name = "redis:5"\n    alias = "cache"\n\n  [[runners.docker.services]]\n    name = "docker:dind"\n    # \u5168\u5c40\u4fee\u6539 dind \u955c\u50cf\n    command = ["--registry-mirror", "https://registry-mirror.example.com"]\n\n[runners.parallels]\n  base_name=""\n  template_name=""\n  disable_snapshots=false\n\n[runners.virtualbox]\n  base_name=""\n  template_name=""\n  disable_snapshots=false\n\n[runners.ssh]\n  host = "my-production-server"\n  port = "22"\n  user = "root"\n  password = "production-server-password"\n  identity_file = ""\n\n# Docker Machine\n[runners.machine]\n# https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnersmachine-section\n\n# \u81ea\u5b9a\u4e49\n[runners.custom]\n\n# \u7f13\u5b58\u914d\u7f6e\n[runners.cache]\n# s3, gcs, azure\nType=s3\n# \u7f13\u5b58 URL prefix\nPath=\n# Runner \u4e4b\u95f4\u5171\u4eab\u7f13\u5b58\nShared=false\n\n  # S3 \u914d\u7f6e\n  [runners.cache.s3]\n    ServerAddress = "s3.amazonaws.com"\n    AccessKey = "AWS_S3_ACCESS_KEY"\n    SecretKey = "AWS_S3_SECRET_KEY"\n    BucketName = "runners-cache"\n    BucketLocation = "eu-west-1"\n    Insecure = false\n\n# Kubernetes\n[runners.kubernetes]\n  host = "https://45.67.34.123:4892"\n  cert_file = "/etc/ssl/kubernetes/api.crt"\n  key_file = "/etc/ssl/kubernetes/api.key"\n  ca_file = "/etc/ssl/kubernetes/ca.crt"\n  image = "golang:1.8"\n  privileged = true\n  allow_privilege_escalation = true\n  image_pull_secrets = ["docker-registry-credentials"]\n  [runners.kubernetes.node_selector]\n    gitlab = "true"\n\n[runners.referees]\n  [runners.referees.metrics]\n    prometheus_address = "http://localhost:9090"\n    query_interval = 10\n    metric_queries = []\n')),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://about.gitlab.com/releases/2019/07/31/docker-in-docker-with-docker-19-dot-03/"}),"https://about.gitlab.com/releases/2019/07/31/docker-in-docker-with-docker-19-dot-03/")),(0,r.kt)("h2",p({},{id:"docker-in-docker"}),"Docker in Docker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'volumes = ["/certs/client", "/cache"]')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4566"}),"gitlab-org/gitlab-runner#4566")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4501"}),"gitlab-org/gitlab-runner#4501")," - Docker in Docker 19.03 service fails")),(0,r.kt)("h2",p({},{id:"\u5c06\u5171\u4eab-runner-\u4fee\u6539\u4e3a-\u79c1\u6709"}),"\u5c06\u5171\u4eab runner \u4fee\u6539\u4e3a \u79c1\u6709"),(0,r.kt)("p",null,"\u79fb\u9664 runner \u4ece\u65b0\u6dfb\u52a0"),(0,r.kt)("h2",p({},{id:"windows"}),"Windows"),(0,r.kt)("ol",p({},{start:0}),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5 Git ",(0,r.kt)("a",p({parentName:"li"},{href:"https://git-scm.com/download/win"}),"https://git-scm.com/download/win"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4e0b\u8f7d Portable \u89e3\u538b\u5373\u53ef"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u5b89\u88c5 Runner \u4e3a Service \u5219\u9700\u8981\u7528 msi")),(0,r.kt)("ol",p({},{start:0}),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.gitlab.com/runner/install/windows.html"}),"Windows Runner"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'mkdir -p /usr/local/bin\n# \u6253\u5f00 bin \u76ee\u5f55 - \u590d\u5236\u4e0b\u8f7d\u7684 gitlab runner \u5230\u8fd9\u91cc\uff0c\u5e76\u66f4\u540d\u4e3a gitlab-runner.exe\nstart "$(cygpath -d /usr/local/bin)"\n\n# gitlab TOKEN\nTOKEN=\ngitlab-runner register \\\n  --non-interactive \\\n  --executor shell \\\n  --shell bash \\\n  --url "https://gitlab.com/" \\\n  --registration-token "$TOKEN" \\\n  --description windows-runner \\\n  --tag-list "windows,shell,bash" \\\n  --run-untagged=false \\\n  --locked=false \\\n  --access-level=not_protected \\\n  --builds-dir ./build \\\n  --cache-dir ./cache\n# \u751f\u6210\u7684\u914d\u7f6e\ncat config.toml\n# \u5728 runner \u4e0b\u6267\u884c - build \u548c cache \u4e5f\u5728\u8be5\u76ee\u5f55\u4e0b\ngitlab-runner run -d ./runner\n')),(0,r.kt)("h2",p({},{id:"alpinelinux"}),"AlpineLinux"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# \u6700\u65b0\u7248\napk add gitlab-runner -X https://mirrors.aliyun.com/alpine/edge/community/\n# register\n# \u914d\u7f6e\u6587\u4ef6 /etc/gitlab-runner/config.toml\n\n# \u9ed8\u8ba4\u4f7f\u7528 gitlab-runner \u7528\u6237\u548c\u5206\u7ec4\n# \u5982\u679c\u5728 docker \u91cc\u4f7f\u7528 root \u66f4\u65b9\u4fbf\ncat << CONF > /etc/conf.d/gitlab-runner\nGITLAB_RUNNER_USER="root"\nGITLAB_RUNNER_GROUP="root"\nCONF\n')),(0,r.kt)("h2",p({},{id:"shell-in-docker"}),"Shell in Docker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u6784\u5efa\u73af\u5883\u53ef\u80fd\u8fd8\u4f1a\u9700\u8981 py3\uff0cgcc")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# wener/gitlab-runner include docker, make, git\ndocker run -d --restart always \\\n  -v $PWD:/etc/gitlab-runner \\\n  -v $PWD/builds:/builds \\\n  -v $PWD/cache:/cache \\\n  -e TZ=Asia/Shanghai \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner-shell wener/gitlab-runner\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),'concurrent = 1\ncheck_interval = 0\n# \u4e0d\u8fd0\u884c\u6ca1\u6709\u6307\u5b9a tag \u7684 - \u76f8\u5f53\u4e8e\u9ed8\u8ba4 runner - \u4e00\u822c docker \u4f1a\u901a\u7528\u4e00\u70b9\nrun_untagged=false\nshell="bash"\n\n[session_server]\n  session_timeout = 1800\n\n[[runners]]\n  name = "linux-shell-runner"\n  url = "https://gitlab.com/"\n  token = "$TOKEN"\n  executor = "shell"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"go")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add go -X https://mirrors.aliyun.com/alpine/edge/community\ncurl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.32.2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nodejs")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add nodejs npm nghttp2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"java")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add openjdk11\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"k8s")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk add kubectl\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Runner")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"cat << DOCKERFILE > Dockerfile\nFROM wener/gitlab-runner\nRUN apk add --no-cache util-linux coreutils python3\nRUN apk add --no-cache nodejs npm nghttp2\nRUN apk add --no-cache go -X https://mirrors.aliyun.com/alpine/edge/community\nDOCKERFILE\n\ndocker build -t runner .\n\ndocker run -d --restart always \\\n  -v $PWD:/etc/gitlab-runner \\\n  -v $PWD/builds:/builds \\\n  -v $PWD/cache:/cache \\\n  -e TZ=Asia/Shanghai \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  --name gitlab-runner-shell runner\n")),(0,r.kt)("h2",p({},{id:"kubernetes-executor"}),"Kubernetes Executor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 runner \u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"li"},"gitlab/gitlab-runner:alpine-v{VERSION}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://hub.docker.com/r/gitlab/gitlab-runner"}),"https://hub.docker.com/r/gitlab/gitlab-runner"))))),(0,r.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",p({},{id:"zombie-process-in-runner"}),"zombie process in Runner"),(0,r.kt)("p",null,"\u81ea\u884c\u6784\u5efa runner \u7684\u65f6\u5019\u6ce8\u610f\u6dfb\u52a0 init"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-dockerfile"}),'RUN apk add --no-cache dumb-init\nENTRYPOINT ["/usr/bin/dumb-init", "gitlab-ci-runner"]\nCMD ["run"]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/989"}),"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/989"))))}_.isMDXComponent=!0}}]);