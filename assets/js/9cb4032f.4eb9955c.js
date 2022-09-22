"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17558],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(96600),o=r(27279),l=(r(59496),r(49613)),a=["components"],i={title:"Electron FAQ"},s=void 0,c={unversionedId:"web/framework/electron-faq",id:"web/framework/electron-faq",title:"Electron FAQ",description:"- ASAR",source:"@site/notes/web/framework/electron-faq.md",sourceDirName:"web/framework",slug:"/web/framework/electron-faq",permalink:"/notes/web/framework/electron-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron-faq.md",tags:[],version:"current",frontMatter:{title:"Electron FAQ"},sidebar:"docs",previous:{title:"Electron Dev",permalink:"/notes/web/framework/electron-dev"},next:{title:"Electron",permalink:"/notes/web/framework/electron"}},u={},p=[{value:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",level:2},{value:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron",id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron",level:2},{value:"BrowserView vs webview",id:"browserview-vs-webview",level:2},{value:"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5",id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5",level:2},{value:"Failed to fetch extension, trying 4 more times",id:"failed-to-fetch-extension-trying-4-more-times",level:2},{value:"ExtensionLoadWarning: Warnings loading extension at",id:"extensionloadwarning-warnings-loading-extension-at",level:2},{value:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",level:2},{value:"Electron Helper (Renderer) CoreText note: Client requested name &quot;.PingFangSC-Semibold&quot;, it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +NSFont systemFontOfSize:.",id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize",level:2},{value:"Extension server error: Object not found: top&quot;",id:"extension-server-error-object-not-found-top",level:2},{value:"partition vs session",id:"partition-vs-session",level:2},{value:"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME",id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ASAR")),(0,l.kt)("h2",{id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8"},"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u89e3\uff0c\u7f29\u653e\u4e00\u4e0b\u53ef\u4ee5\u62d6\u52a8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/21621"},"electron/electron#21621"))),(0,l.kt)("h2",{id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron"},"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window && window.process && window.process.type;\n\nprocess.versions['electron'];\n\n// Electron/\nnavigator.userAgent;\n\n// \u5982\u679c contextBridge.exposeInMainWorld\nglobalThis.electron;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/2288"},"electron/electron#2288"))),(0,l.kt)("h2",{id:"browserview-vs-webview"},"BrowserView vs webview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BrowserWindow - \u7528\u4e8e\u66ff\u4ee3 webview \u6807\u7b7e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Electron \u63a5\u53e3 - \u975e DOM - \u4f4d\u7f6e\u76f8\u5bf9\u4e8e\u7236\u7a97\u53e3\uff0c\u9700\u8981\u81ea\u884c\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5f00\u542f\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - \u4e3b\u8fdb\u7a0b\u63a7\u5236"))),(0,l.kt)("li",{parentName:"ul"},"webview - \u4e0d\u63a8\u8350\u4f7f\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"html tag - \u597d\u4f7f\u7528\uff0c\u597d\u5e03\u5c40"),(0,l.kt)("li",{parentName:"ul"},"\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - out-of-process iframe - \u6240\u6709\u901a\u8baf\u90fd\u662f IPC"),(0,l.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u6162\u4e8e iframe")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/web-embeds"},"web-embeds"))))),(0,l.kt)("h2",{id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5"},"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5"),(0,l.kt)("p",null,"\u652f\u6301\u90e8\u5206\u6269\u5c55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/api/extensions"},"Chrome \u6269\u5c55\u652f\u6301"))),(0,l.kt)("h2",{id:"failed-to-fetch-extension-trying-4-more-times"},"Failed to fetch extension, trying 4 more times"),(0,l.kt)("p",null,"\u6700\u597d\u542f\u52a8\u65f6\u5f00\u4ee3\u7406\uff0c\u6bd4\u5982\u4e00\u822c\u4f1a\u52a0\u8f7d react devtool"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fmkadmapgofadopljbjfkapdkoienihi - React Developer Tools")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'ls "$HOME/Library/Application Support/Electron/extensions/"\n')),(0,l.kt)("h2",{id:"extensionloadwarning-warnings-loading-extension-at"},"ExtensionLoadWarning: Warnings loading extension at"),(0,l.kt)("p",null,"electron \u9ad8\u7248\u672c \u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MarshallOfSound/electron-devtools-installer/pull/191"},"MarshallOfSound/electron-devtools-installer#191"))),(0,l.kt)("h2",{id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898"},"\u5b89\u5168\u76f8\u5173\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/security"},"https://www.electronjs.org/docs/tutorial/security"))),(0,l.kt)("h2",{id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize"},'Electron Helper (Renderer) CoreText note: Client requested name ".PingFangSC-Semibold", it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +',"[NSFont systemFontOfSize:]","."),(0,l.kt)("p",null,"\u4e0d\u5f71\u54cd\u4f7f\u7528"),(0,l.kt)("h2",{id:"extension-server-error-object-not-found-top"},'Extension server error: Object not found: top"'),(0,l.kt)("p",null,"did-frame-finish-load \u4e4b\u540e \u6253\u5f00 devtool"),(0,l.kt)("h2",{id:"partition-vs-session"},"partition vs session"),(0,l.kt)("h2",{id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme"},"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME"),(0,l.kt)("p",null,"\u5c1d\u8bd5\u4e0d\u7528 file \u534f\u8bae \u6216\u8005\u81ea\u884c\u5904\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { protocol } from \"electron\";\n\n\nprotocol.registerFileProtocol('file', (request, cb) => {\n  const url = request.url.replace('file:///', '');\n  const decodedUrl = decodeURIComponent(url);\n  try {\n    return cb(decodedUrl);\n  } catch (error) {\n    console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error);\n  }\n});\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/23757"},"https://github.com/electron/electron/issues/23757"))))}m.isMDXComponent=!0}}]);