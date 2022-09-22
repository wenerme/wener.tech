"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18276],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=p(n),c=i,d=k["".concat(s,".").concat(c)]||k[c]||o[c]||l;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return o}});var a=n(96600),i=n(27279),l=(n(59496),n(49613)),r=["components"],u={title:"\u7f51\u76d8\u8bbe\u8ba1",date:new Date("2021-11-30T00:00:00.000Z")},s="\u7f51\u76d8\u8bbe\u8ba1",p={unversionedId:"dev/design/design-drive",id:"dev/design/design-drive",title:"\u7f51\u76d8\u8bbe\u8ba1",description:"\u5982\u4f55\u8bbe\u8ba1\u5b9e\u73b0\u7f51\u76d8\uff1f",source:"@site/../notes/dev/design/design-drive.md",sourceDirName:"dev/design",slug:"/dev/design/design-drive",permalink:"/notes/dev/design/design-drive",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/design/design-drive.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663838677,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"\u7f51\u76d8\u8bbe\u8ba1",date:"2021-11-30T00:00:00.000Z"},sidebar:"docs",previous:{title:"Design Dashboard",permalink:"/notes/dev/design/design-dashboard"},next:{title:"Design Extension",permalink:"/notes/dev/design/design-extension"}},m={},o=[{value:"S3 API",id:"s3-api",level:2},{value:"local",id:"local",level:2},{value:"seaweedfs",id:"seaweedfs",level:2},{value:"mime",id:"mime",level:2},{value:"layout",id:"layout",level:2},{value:"meta",id:"meta",level:2},{value:"file manager",id:"file-manager",level:2},{value:"thumb",id:"thumb",level:2},{value:"filemeta",id:"filemeta",level:2},{value:"share",id:"share",level:2}],k={toc:o};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f51\u76d8\u8bbe\u8ba1"},"\u7f51\u76d8\u8bbe\u8ba1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u4f55\u8bbe\u8ba1\u5b9e\u73b0\u7f51\u76d8\uff1f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f51\u76d8\u51e0\u4e2a\u90e8\u5206",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u534f\u8bae",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u5ba2\u6237\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7edf\u4e00\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u7528\u6237\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5143\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u5355\u4f4d\u4e3a\u6587\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6 <-> \u5bf9\u8c61 \u6620\u5c04"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u4fe1\u606f\u7ef4\u62a4"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u534f\u8bae\u9002\u914d"))),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u6570\u636e\u5b9e\u9645\u5b58\u50a8\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6ca1\u6709\u7528\u6237\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u5355\u4f4d\u4e3a block\u3001chunk\u3001object"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u652f\u6301\u591a\u526f\u672c"))))),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u534f\u8bae S3\u3001POSIX\u3001WebDAV\u3001SFTP\u3001FTPS")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8003\u8651\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Storage as a Service",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u540e\u7aef\u80fd\u529b\u5f3a"))),(0,l.kt)("li",{parentName:"ul"},"Bring Your Own Storage",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u80fd\u9002\u914d\u4e0d\u540c\u540e\u7aef"))),(0,l.kt)("li",{parentName:"ul"},"Selfhosted",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u6c42\u80fd\u7b80\u5355\u8fd0\u7ef4\u90e8\u7f72"))),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5927\u5c0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c0f\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u56fe\u7247"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863"))),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"POSIX - \u5b8c\u6574\u7684 fs \u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u534f\u540c"),(0,l.kt)("li",{parentName:"ul"},"\u7fa4\u4ef6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ToB\u3001\u5171\u4eab\u3001\u79df\u6237"))),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u76d8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ToC\u3001\u5171\u4eab"))),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Web \u7684\u6587\u4ef6\u7ba1\u7406\u5668",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5355\u673a"))),(0,l.kt)("li",{parentName:"ul"},"WebDAV - CardDAV\u3001CalDAV")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u65b9\u5411")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56f4\u7ed5\u534f\u8bae\u5c55\u5f00 - WebDAV"),(0,l.kt)("li",{parentName:"ul"},"\u56f4\u7ed5\u529f\u80fd\u5c55\u5f00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4ea7\u54c1\u529f\u80fd\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u63a5\u53e3\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8\u8981\u6c42"))),(0,l.kt)("li",{parentName:"ul"},"\u56f4\u7ed5\u670d\u52a1\u5c55\u5f00",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u73b0\u6709\u670d\u52a1\u63d0\u4f9b\u7684\u80fd\u529b\u8fdb\u884c\u5c01\u88c5")))),(0,l.kt)("h2",{id:"s3-api"},"S3 API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html"},"Amazon S3 REST API Introduction")),(0,l.kt)("li",{parentName:"ul"},"Actions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"{Copy,Get,Delete,Put,Restore,List}Object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Acl"),(0,l.kt)("li",{parentName:"ul"},"Attributes"),(0,l.kt)("li",{parentName:"ul"},"LegalHold"),(0,l.kt)("li",{parentName:"ul"},"LockConfiguration"),(0,l.kt)("li",{parentName:"ul"},"Retention"),(0,l.kt)("li",{parentName:"ul"},"Tagging"),(0,l.kt)("li",{parentName:"ul"},"Torrent"),(0,l.kt)("li",{parentName:"ul"}))),(0,l.kt)("li",{parentName:"ul"},"{Create,Delete,Head,Get,List}Bucket",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Acl"),(0,l.kt)("li",{parentName:"ul"},"Policy"),(0,l.kt)("li",{parentName:"ul"},"Cors"),(0,l.kt)("li",{parentName:"ul"},"Encruption"),(0,l.kt)("li",{parentName:"ul"},"Lifecycle"),(0,l.kt)("li",{parentName:"ul"},"Replication"),(0,l.kt)("li",{parentName:"ul"},"Tagging"),(0,l.kt)("li",{parentName:"ul"},"Website"),(0,l.kt)("li",{parentName:"ul"},"\u5c11\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LifecycleConfiguration"),(0,l.kt)("li",{parentName:"ul"},"Location"),(0,l.kt)("li",{parentName:"ul"},"NotificationConfiguration"),(0,l.kt)("li",{parentName:"ul"},"Logging"),(0,l.kt)("li",{parentName:"ul"},"Versioning"),(0,l.kt)("li",{parentName:"ul"},"RequestPayment"),(0,l.kt)("li",{parentName:"ul"},"Notification"),(0,l.kt)("li",{parentName:"ul"},"PolicyStatus"),(0,l.kt)("li",{parentName:"ul"},"AnalyticsConfiguration"),(0,l.kt)("li",{parentName:"ul"},"IntelligentTieringConfiguration"),(0,l.kt)("li",{parentName:"ul"},"InventoryConfiguration"),(0,l.kt)("li",{parentName:"ul"},"MetricsConfiguration"),(0,l.kt)("li",{parentName:"ul"},"OwnershipControls"),(0,l.kt)("li",{parentName:"ul"},"AccelerateConfiguration"))))),(0,l.kt)("li",{parentName:"ul"},"{Abort,Complete,Create,List}MultipartUpload"),(0,l.kt)("li",{parentName:"ul"},"GetPublicAccessBlock"),(0,l.kt)("li",{parentName:"ul"},"ListParts"),(0,l.kt)("li",{parentName:"ul"},"SelectObjectContent"),(0,l.kt)("li",{parentName:"ul"},"UploadPart"),(0,l.kt)("li",{parentName:"ul"},"UploadPartCopy"),(0,l.kt)("li",{parentName:"ul"},"WriteGetObjectResponse"))),(0,l.kt)("li",{parentName:"ul"},"Amazon S3 Control Actions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"{Create,Delete,Get,List}AccessPoint"),(0,l.kt)("li",{parentName:"ul"},"{Create,Describe,List}Job",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Tagging")))))),(0,l.kt)("h1",{id:"\u5b9e\u73b0\u65b9\u6848\u5206\u6790"},"\u5b9e\u73b0\u65b9\u6848\u5206\u6790"),(0,l.kt)("h2",{id:"local"},"local"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u7f51\u76d8\u5c31\u662f\u5c06\u672c\u5730 fs \u66b4\u9732\u5230 \u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u975e\u5e38\u7075\u6d3b\uff0c\u4f46\u662f\u8fd8\u662f\u9700\u8981\u505a\u5143\u6570\u636e\u7684\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u597d\u5904",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u76f4\u89c2"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u4f7f\u7528\u73b0\u6709\u7684\u534f\u8bae\u670d\u52a1\u66b4\u9732\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u5355\u673a\u5b58\u50a8\u5bb9\u91cf\u53ef\u4ee5\u975e\u5e38\u9ad8"),(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u7279\u6027 - zfs"))),(0,l.kt)("li",{parentName:"ul"},"\u574f\u5904",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u7ef4\u62a4\u4e00\u81f4\u6027 - \u4f46\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5165\u53e3\u76f8\u5bf9\u5bb9\u6613"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6c34\u5e73\u6269\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5bb9\u6613\u5904\u7406\u52a0\u5bc6"),(0,l.kt)("li",{parentName:"ul"},"\u526f\u672c\u3001\u5907\u4efd\u9700\u8981\u5176\u4ed6\u65b9\u6848"),(0,l.kt)("li",{parentName:"ul"},"\u8fd8\u662f\u9700\u8981\u5b9e\u73b0\u670d\u52a1\u7ef4\u62a4\u5143\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u670d\u52a1\u4e0e\u534f\u8bae\u670d\u52a1\u5206\u79bb\u5b58\u5728\u4e00\u81f4\u6027\u95ee\u9898")))),(0,l.kt)("h2",{id:"seaweedfs"},"seaweedfs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"master+volume \u63d0\u4f9b \u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"filer \u5b9e\u73b0 fs \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u66b4\u9732 s3 \u670d\u52a1\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"\u597d\u5904",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c34\u5e73\u6269\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u526f\u672c\u3001\u5907\u4efd"))),(0,l.kt)("li",{parentName:"ul"},"\u574f\u5904",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4"),(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u8f83\u591a\u670d\u52a1")))),(0,l.kt)("h2",{id:"mime"},"mime"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"inode/directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"mimetype, xdg"))),(0,l.kt)("li",{parentName:"ul"},"application/x-directory; charset=binary",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"file"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://specifications.freedesktop.org/shared-mime-info-spec/shared-mime-info-spec-latest.html"},"Shared MIME-info Database"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"inode/blockdevice"),(0,l.kt)("li",{parentName:"ul"},"inode/chardevice"),(0,l.kt)("li",{parentName:"ul"},"inode/directory"),(0,l.kt)("li",{parentName:"ul"},"inode/fifo"),(0,l.kt)("li",{parentName:"ul"},"inode/mount-point"),(0,l.kt)("li",{parentName:"ul"},"inode/socket"),(0,l.kt)("li",{parentName:"ul"},"inode/symlink")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# application/x-directory; charset=binary\nfile --mime-type --mime-encoding $PWD\n")),(0,l.kt)("h2",{id:"layout"},"layout"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u4e2a\u4eba"),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u4f01\u4e1a"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"xdg base dir"),(0,l.kt)("li",{parentName:"ul"},"linux ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard"},"fhs"))))),(0,l.kt)("h2",{id:"meta"},"meta"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/Specifications/shared-filemetadata-spec/"},"https://www.freedesktop.org/wiki/Specifications/shared-filemetadata-spec/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/CommonExtendedAttributes/"},"https://www.freedesktop.org/wiki/CommonExtendedAttributes/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://0pointer.de/lennart/projects/mod_mime_xattr/"},"http://0pointer.de/lennart/projects/mod_mime_xattr/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/setfattr.1.html"},"https://man7.org/linux/man-pages/man1/setfattr.1.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man7/xattr.7.html"},"https://man7.org/linux/man-pages/man7/xattr.7.html"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"namespace.attribute\nuser.mime_type\ntrusted.md5sum,\nsystem.posix_acl_access\nsecurity.selinux\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"namespaces",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"security - SELinux"),(0,l.kt)("li",{parentName:"ul"},"system - ACL"),(0,l.kt)("li",{parentName:"ul"},"trusted"),(0,l.kt)("li",{parentName:"ul"},"user"))),(0,l.kt)("li",{parentName:"ul"},"255 bytes and values of up to 64 KiB"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Extended_file_attributes"},"https://en.wikipedia.org/wiki/Extended_file_attributes"))),(0,l.kt)("h2",{id:"file-manager"},"file manager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Explorer"),(0,l.kt)("li",{parentName:"ul"},"macOS Finder"),(0,l.kt)("li",{parentName:"ul"},"Nemo"),(0,l.kt)("li",{parentName:"ul"},"Nautilus"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/File_manager"},"File manager")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gitlab.xfce.org/xfce/thunar"},"xfce/thunar"))),(0,l.kt)("h2",{id:"thumb"},"thumb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Windows_thumbnail_cache"},"https://en.wikipedia.org/wiki/Windows_thumbnail_cache"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/libyal/libwtcdb/blob/main/documentation/Windows%20Explorer%20Thumbnail%20Cache%20database%20format.asciidoc"},"Windows Explorer Thumbnail Cache database file format specification")))),(0,l.kt)("li",{parentName:"ul"},"WebDAV REPORT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lists.w3.org/Archives/Public/w3c-dist-auth/2009AprJun/0012.html"},"https://lists.w3.org/Archives/Public/w3c-dist-auth/2009AprJun/0012.html")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html#SHARED"},"https://specifications.freedesktop.org/thumbnail-spec/thumbnail-spec-latest.html#SHARED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jesjimher/genthumbs/blob/master/genthumbs.sh"},"https://github.com/jesjimher/genthumbs/blob/master/genthumbs.sh"))),(0,l.kt)("h2",{id:"filemeta"},"filemeta"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://elixir.bootlin.com/linux/latest/source/include/linux/fs.h#L623"},"https://elixir.bootlin.com/linux/latest/source/include/linux/fs.h#L623")),(0,l.kt)("li",{parentName:"ul"},"The Inode Object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://books.gigatux.nl/mirror/kerneldevelopment/0672327201/ch12lev1sec6.html"},"http://books.gigatux.nl/mirror/kerneldevelopment/0672327201/ch12lev1sec6.html")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Fork_(file_system)"},"https://en.wikipedia.org/wiki/Fork_(file_system)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"alternate data streams - ADS"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Sidecar_file"},"https://en.wikipedia.org/wiki/Sidecar_file"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct inode {\n    struct hlist_node       i_hash;              /* hash list */\n    struct list_head        i_list;              /* list of inodes */\n    struct list_head        i_dentry;            /* list of dentries */\n    unsigned long           i_ino;               /* inode number */\n    atomic_t                i_count;             /* reference counter */\n    umode_t                 i_mode;              /* access permissions */\n    unsigned int            i_nlink;             /* number of hard links */\n    uid_t                   i_uid;               /* user id of owner */\n    gid_t                   i_gid;               /* group id of owner */\n    kdev_t                  i_rdev;              /* real device node */\n    loff_t                  i_size;              /* file size in bytes */\n    struct timespec         i_atime;             /* last access time */\n    struct timespec         i_mtime;             /* last modify time */\n    struct timespec         i_ctime;             /* last change time */\n    unsigned int            i_blkbits;           /* block size in bits */\n    unsigned long           i_blksize;           /* block size in bytes */\n    unsigned long           i_version;           /* version number */\n    unsigned long           i_blocks;            /* file size in blocks */\n    unsigned short          i_bytes;             /* bytes consumed */\n    spinlock_t              i_lock;              /* spinlock */\n    struct rw_semaphore     i_alloc_sem;         /* nests inside of i_sem */\n    struct semaphore        i_sem;               /* inode semaphore */\n    struct inode_operations *i_op;               /* inode ops table */\n    struct file_operations  *i_fop;              /* default inode ops */\n    struct super_block      *i_sb;               /* associated superblock */\n    struct file_lock        *i_flock;            /* file lock list */\n    struct address_space    *i_mapping;          /* associated mapping */\n    struct address_space    i_data;              /* mapping for device */\n    struct dquot            *i_dquot[MAXQUOTAS]; /* disk quotas for inode */\n    struct list_head        i_devices;           /* list of block devices */\n    struct pipe_inode_info  *i_pipe;             /* pipe information */\n    struct block_device     *i_bdev;             /* block device driver */\n    unsigned long           i_dnotify_mask;      /* directory notify mask */\n    struct dnotify_struct   *i_dnotify;          /* dnotify */\n    unsigned long           i_state;             /* state flags */\n    unsigned long           dirtied_when;        /* first dirtying time */\n    unsigned int            i_flags;             /* filesystem flags */\n    unsigned char           i_sock;              /* is this a socket? */\n    atomic_t                i_writecount;        /* count of writers */\n    void                    *i_security;         /* security module */\n    __u32                   i_generation;        /* inode version number */\n    union {\n            void            *generic_ip;         /* filesystem-specific info */\n    } u;\n};\n\nstruct inode_operations {\n    int (*create) (struct inode *, struct dentry *,int);\n    struct dentry * (*lookup) (struct inode *, struct dentry *);\n    int (*link) (struct dentry *, struct inode *, struct dentry *);\n    int (*unlink) (struct inode *, struct dentry *);\n    int (*symlink) (struct inode *, struct dentry *, const char *);\n    int (*mkdir) (struct inode *, struct dentry *, int);\n    int (*rmdir) (struct inode *, struct dentry *);\n    int (*mknod) (struct inode *, struct dentry *, int, dev_t);\n    int (*rename) (struct inode *, struct dentry *,\n                    struct inode *, struct dentry *);\n    int (*readlink) (struct dentry *, char *, int);\n    int (*follow_link) (struct dentry *, struct nameidata *);\n    int (*put_link) (struct dentry *, struct nameidata *);\n    void (*truncate) (struct inode *);\n    int (*permission) (struct inode *, int);\n    int (*setattr) (struct dentry *, struct iattr *);\n    int (*getattr) (struct vfsmount *, struct dentry *, struct kstat *);\n    int (*setxattr) (struct dentry *, const char *,\n                      const void *, size_t, int);\n    ssize_t (*getxattr) (struct dentry *, const char *, void *, size_t);\n    ssize_t (*listxattr) (struct dentry *, char *, size_t);\n    int (*removexattr) (struct dentry *, const char *);\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create - \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u78c1\u76d8\u7d22\u5f15\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"lookup - \u67e5\u627e\u7d22\u5f15\u8282\u70b9\u6240\u5728\u7684\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"unlink - \u4ece dir \u76ee\u5f55\u5220\u9664 dentry \u76ee\u5f55\u9879\u6240\u6307\u6587\u4ef6\u7684\u786c\u94fe\u63a5")),(0,l.kt)("h2",{id:"share"},"share"))}c.isMDXComponent=!0}}]);