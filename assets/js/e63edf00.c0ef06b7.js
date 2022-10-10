"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[88541],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const f={id:"objc",title:"Object C"},m="Object C",d={unversionedId:"languages/objc",id:"languages/objc",title:"Object C",description:"Tips",source:"@site/../notes/languages/objc.md",sourceDirName:"languages",slug:"/languages/objc",permalink:"/notes/languages/objc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/objc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"objc",title:"Object C"},sidebar:"docs",previous:{title:"MiniQuery",permalink:"/notes/languages/miniquery"},next:{title:"Parser",permalink:"/notes/languages/parser/"}},b={},g=[{value:"Tips",id:"tips",level:2},{value:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",level:2},{value:"OpenCV",id:"opencv",level:2}],v={toc:g};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"object-c"}),"Object C"),(0,r.kt)("h2",s({},{id:"tips"}),"Tips"),(0,r.kt)("h2",s({},{id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"}),"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"),(0,r.kt)("p",null,"URL Connection \u5904\u7406\u91cd\u5b9a\u5411\u65f6, \u8bf7\u6c42\u65b9\u6cd5\u53ef\u80fd\u4f1a\u4e0d\u6b63\u786e "),(0,r.kt)("h2",s({},{id:"opencv"}),"OpenCV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"}),"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u7684\u6846\u67b6"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Accelerate"),(0,r.kt)("li",{parentName:"ul"},"AssetsLibrary"),(0,r.kt)("li",{parentName:"ul"},"AVFoundation"),(0,r.kt)("li",{parentName:"ul"},"CoreGraphics"),(0,r.kt)("li",{parentName:"ul"},"CoreImage"),(0,r.kt)("li",{parentName:"ul"},"CoreMedia"),(0,r.kt)("li",{parentName:"ul"},"CoreVideo"),(0,r.kt)("li",{parentName:"ul"},"QuartzCore"),(0,r.kt)("li",{parentName:"ul"},"UIKit"),(0,r.kt)("li",{parentName:"ul"},"Foundation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981\u6dfb\u52a0\u7684 PCH"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-c"}),'#import <Availability.h>\n\n#ifndef __IPHONE_4_0\n#warning "This project uses features only available in iOS SDK 4.0 and later."\n#endif\n\n#ifdef __cplusplus\n#import <opencv2/opencv.hpp>\n#endif\n\n#ifdef __OBJC__\n        #import <UIKit/UIKit.h>\n        #import <Foundation/Foundation.h>\n#endif\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u627e\u4e0d\u5230 'opencv2/opencv.hpp'",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u6846\u67b6\u641c\u7d22\u4f4d\u7f6e\u4e0d\u5bf9,\u53ef\u4ee5\u5c1d\u8bd5\u624b\u52a8\u6dfb\u52a0\u6846\u67b6\u641c\u7d22\u8def\u5f84"))),(0,r.kt)("li",{parentName:"ul"},"Swift \u5982\u4f55\u8c03\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e00\u4e2a Bridging-Header, \u7136\u540e\u5199\u597d\u54cd\u5e94\u7684 '.mm' \u5305\u88c5\u65b9\u6cd5 \u63d0\u4f9b\u7ed9 Swift \u8c03\u7528")))))))}y.isMDXComponent=!0}}]);