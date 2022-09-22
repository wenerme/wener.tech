"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33218],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const d={title:"Build"},f="Build",b={unversionedId:"os/linux/build",id:"os/linux/build",title:"Build",description:"\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u7684\u5e93",source:"@site/../notes/os/linux/build.md",sourceDirName:"os/linux",slug:"/os/linux/build",permalink:"/notes/os/linux/build",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/build.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655970411,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{title:"Build"},sidebar:"docs",previous:{title:"UEFI",permalink:"/notes/os/linux/boot/uefi"},next:{title:"coreutils",permalink:"/notes/os/linux/coreutils"}},m={},y=[{value:"\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u7684\u5e93",id:"\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u7684\u5e93",level:2}],O={toc:y};function v(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},O),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"build"}),"Build"),(0,r.kt)("h2",p({},{id:"\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u7684\u5e93"}),"\u83b7\u53d6\u52a8\u6001\u94fe\u63a5\u7684\u5e93"),(0,r.kt)("p",null,"Be aware that ldd actually runs the executable with a special environment variable, and the Linux dynamic linker recognizes this flag and just outputs the libraries rather than running the executable. Look at the source to ldd; on my system, it's a bash script. If the executable is statically linked and uses syscalls, and specifies a different loader, it can do arbitrary evil things. So don't use ldd on an executable you don't trust."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"ldd exec\n\nobjdump -p exec\nlsof -P -T -p $(pidof exec)\nreadelf -d /bin/ls | grep 'NEEDED'\n\n# macOS\notool -L exec\n")))}v.isMDXComponent=!0}}]);