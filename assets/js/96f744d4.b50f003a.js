"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[14973],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47662:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&u(e,a,t[a]);return e};const m={title:"Strapi"},d="Strapi",k={unversionedId:"service/cms/strapi",id:"service/cms/strapi",title:"Strapi",description:"- strapi/strapi",source:"@site/../notes/service/cms/strapi.md",sourceDirName:"service/cms",slug:"/service/cms/strapi",permalink:"/notes/service/cms/strapi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/cms/strapi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656950348,formattedLastUpdatedAt:"Jul 4, 2022",frontMatter:{title:"Strapi"},sidebar:"docs",previous:{title:"Outline",permalink:"/notes/service/cms/outline"},next:{title:"Wiki.js",permalink:"/notes/service/cms/wikijs"}},h={},g=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"REST",id:"rest",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Midleware",id:"midleware",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"Swagger",id:"swagger",level:3},{value:"S3",id:"s3",level:2},{value:"\u603b\u662f\u8bf7\u6c42 localhost:1337/admin/project-type",id:"\u603b\u662f\u8bf7\u6c42-localhost1337adminproject-type",level:2}],f={toc:g};function N(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},f),u),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",c({},{id:"strapi"}),"Strapi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi/strapi"}),"strapi/strapi"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT+",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi/strapi/blob/86e0cf0f55d58e714a67cf4daee2e59e39974dd9/packages/strapi-admin/ee/LICENSE"}),"EE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"strapi-admin \u5305\u542b\u90e8\u5206 EE \u534f\u8bae - Strapi Enterprise Edition"))),(0,r.kt)("li",{parentName:"ul"},"\u534a\u5f00\u53d1\u534a\u53ef\u89c6\u5316\u64cd\u4f5c\u7684 Headless CMS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u534a\u5f00\u53d1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u3001\u6a21\u578b\u3001\u7ec4\u4ef6\u3001\u63d2\u4ef6\u5747\u53ef\u4ee5\u4ee3\u7801\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u9996\u9009\u64cd\u4f5c\u65b9\u5f0f\u662f\u751f\u6210\u9879\u76ee\u800c\u4e0d\u662f\u4f5c\u4e3a\u670d\u52a1\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u533a\u5206 \u5f00\u53d1\u3001\u9884\u53d1\u3001\u751f\u4ea7 \u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u53ea\u6709\u5f00\u53d1\u73af\u5883\u624d\u80fd\u751f\u6210\u6a21\u578b"))),(0,r.kt)("li",{parentName:"ul"},"\u534a\u53ef\u89c6\u5316",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6a21\u578b\u5b9a\u4e49\u53ef\u89c6\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u7f16\u5c31\u53ef\u89c6\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5b9a\u4e49"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"}),"Roadmap")),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://strapi.io/documentation/3.0.0-beta.x/concepts/file-structure.html"}),"\u6587\u4ef6\u7ed3\u6784")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi/strapi-examples"}),"strapi/strapi-examples")," - \u96c6\u6210\u53c2\u8003"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://medium.com/@alexdevmotion/1cc852fbf504"}),"\u5c06 Strapi \u8f6c\u4e3a Typescript")))),(0,r.kt)("li",{parentName:"ul"},"./config/env/{env}/plugins.js")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn create strapi-app my-strapi --quickstart\ncd my-strapi\n\n#  http://localhost:1337/admin\nnpm run strapi develop --watch-admin\n")),(0,r.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADMIN_PATH")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="src/admin/app.js"',title:'"src/admin/app.js"'}),"export default {\n  config: {\n    // en \u4e0d\u53ef\u4ee5\u79fb\u9664\uff0c\u4f1a\u4f5c\u4e3a\u7b2c\u4e00\u6b21\u6253\u5f00\u65f6\u7684\u9ed8\u8ba4\u8bed\u8a00\n    // @strapi/admin/admin/src/translations/[language-name].json\n    // localStorage['strapi-admin-language']\n    // https://github.com/strapi/strapi/blob/v4.0.0/packages/plugins/i18n/server/constants/iso-locales.json\n    locales: ['zh-Hans', 'en'],\n    // \u81ea\u5b9a\u4e49\u7ffb\u8bd1\n    translations: {\n      fr: {\n        'Auth.form.email.label': 'test',\n        Users: 'Utilisateurs',\n        City: 'CITY (FRENCH)',\n        // Customize the label of the Content Manager table.\n        Id: 'ID french',\n      },\n    },\n  },\n  bootstrap() {},\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html"}),"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/server.html"}),"https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/server.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="./config/server.js"',title:'"./config/server.js"'}),"module.exports = ({ env }) => ({\n  host: env('HOST', '0.0.0.0'),\n  port: env.int('PORT', 1337),\n  app: {\n    keys: env.array('APP_KEYS'),\n  },\n  // \u914d\u7f6e\u540e url \u4f1a\u8fd4\u56de\u5b8c\u6574\u8def\u5f84 - \u6d89\u53ca\u5230\u7b2c\u4e09\u65b9\u65f6\u53ef\u80fd\u8981\u6c42\u5fc5\u987b\u914d\u7f6e - \u4f8b\u5982 \u56de\u8c03\n  // build \u662f\u4f1a\u5199\u5165\u5230 js \u4e2d\uff0c\u65e0\u6cd5\u542f\u52a8\u4fee\u6539\n  // STRAPI_ADMIN_BACKEND_URL\n  url: env('WEBSITE', 'http://127.0.0.1:1337'),\n  // \u662f\u5426\u4fe1\u4efb proxy \u5934\n  proxy: false,\n  emitErrors: false,\n  socket: '/tmp/nginx.socket',\n  cron: {\n    enabled: false,\n    tasks: {},\n  },\n  dir: {\n    public: './public',\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="./config/admin.js"',title:'"./config/admin.js"'}),"module.exports = ({ env }) => ({\n  // \u540e\u53f0\u8def\u5f84\n  url: '/admin',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'tiitle="./config/plugins.js"',tiitle:'"./config/plugins.js"'}),"export default {\n  //\n  graphql: {\n    config: {\n      endpoint: '/graphql',\n      shadowCRUD: true,\n      playgroundAlways: false,\n      depthLimit: 7,\n      amountLimit: 100,\n      apolloServer: {\n        tracing: false,\n      },\n    },\n  },\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# ADMIN \u540e\u53f0\u8def\u5f84 server.url\n# \u4e0d\u914d\u7f6e\u4e3a\u7a7a\negrep -o 'STRAPI_ADMIN_BACKEND_URL[^}]+' build/*.js\n")),(0,r.kt)("h2",c({},{id:"rest"}),"REST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html"}),"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html"))),(0,r.kt)("h2",c({},{id:"plugins"}),"Plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"editor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a markdown"),(0,r.kt)("li",{parentName:"ul"},"strapi-tiptap-editor \u751f\u6210 html"),(0,r.kt)("li",{parentName:"ul"},"strapi-plugin-react-editorjs \u751f\u6210 json"))),(0,r.kt)("li",{parentName:"ul"},"graphql"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/WalkingPizza/strapi-plugin-placeholder"}),"strapi-plugin-placeholder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u73b0\u6709 image \u751f\u6210 placeholder"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u662f\u63d0\u4f9b placeholder \u56fe\u50cf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://plaiceholder.co/docs/usage"}),"https://plaiceholder.co/docs/usage")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi/strapi/tree/master/packages/plugins/documentation"}),"@strapi/plugin-documentation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210 OpenAPIv3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.strapi.io/developer-docs/latest/plugins/graphql.html"}),"@strapi/plugin-graphql"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b GraphQL \u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.strapi.io/developer-docs/latest/plugins/graphql.html"}),"docs")),(0,r.kt)("li",{parentName:"ul"},"sort \u53c2\u6570\u683c\u5f0f ",(0,r.kt)("inlineCode",{parentName:"li"},"<prop>:{desc|asc}")))),(0,r.kt)("li",{parentName:"ul"},"strapi-plugin-slugify",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210/\u7ef4\u62a4 slug"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi-community/strapi-plugin-rest-cache"}),"strapi-plugin-rest-cache"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58 REST \u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 REST \u4e0d\u652f\u6301 GraphQL ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi-community/strapi-plugin-rest-cache/issues/4"}),"#4")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/alexkainzinger/strapi-middleware-upload-plugin-cache"}),"strapi-middleware-upload-plugin-cache"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u4e0a\u4f20\u6587\u4ef6\u6dfb\u52a0\u7f13\u5b58\u5934"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 max-age 60")))),(0,r.kt)("h2",c({},{id:"midleware"}),"Midleware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strapi middlewares",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40"))),(0,r.kt)("li",{parentName:"ul"},"Route middlewares",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c40\u9650\u4e8e\u8def\u7531"))),(0,r.kt)("li",{parentName:"ul"},"ctx ",(0,r.kt)("a",c({parentName:"li"},{href:"https://koajs.com/#context"}),"https://koajs.com/#context"))),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"\u5347\u7ea7"}),"\u5347\u7ea7"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn oudated\nsed '/strapi/s/3.0.0-beta.18.7/3.0.1/g' package.json -i\nyarn\nyarn build\n")),(0,r.kt)("h2",c({},{id:"graphql"}),"GraphQL"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# http://localhost:1337/graphql\nyarn strapi install graphql\n")),(0,r.kt)("h3",c({},{id:"swagger"}),"Swagger"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"yarn strapi install documentation\n")),(0,r.kt)("h2",c({},{id:"s3"}),"S3"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# https://www.npmjs.com/search?q=strapi-provider-upload-\n# \u914d\u7f6e http://localhost:1337/admin/plugins/upload/configurations/development\nyarn add strapi-provider-upload-aws-s3@beta\n# \u652f\u6301\u81ea\u5b9a\u4e49 Endpoint\nyarn add strapi-provider-upload-amazon-s3-endpoint@beta\n\n# Aliyun OSS strapi-provider-upload-oss\n")),(0,r.kt)("h2",c({},{id:"\u603b\u662f\u8bf7\u6c42-localhost1337adminproject-type"}),"\u603b\u662f\u8bf7\u6c42 localhost:1337/admin/project-type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/strapi/strapi/issues/12418#issuecomment-1031915741"}),"https://github.com/strapi/strapi/issues/12418#issuecomment-1031915741"))))}N.isMDXComponent=!0}}]);