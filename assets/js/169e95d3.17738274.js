"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41734],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),k=o(n),c=a,g=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:a,i[1]=m;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82545:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return u}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),i=["components"],m={title:"KSM"},p="KSM",o={unversionedId:"os/virt/ksm",id:"os/virt/ksm",title:"KSM",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/os/virt/ksm.md",sourceDirName:"os/virt",slug:"/os/virt/ksm",permalink:"/notes/os/virt/ksm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/os/virt/ksm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"KSM"},sidebar:"docs",previous:{title:"ignite",permalink:"/notes/os/virt/ignite"},next:{title:"Libvirt Domain",permalink:"/notes/os/virt/libvirt-dom"}},s={},u=[],k={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ksm"},"KSM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kernel Same page Mergeing - \u5185\u6838\u76f8\u540c\u9875\u5408\u5e76"),(0,l.kt)("li",{parentName:"ul"},"Linux 2.6.32+ - CONFIG_KSM=y"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u673a\u591a\u5f00 - \u5927\u90e8\u5206\u6267\u884c\u5185\u5bb9\u90fd\u5dee\u4e0d\u591a, \u5408\u5e76\u540e\u76f8\u540c\u5185\u5bb9\u53ea\u5360\u4e00\u4efd\u5185\u5b58"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/KSM"},"https://www.linux-kvm.org/page/KSM")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Kernel_same-page_merging"},"https://en.wikipedia.org/wiki/Kernel_same-page_merging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/vm/ksm.txt"},"https://www.kernel.org/doc/Documentation/vm/ksm.txt")))),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ksm \u626b\u63cf page \u662f\u5faa\u5e8f\u6e10\u8fdb\u7684\u8fc7\u7a0b\uff0c\u9700\u8981\u6bd4\u8f83\u957f\u7684\u65f6\u95f4\uff0c\u56e0\u6b64\u6548\u679c\u4e0d\u662f\u7acb\u5373\u770b\u5f97\u5230")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728 Host \u542f\u7528\necho 1 > /sys/kernel/mm/ksm/run\n# \u5728\u5bbf\u4e3b\u673a\u4e0a\u67e5\u770b KSM \u72b6\u6001\n# \u5982\u679c\u6709\u5408\u5e76\u5219 pages_shared \u4e0d\u4e3a 0\ngrep . /sys/kernel/mm/ksm/*\n\n# \u9875\u5927\u5c0f\uff0c\u9ed8\u8ba4 4k\ngetconf PAGE_SIZE\n\n# \u5b9e\u9645\u8282\u7701 page\necho $(($(sysctl -n /sys/kernel/mm/ksm/pages_sharing) - $(sysctl -n /sys/kernel/mm/ksm/pages_shared)))\n# \u8282\u7701\u5185\u5b58\n# numfmt \u7531 coreutils \u63d0\u4f9b\necho $((($(cat /sys/kernel/mm/ksm/pages_sharing) - $(cat /sys/kernel/mm/ksm/pages_shared)) * $(getconf PAGE_SIZE))) | numfmt --to=iec-i\n\necho $(($(cat /sys/kernel/mm/ksm/pages_sharing) * $(getconf PAGE_SIZE))) | numfmt --to=iec-i\necho $(($(cat /sys/kernel/mm/ksm/pages_volatile) * $(getconf PAGE_SIZE))) | numfmt --to=iec-i\necho $(($(cat /sys/kernel/mm/ksm/pages_unshared) * $(getconf PAGE_SIZE))) | numfmt --to=iec-i\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"item"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"),(0,l.kt)("th",{parentName:"tr",align:null},"default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pages_shared"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u5e76\u540e\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pages_sharing"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pages_unshared"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672a\u80fd\u5408\u5e76\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pages_volatile"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u5316\u592a\u5feb\u672a\u80fd\u653e\u5230\u6811\u4e2d\u8ddf\u8e2a"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_scans"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u626b\u63cf\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_page_sharing"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u5171\u4eab\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pages_to_scan"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u6b21 sleep \u626b\u63cf\u591a\u5c11\u9875"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sleep_millisecs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u626b\u63cf\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run"),(0,l.kt)("td",{parentName:"tr",align:null},"0 stop keep merged, 1 run, 2 stop & unmerge"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pages_sharing \u9ad8\u610f\u5473\u7740\u6548\u679c\u8f83\u597d"),(0,l.kt)("li",{parentName:"ul"},"pages_unshared \u9ad8\u610f\u5473\u7740\u6548\u679c\u4e0d\u597d - \u53ef\u8003\u8651\u5173\u95ed"),(0,l.kt)("li",{parentName:"ul"},"max_page_sharing \u9650\u5236\u4e86\u6700\u591a\u53ef\u5171\u4eab\u9875 - \u53ef\u8c03\u6574")))}c.isMDXComponent=!0}}]);