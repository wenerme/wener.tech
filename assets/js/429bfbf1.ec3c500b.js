"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61324],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={title:"Container Awesome"},u=void 0,c={unversionedId:"devops/container/container-awesome",id:"devops/container/container-awesome",isDocsHomePage:!1,title:"Container Awesome",description:"Engine",source:"@site/notes/devops/container/container-awesome.md",sourceDirName:"devops/container",slug:"/devops/container/container-awesome",permalink:"/notes/devops/container/container-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/container-awesome.md",version:"current",frontMatter:{title:"Container Awesome"},sidebar:"docs",previous:{title:"CNI",permalink:"/notes/devops/container/cni"},next:{title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/container/container-faq"}},p=[{value:"Engine",id:"engine",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Build",id:"build",children:[{value:"Builder",id:"builder",children:[]},{value:"Code to Image",id:"code-to-image",children:[]},{value:"Tools",id:"tools",children:[]}]},{value:"Inspect",id:"inspect",children:[]},{value:"Interesting",id:"interesting",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"engine"},"Engine"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker"),(0,a.kt)("li",{parentName:"ul"},"podman"),(0,a.kt)("li",{parentName:"ul"},"lxd"),(0,a.kt)("li",{parentName:"ul"},"cri-o"),(0,a.kt)("li",{parentName:"ul"},"rkt")),(0,a.kt)("h2",{id:"runtime"},"Runtime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencontainers/runc"},"opencontainers/runc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/crun"},"containers/crun")),(0,a.kt)("li",{parentName:"ul"},"containerd")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95ee\u9898")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 Linux \u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981 Privilege \u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u9700\u8981\u5b88\u62a4\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u652f\u6301\u8de8\u5e73\u53f0"),(0,a.kt)("li",{parentName:"ul"},"Manifest \u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u6613\u7528\u6027")),(0,a.kt)("h3",{id:"builder"},"Builder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BuildKit"),(0,a.kt)("li",{parentName:"ul"},"Kaniko"),(0,a.kt)("li",{parentName:"ul"},"Buildha")),(0,a.kt)("h3",{id:"code-to-image"},"Code to Image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openshift/source-to-image"},"openshift/source-to-image")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/jib"},"GoogleContainerTools/jib")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bazelbuild/bazel"},"bazelbuild/bazel"))),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/container-diff"},"GoogleContainerTools/container-diff"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/solutions/best-practices-for-building-containers"},"\u6784\u5efa\u5bb9\u5668\u7684\u6700\u4f73\u505a\u6cd5"))))),(0,a.kt)("h2",{id:"inspect"},"Inspect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/skopeo"},"containers/skopeo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"remote images registries - retrieving information, images, signing content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/wagoodman/dive"},"wagoodman/dive"))),(0,a.kt)("h2",{id:"interesting"},"Interesting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/golobby/container"},"golobby/container"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"lightweight yet powerful IoC container for Go projects")))))}s.isMDXComponent=!0}}]);