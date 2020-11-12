(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(661)),i={title:"\u5d4c\u5957\u865a\u62df\u5316"},c={unversionedId:"os/virt/virt-nested",id:"os/virt/virt-nested",isDocsHomePage:!1,title:"\u5d4c\u5957\u865a\u62df\u5316",description:"\u5d4c\u5957\u865a\u62df\u5316",source:"@site/notes/os/virt/virt-nested.md",slug:"/os/virt/virt-nested",permalink:"/notes/os/virt/virt-nested",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/virt-nested.md",version:"current"},l=[{value:"KVM",id:"kvm",children:[]},{value:"HyperV",id:"hyperv",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5d4c\u5957\u865a\u62df\u5316"},"\u5d4c\u5957\u865a\u62df\u5316"),Object(o.b)("h2",{id:"kvm"},"KVM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.linux-kvm.org/page/Nested_Guests"}),"Nested Guests"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f53\u542f\u52a8\u4e86\u5d4c\u5957\u865a\u62df\u673a\u540e\uff0c\u5728\u672a\u5173\u95ed\u5d4c\u5957\u7684\u865a\u62df\u673a\u4e4b\u524d\uff0c\u4e0a\u5c42\u865a\u62df\u673a\u65e0\u6cd5\u8fc1\u79fb\u3001\u4fdd\u5b58\u3001\u52a0\u8f7d")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# intel\ncat /sys/module/kvm_intel/parameters/nested\n# amd\ncat /sys/module/kvm_amd/parameters/nested\n\n# \u542f\u7528\nmodprobe kvm_intel nested=1\n# \u5982\u679c\u5df2\u7ecf\u52a0\u8f7d\u8fc7\u9700\u8981\u5148\u79fb\u9664\nmodprobe kvm_intel -r\n# /etc/modprobe.d/kvm.conf\n# options kvm_intel nested=1\n")),Object(o.b)("h2",{id:"hyperv"},"HyperV"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Windows Server 2016+, Windows 10+"),Object(o.b)("li",{parentName:"ul"},"Hyper-V VM 8+"),Object(o.b)("li",{parentName:"ul"},"Intel VT-x,EPT"),Object(o.b)("li",{parentName:"ul"},"AMD \u76ee\u524d\u4e0d\u652f\u6301")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell"}),"# ExposeVirtualizationExtensions \u8868\u793a\u662f\u5426\u5f00\u542f\nGet-VMProcessor -VMName vm_name | fl *\n# \u5f00\u542f\nSet-VMProcessor -VMName vm_name -ExposeVirtualizationExtensions $true\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nakivo.com/blog/hyper-v-nested-virtualization-explained"}),"Hyper-V Nested Virtualization Explained"))))))}u.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);