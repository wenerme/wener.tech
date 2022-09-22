"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[74144],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={title:"WebDAV"},d="WebDAV",g={unversionedId:"service/storage/webdav",id:"service/storage/webdav",title:"WebDAV",description:"- http://www.webdav.org/specs/rfc4918.html",source:"@site/../notes/service/storage/webdav.md",sourceDirName:"service/storage",slug:"/service/storage/webdav",permalink:"/notes/service/storage/webdav",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/webdav.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1640568443,formattedLastUpdatedAt:"Dec 27, 2021",frontMatter:{title:"WebDAV"},sidebar:"docs",previous:{title:"WebDAV Spec",permalink:"/notes/service/storage/webdav-spec"},next:{title:"\u8bbe\u5907",permalink:"/notes/service/telecom/device"}},k={},f=[{value:"Props",id:"props",level:2},{value:"MS-Author-Via: DAV",id:"ms-author-via-dav",level:2},{value:"NGINX",id:"nginx",level:2}],N={toc:f};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},N),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"webdav"}),"WebDAV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.webdav.org/specs/rfc4918.html"}),"http://www.webdav.org/specs/rfc4918.html")),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u534f\u8bae",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CalDAV - \u65e5\u5386"),(0,r.kt)("li",{parentName:"ul"},"CardDAV - \u8054\u7cfb\u4eba")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# echo Hello > /hello.txt\necho Hello | curl -T - 127.0.0.1:8080/hello.txt\n# cat /hello.txt\ncurl 127.0.0.1:8080/hello.txt\n# \u4e0a\u4f20\u5230\u76ee\u5f55\ntouch test.txt\ncurl -T test.txt 127.0.0.1:8080/\n# ls /\ncurl -X PROPFIND http://127.0.0.1:8080/ | xmllint --format -\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http",metastring:'title="cors"',title:'"cors"'}),"Access-Control-Allow-Origin: http://example.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Allow-Methods: ACL, CANCELUPLOAD, CHECKIN, CHECKOUT, COPY, DELETE, GET, HEAD, LOCK, MKCALENDAR, MKCOL, MOVE, OPTIONS, POST, PROPFIND, PROPPATCH, PUT, REPORT, SEARCH, UNCHECKOUT, UNLOCK, UPDATE, VERSION-CONTROL\nAccess-Control-Allow-Headers: Overwrite, Destination, Content-Type, Depth, User-Agent, Translate, Range, Content-Range, Timeout, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, Location, Lock-Token, If\nAccess-Control-Expose-Headers: DAV, content-length, Allow\nAccess-Control-Max-Age: 3600\n")),(0,r.kt)("h2",s({},{id:"props"}),"Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dead properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u989d\u5916\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},"live properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9690\u542b\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"DAV:")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"prop"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"dir?"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"resourcetype"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'<D:collection xmlns:D="DAV:"/>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"displayname"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"getcontentlength"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"getlastmodified"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"creationdate"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"getcontentlanguage"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"getcontenttype"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"mime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"getetag"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u4e00\u822c\u9ed8\u8ba4 modtime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"lockdiscovery"),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"supportedlock"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"x"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://webdav.org/specs/rfc4918.html#PROPERTY_getlastmodified"}),"http://webdav.org/specs/rfc4918.html#PROPERTY_getlastmodified")),(0,r.kt)("li",{parentName:"ul"},"golang.org/issue/15")),(0,r.kt)("h2",s({},{id:"ms-author-via-dav"}),"MS-Author-Via: DAV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://msdn.microsoft.com/en-au/library/cc250217.aspx"}),"http://msdn.microsoft.com/en-au/library/cc250217.aspx"))),(0,r.kt)("h2",s({},{id:"nginx"}),"NGINX"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-nginx"}),"location /cache/ {\n  # The path to the directory where nginx should store the cache contents.\n  root /path/to/cache/dir;\n  # Allow PUT\n  dav_methods PUT;\n  # Allow nginx to create the /ac and /cas subdirectories.\n  create_full_put_path on;\n  # The maximum size of a single file.\n  client_max_body_size 1G;\n  allow all;\n}\n")))}b.isMDXComponent=!0}}]);