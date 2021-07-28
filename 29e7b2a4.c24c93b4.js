(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(f,l(l({ref:t},p),{},{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(1172)),i={title:"HTML"},l={unversionedId:"web/spec/html",id:"web/spec/html",isDocsHomePage:!1,title:"HTML",description:"Repaints",source:"@site/notes/web/spec/html.md",slug:"/web/spec/html",permalink:"/notes/web/spec/html",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/html.md",version:"current",sidebar:"docs",previous:{title:"TypeScript \u7c7b\u578b\u5b9a\u4e49",permalink:"/notes/web/script/typescript-typing"},next:{title:"CSS Awesome",permalink:"/notes/web/style/css-awesome"}},c=[{value:"Repaints",id:"repaints",children:[]},{value:"Reflow",id:"reflow",children:[]},{value:"navigator.permissions",id:"navigatorpermissions",children:[]},{value:"geolocation",id:"geolocation",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"repaints"},"Repaints"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4fee\u6539\u53ef\u89c1\u6027\u6837\u5f0f\u89e6\u53d1 - \u4f8b\u5982 opacity, background-color, visibility, outline")),Object(a.b)("h2",{id:"reflow"},"Reflow"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e03\u5c40\u65f6\u89e6\u53d1 - \u4fee\u6539\u6837\u5f0f\u4e0d\u89e6\u53d1 - \u5f71\u54cd\u5f88\u5927\uff0c\u963b\u585e\u8ba1\u7b97"),Object(a.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u4f4d\u7f6e\u548c\u5c3a\u5bf8 - \u5f71\u54cd\u4e0a\u4e0b\u7ea7\u548c\u540c\u4e00\u7ea7"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"position: absolute;")," ",Object(a.b)("inlineCode",{parentName:"li"},"position: fixed;")," \u53ef\u51cf\u5c11 reflow \u5f71\u54cd"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"display: none;")," \u4e0d\u5f71\u54cd"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a"},"What forces layout / reflow")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/20926551"},"Recommended way of making React component/div draggable"))))),Object(a.b)("h2",{id:"navigatorpermissions"},"navigator.permissions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions"},"navigator.permissions"))),Object(a.b)("h2",{id:"geolocation"},"geolocation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation"},"Using geolocation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://test.wener.me/geo.html"},"https://test.wener.me/geo.html"))))}s.isMDXComponent=!0}}]);