"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10855],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={title:"Telementry",tags:["Collection"]},d="Telementry",k={unversionedId:"devops/telementry",id:"devops/telementry",title:"Telementry",description:"Collection of how to disable telementry and analytics that default to enable.",source:"@site/../notes/devops/telementry.md",sourceDirName:"devops",slug:"/devops/telementry",permalink:"/notes/devops/telementry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/telementry.md",tags:[{label:"Collection",permalink:"/notes/tags/collection"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693122196,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{title:"Telementry",tags:["Collection"]},sidebar:"docs",previous:{title:"Status",permalink:"/notes/devops/status"},next:{title:"\u7cfb\u7edf\u5347\u7ea7",permalink:"/notes/devops/upgrade"}},g={},f=[{value:"HTTP DNT",id:"http-dnt",level:2},{value:"infisical",id:"infisical",level:2},{value:"ferretdb",id:"ferretdb",level:2},{value:"Minio",id:"minio",level:2},{value:"Homebrew",id:"homebrew",level:2},{value:"NuxtJS",id:"nuxtjs",level:2},{value:"NextJS",id:"nextjs",level:2},{value:"cubejs",id:"cubejs",level:2},{value:"yarn",id:"yarn",level:2},{value:"k0sctl",id:"k0sctl",level:2},{value:"k0s",id:"k0s",level:2},{value:"grafana",id:"grafana",level:2},{value:"argocd",id:"argocd",level:2},{value:"kubed",id:"kubed",level:2},{value:"strapi",id:"strapi",level:2},{value:"openobserve",id:"openobserve",level:2},{value:"openpolicyagent",id:"openpolicyagent",level:2}],y={toc:f};function b(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},y),u),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"telementry"}),"Telementry"),(0,a.kt)("p",null,"Collection of how to disable telementry and analytics that default to enable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"env")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# ========================\n# Dev/Frontend/Backend\n# ========================\n# Homebrew\nHOMEBREW_NO_ANALYTICS=1\n# NextJS\nNEXT_TELEMETRY_DISABLED=1\n# NuxtJS\nNUXT_TELEMETRY_DISABLED=1\n\n# ========================\n# Service\n# ========================\n# MinIO\nMINIO_UPDATE=off\n\n# K0S\nDISABLE_TELEMETRY=true\nDISABLE_UPGRADE_CHECK=true\n\n# ferretdb\nFERRETDB_TELEMETRY=disable\nDO_NOT_TRACK=true\n\n# OpenObserve\nZO_TELEMETRY=false\n\n# grafana\nGF_ANALYTICS_REPORTING_ENABLED=false\nGF_ANALYTICS_CHECK_FOR_UPDATES=false\n")),(0,a.kt)("h2",c({},{id:"http-dnt"}),"HTTP DNT"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"DNT: 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"console.log(navigator.doNotTrack);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT"}),"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT")),(0,a.kt)("li",{parentName:"ul"},"wikipedia ",(0,a.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Do_Not_Track"}),"Do Not Track"))),(0,a.kt)("h2",c({},{id:"infisical"}),"infisical"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"export TELEMETRY_ENABLED=false\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/Infisical/infisical"}),"infisical"))),(0,a.kt)("h2",c({},{id:"ferretdb"}),"ferretdb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--telemetry=false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db.disableFreeMonitoring()"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"FERRETDB_TELEMETRY=disable\nDO_NOT_TRACK=true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://docs.ferretdb.io/telemetry/"}),"https://docs.ferretdb.io/telemetry/"))),(0,a.kt)("h2",c({},{id:"minio"}),"Minio"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"MINIO_UPDATE=off\n")),(0,a.kt)("h2",c({},{id:"homebrew"}),"Homebrew"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"export HOMEBREW_NO_ANALYTICS=1\n")),(0,a.kt)("h2",c({},{id:"nuxtjs"}),"NuxtJS"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"export NUXT_TELEMETRY_DISABLED=1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npx nuxt telemetry disable\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'}),"export default {\n  telemetry: false,\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://v2.nuxt.com/docs/configuration-glossary/configuration-telemetry/"}),"https://v2.nuxt.com/docs/configuration-glossary/configuration-telemetry/"))),(0,a.kt)("h2",c({},{id:"nextjs"}),"NextJS"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# 1. by env\nexport NEXT_TELEMETRY_DISABLED=1\n# 2. by cli\nnpx next telemetry disable\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://nextjs.org/telemetry"}),"https://nextjs.org/telemetry"))),(0,a.kt)("h2",c({},{id:"cubejs"}),"cubejs"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"new CubejsServer({\n  telemetry: false,\n});\n")),(0,a.kt)("h2",c({},{id:"yarn"}),"yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# for global\nyarn config set --home enableTelemetry 0\n# for project\nyarn config set enableTelemetry 0\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://yarnpkg.com/advanced/telemetry"}),"https://yarnpkg.com/advanced/telemetry"))),(0,a.kt)("h2",c({},{id:"k0sctl"}),"k0sctl"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"export DISABLE_TELEMETRY=true\nexport DISABLE_UPGRADE_CHECK=true\n")),(0,a.kt)("h2",c({},{id:"k0s"}),"k0s"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:'title="k0s.yaml"',title:'"k0s.yaml"'}),"spec:\n  # api.segment.io\n  telemetry:\n    enabled: true\n")),(0,a.kt)("h2",c({},{id:"grafana"}),"grafana"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title="grafana.ini"',title:'"grafana.ini"'}),"[analytics]\n# stats.grafana.org 24h\nreporting_enabled=false\n# grafana.org 10m\ncheck_for_updates=false\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash",metastring:'title="env"',title:'"env"'}),"export GF_ANALYTICS_REPORTING_ENABLED=false\nexport GF_ANALYTICS_CHECK_FOR_UPDATES=false\n")),(0,a.kt)("h2",c({},{id:"argocd"}),"argocd"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\ndata:\n  # unset tracking id\n  ga.trackingid: ''\n")),(0,a.kt)("h2",c({},{id:"kubed"}),"kubed"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"alose named config-syncer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Flags")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"remove --enable-analytics")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'}),"enableAnalytics: false\n")),(0,a.kt)("h2",c({},{id:"strapi"}),"strapi"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"telemetry:disable")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"npm run strapi telemetry:disable\n")),(0,a.kt)("ol",c({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"delete package.json strip.uuid"),(0,a.kt)("li",{parentName:"ol"},"add package.json telemetryDisabled:true")),(0,a.kt)("h2",c({},{id:"openobserve"}),"openobserve"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ZO_TELEMETRY=false\n")),(0,a.kt)("h2",c({},{id:"openpolicyagent"}),"openpolicyagent"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"--disable-telemetry\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OPA_TELEMETRY_SERVICE_URL=",(0,a.kt)("a",c({parentName:"li"},{href:"https://telemetry.openpolicyagent.org"}),"https://telemetry.openpolicyagent.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ON by-default"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-http"}),'POST /v1/version HTTP/1.1\nHost: telemetry.openpolicyagent.org\nContent-Type: application/json\nUser-Agent: "Open Policy Agent/v0.12.3 (darwin, amd64)"\n\n{\n  "id": "08c1d850-6065-478a-b9b5-a8f9f464ad33",\n  "version": "v0.12.3",\n  "heap_usage_bytes": "596000"\n}\n')))}b.isMDXComponent=!0}}]);