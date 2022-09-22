"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33394],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(r),f=i,m=y["".concat(c,".").concat(f)]||y[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},25424:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(96600),i=r(27279),o=(r(59496),r(49613)),a=["components"],s={title:"Sentry"},c=void 0,l={unversionedId:"service/observability/tracing/sentry",id:"service/observability/tracing/sentry",title:"Sentry",description:"- getsentry/sentry",source:"@site/notes/service/observability/tracing/sentry.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/sentry",permalink:"/notes/service/observability/tracing/sentry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/sentry.md",tags:[],version:"current",frontMatter:{title:"Sentry"},sidebar:"docs",previous:{title:"OpenTelemetry",permalink:"/notes/service/observability/tracing/opentelemetry"},next:{title:"Signoz",permalink:"/notes/service/observability/tracing/signoz"}},u={},p=[{value:"Go",id:"go",level:2}],y={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/getsentry/sentry"},"getsentry/sentry"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BSL, Python"),(0,o.kt)("li",{parentName:"ul"},"cross-platform application error reporting")))),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestSentry(t *testing.T) {\n    err := sentry.Init(sentry.ClientOptions{\n        Dsn:   "",\n        Debug: true,\n    })\n    if err != nil {\n        log.Fatalf("sentry.Init: %s", err)\n    }\n    defer sentry.Flush(5 * time.Second)\n\n    sentry.CaptureMessage("sentry init")\n    sentry.CaptureException(errors.New("test error"))\n\n  // HTTP \u62e6\u622a\n    sh := sentryhttp.New(sentryhttp.Options{})\n    http.HandleFunc("/err", sh.HandleFunc(func(writer http.ResponseWriter, request *http.Request) {\n        panic("error")\n    }))\n}\n')))}f.isMDXComponent=!0}}]);