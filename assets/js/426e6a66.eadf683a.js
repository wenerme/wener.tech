/*! For license information please see 426e6a66.eadf683a.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[35339],{58426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(11527),t=s(47214);const i={title:"Xvfb"},o="Xvfb",a={id:"os/linux/desktop/x11/xvfb",title:"Xvfb",description:"- XDMCP",source:"@site/../notes/os/linux/desktop/x11/xvfb.md",sourceDirName:"os/linux/desktop/x11",slug:"/os/linux/desktop/x11/xvfb",permalink:"/notes/os/linux/desktop/x11/xvfb",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/desktop/x11/xvfb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"Xvfb"},sidebar:"docs",previous:{title:"x11vnc",permalink:"/notes/os/linux/desktop/x11/x11vnc"},next:{title:"XDG Dirs",permalink:"/notes/os/linux/desktop/xdg-dirs"}},d={},c=[{value:"chrome",id:"chrome",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"xvfb",children:"Xvfb"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# docker run --rm -it -v $PWD:/host -w /host -p 5701:5701 --name vnc wener/base\napk add xvfb xdpyinfo\nXvfb :1\n\nXvfb :1 -screen 0 1280x1024x24\nxdpyinfo -display :1 # \u5224\u65ad\u662f\u5426\u542f\u52a8\u6210\u529f\n\n#\nexport DISPLAY=:1\n\napk add fluxbox\nfluxbox -display :1 &\n\napk add glib\napk add -X https://mirrors.sjtug.sjtu.edu.cn/alpine/edge/testing wmctrl\nwmctrl -m\n\n# \u9ed8\u8ba4\u5bc6\u7801\u6587\u4ef6\nx11vnc -storepasswd vnc ./passwd\n# https://novnc.com/noVNC/vnc.html?host=localhost&port=5901&path=&encrypt=0\nx11vnc -forever -shared -ncache 10 -display :1 -wait 20 -rfbauth passwd -rfbport 5901\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"file /tmp/.X11-unix/X1 # socket\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"XDMCP"}),"\n",(0,r.jsx)(n.li,{children:"XKB"}),"\n",(0,r.jsx)(n.li,{children:"X DAMAGE"}),"\n",(0,r.jsxs)(n.li,{children:["-shmem\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"fb in shared memory"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["-fbdir directory\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"fb in mmap"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"chrome",children:"chrome"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dbus-uuidgen > /etc/machine-id\n\n# reset dir\nrm -rf $HOME/.cache/chromium\nrm -rf $HOME/.config/chromium\n\napk add chromium\n\n/usr/bin/chromium-browser ${EXTRA_CHROME_OPTION} \\\n  --purge-memory-button \\\n  --clear-token-service \\\n  --disable-3d-apis \\\n  --disable-accelerated-video \\\n  --disable-background-mode \\\n  --disable-gpu \\\n  --disable-infobars \\\n  --disable-metrics \\\n  --disable-preconnect \\\n  --disable-software-rasterizer \\\n  --disable-speech-api \\\n  --disable-sync \\\n  --disable-sync-app-list \\\n  --disable-translate \\\n  --disable-voice-input \\\n  --disable-webgl \\\n  --disable-web-security \\\n  --force-device-scale-factor=1 \\\n  --ignore-certificate-errors \\\n  --load-extension=/home/chrome/plugin \\\n  --no-first-run \\\n  --no-pings \\\n  --no-sandbox \\\n  --reset-variation-state \\\n  --user-data-dir \\\n  --window-position=0,0 \\\n  --window-size=1280,1024 \\\n  https://wener.me\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,l=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(50959);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);