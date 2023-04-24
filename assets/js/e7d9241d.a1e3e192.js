"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[37893],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(r),k=o,m=s["".concat(c,".").concat(k)]||s[k]||p[k]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},21556:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))d.call(t,r)&&u(e,r,t[r]);return e};const s={title:"DID"},k="Docker In Docker",m={unversionedId:"devops/docker/docker-dind",id:"devops/docker/docker-dind",title:"DID",description:"- 2376 - tls",source:"@site/../notes/devops/docker/docker-dind.md",sourceDirName:"devops/docker",slug:"/devops/docker/dind",permalink:"/notes/devops/docker/dind",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/docker/docker-dind.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1682315301,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{title:"DID"},sidebar:"docs",previous:{title:"credential helpers",permalink:"/notes/devops/docker/credential-helpers"},next:{title:"Docker FAQ",permalink:"/notes/devops/docker/faq"}},f={},b=[{value:"rootless",id:"rootless",level:2},{value:"buildx",id:"buildx",level:2},{value:"\u5b58\u5728 mtu \u95ee\u9898",id:"\u5b58\u5728-mtu-\u95ee\u9898",level:2},{value:"invalid TLS configuration: Could not load X509 key pair (cert: &quot;&quot;, key: &quot;&quot;): open : no such file or directory",id:"invalid-tls-configuration-could-not-load-x509-key-pair-cert--key--open--no-such-file-or-directory",level:2}],y={toc:b};function v(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"docker-in-docker"}),"Docker In Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2376 - tls"),(0,n.kt)("li",{parentName:"ul"},"2375"),(0,n.kt)("li",{parentName:"ul"},"cert 825d"),(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5173\u95ed tls --tls=fals --tlsverify=false")),(0,n.kt)("admonition",p({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04 sock \u5728\u91cd\u542f\u540e\u4f1a\u5931\u6548"),(0,n.kt)("li",{parentName:"ul"},"mtu \u6700\u597d\u8bbe\u7f6e <= 1450 - ",(0,n.kt)("inlineCode",{parentName:"li"},"--mtu")),(0,n.kt)("li",{parentName:"ul"},"dind network create \u4e0d\u4f1a\u7ee7\u627f ",(0,n.kt)("inlineCode",{parentName:"li"},"--mtu")," \u53c2\u6570"))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# -e DOCKER_TLS_CERTDIR=/certs\n# /certs/ca\n# /certs/client - \u53ef\u6302\u8f7d\u7ed9\u5ba2\u6237\u7aef\n# \u4e5f\u53ef\u901a\u8fc7 sock \u6302\u8f7d\u7ed9\u5ba2\u6237\u7aef /var/run/docker.sock\n# \u8bbe\u7f6e DOCKER_TLS_CERTDIR \u4e3a\u7a7a\u5219\u7981\u7528 tls\uff0c\u7aef\u53e3\u4e3a 2375\ndocker run --rm -it \\\n  --privileged \\\n  -e DOCKER_TLS_CERTDIR='' \\\n  -v $PWD/data:/var/lib/docker \\\n  --name dind docker:dind --storage-driver overlay2\n\n# \u901a\u8fc7 HOST \u8c03\u7528\nexport DOCKER_HOST=tcp://dind:2375/\nexport DOCKER_DRIVER=overlay2\n# https://github.com/docker-library/docker/pull/166\nexport DOCKER_TLS_CERTDIR=''\n\ncurl --unix-socket /var/run/docker.sock http://localhost/images/json | jq\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/docker-library/docker/blob/master/23.0/dind/dockerd-entrypoint.sh"}),"https://github.com/docker-library/docker/blob/master/23.0/dind/dockerd-entrypoint.sh"))),(0,n.kt)("h2",p({},{id:"rootless"}),"rootless"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bd5\u9a8c\u6027\u7684 rootless",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/docker-library/docker/pull/174"}),"docker-library/docker#174")),(0,n.kt)("li",{parentName:"ul"},"\u8fd8\u662f\u9700\u8981 ",(0,n.kt)("inlineCode",{parentName:"li"},"--privileged"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -d --name docker --privileged docker:dind-rootless\n")),(0,n.kt)("h2",p({},{id:"buildx"}),"buildx"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"BUILDX_VERSION=v0.10.4\n\nmkdir -p ~/.docker/cli-plugins\ncurl -sSLo ~/.docker/cli-plugins/docker-buildx https://github.com/docker/buildx/releases/download/$BUILDX_VERSION/buildx-$BUILDX_VERSION.linux-amd64\nchmod +x ~/.docker/cli-plugins/docker-buildx\ndocker run --rm --privileged multiarch/qemu-user-static --reset -p yes\ndocker info\n")),(0,n.kt)("h2",p({},{id:"\u5b58\u5728-mtu-\u95ee\u9898"}),"\u5b58\u5728 mtu \u95ee\u9898"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"curl https \u7684\u65f6\u5019 hang"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--mtu=1400"))),(0,n.kt)("h2",p({},{id:"invalid-tls-configuration-could-not-load-x509-key-pair-cert--key--open--no-such-file-or-directory"}),'invalid TLS configuration: Could not load X509 key pair (cert: "", key: ""): open : no such file or directory'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"li"},"--tls=false --tlsverify=false"),",\u53ef\u4ee5\u914d\u7f6e  ",(0,n.kt)("inlineCode",{parentName:"li"},"--tls=false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/moby/moby/issues/27105"}),"https://github.com/moby/moby/issues/27105"))))}v.isMDXComponent=!0}}]);