"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19502],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),g=l,k=m["".concat(u,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"Go FAQ"},u=void 0,s={unversionedId:"languages/go/go-faq",id:"languages/go/go-faq",isDocsHomePage:!1,title:"Go FAQ",description:"JSON string to int",source:"@site/notes/languages/go/go-faq.md",sourceDirName:"languages/go",slug:"/languages/go/go-faq",permalink:"/notes/languages/go/go-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-faq.md",tags:[],version:"current",frontMatter:{title:"Go FAQ"},sidebar:"docs",previous:{title:"CGO",permalink:"/notes/languages/go/go-cgo"},next:{title:"Go GUI Awesome",permalink:"/notes/languages/go/go-gui-awesome"}},p=[{value:"JSON string to int",id:"json-string-to-int",children:[]},{value:"sql null",id:"sql-null",children:[]},{value:"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488",id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488",children:[]},{value:"text/template vs html/template",id:"texttemplate-vs-htmltemplate",children:[]},{value:"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790",id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790",children:[]},{value:"Windows \u5b89\u88c5",id:"windows-\u5b89\u88c5",children:[]},{value:"reflect.Value.Interface: cannot return value obtained from unexported field or method",id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method",children:[]},{value:"bufio.Reader vs bufio.Scanner",id:"bufioreader-vs-bufioscanner",children:[]},{value:"pq vs pgx",id:"pq-vs-pgx",children:[]},{value:"gc vs gccgo",id:"gc-vs-gccgo",children:[]},{value:"Cipher CBC / ECB / CFB / GCM",id:"cipher-cbc--ecb--cfb--gcm",children:[]},{value:"memstats.gc_sys undefined (type mstats has no field or method gc_sys)",id:"memstatsgc_sys-undefined-type-mstats-has-no-field-or-method-gc_sys",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"json-string-to-int"},"JSON string to int"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json.Number - encode \u4fdd\u7559 number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'json:",string"')," - encode \u4f1a\u8f6c string")),(0,r.kt)("h2",{id:"sql-null"},"sql null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528\u6307\u9488",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u3001\u65e0\u5916\u90e8\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ul"},"json\u3001mapstructure \u80fd\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u903b\u8f91\u590d\u6742\u4e00\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5bfc\u81f4\u672a\u9884\u671f\u7684\u4fee\u6539"))),(0,r.kt)("li",{parentName:"ul"},"sql.NullType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u903b\u8f91\u6e05\u6670\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u6307\u9488\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"json\u3001mapstructure \u65e0\u6cd5\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u9700\u8981\u81ea\u5b9a\u4e49 Hook"))),(0,r.kt)("li",{parentName:"ul"},"null.Type - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/guregu/null"},"guregu/null"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5916\u90e8\u5e93"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4fbf\u6377\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 json"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u65e0\u6cd5\u6b63\u786e\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"mapstructure \u9700\u8981\u81ea\u5b9a\u4e49 Hook")))),(0,r.kt)("h2",{id:"struct-\u662f\u5426\u4f7f\u7528\u6307\u9488"},"Struct \u662f\u5426\u4f7f\u7528\u6307\u9488"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u4f7f\u7528\u6307\u9488 - \u76f4\u63a5\u4f7f\u7528 Struct \u4f1a\u66f4\u5feb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6307\u9488\u4f1a\u7528\u5230\u5168\u5c40\u5806\uff0c\u4f7f\u7528 struct \u526f\u672c\u53ef\u76f4\u63a5\u653e\u5230\u6808"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5230\u5806\u5c31\u4f1a\u6d89\u53ca\u5230 GC"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Pointer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5bc6\u5ea6\u9ad8"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u526f\u672c\u573a\u666f"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Struct",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bc6\u5ea6\u9ad8\u4f46\u4e0d\u9700\u8981\u7ecf\u5e38\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6570\u636e\u4e0d\u53d1\u751f\u53d8\u5316"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c Struct \u5305\u542b\u4e86\u4e0d\u53ef\u590d\u5236\u5bf9\u8c61\uff0c\u5219\u4e00\u5b9a\u8981\u7528\u6307\u9488 - \u4f8b\u5982 sycn.Mutex"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/a-journey-with-go/44b43b104963"},"Go: Should I Use a Pointer instead of a Copy of my Struct?"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type Server struct {\n  // \u5185\u90e8\u914d\u7f6e\u5bf9\u8c61\u53ef\u4f7f\u7528 Struct\n  conf ServerConf\n}\n// \u56e0\u4e3a\u4f1a\u5bf9 conf \u8fdb\u884c\u9ed8\u8ba4\u503c\u8865\u9f50 - \u56e0\u6b64\u4f20\u5165\u6307\u9488\nfunc NewServer(conf *ServerConf)*Server{\n  // \u4fee\u6539\n  if conf.Bind == "" {\n    conf.Bind = "0.0.0.0"\n  }\n  // \u590d\u5236\u4e00\u4e2a conf \u907f\u514d\u5916\u90e8\u66f4\u6539\n  // Server \u4f7f\u7528\u6307\u9488\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u526f\u672c\n  return &Server{ Conf = *conf }\n}\n')),(0,r.kt)("h2",{id:"texttemplate-vs-htmltemplate"},"text/template vs html/template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"html/template",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u5185\u5bb9\u88ab\u8f6c\u4e49\uff0c\u907f\u514d\u4ee3\u7801\u6ce8\u5165")))),(0,r.kt)("h2",{id:"\u4e0d\u4f1a\u4f7f\u7528-etchosts-\u5c31\u884c\u89e3\u6790"},"\u4e0d\u4f1a\u4f7f\u7528 /etc/hosts \u5c31\u884c\u89e3\u6790"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/nsswitch.conf")," \u53ef\u4ee5\u89e3\u51b3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'echo "hosts: files dns" > /etc/nsswitch.conf')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/35305"},"#35305")," - net: prefer /etc/hosts over DNS when no /etc/nsswitch.conf is present"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/golang/go/issues/22846"},"#22846")," - net: Go DNS resolver does not read /etc/hosts")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/nsswitch.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# /etc/nsswitch.conf\n#\n# As described on the web page https://man7.org/linux/man-pages/man3/gethostbyname.3.html,\n# without the nsswitch.conf file, the gethostbyname() and gethostbyaddr() domain queries\n# will fail to a local name server, thus the /etc/hosts will take no effect.\n#\n# For example, when hostaliases are specified for a kubernetes pod, without proper settings\n# defined in this file, the hostaliases settings will not take effect.\n#\n# Following contents of this file is from the ubuntu:16.04 docker image.\n\npasswd:         compat\ngroup:          compat\nshadow:         compat\ngshadow:        files\n\nhosts:          files dns\nnetworks:       files\n\nprotocols:      db files\nservices:       db files\nethers:         db files\nrpc:            db files\n\nnetgroup:       nis\n")),(0,r.kt)("h2",{id:"windows-\u5b89\u88c5"},"Windows \u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"https://golang.org/dl/")," - \u4e0b\u8f7d MSI \u6216 Zip",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MSI \u9ed8\u8ba4\u5b89\u88c5\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\GO"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# msys \u4e0b\nexport GOPATH=$HOME/go\nexport PATH="$PATH:/c/GO/bin:$HOME/go/bin"\nexport GO111MODULE=on\nexport GOPROXY=https://goproxy.io\n')),(0,r.kt)("h2",{id:"reflectvalueinterface-cannot-return-value-obtained-from-unexported-field-or-method"},"reflect.Value.Interface: cannot return value obtained from unexported field or method"),(0,r.kt)("p",null,"relfect \u4e0d\u5141\u8bb8\u8bbf\u95ee\u672a\u5bfc\u51fa\u5b57\u6bb5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hack access ",(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/43918797/1870054"},"https://stackoverflow.com/a/43918797/1870054"))),(0,r.kt)("h2",{id:"bufioreader-vs-bufioscanner"},"bufio.Reader vs bufio.Scanner"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bufio.Scanner",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u8bfb\u4e00\u884c - \u4e0d\u5305\u542b\u5206\u9694\u7b26 ",(0,r.kt)("inlineCode",{parentName:"li"},"\\r\\n")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 64k \u884c\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u4f7f\u7528\u53cb\u597d\uff0cScan \u548c \u9519\u8bef \u72ec\u7acb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"io.EOF")," \u65f6 Err \u4e3a nil"))),(0,r.kt)("li",{parentName:"ul"},"bufio.Reader"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8 4k \u7f13\u51b2"),(0,r.kt)("li",{parentName:"ul"},"ReadLine \u4e0d\u8fd4\u56de\u6362\u884c\uff0c\u7c7b\u4f3c Scanner\uff0c\u4f46\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," - ",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u63a8\u8350")," \u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"ReadString - \u8bfb\u53d6\u76f4\u5230\u6307\u5b9a\u5206\u9694\u7b26\uff0c\u8fd4\u56de\u5206\u9694\u7b26 - \u7c7b\u4f3c Scanner"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"io.Reader")," - \u5f88\u591a\u65f6\u5019\u8fd9\u4e2a\u662f\u9009\u62e9\u7684 ",(0,r.kt)("em",{parentName:"li"},"\u51b3\u5b9a\u56e0\u7d20"))),(0,r.kt)("h2",{id:"pq-vs-pgx"},"pq vs pgx"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"pq \u4f5c\u8005\u63a8\u8350\u63a8\u8350\u4f7f\u7528 pgx")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lib/pq"},"pq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9879\u76ee\u5904\u4e8e\u7ef4\u62a4\u6a21\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jackc/pgx"},"pgx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6240\u6709 native \u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u903b\u8f91\u590d\u5236\u534f\u8bae")))),(0,r.kt)("h2",{id:"gc-vs-gccgo"},"gc vs gccgo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gc - \u9ed8\u8ba4 Golang \u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u534a\u5e74\u5347\u7ea7\u4e00\u6b21 - \u8ddf\u968f spec \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"1.5 \u540e\u4e0d\u518d\u4f9d\u8d56 C \u7f16\u8bd1\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u5e73\u53f0\u7f16\u8bd1 - \u4e0d\u4f9d\u8d56 CGO \u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u7f16\u8bd1 - \u4f53\u79ef\u5927 - HelloWorld 2M+"))),(0,r.kt)("li",{parentName:"ul"},"gccgo - \u57fa\u4e8e GCC \u5b9e\u73b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u968f GCC \u5347\u7ea7 - \u7248\u672c\u4e00\u822c\u843d\u540e\uff0c\u5347\u7ea7\u6162"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 OS \u63d0\u4f9b GCC \u5305 - \u4e00\u822c\u843d\u540e\u4e3b GCC \u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u66f4\u5feb\uff0c\u4f46\u652f\u6301\u66f4\u591a\u4f18\u5316 - \u91cd CPU \u573a\u666f\u6027\u80fd\u66f4\u597d"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u652f\u6301 CGO"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u5e73\u53f0 - \u6240\u6709 GCC \u652f\u6301\u7684\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u53c9\u7f16\u8bd1\u975e\u5e38\u96be"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u94fe\u63a5 - \u4f53\u79ef\u975e\u5e38\u5c0f - HelloWorld 250K",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"libgo, libm, libgcc, libz, libpthread, ld.so, linux-vdso.so - virtual shared object")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# go \u53ef\u76f4\u63a5\u4f7f\u7528 gccgo \u7f16\u8bd1\ngo build -compiler gccgo myprog\n\n# gccgo flags\ngo build -gccgoflags "-s -w" main.go\n')),(0,r.kt)("h2",{id:"cipher-cbc--ecb--cfb--gcm"},"Cipher CBC / ECB / CFB / GCM"),(0,r.kt)("h2",{id:"memstatsgc_sys-undefined-type-mstats-has-no-field-or-method-gc_sys"},"memstats.gc_sys undefined (type mstats has no field or method gc_sys)"),(0,r.kt)("p",null,"\u5347\u7ea7\u540e\u51fa\u73b0\uff0c\u5c1d\u8bd5\u5378\u8f7d\u91cd\u88c5\u3002"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u5220\u9664\u76ee\u5f55 /usr/lib/go/ \u540e\u91cd\u88c5\u3002"))}m.isMDXComponent=!0}}]);