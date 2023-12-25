/*! For license information please see b5b378e8.26d974f8.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3270],{994:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var r=i(11527),s=i(47214);const l={id:"security-oauth2",title:"Spring Security OAuth2"},c="Spring Security OAuth2",t={id:"java/spring/security-oauth2",title:"Spring Security OAuth2",description:"Tips",source:"@site/../notes/java/spring/spring-security-oauth2.md",sourceDirName:"java/spring",slug:"/java/spring/security-oauth2",permalink:"/notes/java/spring/security-oauth2",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/spring-security-oauth2.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"security-oauth2",title:"Spring Security OAuth2"},sidebar:"docs",previous:{title:"Spring FAQ",permalink:"/notes/java/spring/faq"},next:{title:"Spring Security",permalink:"/notes/java/spring/security"}},o={},h=[{value:"Tips",id:"tips",level:2},{value:"Notes",id:"notes",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"spring-security-oauth2",children:"Spring Security OAuth2"}),"\n",(0,r.jsx)(e.h2,{id:"tips",children:"Tips"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["OAuth2 ",(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc6749",children:"rfc6749"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://jmnarloch.wordpress.com/2015/10/07/spring-cloud-feign-spdyhttp2/",children:"Spring Cloud: Feign SPDY/HTTP2"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://jmnarloch.wordpress.com/2015/10/14/spring-cloud-feign-oauth2-authentication/",children:"Spring Cloud: Feign OAuth2 authentication"})}),"\n",(0,r.jsxs)(e.li,{children:["Spring ",(0,r.jsx)(e.a,{href:"http://projects.spring.io/spring-security-oauth/docs/oauth2.html",children:"OAuth 2 Developers Guide"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"http://www.baeldung.com/spring-security-oauth-jwt",children:"spring-security-oauth-jwt"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security-oauth",children:"spring-projects/spring-security-oauth"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"http://www.baeldung.com/spring-security-oauth-jwt",children:"Using JWT with Spring Security OAuth"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"AS \u9881\u53d1 JWT"}),"\n",(0,r.jsx)(e.li,{children:"RS \u63a5\u6536 JWT"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/authorization/requiring-user-login",children:"Requiring User Login"})}),"\n",(0,r.jsx)(e.li,{children:"Access Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 12h"}),"\n",(0,r.jsx)(e.li,{children:"Refresh Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 30d"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"curl acme:acmesecret@localhost:8080/oauth/token -d grant_type=client_credentials\ncurl acme:acmesecret@localhost:8080/oauth/token -d grant_type=password -d username=user -d password=...\n\nhttp://localhost:8080/oauth/authorize?response_type=code&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\nhttp://localhost:8080/oauth/authorize?response_type=token&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\n"})}),"\n",(0,r.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"OAuth2"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@EnableAuthorizationServer"})," / AS / \u6388\u6743\u670d\u52a1\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"AuthorizationServerEndpointsConfiguration"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"AuthorizationServerSecurityConfiguration"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ClientDetailsServiceConfiguration"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"ClientDetailsServiceConfigurer"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"AuthorizationServerConfigurer"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"AuthorizationServerSecurityConfigurer"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@EnableOAuth2Client"})," / Client / \u5ba2\u6237\u7aef\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e3b\u8981\u7528\u4e8e\u7b80\u5316\u53d1\u8d77 OAuth2 \u7684\u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@EnableResourceServer"})," / RS / \u8d44\u6e90\u670d\u52a1\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ResourceServerConfiguration"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"ResourceServerConfigurer"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"DefaultTokenServices"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5b9e\u73b0\u4e86\u6838\u5fc3\u7684\u51e0\u4e2a\u63a5\u53e3 ",(0,r.jsx)(e.code,{children:"AuthorizationServerTokenServices"}),", ",(0,r.jsx)(e.code,{children:"ResourceServerTokenServices"}),", ",(0,r.jsx)(e.code,{children:"ConsumerTokenServices"})]}),"\n",(0,r.jsxs)(e.li,{children:["Token \u5b58\u50a8\u4ea4\u7531 ",(0,r.jsx)(e.code,{children:"TokenStore"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"AuthorizationServerEndpointsConfigurer"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6838\u5fc3\u914d\u7f6e\u5bf9\u8c61, \u6240\u6709\u7684\u76f8\u5173\u63a5\u53e3\u548c\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"AuthorizationServerConfigurer"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"OAUth2 Authorization Server \u914d\u7f6e\u63a5\u53e3"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"ApprovalStore"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b58\u50a8\u7528\u6237\u6279\u51c6\u7684\u4fe1\u606f"}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u4e2a\u7528\u6237,\u6bcf\u4e2a\u5ba2\u6237\u7aef"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"OAuth2RequestFactory"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7ba1\u7406 OAuth2 \u8bf7\u6c42"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"ClientDetails"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"OAuth2 \u7684\u5ba2\u6237\u7aef\u4fe1\u606f"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ClientDetailsService"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u83b7\u53d6\u5ba2\u6237\u7aef\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ClientRegistrationService"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6dfb\u52a0\u4fee\u6539\u548c\u5220\u9664\u5ba2\u6237\u7aef\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"OAuth2SecurityExpressionMethods"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u8868\u8fbe\u5f0f\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"oauth2"})," \u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"OAuth2AccessToken"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"TokenEnhancer"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9 Token \u5bf9\u8c61\u8fdb\u884c\u589e\u5f3a"}),"\n",(0,r.jsx)(e.li,{children:"\u4f8b\u5982\u5b9e\u73b0 JWT \u6dfb\u52a0\u81ea\u5b9a\u4e49 Claims"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"TokenEnhancerChain"})," \u5b9e\u73b0\u4e00\u7ec4\u589e\u5f3a"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"TokenStore"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5b58\u50a8 OAuth2 Token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ConsumerTokenServices"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7528\u4e8e\u56de\u6536 Token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"TokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9\u5e94 OAuth2 \u4e2d\u7684\u4e0d\u540c\u6388\u6743\u7c7b\u578b"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"AuthorizationCodeServices"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u6210\u548c\u5b58\u50a8 authorization_code"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u8d26\u53f7\u5bc6\u7801\u7684\u6388\u6743\u4f1a\u4f7f\u7528 Spring Security \u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"AuthenticationManager"})," \u6765\u5224\u65ad\u662f\u5426\u6388\u6743\u6210\u529f"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"TokenGranter"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u6210\u4e0d\u540c\u7c7b\u578b\u7684 Token"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ImplicitTokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"implicit"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"RefreshTokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"refresh_token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"AuthorizationCodeTokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"authorization_code"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ResourceOwnerPasswordTokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"password"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ClientCredentialsTokenGranter"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"client_credentials"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"AuthorizationEndpoint\n/oauth2/authorize"}),"\n",(0,r.jsx)(e.p,{children:"AuthorizationEndpoint\n/oauth2/token"}),"\n",(0,r.jsx)(e.p,{children:"/oauth/confirm_access\n/oauth/error"})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},3354:(n,e,i)=>{var r=i(50959),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,i){var r,l={},h=null,d=null;for(r in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(d=e.ref),e)c.call(e,r)&&!o.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===l[r]&&(l[r]=e[r]);return{$$typeof:s,type:n,key:h,ref:d,props:l,_owner:t.current}}e.Fragment=l,e.jsx=h,e.jsxs=h},11527:(n,e,i)=>{n.exports=i(3354)},47214:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>c});var r=i(50959);const s={},l=r.createContext(s);function c(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);