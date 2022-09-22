"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33324],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return w}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),w=a,f=c["".concat(p,".").concat(w)]||c[w]||m[w]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return w},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={title:"wails"},w="wails",f={unversionedId:"web/framework/wails",id:"web/framework/wails",title:"wails",description:"- wailsapp/wails",source:"@site/../notes/web/framework/wails.md",sourceDirName:"web/framework",slug:"/web/framework/wails",permalink:"/notes/web/framework/wails",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/wails.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1655510210,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{title:"wails"},sidebar:"docs",previous:{title:"Vue",permalink:"/notes/web/framework/vue"},next:{title:"jsdelivr",permalink:"/notes/web/jsdelivr"}},d={},b=[{value:"Binding/Bridge",id:"bindingbridge",level:2}],k={toc:b};function g(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",m({},{id:"wails"}),"wails"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/wailsapp/wails"}),"wailsapp/wails"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Webview \u7684\u5e94\u7528\u5c01\u88c5"))),(0,r.kt)("li",{parentName:"ul"},"Windows - ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/"}),"WebView2")),(0,r.kt)("li",{parentName:"ul"},"macOS - Safari"),(0,r.kt)("li",{parentName:"ul"},"Linux - gcc,libgtk3,libwebkit"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 upx \u538b\u7f29, nsis \u6253\u5305"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u73af\u5883",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Vite")))),(0,r.kt)("admonition",m({},{type:"info"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u591a WebView ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/wailsapp/wails/discussions/1452"}),"#1452"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u6709 electron \u652f\u6301"))),(0,r.kt)("li",{parentName:"ul"},"DnD \u83b7\u53d6\u771f\u5b9e\u6587\u4ef6\u8def\u5f84 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/wailsapp/wails/issues/1090"}),"#1090")),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5347\u7ea7 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/wailsapp/wails/issues/1178"}),"#1178")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"go install github.com/wailsapp/wails/v2/cmd/wails@latest\n\nbrew install upx nsis # macOS \u5f00\u53d1\u989d\u5916\u4f9d\u8d56\nwails doctor          # \u68c0\u67e5\u7cfb\u7edf\u73af\u5883\n\nwails init -n my-wails -t react-ts\ncd ./my-wails/\nwails dev\n\n# -platform Download, Embed, Browser, Error\n# -clean \u6e05\u7a7a build/bin\n# -debug \u5141\u8bb8 inspect\nwails build -trimpath -upx -platform windows/amd64 -webview2 Embed -nsis\nwails build -trimpath -upx -platform darwin/amd64\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OnStartup"),(0,r.kt)("li",{parentName:"ul"},"OnDomReady"),(0,r.kt)("li",{parentName:"ul"},"OnBeforeClose"),(0,r.kt)("li",{parentName:"ul"},"OnShutdown")))),(0,r.kt)("h2",m({},{id:"bindingbridge"}),"Binding/Bridge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"window.runtime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log{Print,Trace,Debug,Info,Warning,Error,Fatal}"),(0,r.kt)("li",{parentName:"ul"},"Events{On,OnMultiple,Off,Once,Emit}"),(0,r.kt)("li",{parentName:"ul"},"Window{Reload,ReloadApp,SetSystemDefaultTheme,SetLightTheme,SetDarkTheme}"),(0,r.kt)("li",{parentName:"ul"},"Window Center/Fullscreen/Maximise/ToggleMaximise/Unmaximise/Minimise/Unminimise"),(0,r.kt)("li",{parentName:"ul"},"Window Get/Set Size/MaxSize/MinSize/Position"),(0,r.kt)("li",{parentName:"ul"},"Window Hide/Show"),(0,r.kt)("li",{parentName:"ul"},"Window SetRGBA"),(0,r.kt)("li",{parentName:"ul"},"BrowserOpenURL"),(0,r.kt)("li",{parentName:"ul"},"Environment"),(0,r.kt)("li",{parentName:"ul"},"Quit - \u9000\u51fa\u5e94\u7528"))),(0,r.kt)("li",{parentName:"ul"},"Go Runtime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dialog"),(0,r.kt)("li",{parentName:"ul"},"Menu")))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"export function Greet(arg1) {\n  return window['go']['main']['App']['Greet'](arg1);\n}\n")))}g.isMDXComponent=!0}}]);