"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66175],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18716:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(96600),o=t(27279),a=(t(59496),t(49613)),i=["components"],l={title:"fx"},u=void 0,s={unversionedId:"languages/go/lib/fx",id:"languages/go/lib/fx",title:"fx",description:"- uber-go/fx",source:"@site/notes/languages/go/lib/fx.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/fx",permalink:"/notes/languages/go/lib/fx",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/fx.md",tags:[],version:"current",frontMatter:{title:"fx"},sidebar:"docs",previous:{title:"entgo",permalink:"/notes/languages/go/lib/ent"},next:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"}},c={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/uber-go/fx"},"uber-go/fx"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u53cd\u5c04\u7684\u52a8\u6001 IoC \u5bb9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u4e3a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/uber-go/dig"},"uber-go/dig")," - DI")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"fx.Supply \u4e0d\u80fd\u76f4\u63a5\u63d0\u4f9b interface",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go \u7c7b\u578b\u68c0\u6d4b\u4e0d\u5230, \u4f7f\u7528 constructor \u8fd4\u56de"))),(0,a.kt)("li",{parentName:"ul"},"fx.In \u548c fx.Out \u8981\u6c42\u5b57\u6bb5 exported"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 lazy - \u9762\u5411\u542f\u52a8\u65f6\u521d\u59cb\u5316\u8bbe\u8ba1\uff0c\u800c\u975e\u8bf7\u6c42\u65f6\u914d\u7f6e"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type HandlerParams struct {\n  fx.In // consume - \u591a\u5165\u53c2 - \u589e\u5f3a\u53ef\u8bfb\u6027\n\n  Users    *UserGateway\n  Comments *CommentGateway\n  Posts    *PostGateway\n  Votes    *VoteGateway\n  AuthZ    *AuthZGateway\n\n  Cache *redis.Client `optional:"true"` // \u53ef\u9009\u53c2\u6570\n\n  WriteToConn  *sql.DB `name:"rw"`      // \u547d\u540d\n  ReadFromConn *sql.DB `name:"ro" optional:"true"`\n\n  Handlers []Handler `group:"server"`   // \b\u591a\u5b9e\u4f8b - \u4e0d\u4fdd\u8bc1\u987a\u5e8f\n}\n\ntype ConnectionResult struct {\n  fx.Out // provide\n\n  ReadWrite *sql.DB `name:"rw"`\n  ReadOnly  *sql.DB `name:"ro"`\n\n  Handler Handler `group:"server"`\n\n  Handler []int `group:"server"`         // Consume as [][]int\n  Handler []int `group:"server,flatten"` // Consume as []int\n}\n\nfunc NewConnection(p HandlerParams) ConnectionResult {\n  // ...\n}\n\n// \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Annotated \u914d\u7f6e\u540d\u5b57\u548c\u5206\u7ec4\nfx.Provide(fx.Annotated{\n  Name: "ro",\n  Group: "server",\n  Target: NewReadOnlyConnection,\n})\n')))}m.isMDXComponent=!0}}]);