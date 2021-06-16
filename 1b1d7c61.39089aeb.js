(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,m=s["".concat(i,".").concat(f)]||s[f]||u[f]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1083)),i={title:"FTP"},c={unversionedId:"ops/storage/network/ftp",id:"ops/storage/network/ftp",isDocsHomePage:!1,title:"FTP",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/storage/network/ftp.md",slug:"/ops/storage/network/ftp",permalink:"/notes/ops/storage/network/ftp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/ftp.md",version:"current",sidebar:"docs",previous:{title:"ZFS",permalink:"/notes/ops/storage/fs/zfs"},next:{title:"NFS",permalink:"/notes/ops/storage/network/nfs"}},p=[{value:"530 User cannot log in, home directory inaccessible.",id:"530-user-cannot-log-in-home-directory-inaccessible",children:[]},{value:"busybox ftpd",id:"busybox-ftpd",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6587\u4ef6\u4f20\u8f93\u534f\u8bae - File Transfer Protocol"),Object(o.b)("li",{parentName:"ul"},"\u5206\u4e3a\u63a7\u5236\u901a\u9053\u548c\u6570\u636e\u901a\u9053"))),Object(o.b)("li",{parentName:"ul"},"wikipedia ",Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol"},"FTP")),Object(o.b)("li",{parentName:"ul"},"active",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76d1\u542c\u6570\u636e\u7aef\u53e3\uff0c\u544a\u8bc9\u670d\u52a1\u7aef\u7aef\u53e3\u53f7\uff0c\u670d\u52a1\u7aef\u8fde\u63a5\u5ba2\u6237\u7aef\u7684 20 \u548c \u6570\u636e\u7aef\u53e3\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u4eca\u5df2\u5f88\u5c11\u4f7f\u7528"))),Object(o.b)("li",{parentName:"ul"},"passive",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76f4\u63a5\u8fde\u63a5\u63a7\u5236\u7aef\u53e3\uff0c\u53d1\u9001 PASV \u547d\u4ee4\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u6570\u636e\u901a\u9053\u7684\u5730\u5740\u548c\u7aef\u53e3\u53f7\uff0c\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u636e\u7aef\u53e3\u3002"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u53d7\u9632\u706b\u5899\u5f71\u54cd"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_FTP_server_software_packages"},"Comparison of FTP server software packages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/goftp/server"},"goftp/server"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A FTP server framework written by Golang"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.crossftp.com/"},"CrossFTP"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"FTP & Amazon S3 Client"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/pkg/sftp"},"pkg/sftp")),Object(o.b)("li",{parentName:"ul"},"server",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"lftp"),Object(o.b)("li",{parentName:"ul"},"proftp"),Object(o.b)("li",{parentName:"ul"},"pure-ftp")))),Object(o.b)("h2",{id:"530-user-cannot-log-in-home-directory-inaccessible"},"530 User cannot log in, home directory inaccessible."),Object(o.b)("p",null,"\u4e00\u822c\u662f\u6743\u9650\u95ee\u9898"),Object(o.b)("h2",{id:"busybox-ftpd"},"busybox ftpd"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"inetd.conf")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-conf"},"21 stream tcp nowait root ftpd ftpd /files/to/serve\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"tcpsvd -vE 0.0.0.0 21 ftpd /files/to/serve\n")))}b.isMDXComponent=!0}}]);