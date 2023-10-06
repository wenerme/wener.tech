"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30452],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),v=a,f=d["".concat(c,".").concat(v)]||d[v]||p[v]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},65409:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var r=t(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&s(e,t,n[t]);return e},p=(e,n)=>i(e,l(n)),v=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const f={title:"valgrind"},g="valgrind",m={unversionedId:"languages/c/valgrind",id:"languages/c/valgrind",title:"valgrind",description:"- https://valgrind.org/docs/manual/manual-core-adv.html#manual-core-adv.clientreq",source:"@site/../notes/languages/c/valgrind.md",sourceDirName:"languages/c",slug:"/languages/c/valgrind",permalink:"/notes/languages/c/valgrind",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/c/valgrind.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"valgrind"},sidebar:"docs",previous:{title:"pkg-config",permalink:"/notes/languages/c/pkg-config"},next:{title:"Carbon",permalink:"/notes/languages/carbon/"}},y={},b=[{value:"Uninitialised value was created by a stack allocation",id:"uninitialised-value-was-created-by-a-stack-allocation",level:2},{value:"Conditional jump or move depends on uninitialised value(s)",id:"conditional-jump-or-move-depends-on-uninitialised-values",level:2},{value:"Invalid read of size, Invalid write of size",id:"invalid-read-of-size-invalid-write-of-size",level:2}],O={toc:b},w="wrapper";function k(e){var n=e,{components:t}=n,a=v(n,["components"]);return(0,r.kt)(w,p(d(d({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"valgrind"}),"valgrind"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"brew install valgrind\n\nvalgrind --leak-check=yes myprog arg1 arg2\nvalgrind --leak-check=full --show-leak-kinds=all --verbose --track-origins=yes myprog\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://valgrind.org/docs/manual/manual-core-adv.html#manual-core-adv.clientreq"}),"https://valgrind.org/docs/manual/manual-core-adv.html#manual-core-adv.clientreq"))),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-c"}),'int run_within_valgrind (void) {\n  char *p = getenv ("LD_PRELOAD");\n  if (p == NULL)\n    return 0;\n  return (strstr (p, "/valgrind/") != NULL || strstr (p, "/vgpreload") != NULL);\n}\n')),(0,r.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",d({},{id:"uninitialised-value-was-created-by-a-stack-allocation"}),"Uninitialised value was created by a stack allocation"),(0,r.kt)("h2",d({},{id:"conditional-jump-or-move-depends-on-uninitialised-values"}),"Conditional jump or move depends on uninitialised value(s)"),(0,r.kt)("h2",d({},{id:"invalid-read-of-size-invalid-write-of-size"}),"Invalid read of size, Invalid write of size"))}k.isMDXComponent=!0}}]);