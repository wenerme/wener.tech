(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1169)),l={id:"terraform",title:"Terraform"},o={unversionedId:"ops/infra/terraform",id:"ops/infra/terraform",isDocsHomePage:!1,title:"Terraform",description:"- functions",source:"@site/notes/ops/infra/terraform.md",slug:"/ops/infra/terraform",permalink:"/notes/ops/infra/terraform",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/terraform.md",version:"current",sidebar:"docs",previous:{title:"Terraform Provider",permalink:"/notes/ops/infra/terraform-provider"},next:{title:"\u5e38\u7528IP\u5730\u5740\u6bb5\u67e5\u8be2",permalink:"/notes/tool/network/ip-lookup"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"terraformrc",id:"terraformrc",children:[]},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",children:[]},{value:"\u540e\u7aef",id:"\u540e\u7aef",children:[]},{value:"GitLab Terraform State Backend",id:"gitlab-terraform-state-backend",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/functions.html"},"functions")),Object(i.b)("li",{parentName:"ul"},"\u6a21\u677f\u8bed\u6cd5 ",Object(i.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/configuration/expressions.html#string-templates"},"string-templates")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/provisioners/index.html"},"Provisioners"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u672c\u5730\u6216\u8fdc\u7a0b\u670d\u52a1\u5668\u6267\u884c\u7279\u5b9a\u52a8\u4f5c"),Object(i.b)("li",{parentName:"ul"},"\u7528\u4e8e\u51c6\u5907\u670d\u52a1\u6216\u5176\u4ed6\u57fa\u7840\u8bbe\u65bd\u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u4f5c\u4e3a\u6700\u540e\u7684\u65b9\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Provider configurations can be defined only in a root Terraform module."),Object(i.b)("li",{parentName:"ul"},"\u88ab\u8c03\u7528\u6a21\u5757\u4e0d\u80fd\u5b9a\u4e49 ",Object(i.b)("inlineCode",{parentName:"li"},"provider")),Object(i.b)("li",{parentName:"ul"},"0.10 \u65e7\u7684\u6a21\u5757\u4e0d\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"li"},"for_each"),", ",Object(i.b)("inlineCode",{parentName:"li"},"count"),", ",Object(i.b)("inlineCode",{parentName:"li"},"depends_on")),Object(i.b)("li",{parentName:"ul"},"\u79fb\u9664 ",Object(i.b)("inlineCode",{parentName:"li"},"provider")," \u4e4b\u524d\u786e\u4fdd\u6240\u6709\u8d44\u6e90\u5220\u9664"),Object(i.b)("li",{parentName:"ul"},"\u6a21\u5757\u4f1a\u96c6\u6210\u9ed8\u8ba4 provider - \u6ca1\u6709\u522b\u540d\u7684 provider"),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u7f51\u7edc\u4e0d\u901a\uff0c\u786e\u4fdd\u672c\u5730\u53ef\u4ee5\u6253\u5f00 ",Object(i.b)("a",{parentName:"li",href:"https://registry.terraform.io/.well-known/terraform.json"},"https://registry.terraform.io/.well-known/terraform.json")))),Object(i.b)("li",{parentName:"ul"},"\u8f6c\u6362\u51fd\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"yamldecode"))),Object(i.b)("li",{parentName:"ul"},"\u540e\u7aef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"local - \u672c\u5730\u5b58\u50a8 terraform.tfstate"),Object(i.b)("li",{parentName:"ul"},"remote - Terraform Enterprise"),Object(i.b)("li",{parentName:"ul"},"artifactory - \u65e0\u9501"),Object(i.b)("li",{parentName:"ul"},"consul"),Object(i.b)("li",{parentName:"ul"},"etcdv3"),Object(i.b)("li",{parentName:"ul"},"http - \u53ef\u9009\u9501 - REST \u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},"kubernetes - secret \u9650\u5236\u4e86\u6700\u5927 1MB - \u4e0d\u5efa\u8bae\u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 oss\u3001\u817e\u8baf\u4e91 cos"),Object(i.b)("li",{parentName:"ul"},"pg"),Object(i.b)("li",{parentName:"ul"},"s3 - DynamoDB \u652f\u6301\u9501")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u65e5\u5fd7\nTF_LOG=1 terraform apply\n")),Object(i.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  backend "local" {}\n\n  # experiments = [example]\n\n  required_providers {\n    # aws = ">= 2.7.0"\n\n    aws = {\n      version = ">= 2.7.0"\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"terraformrc"},"terraformrc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/commands/cli-config.html"},"https://www.terraform.io/docs/commands/cli-config.html"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'cat <<HCL > ~/.terraformrc\nplugin_cache_dir   = "$HOME/.terraform.d/plugin-cache"\ndisable_checkpoint = true\n\nprovider_installation {\n  filesystem_mirror {\n    path    = "$HOME/.terraform.d/plugins"\n    include = ["terraform.wener.me/*/*","registry.terraform.io/*/*"]\n  }\n}\nHCL\n\nmkdir -p $HOME/.terraform.d/plugin-cache $HOME/.terraform.d/plugins\n\n# \u5728 tf \u9879\u76ee\u4e0b\u8fd0\u884c\nterraform providers mirror ~/.terraform.d/plugins\n')),Object(i.b)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8f93\u5165\u53d8\u91cf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u4f7f\u7528\u53d8\u91cf\u5fc5\u987b\u5148\u5b9a\u4e49\u53d8\u91cf")),Object(i.b)("li",{parentName:"ul"},"\u8bfb\u53d6\u987a\u5e8f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),Object(i.b)("li",{parentName:"ul"},"\u53d8\u91cf\u6587\u4ef6 ",Object(i.b)("inlineCode",{parentName:"li"},"terraform.tfvars")," ",Object(i.b)("inlineCode",{parentName:"li"},"terraform.tfvars.json"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HCL \u6216 JSON"))),Object(i.b)("li",{parentName:"ul"},"\u53d8\u91cf\u6587\u4ef6 ",Object(i.b)("inlineCode",{parentName:"li"},"*.auto.tfvars")," ",Object(i.b)("inlineCode",{parentName:"li"},"*.auto.tfvars.json")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u6570 ",Object(i.b)("inlineCode",{parentName:"li"},"-var"),", ",Object(i.b)("inlineCode",{parentName:"li"},"-var-file")))),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u68c0\u6d4b\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},"name")," \u5219\u4f1a\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"TF_VAR_name")))),Object(i.b)("li",{parentName:"ul"},"\u672c\u5730\u53d8\u91cf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u76f4\u63a5\u5199\u5728\u6587\u4ef6\u91cc\u7684\u53d8\u91cf"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u91cd\u590d\u4f7f\u7528"))),Object(i.b)("li",{parentName:"ul"},"\u8f93\u51fa\u53d8\u91cf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u6a21\u5757\u7684\u8fd4\u56de\u503c"),Object(i.b)("li",{parentName:"ul"},"\u5b50\u6a21\u5757\u53ef\u901a\u8fc7\u8f93\u51fa\u53d8\u91cf\u66b4\u9732\u4fe1\u606f\u7ed9\u4e0a\u7ea7"),Object(i.b)("li",{parentName:"ul"},"root \u6a21\u5757\u53ef\u8f93\u51fa\u5230\u547d\u4ee4\u884c"),Object(i.b)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u8fdc\u7a0b\u72b6\u6001\u65f6\uff0croot \u6a21\u5757\u8f93\u51fa\u53d8\u91cf\u80fd\u591f\u88ab\u5176\u4ed6\u914d\u7f6e\u8bbf\u95ee\u5230\uff0c ",Object(i.b)("inlineCode",{parentName:"li"},"terraform_remote_state"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  # \u5f00\u542f\u53d8\u91cf\u6821\u9a8c\n  experiments = [variable_validation]\n}\n\nvariable "gitlab_token" {\n  # \u7b80\u5355\u7c7b\u578b\n  # string number bool\n  # \u590d\u6742\u7c7b\u578b\n  # list(<TYPE>) set(<TYPE>) map(<TYPE>) object({<ATTR NAME> = <TYPE>, ... }) tuple([<TYPE>, ...])\n  type = string\n  # default = \'\'\n  description = "token for gitlab access"\n\n  validation {\n    condition     = length(var.gitlab_token) > 0 && substr(var.gitlab_token, 0, 4) == "ami-"\n    # condition     = can(regex("^ami-", var.image_id))\n    error_message = "Invalid token"\n  }\n}\nprovider "gitlab" {\n  token = var.gitlab_token\n}\n\n# \u672c\u5730\u53d8\u91cf\nlocals {\n  service_name = "forum"\n  owner        = "Community Team"\n\n  instance_ids = concat(aws_instance.blue.*.id, aws_instance.green.*.id)\n\n  # \u901a\u8fc7 local.common_tags \u65b9\u5f0f\u5f15\u7528\n  common_tags = {\n    Service = local.service_name\n    Owner   = local.owner\n  }\n}\n\n# \u8f93\u51fa\u53d8\u91cf\noutput "instance_ip_addr" {\n  value = aws_instance.server.private_ip\n}\n\noutput "db_password" {\n  value       = aws_db_instance.db.password\n  description = "The password for logging in to the database."\n  sensitive   = true\n}\n\noutput "instance_ip_addr" {\n  value       = aws_instance.server.private_ip\n  description = "The private IP address of the main server instance."\n\n  depends_on = [\n    # Security group rule must be created before this IP address could\n    # actually be used, otherwise the services will be unreachable.\n    aws_security_group_rule.local_access,\n  ]\n}\n')),Object(i.b)("h2",{id:"\u540e\u7aef"},"\u540e\u7aef"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enhanced - \u53ef\u5b58\u50a8\u72b6\u6001\u548c\u6267\u884c\u64cd\u4f5c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"local, remote"))),Object(i.b)("li",{parentName:"ul"},"Standard - \u8fdc\u7a0b\u5b58\u50a8\uff0c\u4f9d\u8d56 local \u6267\u884c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"consul, etcd, etcdv3"),Object(i.b)("li",{parentName:"ul"},"artifactory, pg, swift, http"),Object(i.b)("li",{parentName:"ul"},"azurerm, gcs, cos, oss, manta"),Object(i.b)("li",{parentName:"ul"},"s3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 Dynamo DB \u53ef\u652f\u6301 locking \u548c \u4e00\u81f4\u6027\u68c0\u67e5"),Object(i.b)("li",{parentName:"ul"},"\u5efa\u8bae\u5f00\u542f\u7248\u672c"))),Object(i.b)("li",{parentName:"ul"},"kubernetes - \u5b58\u50a8\u4e3a secret, \u6700\u591a 1MB \u9650\u5236",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tfstate-{workspace}-{secret_suffix}")))))),Object(i.b)("li",{parentName:"ul"},"\u7279\u6027\u652f\u6301",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/language/state/locking.html"},"State Locking"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u907f\u514d\u5e76\u53d1\u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},"remote, sql, s3+dynamo, kubernetes")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  backend "kubernetes" {\n    # tfstate-{workspace}-state\n    secret_suffix = "state"\n    # ~/.kube/config\n    load_config_file = true\n    config_context = "demo"\n    # \u9ed8\u8ba4\u4f7f\u7528 context \u5173\u8054 ns\n    namespace = "demo"\n  }\n\n  # remote\n  backend "http" {\n  }\n}\n')),Object(i.b)("h2",{id:"gitlab-terraform-state-backend"},"GitLab Terraform State Backend"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'STATE_NAME=staging\nPROJECT_ID=\nUSERNAME=\nPTA=\nterraform init \\\n    -backend-config="address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME" \\\n    -backend-config="lock_address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME/lock" \\\n    -backend-config="unlock_address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME/lock" \\\n    -backend-config="username=$USERNAME" \\\n    -backend-config="password=$PTA" \\\n    -backend-config="lock_method=POST" \\\n    -backend-config="unlock_method=DELETE" \\\n    -backend-config="retry_wait_min=5"\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"image: registry.gitlab.com/gitlab-org/terraform-images/stable:latest\n\nvariables:\n  TF_ROOT: ${CI_PROJECT_DIR}/environments/example/production\n  TF_ADDRESS: ${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/terraform/state/example-production\n\ncache:\n  key: example-production\n  paths:\n    - ${TF_ROOT}/.terraform\n\nbefore_script:\n  - cd ${TF_ROOT}\n\nstages:\n  - prepare\n  - validate\n  - build\n  - deploy\n\ninit:\n  stage: prepare\n  script:\n    - gitlab-terraform init\n\nvalidate:\n  stage: validate\n  script:\n    - gitlab-terraform validate\n\nplan:\n  stage: build\n  script:\n    - gitlab-terraform plan\n    - gitlab-terraform plan-json\n  artifacts:\n    name: plan\n    paths:\n      - ${TF_ROOT}/plan.cache\n    reports:\n      terraform: ${TF_ROOT}/plan.json\n\napply:\n  stage: deploy\n  environment:\n    name: production\n  script:\n    - gitlab-terraform apply\n  dependencies:\n    - plan\n  when: manual\n  only:\n    - master\n")))}p.isMDXComponent=!0}}]);