"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36617],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,d=s["".concat(c,".").concat(u)]||s[u]||f[u]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13798:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={title:"FFMpeg FAQ",tags:["FAQ"]},c=void 0,l={unversionedId:"service/media/ffmpeg-faq",id:"service/media/ffmpeg-faq",title:"FFMpeg FAQ",description:"\u63d0\u53d6\u97f3\u8f68",source:"@site/notes/service/media/ffmpeg-faq.md",sourceDirName:"service/media",slug:"/service/media/ffmpeg-faq",permalink:"/notes/service/media/ffmpeg-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/media/ffmpeg-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",frontMatter:{title:"FFMpeg FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"ffmpeg",permalink:"/notes/service/media/ffmpeg"},next:{title:"Jellyfin",permalink:"/notes/service/media/jellyfin"}},m=[{value:"\u63d0\u53d6\u97f3\u8f68",id:"\u63d0\u53d6\u97f3\u8f68",children:[],level:2},{value:"\u6dfb\u52a0\u97f3\u8f68",id:"\u6dfb\u52a0\u97f3\u8f68",children:[],level:2},{value:"Protocol &#39;https&#39; not on whitelist &#39;file,crypto,data&#39;",id:"protocol-https-not-on-whitelist-filecryptodata",children:[],level:2},{value:"FFmpeg Service01.kms key",id:"ffmpeg-service01kms-key",children:[],level:2}],f={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63d0\u53d6\u97f3\u8f68"},"\u63d0\u53d6\u97f3\u8f68"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u8ba4\u97f3\u9891\u4fe1\u606f\nffprobe in.avi\n\nffmpeg -i in.avi -vn -acodec copy out.aac   # \u5355\u97f3\u9891\u65f6\nffmpeg -i in.mkv -map 0:a:3 -c copy out.m4a # \u63d0\u53d6 #3\nffmpeg -i in.mov -map 0:a -c copy out.mov   # \u63d0\u53d6\u6240\u6709\nffmpeg -i in.mp4 -q:a 0 -map a -c copy out.aac      # \u63d0\u53d6 #0 \u97f3\u8f68\n")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u97f3\u8f68"},"\u6dfb\u52a0\u97f3\u8f68"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u66ff\u6362 #0\nffmpeg -i in.mp4 -i in.wav -map 0:v -map 1:a -c:v copy -shortest out.mp4\n# \u6dfb\u52a0 \u5e76\u8bbe\u7f6e\u8bed\u8a00\nffmpeg -i in.mkv -i in.mp3 -map 0 -map 1:a -metadata:s:a:1 language=chi -c:v copy -shortest out.mkv\n# \u6df7\u5408\nffmpeg -i in.mkv -i in.m4a -filter_complex "[0:a][1:a]amerge=inputs=2[a]" -map 0:v -map "[a]" -c:v copy -ac 2 -shortest out.mkv\n')),(0,i.kt)("h2",{id:"protocol-https-not-on-whitelist-filecryptodata"},"Protocol 'https' not on whitelist 'file,crypto,data'"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -protocol_whitelist file,http,https,tcp,tls,crypto -i MIE.m3u8 -c copy -bsf:a aac_adtstoasc MIE.mp4\n")),(0,i.kt)("h2",{id:"ffmpeg-service01kms-key"},"FFmpeg Service01.kms key"),(0,i.kt)("p",null,"\u52a0\u5bc6\u89c6\u9891"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-m3u8"},'#EXT-X-KEY:MEATHOD=AES-128,URI=""\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5 encrypt-stream.m3u8 \u4e00\u822c\u4e3a\u963f\u91cc\u4e91\u52a0\u5bc6,\u4e0d\u597d\u89e3\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u5bc6\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nilaoda/N_m3u8DL-CLI/issues/473"},"nilaoda/N_m3u8DL-CLI#473"))))))}s.isMDXComponent=!0}}]);