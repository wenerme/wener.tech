"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94689],{75711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(96600),a=n(27279),i=(n(59496),n(3905)),l=["components"],s={title:"FileSystem"},o=void 0,p={unversionedId:"web/spec/web-fs",id:"web/spec/web-fs",title:"FileSystem",description:"- https://wicg.github.io/file-system-access/",source:"@site/notes/web/spec/web-fs.md",sourceDirName:"web/spec",slug:"/web/spec/web-fs",permalink:"/notes/web/spec/web-fs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/web-fs.md",tags:[],version:"current",frontMatter:{title:"FileSystem"},sidebar:"docs",previous:{title:"SVG",permalink:"/notes/web/spec/svg"},next:{title:"Web Spec Awesome",permalink:"/notes/web/spec/web-spec-awesome"}},c={},m=[{value:"Origin Private File System",id:"origin-private-file-system",level:2},{value:"Drop as Handle",id:"drop-as-handle",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wicg.github.io/file-system-access/"},"https://wicg.github.io/file-system-access/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WICG/file-system-access/blob/main/EXPLAINER.md"},"explainer")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3c.github.io/FileAPI/"},"https://w3c.github.io/FileAPI/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/file-system-access/"},"https://web.dev/file-system-access/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/fs-helpers.js"},"fs-helpers.js")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/browser-fs-access/"},"https://web.dev/browser-fs-access/")),(0,i.kt)("li",{parentName:"ul"},"Chrome",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Chrome 86+",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker"},"window.showOpenFilePicker")),(0,i.kt)("li",{parentName:"ul"},"navigator.storage.getDirectory"))))),(0,i.kt)("li",{parentName:"ul"},"dataurl \u652f\u6301 blob:, filesystem:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'<a href="" download="filename.txt">')," - \u89e6\u53d1\u4e0b\u8f7d",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download"},"download")," \u4f9d\u8d56\u670d\u52a1\u7aef\u8fd4\u56de ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},"Content-Disposition"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const dirHandle = await window.showDirectoryPicker();\n\nconst saveFileHandle = await self.showSaveFilePicker({\n  suggestedName: 'Untitled Text.txt',\n  types: [\n    {\n      description: 'Text documents',\n      accept: {\n        'text/plain': ['.txt'],\n      },\n    },\n  ],\n});\n\nconst openFileHandle = await self.showOpenFilePicker({\n  // desktop, documents, downloads, music, pictures, videos\n  startIn: 'pictures',\n  // startIn: dirHandle,\n});\n\n// \u521b\u5efa\u76ee\u5f55\nconst neoDirHandle = await dirHandle.getDirectoryHandle('neo', { create: true });\n// \u521b\u5efa\u6587\u4ef6\nconst readmeFileHandle = await neoDirHandle.getFileHandle('README.txt', { create: true });\n// \u5220\u9664\u6587\u4ef6\nawait neoDirHandle.removeEntry('README.txt');\n// \u9012\u5f52\u5220\u9664\u76ee\u5f55\nawait dirHandle.removeEntry('neo', { recursive: true });\n")),(0,i.kt)("h2",{id:"origin-private-file-system"},"Origin Private File System"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OPFS - Origin Private File System"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.chromestatus.com/feature/5702777582911488"},"chromestatus"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dev 94, trail 95, shiping 99")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// FileSystemDirectoryHandle\nconst root = await navigator.storage.getDirectory();\n")),(0,i.kt)("h2",{id:"drop-as-handle"},"Drop as Handle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="drop-handle.js"',title:'"drop-handle.js"'},"elem.addEventListener('dragover', (e) => {\n  // Prevent navigation.\n  e.preventDefault();\n});\n\nelem.addEventListener('drop', async (e) => {\n  // Prevent navigation.\n  e.preventDefault();\n  // Process all of the items.\n  for (const item of e.dataTransfer.items) {\n    // Careful: `kind` will be 'file' for both file\n    // _and_ directory entries.\n    if (item.kind === 'file') {\n      const entry = await item.getAsFileSystemHandle();\n      if (entry.kind === 'directory') {\n        handleDirectoryEntry(entry);\n      } else {\n        handleFileEntry(entry);\n      }\n    }\n  }\n});\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return u}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);