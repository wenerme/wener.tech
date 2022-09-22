"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[57721],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),l=["components"],i={title:"prometheus-config-reloader"},p="prometheus-config-reloader",u={unversionedId:"devops/kubernetes/app/prometheus-config-reloader",id:"devops/kubernetes/app/prometheus-config-reloader",title:"prometheus-config-reloader",description:"- prometheus-config-reloader",source:"@site/../notes/devops/kubernetes/app/prometheus-config-reloader.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/prometheus-config-reloader",permalink:"/notes/devops/kubernetes/app/prometheus-config-reloader",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/kubernetes/app/prometheus-config-reloader.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"prometheus-config-reloader"},sidebar:"docs",previous:{title:"CrunchyData PGO",permalink:"/notes/devops/kubernetes/app/pgo"},next:{title:"Reloader",permalink:"/notes/devops/kubernetes/app/reloader"}},m={},c=[],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheus-config-reloader"},"prometheus-config-reloader"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/tree/main/cmd/prometheus-config-reloader"},"prometheus-config-reloader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f3a\u6c42 reload \u63a5\u53e3 - \u4f5c\u4e3a sidecar \u90e8\u7f72"),(0,o.kt)("li",{parentName:"ul"},"fsnotify"),(0,o.kt)("li",{parentName:"ul"},"quay.io/prometheus-operator/prometheus-config-reloader")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"flag"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--config-file file"),(0,o.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u542c\u6587\u4ef6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--config-envsubst-file file"),(0,o.kt)("td",{parentName:"tr",align:null},"\u66ff\u6362 config-file \u91cc\u7684\u73af\u5883\u53d8\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--watched-dir dir"),(0,o.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u542c\u76ee\u5f55")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--reload-url url"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1:9090/-/reload"},"http://127.0.0.1:9090/-/reload"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--listen-address"),(0,o.kt)("td",{parentName:"tr",align:null},"metrics")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--statefulset-ordinal-from-envvar"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--watch-interval"),(0,o.kt)("td",{parentName:"tr",align:null},"3m")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--delay-interval"),(0,o.kt)("td",{parentName:"tr",align:null},"1s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--retry-interval"),(0,o.kt)("td",{parentName:"tr",align:null},"5s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--log-format"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--log-level"),(0,o.kt)("td",{parentName:"tr",align:null},"info")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"config-file \u53ef\u4ee5\u662f gz",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"k8s secret \u6700\u591a 1MB")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  containers:\n    - name: config-reloader\n      image: quay.io/prometheus-operator/prometheus-config-reloader:v0.48.1\n      command:\n        - /bin/prometheus-config-reloader\n      args:\n        - '--reload-url=http://localhost:8429/-/reload'\n        - '--config-envsubst-file=/etc/vmagent/config_out/vmagent.env.yaml'\n        - '--watched-dir=/etc/vm/relabeling'\n        - '--config-file=/etc/vmagent/config/vmagent.yaml.gz'\n      env:\n        - name: POD_NAME\n          valueFrom:\n            fieldRef:\n              apiVersion: v1\n              fieldPath: metadata.name\n      resources:\n        limits:\n          cpu: 100m\n          memory: 25Mi\n        requests:\n          cpu: 100m\n          memory: 25Mi\n      volumeMounts:\n        - name: config\n          mountPath: /etc/vmagent/config\n        - name: config-out\n          mountPath: /etc/vmagent/config_out\n        - name: relabeling-assets\n          readOnly: true\n          mountPath: /etc/vm/relabeling\n        - name: kube-api-access-g58qm\n          readOnly: true\n          mountPath: /var/run/secrets/kubernetes.io/serviceaccount\n      terminationMessagePath: /dev/termination-log\n      terminationMessagePolicy: FallbackToLogsOnError\n      imagePullPolicy: IfNotPresent\n")))}d.isMDXComponent=!0}}]);