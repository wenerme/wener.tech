"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[47758],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),p=o,d=g["".concat(l,".").concat(p)]||g[p]||f[p]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var r=n(96600),o=n(27279),a=(n(59496),n(49613)),s=["components"],i={title:"JS Cookbook",tags:["Cookbook"]},l=void 0,c={unversionedId:"web/script/js-cookbook",id:"web/script/js-cookbook",title:"JS Cookbook",description:"\u68c0\u6d4b\u7a97\u53e3\u6fc0\u6d3b\u72b6\u6001",source:"@site/notes/web/script/js-cookbook.md",sourceDirName:"web/script",slug:"/web/script/js-cookbook",permalink:"/notes/web/script/js-cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/script/js-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",frontMatter:{title:"JS Cookbook",tags:["Cookbook"]},sidebar:"docs",previous:{title:"JavaScript Awesome",permalink:"/notes/web/script/js-awesome"},next:{title:"ajv",permalink:"/notes/web/script/lib/ajv"}},u={},f=[{value:"\u68c0\u6d4b\u7a97\u53e3\u6fc0\u6d3b\u72b6\u6001",id:"\u68c0\u6d4b\u7a97\u53e3\u6fc0\u6d3b\u72b6\u6001",level:2},{value:"sessionStorage \u8de8 Tab",id:"sessionstorage-\u8de8-tab",level:2},{value:"\u68c0\u6d4b\u865a\u62df\u673a",id:"\u68c0\u6d4b\u865a\u62df\u673a",level:2},{value:"formatBytes",id:"formatbytes",level:2}],g={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u68c0\u6d4b\u7a97\u53e3\u6fc0\u6d3b\u72b6\u6001"},"\u68c0\u6d4b\u7a97\u53e3\u6fc0\u6d3b\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5207\u6362 tab \u540e\u4f1a\u89e6\u53d1\ndocument.addEventListener('visibilitychange', (e) => console.log('visibilitychange', e));\ndocument.hidden;\n\n// \u7a97\u53e3\u83b7\u53d6\u7126\u70b9\u540e\u89e6\u53d1\nwindow.addEventListener('focus', (e) => console.log('focus', e));\ndocument.hasFocus();\n")),(0,a.kt)("h2",{id:"sessionstorage-\u8de8-tab"},"sessionStorage \u8de8 Tab"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// transfers sessionStorage from one tab to another\nvar sessionStorage_transfer = function (event) {\n  if (!event) {\n    event = window.event;\n  } // ie suq\n  if (!event.newValue) return; // do nothing if no value to work with\n  if (event.key == 'getSessionStorage') {\n    // another tab asked for the sessionStorage -> send it\n    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));\n    // the other tab should now have it, so we're done with it.\n    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.\n  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {\n    // another tab sent data <- get it\n    var data = JSON.parse(event.newValue);\n    for (var key in data) {\n      sessionStorage.setItem(key, data[key]);\n    }\n  }\n};\n\n// listen for changes to localStorage\nif (window.addEventListener) {\n  window.addEventListener('storage', sessionStorage_transfer, false);\n} else {\n  window.attachEvent('onstorage', sessionStorage_transfer);\n}\n\n// Ask other tabs for session storage (this is ONLY to trigger event)\nif (!sessionStorage.length) {\n  localStorage.setItem('getSessionStorage', 'foobar');\n  localStorage.removeItem('getSessionStorage', 'foobar');\n}\n")),(0,a.kt)("h2",{id:"\u68c0\u6d4b\u865a\u62df\u673a"},"\u68c0\u6d4b\u865a\u62df\u673a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var canvas = document.createElement('canvas');\nvar gl = canvas.getContext('webgl');\n\nvar debugInfo = gl.getExtension('WEBGL_debug_renderer_info');\nvar vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);\nvar renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);\n\nconsole.log(vendor);\nconsole.log(renderer);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bannedit.github.io/Virtual-Machine-Detection-In-The-Browser.html"},"Virtual Machine Detection In The Browser"))),(0,a.kt)("h2",{id:"formatbytes"},"formatBytes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c"},"https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c")),(0,a.kt)("li",{parentName:"ul"},"filesize"),(0,a.kt)("li",{parentName:"ul"},"pretty-bytes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function formatBytes(bytes, decimals) {\n  if (bytes == 0) return '0 Bytes';\n  var k = 1024,\n    dm = decimals || 2,\n    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],\n    i = Math.floor(Math.log(bytes) / Math.log(k));\n  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\n// Usage:\n// formatBytes(bytes,decimals)\n\nformatBytes(1024); // 1 KB\nformatBytes('1024'); // 1 KB\nformatBytes(1234); // 1.21 KB\nformatBytes(1234, 3); // 1.205 KB\n")))}p.isMDXComponent=!0}}]);