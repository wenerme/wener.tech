"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[67554],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(m,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],i={title:"MetalLB"},m="MetalLB",p={unversionedId:"devops/kubernetes/network/metallb",id:"devops/kubernetes/network/metallb",title:"MetalLB",description:"- danderson/metallb",source:"@site/../notes/devops/kubernetes/network/metallb.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/metallb",permalink:"/notes/devops/kubernetes/network/metallb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/network/metallb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"MetalLB"},sidebar:"docs",previous:{title:"kube-router",permalink:"/notes/devops/kubernetes/network/kube-router"},next:{title:"Nginx Ingress \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/network/nginx-ingress-faq"}},s={},u=[],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"metallb"},"MetalLB"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/danderson/metallb"},"danderson/metallb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e3b\u673a L2 \u63d0\u4f9b LB \u80fd\u529b - VIP/\u865a\u62df IP/\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 L2 \u548c BGP \u6a21\u5f0f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/concepts/layer2/"},"L2")," \u4f7f\u7528 ARP/NDP - ",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u7b80\u5355"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u76d1\u542c\u6240\u6709\u7f51\u5361"),(0,l.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u53ea\u4f1a\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u4e00\u4e2a\u8282\u70b9")," \u4e0d\u662f\u771f\u6b63\u7684\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 failover \u673a\u5236 - \u65e7\u7684 leader \u6709 10s \u7684\u79df\u7ea6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/concepts/bgp/"},"BGP")," - \u914d\u7f6e\u76f8\u5bf9\u590d\u6742",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u4e8e\u7f51\u7edc\u8def\u7531\u5668\u5efa\u7acb BGP \u4f1a\u8bdd"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8def\u7531\u914d\u7f6e\u4e86\u591a\u8def\u652f\u6301 - \u90a3\u4e48\u914d\u5408 metallb \u5ba3\u544a\u7684\u5730\u5740\u5219\u80fd\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"li"},"\u771f\u6b63\u7684\u8d1f\u8f7d\u5747\u8861")," - \u800c\u4e0d\u53ea\u662f\u4f7f\u7528\u4e00\u4e2a\u4f5c\u4e3a \u4e0b\u4e00\u8df3/nexthop"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u53d8\u5316\u65f6\u4f1a\u6709\u4e00\u77ac\u95f4\u7684\u4e2d\u65ad"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4f7f\u7528\u57fa\u4e8e hash \u7684\u8d1f\u8f7d\u5747\u8861 - \u90e8\u5206\u573a\u666f\u4e0b\u4f1a\u6709\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},"MetalLB \u5b89\u88c5\u540e\u5982\u679c\u4e0d\u914d\u7f6e\u4e5f\u662f\u6ca1\u6709\u5f00\u59cb\u5de5\u4f5c\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u539f\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metallb-system/controller")," deployment \u5904\u7406 IP \u5206\u53d1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metallb-system/speaker")," daemonset \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u54cd\u5e94\u8def\u7531",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94 ARP\uff0c\u7533\u660e\u8282\u70b9\u6709 IP \u5e76\u8fd4\u56de MAC"))))),(0,l.kt)("li",{parentName:"ul"},"Helm ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wenerme/charts/tree/master/metallb"},"https://github.com/wenerme/charts/tree/master/metallb"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd PING ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/danderson/metallb/issues/259"},"https://github.com/danderson/metallb/issues/259")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"externalTrafficPolicy")," \u9009\u9879 - BGP \u548c L2 \u884c\u4e3a\u4e0d\u4e00\u6837"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/installation/network-addons/"},"\u7f51\u7edc\u517c\u5bb9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Canal Cilium Flannel")))),(0,l.kt)("p",{parentName:"admonition"},"::"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u901a\u8fc7 arping \u68c0\u6d4b\u7f51\u7edc\u4e92\u901a\n# interface \u548c\u5730\u5740\u9700\u8981\u5bf9\u5e94\narping -I eth0 192.168.10.1\n\n# \u5728\u53e6\u5916\u7684\u8282\u70b9\u4e0a\u53ef\u4ee5\u901a\u8fc7 tcpdump \u68c0\u6d4b\u7f51\u7edc\u4e92\u901a\ntcpdump -n -i eth0 arp src host 192.168.1.240\n\n# metallb\n# \u4e0b\u8f7d\u5230\u672c\u5730\u5b89\u88c5\nver=$(curl -Ls https://api.github.com/repos/danderson/metallb/releases/latest | jq -r .tag_name)\ncurl https://raw.githubusercontent.com/danderson/metallb/$ver/manifests/metallb.yaml -Lo metallb-$ver.yaml\ncurl https://raw.githubusercontent.com/danderson/metallb/$ver/manifests/namespace.yaml -Lo metallb-namespace-$ver.yaml\nkubectl apply -f metallb-namespace-$ver.yaml\nkubectl apply -f metallb-$ver.yaml\n\n# \u7b2c\u4e00\u6b21\u5b89\u88c5\nkubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"\n\n# \u914d\u7f6e\u751f\u6548\ncat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: metallb-system\n  name: config\ndata:\n  config: |\n    address-pools:\n    - name: default\n      protocol: layer2\n      addresses:\n      - 192.168.128.0/17\nEOF\n')),(0,l.kt)("h2",{parentName:"admonition",id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/danderson/metallb/blob/main/manifests/example-config.yaml"},"example-config.yaml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/configuration"},"\u914d\u7f6e\u6587\u6863"))),(0,l.kt)("h3",{parentName:"admonition",id:"l2"},"L2"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: metallb-system\n  name: config\ndata:\n  config: |\n    address-pools:\n    - name: default\n      protocol: layer2\n      addresses:\n      - 192.168.1.240-192.168.1.250\n      - 192.168.144.0/20\n")),(0,l.kt)("h3",{parentName:"admonition",id:"bgp"},"BGP"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: metallb-system\n  name: config\ndata:\n  config: |\n    peers:\n    - peer-address: 10.0.0.1\n      peer-asn: 64501\n      my-asn: 64500\n    address-pools:\n    - name: default\n      protocol: bgp\n      addresses:\n      - 192.168.10.0/24\n")),(0,l.kt)("h2",{parentName:"admonition",id:"\u670d\u52a1\u7279\u6b8a\u914d\u7f6e"},"\u670d\u52a1\u7279\u6b8a\u914d\u7f6e"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx\n  annotations:\n    # \u9009\u62e9\u5730\u5740\u6c60 - \u5426\u5219\u4f7f\u7528\u9ed8\u8ba4\n    metallb.universe.tf/address-pool: production-public-ips\n    # \u5982\u679c\u5141\u8bb8\u5171\u4eab IP \u90a3\u4e48\u53ef\u80fd\u4e24\u6b21\u62ff\u5230\u76f8\u540c\u7684\n    metallb.universe.tf/allow-shared-ip: true\nspec:\n  ports:\n    - port: 80\n      targetPort: 80\n  selector:\n    app: nginx\n  type: LoadBalancer\n")),(0,l.kt)("h2",{parentName:"admonition",id:"faq"},"FAQ"),(0,l.kt)("h3",{parentName:"admonition",id:"\u4fee\u6539-ip-\u5730\u5740\u6c60"},"\u4fee\u6539 IP \u5730\u5740\u6c60"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/danderson/metallb/issues/308"},"danderson/metallb#308"))),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u8ba4\u4e0a\u6b21\u5206\u53d1\u7684 IP\nkubectl get svc\n# \u5220\u9664\u65e7\u7684\u914d\u7f6e\nkubectl -n metallb-system delete cm config\n# \u5e94\u7528\u65b0\u7684\u914d\u7f6e\nkubectl apply -f new.yml\n# \u5220\u9664 metallb \u5bb9\u5668\nkubectl -n metallb-system delete pod --all\n# \u786e\u4fdd\u6062\u590d\nkubectl -n metallb-system get pods -w\n# \u67e5\u770b\u65b0\u83b7\u53d6\u5230\u7684 IP\nkubectl get svc\n")),(0,l.kt)("h2",{parentName:"admonition",id:"annotations"},"Annotations"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"metallb.universe.tf/allow-shared-ip"))))}d.isMDXComponent=!0}}]);