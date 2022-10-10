"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10855],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&c(e,n,t[n]);return e};const m={title:"Telementry",tags:["Collection"]},d="Telementry",f={unversionedId:"devops/telementry",id:"devops/telementry",title:"Telementry",description:"Collection of how to disable telementry and analytics that default to enable.",source:"@site/../notes/devops/telementry.md",sourceDirName:"devops",slug:"/devops/telementry",permalink:"/notes/devops/telementry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/telementry.md",tags:[{label:"Collection",permalink:"/notes/tags/collection"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"Telementry",tags:["Collection"]},sidebar:"docs",previous:{title:"Status",permalink:"/notes/devops/status"},next:{title:"Web",permalink:"/notes/devops/web/"}},y={},g=[{value:"NextJS",id:"nextjs",level:2},{value:"cubejs",id:"cubejs",level:2},{value:"k0sctl",id:"k0sctl",level:2},{value:"k0s",id:"k0s",level:2},{value:"grafana",id:"grafana",level:2},{value:"argocd",id:"argocd",level:2},{value:"kubed",id:"kubed",level:2},{value:"strapi",id:"strapi",level:2}],k={toc:g};function b(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),c),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"telementry"}),"Telementry"),(0,r.kt)("p",null,"Collection of how to disable telementry and analytics that default to enable."),(0,r.kt)("h2",u({},{id:"nextjs"}),"NextJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://nextjs.org/telemetry"}),"https://nextjs.org/telemetry"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# 1. by env\nexport NEXT_TELEMETRY_DISABLED=1\n# 2. by cli\nnpx next telemetry disable\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://nextjs.org/telemetry"}),"https://nextjs.org/telemetry"))),(0,r.kt)("h2",u({},{id:"cubejs"}),"cubejs"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"new CubejsServer({\n  telemetry: false,\n});\n")),(0,r.kt)("h2",u({},{id:"k0sctl"}),"k0sctl"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"export DISABLE_TELEMETRY=true\nexport DISABLE_UPGRADE_CHECK=true\n")),(0,r.kt)("h2",u({},{id:"k0s"}),"k0s"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="k0s.yaml"',title:'"k0s.yaml"'}),"spec:\n  # api.segment.io\n  telemetry:\n    enabled: true\n")),(0,r.kt)("h2",u({},{id:"grafana"}),"grafana"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini",metastring:'title="grafana.ini"',title:'"grafana.ini"'}),"[analytics]\n# stats.grafana.org 24h\nreporting_enabled=false\n# grafana.org 10m\ncheck_for_updates=false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash",metastring:'title="env"',title:'"env"'}),"export GF_ANALYTICS_REPORTING_ENABLED=false\nexport GF_ANALYTICS_CHECK_FOR_UPDATES=false\n")),(0,r.kt)("h2",u({},{id:"argocd"}),"argocd"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\ndata:\n  # unset tracking id\n  ga.trackingid: ''\n")),(0,r.kt)("h2",u({},{id:"kubed"}),"kubed"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"alose named config-syncer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flags")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove --enable-analytics")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helm")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'}),"enableAnalytics: false\n")),(0,r.kt)("h2",u({},{id:"strapi"}),"strapi"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"telemetry:disable")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm run strapi telemetry:disable\n")),(0,r.kt)("ol",u({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"delete package.json strip.uuid"),(0,r.kt)("li",{parentName:"ol"},"add package.json telemetryDisabled:true")))}b.isMDXComponent=!0}}]);