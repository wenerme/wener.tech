"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96682],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66933:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),i=["components"],c={title:"Minio ACL"},l="Minio ACL",s={unversionedId:"service/storage/minio-acl",id:"service/storage/minio-acl",title:"Minio ACL",description:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",source:"@site/../notes/service/storage/minio-acl.md",sourceDirName:"service/storage",slug:"/service/storage/minio-acl",permalink:"/notes/service/storage/minio-acl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/storage/minio-acl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1621756378,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{title:"Minio ACL"},sidebar:"docs",previous:{title:"juicefs",permalink:"/notes/service/storage/juicefs"},next:{title:"Minio FAQ",permalink:"/notes/service/storage/minio-faq"}},u={},p=[{value:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket",id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket",level:2},{value:"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee",id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee",level:2},{value:"writeonly",id:"writeonly",level:2},{value:"readonly",id:"readonly",level:2},{value:"readwrite",id:"readwrite",level:2},{value:"ConsoleAdmin",id:"consoleadmin",level:2},{value:"diagnostics",id:"diagnostics",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minio-acl"},"Minio ACL"),(0,a.kt)("h2",{id:"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a-bucket"},"\u53ea\u5141\u8bb8\u8bbf\u95ee\u5355\u4e2a Bucket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo/*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"\u57fa\u4e8e-bucket-\u524d\u7f00\u9650\u5236\u8bbf\u95ee"},"\u57fa\u4e8e Bucket \u524d\u7f00\u9650\u5236\u8bbf\u95ee"),(0,a.kt)("p",null,"\u5b9e\u73b0\u7c7b\u4f3c\u591a\u79df\u6237\u80fd\u529b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::demo-*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"writeonly"},"writeonly"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:PutObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"readonly"},"readonly"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:GetBucketLocation", "s3:GetObject"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"readwrite"},"readwrite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"consoleadmin"},"ConsoleAdmin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["admin:*"]\n    },\n    {\n      "Effect": "Allow",\n      "Action": ["s3:*"],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"diagnostics"},"diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "admin:OBDInfo",\n        "admin:Profiling",\n        "admin:ServerInfo",\n        "admin:ServerTrace",\n        "admin:TopLocksInfo",\n        "admin:ConsoleLog"\n      ],\n      "Resource": ["arn:aws:s3:::*"]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);