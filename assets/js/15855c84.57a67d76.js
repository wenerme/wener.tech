"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[61865],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23930:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={title:"kine"},u=void 0,c={unversionedId:"devops/kubernetes/distro/kine",id:"devops/kubernetes/distro/kine",isDocsHomePage:!1,title:"kine",description:"- k3s-io/kine \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/distro/kine.md",sourceDirName:"devops/kubernetes/distro",slug:"/devops/kubernetes/distro/kine",permalink:"/notes/devops/kubernetes/distro/kine",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/kine.md",version:"current",frontMatter:{title:"kine"},sidebar:"docs",previous:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s"},next:{title:"Kubernetes Internal",permalink:"/notes/devops/kubernetes/internal/internal"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/kine"},"k3s-io/kine")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"kine -> Kine is not etcd"),(0,i.kt)("li",{parentName:"ul"},"etcd \u9002\u914d\u5668, \u652f\u6301\u90e8\u5206 etcd \u529f\u80fd - \u6ee1\u8db3 k8s \u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 postgres, mysql, sqlite, dqlite"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u542f\u52a8"),(0,i.kt)("li",{parentName:"ul"},"k3s \u548c k0s \u4f7f\u7528\u4e86 kine")))))}f.isMDXComponent=!0}}]);