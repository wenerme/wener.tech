"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94416],{62525:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(96600),a=n(27279),o=(n(59496),n(3905)),u=["components"],i={title:"juju"},l=void 0,p={unversionedId:"devops/container/juju",id:"devops/container/juju",title:"juju",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/container/juju.md",sourceDirName:"devops/container",slug:"/devops/container/juju",permalink:"/notes/devops/container/juju",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/juju.md",tags:[],version:"current",frontMatter:{title:"juju"},sidebar:"docs",previous:{title:"crane",permalink:"/notes/devops/container/crane"},next:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"}},c={},s=[{value:"Install",id:"install",level:2},{value:"Tips",id:"tips",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Operator Lifecycle Manager (OLM) that provides model-driven application management and next-generation infrastructure-as-code"),(0,o.kt)("li",{parentName:"ul"},"\u7531 Canonical \u5f00\u53d1"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jujucharms.com/docs/stable/"},"Document"))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Ubuntu 16\napt update\napt install juju zfsutils-linux\n\n# Other\nadd-apt-repository ppa:juju/devel\napt update\napt install juju\n")),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"juju \u4e2d\u4f7f\u7528\u5230\u7684\u8def\u5f84 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/juju/juju/blob/master/juju/paths/paths.go"},"juju/paths/paths.go"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\n# \u53ef\u4f7f\u7528 --show-log \u548c --debug \u67e5\u770b\u65e5\u5fd7\njuju bootstrap testcloud manual/10.25.30.1\n# \u6dfb\u52a0\u5176\u4ed6\u673a\u5668\njuju add-machine ssh:root@10.25.30.2\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);