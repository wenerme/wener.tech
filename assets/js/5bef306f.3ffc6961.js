"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[12517],{49613:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(59496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,v=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?t.createElement(v,s(s({ref:n},l),{},{components:r})):t.createElement(v,s({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88830:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var t=r(96600),o=r(27279),a=(r(59496),r(49613)),s=["components"],i={title:"phoneprov"},p="phoneprov",c={unversionedId:"voip/asterisk/res_phoneprov",id:"voip/asterisk/res_phoneprov",title:"phoneprov",description:"phoneprov.conf",source:"@site/../notes/voip/asterisk/res_phoneprov.md",sourceDirName:"voip/asterisk",slug:"/voip/asterisk/res_phoneprov",permalink:"/notes/voip/asterisk/res_phoneprov",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/voip/asterisk/res_phoneprov.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"phoneprov"},sidebar:"docs",previous:{title:"res_http",permalink:"/notes/voip/asterisk/res_http"},next:{title:"res_resolver_unbound",permalink:"/notes/voip/asterisk/res_resolver_unbound"}},l={},u=[{value:"phoneprov.conf",id:"phoneprovconf",level:2},{value:"users.conf",id:"usersconf",level:2}],f={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"phoneprov"},"phoneprov"),(0,a.kt)("h2",{id:"phoneprovconf"},"phoneprov.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"; sip.conf/users.conf provider \u7684\u9ed8\u8ba4\u503c\n[general]\n;serveraddr=192.168.1.1\n;serveriface=eth0\n;serverport=5060\ndefault_profile=polycom\n\n; profile\n[example]\n;mime_type => application/octet-stream\n;static_file => example/firmware\n;static_file => example/default.cfg,text/xml\n;${TOUPPER(${MAC})}.cfg => templates/example-mac.cfg\n;setvar => DB_CIDNAME=${ODBC_CID_NAME_LOOKUP(${USERNAME})}\n\n; \u9ed8\u8ba4 provider \u4f7f\u7528 users.conf \u8fdb\u884c\u751f\u6210\n\n; users.conf \u5185\u5efa\u53d8\u91cf\u548c\u9009\u9879\n;   MAC (macaddress)\n;   USERNAME (username)\n;   DISPLAY_NAME (fullname)\n;   SECRET (secret)\n;   LABEL (label)\n;   CALLERID (cid_number)\n;   VOCIEMAIL_EXTEN (vmexten)\n;   EXTENSION_LENGTH (localextenlength)\n;   LINE\n;   LINEKEYS\n\n; phoneprov.conf \u5185\u5efa\u53d8\u91cf\u548c\u9009\u9879\n;   SERVER (server)\n;   SERVER_PORT (serverport)\n\n\n; Built-in variables for managing timezones and daylight savings time.\n;   TZOFFSET\n;   DST_ENABLE\n;   DST_START_MONTH\n;   DST_START_MDAY\n;   DST_START_HOUR\n;   DST_END_MONTH\n;   DST_END_MDAY\n;   DST_END_HOUR\n;   TIMEZONE\n\n")),(0,a.kt)("h2",{id:"usersconf"},"users.conf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7ba1\u7406\u7528\u6237 - \u65b9\u4fbf"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u529f\u80fd\u548c\u9009\u9879\u6ca1\u6709 sip.conf \u548c iax.conf \u5b8c\u5584")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"[general]\nfullname = New User\n; \u5206\u673a\u53f7\nuserbase = 6000\n; \u521b\u5efa\u8bed\u97f3\u90ae\u7bb1 - \u7528\u4e8e macro-stdexten\nhasvoicemail = yes\n; \u8bed\u97f3\u90ae\u7bb1\u5bc6\u94a5\nvmsecret = 1234\n; SIP Peer\nhassip = yes\n; IAX friend\nhasiax = yes\n; H.323 friend\n;hash323 = yes\n; \u521b\u5efa manager entry\nhasmanager = no\n; manager \u6743\u9650 - \u9ed8\u8ba4 all\n;managerread = system,call,log,verbose,command,agent,user,config\n;managerwrite = system,call,log,verbose,command,agent,user,config\n\n; MAC Address for res_phoneprov\n;macaddress = 112233445566\n; Auto provision the phone with res_phoneprov\n;autoprov = yes\n;\n; Line Keys for hardphone\n;\n;LINEKEYS = 1\n;\n; Line number for hardphone\n;\n;linenumber = 1\n;\n; Local Caller ID number used with res_phoneprov and Asterisk GUI\n;\n;cid_number = 6000\n;\n; Remaining options are not specific to users.conf entries but are general.\n;\ncallwaiting = yes\nthreewaycalling = yes\ncallwaitingcallerid = yes\ntransfer = yes\ncanpark = yes\ncancallforward = yes\ncallreturn = yes\ncallgroup = 1\npickupgroup = 1\n;nat = no\n")))}m.isMDXComponent=!0}}]);