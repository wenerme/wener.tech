/*! For license information please see a2489e24.1a5e835f.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13445],{22602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(11527),o=n(47214);const s={title:"DOM"},l="DOM",c={id:"web/dom",title:"DOM",description:"- Document Object Model",source:"@site/../notes/web/dom.md",sourceDirName:"web",slug:"/web/dom",permalink:"/notes/web/dom",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dom.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663122612,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"DOM"},sidebar:"docs",previous:{title:"DOM FAQ",permalink:"/notes/web/dom-faq"},next:{title:"\u7f16\u8f91\u5668",permalink:"/notes/web/editor/"}},d={},i=[];function a(e){const t={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dom",children:"DOM"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Document Object Model"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://dom.spec.whatwg.org/",children:"https://dom.spec.whatwg.org/"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",children:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"})}),"\n",(0,r.jsx)(t.p,{children:"// e.preventDefault();\n// e.stopPropagation();\n// e.nativeEvent.stopImmediatePropagation();"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"         | |                                   / \\\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"---------------| |-----------------   ---------------| |-----------------\n| element1     | |                |   | element1     | |                |\n|   -----------| |-----------     |   |   -----------| |-----------     |\n|   |element2  \\ /          |     |   |   |element2  | |          |     |\n|   -------------------------     |   |   -------------------------     |\n|        Event CAPTURING          |   |        Event BUBBLING           |"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"// CAPTURING event\nbutton.addEventListener('click', handleClick, true)"}),"\n",(0,r.jsx)(t.p,{children:"// BUBBLING events\nbutton.addEventListener('click', handleClick, false)\nbutton.addEventListener('click', handleClick)"}),"\n",(0,r.jsxs)(t.p,{children:["e.defaultPrevented\n",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/events.html",children:"https://reactjs.org/docs/events.html"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3354:(e,t,n)=>{var r=n(50959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,s={},i=null,a=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var r=n(50959);const o={},s=r.createContext(o);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);