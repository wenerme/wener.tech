"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[39183],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52759:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"NPM Version",tags:["Version"]},p=void 0,c={unversionedId:"web/node/npm-version",id:"web/node/npm-version",title:"NPM Version",description:"NPM v8",source:"@site/notes/web/node/npm-version.md",sourceDirName:"web/node",slug:"/web/node/npm-version",permalink:"/notes/web/node/npm-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/node/npm-version.md",tags:[{label:"Version",permalink:"/notes/tags/version"}],version:"current",frontMatter:{title:"NPM Version",tags:["Version"]},sidebar:"docs",previous:{title:"NPM FAQ",permalink:"/notes/web/node/npm-faq"},next:{title:"nvm",permalink:"/notes/web/node/nvm"}},s=[{value:"NPM v8",id:"npm-v8",children:[],level:2},{value:"NPM v7",id:"npm-v7",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npm-v8"},"NPM v8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js 16 \u9ed8\u8ba4"),(0,a.kt)("li",{parentName:"ul"},"Node.js 12+"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Node.js 10")),(0,a.kt)("h2",{id:"npm-v7"},"NPM v7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/npm/cli/issues/2800"},"npm/cli#2800"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"npm outdated \u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"tailwindcss@npm:@tailwindcss/postcss7-compat")))))),(0,a.kt)("li",{parentName:"ul"},"workspace"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5b89\u88c5 peer \u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89e3\u6790\u7248\u672c\u4f1a\u6709\u51b2\u7a81 - \u4e4b\u524d\u4e0d\u5b89\u88c5\u65e0\u5f71\u54cd"))),(0,a.kt)("li",{parentName:"ul"},"package-lock v2 - \u652f\u6301 yarn.lock"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npx -y")," \u81ea\u52a8\u5b89\u88c5 - \u4e0d\u8be2\u95ee"),(0,a.kt)("li",{parentName:"ul"},"npx \u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"npm exec"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53ea\u663e\u793a\u9876\u7ea7\u4f9d\u8d56\nnpm ls\n# \u4e4b\u524d\u884c\u4e3a\nnpm ls --all\n\n# why -> explain\nnpm why node_modules/react/\n\n# \u8fdb\u5165\u5230 workspace \u73af\u5883 - shell\nnpm exec -w @wener/reaction\n# -w \u6307\u5b9a\u7a7a\u95f4 -c \u8fd0\u884c shell\n# -w \u53ef\u591a\u6b21\u6307\u5b9a\nnpm exec -w @wener/reaction -c 'pwd'\n# -ws \u6240\u6709\u7a7a\u95f4\u8fd0\u884c\nnpm exec -ws -c 'pwd'\n\n# \u8fd0\u884c foo bar --package=@npmcli/foo\nnpx foo@latest bar --package=@npmcli/foo\n# \u8fd0\u884c foo@latest bar\nnpm exec foo@latest bar --package=@npmcli/foo\n# \u5efa\u8bae\u4f7f\u7528 -- \u5206\u5272\u547d\u4ee4\nnpm exec -- foo@latest bar --package=@npmcli/foo\n")))}m.isMDXComponent=!0}}]);