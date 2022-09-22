"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71624],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57153:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),o=r(27279),i=(r(59496),r(49613)),a=["components"],l={id:"hyperv",title:"HyperV"},p=void 0,u={unversionedId:"os/virt/hyperv",id:"os/virt/hyperv",title:"HyperV",description:"Tips",source:"@site/notes/os/virt/hyperv.md",sourceDirName:"os/virt",slug:"/os/virt/hyperv",permalink:"/notes/os/virt/hyperv",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/hyperv.md",tags:[],version:"current",frontMatter:{id:"hyperv",title:"HyperV"},sidebar:"docs",previous:{title:"HAXM",permalink:"/notes/os/virt/haxm"},next:{title:"ignite",permalink:"/notes/os/virt/ignite"}},c={},s=[{value:"Tips",id:"tips",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u73af\u5883\u8981\u6c42",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Windows 10 \u4f01\u4e1a\u7248\u3001Pro\u3001\u6559\u80b2\u7248"),(0,i.kt)("li",{parentName:"ul"},"64 bit \u5904\u7406\u5668\uff0c\u652f\u6301 Second Level Address Translation (SLAT)"),(0,i.kt)("li",{parentName:"ul"},"CPU \u652f\u6301 VM Monitor Mode Extension (VT-c on Intel CPUs)"),(0,i.kt)("li",{parentName:"ul"},"4 GB \u5185\u5b58+")))),(0,i.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"},"Install Hyper-V on Windows 10"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-WindowsFeature-Name Hyper-V-Restart\n\n# \u542f\u7528 HyperV\nEnable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")))}m.isMDXComponent=!0}}]);