"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18886],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,N=k["".concat(o,".").concat(c)]||k[c]||m[c]||r;return n?l.createElement(N,i(i({ref:t},s),{},{components:n})):l.createElement(N,i({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var l=n(96600),a=n(27279),r=(n(59496),n(49613)),i=["components"],p={title:"svelte"},o=void 0,u={unversionedId:"web/framework/svelte",id:"web/framework/svelte",title:"svelte",description:"- sveltejs/svelte",source:"@site/notes/web/framework/svelte.md",sourceDirName:"web/framework",slug:"/web/framework/svelte",permalink:"/notes/web/framework/svelte",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/svelte.md",tags:[],version:"current",frontMatter:{title:"svelte"},sidebar:"docs",previous:{title:"stencil",permalink:"/notes/web/framework/stencil"},next:{title:"tauri",permalink:"/notes/web/framework/tauri"}},s={},m=[{value:"Rollup",id:"rollup",level:2},{value:"typescript",id:"typescript",level:2},{value:"@tsconfig/svelte",id:"tsconfigsvelte",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2}],k={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/svelte"},"sveltejs/svelte"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u3001\u975e VDOM"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u70b9\u50cf React+Vue \u7684\u7ed3\u5408\u4f53"),(0,r.kt)("li",{parentName:"ul"},"\u65e0 Runtime - \u65e0\u4f9d\u8d56",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bundle \u540e 11k - \u5df2\u5305\u542b\u57fa\u7840 svelte \u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"min \u540e 3k"),(0,r.kt)("li",{parentName:"ul"},"svelte/internal \u53ef\u4ee5\u4f5c\u4e3a\u5916\u90e8\u4f9d\u8d56 - bundle - 9k, min -2k"))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b Vue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5c5e\u6027\u7ed1\u5b9a\u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b React",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b JSX \u8bed\u6cd5"))),(0,r.kt)("li",{parentName:"ul"},"compiler \u80fd\u529b\u975e\u5e38\u5f3a - \u5927\u90e8\u5206 svelte \u7684\u80fd\u529b\u662f\u7f16\u8bd1\u5668\u5e95\u5c42\u652f\u6301\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4ee3\u7801\u987a\u5e8f\u4e0d\u4e00\u5b9a\u662f\u6267\u884c\u7684\u4ee3\u7801\u987a\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u76f4\u89c2"))),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u72b6\u6001\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e motion \u5904\u7406 - tweend, spring"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u8f6c\u6362\u5904\u7406 - fade, fly, slide, crossfade"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u52a8\u753b - flip"),(0,r.kt)("li",{parentName:"ul"},"CSS \u6837\u5f0f\u96c6\u6210\u5ea6\u5f88\u9ad8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$:")," label \u4f1a watch \u8be5\u8bed\u53e5\u7528\u5230\u7684\u53d8\u91cf - \u53d8\u5316\u4f1a\u4ece\u65b0\u6267\u884c - reactive - \u6838\u5fc3\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 context \u6982\u5ff5 - ",(0,r.kt)("inlineCode",{parentName:"li"},"setContext(key,{})"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"getContext(key)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u975e reactive - \u53ef\u4ee5\u5305\u542b store \u6765\u5b9e\u73b0"))),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"export let prop")," \u66b4\u9732\u7ec4\u4ef6\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"sveltejs/kit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c NextJS \u4e4b\u4e8e React"),(0,r.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u57fa\u4e8e Vite"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/matyunya/smelte"},"matyunya/smelte"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"material components + Tailwind CSS"))))),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u6210",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"webstorm \u6709 svelte \u63d2\u4ef6")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  $: name = 'world';\n<\/script>\n\n<input bind:value=\"{name}\" />\n<h1>Hello {name}!</h1>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import App from './index.svelte';\n\n// \u6302\u8f7d\u5230 Dom\nnew App({\n  target: document.body,\n  props: {\n    name: 'Wener',\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# typescript check\nnpx svelte-check\n")),(0,r.kt)("h2",{id:"rollup"},"Rollup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D svelte rollup-plugin-svelte svelte-preprocess rollup rollup-plugin-terser @rollup/plugin-{typescript,node-resolve,commonjs}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rollup.config.ts"',title:'"rollup.config.ts"'},"import svelte from 'rollup-plugin-svelte';\nimport resolve from '@rollup/plugin-node-resolve';\nimport typescript from '@rollup/plugin-typescript';\nimport sveltePreprocess from 'svelte-preprocess';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nexport default {\n  input: 'src/main.ts',\n  output: [\n    {\n      file: 'public/build/bundle.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n    },\n    {\n      file: 'public/build/bundle.min.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n      plugins: [terser()],\n    },\n  ],\n  // external:['svelte/internal'],\n  plugins: [\n    svelte({\n      preprocess: sveltePreprocess(),\n      include: 'src/**/*.svelte',\n    }),\n    resolve({ browser: true, dedupe: ['svelte'] }),\n    commonjs(),\n    typescript(),\n  ],\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66f4\u590d\u6742\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/language-tools/issues/161#issuecomment-642120838"},"rollup.config"))),(0,r.kt)("h2",{id:"typescript"},"typescript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/typings/svelte.d.ts"',title:'"src/typings/svelte.d.ts"'},"declare module '*.svelte' {\n  const value: any;\n  export default value;\n}\n")),(0,r.kt)("h2",{id:"tsconfigsvelte"},"@tsconfig/svelte"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tsconfig/bases"},"tsconfig/bases"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "Svelte",\n  "_version": "2.0.0",\n\n  "compilerOptions": {\n    "moduleResolution": "node",\n    "target": "es2017",\n    /**\n      Svelte Preprocess cannot figure out whether you have a value or a type, so tell TypeScript\n      to enforce using `import type` instead of `import` for Types.\n     */\n    "importsNotUsedAsValues": "error",\n    "isolatedModules": true,\n    /**\n      To have warnings/errors of the Svelte compiler at the correct position,\n      enable source maps by default.\n     */\n    "sourceMap": true,\n\n    "strict": false,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  }\n}\n')),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"inline \u7684\u4e8b\u4ef6\u5904\u7406\u5199\u6210 string \u65b9\u5f0f - \u540c vue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u4e0d\u6392\u65a5 inline \u4e8b\u4ef6\u5904\u7406 - \u7f16\u8bd1\u5668\u4f1a\u5904\u7406"))),(0,r.kt)("li",{parentName:"ul"},"inline style \u4e3a\u5b57\u7b26\u4e32 - \u800c\u4e0d\u662f react \u90a3\u6837\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$")," \u524d\u7f00\u53d8\u91cf\u4e3a\u8ba2\u9605 store \u7684\u53d8\u91cf - \u4e0d\u80fd\u81ea\u5df1\u4f7f\u7528\u8be5\u524d\u7f00\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$$")," \u524d\u7f00\u4e3a\u5185\u7f6e\u7279\u6b8a\u53d8\u91cf - slot, props, restProps"),(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u533a\u5206\u4e00\u822c\u5c5e\u6027\u548c dom - \u4f7f\u7528 slot - \u7c7b\u4f3c vue \u4e0d\u540c\u4e8e react",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"<svelte:component this={component}/>")," \u4f20\u9012\u52a8\u6001\u7ec4\u4ef6"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$:")," \u8868\u793a\u72b6\u6001 reactive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$<\u53d8\u91cf\u540d>")," \u83b7\u53d6 reactive \u53d8\u91cf\u503c - \u7c7b\u4f3c\u8ba2\u9605\u72b6\u6001\u53d8\u5316"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$$props")," \u6240\u6709 props"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$$restProps")," \u5904\u7406\u5269\u4e0b\u7684 props"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236\u6d41\u8bed\u6cd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"{#if }{:else}{/if}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if(:else), each, await(:then,:cache), key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{#each things as thing (thing.key)}")," \u6dfb\u52a0 key \u7684\u65b9\u5f0f - key \u53ef\u4ee5\u4e3a\u6574\u4e2a\u5bf9\u8c61 - \u5185\u90e8\u4f7f\u7528 Map"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{@html }")," - \u6ce8\u5165 html \u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{@debug }")," - console.log"),(0,r.kt)("li",{parentName:"ul"},"on:eventname",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"forward \u4e8b\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},"on:eventname={handler}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u53ef\u591a\u6b21\u76d1\u542c"))),(0,r.kt)("li",{parentName:"ul"},"on:eventname|modifers={handler}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"preventDefault"),(0,r.kt)("li",{parentName:"ul"},"stopPropagation"),(0,r.kt)("li",{parentName:"ul"},"passive"),(0,r.kt)("li",{parentName:"ul"},"nonpassive"),(0,r.kt)("li",{parentName:"ul"},"capture"),(0,r.kt)("li",{parentName:"ul"},"once"),(0,r.kt)("li",{parentName:"ul"},"self"),(0,r.kt)("li",{parentName:"ul"},"trusted"))),(0,r.kt)("li",{parentName:"ul"},"bind:property={variable}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bind:value - \u76f4\u63a5\u7ed1\u5b9a value \u5230 value"),(0,r.kt)("li",{parentName:"ul"},"bind:group={variable}"),(0,r.kt)("li",{parentName:"ul"},"bind:this={dom_node}"))),(0,r.kt)("li",{parentName:"ul"},"class:name={value}"),(0,r.kt)("li",{parentName:"ul"},"use:action"),(0,r.kt)("li",{parentName:"ul"},"use:action={parameters}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u751f\u547d\u5468\u671f\u5230 action \u51fd\u6570\u8fd4\u56de\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"destroy"),(0,r.kt)("li",{parentName:"ul"},"update"))),(0,r.kt)("li",{parentName:"ul"},"transition:fn",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in/out:fn"),(0,r.kt)("li",{parentName:"ul"},"in/out:fn={params}"),(0,r.kt)("li",{parentName:"ul"},"in/out:fn|local"),(0,r.kt)("li",{parentName:"ul"},"in/out:fn|local={params}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fn",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"introstart"),(0,r.kt)("li",{parentName:"ul"},"introend"),(0,r.kt)("li",{parentName:"ul"},"outrostart"),(0,r.kt)("li",{parentName:"ul"},"outroend"))))))),(0,r.kt)("li",{parentName:"ul"},"transition:fn={params}"),(0,r.kt)("li",{parentName:"ul"},"transition:fn|local"),(0,r.kt)("li",{parentName:"ul"},"transition:fn|local={params}"),(0,r.kt)("li",{parentName:"ul"},"animate:name"),(0,r.kt)("li",{parentName:"ul"},"animate:name={params}"),(0,r.kt)("li",{parentName:"ul"},'--style-props="anycssvalue"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f20\u9012 css \u53d8\u91cf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'<slot name="" prop={value}>\x3c!-- optional fallback --\x3e</slot>')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$$slots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<svelte:window on:keydown={handleKeydown}/>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"body"),(0,r.kt)("li",{parentName:"ul"},"head"),(0,r.kt)("li",{parentName:"ul"},"options - compiler options"),(0,r.kt)("li",{parentName:"ul"},"fragment"))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u7ed1\u5b9a\u5c5e\u6027",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"clientWidth, clientHeight, offsetWidth, offsetHeight"))),(0,r.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"onMount, onDestroy, beforeUpdate, afterUpdate"),(0,r.kt)("li",{parentName:"ul"},"tick - resolve pendding state change"))),(0,r.kt)("li",{parentName:"ul"},"store - \u5168\u5c40\uff0c\u7c7b\u4f3c ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pmndrs/zustand"},"pmndrs/zustand"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6784\u9020",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"writable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"readable(initial,(set)=>{return ()=>{/*cleanup*/}})")),(0,r.kt)("li",{parentName:"ul"},"derived($store,selector)"))),(0,r.kt)("li",{parentName:"ul"},"\u65b9\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"update, set, subscribe"))),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u7cd6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$count")," - \u7b49\u540c\u4e8e\u9488\u5bf9 count store \u521b\u5efa\u4e00\u4e2a\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"$count"),", \u5e76 subscribe \u66f4\u65b0"))))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6b8a\u5143\u7d20",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"slot"),(0,r.kt)("li",{parentName:"ul"},"svelte:self - \u4f7f\u7528\u5f53\u524d\u7ec4\u4ef6 - \u7c7b\u4f3c\u9012\u5f52\u8c03\u7528 - \u56e0\u4e3a svelte \u7ec4\u4ef6\u6ca1\u6709\u540d\u5b57\uff0c\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u65b9\u6cd5\u5f15\u7528"),(0,r.kt)("li",{parentName:"ul"},"svelte:component - \u52a8\u6001\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"svelte:window - \u76d1\u542c\u7a97\u53e3\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"svelte:body"),(0,r.kt)("li",{parentName:"ul"},"svelte:head - \u6dfb\u52a0 \u989d\u5916 head \u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"svelte:options - \u7f16\u8bd1\u5668\u9009\u9879",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"immutable"),(0,r.kt)("li",{parentName:"ul"},"accessors"),(0,r.kt)("li",{parentName:"ul"},"namespace"),(0,r.kt)("li",{parentName:"ul"},"tag"))),(0,r.kt)("li",{parentName:"ul"},"svelte:fragment")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { onDestroy } from 'svelte';\n\nexport function onInterval(callback, milliseconds) {\n  const interval = setInterval(callback, milliseconds);\n\n  onDestroy(() => {\n    clearInterval(interval);\n  });\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- module \u7ef4\u5ea6\u4ee3\u7801 - \u7c7b\u4f3c react \u7ec4\u4ef6\u91cc\u7684\u5168\u5c40\u4ee3\u7801 --\x3e\n<script context="module">\n    let current;\n  export function stopAll(){}\n<\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-svelte"},"\x3c!-- \u5f53 user \u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1 debugger --\x3e\n{@debug user}\n")))}c.isMDXComponent=!0}}]);