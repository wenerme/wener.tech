"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26836],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77232:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return w}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={tags:["Dev"]},b="NestJS Dev",v={unversionedId:"web/framework/nestjs/nestjs-dev",id:"web/framework/nestjs/nestjs-dev",title:"NestJS Dev",description:"- Module",source:"@site/../notes/web/framework/nestjs/nestjs-dev.md",sourceDirName:"web/framework/nestjs",slug:"/web/framework/nestjs/dev",permalink:"/notes/web/framework/nestjs/dev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/nestjs/nestjs-dev.md",tags:[{label:"Dev",permalink:"/notes/tags/dev"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{tags:["Dev"]},sidebar:"docs",previous:{title:"NestJS Awesome",permalink:"/notes/web/framework/nestjs/awesome"},next:{title:"NestJS FAQ",permalink:"/notes/web/framework/nestjs/faq"}},y={},w=[],O={toc:w},g="wrapper";function k(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(g,f(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"nestjs-dev"}),"NestJS Dev"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Module",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"register",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6a21\u5757\u914d\u7f6e"))),(0,n.kt)("li",{parentName:"ul"},"forRoot",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e 1 \u6b21\u590d\u7528"))),(0,n.kt)("li",{parentName:"ul"},"forFeature",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u6709 global \u6a21\u5757\u7684\u65f6\u5019\uff0c\u9488\u5bf9\u5b50\u6a21\u5757\u6ce8\u5165\u7279\u5b9a\u5185\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a ORM \u6ce8\u5165 Repository"))),(0,n.kt)("li",{parentName:"ul"},"registerAsync"),(0,n.kt)("li",{parentName:"ul"},"forRootAsync"),(0,n.kt)("li",{parentName:"ul"},"forFeatureAsync")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-ts"}),"// \u652f\u6301\u914d\u7f6e\u7684\u6a21\u5757 - \u751f\u6210 register, registerAsync\nexport const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =\n  new ConfigurableModuleBuilder<ConfigModuleOptions>().build();\n@Module({\n  providers: [ConfigService],\n  exports: [ConfigService],\n})\nexport class ConfigModule extends ConfigurableModuleClass {}\n")))}k.isMDXComponent=!0}}]);