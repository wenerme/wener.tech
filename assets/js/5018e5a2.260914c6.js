"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75907],{89467:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(96600),i=r(27279),o=(r(59496),r(3905)),a=["components"],c={id:"ignite"},l="ignite",u={unversionedId:"os/virt/ignite",id:"os/virt/ignite",title:"ignite",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/virt/ignite.md",sourceDirName:"os/virt",slug:"/os/virt/ignite",permalink:"/notes/os/virt/ignite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/ignite.md",tags:[],version:"current",frontMatter:{id:"ignite"},sidebar:"docs",previous:{title:"HyperV",permalink:"/notes/os/virt/hyperv"},next:{title:"KSM",permalink:"/notes/os/virt/ksm"}},s={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ignite"},"ignite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u50cf Docker \u7ba1\u7406\u5bb9\u5668\u4e00\u6837\u7ba1\u7406 Firecracker MicroVM"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301 OCI \u955c\u50cf/Docker\u955c\u50cf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/ignite"},"weaveworks/ignite")),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CNI \u7ba1\u7406\u7f51\u7edc"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f7f\u7528\u9700\u8981 root\uff0cfirecracker \u662f\u4e0d\u9700\u8981\u7684")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"latest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/weaveworks/ignite/releases/latest))\n# amd64\ncurl --remote-name-all -LC- https://github.com/weaveworks/ignite/releases/download/${latest}/{ignite,ignited}-amd64\nmv ignite-amd64 ignite\nmv ignited-amd64 ignited\nchmod +x ignite ignited\n")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=i,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);