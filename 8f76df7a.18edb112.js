(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(7),c=(n(0),n(557)),a={id:"sshfs",title:"SSHFS"},s={unversionedId:"ops/storage/network/sshfs",id:"ops/storage/network/sshfs",isDocsHomePage:!1,title:"SSHFS",description:"SSHFS",source:"@site/contents/tricks/ops/storage/network/sshfs.md",slug:"/ops/storage/network/sshfs",permalink:"/notes/ops/storage/network/sshfs",version:"current",sidebar:"docs",previous:{title:"Share",permalink:"/notes/ops/storage/network/share"},next:{title:"Auth \u6982\u5ff5",permalink:"/notes/service/auth/auth"}},i=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"Socket is not connected",id:"socket-is-not-connected",children:[]}]}],u={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"sshfs"},"SSHFS"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \u5e38\u7528\u914d\u7f6e\nsshfs -o sshfs_sync,sync_readdir,reconnect,follow_symlinks,direct_io pi:/ pi\n\n# macOS\n# reconnect \u91cd\u8054\n# ServerAliveInterval \u68c0\u6d4b\u95f4\u9694 - 15s\n# ServerAliveCountMax \u68c0\u6d4b\u6b21\u6570 - 3 \u8d85\u8fc7\u540e\u8fdb\u884c\u91cd\u8fde\n# allow_other \u5141\u8bb8\u5176\u4ed6\u4eba\u8bbf\u95ee\n# \u5982\u679c\u8fdc\u7a0b\u4e0d\u662f root\uff0c\u53ef\u4ee5\u4e0d\u7528 sudo\nsudo sshfs -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3,allow_other -f root@192.168.1.1:/data/media ~/mnt\n")),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"socket-is-not-connected"},"Socket is not connected"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"mount_osxfusefs: failed to mount /@/dev/osxfuse0: Socket is not connected")),Object(c.b)("p",null,"\u786e\u8ba4\u6302\u8f7d\u7684\u8def\u5f84\u662f\u5426\u5b58\u5728."))}l.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);