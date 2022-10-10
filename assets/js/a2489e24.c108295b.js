"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13445],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return O}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={title:"DOM"},d="DOM",f={unversionedId:"web/dom",id:"web/dom",title:"DOM",description:"- Document Object Model",source:"@site/../notes/web/dom.md",sourceDirName:"web",slug:"/web/dom",permalink:"/notes/web/dom",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dom.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"DOM"},sidebar:"docs",previous:{title:"DOM FAQ",permalink:"/notes/web/dom-faq"},next:{title:"\u7f16\u8f91\u5668",permalink:"/notes/web/editor/"}},b={},O=[],v={toc:O};function y(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"dom"}),"DOM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Document Object Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"https://dom.spec.whatwg.org/"}),"https://dom.spec.whatwg.org/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"}),"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model")),(0,r.kt)("p",{parentName:"li"},"   // e.preventDefault();\n// e.stopPropagation();\n// e.nativeEvent.stopImmediatePropagation();"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",s({parentName:"pre"},{}),"           | |                                   / \\\n")),(0,r.kt)("p",{parentName:"li"},"---------------| |-----------------   ---------------| |-----------------\n| element1     | |                |   | element1     | |                |\n|   -----------| |-----------     |   |   -----------| |-----------     |\n|   |element2  \\ /          |     |   |   |element2  | |          |     |\n|   -------------------------     |   |   -------------------------     |\n|        Event CAPTURING          |   |        Event BUBBLING           |"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"// CAPTURING event\nbutton.addEventListener('click', handleClick, true)"),(0,r.kt)("p",null,"// BUBBLING events\nbutton.addEventListener('click', handleClick, false)\nbutton.addEventListener('click', handleClick)"),(0,r.kt)("p",null,"e.defaultPrevented\n",(0,r.kt)("a",s({parentName:"p"},{href:"https://reactjs.org/docs/events.html"}),"https://reactjs.org/docs/events.html")))}y.isMDXComponent=!0}}]);