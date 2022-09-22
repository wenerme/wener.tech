"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23629],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15214:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],l={title:"M3U8"},c=void 0,u={unversionedId:"service/media/format/m3u8",id:"service/media/format/m3u8",title:"M3U8",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/media/format/m3u8.md",sourceDirName:"service/media/format",slug:"/service/media/format/m3u8",permalink:"/notes/service/media/format/m3u8",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/media/format/m3u8.md",tags:[],version:"current",frontMatter:{title:"M3U8"},sidebar:"docs",previous:{title:"JPEG XL",permalink:"/notes/service/media/format/jpeg-xl"},next:{title:"nfo",permalink:"/notes/service/media/format/nfo"}},p={},s=[{value:"Tag",id:"tag",level:2},{value:"HLS",id:"hls",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"utf-8 \u7684 m3u"),(0,i.kt)("li",{parentName:"ul"},"\u64ad\u653e\u5217\u8868\uff0c\u4e5f\u5e38\u7528\u4e8e\u6d41\u5a92\u5b9a\u4e49 ts \u7247\u6bb5"))),(0,i.kt)("li",{parentName:"ul"},"wikipedia ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/M3U"},"M3U"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#EXTM3U\n#EXTINF\n#EXT-X-STREAM-INF (adaptive streaming)\n#EXT-X-ENDLIST (Live playlist)\n#EXT-X-MEDIA-SEQUENCE\n#EXT-X-TARGETDURATION\n#EXT-X-DISCONTINUITY\n#EXT-X-DISCONTINUITY-SEQUENCE\n#EXT-X-BYTERANGE\n#EXT-X-MAP\n#EXT-X-KEY (https://tools.ietf.org/html/draft-pantos-http-live-streaming-08#section-3.4.4)\n#EXT-X-PROGRAM-DATE-TIME (https://tools.ietf.org/html/draft-pantos-http-live-streaming-18#section-4.3.2.6)\nEXT-X-START:TIME-OFFSET=x (https://tools.ietf.org/html/draft-pantos-http-live-streaming-18#section-4.3.5.2)\n")),(0,i.kt)("h2",{id:"tag"},"Tag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-m3u8"},"#EXTM3U\n\n##EXTINF: \u65f6\u5e38,\u6807\u9898\n#EXTINF: 10,\u6765\u4e86\u4e00\u7fa4\u5c0f\u9e2d\u5b50\n\n# \u5f00\u59cb\u4f4d\u7f6e\u504f\u79fb\n#EXT-X-START: TIME-OFFSET=0\n")),(0,i.kt)("h2",{id:"hls"},"HLS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc8216"},"rfc8216"))))}f.isMDXComponent=!0}}]);