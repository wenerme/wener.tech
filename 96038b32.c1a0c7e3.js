(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{1083:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=i.a.createContext({}),b=function(e){var n=i.a.useContext(f),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=b(e.components);return i.a.createElement(f.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=b(r),s=t,m=u["".concat(c,".").concat(s)]||u[s]||p[s]||o;return r?i.a.createElement(m,a(a({ref:n},f),{},{components:r})):i.a.createElement(m,a({ref:n},f))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=s;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var f=2;f<o;f++)c[f]=r[f];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},667:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return b}));var t=r(3),i=r(8),o=(r(0),r(1083)),c={id:"libreoffice-online",title:"LibreOffice Online"},a={unversionedId:"service/office/libreoffice-online",id:"service/office/libreoffice-online",isDocsHomePage:!1,title:"LibreOffice Online",description:"* LibreOffice Online WebSocket Daemon (loolwsd)",source:"@site/notes/service/office/libreoffice-online.md",slug:"/service/office/libreoffice-online",permalink:"/notes/service/office/libreoffice-online",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/office/libreoffice-online.md",version:"current",sidebar:"docs",previous:{title:"Collabora Online",permalink:"/notes/service/office/collabora"},next:{title:"ONLYOFFICE",permalink:"/notes/service/office/onlyoffice"}},l=[],f={toc:l};function b(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},f,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LibreOffice Online WebSocket Daemon (loolwsd)"),Object(o.b)("li",{parentName:"ul"},"\u7aef\u53e3 9980"),Object(o.b)("li",{parentName:"ul"},"WOPI \u534f\u8bae"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/LibreOffice/online"},"LibreOffice/online")," - MPL"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/LibreOffice/online/blob/master/wsd/reference.md"},"LibreOffice Online API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://help.nextcloud.com/t/installing-new-fonts-in-collabora/22758"},"\u5b89\u88c5\u65b0\u5b57\u4f53")))),Object(o.b)("li",{parentName:"ul"},"\u5b57\u5178 en_US en_GB en_AU en_CA en_NZ en_IE en_ZA en_JM en_BS en_BZ en_TT en_ZW en_PH en_IN en_NA en_GH en_MW ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# https://hub.docker.com/r/libreoffice/online/\n# -e DONT_GEN_SSL_CERT=1 \u53ef\u4ee5\u4e0d\u751f\u6210\u8bc1\u4e66 - \u81ea\u5df1\u63d0\u4f9b\ndocker run --rm -it \\\n  -p 9980:9980 \\\n  --name libre libreoffice/online\n")))}b.isMDXComponent=!0}}]);