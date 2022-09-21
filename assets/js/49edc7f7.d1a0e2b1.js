"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38248],{38200:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var n=r(96600),o=r(27279),a=(r(59496),r(3905)),i=["components"],l={id:"docker-network",title:"Docker \u7f51\u7edc"},c="Docker Network",p={unversionedId:"devops/docker/docker-network",id:"devops/docker/docker-network",title:"Docker \u7f51\u7edc",description:"* \u6ce8\u610f",source:"@site/notes/devops/docker/docker-network.md",sourceDirName:"devops/docker",slug:"/devops/docker/docker-network",permalink:"/notes/devops/docker/docker-network",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-network.md",tags:[],version:"current",frontMatter:{id:"docker-network",title:"Docker \u7f51\u7edc"},sidebar:"docs",previous:{title:"Docker FAQ",permalink:"/notes/devops/docker/docker-faq"},next:{title:"Docker \u4ed3\u5e93",permalink:"/notes/devops/docker/docker-registry"}},u={},k=[],s={toc:k};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-network"},"Docker Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684\u7f51\u7edc\u5185\u90e8\u90fd\u4f1a\u542f\u52a8 DHCP \u65e0\u6cd5\u4f7f\u7528\u5916\u90e8 DHCP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/nerdalert/3d2b891d41e0fa8d688c"},"Experimental Docker Libnetwork DHCP Driver")))),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5916\u90e8 DHCP \u9700\u8981\u5b9e\u73b0 IPAM - \u76ee\u524d\u7248\u672c\u6ca1\u6709 DHCP \u7684 IPAM"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u521b\u5efa interface \u5219\u9700\u8981 NET_ADMIN \u7136\u540e\u6620\u5c04\u8bbe\u5907 - \u4f8b\u5982 /dev/net/tun"))),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"host - \u4f7f\u7528\u4e3b\u673a\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"macvlan - \u4f7f\u7528\u4e3b\u673a\u7684\u4e00\u5f20\u7f51\u5361\u505a macvlan",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u989d\u5916\u7684 bridge"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u4e3b\u673a\u4e0e\u5bb9\u5668\u65e0\u6cd5\u4f7f\u7528\u8be5\u7f51\u5361\u4e92\u901a"))),(0,a.kt)("li",{parentName:"ul"},"bridge - \u6865\u63a5 - \u9ed8\u8ba4\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"overlay - \u4e00\u822c\u7528\u4e8e\u8de8\u4e3b\u673a\u7f51\u7edc"),(0,a.kt)("li",{parentName:"ul"},"none - \u4e0d\u9700\u8981\u7f51\u7edc"))),(0,a.kt)("li",{parentName:"ul"},"IPAM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5185\u5efa\u7684 IPAM \u9a71\u52a8 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/docker/libnetwork/tree/master/ipams"},"docker/libnetwork/ipams"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"default - \u9ed8\u8ba4\u6309\u987a\u5e8f\u83b7\u53d6 IP"),(0,a.kt)("li",{parentName:"ul"},"null - \u7f51\u7edc\u4e3a none \u65f6\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"remote - \u6307\u5b9a\u4e0d\u5b58\u5728\u7684\u5219\u4f1a\u5c1d\u8bd5\u4f5c\u4e3a IPAM \u63d2\u4ef6\u8fdb\u884c\u521d\u59cb\u5316"))))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pc.nanog.org/static/published/meetings/NANOG72/1552/20180219_Greenberg_Docker_Libnetwork_Drivers__v1.pdf"},"Docker LibNetwork Plugins - Explorer\u2019s Tale"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0d\u6307\u5b9a subnet \u5219\u662f\u4ece 172.17 \u7ee7\u7eed\u5f80\u540e\u589e\u52a0\ndocker network create appnet -o 'com.docker.network.bridge.name=appnet'\n# \u6dfb\u52a0 slave \u7f51\u5361\u4ee5\u4fbf\u4e92\u901a\n# ip li set dev mynet master appnet\n\n# \u4f7f\u7528 eth1 \u4f5c\u4e3a\u4e0a\u7ea7 - \u65e0\u6cd5\u901a\u8fc7 eth1 \u4e92\u901a - \u5982\u679c\u6709 host \u6709\u4e24\u4e2a\u7f51\u53e3\u5219\u53ef\u4ee5\n# \u53ef\u4ee5\u4e0e\u4e3b\u673a\u4e92\u901a\u7684\u5bb9\u5668\u7f51\u7edc\uff0c\u4f46\u4f1a\u81ea\u884c\u8bbe\u7f6e ip \u800c\u4e0d\u662f\u4f7f\u7528 dhcp\ndocker network create -d macvlan --subnet=192.168.1.0/24 --gateway=192.168.1.1 -o parent=eth1 appnet\n\n# \u67e5\u770b\u5bb9\u5668\u76d1\u542c\npid=$(docker inspect -f '{{.State.Pid}}' container_name_or_id)\nsudo nsenter -t $pid -n netstat\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return s}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},k),{},{components:r})):n.createElement(m,i({ref:t},k))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);