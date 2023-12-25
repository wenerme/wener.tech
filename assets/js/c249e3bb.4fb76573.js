/*! For license information please see c249e3bb.4fb76573.js.LICENSE.txt */
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63088],{66388:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(11527),t=s(47214);const i={title:"\u5fae\u670d\u52a1"},c="microservices",o={id:"web/framework/nestjs/nestjs-microservices",title:"\u5fae\u670d\u52a1",description:"- \u4f20\u8f93",source:"@site/../notes/web/framework/nestjs/nestjs-microservices.md",sourceDirName:"web/framework/nestjs",slug:"/web/framework/nestjs/microservices",permalink:"/notes/web/framework/nestjs/microservices",draft:!1,unlisted:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nestjs/nestjs-microservices.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"\u5fae\u670d\u52a1"},sidebar:"docs",previous:{title:"NestJS FAQ",permalink:"/notes/web/framework/nestjs/faq"},next:{title:"NestJS Version",permalink:"/notes/web/framework/nestjs/version"}},l={},a=[{value:"Hybrid application",id:"hybrid-application",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"microservices",children:"microservices"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f20\u8f93\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TCP"}),"\n",(0,r.jsxs)(n.li,{children:["Redis Pub/Sub\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u505a\u5904\u7406\u4f1a\u88ab\u591a\u4e2a \u670d\u52a1\u7aef \u5904\u7406"}),"\n",(0,r.jsxs)(n.li,{children:["\u7528 redis stream \u53ef\u4ee5\u907f\u514d\u91cd\u590d\u6d88\u8d39\u95ee\u9898\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/tamimaj/nestjs-redis-streams",children:"tamimaj/nestjs-redis-streams"})}),"\n",(0,r.jsx)(n.li,{children:"\u4f46\u4f1a\u6709 stale \u95ee\u9898\uff0c\u9700\u8981\u6ce8\u610f"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["MQTT Pub/Sub - ",(0,r.jsx)(n.code,{children:"{data,headers}"})]}),"\n",(0,r.jsx)(n.li,{children:"NATS reqreply, pubsub"}),"\n",(0,r.jsx)(n.li,{children:"RabbitMQ"}),"\n",(0,r.jsx)(n.li,{children:"Kafka"}),"\n",(0,r.jsx)(n.li,{children:"gRPC"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6838\u5fc3\u6a21\u5757\u4e0d\u4f1a\u589e\u52a0\u989d\u5916\u7684\u4f20\u8f93\u7b56\u7565\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/nestjs/nest/issues/3960#issuecomment-771647374",children:"https://github.com/nestjs/nest/issues/3960#issuecomment-771647374"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["pattern\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f1a\u5e8f\u5217\u5316\u4e3a JSON - \u56e0\u6b64\u53ef\u4ee5\u7528 Object"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@MessagePattern({ cmd: '' })"})," - \u8bf7\u6c42\u54cd\u5e94\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u8fd4\u56de Promise, Observable"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@EventPattern('')"})," - \u4e8b\u4ef6"]}),"\n",(0,r.jsxs)(n.li,{children:["ClientProxy\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ClientsModule.register()"})," - \u6ce8\u518c\u540e\u4f7f\u7528"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@Client({ transport: Transport.TCP }) client: ClientProxy;"})," - \u76f4\u63a5\u6ce8\u89e3\u4f7f\u7528"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["adopted by\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/amplication/amplication",children:"amplication/amplication"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u5b9e\u73b0\u4f9d\u8d56 rxjs"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u8003\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://amplication.com/blog/working-with-microservices-with-nestjs",children:"https://amplication.com/blog/working-with-microservices-with-nestjs"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm add rxjs @nestjs/microservices\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NestFactory } from '@nestjs/core';\nimport { Transport, MicroserviceOptions } from '@nestjs/microservices';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {\n    transport: Transport.TCP,\n  });\n  await app.listen();\n}\nbootstrap();\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Controller } from '@nestjs/common';\nimport { MessagePattern } from '@nestjs/microservices';\n\n@Controller()\nexport class MathController {\n  @MessagePattern({ cmd: 'sum' })\n  accumulate(data: number[]): number {\n    return (data || []).reduce((a, b) => a + b);\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Injectable, Scope, Inject } from '@nestjs/common';\nimport { CONTEXT, RequestContext } from '@nestjs/microservices';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class CatsService {\n  constructor(@Inject(CONTEXT) private ctx: RequestContext) {}\n}\n\nexport interface RequestContext<T = any> {\n  pattern: string | Record<string, any>;\n  data: T;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hybrid-application",children:"Hybrid application"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP + Microservice"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const app = await NestFactory.create(AppModule);\nconst microservice = app.connectMicroservice<MicroserviceOptions>({\n  transport: Transport.TCP,\n});\n\nawait app.startAllMicroservices();\nawait app.listen(3001);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.nestjs.com/faq/hybrid-application",children:"https://docs.nestjs.com/faq/hybrid-application"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3354:(e,n,s)=>{var r=s(50959),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,d=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},11527:(e,n,s)=>{e.exports=s(3354)},47214:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var r=s(50959);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);