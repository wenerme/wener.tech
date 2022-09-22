"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5688],{49613:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var l=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,b=c["".concat(p,".").concat(k)]||c[k]||u[k]||n;return a?l.createElement(b,i(i({ref:t},o),{},{components:a})):l.createElement(b,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3299:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return u}});var l=a(96600),r=a(27279),n=(a(59496),a(49613)),i=["components"],m={title:"WASM Awesome",tags:["Awesome"]},p="WASM Awesome",s={unversionedId:"web/webassembly-awesome",id:"web/webassembly-awesome",title:"WASM Awesome",description:"- \u63a8\u8350 rust, c, c++, zig",source:"@site/../notes/web/webassembly-awesome.md",sourceDirName:"web",slug:"/web/webassembly-awesome",permalink:"/notes/web/webassembly-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/web/webassembly-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"WASM Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Web FAQ",permalink:"/notes/web/web-faq"},next:{title:"WebComponent Awesome",permalink:"/notes/web/webcomponent-awesome"}},o={},u=[{value:"JS",id:"js",level:2},{value:"Web",id:"web",level:2},{value:"Misc",id:"misc",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"Learn",id:"learn",level:2}],c={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wasm-awesome"},"WASM Awesome"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 rust, c, c++, zig"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350 js \u52a0\u5d4c\u5165\u7c7b\u578b\u7684 engine - duktape"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rustwasm.github.io/book/introduction.html"},"Rust & Wasm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webassembly.org/roadmap/"},"roadmap")),(0,n.kt)("li",{parentName:"ul"},"bytecodealliance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/lucet"},"bytecodealliance/lucet"),"\nSandboxing WebAssembly Compiler.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasmtime"},"bytecodealliance/wasmtime"),"\nJIT-style runtime for WebAssembly",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wasm-micro-runtime"},"bytecodealliance/wasm-micro-runtime"),"\nwasm Micro Runtime",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, C"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wizer"},"bytecodealliance/wizer"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Rust"),(0,n.kt)("li",{parentName:"ul"},"WebAssembly Pre-Initializer"),(0,n.kt)("li",{parentName:"ul"},"\u7a7a\u95f4\u6362\u65f6\u95f4"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytecodealliance/wit-bindgen"},"bytecodealliance/wit-bindgen")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasmerio/wasmer"},"wasmerio/wasmer"),"\nWebAssembly Runtime supporting WASI and Emscripten",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Rust"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasmerio/wasmer-go"},"wasmerio/wasmer-go"),"\nruntime for Go"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aduros/wasm4"},"aduros/wasm4"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Build retro games using WebAssembly"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasm3/wasm3"},"wasm3/wasm3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, C"),(0,n.kt)("li",{parentName:"ul"},"interpreter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suborbital/sat"},"suborbital/sat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"Tiny, blazing fast WebAssembly compute"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28788303"},"HN"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u4f5c\u8005\u9009\u578b\u539f\u56e0"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge"},"WasmEdge/WasmEdge"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, C++"),(0,n.kt)("li",{parentName:"ul"},"WebAssembly runtime for cloud native, edge, and decentralized applications"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/second-state/dapr-wasm"},"second-state/dapr-wasm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/webassembly-dapr-wasmedge/"},"WasmEdge Runtime for Dapr")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webvm.io/"},"https://webvm.io/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/leaningtech/webvm"},"https://github.com/leaningtech/webvm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/leaningtech/cheerpx"},"https://github.com/leaningtech/cheerpx")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zandaqo/iswasmfast"},"zandaqo/iswasmfast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasmx/fizzy"},"wasmx/fizzy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WAVM/WAVM"},"WAVM/WAVM"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WebAssembly Virtual Machine"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ewasm/design"},"ewasm/design"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ethereum flavored WebAssembly"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suborbital/atmo"},"suborbital/atmo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"framework for cloud native WebAssembly"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lunatic-solutions/lunatic"},"lunatic-solutions/lunatic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Erlang-inspired runtime for WebAssembly"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wasmCloud/wasmCloud"},"wasmCloud/wasmCloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deislabs/hippo"},"deislabs/hippo"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WebAssembly PaaS"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/component-model"},"WebAssembly/component-model")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wapm.io/"},"https://wapm.io/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm"},"CosmWasm/cosmwasm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"building smart contracts in Wasm for the Cosmos SDK"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/eos-vm"},"EOSIO/eos-vm"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WebAssembly Backend Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://krustlet.dev/"},"https://krustlet.dev/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/krustlet/krustlet"},"krustlet/krustlet")),(0,n.kt)("li",{parentName:"ul"},"Run WebAssembly workloads in Kubernetes"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://v8.dev/blog/emscripten-standalone-wasm"},"https://v8.dev/blog/emscripten-standalone-wasm"))),(0,n.kt)("h2",{id:"js"},"JS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"duktape"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jerryscript-project/jerryscript"},"jerryscript-project/jerryscript")),(0,n.kt)("li",{parentName:"ul"},"quickjs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ES2020"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/justjake/quickjs-emscripten"},"justjake/quickjs-emscripten")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mbbill/JSC.js"},"mbbill/JSC.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maple3142/wasm-jseval"},"maple3142/wasm-jseval")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'<iframe sandbox="allow-scripts"/>')),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/how-we-built-the-figma-plugin-system/"},"How to build a plugin system on the web and also sleep well at night")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.figma.com/blog/an-update-on-plugin-security/"},"An update on plugin security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bytecodealliance.org/articles/making-javascript-run-fast-on-webassembly"},"Making JavaScript run fast on WebAssembly"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27370138"},"HN")),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 wizer \u9884\u521d\u59cb\u5316"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cretz/go-wasm-bake"},"cretz/go-wasm-bake"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9 Go \u7684 Wasm \u5c31\u884c\u9884\u521d\u59cb\u5316"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/prepack"},"facebook/prepack"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684\u5bf9 js bundle \u5c31\u884c\u9884\u521d\u59cb\u5316"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prepack.io/repl.html"},"repl"))))))))),(0,n.kt)("h2",{id:"web"},"Web"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/slipHQ/run-wasm"},"slipHQ/run-wasm"))),(0,n.kt)("h2",{id:"misc"},"Misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/turbolent/w2c2"},"turbolent/w2c2"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"wasm to c")))),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YT ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/WebAssemblySummit"},"WebAssemblySummit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/modfy/modfy.video"},"modfy/modfy.video")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://radu-matei.com/blog/intro-wasm-components/"},"Introduction to WebAssembly components")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grain-lang.org/"},"grain-lang"))),(0,n.kt)("h2",{id:"learn"},"Learn"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-wasm"},"https://wiki.polkadot.network/docs/learn-wasm"))))}k.isMDXComponent=!0}}]);