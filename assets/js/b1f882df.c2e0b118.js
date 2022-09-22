"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[92586],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,v=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55613:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"AV1"},c="AV1",p={unversionedId:"service/media/format/av1",id:"service/media/format/av1",title:"AV1",description:"AV1 \u7f16\u7801\u975e\u5e38\u975e\u5e38\u6162",source:"@site/../notes/service/media/format/av1.md",sourceDirName:"service/media/format",slug:"/service/media/format/av1",permalink:"/notes/service/media/format/av1",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/media/format/av1.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"AV1"},sidebar:"docs",previous:{title:"ffmpeg",permalink:"/notes/service/media/ffmpeg"},next:{title:"AVIF",permalink:"/notes/service/media/format/avif"}},u={},m=[],s={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"av1"},"AV1"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"AV1 \u7f16\u7801\u975e\u5e38\u975e\u5e38\u6162\nmacOS Intel i7-8750H (12) @ 2.20GHz fps=1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki/Encode/AV1"},"Encode/AV1")),(0,i.kt)("li",{parentName:"ul"},"libaom",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Constant quality"),(0,i.kt)("li",{parentName:"ul"},"Constrained quality"),(0,i.kt)("li",{parentName:"ul"},"2-pass average bitrate"),(0,i.kt)("li",{parentName:"ul"},"1-pass average bitrate"))),(0,i.kt)("li",{parentName:"ul"},"libsvtav1 - Intel x86-64 codec for AV1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Scalable Video Technology for AV1"),(0,i.kt)("li",{parentName:"ul"},"\u4f1a\u6bd4 libaom \u5feb"))),(0,i.kt)("li",{parentName:"ul"},"librav1e - Xiph encoder for AV1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -h encoder=libaom-av1\n\n# Constant quality\n# CRF 0\u201363 - 0 lossless\nffmpeg -i input.mp4 -c:v libaom-av1 -crf 30 -b:v 0 av1_test.mkv\n\n# libsvtav1\nffmpeg -i input.mp4 -c:v libsvtav1 -y test.mp4\n")))}f.isMDXComponent=!0}}]);