"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[34194],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return k}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),k=o,m=d["".concat(s,".").concat(k)]||d[k]||l[k]||c;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63988:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(96600),o=t(27279),c=(t(59496),t(49613)),a=["components"],i={title:"K3S in Docker"},s="K3S in Docker",u={unversionedId:"devops/kubernetes/distro/k3d",id:"devops/kubernetes/distro/k3d",title:"K3S in Docker",description:"- rancher/k3d - \u5bb9\u5668\u8fd0\u884c",source:"@site/../notes/devops/kubernetes/distro/k3d.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/k3d",permalink:"/notes/devops/kubernetes/distro/k3d",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/distro/k3d.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"K3S in Docker"},sidebar:"docs",previous:{title:"k0sctl",permalink:"/notes/devops/kubernetes/distro/k0sctl"},next:{title:"K3S \u914d\u7f6e",permalink:"/notes/devops/kubernetes/distro/k3s-conf"}},p={},l=[{value:"macOS",id:"macos",level:2}],d={toc:l};function k(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"k3s-in-docker"},"K3S in Docker"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3d"},"rancher/k3d")," - \u5bb9\u5668\u8fd0\u884c",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e4b\u524d\u7684 ",(0,c.kt)("a",{parentName:"li",href:"https://github.com/zeerorg/k3s-in-docker"},"zeerorg/k3s-in-docker")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/blob/master/docker-compose.yml"},"rancher/k3s/docker-compose.yml"))))),(0,c.kt)("h2",{id:"macos"},"macOS"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u53ef\u8fd0\u884c K3d (K3s in Docker) \u548c docker-compose")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"brew install k3d\n\n# docker-compose.yaml \u4f4d\u4e8e https://github.com/rancher/k3s\ndocker-compose up --scale agent=3\n\n# kubeconfig is written to current dir\nkubectl --kubeconfig kubeconfig.yaml get node\n\n# \u542f\u52a8 server\ndocker run --rm -it \\\n  --tmpfs /run --tmpfs /var/run \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  rancher/k3s k3s server --docker\n\n\n# \u53ea\u542f\u52a8 agent\n# docker-compose up agent\n# \u6216\u8005\u76f4\u63a5 docker \u542f\u52a8\nsudo docker run \\\n  -d --tmpfs /run \\\n  --tmpfs /var/run \\\n  -e K3S_URL=${SERVER_URL} \\\n  -e K3S_TOKEN=${NODE_TOKEN} \\\n  --privileged rancher/k3s\n")))}k.isMDXComponent=!0}}]);