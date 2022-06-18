"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7950],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,N=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(N,o(o({ref:t},s),{},{components:n})):r.createElement(N,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Electron"},p=void 0,c={unversionedId:"web/framework/electron",id:"web/framework/electron",title:"Electron",description:"- electron/electron",source:"@site/notes/web/framework/electron.md",sourceDirName:"web/framework",slug:"/web/framework/electron",permalink:"/notes/web/framework/electron",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron.md",tags:[],version:"current",frontMatter:{title:"Electron"},sidebar:"docs",previous:{title:"Electron FAQ",permalink:"/notes/web/framework/electron-faq"},next:{title:"Ionic",permalink:"/notes/web/framework/ionic"}},s={},m=[{value:"vs NW.js vs Neutralinojs",id:"vs-nwjs-vs-neutralinojs",level:2},{value:"Mac \u6253\u5305\u540e\u975e\u5e38\u5927",id:"mac-\u6253\u5305\u540e\u975e\u5e38\u5927",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron"},"electron/electron")),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://slack.engineering/308d6fe94ae4"},"When a rewrite isn\u2019t: rebuilding Slack on the desktop"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Slack \u8d44\u6e90\u5360\u7528\u964d\u4f4e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2G -> 300M"))),(0,l.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e HTML \u6a21\u677f\u7684\u624b\u52a8 DOM \u66f4\u65b0 - \u91cd\u6784\u4e3a\u4f7f\u7528 React - \u54cd\u5e94\u5f0f\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u8fc7\u65e9\u7684\u6570\u636e\u52a0\u8f7d - \u6570\u636e\u7f13\u5b58\u3001\u6240\u6709\u6570\u636e\u90fd\u5047\u8bbe\u4e3a\u61d2\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u662f\u4e00\u4e2a\u72ec\u7acb\u8fdb\u7a0b - \u91cd\u6784\u4e3a\u5355\u8fdb\u7a0b\u3001\u7ec4\u4ef6\u611f\u77e5\u5de5\u4f5c\u7a7a\u95f4 - \u5b8c\u5168\u91cd\u5199"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/electron-timelines"},"\u53d1\u5e03\u65f6\u95f4\u7ebf\u548c\u7248\u672c\u5173\u7cfb"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Electron \u7248\u672c, Chrome \u7248\u672c, Node \u7248\u672c\u5173\u7cfb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/releases/"},"nodejs release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Node \u7248\u672c <-> \u6a21\u5757\u7248\u672c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/chromedriver"},"chromedriver"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://sites.google.com/chromium.org/driver/"},"ChromeDriver")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/mksnapshot"},"mksnapshot"),"\nJS -> \u4e8c\u8fdb\u5236"))),(0,l.kt)("li",{parentName:"ul"},"Tray \u4f7f\u7528 16x16 \u7684 ICON"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://electronjs.org/docs/api/native-image"},"https://electronjs.org/docs/api/native-image"))),(0,l.kt)("p",null,"tray\n",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@nahoc/lets-build-a-system-tray-cryptocurrency-tracker-for-mac-using-electron-part-1-7888747891b"},"https://medium.com/@nahoc/lets-build-a-system-tray-cryptocurrency-tracker-for-mac-using-electron-part-1-7888747891b")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"electron \u4e3b\u8981\u662f\u63d0\u4f9b\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u533a\u5206\u5f00\u53d1\u5e94\u7528\u548c\u6253\u5305\u5e94\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4f7f\u7528\u81ea\u5df1\u719f\u6089\u7684\u5de5\u5177\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u6253\u5305\u4f7f\u7528 electron-builder"))),(0,l.kt)("li",{parentName:"ul"},"electron \u533a\u5206 render \u548c main \u8fdb\u7a0b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"main \u8fd0\u884c\u5728 node \u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"render \u8fd0\u884c\u5728 web \u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},"Web \u548c \u540e\u7aef/main \u901a\u8fc7 ipc \u4ea4\u4e92"))),(0,l.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u63a8\u8350\u4f7f\u7528 preload+contextBridge \u8fdb\u884c\u5efa\u7acb ipc \u901a\u8baf")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 tray \u56fe\u6807\nconvert logo.png -resize 16x16 tray.png\n\necho -n 1 1.5 2 3 4 | xargs -d ' ' -n 1 -I {} sh -c 'convert logo.png -resize $(node -pe \"16*{}\") tray@{}x.png'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\n# https://electronjs.org/docs/tutorial/installation\n# \u6dd8\u5b9d\u6e90\u5f00\u53d1\u4f9d\u8d56\u5b89\u88c5\nELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ npm install electron --save-dev\n\n# \u6dd8\u5b9d\u6e90\u5168\u5c40\u5b89\u88c5\nELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ npm install electron -g\n# \u6216\u8005\nELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/ yarn global add electron\n\n# Node ABI \u7248\u672c\nyarn run -- electron -a\n\n# -i,--interactive \u4ea4\u4e92\u5f0f\u547d\u4ee4\u884c\n# -r,--require \u9884\u52a0\u8f7d\u6a21\u5757\n# -a,--abi \u663e\u793a Node ABI\n# \u5e94\u7528\u5165\u53e3 index.js, folder/package.json, folder/index.js, .html/.htm, http://,https://,file://\nelectron --inspect=5858 -r ./.erb/scripts/babel-register ./src/main/main.dev.ts\n\n# Mac \u4e0b\u9700\u8981 icns \u4f5c\u4e3a\u56fe\u6807, \u5982\u679c\u5b89\u88c5\u4e86 libicns \u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u8f6c\u6362\npng2icns app-icon.icns favicon-16x16.png favicon-32x32.png\n\n# \u4f7f\u7528 app-icon-1024.png \u751f\u6210\u4e2a\u4e2a\u5c3a\u5bf8\u7684\u56fe\u6807, \u5e76\u751f\u6210 icns\nmkdir app-icon.iconset\nsips -z 16 16     app-icon-1024.png --out app-icon.iconset/icon_16x16.png\nsips -z 32 32     app-icon-1024.png --out app-icon.iconset/icon_16x16@2x.png\nsips -z 32 32     app-icon-1024.png --out app-icon.iconset/icon_32x32.png\nsips -z 64 64     app-icon-1024.png --out app-icon.iconset/icon_32x32@2x.png\nsips -z 128 128   app-icon-1024.png --out app-icon.iconset/icon_128x128.png\nsips -z 256 256   app-icon-1024.png --out app-icon.iconset/icon_128x128@2x.png\nsips -z 256 256   app-icon-1024.png --out app-icon.iconset/icon_256x256.png\nsips -z 512 512   app-icon-1024.png --out app-icon.iconset/icon_256x256@2x.png\nsips -z 512 512   app-icon-1024.png --out app-icon.iconset/icon_512x512.png\ncp app-icon-1024.png app-icon.iconset/icon_512x512@2x.png\niconutil -c icns app-icon.iconset\nrm -R app-icon.iconset\n")),(0,l.kt)("h1",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u9694\u79bb - Electron 12+ \u9ed8\u8ba4\u5f00\u542f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542f\u540e preload \u8bbf\u95ee\u7684 window \u4e0d\u662f\u5b9e\u9645\u7684 window"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 contextBridge \u4ea4\u4e92"))),(0,l.kt)("li",{parentName:"ul"},"Fuses - Package time feature toggles"),(0,l.kt)("li",{parentName:"ul"},"MessagePort - \u7c7b\u4f3c window.postMessage\uff0c\u4f46\u6307\u5b9a MessageChannel",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u81ea\u6709\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ipcRenderer.postMessage \u548c WebContents.postMessage \u8fdb\u884c\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"electron \u5728\u4e3b\u8fdb\u7a0b\u652f\u6301 MessagePortMain, MessageChannelMain \u5b9e\u73b0\u7c7b\u4f3c\u8bed\u610f"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u589e close")))),(0,l.kt)("p",null,"\u9ed8\u8ba4 userAgent \u5305\u542b\u4e86 electron \u7248\u672c\u4fe1\u606f\uff0c\u53ef\u81ea\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function createWindow() {\n  win = new BrowserWindow({ width: 800, height: 600 });\n  win.loadURL('http://www.whoishostingthis.com/tools/user-agent/', { userAgent: 'Chrome' });\n\n  win.on('closed', () => {\n    win = null;\n  });\n}\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"vs-nwjs-vs-neutralinojs"},"vs NW.js vs Neutralinojs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/neutralinojs/evaluation"},"neutralinojs/evaluation")," - Neutralinojs vs Electron vs Nw.js"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://electronjs.org/docs/development/atom-shell-vs-node-webkit"},"Electron vs NW")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/e60b7289752"},"Why I prefer NW.js over Electron? "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 chrome.","*"," \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 chrome \u6269\u5c55"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 bytecode",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"electron \u53ef\u4ee5\u81ea\u5df1\u624b\u52a8\u6dfb\u52a0"))),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u79fb\u9664 dev \u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u65e7\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"\u5165\u53e3\u53ef\u4ee5\u662f js \u6216 html"),(0,l.kt)("li",{parentName:"ul"},"\u539f\u751f PDF \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248 Chromium"),(0,l.kt)("li",{parentName:"ul"},"NW.js \u652f\u6301\u76f4\u63a5\u4f7f\u7528 --url \u6253\u5f00\u4e00\u4e2a\u9875\u9762"))),(0,l.kt)("li",{parentName:"ul"},"Electron",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5efa\u81ea\u52a8\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u5927\u7684\u793e\u533a"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9 gyp \u6a21\u5757\u652f\u6301\u7684\u66f4\u597d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"electron-rebuild")))))),(0,l.kt)("h2",{id:"mac-\u6253\u5305\u540e\u975e\u5e38\u5927"},"Mac \u6253\u5305\u540e\u975e\u5e38\u5927"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/issues/2003"},"electron/electron#2003"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"osx       - 117.3 mb\nlinux32   -  60.3 mb\nlinux64   -  55.2 mb\nwin ia32  -  47.8 mb\nwin x64   -  66.2 mb\n")))}k.isMDXComponent=!0}}]);