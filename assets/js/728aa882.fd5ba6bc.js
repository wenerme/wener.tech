"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59698],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),s=a,m=f["".concat(c,".").concat(s)]||f[s]||g[s]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32577:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return g}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"pkg-config",tags:["Configuration"]},c=void 0,p={unversionedId:"languages/c/pkg-config",id:"languages/c/pkg-config",title:"pkg-config",description:"- .pc",source:"@site/notes/languages/c/pkg-config.md",sourceDirName:"languages/c",slug:"/languages/c/pkg-config",permalink:"/notes/languages/c/pkg-config",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/c/pkg-config.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",frontMatter:{title:"pkg-config",tags:["Configuration"]},sidebar:"docs",previous:{title:"Skia",permalink:"/notes/languages/c/lib/skia"},next:{title:"CUE",permalink:"/notes/languages/cue"}},u={},g=[],f={toc:g};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".pc"),(0,o.kt)("li",{parentName:"ul"},"PKG_CONFIG_PATH",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"/usr/local/Homebrew/Library/Homebrew/os/mac/pkgconfig"),(0,o.kt)("li",{parentName:"ul"},"/usr/lib/pkgconfig"),(0,o.kt)("li",{parentName:"ul"},"/usr/local/lib/pkgconfig"),(0,o.kt)("li",{parentName:"ul"},"/usr/lib/pkgconfig")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# /usr/local/bin/pkg-config - brew\nwhich pkg-config\n\npkg-config --list-all\n\n# \u81ea\u5b9a\u4e49\u76ee\u5f55\nPKG_CONFIG_PATH=/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig pkg-config --libs OpenEXR\n\n# \u6240\u6709 brew \u7684 pkgconfig\necho /usr/local/opt/*/lib/pkgconfig | tr ' ' ':'\n\n# \u68c0\u6d4b\u67d0\u4e2a\u5e93\u662f\u5426\u5b58\u5728, \u5982\u679c\u4e0d\u5b58\u5728\u4f1a\u663e\u793a\n# ld: cannot find -luv\ngcc -luv\n\nldconfig -p | grep libjpeg\npkg-config --cflags jpeg\npkg-config --libs jpeg\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"flag"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--cflags"),(0,o.kt)("td",{parentName:"tr",align:null},"-I")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--libs"),(0,o.kt)("td",{parentName:"tr",align:null},"-L -l")))))}s.isMDXComponent=!0}}]);