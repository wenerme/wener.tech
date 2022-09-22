"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38031],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(96600),o=t(27279),i=(t(59496),t(49613)),a=["components"],l={title:"NPM FAQ",tags:["FAQ"]},s=void 0,c={unversionedId:"web/nodejs/npm-faq",id:"web/nodejs/npm-faq",title:"NPM FAQ",description:"lockfileVersion: 2 install script",source:"@site/notes/web/nodejs/npm-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/npm-faq",permalink:"/notes/web/nodejs/npm-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/nodejs/npm-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"NPM FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/nodejs/nodejs-version"},next:{title:"NPM Version",permalink:"/notes/web/nodejs/npm-version"}},p={},u=[{value:"lockfileVersion: 2 install script",id:"lockfileversion-2-install-script",level:2},{value:"speed up npm ci",id:"speed-up-npm-ci",level:2}],f={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfileversion-2-install-script"},"lockfileVersion: 2 install script"),(0,i.kt)("p",null,"\u6ca1\u6709 hasInstallScript\uff0c\u5bfc\u81f4\u6ca1\u6709\u8c03\u7528\u5b89\u88c5\u811a\u672c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx fix-has-install-script\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="ESBuild"',title:'"ESBuild"'},"# \u5728\u4e0d\u4fee\u6539 packages-lock.json \u7684\u60c5\u51b5\u4e0b\u624b\u52a8\u5b89\u88c5\u662f\u6700\u7b80\u5355\u7684\nnode ./node_modules/esbuild/install.js\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/npm/cli/issues/2606"},"npm/cli#2606"))),(0,i.kt)("h2",{id:"speed-up-npm-ci"},"speed up npm ci"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# --cache $PWD/.cache \u786e\u4fdd\u5229\u7528\u7f13\u5b58\n# --only=production \u4e0d\u5b89\u88c5 dev - \u770b\u60c5\u51b5 - \u4f8b\u5982 \u57fa\u7840\u5bb9\u5668\u5df2\u7ecf\u5305\u542b\n# --silent\nnpm ci --prefer-offline --no-audit\n\n# \u6216\u8005\u8fd8\u662f\u76f4\u63a5\u7528 install - \u4fdd\u7559\u73b0\u6709 node_modules\nnpm install --no-fund --no-audit\n")))}m.isMDXComponent=!0}}]);