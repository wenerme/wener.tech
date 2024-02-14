/*! For license information please see d5925ad5.40400eb0.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[53276],{85132:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(2488),a=i(62780);const l={title:"apko"},r="apko",t={id:"devops/container/apko",title:"apko",description:"- chainguard-dev/apko",source:"@site/../notes/devops/container/apko.md",sourceDirName:"devops/container",slug:"/devops/container/apko",permalink:"/notes/devops/container/apko",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/apko.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"apko"},sidebar:"docs",previous:{title:"\u5bb9\u5668",permalink:"/notes/devops/container/"},next:{title:"docker buildx bake",permalink:"/notes/devops/container/bake"}},c={},d=[{value:"apko.yaml",id:"apkoyaml",level:2},{value:"melange",id:"melange",level:2},{value:"lima",id:"lima",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"apko",children:"apko"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/apko",children:"chainguard-dev/apko"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Apache-2.0, Go"}),"\n",(0,s.jsx)(e.li,{children:"Build OCI images using APK directly without Dockerfile"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528 apk \u6784\u5efa OCI image"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/melange",children:"chainguard-dev/melange"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u751f\u6210 apk \u7528\u4e8e apko \u6784\u5efa"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/distroless/apko",children:"https://github.com/distroless/apko"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml",children:"https://github.com/chainguard-dev/apko/blob/main/mac/lima/apko-playground.yaml"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e00\u4e9b apk base \u5305\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"alpine-baselayout-data - /etc \u4e0b\u57fa\u7840\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.li,{children:["alpine-baselayout - alpine-baselayout-data+musl+busybox\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"/etc/profile.d"}),"\n",(0,s.jsx)(e.li,{children:"/etc/crontabs/root"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"busybox"}),"\n",(0,s.jsx)(e.li,{children:"apk-tools - ca-certificates-bundle+libcrypto1.1+libssl1.1+musl+zlib"}),"\n",(0,s.jsxs)(e.li,{children:["alpine-base\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"alpine-{baselayout,keys,conf}"}),"\n",(0,s.jsx)(e.li,{children:"apk-tools"}),"\n",(0,s.jsx)(e.li,{children:"busybox,busybox-{initscripts,suid}"}),"\n",(0,s.jsx)(e.li,{children:"openrc"}),"\n",(0,s.jsxs)(e.li,{children:["libc-utils -> musl-utils - scanelf\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ldconfig, getconf, getent, iconv, ldd"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"/etc/os-release"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u517c\u5bb9 - libc6-compat gcompat"}),"\n",(0,s.jsxs)(e.li,{children:["\u5de5\u5177\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"curl"}),"\n",(0,s.jsx)(e.li,{children:"file"}),"\n",(0,s.jsx)(e.li,{children:"nano"}),"\n",(0,s.jsx)(e.li,{children:"bash"}),"\n",(0,s.jsxs)(e.li,{children:["busybox-extras\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"arch, dnsd, dumpleases, fakeidentd, ftpd, ftpget, ftpput, httpd, inetd, readahead, telnet, telnetd, tftp, tftpd, udhcpd"}),"\n",(0,s.jsx)(e.li,{children:"telnet \u6bd4\u8f83\u6709\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"apko - apk -> oci image - rootless, daemonless, reproducable, declarative"}),"\n",(0,s.jsx)(e.li,{children:"melange - source -> apk - chroot, multi-arch, pipeline"}),"\n",(0,s.jsxs)(e.li,{children:["apk-tools v3 \u652f\u6301 macOS\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u652f\u6301 macOS ",(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/apko/issues/239",children:"#239"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u80fd\u76f4\u63a5\u6dfb\u52a0\u6587\u4ef6 - \u9700\u8981\u5148\u6784\u5efa apk \u518d\u6dfb\u52a0"}),"\n"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:'title="alpine-base.yaml"',children:"contents:\n  repositories:\n    - https://dl-cdn.alpinelinux.org/alpine/edge/main\n  packages:\n    - alpine-base\n\nentrypoint:\n  command: /bin/sh -l\n\n# optional environment configuration\nenvironment:\n  PATH: /usr/sbin:/sbin:/usr/bin:/bin\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# build tar - \u5355 arch\napko build alpine-base.yaml apko-alpine:test apko-alpine.tar\n# publish \u5230\u4ed3\u5e93 - \u652f\u6301\u591a arch\napko publish alpine-base.yaml <registry_ref>\n\n# build-arch \u9ed8\u8ba4 GOARCH\napko build --use-proot base.yaml wener/base:latest base.tar --build-arch aarch64\n\n# docker \u73af\u5883\u4f7f\u7528\ndocker run distroless.dev/apko version\ndocker run --rm -it -v $PWD:/work distroless.dev/apko build alpine-base.yaml apko-alpine:edge apko-alpine.tar\n"})}),"\n",(0,s.jsx)(e.h2,{id:"apkoyaml",children:"apko.yaml"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'contents:\n  repositories:\n    - https://dl-cdn.alpinelinux.org/alpine/edge/main\n    # - @local /github/workspace/packages # \u672c\u5730\n  packages:\n    - alpine-baselayout\n    - nginx\n  # keyring:\n\nentrypoint:\n  type: service-bundle # \u4f7f\u7528 s6 https://skarnet.org/software/s6/index.html\n  services:\n    nginx: /usr/sbin/nginx -c /etc/nginx/nginx.conf -g "daemon off;"\n  # \u975e service-bundle \u4f7f\u7528 command\n  command: /bin/sh -l\n  # \u7c7b\u4f3c command\n  shell-fragment:\n\n# WORKDIR\nwork-dir: /usr/share/nginx\n\naccounts:\n  groups:\n    - groupname: nginx\n      gid: 10000\n  users:\n    - username: nginx\n      uid: 10000\n  # \u8fd0\u884c\u7528\u6237\n  run-as: nginx\n\n# \u73af\u5883\u53d8\u91cf\nenvironment:\n  PATH: /usr/sbin:/sbin:/usr/bin:/bin\n\n# \u64cd\u4f5c\u6587\u4ef6\npaths:\n  - path: /run/nginx\n    # directory,empty-file,hardlink,symlink,permissions\n    type: directory\n    uid: 10000\n    gid: 10000\n    permissions: 0o755\n    # source: # hardlink, symlink\n  - path: /etc/nginx/http.d/default.conf\n    type: hardlink\n    source: /usr/share/nginx/http-default_server.conf\n    uid: 10000\n    gid: 10000\n    permissions: 0o644\n\n# docker image arch\n# 386, amd64, arm64, arm/v6, arm/v7, ppc64le, riscv64, s390x\narchs:\n  - amd64\n  - 386\n\n# \u7c7b\u4f3c Dockerfile \u7684 FROM\ninclude: github.com/chainguard-dev/apko/examples/alpine-base.yaml@main\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"x86"}),"\n",(0,s.jsx)(e.li,{children:"x86_64"}),"\n",(0,s.jsx)(e.li,{children:"aarch64"}),"\n",(0,s.jsx)(e.li,{children:"armv7"}),"\n",(0,s.jsx)(e.li,{children:"ppc64le"}),"\n",(0,s.jsx)(e.li,{children:"s390x"}),"\n",(0,s.jsx)(e.li,{children:"riscv64"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"melange",children:"melange"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/melange",children:"chainguard-dev/melange"})}),"\n",(0,s.jsxs)(e.li,{children:["use\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/chainguard-dev/melange/tree/main/pipelines",children:"https://github.com/chainguard-dev/melange/tree/main/pipelines"})}),"\n"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Substitution"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"${{package.name}}"})}),(0,s.jsx)(e.td,{children:"Package name"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"${{package.version}}"})}),(0,s.jsx)(e.td,{children:"Package version"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"${{package.epoch}}"})}),(0,s.jsx)(e.td,{children:"Package epoch"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"${{targets.destdir}}"})}),(0,s.jsx)(e.td,{children:"Directory where targets will be stored"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"${{targets.subpkgdir}}"})}),(0,s.jsx)(e.td,{children:"Directory where subpackage targets will be stored"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"lima",children:"lima"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'limactl start --tty=false apko.yaml\nlimactl shell apko sudo su -c "HOME=\\"${HOME}\\" ash"\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'images:\n  - location: https://ghproxy.com/https://github.com/lima-vm/alpine-lima/releases/download/v0.2.18/alpine-lima-std-3.16.0-x86_64.iso\n    arch: x86_64\n    digest: sha512:234e407867a8955b9835b08e605b38583815dbd63c5690b558fbbd7b519af115c53694ddc3ff498cddb112f113e350c9f8b2a3351be038aa443399a39eff6007\n\ncpus: 1\nmemory: 2GiB\ndisk: 10GiB\nfirmware:\n  legacyBIOS: true\ncontainerd:\n  system: false\n  user: false\nmounts:\n  - location: \'~\'\n  - location: \'/tmp/lima\'\n    writable: true\n\nprovision:\n  - mode: system\n    script: |\n      #!/bin/ash\n      set -eux -o pipefail\n      cat << EOF > /etc/apk/repositories\n      https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/main/\n      https://mirrors.sjtug.sjtu.edu.cn/alpine/v3.16/community/\n      @testing https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing/\n      EOF\n\n      apk update\n      apk add apko@testing\n      apk add nano file curl\n\n\n      arch="$(uname -m)"\n      if [[ "${arch}" != "x86_64" ]] && [[ "${arch}" != "aarch64" ]]; then\n        echo "Unsupported arch: ${arch}. Exiting."\n        exit 1\n      fi\n\n      # docker-credential-osxkeychain (mac system)\n      # Add a dummy version of docker-credential-osxkeychain typically found\n      # in mac ~/.docker/config.json\n      echo \'#!/bin/ash\' > /usr/bin/docker-credential-osxkeychain\n      echo \'echo "{\\"ServerURL\\":\\"${1}\\",\\"Username\\":\\"\\",\\"Secret\\":\\"\\"}"\' \\\n        >> /usr/bin/docker-credential-osxkeychain\n      chmod +x /usr/bin/docker-credential-osxkeychain\n      # Get the examples/ dir from GitHub release, place at /examples\n      wget https://ghproxy.com/github.com/chainguard-dev/apko/archive/refs/heads/main.zip\n      unzip main.zip "apko-main/examples/*" -d /examples -j\n      rm -f main.zip\nmessage: |-\n  ---\n  Run the following to get a root shell (needed to run apko build):\n    limactl shell apko-playground sudo su -c "HOME=\\"${HOME}\\" ash"\n\n  Try building an image:\n    apko build /examples/nginx.yaml tag /tmp/output.tar\n  Try publishing an image:\n    apko publish /examples/nginx.yaml <registry_ref>\n  ---\n'})})]})}function h(n={}){const{wrapper:e}={...(0,a.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},38088:(n,e,i)=>{var s=i(96651),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,i){var s,l={},d=null,o=null;for(s in void 0!==i&&(d=""+i),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(o=e.ref),e)r.call(e,s)&&!c.hasOwnProperty(s)&&(l[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===l[s]&&(l[s]=e[s]);return{$$typeof:a,type:n,key:d,ref:o,props:l,_owner:t.current}}e.Fragment=l,e.jsx=d,e.jsxs=d},2488:(n,e,i)=>{n.exports=i(38088)},62780:(n,e,i)=>{i.d(e,{I:()=>t,M:()=>r});var s=i(96651);const a={},l=s.createContext(a);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);