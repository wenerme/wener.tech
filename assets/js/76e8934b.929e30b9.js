"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20326],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23524:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return v}});var n=r(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&s(e,r,t[r]);return e};const f={id:"ignite"},m="ignite",d={unversionedId:"os/virt/ignite",id:"os/virt/ignite",title:"ignite",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/virt/ignite.md",sourceDirName:"os/virt",slug:"/os/virt/ignite",permalink:"/notes/os/virt/ignite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/ignite.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603870351,formattedLastUpdatedAt:"Oct 28, 2020",frontMatter:{id:"ignite"},sidebar:"docs",previous:{title:"HyperV",permalink:"/notes/os/virt/hyperv"},next:{title:"KSM",permalink:"/notes/os/virt/ksm"}},g={},v=[],b={toc:v};function y(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),s),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"ignite"}),"ignite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u50cf Docker \u7ba1\u7406\u5bb9\u5668\u4e00\u6837\u7ba1\u7406 Firecracker MicroVM"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 OCI \u955c\u50cf/Docker\u955c\u50cf"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/weaveworks/ignite"}),"weaveworks/ignite")),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CNI \u7ba1\u7406\u7f51\u7edc"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u4f7f\u7528\u9700\u8981 root\uff0cfirecracker \u662f\u4e0d\u9700\u8981\u7684")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"latest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/weaveworks/ignite/releases/latest))\n# amd64\ncurl --remote-name-all -LC- https://github.com/weaveworks/ignite/releases/download/${latest}/{ignite,ignited}-amd64\nmv ignite-amd64 ignite\nmv ignited-amd64 ignited\nchmod +x ignite ignited\n")))}y.isMDXComponent=!0}}]);