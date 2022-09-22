"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61031],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,k=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70392:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(96600),a=r(27279),o=(r(59496),r(49613)),l=["components"],p={id:"docker-storage",title:"Docker \u5b58\u50a8"},i="Storage",c={unversionedId:"devops/docker/docker-storage",id:"devops/docker/docker-storage",title:"Docker \u5b58\u50a8",description:"Tips",source:"@site/../notes/devops/docker/docker-storage.md",sourceDirName:"devops/docker",slug:"/devops/docker/docker-storage",permalink:"/notes/devops/docker/docker-storage",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/devops/docker/docker-storage.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"docker-storage",title:"Docker \u5b58\u50a8"},sidebar:"docs",previous:{title:"Docker \u4ed3\u5e93",permalink:"/notes/devops/docker/docker-registry"},next:{title:"Docker Swarm",permalink:"/notes/devops/docker/docker-swarm"}},d={},u=[{value:"Tips",id:"tips",level:2},{value:"devicemapper",id:"devicemapper",level:2},{value:"cleanup",id:"cleanup",level:2}],s={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage"},"Storage"),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/storagedriver/select-storage-driver/"},"Docker storage drivers"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/")," - \u9ed8\u8ba4\u5b58\u50a8\u76ee\u5f55"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<\u5b58\u50a8\u9a71\u52a8>")," - \u5b58\u50a8\u539f\u6570\u636e"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u66f4\u6362\u5b58\u50a8\u9a71\u52a8\u4f1a\u5bfc\u81f4\u6240\u6709\u7684\u672c\u5730\u7684\u5bb9\u5668\u65e0\u6cd5\u8bbf\u95ee. \u53ef\u4ee5\u8003\u8651 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker save")," \u7136\u540e push \u5230\u4ed3\u5e93, \u8fd9\u6837\u907f\u514d\u540e\u9762\u518d\u6b21\u521b\u5efa"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u9a71\u52a8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u540e\u7aef\u6587\u4ef6\u7cfb\u7edf"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"overlay, overlay2"),(0,o.kt)("td",{parentName:"tr",align:null},"ext4, xfs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aufs"),(0,o.kt)("td",{parentName:"tr",align:null},"ext4, xfs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"devicemapper"),(0,o.kt)("td",{parentName:"tr",align:null},"direct-lvm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"btrfs"),(0,o.kt)("td",{parentName:"tr",align:null},"btrfs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zfs"),(0,o.kt)("td",{parentName:"tr",align:null},"zfs")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"aufs, overlay, overlay2",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7ea7\u522b\u64cd\u4f5c, \u80fd\u591f\u5bf9\u5185\u5b58\u66f4\u52a0\u6709\u6548\u7684\u5229\u7528, \u4f46\u5728\u8f83\u9ad8\u7684\u5de5\u4f5c\u538b\u529b\u4e0b, \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6587\u4ef6\u589e\u957f\u7279\u522b\u5927"))),(0,o.kt)("li",{parentName:"ul"},"devicemapper, btrfs, zfs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5757\u7ea7\u522b\u64cd\u4f5c, \u5bf9\u4e8e\u5199\u4e3a\u4e3b\u7684\u5de5\u4f5c\u73af\u5883\u4f1a\u8868\u73b0\u7684\u66f4\u597d"))),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5f88\u591a\u5c0f\u6587\u4ef6\u5199\u5165\u6216\u6709\u5f88\u591a\u5c42\u7684\u6587\u4ef6\u7cfb\u7edf, overlay \u53ef\u80fd\u6bd4 overlay2 \u8868\u73b0\u7684\u66f4\u597d"),(0,o.kt)("li",{parentName:"ul"},"btrfs \u548c zfs \u9700\u8981\u8f83\u591a\u7684\u5185\u5b58"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e PaaS \u8fd9\u6837\u9ad8\u5f3a\u5ea6\u7684\u5de5\u4f5c\u73af\u5883, zfs \u4f1a\u662f\u6bd4\u8f83\u597d\u7684\u9009\u62e9"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u7a33\u5b9a\u6027\u8981\u6c42\u66f4\u9ad8, \u53ef\u9009\u62e9 aufs, overlay, devicemapper")),(0,o.kt)("h2",{id:"devicemapper"},"devicemapper"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/storagedriver/device-mapper-driver/"},"https://docs.docker.com/storage/storagedriver/device-mapper-driver/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"/etc/docker/daemon.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "storage-driver": "devicemapper"\n}\n')),(0,o.kt)("h2",{id:"cleanup"},"cleanup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/bastman/5b57ddb3c11942094f8d0a97d461b430"},"Docker - How to cleanup (unused) resources"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume prune -f\ndocker system prune -a -f\n")))}m.isMDXComponent=!0}}]);