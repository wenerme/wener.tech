(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,g=p["".concat(i,".").concat(u)]||p[u]||b[u]||l;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(8),l=(n(0),n(1151)),i={title:"KSM"},c={unversionedId:"os/virt/ksm",id:"os/virt/ksm",isDocsHomePage:!1,title:"KSM",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/virt/ksm.md",slug:"/os/virt/ksm",permalink:"/notes/os/virt/ksm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/ksm.md",version:"current",sidebar:"docs",previous:{title:"ignite",permalink:"/notes/os/virt/ignite"},next:{title:"Libvirt\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/virt/libvirt-faq"}},o=[],s={toc:o};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kernel Same page Mergeing - \u5185\u6838\u76f8\u540c\u9875\u5408\u5e76"),Object(l.b)("li",{parentName:"ul"},"Linux 2.6.32+ - CONFIG_KSM=y"))),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u865a\u62df\u673a\u591a\u5f00 - \u5927\u90e8\u5206\u6267\u884c\u5185\u5bb9\u90fd\u5dee\u4e0d\u591a, \u5408\u5e76\u540e\u76f8\u540c\u5185\u5bb9\u53ea\u5360\u4e00\u4efd\u5185\u5b58"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.linux-kvm.org/page/KSM"},"https://www.linux-kvm.org/page/KSM")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Kernel_same-page_merging"},"https://en.wikipedia.org/wiki/Kernel_same-page_merging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/vm/ksm.txt"},"https://www.kernel.org/doc/Documentation/vm/ksm.txt")))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ksm \u626b\u63cf page \u662f\u5faa\u5e8f\u6e10\u8fdb\u7684\u8fc7\u7a0b\uff0c\u9700\u8981\u6bd4\u8f83\u957f\u7684\u65f6\u95f4\uff0c\u56e0\u6b64\u6548\u679c\u4e0d\u662f\u7acb\u5373\u770b\u5f97\u5230")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5728 Host \u542f\u7528\necho 1 > /sys/kernel/mm/ksm/run\n# \u5728\u5bbf\u4e3b\u673a\u4e0a\u67e5\u770b KSM \u72b6\u6001\n# \u5982\u679c\u6709\u5408\u5e76\u5219 pages_shared \u4e0d\u4e3a 0\ngrep . /sys/kernel/mm/ksm/*\n\n# \u9875\u5927\u5c0f\uff0c\u9ed8\u8ba4 4k\ngetconf PAGE_SIZE\n\n# \u5b9e\u9645\u8282\u7701 page\necho $(($(sysctl -n /sys/kernel/mm/ksm/pages_sharing) - $(sysctl -n /sys/kernel/mm/ksm/pages_shared)))\n# \u8282\u7701\u5185\u5b58\n# numfmt \u7531 coreutils \u63d0\u4f9b\necho $(( ($(cat /sys/kernel/mm/ksm/pages_sharing) - $(cat /sys/kernel/mm/ksm/pages_shared)) * $(getconf PAGE_SIZE) )) | numfmt --to=iec-i\n\necho $(( $(cat /sys/kernel/mm/ksm/pages_sharing) * $(getconf PAGE_SIZE) )) | numfmt --to=iec-i\necho $(( $(cat /sys/kernel/mm/ksm/pages_volatile) * $(getconf PAGE_SIZE) )) | numfmt --to=iec-i\necho $(( $(cat /sys/kernel/mm/ksm/pages_unshared) * $(getconf PAGE_SIZE) )) | numfmt --to=iec-i\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"item"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pages_shared"),Object(l.b)("td",{parentName:"tr",align:null},"\u5408\u5e76\u540e\u9875")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pages_sharing"),Object(l.b)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u9875")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pages_unshared"),Object(l.b)("td",{parentName:"tr",align:null},"\u672a\u80fd\u5408\u5e76\u9875")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pages_volatile"),Object(l.b)("td",{parentName:"tr",align:null},"\u53d8\u5316\u592a\u5feb\u672a\u80fd\u653e\u5230\u6811\u4e2d\u8ddf\u8e2a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"full_scans"),Object(l.b)("td",{parentName:"tr",align:null},"\u6240\u6709\u53ef\u5408\u5e76\u533a\u57df\u626b\u63cf\u6b21\u6570")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"pages_sharing \u9ad8\u610f\u5473\u7740\u6548\u679c\u8f83\u597d"),Object(l.b)("li",{parentName:"ul"},"pages_unshared \u9ad8\u610f\u5473\u7740\u6548\u679c\u4e0d\u597d - \u53ef\u8003\u8651\u5173\u95ed"),Object(l.b)("li",{parentName:"ul"},"max_page_sharing \u9650\u5236\u4e86\u6700\u591a\u53ef\u5171\u4eab\u9875 - \u53ef\u8c03\u6574")))}m.isMDXComponent=!0}}]);