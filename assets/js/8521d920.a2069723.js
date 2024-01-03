/*! For license information please see 8521d920.a2069723.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15896],{7024:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>p,toc:()=>c});var r=s(11527),i=s(47214);const t={title:"pnpm"},l="pnpm",p={id:"web/dev/pnpm",title:"pnpm",description:"- pnpm",source:"@site/../notes/web/dev/pnpm.md",sourceDirName:"web/dev",slug:"/web/dev/pnpm",permalink:"/notes/web/dev/pnpm",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/pnpm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1704307832,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"pnpm"},sidebar:"docs",previous:{title:"nx",permalink:"/notes/web/dev/nx"},next:{title:"prettier",permalink:"/notes/web/dev/prettier"}},o={},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"package.json",id:"packagejson",level:3},{value:".npmrc",id:"npmrc",level:2},{value:".pnpmfile.cjs",id:"pnpmfilecjs",level:3},{value:"workspace",id:"workspace",level:2},{value:"store server",id:"store-server",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Typescript FAQ",id:"typescript-faq",level:2},{value:"Type error: The inferred type of &#39;trpc&#39; cannot be named without a reference to &#39;react-query&#39;. This is likely not portable. A type annotation is necessary.",id:"type-error-the-inferred-type-of-trpc-cannot-be-named-without-a-reference-to-react-query-this-is-likely-not-portable-a-type-annotation-is-necessary",level:3},{value:"ERR_PNPM_MODIFIED_DEPENDENCY\u2009 Packages in the store have been mutated",id:"err_pnpm_modified_dependency-packages-in-the-store-have-been-mutated",level:2},{value:"EEXIST: file already exists, symlink @next/env",id:"eexist-file-already-exists-symlink-nextenv",level:2},{value:"node_modules \u76f8\u540c\u5305\u5305\u542b\u591a\u4e2a\u76ee\u5f55",id:"node_modules-\u76f8\u540c\u5305\u5305\u542b\u591a\u4e2a\u76ee\u5f55",level:2},{value:"peer deps",id:"peer-deps",level:2},{value:"npm ci",id:"npm-ci",level:2},{value:"\u5e73\u53f0\u53c2\u6570",id:"\u5e73\u53f0\u53c2\u6570",level:2},{value:"Cannot read properties of undefined (reading &#39;startsWith&#39;)",id:"cannot-read-properties-of-undefined-reading-startswith",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pnpm",children:"pnpm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm",children:"pnpm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"since 2017"}),"\n",(0,r.jsx)(n.li,{children:"\u901f\u5ea6\u5feb\u3001\u8282\u7701\u7a7a\u95f4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Store - ",(0,r.jsx)(n.code,{children:"pnpm store path"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Windows ~/AppData/Local/pnpm/store"}),"\n",(0,r.jsx)(n.li,{children:"macOS ~/Library/pnpm/store"}),"\n",(0,r.jsx)(n.li,{children:"Linux ~/.local/share/pnpm/store"}),"\n",(0,r.jsxs)(n.li,{children:["\u9879\u76ee\u4e0b\u865a\u62df Store ./node_modules/.pnpm\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"hardlink \u5230\u5168\u5c40 store"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:".pnpm-store"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/next/symlinked-node-modules-structure",children:"content-addressable storage"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301 workspace \u5f15\u7528 - ",(0,r.jsx)(n.code,{children:'"button": "workspace:1.0.0",'})]}),"\n",(0,r.jsxs)(n.li,{children:[".npmrc - ",(0,r.jsx)(n.a,{href:"https://pnpm.io/npmrc",children:"https://pnpm.io/npmrc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"workspace \u8981\u6c42\u5fc5\u987b\u5b58\u5728"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u91c7\u7528"}),": next.js, vite, vue3\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u56e0\u4e3a yarn 2+/berry \u53d8\u5316\u592a\u5927\uff0c\u65e0\u6cd5\u4f7f\u7528 - \u540c\u65f6 yarn v1 \u5f00\u53d1\u505c\u6ede\uff0c\u5bfc\u81f4\u5927\u91cf\u9879\u76ee\u8fc1\u79fb pnpm"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/benchmarks",children:"https://pnpm.io/benchmarks"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory",children:"https://pnpm.io/motivation#creating-a-non-flat-node_modules-directory"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.logrocket.com/javascript-package-managers-compared/",children:"https://blog.logrocket.com/javascript-package-managers-compared/"})}),"\n",(0,r.jsxs)(n.li,{children:["migration stories\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/vercel/next.js/pull/37259",children:"vercel/next.js#37259"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ece yarn v1 \u8fc1\u79fb\u5230 pnpm \u5b89\u88c5\u65f6\u95f4\u51cf\u534a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://divriots.com/blog/switching-to-pnpm",children:"https://divriots.com/blog/switching-to-pnpm"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Typescript \u53ef\u80fd\u68c0\u6d4b\u4e0d\u5230\u7c7b\u578b\uff0c\u51fa\u73b0\u7c7b\u578b\u5f02\u5e38 ",(0,r.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/issues/29808",children:"TypeScript#29808"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5c1d\u8bd5 ",(0,r.jsx)(n.code,{children:'"preserveSymlinks": true'})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["pnpm store path\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ed8\u8ba4\u4f1a\u5728\u76f8\u540c\u78c1\u76d8 - \u56e0\u4e3a hardlink \u9700\u8981\u76f8\u540c\u78c1\u76d8"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["pnpm monorepo docker support ",(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/1637",children:"#1637"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"monorepo \u65e0\u6cd5\u5206\u79bb\u5355\u4e2a\u6a21\u5757\u4f9d\u8d56\uff0c\u4f1a\u5305\u542b\u6240\u6709\u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Support workspaces from package.json ",(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/2255",children:"#2255"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"yarn & pnpm \u4f7f\u7528\u4e0d\u540c\u7684\u540d\u8bcd\u63cf\u8ff0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"import npm \u9879\u76ee\u65f6\uff0c\u65e7\u7684\u4f9d\u8d56\u653e\u5230 node_modules/.ignored"}),"\n"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i -g pnpm\n# by corepack\n# corepack prepare pnpm --activate\n\n# \u57fa\u672c\u64cd\u4f5c\u540c npm\n\npnpm install --filter @wener/demo # \u9009\u62e9\u6027\u5b89\u88c5\npnpm env use --global lts         # \u4f7f\u7528 LTS \u7248\u672c Node.js\n\npnpm root # \u8fd4\u56de\u5f53\u524d node_modules \u8def\u5f84\npnpm bin  # \u8fd4\u56de\u5f53\u524d node_modules/.bin \u8def\u5f84\n\n# store \u7ba1\u7406\n# ==========\npnpm store status\n# pnpm store add <package> # \u7b49\u540c\u4e8e pnpm add\npnpm store prune # \u79fb\u9664\u672a\u5f15\u7528\u7684\u5305\npnpm store path  # \u8def\u5f84\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title=".npmrc"',children:"strict-peer-dependencies = false\nauto-install-peers = true\npublic-hoist-pattern[]=*jest*\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"~/Library/pnpm"}),"\n",(0,r.jsx)(n.li,{children:"NODE_PATH=$HOME/Library/pnpm/global/5/.pnpm/node_modules"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"strict-peer-dependencies"}),"\n",(0,r.jsxs)(n.li,{children:["auto-install-peers\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8fc1\u79fb\u65f6\u53ef\u4ee5\u5f00\u542f\uff0c\u4e4b\u540e\u5efa\u8bae\u5173\u95ed"}),"\n",(0,r.jsx)(n.li,{children:"missing non-optional peer dependencies are automatically installed"}),"\n",(0,r.jsxs)(n.li,{children:["\u53ef\u80fd\u5bfc\u81f4\u95ee\u9898\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/5144#issuecomment-1207261343",children:"https://github.com/pnpm/pnpm/issues/5144#issuecomment-1207261343"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["legacy-peer-deps\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NPMv7 \u914d\u7f6e"}),"\n",(0,r.jsx)(n.li,{children:"\u6062\u590d\u4e3a NPMv4 - NPMv6 \u884c\u4e3a"}),"\n",(0,r.jsx)(n.li,{children:"bypass peerDependency auto-installation"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/a/66620869/1870054",children:"https://stackoverflow.com/a/66620869/1870054"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"packagejson",children:"package.json"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "engines": {\n    "node": ">=16",\n    "pnpm": ">=7"\n  },\n  "dependenciesMeta": {\n    "button": {\n      // \u5f3a\u5236\u6ce8\u5165\uff0c\u800c\u4e0d\u662f\u8f6f\u8fde\u63a5 - \u9002\u7528\u4e8e\u4f9d\u8d56\u57fa\u7840\u5e93\u7248\u672c\u4e0d\u540c\u65f6\n      "injected": true\n    }\n  },\n  "peerDependenciesMeta": {\n    "bar": {\n      // \u5141\u8bb8 peer \u4f9d\u8d56\u4e0d\u5b58\u5728\n      "optional": true\n    }\n  },\n  // \u8986\u76d6 publish \u914d\u7f6e - \u751f\u6210 publish \u7528\u7684 package.json - \u5f00\u53d1\u65f6\u5c31\u53ef\u4ee5 "main": "src/index.ts"\n  "publishConfig": {\n    "main": "lib/index.js",\n    // types \u4e5f\u53ef\u4ee5\n    "typings": "lib/index.d.ts",\n    // bin, exports, module, browser, esnext, es2015, umd:main, typesVersions, cpu, os\n    // \u4fee\u6539 publish \u7684\u57fa\u7840\u9ed8\u8ba4 - \u9ed8\u8ba4\u65f6\u5f53\u524d\u76ee\u5f55\uff0c\u76ee\u5f55\u4e0b\u5305\u542b package.json\n    // "directory": "dist",\n    // chmod +x - \u9ed8\u8ba4\u53ea\u6709 bin \u4e0b\u7684\u53ef\u6267\u884c\n    "executableFiles": ["./dist/shim.js"]\n  },\n\n  "pnpm": {\n    // \u4f9d\u8d56\u8986\u76d6\n    "overrides": {\n      "foo": "^1.0.0", // \u7248\u672c\u4f9d\u8d56\u8986\u76d6\n      "quux": "npm:@myorg/quux@^1.0.0", // \u4f9d\u8d56\u4fee\u6539\n      "bar@^2.1.0": "3.0.0", // \u7248\u672c\u4fee\u6539\n      "qar@1>zoo": "2" // \u95f4\u63a5\u4f9d\u8d56\u7248\u672c\u4fee\u6539\n    },\n    // \u6269\u5c55\u4f9d\u8d56\u7684\u4f9d\u8d56\n    // pnpm \u548c yarn \u7ef4\u62a4\u7684\u6269\u5c55\u5e93\n    // https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        },\n        "optionalDependencies": {},\n        "dependencies": {},\n        "peerDependenciesMeta": {}\n      }\n    },\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"], // \u5982\u679c peer \u4f9d\u8d56\u4e0d\u5b58\u5728\u4e0d\u63d0\u793a\n      "allowedVersions": { "react": "17" } // \u5141\u8bb8 peer \u4f9d\u8d56\u7248\u672c - \u4f4e\u7248\u672c\u5b89\u88c5\u9ad8\u7248\u672c\u4e0d\u62a5\u9519\n    },\n    // \u5ffd\u7565 \u4f9d\u8d56 \u7684\u6784\u5efa\u64cd\u4f5c -  preinstall, install, postinstall\n    "neverBuiltDependencies": ["fsevents", "level"],\n    // \u4e0e neverBuiltDependencies \u76f8\u53cd\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"npmrc",children:".npmrc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="\u63a8\u8350\u914d\u7f6e"',children:"strict-peer-dependencies = false\nauto-install-peers = true\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",metastring:'title="\u5168\u90e8\u914d\u7f6e\u9879"',children:"hoist=true\n# \u4f9d\u8d56\u63d0\u5347\u5230 node_modules/.pnpm - \u9690\u85cf\u6a21\u5757\u76ee\u5f55\n# \u4f8b\u5982\n# hoist-pattern[]=*eslint*\nhoist-pattern[]=*\n\n# \u4f9d\u8d56\u63d0\u5347\u5230 node_modules/\npublic-hoist-pattern[]=*eslint*\npublic-hoist-pattern[]=*prettier*\n\n# \u5141\u8bb8 node_modules \u5185\u6a21\u5757\u8bbf\u95ee\u672a\u58f0\u660e\u4f9d\u8d56\nshamefully-hoist=false\n\n# Windows ~/AppData/Local/pnpm/store\n# macOS ~/Library/pnpm/store\n# Linux ~/.local/share/pnpm/store\n# store-dir\n\nmodules-dir=node_modules\n# isolated - node_modules/.pnpm\n# hoisted - \u5e73\u5766 node_modules \u7ed3\u6784\uff0c\u65e0 symlink - \u540c npm\n# pnp - \u65e0 node_modules, \u63a8\u8350\u540c\u65f6\u8bbe\u7f6e symlink=false\nnode-linker=isolated\nsymlink=true\nenable-modules-dir=true\n\nvirtual-store-dir=node_modules/.pnpm\n# auto, hardlink, copy, clone\npackage-import-method=auto\n# \u5206\u949f - \u9ed8\u8ba4 7 \u5929\nmodules-cache-max-age=10080\n\n# \u751f\u6210 pnpm-lock.yaml\nlockfile=true\nprefer-frozen-lockfile=true\n\n\n# highest, time-based, lowest-direct\n# time-based \u9700\u8981 registry-supports-time-field\n# https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#full-metadata-format\nresolution-mode=highest\n# Verdaccio v5.15.1+\nregistry-supports-time-field=false\n\n\n# symlink \u5230\u6839\u76ee\u5f55 node_modules \u540e\u5c31\u4e0d symlink \u5230\u5b50\u76ee\u5f55\ndedupe-direct-deps=false\n\n\n\n\n# true if node-linker=hoisted\n# node_modules/.bin\nprefer-symlinked-executables=\nverify-store-integrity=true\n\n# https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts\nignore-compatibility-db=false\n# \u8bbe\u7f6e NODE_PATH\nextend-node-path=true\n\n# Peer Dependency\n# ===============\n# \u5b89\u88c5 non-optional peer dependencies\nauto-install-peers=false\nstrict-peer-dependencies=true\ndedupe-peer-dependents=true\nstrict-peer-dependencies=false\nresolve-peers-from-workspace-root=true\n\n# CLI\n# ===\n# auto, always, never\ncolor=auto\n# no-color\n# debug, info, warn, error\nloglevel=info\nuse-beta-cli=false\n# pnpm i -> pnpm i -r\nrecursive-install=true\nengine-strict=false\n# npm-path\n\n# Build Settings\n# ==============\nchild-concurrency=5\nside-effects-cache=true\nside-effects-cache-readonly=false\nunsafe-perm=false\n\n# Node.js\n# =======\nuse-node-version=\nnode-version=\n# release, rc, nightly, v8-canary\n# node-mirror:<releaseDir>=https://nodejs.org/download/<releaseDir>/\n\n# Misc\n# ====\nuse-running-store-server=false\nsave-prefix=^\ntag=latest\n# <path to node>/pnpm-global\nglobal-dir=\nglobal-bin-dir=\nstate-dir=$XDG_STATE_HOME/pnpm\ncache-dir=$XDG_CACHE_HOME/pnpm\nuse-stderr=false\nupdate-notifier=true\n\n# \u4ee5\u4e0b\u540c npm \u914d\u7f6e\nregistry=https://registry.npmjs.org/\n# <scope>:registry\n# <URL>:_authToken\n# <URL>:tokenHelper\n# <URL>:always-auth\n\n# ca=\n# cafile=\n# cert=\n# key=\n# strict-ssl\n\n# git-shallow-hosts=['github.com', 'gist.github.com', 'gitlab.com', 'bitbucket.com', 'bitbucket.org']\n# local-address\n# https-proxy\n# proxy\n# noproxy\n# maxsockets\n\nnetwork-concurrency=16\nfetch-retries=2\n# fetch-retry-factor,mintimeout,maxtimeout,\n# fetch-tomeout\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/vercel/next.js/blob/canary/.npmrc",children:"https://github.com/vercel/next.js/blob/canary/.npmrc"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"pnpmfilecjs",children:".pnpmfile.cjs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/pnpmfile",children:"https://pnpm.io/pnpmfile"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"workspace",children:"workspace"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u7248\u672c\u5339\u914d\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757 - npm \u5e38\u7528 ",(0,r.jsx)(n.code,{children:"*"})]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6307\u5b9a\u7248\u672c\u4e0d\u5339\u914d\u5219\u89e3\u6790\u5931\u8d25"}),"\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 workspace: \u534f\u8bae\u53ef\u5f3a\u5236\u4f7f\u7528\u5de5\u4f5c\u7a7a\u95f4\u6a21\u5757\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c link-workspace-packages \u4e3a false\uff0c\u5219\u53ea\u6709\u4f7f\u7528 worksapce: \u534f\u8bae\u624d\u4f1a link"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',children:"packages:\n  - 'apps/*'\n  - 'packages/*'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/workspaces",children:"https://pnpm.io/workspaces"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"store-server",children:"store server"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[".npmrc \u53ef\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"use-running-store-server=true"})," \u4f7f\u7528 store server"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# start stop status\n# --background\n# --network-concurrency\n# --protocol=auto\n# --store-dir=$HOME/.pnpm-store\n# --[no-]lock \u9501\u5b9a\u6587\u4ef6\uff0c\u907f\u514d\u5916\u90e8\u8fdb\u7a0b\u4fee\u6539\n# --ignore-stop-requests\n# --ignore-upload-requests\npnpm server start --port=5813\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:16\n\nRUN curl -f https://get.pnpm.io/v7.1.8.js | node - add --global pnpm\n\nCOPY pnpm-lock.yaml ./\n\n# \u4f7f\u7528 fetch \u4f7f docker \u6784\u5efa\u4f9d\u8d56\u66f4\u5c11\n# \u6b63\u5e38 install \u9700\u8981 .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs package.json\nRUN pnpm fetch --prod\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/3114",children:"#3114"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript-faq",children:"Typescript FAQ"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u662f pnpm symlink \u5f15\u8d77\u95ee\u9898"}),"\n",(0,r.jsx)(n.h3,{id:"type-error-the-inferred-type-of-trpc-cannot-be-named-without-a-reference-to-react-query-this-is-likely-not-portable-a-type-annotation-is-necessary",children:"Type error: The inferred type of 'trpc' cannot be named without a reference to 'react-query'. This is likely not portable. A type annotation is necessary."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/issues/29808",children:"https://github.com/microsoft/TypeScript/issues/29808"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/issues/42873",children:"https://github.com/microsoft/TypeScript/issues/42873"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/issues/47663",children:"https://github.com/microsoft/TypeScript/issues/47663"})}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"err_pnpm_modified_dependency-packages-in-the-store-have-been-mutated",children:"ERR_PNPM_MODIFIED_DEPENDENCY\u2009 Packages in the store have been mutated"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pnpm store status"})," \u65f6\u51fa\u73b0"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install --force # refetch\n"})}),"\n",(0,r.jsx)(n.h2,{id:"eexist-file-already-exists-symlink-nextenv",children:"EEXIST: file already exists, symlink @next/env"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528 nextjs outputStandalone \u65f6\uff0c\u7b2c\u4e8c\u6b21\u6784\u5efa\u51fa\u73b0\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4e34\u65f6\u89e3\u51b3\u529e\u6cd5 \u6216 \u4e0d\u7528 outputStandalone\n# \u5220\u9664 nextjs \u6240\u5728 moudle \u5373\u53ef\nrm -rf ./node_modules/.pnpm/*\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/4663",children:"https://github.com/pnpm/pnpm/issues/4663"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"node_modules-\u76f8\u540c\u5305\u5305\u542b\u591a\u4e2a\u76ee\u5f55",children:"node_modules \u76f8\u540c\u5305\u5305\u542b\u591a\u4e2a\u76ee\u5f55"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u540c\u7684 peer deps \u4f1a\u521b\u5efa\u76ee\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7\u5728 root package.json \u4e2d\u6dfb\u52a0 pnpm.overrides \u6765\u89e3\u51b3 - \u5168\u5c40\u7edf\u4e00\u7248\u672c"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/5807",children:"https://github.com/pnpm/pnpm/issues/5807"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/how-peers-are-resolved",children:"https://pnpm.io/how-peers-are-resolved"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"grep '^\\s*/' pnpm-lock.yaml | sort -u | tr -d ' '\n\ngrep '^\\s*/' pnpm-lock.yaml | sort -u | tr -d ' ' | grep -E '[0-9.]+_' -C 1\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["e.g.\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@nestjs/platform-fastify -> fastify@4.15.0"}),"\n",(0,r.jsx)(n.li,{children:"fastify@4.17.0"}),"\n",(0,r.jsx)(n.li,{children:"\u4f1a\u5bfc\u81f4\u4e24\u4efd fastify - \u5bfc\u81f4\u7248\u672c\u4e0d\u5339\u914d"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5e26\u5168\u5c40\u72b6\u6001\u7684\u4e0d\u80fd\u6709\u591a\u4e2a\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@mikro-orm/postgresql"}),"\n",(0,r.jsx)(n.li,{children:"@mikro-orm/core"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4ee5\u524d\u5168\u5c40\u5339\u914d\u7684\u4e0d\u80fd\u6709\u591a\u4e2a\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 nestjs \u9700\u8981\u5339\u914d\u4f9d\u8d56"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm tsx ./dup.ts\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="dup.ts"',children:"import fs from 'node:fs';\n\nconst deps = fs\n  .readFileSync('./pnpm-lock.yaml', 'utf8')\n  .split('\\n')\n  .filter((v) => /^\\s*[/]/.test(v))\n  .map((v) => v.trim())\n  .map((v) => {\n    const { name, version, spec } =\n      v.match(/^\\/(?<name>(@[^\\/]+\\/)?[^@]+)@(?<version>[^:(]+)(\\((?<spec>.*?)\\))?:$/)?.groups || {};\n    return { name, version, spec };\n  });\n\nlet dups: Record<string, { name: string; version: string; spec: string }[]> = {};\nfor (const dep of deps) {\n  if (!dep) continue;\n  const { name, version, spec } = dep;\n  if (!dups[name]) dups[name] = [];\n  dups[name].push({ name, version, spec });\n}\n\ndups = Object.fromEntries(Object.entries(dups).filter(([, v]) => v.length > 1));\n\nconsole.log(dups);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"peer-deps",children:"peer deps"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx install-peerdeps --pnpm <your-package>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"npm-ci",children:"npm ci"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm i --frozen-lockfile\nCI=true pnpm i\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CI \u68c0\u6d4b\u903b\u8f91 ",(0,r.jsx)(n.a,{href:"https://github.com/watson/ci-info/blob/20fae89d2bdeb0e5dd70e6a9e8d2647764e6ff04/index.js#L56-L69",children:"https://github.com/watson/ci-info/blob/20fae89d2bdeb0e5dd70e6a9e8d2647764e6ff04/index.js#L56-L69"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5e73\u53f0\u53c2\u6570",children:"\u5e73\u53f0\u53c2\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install --config.platform=linux --config.architecture=x64\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/5965",children:"https://github.com/pnpm/pnpm/issues/5965"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cannot-read-properties-of-undefined-reading-startswith",children:"Cannot read properties of undefined (reading 'startsWith')"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var r=s(50959),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,t={},c=null,a=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:a,props:t,_owner:p.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>p,a:()=>l});var r=s(50959);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);