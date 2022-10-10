"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16351],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&s(e,r,t[r]);return e};const u={title:"ImageMagick"},f="imagemagick",g={unversionedId:"algorithm/cv/imagemagick",id:"algorithm/cv/imagemagick",title:"ImageMagick",description:"- http://www.imagemagick.org/",source:"@site/../notes/algorithm/cv/imagemagick.md",sourceDirName:"algorithm/cv",slug:"/algorithm/cv/imagemagick",permalink:"/notes/algorithm/cv/imagemagick",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/cv/imagemagick.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"ImageMagick"},sidebar:"docs",previous:{title:"Computer vision glossary",permalink:"/notes/algorithm/cv/glossary"},next:{title:"OpenCV Awesome",permalink:"/notes/algorithm/cv/opencv-awesome"}},d={},v=[{value:"Convert",id:"convert",level:2}],w={toc:v};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"imagemagick"}),"imagemagick"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.imagemagick.org/"}),"http://www.imagemagick.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.imagemagick.org/script/formats.php"}),"http://www.imagemagick.org/script/formats.php"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PNG, JPEG, GIF, HEIC, TIFF, DPX, EXR, WebP, Postscript, PDF, and SVG"))),(0,n.kt)("li",{parentName:"ul"},"resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and B\xe9zier curves.")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0 svg \u548c opencl \u652f\u6301\nbrew reinstall imagemagick --with-librsvg --with-opencl\n\n# \u5904\u7406 SVG \u4e5f\u53ef\u4ee5\u8003\u8651 inkscape\n# \u4f46\u5728 macos \u4e0b xserver \u663e\u793a\u7684\u4e0d\u592a\u597d\n# brew cask info inkscape\n\n")),(0,n.kt)("h2",m({},{id:"convert"}),"Convert"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"http://www.imagemagick.org/script/convert.php"}),"http://www.imagemagick.org/script/convert.php"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# -append \u81ea\u4e0a\u81f3\u4e0b\u5408\u5e76\n# +append \u81ea\u5de6\u81f3\u53f3\u5408\u5e76\nconvert a.png b.png -append full.png\n\nconvert -resize ${resize}x${resize} -unsharp 1x4\n\nmogrify -resize 16x12 -quality 100 -path ../new-thumbs *.jpg\n\n# \u5408\u5e76 PDF\nconvert -density 150 *.pdf output.pdf\nconvert -density 600 file1.pdf file2.pdf -resize 50% new.pdf\n\n# ghostscript\ngs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=temp.pdf pdf1.pdf pdf2.pdf\n# PDF Toolkit\npdftk pdf1.pdf pdf2.pdf cat output temp.pdf\n")))}y.isMDXComponent=!0}}]);