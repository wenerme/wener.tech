"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11535],{13494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(96600),i=n(27279),a=(n(59496),n(3905)),o=["components"],l={title:"\u5d4c\u5957\u865a\u62df\u5316"},s=void 0,u={unversionedId:"os/virt/virt-nested",id:"os/virt/virt-nested",title:"\u5d4c\u5957\u865a\u62df\u5316",description:"KVM",source:"@site/notes/os/virt/virt-nested.md",sourceDirName:"os/virt",slug:"/os/virt/virt-nested",permalink:"/notes/os/virt/virt-nested",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/virt-nested.md",tags:[],version:"current",frontMatter:{title:"\u5d4c\u5957\u865a\u62df\u5316"},sidebar:"docs",previous:{title:"\u865a\u62df\u5316\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/virt/virt-faq"},next:{title:"Virtio",permalink:"/notes/os/virt/virtio"}},p={},c=[{value:"KVM",id:"kvm",level:2},{value:"HyperV",id:"hyperv",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kvm"},"KVM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/Nested_Guests"},"Nested Guests"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f53\u542f\u52a8\u4e86\u5d4c\u5957\u865a\u62df\u673a\u540e\uff0c\u5728\u672a\u5173\u95ed\u5d4c\u5957\u7684\u865a\u62df\u673a\u4e4b\u524d\uff0c\u4e0a\u5c42\u865a\u62df\u673a\u65e0\u6cd5\u8fc1\u79fb\u3001\u4fdd\u5b58\u3001\u52a0\u8f7d")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# intel\ncat /sys/module/kvm_intel/parameters/nested\n# amd\ncat /sys/module/kvm_amd/parameters/nested\n\n# \u542f\u7528\nmodprobe kvm_intel nested=1\n# \u5982\u679c\u5df2\u7ecf\u52a0\u8f7d\u8fc7\u9700\u8981\u5148\u79fb\u9664\nmodprobe kvm_intel -r\n# /etc/modprobe.d/kvm.conf\n# options kvm_intel nested=1\n")),(0,a.kt)("h2",{id:"hyperv"},"HyperV"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows Server 2016+, Windows 10+"),(0,a.kt)("li",{parentName:"ul"},"Hyper-V VM 8+"),(0,a.kt)("li",{parentName:"ul"},"Intel VT-x,EPT"),(0,a.kt)("li",{parentName:"ul"},"AMD \u76ee\u524d\u4e0d\u652f\u6301")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# ExposeVirtualizationExtensions \u8868\u793a\u662f\u5426\u5f00\u542f\nGet-VMProcessor -VMName vm_name | fl *\n# \u5f00\u542f\nSet-VMProcessor -VMName vm_name -ExposeVirtualizationExtensions $true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.nakivo.com/blog/hyper-v-nested-virtualization-explained"},"Hyper-V Nested Virtualization Explained"))))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);