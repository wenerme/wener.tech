"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97737],{14267:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return k}});var n=r(96600),a=r(27279),l=(r(59496),r(3905)),i=["components"],o={title:"\u5185\u5b58"},p=void 0,m={unversionedId:"hardware/memory",id:"hardware/memory",title:"\u5185\u5b58",description:"\u540d\u8bcd",source:"@site/notes/hardware/memory.md",sourceDirName:"hardware",slug:"/hardware/memory",permalink:"/notes/hardware/memory",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/memory.md",tags:[],version:"current",frontMatter:{title:"\u5185\u5b58"},sidebar:"docs",previous:{title:"IoT Glossary",permalink:"/notes/hardware/iot/iot-glossary"},next:{title:"Arduino",permalink:"/notes/hardware/microcontroller/dev/arduino"}},u={},k=[{value:"\u540d\u8bcd",id:"\u540d\u8bcd",level:2},{value:"GTK",id:"gtk",level:2},{value:"UDIMM vs RDIMM",id:"udimm-vs-rdimm",level:2},{value:"Rank",id:"rank",level:2}],c={toc:k};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u540d\u8bcd"},"\u540d\u8bcd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Registered_memory"},"REG")," / \u5bc4\u5b58\u5668\u5185\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bc4\u5b58\u5668\u5185\u5b58\u65e0\u6cd5\u5728\u975e\u4e3a\u5176\u8bbe\u8ba1\u7684\u4e3b\u677f\u4e0a\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u5bc4\u5b58\u5668\u5185\u5b58\u4e0e\u975e\u5bc4\u5b58\u5668\u5185\u5b58\u4e0d\u80fd\u6df7\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/DIMM"},"DIMM")," \u53cc\u5217\u76f4\u63d2\u5f0f\u5185\u5b58\u6a21\u5757",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RDIMM - Buffered/Registered DIMM"),(0,l.kt)("li",{parentName:"ul"},"UDIMM - Unbuffered/Unregistered DIMM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u5c11\uff0c\u4ef7\u683c\u9ad8\uff0c\u5efa\u8bae\u7528 RDIMM"))),(0,l.kt)("li",{parentName:"ul"},"FBDIMM - Buffered/Registered"),(0,l.kt)("li",{parentName:"ul"},"SO-DIMM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b14\u8bb0\u672c\u5185\u5b58"))))),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7f13\u51b2\u5185\u5b58\uff08unbuffered memory\uff09\u6216\u975e\u5bc4\u5b58\u5668\u5185\u5b58\uff08unregistered memory\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.crucial.com/support/articles-faq-memory/how-much-power-does-memory-use"},"How Much Power Does Memory Use?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"3w 8G"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.anandtech.com/show/15912/ddr5-specification-released-setting-the-stage-for-ddr56400-and-beyond"},"DDR5 Memory Specification Released: Setting the Stage for DDR5-6400 And Beyond"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"64 Gbit 128 GB 6.4 Gbps"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5e26 ECC"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5927 32TB - 8 Channel 16 DIMM per socket"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23860779"},"HN"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Multi-bit ECC - Fully buffered\n# Single-bit ECC - Unbuffered\n# None - \u65e0 ECC\ndmidecode -t 16 | grep "Error Correction Type:"\n# \u5185\u5b58\u578b\u53f7\ndmidecode -t 17 | grep "Part Number:"\n')),(0,l.kt)("h2",{id:"gtk"},"GTK"),(0,l.kt)("p",null,"\u53e6\u5916, 1G43 \u8bf4\u660e\u662f E-die x8 \u6392\u5217(B-die \u7684\u4e2d\u95f4\u90a3\u4e2a\u5b57\u6bcd\u90fd\u662f K), \u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"1Rank=512MB*64/8=4G"),"B, \u5355\u6761 2Ranks \u7684 E-die \u53ea\u80fd\u662f 8GB"),(0,l.kt)("p",null,"Non-ECC UDIMM \u548c ECC UDIMM \u90fd\u4e0d\u4f1a\u91c7\u7528 x4 \u6392\u5217(\u9897\u7c92\u6570\u592a\u591a), \u6240\u4ee5\u8981\u60f3 16GB \u5355\u6761\u53ea\u80fd\u662f 2Ranks \u7684 B-die"),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"udimm-vs-rdimm"},"UDIMM vs RDIMM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UDIMM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u670d\u52a1\u5668\uff0c\u4e24\u6761\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u53cc\u901a\u9053"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u901a\u9053\u65f6\u6027\u80fd\u4f1a\u597d\u4e00\u70b9"))),(0,l.kt)("li",{parentName:"ul"},"RDIMM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u53cc\u901a\u9053\u6216\u4e09\u901a\u9053\u65f6\u5019\u5e26\u5bbd\u66f4\u9ad8"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://serverfault.com/a/289102/190601"},"https://serverfault.com/a/289102/190601"))))),(0,l.kt)("h2",{id:"rank"},"Rank"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 Rank - 1 \u82af\u7247 1 \u5185\u5b58 - 1 Rank 1 Bank"),(0,l.kt)("li",{parentName:"ul"},"2 Rank - 2 \u4e2a \u5355 Rank \u7ec4\u6210\u4e00\u4e2a\u6a21\u5757 - \u540c\u65f6\u53ea\u80fd\u8bbf\u95ee\u4e00\u4e2a Rank \u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"4 Rank - 2 \u4e2a \u53cc Rank \u7ec4\u6210\u4e00\u4e2a\u6a21\u5757 - \u540c\u65f6\u53ea\u80fd\u8bbf\u95ee\u4e00\u4e2a Rank"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2R*8")," vs ",(0,l.kt)("inlineCode",{parentName:"li"},"2R*4")," vs ",(0,l.kt)("inlineCode",{parentName:"li"},"4R*4"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u91cf 32G \u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2R*8")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"2*2*8")," - \u6bcf\u4e2a Rank 2G",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9891\u7387 2666MHz"),(0,l.kt)("li",{parentName:"ul"},"\u4ef7\u683c\u9ad8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2R*4")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"2*4*4")," - \u6bcf\u4e2a Rank 4G",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9891\u7387 2400MHz"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"4R*4")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"4*2*4")," - \u6bcf\u4e2a Rank 2G",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a Rank \u5bc6\u5ea6\u66f4\u4f4e"),(0,l.kt)("li",{parentName:"ul"},"\u9891\u7387 2133MHz"),(0,l.kt)("li",{parentName:"ul"},"\u4ef7\u683c\u4f4e")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u80fd\u770b\u5230 Rank \u548c \u9891\u7387\ndmidecode -t memory\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://techlibrary.hpe.com/docs/iss/DL380pGen8/setup_install/advanced/Content/138678.htm"},"https://techlibrary.hpe.com/docs/iss/DL380pGen8/setup_install/advanced/Content/138678.htm"))))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{kt:function(){return c}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,s=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(s,i(i({ref:t},k),{},{components:r})):n.createElement(s,i({ref:t},k))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);