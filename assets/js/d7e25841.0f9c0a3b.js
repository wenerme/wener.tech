/*! For license information please see d7e25841.0f9c0a3b.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20573],{23118:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=l(11527),i=l(47214);const r={title:"svelte"},t="svelte",c={id:"web/framework/svelte",title:"svelte",description:"- sveltejs/svelte",source:"@site/../notes/web/framework/svelte.md",sourceDirName:"web/framework",slug:"/web/framework/svelte",permalink:"/notes/web/framework/svelte",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/svelte.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1630662479,formattedLastUpdatedAt:"Sep 3, 2021",frontMatter:{title:"svelte"},sidebar:"docs",previous:{title:"stencil",permalink:"/notes/web/framework/stencil"},next:{title:"taro",permalink:"/notes/web/framework/taro"}},d={},o=[{value:"Rollup",id:"rollup",level:2},{value:"typescript",id:"typescript",level:2},{value:"@tsconfig/svelte",id:"tsconfigsvelte",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"svelte",children:"svelte"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/sveltejs/svelte",children:"sveltejs/svelte"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u54cd\u5e94\u5f0f\u3001\u975e VDOM"}),"\n",(0,s.jsx)(n.li,{children:"\u6709\u70b9\u50cf React+Vue \u7684\u7ed3\u5408\u4f53"}),"\n",(0,s.jsxs)(n.li,{children:["\u65e0 Runtime - \u65e0\u4f9d\u8d56\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bundle \u540e 11k - \u5df2\u5305\u542b\u57fa\u7840 svelte \u7ec4\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"min \u540e 3k"}),"\n",(0,s.jsx)(n.li,{children:"svelte/internal \u53ef\u4ee5\u4f5c\u4e3a\u5916\u90e8\u4f9d\u8d56 - bundle - 9k, min -2k"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7c7b Vue\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5355\u6587\u4ef6\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u5c5e\u6027\u7ed1\u5b9a\u65b9\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7c7b React\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u72b6\u6001\u5904\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u7c7b JSX \u8bed\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["compiler \u80fd\u529b\u975e\u5e38\u5f3a - \u5927\u90e8\u5206 svelte \u7684\u80fd\u529b\u662f\u7f16\u8bd1\u5668\u5e95\u5c42\u652f\u6301\u7684\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u9645\u4ee3\u7801\u987a\u5e8f\u4e0d\u4e00\u5b9a\u662f\u6267\u884c\u7684\u4ee3\u7801\u987a\u5e8f"}),"\n",(0,s.jsx)(n.li,{children:"\u8bed\u6cd5\u76f4\u89c2"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e\u72b6\u6001\u7ba1\u7406"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e motion \u5904\u7406 - tweend, spring"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e\u8f6c\u6362\u5904\u7406 - fade, fly, slide, crossfade"}),"\n",(0,s.jsx)(n.li,{children:"\u5185\u7f6e\u52a8\u753b - flip"}),"\n",(0,s.jsx)(n.li,{children:"CSS \u6837\u5f0f\u96c6\u6210\u5ea6\u5f88\u9ad8"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$:"})," label \u4f1a watch \u8be5\u8bed\u53e5\u7528\u5230\u7684\u53d8\u91cf - \u53d8\u5316\u4f1a\u4ece\u65b0\u6267\u884c - reactive - \u6838\u5fc3\u7279\u6027"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301 context \u6982\u5ff5 - ",(0,s.jsx)(n.code,{children:"setContext(key,{})"}),", ",(0,s.jsx)(n.code,{children:"getContext(key)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u975e reactive - \u53ef\u4ee5\u5305\u542b store \u6765\u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"export let prop"})," \u66b4\u9732\u7ec4\u4ef6\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/sveltejs/kit",children:"sveltejs/kit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7c7b\u4f3c NextJS \u4e4b\u4e8e React"}),"\n",(0,s.jsx)(n.li,{children:"\u5e95\u5c42\u57fa\u4e8e Vite"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/matyunya/smelte",children:"matyunya/smelte"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"material components + Tailwind CSS"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u96c6\u6210\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"webstorm \u6709 svelte \u63d2\u4ef6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script>\n  $: name = 'world';\n<\/script>\n\n<input bind:value=\"{name}\" />\n<h1>Hello {name}!</h1>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import App from './index.svelte';\n\n// \u6302\u8f7d\u5230 Dom\nnew App({\n  target: document.body,\n  props: {\n    name: 'Wener',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# typescript check\nnpx svelte-check\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rollup",children:"Rollup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add -D svelte rollup-plugin-svelte svelte-preprocess rollup rollup-plugin-terser @rollup/plugin-{typescript,node-resolve,commonjs}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="rollup.config.ts"',children:"import svelte from 'rollup-plugin-svelte';\nimport resolve from '@rollup/plugin-node-resolve';\nimport typescript from '@rollup/plugin-typescript';\nimport sveltePreprocess from 'svelte-preprocess';\nimport commonjs from '@rollup/plugin-commonjs';\nimport { terser } from 'rollup-plugin-terser';\n\nconst production = !process.env.ROLLUP_WATCH;\n\nexport default {\n  input: 'src/main.ts',\n  output: [\n    {\n      file: 'public/build/bundle.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n    },\n    {\n      file: 'public/build/bundle.min.js',\n      format: 'iife',\n      name: 'app',\n      sourcemap: true,\n      plugins: [terser()],\n    },\n  ],\n  // external:['svelte/internal'],\n  plugins: [\n    svelte({\n      preprocess: sveltePreprocess(),\n      include: 'src/**/*.svelte',\n    }),\n    resolve({ browser: true, dedupe: ['svelte'] }),\n    commonjs(),\n    typescript(),\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u66f4\u590d\u6742\u7684 ",(0,s.jsx)(n.a,{href:"https://github.com/sveltejs/language-tools/issues/161#issuecomment-642120838",children:"rollup.config"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"typescript"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/typings/svelte.d.ts"',children:"declare module '*.svelte' {\n  const value: any;\n  export default value;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tsconfigsvelte",children:"@tsconfig/svelte"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/tsconfig/bases",children:"tsconfig/bases"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "Svelte",\n  "_version": "2.0.0",\n\n  "compilerOptions": {\n    "moduleResolution": "node",\n    "target": "es2017",\n    /**\n      Svelte Preprocess cannot figure out whether you have a value or a type, so tell TypeScript\n      to enforce using `import type` instead of `import` for Types.\n     */\n    "importsNotUsedAsValues": "error",\n    "isolatedModules": true,\n    /**\n      To have warnings/errors of the Svelte compiler at the correct position,\n      enable source maps by default.\n     */\n    "sourceMap": true,\n\n    "strict": false,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["inline \u7684\u4e8b\u4ef6\u5904\u7406\u5199\u6210 string \u65b9\u5f0f - \u540c vue\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b98\u65b9\u4e0d\u6392\u65a5 inline \u4e8b\u4ef6\u5904\u7406 - \u7f16\u8bd1\u5668\u4f1a\u5904\u7406"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"inline style \u4e3a\u5b57\u7b26\u4e32 - \u800c\u4e0d\u662f react \u90a3\u6837\u7684\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$"})," \u524d\u7f00\u53d8\u91cf\u4e3a\u8ba2\u9605 store \u7684\u53d8\u91cf - \u4e0d\u80fd\u81ea\u5df1\u4f7f\u7528\u8be5\u524d\u7f00\u53d8\u91cf"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$$"})," \u524d\u7f00\u4e3a\u5185\u7f6e\u7279\u6b8a\u53d8\u91cf - slot, props, restProps"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c5e\u6027\u533a\u5206\u4e00\u822c\u5c5e\u6027\u548c dom - \u4f7f\u7528 slot - \u7c7b\u4f3c vue \u4e0d\u540c\u4e8e react\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53ef\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"<svelte:component this={component}/>"})," \u4f20\u9012\u52a8\u6001\u7ec4\u4ef6"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$:"})," \u8868\u793a\u72b6\u6001 reactive"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$<\u53d8\u91cf\u540d>"})," \u83b7\u53d6 reactive \u53d8\u91cf\u503c - \u7c7b\u4f3c\u8ba2\u9605\u72b6\u6001\u53d8\u5316"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$$props"})," \u6240\u6709 props"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$$restProps"})," \u5904\u7406\u5269\u4e0b\u7684 props"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a7\u5236\u6d41\u8bed\u6cd5 ",(0,s.jsx)(n.code,{children:"{#if }{:else}{/if}"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"if(:else), each, await(:then,:cache), key"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{#each things as thing (thing.key)}"})," \u6dfb\u52a0 key \u7684\u65b9\u5f0f - key \u53ef\u4ee5\u4e3a\u6574\u4e2a\u5bf9\u8c61 - \u5185\u90e8\u4f7f\u7528 Map"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{@html }"})," - \u6ce8\u5165 html \u5185\u5bb9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{@debug }"})," - console.log"]}),"\n",(0,s.jsxs)(n.li,{children:["on:eventname\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"forward \u4e8b\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["on:eventname={handler}\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u53ef\u591a\u6b21\u76d1\u542c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["on:eventname|modifers={handler}\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"preventDefault"}),"\n",(0,s.jsx)(n.li,{children:"stopPropagation"}),"\n",(0,s.jsx)(n.li,{children:"passive"}),"\n",(0,s.jsx)(n.li,{children:"nonpassive"}),"\n",(0,s.jsx)(n.li,{children:"capture"}),"\n",(0,s.jsx)(n.li,{children:"once"}),"\n",(0,s.jsx)(n.li,{children:"self"}),"\n",(0,s.jsx)(n.li,{children:"trusted"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["bind:property={variable}\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bind:value - \u76f4\u63a5\u7ed1\u5b9a value \u5230 value"}),"\n",(0,s.jsx)(n.li,{children:"bind:group={variable}"}),"\n",(0,s.jsx)(n.li,{children:"bind:this={dom_node}"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"class:name={value}"}),"\n",(0,s.jsx)(n.li,{children:"use:action"}),"\n",(0,s.jsxs)(n.li,{children:["use:action={parameters}\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ed1\u5b9a\u751f\u547d\u5468\u671f\u5230 action \u51fd\u6570\u8fd4\u56de\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.li,{children:"destroy"}),"\n",(0,s.jsx)(n.li,{children:"update"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["transition:fn\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"in/out:fn"}),"\n",(0,s.jsx)(n.li,{children:"in/out:fn={params}"}),"\n",(0,s.jsx)(n.li,{children:"in/out:fn|local"}),"\n",(0,s.jsxs)(n.li,{children:["in/out:fn|local={params}\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["fn\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"introstart"}),"\n",(0,s.jsx)(n.li,{children:"introend"}),"\n",(0,s.jsx)(n.li,{children:"outrostart"}),"\n",(0,s.jsx)(n.li,{children:"outroend"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"transition:fn={params}"}),"\n",(0,s.jsx)(n.li,{children:"transition:fn|local"}),"\n",(0,s.jsx)(n.li,{children:"transition:fn|local={params}"}),"\n",(0,s.jsx)(n.li,{children:"animate:name"}),"\n",(0,s.jsx)(n.li,{children:"animate:name={params}"}),"\n",(0,s.jsxs)(n.li,{children:['--style-props="anycssvalue"\n',(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f20\u9012 css \u53d8\u91cf"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'<slot name="" prop={value}>\x3c!-- optional fallback --\x3e</slot>'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"$$slots"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<svelte:window on:keydown={handleKeydown}/>"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"body"}),"\n",(0,s.jsx)(n.li,{children:"head"}),"\n",(0,s.jsx)(n.li,{children:"options - compiler options"}),"\n",(0,s.jsx)(n.li,{children:"fragment"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7279\u6b8a\u7ed1\u5b9a\u5c5e\u6027\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"clientWidth, clientHeight, offsetWidth, offsetHeight"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u751f\u547d\u5468\u671f\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"onMount, onDestroy, beforeUpdate, afterUpdate"}),"\n",(0,s.jsx)(n.li,{children:"tick - resolve pendding state change"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["store - \u5168\u5c40\uff0c\u7c7b\u4f3c ",(0,s.jsx)(n.a,{href:"https://github.com/pmndrs/zustand",children:"pmndrs/zustand"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6784\u9020\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"writable"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"readable(initial,(set)=>{return ()=>{/*cleanup*/}})"})}),"\n",(0,s.jsx)(n.li,{children:"derived($store,selector)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65b9\u6cd5\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"update, set, subscribe"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8bed\u6cd5\u7cd6\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$count"})," - \u7b49\u540c\u4e8e\u9488\u5bf9 count store \u521b\u5efa\u4e00\u4e2a\u53d8\u91cf ",(0,s.jsx)(n.code,{children:"$count"}),", \u5e76 subscribe \u66f4\u65b0"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u7279\u6b8a\u5143\u7d20\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"slot"}),"\n",(0,s.jsx)(n.li,{children:"svelte:self - \u4f7f\u7528\u5f53\u524d\u7ec4\u4ef6 - \u7c7b\u4f3c\u9012\u5f52\u8c03\u7528 - \u56e0\u4e3a svelte \u7ec4\u4ef6\u6ca1\u6709\u540d\u5b57\uff0c\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u65b9\u6cd5\u5f15\u7528"}),"\n",(0,s.jsx)(n.li,{children:"svelte:component - \u52a8\u6001\u7ec4\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"svelte:window - \u76d1\u542c\u7a97\u53e3\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"svelte:body"}),"\n",(0,s.jsx)(n.li,{children:"svelte:head - \u6dfb\u52a0 \u989d\u5916 head \u5143\u7d20"}),"\n",(0,s.jsxs)(n.li,{children:["svelte:options - \u7f16\u8bd1\u5668\u9009\u9879\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"immutable"}),"\n",(0,s.jsx)(n.li,{children:"accessors"}),"\n",(0,s.jsx)(n.li,{children:"namespace"}),"\n",(0,s.jsx)(n.li,{children:"tag"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"svelte:fragment"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { onDestroy } from 'svelte';\n\nexport function onInterval(callback, milliseconds) {\n  const interval = setInterval(callback, milliseconds);\n\n  onDestroy(() => {\n    clearInterval(interval);\n  });\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- module \u7ef4\u5ea6\u4ee3\u7801 - \u7c7b\u4f3c react \u7ec4\u4ef6\u91cc\u7684\u5168\u5c40\u4ee3\u7801 --\x3e\n<script context="module">\n\tlet current;\n  export function stopAll(){}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-svelte",children:"\x3c!-- \u5f53 user \u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1 debugger --\x3e\n{@debug user}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3354:(e,n,l)=>{var s=l(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,l){var s,r={},o=null,a=null;for(s in void 0!==l&&(o=""+l),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:a,props:r,_owner:c.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},11527:(e,n,l)=>{e.exports=l(3354)},47214:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>t});var s=l(50959);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);