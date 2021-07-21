(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),c=(n(0),n(1151)),i={id:"nextcloud-dev",title:"Nextcloud \u5f00\u53d1"},a={unversionedId:"service/file/nextcloud-dev",id:"service/file/nextcloud-dev",isDocsHomePage:!1,title:"Nextcloud \u5f00\u53d1",description:"Tips",source:"@site/notes/service/file/nextcloud-dev.md",slug:"/service/file/nextcloud-dev",permalink:"/notes/service/file/nextcloud-dev",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/file/nextcloud-dev.md",version:"current",sidebar:"docs",previous:{title:"Nextcloud \u914d\u7f6e",permalink:"/notes/service/file/nextcloud-config"},next:{title:"Nextcloud FAQ",permalink:"/notes/service/file/nextcloud-faq"}},l=[{value:"Tips",id:"tips",children:[]},{value:"NodeJS",id:"nodejs",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/instruction_set_for_users.html"},"\u63a5\u53e3\u6587\u6863"))),Object(c.b)("h2",{id:"nodejs"},"NodeJS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/hobigo/nextcloud-node-client"},"hobigo/nextcloud-node-client"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"import Client, { Server } from 'nextcloud-node-client';\nconst server: Server = new Server({\n  basicAuth: { password: '<your password>', username: '<your user name>' },\n  url: 'https://<your nextcloud host>/remote.php/webdav',\n});\n\nconst client = new Client(server);\n")))}s.isMDXComponent=!0}}]);