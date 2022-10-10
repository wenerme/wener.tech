"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20127],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80401:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return b}});var r=t(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e};const m={title:"nvm"},f="nvm",v={unversionedId:"web/nodejs/nvm",id:"web/nodejs/nvm",title:"nvm",description:"- node \u7248\u672c\u7ba1\u7406",source:"@site/../notes/web/nodejs/nvm.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/nvm",permalink:"/notes/web/nodejs/nvm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/nvm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645292280,formattedLastUpdatedAt:"Feb 19, 2022",frontMatter:{title:"nvm"},sidebar:"docs",previous:{title:"NPM",permalink:"/notes/web/nodejs/npm"},next:{title:"package.json",permalink:"/notes/web/nodejs/package.json"}},d={},b=[{value:"AlpineLinux",id:"alpinelinux",level:2}],y={toc:b};function O(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},y),p),a(n,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"nvm"}),"nvm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node \u7248\u672c\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"brew \u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5f00\u53d1\u4f7f\u7528\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528 lts")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'brew install nvm\n\n# \u6dfb\u52a0 profile - \u4e0b\u6b21 shell \u8fd8\u80fd\u7528\ncat <<\'SHELL\' >> ~/.bash_profile\nexport NVM_DIR="$HOME/.nvm"\n[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"\n[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"\nSHELL\n\nmkdir -p ~/.nvm\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\n[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"\n\nnvm install --lts     # \u5b89\u88c5\nnvm use --lts         # \u5207\u6362\u7248\u672c\nnvm alias default 16  # \u8bbe\u7f6e\u9ed8\u8ba4 - \u4e0b\u6b21\u4e0d\u9700\u8981\u518d\u5207\u6362\u7248\u672c - alias \u4e0d\u652f\u6301 --lts\n')),(0,r.kt)("h2",u({},{id:"alpinelinux"}),"AlpineLinux"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'export NVM_NODEJS_ORG_MIRROR=https://unofficial-builds.nodejs.org/download/release\nNVM_DIR="$HOME/.nvm"\nsource "$HOME/.nvm/nvm.sh"\n\nnvm_get_arch() { nvm_echo "x64-musl"; }\n\nnvm i --lts\n')))}O.isMDXComponent=!0}}]);