(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},714:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1021)),c={title:"Visual Studio Code"},i={unversionedId:"dev/editor/vsc",id:"dev/editor/vsc",isDocsHomePage:!1,title:"Visual Studio Code",description:"| \u5feb\u6377\u952e       | \u8bf4\u660e         |",source:"@site/notes/dev/editor/vsc.md",slug:"/dev/editor/vsc",permalink:"/notes/dev/editor/vsc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/editor/vsc.md",version:"current",sidebar:"docs",previous:{title:"Intellij IDEA",permalink:"/notes/dev/editor/intellij"},next:{title:"Flutter",permalink:"/notes/dev/flutter/flutter"}},l=[{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[{value:"Remote Development",id:"remote-development",children:[]},{value:"code-server",id:"code-server",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"\u5feb\u6377\u952e"),Object(o.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ctrl+-"),Object(o.b)("td",{parentName:"tr",align:null},"\u540e\u9000\u7f16\u8f91\u4f4d\u7f6e")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Shift+Ctrl+-"),Object(o.b)("td",{parentName:"tr",align:null},"\u524d\u8fdb\u7f16\u8f91\u4f4d\u7f6e")))),Object(o.b)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(o.b)("h3",{id:"remote-development"},"Remote Development"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"},"ms-vscode-remote.vscode-remote-extensionpack")),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u8fdc\u7a0b\u5f00\u53d1",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"WSL"),Object(o.b)("li",{parentName:"ul"},"\u5bb9\u5668"),Object(o.b)("li",{parentName:"ul"},"SSH",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"~\u8fd8\u4e0d\u652f\u6301 macOS ",Object(o.b)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-remote-release/issues/24"},"#24"),"~"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 musl AlpineLinux",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"insider \u7248\u672c\u4f3c\u4e4e\u652f\u6301 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-remote-release/issues/54#issuecomment-504385332"},"#54")),Object(o.b)("li",{parentName:"ul"},"musl \u652f\u6301 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-remote-release/issues/423"},"#423"))))))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# macOS \u53ef\u901a\u8fc7\u5bb9\u5668\u6765\u63d0\u4f9b\u7aef\u53e3\u8fdb\u884c\u63a7\u5236\ndocker run -d -p 2222:22 -v $HOME:/host --name sshd wener/app\ndocker exec sshd sh -c 'echo admin:admin | chpasswd'\n\ndocker exec sshd apk add musl libgcc libstdc++\n# \u6d4b\u8bd5\u672c\u5730\u767b\u5f55\nssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null admin@127.0.0.1 -p 2222\n\n# glibc\n\n# \u8fdc\u7a0b\u6253\u5f00\n# code --remote ssh-remote+root@server.com <your-directory>\n")),Object(o.b)("h3",{id:"code-server"},"code-server"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/cdr/code-server"},"cdr/code-server"))))}b.isMDXComponent=!0}}]);