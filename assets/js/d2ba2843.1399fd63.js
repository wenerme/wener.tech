"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[44428],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,d=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},19707:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))s.call(t,a)&&u(e,a,t[a]);return e};const k={title:"Packer"},c="Packer",d={unversionedId:"ops/infra/packer",id:"ops/infra/packer",title:"Packer",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/ops/infra/packer.md",sourceDirName:"ops/infra",slug:"/ops/infra/packer",permalink:"/notes/ops/infra/packer",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/ops/infra/packer.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"Packer"},sidebar:"docs",previous:{title:"OPS Awesome",permalink:"/notes/ops/infra/ops-awesome"},next:{title:"Pulumi",permalink:"/notes/ops/infra/pulumi"}},N={},h=[{value:"HCL2",id:"hcl2",level:2},{value:"Template",id:"template",level:2},{value:"\u6a21\u7248\u8bed\u6cd5",id:"\u6a21\u7248\u8bed\u6cd5",level:3},{value:"\u6761\u4ef6\u53d8\u91cf",id:"\u6761\u4ef6\u53d8\u91cf",level:3},{value:"HOME",id:"home",level:3},{value:"communicator",id:"communicator",level:3},{value:"docker",id:"docker",level:3},{value:"qemu",id:"qemu",level:3}],f={toc:h};function b(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},f),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"packer"}),"Packer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5316\u591a\u5e73\u53f0\u955c\u50cf\u6784\u5efa\u5de5\u5177"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CD"),(0,n.kt)("li",{parentName:"ul"},"Dev/Prod Parity"),(0,n.kt)("li",{parentName:"ul"},"Appliance/Demo Creation"))),(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6d41\u7a0b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8 builder\uff0c\u63d0\u4f9b\u4e00\u81f4\u7684\u73af\u5883",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vm\u3001docker"))),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c provisioners - \u670d\u52a1\u5f00\u901a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa artifact"),(0,n.kt)("li",{parentName:"ul"},"file provisioner \u4e0b\u8f7d artifact \u5230\u672c\u5730"))),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c post-processor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"artifice \u9a8c\u8bc1 \u4ea7\u51fa\u7269 \u5b58\u5728"),(0,n.kt)("li",{parentName:"ul"},"\u4e0a\u4f20\u5230 docker hub\u3001oss \u7b49\u5176\u4ed6\u5730\u65b9"))))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Builder \u4e0d\u652f\u6301\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u52a0\u8f7d",(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/guides/hcl/variables"}),"\u53d8\u91cf")," ",(0,n.kt)("inlineCode",{parentName:"li"},"*.auto.pkrvars.hcl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PACKER_LOG=1")," \u5f00\u542f\u65e5\u5fd7"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/geerlingguy/packer-boxes"}),"geerlingguy/packer-boxes"))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# macOS\nbrew install packer\n\npacker version\n# timestamp,target,type,data\npacker -machine-readable version\n\npacker -autocomplete-install\n\npacker build template.json\n\n# console\n# \u5b9e\u9a8c\u53d8\u91cf\u66ff\u6362\n# help exit variables\npacker console my_template.json\necho {{timestamp}} | packer console\n\n# hcl2 console - 1.6+\npacker console folder/\npacker console file.pkr.hcl\necho "1 + 5" | packer console --config-type=hcl2\npacker console --config-type=hcl2\n\npacker fix old.json > new.json\npacker inspect template.json\npacker validate my-template.json\n\n# \u4f7f\u7528 JQ \u5220\u9664\u8bc4\u8bba\njq \'walk(if type == "object" then del(._comment) else . end)\' commented_template.json > uncommented_template.json\n\n# \u624b\u52a8\u5b89\u88c5\n# https://packer.io/downloads.html\nver=$(curl -sfL https://api.github.com/repos/hashicorp/packer/releases/latest | jq .tag_name -r)\nver=${ver##v}\ncurl -LOC- https://releases.hashicorp.com/packer/${ver}/packer_${ver}_linux_amd64.zip\n')),(0,n.kt)("h2",m({},{id:"hcl2"}),"HCL2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"packer build folder"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"variables.pkr.hcl"),(0,n.kt)("li",{parentName:"ul"},"locals.pkr.hcl"),(0,n.kt)("li",{parentName:"ul"},"sources.pkr.hcl"),(0,n.kt)("li",{parentName:"ul"},"build.pkr.hcl"))),(0,n.kt)("li",{parentName:"ul"},"\u5f15\u53f7\u548c heredoc \u91cc\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"${")," ",(0,n.kt)("inlineCode",{parentName:"li"},"%{")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/hashicorp/packer/issues/9176"}),"#9176")," - HCL2: implementation list")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-hcl"}),'# \u5168\u5c40\u5b9a\u4e49\u53ef\u590d\u7528\u7684 builder\nsource "docker" "base" {\n  image = "wener/base"\n  discard = true\n  pull = false\n}\n\n# \u672c\u5730\u53d8\u91cf\nlocals {\n    # \u76f4\u63a5\u5f15\u7528\n    wee = local.baz\n    # \u5b57\u7b26\u4e32\u4e2d\u66ff\u6362\n    baz = "Foo is \'${var.foo}\' but not \'${local.wee}\'"\n}\n\n# \u53d8\u91cf\u5b9a\u4e49\nvariable "foo" {\n    type = string\n    default = "the default value of the `foo` variable"\n    description = "description of the `foo` variable"\n}\n\n# \u6784\u5efa\nbuild {\n  name = "test-build"\n  # \u5f15\u7528\n  source "docker.base" {}\n  # \u591a\u4e2a\n  # source = [ "source.docker.first", "source.docker.second" ]\n\n  provisioner "shell" {\n    # \u6307\u5b9a source \u6267\u884c\n    only = ["source.docker.base"]\n    # \u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\n    pause_before = "10s"\n    max_retries = 5\n    timeout = "5m"\n\n    inline = [ "echo Tesing" ]\n  }\n\n  post-processor "shell-local" {\n    inline = ["echo Down working"]\n  }\n\n  post-processor "checksum" {\n    checksum_types = [ "md5", "sha512" ]\n    keep_input_artifact = true\n    only = ["source.amazon-ebs.example"]\n  }\n}\n')),(0,n.kt)("h2",m({},{id:"template"}),"Template"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/builders"}),"builders"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"alicloud-ecs - \u963f\u91cc\u4e91 ECS \u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"docker - Docker \u91cc\u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"qemu - \u901a\u8fc7 QEMU \u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"libvirt - \u901a\u8fc7 libvirt \u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"tencentcloud-cvm - \u817e\u8baf\u4e91 CVM \u8fd0\u884c"),(0,n.kt)("li",{parentName:"ul"},"file - \u57fa\u4e8e\u6587\u4ef6\u6784\u5efa artifact \u7136\u540e\u8fd0\u884c post-processors"),(0,n.kt)("li",{parentName:"ul"},"null - \u8bbe\u7f6e SSH\uff0c\u8fd0\u884c provisioners"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/communicators"}),"communicator")," - \u901a\u4fe1\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/post-processors"}),"post-processors"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"alicloud-import"),(0,n.kt)("li",{parentName:"ul"},"artifice - \u6307\u5b9a\u4ea7\u51fa\u7269\uff0c\u4e4b\u540e\u7684 post-processors \u80fd\u8bbf\u95ee\u5230"),(0,n.kt)("li",{parentName:"ul"},"compress"),(0,n.kt)("li",{parentName:"ul"},"checksum"),(0,n.kt)("li",{parentName:"ul"},"docker-import"),(0,n.kt)("li",{parentName:"ul"},"docker-push"),(0,n.kt)("li",{parentName:"ul"},"docker-save"),(0,n.kt)("li",{parentName:"ul"},"docker-tag"),(0,n.kt)("li",{parentName:"ul"},"manifest"),(0,n.kt)("li",{parentName:"ul"},"shell - \u672c\u5730\u6267\u884c"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/provisioners"}),"provisioners"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ansible-local - \u672c\u5730\u6267\u884c"),(0,n.kt)("li",{parentName:"ul"},"ansible - \u8fdc\u7a0b\u6267\u884c"),(0,n.kt)("li",{parentName:"ul"},"breakpoint - \u7b49\u5f85\u7528\u6237\u786e\u8ba4"),(0,n.kt)("li",{parentName:"ul"},"file - \u6587\u4ef6\u4e0a\u4f20"),(0,n.kt)("li",{parentName:"ul"},"powershell"),(0,n.kt)("li",{parentName:"ul"},"shell"),(0,n.kt)("li",{parentName:"ul"},"shell-local"))),(0,n.kt)("li",{parentName:"ul"},"variables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{user 'aws_access_key'}}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{env 'MY_SECRET'}}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{ consul_key 'my_image/softs_versions/next' }}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{ vault '/secret/data/hello' 'foo'}}")),(0,n.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u53d8\u91cf\u53ef\u4f7f\u7528\u9017\u53f7\u62fc\u63a5\u7684\u5b57\u7b26\u4e32"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-var=name=value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-var-file=vars.json"))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "_comment": "This is a comment",\n  // \u5fc5\u987b - \u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a builder\n  "builders": [{}],\n  "description": "",\n  // packer \u6700\u5c0f\u7248\u672c\n  "min_packer_version": "",\n  // \u540e\u5904\u7406\u6b65\u9aa4\n  "post-processors": [{}],\n  // \u5b89\u88c5\u914d\u7f6e\u548c\u5305\u7684\u6b65\u9aa4\n  "provisioners": [{}],\n  // \u9519\u8bef\u65f6\u6267\u884c\n  "error-cleanup-provisioner": {\n    "type": "shell-local",\n    "inline": ["echo \'rubber ducky\'> ducky.txt"]\n  },\n  // \u53d8\u91cf\u5b9a\u4e49\n  "variables": {\n    "my_secret": "{{env `MY_SECRET`}}",\n    "not_a_secret": "plaintext",\n    "foo": "bar"\n  },\n  // \u5b9a\u4e49\u654f\u611f\u53d8\u91cf\n  "sensitive-variables": ["my_secret", "foo"]\n}\n')),(0,n.kt)("h3",m({},{id:"\u6a21\u7248\u8bed\u6cd5"}),"\u6a21\u7248\u8bed\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/templates/engine"}),"\u6a21\u677f\u8bed\u6cd5"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{ }}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{timestamp}}")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{{.Variable}}"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"func"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"desc"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"build_name"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6784\u5efa\u540d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"build_type"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6784\u5efa\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"clean_resource_name"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5e72\u51c0\u7684\u8d44\u6e90\u540d\u5b57\uff0c\u7a7a\u683c\u8f6c",(0,n.kt)("inlineCode",{parentName:"td"},"-"),"\uff0c\u5c0f\u5199\uff0c\u622a\u53d6\u957f\u5ea6\uff08GCE 63\uff0cAzure 80\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"env"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u73af\u5883\u53d8\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"build"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6784\u5efa\u65f6\u7684\u72b6\u6001\u548c\u8fde\u63a5\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"isotime [FORMAT]")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u65f6\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"lower"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"packer_version"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pwd"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"replace"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"( old, new string, n int, s )"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"replace_all"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5168\u66ff\u6362")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"split"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5206\u5272\u5b57\u7b26\u4e32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"template_dir"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u6a21\u677f\u76ee\u5f55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"timestamp"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"UNIX \u65f6\u95f4\u6233\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u53d8\u91cf\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u53d8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"uuid"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"UUID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"upper"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5927\u5199")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"user"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u7528\u6237\u53d8\u91cf")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"build",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ID - \u6784\u5efa VM \u7684 ID - \u4f8b\u5982 EC2 \u7684 instance id"),(0,n.kt)("li",{parentName:"ul"},"Host, Port, User, Password - \u8bbf\u95ee\u673a\u5668\u7684\u4fe1\u606f\uff0c\u7528\u4e8e Ansible \u6216 Inspec"),(0,n.kt)("li",{parentName:"ul"},"ConnType - \u901a\u4fe1\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"PackerRunUUID - \u6784\u5efa ID"),(0,n.kt)("li",{parentName:"ul"},"PackerHTTPIP, PackerHTTPPort, PackerHTTPAddr - packer \u63d0\u4f9b\u7684 http \u6587\u4ef6\u670d\u52a1 - vm \u4e2d\u7684 http \u76ee\u5f55"),(0,n.kt)("li",{parentName:"ul"},"SSHPublicKey, SSHPrivateKey - packer \u94fe\u63a5\u7684\u5bc6\u94a5")))),(0,n.kt)("h3",m({},{id:"\u6761\u4ef6\u53d8\u91cf"}),"\u6761\u4ef6\u53d8\u91cf"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "type": "shell-local",\n  "command": "if [ ! -z \\"{{user `do_nexpose_scan`}}\\" ]; then python -u trigger_nexpose_scan.py; fi"\n}\n')),(0,n.kt)("h3",m({},{id:"home"}),"HOME"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "variables": {\n    "home": "{{env `HOME`}}"\n  },\n  "builders": [\n    {\n      "type": "google",\n      "account_file": "{{ user `home` }}/.secrets/gcp-{{ user `env` }}.json"\n    }\n  ]\n}\n')),(0,n.kt)("h3",m({},{id:"communicator"}),"communicator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.packer.io/docs/communicators"}),"communicator")," - \u901a\u4fe1\u673a\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"none - \u4e0d\u8bbe\u7f6e\uff0c\u4e0d\u80fd\u4f7f\u7528 provisioners"),(0,n.kt)("li",{parentName:"ul"},"ssh",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ssh_host"),(0,n.kt)("li",{parentName:"ul"},"ssh_port"),(0,n.kt)("li",{parentName:"ul"},"ssh_username"),(0,n.kt)("li",{parentName:"ul"},"ssh_password"),(0,n.kt)("li",{parentName:"ul"},"ssh_keypair_name"),(0,n.kt)("li",{parentName:"ul"},"temporary_key_pair_name"),(0,n.kt)("li",{parentName:"ul"},"ssh_clear_authorized_keys"),(0,n.kt)("li",{parentName:"ul"},"ssh_private_key_file"),(0,n.kt)("li",{parentName:"ul"},"ssh_pty"),(0,n.kt)("li",{parentName:"ul"},"ssh_timeout"),(0,n.kt)("li",{parentName:"ul"},"ssh_agent_auth"),(0,n.kt)("li",{parentName:"ul"},"ssh_disable_agent_forwarding"),(0,n.kt)("li",{parentName:"ul"},"ssh_handshake_attempts"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_host"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_port"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_agent_auth"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_username"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_password"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_interactive"),(0,n.kt)("li",{parentName:"ul"},"ssh_bastion_private_key_file"),(0,n.kt)("li",{parentName:"ul"},"ssh_file_transfer_method"),(0,n.kt)("li",{parentName:"ul"},"ssh_proxy_host"),(0,n.kt)("li",{parentName:"ul"},"ssh_proxy_port"),(0,n.kt)("li",{parentName:"ul"},"ssh_proxy_username"),(0,n.kt)("li",{parentName:"ul"},"ssh_proxy_password"),(0,n.kt)("li",{parentName:"ul"},"ssh_keep_alive_interval"),(0,n.kt)("li",{parentName:"ul"},"ssh_read_write_timeout"),(0,n.kt)("li",{parentName:"ul"},"ssh_remote_tunnels"),(0,n.kt)("li",{parentName:"ul"},"ssh_local_tunnels"),(0,n.kt)("li",{parentName:"ul"},"ssh_public_key"),(0,n.kt)("li",{parentName:"ul"},"ssh_private_key"))),(0,n.kt)("li",{parentName:"ul"},"winrm",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"winrm_username"),(0,n.kt)("li",{parentName:"ul"},"winrm_password"),(0,n.kt)("li",{parentName:"ul"},"winrm_host"),(0,n.kt)("li",{parentName:"ul"},"winrm_port"),(0,n.kt)("li",{parentName:"ul"},"winrm_timeout"),(0,n.kt)("li",{parentName:"ul"},"winrm_use_ssl"),(0,n.kt)("li",{parentName:"ul"},"winrm_insecure"),(0,n.kt)("li",{parentName:"ul"},"winrm_use_ntlm"))),(0,n.kt)("li",{parentName:"ul"},"docker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Docker Builder")))))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "communicator": "ssh",\n  "ssh_username": "myuser",\n  "pause_before_connecting": "10m"\n}\n')),(0,n.kt)("h3",m({},{id:"docker"}),"docker"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "builders": [\n    {\n      "type": "docker",\n      // \u57fa\u7840\u955c\u50cf\n      "image": "ubuntu",\n      // \u4e09\u9009\u4e00 commit, discard, export_path\n      // \u63d0\u4ea4\n      "commit": true,\n      // \u4e22\u5f03\n      "discard": true,\n      // \u5bfc\u51fa\u5230\u6587\u4ef6\n      "export_path": "image.tar"\n    }\n  ],\n  "post-processors": [\n    [\n      {\n        "type": "docker-import",\n        "repository": "hashicorp/packer",\n        "tag": "0.7"\n      },\n      "docker-push"\n    ]\n  ]\n}\n')),(0,n.kt)("h3",m({},{id:"qemu"}),"qemu"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53c2\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"-cdrom /xxx/packer_cache/xxx.iso\n-name packer-alpine\n-vnc 127.0.0.1:92\n-boot once=d\n-netdev user,id=user.0,hostfwd=tcp::4287-:22\n-device virtio-net,netdev=user.0\n# \u6302\u8f7d\u4e3a /dev/vda\n-drive file=output-alpine/packer-alpine,if=virtio,cache=writeback,discard=ignore,format=qcow2\n-m 512M\n-machine type=pc,accel=hvf\n")))}b.isMDXComponent=!0}}]);