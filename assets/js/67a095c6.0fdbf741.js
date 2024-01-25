/*! For license information please see 67a095c6.0fdbf741.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[69417],{99224:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(11527),i=n(47214);const r={title:"mapbox"},a="mapbox",l={id:"service/geo/mapbox",title:"mapbox",description:"- Mapbox GL 512x512 pixel tiles",source:"@site/../notes/service/geo/mapbox.md",sourceDirName:"service/geo",slug:"/service/geo/mapbox",permalink:"/notes/service/geo/mapbox",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/geo/mapbox.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1705897966,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{title:"mapbox"},sidebar:"docs",previous:{title:"GeoJSON",permalink:"/notes/service/geo/geojson"},next:{title:"\u5373\u65f6\u901a\u8baf",permalink:"/notes/service/im/"}},c={},o=[{value:"zoom level",id:"zoom-level",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"mapbox",children:"mapbox"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Mapbox GL 512x512 pixel tiles"}),"\n",(0,t.jsx)(s.li,{children:"Mapbox Raster Tiles 256x256 pixel tiles"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type ViewState = {\n  /** Longitude at map center */\n  longitude: number;\n  /** Latitude at map center */\n  latitude: number;\n  /** Map zoom level */\n  zoom: number;\n  /** Map rotation bearing in degrees counter-clockwise from north */\n  bearing: number;\n  /** Map angle in degrees at which the camera is looking at the ground */\n  pitch: number;\n  /** Dimensions in pixels applied on each side of the viewport for shifting the vanishing point. */\n  padding: PaddingOptions;\n};\n"})}),"\n",(0,t.jsx)(s.h2,{id:"zoom-level",children:"zoom level"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"0-22"}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"z"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"m"})]})]}),(0,t.jsx)(s.mo,{children:"\xd7"}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"z"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"m"})]})]})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"2^{zoom} \\times 2^{zoom}"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.7477em",verticalAlign:"-0.0833em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"zoo"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"m"})]})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6644em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord",children:"2"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"zoo"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"m"})]})})]})})})})})]})]})]})]})}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"zoom"}),(0,t.jsx)(s.th,{children:"see"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"\u5730\u7403"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"\u4e00\u4e2a\u5927\u9646"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"\u5927\u5c9b"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"\u5927\u6cb3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"\u5927\u8def"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"15"}),(0,t.jsx)(s.td,{children:"\u5efa\u7b51"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.mapbox.com/help/glossary/zoom-level/",children:"https://docs.mapbox.com/help/glossary/zoom-level/"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},3354:(e,s,n)=>{var t=n(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,n){var t,r={},o=null,m=null;for(t in void 0!==n&&(o=""+n),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(m=s.ref),s)a.call(s,t)&&!c.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:i,type:e,key:o,ref:m,props:r,_owner:l.current}}s.Fragment=r,s.jsx=o,s.jsxs=o},11527:(e,s,n)=>{e.exports=n(3354)},47214:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var t=n(50959);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);