(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1021:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return t?a.a.createElement(d,i(i({ref:n},s),{},{components:t})):a.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),l=(t(0),t(1021)),o={title:"Kubernetes DNS"},i={unversionedId:"devops/kubernetes/internal/k8s-dns",id:"devops/kubernetes/internal/k8s-dns",isDocsHomePage:!1,title:"Kubernetes DNS",description:"* DNS for Services and Pods",source:"@site/notes/devops/kubernetes/internal/k8s-dns.md",slug:"/devops/kubernetes/internal/k8s-dns",permalink:"/notes/devops/kubernetes/internal/k8s-dns",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/internal/k8s-dns.md",version:"current",sidebar:"docs",previous:{title:"Kubernates \u63a5\u53e3",permalink:"/notes/devops/kubernetes/internal/k8s-api"},next:{title:"Kubernetes \u6807\u7b7e",permalink:"/notes/devops/kubernetes/internal/k8s-labels"}},c=[],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"},"DNS for Services and Pods"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Service"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A/AAAA - ",Object(l.b)("inlineCode",{parentName:"li"},"my-svc.my-namespace.svc.cluster-domain.example")),Object(l.b)("li",{parentName:"ul"},"SRV - ",Object(l.b)("inlineCode",{parentName:"li"},"_my-port-name._my-port-protocol.my-svc.my-namespace.svc.cluster-domain.example")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Pod"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A/AAAA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<pod-ip-address>.my-namespace.pod.cluster-domain.example")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"172-17-0-3.default.pod.cluster.local")))),Object(l.b)("li",{parentName:"ul"},"hostname, subdomain",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<hostname>.<subdomain>.my-namespace.svc.cluster-domain.example")))),Object(l.b)("li",{parentName:"ul"},"setHostnameAsFQDN - 1.19 Alpha"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"pod.spec.dnsPolicy"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Default",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ece\u8fd0\u884c\u8282\u70b9\u96c6\u6210"))),Object(l.b)("li",{parentName:"ul"},"ClusterFirst",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u57df\u540d\u76f4\u63a5\u89e3\u6790"),Object(l.b)("li",{parentName:"ul"},"\u975e\u96c6\u7fa4\u57df\u540d\u8f6c\u53d1\u5230 node \u6307\u5b9a\u7684 dns \u4e0a\u6e38"))),Object(l.b)("li",{parentName:"ul"},"ClusterFirstWithHostNet",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e hostNetwork"))),Object(l.b)("li",{parentName:"ul"},"None",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5ffd\u7565 K8S \u73af\u5883\u4e0b\u7684 DNS \u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 dnsConfig \u914d\u7f6e")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\n  namespace: default\nspec:\n  containers:\n  - image: busybox:1.28\n    command:\n      - sleep\n      - "3600"\n    imagePullPolicy: IfNotPresent\n    name: busybox\n  restartPolicy: Always\n  hostNetwork: true\n  # DNS \u7b56\u7565\n  dnsPolicy: ClusterFirstWithHostNet\n  # \u81ea\u5b9a\u4e49 DNS \u914d\u7f6e - \u751f\u6210 /etc/resolv.conf\n  # dnsPolicy: None\n  dnsConfig:\n    nameservers:\n      - 1.2.3.4\n    searches:\n      - ns1.svc.cluster-domain.example\n      - my.dns.search.suffix\n    options:\n      - name: ndots\n        value: "2"\n      - name: edns0\n')))}p.isMDXComponent=!0}}]);