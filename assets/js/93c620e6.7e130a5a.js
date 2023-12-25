/*! For license information please see 93c620e6.7e130a5a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[52369],{34242:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(11527),t=i(47214);const s={title:"React"},l="React",c={id:"web/react/README",title:"React",description:"- suspense \u901a\u8fc7 throw prmies \u5b9e\u73b0",source:"@site/../notes/web/react/README.md",sourceDirName:"web/react",slug:"/web/react/",permalink:"/notes/web/react/",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/react/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1680070123,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"React"},sidebar:"docs",previous:{title:"Open Graph",permalink:"/notes/web/open-graph"},next:{title:"Ant Design",permalink:"/notes/web/react/antd"}},o={},a=[{value:"React components naming convention",id:"react-components-naming-convention",level:2},{value:"Presentational and Container Components",id:"presentational-and-container-components",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u547d\u540d",id:"\u547d\u540d",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["suspense \u901a\u8fc7 throw prmies \u5b9e\u73b0\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/vigzmv/react-promise-suspense/blob/master/lib/index.ts",children:"vigzmv/react-promise-suspense"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5e38\u7528\u5de5\u5177\nnpm i -g react-native-cli code-push-cli\n\n# Redux\nnpm i --save redux redux-thunk\nnpm i --save-dev remote-redux-devtools\n# Redux Native\nnpm i --save react-redux redux-persist\n\n# Native\nnpm i --save react-base react-native-vector-icons\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5e26 key \u7684\u7ec4\u4ef6\u4e0d\u4f1a\u88ab\u590d\u7528 ",(0,r.jsx)(n.a,{href:"https://codesandbox.io/s/react-keyed-reuse-u2to6",children:"demo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5\u907f\u514d props \u53d8\u5316\u95ee\u9898"}),"\n",(0,r.jsx)(n.li,{children:"\u66f4\u9002\u7528\u4e8e memo"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Context Selectors ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react/pull/20646",children:"react#20646"})]}),"\n",(0,r.jsxs)(n.li,{children:["React.memo + useContext ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693",children:"react#15156"})]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/wojtekmaj/react-lifecycle-methods-diagram",children:"wojtekmaj/react-lifecycle-methods-diagram"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"react-components-naming-convention",children:"React components naming convention"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[Domain]|[Page/Context]|ComponentName|[Type]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Domain\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e1a\u52a1\u57df\u540d\u8bcd - \u5212\u5206\u6a21\u5757\u6216\u4ea7\u54c1"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Page/Content\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u7684\u4f4d\u7f6e\u4e0a\u4e0b\u6587 - \u6700\u8fd1\u4e0a\u4e0b\u6587"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 Sidebar"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ComponentName\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7ec4\u4ef6\u76ee\u7684\uff0c\u7528\u4e8e\u505a\u4ec0\u4e48\u7684"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Type\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"View - \u89c6\u56fe\uff0c\u53ea\u5c55\u73b0\u6570\u636e"}),"\n",(0,r.jsx)(n.li,{children:"Button"}),"\n",(0,r.jsx)(n.li,{children:"\u8868\u5355\u7c7b - Input\u3001Upload"}),"\n",(0,r.jsx)(n.li,{children:"Component - HOC \u7c7b\u7ec4\u4ef6\uff0c\u539f\u6709\u7ec4\u4ef6\u4fdd\u6301\u539f\u6709\u540d\u5b57"}),"\n",(0,r.jsx)(n.li,{children:"Container - \u5bb9\u5668\u7c7b\uff0c\u63d0\u4f9b\u4ea4\u4e92\u63a5\u53e3\u6570\u636e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@wittydeveloper/b50303551505",children:"React components naming convention"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"presentational-and-container-components",children:"Presentational and Container Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["presentational\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5173\u5fc3 \u201c\u770b\u8d77\u6765\u600e\u4e48\u6837\u201d"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u80fd\u5305\u542b Presentational \u548c Container \u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u5305\u542b DOM/\u5143\u7d20/Markup/\u6837\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u5141\u8bb8 children \u5c5e\u6027\u4f20\u9012"}),"\n",(0,r.jsx)(n.li,{children:"\u65e0\u5916\u90e8\u4f9d\u8d56 - Redux\u3001REST\u3001API"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u5173\u5fc3\u6570\u636e\u52a0\u8f7d\u548c\u4fee\u6539"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7 props \u63a5\u53d7\u5c5e\u6027\u548c\u56de\u8c03"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u6ca1\u6709\u81ea\u5df1\u7684\u72b6\u6001 - \u6709\u4e5f\u53ea\u662f UI \u72b6\u6001"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u4e3a\u51fd\u6570\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 Page, Sidebar, Story, UserInfo, ListItem"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["container\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5173\u5fc3 \u201c\u903b\u8f91\u5982\u4f55\u8fd0\u4f5c\u201d"}),"\n",(0,r.jsx)(n.li,{children:"\u9664\u4e86\u5c01\u88c5\u57fa\u672c\u4e0d\u5305\u542b\u5143\u7d20\uff0c\u6ca1\u6709\u81ea\u5df1\u7684\u6837\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3a presentational \u6216\u5176\u4ed6 container \u63d0\u4f9b\u6837\u5f0f\u548c\u884c\u4e3a"}),"\n",(0,r.jsx)(n.li,{children:"\u4f1a\u4e0e \u72b6\u6001/Redux \u4ea4\u4e92\uff0c\u4e3a presentational \u63d0\u4f9b\u56de\u8c03"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u6709\u72b6\u6001\u548c\u6570\u636e\u6e90"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.del,{children:"\u901a\u5e38\u914d\u5408 HOC - React Redux connect(), Relay createContainer(), Flux Utils Container.create()"})}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982 UserPage, FollowersSidebar, StoryContainer, FollowedUserList."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u4ed6\u5212\u5206\u70b9\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6709\u72b6\u6001\u3001\u65e0\u72b6\u6001"}),"\n",(0,r.jsx)(n.li,{children:"\u7d2f\u3001\u51fd\u6570"}),"\n",(0,r.jsx)(n.li,{children:"Pure\u3001Impure"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://medium.com/@dan_abramov/7ca2f9a7c7d0",children:"Presentational and Container Components"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"\u547d\u540d",children:"\u547d\u540d"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,i)=>{var r=i(50959),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var r,s={},a=null,d=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},11527:(e,n,i)=>{e.exports=i(3354)},47214:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var r=i(50959);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);