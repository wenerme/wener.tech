/*! For license information please see d15aa778.d1034fc6.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[612],{80329:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(11527),o=t(47214);const i={tags:["FAQ"]},a="Spring FAQ",s={id:"java/spring/spring-faq",title:"Spring FAQ",description:"Thread Pool",source:"@site/../notes/java/spring/spring-faq.md",sourceDirName:"java/spring",slug:"/java/spring/faq",permalink:"/notes/java/spring/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/spring-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1691332314,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Spring Data",permalink:"/notes/java/spring/data"},next:{title:"Spring Security OAuth2",permalink:"/notes/java/spring/security-oauth2"}},c={},l=[{value:"Thread Pool",id:"thread-pool",level:2},{value:"Override Config",id:"override-config",level:2},{value:"Tomcat \u4e0a\u4f20\u8d85\u65f6",id:"tomcat-\u4e0a\u4f20\u8d85\u65f6",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"spring-faq",children:"Spring FAQ"}),"\n",(0,n.jsx)(r.h2,{id:"thread-pool",children:"Thread Pool"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"server.jetty.threads.acceptors: -1.0\nserver.jetty.threads.idle-timeout: 60000ms\nserver.jetty.threads.max: 200.0\nserver.jetty.threads.min: 8.0\nserver.jetty.threads.selectors: -1.0\n\nserver.tomcat.threads.max: 200.0\nserver.tomcat.threads.min-spare: 10.0\nserver.tomcat.accept-count: 100.0\n\n# https://github.com/undertow-io/undertow/blob/7d87eef9534807d00c974f92dc46be3d09b703a0/core/src/main/java/io/undertow/Undertow.java#L438-L439\nserver.undertow.threads.io: # Math.max(Runtime.getRuntime().availableProcessors(), 2)\nserver.undertow.threads.worker: # 8*io threads\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://docs.spring.io/spring-boot/docs/2.4.0/reference/htmlsingle",children:"https://docs.spring.io/spring-boot/docs/2.4.0/reference/htmlsingle"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/",children:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"override-config",children:"Override Config"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ini",children:"spring.cloud.config.allowOverride=true\nspring.cloud.config.overrideNone=true\nspring.cloud.config.override-system-properties=false\n"})}),"\n",(0,n.jsx)(r.h2,{id:"tomcat-\u4e0a\u4f20\u8d85\u65f6",children:"Tomcat \u4e0a\u4f20\u8d85\u65f6"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u5f02\u5e38\u4fe1\u606f"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"org.springframework.web.util.NestedServletException: Request processing failed; nested exception is org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is org.apache.commons.fileupload.FileUploadBase$IOFileUploadException: Processing of multipart/form-data request failed. Read timed out\n        org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:894)\n        org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:789)\n        javax.servlet.http.HttpServlet.service(HttpServlet.java:641)\n        javax.servlet.http.HttpServlet.service(HttpServlet.java:722)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:312)\n        org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:116)\n        org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:83)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:324)\n        org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:113)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:324)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u89e3\u51b3\u8be5\u95ee\u9898\u53ef\u5728 Tomcat \u7684 ",(0,n.jsx)(r.code,{children:"server.xml"})," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u89e3\u51b3"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<Connector port="8080" protocol="HTTP/1.1" URIEncoding="UTF-8"\n           connectionUploadTimeout="36000000" disableUploadTimeout="false"\n           connectionTimeout="60000" redirectPort="8443" />\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u5728 Spring Boot \u4e2d\u5219\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u6765\u4fee\u6539\u914d\u7f6e"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'@Bean\npublic EmbeddedServletContainerCustomizer containerCustomizer() throws FileNotFoundException {\n    return factory -> {\n        if (factory instanceof TomcatEmbeddedServletContainerFactory) {\n            TomcatEmbeddedServletContainerFactory containerFactory = (TomcatEmbeddedServletContainerFactory) factory;\n            containerFactory.addConnectorCustomizers(c -> {\n                // http://tomcat.apache.org/tomcat-8.0-doc/config/http.html#Standard_Implementation\n                log.info("Customize tomcat connector");\n                c.setAttribute("connectionUploadTimeout", 36000000);// milliseconds\n                c.setAttribute("disableUploadTimeout", false);\n            });\n        }\n    };\n}\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3354:(e,r,t)=>{var n=t(50959),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},11527:(e,r,t)=>{e.exports=t(3354)},47214:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(50959);const o={},i=n.createContext(o);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);