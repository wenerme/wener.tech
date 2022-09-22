"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51985],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,h=m["".concat(u,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23166:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={title:"zsh"},f="zsh",h={unversionedId:"os/linux/shell/zsh",id:"os/linux/shell/zsh",title:"zsh",description:"- \u914d\u7f6e",source:"@site/../notes/os/linux/shell/zsh.md",sourceDirName:"os/linux/shell",slug:"/os/linux/shell/zsh",permalink:"/notes/os/linux/shell/zsh",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/shell/zsh.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655980831,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"zsh"},sidebar:"docs",previous:{title:"Terminal",permalink:"/notes/os/linux/shell/terminal"},next:{title:"\u80fd\u529b\u7ba1\u7406",permalink:"/notes/os/linux/sys/capabilities"}},d={},k=[{value:"Why ZSH",id:"why-zsh",level:2}],b={toc:k};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),s),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"zsh"}),"zsh"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},".zshrc - \u4ea4\u4e92 shell"),(0,n.kt)("li",{parentName:"ul"},".zprofile - \u767b\u9646 shell"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/robbyrussell/oh-my-zsh"}),"robbyrussell/oh-my-zsh")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/zsh-users/antigen"}),"zsh-users/antigen"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"feature"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"zsh"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"bash"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Automatic cd"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Recursive path expansion"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Spelling correction and approximate completion"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Plugin and theme suppor"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))))),(0,n.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",c({},{id:"why-zsh"}),"Why ZSH"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pros",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS \u9ed8\u8ba4 Shell"))),(0,n.kt)("li",{parentName:"ul"},"Cons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5927\u591a ZSH \u6709\u7684\u7279\u6027 Bash \u4e5f\u6709",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f46 zsh \u53ef\u80fd\u652f\u6301\u7684\u66f4\u5b8c\u5584"))),(0,n.kt)("li",{parentName:"ul"},"\u5927\u591a\u670d\u52a1\u5668\u73af\u5883\u90fd\u662f Bash \u6216 POSIX Shell",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e73\u65f6\u4f7f\u7528 bash \u66f4\u5229\u4e8e\u670d\u52a1\u7aef\u7f16\u7801"),(0,n.kt)("li",{parentName:"ul"},"\u8fc7\u591a\u4f7f\u7528 zsh \u76f8\u5173\u7279\u6027\u4f1a\u4ea7\u751f\u4f9d\u8d56")))))))}y.isMDXComponent=!0}}]);