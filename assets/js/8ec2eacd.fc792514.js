"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19316],{72833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),i=["components"],o={title:"veta lite"},s=void 0,c={unversionedId:"service/bi/vega-lite",id:"service/bi/vega-lite",title:"veta lite",description:"- vega/vega-lite",source:"@site/notes/service/bi/vega-lite.md",sourceDirName:"service/bi",slug:"/service/bi/vega-lite",permalink:"/notes/service/bi/vega-lite",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/bi/vega-lite.md",tags:[],version:"current",frontMatter:{title:"veta lite"},sidebar:"docs",previous:{title:"CubeJS",permalink:"/notes/service/bi/cubejs"},next:{title:"Vega",permalink:"/notes/service/bi/vega"}},p={},u=[{value:"spec",id:"spec",level:2},{value:"data",id:"data",level:3},{value:"transform",id:"transform",level:2},{value:"\u79fb\u9664\u8fb9\u6846",id:"\u79fb\u9664\u8fb9\u6846",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vega/vega-lite"},"vega/vega-lite"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u7f16\u8bd1\u4e3a Vega"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6bd4 Vega \u66f4\u7b80\u5355")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "url": "data/seattle-weather.csv" },\n  "mark": "bar",\n  "encoding": {\n    "x": { "timeUnit": "month", "field": "date", "type": "ordinal" },\n    "y": { "aggregate": "mean", "field": "precipitation" }\n  }\n}\n')),(0,l.kt)("h2",{id:"spec"},"spec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vega.github.io/vega-lite/docs/spec.html"},"spec"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"single view"),(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u5408: layer, facet, concat, repeat")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // top-level\n  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",\n  "background": "white",\n  "padding": 5,\n  "autosize": "pad", // fit, none\n  "config": {},\n  "usermeta": {},\n\n  // common\n  "title": "",\n  "name": "",\n  "description": "",\n  "data": {},\n  "transform": [],\n  "params": [],\n\n  // view composition - layer, facet, concat, repeat\n  "resolve": {},\n  // layout composition - facet, concat, repeat\n  "align": "all",\n  "bounds": "full",\n  "center": false,\n  "spacing": 20,\n\n  // single view\n  "mark": "", // bar, circle, square, tick, line, area, point, rule, geoshape, text\n  "encoding": {},\n  "width": 0,\n  "height": 0,\n  "view": null,\n  "projection": ""\n}\n')),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="inline"',title:'"inline"'},'{\n  "values": "a\\n1\\n2\\n3\\n4",\n  "format": {\n    "type": "csv"\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="url"',title:'"url"'},'{ "url": "data/cars.json" }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="named"',title:'"named"'},'{\n  // top-level\n  "datasets": {\n    "somedata": [1, 2, 3]\n  },\n  "data": {\n    "name": "somedata"\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"format")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "format": "json", // json, csv, tsv, dsv, topojson\n  "parse": {\n    // number, date, boolean\n    "created_at": "date" // \u5c06 created_at \u89e3\u6790\u4e3a date\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\"date:'%m%d%Y'\" - \u652f\u6301 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/d3/d3-time-format#locale_format"},"d3 time-format")),(0,l.kt)("li",{parentName:"ul"},"\"utc:'%m%d%Y'\" - UTC \u65f6\u95f4")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"generate")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sequence": {\n    "start": 0,\n    "stop": 12.7,\n    "step": 0.1,\n    "as": "x"\n  },\n  "graticule": {\n    "step": [15, 15]\n  }\n}\n')),(0,l.kt)("h2",{id:"transform"},"transform"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"density",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u4e3a\u5bc6\u5ea6 - density, value"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u8ba1\u5360\u6bd4")))),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"\u79fb\u9664\u8fb9\u6846"},"\u79fb\u9664\u8fb9\u6846"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "style": {\n      "cell": {\n        "stroke": "transparent"\n      }\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "view": {\n      "stroke": "transparent"\n    }\n  }\n}\n')))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);