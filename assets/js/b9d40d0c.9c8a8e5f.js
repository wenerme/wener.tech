"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30531],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45936:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"SVG"},s=void 0,c={unversionedId:"web/spec/svg",id:"web/spec/svg",title:"SVG",description:"- svg2-draft",source:"@site/notes/web/spec/svg.md",sourceDirName:"web/spec",slug:"/web/spec/svg",permalink:"/notes/web/spec/svg",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/svg.md",tags:[],version:"current",frontMatter:{title:"SVG"},sidebar:"docs",previous:{title:"ShadowDOM",permalink:"/notes/web/spec/shadowdom"},next:{title:"FileSystem",permalink:"/notes/web/spec/web-fs"}},p={},u=[{value:"\u7f29\u653e\u548c\u5927\u5c0f",id:"\u7f29\u653e\u548c\u5927\u5c0f",level:2},{value:"file-rule",id:"file-rule",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://svgwg.org/svg2-draft/"},"svg2-draft"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/SVG2/changes.html"},"Changes from SVG 1.1")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wpack.io/tutorials/using-various-svg-loader/"},"SVG Loaders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://inkscape.org/"},"https://inkscape.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://uxwing.com/svg-icon-editor/"},"https://uxwing.com/svg-icon-editor/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jakearchibald.github.io/svgomg/"},"https://jakearchibald.github.io/svgomg/"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# AI to SVG\ninkscape --file=icon.ai --export-plain-svg=icon.svg\n\n# macOS\nqlmanage -t -s 1000 -o . picture.svg\n\nbrew install librsvg\nrsvg-convert -h 32 icon.svg > icon-32.png\nrsvg-convert -h 200 icon.svg > icon.png\n")),(0,i.kt)("h2",{id:"\u7f29\u653e\u548c\u5927\u5c0f"},"\u7f29\u653e\u548c\u5927\u5c0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"viewBox \u63a7\u5236\u53ef\u89c1\u533a\u57df",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"minx, miny, width, height"))),(0,i.kt)("li",{parentName:"ul"},"width,height \u63a7\u5236\u7f29\u653e\u5927\u5c0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/scale-svg/"},"https://css-tricks.com/scale-svg/"))),(0,i.kt)("h2",{id:"file-rule"},"file-rule"),(0,i.kt)("p",null,"Fill-Rule is an SVG property that basically defines how to determine what shapes are filled or subtracted from the shape.\nThe default svg value is \u201cnonzero\u201d, and this is what Android requires. Unfortunately Sketch uses \u201cevenodd\u201d"),(0,i.kt)("p",null,'\u547d\u4ee4\u884c\u64cd\u4f5c\ninkscape -g $filename --verb=EditSelectAll --verb=SelectionUnGroup --verb=StrokeToPath --verb=FileSave"'),(0,i.kt)("p",null,"fill-rule evenodd \u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u90e8\u7684\u4e00\u4e9b\u5185\u5bb9\u88ab\u5ffd\u7565"),(0,i.kt)("p",null,"TL;DR: SVG icons should use fill-rule:nonzero instead of Sketch default evenodd property to support Android VectorDrawable (as of now)"))}m.isMDXComponent=!0}}]);