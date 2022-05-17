"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[65552],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Home Assistant"},l=void 0,m={unversionedId:"hardware/iot/home-assistant",id:"hardware/iot/home-assistant",title:"Home Assistant",description:"- home-assistant/core",source:"@site/notes/hardware/iot/home-assistant.md",sourceDirName:"hardware/iot",slug:"/hardware/iot/home-assistant",permalink:"/notes/hardware/iot/home-assistant",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/iot/home-assistant.md",tags:[],version:"current",frontMatter:{title:"Home Assistant"},sidebar:"docs",previous:{title:"IoT",permalink:"/notes/hardware/iot/"},next:{title:"\u5185\u5b58",permalink:"/notes/hardware/memory"}},u={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Home Assistant vs. Home Assistant Core",id:"home-assistant-vs-home-assistant-core",level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/home-assistant/core"},"home-assistant/core"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Python3 + SQLite3"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.home-assistant.io/docs/architecture_index/"},"\u67b6\u6784")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://demo.home-assistant.io/"},"Demo")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/docs/installation/"},"\u5b89\u88c5")),(0,s.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"http 8123"),(0,s.kt)("li",{parentName:"ul"},"HomeKit \u6865\u63a5 51828")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# try\ndocker run --rm -it \\\n  -e TZ=Asia/Shanghai \\\n  --net=host \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n\n# run\ndocker run -d --restart always \\\n  -e TZ=Asia/Shanghai \\\n  -p 8123:8123 \\\n  -v /data/home-assistant/config:/config \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n')),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/docs/configuration/"},"https://www.home-assistant.io/docs/configuration/")),(0,s.kt)("li",{parentName:"ul"},"/config - docker/Home Assistant"),(0,s.kt)("li",{parentName:"ul"},"~/.homeassistant - \u76f4\u63a5\u5b89\u88c5\u65f6\u7684\u76ee\u5f55 - macOS/Linux")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"homeassistant:\n  name: Home\n  # \u4f4d\u7f6e\n  latitude: 32.87336\n  longitude: 117.22743\n  elevation: 430\n  # \u5355\u4f4d\n  unit_system: metric\n  temperature_unit: C\n  time_zone: Asia/Shanghai\n  external_url: 'https://www.example.com'\n  internal_url: 'http://homeassistant.local:8123'\n  allowlist_external_dirs:\n    - /usr/var/dumping-ground\n    - /tmp\n  allowlist_external_urls:\n    - 'http://images.com/image1.png'\n  media_dirs:\n    media: /media\n    recordings: /mnt/recordings\n\n  auth_providers:\n    - type: homeassistant\n    - type: legacy_api_password\n      api_password: !secret http_password\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - fd00::/8\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 192.168.10.0/24\n        - fd00::/8\n      trusted_users:\n        192.168.0.1: user1_id\n        192.168.0.0/24:\n          - user1_id\n          - user2_id\n        'fd00::/8':\n          - user1_id\n          - group: system-users\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 127.0.0.1\n        - ::1\n      allow_bypass_login: true\n\n    - type: command_line\n      command: /absolute/path/to/command\n      # Optionally, define a list of arguments to pass to the command.\n      #args: [\"--first\", \"--second\"]\n      # Uncomment to enable parsing of meta variables (see below).\n      #meta: true\n")),(0,s.kt)("h1",{id:"faq"},"FAQ"),(0,s.kt)("h2",{id:"home-assistant-vs-home-assistant-core"},"Home Assistant vs. Home Assistant Core"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Core",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Python \u5e94\u7528"),(0,s.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u5b89\u88c5"))),(0,s.kt)("li",{parentName:"ul"},"Home Assistant",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Core + \u5de5\u5177"),(0,s.kt)("li",{parentName:"ul"},"\u4e00\u822c\u901a\u8fc7\u7cfb\u7edf\u955c\u50cf\u5b89\u88c5"),(0,s.kt)("li",{parentName:"ul"},"\u652f\u6301\u6269\u5c55"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/hassio/installation/"},"\u5b89\u88c5")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.home-assistant.io/faq/ha-vs-hassio/"},"Home Assistant vs. Home Assistant Core"))))}d.isMDXComponent=!0}}]);