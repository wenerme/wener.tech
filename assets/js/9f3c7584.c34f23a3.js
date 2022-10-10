"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40309],{49613:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,m=f["".concat(l,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,u(u({ref:t},i),{},{components:r})):n.createElement(m,u({ref:t},i))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var p=2;p<a;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17326:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&i(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&i(e,r,t[r]);return e};const f={tags:["Cookbook"]},g="Go Cookbook",m={unversionedId:"languages/go/go-cookbook",id:"languages/go/go-cookbook",title:"Go Cookbook",description:"http reverse proxy",source:"@site/../notes/languages/go/go-cookbook.md",sourceDirName:"languages/go",slug:"/languages/go/cookbook",permalink:"/notes/languages/go/cookbook",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/go-cookbook.md",tags:[{label:"Cookbook",permalink:"/notes/tags/cookbook"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{tags:["Cookbook"]},sidebar:"docs",previous:{title:"Concurrent",permalink:"/notes/languages/go/concurrent"},next:{title:"Debugging",permalink:"/notes/languages/go/debug"}},b={},y=[{value:"http reverse proxy",id:"http-reverse-proxy",level:2}],d={toc:y};function k(e){var t,r=e,{components:o}=r,i=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},d),i),a(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",s({},{id:"go-cookbook"}),"Go Cookbook"),(0,n.kt)("h2",s({},{id:"http-reverse-proxy"}),"http reverse proxy"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "fmt"\n    "log"\n    "net/http"\n    "net/http/httputil"\n    "net/url"\n)\n\nfunc main() {\n    u, _ := url.Parse("https://wener.me")\n    proxy := httputil.NewSingleHostReverseProxy(u)\n\n    proxy.Director = func(r *http.Request) {\n        r.URL.Scheme = u.Scheme\n        r.URL.Host = u.Host\n        r.Host = u.Host\n        dump, _ := httputil.DumpRequest(r, false)\n        fmt.Println(string(dump))\n    }\n    http.Handle("/", proxy)\n    log.Fatalln(http.ListenAndServe(":8088", http.DefaultServeMux))\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"curl 127.0.0.1:8088\n")))}k.isMDXComponent=!0}}]);