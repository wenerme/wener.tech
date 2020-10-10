(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{366:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return l})),r.d(e,"default",(function(){return d}));var t=r(2),i=r(9),a=(r(0),r(618)),o={id:"minidlna",title:"MiniDLNA"},c={id:"service/media/server/minidlna",title:"MiniDLNA",description:"# MiniDLNA",source:"@site/../tricks/service/media/server/minidlna.md",permalink:"/notes/service/media/server/minidlna"},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],p={rightToc:l};function d(n){var e=n.components,r=Object(i.a)(n,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"minidlna"},"MiniDLNA"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7\u7684 DLNA/UPnP-AV \u670d\u52a1")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install minidlna\n# AlpineLinux\napk add minidlna\n\n# \u524d\u53f0\u542f\u52a8\nminidlnad -f ./minidlna.conf -P $PWD/minidlna.pid -d\n")),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"/etc/minidlna.conf")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ini"}),"# HTTP \u7aef\u53e3 - descriptions, SOAP, media transfer\nport=8200\n\n# \u7ed1\u5b9a\u7f51\u53e3\n#network_interface=eth0,eth1\n\n# UID\n#user=jmaggard\n\n# \u626b\u63cf\u76ee\u5f55\n# A - audio, V - video, P - images\nmedia_dir=AVP,/data/media\nmedia_dir=V,/data/music\n\n# \u5408\u5e76 media_dir \u5230\u540c\u4e00\u4e2a\u6839\u76ee\u5f55\n#merge_media_dirs=no\n\n# \u81ea\u5b9a\u4e49\u670d\u52a1\u540d\n#friendly_name=My DLNA Server\n\n# \u6570\u636e\u5e93\u548c\u5c01\u9762\u7f13\u5b58\n#db_dir=/var/cache/minidlna\n\n# \u65e5\u5fd7\u76ee\u5f55\n#log_dir=/var/log\n\n# \u65e5\u5fd7\u7ea7\u522b\n# \u6a21\u5757\u65e5\u5fd7\u7ea7\u522b off, fatal, error, warn, info, or debug\n#log_level=general,artwork,database,inotify,scanner,metadata,http,ssdp,tivo=warn\n\n# \u5c01\u9762\u56fe\u7247\u6587\u4ef6\n# / \u5206\u5272\nalbum_art_names=Cover.jpg/cover.jpg/AlbumArtSmall.jpg/albumartsmall.jpg/AlbumArt.jpg/albumart.jpg/Album.jpg/album.jpg/Folder.jpg/folder.jpg/Thumb.jpg/thumb.jpg\n\n# inotify \u68c0\u6d4b\u68c0\u6d4b\u65b0\u6587\u4ef6\u8fdb\u884c\u626b\u63cf\ninotify=yes\n\n# TiVo HMO \u517c\u5bb9\u7684 .jpg, .mp3 \u6d41\nenable_tivo=no\n\n# ZeroConf \u914d\u7f6e\u53d1\u73b0\ntivo_discovery=bonjour\n\n# \u4e25\u683c\u6a21\u5f0f - \u662f\u5426\u5141\u8bb8\u670d\u52a1\u7aef\u8fdb\u884c\u56fe\u7247\u4e0b\u91c7\u6837\nstrict_dlna=no\n\n# \u9ed8\u8ba4 80 \u5730\u5740\u663e\u793a\u7684 URL\n#presentation_url=http://www.mylan/index.php\n\n# \u9ed8\u8ba4 895s\uff0cnotify \u95f4\u9694\nnotify_interval=900\n\n# \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u4e32\u53f7\u548c\u6a21\u578b\u7f16\u53f7\nserial=12345678\nmodel_number=1\n\n# MiniSSDPd socket\n#minissdpdsocket=/var/run/minissdpd.sock\n\n# \u6839\u5bb9\u5668\n# . - \u6807\u51c6\u5bb9\u5668, B - \u6d4f\u89c8\u76ee\u5f55, M \u97f3\u4e50, V \u89c6\u9891 P \u56fe\u7247\n# \u53ef\u81ea\u5b9a\u4e49\u4e3a ObjectID 1$F -> Music/Playlists\n#root_container=.\n\n# \u5f3a\u5236\u6392\u5e8f\n#force_sort_criteria=+upnp:class,+upnp:originalTrackNumber,+dc:title\n\n# \u6700\u5927\u8fde\u63a5\u6570\n#max_connections=50\n\n# \u5141\u8bb8\u8f6f\u94fe\u63a5\u6307\u5411\u5a92\u4f53\u76ee\u5f55\u4e4b\u5916\n#wide_links=no\n")))}d.isMDXComponent=!0},618:function(n,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return b}));var t=r(0),i=r.n(t);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var p=i.a.createContext({}),d=function(n){var e=i.a.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},u=function(n){var e=d(n.components);return i.a.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},s=i.a.forwardRef((function(n,e){var r=n.components,t=n.mdxType,a=n.originalType,o=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=d(r),s=t,b=u["".concat(o,".").concat(s)]||u[s]||m[s]||a;return r?i.a.createElement(b,c(c({ref:e},p),{},{components:r})):i.a.createElement(b,c({ref:e},p))}));function b(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:t,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);