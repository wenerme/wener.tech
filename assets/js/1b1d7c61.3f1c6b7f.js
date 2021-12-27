"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97256],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,k=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91827:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"FTP"},p=void 0,s={unversionedId:"ops/storage/network/ftp",id:"ops/storage/network/ftp",title:"FTP",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/ops/storage/network/ftp.md",sourceDirName:"ops/storage/network",slug:"/ops/storage/network/ftp",permalink:"/notes/ops/storage/network/ftp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/ftp.md",tags:[],version:"current",frontMatter:{title:"FTP"},sidebar:"docs",previous:{title:"ZFS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/ops/storage/fs/zfs-faq"},next:{title:"NFS",permalink:"/notes/ops/storage/network/nfs"}},c=[{value:"530 User cannot log in, home directory inaccessible.",id:"530-user-cannot-log-in-home-directory-inaccessible",children:[],level:2},{value:"busybox ftpd",id:"busybox-ftpd",children:[],level:2}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u4f20\u8f93\u534f\u8bae - File Transfer Protocol"),(0,o.kt)("li",{parentName:"ul"},"\u5206\u4e3a\u63a7\u5236\u901a\u9053\u548c\u6570\u636e\u901a\u9053"))),(0,o.kt)("li",{parentName:"ul"},"wikipedia ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol"},"FTP")),(0,o.kt)("li",{parentName:"ul"},"active",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76d1\u542c\u6570\u636e\u7aef\u53e3\uff0c\u544a\u8bc9\u670d\u52a1\u7aef\u7aef\u53e3\u53f7\uff0c\u670d\u52a1\u7aef\u8fde\u63a5\u5ba2\u6237\u7aef\u7684 20 \u548c \u6570\u636e\u7aef\u53e3\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u4eca\u5df2\u5f88\u5c11\u4f7f\u7528"))),(0,o.kt)("li",{parentName:"ul"},"passive",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u76f4\u63a5\u8fde\u63a5\u63a7\u5236\u7aef\u53e3\uff0c\u53d1\u9001 PASV \u547d\u4ee4\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u6570\u636e\u901a\u9053\u7684\u5730\u5740\u548c\u7aef\u53e3\u53f7\uff0c\u5ba2\u6237\u7aef\u8fde\u63a5\u6570\u636e\u7aef\u53e3\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u53d7\u9632\u706b\u5899\u5f71\u54cd"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_FTP_server_software_packages"},"Comparison of FTP server software packages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/goftp/server"},"goftp/server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A FTP server framework written by Golang"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.crossftp.com/"},"CrossFTP"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"FTP & Amazon S3 Client"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pkg/sftp"},"pkg/sftp")),(0,o.kt)("li",{parentName:"ul"},"server",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"lftp"),(0,o.kt)("li",{parentName:"ul"},"proftp"),(0,o.kt)("li",{parentName:"ul"},"pure-ftp")))),(0,o.kt)("h2",{id:"530-user-cannot-log-in-home-directory-inaccessible"},"530 User cannot log in, home directory inaccessible."),(0,o.kt)("p",null,"\u4e00\u822c\u662f\u6743\u9650\u95ee\u9898"),(0,o.kt)("h2",{id:"busybox-ftpd"},"busybox ftpd"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"inetd.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"21 stream tcp nowait root ftpd ftpd /files/to/serve\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tcpsvd -vE 0.0.0.0 21 ftpd /files/to/serve\n")))}f.isMDXComponent=!0}}]);