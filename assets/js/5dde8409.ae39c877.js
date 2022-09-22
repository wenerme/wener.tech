"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30558],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var r=a(59496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),s=n,N=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2937:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=a(96600),n=a(27279),l=(a(59496),a(49613)),i=["components"],p={title:"WebDAV Spec",tags:["RFC"]},o=void 0,u={unversionedId:"service/storage/webdav-spec",id:"service/storage/webdav-spec",title:"WebDAV Spec",description:"- http://www.webdav.org/",source:"@site/notes/service/storage/webdav-spec.md",sourceDirName:"service/storage",slug:"/service/storage/webdav-spec",permalink:"/notes/service/storage/webdav-spec",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/storage/webdav-spec.md",tags:[{label:"RFC",permalink:"/notes/tags/rfc"}],version:"current",frontMatter:{title:"WebDAV Spec",tags:["RFC"]},sidebar:"docs",previous:{title:"Storage Glossary",permalink:"/notes/service/storage/storage-glossary"},next:{title:"WebDAV",permalink:"/notes/service/storage/webdav"}},m={},c=[],k={toc:c};function s(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.webdav.org/"},"http://www.webdav.org/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.webdav.org/specs/rfc4918.html"},"rfc4918")),(0,l.kt)("li",{parentName:"ul"},"DAV - Distributed Authoring and Versioning - \u5206\u5e03\u5f0f\u521b\u4f5c\u548c\u7248\u672c\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e HTTP/1.1"),(0,l.kt)("li",{parentName:"ul"},"Property",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"authors, creation dates"),(0,l.kt)("li",{parentName:"ul"},"Live Property"),(0,l.kt)("li",{parentName:"ul"},"Dead Property"))),(0,l.kt)("li",{parentName:"ul"},"Collections"),(0,l.kt)("li",{parentName:"ul"},"Locking"),(0,l.kt)("li",{parentName:"ul"},"Namespace"),(0,l.kt)("li",{parentName:"ul"},"XML \u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"Lock Capability Discovery",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DAV:supportedlock"))),(0,l.kt)("li",{parentName:"ul"},"Active Lock Discovery",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DAV:lockdiscovery"))),(0,l.kt)("li",{parentName:"ul"},"PROPFIND",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Depth: 0,1,infinity"))),(0,l.kt)("li",{parentName:"ul"},"204 (No Content)"),(0,l.kt)("li",{parentName:"ul"},"HTTP 207 Multi-Status"),(0,l.kt)("li",{parentName:"ul"},"HTTP 412 Precondition Failed"),(0,l.kt)("li",{parentName:"ul"},"423 (Locked)"),(0,l.kt)("li",{parentName:"ul"},"507 (Insufficient Storage)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"mean"),(0,l.kt)("th",{parentName:"tr",align:null},"Headers"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONS"),(0,l.kt)("td",{parentName:"tr",align:null},"stat"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET,HEAD,POST"),(0,l.kt)("td",{parentName:"tr",align:null},"read file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"rm"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"write file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MKCOL"),(0,l.kt)("td",{parentName:"tr",align:null},"mkdir"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COPY"),(0,l.kt)("td",{parentName:"tr",align:null},"cp"),(0,l.kt)("td",{parentName:"tr",align:null},"Depth,Overwrite,Destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MOVE"),(0,l.kt)("td",{parentName:"tr",align:null},"mv"),(0,l.kt)("td",{parentName:"tr",align:null},"Depth,Overwrite,Destination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOCK"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Lock-Token,Timeout,Depth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNLOCK"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Lock-Token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PROPFIND"),(0,l.kt)("td",{parentName:"tr",align:null},"ls"),(0,l.kt)("td",{parentName:"tr",align:null},"Depth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PROPPATCH"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACL"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPORT"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3253"},"RFC3253")," DeltaV - \u7248\u672c\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"methods: VERSION-CONTROL, CHECKOUT, CHECKIN, UNCHECKOUT, MKWORKSPACE, UPDATE, LABEL, MERGE, BASELINE-CONTROL, MKACTIVITY"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3648"},"RFC3648")," OrderColl - \u6587\u4ef6\u5939\u5185\u5bb9\u6392\u5e8f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"methods: ORDERPATCH,"),(0,l.kt)("li",{parentName:"ul"},"headers: Position, Ordering-Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Position ("first" | "last" | (("before" | "after") segment))',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MOVE, COPY"))))),(0,l.kt)("li",{parentName:"ul"},"DAV:ordering-type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PROPFIND"),(0,l.kt)("li",{parentName:"ul"},"DAV:custom"),(0,l.kt)("li",{parentName:"ul"},"DAV:unordered"))),(0,l.kt)("li",{parentName:"ul"},"DAV:ordered-collections-supported"),(0,l.kt)("li",{parentName:"ul"},"DAV:ordering-type-set"),(0,l.kt)("li",{parentName:"ul"},"DAV:collection-must-be-ordered"),(0,l.kt)("li",{parentName:"ul"},"DAV:segment-must-identify-member"),(0,l.kt)("li",{parentName:"ul"},"DAV:position-set"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc3744.html"},"RFC3744")," ACL - \u8bbf\u95ee\u63a7\u5236",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ACEs - access control entries"),(0,l.kt)("li",{parentName:"ul"},"ACE - access control element"),(0,l.kt)("li",{parentName:"ul"},"principal",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DAV:displayname"))),(0,l.kt)("li",{parentName:"ul"},"Privileges",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"privilege",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DAV:all, DAV:authenticated, DAV:unauthenticated, DAV:write, DAV:read, DAV:read-current-user-privilege-set, DAV:write-properties,"),(0,l.kt)("li",{parentName:"ul"},"DAV:write-content - PUT"),(0,l.kt)("li",{parentName:"ul"},"DAV:unlock - UNLOCK - \u975e lock owner \u8fdb\u884c unlock"),(0,l.kt)("li",{parentName:"ul"},"DAV:read-acl - PROPFIND DAV:acl"),(0,l.kt)("li",{parentName:"ul"},"DAV:write-acl - ACL DAV:acl"),(0,l.kt)("li",{parentName:"ul"},"DAV:bind - \u4e3a collection \u6dfb\u52a0\u65b9\u6cd5 - PUT, MKCOL"),(0,l.kt)("li",{parentName:"ul"},"DAV:unbind - \u4e3a collection \u79fb\u9664\u65b9\u6cd5 - DELETE, MOVE"))),(0,l.kt)("li",{parentName:"ul"},"DAV:resourcetype"),(0,l.kt)("li",{parentName:"ul"},"abstract"),(0,l.kt)("li",{parentName:"ul"},"aggregate"))),(0,l.kt)("li",{parentName:"ul"},"DAV:principal-URL"),(0,l.kt)("li",{parentName:"ul"},"DAV:principal-property-search"),(0,l.kt)("li",{parentName:"ul"},"DAV:principal-search-property-set"),(0,l.kt)("li",{parentName:"ul"},"DAV:acl"),(0,l.kt)("li",{parentName:"ul"},"DAV:current-user-privilege-set"))),(0,l.kt)("li",{parentName:"ul"},"[RFC4316]"," PropType - \u5c5e\u6027\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"[RFC4331]"," Quota - \u914d\u989d"),(0,l.kt)("li",{parentName:"ul"},"[RFC4437]"," Redir - \u91cd\u5b9a\u5411\u3001\u8f6f\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"[RFC4709]"," Mount - \u5ba2\u6237\u7aef Mount"),(0,l.kt)("li",{parentName:"ul"},"[RFC4791]"," CalDAV - \u65e5\u5386"),(0,l.kt)("li",{parentName:"ul"},"[RFC5689]"," Extended MKCOL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6269\u5c55 MKCOL \u652f\u6301\u81ea\u5b9a\u4e49\u8d44\u6e90\u7c7b\u578b - \u4f8b\u5982 \u517c\u5bb9\u652f\u6301 MKCALENDER"))),(0,l.kt)("li",{parentName:"ul"},"[RFC5323]"," SEARCH - \u670d\u52a1\u7aef\u641c\u7d22"),(0,l.kt)("li",{parentName:"ul"},"[RFC5397]"," Current Principal"),(0,l.kt)("li",{parentName:"ul"},"[RFC5842]"," BIND - \u6dfb\u52a0\u65b0\u65b9\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"OPTIONS /hello.txt\n\n# http://www.webdav.org/specs/rfc4918.html#dav.compliance.classes\nDAV: 1, 2\n# http://msdn.microsoft.com/en-au/library/cc250217.aspx\nMS-Author-Via: DAV\nAllow: OPTIONS, LOCK, PUT, MKCOL\n# dir\nAllow: OPTIONS, LOCK, DELETE, PROPPATCH, COPY, MOVE, UNLOCK, PROPFIND\n# file\nAllow: OPTIONS, LOCK, GET, HEAD, POST, DELETE, PROPPATCH, COPY, MOVE, UNLOCK, PROPFIND, PUT\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="utf-8" ?>\n  <D:propfind xmlns:D="DAV:">\n    <D:allprop/>\n    <D:propname/>\n    <D:include>\n      <D:supported-live-property-set/>\n      <D:supported-report-set/>\n    </D:include>\n  </D:propfind>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 207 Multi-Status\nContent-Type: application/xml; charset="utf-8"\nContent-Length: xxxx\n\n<?xml version="1.0" encoding="utf-8" ?>\n<d:multistatus xmlns:d="DAV:">\n  <d:response>\n    <d:href>http://www.example.com/container/resource3</d:href>\n    <d:status>HTTP/1.1 423 Locked</d:status>\n    <d:error><d:lock-token-submitted/></d:error>\n  </d:response>\n</d:multistatus>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"COPY /~fielding/index.html HTTP/1.1\nHost: www.example.com\nDestination: http://www.example.com/users/f/fielding/index.html\nOverwrite: F\n")))}s.isMDXComponent=!0}}]);