(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||i;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},618:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),i=(r(0),r(1021)),a={id:"hyperv",title:"HyperV"},c={unversionedId:"os/virt/hyperv",id:"os/virt/hyperv",isDocsHomePage:!1,title:"HyperV",description:"Tips",source:"@site/notes/os/virt/hyperv.md",slug:"/os/virt/hyperv",permalink:"/notes/os/virt/hyperv",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/hyperv.md",version:"current",sidebar:"docs",previous:{title:"HAXM",permalink:"/notes/os/virt/haxm"},next:{title:"ignite",permalink:"/notes/os/virt/ignite"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u73af\u5883\u8981\u6c42",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Windows 10 \u4f01\u4e1a\u7248\u3001Pro\u3001\u6559\u80b2\u7248"),Object(i.b)("li",{parentName:"ul"},"64 bit \u5904\u7406\u5668\uff0c\u652f\u6301 Second Level Address Translation (SLAT)"),Object(i.b)("li",{parentName:"ul"},"CPU \u652f\u6301 VM Monitor Mode Extension (VT-c on Intel CPUs)"),Object(i.b)("li",{parentName:"ul"},"4 GB \u5185\u5b58+")))),Object(i.b)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"},"Install Hyper-V on Windows 10"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-powershell"},"Install-WindowsFeature-Name Hyper-V-Restart\n\n# \u542f\u7528 HyperV\nEnable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")))}u.isMDXComponent=!0}}]);