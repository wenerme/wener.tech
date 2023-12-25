/*! For license information please see 9f3c7584.05c7f7b3.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40309],{62485:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>i,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(11527),r=o(47214);const s={tags:["Cookbook"]},a="Go Cookbook",l={id:"languages/go/go-cookbook",title:"Go Cookbook",description:"http reverse proxy",source:"@site/../notes/languages/go/go-cookbook.md",sourceDirName:"languages/go",slug:"/languages/go/cookbook",permalink:"/notes/languages/go/cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{tags:["Cookbook"]},sidebar:"docs",previous:{title:"Concurrent",permalink:"/notes/languages/go/concurrent"},next:{title:"Debugging",permalink:"/notes/languages/go/debug"}},u={},c=[{value:"http reverse proxy",id:"http-reverse-proxy",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"go-cookbook",children:"Go Cookbook"}),"\n",(0,n.jsx)(t.h2,{id:"http-reverse-proxy",children:"http reverse proxy"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"net/http"\n\t"net/http/httputil"\n\t"net/url"\n)\n\nfunc main() {\n\tu, _ := url.Parse("https://wener.me")\n\tproxy := httputil.NewSingleHostReverseProxy(u)\n\n\tproxy.Director = func(r *http.Request) {\n\t\tr.URL.Scheme = u.Scheme\n\t\tr.URL.Host = u.Host\n\t\tr.Host = u.Host\n\t\tdump, _ := httputil.DumpRequest(r, false)\n\t\tfmt.Println(string(dump))\n\t}\n\thttp.Handle("/", proxy)\n\tlog.Fatalln(http.ListenAndServe(":8088", http.DefaultServeMux))\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl 127.0.0.1:8088\n"})})]})}function i(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3354:(e,t,o)=>{var n=o(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,s={},c=null,p=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:p,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},11527:(e,t,o)=>{e.exports=o(3354)},47214:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>a});var n=o(50959);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);