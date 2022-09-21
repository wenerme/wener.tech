"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[75919],{37735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(96600),a=n(27279),i=(n(59496),n(3905)),o=["components"],l={title:"Conv"},s=void 0,c={unversionedId:"service/data/data-conv",id:"service/data/data-conv",title:"Conv",description:"- https://github.com/dilshod/xlsx2csv",source:"@site/notes/service/data/data-conv.md",sourceDirName:"service/data",slug:"/service/data/data-conv",permalink:"/notes/service/data/data-conv",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/data/data-conv.md",tags:[],version:"current",frontMatter:{title:"Conv"},sidebar:"docs",previous:{title:"\u6570\u636e\u6cc4\u6f0f",permalink:"/notes/service/data/data-breach"},next:{title:"Data FAQ",permalink:"/notes/service/data/data-faq"}},u={},p=[{value:"gnumeric",id:"gnumeric",level:2},{value:"Fallback font &#39;Sans 10.000000&#39; not available, trying &#39;fixed&#39;",id:"fallback-font-sans-10000000-not-available-trying-fixed",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dilshod/xlsx2csv"},"https://github.com/dilshod/xlsx2csv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"python")))),(0,i.kt)("h2",{id:"gnumeric"},"gnumeric"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gnumeric - \u684c\u9762\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},"ssconvert"),(0,i.kt)("li",{parentName:"ul"},"ssdiff"),(0,i.kt)("li",{parentName:"ul"},"ssgrep"),(0,i.kt)("li",{parentName:"ul"},"ssindex"),(0,i.kt)("li",{parentName:"ul"},"libspreadsheet.so"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.gnome.org/users/gnumeric/stable/index.html.en"},"https://help.gnome.org/users/gnumeric/stable/index.html.en"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'brew install gnumeric # macOS\napk add gnumeric      # AlpineLinux\n\nssconvert --list-importers\nssconvert --list-exporters\n\nssconvert in.xls out.csv\n\nfor i in *.xlsx; do\n  o="${i%.xlsx}.csv"\n  [ ! -e "$o" ] && ssconvert "$i" "$o"\ndone\n\nlibreoffice --headless --convert-to csv $filename --outdir $outdir\n# users ALL=(ALL) NOPASSWD: libreoffice\n')),(0,i.kt)("h3",{id:"fallback-font-sans-10000000-not-available-trying-fixed"},"Fallback font 'Sans 10.000000' not available, trying 'fixed'"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gnu-free-sans-fonts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apk add font-opensans\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);