"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[42614],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48867:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e},u=(e,n)=>o(e,l(n)),d=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={title:"NPM FAQ",tags:["FAQ"]},g="NPM FAQ",b={unversionedId:"web/nodejs/npm-faq",id:"web/nodejs/npm-faq",title:"NPM FAQ",description:"\u73af\u5883\u53d8\u91cf",source:"@site/../notes/web/nodejs/npm-faq.md",sourceDirName:"web/nodejs",slug:"/web/nodejs/npm-faq",permalink:"/notes/web/nodejs/npm-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/nodejs/npm-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"NPM FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"nodemon",permalink:"/notes/web/nodejs/nodemon"},next:{title:"NPM Version",permalink:"/notes/web/nodejs/npm-version"}},v={},y=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"lockfileVersion: 2 install script",id:"lockfileversion-2-install-script",level:2},{value:"speed up npm ci",id:"speed-up-npm-ci",level:2},{value:"\u67e5\u770b native \u6a21\u5757\u4f9d\u8d56",id:"\u67e5\u770b-native-\u6a21\u5757\u4f9d\u8d56",level:2},{value:"ENOTEMPTY: directory not empty, rename",id:"enotempty-directory-not-empty-rename",level:2},{value:"global permission deined",id:"global-permission-deined",level:2},{value:"package",id:"package",level:2}],k={toc:y},h="wrapper";function O(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(h,u(m(m({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"npm-faq"}),"NPM FAQ"),(0,r.kt)("h2",m({},{id:"\u73af\u5883\u53d8\u91cf"}),"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"npm_config_*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.npmjs.com/cli/v9/using-npm/config#environment-variables"}),"https://docs.npmjs.com/cli/v9/using-npm/config#environment-variables")),(0,r.kt)("li",{parentName:"ul"},"NPM_CONFIG_REGISTRY",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Yarn \u65e0 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/yarnpkg/yarn/issues/2091"}),"https://github.com/yarnpkg/yarn/issues/2091"))))),(0,r.kt)("h2",m({},{id:"lockfileversion-2-install-script"}),"lockfileVersion: 2 install script"),(0,r.kt)("p",null,"\u6ca1\u6709 hasInstallScript\uff0c\u5bfc\u81f4\u6ca1\u6709\u8c03\u7528\u5b89\u88c5\u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx fix-has-install-script\n")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash",metastring:'title="ESBuild"',title:'"ESBuild"'}),"# \u5728\u4e0d\u4fee\u6539 packages-lock.json \u7684\u60c5\u51b5\u4e0b\u624b\u52a8\u5b89\u88c5\u662f\u6700\u7b80\u5355\u7684\nnode ./node_modules/esbuild/install.js\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/npm/cli/issues/2606"}),"npm/cli#2606"))),(0,r.kt)("h2",m({},{id:"speed-up-npm-ci"}),"speed up npm ci"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# --cache $PWD/.cache \u786e\u4fdd\u5229\u7528\u7f13\u5b58\n# --only=production \u4e0d\u5b89\u88c5 dev - \u770b\u60c5\u51b5 - \u4f8b\u5982 \u57fa\u7840\u5bb9\u5668\u5df2\u7ecf\u5305\u542b\n# --silent\nnpm ci --prefer-offline --no-audit\n\n# \u6216\u8005\u8fd8\u662f\u76f4\u63a5\u7528 install - \u4fdd\u7559\u73b0\u6709 node_modules\nnpm install --no-fund --no-audit\n")),(0,r.kt)("h2",m({},{id:"\u67e5\u770b-native-\u6a21\u5757\u4f9d\u8d56"}),"\u67e5\u770b native \u6a21\u5757\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'find node_modules -type f -name "*.node" 2> /dev/null | grep -v "obj\\.target" | xargs ldd\n\nnpx native-modules\n')),(0,r.kt)("h2",m({},{id:"enotempty-directory-not-empty-rename"}),"ENOTEMPTY: directory not empty, rename"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5\u5220\u9664"),(0,r.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5 --force"),(0,r.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5\u65b0\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm install -g npm\n")),(0,r.kt)("h2",m({},{id:"global-permission-deined"}),"global permission deined"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# 1. chown\nsudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}\n\n# 2. \u4fee\u6539 prefix\nnpm config get prefix # \u5f53\u524d prefix\n\nmkdir -p ~/.npm-global\nnpm config set prefix ~/.npm-global\n# NPM_CONFIG_PREFIX\nexport PATH=~/.npm-global/bin:$PATH\n")),(0,r.kt)("h2",m({},{id:"package"}),"package"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u53d1\u5e03 tgz\nnpm --registry=http://nxrm.local/repository/npm-hosted publish package.tgz\n\n# \u76f4\u63a5\u4e0a\u4f20\ncurl -u user:password -X POST "http://localhost:8081/service/rest/v1/components?repository=npm-private" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "npm.asset=@my-npm-package-0.0.0.tgz;type=application/x-compressed"\n\n# \u4e0b\u8f7d\ncurl -LO $(npm view lodash \'dist.tarball\')\n')))}O.isMDXComponent=!0}}]);