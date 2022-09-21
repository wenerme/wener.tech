"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82923],{61499:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m}});var r=t(96600),o=t(27279),s=(t(59496),t(3905)),i=["components"],a={title:"Windows Manifest"},c=void 0,l={unversionedId:"dev/windows/windows-manifest",id:"dev/windows/windows-manifest",title:"Windows Manifest",description:"- What is a Manifest (in Windows)?",source:"@site/notes/dev/windows/windows-manifest.md",sourceDirName:"dev/windows",slug:"/dev/windows/windows-manifest",permalink:"/notes/dev/windows/windows-manifest",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/windows/windows-manifest.md",tags:[],version:"current",frontMatter:{title:"Windows Manifest"},sidebar:"docs",previous:{title:"\u803b\u8fb1\u5899",permalink:"/notes/dev/wall-of-shame"},next:{title:"DevOps",permalink:"/notes/devops/"}},u={},m=[],d={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.samlogic.net/articles/manifest.htm"},"What is a Manifest (in Windows)?"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">\n<assemblyIdentity\n    version="1.0.0.0"\n    processorArchitecture="x86"\n    name="controls"\n    type="win32"\n></assemblyIdentity>\n<dependency>\n    <dependentAssembly>\n        <assemblyIdentity\n            type="win32"\n            name="Microsoft.Windows.Common-Controls"\n            version="6.0.0.0"\n            processorArchitecture="*"\n            publicKeyToken="6595b64144ccf1df"\n            language="*"\n        ></assemblyIdentity>\n    </dependentAssembly>\n</dependency>\n<trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">\n    <security>\n        <requestedPrivileges>\n            <requestedExecutionLevel level="requireAdministrator" uiAccess="false"/>\n        </requestedPrivileges>\n    </security>\n</trustInfo>\n</assembly>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cmd"},"# C:\\Program Files\\Microsoft SDKs\\Windows\\v6.1\\bin\nmt -inputresource:dll_with_manifest.dll;#1 -out:extracted.manifest\n")))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{kt:function(){return d}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||s;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);