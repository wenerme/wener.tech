"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57367],{98528:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(96600),a=t(27279),l=(t(59496),t(3905)),o=["components"],i={title:"Nomad"},s=void 0,p={unversionedId:"ops/infra/nomad",id:"ops/infra/nomad",title:"Nomad",description:"- hashicorp/nomad \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/infra/nomad.md",sourceDirName:"ops/infra",slug:"/ops/infra/nomad",permalink:"/notes/ops/infra/nomad",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/nomad.md",tags:[],version:"current",frontMatter:{title:"Nomad"},sidebar:"docs",previous:{title:"Cloud Init",permalink:"/notes/ops/infra/cloud-init"},next:{title:"OPS Awesome",permalink:"/notes/ops/infra/ops-awesome"}},u={},c=[{value:"job",id:"job",level:2},{value:"server",id:"server",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/nomad"},"hashicorp/nomad")," \u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MPL-2.0, Go"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u8c03\u5ea6\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8d1f\u8f7d\u7f16\u6392"))),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u5356\u70b9\uff1a \u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\u7f16\u6392"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u70b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Agent \u65b9\u5f0f\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"UI \u63d0\u4f9b\u57fa\u672c\u4fe1\u606f\u548c\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u4efb\u52a1\u5b9a\u4e49"),(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u8c03\u5ea6 \u5de5\u4f5c\u8d1f\u8f7d/Workload - \u4e0d\u5305\u542b\u7f51\u7edc\u3001\u5b58\u50a8\u3001\u670d\u52a1\u3001\u914d\u7f6e\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 CSI \u5b58\u50a8\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"Driver",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"docker"),(0,l.kt)("li",{parentName:"ul"},"exec - \u9694\u79bb\u6267\u884c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"pid, ipc \u9694\u79bb"),(0,l.kt)("li",{parentName:"ul"},"chroot, host, group"),(0,l.kt)("li",{parentName:"ul"},"caps"),(0,l.kt)("li",{parentName:"ul"},"cgroups"))),(0,l.kt)("li",{parentName:"ul"},"raw_exec - \u4e0d\u9694\u79bb\uff0c\u76f4\u63a5\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"java"),(0,l.kt)("li",{parentName:"ul"},"podman"),(0,l.kt)("li",{parentName:"ul"},"qemu"),(0,l.kt)("li",{parentName:"ul"},"remote - ecs"))),(0,l.kt)("li",{parentName:"ul"},"\u793e\u533a Driver",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Containerd"),(0,l.kt)("li",{parentName:"ul"},"Firecracker"),(0,l.kt)("li",{parentName:"ul"},"Jailtask"),(0,l.kt)("li",{parentName:"ul"},"lightrun"),(0,l.kt)("li",{parentName:"ul"},"LXC"),(0,l.kt)("li",{parentName:"ul"},"Pot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("del",{parentName:"li"},"Rtk")),(0,l.kt)("li",{parentName:"ul"},"rookout"),(0,l.kt)("li",{parentName:"ul"},"Sigularity"),(0,l.kt)("li",{parentName:"ul"},"Systemd nspawn"),(0,l.kt)("li",{parentName:"ul"},"Windows IIS"))),(0,l.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"4646/HTTP"),(0,l.kt)("li",{parentName:"ul"},"4647/RPC"),(0,l.kt)("li",{parentName:"ul"},"4648/Serf"))),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Nomad - \u8c03\u5ea6\u5668"),(0,l.kt)("li",{parentName:"ul"},"consul - \u670d\u52a1\u53d1\u73b0\u3001\u6ce8\u518c\u3001\u5065\u5eb7\u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},"consul connect - \u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"vault - \u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},"packer - \u6784\u5efa"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/go-getter"},"hashicorp/go-getter")," - \u83b7\u53d6 artifact"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.hashicorp.com/resources/why-hashicorp-customers-choose-nomad/"},"Why HashiCorp Customers Choose Nomad")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nomadproject.io/downloads/"},"https://www.nomadproject.io/downloads/"))))),(0,l.kt)("admonition",{title:"\u9002\u7528\u573a\u666f",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Windows, macOS \u8c03\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"EDGE \u573a\u666f - \u8282\u70b9\u591a\uff0c\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f72 kube node \u8017\u8d39\u989d\u5916\u8d44\u6e90\uff0c\u7f51\u7edc\u590d\u6742"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u8ba1\u7b97\u91cf \u573a\u666f - \u5bb9\u5668\u3001\u7f51\u7edc\u62bd\u8c61\u5e26\u6765\u989d\u5916\u6d88\u8017"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f supervisor"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6807\u51c6\u8d44\u6e90\u8c03\u5ea6 - GPU\u3001\u5916\u90e8\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u6807\u51c6 CPU arch \u8c03\u5ea6"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install nomad\n\n# apk add nomad -X https://mirrors.aliyun.com/alpine/edge/community/\napk add nomad -u -X https://mirrors.tuna.tsinghua.edu.cn/alpine/edge/community/\n\n# http://0.0.0.0:4646/ui/\nnomad agent -dev -bind 0.0.0.0\n\n# Bash \u8865\u5168\ncomplete -C $(which nomad) nomad\n\nnomad node status\nnomad server members\n\n# \u5982\u679c\u4e0d\u662f\u672c\u5730 export NOMAD_ADDR=http://192.168.1.1:4646\nnomad job init\nnomad job run example.nomad\nnomad status example\n# \u72b6\u6001 - \u53ef tab \u8865\u5168\nnomad alloc status deb1c863-cf72-80fd-9dd8-18729f1dd0c6\nnomad alloc logs deb1c863-cf72-80fd-9dd8-18729f1dd0c6 redis\n\nnomad job stop example\n")),(0,l.kt)("h2",{id:"job"},"job"),(0,l.kt)("h2",{id:"server"},"server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cat << HCL > server.hcl\n# Increase log verbosity\nlog_level = "DEBUG"\n\n# Setup data dir\ndata_dir = "/tmp/server1"\n\n# Enable the server\nserver {\n    enabled = true\n\n    # Self-elect, should be 3 or 5 for production\n    bootstrap_expect = 1\n}\nHCL\nnomad agent -config server.hcl\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'# Increase log verbosity\nlog_level = "DEBUG"\n\n# Setup data dir\ndata_dir = "/tmp/client1"\n\n# Give the agent a unique name. Defaults to hostname\nname = "client1"\n\n# Enable the client\nclient {\n    enabled = true\n\n    # For demo assume we are talking to server1. For production,\n    # this should be like "nomad.service.consul:4647" and a system\n    # like Consul used for service discovery.\n    servers = ["127.0.0.1:4647"]\n}\n\n# \u4fee\u6539\u7aef\u53e3\n# ports {\n#     http = 5656\n# }\n\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nomadproject.io/docs/configuration"},"Nomad Configuration"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcl"},'data_dir  = "/var/lib/nomad"\n\nbind_addr = "0.0.0.0" # the default\n\ndatacenter = "dc1"\nregion = "global"\n\nadvertise {\n  # Defaults to the first private IP address.\n  http = "1.2.3.4"\n  rpc  = "1.2.3.4"\n  serf = "1.2.3.4:5648" # non-default ports may be specified\n}\n\nserver {\n  enabled          = true\n  bootstrap_expect = 3\n  data_dir = "/opt/nomad/server"\n\n  enabled_schedulers = ["batch", "service"]\n  num_schedulers     = 7\n  server_join {\n    retry_join     = [ "1.1.1.1", "2.2.2.2" ]\n    retry_max      = 3\n    retry_interval = "15s"\n  }\n\n  default_scheduler_config {\n    scheduler_algorithm = "spread"\n\n    preemption_config {\n      batch_scheduler_enabled   = true\n      system_scheduler_enabled  = true\n      service_scheduler_enabled = true\n    }\n  }\n}\n\nclient {\n  enabled       = true\n  servers = ["1.2.3.4:4647", "5.6.7.8:4647"]\n  alloc_dir = [data_dir]/alloc\n\n  // \u4e0d\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\n  // \u4f8b\u5982\n  chroot_env {\n    "/bin/ls"           = "/bin/ls"\n    "/etc/ld.so.cache"  = "/etc/ld.so.cache"\n    "/etc/ld.so.conf"   = "/etc/ld.so.conf"\n    "/etc/ld.so.conf.d" = "/etc/ld.so.conf.d"\n    "/etc/passwd"       = "/etc/passwd"\n    "/lib"              = "/lib"\n    "/lib64"            = "/lib64"\n  }\n  max_kill_timeout = "30s"\n  disable_remote_exec = false\n  # map[string]string\n  meta = nil\n\n  # network_interface\n  network_speed = 0\n  cpu_total_compute=0\n  memory_total_mb=0\n\n  node_class=""\n  // \u5ba2\u6237\u7aef\u9009\u9879\n  options = {\n    //\n    "driver.allowlist" = "docker,qemu"\n    "driver.denylist" = "docker,qemu"\n    # \u9ed8\u8ba4\n    # CONSUL_TOKEN\n    # CONSUL_HTTP_TOKEN\n    # VAULT_TOKEN\n    # AWS_ACCESS_KEY_ID\n    # AWS_SECRET_ACCESS_KEY\n    # AWS_SESSION_TOKEN\n    # GOOGLE_APPLICATION_CREDENTIALS\n    "env.denylist" = "MY_CUSTOM_ENVVAR"\n\n    # \u9ed8\u8ba4 root, Administrator\n    "user.denylist" = "root,ubuntu"\n    # \u9ed8\u8ba4 exec qemu java\n    "user.checked_drivers" = "exec,raw_exec"\n    "fingerprint.allowlist" = "network"\n    "fingerprint.denylist" = "network"\n    "fingerprint.network.disallow_link_local" = "true"\n  }\n  reserved {\n    # MHz\n    cpu = 0\n    memory = 0\n    disk = 0\n    reserved_ports = "22,80,8500-8600"\n  }\n\n  # Server Join \u65b9\u5f0f - \u7528\u4e8e\u670d\u52a1\u7aef\u89d2\u8272\n  server_join {\n    retry_join = [ "1.1.1.1", "2.2.2.2" ]\n    retry_max = 3\n    retry_interval = "15s"\n  }\n  state_dir = [data_dir]/client\n\n  gc_interval = "1m"\n  gc_disk_usage_threshold=80\n  gc_inode_usage_threshold=70\n  gc_max_allocs=50\n  gc_parallel_destroys=2\n  no_host_uuid = true\n  cni_path = "/opt/cni/bin"\n  cni_config_dir = "/opt/cni/config"\n  bridge_network_name = "nomad"\n  bridge_network_subnet = "172.26.66.0/23"\n\n  template {}\n  host_volume "ca-certificates" {\n    path = "/etc/ssl/certs"\n    read_only = true\n  }\n  host_network "public" {\n    cidr = "203.0.113.0/24"\n    interface = ""\n    reserved_ports = "22,80"\n  }\n}\n\nconsul {\n  address = "127.0.0.1:8500"\n  auth    = "admin:password"\n  token   = "abcd1234"\n}\n\nacl {\n  enabled = true\n  token_ttl = "30s"\n  policy_ttl = "60s"\n  replication_token = ""\n}\n\nautopilot {\n  cleanup_dead_servers      = true\n  last_contact_threshold    = "200ms"\n  max_trailing_logs         = 250\n  server_stabilization_time = "10s"\n  // enterprise\n  enable_redundancy_zones   = false\n  disable_upgrade_migration = false\n  enable_custom_upgrades    = false\n}\n\ntls {}\n\nvault {\n  enabled = true\n  address = "https://vault.company.internal:8200"\n}\n\n\ndisable_anonymous_signature = false\ndisable_update_check = false\nenable_debug=false\nenable_syslog=false\nsyslog_facility="LOCAL0"\n\n# map[string]string\nhttp_api_response_headers=nil\nleave_on_interrupt=false\nleave_on_terminate=false\n\nlimits {\n  https_handshake_timeout="5s"\n  http_max_conns_per_client=100\n  rpc_handshake_timeout="5s"\n  rpc_max_conns_per_client=100\n}\n\nlog_level="INFO"\nlog_json-false\nlog_file=""\nlog_rotate_bytes=0\nlog_rotate_duration="24h"\nlog_rotate_max_files=0\n\n# hostname\nname=\n\nplugin_dir=$data_dir/plugins\nplugin "raw_exec" {\n  config {\n    enabled = true\n  }\n}\n\nports {\n  http = 4646\n  rpc  = 4647\n  serf = 4648\n}\n\ntelemetry {\n  publish_allocation_metrics = true\n  publish_node_metrics       = true\n\n  prometheus_metrics = true\n}\n')))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,_=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(_,o(o({ref:n},c),{},{components:t})):r.createElement(_,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);