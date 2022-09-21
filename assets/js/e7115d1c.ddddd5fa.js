"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6556],{23700:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=r(96600),n=r(27279),i=(r(59496),r(3905)),l=["components"],o={title:"VictoriaMetrics Operator",tags:["Kubernetes","Operator"]},s=void 0,c={unversionedId:"service/observability/metrics/victoria-metrics-operator",id:"service/observability/metrics/victoria-metrics-operator",title:"VictoriaMetrics Operator",description:"- VictoriaMetrics/operator",source:"@site/notes/service/observability/metrics/victoria-metrics-operator.md",sourceDirName:"service/observability/metrics",slug:"/service/observability/metrics/victoria-metrics-operator",permalink:"/notes/service/observability/metrics/victoria-metrics-operator",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/victoria-metrics-operator.md",tags:[{label:"Kubernetes",permalink:"/notes/tags/kubernetes"},{label:"Operator",permalink:"/notes/tags/operator"}],version:"current",frontMatter:{title:"VictoriaMetrics Operator",tags:["Kubernetes","Operator"]},sidebar:"docs",previous:{title:"Thanos",permalink:"/notes/service/observability/metrics/thanos"},next:{title:"VictoriaMetrics",permalink:"/notes/service/observability/metrics/victoria-metrics"}},p={},m=[],u={toc:m};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/VictoriaMetrics/operator"},"VictoriaMetrics/operator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u76d1\u63a7\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u90e8\u7f72"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/VictoriaMetrics/helm-charts"},"VictoriaMetrics/helm-charts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Helm \u90e8\u7f72 Repo - \u63a8\u8350 operator \u90e8\u7f72")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76d1\u63a7")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prometheus"),(0,i.kt)("th",{parentName:"tr",align:null},"vm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ServiceMonitor"),(0,i.kt)("td",{parentName:"tr",align:null},"VMServiceMonitor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PodMonitor"),(0,i.kt)("td",{parentName:"tr",align:null},"VMPodMonitor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PrometheusRule"),(0,i.kt)("td",{parentName:"tr",align:null},"VMRule")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Probe"),(0,i.kt)("td",{parentName:"tr",align:null},"VMProbe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"VMNodeScrape")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"VMStaticScrape")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"VMSingle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"VMCluster")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VMNodeScrape \u53ef\u4ee5\u907f\u514d\u9488\u5bf9\u7cfb\u7edf\u670d\u52a1\u521b\u5efa service\uff0c\u4f8b\u5982 kublet")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.victoriametrics.com/operator/api.html"},"https://docs.victoriametrics.com/operator/api.html")),(0,i.kt)("li",{parentName:"ul"},"VMSingle"),(0,i.kt)("li",{parentName:"ul"},"VMCluster - \u96c6\u7fa4\u7248 VM"),(0,i.kt)("li",{parentName:"ul"},"VMAgent"),(0,i.kt)("li",{parentName:"ul"},"VMAlert"),(0,i.kt)("li",{parentName:"ul"},"VMAlertmanager"),(0,i.kt)("li",{parentName:"ul"},"VMServiceScrape"),(0,i.kt)("li",{parentName:"ul"},"VMPodScrape"),(0,i.kt)("li",{parentName:"ul"},"VMStaticScrape"),(0,i.kt)("li",{parentName:"ul"},"VMAuth - \u90e8\u7f72 vmauth - \u901a\u8fc7\u9650\u5b9a path \u5b9e\u73b0\u6743\u9650\u548c\u79df\u6237\u9650\u5b9a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VMUser - \u6dfb\u52a0 vmauth \u7528\u6237",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"bearerToken"),(0,i.kt)("li",{parentName:"ul"},"basicAuth"))),(0,i.kt)("li",{parentName:"ul"},"\u751f\u6210\u7684\u914d\u7f6e\u4f4d\u4e8e /opt/vmauth/config.yaml")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# \u90e8\u7f72 vmauth\napiVersion: operator.victoriametrics.com/v1beta1\nkind: VMAuth\nmetadata:\n  name: example\n  namespace: default\nspec:\n  ingress:\n    class_name: nginx\n    tlsHosts: []\n    tlsSecretName:\n    extraRules:\n    extraTls:\n  # false \u5219\u8981\u6c42\u914d\u7f6e userSelector, userNamespaceSelector\n  selectAllByDefault: true\n  # vmuser label \u9009\u62e9\n  userSelector:\n    matchLabels:\n      vmauth.victoriametrics.com/instance: demo\n  # ns label \u9009\u62e9\n  userNamespaceSelector:\n\n---\n# \u4e3a vmauth \u914d\u7f6e user\napiVersion: operator.victoriametrics.com/v1beta1\nkind: VMUser\nmetadata:\n  name: example\n  labels:\n    vmauth.victoriametrics.com/instance: demo\nspec:\n  username: simple-user\n  password: simple-password\n  passwordRef:\n  generatePassword: false\n  bearerToken:\n  targetRefs:\n    - crd:\n        # VMAgent,VMAlert,VMAlertmanager,VMSingle,VMCluster/vmselect,VMCluster/vminsert,VMCluster/vmstorage\n        kind: VMSingle\n        name: example\n        namespace: default\n      paths: ['/.*']\n    - static:\n        url: http://vmalert-example.default.svc:8080\n      paths: ['/api/v1/groups', '/api/v1/alerts']\n      target_path_suffix:\n      headers:\n        - X-Org-ID: xyz\n")))}k.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return u}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),k=n,b=u["".concat(s,".").concat(k)]||u[k]||p[k]||i;return r?a.createElement(b,l(l({ref:t},m),{},{components:r})):a.createElement(b,l({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);