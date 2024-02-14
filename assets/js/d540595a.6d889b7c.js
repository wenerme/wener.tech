/*! For license information please see d540595a.6d889b7c.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[49912],{85572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=s(2488),i=s(62780);const t={title:"HEVC"},c="HEVC",l={id:"service/media/hevc",title:"HEVC",description:"- StaZhu/enable-chromium-hevc-hardware-decoding",source:"@site/../notes/service/media/hevc.md",sourceDirName:"service/media",slug:"/service/media/hevc",permalink:"/notes/service/media/hevc",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/media/hevc.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"HEVC"},sidebar:"docs",previous:{title:"HW Accel",permalink:"/notes/service/media/hardware-accel"},next:{title:"Image FAQ",permalink:"/notes/service/media/image/faq"}},d={},o=[{value:"is hevc/h265 ready",id:"is-hevch265-ready",level:2},{value:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 H.265 / HEVC",id:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301-h265--hevc",level:2},{value:"fMP4-HLS",id:"fmp4-hls",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hevc",children:"HEVC"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"open /Applications/Google\\ Chrome\\ Canary.app --args --enable-features=PlatformHEVCDecoderSupport\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/StaZhu/enable-chromium-hevc-hardware-decoding",children:"StaZhu/enable-chromium-hevc-hardware-decoding"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"is-hevch265-ready",children:"is hevc/h265 ready"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NO"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["hevc \u4e13\u5229\u8d39\u7528\u9ad8\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"chrome \u652f\u6301\u5f00\u6e90 av1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Intel Skylake Core 6 \u5f00\u59cb\u652f\u6301\u89e3\u7801 - 2015-08"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://caniuse.com/?search=hevc",children:"https://caniuse.com/?search=hevc"})}),"\n",(0,r.jsxs)(n.li,{children:["Windows ",(0,r.jsx)(n.a,{href:"https://www.free-codecs.com/hevc_video_extension_download.htm",children:"https://www.free-codecs.com/hevc_video_extension_download.htm"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u6d4b\u8bd5\u89c6\u9891 ",(0,r.jsx)(n.a,{href:"https://www.libde265.org/downloads-videos/",children:"https://www.libde265.org/downloads-videos/"})]}),"\n",(0,r.jsxs)(n.li,{children:["Google Chromecast \u652f\u6301 ",(0,r.jsx)(n.a,{href:"https://developers.google.com/cast/docs/media",children:"https://developers.google.com/cast/docs/media"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://support.apple.com/en-hk/HT207022",children:"HEVC media on Apple devices"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301-h265--hevc",children:"\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 H.265 / HEVC"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u4e3a\u4e13\u5229\u8d39\u7528\u8fc7\u9ad8\uff0c\u76ee\u524d\u57fa\u672c\u6ca1\u6709\u6d4f\u89c8\u5668\u652f\u6301 HEVC\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u63a8\u8350\u4f7f\u7528 webm \u5305\u88c5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5382\u5546\u4eec\u8054\u5408\u6784\u5efa\u4e86 ",(0,r.jsx)(n.a,{href:"https://aomedia.org/about/",children:"AOMedia"})," \u6765\u53cd\u6297 HEVC\uff0c\u4f7f\u7528 AV1 \u7f16\u7801\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Can I Use ",(0,r.jsx)(n.a,{href:"https://caniuse.com/hevc",children:"hevc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["safari \u652f\u6301\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f46\u662f jellyfin \u64ad\u653e\u7684\u65f6\u5019\u8fd8\u662f\u8f6c\u7801\u4e86"}),"\n",(0,r.jsx)(n.li,{children:"\u539f\u59cb\u89c6\u9891\u7f16\u7801 HEVC Main"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Can I Use ",(0,r.jsx)(n.a,{href:"https://caniuse.com/webm/embed/",children:"webm"})]}),"\n",(0,r.jsxs)(n.li,{children:["Can I Use ",(0,r.jsx)(n.a,{href:"https://caniuse.com/av1",children:"av1"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.google.com/cast/docs/media",children:"Supported Media for Google Cast"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fmp4-hls",children:"fMP4-HLS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Jellyfin \u542f\u7528\u540e Safari \u652f\u6301 HEVC"}),"\n",(0,r.jsx)(n.li,{children:"fragmented MP4"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.unified-streaming.com/documentation/package/fmp4-hls.html",children:"https://docs.unified-streaming.com/documentation/package/fmp4-hls.html"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.unified-streaming.com/documentation/drm/fmp4-hls.html",children:"https://docs.unified-streaming.com/documentation/drm/fmp4-hls.html"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},38088:(e,n,s)=>{var r=s(96651),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,t={},o=null,h=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:o,ref:h,props:t,_owner:l.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},2488:(e,n,s)=>{e.exports=s(38088)},62780:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>c});var r=s(96651);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);