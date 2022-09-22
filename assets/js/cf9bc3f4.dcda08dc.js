"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14866],{49613:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,k=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?n.createElement(k,i(i({ref:r},m),{},{components:t})):n.createElement(k,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6779:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=t(96600),a=t(27279),o=(t(59496),t(49613)),i=["components"],l={id:"docker-swarm",title:"Docker Swarm"},c="Docker Swarm",s={unversionedId:"devops/docker/docker-swarm",id:"devops/docker/docker-swarm",title:"Docker Swarm",description:"Tips",source:"@site/../notes/devops/docker/docker-swarm.md",sourceDirName:"devops/docker",slug:"/devops/docker/docker-swarm",permalink:"/notes/devops/docker/docker-swarm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/docker/docker-swarm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{id:"docker-swarm",title:"Docker Swarm"},sidebar:"docs",previous:{title:"Docker \u5b58\u50a8",permalink:"/notes/devops/docker/docker-storage"},next:{title:"Watchtower",permalink:"/notes/devops/docker/watchtower"}},m={},p=[{value:"Tips",id:"tips",level:2},{value:"Pitfall",id:"pitfall",level:2},{value:"18.03",id:"1803",level:3},{value:"1.21.1",id:"1211",level:3},{value:"Reference",id:"reference",level:2}],u={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-swarm"},"Docker Swarm"),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u65f6\u5019\u7528 Docker - \u800c\u4e0d\u662f K8S",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5f53\u4e00\u53f0\u673a\u5668\u6027\u80fd\u4e0d\u8db3\u65f6"),(0,o.kt)("li",{parentName:"ul"},"\u5f53\u8282\u70b9\u5c0f\u4e8e 10 \u65f6"),(0,o.kt)("li",{parentName:"ul"},"\u5f53\u5bb9\u5668\u6570\u91cf\u5c0f\u4e8e 1000 \u65f6"))),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u5907\u4efd swarm \u7684\u72b6\u6001,\u4ee5\u4fbf\u4ee5\u540e\u6062\u590d ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/docker/swarm/raft"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316 Swarm\ndocker swarm init --advertise-addr <MANAGER-IP>\n# \u52a0\u5165\u8be5 Swarm \u7684 Wroker \u6267\u884c\u7684\u547d\u4ee4\ndocker swarm join-token worker\n# \u52a0\u5165\u8be5 Swarm \u7684 manager \u6267\u884c\u7684\u547d\u4ee4\ndocker swarm join-token manager\n# \u67e5\u770b\u8282\u70b9\ndocker node ls\n# \u63d0\u5347\u8282\u70b9\u4e3a\u4e3b\u8282\u70b9\ndocker node promote node-3\n# \u79bb\u5f00 Swarm\ndocker swarm leave\n# \u79fb\u9664\u8282\u70b9\ndocker node rm node-2\n# \u521b\u5efa\u7f51\u7edc\ndocker network create --driver overlay my-network\n# \u4f7f\u670d\u52a1\u8fd0\u884c\u5728\u7f51\u7edc\u4e2d\ndocker service create --replicas 3 --network my-network --name my-web nginx\n# \u542f\u52a8\u4e00\u4e2a busybox \u7528\u4e8e\u6d4b\u8bd5\u7f51\u7edc\ndocker service create --name my-busybox --network my-network busybox sleep 3000\n# \u5728\u6267\u884c my-busybox \u7684\u8282\u70b9\u4e0a\u53ef\u901a\u8fc7 docker exec -it my-busybox.1.1dok2cmx2mln5hbqve8ilnair sh \u8fdb\u5165\u4ea4\u4e92\n# \u67e5\u770b my-web \u8fd9\u4e2a\u670d\u52a1\u7684 vip\n# nslookup my-web\n# \u67e5\u770b my-web \u540e\u6240\u6709 container \u7684\u4fe1\u606f\n# nslookup tasks.my-web\n# \u53ef\u6d4b\u8bd5\u670d\u52a1\u662f\u5426\u6b63\u5e38\n# wget -O- 10.0.0.5\n\n\n# \u6dfb\u52a0 Label\ndocker node update --label-add TYPE=main myhost\n# \u67e5\u770b\u6240\u6709\u7684 Label\ndocker node inspect hd2-1 --format '{{range $k,$v:=.Spec.Labels}}{{$k}}={{$v}}{{\"\\n\"}}{{end}}'\n# \u5728\u6307\u5b9a\u7684\u8282\u70b9\u4e0a\u6267\u884c\ndocker service create --name tool --replicas=1 --container-label TYPE=main --network=pwork --mount type=bind,src=/data,dst=/data ubuntu bash\n")),(0,o.kt)("h2",{id:"pitfall"},"Pitfall"),(0,o.kt)("h3",{id:"1803"},"18.03"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5173\u4e8e Swarm Network \u7684\u95ee\u9898\u4e5f\u8fd8\u6709\u975e\u5e38\u591a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/moby/moby/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fswarm+label%3Aarea%2Fnetworking"},"https://github.com/moby/moby/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fswarm+label%3Aarea%2Fnetworking"))),(0,o.kt)("h3",{id:"1211"},"1.21.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8de8\u4e3b\u673a\u7684 Overlay \u4f9d\u7136\u6709\u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"Label \u7ecf\u5e38\u4e0d\u751f\u6548"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker/docker/issues/25325"},"#25325 Docker 1.12 swarm mode load balancing not consistently working"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://blog.bugsnag.com/container-orchestration-with-docker-swarm-mode"},"Lessons learned from using Docker Swarm mode in production"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=12508711"},"HN")))),(0,o.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u8d44\u6e90",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yeasy/docker_practice/"},"https://github.com/yeasy/docker_practice/"))))))}d.isMDXComponent=!0}}]);