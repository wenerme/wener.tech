"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66360],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),u=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,d=c["".concat(m,".").concat(k)]||c[k]||p[k]||l;return t?a.createElement(d,i(i({ref:n},s),{},{components:t})):a.createElement(d,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},67699:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"kuma",title:"Kuma"},m=void 0,u={unversionedId:"devops/service/kuma",id:"devops/service/kuma",title:"Kuma",description:"- Built by Envoy contributors at Kong",source:"@site/notes/devops/service/kuma.md",sourceDirName:"devops/service",slug:"/devops/service/kuma",permalink:"/notes/devops/service/kuma",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/kuma.md",tags:[],version:"current",frontMatter:{id:"kuma",title:"Kuma"},sidebar:"docs",previous:{title:"Istio",permalink:"/notes/devops/service/istio"},next:{title:"Linkerd \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/service/linkerd-faq"}},s={},p=[{value:"kuma k8s",id:"kuma-k8s",level:2},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:3},{value:"docker",id:"docker",level:2},{value:"kumactl",id:"kumactl",level:2},{value:"\u8bc1\u4e66\u914d\u7f6e",id:"\u8bc1\u4e66\u914d\u7f6e",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2}],c={toc:p};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Built by Envoy contributors at Kong"),(0,l.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"UI \u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u975e K8S \u73af\u5883",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DP CP \u72ec\u7acb"),(0,l.kt)("li",{parentName:"ul"},"Docker"),(0,l.kt)("li",{parentName:"ul"},"Linux"),(0,l.kt)("li",{parentName:"ul"},"CP \u8fd0\u884c\u4e3a Universal \u6a21\u5f0f - \u914d\u7f6e\u5b58\u50a8\u5230 PostgreSQL"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 K8S CRDs \u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a Zone - \u96c6\u7fa4"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 http\u3001http2\u3001grpc\u3001tcp"),(0,l.kt)("li",{parentName:"ul"},"Mesh",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a Mesh"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u5212\u5206 - \u4e1a\u52a1\u4ea7\u7ebf\u3001\u56e2\u961f\u3001\u5e94\u7528\u3001\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u3001\u7b56\u7565\u9694\u79bb"))),(0,l.kt)("li",{parentName:"ul"},"mtls",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528\u540e\u9700\u8981\u914d\u7f6e\u6743\u9650"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 \u5185\u5efa\u3001\u624b\u52a8\u3001vault CA"))),(0,l.kt)("li",{parentName:"ul"},"traffic permission",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 mtls \u5b9e\u73b0"))),(0,l.kt)("li",{parentName:"ul"},"traffic routing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"L4"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8f6e\u8bad"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u6743\u91cd"))),(0,l.kt)("li",{parentName:"ul"},"health check",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u52a8 - dp \u53d1\u8d77\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u88ab\u52a8 - cp \u5206\u6790\u8bf7\u6c42"))),(0,l.kt)("li",{parentName:"ul"},"traffic log",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165\u5230 TCP - logstash"),(0,l.kt)("li",{parentName:"ul"},"\u5199\u5165\u5230 \u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"traffic trace",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"zipkin \u534f\u8bae"))),(0,l.kt)("li",{parentName:"ul"},"traffic metrics",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prometheus /metrics"))),(0,l.kt)("li",{parentName:"ul"},"Fault Injection",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"))),(0,l.kt)("li",{parentName:"ul"},"Circuit Breaker"),(0,l.kt)("li",{parentName:"ul"},"Proxy Template",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e envoy"))))),(0,l.kt)("li",{parentName:"ul"},"Data Plane",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Envoy"),(0,l.kt)("li",{parentName:"ul"},"L4/L7"),(0,l.kt)("li",{parentName:"ul"},"Service Dataplane"),(0,l.kt)("li",{parentName:"ul"},"Gateway Dataplane"))),(0,l.kt)("li",{parentName:"ul"},"Control Plane - Kuma",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Admin API - 5679"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"KUMA_STORE_TYPE=memory")),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 kubernetes\u3001postgres"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"kuma-cp migrate up")," \u521b\u5efa pg \u6570\u636e\u5e93"))),(0,l.kt)("li",{parentName:"ul"},"Kuma DNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":5653")),(0,l.kt)("li",{parentName:"ul"},"IP \u8303\u56f4 240.0.0.0/4"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 tld mesh"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"curl http://echo-server_echo-example_svc_1010.mesh")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kuma.io/docs/latest/documentation/deployments/#standalone-mode"},"\u90e8\u7f72\u6a21\u5f0f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"standalone - \u9ed8\u8ba4\u6a21\u5f0f\uff0c\u5e73\u53f0\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"multi-zone - \u652f\u6301 k8s \u591a\u96c6\u7fa4\u548c\u57fa\u4e8e vm \u7684\u6a21\u5f0f"))))),(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KUMA_DATAPLANE_ADMIN_PORT"),(0,l.kt)("li",{parentName:"ul"},"KUMA_CONTROL_PLANE_API_SERVER_URL=http://kuma-control-plane:5681"),(0,l.kt)("li",{parentName:"ul"},"KUMA_DATAPLANE_ADMIN_PORT"),(0,l.kt)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_LOCAL_PORT=5679"),(0,l.kt)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_PORT"),(0,l.kt)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_INTERFACE"),(0,l.kt)("li",{parentName:"ul"},"KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kuma.io/docs/latest/documentation/security"},"security")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Bu0-y9h8V5w"},"Webinar: Kuma: Service Mesh and the Future of Application Connectivity"))))),(0,l.kt)("h2",{id:"kuma-k8s"},"kuma k8s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kumactl\n\nver=0.7.1\n# \u4f7f\u7528\u79c1\u6709\u4ed3\u5e93\n# registry-vpc.cn-hongkong.aliyuncs.com/cmi\ncat <<IMAGES | xargs -n1 -I {} sh -c 'docker pull kong-docker-kuma-docker.bintray.io/{}; docker tag kong-docker-kuma-docker.bintray.io/{} registry-vpc.cn-hongkong.aliyuncs.com/cmi/{}; docker push registry-vpc.cn-hongkong.aliyuncs.com/cmi/{}'\nkuma-cp:0.7.1\nkuma-dp:0.7.1\nkumactl:0.7.1\nkuma-prometheus-sd:0.7.1\nkuma-init:0.7.1\nIMAGES\n\n# docker \u955c\u50cf\n# kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1\n# kong-docker-kuma-docker.bintray.io/kumactl:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-prometheus-sd:0.7.1\n# kong-docker-kuma-docker.bintray.io/kuma-init:0.7.1\n\n# \u9ed8\u8ba4\u5b89\u88c5\u5230 kuma-system\n# --control-plane-version 0.7.1\n# --control-plane-image kong-docker-kuma-docker.bintray.io/kuma-cp\n# --dataplane-image kong-docker-kuma-docker.bintray.io/kuma-dp\n# --dataplane-init-image kong-docker-kuma-docker.bintray.io/kuma-init\nkumactl install control-plane \\\n  --control-plane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-cp \\\n  --dataplane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-dp \\\n  --dataplane-init-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-init \\\n  --control-plane-version 0.7.1 | kubectl apply -f -\n\nkubectl port-forward svc/kuma-control-plane -n kuma-system 5681:5681\n\necho \"\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-demo\n  labels:\n    app: nginx-demo\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-demo\n  template:\n    metadata:\n      name: nginx-demo\n      labels:\n        app: nginx-demo\n      annotations:\n        kuma.io/direct-access-services: '*'\n        kuma.io/mesh: default\n        kuma.io/sidecar-injected: 'true'\n        kuma.io/transparent-proxying: enabled\n        kuma.io/transparent-proxying-inbound-port: '15006'\n        kuma.io/transparent-proxying-outbound-port: '15001'\n    spec:\n      containers:\n      - name: nginx-demo\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\" | kubectl apply -f -\n\necho \"\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-demo\n  namespace: default\n  annotations:\n    80.service.kuma.io/protocol: http\n    ingress.kubernetes.io/service-upstream: 'true'\nspec:\n  selector:\n    app: nginx\n  ports:\n  - name: http\n    port: 80\n    targetPort: 80\" | kubectl apply -f -\n\n# \u7a7a\u95f4\u6dfb\u52a0\u6ce8\u5165\necho \"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: default\n  namespace: default\n  labels:\n    kuma.io/sidecar-injection: enabled\n    kuma.io/mesh: default\" | kubectl apply -f - && kubectl delete pod --all -n default\n\n# default mesh \u542f\u7528 mtls\necho \"apiVersion: kuma.io/v1alpha1\nkind: Mesh\nmetadata:\n  name: default\nspec:\n  mtls:\n    enabledBackend: ca-1\n    backends:\n    - name: ca-1\n      type: builtin\" | kubectl apply -f -\n\n# metrics\nkumactl install metrics \\\n  --kuma-prometheus-sd-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-prometheus-sd \\\n  --kuma-prometheus-sd-version 0.7.1 | kubectl apply -f -\n\necho \"apiVersion: kuma.io/v1alpha1\nkind: Mesh\nmetadata:\n  name: default\nspec:\n  mtls:\n    enabledBackend: ca-1\n    backends:\n    - name: ca-1\n      type: builtin\n  metrics:\n    enabledBackend: prometheus-1\n    backends:\n    - name: prometheus-1\n      type: prometheus\" | kubectl apply -f -\n\nkubectl port-forward svc/grafana -n kuma-metrics 3000:80\n")),(0,l.kt)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kumactl install metrics \\\n  --kuma-prometheus-sd-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-prometheus-sd \\\n  --kuma-prometheus-sd-version 0.7.1 | kubectl delete -f -\n\nkumactl install control-plane \\\n  --control-plane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-cp \\\n  --dataplane-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-dp \\\n  --dataplane-init-image registry.cn-hongkong.aliyuncs.com/cmi/kuma-init \\\n  --control-plane-version 0.7.1 | kubectl delete -f -\n")),(0,l.kt)("h2",{id:"docker"},"docker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355 docker \u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e vm \u90e8\u7f72"),(0,l.kt)("li",{parentName:"ul"},"multi-zone \u6a21\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6784\u5efa\u73af\u5883\n# ==========\ndocker run -u $(id -u) --rm -it -v $PWD:/host kong-docker-kuma-docker.bintray.io/kumactl:0.7.1 cp /usr/bin/kumactl /host\ndocker run -u $(id -u) --rm -it -v $PWD:/host --entrypoint sh kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1 -c 'cp /usr/bin/kuma-cp /host'\n\ncat <<EOF > Dockerfile\nFROM kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1\n\nCOPY kumactl /usr/bin/\nCOPY kuma-cp /usr/bin/\n\nENTRYPOINT [ \"/bin/sh\" ]\nEOF\n\ndocker build -t kuma .\n\n# http://localhost:5681/gui/\ndocker run --rm -it \\\n  -p 5681:5681 \\\n  -p 8080:8080 \\\n  -w /tmp/kuma \\\n  -u 0 \\\n  --name kuma kuma\n\n# \u542f\u52a8 kuma\nkuma-cp run &\n\nkumactl get meshes\n\n# enable mtls\necho \"type: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin\" | kumactl apply -f -\n\n# \u5141\u8bb8\u6240\u6709\u8bbf\u95ee\ncat <<EOF | kumactl apply -f -\ntype: TrafficPermission\nname: permission-all\nmesh: default\nsources:\n  - match:\n      kuma.io/service: '*'\ndestinations:\n  - match:\n      kuma.io/service: '*'\nEOF\n\n# create dp\necho \"type: Dataplane\nmesh: default\nname: web-dp\nnetworking:\n  address: 127.0.0.1\n  inbound:\n    - port: 80\n      servicePort: 8080\n      tags:\n        kuma.io/service: web\n        kuma.io/protocol: http\" | kumactl apply -f -\n# generate dp token\nkumactl generate dataplane-token --dataplane=web-dp > kuma-token-web-dp\n\n# start dp\nkuma-dp run --name web-dp --mesh=default --dataplane-token-file=kuma-token-web-dp\n")),(0,l.kt)("h2",{id:"kumactl"},"kumactl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\ncat <<EOF | kumactl apply -f -\ntype: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin\nmetrics:\n  enabledBackend: prometheus-1\n  backends:\n  - name: prometheus-1\n    type: prometheus\nEOF\n")),(0,l.kt)("h2",{id:"\u8bc1\u4e66\u914d\u7f6e"},"\u8bc1\u4e66\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alias kumactl="docker run --rm -i -v $PWD:/host -u 1000 -w /host -v $HOME/.kumactl:/.kumactl --net=host kong-docker-kuma-docker.bintray.io/kumactl:0.7.1 kumactl"\n\n# KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR\nkumactl generate tls-certificate \\\n  --cert-file=server-cert \\\n  --key-file=server-key \\\n  --type=server --cp-hostname=localhost\n\n# https://kuma.io/docs/0.7.1/documentation/security/#universal\n# https://kuma.io/docs/0.7.1/installation/docker/\n# localhost:5681/gui\n# KUMA_GENERAL_ADVERTISED_HOSTNAME\ndocker run --rm -it \\\n  -p 5681:5681 \\\n  -p 15679:15679 \\\n  -v $PWD:/host \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_ENABLED=true \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_TLS_CERT_FILE=/host/server-cert \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_TLS_KEY_FILE=/host/server-key \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_INTERFACE=0.0.0.0 \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_PORT=15679 \\\n  -e KUMA_ADMIN_SERVER_PUBLIC_CLIENT_CERTS_DIR=/host/certs \\\n  --name kuma-cp kong-docker-kuma-docker.bintray.io/kuma-cp:0.7.1 run\n\nkumactl get meshes\n# enable mtls\necho "type: Mesh\nname: default\nmtls:\n  enabledBackend: ca-1\n  backends:\n  - name: ca-1\n    type: builtin" | kumactl apply -f -\n\n# \u521b\u5efa dp\necho "type: Dataplane\nmesh: default\nname: web-dp\nnetworking:\n  address: 192.168.1.1\n  inbound:\n    - port: 80\n      servicePort: 8080\n      tags:\n        kuma.io/service: web\n        kuma.io/protocol: http" | kumactl apply -f -\n\n\nkumactl generate tls-certificate --cert-file=client-cert --key-file=client-key --type=client\nkumactl config control-planes add \\\n  --name test --address http://172.17.0.1:5681 \\\n  --admin-client-cert server-cert \\\n  --admin-client-key server-key --overwrite\n\nkumactl generate dataplane-token --dataplane=web-dp > kuma-token-web-dp\n\nmkdir -p ~/.kumactl\ncat <<YAML > ~/.kumactl/config\ncontexts:\n- controlPlane: local\n  name: local\ncontrolPlanes:\n- coordinates:\n    apiServer:\n      url: http://172.17.0.1:5681\n  name: local\ncurrentContext: local\nYAML\n\n# \u542f\u52a8 dp\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  --name kuma-dp kong-docker-kuma-docker.bintray.io/kuma-dp:0.7.1 \\\n  run --cp-address http://172.17.0.1:5681 --name web-dp --dataplane-token-file=\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4 cp \u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminServer": {\n    "apis": { "dataplaneToken": { "enabled": true } },\n    "local": { "port": 5679 },\n    "public": {\n      "clientCertsDir": "",\n      "enabled": false,\n      "interface": "",\n      "port": 0,\n      "tlsCertFile": "",\n      "tlsKeyFile": ""\n    }\n  },\n  "apiServer": {\n    "catalog": {\n      "bootstrap": { "url": "http://localhost:5682" },\n      "monitoringAssignment": { "url": "grpc://localhost:5676" },\n      "sds": { "url": "" }\n    },\n    "corsAllowedDomains": [".*"],\n    "port": 5681,\n    "readOnly": false\n  },\n  "bootstrapServer": {\n    "params": {\n      "adminAccessLogPath": "/dev/null",\n      "adminAddress": "127.0.0.1",\n      "adminPort": 0,\n      "xdsConnectTimeout": "1s",\n      "xdsHost": "localhost",\n      "xdsPort": 5678\n    },\n    "port": 5682\n  },\n  "dataplaneTokenServer": {\n    "enabled": true,\n    "local": { "port": 5679 },\n    "public": {\n      "clientCertsDir": "",\n      "enabled": false,\n      "interface": "",\n      "port": 0,\n      "tlsCertFile": "",\n      "tlsKeyFile": ""\n    }\n  },\n  "defaults": { "skipMeshCreation": false },\n  "dnsServer": { "CIDR": "240.0.0.0/4", "domain": "mesh", "port": 5653 },\n  "environment": "universal",\n  "general": { "advertisedHostname": "localhost" },\n  "guiServer": { "apiServerUrl": "" },\n  "metrics": { "dataplane": { "enabled": true, "subscriptionLimit": 10 } },\n  "mode": "standalone",\n  "monitoringAssignmentServer": {\n    "assignmentRefreshInterval": "1s",\n    "grpcPort": 5676\n  },\n  "multicluster": {\n    "global": {\n      "kds": {\n        "grpcPort": 5685,\n        "refreshInterval": "1s",\n        "tlsCertFile": "/tmp/676369516.crt",\n        "tlsKeyFile": "/tmp/334691547.key"\n      },\n      "pollTimeout": "500ms"\n    },\n    "remote": { "kds": { "refreshInterval": "1s", "rootCaFile": "" } }\n  },\n  "reports": { "enabled": true },\n  "runtime": {\n    "kubernetes": {\n      "admissionServer": { "address": "", "certDir": "", "port": 5443 },\n      "injector": {\n        "cniEnabled": false,\n        "initContainer": { "image": "kuma/kuma-init:latest" },\n        "sidecarContainer": {\n          "adminPort": 9901,\n          "drainTime": "30s",\n          "gid": 5678,\n          "image": "kuma/kuma-dp:latest",\n          "livenessProbe": {\n            "failureThreshold": 12,\n            "initialDelaySeconds": 60,\n            "periodSeconds": 5,\n            "timeoutSeconds": 3\n          },\n          "readinessProbe": {\n            "failureThreshold": 12,\n            "initialDelaySeconds": 1,\n            "periodSeconds": 5,\n            "successThreshold": 1,\n            "timeoutSeconds": 3\n          },\n          "redirectPortInbound": 15006,\n          "redirectPortOutbound": 15001,\n          "resources": {\n            "limits": { "cpu": "1000m", "memory": "512Mi" },\n            "requests": { "cpu": "50m", "memory": "64Mi" }\n          },\n          "uid": 5678\n        }\n      }\n    }\n  },\n  "sdsServer": {\n    "dataplaneConfigurationRefreshInterval": "1s",\n    "grpcPort": 5677,\n    "tlsCertFile": "/tmp/792743550.crt",\n    "tlsKeyFile": "/tmp/964085189.key"\n  },\n  "store": {\n    "cache": { "enabled": true, "expirationTime": "1s" },\n    "kubernetes": { "systemNamespace": "kuma-system" },\n    "postgres": {\n      "connectionTimeout": 5,\n      "dbName": "kuma",\n      "host": "127.0.0.1",\n      "maxOpenConnections": 0,\n      "password": "*****",\n      "port": 15432,\n      "tls": { "caPath": "", "certPath": "", "keyPath": "", "mode": "disable" },\n      "user": "kuma"\n    },\n    "type": "memory"\n  },\n  "xdsServer": {\n    "dataplaneConfigurationRefreshInterval": "1s",\n    "dataplaneStatusFlushInterval": "1s",\n    "diagnosticsPort": 5680,\n    "grpcPort": 5678,\n    "tlsCertFile": "",\n    "tlsKeyFile": ""\n  }\n}\n')),(0,l.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kuma.io/docs/latest/documentation/networking"},"https://kuma.io/docs/latest/documentation/networking"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Standalone Control Plane")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"port"),(0,l.kt)("th",{parentName:"tr",align:null},"protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5676"),(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring Assignment server that responds to discovery requests from monitoring tools, such as Prometheus, that are looking for a list of targets to scrape metrics from, e.g. a list of all dataplanes in the mesh."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5677"),(0,l.kt)("td",{parentName:"tr",align:null},"SDS server being used for propagating mTLS certificates across the data-planes."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5678"),(0,l.kt)("td",{parentName:"tr",align:null},"xDS gRPC server implementation that the data-planes will use to retrieve their configuration."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5679"),(0,l.kt)("td",{parentName:"tr",align:null},"Admin Server that serves Dataplane Tokens and manages Provided Certificate Authority"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5680"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP server that returns the health status of the control-plane."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5681"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP API server that is being used by kumactl, and that you can also use to retrieve Kuma's policies and - when running in universal - that you can use to apply new policies. It also exposes the Kuma GUI at /gui"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5682"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP server that provides the Envoy bootstrap configuration when the data-plane starts up."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5685"),(0,l.kt)("td",{parentName:"tr",align:null},"Kuma Discovery Service port, leveraged in Distributed control plane mode"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5653/udp"),(0,l.kt)("td",{parentName:"tr",align:null},"Kuma DNS server"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);