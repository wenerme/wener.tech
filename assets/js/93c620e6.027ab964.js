"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52369],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},45717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return N}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&m(e,n,t[n]);return e};const s={title:"React"},k="React",d={unversionedId:"web/react/README",id:"web/react/README",title:"React",description:"- suspense \u901a\u8fc7 throw prmies \u5b9e\u73b0",source:"@site/../notes/web/react/README.md",sourceDirName:"web/react",slug:"/web/react/",permalink:"/notes/web/react/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1654174006,formattedLastUpdatedAt:"Jun 2, 2022",frontMatter:{title:"React"},sidebar:"docs",previous:{title:"Yarn",permalink:"/notes/web/nodejs/yarn"},next:{title:"bit",permalink:"/notes/web/react/bit"}},f={},N=[{value:"React components naming convention",id:"react-components-naming-convention",level:2},{value:"Presentational and Container Components",id:"presentational-and-container-components",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u547d\u540d",id:"\u547d\u540d",level:2}],b={toc:N};function v(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),m),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"react"}),"React"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"suspense \u901a\u8fc7 throw prmies \u5b9e\u73b0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/vigzmv/react-promise-suspense/blob/master/lib/index.ts"}),"vigzmv/react-promise-suspense"))))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u5e38\u7528\u5de5\u5177\nnpm i -g react-native-cli code-push-cli\n\n# Redux\nnpm i --save redux redux-thunk\nnpm i --save-dev remote-redux-devtools\n# Redux Native\nnpm i --save react-redux redux-persist\n\n# Native\nnpm i --save react-base react-native-vector-icons\n")),(0,a.kt)("admonition",c({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5e26 key \u7684\u7ec4\u4ef6\u4e0d\u4f1a\u88ab\u590d\u7528 ",(0,a.kt)("a",c({parentName:"li"},{href:"https://codesandbox.io/s/react-keyed-reuse-u2to6"}),"demo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u907f\u514d props \u53d8\u5316\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u9002\u7528\u4e8e memo"))))),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Context Selectors ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/react/pull/20646"}),"react#20646")),(0,a.kt)("li",{parentName:"ul"},"React.memo + useContext ",(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"}),"react#15156")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/wojtekmaj/react-lifecycle-methods-diagram"}),"wojtekmaj/react-lifecycle-methods-diagram"))),(0,a.kt)("h2",c({},{id:"react-components-naming-convention"}),"React components naming convention"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Domain]|[Page/Context]|ComponentName|[Type]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Domain",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u57df\u540d\u8bcd - \u5212\u5206\u6a21\u5757\u6216\u4ea7\u54c1"))),(0,a.kt)("li",{parentName:"ul"},"Page/Content",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7684\u4f4d\u7f6e\u4e0a\u4e0b\u6587 - \u6700\u8fd1\u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 Sidebar"))),(0,a.kt)("li",{parentName:"ul"},"ComponentName",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u76ee\u7684\uff0c\u7528\u4e8e\u505a\u4ec0\u4e48\u7684"))),(0,a.kt)("li",{parentName:"ul"},"Type",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"View - \u89c6\u56fe\uff0c\u53ea\u5c55\u73b0\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"Button"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u5355\u7c7b - Input\u3001Upload"),(0,a.kt)("li",{parentName:"ul"},"Component - HOC \u7c7b\u7ec4\u4ef6\uff0c\u539f\u6709\u7ec4\u4ef6\u4fdd\u6301\u539f\u6709\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},"Container - \u5bb9\u5668\u7c7b\uff0c\u63d0\u4f9b\u4ea4\u4e92\u63a5\u53e3\u6570\u636e")))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://medium.com/@wittydeveloper/b50303551505"}),"React components naming convention"))),(0,a.kt)("h2",c({},{id:"presentational-and-container-components"}),"Presentational and Container Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"presentational",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5173\u5fc3 \u201c\u770b\u8d77\u6765\u600e\u4e48\u6837\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5305\u542b Presentational \u548c Container \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u5305\u542b DOM/\u5143\u7d20/Markup/\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u5141\u8bb8 children \u5c5e\u6027\u4f20\u9012"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u5916\u90e8\u4f9d\u8d56 - Redux\u3001REST\u3001API"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5173\u5fc3\u6570\u636e\u52a0\u8f7d\u548c\u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 props \u63a5\u53d7\u5c5e\u6027\u548c\u56de\u8c03"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6ca1\u6709\u81ea\u5df1\u7684\u72b6\u6001 - \u6709\u4e5f\u53ea\u662f UI \u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4e3a\u51fd\u6570\u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 Page, Sidebar, Story, UserInfo, List"))),(0,a.kt)("li",{parentName:"ul"},"container",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5173\u5fc3 \u201c\u903b\u8f91\u5982\u4f55\u8fd0\u4f5c\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u9664\u4e86\u5c01\u88c5\u57fa\u672c\u4e0d\u5305\u542b\u5143\u7d20\uff0c\u6ca1\u6709\u81ea\u5df1\u7684\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a presentational \u6216\u5176\u4ed6 container \u63d0\u4f9b\u6837\u5f0f\u548c\u884c\u4e3a"),(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u4e0e Redux \u4ea4\u4e92\uff0c\u4e3a presentational \u63d0\u4f9b\u56de\u8c03"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u6709\u72b6\u6001\u548c\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u914d\u5408 HOC - React Redux connect(), Relay createContainer(), Flux Utils Container.create()"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 UserPage, FollowersSidebar, StoryContainer, FollowedUserList."))),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5212\u5206\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6709\u72b6\u6001\u3001\u65e0\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u7d2f\u3001\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"Pure\u3001Impure")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://medium.com/@dan_abramov/7ca2f9a7c7d0"}),"Presentational and Container Components"))),(0,a.kt)("h2",c({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",c({},{id:"\u547d\u540d"}),"\u547d\u540d"))}v.isMDXComponent=!0}}]);