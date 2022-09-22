"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11106],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return r?a.createElement(h,o(o({ref:t},m),{},{components:r})):a.createElement(h,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97596:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=r(96600),n=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"HEVC"},c="HEVC",p={unversionedId:"service/media/hevc",id:"service/media/hevc",title:"HEVC",description:"- StaZhu/enable-chromium-hevc-hardware-decoding",source:"@site/../notes/service/media/hevc.md",sourceDirName:"service/media",slug:"/service/media/hevc",permalink:"/notes/service/media/hevc",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/media/hevc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"HEVC"},sidebar:"docs",previous:{title:"HW Accel",permalink:"/notes/service/media/hardware-accel"},next:{title:"Media Awesome",permalink:"/notes/service/media/media-awesome"}},m={},s=[{value:"is hevc/h265 ready",id:"is-hevch265-ready",level:2},{value:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 H.265 / HEVC",id:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301-h265--hevc",level:2},{value:"fMP4-HLS",id:"fmp4-hls",level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hevc"},"HEVC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"open /Applications/Google\\ Chrome\\ Canary.app --args --enable-features=PlatformHEVCDecoderSupport\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding"},"StaZhu/enable-chromium-hevc-hardware-decoding"))),(0,i.kt)("h2",{id:"is-hevch265-ready"},"is hevc/h265 ready"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NO")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hevc \u4e13\u5229\u8d39\u7528\u9ad8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"chrome \u652f\u6301\u5f00\u6e90 av1"))),(0,i.kt)("li",{parentName:"ul"},"Intel Skylake Core 6 \u5f00\u59cb\u652f\u6301\u89e3\u7801 - 2015-08"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/?search=hevc"},"https://caniuse.com/?search=hevc")),(0,i.kt)("li",{parentName:"ul"},"Windows ",(0,i.kt)("a",{parentName:"li",href:"https://www.free-codecs.com/hevc_video_extension_download.htm"},"https://www.free-codecs.com/hevc_video_extension_download.htm")),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u89c6\u9891 ",(0,i.kt)("a",{parentName:"li",href:"https://www.libde265.org/downloads-videos/"},"https://www.libde265.org/downloads-videos/")),(0,i.kt)("li",{parentName:"ul"},"Google Chromecast \u652f\u6301 ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/cast/docs/media"},"https://developers.google.com/cast/docs/media")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.apple.com/en-hk/HT207022"},"HEVC media on Apple devices"))),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301-h265--hevc"},"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 H.265 / HEVC"),(0,i.kt)("p",null,"\u56e0\u4e3a\u4e13\u5229\u8d39\u7528\u8fc7\u9ad8\uff0c\u76ee\u524d\u57fa\u672c\u6ca1\u6709\u6d4f\u89c8\u5668\u652f\u6301 HEVC\u3002"),(0,i.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 webm \u5305\u88c5\u3002"),(0,i.kt)("p",null,"\u5382\u5546\u4eec\u8054\u5408\u6784\u5efa\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://aomedia.org/about/"},"AOMedia")," \u6765\u53cd\u6297 HEVC\uff0c\u4f7f\u7528 AV1 \u7f16\u7801\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can I Use ",(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/hevc"},"hevc"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"safari \u652f\u6301",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f46\u662f jellyfin \u64ad\u653e\u7684\u65f6\u5019\u8fd8\u662f\u8f6c\u7801\u4e86"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u59cb\u89c6\u9891\u7f16\u7801 HEVC Main"))))),(0,i.kt)("li",{parentName:"ul"},"Can I Use ",(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/webm/embed/"},"webm")),(0,i.kt)("li",{parentName:"ul"},"Can I Use ",(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/av1"},"av1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/cast/docs/media"},"Supported Media for Google Cast"))),(0,i.kt)("h2",{id:"fmp4-hls"},"fMP4-HLS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jellyfin \u542f\u7528\u540e Safari \u652f\u6301 HEVC"),(0,i.kt)("li",{parentName:"ul"},"fragmented MP4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.unified-streaming.com/documentation/package/fmp4-hls.html"},"https://docs.unified-streaming.com/documentation/package/fmp4-hls.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.unified-streaming.com/documentation/drm/fmp4-hls.html"},"https://docs.unified-streaming.com/documentation/drm/fmp4-hls.html"))))}d.isMDXComponent=!0}}]);