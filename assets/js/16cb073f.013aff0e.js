"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59403],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,v=u["".concat(c,".").concat(f)]||u[f]||s[f]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var a=n(96600),r=n(27279),i=(n(59496),n(49613)),o=["components"],p={title:"FFMpeg FAQ",tags:["FAQ"]},c="FFMpeg FAQ",l={unversionedId:"service/media/ffmpeg-faq",id:"service/media/ffmpeg-faq",title:"FFMpeg FAQ",description:"\u63d0\u53d6\u97f3\u8f68",source:"@site/../notes/service/media/ffmpeg-faq.md",sourceDirName:"service/media",slug:"/service/media/ffmpeg-faq",permalink:"/notes/service/media/ffmpeg-faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/media/ffmpeg-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"FFMpeg FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"butteraugli",permalink:"/notes/service/media/butteraugli"},next:{title:"ffmpeg",permalink:"/notes/service/media/ffmpeg"}},m={},s=[{value:"\u63d0\u53d6\u97f3\u8f68",id:"\u63d0\u53d6\u97f3\u8f68",level:2},{value:"\u6dfb\u52a0\u97f3\u8f68",id:"\u6dfb\u52a0\u97f3\u8f68",level:2},{value:"Protocol &#39;https&#39; not on whitelist &#39;file,crypto,data&#39;",id:"protocol-https-not-on-whitelist-filecryptodata",level:2},{value:"FFmpeg Service01.kms key",id:"ffmpeg-service01kms-key",level:2},{value:"\u6dfb\u52a0\u5b57\u5e55",id:"\u6dfb\u52a0\u5b57\u5e55",level:2},{value:"Tag hvc1 incompatible with output codec id avc1",id:"tag-hvc1-incompatible-with-output-codec-id-avc1",level:2}],u={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ffmpeg-faq"},"FFMpeg FAQ"),(0,i.kt)("h2",{id:"\u63d0\u53d6\u97f3\u8f68"},"\u63d0\u53d6\u97f3\u8f68"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u786e\u8ba4\u97f3\u9891\u4fe1\u606f\nffprobe in.avi\n\nffmpeg -i in.avi -vn -acodec copy out.aac      # \u5355\u97f3\u9891\u65f6\nffmpeg -i in.mkv -map 0:a:3 -c copy out.m4a    # \u63d0\u53d6 #3\nffmpeg -i in.mov -map 0:a -c copy out.mov      # \u63d0\u53d6\u6240\u6709\nffmpeg -i in.mp4 -q:a 0 -map a -c copy out.aac # \u63d0\u53d6 #0 \u97f3\u8f68\n")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u97f3\u8f68"},"\u6dfb\u52a0\u97f3\u8f68"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u66ff\u6362 #0\nffmpeg -i in.mp4 -i in.wav -map 0:v -map 1:a -c:v copy -shortest out.mp4\n# \u6dfb\u52a0 \u5e76\u8bbe\u7f6e\u8bed\u8a00\nffmpeg -i in.mkv -i in.mp3 -map 0 -map 1:a -metadata:s:a:1 language=chi -c:v copy -shortest out.mkv\n# \u6df7\u5408\nffmpeg -i in.mkv -i in.m4a -filter_complex "[0:a][1:a]amerge=inputs=2[a]" -map 0:v -map "[a]" -c:v copy -ac 2 -shortest out.mkv\n')),(0,i.kt)("h2",{id:"protocol-https-not-on-whitelist-filecryptodata"},"Protocol 'https' not on whitelist 'file,crypto,data'"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -protocol_whitelist file,http,https,tcp,tls,crypto -i MIE.m3u8 -c copy -bsf:a aac_adtstoasc MIE.mp4\n")),(0,i.kt)("h2",{id:"ffmpeg-service01kms-key"},"FFmpeg Service01.kms key"),(0,i.kt)("p",null,"\u52a0\u5bc6\u89c6\u9891"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-m3u8"},'#EXT-X-KEY:MEATHOD=AES-128,URI=""\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5 encrypt-stream.m3u8 \u4e00\u822c\u4e3a\u963f\u91cc\u4e91\u52a0\u5bc6,\u4e0d\u597d\u89e3\u5bc6"),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u5bc6\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nilaoda/N_m3u8DL-CLI/issues/473"},"nilaoda/N_m3u8DL-CLI#473"))))),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u5b57\u5e55"},"\u6dfb\u52a0\u5b57\u5e55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5d4c\u5957\n# \u70e7\u5f55\u5b57\u5e55\u5230\u89c6\u9891 -vf subtitles=subtitles.srt\n# -vf ass=subtitles.ass\n# \u5355\u72ec\u6307\u5b9a copy - -c:v copy -c:a copy -c:s mov_text\nffmpeg -i in.mp4 -i in.srt -c copy -c:s mov_text out.mp4\n\n\n# MKV\n# -metadata:s:s:0 language=eng\nffmpeg -i input.mp4 -f srt -i input.srt \\\n  -map 0:0 -map 0:1 -map 1:0 -c:v copy -c:a copy \\\n  -c:s srt  output.mkv\n")),(0,i.kt)("h2",{id:"tag-hvc1-incompatible-with-output-codec-id-avc1"},"Tag hvc1 incompatible with output codec id avc1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i in.mp4 -tag:v hvc1 -c:a copy -c:v copy -movflags faststart out.mp4\n")))}f.isMDXComponent=!0}}]);