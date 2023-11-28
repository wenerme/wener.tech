"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19918],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30185:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return d},metadata:function(){return w},toc:function(){return k}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const d={title:"graphile-worker"},b="graphile-worker",w={unversionedId:"web/dev/graphile-worker",id:"web/dev/graphile-worker",title:"graphile-worker",description:"- graphile/worker",source:"@site/../notes/web/dev/graphile-worker.md",sourceDirName:"web/dev",slug:"/web/dev/graphile-worker",permalink:"/notes/web/dev/graphile-worker",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/graphile-worker.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"graphile-worker"},sidebar:"docs",previous:{title:"eslint",permalink:"/notes/web/dev/eslint"},next:{title:"hmr",permalink:"/notes/web/dev/hmr"}},g={},k=[],y={toc:k},h="wrapper";function v(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,f(s(s({},y),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"graphile-worker"}),"graphile-worker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/graphile/worker"}),"graphile/worker"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 cron"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LISTEN/NOTIFY",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pgbouncer \u9700\u8981 connection \u6a21\u5f0f")))))))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm add graphile-worker\n")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'docker run \\\n  --init \\\n  --rm -it \\\n  --network=host \\\n  -v "$PWD/tasks":/worker/tasks \\\n  graphile/worker \\\n    -c "postgres://postgres:postgres@localhost:5432/postgres"\n')))}v.isMDXComponent=!0}}]);