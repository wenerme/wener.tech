(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1172:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||p[d]||l;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},740:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(8),l=(r(0),r(1172)),a={title:"Electron FAQ"},i={unversionedId:"web/framework/electron-faq",id:"web/framework/electron-faq",isDocsHomePage:!1,title:"Electron FAQ",description:"- ASAR",source:"@site/notes/web/framework/electron-faq.md",slug:"/web/framework/electron-faq",permalink:"/notes/web/framework/electron-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron-faq.md",version:"current",sidebar:"docs",previous:{title:"Electron Browser",permalink:"/notes/web/framework/electron-browser"},next:{title:"Electron",permalink:"/notes/web/framework/electron"}},c=[{value:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8",children:[]},{value:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron",id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron",children:[]},{value:"BrowserView vs webview",id:"browserview-vs-webview",children:[]},{value:"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5",id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5",children:[]},{value:"Failed to fetch extension, trying 4 more times",id:"failed-to-fetch-extension-trying-4-more-times",children:[]},{value:"ExtensionLoadWarning: Warnings loading extension at",id:"extensionloadwarning-warnings-loading-extension-at",children:[]},{value:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898",children:[]},{value:"Electron Helper (Renderer) CoreText note: Client requested name &quot;.PingFangSC-Semibold&quot;, it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +NSFont systemFontOfSize:.",id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize",children:[]},{value:"Extension server error: Object not found: top&quot;",id:"extension-server-error-object-not-found-top",children:[]},{value:"partition vs session",id:"partition-vs-session",children:[]},{value:"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME",id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme",children:[]}],s={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ASAR")),Object(l.b)("h2",{id:"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8"},"\u65e0\u8fb9\u63a7\u7a97\u53e3\u5076\u5c14\u65e0\u6cd5\u62d6\u52a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u89e3\uff0c\u7f29\u653e\u4e00\u4e0b\u53ef\u4ee5\u62d6\u52a8"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/21621"},"electron/electron#21621"))),Object(l.b)("h2",{id:"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728-electron"},"\u5982\u4f55\u68c0\u6d4b\u8fd0\u884c\u5728 electron"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"window && window.process && window.process.type;\n\nprocess.versions['electron'];\n\n// Electron/\nnavigator.userAgent;\n\n// \u5982\u679c contextBridge.exposeInMainWorld\nglobalThis.electron;\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/2288"},"electron/electron#2288"))),Object(l.b)("h2",{id:"browserview-vs-webview"},"BrowserView vs webview"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BrowserWindow - \u7528\u4e8e\u66ff\u4ee3 webview \u6807\u7b7e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Electron \u63a5\u53e3 - \u975e DOM - \u4f4d\u7f6e\u76f8\u5bf9\u4e8e\u7236\u7a97\u53e3\uff0c\u9700\u8981\u81ea\u884c\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u5f00\u542f\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - \u4e3b\u8fdb\u7a0b\u63a7\u5236"))),Object(l.b)("li",{parentName:"ul"},"webview - \u4e0d\u63a8\u8350\u4f7f\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"html tag - \u597d\u4f7f\u7528\uff0c\u597d\u5e03\u5c40"),Object(l.b)("li",{parentName:"ul"},"\u989d\u5916\u6e32\u67d3\u8fdb\u7a0b - out-of-process iframe - \u6240\u6709\u901a\u8baf\u90fd\u662f IPC"),Object(l.b)("li",{parentName:"ul"},"\u901f\u5ea6\u6162\u4e8e iframe")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/web-embeds"},"web-embeds"))))),Object(l.b)("h2",{id:"chrome-\u6269\u5c55\u652f\u6301\u60c5\u51b5"},"Chrome \u6269\u5c55\u652f\u6301\u60c5\u51b5"),Object(l.b)("p",null,"\u652f\u6301\u90e8\u5206\u6269\u5c55"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.electronjs.org/docs/api/extensions"},"Chrome \u6269\u5c55\u652f\u6301"))),Object(l.b)("h2",{id:"failed-to-fetch-extension-trying-4-more-times"},"Failed to fetch extension, trying 4 more times"),Object(l.b)("p",null,"\u6700\u597d\u542f\u52a8\u65f6\u5f00\u4ee3\u7406\uff0c\u6bd4\u5982\u4e00\u822c\u4f1a\u52a0\u8f7d react devtool"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"fmkadmapgofadopljbjfkapdkoienihi - React Developer Tools")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'ls "$HOME/Library/Application Support/Electron/extensions/"\n')),Object(l.b)("h2",{id:"extensionloadwarning-warnings-loading-extension-at"},"ExtensionLoadWarning: Warnings loading extension at"),Object(l.b)("p",null,"electron \u9ad8\u7248\u672c \u63d2\u4ef6\u52a0\u8f7d\u5931\u8d25"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/MarshallOfSound/electron-devtools-installer/pull/191"},"MarshallOfSound/electron-devtools-installer#191"))),Object(l.b)("h2",{id:"\u5b89\u5168\u76f8\u5173\u95ee\u9898"},"\u5b89\u5168\u76f8\u5173\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/security"},"https://www.electronjs.org/docs/tutorial/security"))),Object(l.b)("h2",{id:"electron-helper-renderer-coretext-note-client-requested-name-pingfangsc-semibold-it-will-get-times-roman-rather-than-the-intended-font-all-system-ui-font-access-should-be-through-proper-apis-such-as-ctfontcreateuifontforlanguage-or-nsfont-systemfontofsize"},'Electron Helper (Renderer) CoreText note: Client requested name ".PingFangSC-Semibold", it will get Times-Roman rather than the intended font. All system UI font access should be through proper APIs such as CTFontCreateUIFontForLanguage() or +',"[NSFont systemFontOfSize:]","."),Object(l.b)("p",null,"\u4e0d\u5f71\u54cd\u4f7f\u7528"),Object(l.b)("h2",{id:"extension-server-error-object-not-found-top"},'Extension server error: Object not found: top"'),Object(l.b)("p",null,"did-frame-finish-load \u4e4b\u540e \u6253\u5f00 devtool"),Object(l.b)("h2",{id:"partition-vs-session"},"partition vs session"),Object(l.b)("h2",{id:"electron-failed-to-load-url-with-error-err_unknown_url_scheme"},"electron Failed to load URL: with error: ERR_UNKNOWN_URL_SCHEME"),Object(l.b)("p",null,"\u5c1d\u8bd5\u4e0d\u7528 file \u534f\u8bae \u6216\u8005\u81ea\u884c\u5904\u7406"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import { protocol } from \"electron\";\n\n\nprotocol.registerFileProtocol('file', (request, cb) => {\n  const url = request.url.replace('file:///', '');\n  const decodedUrl = decodeURIComponent(url);\n  try {\n    return cb(decodedUrl);\n  } catch (error) {\n    console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error);\n  }\n});\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/23757"},"https://github.com/electron/electron/issues/23757"))))}b.isMDXComponent=!0}}]);