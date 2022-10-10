"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[86053],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),y=o,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18135:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const f={id:"hyperv",title:"HyperV"},y="HyperV",d={unversionedId:"os/virt/hyperv",id:"os/virt/hyperv",title:"HyperV",description:"Tips",source:"@site/../notes/os/virt/hyperv.md",sourceDirName:"os/virt",slug:"/os/virt/hyperv",permalink:"/notes/os/virt/hyperv",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/hyperv.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1605179031,formattedLastUpdatedAt:"Nov 12, 2020",frontMatter:{id:"hyperv",title:"HyperV"},sidebar:"docs",previous:{title:"HAXM",permalink:"/notes/os/virt/haxm"},next:{title:"ignite",permalink:"/notes/os/virt/ignite"}},m={},v=[{value:"Tips",id:"tips",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}],b={toc:v};function O(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"hyperv"}),"HyperV"),(0,n.kt)("h2",u({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u73af\u5883\u8981\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Windows 10 \u4f01\u4e1a\u7248\u3001Pro\u3001\u6559\u80b2\u7248"),(0,n.kt)("li",{parentName:"ul"},"64 bit \u5904\u7406\u5668\uff0c\u652f\u6301 Second Level Address Translation (SLAT)"),(0,n.kt)("li",{parentName:"ul"},"CPU \u652f\u6301 VM Monitor Mode Extension (VT-c on Intel CPUs)"),(0,n.kt)("li",{parentName:"ul"},"4 GB \u5185\u5b58+")))),(0,n.kt)("h2",u({},{id:"\u542f\u52a8"}),"\u542f\u52a8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"}),"Install Hyper-V on Windows 10"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-powershell"}),"Install-WindowsFeature-Name Hyper-V-Restart\n\n# \u542f\u7528 HyperV\nEnable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")))}O.isMDXComponent=!0}}]);