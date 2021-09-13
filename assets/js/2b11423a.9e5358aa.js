"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63347],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),f=s(a),u=r,c=f["".concat(m,".").concat(u)]||f[u]||d[u]||l;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},15251:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return o},default:function(){return f}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"ffmpeg"},m="FFMpeg",s={unversionedId:"service/media/ffmpeg",id:"service/media/ffmpeg",isDocsHomePage:!1,title:"ffmpeg",description:"- FFmpeg/FFmpeg",source:"@site/notes/service/media/ffmpeg.md",sourceDirName:"service/media",slug:"/service/media/ffmpeg",permalink:"/notes/service/media/ffmpeg",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/media/ffmpeg.md",tags:[],version:"current",frontMatter:{title:"ffmpeg"},sidebar:"docs",previous:{title:"Low Code Awesome",permalink:"/notes/service/low-code/low-code-awesome"},next:{title:"M3U8",permalink:"/notes/service/media/m3u8"}},o=[{value:"Tips",id:"tips",children:[{value:"\u7f16\u7801",id:"\u7f16\u7801",children:[]},{value:"\u89c6\u9891\u5f55\u5236",id:"\u89c6\u9891\u5f55\u5236",children:[]},{value:"VP9 Live",id:"vp9-live",children:[]},{value:"RTSP",id:"rtsp",children:[]},{value:"ff* \u901a\u7528\u9009\u9879",id:"ff-\u901a\u7528\u9009\u9879",children:[]},{value:"\u89c6\u9891\u5c3a\u5bf8\u548c\u7f29\u5199",id:"\u89c6\u9891\u5c3a\u5bf8\u548c\u7f29\u5199",children:[]},{value:"\u89c6\u9891\u901f\u7387\u548c\u7f29\u5199",id:"\u89c6\u9891\u901f\u7387\u548c\u7f29\u5199",children:[]}]},{value:"ffserver",id:"ffserver",children:[]},{value:"farm",id:"farm",children:[]},{value:"FAQ",id:"faq",children:[{value:"video:23799kB audio:1406kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown",id:"video23799kb-audio1406kb-subtitle0kb-other-streams0kb-global-headers0kb-muxing-overhead-unknown",children:[]},{value:"Invalid frame dimensions 0x0",id:"invalid-frame-dimensions-0x0",children:[]},{value:"tbr tbn tbc",id:"tbr-tbn-tbc",children:[]}]},{value:"Reference",id:"reference",children:[]}],d={toc:o};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ffmpeg"},"FFMpeg"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/FFmpeg/FFmpeg"},"FFmpeg/FFmpeg"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e93"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"libavcodec \u63d0\u4f9b\u5927\u91cf\u7684\u7f16\u7801\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"libavformat \u5b9e\u73b0\u6d41\u4f53\u534f\u8bae,\u5bb9\u5668\u683c\u5f0f\u548c\u57fa\u672c\u7684 IO \u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"libavutil \u63d0\u4f9b\u54c8\u5e0c, \u89e3\u538b\u7b49\u5176\u4ed6\u8f85\u52a9\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"libavfilter \u63d0\u4f9b\u4e00\u7cfb\u5217\u8fc7\u6ee4\u5668\u7528\u4e8e\u4fee\u6539\u7f16\u7801\u7684\u89c6\u9891\u97f3\u9891"),(0,l.kt)("li",{parentName:"ul"},"libavdevice \u63d0\u4f9b\u8bbe\u5907\u6355\u6349\u548c\u91cd\u64ad\u7684\u8bbf\u95ee\u62bd\u8c61"),(0,l.kt)("li",{parentName:"ul"},"libswresample \u5b9e\u73b0\u97f3\u9891\u6df7\u5408\u548c\u91cd\u65b0\u53d6\u6837"),(0,l.kt)("li",{parentName:"ul"},"libswscale \u5b9e\u73b0\u989c\u8272\u8f6c\u6362\u548c\u7f29\u653e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5de5\u5177"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ffmpeg \u547d\u4ee4\u884c\u5de5\u5177\u7528\u4e8e\u64cd\u4f5c\u8f6c\u6362\u548c\u6d41\u5a92\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"ffplay \u591a\u5a92\u4f53\u64ad\u653e\u5668"),(0,l.kt)("li",{parentName:"ul"},"ffprobe \u591a\u5a92\u4f53\u5185\u5bb9\u5206\u6790\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"ffserver \u591a\u5a92\u4f53\u6d41\u4f53\u670d\u52a1\u5668\u7528\u4e8e\u5b9e\u65f6\u5e7f\u64ad"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7684\u4e00\u4e9b\u5c0f\u5de5\u5177\u4f8b\u5982 aviocat, ismindex \u548c qt-faststart \u7b49")))),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528\u53c2\u6570",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-r 17")," \u4fee\u6539\u5e27\u7387"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-an")," \u79fb\u9664\u6240\u6709\u97f3\u9891, ",(0,l.kt)("inlineCode",{parentName:"li"},"-vn")," \u540c\u7406"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-acodec copy")," \u76f4\u63a5\u590d\u5236\u5185\u5bb9,\u7528\u6237\u4fee\u6539\u5bb9\u5668\u683c\u5f0f\u65f6, ",(0,l.kt)("inlineCode",{parentName:"li"},"-acodec copy")," \u540c\u7406"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s 324x576")," \u4fee\u6539\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-vcodec h264 -profile:v high -level 4.2"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"iOS iPhone 5s \u540e\u517c\u5bb9\u7684\u6700\u9ad8 h264 \u538b\u7f29 ",(0,l.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki/Encode/H.264#iOS"},"\u6765\u6e90")),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b h264 \u76f8\u5173\u4fe1\u606f ",(0,l.kt)("inlineCode",{parentName:"li"},"ffmpeg -h encoder=libx264")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-movflags +faststart"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c06\u90e8\u5206\u4fe1\u606f\u6dfb\u52a0\u5230\u5f00\u5934,\u4ee5\u4fdd\u8bc1\u5728 web \u4e2d\u672a\u4e0b\u8f7d\u5b8c\u6210\u65f6\u4e5f\u80fd\u64ad\u653e"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c:v libx265 -preset medium"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"h265 \u538b\u7f29\u66f4\u597d,\u4f46\u662f\u76ee\u524d\u8bbe\u5907\u652f\u6301\u6709\u9650"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-x265-params")," \u67e5\u770b\u53ef\u884c\u53c2\u6570"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-threads"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u4f18\u5316\u9009\u62e9"),(0,l.kt)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u9700\u8981\u53d6\u51b3\u4e8e\u7f16\u7801\u5668\u662f\u5426\u652f\u6301"))))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/41384506/1870054"},"VP9 encoding limited to 4 threads?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/Vestride/278e13915894821e1d6f"},"Encoding Video")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.muvi.com/help/video-encoding-multiple-resolutions.html"},"Video Encoding: Multiple Resolutions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.debian.org/Debate/libav-provider/ffmpeg"},"Debate libav-provider ffmpeg"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u5e94\u8be5\u9009\u62e9 FFmpeg")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5\n# macOS\nbrew install ffmpeg\n\n# \u663e\u793a\u8fdb\u5ea6\npv input.avi | ffmpeg -i pipe:0 -v warning {arguments}\n\n# \u67e5\u770b\u652f\u6301\u7684\u50cf\u7d20\u683c\u5f0f\nffmpeg -pix_fmts\n# \u67e5\u770b\u7f16\u7801\u9009\u9879\nffmpeg -h encoder=libvpx\n\n# \u7f29\u653e\n# ========\n# https://trac.ffmpeg.org/wiki/Scaling\nffmpeg -i input.jpg -vf scale=iw*.5:ih*.5 input_half.png\n# \u4fdd\u6301\u6bd4\u4f8b\nffmpeg -i input.jpg -vf scale=w=320:h=240:force_original_aspect_ratio=decrease output_320.png\n# \u53ef\u4ee5\u4f7f\u7528 ffplay \u9884\u89c8\nffplay -i input.mp4 -vf scale=iw*.2:ih*.2\n\n# \u526a\u5207\n# ========\n# -ss \u5f00\u59cb\u65f6\u95f4 -t \u6301\u7eed\u65f6\u95f4 -to \u5230\u8fbe\u65f6\u95f4\nffmpeg -i input.wmv -ss 00:00:30.0 -c copy -t 00:00:10.0 output.wmv\nffmpeg -i input.wmv -ss 30 -c copy -t 10 output.wmv\n# -ss 30 -t 10 \u7b49\u540c\u4e8e -ss 30 -to 40\nffmpeg -i input.wmv -ss 30 -c copy -to 40 output.wmv\n\n# \u88c1\u526a\n# ========\n# https://ffmpeg.org/ffmpeg-filters.html#crop\nffmpeg -i in.mp4 -filter:v "crop=out_w:out_h:x:y" out.mp4\n# \u4f7f\u7528 ffplay \u9884\u89c8\nffplay -i input.mp4 -vf "crop=in_w:in_h-40"\n\n# \u5408\u5e76\u62c6\u5206\n# \u5c06\u97f3\u9891\u91cd\u65b0\u7f16\u7801\u4e3a aac\nffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict experimental output.mp4\n# \u4e0d\u5bf9\u5176\u8fdb\u884c\u7f16\u7801\nffmpeg -i video.mp4 -i audio.wav -c copy output.mkv\n# \u66ff\u6362\u97f3\u9891\u6d41\nffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict experimental -map 0:v:0 -map 1:a:0 output.mp4\n# \u5206\u79bb\nffmpeg -i input.mkv -vn -c:a copy marryme.ogg\n\n# \u5143\u6570\u636e\n# ========\n# \u79fb\u9664\n# -empty_hdlr_name 1 \u5c06 handler_name \u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\nffmpeg -i in.mov -map_metadata -1 -c:v copy -c:a copy out.mov\n')),(0,l.kt)("h3",{id:"\u7f16\u7801"},"\u7f16\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# x264\n# ==========\n# https://trac.ffmpeg.org/wiki/Encode/H.264\n# how to generate dashif compatible mpd files using mp4box https://github.com/Dash-Industry-Forum/dash.js/issues/127\n# http://ffmpeg.org/ffmpeg-codecs.html#libx264_002c-libx264rgb\n# Note: -strict experimental (or -strict -2) was previously required for this encoder, but it is \u200bno longer experimental and these options are unnecessary since 5 December 2015.\nffmpeg -h encoder=libx264\npv in.mp4 | ffmpeg -v warning -y -i pipe:0 -vcodec h264 -vf scale=hd480 -acodec aac 480.mp4\n\n# x265\n# ==========\n# https://trac.ffmpeg.org/wiki/Encode/H.265\n# http://x265.readthedocs.io/en/default/\n# preset: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow, placebo\nffmpeg -i input -c:v libx265 -preset medium -crf 28 -c:a aac -b:a 128k output.mp4\n\n# HLS - HTTP Live Streaming\n# ==========\n# https://github.com/video-dev/hls.js/\n# https://www.vidbeo.com/blog/hls-vs-dash\n# https://ffmpeg.org/ffmpeg-formats.html#segment_002c-stream_005fsegment_002c-ssegment\n# \u5982\u679c ts \u4e0d\u652f\u6301\u7684\u683c\u5f0f\nffmpeg -i input.mp4 \\\n       -c:v mpeg2video -qscale:v 2 \\\n       -c:a mp2 -b:a 192k \\\n       output.ts\n\n# \u5982\u679c ts \u683c\u5f0f\u652f\u6301\nffmpeg -re -i input.mp4 \\\n       -codec copy -map 0 \\\n       -f segment -segment_list playlist.m3u8 \\\n       -segment_list_flags +live -segment_time 10 \\\n       out%03d.ts\n\n# HLS\n# http://ffmpeg.org/ffmpeg-all.html#hls-2\nffmpeg -i input.mp4 -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls index.m3u8\n\n# https://docs.peer5.com/guides/production-ready-hls-vod/\n# \u5355\u4e2a\u7801\u7387\n# \u6587\u4ef6\u7ed3\u6784\n# raw.mp4 480.m3u8 480/*.ts\n# mkdir 360 480 720 1080\nffmpeg -hide_banner -y -i raw.mp4 \\\n  -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_base_url 480/ -hls_segment_filename 480/%03d.ts 480.m3u8\n\nffmpeg -hide_banner -y -i raw.mp4 \\\n  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_base_url 720/ -hls_segment_filename 720/%03d.ts 720.m3u8\n\nffmpeg -hide_banner -y -i raw.mp4 \\\n  -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k -hls_base_url 1080/ -hls_segment_filename 1080/%03d.ts 1080.m3u8\n\nffmpeg -hide_banner -y -i raw.mp4 \\\n  -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k 1080.mp4\n\n# \u591a\u7801\u7387\nffmpeg -hide_banner -y -i beach.mkv \\\n  -vf scale=w=640:h=360:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k -hls_base_url 360/ -hls_segment_filename 360/%03d.ts 360.m3u8 \\\n  -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_base_url 480/ -hls_segment_filename 480/%03d.ts 480.m3u8 \\\n  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_base_url 720/ -hls_segment_filename 720/%03d.ts 720.m3u8 \\\n  -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k -hls_base_url 1080/ -hls_segment_filename 1080/%03d.ts 1080.m3u8\n\n\n\n# \u9488\u5bf9\u4e0d\u540c\u5206\u8fa8\u7387\u505a\u4e0d\u540c\u7684\u7247\u6bb5\n# http://ffmpeg.org/ffmpeg-all.html#segment_002c-stream_005fsegment_002c-ssegment\nmkdir -p 1080 720 480\nffmpeg -re -i 1080.mp4 \\\n       -codec copy -map 0 \\\n       -f segment -segment_list 1080.m3u8 \\\n       -segment_list_flags +live -segment_time 10 \\\n       -segment_list_entry_prefix 1080/ \\\n       1080/%03d.ts\n\nffmpeg -re -i 720.mp4 \\\n       -codec copy -map 0 \\\n       -f segment -segment_list 720.m3u8 \\\n       -segment_list_flags +live -segment_time 10 \\\n       -segment_list_entry_prefix 720/ \\\n       720/%03d.ts\n\nffmpeg -re -i 480.mp4 \\\n       -codec copy -map 0 \\\n       -f segment -segment_list 480.m3u8 \\\n       -segment_list_flags +live -segment_time 10 \\\n       -segment_list_entry_prefix 480/ \\\n       480/%03d.ts\n\n\n\n# m3u8 \u6dfb\u52a0\u524d\u7f00\nsed -re 's$^[0-9]$1080/\\0$' -i 1080.m3u8\nsed -re 's$^[0-9]$720/\\0$' -i 720.m3u8\nsed -re 's$^[0-9]$480/\\0$' -i 480.m3u8\n\n# DASH\n# ==========\n# dash-avc264 command lines https://gist.github.com/ddennedy/16b7d0c15843829b4dc4\n# https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP\n# Video dash js multiple resolutions https://github.com/Dash-Industry-Forum/dash.js/issues/1647\npv in.mp4 | ffmpeg -v warning -y -i pipe:0 -vcodec libx264 -profile:v baseline -level 13 -b:v 2000k -vf scale=hd480 -acodec aac -ar 44100 -ac 1 480.mp4\n\nffmpeg -codec:a libvo_aacenc -ar 44100 -ac 1 -codec:v libx264 -profile:v baseline -level 13 -b:v 2000k output.mp4 -i test.mp4\n\nMP4Box -dash 10000 -dash-profile live -segment-name output-seg output.mp4\nMP4Box -dash 10000 -dash-profile live -segment-name 480/seg 480.mp4\nMP4Box -h dash\n# Streaming\n# ==========\n# http://trac.ffmpeg.org/wiki/StreamingGuide\n\n# Gif\n# ==========\nffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif\n\n# keep scale\nffmpeg -i in.mov -pix_fmt rgb24 -r 18 -f gif - | gifsicle --optimize=3 --delay=3 > out.gif\n\n# Web Media\n# ========\npv in.mp4 | ffmpeg -v warning -y -i pipe:0 -vcodec h264 -vf scale=576:-1 -acodec aac output3.mp4\n\n")),(0,l.kt)("h3",{id:"\u89c6\u9891\u5f55\u5236"},"\u89c6\u9891\u5f55\u5236"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u89c6\u9891\u6355\u6349\n#   https://trac.ffmpeg.org/wiki/Capture/Webcam\n#   https://trac.ffmpeg.org/wiki/Capture/Desktop\n# \u67e5\u770b\u53ef\u4f7f\u7528\u8bbe\u5907\u548c\u6355\u6349\n# Windows\n# vfwcap \u5df2\u7ecf\u88ab\u66ff\u6362\u4e3a dshow\nffmpeg -y -f dshow -i list\nffmpeg -y -f dshow -r 25 -i 0 out.mp4\nffmpeg -f dshow -list_devices true -i dummy\nffmpeg -f dshow -list_optione true -i dummy\n\n# Linux\n# video4linux2 \u53ef\u7b80\u5199\u4e3a v4l2\n# \u53ef\u4f7f\u7528 x11grab \u6293\u53d6\u684c\u9762\nffmpeg -f v4l2 -list_formats all -i /dev/video0\nffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 output.mkv\n# \u4e5f\u53ef\u4ee5\u4f7f\u7528 v4l2 \u6765\u67e5\u770b\nv4l2-ctl --list-devices\n# \u67e5\u770b\u53ef\u63a7\u5236\u7684\u53c2\u6570, \u5bf9\u6bd4\u5ea6,\u7126\u70b9,\u7f29\u653e\u7b49\nv4l2-ctl -L\n# \u4fee\u6539\u53c2\u6570\nv4l2-ctl -c <option>=<value>\n\n# OS X\n# \u4e3b\u8981\u4f7f\u7528 avfoundation \u6765\u64cd\u4f5c\nffmpeg -f avfoundation -list_devices true -i ""\nffmpeg -f avfoundation -i "" out.mpg\n# \u8f93\u5165\u8bbe\u5907\u4e5f\u53ef\u4ee5\u6307\u5b9a default,\u6216\u540d\u5b57\u4f8b\u5982 "Integrated" \u6216\u8005\u8bbe\u5907\u7d22\u5f15\u4f8b\u5982 0\nffmpeg -f avfoundation -i "default" out.mpg\nffmpeg -f avfoundation -i "Integrated" out.mpg\nffmpeg -f avfoundation -i "2" out.mpg\nffmpeg -f avfoundation -video_device_index 2 -i "default" out.mpg\n# ffmpeg -f avfoundation -i "<screen device index>:<audio device index>" out.mov\n# \u5728 OS X \u4e2d\u53ef\u67e5\u770b\u5c4f\u5e55\u5c3a\u5bf8 system_profiler SPDisplaysDataType |grep Resolution\n# \u4f7f\u7528\u7a7a\u767d\u7684\u97f3\u9891,\u4fee\u6539\u50cf\u7d20\u683c\u5f0f\nffmpeg -f avfoundation -pixel_format bgr0 -s 640x480 -r 30 -i "default:none" out.avi\n# \u65e0\u635f\u6355\u6349\n#   -qp 0 \u4f7f\u7528 x264 \u65e0\u635f\u6a21\u5f0f\n#   -preset ultrafast \u4f7f\u7528\u5feb\u901f\u6a21\u5f0f\nffmpeg -video_size 1920x1080 -framerate 30 -f avfoundation -video_device_index 1 -i "default" -c:v libx264 -qp 0 -preset ultrafast capture.mkv\n# \u4e0a\u8ff0\u5feb\u901f\u65e0\u635f\u6355\u6349\u540e,\u53ef\u5bf9\u5176\u8fdb\u884c\u6162\u901f\u7684\u65e0\u635f\u538b\u7f29,\u51cf\u5c11\u89c6\u9891\u6587\u4ef6\u5c3a\u5bf8\nffmpeg -i capture.mkv -c:v libx264 -qp 0 -preset veryslow capture_smaller.mkv\n# \u540c\u65f6\u4e5f\u5f55\u5236\u9ea6\u514b\u98ce\u7684\u58f0\u97f3\nffmpeg -video_size 1280x720 -framerate 30 -f avfoundation -i "0:0" -c:v libx264 -qp 0 -preset ultrafast -c:a aac  capture.mkv\n')),(0,l.kt)("h3",{id:"vp9-live"},"VP9 Live"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://wiki.webmproject.org/adaptive-streaming/instructions-to-do-webm-live-streaming-via-dash"},"http://wiki.webmproject.org/adaptive-streaming/instructions-to-do-webm-live-streaming-via-dash")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efa\u76f4\u64ad\u5185\u5bb9\n\nVP9_LIVE_PARAMS="-speed 6 -tile-columns 4 -frame-parallel 1 -threads 8 -static-thresh 0 -max-intra-rate 300 -deadline realtime -lag-in-frames 0 -error-resilient 1"\n\n# Linux\nffmpeg \\\n  -f v4l2 -input_format mjpeg -r 30 -s 1280x720 -i /dev/video0 \\\n  -f alsa -ar 44100 -ac 2 -i hw:2 \\\n  -map 0:0 \\\n  -pix_fmt yuv420p \\\n  -c:v libvpx-vp9 \\\n    -s 1280x720 -keyint_min 60 -g 60 ${VP9_LIVE_PARAMS} \\\n    -b:v 3000k \\\n  -f webm_chunk \\\n    -header "./glass_360.hdr" \\\n    -chunk_start_index 1 \\\n  ./glass_360_%d.chk \\\n  -map 1:0 \\\n  -c:a libvorbis \\\n    -b:a 128k -ar 44100 \\\n  -f webm_chunk \\\n    -audio_chunk_duration 2000 \\\n    -header ./glass_171.hdr \\\n    -chunk_start_index 1 \\\n  ./glass_171_%d.chk\n\n# OS X\nffmpeg \\\n  -r 30 -s 1280x720 -ar 44100 -ac 2  -f avfoundation -i "2:0" -c:v mjpeg \\\n  -map 0:0 \\\n  -pix_fmt yuv420p \\\n  -c:v libvpx-vp9 \\\n    -s 1280x720 -keyint_min 60 -g 60 ${VP9_LIVE_PARAMS} \\\n    -b:v 3000k \\\n  -f webm_chunk \\\n    -header "./glass_360.hdr" \\\n    -chunk_start_index 1 \\\n  ./glass_360_%d.chk \\\n  -map 1:0 \\\n  -c:a libvorbis \\\n    -b:a 128k -ar 44100 \\\n  -f webm_chunk \\\n    -audio_chunk_duration 2000 \\\n    -header ./glass_171.hdr \\\n    -chunk_start_index 1 \\\n  ./glass_171_%d.chk\n\n# \u521b\u5efa DASH\nffmpeg \\\n  -f webm_dash_manifest -live 1 \\\n  -i ./glass_360.hdr \\\n  -f webm_dash_manifest -live 1 \\\n  -i ./glass_171.hdr \\\n  -c copy \\\n  -map 0 -map 1 \\\n  -f webm_dash_manifest -live 1 \\\n    -adaptation_sets "id=0,streams=0 id=1,streams=1" \\\n    -chunk_start_index 1 \\\n    -chunk_duration_ms 2000 \\\n    -time_shift_buffer_depth 7200 \\\n    -minimum_update_period 7200 \\\n  ./glass_live_manifest.mpd\n')),(0,l.kt)("h3",{id:"rtsp"},"RTSP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i space.mp4 -vcodec libx264 -tune zerolatency -crf 18 http://localhost:1234/feed1.ff\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ffserver.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HTTPPort 1234\nRTSPPort 1235\n\n<Feed feed1.ffm>\n        File /tmp/feed1.ffm\n        FileMaxSize 2M\n        ACL allow 127.0.0.1\n</Feed>\n\n<Stream test1.sdp>\n    Feed feed1.ffm\n    Format rtp\n    Noaudio\n    VideoCodec libx264\n    AVOptionVideo flags +global_header\n    AVOptionVideo me_range 16\n    AVOptionVideo qdiff 4\n    AVOptionVideo qmin 10\n    AVOptionVideo qmax 51\n    ACL allow 192.168.0.0 192.168.255.255\n</Stream>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mpv rtsp://192.168.0.xxx:1235/test1.sdp\n")),(0,l.kt)("h3",{id:"ff-\u901a\u7528\u9009\u9879"},"ff","*"," \u901a\u7528\u9009\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-L Show license.\n-h, -?, -help, --help [long|full] [decoder|encoder|demuxer|muxer|filter]=name\n  long \u663e\u793a\u9ad8\u7ea7\u9009\u9879\n  full \u663e\u793a\u5b8c\u6574\u7684\u9009\u9879\u5217\u8868\u5305\u62ec\u516c\u5171\u7684\u548c\u79c1\u6709\u7684\n-version Show version.\n\n-formats,-devices,-codecs,-protocols,-filters,-pix_fmts,-sample_fmts,-layouts,-colors,-decoders,-encoders,-bsfs\n  \u663e\u793a\u6240\u6709\u652f\u6301\u7684\u683c\u5f0f,\u8bbe\u5907,\u7f16\u7801,\u534f\u8bae,\u8fc7\u6ee4\u5668,\u9999\u8272\u683c\u5f0f,\u989c\u8272\u540d\u5b57\u7b49...\n  bsfs Show available bitstream filters.\n  codes \u66f4\u660e\u786e\u5730\u8bf4\u662f media bitstream format\n\n")),(0,l.kt)("h3",{id:"\u89c6\u9891\u5c3a\u5bf8\u548c\u7f29\u5199"},"\u89c6\u9891\u5c3a\u5bf8\u548c\u7f29\u5199"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5c3a\u5bf8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"720x480")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pal"),(0,l.kt)("td",{parentName:"tr",align:null},"720x576")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"352x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qpal"),(0,l.kt)("td",{parentName:"tr",align:null},"352x288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"640x480")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spal"),(0,l.kt)("td",{parentName:"tr",align:null},"768x576")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"film"),(0,l.kt)("td",{parentName:"tr",align:null},"352x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ntsc-film"),(0,l.kt)("td",{parentName:"tr",align:null},"352x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqcif"),(0,l.kt)("td",{parentName:"tr",align:null},"128x96")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qcif"),(0,l.kt)("td",{parentName:"tr",align:null},"176x144")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cif"),(0,l.kt)("td",{parentName:"tr",align:null},"352x288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4cif"),(0,l.kt)("td",{parentName:"tr",align:null},"704x576")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16cif"),(0,l.kt)("td",{parentName:"tr",align:null},"1408x1152")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qqvga"),(0,l.kt)("td",{parentName:"tr",align:null},"160x120")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qvga"),(0,l.kt)("td",{parentName:"tr",align:null},"320x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vga"),(0,l.kt)("td",{parentName:"tr",align:null},"640x480")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svga"),(0,l.kt)("td",{parentName:"tr",align:null},"800x600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xga"),(0,l.kt)("td",{parentName:"tr",align:null},"1024x768")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uxga"),(0,l.kt)("td",{parentName:"tr",align:null},"1600x1200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qxga"),(0,l.kt)("td",{parentName:"tr",align:null},"2048x1536")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sxga"),(0,l.kt)("td",{parentName:"tr",align:null},"1280x1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qsxga"),(0,l.kt)("td",{parentName:"tr",align:null},"2560x2048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hsxga"),(0,l.kt)("td",{parentName:"tr",align:null},"5120x4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wvga"),(0,l.kt)("td",{parentName:"tr",align:null},"852x480")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wxga"),(0,l.kt)("td",{parentName:"tr",align:null},"1366x768")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wsxga"),(0,l.kt)("td",{parentName:"tr",align:null},"1600x1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wuxga"),(0,l.kt)("td",{parentName:"tr",align:null},"1920x1200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"woxga"),(0,l.kt)("td",{parentName:"tr",align:null},"2560x1600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wqsxga"),(0,l.kt)("td",{parentName:"tr",align:null},"3200x2048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wquxga"),(0,l.kt)("td",{parentName:"tr",align:null},"3840x2400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"whsxga"),(0,l.kt)("td",{parentName:"tr",align:null},"6400x4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"whuxga"),(0,l.kt)("td",{parentName:"tr",align:null},"7680x4800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cga"),(0,l.kt)("td",{parentName:"tr",align:null},"320x200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ega"),(0,l.kt)("td",{parentName:"tr",align:null},"640x350")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hd480"),(0,l.kt)("td",{parentName:"tr",align:null},"852x480")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hd720"),(0,l.kt)("td",{parentName:"tr",align:null},"1280x720")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hd1080"),(0,l.kt)("td",{parentName:"tr",align:null},"1920x1080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2k"),(0,l.kt)("td",{parentName:"tr",align:null},"2048x1080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2kflat"),(0,l.kt)("td",{parentName:"tr",align:null},"1998x1080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2kscope"),(0,l.kt)("td",{parentName:"tr",align:null},"2048x858")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4k"),(0,l.kt)("td",{parentName:"tr",align:null},"4096x2160")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4kflat"),(0,l.kt)("td",{parentName:"tr",align:null},"3996x2160")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4kscope"),(0,l.kt)("td",{parentName:"tr",align:null},"4096x1716")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nhd"),(0,l.kt)("td",{parentName:"tr",align:null},"640x360")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hqvga"),(0,l.kt)("td",{parentName:"tr",align:null},"240x160")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wqvga"),(0,l.kt)("td",{parentName:"tr",align:null},"400x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fwqvga"),(0,l.kt)("td",{parentName:"tr",align:null},"432x240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hvga"),(0,l.kt)("td",{parentName:"tr",align:null},"480x320")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qhd"),(0,l.kt)("td",{parentName:"tr",align:null},"960x540")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2kdci"),(0,l.kt)("td",{parentName:"tr",align:null},"2048x1080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4kdci"),(0,l.kt)("td",{parentName:"tr",align:null},"4096x2160")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uhd2160"),(0,l.kt)("td",{parentName:"tr",align:null},"3840x2160")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uhd4320"),(0,l.kt)("td",{parentName:"tr",align:null},"7680x4320")))),(0,l.kt)("h3",{id:"\u89c6\u9891\u901f\u7387\u548c\u7f29\u5199"},"\u89c6\u9891\u901f\u7387\u548c\u7f29\u5199"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u901f\u7387"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"30000/1001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pal"),(0,l.kt)("td",{parentName:"tr",align:null},"25/1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"30000/1001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qpal"),(0,l.kt)("td",{parentName:"tr",align:null},"25/1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sntsc"),(0,l.kt)("td",{parentName:"tr",align:null},"30000/1001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spal"),(0,l.kt)("td",{parentName:"tr",align:null},"25/1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"film"),(0,l.kt)("td",{parentName:"tr",align:null},"24/1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ntsc-film"),(0,l.kt)("td",{parentName:"tr",align:null},"24000/1001")))),(0,l.kt)("h2",{id:"ffserver"},"ffserver"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ffmpeg.org/ffserver.html"},"ffserver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ffmpeg.org/ffserver-all.html"},"ffserver-all"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n# \u542f\u52a8\u6d41\u5a92\u670d\u52a1\u5668\nffserver -f ffserver.conf\n\n")),(0,l.kt)("h2",{id:"farm"},"farm"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.ffmpeg.org/ffmpeg-devices.html"},"https://www.ffmpeg.org/ffmpeg-devices.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"http://www.squidnetsoftware.com/"},"http://www.squidnetsoftware.com/")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/Encode/PremierePro"},"https://trac.ffmpeg.org/wiki/Encode/PremierePro"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://video.stackexchange.com/a/15799"},"https://video.stackexchange.com/a/15799")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Server\nffmpeg -i tcp://[your server IP]:[The same port you entered in step 2]?listen -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p -c:a libfdk_aac -vbr 4 output2.mp4\n# Client\nffmpeg -i frameserver.avs -f mpegts  tcp://[IP address of your server]:[open port on your server]\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"video23799kb-audio1406kb-subtitle0kb-other-streams0kb-global-headers0kb-muxing-overhead-unknown"},"video:23799kB audio:1406kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown"),(0,l.kt)("h3",{id:"invalid-frame-dimensions-0x0"},"Invalid frame dimensions 0x0"),(0,l.kt)("p",null,"\u51fa\u73b0\u8fd9\u6837\u7684\u9519\u8bef\u65f6,\u4e0d\u5fc5\u5173\u5fc3,\u4e00\u4f1a\u513f\u8fc7\u540e\u5c31\u80fd\u6b63\u5e38\u64ad\u653e\u4e86."),(0,l.kt)("h3",{id:"tbr-tbn-tbc"},"tbr tbn tbc"),(0,l.kt)("p",null,"FFMpeg \u4f1a\u4f7f\u7528\u4e09\u79cd\u4e0d\u540c\u7684\u65f6\u95f4\u6233\u6765\u505a\u4e0d\u540c\u7684\u5de5\u4f5c."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tbr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tbr is guessed from the video stream and is the value users want to see when they look for the video frame rate"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u8868\u5e27\u7387,\u548c demuxer \u76f8\u5173"))),(0,l.kt)("li",{parentName:"ul"},"tbn",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"the time base in AVStream that has come from the container"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u8868\u6587\u4ef6\u5c42(st)\u7684\u65f6\u95f4\u7cbe\u5ea6\uff0c\u5373 1S=1200k\uff0c\u548c duration \u76f8\u5173\uff1b"))),(0,l.kt)("li",{parentName:"ul"},"tbc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"the time base in AVCodecContext for the codec used for a particular stream"),(0,l.kt)("li",{parentName:"ul"},"tbc \u4ee3\u8868\u89c6\u9891\u5c42(st->codec)\u7684\u65f6\u95f4\u7cbe\u5ea6\uff0c\u5373 1S=50\uff0c\u548c strem->duration \u548c\u65f6\u95f4\u6233\u76f8\u5173\u3002")))),(0,l.kt)("p",null,"\u4f8b\u5982: ",(0,l.kt)("inlineCode",{parentName:"p"},"25 tbr 90k tbn 50 tbc")),(0,l.kt)("p",null,"\u5f53\u8fd9\u51e0\u4e2a\u503c\u65e0\u6cd5\u68c0\u6d4b\u5230\u65f6,\u5176\u503c\u53ef\u80fd\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1000k tbr, 1000k tbn, 1000k tbc")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/EncodingForStreamingSites"},"https://trac.ffmpeg.org/wiki/EncodingForStreamingSites"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://trac.ffmpeg.org/wiki/Encode/AAC"},"https://trac.ffmpeg.org/wiki/Encode/AAC")))}f.isMDXComponent=!0}}]);