"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[85720],{49613:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(p,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},95282:function(t,e,r){r.r(e),r.d(e,{assets:function(){return k},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&c(t,r,e[r]);return t};const s={tags:["RFC"]},f="URI",d={unversionedId:"dev/protocol/uri",id:"dev/protocol/uri",title:"URI",description:"- protocol=schema",source:"@site/../notes/dev/protocol/uri.md",sourceDirName:"dev/protocol",slug:"/dev/protocol/uri",permalink:"/notes/dev/protocol/uri",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/protocol/uri.md",tags:[{label:"RFC",permalink:"/notes/tags/rfc"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666547321,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{tags:["RFC"]},sidebar:"docs",previous:{title:"IPFS",permalink:"/notes/dev/protocol/ipfs"},next:{title:"Quantum",permalink:"/notes/dev/quantum"}},k={},h=[{value:"References",id:"references",level:2}],g={toc:h};function N(t){var e,r=t,{components:a}=r,c=((t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},g),c),l(e,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"uri"}),"URI"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                                            href                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 protocol \u2502  \u2502        auth         \u2502        host         \u2502           path            \u2502    hash    \u2502\n\u2502          \u2502  \u2502                     \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524            \u2502\n\u2502          \u2502  \u2502                     \u2502   hostname   \u2502 port \u2502 pathname \u2502     search     \u2502            \u2502\n\u2502          \u2502  \u2502                     \u2502              \u2502      \u2502          \u251c\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524            \u2502\n\u2502          \u2502  \u2502                     \u2502              \u2502      \u2502          \u2502 \u2502    query     \u2502            \u2502\n"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #fragment  "\n\u2502          \u2502  \u2502          \u2502          \u2502   hostname   \u2502 port \u2502          \u2502                \u2502            \u2502\n\u2502          \u2502  \u2502          \u2502          \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2524          \u2502                \u2502            \u2502\n\u2502 protocol \u2502  \u2502 username \u2502 password \u2502        host         \u2502          \u2502                \u2502            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524          \u2502                \u2502            \u2502\n\u2502   origin    \u2502                     \u2502       origin        \u2502 pathname \u2502     search     \u2502    hash    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502                                            href                                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"protocol=schema"),(0,n.kt)("li",{parentName:"ul"},"hash=",(0,n.kt)("inlineCode",{parentName:"li"},"#")," fragment")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL \u957f\u5ea6\u9650\u5236")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u822c\u5efa\u8bae < 2000"),(0,n.kt)("li",{parentName:"ul"},"cloudfront 8k - header 20k"),(0,n.kt)("li",{parentName:"ul"},"fastly 8Kb"),(0,n.kt)("li",{parentName:"ul"},"cloudflare 16k")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Browser"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Address bar"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"document.location"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Chrome"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"32779"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Android"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8192"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Firefox"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Safari"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),">64k")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"IE11"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2047"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"5120")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Edge 16"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"2047"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"10240")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://url.spec.whatwg.org/"}),"https://url.spec.whatwg.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/medialize/URI.js"}),"medialize/URI.js"))),(0,n.kt)("h2",m({},{id:"references"}),"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc3986"}),"rfc3986"),"\nUniform Resource Identifier (URI): Generic Syntax",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2005"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc1738"}),"rfc1738"),"\nUniform Resource Locators (URL)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1994"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc6570"}),"rfc6570"),"\nURI Template",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2012"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc8615"}),"rfc8615"),"\nWell-Known Uniform Resource Identifiers (URIs)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2019"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/.well-known/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml"}),"https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml"))))))}N.isMDXComponent=!0}}]);