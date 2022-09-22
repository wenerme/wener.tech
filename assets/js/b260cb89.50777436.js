"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24102],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(a),d=n,c=k["".concat(o,".").concat(d)]||k[d]||s[d]||l;return a?r.createElement(c,i(i({ref:e},u),{},{components:a})):r.createElement(c,i({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},90949:function(t,e,a){a.r(e),a.d(e,{assets:function(){return N},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,s=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&u(t,a,e[a]);return t};const k={title:"Compress",tags:["Awesome"]},d="Compress",c={unversionedId:"service/storage/compress-awesome",id:"service/storage/compress-awesome",title:"Compress",description:"- google/zopfli",source:"@site/../notes/service/storage/compress-awesome.md",sourceDirName:"service/storage",slug:"/service/storage/compress-awesome",permalink:"/notes/service/storage/compress-awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/compress-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"Compress",tags:["Awesome"]},sidebar:"docs",previous:{title:"Ubuntu 16.04 \u5b89\u88c5 Ceph",permalink:"/notes/service/storage/ceph/ubuntu-16-install"},next:{title:"cyberduck",permalink:"/notes/service/storage/cyberduck"}},N={},g=[{value:"zlib",id:"zlib",level:2},{value:"gzip",id:"gzip",level:2},{value:"tar",id:"tar",level:2},{value:"\u89e3\u538b 7z exe",id:"\u89e3\u538b-7z-exe",level:2},{value:"Multi part",id:"multi-part",level:2},{value:"Password",id:"password",level:2}],h={toc:g};function b(t){var e,a=t,{components:n}=a,u=((t,e)=>{var a={};for(var r in t)o.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&m.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=s(s({},h),u),l(e,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"compress"}),"Compress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/zopfli"}),"google/zopfli"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Zopfli Compression Algorithm is a compression library programmed in C to perform very good, but slow, deflate or zlib compression."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/brotli"}),"google/brotli"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u65e0\u635f\u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"combination of a modern variant of the LZ77 algorithm, Huffman coding and 2nd order context modeling, with a compression ratio comparable to the best currently available general-purpose compression methods"),(0,r.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u4e0e deflate \u76f8\u4f3c, \u4f46\u538b\u7f29\u7387\u66f4\u9ad8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/kothar/brotli-go"}),"kothar/brotli-go"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go bindings for the Brotli compression library"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/google/draco"}),"google/draco"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Draco is a library for compressing and decompressing 3D geometric meshes and point clouds. It is intended to improve the storage and transmission of 3D graphics."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/dsnet/compress"}),"dsnet/compress"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Collection of compression related Go packages."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/facebook/zstd"}),"facebook/zstd"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://facebook.github.io/zstd/"}),"zstd")),(0,r.kt)("li",{parentName:"ul"},"Zstandard - Fast real-time compression algorithm"))),(0,r.kt)("li",{parentName:"ul"},"Benchmark",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://quixdb.github.io/squash-benchmark/"}),"Squash Compression Benchmark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://mattmahoney.net/dc/text.html"}),"Large Text Compression Benchmark")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://catchchallenger.first-world.info/wiki/Quick_Benchmark:_Gzip_vs_Bzip2_vs_LZMA_vs_XZ_vs_LZ4_vs_LZO"}),"Gzip vs Bzip2 vs LZMA vs XZ vs LZ4 vs LZO")))),(0,r.kt)("li",{parentName:"ul"},"JS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/nodeca/pako"}),"nodeca/pako"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"high speed zlib port to javascript, works in browser & node.js"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://zlib.net/pigz/"}),"pigz")," - \u5e76\u884c Gzip - \u547d\u4ee4\u517c\u5bb9 gzip"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/MacPaw/XADMaster"}),"MacPaw/XADMaster"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LGPL-2.1"),(0,r.kt)("li",{parentName:"ul"},"Zip, Tar, Gzip, Bzip2, 7-Zip, Rar, LhA, StuffIt, CAB, LZX"),(0,r.kt)("li",{parentName:"ul"},"unar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/MacPaw/unar"}),"MacPaw/unar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://theunarchiver.com/"}),"https://theunarchiver.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/Homebrew/homebrew-core/blob/master/Formula/unar.rb"}),"https://github.com/Homebrew/homebrew-core/blob/master/Formula/unar.rb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://theunarchiver.com/command-line"}),"https://theunarchiver.com/command-line")))),(0,r.kt)("li",{parentName:"ul"},"unrar",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alpine 3.14 \u6709"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.rarlab.com/download.htm"}),"https://www.rarlab.com/download.htm"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"curl -O https://www.rarlab.com/rar/rarlinux-x64-612.tar.gz\ntar zxvf rarlinux-x64-612.tar.gz\n./rar/unrar\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://glinscott.github.io/lz/index.html"}),"Modern LZ Compression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/MiloszKrajewski/SilesiaCorpus"}),"MiloszKrajewski/SilesiaCorpus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/hxhb/oodle-compression"}),"hxhb/oodle-compression"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.radgametools.com/oodle.htm"}),"http://www.radgametools.com/oodle.htm")),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29\u6162\uff0c\u89e3\u538b\u5feb\uff0c\u538b\u7f29\u7387\u9ad8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_archive_formats"}),"List of archive formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_file_archivers"}),"Comparison of file archivers"))))),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5f52\u6863 \u533a\u522b\u4e8e \u538b\u7f29\u7b97\u6cd5 - \u5f52\u6863 -> \u5bb9\u5668"),(0,r.kt)("li",{parentName:"ul"},"gzip \u5934\u5305\u542b mtime\uff0c\u56e0\u6b64\u538b\u7f29\u7ed3\u679c\u662f\u4e0d\u4e00\u81f4\u7684"))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"7z",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://documentation.help/7-Zip/"}),"https://documentation.help/7-Zip/"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'cd staged && mytar cf - . | ssh root@localhost "cd / && tar xvf -"\n\n# bz2\n# ==========\n# \u89e3\u538b\nbzip2 -d filename.bz2\n# \u89e3\u538b\u5e76\u4fdd\u7559\u539f\u59cb\u538b\u7f29\u5305\nbzip2 -dk filename.bz2\n\n# \u5e76\u884c Gzip\n# http://zlib.net/pigz/\n# \u63d0\u4e9a\u63d0\u5347\u4e0d\u5927, \u56e0\u4e3a\u89e3\u538b\u7684\u7ed3\u6784\u4e0d\u9002\u7528\u4e8e\u5e76\u53d1\n# \u652f\u6301 -11 zopfli\n# \u5229\u7528 pv \u53ef\u4ee5\u67e5\u770b\u538b\u7f29\u8fdb\u5ea6\npv dict.db | pigz -vfk9 > dict.db.gz\n\n# \u53ef\u4ee5\u76f4\u63a5\u66ff\u6362\nln -s /usr/bin/pigz /usr/local/bin/gzip\nln -s /usr/bin/unpigz /usr/local/bin/gunzip\n\n# \u5f3a\u5236\u8986\u5199, \u66b4\u9732\u539f\u59cb\u6587\u4ef6, 9 \u7ea7\u538b\u7f29\ngzip -vfk9 data.db > data.db.gz\n\n# -w 0 \u81ea\u52a8\u9009\u62e9\u4f18\u5316\u7684\u7a97\u53e3\u5927\u5c0f\n# -9 \u538b\u7f29\u7387, \u5982\u679c\u4e0d\u6307\u5b9a, \u9ed8\u8ba4\u4e3a -Z \u5373 11, \u4f1a\u975e\u5e38\u6162\npv dict.db | brotli -9 -w 0 > dict.db.br\n\n# \u7f16\u7801\n# ====\n# https://www.iana.org/assignments/character-sets/character-sets.xhtml\nunzip -O cp936 -l my.zip # \u4f7f\u7528\u6307\u5b9a\u7684\u7f16\u7801, \u6709\u4e9b unzip \u4e0d\u4e00\u5b9a\u6709\u8be5\u9009\u9879 - unzip-iconv\n# \u4e5f\u53ef\u4ee5\u5148\u89e3\u538b, \u7136\u540e\u518d\u8f6c\u6362\nLANG=C 7za x your-zip-file.zip\nconvmv -f GBK -t utf8 --notest -r .\n# brew install unar\nunar -e gb18030 gb18030.zip\n\n# \u6279\u91cf\n# ====\nunzip \\*.zip\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"gzip"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"deflate/zlib"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Header size"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"10 bytes"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Footer size"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"4 bytes"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Checksum"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"CRC32"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Adler-32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Compression algorithm"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"DEFLATE"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"DEFLATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Specification"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://datatracker.ietf.org/doc/html/rfc1952"}),"RFC1952")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("a",s({parentName:"td"},{href:"https://datatracker.ietf.org/doc/html/rfc1950"}),"RFC1950"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc1951"}),"rfc1951")," deflate \u7b97\u6cd5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"content-encoding deflate -> zlib",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u5927\u591a\u6570\u7f51\u7ad9\u4f7f\u7528 gzip",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u65e9\u671f MS Server \u4f1a\u76f4\u63a5\u53d1\u9001 deflate \u6570\u636e\uff0c\u800c\u4e0d\u662f zlib - deflate \u5728\u8fd9\u91cc\u6709\u4e00\u70b9\u6df7\u4e71"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://stackoverflow.com/a/9186091/1870054"}),"https://stackoverflow.com/a/9186091/1870054")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://stackoverflow.com/a/68538037/1870054"}),"https://stackoverflow.com/a/68538037/1870054"))),(0,r.kt)("h2",s({},{id:"zlib"}),"zlib"),(0,r.kt)("p",null,(0,r.kt)("img",s({parentName:"p"},{src:"https://kroki.io/bytefield/svg/eNptkcFuwjAMhu97Csu7gLROBQpsvbGWTkjsMu2GOKTUgWoprZJUgBDvPhdYSzcOnyI5X_7YSSchKazVBvx47aw10RaOvkyVAnwUrpTCxVP3odPSDqRUvms8Ke97Rbr9vrVi9561Ooj2nUKKO1mlLhQ1HnnxUI4r7yzCKldltnWUiEkZWKCLT9hj-syA8ZghM2LGzAvzykyYNyZgQmbKRLi8XA9xvifjFKQdzQP3Rk3Z2aWJ3YDnViUtds61gQ2JhLT5rbIJGHxECIujbwqetHe6eeoltMRo_v5PvDx2W-xY2lvAcBZ8zUI-4WfCbpa8mjIGTCVw0HNUbfMkdaB3qn-lirvmrUUBuMqzQpMxlEAirMB699zWJJxPPwd9_JvUtFbb1uZZ9wfuMrPJ",alt:null}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CMF",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0-3 CM Compression method",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"8 -> deflate"))),(0,r.kt)("li",{parentName:"ul"},"4-7 CINFO Compression info",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CM=8 LZ77 window size, CINFO=7 -> 32K window size"))))),(0,r.kt)("li",{parentName:"ul"},"FLG",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0-4 - FCHECK (check bits for CMF and FLG)"),(0,r.kt)("li",{parentName:"ul"},"5 - FDICT (preset dictionary)"),(0,r.kt)("li",{parentName:"ul"},"6-7 - FLEVEL (compression level)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 - fastest"),(0,r.kt)("li",{parentName:"ul"},"1 - fast"),(0,r.kt)("li",{parentName:"ul"},"2 - default"),(0,r.kt)("li",{parentName:"ul"},"3 - maximum compression, slowest algorithm")))))),(0,r.kt)("h2",s({},{id:"gzip"}),"gzip"),(0,r.kt)("p",null,(0,r.kt)("img",s({parentName:"p"},{src:"https://kroki.io/bytefield/svg/eNp9kktvgzAMgO_7FVF2aaUhhZY-xm3d2vu0Y9VDAAfQQkBJqtJV_Pe5j_Eq3eETkfXFxnZGEQhurTbED2In1gCKnHyRSknoM2dCcEar8dOoox1ByvzQeEIMe0WqvttWwIas8Mi7NbngA7n2upDQeOAFM7E4exeRhLncZ8qRPABpyJYy-kJdZIJMEQ-ZIXNkgSyRV-QNWSHvyAeyRjZ0dy1PgrwE4xSgHY0Nu_Mm7BzSyCbEY-eQ5gfn9gMJ8Ai0-YuiSVjpbpYrsj35psBWJ1Vr1jvSNqmQMa1Ft2pNuycmkb4Tz-PuaTbNwFieFY3sVfXUe3I5VH0gaW4eWm3ta_1J-01ft9jNN7JQWkIlKNT9jNtkh1-zD3AcKcgIl0FaeZrLMS9uiqF16VsQn4riGdDuHhgb32lhnmWg7EPz0guosFcizJW9Xmt7oQ6nk7tZD24QD8SkP_CPXevW5tn4FwytIU0=",alt:null}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"flg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"-"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"store - \u4e0d\u538b\u7f29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"compress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"pack - \u6253\u5305")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"3"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"lzh \u4f7f\u7528 lzh \u7b97\u6cd5\u538b\u7f29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"4-7"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u4fdd\u7559")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"8"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"deflate - \u5e38\u7528")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"hdr"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"-"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00000001"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u53ef\u80fd\u4e3a\u6587\u672c\u683c\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00000010"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u591a\u538b\u7f29\u6587\u4ef6 - \u5b58\u5728\u5e8f\u5217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00000100"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5305\u542b\u9644\u52a0\u5b57\u6bb5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00001000"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5305\u542b\u6587\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00010000"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u5305\u542b\u6587\u4ef6\u6ce8\u91ca")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b00100000"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u52a0\u5bc6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0b11000000"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u4fdd\u7559")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"os"),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x00"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Windows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x01"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Amiga")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x02"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"VMS/OpenVMS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x03"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Unix/Linux/macOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x04"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"VM/CMS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x05"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Atari TOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x06"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"HPFS filesystem (OS/2, NT)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x07"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Macintosh")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x08"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Z-System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x09"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"CP/M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x0a"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"TOPS-20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x0b"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"NTFS filesystem (NT)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x0c"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"QDOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0x0d"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Acorn RISCOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"0xff"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"unknown")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc1952"}),"rfc1952")," GZIP file format specification version 4.3")),(0,r.kt)("h2",s({},{id:"tar"}),"tar"),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"\u89e3\u538b-7z-exe"}),"\u89e3\u538b 7z exe"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'ls *.exe | xargs -n 1 -d "\\n" 7z x\n')),(0,r.kt)("h2",s({},{id:"multi-part"}),"Multi part"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# 1. merge\ncat in.zip* > ~/in.zip\nunzip in.zip\n\n# 2. 7z\n7z x in.zip.001\n")),(0,r.kt)("h2",s({},{id:"password"}),"Password"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"7z -mhc=on -mhe=on -pPASSWORD a out.7z in.txt\n\nzip -P password -r encrypted.zip folderIWantToZip\nunzip -P password encrypted.zip\n")))}b.isMDXComponent=!0}}]);