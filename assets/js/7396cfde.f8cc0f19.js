"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27139],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={title:"ESBuild"},p=void 0,s={unversionedId:"web/dev/bundle/esbuild",id:"web/dev/bundle/esbuild",title:"ESBuild",description:"- evanw/esbuild",source:"@site/notes/web/dev/bundle/esbuild.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/esbuild",permalink:"/notes/web/dev/bundle/esbuild",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/dev/bundle/esbuild.md",tags:[],version:"current",frontMatter:{title:"ESBuild"},sidebar:"docs",previous:{title:"bun",permalink:"/notes/web/dev/bun"},next:{title:"Parcel",permalink:"/notes/web/dev/bundle/parcel"}},o={},m=[{value:"\u53ea bundle \u5185\u90e8\u6587\u4ef6",id:"\u53ea-bundle-\u5185\u90e8\u6587\u4ef6",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Spliting",id:"spliting",level:2}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild"},"evanw/esbuild"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Go"),(0,l.kt)("li",{parentName:"ul"},"bundler & minifier"))),(0,l.kt)("li",{parentName:"ul"},"used by Vite, Snowpack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/faq/#upcoming-roadmap"},"roadmap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/"},"https://esbuild.github.io/api/"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6765 Bundle ESM"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6765 Dev \u65f6\u672c\u5730\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u751f\u4ea7 Rollup - Vite"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 iife, esm, cjs"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"ES5+"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u4ee3\u7801\u5207\u5206"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 HTML, CSS"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 TLA - WIP, iife",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--banner:js='(async () => {' --footer:js='})()'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/253"},"#253")))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 systemjs, amd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/192"},"#192")))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 umd - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/507"},"#507")),(0,l.kt)("li",{parentName:"ul"},"tsconfig.paths \u4e0d bundled \u65f6\u4e0d\u4f1a\u5904\u7406 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/394"},"#394"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5199\u5e93\u53ea\u80fd\u7528\u76f8\u5bf9\u8def\u5f84"))),(0,l.kt)("li",{parentName:"ul"},"Support dynamic imports ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/700"},"#700"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"dynamic import ",(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a")," \u88ab bundle"))),(0,l.kt)("li",{parentName:"ul"},"Support jsx automatic runtime ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/evanw/esbuild/issues/334"},"#334"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5fc5\u987b ",(0,l.kt)("inlineCode",{parentName:"li"},"import React"),", \u9700\u8981\u8c03\u6574 lint \u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"Bundle \u53ef\u8003\u8651\u4e00\u6b21 inject ",(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/content-types/#jsx"},"https://esbuild.github.io/content-types/#jsx")),(0,l.kt)("li",{parentName:"ul"},"eslint ",(0,l.kt)("inlineCode",{parentName:"li"},"'react/react-in-jsx-scope': 'error'")))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"watch \u4f7f\u7528 polling \u5b9e\u73b0 - \u65e0\u4efb\u4f55\u64cd\u4f5c\u4e5f\u4f1a\u6d88\u8017\u4e00\u70b9 CPU"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"esbuild example.js --outfile=out.js\nesbuild --bundle main.ts --outdir=dist --minify --sourcemap\n\nesbuild src/modules/*/{index.tsx,manifest.json} --serve=8000 --splitting --outdir=out --format=esm --bundle --charset=utf8 --target=chrome90 --sourcemap --minify\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bundle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u6240\u6709\u4f9d\u8d56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--loader:.js=jsx"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8 js \u5305\u542b jsx \u8bed\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--define:DEBUG=true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66ff\u4ee3 DEBUG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--platform=browser,node,neutral"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 browser")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--external:@strapi"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f5c\u4e3a\u5916\u90e8\u4f9d\u8d56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--splitting"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62c6\u5206 chunk - \u62bd\u53d6\u516c\u5171\u90e8\u5206")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--charset=utf8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u907f\u514d\u7f16\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--target"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--sourcemap=linked"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--servedir <dir>")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--minify",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"--minify-whitespace"),(0,l.kt)("li",{parentName:"ul"},"--minify-identifiers"),(0,l.kt)("li",{parentName:"ul"},"--minify-syntax - \u79fb\u9664 if(false) \u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/#minify-considerations"},"Considerations")))),(0,l.kt)("li",{parentName:"ul"},"--external:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/assets/*.png")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@foo/bar")," \u9690\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"@foo/bar/*")))),(0,l.kt)("li",{parentName:"ul"},"--target - chrome, edge, firefox, hermes, ie, ios, node, opera, rhino, safari"),(0,l.kt)("li",{parentName:"ul"},"--sourcemap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"linked - ",(0,l.kt)("inlineCode",{parentName:"li"},"//# sourceMappingURL=")),(0,l.kt)("li",{parentName:"ul"},"external - \u65e0 sourceMappingURL"),(0,l.kt)("li",{parentName:"ul"},"inline"),(0,l.kt)("li",{parentName:"ul"},"both"))),(0,l.kt)("li",{parentName:"ul"},"--servedir",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u5408 script \u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'<script src="js/app.js"><\/script>'))))),(0,l.kt)("h2",{id:"\u53ea-bundle-\u5185\u90e8\u6587\u4ef6"},"\u53ea bundle \u5185\u90e8\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="build.cjs"',title:'"build.cjs"'},"const path = require('path');\nconst pkg = require(path.resolve('./package.json'));\n\nconst external = [\n  ...Object.keys(pkg.dependencies || {}),\n  ...Object.keys(pkg.peerDependencies || {}),\n  'react-is',\n  'shallowequal',\n  'hoist-non-react-statics',\n].sort();\n\nconsole.log(`externals`, external);\n\nrequire('esbuild').buildSync({\n  entryPoints: ['admin/src/components/Wysiwyg/index.js'],\n  loader: {'.js': 'jsx'},\n  format: 'esm',\n  bundle: true,\n  minify: false,\n  sourcemap: false,\n  target: ['esnext'],\n  outfile: 'dist/Wysiwyg.esm.js',\n  external,\n  logLevel: 'info',\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"grep '^// ' ./dist/Wysiwyg.esm.js                     # bundled\ngrep '^// ' ./dist/Wysiwyg.esm.js | grep node_modules # bundled externals\n")),(0,l.kt)("h2",{id:"plugins"},"Plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/esbuild/community-plugins"},"https://github.com/esbuild/community-plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/plugins"},"https://esbuild.github.io/plugins"))),(0,l.kt)("h2",{id:"spliting"},"Spliting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bd5\u9a8c\u9636\u6bb5"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u591a\u4e2a entrypoint \u7684 common \u90e8\u5206"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/#splitting"},"https://esbuild.github.io/api/#splitting"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"esbuild home.ts about.ts --bundle --splitting --outdir=out --format=esm\n")))}k.isMDXComponent=!0}}]);