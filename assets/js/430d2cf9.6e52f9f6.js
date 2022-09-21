"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71975],{75177:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(96600),o=t(27279),a=(t(59496),t(3905)),c=["components"],s={title:"Electron Browser"},i=void 0,u={unversionedId:"web/framework/electron-browser",id:"web/framework/electron-browser",title:"Electron Browser",description:"BEAKER",source:"@site/notes/web/framework/electron-browser.md",sourceDirName:"web/framework",slug:"/web/framework/electron-browser",permalink:"/notes/web/framework/electron-browser",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/electron-browser.md",tags:[],version:"current",frontMatter:{title:"Electron Browser"},sidebar:"docs",previous:{title:"Electron Awesome",permalink:"/notes/web/framework/electron-awesome"},next:{title:"electron-builder",permalink:"/notes/web/framework/electron-builder"}},l={},p=[{value:"BEAKER",id:"beaker",level:2}],f={toc:p};function b(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"beaker"},"BEAKER"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u81ea\u5b9a\u4e49 userData - \u6d4b\u8bd5\n// app.setPath('userData', getEnvVar('BEAKER_USER_DATA_PATH'))\n\nprocess.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = '1'; // we know, we know\n\n// enable the sandbox\napp.enableSandbox();\n\n// HACK fix for cors in custom protocols\n// see https://github.com/electron/electron/issues/20730\napp.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');\n\n// enable process reuse to speed up navigations\n// see https://github.com/electron/electron/issues/18397\napp.allowRendererProcessReuse = true;\n\n// configure the protocols\nprotocol.registerSchemesAsPrivileged([\n  {\n    scheme: 'dat',\n    privileges: { standard: true, secure: true, allowServiceWorkers: true, supportFetchAPI: true, corsEnabled: true },\n  },\n  {\n    scheme: 'hyper',\n    privileges: {\n      standard: true,\n      secure: true,\n      allowServiceWorkers: true,\n      supportFetchAPI: true,\n      corsEnabled: true,\n      stream: true,\n    },\n  },\n  {\n    scheme: 'beaker',\n    privileges: { standard: true, secure: true, allowServiceWorkers: true, supportFetchAPI: true, corsEnabled: true },\n  },\n]);\n")))}b.isMDXComponent=!0},3905:function(e,r,t){t.d(r,{kt:function(){return f}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),b=o,m=f["".concat(i,".").concat(b)]||f[b]||l[b]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);