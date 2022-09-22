"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38610],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return w}});var a=n(49613),r=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&u(e,n,t[n]);return e};const c={title:"Home Assistant"},d="Home Assistant",h={unversionedId:"hardware/iot/home-assistant",id:"hardware/iot/home-assistant",title:"Home Assistant",description:"- home-assistant/core",source:"@site/../notes/hardware/iot/home-assistant.md",sourceDirName:"hardware/iot",slug:"/hardware/iot/home-assistant",permalink:"/notes/hardware/iot/home-assistant",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/iot/home-assistant.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"Home Assistant"},sidebar:"docs",previous:{title:"IoT",permalink:"/notes/hardware/iot/"},next:{title:"IoT Glossary",permalink:"/notes/hardware/iot/glossary"}},f={},w=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Home Assistant vs. Home Assistant Core",id:"home-assistant-vs-home-assistant-core",level:2}],y={toc:w};function k(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},y),u),s(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"home-assistant"}),"Home Assistant"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/home-assistant/core"}),"home-assistant/core"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python3 + SQLite3"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://developers.home-assistant.io/docs/architecture_index/"}),"\u67b6\u6784")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://demo.home-assistant.io/"}),"Demo")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.home-assistant.io/docs/installation/"}),"\u5b89\u88c5")),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"http 8123"),(0,a.kt)("li",{parentName:"ul"},"HomeKit \u6865\u63a5 51828")))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# try\ndocker run --rm -it \\\n  -e TZ=Asia/Shanghai \\\n  --net=host \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n\n# run\ndocker run -d --restart always \\\n  -e TZ=Asia/Shanghai \\\n  -p 8123:8123 \\\n  -v /data/home-assistant/config:/config \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n')),(0,a.kt)("h2",p({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.home-assistant.io/docs/configuration/"}),"https://www.home-assistant.io/docs/configuration/")),(0,a.kt)("li",{parentName:"ul"},"/config - docker/Home Assistant"),(0,a.kt)("li",{parentName:"ul"},"~/.homeassistant - \u76f4\u63a5\u5b89\u88c5\u65f6\u7684\u76ee\u5f55 - macOS/Linux")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"homeassistant:\n  name: Home\n  # \u4f4d\u7f6e\n  latitude: 32.87336\n  longitude: 117.22743\n  elevation: 430\n  # \u5355\u4f4d\n  unit_system: metric\n  temperature_unit: C\n  time_zone: Asia/Shanghai\n  external_url: 'https://www.example.com'\n  internal_url: 'http://homeassistant.local:8123'\n  allowlist_external_dirs:\n    - /usr/var/dumping-ground\n    - /tmp\n  allowlist_external_urls:\n    - 'http://images.com/image1.png'\n  media_dirs:\n    media: /media\n    recordings: /mnt/recordings\n\n  auth_providers:\n    - type: homeassistant\n    - type: legacy_api_password\n      api_password: !secret http_password\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - fd00::/8\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 192.168.10.0/24\n        - fd00::/8\n      trusted_users:\n        192.168.0.1: user1_id\n        192.168.0.0/24:\n          - user1_id\n          - user2_id\n        'fd00::/8':\n          - user1_id\n          - group: system-users\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 127.0.0.1\n        - ::1\n      allow_bypass_login: true\n\n    - type: command_line\n      command: /absolute/path/to/command\n      # Optionally, define a list of arguments to pass to the command.\n      #args: [\"--first\", \"--second\"]\n      # Uncomment to enable parsing of meta variables (see below).\n      #meta: true\n")),(0,a.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",p({},{id:"home-assistant-vs-home-assistant-core"}),"Home Assistant vs. Home Assistant Core"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python \u5e94\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u5b89\u88c5"))),(0,a.kt)("li",{parentName:"ul"},"Home Assistant",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Core + \u5de5\u5177"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u901a\u8fc7\u7cfb\u7edf\u955c\u50cf\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u6269\u5c55"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.home-assistant.io/hassio/installation/"}),"\u5b89\u88c5")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.home-assistant.io/faq/ha-vs-hassio/"}),"Home Assistant vs. Home Assistant Core"))))}k.isMDXComponent=!0}}]);