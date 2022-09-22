"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49902],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),i=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),b=i(n),c=r,m=b["".concat(u,".").concat(c)]||b[c]||s[c]||l;return n?a.createElement(m,o(o({ref:e},p),{},{components:n})):a.createElement(m,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=b;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72541:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return s}});var a=n(96600),r=n(27279),l=(n(59496),n(49613)),o=["components"],d={title:"youtube-dl"},u="youtube-dl",i={unversionedId:"service/download/youtube-dl",id:"service/download/youtube-dl",title:"youtube-dl",description:"- yt-dlp/yt-dlp",source:"@site/../notes/service/download/youtube-dl.md",sourceDirName:"service/download",slug:"/service/download/youtube-dl",permalink:"/notes/service/download/youtube-dl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/download/youtube-dl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660664456,formattedLastUpdatedAt:"Aug 16, 2022",frontMatter:{title:"youtube-dl"},sidebar:"docs",previous:{title:"transmission",permalink:"/notes/service/download/transmission"},next:{title:"E-Commerce",permalink:"/notes/service/e-commerce/"}},p={},s=[{value:"\u4e0b\u8f7d\u7ffb\u8bd1\u5b57\u5e55",id:"\u4e0b\u8f7d\u7ffb\u8bd1\u5b57\u5e55",level:2},{value:"yt-dlp",id:"yt-dlp",level:2},{value:"\u5e38\u7528",id:"\u5e38\u7528",level:2},{value:"unable to download video data: HTTP Error 403: Forbidden",id:"unable-to-download-video-data-http-error-403-forbidden",level:2}],b={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"youtube-dl"},"youtube-dl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yt-dlp/yt-dlp"},"yt-dlp/yt-dlp"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6d3b\u8dc3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ytdl-org/youtube-dl"},"ytdl-org/youtube-dl"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4e0d\u6d3b\u8dc3"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e --config-location",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"~/.config/youtube-dl/config"),(0,l.kt)("li",{parentName:"ul"},"/etc/youtube-dl.conf"),(0,l.kt)("li",{parentName:"ul"},"%APPDATA%/youtube-dl/config.txt"))),(0,l.kt)("li",{parentName:"ul"},"~/.cache/youtube-dl \u7f13\u5b58\u90e8\u5206 yt \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ytdl-org/youtube-dl/blob/master/docs/supportedsites.md"},"\u652f\u6301\u7ad9\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ytdl-org/youtube-dl/issues/9302"},"ytdl-org/youtube-dl#9302")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gist.github.com/AgentOak/34d47c65b1d28829bb17c24c04a0096f"},"Youtube Format IDs")),(0,l.kt)("li",{parentName:"ul"},"yt-dlp")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl --create-file-mode 0755 -o /usr/local/bin/youtube-dl\nsudo chmod a+rx /usr/local/bin/youtube-dl\n\n# \u6d4b\u8bd5\u6587\u4ef6\u540d\n# --restrict-filenames \u5c06\u7a7a\u683c\u8f6c\u6362\u4e3a\u4e0b\u5212\u7ebf\nyoutube-dl --get-filename -o '%(title)s.%(ext)s' d0yGdNEWdn0\n# \u9ed8\u8ba4\u683c\u5f0f\nyoutube-dl --get-filename -o '%(title)s-%(id)s.%(ext)s' d0yGdNEWdn0\n\n# \u751f\u6210\u5217\u8868\u589e\u91cf\u4e0b\u8f7d\nyoutube-dl --download-archive archive.txt \"https://www.youtube.com/playlist?list=PLwiyx1dc3P2JR9N8gQaQN_BCvlSlap7re\"\n\n# \u5f53\u524d\u76ee\u5f55 youtube-dl.conf\n# \u6216\u76f4\u63a5\u6307\u5411\u6587\u4ef6\nyoutube-dl --config-location $PWD\n\n# \u53ef\u4ee5\u540c\u65f6\u5229\u7528\u5168\u5c40\u914d\u7f6e\nyoutube-dl $(cat youtube-dl.conf)\n\n# \u67e5\u770b\u6240\u6709\u683c\u5f0f\n# -f best \u4e0d\u4e00\u5b9a\u4f1a\u9009\u62e9\u6700\u4f73 audio - \u6700\u4f73 video+\u6700\u4f73 audio \u4e0d\u4e00\u5b9a\u5b58\u5728\n# \u53ef\u4ee5\u5355\u72ec\u4e0b\u8f7d\u6700\u4f73 audio\nyoutube-dl -F J9bjJEjK2dQ\n# -f best \u4e5f\u53ef\u4ee5\u4f1a\u9009\u62e9\u5dee\u7684\nyoutube-dl -F anbrb2u9GYI\n\n# \u6700\u597d\u7684 mp4 \u6216\u5176\u4ed6\u4efb\u610f\u683c\u5f0f\nyoutube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'\n# \u6700\u597d video \u4f46\u5c0f\u4e8e 480p\nyoutube-dl -f 'bestvideo[height<=480]+bestaudio/best[height<=480]'\n# \u6700\u597d video \u4f46\u5c0f\u4e8e 50M\nyoutube-dl -f 'best[filesize<50M]'\n# HTTP/HTTPS \u76f4\u63a5\u94fe\u63a5\u4e0b\u8f7d\nyoutube-dl -f '(bestvideo+bestaudio/best)[protocol^=http]'\n# \u6700\u597d\u7684\u97f3\u9891\u548c\u89c6\u9891\u4f46\u4e0d\u5408\u5e76\nyoutube-dl -f 'bestvideo,bestaudio' -o '%(title)s.f%(format_id)s.%(ext)s'\n\n# -f bestvideo[vcodec=vp9]+bestaudio[acodec=opus]/best\n# -xf bestaudio[acodec=opus]\n# -f bestvideo[vcodec=av1]+bestaudio[acodec=opus]/best\n\n# -f 'bestvideo[vcodec=av1]+bestaudio[acodec=opus]/bestvideo[vcodec=vp9]+bestaudio[acodec=opus]/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best'\n\n# archiving videos\n# bestvideo[ext=webm]+251/bestvideo[ext=mp4]+(258/256/140)/bestvideo[ext=webm]+(250/249)/best\n# archiving audio\n# 258/251/22/256/140/250/18/249/139\n# streaming videos\n# bestvideo+bestaudio/best\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-o ~/Movies/%(title)s.%(ext)s")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6309\u7167\u6a21\u677f\u8f93\u51fa\u5230\u6307\u5b9a\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--proxy 127.0.0.1:3128"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\uff0c\u652f\u6301 socks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-f, --format best"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6700\u597d\u7684\u683c\u5f0f,\u9ed8\u8ba4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-playlist"),(0,l.kt)("td",{parentName:"tr",align:null},"\u590d\u5236\u4e86\u64ad\u653e\u5217\u8868\u4e2d\u7684\u89c6\u9891\uff0c\u4f46\u53ea\u4e0b\u8f7d\u5355\u4e2a\u89c6\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--all-subs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u6240\u6709\u5b57\u5e55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-R 50"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u91cd\u8bd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--ignore-errors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5217\u8868\u4e2d\u7684\u9519\u8bef\u89c6\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--download-archive archive.txt"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5df2\u7ecf\u4e0b\u8f7d\u7684\u89c6\u9891\uff0c\u4e0b\u6b21\u4e0d\u518d\u4e0b\u8f7d\uff0c\u6bcf\u884c\u8bb0\u5f55 ",(0,l.kt)("inlineCode",{parentName:"td"},"<extractor> <id>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-a, --batch-file urls.txt"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u4e0b\u8f7d\u5730\u5740,\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"#"),",",(0,l.kt)("inlineCode",{parentName:"td"},";")," \u6ce8\u91ca")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u6587\u4ef6\u91cc\u53ea\u6709 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-w, --no-overwrites"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8986\u76d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--write-thumbnail"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u7f29\u7565\u56fe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u540e\u5904\u7406")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-x, --extract-audio"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u53d6\u97f3\u9891")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--embed-subs"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--embed-thumbnail"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--add-metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u5143\u4fe1\u606f\u5230\u5a92\u4f53\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--xattrs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\u5143\u4fe1\u606f\u5230\u6587\u4ef6 xattrs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--convert-subs FORMAT"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"youtube-dl.conf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--all-subs\n--geo-bypass\n--ignore-errors\n--proxy socks5://127.0.0.1:8888\n--write-thumbnail\n-f best\n-R 50\n")),(0,l.kt)("p",null,":::warn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-f best \u4e0d\u4e00\u5b9a\u4f1a\u4e0b\u8f7d\u6700\u4f18\u683c\u5f0f")),(0,l.kt)("p",null,"\u63a8\u8350"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-f 'bestvideo[vcodec=av1]+bestaudio[acodec=opus]/bestvideo[vcodec=vp9]+bestaudio[acodec=opus]/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best'\n")),(0,l.kt)("p",null,":::"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u7ffb\u8bd1\u5b57\u5e55"},"\u4e0b\u8f7d\u7ffb\u8bd1\u5b57\u5e55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--convert-subs srt"),(0,l.kt)("li",{parentName:"ul"},"--all-subs \u4e0b\u8f7d\u6240\u6709\u5b57\u5e55"),(0,l.kt)("li",{parentName:"ul"},"--embed-subs"),(0,l.kt)("li",{parentName:"ul"},"--write-auto-sub - \u4e0b\u8f7d\u751f\u6210\u5b57\u5e55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e2d\u6587\u5b57\u5e55\nyoutube-dl --write-auto-sub --write-sub --skip-download --sub-lang=en,zh-Hans\n# \u67e5\u770b\u6240\u6709\u5b57\u5e55\nyoutube-dl --list-subs\n")),(0,l.kt)("h2",{id:"yt-dlp"},"yt-dlp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl -o /usr/local/bin/yt-dlp -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp\nsudo chmod a+rx /usr/local/bin/yt-dlp\n")),(0,l.kt)("h2",{id:"\u5e38\u7528"},"\u5e38\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp --download-archive archive.txt -a urls.txt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"~/.config/yt-dlp/config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"--all-subs\n--geo-bypass\n--ignore-errors\n--proxy 127.0.0.1:8888\n--write-thumbnail\n--write-info-json\n-R 50\n")),(0,l.kt)("p",null,"\u6839\u636e\u652f\u6301\u7684\u683c\u5f0f\u9009\u62e9\uff0c\u4f8b\u5982\u65e7\u7684 AppleTV \u4e0d\u652f\u6301 av1\uff0ch264 \u662f\u6700\u5b89\u5168\u7684\u9009\u62e9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-f 'bestvideo[vcodec=av1]+bestaudio[acodec=opus]/bestvideo[vcodec=vp9]+bestaudio[acodec=opus]/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best'\n")),(0,l.kt)("h1",{id:"faq"},"FAQ"),(0,l.kt)("h2",{id:"unable-to-download-video-data-http-error-403-forbidden"},"unable to download video data: HTTP Error 403: Forbidden"),(0,l.kt)("p",null,"\u5c1d\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"--rm-cache-dir")))}c.isMDXComponent=!0}}]);