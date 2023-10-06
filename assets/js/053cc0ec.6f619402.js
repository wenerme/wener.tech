"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48957],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||k[m]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49250:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return N},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},k=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",hide_title:!0,tags:["FAQ"]},N="\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",f={unversionedId:"devops/container/container-faq",id:"devops/container/container-faq",title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",description:"docker vs containerd",source:"@site/../notes/devops/container/container-faq.md",sourceDirName:"devops/container",slug:"/devops/container/faq",permalink:"/notes/devops/container/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/container/container-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1658265387,formattedLastUpdatedAt:"Jul 19, 2022",frontMatter:{title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",hide_title:!0,tags:["FAQ"]},sidebar:"docs",previous:{title:"Container Awesome",permalink:"/notes/devops/container/awesome"},next:{title:"Container Image",permalink:"/notes/devops/container/image"}},v={},b=[{value:"docker vs containerd",id:"docker-vs-containerd",level:2},{value:"LXC vs LXD vs Docker",id:"lxc-vs-lxd-vs-docker",level:2},{value:"GUI in Container",id:"gui-in-container",level:2},{value:"Docker Remote",id:"docker-remote",level:2},{value:"Resource in container",id:"resource-in-container",level:2}],h={toc:b},y="wrapper";function g(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(y,k(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898"}),"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("h2",s({},{id:"docker-vs-containerd"}),"docker vs containerd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"docker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u4f7f\u7528 containerd"),(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406 volume\u3001\u7f51\u7edc\u3001swarm\u3001service \u7b49"))),(0,n.kt)("li",{parentName:"ul"},"containerd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u66b4\u9732\u4e3a unix socket"),(0,n.kt)("li",{parentName:"ul"},"grpc \u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u5c01\u88c5\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3a\u7edf\u4e00\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"Linux \u5e95\u5c42\u4f7f\u7528 runc"))),(0,n.kt)("li",{parentName:"ul"},"containerd-shim",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"docker \u542f\u52a8\u7684\u6bcf\u4e2a\u5bb9\u5668\u7684\u7236\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u5bf9 docker \u76f4\u63a5\u4f9d\u8d56\uff0c\u5141\u8bb8\u5347\u7ea7 docker \u5b88\u62a4\u8fdb\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 STDIO \u548c fds"))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a docker \u7edf\u4e00\u7ba1\u7406\uff0c\u9000\u51fa\u548c\u6e05\u7406\u90fd\u6bd4\u8f83\u65b9\u4fbf"),(0,n.kt)("li",{parentName:"ul"},"conatinerd \u53ef\u80fd\u9700\u8981\u624b\u52a8\u6e05\u7406\u6b8b\u4f59\u7684 shim")))),(0,n.kt)("h2",s({},{id:"lxc-vs-lxd-vs-docker"}),"LXC vs LXD vs Docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7528\u4e8e\u9694\u79bb\u8fd0\u884c\u5355\u8fdb\u7a0b\u65e0\u72b6\u6001\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u8003\u8651 init, supervisor, syslog, cron \u7b49\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u7279\u522b\u591a\u7684\u7ba1\u7406\u529f\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6253\u5305"),(0,n.kt)("li",{parentName:"ul"},"\u6784\u5efa"),(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u63d2\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"\u6709\u6700\u5b8c\u6574\u7684\u751f\u6001"),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u901a\u5e38\u56f4\u7ed5\u5e94\u7528\uff0c\u751a\u81f3\u53ef\u80fd\u53ea\u662f\u5355\u5e94\u7528\u53ef\u6267\u884c\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd0\u884c\u5e94\u7528"))),(0,n.kt)("li",{parentName:"ul"},"LXD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Docker \u901a\u8fc7 Daemon/\u5b88\u62a4\u8fdb\u7a0b \u57fa\u4e8e liblxc \u66b4\u9732 REST \u63a5\u53e3\u63d0\u4f9b\u7ba1\u7406\u5bb9\u5668\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u5728 liblxc \u4e4b\u4e0a\u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u4e0e VMWare, KVM \u6280\u672f\u7ade\u4e89 - \u4f5c\u4e3a Hypervisor"))),(0,n.kt)("li",{parentName:"ul"},"LXC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5185\u6838\u66b4\u9732\u5230\u7528\u6237\u7a7a\u95f4\u7684\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bb9\u5668\u6240\u9700\u7279\u6027\u548c\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7b80\u5355\u7684\u5de5\u5177\u6765\u521b\u5efa\u548c\u7ba1\u7406\u7cfb\u7edf\u5e94\u7528\u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},"VE - Virtual Environment - \u865a\u62df\u73af\u5883 - \u4e00\u4e2a\u9694\u79bb\u7684 OS \u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u767b\u9646\u8fdb\u5165"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u6b63\u5e38\u7684 init, supervisor, syslog, cron"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u7c7b\u4f3c\u4e8e chroot \u5c42\u7684\u6280\u672f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8fdb\u7a0b\u548c\u7f51\u7edc\u7a7a\u95f4"))),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u66f4\u5e95\u5c42\uff0c\u6240\u4ee5\u914d\u7f6e\u548c\u4f7f\u7528\u4f1a\u66f4\u96be"),(0,n.kt)("li",{parentName:"ul"},"\u955c\u50cf\u901a\u5e38\u662f\u4e00\u4e2a OS"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"/sbin/init")))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://archives.flockport.com/lxc-vs-docker"}),"lxc-vs-docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://linuxhint.com/lxd-vs-docker"}),"lxd-vs-docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.inovex.de/blog/containers-docker-containerd-nabla-kata-firecracker/"}),"Docker vs. containerd vs. Nabla vs. Kata vs. Firecracker"))))),(0,n.kt)("h2",s({},{id:"gui-in-container"}),"GUI in Container"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x11vnc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7 web \u8bbf\u95ee"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/LibVNC/x11vnc"}),"https://github.com/LibVNC/x11vnc")))),(0,n.kt)("li",{parentName:"ul"},"xvfb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0\u952e\u76d8\u9f20\u6807"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.x.org/releases/X11R7.6/doc/man/man1/Xvfb.1.xhtml"}),"https://www.x.org/releases/X11R7.6/doc/man/man1/Xvfb.1.xhtml")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/ponty/framebuffer-vncserver"}),"ponty/framebuffer-vncserver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://hub.docker.com/u/x11vnc"}),"https://hub.docker.com/u/x11vnc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vscode-desktop"),(0,n.kt)("li",{parentName:"ul"},"docker-desktop",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"x11vnc/docker-desktop:zh_CN ~450MB"))),(0,n.kt)("li",{parentName:"ul"},"desktop")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm -p 6080:6080 x11vnc/inkscape-desktop\n")),(0,n.kt)("h2",s({},{id:"docker-remote"}),"Docker Remote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ef4\u5ea6 sock \u4f4d\u7f6e unix://$HOME/.docker/run/docker.sock"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ssh \u8f6c\u53d1 sock - \u5b89\u5168"),(0,n.kt)("li",{parentName:"ul"},"podman \u4f7f\u7528 CONTAINER_HOST")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash",metastring:'title="\u5ba2\u6237\u7aef"',title:'"\u5ba2\u6237\u7aef"'}),"DOCKER_HOST=tcp://192.168.0.1:2375 docker info # \u5355\u6b21\u8bf7\u6c42\u4fee\u6539\nexport DOCKER_HOST=tcp://192.168.0.1:2375      # export \u540e\u6301\u7eed\u4f7f\u7528\n\nssh -L /var/run/docker.sock:/var/run/docker.sock remote           # \u8f6c\u53d1 sock \u5230 docker \u9ed8\u8ba4 sock \u4f4d\u7f6e - \u7cfb\u7edf\u7ea7\u53ef\u80fd\u6743\u9650\u4e0d\u591f\nssh -L $HOME/.docker/run/docker.sock:/var/run/docker.sock remote  # \u8f6c\u53d1\u8fdc\u7a0b docker \u5230\u7528\u6237\u76ee\u5f55 sock - \u4e0d\u9700\u8981\u90a3\u4e48\u9ad8\u7684\u6743\u9650\nDOCKER_HOST=unix://$HOME/.docker/run/docker.sock docker info      # \u6d4b\u8bd5\n\ndocker context list                                                           # \u53ef\u7ba1\u7406\u591a\u4e2a\u8fde\u63a5\u4e0a\u4e0b\u6587\ndocker context create --docker host=unix://$HOME/.docker/run/docker.sock test # \u521b\u5efa\u4e0a\u4e0b\u6587\ndocker context use test                                                       # \u5168\u5c40\u4fee\u6539\u4e0a\u4e0b\u6587\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash",metastring:'title="\u670d\u52a1\u7aef"',title:'"\u670d\u52a1\u7aef"'}),"dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375 # \u5982\u679c\u9700\u8981\u66b4\u9732\u7aef\u53e3 - \u9ed8\u8ba4\u53ea\u6709 sock\n")),(0,n.kt)("h2",s({},{id:"resource-in-container"}),"Resource in container"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://ops.tips/blog/why-top-inside-container-wrong-memory/"}),"https://ops.tips/blog/why-top-inside-container-wrong-memory/"))))}g.isMDXComponent=!0}}]);