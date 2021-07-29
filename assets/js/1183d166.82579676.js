"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47242],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},81328:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={title:"\u6a21\u62df\u5668"},u=void 0,c={unversionedId:"os/android/emulator",id:"os/android/emulator",isDocsHomePage:!1,title:"\u6a21\u62df\u5668",description:"- Start the Emulator from the Command Line",source:"@site/notes/os/android/emulator.md",sourceDirName:"os/android",slug:"/os/android/emulator",permalink:"/notes/os/android/emulator",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/android/emulator.md",version:"current",frontMatter:{title:"\u6a21\u62df\u5668"},sidebar:"docs",previous:{title:"Android Awesome",permalink:"/notes/os/android/android-awesome"},next:{title:"LineageOS",permalink:"/notes/os/android/lineageos"}},m=[{value:"FAQ",id:"faq",children:[{value:"Chrome \u8c03\u8bd5\u6a21\u62df\u5668",id:"chrome-\u8c03\u8bd5\u6a21\u62df\u5668",children:[]},{value:"Failed to sync vcpu reg",id:"failed-to-sync-vcpu-reg",children:[]}]}],p={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/run/emulator-commandline.html"},"Start the Emulator from the Command Line")),(0,o.kt)("li",{parentName:"ul"},"tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bin",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"apkanalyzer"),(0,o.kt)("li",{parentName:"ul"},"archquery"),(0,o.kt)("li",{parentName:"ul"},"avdmanager"),(0,o.kt)("li",{parentName:"ul"},"jobb"),(0,o.kt)("li",{parentName:"ul"},"lint"),(0,o.kt)("li",{parentName:"ul"},"monkeyrunner"),(0,o.kt)("li",{parentName:"ul"},"screenshot2"),(0,o.kt)("li",{parentName:"ul"},"sdkmanager"),(0,o.kt)("li",{parentName:"ul"},"uiautomatorviewer")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -list-avds\n")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"chrome-\u8c03\u8bd5\u6a21\u62df\u5668"},"Chrome \u8c03\u8bd5\u6a21\u62df\u5668"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,o.kt)("a",{parentName:"li",href:"chrome://inspect/#devices"},"chrome://inspect/#devices")),(0,o.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"adb devices"))),(0,o.kt)("h3",{id:"failed-to-sync-vcpu-reg"},"Failed to sync vcpu reg"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6ca1\u6709\u522b\u7684\u865a\u62df\u673a\u5728\u8fd0\u884c, \u4f8b\u5982 vbox, boot2docker, docker4mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"launchctl list | grep 'VirtualBox\\|docker'\n")))}s.isMDXComponent=!0}}]);