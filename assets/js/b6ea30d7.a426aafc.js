"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65311],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26581:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],p={id:"dns-prevent-spoofing",title:"\u5982\u4f55\u907f\u514d DNS \u6c61\u67d3\u4e14\u80fd\u6b63\u5e38\u8bbf\u95ee\u56fd\u5185\u57df\u540d\uff1f"},s=void 0,i={unversionedId:"howto/network/dns-prevent-spoofing",id:"howto/network/dns-prevent-spoofing",isDocsHomePage:!1,title:"\u5982\u4f55\u907f\u514d DNS \u6c61\u67d3\u4e14\u80fd\u6b63\u5e38\u8bbf\u95ee\u56fd\u5185\u57df\u540d\uff1f",description:"\u573a\u666f",source:"@site/notes/howto/network/dns-prevent-spoofing.md",sourceDirName:"howto/network",slug:"/howto/network/dns-prevent-spoofing",permalink:"/notes/howto/network/dns-prevent-spoofing",editUrl:"https://github.com/wenerme/wener/edit/master/notes/howto/network/dns-prevent-spoofing.md",tags:[],version:"current",frontMatter:{id:"dns-prevent-spoofing",title:"\u5982\u4f55\u907f\u514d DNS \u6c61\u67d3\u4e14\u80fd\u6b63\u5e38\u8bbf\u95ee\u56fd\u5185\u57df\u540d\uff1f"},sidebar:"docs",previous:{title:"\u5982\u4f55\u901a\u8fc7 Ansible \u6765\u7ba1\u7406 AlpineLinux \uff1f",permalink:"/notes/howto/ops/alpine-admin-ansible"},next:{title:"\u5982\u4f55\u90e8\u7f72 TINC \u7f51\u7edc\uff1f",permalink:"/notes/howto/network/tinc-get-started"}},c=[{value:"\u573a\u666f",id:"\u573a\u666f",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[{value:"\u9a8c\u8bc1 DNS \u6c61\u67d3",id:"\u9a8c\u8bc1-dns-\u6c61\u67d3",children:[]},{value:"DNS GEO \u89e3\u6790\u9a8c\u8bc1",id:"dns-geo-\u89e3\u6790\u9a8c\u8bc1",children:[]}]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[{value:"Docker \u5b8c\u6574\u955c\u50cf",id:"docker-\u5b8c\u6574\u955c\u50cf",children:[]},{value:"Docker \u9a8c\u8bc1\u90e8\u7f72",id:"docker-\u9a8c\u8bc1\u90e8\u7f72",children:[]},{value:"AlpineLinux \u90e8\u7f72",id:"alpinelinux-\u90e8\u7f72",children:[]}]},{value:"\u53d7\u6c61\u67d3\u57df\u540d",id:"\u53d7\u6c61\u67d3\u57df\u540d",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u8bbf\u95ee\u7684\u7f51\u7ad9\u57df\u540d\u88ab\u9519\u8bef\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u57df\u540d\u88ab\u89e3\u6790\u5230\u968f\u673a\u7684 IP \u5bfc\u81f4\u5373\u4fbf\u7f51\u7edc\u80fd\u901a\u4fe1\u4e5f\u65e0\u6cd5\u8fdb\u884c\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5\u4f7f\u7528 DNS \u8f6c\u53d1\u5230 8.8.8.8 \u4f1a\u5bfc\u81f4\u56fd\u5185\u542f\u7528\u4e86 GEO \u89e3\u6790\u7684\u57df\u540d\u88ab\u89e3\u6790\u5230\u6d77\u5916",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 alicdn.com - \u5982\u679c\u6240\u6709\u89e3\u6790\u90fd\u8d70 8.8.8.8 \u6253\u5f00 \u6dd8\u5b9d \u4f1a\u975e\u5e38\u6162")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/svg/RP9DIm916CVlyoa6kvgIH2Yv4gvkjmWwHeUndL9QTsrc3uO8LeUeA4nxPqkbA8dIEXQPNwOPrs_Hh5k-4NiPdl_pstcU7pD7JKHCrJ21cbedA9E4yp07T4F5opI9CbXA65alDRSqBAsbD0shtbL3CuXa4gJJ329ODxrEu5Oz4z5eBAv4FIi04CCmbpMKm9eKvjLtRXsnWngxgaTM0ABzu6QNrRU7Cu9N-w7rpApNRg74MgNX5bMdQKGtHziwdsNsSZbe6vbAKUHOB22cIXff_CUnjmAhL3gj4_-YxEVxXzpw6AUKa3mjA9mrCT6HrYVlpmKMMrWA9uW_ylrro1vsOD3N-tgbRk7QRk-vRNQZtRrezChyeihVQhnI7hr73iPdv93ZB2UiRaWKfV4i52BWxwPvrwONKJWPSGB7adCSCp7bW-prncwUsOzt_BROkvCLcvtJEXJ3BiNbo62NV_203xeWjvxitPPx5efOyMXWtU4SYm2ub4Vy6VBZabZC0_9W3kkgU4q_",alt:"\u57df\u540d\u8bbf\u95ee\u7ed3\u6784"})),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f9d\u8d56\u4e0a\u6e38 DNS - \u4f8b\u5982 114.114.114.114",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 pdns_recursor \u4f5c\u4e3a\u9012\u5f52 DNS \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u907f\u514d\u5927\u90e8\u5206\u88ab\u6c61\u67d3\u7684 DNS"))),(0,l.kt)("li",{parentName:"ul"},"\u6821\u9a8c DNSSEC - \u5f53\u6821\u9a8c\u5931\u8d25\u540e\u4f7f\u7528\u5907\u9009\u7684 8.8.8.8"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 dnsmasq \u4f5c\u4e3a\u7f13\u5b58\u548c\u4f7f\u7528\u5907\u9009\u670d\u52a1\u5668\u89e3\u6790",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u6027\u80fd\u548c\u6613\u7528\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u6821\u9a8c google.com \u5931\u8d25\u540e\u4f7f\u7528 8.8.8.8 \u89e3\u6790"))),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u786e\u4fdd 8.8.8.8 \u80fd\u88ab\u76f4\u63a5\u8bbf\u95ee\uff08\u4ee3\u7406\uff09\u6216\u8005\u6620\u5c04\u7aef\u53e3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 TINC \u7a7f\u900f\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 sshuttle \u4ee3\u7406\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 SSH \u7aef\u53e3\u8f6c\u53d1\u8bbf\u95ee"),(0,l.kt)("li",{parentName:"ul"},"\u603b\u4e4b\u4e0d\u80fd\u901a\u8fc7\u56fd\u5185\u8bbf\u95ee 8.8.8.8 - \u5426\u5219\u4e00\u6837\u4f1a\u88ab\u6c61\u67d3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f3a\u9677"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u4f7f\u7528\u81ea\u884c\u90e8\u7f72\u7684\u9012\u5f52 DNS \u670d\u52a1\u5668\uff0c\u521a\u5f00\u59cb\u4f7f\u7528\u65f6\u4f1a\u6bd4\u8f83\u6162",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u57df\u540d\u90fd\u662f\u4ece\u6839\u670d\u52a1\u5668\u5f00\u59cb\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u4e00\u6bb5\u65f6\u95f4\u540e\u5c31\u4f1a\u9010\u6e10\u6062\u590d\uff0c\u611f\u77e5\u4e0d\u5230\u5dee\u5f02")))))),(0,l.kt)("h3",{id:"\u9a8c\u8bc1-dns-\u6c61\u67d3"},"\u9a8c\u8bc1 DNS \u6c61\u67d3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# dig \u5728 alpinelinux \u4e2d\u901a\u8fc7\u5b89\u88c5 bind-tools \u83b7\u53d6\n# \u901a\u8fc7 docker \u542f\u52a8\u53ef\u83b7\u53d6 dig \u548c nc \u5de5\u5177 - \u5982\u679c\u672c\u5730\u5df2\u6709\u53ef\u5ffd\u7565\ndocker run --rm -it wener/dns sh\n\n# \u901a\u8fc7 114 \u89e3\u6790 google \u57df\u540d\ndig google.com @114.114.114.114 +short\n# \u68c0\u6d4b IP \u662f\u5426\u5c5e\u4e8e Google\n# \u4f8b\u5982 \u6211\u83b7\u53d6\u5230\u7684\u662f 93.46.8.90\necho -e 'begin\\n93.46.8.90\\nend' | nc bgp.tools 43\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u5230\u7684\u4fe1\u606f\u89e3\u91ca\u5982\u4e0b")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u81ea\u6cbb\u7cfb\u7edf\u7f16\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"IP"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5730\u5740\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"CC"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u518c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u914d\u65f6\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd0\u8425\u5546\u540d\u5b57"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12874"),(0,l.kt)("td",{parentName:"tr",align:null},"93.46.8.90"),(0,l.kt)("td",{parentName:"tr",align:null},"93.46.0.0/15"),(0,l.kt)("td",{parentName:"tr",align:null},"IT"),(0,l.kt)("td",{parentName:"tr",align:null},"RIPE"),(0,l.kt)("td",{parentName:"tr",align:null},"2002-09-13"),(0,l.kt)("td",{parentName:"tr",align:null},"Fastweb SpA")))),(0,l.kt)("p",null,"\u8fd9\u4e0d\u662f Google \u7684 IP\uff0c\u56e0\u6b64\u53ef\u5224\u65ad DNS \u88ab\u6c61\u67d3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u771f\u5b9e\u7684 IP \u8fdb\u884c\u67e5\u8be2\necho -e 'begin\\n216.58.200.14\\nend' | nc bgp.tools 43\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u81ea\u6cbb\u7cfb\u7edf\u7f16\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"IP"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5730\u5740\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"CC"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u518c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u914d\u65f6\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd0\u8425\u5546\u540d\u5b57"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15169"),(0,l.kt)("td",{parentName:"tr",align:null},"216.58.200.14"),(0,l.kt)("td",{parentName:"tr",align:null},"216.58.200.0/24"),(0,l.kt)("td",{parentName:"tr",align:null},"US"),(0,l.kt)("td",{parentName:"tr",align:null},"ARIN"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-03-30"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Google LLC"))))),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u662f Google LLC \u7684\u5373\u53ef"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 \u5173\u4e8e\u8be5 AS \u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u53ef\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"https://bgp.tools/as/15169"},"https://bgp.tools/as/15169")," \u67e5\u770b")),(0,l.kt)("h3",{id:"dns-geo-\u89e3\u6790\u9a8c\u8bc1"},"DNS GEO \u89e3\u6790\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u5904\u7406\u597d GEO \u89e3\u6790\u4f1a\u5bfc\u81f4\u539f\u672c\u8bbf\u95ee\u5f88\u5feb\u7684\u57df\u540d\u53d8\u5f97\u975e\u5e38 ",(0,l.kt)("strong",{parentName:"li"},"\u6162")),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u4f7f\u7528\u6dd8\u5b9d\u56fe\u7247\u7684 cdn \u8fdb\u884c\u9a8c\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"li"},"img.alicdn.com"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u89e3\u6790 IP \u5e76\u67e5\u8be2\u6240\u5c5e\u57ce\u5e02\ndig img.alicdn.com +short | grep '^[.0-9]*$' | xargs -I {} -n 1 -- sh -c 'echo {} - $(curl https://ipapi.co/{}/city/ -s)'\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"101.226.26.254 - Shanghai\n101.226.26.253 - Shanghai\n")),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u662f\u4ece\u4e0a\u6d77\u67e5\u8be2\u7684\uff0c\u6240\u4ee5\u8fd4\u56de\u7ed3\u679c\u662f\u6b63\u786e\u7684\u3002\u5bf9\u6bd4\u56fd\u5916\u8fdb\u884c\u89e3\u6790\u7684\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# 8.8.8.8 \u53ef\u4fee\u6539\u4e3a\u5176\u5b83\u7684\u5730\u5740 - \u53ea\u8981\u4e0d\u662f\u901a\u8fc7\u56fd\u5185\u8fdb\u884c\u8bbf\u95ee\ndig img.alicdn.com +short @8.8.8.8 | grep '^[.0-9]*$' | xargs -I {} -n 1 -- sh -c 'echo {} - $(curl https://ipapi.co/{}/city/ -s)'\n")),(0,l.kt)("p",null,"\u901a\u8fc7 HK \u8bbf\u95ee\u7684\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"47.246.16.254 - San Mateo\n47.91.195.254 - Beijing\n205.204.104.242 - San Mateo\n")),(0,l.kt)("p",null,"\u9a8c\u8bc1\u8be5\u57df\u540d\u6709\u57fa\u4e8e GEO \u7684\u89e3\u6790\uff0c\u7a0d\u540e\u5c06\u4f7f\u7528\u8be5\u7ed3\u679c\u8fdb\u884c\u6b63\u786e\u6027\u9a8c\u8bc1\u3002"),(0,l.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u6d41\u7a0b",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72 pdns_recursor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e dnssec"))),(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72 dnsmasq",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u89e3\u6790\u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"[\u53ef\u9009]"," \u9488\u5bf9\u57df\u540d\u4fee\u6539\u89e3\u6790\u670d\u52a1\u5668"))),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f \u786e\u4fdd\u672c\u5730\u6709\u65b9\u5f0f\u80fd\u8bbf\u95ee\u5230\u4e0d\u88ab\u6c61\u67d3\u7684 DNS \u670d\u52a1 - \u5426\u5219 google.com \u8fd9\u6837\u7684\u57df\u540d\u4e0d\u80fd\u88ab\u89e3\u6790")),(0,l.kt)("h3",{id:"docker-\u5b8c\u6574\u955c\u50cf"},"Docker \u5b8c\u6574\u955c\u50cf"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 \u63d0\u793a\n\u8be5\u955c\u50cf\u5305\u542b\u4e86\u4e0b\u8ff0\u914d\u7f6e\uff0c\u5177\u4f53\u6784\u5efa\u8fc7\u7a0b\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wenerme/dockerfiles/tree/master/app/dns-rec"},"wenerme/dockerfiles/app/dns-rec"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  --cap-add NET_ADMIN --device /dev/net \\\n  --name dns-rec -p 53:53/udp wener/app:dns-rec\n")),(0,l.kt)("h3",{id:"docker-\u9a8c\u8bc1\u90e8\u7f72"},"Docker \u9a8c\u8bc1\u90e8\u7f72"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6309\u7167\u5b9e\u9645\u90e8\u7f72\u7684\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff0c\u4f46\u901a\u8fc7 docker \u6765\u8fdb\u884c\u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u6d4b\u8bd5\u7528\u7684\u7f51\u7edc - \u6d4b\u8bd5\u5b8c\u6210\u5373\u53ef\u5220\u9664 - \u81ea\u5b9a\u4e49\u7684\u7f51\u7edc\u624d\u80fd\u4f7f\u7528\u9759\u6001 IP\ndocker network create service --subnet 172.18.2.0/24\n\n# pdns_recursor \u914d\u7f6e\ncat <<EOF > recursor.conf\n# \u524d\u53f0\u542f\u52a8\ndaemon=no\nloglevel=3\nlocal-address=0.0.0.0\n\nmax-total-msec=10000\nnetwork-timeout=3000\n# \u542f\u7528 dnssec \u6821\u9a8c\ndnssec=validate\ndnssec-log-bogus=yes\nEOF\n\n# \u542f\u52a8 - \u4f7f\u7528\u56fa\u5b9a IP 172.18.2.100\ndocker run --rm -it \\\n  --net service --ip 172.18.2.100 \\\n  -v $PWD/recursor.conf:/etc/pdns/recursor.conf \\\n  --name recursor wener/dns pdns_recursor\n\n# dnsmasq \u914d\u7f6e\ncat <<EOF > dnsmasq.conf\n# \u524d\u53f0\u6267\u884c\nno-daemon\n# \u67e5\u8be2\u8bb0\u5f55\u65e5\u5fd7\nlog-queries\n# \u5f3a\u5236\u987a\u5e8f\u89e3\u6790\nstrict-order\nresolv-file=/etc/resolv.dnsmasq.conf\n\n# \u53ef\u9009\n# \u76f4\u63a5\u4fee\u6539\u67d0\u4e2a\u57df\u540d\u8d70\u4e0d\u540c\u7684 DNS \u89e3\u6790\nserver=/wikipedia.org/8.8.8.8\nEOF\n\ncat <<EOF > resolv.dnsmasq.conf\n# recursor \u7684\u5730\u5740\nnameserver 172.18.2.100\n# \u80fd\u591f\u4e0d\u88ab\u6c61\u67d3\u89e3\u6790\u7684\u5730\u5740 - \u53ea\u80fd\u4f7f\u7528 53 \u7aef\u53e3\nnameserver 8.8.8.8\n# recursor \u76f8\u5bf9\u66f4\u6162\noptions timeout:10\nEOF\n\n# \u542f\u52a8 dnsmasq \u4e14\u6620\u5c04\u4e86 53 \u7aef\u53e3\u5230\u4e3b\u673a\ndocker run --rm -it \\\n  --net service -p 53:53/udp \\\n  -v $PWD/resolv.dnsmasq.conf:/etc/resolv.dnsmasq.conf \\\n  -v $PWD/dnsmasq.conf:/etc/dnsmasq.conf \\\n  --name dnsmasq wener/dns dnsmasq\n")),(0,l.kt)("p",null,"\u670d\u52a1\u90e8\u7f72\u5b8c\u6210\uff0c\u73b0\u5728\u9a8c\u8bc1\u90e8\u7f72\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u6d4b\u8bd5\u6548\u679c\ndig google.com @127.0.0.1\n")),(0,l.kt)("p",null,"\u4f1a\u89c2\u5bdf\u5230 recursor \u8f93\u51fa\u65e5\u5fd7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Answer to google.com|A for 172.18.2.2:22875 validates as Bogus\n")),(0,l.kt)("p",null,"\u8868\u793a\u8be5\u57df\u540d\u7684 dnssec \u6821\u9a8c\u5931\u8d25\uff0c\u4e0d\u4f1a\u8fd4\u56de\u7ed9\u8bf7\u6c42\u65b9\u3002\u90a3\u4e48 dnsmasq \u5219\u4f1a\u5c1d\u8bd5\u4e0b\u4e00\u4e2a\u8fdb\u884c\u89e3\u6790\uff0c\u65e5\u5fd7\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dnsmasq: query[A] google.com from 172.18.2.1\ndnsmasq: forwarded google.com to 172.18.2.100\ndnsmasq: forwarded google.com to 8.8.8.8\ndnsmasq: reply google.com is 172.217.26.142\n")),(0,l.kt)("p",null,"\u5b9e\u9645\u62ff\u5230\u7684 IP \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"172.217.26.142"),"\uff0c\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo -e 'begin\\n172.217.26.142\\nend' | nc bgp.tools 43\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u81ea\u6cbb\u7cfb\u7edf\u7f16\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"IP"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5730\u5740\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"CC"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u518c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u914d\u65f6\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd0\u8425\u5546\u540d\u5b57"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15169"),(0,l.kt)("td",{parentName:"tr",align:null},"172.217.26.142"),(0,l.kt)("td",{parentName:"tr",align:null},"172.217.26.0/24"),(0,l.kt)("td",{parentName:"tr",align:null},"US"),(0,l.kt)("td",{parentName:"tr",align:null},"ARIN"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-03-30"),(0,l.kt)("td",{parentName:"tr",align:null},"Google LLC")))),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u62ff\u5230\u4e86\u6b63\u786e\u7684 IP\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u9a8c\u8bc1 GEO \u89e3\u6790\u7684\u6b63\u786e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dig img.alicdn.com +short @127.0.0.1 | grep '^[.0-9]*$' | xargs -I {} -n 1 -- sh -c 'echo {} - $(curl https://ipapi.co/{}/city/ -s)'\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u4e0e\u9884\u671f\u7ed3\u679c\u4e00\u81f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"101.226.26.254 - Shanghai\n101.226.26.253 - Shanghai\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u5b8c\u6210\u6e05\u9664\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm -f dnsmasq recursor\n")),(0,l.kt)("h3",{id:"alpinelinux-\u90e8\u7f72"},"AlpineLinux \u90e8\u7f72"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e dnsmasq \u7684 resolv.conf \u53ea\u80fd\u4f7f\u7528\u9ed8\u8ba4\u7aef\u53e3\uff0c\u56e0\u6b64\u81f3\u5c11\u9700\u8981\u4e24\u4e2a\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 recursor \u90e8\u7f72\u5728 docker \u6216\u8005 \u53e6\u5916\u4e00\u4e2a\u670d\u52a1\u5668 \u6216\u8005 \u7ed1\u5b9a\u4e0d\u540c\u7f51\u5361"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u4f7f\u7528\u7ed1\u5b9a\u4e0d\u540c\u7f51\u5361\u7684\u65b9\u5f0f"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 \u63d0\u793a"),(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u7684\u90e8\u7f72\u903b\u8f91\u4e5f\u53ef\u4ee5\u5728 docker \u4e2d\u64cd\u4f5c"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"docker run --rm -it \\\n--cap-add NET_ADMIN --device /dev/net \\\n--name demo wener/base:openrc\n# \u8fdb\u5165\u5bb9\u5668\ndocker exec -it demo sh\n"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u865a\u62df\u7f51\u5361 lo:0 - \u5730\u5740\u4e3a 127.0.0.2 \u7528\u4e8e recursor"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 recursor - \u76d1\u542c 127.0.0.2"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e dnsmasq - \u76d1\u542c\u9664 lo:0 \u4e4b\u5916\u7684\u7f51\u5361"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 dnsmasq"),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u865a\u62df\u7f51\u5361\ncat <<EOF >> /etc/network/interfaces\nauto lo:0\niface lo:0 inet static\n  address 127.0.0.2\n  netmask 255.0.0.0\nEOF\n\n# \u542f\u52a8\u7f51\u5361\nifup lo:0\n\n# \u5b89\u88c5\u4f9d\u8d56\u5305\napk add dnsmasq pdns-recursor --no-cache\n\n# \u914d\u7f6e recursor - \u26a0\ufe0f\u6ce8\u610f \u4fee\u6539\u4e86\u672c\u5730\u5730\u5740\ncat <<EOF > /etc/pdns/recursor.conf\ndaemon=yes\nhint-file=/etc/pdns/root.hints\nsetgid=recursor\nsetuid=recursor\n\nloglevel=3\nlocal-address=127.0.0.2\n\nmax-total-msec=10000\nnetwork-timeout=3000\n# \u542f\u7528 dnssec \u6821\u9a8c\ndnssec=validate\ndnssec-log-bogus=yes\nEOF\n\n# \u542f\u52a8 recursor\nservice pdns-recursor start\n\n# \u914d\u7f6e dnsmasq\ncat <<EOF > /etc/dnsmasq.conf\n# \u7ed1\u5b9a\u7f51\u5361\nexcept-interface=lo:0\nbind-interfaces\n\n# \u67e5\u8be2\u8bb0\u5f55\u65e5\u5fd7\nlog-queries\n# \u5f3a\u5236\u987a\u5e8f\u89e3\u6790\nstrict-order\nall-servers\nresolv-file=/etc/resolv.dnsmasq.conf\n\n# \u53ef\u9009\n# \u76f4\u63a5\u4fee\u6539\u67d0\u4e2a\u57df\u540d\u8d70\u4e0d\u540c\u7684 DNS \u89e3\u6790\nserver=/wikipedia.org/8.8.8.8\nEOF\n\n# \u4f7f\u7528\u7684 127.0.0.2 \u6307\u5411\u7684 recursor\ncat <<EOF > /etc/resolv.dnsmasq.conf\n# recursor \u7684\u5730\u5740\nnameserver 127.0.0.2\n# \u80fd\u591f\u4e0d\u88ab\u6c61\u67d3\u89e3\u6790\u7684\u5730\u5740 - \u53ea\u80fd\u4f7f\u7528 53 \u7aef\u53e3\nnameserver 8.8.8.8\n# recursor \u76f8\u5bf9\u66f4\u6162\noptions timeout:10\nEOF\n\n# \u542f\u52a8 dnsmasq\nservice dnsmasq start\n")),(0,l.kt)("p",null,"\u670d\u52a1\u81f3\u6b64\u542f\u52a8\u5b8c\u6210\uff0c\u53ef\u5c1d\u8bd5\u5728\u672c\u5730\u8fdb\u884c\u9a8c\u8bc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6 dig \u5de5\u5177\napk add bind-tools\n\n# \u9a8c\u8bc1\ndig google.com @127.0.0.1\n")),(0,l.kt)("h2",{id:"\u53d7\u6c61\u67d3\u57df\u540d"},"\u53d7\u6c61\u67d3\u57df\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"disqus.com\nimgur.com\ngoogle.com\ngooglevideo.com\ngoogle-analytics.com\ngoogletagmanager.com\nreddit.com\n")),(0,l.kt)("p",null,"\u66f4\u591a\u53d7\u5f71\u54cd\u57df\u540d\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/googlehosts/hosts"},"googlehosts/hosts"),"\uff0c\u53ef\u6458\u9009\u57df\u540d\u76f4\u63a5\u914d\u7f6e\u3002"))}m.isMDXComponent=!0}}]);