"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[22247],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(96600),a=n(27279),l=(n(59496),n(49613)),c=["components"],i={title:"ncc"},o="ncc",u={unversionedId:"web/dev/bundle/ncc",id:"web/dev/bundle/ncc",title:"ncc",description:"- vercel/ncc",source:"@site/../notes/web/dev/bundle/ncc.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/ncc",permalink:"/notes/web/dev/bundle/ncc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/dev/bundle/ncc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"ncc"},sidebar:"docs",previous:{title:"ESBuild",permalink:"/notes/web/dev/bundle/esbuild"},next:{title:"Parcel",permalink:"/notes/web/dev/bundle/parcel"}},p={},s=[{value:"require is not defined",id:"require-is-not-defined",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ncc"},"ncc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/ncc"},"vercel/ncc"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Node.js \u9879\u76ee -> \u5355\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 webpack bundle"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 babel \u8f6c\u8bd1"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/acornjs/acorn"},"acornjs/acorn"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684 JS \u89e3\u6790\u5668"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/nft"},"@vercel/nft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vercel/webpack-asset-relocator-loader"},"@vercel/webpack-asset-relocator-loader"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u4f9d\u8d56\u5206\u6790")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx -y @vercel/ncc build src/server.ts -o dist/ncc --target es2020 -s\n\n# \u76f4\u63a5\u8fd0\u884c - \u53ef\u7528\u4e8e\u6d4b\u8bd5,\u751f\u6210\u5230\u4e34\u65f6\u76ee\u5f55\nnpx -y @vercel/ncc run src/server.ts --target es2020 -s\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"flag"),(0,l.kt)("th",{parentName:"tr",align:null},"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-t"),(0,l.kt)("td",{parentName:"tr",align:null},"transpile-only ts \u53ea\u8f6c\u8bd1\uff0c\u5ffd\u7565\u7c7b\u578b\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-m"),(0,l.kt)("td",{parentName:"tr",align:null},"minify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s"),(0,l.kt)("td",{parentName:"tr",align:null},"source-map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-e"),(0,l.kt)("td",{parentName:"tr",align:null},"external")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--v8-cache"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"require-is-not-defined"},"require is not defined"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u6ca1\u6709 bundle\uff0c\u5bfc\u81f4 esm+cjs \u4f1a\u6709\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 fastify \u662f cjs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c external \u80fd\u907f\u514d\nncc build src/index.ts -m -s --target es2020 -e sqlite3 -e sqlite\n\n# \u5426\u5219\u53ea\u80fd bundle\nnpx esbuild --bundle --outfile=dist/esm/server.js src/server.ts --platform=node --format=esm --charset=utf8 --target=chrome90 --sourcemap --external:{sqlite,pg,pg-hstore}\n\n# rollup\nnpx rollup -e sqlite3,pg,pg-hstore --format es -m inline -o dist/es/server.js -i src/server.ts -p typescript -p node-resolve\n")))}m.isMDXComponent=!0}}]);