"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[73141],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,b=m["".concat(i,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={title:"turborepo"},k="turborepo",b={unversionedId:"web/dev/turborepo",id:"web/dev/turborepo",title:"turborepo",description:"- vercel/turborepo",source:"@site/../notes/web/dev/turborepo.md",sourceDirName:"web/dev",slug:"/web/dev/turborepo",permalink:"/notes/web/dev/turborepo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/turborepo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"turborepo"},sidebar:"docs",previous:{title:"jest",permalink:"/notes/web/dev/testing/jest"},next:{title:"Vite",permalink:"/notes/web/dev/vite"}},d={},N=[{value:"Pipeline",id:"pipeline",level:2},{value:"turborepo-remote-cache",id:"turborepo-remote-cache",level:2},{value:"error hashing files: could not hash file package-lock.json",id:"error-hashing-files-could-not-hash-file-package-lockjson",level:2}],g={toc:N};function f(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},g),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"turborepo"}),"turborepo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/vercel/turborepo"}),"vercel/turborepo"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c nx\uff0c\u4f46\u652f\u6301\u591a package\uff1b\u7c7b\u4f3c bazel"),(0,r.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e monorepo \u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f13\u5b58\u3001\u4f9d\u8d56"))),(0,r.kt)("li",{parentName:"ul"},"node_modules/.cache/turbo")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npx -y create-turbo@latest\ncd my-turborepo/\nnpm run dev\nnpm run build\n\n# \u6dfb\u52a0\u5230\u5df2\u6709\u9879\u76ee\nnpm install turbo -D\n\n# \u8fd0\u884c\u5b9a\u4e49\u7684 pipeline\nturbo run build\nturbo run dev --parallel\nturbo run lint\n\n# vercel remote cache\nnpx turbo login\n# team remote cache\nnpx turbo login --sso-team=<team-slug>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title="turbo.json"',title:'"turbo.json"'}),'{\n  "$schema": "https://turborepo.org/schema.json",\n  "baseBranch": "origin/main"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"starter")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/apps/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"web/"),(0,r.kt)("li",{parentName:"ul"},"docs/"))),(0,r.kt)("li",{parentName:"ul"},"/packages/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ui/"),(0,r.kt)("li",{parentName:"ul"},"config/ - eslint"),(0,r.kt)("li",{parentName:"ul"},"tsconfig/")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"env")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"env"),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TURBO_TOKEN"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"remote_cache \u6388\u6743")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TURBO_REMOTE_CACHE_SIGNATURE_KEY"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TURBO_HASH"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TURBO_REMOTE_ONLY"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"--remote-only")," - \u53ea\u4f7f\u7528 remote cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TURBO_FORCE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"--force"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_COLOR"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",s({},{id:"pipeline"}),"Pipeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u8f93\u51fa\u7684\u6587\u4ef6\u548c\u547d\u4ee4\u6267\u884c\u7684\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".turbo/run-<task>.log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules/.cache/turbo")," - \u5f88\u5feb\u5c31\u4f1a\u53d8\u5f97 ",(0,r.kt)("strong",{parentName:"li"},"\u975e\u5e38\u5927")),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf TURBO_HASH \u4f9d\u636e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"inputs, package.json \u4e2d\u4f9d\u8d56, \u5185\u90e8\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"dependsOn"),(0,r.kt)("li",{parentName:"ul"},"lockfile"))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u4efb\u52a1\u540d\u5b57",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"//#test")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"turbo run test")," \u5305\u542b root package.json \u7684 test \u4efb\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u5728 pipeline \u4e2d\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," \u8fd9\u5219\u53ea\u8fd0\u884c root \u7684 test \u4efb\u52a1")))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"turbo run build --force             # \u5f3a\u5236 - \u5ffd\u7565\u5b58\u5728\u7f13\u5b58\nturbo run dev --parallel --no-cache # \u4e0d\u7f13\u5b58\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://turborepo.org/schema.json",\n  // hash \u4f1a\u7528\u5230 git \u4fe1\u606f\n  // \u9ed8\u8ba4 origin/master\n  "baseBranch": "origin/main",\n  // \u5168\u5c40\u4f9d\u8d56\n  "globalDependencies": ["Makefile", "package.json", "tsconfig.json", ".env"],\n  "pipeline": {\n    "build": {\n      // \u7f13\u5b58\u5185\u5bb9\n      // \u9ed8\u8ba4 ["dist/**", "build/**"]\n      "outputs": ["dist/**", "lib/**", ".next/**"],\n      // \u7f13\u5b58\u4f9d\u636e\n      // \u9ed8\u8ba4 [] - \u4efb\u610f\u6587\u4ef6\u4fee\u6539\u90fd\u4f1a\u91cd\u65b0\u8fd0\u884c\n      "inputs": ["Makefile", "package.json", "tsconfig.json", "src/**/*.ts", "src/**/*.tsx", "src/**/*.css"],\n      // \u7f13\u5b58\u4f9d\u8d56 ENV\n      "dependsOn": ["^build", "$SOME_ENV_VAR"],\n      // hash-only - \u53ea\u8f93\u51fa hash\n      // new-only - \u53ea\u8f93\u51fa \u65b0\u589e\n      // none - \u4e0d\u8f93\u51fa\n      "outputMode": "full",\n      // \u662f\u5426\u7f13\u5b58\n      "cache": true\n    },\n    "test": {\n      // \u53ea\u7f13\u5b58\u65e5\u5fd7\n      "outputs": [],\n      "dependsOn": ["build"]\n    },\n    "dev": {\n      // dev \u4e0d\u7f13\u5b58\n      "cache": false\n    }\n  },\n  // \u5168\u5c40\u4f9d\u8d56\n  "globalDependencies": ["$GITHUB_TOKEN", "tsconfig.json", ".env.*"]\n}\n')),(0,r.kt)("h2",s({},{id:"turborepo-remote-cache"}),"turborepo-remote-cache"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",{parentName:"blockquote"},"local \u5b58\u50a8\u4f1a\u6dfb\u52a0 /tmp \u524d\u7f00\u5230 STORAGE_PATH ",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/fox1t/turborepo-remote-cache/blob/main/src/plugins/remote-cache/storage/local.ts"}),"src/plugins/remote-cache/storage/local.ts"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker run \\\n  -v $PWD/cache:/cache --env-file=.env \\\n  -p 3000:3000 \\\n  --name turborepo-remote-cache fox1t/turborepo-remote-cache\n\n# npx \u542f\u52a8\n# npx turborepo-remote-cache\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-env"}),"# development\nNODE_ENV=production\nPORT=3000\nTURBO_TOKEN=\nLOG_LEVEL=info\n# s3\nSTORAGE_PROVIDER=local\nSTORAGE_PATH=/cache\nS3_ACCESS_KEY=\nS3_SECRET_KEY=\nS3_REGION=\nS3_ENDPOINT=\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# --api\nturbo run build --token=$TURBO_TOKEN\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json",metastring:'title=".turbo/config.json"',title:'".turbo/config.json"'}),'{\n  "teamId": "team_FcALQN9XEVbeJ1NjTQoS9Wup",\n  "apiUrl": "http://localhost:3000"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/fox1t/turborepo-remote-cache"}),"fox1t/turborepo-remote-cache"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"open-source implementation of the Turborepo custom remote cache server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://turborepo.org/docs/core-concepts/remote-caching"}),"remote-caching"))),(0,r.kt)("h2",s({},{id:"error-hashing-files-could-not-hash-file-package-lockjson"}),"error hashing files: could not hash file package-lock.json"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ece npm \u5207\u6362\u5230\u4e86 pnpm\uff0c\u8fd8\u9700\u8981\u4fee\u6539 package.json \u91cc\u7684 packageManager")))}f.isMDXComponent=!0}}]);