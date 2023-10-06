"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33490],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,d=s["".concat(p,".").concat(m)]||s[m]||k[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24956:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))i.call(t,r)&&c(e,r,t[r]);return e},k=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const d={title:"Heroku"},h="Heroku",f={unversionedId:"platform/heroku",id:"platform/heroku",title:"Heroku",description:"- Node",source:"@site/../notes/platform/heroku.md",sourceDirName:"platform",slug:"/platform/heroku",permalink:"/notes/platform/heroku",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/platform/heroku.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"Heroku"},sidebar:"docs",previous:{title:"GCP",permalink:"/notes/platform/google/cloud"},next:{title:"Linode",permalink:"/notes/platform/linode"}},b={},y=[{value:"auth",id:"auth",level:2},{value:"dyno",id:"dyno",level:2},{value:"\u8fdb\u7a0b\u7c7b\u578b",id:"\u8fdb\u7a0b\u7c7b\u578b",level:2},{value:"\u8c03\u5ea6\u5668 / \u5468\u671f\u6267\u884c",id:"\u8c03\u5ea6\u5668--\u5468\u671f\u6267\u884c",level:2},{value:"postgres",id:"postgres",level:2},{value:"redis",id:"redis",level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",level:2}],N={toc:y},g="wrapper";function v(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,k(s(s({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"heroku"}),"Heroku"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Node",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/changelog-items/1573"}),"\u90e8\u7f72\u8fd0\u884c build \u6216 heroku-postbuild \u811a\u672c")),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"npm start")," \u9664\u975e\u5728 Procfile \u6307\u5b9a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"web: yarn start")))),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u9700\u8981\u7ed1\u5b9a\u5230 PORT"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/heroku/heroku-buildpack-nodejs"}),"heroku/heroku-buildpack-nodejs")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/request-timeout#long-polling-and-streaming-responses"}),"\u8fde\u63a5\u8d85\u65f6"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u521d\u59cb 30s \u54cd\u5e94\u7a97\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u4e4b\u540e 55s \u54cd\u5e94\u7a97\u53e3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/ssl-endpoint"}),"\u81ea\u5b9a\u4e49\u57df\u540d SSL"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u8d2d\u4e70\u8bc1\u4e66"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/limits"}),"\u9650\u5236"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# \u5b89\u88c5\u547d\u4ee4\u884c\u5de5\u5177\nbrew tap heroku/brew && brew install heroku\n\n# \u5347\u7ea7 CLI\nheroku update\n\n# \u6784\u5efa\u8865\u5168\nheroku autocomplete\n# \u52a0\u8f7d\u8865\u5168\n$(heroku autocomplete:script bash)\n# \u6dfb\u52a0\u5230 profile \u81ea\u52a8\u52a0\u8f7d\nprintf "$(heroku autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc\n\n# \u521b\u5efa\u5e94\u7528\n# \u8bbf\u95ee\u5730\u5740 https://myapp.herokuapp.com/\n# \u4ed3\u5e93\u5730\u5740 https://git.heroku.com/myapp.git\nheroku apps:create myapp\n\n# Git \u90e8\u7f72\nheroku git:remote -a <\u5e94\u7528\u540d\u5b57>\ngit push heroku master\n\n# \u5bb9\u5668\u90e8\u7f72\n# https://devcenter.heroku.com/articles/container-registry-and-runtime\nheroku container:login\n# web \u4e3a\u7c7b\u578b - \u5f53\u524d\u76ee\u5f55\u4e0b\u8981\u6709 Dockerfile\n# \u955c\u50cf\u4e3a registry.heroku.com/myapp/web\nheroku container:push web\nheroku container:release web\n\n# \u4f7f\u7528\u5df2\u6709\u7684\u955c\u50cf\ndocker tag <image> registry.heroku.com/<app>/<process-type>\ndocker push registry.heroku.com/<app>/<process-type>\n\n# \u542f\u52a8\u955c\u50cf\n# type \u9ed8\u8ba4\u4e3a web\nheroku run bash --type=worker\n')),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u81ea\u5b9a\u4e49\u57df\u540d\nheroku domains:add app.my.com\n\n# heroku addons:create ssl:endpoint\nheroku certs:add server.crt server.key --type endpoint\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5e94\u7528\u6267\u884c\u60c5\u51b5\nheroku ps -a wener\n")),(0,n.kt)("h2",s({},{id:"auth"}),"auth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.netrc")," \u4e2d\u7684\u9274\u6743\u4fe1\u606f")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u4ee5\u4f7f\u7528 TOKEN \u767b\u5f55\nHEROKU_API_KEY=XXX heroku login\n\n# \u67e5\u770b\u5f53\u524d Token\nheroku auth:token\n\n# \u767b\u5f55 docker\nheroku container:login\n")),(0,n.kt)("h2",s({},{id:"dyno"}),"dyno"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.heroku.com/dynos"}),"https://www.heroku.com/dynos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/dyno-types"}),"https://devcenter.heroku.com/articles/dyno-types")),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u7b97\u529b"),(0,n.kt)("li",{parentName:"ul"},"Free - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://www.heroku.com/pricing"}),"\u4ef7\u683c"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"30 \u5206\u949f\u4f11\u7720"),(0,n.kt)("li",{parentName:"ul"},"512 MB RAM \u2502 1 web/1 worker"),(0,n.kt)("li",{parentName:"ul"},"Postgres 10K \u884c"),(0,n.kt)("li",{parentName:"ul"},"Redis 25 MB \u5185\u5b58, 20 \u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u6708 1000 \u5c0f\u65f6")))),(0,n.kt)("h2",s({},{id:"\u8fdb\u7a0b\u7c7b\u578b"}),"\u8fdb\u7a0b\u7c7b\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/procfile"}),"Procfile"))),(0,n.kt)("h2",s({},{id:"\u8c03\u5ea6\u5668--\u5468\u671f\u6267\u884c"}),"\u8c03\u5ea6\u5668 / \u5468\u671f\u6267\u884c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/scheduler"}),"https://devcenter.heroku.com/articles/scheduler"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\u6269\u5c55\nheroku addons:create scheduler:standard\n")),(0,n.kt)("h2",s({},{id:"postgres"}),"postgres"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u514d\u8d39\u7684 hobby-dev\n# 1W\u884c 20\u5e76\u53d1\n# basic 9$/\u6708 100W \u884c\n# \u521b\u5efa\u540e\u4f1a\u751f\u6210 DATABASE_URL \u53d8\u91cf\nheroku addons:create heroku-postgresql:hobby-dev\n")),(0,n.kt)("h2",s({},{id:"redis"}),"redis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://elements.heroku.com/addons/heroku-redis"}),"https://elements.heroku.com/addons/heroku-redis"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# free dev: 20M 20\u5e76\u53d1\n# 15$ premium-0: 50M 40\u5e76\u53d1\n# \u521b\u5efa\u540e\u4f1a\u751f\u6210 REDIS_URL \u53d8\u91cf\nheroku addons:create heroku-redis:hobby-dev\n")),(0,n.kt)("h2",s({},{id:"\u5f00\u53d1"}),"\u5f00\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://devcenter.heroku.com/articles/dyno-metadata"}),"https://devcenter.heroku.com/articles/dyno-metadata"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"HEROKU_APP_ID:                   9daa2797-e49b-4624-932f-ec3f9688e3da\nHEROKU_APP_NAME:                 example-app\nHEROKU_DYNO_ID:                  1vac4117-c29f-4312-521e-ba4d8638c1ac\nHEROKU_RELEASE_CREATED_AT:       2015-04-02T18:00:42Z\nHEROKU_RELEASE_VERSION:          v42\nHEROKU_SLUG_COMMIT:              2c3a0b24069af49b3de35b8e8c26765c1dba9ff0\nHEROKU_SLUG_DESCRIPTION:         Deploy 2c3a0b2\n")))}v.isMDXComponent=!0}}]);