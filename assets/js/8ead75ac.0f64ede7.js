"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[58118],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),s=a,m=f["".concat(c,".").concat(s)]||f[s]||g[s]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={title:"pkg-config",tags:["Configuration"]},s="pkg-config",m={unversionedId:"languages/c/pkg-config",id:"languages/c/pkg-config",title:"pkg-config",description:"- .pc",source:"@site/../notes/languages/c/pkg-config.md",sourceDirName:"languages/c",slug:"/languages/c/pkg-config",permalink:"/notes/languages/c/pkg-config",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/c/pkg-config.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1649950136,formattedLastUpdatedAt:"Apr 14, 2022",frontMatter:{title:"pkg-config",tags:["Configuration"]},sidebar:"docs",previous:{title:"Skia",permalink:"/notes/languages/c/lib/skia"},next:{title:"Carbon",permalink:"/notes/languages/carbon/"}},b={},k=[],d={toc:k};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},d),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",g({},{id:"pkg-config"}),"pkg-config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},".pc"),(0,r.kt)("li",{parentName:"ul"},"PKG_CONFIG_PATH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/usr/local/Homebrew/Library/Homebrew/os/mac/pkgconfig"),(0,r.kt)("li",{parentName:"ul"},"/usr/lib/pkgconfig"),(0,r.kt)("li",{parentName:"ul"},"/usr/local/lib/pkgconfig"),(0,r.kt)("li",{parentName:"ul"},"/usr/lib/pkgconfig")))),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-bash"}),"# /usr/local/bin/pkg-config - brew\nwhich pkg-config\n\npkg-config --list-all\n\n# \u81ea\u5b9a\u4e49\u76ee\u5f55\nPKG_CONFIG_PATH=/usr/local/opt/openexr/lib/pkgconfig:/usr/local/opt/imath/lib/pkgconfig pkg-config --libs OpenEXR\n\n# \u6240\u6709 brew \u7684 pkgconfig\necho /usr/local/opt/*/lib/pkgconfig | tr ' ' ':'\n\n# \u68c0\u6d4b\u67d0\u4e2a\u5e93\u662f\u5426\u5b58\u5728, \u5982\u679c\u4e0d\u5b58\u5728\u4f1a\u663e\u793a\n# ld: cannot find -luv\ngcc -luv\n\nldconfig -p | grep libjpeg\npkg-config --cflags jpeg\npkg-config --libs jpeg\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"flag"),(0,r.kt)("th",g({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"--cflags"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"-I")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"--libs"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"-L -l")))))}y.isMDXComponent=!0}}]);