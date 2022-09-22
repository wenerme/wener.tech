"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3509],{49613:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return N}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=m(a),N=l,d=s["".concat(u,".").concat(N)]||s[N]||o[N]||r;return a?n.createElement(d,i(i({ref:e},k),{},{components:a})):n.createElement(d,i({ref:e},k))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},70410:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return N},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,o=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&k(t,a,e[a]);if(p)for(var a of p(e))m.call(e,a)&&k(t,a,e[a]);return t};const s={title:"Hashing"},N="Hashing",d={unversionedId:"algorithm/hashing",id:"algorithm/hashing",title:"Hashing",description:"- Broken - MD4, MD5, SHA-0, SHA-1",source:"@site/../notes/algorithm/hashing.md",sourceDirName:"algorithm",slug:"/algorithm/hashing",permalink:"/notes/algorithm/hashing",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/hashing.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"Hashing"},sidebar:"docs",previous:{title:"FST",permalink:"/notes/algorithm/fst"},next:{title:"Math Awesome",permalink:"/notes/algorithm/math-awesome"}},g={},h=[{value:"\u5bc6\u7801",id:"\u5bc6\u7801",level:2},{value:"git hash",id:"git-hash",level:2},{value:"Hash/Digest",id:"hashdigest",level:2},{value:"Cryptographic hash algorithms",id:"cryptographic-hash-algorithms",level:2},{value:"SHA",id:"sha",level:2},{value:"Reverse",id:"reverse",level:2},{value:"SHA2 vs SHA3",id:"sha2-vs-sha3",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}],c={toc:h};function f(t){var e,a=t,{components:l}=a,k=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=o(o({},c),k),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",o({},{id:"hashing"}),"Hashing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Broken - MD4, MD5, SHA-0, SHA-1")),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"git \u9ed8\u8ba4 sha2-256"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u8003")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"http://softwareengineering.stackexchange.com/questions/49550"}),"Which hashing algorithm is best for uniqueness and speed?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u968f\u673a\u6027\u548c\u78b0\u649e\u6bd4\u8f83"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://cryptography.cc/"}),"Cryptography Center")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_hash_functions"}),"List of hash functions")),(0,n.kt)("li",{parentName:"ul"},"SHA1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2017-02-23 ",(0,n.kt)("a",o({parentName:"li"},{href:"https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html"}),"Announcing the first SHA1 collision")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://shattered.io/"}),"shattered"),"\nbroken SHA-1 in practice"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/cr-marcstevens/sha1collisiondetection"}),"cr-marcstevens/sha1collisiondetection"))))),(0,n.kt)("h2",o({},{id:"\u5bc6\u7801"}),"\u5bc6\u7801"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pbkdf2 - \u4e3b\u6d41 - \u4e13\u7528\u4e8e\u5bc6\u7801"),(0,n.kt)("li",{parentName:"ul"},"aragon2 - \u4f46\u91c7\u7528\u6ca1\u6709 pbkdf \u591a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"salt \u6700\u5c11 8 \u4f4d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/P-H-C/phc-winner-argon2"}),"P-H-C/phc-winner-argon2")))),(0,n.kt)("li",{parentName:"ul"},"bcrypt"),(0,n.kt)("li",{parentName:"ul"},"scrypt"),(0,n.kt)("li",{parentName:"ul"},"sha2 - \u7279\u6b8a\u573a\u666f"),(0,n.kt)("li",{parentName:"ul"},"salted - \u4f20\u7edf md5 \u65b9\u5f0f+salt")),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'# -i - argon2i - \u9ed8\u8ba4\n# -d - argon2d\n# -id - argon2id\n# -t=3 - iterations\n# -m=12 - memory usage - 2^N\n# -p=1 - parallelism\n# -l=32 - \u8f93\u51fa\u957f\u5ea6\n# -e - \u53ea\u8f93\u51fa hash\n# -r - raw bytes\n# -v=13 - \u7248\u672c 10,13\necho -n "secret" | argon2 "saltsalt" -e\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NodeJS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)"))))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u9009\u62e9\u8fed\u4ee3\u6b21\u6570\u548c\u622a\u53d6\u957f\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"HKDF - Hash-Based Key Derivation Function"),(0,n.kt)("li",{parentName:"ul"},"KDF - key derivation function"),(0,n.kt)("li",{parentName:"ul"},"KDF vs HKDF",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://crypto.stackexchange.com/a/70722/103400"}),"https://crypto.stackexchange.com/a/70722/103400")))),(0,n.kt)("li",{parentName:"ul"},"How quickly can these password schemes really be beaten? ",(0,n.kt)("a",o({parentName:"li"},{href:"https://security.stackexchange.com/q/8607/130027"}),"https://security.stackexchange.com/q/8607/130027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.tarsnap.com/scrypt/scrypt.pdf"}),"https://www.tarsnap.com/scrypt/scrypt.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://www.tarsnap.com/scrypt/scrypt-slides.pdf"}),"https://www.tarsnap.com/scrypt/scrypt-slides.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://rumkin.com/tools/password/"}),"https://rumkin.com/tools/password/"))),(0,n.kt)("h2",o({},{id:"git-hash"}),"git hash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"git 2.12 \u4f7f\u7528\u589e\u5f3a\u540e\u7684 SHA-1"),(0,n.kt)("li",{parentName:"ul"},"git \u9ed8\u8ba4\u4ece SHA-1 \u8fc1\u79fb\u4e3a SHA-256",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://stackoverflow.com/a/60088126/1870054"}),"why git choose sha-256")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://git-scm.com/docs/hash-function-transition/"}),"hash-function-transition"))),(0,n.kt)("h2",o({},{id:"hashdigest"}),"Hash/Digest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"adler32"),(0,n.kt)("li",{parentName:"ul"},"crc - Cyclic redundancy check",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"16,32,64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function"}),"fnv")," - Fowler\u2013Noll\u2013Vo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"32,64,128,256,512,1024"),(0,n.kt)("li",{parentName:"ul"},"xor"))),(0,n.kt)("li",{parentName:"ul"},"MurmurHash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"32,64,128"))),(0,n.kt)("li",{parentName:"ul"},"maphash"),(0,n.kt)("li",{parentName:"ul"},"tdigest")),(0,n.kt)("h2",o({},{id:"cryptographic-hash-algorithms"}),"Cryptographic hash algorithms"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"hash"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"variant"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"bits"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"internal bites"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"block bits"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"rounds"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"hex"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"b64"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MD5"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"128=4\xd732"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"32"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHA-0"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"160"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"160=5\xd732"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"80"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"40"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHA-1"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"160"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"160=5\xd732"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"80"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"40"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHA-2"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256=8\xd732"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"56"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"64"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512=8\xd764"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1024"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"80"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"96"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"128"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512/224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512/256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHA-3"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"224"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1600=5\xd75\xd764"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1152"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"24"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"56"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1088"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"384"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"832"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"512"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"576"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHAKE128"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1344"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"SHAKE256"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1088"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"^^"),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"x86",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SHA3-256 - MMX,AVX-512VL, AVX2 - OpenSSL"),(0,n.kt)("li",{parentName:"ul"},"SHA3 - SSE2 - Crypto++"))),(0,n.kt)("li",{parentName:"ul"},"Apple A13 ARMv8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SHA-3/SHA-512 EOR3, RAX1, XAR, BCAX - ARMv8.2-SHA"))),(0,n.kt)("li",{parentName:"ul"},"ARM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SVE, SVE2")))),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function"}),"Cryptographic hash function")),(0,n.kt)("li",{parentName:"ul"},"MD5"),(0,n.kt)("li",{parentName:"ul"},"SHA-1"),(0,n.kt)("li",{parentName:"ul"},"RIPEMD-160"),(0,n.kt)("li",{parentName:"ul"},"Whirlpool"),(0,n.kt)("li",{parentName:"ul"},"SHA-2"),(0,n.kt)("li",{parentName:"ul"},"SHA-3"),(0,n.kt)("li",{parentName:"ul"},"BLAKE2")),(0,n.kt)("h2",o({},{id:"sha"}),"SHA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SHA - Secure Hash Algorithm"),(0,n.kt)("li",{parentName:"ul"},"SHA-2 - 2001",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"224, 256, 384, 512"))),(0,n.kt)("li",{parentName:"ul"},"SHA-3 - 2015",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"224, 256, 384, 512")))),(0,n.kt)("h2",o({},{id:"reverse"}),"Reverse"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://md5.gromweb.com/"}),"https://md5.gromweb.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://sha1.gromweb.com/"}),"https://sha1.gromweb.com/"))),(0,n.kt)("h2",o({},{id:"sha2-vs-sha3"}),"SHA2 vs SHA3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027 - \u4e24\u8005\u533a\u522b\u4e0d\u5927 - \u6ca1\u6709\u7ed3\u6784\u6027\u95ee\u9898\uff0c\u4f8b\u5982 sha1"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd - SHA2 \u5e7f\u6cdb\uff0c\u8f6f\u5b9e\u73b0\u6027\u80fd\u66f4\u597d\uff0c\u786c\u4ef6\u652f\u6301\u66f4\u591a")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://crypto.stackexchange.com/a/68314"}),"sha2 vs sha3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://security.stackexchange.com/a/153058/130027"}),"Should we be using SHA3"))),(0,n.kt)("h2",o({},{id:"\u6027\u80fd"}),"\u6027\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Intel_SHA_extensions"}),"Intel SHA Extensions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since 2013"),(0,n.kt)("li",{parentName:"ul"},"SHA-1, SHA-256"))),(0,n.kt)("li",{parentName:"ul"},"AVX-512 - Advanced Vector Extensions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"since 2015"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/minio/sha256-simd"}),"minio/sha256-simd"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Golang")))))}f.isMDXComponent=!0}}]);