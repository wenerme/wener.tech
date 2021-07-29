"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[82316],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(22122),o=n(19756),s=(n(67294),n(3905)),i=["components"],c={id:"sshfs",title:"SSHFS"},a=void 0,u={unversionedId:"ops/storage/network/sshfs",id:"ops/storage/network/sshfs",isDocsHomePage:!1,title:"SSHFS",description:"Tips",source:"@site/notes/ops/storage/network/sshfs.md",sourceDirName:"ops/storage/network",slug:"/ops/storage/network/sshfs",permalink:"/notes/ops/storage/network/sshfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/network/sshfs.md",version:"current",frontMatter:{id:"sshfs",title:"SSHFS"},sidebar:"docs",previous:{title:"Share",permalink:"/notes/ops/storage/network/share"},next:{title:"Auth \u6982\u5ff5",permalink:"/notes/service/auth/auth"}},l=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"Socket is not connected",id:"socket-is-not-connected",children:[]}]}],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"tips"},"Tips"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5e38\u7528\u914d\u7f6e\nsshfs -o sshfs_sync,sync_readdir,reconnect,follow_symlinks,direct_io pi:/ pi\n\n# macOS\n# reconnect \u91cd\u8054\n# ServerAliveInterval \u68c0\u6d4b\u95f4\u9694 - 15s\n# ServerAliveCountMax \u68c0\u6d4b\u6b21\u6570 - 3 \u8d85\u8fc7\u540e\u8fdb\u884c\u91cd\u8fde\n# allow_other \u5141\u8bb8\u5176\u4ed6\u4eba\u8bbf\u95ee\n# \u5982\u679c\u8fdc\u7a0b\u4e0d\u662f root\uff0c\u53ef\u4ee5\u4e0d\u7528 sudo\nsudo sshfs -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3,allow_other -f root@192.168.1.1:/data/media ~/mnt\n")),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)("h3",{id:"socket-is-not-connected"},"Socket is not connected"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"mount_osxfusefs: failed to mount /@/dev/osxfuse0: Socket is not connected")),(0,s.kt)("p",null,"\u786e\u8ba4\u6302\u8f7d\u7684\u8def\u5f84\u662f\u5426\u5b58\u5728."))}f.isMDXComponent=!0}}]);