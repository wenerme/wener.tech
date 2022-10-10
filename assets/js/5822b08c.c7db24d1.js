"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85981],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20986:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const m={title:"HAXM",hide_title:!0},f="HAXM",d={unversionedId:"os/virt/haxm",id:"os/virt/haxm",title:"HAXM",description:"Tips",source:"@site/../notes/os/virt/haxm.md",sourceDirName:"os/virt",slug:"/os/virt/haxm",permalink:"/notes/os/virt/haxm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/haxm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1603205900,formattedLastUpdatedAt:"Oct 20, 2020",frontMatter:{title:"HAXM",hide_title:!0},sidebar:"docs",previous:{title:"Apache Guacamole",permalink:"/notes/os/virt/guacamole"},next:{title:"HyperV",permalink:"/notes/os/virt/hyperv"}},y={},b=[{value:"Tips",id:"tips",level:2}],v={toc:b};function h(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"haxm"}),"HAXM"),(0,n.kt)("h2",u({},{id:"tips"}),"Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/intel/haxm"}),"intel/haxm")),(0,n.kt)("li",{parentName:"ul"},"\u786c\u4ef6\u8981\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VT-x, Intel EM64T (Intel 64), Execute Disable (XD) Bit"),(0,n.kt)("li",{parentName:"ul"},"4 GB+, \u63a8\u8350\u81f3\u5c11 8 GB"))),(0,n.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Windows 10 64-bit"),(0,n.kt)("li",{parentName:"ul"},"Windows 8, 8.1 64-bit"),(0,n.kt)("li",{parentName:"ul"},"Windows 7 64-bit"))),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u7981\u7528 HyperV"),(0,n.kt)("li",{parentName:"ul"},"Windows Hypervisor Platform(WHPX) \u548c WSL2 \u4e0e HAXM \u51b2\u7a81")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"# \u5b89\u88c5\u597d\u540e\u68c0\u6d4b\u670d\u52a1\nsc query intelhaxm\n\n# \u8d77\u505c\nsc start intelhaxm\nsc stop intelhaxm\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-shell"}),"# \u68c0\u6d4b\u652f\u6301\u73af\u5883\nchecktool -v\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"CPU vendor          *  GenuineIntel\nIntel64 supported   *  Yes\nVMX supported       *  Yes\nVMX enabled         *  Yes\nEPT supported       *  Yes\nNX supported        *  Yes\nNX enabled          *  Yes\nHyper-V disabled    *  Yes\nOS version          *  Windows 6.3.9600\nOS architecture     *  x86_64\nGuest unoccupied    *  Yes. 0 guest(s)\n")))}h.isMDXComponent=!0}}]);