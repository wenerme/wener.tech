"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81243],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,k=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&u(e,n,t[n]);return e};const c={title:"Go \u6a21\u677f"},g="Go \u6a21\u677f",k={unversionedId:"languages/go/go-template",id:"languages/go/go-template",title:"Go \u6a21\u677f",description:"- GoLand \u652f\u6301\u6dfb\u52a0\u7c7b\u578b\u6ce8\u91ca {{/ gotype: entgo.io/ent/entc/gen.Graph /}}",source:"@site/../notes/languages/go/go-template.md",sourceDirName:"languages/go",slug:"/languages/go/template",permalink:"/notes/languages/go/template",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-template.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"Go \u6a21\u677f"},sidebar:"docs",previous:{title:"Golang Spec",permalink:"/notes/languages/go/spec"},next:{title:"Golang Testing",permalink:"/notes/languages/go/test"}},s={},N=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5185\u5efa\u51fd\u6570",id:"\u5185\u5efa\u51fd\u6570",level:2},{value:"sprig",id:"sprig",level:2}],f={toc:N};function y(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},f),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",d({},{id:"go-\u6a21\u677f"}),"Go \u6a21\u677f"),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"GoLand \u652f\u6301\u6dfb\u52a0\u7c7b\u578b\u6ce8\u91ca ",(0,a.kt)("inlineCode",{parentName:"li"},"{{/* gotype: entgo.io/ent/entc/gen.Graph */}}"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u540e\u53ef\u5bf9\u6a21\u677f\u8fdb\u884c\u8865\u5168"))),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".gohtml"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".gotpl"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".tmpl"),"\uff0c  \u540e\u7f00"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://gotemplate.io/"}),"https://gotemplate.io/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"wasm \u7f16\u8bd1\u7684\u5728\u7ebf template \u6e32\u67d3")))),(0,a.kt)("h2",d({},{id:"\u8bed\u6cd5"}),"\u8bed\u6cd5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Syntax"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'{{"a" -}} b {{- "c"}}')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u79fb\u9664\u7a7a\u767d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{/* a comment */}}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u6ce8\u91ca")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{pipeline}}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u7ba1\u9053")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{if pipeline}} A {{else if pipeline}} B {{else}} C {{end}}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"If-Then-Else")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{range pipeline}} T1 {{else}} T0 {{end}}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u904d\u5386 array\u3001slice\u3001map\u3001channel\uff0c\u5f53\u957f\u5ea6\u4e3a 0 \u4f7f\u7528 else \u90e8\u5206")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'{{template "name" pipeline}}')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5f15\u5165\u5176\u4ed6\u6a21\u677f\uff0c\u53ef\u643a\u5e26\u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'{{define "name"}} T1 {{end}}')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5b9a\u4e49\u6a21\u677f\u7528\u4e8e template \u5f15\u5165")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'{{block "name" pipeline}} T1 {{end}}')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u7b49\u4e8e define + template\uff0c\u7528\u4e8e\u5b9e\u73b0\u9ed8\u8ba4\uff0cblock \u5b9a\u4e49\u7684\u6a21\u677f\u53ef\u4ee5\u88ab\u518d\u6b21\u5b9a\u4e49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{with pipeline}} T1 {{else}} T0 {{end}}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},".")," \u4f5c\u7528\u57df\uff0c\u5982\u679c\u7ed3\u679c\u4e3a\u7a7a\u4f7f\u7528 else")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},".")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5f53\u524d\u4e0a\u4e0b\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5f53\u524d\u6a21\u677f root \u4e0a\u4e0b\u6587")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{{ $v:= pipeline }}")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5b9a\u4e49\u53d8\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'print (.F1 arg1) (.F2 arg2) (.StructValuedMethod "arg").Field')),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u53ef\u4ee5\u62ec\u53f7\u3001\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},".")," \u8bbf\u95ee\u3001\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u51fd\u6570")))),(0,a.kt)("h2",d({},{id:"\u5185\u5efa\u51fd\u6570"}),"\u5185\u5efa\u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u903b\u8f91 and\u3001or\u3001not"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83 eq\u3001ne\u3001lt\u3001le\u3001gt\u3001ge"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa print\u3001printf\u3001println"),(0,a.kt)("li",{parentName:"ul"},"call"),(0,a.kt)("li",{parentName:"ul"},"html - HTMLEscaper"),(0,a.kt)("li",{parentName:"ul"},"index - \u7d22\u5f15\u8bbf\u95ee - map\u3001slice\u3001array"),(0,a.kt)("li",{parentName:"ul"},"slice - \u5207\u5206\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slice x 1 2")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"x[1:2]")))),(0,a.kt)("li",{parentName:"ul"},"js - JSEscaper - \u8fd4\u56de\u8f6c\u4e49\u540e\u7684 JS"),(0,a.kt)("li",{parentName:"ul"},"len - \u8fd4\u56de\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"urlquery - URLQueryEscaper - URL \u7f16\u7801"),(0,a.kt)("li",{parentName:"ul"},"print, printf, println")),(0,a.kt)("h2",d({},{id:"sprig"}),"sprig"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go ",(0,a.kt)("a",d({parentName:"li"},{href:"https://play.golang.org/p/bbQDtcGKWFf"}),"Playground"))))}y.isMDXComponent=!0}}]);