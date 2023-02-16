"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84650],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(k,a(a({ref:r},p),{},{components:t})):n.createElement(k,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66455:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return y}});var n=t(49613),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&p(e,t,r[t]);return e};const d={title:"K3S in Docker"},m="K3S in Docker",k={unversionedId:"devops/kubernetes/distro/k3s/k3d",id:"devops/kubernetes/distro/k3s/k3d",title:"K3S in Docker",description:"- rancher/k3d - \u5bb9\u5668\u8fd0\u884c",source:"@site/../notes/devops/kubernetes/distro/k3s/k3d.md",sourceDirName:"devops/kubernetes/distro/k3s",slug:"/devops/kubernetes/distro/k3s/k3d",permalink:"/notes/devops/kubernetes/distro/k3s/k3d",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k3s/k3d.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1676530464,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{title:"K3S in Docker"},sidebar:"docs",previous:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s/"},next:{title:"Centos",permalink:"/notes/devops/kubernetes/distro/k3s/centos"}},f={},y=[{value:"Registry",id:"registry",level:2},{value:"macOS",id:"macos",level:2},{value:"Failed Cluster Start: error during post-start cluster preparation: error overwriting contents of /etc/hosts: Exec process in node &#39;k3d-dev-server-0&#39; failed with exit code &#39;139&#39;: Logs from failed access process:",id:"failed-cluster-start-error-during-post-start-cluster-preparation-error-overwriting-contents-of-etchosts-exec-process-in-node-k3d-dev-server-0-failed-with-exit-code-139-logs-from-failed-access-process",level:2}],g={toc:y};function h(e){var r,t=e,{components:o}=t,p=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},g),p),s(r,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"k3s-in-docker"}),"K3S in Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/rancher/k3d"}),"rancher/k3d")," - \u5bb9\u5668\u8fd0\u884c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e4b\u524d\u7684 ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/zeerorg/k3s-in-docker"}),"zeerorg/k3s-in-docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/rancher/k3s/blob/master/docker-compose.yml"}),"rancher/k3s/docker-compose.yml"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'curl -Lo k3d https://ghproxy.com/github.com/k3d-io/k3d/releases/download/v5.4.7/k3d-linux-arm64\nchmod +x k3d\nmv k3d /usr/local/bin\n\n# k3d-default.yaml\nk3d config init\n\nk3d cluster create dev\n\nexport KUBECONFIG="$(k3d kubeconfig write k3s-default)"\n')),(0,n.kt)("h2",u({},{id:"registry"}),"Registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"write to /etc/rancher/k3s/registries.yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# \u81ea\u5b9a\u4e49\nk3d cluster create mycluster --registry-config "$HOME/my-registries.yaml"\n\nk3d cluster create \\\n  --volume "${HOME}/.k3d/my-registries.yaml:/etc/rancher/k3s/registries.yaml" \\\n  --volume "${HOME}/.k3d/my-company-root.pem:/etc/ssl/certs/my-company-root.pem"\n\n# \u542f\u52a8 registry\nk3d cluster create mycluster --registry-create mycluster-registry\ndocker ps -f name=mycluster-registry\n\nk3d registry create myregistry.localhost --port 12345\nk3d cluster create newcluster --registry-use k3d-myregistry.localhost:12345\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"mirrors:\n  'my.company.registry:5000':\n    endpoint:\n      - http://my.company.registry:5000\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'apiVersion: k3d.io/v1alpha3\nkind: Simple\nname: test\nservers: 1\nagents: 2\nregistries:\n  create:\n    name: myregistry\n  config: |\n    mirrors:\n      "my.company.registry":\n        endpoint:\n          - http://my.company.registry:5000\n')),(0,n.kt)("h2",u({},{id:"macos"}),"macOS"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"brew install k3d\n")),(0,n.kt)("h2",u({},{id:"failed-cluster-start-error-during-post-start-cluster-preparation-error-overwriting-contents-of-etchosts-exec-process-in-node-k3d-dev-server-0-failed-with-exit-code-139-logs-from-failed-access-process"}),"Failed Cluster Start: error during post-start cluster preparation: error overwriting contents of /etc/hosts: Exec process in node 'k3d-dev-server-0' failed with exit code '139': Logs from failed access process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/k3d-io/k3d/issues/1220"}),"https://github.com/k3d-io/k3d/issues/1220"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5.4.7 BUG, 5.4.6 \u6ca1\u95ee\u9898")))),(0,n.kt)("p",null,"\u8986\u76d6 hosts \u65f6\u5f02\u5e38"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"sh -c cat /tmp/-etc-hosts-cUAunADhzSQlEbdflLOb > /etc/hosts\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5199\u5165\u5185\u5bb9")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-hosts"}),"::1 ip6-localhost ip6-loopback localhost\n127.0.0.1 localhost\n172.18.0.1 host.k3d.internal\n172.18.0.2 k3d-dev-server-0\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n")))}h.isMDXComponent=!0}}]);