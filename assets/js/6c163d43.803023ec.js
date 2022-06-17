"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4789],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5845:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"x-render"},c="alibaba/x-render",u={unversionedId:"web/editor/x-render",id:"web/editor/x-render",title:"x-render",description:"- schema \u57fa\u4e8e json-schema",source:"@site/notes/web/editor/x-render.md",sourceDirName:"web/editor",slug:"/web/editor/x-render",permalink:"/notes/web/editor/x-render",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/editor/x-render.md",tags:[],version:"current",frontMatter:{title:"x-render"},sidebar:"docs",previous:{title:"unifiedjs",permalink:"/notes/web/editor/unifiedjs"},next:{title:"yjs",permalink:"/notes/web/editor/yjs"}},p={},s=[],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alibabax-render"},"alibaba/x-render"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"schema \u57fa\u4e8e json-schema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/x-render/tree/master/tools/schema-generator"},"fr-generator")," - \u8868\u5355\u8bbe\u8ba1\u5668",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://xrender.fun/generator/playground"},"https://xrender.fun/generator/playground"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // \u5e03\u5c40\u6837\u5f0f\u63a7\u5236\n  "displayType": "row",\n  "labelWidth": 60,\n  "type": "object",\n  "properties": {\n    // \u6570\u636e\u5b57\u6bb5\u5b9a\u4e49\n    "input": {\n      "title": "\u7b80\u5355\u8f93\u5165\u6846",\n      // \u7ec4\u4ef6\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\n      "type": "string",\n      "min": 6,\n      "rules": [\n        {\n          "pattern": "^[A-Za-z0-9]+$",\n          "message": "\u53ea\u5141\u8bb8\u586b\u5199\u82f1\u6587\u5b57\u6bcd\u548c\u6570\u5b57"\n        }\n      ]\n    },\n    "select": {\n      "title": "\u5355\u9009",\n      "type": "string",\n      "enum": ["a", "b", "c"],\n      "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],\n      // \u63a7\u5236\u4f7f\u7528\u7684\u7ec4\u4ef6\n      "widget": "radio"\n    },\n    //\n    "showSetting": {\n      "title": "\u662f\u5426\u5c55\u793a\u7f51\u5740",\n      "type": "boolean"\n    },\n    "siteUrl": {\n      "title": "\u7f51\u5740",\n      "type": "string",\n      "placeholder": "\u6b64\u5904\u5fc5\u586b",\n      // \u8054\u52a8\u63a7\u5236\n      "hidden": "{{formData.showSetting !== true}}",\n      "required": true,\n      "props": {\n        "addonBefore": "https://",\n        "addonAfter": ".com"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);