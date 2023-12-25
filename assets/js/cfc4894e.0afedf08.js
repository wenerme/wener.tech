/*! For license information please see cfc4894e.0afedf08.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96755],{21555:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=s(11527),r=s(47214);const i={title:"Gluster"},l="glusterfs",o={id:"service/storage/gluster",title:"Gluster",description:"- heketi/heketi",source:"@site/../notes/service/storage/gluster.md",sourceDirName:"service/storage",slug:"/service/storage/gluster",permalink:"/notes/service/storage/gluster",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/gluster.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1667318353,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"Gluster"},sidebar:"docs",previous:{title:"\u5206\u5e03\u5f0f\u5b58\u50a8",permalink:"/notes/service/storage/distributed-storage"},next:{title:"juicefs",permalink:"/notes/service/storage/juicefs"}},c={},u=[{value:"Gluster vs Ceph",id:"gluster-vs-ceph",level:2}];function a(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"glusterfs",children:"glusterfs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/heketi/heketi",children:"heketi/heketi"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"RESTful based volume management framework for GlusterFS"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/gluster/glusterfs/issues/268",children:"#268"})," - \u4e0d\u517c\u5bb9 alpine musl"]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"gluster-vs-ceph",children:"Gluster vs Ceph"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Ceph\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u57fa\u4e8e\u5bf9\u8c61"}),"\n",(0,n.jsx)(t.li,{children:"\u652f\u6301\u975e\u7ed3\u6784\u5316\u6570\u636e"}),"\n",(0,n.jsx)(t.li,{children:"\u5e95\u5c42 RADOS \u5bf9\u8c61\u6570\u636e\u7cfb\u7edf"}),"\n",(0,n.jsx)(t.li,{children:"cephfs \u57fa\u4e8e\u5bf9\u8c61\u5b58\u50a8\u5b9e\u73b0 fs \u8bbf\u95ee\u5c42"}),"\n",(0,n.jsx)(t.li,{children:"bluestore \u53ef\u76f4\u63a5\u64cd\u4f5c\u5757\u8bbe\u5907\u4e0d\u5728\u4f9d\u8d56 fs"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Gluster\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u7ea7\u8054\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784"}),"\n",(0,n.jsx)(t.li,{children:"\u4f7f\u7528\u7b80\u5355\uff0c\u67b6\u6784\u5c42\u7ea7\u5c11"}),"\n",(0,n.jsx)(t.li,{children:"\u5bf9\u4f7f\u7528\u7684 FS \u6709\u8981\u6c42\u548c\u4f9d\u8d56"}),"\n",(0,n.jsx)(t.li,{children:"glusterfs \u5c42\u4e4b\u4e0a\u63d0\u4f9b\u4e86 swift \u4f5c\u4e3a\u5bf9\u8c61\u5b58\u50a8"}),"\n",(0,n.jsx)(t.li,{children:"\u9002\u5408\u987a\u5e8f\u8bbf\u95ee\uff0c\u4e0d\u9002\u5408\u6570\u636e\u5e93\u7c7b\u5bf9\u9501\u8981\u6c42\u7684\u8bbf\u95ee"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3354:(e,t,s)=>{var n=s(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,s){var n,i={},u=null,a=null;for(n in void 0!==s&&(u=""+s),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:a,props:i,_owner:o.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},11527:(e,t,s)=>{e.exports=s(3354)},47214:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var n=s(50959);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);