"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9698],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const s={title:"Patch"},d="Patch",m={unversionedId:"dev/build/patch",id:"dev/build/patch",title:"Patch",description:"- 7 Patch Command Examples to Apply Diff Patch Files in Linux",source:"@site/../notes/dev/build/patch.md",sourceDirName:"dev/build",slug:"/dev/build/patch",permalink:"/notes/dev/build/patch",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/patch.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1623656447,formattedLastUpdatedAt:"Jun 14, 2021",frontMatter:{title:"Patch"},sidebar:"docs",previous:{title:"pants",permalink:"/notes/dev/build/pants"},next:{title:"Task",permalink:"/notes/dev/build/task"}},h={},b=[],y={toc:b};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},y),u),o(t,c({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",f({},{id:"patch"}),"Patch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://www.thegeekstuff.com/2014/12/patch-command-examples"}),"7 Patch Command Examples to Apply Diff Patch Files in Linux"))),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"# -p,-u,--patch \u751f\u6210 patch\ndiff -u hello.c hello_new.c > hello.patch\n\n# patch -p[num] < patchfile\n# patch [options] originalfile patchfile\n\n# \u9ed8\u8ba4\u8bfb\u53d6 stdin, \u4f7f\u7528 patch \u91cc\u6307\u5b9a\u7684\u6587\u4ef6\npatch -u -b hello.c -i hello.patch -o hello_new.c\n")))}v.isMDXComponent=!0}}]);