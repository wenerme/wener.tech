"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15898],{35077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(96600),i=n(27279),o=(n(59496),n(3905)),a=["components"],c={title:"containerd"},l=void 0,s={unversionedId:"devops/container/containerd",id:"devops/container/containerd",title:"containerd",description:"- containerd/containerd",source:"@site/notes/devops/container/containerd.md",sourceDirName:"devops/container",slug:"/devops/container/containerd",permalink:"/notes/devops/container/containerd",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/containerd.md",tags:[],version:"current",frontMatter:{title:"containerd"},sidebar:"docs",previous:{title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/container/container-faq"},next:{title:"crane",permalink:"/notes/devops/container/crane"}},p={},u=[{value:"containerd.toml",id:"containerdtoml",level:2},{value:"zfs",id:"zfs",level:3},{value:"Notes",id:"notes",level:2},{value:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u955c\u50cf\u4ed3\u5e93",id:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u5355\u4e2a\u79c1\u6709\u4ed3\u5e93",id:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u5355\u4e2a\u79c1\u6709\u4ed3\u5e93",level:2},{value:"mount through procfd not a directory",id:"mount-through-procfd-not-a-directory",level:2},{value:"failed to reserve sandbox name: name is reserved for",id:"failed-to-reserve-sandbox-name-name-is-reserved-for",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd"},"containerd/containerd")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/ttrpc"},"containerd/ttrpc"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8baf\u534f\u8bae"),(0,o.kt)("li",{parentName:"ul"},"GRPC for low-memory environments")))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 reload \u914d\u7f6e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/issues/4478"},"#4478")))),(0,o.kt)("h2",{id:"containerdtoml"},"containerd.toml"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/etc/containerd/config.toml"),(0,o.kt)("li",{parentName:"ul"},"/var/lib/containerd/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/man/containerd-config.toml.5.md"},"containerd-config.toml.5"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\ncontainerd config default > containerd.toml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="\u53c2\u8003"',title:'"\u53c2\u8003"'},'version=2\nroot=/var/lib/containerd\nstate=/run/containerd\nplugin_dir=\n\noom_score = 0\n# \u53ef\u5bfc\u5165\u914d\u7f6e\nimports = ["/etc/containerd/runtime_*.toml", "./debug.toml"]\n\n[grpc]\n[ttrpc]\n[debug]\naddress=/run/containerd/debug.sock\nuid=0\ngid=0\nlevel=info\n[metrics]\n[plugins]\n\n# registry\n# ==========\n[plugins."io.containerd.grpc.v1.cri".registry]\n# https://docs.docker.com/engine/security/certificates/\n# \u540c /etc/docker/certs.d/\nconfig_path = "/etc/containerd/certs.d"\n\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\nendpoint = ["https://fogjl973.mirror.aliyuncs.com", "https://8x40wsit.mirror.aliyuncs.com", "https://docker.mirrors.ustc.edu.cn", "https://registry-1.docker.io"]\n\n[plugins."io.containerd.grpc.v1.cri".registry.configs."gcr.io".auth]\n\n# 1.4+ \u5e9f\u5f03 registry.mirrors, \u53ea\u6709\u6ca1\u914d\u7f6e config_path \u65f6\u751f\u6548\n# docker.io \u955c\u50cf\n[plugins.cri.registry.mirrors."docker.io"]\nendpoint = ["https://fogjl973.mirror.aliyuncs.com", "https://8x40wsit.mirror.aliyuncs.com", "https://docker.mirrors.ustc.edu.cn", "https://registry-1.docker.io"]\n\n# \u81ea\u5b9a\u4e49\u6388\u6743\u4fe1\u606f\n[plugins."io.containerd.grpc.v1.cri".registry.configs."my.custom.registry".auth]\n# \u540c .docker/config.json\nusername = ""\npassword = ""\nauth = ""\nidentitytoken = ""\n# \u81ea\u5b9a\u4e49\u8bc1\u4e66\u914d\u7f6e\n[plugins."io.containerd.grpc.v1.cri".registry.configs."my.custom.registry".tls]\nca_file   = "ca.pem"\ncert_file = "cert.pem"\nkey_file  = "key.pem"\n# \u6216\u4e0d\u6821\u9a8c\ninsecure_skip_verify = true\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/etc/containerd/certs.d/",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"docker.io/",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"hosts.toml")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="hosts.toml"',title:'"hosts.toml"'},'server = "https://docker.io"\n\n[host."https://registry-1.docker.io"]\ncapabilities = ["pull", "resolve"]\n')),(0,o.kt)("h3",{id:"zfs"},"zfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zfs create -o mountpoint=/var/lib/containerd/io.containerd.snapshotter.v1.zfs main/containerd\n# \u4e0d\u5fc5\u987b\uff0c\u4f46\u63a8\u8350 - \u955c\u50cf\u5b58\u50a8\u5230 zfs\nzfs create -o mountpoint=/var/lib/containerd/io.containerd.content.v1.content main/containerd-content\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="/etc/containerd.toml"',title:'"/etc/containerd.toml"'},'version=2\n[plugins."io.containerd.grpc.v1.cri".containerd]\nsnapshotter = "zfs"\n')),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"io.containerd.content.v1.content",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u955c\u50cf\u5185\u5bb9\u6570\u636e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/content-flow.md"},"docs/content-flow.md")),(0,o.kt)("li",{parentName:"ul"},"blobs/sha254/SHA256 - gzip"))),(0,o.kt)("li",{parentName:"ul"},"io.containerd.metadata",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u955c\u50cf\u5143\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"io.containerd.metadata.v1.bolt/meta.db"))),(0,o.kt)("li",{parentName:"ul"},"io.containerd.grpc.v1.cri",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b CRI \u63a5\u53e3"))),(0,o.kt)("li",{parentName:"ul"},"io.containerd.runtime.v1.linux"),(0,o.kt)("li",{parentName:"ul"},"io.containerd.runtime.v2.task",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"k8s.io"))),(0,o.kt)("li",{parentName:"ul"},"io.containerd.snapshotter.v1 - \u9ed8\u8ba4 overlayfs - container \u8fd0\u884c\u65f6\u5feb\u7167",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"btrfs"),(0,o.kt)("li",{parentName:"ul"},"native"),(0,o.kt)("li",{parentName:"ul"},"overlayfs"),(0,o.kt)("li",{parentName:"ul"},"zfs"),(0,o.kt)("li",{parentName:"ul"},"aufs"),(0,o.kt)("li",{parentName:"ul"},"devmapper"))),(0,o.kt)("li",{parentName:"ul"},"io.containerd.service.v1"),(0,o.kt)("li",{parentName:"ul"},"io.containerd.monitor.v1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cgroups"))),(0,o.kt)("li",{parentName:"ul"},"tmpmounts")),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u955c\u50cf\u4ed3\u5e93"},"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u955c\u50cf\u4ed3\u5e93\u53ef\u76f4\u63a5\u540c\u6b65\u4e0a\u6e38 - \u4f8b\u5982 harbor \u53ef\u6307\u5b9a prpject \u540c\u6b65\u4e0a\u6e38"),(0,o.kt)("li",{parentName:"ul"},"docker.io \u53ef\u4f7f\u7528\u73b0\u6709\u7684\u670d\u52a1"),(0,o.kt)("li",{parentName:"ul"},"\u5176\u4ed6 \u4ed3\u5e93 \u6ca1\u6709\u73b0\u6709\u7684\u955c\u50cf\u670d\u52a1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"harbor \u5b50\u57df\u540d\u6620\u5c04\u9700\u8981\u7279\u6b8a\u914d\u7f6e"))),(0,o.kt)("li",{parentName:"ul"},"\u5047\u8bbe: harbor \u5730\u5740 cr.example.com, \u6dfb\u52a0\u9879\u76ee quay \u955c\u50cf quay.io",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e\u57df\u540d\u6620\u5c04 quay.cr.example.com \u5230 cr.example.com/quay"),(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u65b9\u5f0f\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/goharbor/harbor/issues/13579"},"#13579"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'# \u73b0\u6709\u5bb9\u5668\u4ed3\u5e93\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\nendpoint = ["https://fogjl973.mirror.aliyuncs.com", "https://8x40wsit.mirror.aliyuncs.com", "https://docker.mirrors.ustc.edu.cn", "https://registry-1.docker.io"]\n\n# harbor \u5b50\u57df\u540d\u6620\u5c04\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."quay.io"]\nendpoint = ["https://quay.cr.example.com"]\n')),(0,o.kt)("h2",{id:"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u5355\u4e2a\u79c1\u6709\u4ed3\u5e93"},"\u6620\u5c04\u5e38\u7528\u4ed3\u5e93\u4e3a\u5355\u4e2a\u79c1\u6709\u4ed3\u5e93"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u4ed3\u5e93\u4e3a https://registry:5000"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u5e38\u7528\u4ed3\u5e93\u6620\u5c04\u4e3a\u5355\u4e2a\u5185\u90e8\u4ed3\u5e93 - \u7528\u4e8e ",(0,o.kt)("strong",{parentName:"li"},"airgap")," \u573a\u666f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u62c9\u53d6\u4e0d\u5b58\u5728\u7684\u955c\u50cf\u4e0d\u80fd\u4ece\u4e0a\u6e38\u540c\u6b65\uff0c\u53ea\u80fd\u62c9\u9884\u5148\u5bfc\u5165\u7684\u955c\u50cf")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"containerd \u4e0d\u652f\u6301 reload \u914d\u7f6e\uff0c\u6240\u4ee5\u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'# \u91cd\u5b9a\u5411\u6240\u6709\u5230\u79c1\u6709 registry\n# \u5e38\u89c1: docker.io, gcr.io, k8s.gcr.io, quay.io, ghcr.io\n[plugins."io.containerd.grpc.v1.cri".registry.mirrors."*"]\nendpoint = ["https://registry:5000"]\n\n[plugins."io.containerd.grpc.v1.cri".registry.configs."docker.io".tls]\ninsecure_skip_verify = true\n[plugins."io.containerd.grpc.v1.cri".registry.configs."gcr.io".tls]\ninsecure_skip_verify = true\n[plugins."io.containerd.grpc.v1.cri".registry.configs."k8s.gcr.io".tls]\ninsecure_skip_verify = true\n[plugins."io.containerd.grpc.v1.cri".registry.configs."quay.io".tls]\ninsecure_skip_verify = true\n[plugins."io.containerd.grpc.v1.cri".registry.configs."ghcr.io".tls]\ninsecure_skip_verify = true\n')),(0,o.kt)("h2",{id:"mount-through-procfd-not-a-directory"},"mount through procfd not a directory"),(0,o.kt)("p",null,"\u68c0\u67e5 mount \u903b\u8f91\uff0c\u662f\u4e0d\u628a \u76ee\u5f55 \u6302\u8f7d\u5230\u4e86\u6587\u4ef6\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mount through procfd: open o_path procfd: open /run/k0s/containerd/io.containerd.runtime.v2.task/k8s.io/promxy/rootfs/etc/promxy/secrets: not a directory\n")),(0,o.kt)("h2",{id:"failed-to-reserve-sandbox-name-name-is-reserved-for"},"failed to reserve sandbox name: name is reserved for"),(0,o.kt)("p",null,"\u6700\u7ec8\u4f1a\u81ea\u5df1\u4fee\u590d\uff0c\u53ef\u80fd\u82b1\u8d39 20m-30m \u65f6\u95f4\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"containerd 1.6 \u4fee\u590d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/issues/4604"},"containerd#4604"))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);