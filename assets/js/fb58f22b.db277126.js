/*! For license information please see fb58f22b.db277126.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84970],{72435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(11527),s=n(47214);const a={date:"2016-8-6 23:43",tags:["Game","Android"]},i="Play Titans using shell",l={permalink:"/story/2016/08/06/2016/tap-titans",editUrl:"https://github.com/wenerme/wener/edit/master/story/../story/2016/2016-08-06-tap-titans.md",source:"@site/../story/2016/2016-08-06-tap-titans.md",title:"Play Titans using shell",description:"Tap Titans on Play Store",date:"2016-08-06T23:43:00.000Z",formattedDate:"August 6, 2016",tags:[{label:"Game",permalink:"/story/tags/game"},{label:"Android",permalink:"/story/tags/android"}],readingTime:.95,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2016-8-6 23:43",tags:["Game","Android"]},unlisted:!1,prevItem:{title:"Go Redis module",permalink:"/story/go-rm"},nextItem:{title:"BBVM - BeBasic Virtual Machine",permalink:"/story/bbvm"}},o={authorsImageUrls:[]},d=[{value:"Features",id:"features",level:2},{value:"Requirement",id:"requirement",level:2},{value:"Get started",id:"get-started",level:2},{value:"How is works ?",id:"how-is-works-",level:2},{value:"Why fast ?",id:"why-fast-",level:3},{value:"How to detect the screen event ?",id:"how-to-detect-the-screen-event-",level:3},{value:"More",id:"more",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://play.google.com/store/apps/details?id=com.gamehivecorp.taptitans",children:"Tap Titans"})," on Play Store"]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Auto upgrade"}),"\n",(0,r.jsx)(t.li,{children:"Auto spell skill"}),"\n",(0,r.jsx)(t.li,{children:"Auto start challenge"}),"\n",(0,r.jsx)(t.li,{children:"Auto close ad dialog"}),"\n",(0,r.jsx)(t.li,{children:"Verify fast tap (0.03s/tap)"}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Only tested on Nexus 5, different devices may use different coordinates and event dev."}),"\n",(0,r.jsx)(t.li,{children:"Used to plat tiantis long time ago, may not works in current version.Different version may use different color and coordinates"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"requirement",children:"Requirement"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"ADB"}),"\n",(0,r.jsx)(t.li,{children:"Image Magic"}),"\n",(0,r.jsx)(t.li,{children:"Bash"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Start game"}),"\n",(0,r.jsxs)(t.li,{children:["Get source ",(0,r.jsx)(t.a,{href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh",children:"tap-titans-play.sh"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"chmod +x play.sh\n# Connect through lan, so you don't have to use the usb\n./play.sh use-tcp\n# Push the pre-generated event file\nadb push events /mnt/sdcard\n# Start playing\n./play.sh\n"})}),"\n",(0,r.jsx)(t.h2,{id:"how-is-works-",children:"How is works ?"}),"\n",(0,r.jsx)(t.h3,{id:"why-fast-",children:"Why fast ?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Because I don't use ",(0,r.jsx)(t.code,{children:"adb shell input tap"}),", instead use a generated file that represent a tap event, then ",(0,r.jsx)(t.code,{children:"cat tap > /dev/input/event1"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Use generated shell run in android."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-detect-the-screen-event-",children:"How to detect the screen event ?"}),"\n",(0,r.jsx)(t.p,{children:"Use screen capture, then use the image magic to check the color,kind of slowly, but works."}),"\n",(0,r.jsx)(t.h2,{id:"more",children:"More"}),"\n",(0,r.jsxs)(t.p,{children:["Check the ",(0,r.jsx)(t.a,{href:"https://github.com/wenerme/wener/tree/master/story/2016/tap-titans-play.sh",children:"source"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3354:(e,t,n)=>{var r=n(50959),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},11527:(e,t,n)=>{e.exports=n(3354)},47214:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(50959);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);