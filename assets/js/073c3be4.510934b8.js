"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9168],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return a?t.createElement(k,l(l({ref:n},u),{},{components:a})):t.createElement(k,l({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8606:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={title:"apko"},o=void 0,s={unversionedId:"devops/container/apko",id:"devops/container/apko",title:"apko",description:"- chainguard-dev/apko",source:"@site/notes/devops/container/apko.md",sourceDirName:"devops/container",slug:"/devops/container/apko",permalink:"/notes/devops/container/apko",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/apko.md",tags:[],version:"current",frontMatter:{title:"apko"},sidebar:"docs",previous:{title:"\u5bb9\u5668",permalink:"/notes/devops/container/"},next:{title:"Buildah",permalink:"/notes/devops/container/buildah"}},u={},m=[{value:"apko.yaml",id:"apkoyaml",level:2},{value:"melange",id:"melange",level:2},{value:"lima",id:"lima",level:2}],c={toc:m};function d(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/apko"},"chainguard-dev/apko"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,i.kt)("li",{parentName:"ul"},"Build OCI images using APK directly without Dockerfile"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/melange"},"chainguard-dev/melange"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210 apk \u7528\u4e8e apko \u6784\u5efa"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/distroless/apko"},"https://github.com/distroless/apko")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml"},"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml")))),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e9b apk base \u5305",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"alpine-baselayout-data - /etc \u4e0b\u57fa\u7840\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"alpine-baselayout - alpine-baselayout-data+musl+busybox",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/etc/profile.d"),(0,i.kt)("li",{parentName:"ul"},"/etc/crontabs/root"))),(0,i.kt)("li",{parentName:"ul"},"busybox"),(0,i.kt)("li",{parentName:"ul"},"apk-tools - ca-certificates-bundle+libcrypto1.1+libssl1.1+musl+zlib"),(0,i.kt)("li",{parentName:"ul"},"alpine-base",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"alpine-{baselayout,keys,conf}"),(0,i.kt)("li",{parentName:"ul"},"apk-tools"),(0,i.kt)("li",{parentName:"ul"},"busybox,busybox-{initscripts,suid}"),(0,i.kt)("li",{parentName:"ul"},"openrc"),(0,i.kt)("li",{parentName:"ul"},"libc-utils -> musl-utils - scanelf",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ldconfig, getconf, getent, iconv, ldd"))),(0,i.kt)("li",{parentName:"ul"},"/etc/os-release"))),(0,i.kt)("li",{parentName:"ul"},"\u517c\u5bb9 - libc6-compat gcompat"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u5177",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"curl"),(0,i.kt)("li",{parentName:"ul"},"file"),(0,i.kt)("li",{parentName:"ul"},"nano"),(0,i.kt)("li",{parentName:"ul"},"bash"),(0,i.kt)("li",{parentName:"ul"},"busybox-extras",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"arch, dnsd, dumpleases, fakeidentd, ftpd, ftpget, ftpput, httpd, inetd, readahead, telnet, telnetd, tftp, tftpd, udhcpd"),(0,i.kt)("li",{parentName:"ul"},"telnet \u6bd4\u8f83\u6709\u7528")))))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"apko - apk -> oci image - rootless, daemonless, reproducable, declarative"),(0,i.kt)("li",{parentName:"ul"},"melange - source -> apk - chroot, multi-arch, pipeline"),(0,i.kt)("li",{parentName:"ul"},"apk-tools v3 \u652f\u6301 macOS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301 macOS ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/apko/issues/239"},"#239")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="alpine-base.yaml"',title:'"alpine-base.yaml"'},"contents:\n  repositories:\n    - https://dl-cdn.alpinelinux.org/alpine/edge/main\n  packages:\n    - alpine-base\n\nentrypoint:\n  command: /bin/sh -l\n\n# optional environment configuration\nenvironment:\n  PATH: /usr/sbin:/sbin:/usr/bin:/bin\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# build tar - \u5355 arch\napko build alpine-base.yaml apko-alpine:test apko-alpine.tar\n# publish \u5230\u4ed3\u5e93 - \u652f\u6301\u591a arch\napko publish alpine-base.yaml <registry_ref>\n\n# build-arch \u9ed8\u8ba4 GOARCH\napko build --use-proot base.yaml wener/base:latest base.tar --build-arch aarch64\n\n# docker \u73af\u5883\u4f7f\u7528\ndocker run --rm -it -v $PWD:/work distroless.dev/apko build alpine-base.yaml apko-alpine:edge apko-alpine.tar\n")),(0,i.kt)("h2",{id:"apkoyaml"},"apko.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'contents:\n  repositories:\n    - https://dl-cdn.alpinelinux.org/alpine/edge/main\n    # - @local /github/workspace/packages # \u672c\u5730\n  packages:\n    - alpine-baselayout\n    - nginx\n  # keyring:\n\nentrypoint:\n  type: service-bundle # \u4f7f\u7528 s6 https://skarnet.org/software/s6/index.html\n  services:\n    nginx: /usr/sbin/nginx -c /etc/nginx/nginx.conf -g "daemon off;"\n  # \u975e service-bundle \u4f7f\u7528 command\n  command: /bin/sh -l\n  # \u7c7b\u4f3c command\n  shell-fragment:\n\n# WORKDIR\nwork-dir: /usr/share/nginx\n\naccounts:\n  groups:\n    - groupname: nginx\n      gid: 10000\n  users:\n    - username: nginx\n      uid: 10000\n  # \u8fd0\u884c\u7528\u6237\n  run-as: nginx\n\n# \u73af\u5883\u53d8\u91cf\nenvironment:\n  PATH: /usr/sbin:/sbin:/usr/bin:/bin\n\n# \u64cd\u4f5c\u6587\u4ef6\npaths:\n  - path: /run/nginx\n    # directory,empty-file,hardlink,symlink,permissions\n    type: directory\n    uid: 10000\n    gid: 10000\n    permissions: 0o755\n    # source: # hardlink, symlink\n  - path: /etc/nginx/http.d/default.conf\n    type: hardlink\n    source: /usr/share/nginx/http-default_server.conf\n    uid: 10000\n    gid: 10000\n    permissions: 0o644\n\n# docker image arch\n# 386, amd64, arm64, arm/v6, arm/v7, ppc64le, riscv64, s390x\narchs:\n  - amd64\n  - 386\n\n# \u7c7b\u4f3c Dockerfile \u7684 FROM\ninclude: github.com/chainguard-dev/apko/examples/alpine-base.yaml@main\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"x86"),(0,i.kt)("li",{parentName:"ul"},"x86_64"),(0,i.kt)("li",{parentName:"ul"},"aarch64"),(0,i.kt)("li",{parentName:"ul"},"armv7"),(0,i.kt)("li",{parentName:"ul"},"ppc64le"),(0,i.kt)("li",{parentName:"ul"},"s390x"),(0,i.kt)("li",{parentName:"ul"},"riscv64")),(0,i.kt)("h2",{id:"melange"},"melange"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/melange"},"chainguard-dev/melange")),(0,i.kt)("li",{parentName:"ul"},"use",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chainguard-dev/melange/tree/main/pipelines"},"https://github.com/chainguard-dev/melange/tree/main/pipelines"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Substitution"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${{package.name}}")),(0,i.kt)("td",{parentName:"tr",align:null},"Package name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${{package.version}}")),(0,i.kt)("td",{parentName:"tr",align:null},"Package version")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${{package.epoch}}")),(0,i.kt)("td",{parentName:"tr",align:null},"Package epoch")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${{targets.destdir}}")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory where targets will be stored")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${{targets.subpkgdir}}")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory where subpackage targets will be stored")))),(0,i.kt)("h2",{id:"lima"},"lima"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'limactl start --tty=false apko.yaml\nlimactl shell apko sudo su -c "HOME=\\"${HOME}\\" ash"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'images:\n  - location: https://ghproxy.com/https://github.com/lima-vm/alpine-lima/releases/download/v0.2.18/alpine-lima-std-3.16.0-x86_64.iso\n    arch: x86_64\n    digest: sha512:234e407867a8955b9835b08e605b38583815dbd63c5690b558fbbd7b519af115c53694ddc3ff498cddb112f113e350c9f8b2a3351be038aa443399a39eff6007\n\ncpus: 1\nmemory: 2GiB\ndisk: 10GiB\nfirmware:\n  legacyBIOS: true\ncontainerd:\n  system: false\n  user: false\nmounts:\n  - location: \'~\'\n  - location: \'/tmp/lima\'\n    writable: true\n\nprovision:\n  - mode: system\n    script: |\n      #!/bin/ash\n      set -eux -o pipefail\n      cat << EOF > /etc/apk/repositories\n      https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/main/\n      https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/community/\n      @testing https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing/\n      EOF\n\n      apk update\n      apk add apko@testing\n      apk add nano file curl\n\n\n      arch="$(uname -m)"\n      if [[ "${arch}" != "x86_64" ]] && [[ "${arch}" != "aarch64" ]]; then\n        echo "Unsupported arch: ${arch}. Exiting."\n        exit 1\n      fi\n\n      # docker-credential-osxkeychain (mac system)\n      # Add a dummy version of docker-credential-osxkeychain typically found\n      # in mac ~/.docker/config.json\n      echo \'#!/bin/ash\' > /usr/bin/docker-credential-osxkeychain\n      echo \'echo "{\\"ServerURL\\":\\"${1}\\",\\"Username\\":\\"\\",\\"Secret\\":\\"\\"}"\' \\\n        >> /usr/bin/docker-credential-osxkeychain\n      chmod +x /usr/bin/docker-credential-osxkeychain\n      # Get the examples/ dir from GitHub release, place at /examples\n      wget https://ghproxy.com/github.com/chainguard-dev/apko/archive/refs/heads/main.zip\n      unzip main.zip "apko-main/examples/*" -d /examples -j\n      rm -f main.zip\nmessage: |-\n  ---\n  Run the following to get a root shell (needed to run apko build):\n    limactl shell apko-playground sudo su -c "HOME=\\"${HOME}\\" ash"\n\n  Try building an image:\n    apko build /examples/nginx.yaml tag /tmp/output.tar\n  Try publishing an image:\n    apko publish /examples/nginx.yaml <registry_ref>\n  ---\n')))}d.isMDXComponent=!0}}]);