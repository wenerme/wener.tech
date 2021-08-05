"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66175],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,g=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3033:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],l={title:"fx"},u=void 0,s={unversionedId:"languages/go/lib/fx",id:"languages/go/lib/fx",isDocsHomePage:!1,title:"fx",description:"- uber-go/fx",source:"@site/notes/languages/go/lib/fx.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/fx",permalink:"/notes/languages/go/lib/fx",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/fx.md",version:"current",frontMatter:{title:"fx"},sidebar:"docs",previous:{title:"entgo",permalink:"/notes/languages/go/lib/ent"},next:{title:"fyne",permalink:"/notes/languages/go/lib/fyne"}},c=[],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uber-go/fx"},"uber-go/fx"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u53cd\u5c04\u7684\u52a8\u6001 IoC \u5bb9\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u90e8\u4e3a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/uber-go/dig"},"uber-go/dig")," - DI")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"fx.Supply \u4e0d\u80fd\u76f4\u63a5\u63d0\u4f9b interface",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go \u7c7b\u578b\u68c0\u6d4b\u4e0d\u5230, \u4f7f\u7528 constructor \u8fd4\u56de"))),(0,o.kt)("li",{parentName:"ul"},"fx.In \u548c fx.Out \u8981\u6c42\u5b57\u6bb5 exported")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type HandlerParams struct {\n  fx.In // consume - \u591a\u5165\u53c2 - \u589e\u5f3a\u53ef\u8bfb\u6027\n\n  Users    *UserGateway\n  Comments *CommentGateway\n  Posts    *PostGateway\n  Votes    *VoteGateway\n  AuthZ    *AuthZGateway\n\n  Cache *redis.Client `optional:"true"` // \u53ef\u9009\u53c2\u6570\n\n  WriteToConn  *sql.DB `name:"rw"`      // \u547d\u540d\n  ReadFromConn *sql.DB `name:"ro" optional:"true"`\n\n  Handlers []Handler `group:"server"`   // \b\u591a\u5b9e\u4f8b - \u4e0d\u4fdd\u8bc1\u987a\u5e8f\n}\n\ntype ConnectionResult struct {\n  fx.Out // provide\n\n  ReadWrite *sql.DB `name:"rw"`\n  ReadOnly  *sql.DB `name:"ro"`\n\n  Handler Handler `group:"server"`\n\n  Handler []int `group:"server"`         // Consume as [][]int\n  Handler []int `group:"server,flatten"` // Consume as []int\n}\n\nfunc NewConnection(p HandlerParams) ConnectionResult {\n  // ...\n}\n\n// \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Annotated \u914d\u7f6e\u540d\u5b57\u548c\u5206\u7ec4\nfx.Provide(fx.Annotated{\n  Name: "ro",\n  Group: "server",\n  Target: NewReadOnlyConnection,\n})\n')))}m.isMDXComponent=!0}}]);