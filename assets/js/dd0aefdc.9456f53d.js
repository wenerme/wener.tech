"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65049],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32350:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),c=["components"],i={id:"watchtower",title:"Watchtower"},l="Watchtower",u={unversionedId:"devops/docker/watchtower",id:"devops/docker/watchtower",title:"Watchtower",description:"Tips",source:"@site/../notes/devops/docker/watchtower.md",sourceDirName:"devops/docker",slug:"/devops/docker/watchtower",permalink:"/notes/devops/docker/watchtower",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/docker/watchtower.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"watchtower",title:"Watchtower"},sidebar:"docs",previous:{title:"Docker Swarm",permalink:"/notes/devops/docker/docker-swarm"},next:{title:"Kubernetes",permalink:"/notes/devops/kubernetes/"}},p={},s=[{value:"Tips",id:"tips",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"watchtower"},"Watchtower"),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containrrr/watchtower"},"containrrr/watchtower")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c image \u6709\u66f4\u65b0\u81ea\u52a8\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u901a\u77e5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"email"),(0,a.kt)("li",{parentName:"ul"},"slack"),(0,a.kt)("li",{parentName:"ul"},"msteams"),(0,a.kt)("li",{parentName:"ul"},"gotify",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"WATCHTOWER_NOTIFICATIONS=gotify"),(0,a.kt)("li",{parentName:"ul"},"WATCHTOWER_NOTIFICATION_GOTIFY_URL"),(0,a.kt)("li",{parentName:"ul"},"WATCHTOWER_NOTIFICATION_GOTIFY_TOKEN")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u4fdd\u5b58\u5728\u914d\u7f6e\u6587\u4ef6\n# \u9700\u8981 docker login \u7684\u955c\u50cf\u80fd\u591f\u751f\u6548\nmkdir $HOME/.docker -p && [ ! -f $HOME/.docker/config.json ] && echo '{}' > $HOME/.docker/config.json\n\n# --label-enable  \u6709 com.centurylinklabs.watchtower.enable=true \u6807\u7b7e\u7684\u624d\u751f\u6548\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u53ef\u4ee5\u7528 =false \u6765\u6392\u9664\n# --cleanup       \u6e05\u7406\u5220\u9664\u7684 image\ndocker run -d \\\n  -e TZ=Asia/Shanghai \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v $HOME/.docker/config.json:/config.json \\\n  --name watchtower containrrr/watchtower \\\n  --interval 180 --cleanup\n\n# \u5347\u7ea7\u5355\u4e2a\u5bb9\u5668\ndocker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v $HOME/.docker/config.json:/config.json containrrr/watchtower -R <NAME>\n# \b\b\u5347\u7ea7\u5355\u4e2a\u5bb9\u5668 - \u4e0d\u5e26\u9274\u6743\u4fe1\u606f\ndocker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower -R <NAME>\n")))}m.isMDXComponent=!0}}]);