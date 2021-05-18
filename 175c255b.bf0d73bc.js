(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),o=(a(0),a(999)),i={id:"matomo",title:"Matomo"},c={unversionedId:"service/analytics/matomo",id:"service/analytics/matomo",isDocsHomePage:!1,title:"Matomo",description:"matomo",source:"@site/notes/service/analytics/matomo.md",slug:"/service/analytics/matomo",permalink:"/notes/service/analytics/matomo",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/analytics/matomo.md",version:"current",sidebar:"docs",previous:{title:"Analytics Awesome",permalink:"/notes/service/analytics/analytics-awesome"},next:{title:"GraphQL Awesome",permalink:"/notes/service/api/graphql-awesome"}},p=[{value:"Tips",id:"tips",children:[]},{value:"\u6d3b\u52a8\u652f\u6301",id:"\u6d3b\u52a8\u652f\u6301",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee",id:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee",children:[]}]},{value:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237",id:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"matomo"},"matomo"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.nginx.com/resources/wiki/start/topics/recipes/piwik/"},"nginx piwik recipes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/piwik/piwik/issues/3318"},"\u81ea\u5b9a\u4e49 logo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://piwik.org/faq/troubleshooting/#faq_121"},"\u901a\u8fc7\u4ee3\u7406\u8fdb\u884c\u5916\u90e8\u8bbf\u95ee"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u63d2\u4ef6"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/piwik/piwik-log-analytics"},"log-analytics"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://piwik.org/docs/log-analytics-tool-how-to/"},"how-to"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  --name matomo matomo\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"; \u5916\u90e8\u7f51\u7edc\u4ee3\u7406\n[proxy]\nhost = proxy      ; Proxy host: the host name of your proxy server (mandatory)\nport =      ; Proxy port: the port that the proxy server listens to. There is no standard default, but 80, 1080, 3128, and 8080 are popular\nusername =      ; Proxy username: optional; if specified, password is mandatory\npassword =      ; Proxy password: optional; if specified, username is mandatory\n")),Object(o.b)("h2",{id:"\u6d3b\u52a8\u652f\u6301"},"\u6d3b\u52a8\u652f\u6301"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Piwik \u652f\u6301 GA \u7684 utm_campaign, utm_medium, utm_source, utm_term ",Object(o.b)("a",{parentName:"li",href:"http://piwik.org/faq/general/faq_119/#faq_119"},"FAQ 119"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-nginx"},'# vhost log format\nlog_format vhosts \'$host $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent"\';\n')),Object(o.b)("p",null,"piwik/config/config.ini.php"),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("h3",{id:"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee"},"\u5173\u95ed\u7f51\u7edc\u8bbf\u95ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://piwik.org/faq/troubleshooting/faq_16646/"},"How do I configure Piwik on a server without Internet?")),Object(o.b)("li",{parentName:"ul"},"\u7981\u7528\u6389 Marketplace \u63d2\u4ef6\u5373\u53ef")),Object(o.b)("h2",{id:"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237"},"\u5982\u4f55\u68c0\u6d4b\u552f\u4e00\u7528\u6237"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://matomo.org/faq/general/faq_21418/"},"https://matomo.org/faq/general/faq_21418/")),Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8de8\u7ad9\u7528\u6237\u72ec\u7acb\u8ddf\u8e2a\uff0c\u53ef\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"enable_fingerprinting_across_websites")," \u5173\u95ed")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"[General]\n# \u4f7f\u7528 https\nassume_secure_protocol=1\n\n")),Object(o.b)("p",null,"Accurate User Detection cross devices: User ID (set in JS and all other clients)\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/matomo-org/matomo/issues/3490"},"https://github.com/matomo-org/matomo/issues/3490")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id"},"https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://matomo.org/faq/how-to/faq_175/"},"https://matomo.org/faq/how-to/faq_175/"),"\nHOW DO I TELL MATOMO TO TRACK UNIQUE VISITORS BASED ON THE VISITOR ID COOKIE, INSTEAD OF USING IP ADDRESS?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Tracker]\ntrust_visitors_cookies = 1\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Valve/fingerprintjs2"},"https://github.com/Valve/fingerprintjs2")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.fingerprintjs.com/pro/integrations/matomo-piwik"},"https://docs.fingerprintjs.com/pro/integrations/matomo-piwik")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  getGlobalThis()?.['_paq']?.push(['trackSiteSearch',\n    `${search.policyProvince ?? ''} ${search.keyword}`,\n    '\u65b0\u51a0\u653f\u7b56\u641c\u7d22',\n    result.length\n  ]);\n")),Object(o.b)("p",null,'_paq.push(["setDomains", ','["',Object(o.b)("em",{parentName:"p"},'.domain1.com", "'),'.domain2.com"]',"]);\n_paq.push(",'["enableCrossDomainLinking"]',");"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.matomo.org/api-reference/tracking-javascript"},"https://developer.matomo.org/api-reference/tracking-javascript")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.matomo.org/guides/tracking-javascript-guide"},"https://developer.matomo.org/guides/tracking-javascript-guide")),Object(o.b)("p",null,"_paq.push(","['trackEvent', category, action, name, value, {dimension1: 'DimensionValue'}]",");\n_paq.push(","['trackSiteSearch', keyword, category, resultsCount, {dimension1: 'DimensionValue'}]",");\n_paq.push(","['trackLink', url, linkType, {dimension1: 'DimensionValue'}]",");\n_paq.push(","['trackGoal', idGoal, customRevenue, {dimension1: 'DimensionValue'}]",");"),Object(o.b)("p",null,"// User has just logged out, we reset the User ID\n_paq.push(","['resetUserId']",");"),Object(o.b)("p",null,"// we also force a new visit to be created for the pageviews after logout\n_paq.push(","['appendToTrackingUrl', 'new_visit=1']","); "),Object(o.b)("p",null,"_paq.push(","['trackPageView']",");"),Object(o.b)("p",null,"// we finally make sure to not again create a new visit afterwards (important for Single Page Applications)\n_paq.push(","['appendToTrackingUrl', '']","); "),Object(o.b)("p",null,"_paq.push(","['trackContentImpression', 'Content Name', 'Content Piece', 'http://www.example.com']",");"),Object(o.b)("p",null,"div.addEventListener('click', function () {\n_paq.push(","['trackContentInteraction', 'tabActivated', 'Content Name', 'Content Piece', 'http://www.example.com']",");\n});"),Object(o.b)("p",null,"Form\n",Object(o.b)("a",{parentName:"p",href:"https://www.form-analytics.net/"},"https://www.form-analytics.net/"),"\n",Object(o.b)("a",{parentName:"p",href:"https://matomo.org/faq/form-analytics/"},"https://matomo.org/faq/form-analytics/")),Object(o.b)("p",null,"trackEvent(category, action, ","[name]",", ","[value]",")"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@datapunt/matomo-tracker-react"},"https://www.npmjs.com/package/@datapunt/matomo-tracker-react")),Object(o.b)("p",null,"matomo nextjs"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54443354/listen-to-route-change-with-next-js-to-use-with-matomo-piwik"},"https://stackoverflow.com/questions/54443354/listen-to-route-change-with-next-js-to-use-with-matomo-piwik")))}l.isMDXComponent=!0},999:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(a),b=n,h=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);