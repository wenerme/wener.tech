(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{375:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(7),a=(r(0),r(766)),c={title:"Docker FAQ"},i={unversionedId:"devops/docker/docker-faq",id:"devops/docker/docker-faq",isDocsHomePage:!1,title:"Docker FAQ",description:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",source:"@site/notes/devops/docker/docker-faq.md",slug:"/devops/docker/docker-faq",permalink:"/notes/devops/docker/docker-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-faq.md",version:"current",sidebar:"docs",previous:{title:"Docker \u5e38\u7528\u670d\u52a1",permalink:"/notes/devops/docker/docker-cookbook"},next:{title:"Docker \u7f51\u7edc",permalink:"/notes/devops/docker/docker-network"}},p=[{value:"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3",children:[]},{value:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668",children:[]},{value:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55",children:[]},{value:"No swap limit support",id:"no-swap-limit-support",children:[]},{value:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u975e-root-\u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"},"\u975e root \u7ed1\u5b9a\u79c1\u6709\u7aef\u53e3"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bf4\u6dfb\u52a0 CAP_NET_BIND_SERVICE \u5373\u53ef\uff0c\u4f46\u662f\u5bf9\u975e root \u65e0\u6548"),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e sysctl ",Object(a.b)("inlineCode",{parentName:"li"},"net.ipv4.ip_unprivileged_port_start=0")," \u5373\u53ef",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9700\u8981 kernel 4.11+"),Object(a.b)("li",{parentName:"ul"},"ubuntu 18+")))),Object(a.b)("h2",{id:"\u505c\u6b62\u6240\u6709\u5bb9\u5668"},"\u505c\u6b62\u6240\u6709\u5bb9\u5668"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker stop $(docker ps -aq)\n")),Object(a.b)("h2",{id:"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"},"\u8fc1\u79fb\u6570\u636e\u76ee\u5f55"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"/var/lib/docker \u5bf9 docker \u6027\u80fd\u5f71\u54cd\u8f83\u5927")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# \u505c\u6b62\u670d\u52a1\u8fc1\u79fb\u6570\u636e\nservice docker stop\nmkdir -p /data/docker\nsudo rsync -aP /var/lib/docker/ /data/docker/\n\n# \u6dfb\u52a0 data-root \u914d\u7f6e\n# { "data-root": "/data/docker" }\nnano /etc/docker/daemon.json\n\n# \u542f\u52a8\nservice docker start\n# \u67e5\u770b\u65b0\u7684\u914d\u7f6e\ndocker info | grep \'Root Dir\'\n')),Object(a.b)("h2",{id:"no-swap-limit-support"},"No swap limit support"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5185\u6838\u53c2\u6570 ",Object(a.b)("inlineCode",{parentName:"li"},"cgroup_enable=memory swapaccount=1")),Object(a.b)("li",{parentName:"ul"},"\u727a\u7272 1% \u7684\u5185\u5bb9\uff0c10% \u6027\u80fd\u6765\u652f\u6301\u5185\u5b58\u548c\u4ea4\u6362\u533a\u5ba1\u8ba1"),Object(a.b)("li",{parentName:"ul"},"\u4e00\u822c ",Object(a.b)("inlineCode",{parentName:"li"},"cgroup_enable=memory")," \u4f1a\u5f00\u542f\uff0c\u4f46 ",Object(a.b)("inlineCode",{parentName:"li"},"swapaccount")," \u4e0d\u5f00"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/config/containers/resource_constraints/"}),"Runtime options with Memory, CPUs, and GPUs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities"}),"Your kernel does not support cgroup swap limit capabilities"))))),Object(a.b)("h2",{id:"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684-docker-\u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"},"\u4e3a\u5df2\u7ecf\u8fd0\u884c\u7684 Docker \u5bb9\u5668\u6dfb\u52a0\u7aef\u53e3\u6620\u5c04"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"HOSTPORT=80\nCONTAINERIP=172.16.0.2\n\niptables -t nat -A DOCKER -p tcp --dport ${HOSTPORT} -j DNAT --to-destination ${CONTAINERIP}:${HOSTPORT}\niptables -t nat -A POSTROUTING -j MASQUERADE -p tcp --source ${CONTAINERIP} --destination ${CONTAINERIP} --dport ${HOSTPORT}\niptables -A DOCKER -j ACCEPT -p tcp --destination ${CONTAINERIP} --dport ${HOSTPORT}\n")))}s.isMDXComponent=!0},766:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,O=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(O,i(i({ref:t},l),{},{components:r})):o.a.createElement(O,i({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);