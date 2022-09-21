"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70755],{25400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(96600),a=n(27279),i=(n(59496),n(3905)),o=["components"],l={id:"objc",title:"Object C"},p=void 0,u={unversionedId:"languages/objc",id:"languages/objc",title:"Object C",description:"Tips",source:"@site/notes/languages/objc.md",sourceDirName:"languages",slug:"/languages/objc",permalink:"/notes/languages/objc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/objc.md",tags:[],version:"current",frontMatter:{id:"objc",title:"Object C"},sidebar:"docs",previous:{title:"MiniQuery",permalink:"/notes/languages/miniquery"},next:{title:"Parser",permalink:"/notes/languages/parser/"}},c={},s=[{value:"Tips",id:"tips",level:2},{value:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",level:2},{value:"OpenCV",id:"opencv",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"},"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"),(0,i.kt)("p",null,"URL Connection \u5904\u7406\u91cd\u5b9a\u5411\u65f6, \u8bf7\u6c42\u65b9\u6cd5\u53ef\u80fd\u4f1a\u4e0d\u6b63\u786e "),(0,i.kt)("h2",{id:"opencv"},"OpenCV"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"},"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u7684\u6846\u67b6"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accelerate"),(0,i.kt)("li",{parentName:"ul"},"AssetsLibrary"),(0,i.kt)("li",{parentName:"ul"},"AVFoundation"),(0,i.kt)("li",{parentName:"ul"},"CoreGraphics"),(0,i.kt)("li",{parentName:"ul"},"CoreImage"),(0,i.kt)("li",{parentName:"ul"},"CoreMedia"),(0,i.kt)("li",{parentName:"ul"},"CoreVideo"),(0,i.kt)("li",{parentName:"ul"},"QuartzCore"),(0,i.kt)("li",{parentName:"ul"},"UIKit"),(0,i.kt)("li",{parentName:"ul"},"Foundation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9700\u8981\u6dfb\u52a0\u7684 PCH"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#import <Availability.h>\n\n#ifndef __IPHONE_4_0\n#warning "This project uses features only available in iOS SDK 4.0 and later."\n#endif\n\n#ifdef __cplusplus\n#import <opencv2/opencv.hpp>\n#endif\n\n#ifdef __OBJC__\n        #import <UIKit/UIKit.h>\n        #import <Foundation/Foundation.h>\n#endif\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u95ee\u9898",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u627e\u4e0d\u5230 'opencv2/opencv.hpp'",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u6846\u67b6\u641c\u7d22\u4f4d\u7f6e\u4e0d\u5bf9,\u53ef\u4ee5\u5c1d\u8bd5\u624b\u52a8\u6dfb\u52a0\u6846\u67b6\u641c\u7d22\u8def\u5f84"))),(0,i.kt)("li",{parentName:"ul"},"Swift \u5982\u4f55\u8c03\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e00\u4e2a Bridging-Header, \u7136\u540e\u5199\u597d\u54cd\u5e94\u7684 '.mm' \u5305\u88c5\u65b9\u6cd5 \u63d0\u4f9b\u7ed9 Swift \u8c03\u7528")))))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);