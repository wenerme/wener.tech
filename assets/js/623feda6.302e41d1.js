"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[95610],{49613:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(a),s=r,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},29844:function(t,e,a){a.r(e),a.d(e,{assets:function(){return b},contentTitle:function(){return N},default:function(){return v},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return f}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&d(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&d(t,a,e[a]);return t},k=(t,e)=>l(t,i(e)),s=(t,e)=>{var a={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a};const c={title:"tinode"},N="tinode",g={unversionedId:"service/im/tinode",id:"service/im/tinode",title:"tinode",description:"- tinode/chat",source:"@site/../notes/service/im/tinode.md",sourceDirName:"service/im",slug:"/service/im/tinode",permalink:"/notes/service/im/tinode",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/im/tinode.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678762178,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"tinode"},sidebar:"docs",previous:{title:"Signal",permalink:"/notes/service/im/signal"},next:{title:"wire",permalink:"/notes/service/im/wire"}},b={},f=[{value:"message format",id:"message-format",level:2}],h={toc:f},y="wrapper";function v(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,n.kt)(y,k(u(u({},h),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"tinode"}),"tinode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tinode/chat"}),"tinode/chat"))),(0,n.kt)("h2",u({},{id:"message-format"}),"message format"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "txt": "this is bold, code and italic, strike combined bold and italic an url: https://www.example.com/abc#fragment and another www.tinode.co this is a @mention and a #hashtag in a string second #hashtag",\n  "fmt": [\n    { "at": 8, "len": 4, "tp": "ST" },\n    { "at": 14, "len": 4, "tp": "CO" },\n    { "at": 23, "len": 6, "tp": "EM" },\n    { "at": 31, "len": 6, "tp": "DL" },\n    { "tp": "BR", "len": 1, "at": 37 },\n    { "at": 56, "len": 6, "tp": "EM" },\n    { "at": 47, "len": 15, "tp": "ST" },\n    { "tp": "BR", "len": 1, "at": 62 },\n    { "at": 120, "len": 13, "tp": "EM" },\n    { "at": 71, "len": 36, "key": 0 },\n    { "at": 120, "len": 13, "key": 1 },\n    { "tp": "BR", "len": 1, "at": 133 },\n    { "at": 144, "len": 8, "key": 2 },\n    { "at": 159, "len": 8, "key": 3 },\n    { "tp": "BR", "len": 1, "at": 179 },\n    { "at": 187, "len": 8, "key": 3 },\n    { "tp": "BR", "len": 1, "at": 195 }\n  ],\n  "ent": [\n    { "tp": "LN", "data": { "url": "https://www.example.com/abc#fragment" } },\n    { "tp": "LN", "data": { "url": "http://www.tinode.co" } },\n    { "tp": "MN", "data": { "val": "mention" } },\n    { "tp": "HT", "data": { "val": "hashtag" } }\n  ]\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"fmt"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"BR")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"line break.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CO")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"code or monotyped text, possibly with different background: ",(0,n.kt)("inlineCode",{parentName:"td"},"monotype"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"DL")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"deleted or strikethrough text: ",(0,n.kt)("del",{parentName:"td"},"strikethrough"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"EM")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"emphasized text, usually represented as italic: ",(0,n.kt)("em",{parentName:"td"},"italic"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"FM")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"form / set of fields; may also be represented as an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"HD")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"hidden content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"HL")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"highlighted text, such as text in a different color or with a different background; the color cannot be specified.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RW")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"logical grouping of formats, a row; may also be represented as an entity.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"ST")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"strong or bold text: ",(0,n.kt)("strong",{parentName:"td"},"bold"),".")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"ent"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"AU")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"embedded audio.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"BN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"interactive button.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"EX")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"generic attachment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"FM")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"form / set of fields; may also be represented as a basic decoration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"HT")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"hashtag, e.g. ",(0,n.kt)("a",u({parentName:"td"},{href:"#"}),"#hashtag"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"IM")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"inline image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"LN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"link (URL) ",(0,n.kt)("a",u({parentName:"td"},{href:"https://api.tinode.co"}),"https://api.tinode.co"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"MN")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"mention such as ",(0,n.kt)("a",u({parentName:"td"},{href:"#"}),"@tinode"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"RW")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"logical grouping of formats, a row; may also be represented as a basic decoration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"VC")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"video (and audio) calls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"VD")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"inline video.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ent.data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mime"),(0,n.kt)("li",{parentName:"ul"},"val"),(0,n.kt)("li",{parentName:"ul"},"ref"),(0,n.kt)("li",{parentName:"ul"},"preview"),(0,n.kt)("li",{parentName:"ul"},"duration"),(0,n.kt)("li",{parentName:"ul"},"name"),(0,n.kt)("li",{parentName:"ul"},"size"),(0,n.kt)("li",{parentName:"ul"},"width"),(0,n.kt)("li",{parentName:"ul"},"height"))),(0,n.kt)("li",{parentName:"ul"},"VC ent.data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"incoming"),(0,n.kt)("li",{parentName:"ul"},"aonly"),(0,n.kt)("li",{parentName:"ul"},"state",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"accepted"),(0,n.kt)("li",{parentName:"ul"},"finished"),(0,n.kt)("li",{parentName:"ul"},"disconnected"),(0,n.kt)("li",{parentName:"ul"},"missed"),(0,n.kt)("li",{parentName:"ul"},"declined"))),(0,n.kt)("li",{parentName:"ul"},"preref - preview ref"),(0,n.kt)("li",{parentName:"ul"},"premime - preview mime"))),(0,n.kt)("li",{parentName:"ul"},"act",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pub"),(0,n.kt)("li",{parentName:"ul"},"url"),(0,n.kt)("li",{parentName:"ul"},"note"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tinode/chat/blob/master/docs/drafty.md"}),"https://github.com/tinode/chat/blob/master/docs/drafty.md")),(0,n.kt)("li",{parentName:"ul"},"card",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/tinode/chat/blob/master/docs/thecard.md"}),"https://github.com/tinode/chat/blob/master/docs/thecard.md")))),(0,n.kt)("li",{parentName:"ul"},"c -> s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hi",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"id"),(0,n.kt)("li",{parentName:"ul"},"ver"),(0,n.kt)("li",{parentName:"ul"},"ua"),(0,n.kt)("li",{parentName:"ul"},"dev"),(0,n.kt)("li",{parentName:"ul"},"platf"),(0,n.kt)("li",{parentName:"ul"},"lang"))),(0,n.kt)("li",{parentName:"ul"},"acc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"id"),(0,n.kt)("li",{parentName:"ul"},"user"),(0,n.kt)("li",{parentName:"ul"},"token"),(0,n.kt)("li",{parentName:"ul"},"status - ok"),(0,n.kt)("li",{parentName:"ul"},"schema"),(0,n.kt)("li",{parentName:"ul"},"secret"),(0,n.kt)("li",{parentName:"ul"},"login"),(0,n.kt)("li",{parentName:"ul"},"tags"),(0,n.kt)("li",{parentName:"ul"},"cred"),(0,n.kt)("li",{parentName:"ul"},"desc"))),(0,n.kt)("li",{parentName:"ul"},"sub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"topic"),(0,n.kt)("li",{parentName:"ul"},"bkg - by an automated agent"),(0,n.kt)("li",{parentName:"ul"},"set"),(0,n.kt)("li",{parentName:"ul"},"get"),(0,n.kt)("li",{parentName:"ul"},"data"))),(0,n.kt)("li",{parentName:"ul"},"leave"),(0,n.kt)("li",{parentName:"ul"},"pub"),(0,n.kt)("li",{parentName:"ul"},"get"),(0,n.kt)("li",{parentName:"ul"},"set"),(0,n.kt)("li",{parentName:"ul"},"note - ephemeral notification"))),(0,n.kt)("li",{parentName:"ul"},"s -> c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data"),(0,n.kt)("li",{parentName:"ul"},"ctrl"),(0,n.kt)("li",{parentName:"ul"},"meta"),(0,n.kt)("li",{parentName:"ul"},"pres - important event",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vStUDHb7DPrD8tF5eANLu4YIjRkqta8KOhLvcj2precsjqR40eDHvJnnuuS3bw-NcWsP1QKc7GSTYuX/pubhtml?gid=1959642482&single=true"}),"https://docs.google.com/spreadsheets/d/e/2PACX-1vStUDHb7DPrD8tF5eANLu4YIjRkqta8KOhLvcj2precsjqR40eDHvJnnuuS3bw-NcWsP1QKc7GSTYuX/pubhtml?gid=1959642482&single=true")))),(0,n.kt)("li",{parentName:"ul"},"info - Forwarded client-generated notification")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "abc": {},\n  "extra": {\n    "attachments": ["/v0/file/s/sJOD_tZDPz0.jpg"],\n    "obo": "usr2il9suCbuko", // Alternative user ID set by the root user (obo = On Behalf Of).\n    "authlevel": "auth" // Altered authentication level set by the root user.\n  }\n}\n')))}v.isMDXComponent=!0}}]);