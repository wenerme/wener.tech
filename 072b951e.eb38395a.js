(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),o=i(n),s=r,j=o["".concat(l,".").concat(s)]||o[s]||O[s]||b;return n?a.a.createElement(j,c(c({ref:t},p),{},{components:n})):a.a.createElement(j,c({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1044:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2020-09-28-kubernetes-vs-openstack-10y-trend-3ed105c0d17b2402ee34ee00cc508c7b.jpg"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(8),b=(n(0),n(1021)),l={slug:"kubernetes-vs-openstack",title:"Kubernetes vs OpenStack",tags:["Kubernetes","\u865a\u62df\u5316"]},c={permalink:"/story/kubernetes-vs-openstack",editUrl:"https://github.com/wenerme/wener/edit/master/story/2020/2020-09-28-kubernetes-vs-openstack.md",source:"@site/story/2020/2020-09-28-kubernetes-vs-openstack.md",description:"10\u5e74\u8d8b\u52bf",date:"2020-09-28T00:00:00.000Z",tags:[{label:"Kubernetes",permalink:"/story/tags/kubernetes"},{label:"\u865a\u62df\u5316",permalink:"/story/tags/\u865a\u62df\u5316"}],title:"Kubernetes vs OpenStack",readingTime:1.37,truncated:!0,prevItem:{title:"Firecracker \u8fd0\u884c AlpineLinux",permalink:"/story/alpine-in-firecracker"},nextItem:{title:"\u4eba\u751f\u7b2c\u56db\u9636\u6bb5",permalink:"/story/stage-four-of-life"}},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u533a\u522b",id:"\u533a\u522b",children:[{value:"OpenStack",id:"openstack",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]}]},{value:"\u4e92\u8865",id:"\u4e92\u8865",children:[]},{value:"\u975e\u5e38\u89c4\u5e73\u53f0",id:"\u975e\u5e38\u89c4\u5e73\u53f0",children:[]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],p={toc:u};function i(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",{alt:"10\u5e74\u8d8b\u52bf",src:n(1044).default})),Object(b.b)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"vs"),Object(b.b)("th",{parentName:"tr",align:null},"OpenStack"),Object(b.b)("th",{parentName:"tr",align:null},"Kubernetes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u8d77\u6e90"),Object(b.b)("td",{parentName:"tr",align:null},"2010 \u5e74 NASA+Rackspace"),Object(b.b)("td",{parentName:"tr",align:null},"1.0 2015 \u5e74 Google")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u5b9a\u4f4d"),Object(b.b)("td",{parentName:"tr",align:null},"\u79c1\u6709\u4e91"),Object(b.b)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u7f16\u6392")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u8c03\u5ea6\u8d44\u6e90"),Object(b.b)("td",{parentName:"tr",align:null},"\u8ba1\u7b97/VM",Object(b.b)("br",null),"\u5b58\u50a8",Object(b.b)("br",null),"\u7f51\u7edc"),Object(b.b)("td",{parentName:"tr",align:null},"\u5bb9\u5668",Object(b.b)("br",null),"\u53ca\u914d\u5957\u5468\u8fb9\u8d44\u6e90",Object(b.b)("br",null),"\u81ea\u5b9a\u4e49\u8d44\u6e90")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u4e3b\u8981\u7f16\u5199\u8bed\u8a00"),Object(b.b)("td",{parentName:"tr",align:null},"Python"),Object(b.b)("td",{parentName:"tr",align:null},"Golang")))),Object(b.b)("h2",{id:"\u533a\u522b"},"\u533a\u522b"),Object(b.b)("p",null,"OpenStack \u4e0e Kubernetes \u7684\u533a\u522b\u5c31\u7b49\u540c\u4e8e\u865a\u62df\u673a\u4e0e\u5bb9\u5668\u7684\u533a\u522b\uff0cDocker \u4e0e VirtualBox \u7684\u533a\u522b\u3002"),Object(b.b)("h3",{id:"openstack"},"OpenStack"),Object(b.b)("p",null,"OpenStack \u7684\u5b58\u5728\u4e3b\u8981\u89e3\u51b3\u57fa\u7840\u8bbe\u65bd\u7ba1\u7406\uff0c\u90a3\u5e74\u4ee3\u4e5f\u6b63\u503c\u5927\u6570\u636e\u5feb\u901f\u53d1\u5c55\uff0c\u5bb9\u5668\u8fd8\u6ca1\u6709\u51fa\u73b0\u4e8e\u516c\u4f17\u89c6\u91ce\u3002\nOpenStack \u63d0\u4f9b\u4e86\u4e00\u6574\u5957\u7684\u79c1\u6709\u4e91\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u6700\u4e3a\u57fa\u7840\u7684\u8bbe\u65bd\u5c42\u4e91\u5316\u3002\u56e0\u4e3a\u662f\u8bbe\u65bd\u5c42\u4e91\u5316\uff0cOpenStack \u662f\u9700\u8981\u5728\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u7684\uff0c\u57fa\u7840\u5e73\u53f0\u5373\u9700\u8981\u76f8\u5f53\u7684\u8d44\u6e90\u3002\nOpenStack \u51fa\u73b0\u540e\u5174\u8d77\u8fc7\u4e00\u6bb5\u6f6e\u6d41\uff0c\u4e0d\u5c11\u4f01\u4e1a\u5f00\u59cb\u7ec4\u5efa\u4e91\uff0c\u5e76\u63d0\u4f9b\u670d\u52a1\uff0c\u6211\u5370\u8c61\u6df1\u523b\u7684\u4fbf\u662f\u4eac\u4e1c\u4e91\u3002\u4f46\u5728 2015 \u5e74 Kubernetes 1.0 \u53d1\u5e03\u540e\uff0c\u5927\u91cf\u4f01\u4e1a\u5f00\u59cb\u8fc1\u51fa OpenStack\uff0c\u8f6c\u5411 Kubernets\u3002"),Object(b.b)("p",null,"\u90a3\u4e48\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528 OpenStack \u5462\uff1f"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"\u6838\u5fc3\u4e1a\u52a1\u662f\u63d0\u4f9b\u516c\u6709\u4e91"))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u865a\u62df\u673a"),Object(b.b)("li",{parentName:"ul"},"\u865a\u62df\u7f51\u7edc"),Object(b.b)("li",{parentName:"ul"},"\u865a\u62df\u5b58\u50a8")),Object(b.b)("ol",{start:2},Object(b.b)("li",{parentName:"ol"},"\u6709 OpenStack \u4e13\u7528\u673a\u623f"),Object(b.b)("li",{parentName:"ol"},"\u6709 OpenStack \u4e13\u5bb6\u56e2\u961f"),Object(b.b)("li",{parentName:"ol"},"\u6709\u8db3\u591f\u7684\u8d44\u91d1\u652f\u4ed8 OpenStack \u54a8\u8be2/\u652f\u6301\u8d39\u7528")),Object(b.b)("p",null,"OpenStack \u53ea\u8d1f\u8d23\u89e3\u51b3\u57fa\u7840\u8bbe\u65bd\u7684\u7ba1\u7406\u9694\u79bb\uff0c\u4e0d\u8d1f\u8d23\u89e3\u51b3\u670d\u52a1\u90e8\u7f72\u8fd0\u7ef4\uff0c\u4e0d\u8d1f\u8d23\u652f\u6491 Web \u89c4\u6a21\u7684\u5e94\u7528\u3002"),Object(b.b)("h3",{id:"kubernetes"},"Kubernetes"),Object(b.b)("p",null,"Kubernetes \u7684\u51fa\u73b0\u548c\u5174\u8d77\u662f\u5bb9\u5668\u53d1\u5c55\u540e\u7684\u7ed3\u679c\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"2007 \u5e74 cgroups \u7684\u51fa\u73b0\u5b9e\u73b0\u4e86\u8fdb\u7a0b\u8d44\u6e90\u9694\u79bb - \u6765\u6e90\u4e8e Google"),Object(b.b)("li",{parentName:"ul"},"2008 \u5e74 lxc \u57fa\u672c\u5b9e\u73b0\u4e86 Linux \u7684\u7cfb\u7edf\u7ea7\u865a\u62df\u5316 - \u57fa\u4e8e cgroups \u548c \u547d\u540d\u7a7a\u95f4"),Object(b.b)("li",{parentName:"ul"},"2013 \u5e74 google \u5f00\u6e90\u53ef\u5185\u90e8\u5bb9\u5668\u6280\u672f\u6808 ",Object(b.b)("a",{parentName:"li",href:"https://github.com/google/lmctfy"},"lmctfy")," \u5b9e\u73b0\u4e86 Linux \u4e0b\u5e94\u7528\u9694\u79bb"),Object(b.b)("li",{parentName:"ul"},"2013 \u5e74 Docker \u51fa\u73b0\u5728\u516c\u4f17\u89c6\u91ce - \u57fa\u4e8e LXC"),Object(b.b)("li",{parentName:"ul"},"2014 \u5e74 CoreOS \u7684 RTK \u51fa\u73b0\uff0c\u63a8\u8fdb\u5bb9\u5668\u7684\u53d1\u5c55",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u53ea\u63d0\u4f9b\u5bb9\u5668\u7684\u7cfb\u7edf\uff0c\u5c31\u597d\u6bd4 xen \u7684 dom0 \u53ea\u63d0\u4f9b\u865a\u62df\u5316"))),Object(b.b)("li",{parentName:"ul"},"2015 \u5e74 Kubernetes 1.0"),Object(b.b)("li",{parentName:"ul"},"2016 \u5e74 Windows \u652f\u6301\u5bb9\u5668\u5316\u6280\u672f")),Object(b.b)("p",null,"\u5230\u4eca\u5929\uff0cKubernetes \u4e0d\u53ea\u662f\u7528\u4e8e\u8c03\u5ea6\u5bb9\u5668\uff0c\u66f4\u50cf\u662f\u4e00\u4e2a\u6cdb\u7528\u7684\u96c6\u7fa4\u8d44\u6e90\u8c03\u5ea6\u5e73\u53f0\u3002"),Object(b.b)("p",null,"Kubernetes \u4e5f\u53ef\u4ee5\u88ab\u5b9a\u4e49\u4e3a IaaS\uff0c\u56e0\u4e3a\u63d0\u4f9b\u4e86\u8ba1\u7b97\u3001\u5b58\u50a8\u3001\u7f51\u7edc\u7684\u80fd\u529b\uff0c\u4f46\u53c8\u4e0e\u4f20\u7edf\u7684\u57fa\u7840\u8bbe\u65bd\u4e0d\u592a\u76f8\u540c\uff0c\u66f4\u52a0\u8f7b\u91cf\u4fbf\u6377\u3002\u8fd9\u65f6\u5019\u5982\u4f55\u9009\u62e9\uff0c\u5c31\u770b\u9700\u8981\u57fa\u7840\u8bbe\u65bd\u8fd0\u7ef4\u5c42\u4ea4\u4ed8\u4ec0\u4e48\u6837\u7684\u8d44\u6e90\u5185\u5bb9\u3002"),Object(b.b)("p",null,"Kubernetes \u7684\u51fa\u73b0\u4f7f\u5f97\u8fd0\u7ef4\u6982\u5ff5\u66f4\u52a0\u6cdb\u5316\uff0cDevOps \u7684\u6982\u5ff5\u5174\u8d77\uff0c\u57fa\u7840\u8bbe\u65bd\u4e0e\u5f00\u53d1\u4eba\u5458\u8ddd\u79bb\u53d8\u5f97\u66f4\u4e3a\u63a5\u8fd1\u3002\nKubernetes \u9664\u4e86\u63d0\u4f9b\u57fa\u7840\u7684\u5bb9\u5668\u90e8\u7f72\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5b9e\u73b0\u89c4\u6a21\u670d\u52a1\u9700\u8981\u7684\u6240\u6709\u8d44\u6e90\u7c7b\u578b\uff0c\u4f8b\u5982 \u670d\u52a1\u3001Ingress\u3001\u914d\u7f6e\u3001\u5bc6\u94a5 \u7b49\u7b49\uff0c\u8fd9\u4e00\u5c42\u662f OpenStack \u4e0d\u53ef\u80fd\u6d89\u53ca\u7684\u3002"),Object(b.b)("p",null,"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 Kubernetes \uff1f"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u5f53\u4e3b\u673a\u4e0d\u6b62\u4e00\u53f0\u3001\u5e94\u7528\u4e0d\u53ea\u4e00\u4e2a"),Object(b.b)("li",{parentName:"ol"},"\u6838\u5fc3\u4ea4\u4ed8\u4ea7\u54c1\u662f\u670d\u52a1")),Object(b.b)("h2",{id:"\u4e92\u8865"},"\u4e92\u8865"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Kubernetes \u53ef\u4ee5\u9009\u62e9\u8fd0\u884c\u5728 OpenStack \u4e2d"),Object(b.b)("li",{parentName:"ul"},"OpenStack \u53ef\u4ee5\u901a\u8fc7 LXD \u5c31\u884c\u8c03\u5ea6\u5bb9\u5668"),Object(b.b)("li",{parentName:"ul"},"Kubernetes \u53ef\u4ee5\u63d0\u4f9b\u865a\u62df\u673a\u7684\u4f53\u9a8c",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5bb9\u5668\u5b89\u88c5 SSH"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 Kubvirt \u8c03\u5ea6\u865a\u62df\u673a"))),Object(b.b)("li",{parentName:"ul"},"Kubernetes \u53ef\u4ee5\u63d0\u4f9b\u865a\u62df\u673a\u7a0b\u5ea6\u7684\u9694\u79bb")),Object(b.b)("h2",{id:"\u975e\u5e38\u89c4\u5e73\u53f0"},"\u975e\u5e38\u89c4\u5e73\u53f0"),Object(b.b)("p",null,"OpenStack \u548c Kubernetes \u90fd\u662f\u901a\u7528\u7684\u4e91\u5e73\u53f0 - \u901a\u7528\u8ba1\u7b97\u3001\u901a\u7528\u5b58\u50a8\u3001\u901a\u7528\u7f51\u7edc\u3002\n\u6709\u4e9b\u65f6\u5019\u5e73\u53f0\u573a\u666f\u5e76\u4e0d\u662f\u6cdb\u7528\u7684\u573a\u666f\uff0c\u4f8b\u5982"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u79c1\u6709\u5b58\u50a8\u4e91"),Object(b.b)("li",{parentName:"ul"},"\u6d41\u6570\u636e\u5904\u7406\u5e73\u53f0"),Object(b.b)("li",{parentName:"ul"},"\u8fb9\u7f18\u8282\u70b9\u8c03\u5ea6"),Object(b.b)("li",{parentName:"ul"},"\u5927\u6570\u636e - \u8ba1\u7b97\u3001\u5b58\u50a8"),Object(b.b)("li",{parentName:"ul"},"GPU \u8ba1\u7b97")),Object(b.b)("p",null,"\u8fd9\u65f6\u5019\u5219\u9700\u8981\u6309\u9700\u9009\u62e9\u5bf9\u5e94\u7684\u8c03\u5ea6\u5e73\u53f0\u6216\u5de5\u5177\u3002\u4f8b\u5982 \u5b58\u50a8\u4f7f\u7528 Ceph\uff0c\u5e76\u4e0d\u662f\u4e00\u5b9a\u9700\u8981\u90e8\u7f72\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u5927\u6279\u91cf\u7684\u8fb9\u7f18\u8282\u70b9\u8c03\u5ea6\u53ef\u80fd Nomad \u4f1a\u66f4\u52a0\u9002\u5408\uff0c\u5927\u6570\u636e\u5e73\u53f0\u53ef\u80fd\u6709 Hadoop \u66f4\u52a0\u9002\u5408\u7684\u573a\u666f\u3002"),Object(b.b)("p",null,"\u4f46\u4e0d\u53ef\u5426\u8ba4\u7684\u662f\uff0c99% \u7684\u4f01\u4e1a\u90fd\u662f\u5c5e\u4e8e\u901a\u7528\u7684\u4e00\u7c7b\uff0c\u56e0\u6b64 99% \u7684\u573a\u666f\u9009\u62e9 Kubernetes \u5373\u53ef\u3002"),Object(b.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://yq.aliyun.com/articles/139446"},"\u4eac\u4e1c\u5982\u4f55\u4ece OpenStack \u8fc1\u79fb\u81f3 Kubernetes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.suse.com/c/the-future-of-openstack/"},"The future of OpenStack?")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://qr.ae/pNPMWM"},"What is the future of Openstack?"))))}i.isMDXComponent=!0}}]);