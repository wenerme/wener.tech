/*! For license information please see 56c07915.3d098c28.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10277],{45980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(11527),r=t(47214);const i={title:"FileSystem"},l="FileSystem",a={id:"web/spec/web-fs",title:"FileSystem",description:"- https://wicg.github.io/file-system-access/",source:"@site/../notes/web/spec/web-fs.md",sourceDirName:"web/spec",slug:"/web/spec/web-fs",permalink:"/notes/web/spec/web-fs",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/web-fs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639938220,formattedLastUpdatedAt:"Dec 19, 2021",frontMatter:{title:"FileSystem"},sidebar:"docs",previous:{title:"Transport",permalink:"/notes/web/spec/transport"},next:{title:"Web Spec Awesome",permalink:"/notes/web/spec/awesome"}},o={},c=[{value:"Origin Private File System",id:"origin-private-file-system",level:2},{value:"Drop as Handle",id:"drop-as-handle",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"filesystem",children:"FileSystem"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://wicg.github.io/file-system-access/",children:"https://wicg.github.io/file-system-access/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/WICG/file-system-access/blob/main/EXPLAINER.md",children:"explainer"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://w3c.github.io/FileAPI/",children:"https://w3c.github.io/FileAPI/"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://web.dev/file-system-access/",children:"https://web.dev/file-system-access/"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GoogleChromeLabs/text-editor/blob/main/src/inline-scripts/fs-helpers.js",children:"fs-helpers.js"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://web.dev/browser-fs-access/",children:"https://web.dev/browser-fs-access/"})}),"\n",(0,s.jsxs)(n.li,{children:["Chrome\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chrome 86+\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker",children:"window.showOpenFilePicker"})}),"\n",(0,s.jsx)(n.li,{children:"navigator.storage.getDirectory"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"dataurl \u652f\u6301 blob:, filesystem:"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'<a href="" download="filename.txt">'})," - \u89e6\u53d1\u4e0b\u8f7d\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download",children:"download"})," \u4f9d\u8d56\u670d\u52a1\u7aef\u8fd4\u56de ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition",children:"Content-Disposition"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const dirHandle = await window.showDirectoryPicker();\n\nconst saveFileHandle = await self.showSaveFilePicker({\n  suggestedName: 'Untitled Text.txt',\n  types: [\n    {\n      description: 'Text documents',\n      accept: {\n        'text/plain': ['.txt'],\n      },\n    },\n  ],\n});\n\nconst openFileHandle = await self.showOpenFilePicker({\n  // desktop, documents, downloads, music, pictures, videos\n  startIn: 'pictures',\n  // startIn: dirHandle,\n});\n\n// \u521b\u5efa\u76ee\u5f55\nconst neoDirHandle = await dirHandle.getDirectoryHandle('neo', { create: true });\n// \u521b\u5efa\u6587\u4ef6\nconst readmeFileHandle = await neoDirHandle.getFileHandle('README.txt', { create: true });\n// \u5220\u9664\u6587\u4ef6\nawait neoDirHandle.removeEntry('README.txt');\n// \u9012\u5f52\u5220\u9664\u76ee\u5f55\nawait dirHandle.removeEntry('neo', { recursive: true });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"origin-private-file-system",children:"Origin Private File System"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OPFS - Origin Private File System"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.chromestatus.com/feature/5702777582911488",children:"chromestatus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"dev 94, trail 95, shiping 99"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// FileSystemDirectoryHandle\nconst root = await navigator.storage.getDirectory();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"drop-as-handle",children:"Drop as Handle"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="drop-handle.js"',children:"elem.addEventListener('dragover', (e) => {\n  // Prevent navigation.\n  e.preventDefault();\n});\n\nelem.addEventListener('drop', async (e) => {\n  // Prevent navigation.\n  e.preventDefault();\n  // Process all of the items.\n  for (const item of e.dataTransfer.items) {\n    // Careful: `kind` will be 'file' for both file\n    // _and_ directory entries.\n    if (item.kind === 'file') {\n      const entry = await item.getAsFileSystemHandle();\n      if (entry.kind === 'directory') {\n        handleDirectoryEntry(entry);\n      } else {\n        handleFileEntry(entry);\n      }\n    }\n  }\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var s=t(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},47214:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(50959);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);