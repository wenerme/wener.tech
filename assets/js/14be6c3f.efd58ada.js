"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56537],{34068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(96600),r=n(27279),l=(n(59496),n(3905)),o=["components"],i={title:"CSS Font"},s=void 0,p={unversionedId:"web/style/css-font",id:"web/style/css-font",title:"CSS Font",description:"- font-display - auto, block, swap, fallback, optional",source:"@site/notes/web/style/css-font.md",sourceDirName:"web/style",slug:"/web/style/css-font",permalink:"/notes/web/style/css-font",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/style/css-font.md",tags:[],version:"current",frontMatter:{title:"CSS Font"},sidebar:"docs",previous:{title:"CSS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/web/style/css-faq"},next:{title:"CSS Fragmentation",permalink:"/notes/web/style/css-fragmentation"}},c={},u=[{value:"\u9ed8\u8ba4\u5b57\u4f53",id:"\u9ed8\u8ba4\u5b57\u4f53",level:2},{value:"font-face",id:"font-face",level:2},{value:"\u5b57\u4f53 \u5b50\u96c6",id:"\u5b57\u4f53-\u5b50\u96c6",level:2},{value:"\u5b57\u4f53\u5355\u4f4d\u5982\u4f55\u9009\u62e9",id:"\u5b57\u4f53\u5355\u4f4d\u5982\u4f55\u9009\u62e9",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"font-display - auto, block, swap, fallback, optional",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5b57\u4f53\u8fd8\u672a\u52a0\u8f7d\u65f6\u7684\u663e\u793a"))),(0,l.kt)("li",{parentName:"ul"},"Saferi 12+",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u505c\u6b62\u652f\u6301 @font-face local - \u767d\u540d\u5355\u5236"),(0,l.kt)("li",{parentName:"ul"},"font-family \u767d\u540d\u5355\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u4f53\u4f1a\u5185\u7f6e\u56de\u6eda - \u4f8b\u5982 \u5fae\u8f6f\u96c5\u9ed1 -> PingFang SC"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.dev/optimize-webfont-loading/"},"https://web.dev/optimize-webfont-loading/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fontsquirrel.com/fonts/list/popular"},"https://www.fontsquirrel.com/fonts/list/popular"))))),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u5b57\u4f53"},"\u9ed8\u8ba4\u5b57\u4f53"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  /* \u4f18\u5148\u7cfb\u7edf\u9ed8\u8ba4 */\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n    'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\nbody {\n  /* Sans-Serif */\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji';\n\n  /* Serif */\n  font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif,\n    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\n  /* Monospace */\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e2d\u6587")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  /* mac \u4f18\u5148 \u82f9\u65b9 windows \u4f18\u5148 \u96c5\u9ed1 */\n  font-family: 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft YaHei', '\u5fae\u8f6f\u96c5\u9ed1', Helvetica, Arial,\n    Verdana, sans-serif;\n}\n")),(0,l.kt)("h2",{id:"font-face"},"font-face"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n  font-family: 'OpenSans';\n  /* full name, postscript name, fallback */\n  src: local('Open Sans'), local('Open Sans'), url('/fonts/OpenSans.woff');\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: local('Montserrat'), url('/assets/fonts/Montserrat.ttf');\n  /* \u5b57\u4f53\u652f\u6301\u591a\u79cd weight */\n  font-weight: 100 900;\n}\n")),(0,l.kt)("h2",{id:"\u5b57\u4f53-\u5b50\u96c6"},"\u5b57\u4f53 \u5b50\u96c6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unicode-range"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fonttools/fonttools"},"fonttools/fonttools")," \u53ef\u7528\u4e8e\u751f\u6210\u5b50\u96c6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.dev/reduce-webfont-size/#unicode"},"https://web.dev/reduce-webfont-size/#unicode"))),(0,l.kt)("h2",{id:"\u5b57\u4f53\u5355\u4f4d\u5982\u4f55\u9009\u62e9"},"\u5b57\u4f53\u5355\u4f4d\u5982\u4f55\u9009\u62e9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8003\u8651\u56e0\u7d20",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7f29\u653e"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e0d\u540c\u8bbe\u5907 - \u7f29\u653e"),(0,l.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u6837\u5f0f - \u7f29\u653e+\u65ad\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u56fe"))),(0,l.kt)("li",{parentName:"ul"},"\u5355\u4f4d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rem - \u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"<html>")," font-size \u7684\u76f8\u5bf9\u5355\u4f4d"))),(0,l.kt)("li",{parentName:"ul"},"\u6570\u503c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"375 / 16 = 23.4375"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alastairc.ac/2017/11/is-text-sizing-dead/"},"Is text sizing dead?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Myth: Pixels units for text are bad for accessibility"),(0,l.kt)("li",{parentName:"ul"},"Myth: Don\u2019t use pixels in media queries",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u4e0d\u5f71\u54cd"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vitalets/react-native-extended-stylesheet/issues/19"},"vitalets/react-native-extended-stylesheet#19")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wscj/blog/issues/14"},"\u79fb\u52a8\u7aef\u957f\u5ea6\u9002\u914d\u65b9\u6848")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nervjs.github.io/taro/docs/size.html"},"Taro \u8bbe\u8ba1\u7a3f\u53ca\u5c3a\u5bf8\u5355\u4f4d"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="width=device-width, initial-scale=1" />\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let rem = 14;\n\nif (width > 768) {\n  rem = 45;\n} else if (width > 414) {\n  rem = 26;\n} else if (width > 375) {\n  rem = 18;\n} else if (width > 320) {\n  rem = 16;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"html {\n  font-size: 16px;\n\n  @media screen and (min-width: 900px) {\n    font-size: 18px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    font-size: 20px;\n  }\n}\n")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);