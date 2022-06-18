"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[535],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,u(u({ref:t},s),{},{components:n})):r.createElement(d,u({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={title:"MountPropagation"},l="K8S Feature",p={unversionedId:"devops/kubernetes/k8s-feature",id:"devops/kubernetes/k8s-feature",title:"MountPropagation",description:"MountPropagation",source:"@site/notes/devops/kubernetes/k8s-feature.md",sourceDirName:"devops/kubernetes",slug:"/devops/kubernetes/k8s-feature",permalink:"/notes/devops/kubernetes/k8s-feature",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-feature.md",tags:[],version:"current",frontMatter:{title:"MountPropagation"},sidebar:"docs",previous:{title:"K8S \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/k8s-faq"},next:{title:"K8S Features",permalink:"/notes/devops/kubernetes/k8s-features"}},s={},c=[{value:"MountPropagation",id:"mountpropagation",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"k8s-feature"},"K8S Feature"),(0,o.kt)("h2",{id:"mountpropagation"},"MountPropagation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u4f20\u64ad"),(0,o.kt)("li",{parentName:"ul"},"None - private - \u9ed8\u8ba4"),(0,o.kt)("li",{parentName:"ul"},"HostToContainer - rslave",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u6302\u5728\u66f4\u65b0\u5bb9\u5668\u6302\u5728"))),(0,o.kt)("li",{parentName:"ul"},"Bidirectional - rshared",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u6302\u5728\u4f20\u56de\u4e3b\u673a"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u6743\u5bb9\u5668"))),(0,o.kt)("li",{parentName:"ul"},"Alpha v1.9, Beta v1.10")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  containers:\n    - image: alpine\n      name: alpine\n      volumeMounts:\n        - mount: /data\n          mountPropagation: None\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u822c\u9700\u8981\u914d\u7f6e root mount shared"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/proc/<pid>/mounts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/proc/<pid>/mountstats")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man7/mount_namespaces.7.html"},"mount_namespaces.7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt"},"sharedsubtree"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Host \u5bf9\u7b49\u64cd\u4f5c\n# --mark-slave\n# --mark-private\n# --make-unbindable\n# --make-rshared\nmount --make-shared /\n\n# Docker \u5bf9\u7b49\u64cd\u4f5c\ndocker run -d -it -v /tmp/mnt:/tmp/mnt:rshared ubuntu\n")))}f.isMDXComponent=!0}}]);