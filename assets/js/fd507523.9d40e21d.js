"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40528],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return s}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},k=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=u(n),s=r,c=d["".concat(o,".").concat(s)]||d[s]||m[s]||l;return n?a.createElement(c,p(p({ref:e},k),{},{components:n})):a.createElement(c,p({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57952:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return g}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&k(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&k(t,n,e[n]);return t};const d={title:"apk"},s="apk",c={unversionedId:"os/alpine/alpine-apk",id:"os/alpine/alpine-apk",title:"apk",description:"- alpine/apk-tools",source:"@site/../notes/os/alpine/alpine-apk.md",sourceDirName:"os/alpine",slug:"/os/alpine/apk",permalink:"/notes/os/alpine/apk",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/alpine/alpine-apk.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1679060062,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"apk"},sidebar:"docs",previous:{title:"Alpine",permalink:"/notes/os/alpine/"},next:{title:"AlpineLinux Awesome",permalink:"/notes/os/alpine/awesome"}},N={},g=[{value:"Notes",id:"notes",level:2}],b={toc:g};function f(t){var e,n=t,{components:r}=n,k=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=m(m({},b),k),l(e,p({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"apk"}),"apk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://gitlab.alpinelinux.org/alpine/apk-tools"}),"alpine/apk-tools")),(0,a.kt)("li",{parentName:"ul"},"github ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/alpinelinux/apk-tools"}),"mirror")),(0,a.kt)("li",{parentName:"ul"},".apk-new",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"apk \u5347\u7ea7\u5982\u679c\u68c0\u6d4b\u5230\u672c\u5730\u4fee\u6539\uff0c\u5219\u4f1a\u521b\u5efa apk-new \u6587\u4ef6")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"apk info -r so:libgnutls.so.30.28.0\napk search cmd:blkid\napk version -l '!'\n\n# \u7248\u672c\u53f7\napk policy musl | sed '2!d' | sed 's/[^0-9a-z.-]//g'\n\n# 1.2.3-r4\ndocker run --rm -it wener/base sh -c 'apk update >/dev/null;apk policy musl | sed \"2!d\" | sed \"s/[^0-9a-z.-]//g\"'\n# 1.2.3\ndocker run --rm -it wener/base sh -c 'apk update >/dev/null;apk policy musl | sed \"2!d\" | sed \"s/[^0-9a-z.-]//g\"' | cut -d '-' -f 1\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"command"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"add"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5b89\u88c5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"del"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5378\u8f7d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fix"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"reinstall/upgrade - \u4e0d\u4fee\u6539 world")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"update"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u66f4\u65b0 index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"upgrade"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5347\u7ea7\u5305")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cache"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u7f13\u5b58\u7ba1\u7406")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u67e5\u8be2")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"info"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"list"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"dot"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"policy"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"search"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u4ed3\u5e93\u7ba1\u7406")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u521b\u5efa index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"fetch"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u4e0b\u8f7d pkg \u5230\u672c\u5730")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"manifest"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5185\u5bb9 checksum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"verify"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u6821\u9a8c\u5185\u5bb9\u548c\u7b7e\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"\u5176\u4ed6")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"audit"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"stats"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"version"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"apk audit # \u7cfb\u7edf\u76ee\u524d\u53d8\u5316 - \u54ea\u4e9b\u589e\u52a0\u4e86\uff0c\u54ea\u4e9b\u5220\u9664\u4e86\napk audit --packages -q | xargs apk fix # \u4fee\u590d\u6709\u4fee\u6539\u7684\u5305\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/apk/repositories",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https://"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ftp://")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$repository/$arch/APKINDEX.tar.gz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$repository/$arch/$pkgname-$pkgver-r$pkgrel.apk")))),(0,a.kt)("li",{parentName:"ul"},"/etc/apk/world")),(0,a.kt)("h2",m({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apk_name_foreach_matching \u6838\u5fc3\u5339\u914d\u903b\u8f91")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-c"}),"struct apk_hash_ops {\n    ptrdiff_t   node_offset;\n    apk_blob_t    (*get_key)(apk_hash_item item);\n    unsigned long   (*hash_key)(apk_blob_t key);\n    unsigned long   (*hash_item)(apk_hash_item item);\n    int             (*compare)(apk_blob_t itemkey, apk_blob_t key);// \u6bd4\u8f83\u5305\u540d\n    int             (*compare_item)(apk_hash_item item, apk_blob_t key); // \u6bd4\u8f83\u5185\u5bb9\n    void              (*delete_item)(apk_hash_item item);\n};\n\n// \u5305\u540d\u5b57\u5217\u8868\nstruct apk_hash {\n    const struct apk_hash_ops *ops;\n    struct apk_hash_array *buckets;\n    int num_items;\n};\n")))}f.isMDXComponent=!0}}]);