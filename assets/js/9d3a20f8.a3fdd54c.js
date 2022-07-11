"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23879],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),k=l,f=c["".concat(o,".").concat(k)]||c[k]||s[k]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={title:"Jellyfin"},o=void 0,m={unversionedId:"service/media/server/jellyfin",id:"service/media/server/jellyfin",title:"Jellyfin",description:"- jellyfin/jellyfin \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/media/server/jellyfin.md",sourceDirName:"service/media/server",slug:"/service/media/server/jellyfin",permalink:"/notes/service/media/server/jellyfin",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/media/server/jellyfin.md",tags:[],version:"current",frontMatter:{title:"Jellyfin"},sidebar:"docs",previous:{title:"imgproxy",permalink:"/notes/service/media/server/imgproxy"},next:{title:"koel",permalink:"/notes/service/media/server/koel"}},u={},s=[{value:"Notes",id:"notes",level:2},{value:"Conf",id:"conf",level:2},{value:"HW",id:"hw",level:2},{value:"Server",id:"server",level:2}],c={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jellyfin/jellyfin"},"jellyfin/jellyfin")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GPL, C#"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u6e90\u5a92\u4f53\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c Plex \u4f46\u66f4\u5f00\u653e")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5916\u90e8\u97f3\u8f68 ",(0,r.kt)("a",{parentName:"li",href:"https://features.jellyfin.org/posts/177"},"#177")),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u5e55\u52a0\u8f7d\u5ef6\u8fdf\u5bfc\u81f4\u4e0d\u540c\u6b65 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jellyfin/jellyfin/issues/2547"},"#2547")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://features.jellyfin.org/posts/230/support-for-oidc"},"Support for OIDC"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jellyfin/jellyfin/issues/530"},"#530")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/9p4/jellyfin-plugin-sso"},"https://github.com/9p4/jellyfin-plugin-sso"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull jellyfin/jellyfin:latest\nmkdir -p $PWD/jellyfin/{config,cache}\n# --net=host\ndocker run --rm -it \\\n  -v $PWD/jellyfin/config:/config \\\n  -v $PWD/jellyfin/cache:/cache \\\n  -v $PWD/media:/media \\\n  -p 8096:8096 \\\n  -e TZ=Asia/Shanghai \\\n  --name jellyfin jellyfin/jellyfin:latest\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jellyfin.org/docs/general/administration/configuration.html#data-directory"},"https://jellyfin.org/docs/general/administration/configuration.html#data-directory"))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"endpoint",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/web/index.html"),(0,r.kt)("li",{parentName:"ul"},"/socket"),(0,r.kt)("li",{parentName:"ul"},"/health"),(0,r.kt)("li",{parentName:"ul"},"/metrics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/etc/jellyfin/system.xml",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<EnableMetrics>true</EnableMetrics>"))))))))),(0,r.kt)("h2",{id:"conf"},"Conf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/usr/share/jellyfin/web/config.json"),(0,r.kt)("li",{parentName:"ul"},"Docker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/jellyfin/jellyfin-web/config.json"))),(0,r.kt)("li",{parentName:"ul"},"Google Chromecast",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"plugins/chromecastPlayer/plugin"))),(0,r.kt)("li",{parentName:"ul"},"YouTube Trailers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"plugins/youtubePlayer/plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jellyfin.org/docs/general/administration/configuration.html"},"Configuration"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "menuLinks": [\n    {\n      "name": "Custom Link",\n      "url": "https://jellyfin.org"\n    },\n    {\n      "name": "Custom Link w. Custom Icon",\n      "icon": "attach_money",\n      "url": "https://demo.jellyfin.org/stable"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"hw"},"HW"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trac.ffmpeg.org/wiki/Hardware/QuickSync"},"https://trac.ffmpeg.org/wiki/Hardware/QuickSync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.archlinux.org/title/Hardware_video_acceleration"},"https://wiki.archlinux.org/title/Hardware_video_acceleration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jellyfin.org/docs/general/administration/hardware-acceleration.html"},"https://jellyfin.org/docs/general/administration/hardware-acceleration.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/intel/intel-device-plugins-for-kubernetes"},"intel/intel-device-plugins-for-kubernetes"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'apk add pciutils\nlspci -nn | egrep -i "3d|display|vga"\n\nls /dev/dri\n# VA-API\n# https://github.com/intel/libva-utils\n# /dev/dri/renderXX\n\n# AlpineLinux edge/testing libva-utils\nvainfo\n\n# X11\n# ==========\n# apk add vdpauinfo\n# vdpauinfo\ngrep -iE \'vdpau | dri driver\' /var/log/Xorg.0.log\n\n# ffmpeg\nffmpeg -hwaccel vaapi -vaapi_device /dev/dri/renderD128 -i "video.MP4" -vf "select=eq(pict_type\\,I)" -vsync vfr -qscale:v 2 -f image2 "%08d.jpg"\n')),(0,r.kt)("h2",{id:"server"},"Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Movies/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Film (1990).mp4"),(0,r.kt)("li",{parentName:"ul"},"Film (2008)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Film.mkv"),(0,r.kt)("li",{parentName:"ul"},"Film.default.srt"),(0,r.kt)("li",{parentName:"ul"},"Film.default.en.forced.ass"),(0,r.kt)("li",{parentName:"ul"},"Film.en.ac3"),(0,r.kt)("li",{parentName:"ul"},"Film.English Commentary.en.mp3 - \u533a\u5206 Title \u548c \u8bed\u8a00"),(0,r.kt)("li",{parentName:"ul"},"Film - Ulimited.mp4 - \u591a\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"sample.mp4 - \u9644\u52a0\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"theme.mp3"),(0,r.kt)("li",{parentName:"ul"},"trailer.mp4"),(0,r.kt)("li",{parentName:"ul"},"behind the scenes/ - \u9644\u52a0\u5185\u5bb9\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"deleted scenes/"),(0,r.kt)("li",{parentName:"ul"},"interviews/"),(0,r.kt)("li",{parentName:"ul"},"scenes/"),(0,r.kt)("li",{parentName:"ul"},"samples/"),(0,r.kt)("li",{parentName:"ul"},"shorts/"),(0,r.kt)("li",{parentName:"ul"},"featurettes/"),(0,r.kt)("li",{parentName:"ul"},"trailers/"),(0,r.kt)("li",{parentName:"ul"},"extras/ - \u6240\u6709\u5176\u4ed6\u5185\u5bb9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Film (2010) [imdbid-tt0106145]"),"/ - \u8f85\u52a9\u8bc6\u522b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Film (2018) [tmdbid-65567]"),"/"))),(0,r.kt)("li",{parentName:"ul"},"Books/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Audiobooks/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Author/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"flac,mp3"))),(0,r.kt)("li",{parentName:"ul"},"Book/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"azw, azw3, cb7, cbr, cbt, cbz, epub, mobi, pdf"))))),(0,r.kt)("li",{parentName:"ul"},"Books/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Author/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"flac,mp3,epub..."),(0,r.kt)("li",{parentName:"ul"},"Book/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Book.epub"),(0,r.kt)("li",{parentName:"ul"},"cover.{png,jpg}"),(0,r.kt)("li",{parentName:"ul"},"metadata.opf,content.opf"))))))))),(0,r.kt)("li",{parentName:"ul"},"Comics/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Attack on Titan #001 (2012).cbz"),(0,r.kt)("li",{parentName:"ul"},"Comic (2008)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ComicInfo.xml"),(0,r.kt)("li",{parentName:"ul"},"Comic #001 (2008).cbr")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internet radio")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-m3u",metastring:'title="m3u"',title:'"m3u"'},"#EXTINF:0,Radio Freccia\nhttps://streamingv2.shoutcast.com/radiofreccia\n")))}k.isMDXComponent=!0}}]);