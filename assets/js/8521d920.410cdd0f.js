"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15896],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||p;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,l=new Array(p);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<p;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41993:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return h}});var r=t(49613),a=Object.defineProperty,p=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&m(e,t,n[t]);if(i)for(var t of i(n))o.call(n,t)&&m(e,t,n[t]);return e};const u={title:"pnpm"},d="pnpm",k={unversionedId:"web/dev/pnpm",id:"web/dev/pnpm",title:"pnpm",description:"- pnpm",source:"@site/../notes/web/dev/pnpm.md",sourceDirName:"web/dev",slug:"/web/dev/pnpm",permalink:"/notes/web/dev/pnpm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/pnpm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667302770,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"pnpm"},sidebar:"docs",previous:{title:"nx",permalink:"/notes/web/dev/nx"},next:{title:"prettier",permalink:"/notes/web/dev/prettier"}},f={},h=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"package.json",id:"packagejson",level:3},{value:".npmrc",id:"npmrc",level:2},{value:".pnpmfile.cjs",id:"pnpmfilecjs",level:3},{value:"workspace",id:"workspace",level:2},{value:"store server",id:"store-server",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"\u6a21\u677f\u9879\u76ee\u4f9d\u8d56",id:"\u6a21\u677f\u9879\u76ee\u4f9d\u8d56",level:2},{value:"Typescript FAQ",id:"typescript-faq",level:2},{value:"Type error: The inferred type of &#39;trpc&#39; cannot be named without a reference to &#39;react-query&#39;. This is likely not portable. A type annotation is necessary.",id:"type-error-the-inferred-type-of-trpc-cannot-be-named-without-a-reference-to-react-query-this-is-likely-not-portable-a-type-annotation-is-necessary",level:3},{value:"ERR_PNPM_MODIFIED_DEPENDENCY\u2009 Packages in the store have been mutated",id:"err_pnpm_modified_dependency-packages-in-the-store-have-been-mutated",level:2},{value:"EEXIST: file already exists, symlink @next/env",id:"eexist-file-already-exists-symlink-nextenv",level:2}],y={toc:h};function g(e){var n,t=e,{components:a}=t,m=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&o.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=c(c({},y),m),p(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"pnpm"}),"pnpm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm"}),"pnpm"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"since 2017"),(0,r.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u5feb\u3001\u8282\u7701\u7a7a\u95f4"))),(0,r.kt)("li",{parentName:"ul"},"Store - ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm store path"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Windows ~/AppData/Local/pnpm/store"),(0,r.kt)("li",{parentName:"ul"},"macOS ~/Library/pnpm/store"),(0,r.kt)("li",{parentName:"ul"},"Linux ~/.local/share/pnpm/store"),(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4e0b\u865a\u62df Store ./node_modules/.pnpm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hardlink \u5230\u5168\u5c40 store"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/next/symlinked-node-modules-structure"}),"content-addressable storage")))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 workspace \u5f15\u7528 - ",(0,r.kt)("inlineCode",{parentName:"li"},'"button": "workspace:1.0.0",')),(0,r.kt)("li",{parentName:"ul"},".npmrc - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/npmrc"}),"https://pnpm.io/npmrc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"workspace \u8981\u6c42\u5fc5\u987b\u5b58\u5728"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u91c7\u7528"),": next.js, vite, vue3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a yarn 2+/berry \u53d8\u5316\u592a\u5927\uff0c\u65e0\u6cd5\u4f7f\u7528 - \u540c\u65f6 yarn v1 \u5f00\u53d1\u505c\u6ede\uff0c\u5bfc\u81f4\u5927\u91cf\u9879\u76ee\u8fc1\u79fb pnpm"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/benchmarks"}),"https://pnpm.io/benchmarks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory"}),"https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://blog.logrocket.com/javascript-package-managers-compared/"}),"https://blog.logrocket.com/javascript-package-managers-compared/")),(0,r.kt)("li",{parentName:"ul"},"migration stories",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/vercel/next.js/pull/37259"}),"vercel/next.js#37259"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece yarn v1 \u8fc1\u79fb\u5230 pnpm \u5b89\u88c5\u65f6\u95f4\u51cf\u534a"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://divriots.com/blog/switching-to-pnpm"}),"https://divriots.com/blog/switching-to-pnpm"))))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Typescript \u53ef\u80fd\u68c0\u6d4b\u4e0d\u5230\u7c7b\u578b\uff0c\u51fa\u73b0\u7c7b\u578b\u5f02\u5e38 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/29808"}),"TypeScript#29808"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"li"},'"preserveSymlinks": true')))))),(0,r.kt)("admonition",c({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"pnpm monorepo docker support ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/1637"}),"#1637"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"monorepo \u65e0\u6cd5\u5206\u79bb\u5355\u4e2a\u6a21\u5757\u4f9d\u8d56\uff0c\u4f1a\u5305\u542b\u6240\u6709\u4f9d\u8d56"))),(0,r.kt)("li",{parentName:"ul"},"Support workspaces from package.json ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/2255"}),"#2255"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yarn & pnpm \u4f7f\u7528\u4e0d\u540c\u7684\u540d\u8bcd\u63cf\u8ff0"))),(0,r.kt)("li",{parentName:"ul"},"import npm \u9879\u76ee\u65f6\uff0c\u65e7\u7684\u4f9d\u8d56\u653e\u5230 node_modules/.ignored"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm i -g pnpm\n# by corepack\n# corepack prepare pnpm --activate\n\n# \u57fa\u672c\u64cd\u4f5c\u540c npm\n\npnpm install --filter @wener/demo # \u9009\u62e9\u6027\u5b89\u88c5\npnpm env use --global lts         # \u4f7f\u7528 LTS \u7248\u672c Node.js\n\npnpm root # \u8fd4\u56de\u5f53\u524d node_modules \u8def\u5f84\npnpm bin  # \u8fd4\u56de\u5f53\u524d node_modules/.bin \u8def\u5f84\n\n# store \u7ba1\u7406\n# ==========\npnpm store status\n# pnpm store add <package> # \u7b49\u540c\u4e8e pnpm add\npnpm store prune # \u79fb\u9664\u672a\u5f15\u7528\u7684\u5305\npnpm store path  # \u8def\u5f84\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'}),"strict-peer-dependencies = false\nauto-install-peers = true\npublic-hoist-pattern[]=*jest*\n")),(0,r.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"strict-peer-dependencies"),(0,r.kt)("li",{parentName:"ul"},"auto-install-peers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u65f6\u53ef\u4ee5\u5f00\u542f\uff0c\u4e4b\u540e\u5efa\u8bae\u5173\u95ed"),(0,r.kt)("li",{parentName:"ul"},"missing non-optional peer dependencies are automatically installed"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5bfc\u81f4\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/5144#issuecomment-1207261343"}),"https://github.com/pnpm/pnpm/issues/5144#issuecomment-1207261343")))))),(0,r.kt)("li",{parentName:"ul"},"legacy-peer-deps",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NPMv7 \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u6062\u590d\u4e3a NPMv4 - NPMv6 \u884c\u4e3a"),(0,r.kt)("li",{parentName:"ul"},"bypass peerDependency auto-installation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/a/66620869/1870054"}),"https://stackoverflow.com/a/66620869/1870054"))))),(0,r.kt)("h3",c({},{id:"packagejson"}),"package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n  "engines": {\n    "node": ">=16",\n    "pnpm": ">=7"\n  },\n  "dependenciesMeta": {\n    "button": {\n      // \u5f3a\u5236\u6ce8\u5165\uff0c\u800c\u4e0d\u662f\u8f6f\u8fde\u63a5 - \u9002\u7528\u4e8e\u4f9d\u8d56\u57fa\u7840\u5e93\u7248\u672c\u4e0d\u540c\u65f6\n      "injected": true\n    }\n  },\n  "peerDependenciesMeta": {\n    "bar": {\n      // \u5141\u8bb8 peer \u4f9d\u8d56\u4e0d\u5b58\u5728\n      "optional": true\n    }\n  },\n  // \u8986\u76d6 publish \u914d\u7f6e - \u751f\u6210 publish \u7528\u7684 package.json - \u5f00\u53d1\u65f6\u5c31\u53ef\u4ee5 "main": "src/index.ts"\n  "publishConfig": {\n    "main": "lib/index.js",\n    // types \u4e5f\u53ef\u4ee5\n    "typings": "lib/index.d.ts",\n    // bin, exports, module, browser, esnext, es2015, umd:main, typesVersions, cpu, os\n    // \u4fee\u6539 publish \u7684\u57fa\u7840\u9ed8\u8ba4 - \u9ed8\u8ba4\u65f6\u5f53\u524d\u76ee\u5f55\uff0c\u76ee\u5f55\u4e0b\u5305\u542b package.json\n    // "directory": "dist",\n    // chmod +x - \u9ed8\u8ba4\u53ea\u6709 bin \u4e0b\u7684\u53ef\u6267\u884c\n    "executableFiles": ["./dist/shim.js"]\n  },\n\n  "pnpm": {\n    // \u4f9d\u8d56\u8986\u76d6\n    "overrides": {\n      "foo": "^1.0.0", // \u7248\u672c\u4f9d\u8d56\u8986\u76d6\n      "quux": "npm:@myorg/quux@^1.0.0", // \u4f9d\u8d56\u4fee\u6539\n      "bar@^2.1.0": "3.0.0", // \u7248\u672c\u4fee\u6539\n      "qar@1>zoo": "2" // \u95f4\u63a5\u4f9d\u8d56\u7248\u672c\u4fee\u6539\n    },\n    // \u6269\u5c55\u4f9d\u8d56\u7684\u4f9d\u8d56\n    // pnpm \u548c yarn \u7ef4\u62a4\u7684\u6269\u5c55\u5e93\n    // https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        },\n        "optionalDependencies": {},\n        "dependencies": {},\n        "peerDependenciesMeta": {}\n      }\n    },\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"], // \u5982\u679c peer \u4f9d\u8d56\u4e0d\u5b58\u5728\u4e0d\u63d0\u793a\n      "allowedVersions": {"react": "17"} // \u5141\u8bb8 peer \u4f9d\u8d56\u7248\u672c - \u4f4e\u7248\u672c\u5b89\u88c5\u9ad8\u7248\u672c\u4e0d\u62a5\u9519\n    },\n    // \u5ffd\u7565 \u4f9d\u8d56 \u7684\u6784\u5efa\u64cd\u4f5c -  preinstall, install, postinstall\n    "neverBuiltDependencies": ["fsevents", "level"],\n    // \u4e0e neverBuiltDependencies \u76f8\u53cd\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')),(0,r.kt)("h2",c({},{id:"npmrc"}),".npmrc"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="\u63a8\u8350\u914d\u7f6e"',title:'"\u63a8\u8350\u914d\u7f6e"'}),"strict-peer-dependencies = false\nauto-install-peers = true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="\u5168\u90e8\u914d\u7f6e\u9879"',title:'"\u5168\u90e8\u914d\u7f6e\u9879"'}),"hoist=true\n# \u4f9d\u8d56\u63d0\u5347\u5230 node_modules/.pnpm - \u9690\u85cf\u6a21\u5757\u76ee\u5f55\n# \u4f8b\u5982\n# hoist-pattern[]=*eslint*\nhoist-pattern[]=*\n\n# \u4f9d\u8d56\u63d0\u5347\u5230 node_modules/\npublic-hoist-pattern[]=*eslint*\npublic-hoist-pattern[]=*prettier*\n\n# \u5141\u8bb8 node_modules \u5185\u6a21\u5757\u8bbf\u95ee\u672a\u58f0\u660e\u4f9d\u8d56\nshamefully-hoist=false\n\n# Windows ~/AppData/Local/pnpm/store\n# macOS ~/Library/pnpm/store\n# Linux ~/.local/share/pnpm/store\n# store-dir\n\nmodules-dir=node_modules\n# isolated - node_modules/.pnpm\n# hoisted - \u5e73\u5766 node_modules \u7ed3\u6784\uff0c\u65e0 symlink - \u540c npm\n# pnp - \u65e0 node_modules, \u63a8\u8350\u540c\u65f6\u8bbe\u7f6e symlink=false\nnode-linker=isolated\nsymlink=true\nenable-modules-dir=true\n\nvirtual-store-dir=node_modules/.pnpm\n# auto, hardlink, copy, clone\npackage-import-method=auto\n# \u5206\u949f - \u9ed8\u8ba4 7 \u5929\nmodules-cache-max-age=10080\n\n# \u751f\u6210 pnpm-lock.yaml\nlockfile=true\nprefer-frozen-lockfile=true\n\n# Peer Dependency\n# ===============\nauto-install-peers=false\nstrict-peer-dependencies=true\n\n# CLI\n# ===\n# auto, always, never\ncolor=auto\n# no-color\n# debug, info, warn, error\nloglevel=info\nuse-beta-cli=false\n# pnpm i -> pnpm i -r\nrecursive-install=true\nengine-strict=false\n# npm-path\n\n# Build Settings\n# ==============\nchild-concurrency=5\nside-effects-cache=true\nside-effects-cache-readonly=false\nunsafe-perm=false\n\n# Node.js\n# =======\nuse-node-version=\nnode-version=\n# release, rc, nightly, v8-canary\n# node-mirror:<releaseDir>=https://nodejs.org/download/<releaseDir>/\n\n# Misc\n# ====\nuse-running-store-server=false\nsave-prefix=^\ntag=latest\n# <path to node>/pnpm-global\nglobal-dir=\nglobal-bin-dir=\nstate-dir=$XDG_STATE_HOME/pnpm\ncache-dir=$XDG_CACHE_HOME/pnpm\nuse-stderr=false\nupdate-notifier=true\n\n# \u4ee5\u4e0b\u540c npm \u914d\u7f6e\nregistry=https://registry.npmjs.org/\n# <scope>:registry\n# <URL>:_authToken\n# <URL>:tokenHelper\n# <URL>:always-auth\n\n# ca=\n# cafile=\n# cert=\n# key=\n# strict-ssl\n\n# git-shallow-hosts=['github.com', 'gist.github.com', 'gitlab.com', 'bitbucket.com', 'bitbucket.org']\n# local-address\n# https-proxy\n# proxy\n# noproxy\n# maxsockets\n\nnetwork-concurrency=16\nfetch-retries=2\n# fetch-retry-factor,mintimeout,maxtimeout,\n# fetch-tomeout\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/vercel/next.js/blob/canary/.npmrc"}),"https://github.com/vercel/next.js/blob/canary/.npmrc"))),(0,r.kt)("h3",c({},{id:"pnpmfilecjs"}),".pnpmfile.cjs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/pnpmfile"}),"https://pnpm.io/pnpmfile"))),(0,r.kt)("h2",c({},{id:"workspace"}),"workspace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7248\u672c\u5339\u914d\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757 - npm \u5e38\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"*")),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u7248\u672c\u4e0d\u5339\u914d\u5219\u89e3\u6790\u5931\u8d25"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 workspace: \u534f\u8bae\u53ef\u5f3a\u5236\u4f7f\u7528\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c link-workspace-packages \u4e3a false\uff0c\u5219\u53ea\u6709\u4f7f\u7528 worksapce: \u534f\u8bae\u624d\u4f1a link")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'}),"packages:\n  - 'apps/*'\n  - 'packages/*'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://pnpm.io/workspaces"}),"https://pnpm.io/workspaces"))),(0,r.kt)("h2",c({},{id:"store-server"}),"store server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".npmrc \u53ef\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"use-running-store-server=true")," \u4f7f\u7528 store server")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# start stop status\n# --background\n# --network-concurrency\n# --protocol=auto\n# --store-dir=$HOME/.pnpm-store\n# --[no-]lock \u9501\u5b9a\u6587\u4ef6\uff0c\u907f\u514d\u5916\u90e8\u8fdb\u7a0b\u4fee\u6539\n# --ignore-stop-requests\n# --ignore-upload-requests\npnpm server start --port=5813\n")),(0,r.kt)("h2",c({},{id:"dockerfile"}),"Dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-dockerfile"}),'FROM node:16\n\nRUN curl -f https://get.pnpm.io/v7.1.8.js | node - add --global pnpm\n\nCOPY pnpm-lock.yaml ./\n\n# \u4f7f\u7528 fetch \u4f7f docker \u6784\u5efa\u4f9d\u8d56\u66f4\u5c11\n# \u6b63\u5e38 install \u9700\u8981 .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs package.json\nRUN pnpm fetch --prod\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/3114"}),"#3114"))),(0,r.kt)("h2",c({},{id:"\u6a21\u677f\u9879\u76ee\u4f9d\u8d56"}),"\u6a21\u677f\u9879\u76ee\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pnpm init\ncat <<CONF > .npmrc\nstrict-peer-dependencies=true\nauto-install-peers=true\nlegacy-peer-deps=false\nCONF\ncat <<YAML > pnpm-workspace.yaml\npackages:\n  - 'apps/*'\n  - 'packages/*'\nYAML\n\npnpm add -Dw tsx turbo typescript ava esbuild eslint # DevTools\npnpm add -Dw @types/node @types/react # hoist common dependencies\npnpm add -Dw tailwindcss # DevTools\n\nmkdir -p apps/{web,server,playground}\n\ncd apps/web\npnpm init\npnpm add next\npnpm add @wener/reaction @wener/utils\npnpm add react react-dom @headlessui/react react-icons react-hook-form @tanstack/react-query @tanstack/react-table zustand valtio\npnpm add dayjs axios\npnpm add -D tailwindcss daisyui @tanstack/react-query-devtools\npnpm add react-router react-router-dom # SPA\n# pnpm add @trpc/client @trpc/react @trpc/server # tRPC for NextJS\n\nmkdir src/{app,pages,components,styles,libs} -p\ncat <<CSS >src/styles/globals.css\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\nCSS\ncat <<JSX >src/pages/_app.tsx\nimport React from 'react';\nimport type { AppProps } from 'next/app';\nimport '../styles/globals.css';\n\nfunction App({ Component, pageProps }:AppProps) {\n  return <Component {...pageProps} />;\n}\n\nexport default App;\nJSX\ncat <<JSX >src/pages/index.tsx\nexport const Page = ()=>{\n  return <div>Hello</div>\n}\nexport default Page\nJSX\ncd -\n\ncd apps/server\npnpm init\npnpm add fastify\ncd -\n\ncd apps/playground\ncd -\n")),(0,r.kt)("h2",c({},{id:"typescript-faq"}),"Typescript FAQ"),(0,r.kt)("p",null,"\u4e3b\u8981\u662f pnpm symlink \u5f15\u8d77\u95ee\u9898"),(0,r.kt)("h3",c({},{id:"type-error-the-inferred-type-of-trpc-cannot-be-named-without-a-reference-to-react-query-this-is-likely-not-portable-a-type-annotation-is-necessary"}),"Type error: The inferred type of 'trpc' cannot be named without a reference to 'react-query'. This is likely not portable. A type annotation is necessary."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/29808"}),"https://github.com/microsoft/TypeScript/issues/29808")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/42873"}),"https://github.com/microsoft/TypeScript/issues/42873")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/microsoft/TypeScript/issues/47663"}),"https://github.com/microsoft/TypeScript/issues/47663"))),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"err_pnpm_modified_dependency-packages-in-the-store-have-been-mutated"}),"ERR_PNPM_MODIFIED_DEPENDENCY\u2009 Packages in the store have been mutated"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm store status")," \u65f6\u51fa\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pnpm install --force # refetch\n")),(0,r.kt)("h2",c({},{id:"eexist-file-already-exists-symlink-nextenv"}),"EEXIST: file already exists, symlink @next/env"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 nextjs outputStandalone \u65f6\uff0c\u7b2c\u4e8c\u6b21\u6784\u5efa\u51fa\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4e34\u65f6\u89e3\u51b3\u529e\u6cd5 \u6216 \u4e0d\u7528 outputStandalone\n# \u5220\u9664 nextjs \u6240\u5728 moudle \u5373\u53ef\nrm -rf ./node_modules/.pnpm/*\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/pnpm/pnpm/issues/4663"}),"https://github.com/pnpm/pnpm/issues/4663"))))}g.isMDXComponent=!0}}]);