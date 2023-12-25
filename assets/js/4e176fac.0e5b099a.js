/*! For license information please see 4e176fac.0e5b099a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8321],{52297:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=r(11527),o=r(47214);const l={title:"Electron FAQ",tags:["FAQ"]},s="Electron FAQ",i={id:"web/framework/electron/electron-faq",title:"Electron FAQ",description:"- ASAR",source:"@site/../notes/web/framework/electron/electron-faq.md",sourceDirName:"web/framework/electron",slug:"/web/framework/electron/faq",permalink:"/notes/web/framework/electron/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/electron/electron-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1702003754,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{title:"Electron FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"Electron Dev",permalink:"/notes/web/framework/electron/dev"},next:{title:"framework7",permalink:"/notes/web/framework/framework7"}},c={},a=[{value:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",level:2},{value:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron",id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron",level:2},{value:"BrowserView vs webview",id:"browserview-vs-webview",level:2},{value:"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5",id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5",level:2},{value:"Failed to fetch extension, trying 4 more times",id:"failed-to-fetch-extension-trying-4-more-times",level:2},{value:"ExtensionLoadWarning: Warnings loading extension at",id:"extensionloadwarning-warnings-loading-extension-at",level:2},{value:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",level:2},{value:"Electron Helper (Renderer) CoreText note: Client requested name &quot;.PingFangSC-Semibold&quot;, it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +[NSFont systemFontOfSize:].",id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize",level:2},{value:"Extension server error: Object not found: top&quot;",id:"extension-server-error-object-not-found-top",level:2},{value:"partition vs session",id:"partition-vs-session",level:2},{value:"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME",id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"electron-faq",children:"Electron FAQ"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ASAR"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Electronn 28 \u652f\u6301 ESM"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",children:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u76ee\u524d\u65e0\u89e3\uff0c\u7f29\u653e\u4e00\u4e0b\u53ef\u4ee5\u62d6\u52a8"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/electron/electron/issues/21621",children:"electron/electron#21621"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron",children:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"window && window.process && window.process.type;\n\nprocess.versions['electron'];\n\n// Electron/\nnavigator.userAgent;\n\n// \u5982\u679c contextBridge.exposeInMainWorld\nglobalThis.electron;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/electron/electron/issues/2288",children:"electron/electron#2288"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"browserview-vs-webview",children:"BrowserView vs webview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["BrowserWindow - \u7528\u4e8e\u66ff\u4ee3 webview \u6807\u7b7e\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Electron \u63a5\u53e3 - \u975e DOM - \u4f4d\u7f6e\u76f8\u5bf9\u4e8e\u7236\u7a97\u53e3\uff0c\u9700\u8981\u81ea\u884c\u7ba1\u7406"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u5f00\u542f\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - \u4e3b\u8fdb\u7a0b\u63a7\u5236"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["webview - \u4e0d\u63a8\u8350\u4f7f\u7528\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"html tag - \u597d\u4f7f\u7528\uff0c\u597d\u5e03\u5c40"}),"\n",(0,t.jsx)(n.li,{children:"\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - out-of-process iframe - \u6240\u6709\u901a\u8baf\u90fd\u662f IPC"}),"\n",(0,t.jsx)(n.li,{children:"\u901f\u5ea6\u6162\u4e8e iframe"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.electronjs.org/docs/tutorial/web-embeds",children:"web-embeds"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5",children:"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5"}),"\n",(0,t.jsx)(n.p,{children:"\u652f\u6301\u90e8\u5206\u6269\u5c55"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.electronjs.org/docs/api/extensions",children:"Chrome \u6269\u5c55\u652f\u6301"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"failed-to-fetch-extension-trying-4-more-times",children:"Failed to fetch extension, trying 4 more times"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u597d\u542f\u52a8\u65f6\u5f00\u4ee3\u7406\uff0c\u6bd4\u5982\u4e00\u822c\u4f1a\u52a0\u8f7d react devtool"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"fmkadmapgofadopljbjfkapdkoienihi - React Developer Tools"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ls "$HOME/Library/Application Support/Electron/extensions/"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"extensionloadwarning-warnings-loading-extension-at",children:"ExtensionLoadWarning: Warnings loading extension at"}),"\n",(0,t.jsx)(n.p,{children:"electron \u9ad8\u7248\u672c \u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/MarshallOfSound/electron-devtools-installer/pull/191",children:"MarshallOfSound/electron-devtools-installer#191"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",children:"\u5b89\u5168\u76f8\u5173\u95ee\u9898"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.electronjs.org/docs/tutorial/security",children:"https://www.electronjs.org/docs/tutorial/security"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize",children:'Electron Helper (Renderer) CoreText note: Client requested name ".PingFangSC-Semibold", it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +[NSFont systemFontOfSize:].'}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u5f71\u54cd\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h2,{id:"extension-server-error-object-not-found-top",children:'Extension server error: Object not found: top"'}),"\n",(0,t.jsx)(n.p,{children:"did-frame-finish-load \u4e4b\u540e \u6253\u5f00 devtool"}),"\n",(0,t.jsx)(n.h2,{id:"partition-vs-session",children:"partition vs session"}),"\n",(0,t.jsx)(n.h2,{id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme",children:"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u4e0d\u7528 file \u534f\u8bae \u6216\u8005\u81ea\u884c\u5904\u7406"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { protocol } from \"electron\";\n\n\nprotocol.registerFileProtocol('file', (request, cb) => {\n  const url = request.url.replace('file:///', '');\n  const decodedUrl = decodeURIComponent(url);\n  try {\n    return cb(decodedUrl);\n  } catch (error) {\n    console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error);\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/electron/electron/issues/23757",children:"https://github.com/electron/electron/issues/23757"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3354:(e,n,r)=>{var t=r(50959),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,l={},a=null,d=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:o,type:e,key:a,ref:d,props:l,_owner:i.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},11527:(e,n,r)=>{e.exports=r(3354)},47214:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(50959);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);