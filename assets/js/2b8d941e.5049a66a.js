"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45748],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,u(u({ref:t},s),{},{components:n})):r.createElement(d,u({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={title:"MountPropagation"},f="K8S Feature",d={unversionedId:"devops/kubernetes/k8s-feature",id:"devops/kubernetes/k8s-feature",title:"MountPropagation",description:"MountPropagation",source:"@site/../notes/devops/kubernetes/k8s-feature.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/feature",permalink:"/notes/devops/kubernetes/feature",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/k8s-feature.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"MountPropagation"},sidebar:"docs",previous:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/faq"},next:{title:"K8S Features",permalink:"/notes/devops/kubernetes/features"}},k={},b=[{value:"MountPropagation",id:"mountpropagation",level:2}],v={toc:b};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),s),o(t,u({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"k8s-feature"}),"K8S Feature"),(0,r.kt)("h2",c({},{id:"mountpropagation"}),"MountPropagation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u4f20\u64ad"),(0,r.kt)("li",{parentName:"ul"},"None - private - \u9ed8\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"HostToContainer - rslave",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u6302\u5728\u66f4\u65b0\u5bb9\u5668\u6302\u5728"))),(0,r.kt)("li",{parentName:"ul"},"Bidirectional - rshared",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u6302\u5728\u4f20\u56de\u4e3b\u673a"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6743\u5bb9\u5668"))),(0,r.kt)("li",{parentName:"ul"},"Alpha v1.9, Beta v1.10")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"deployment:\n  containers:\n    - image: alpine\n      name: alpine\n      volumeMounts:\n        - mount: /data\n          mountPropagation: None\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u9700\u8981\u914d\u7f6e root mount shared"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proc/<pid>/mounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proc/<pid>/mountstats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://man7.org/linux/man-pages/man7/mount_namespaces.7.html"}),"mount_namespaces.7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt"}),"sharedsubtree"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Host \u5bf9\u7b49\u64cd\u4f5c\n# --mark-slave\n# --mark-private\n# --make-unbindable\n# --make-rshared\nmount --make-shared /\n\n# Docker \u5bf9\u7b49\u64cd\u4f5c\ndocker run -d -it -v /tmp/mnt:/tmp/mnt:rshared ubuntu\n")))}y.isMDXComponent=!0}}]);