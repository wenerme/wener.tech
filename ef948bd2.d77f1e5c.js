(window.webpackJsonp=window.webpackJsonp||[]).push([[982],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),s=(n(0),n(1114)),i={title:"Home Assistant",hide_title:!0},o={unversionedId:"hardware/iot/home-assistant",id:"hardware/iot/home-assistant",isDocsHomePage:!1,title:"Home Assistant",description:"Home Assistant",source:"@site/notes/hardware/iot/home-assistant.md",slug:"/hardware/iot/home-assistant",permalink:"/notes/hardware/iot/home-assistant",editUrl:"https://github.com/wenerme/wener/edit/master/notes/hardware/iot/home-assistant.md",version:"current",sidebar:"docs",previous:{title:"\u7535\u6c60",permalink:"/notes/hardware/battery/battery"},next:{title:"RISC-V",permalink:"/notes/hardware/arch/riscv/riscv"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Home Assistant vs. Home Assistant Core",id:"home-assistant-vs-home-assistant-core",children:[]}],c={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"home-assistant"},"Home Assistant"),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/home-assistant/core"},"home-assistant/core"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Python3 + SQLite3"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://developers.home-assistant.io/docs/architecture_index/"},"\u67b6\u6784")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://demo.home-assistant.io/"},"Demo")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.home-assistant.io/docs/installation/"},"\u5b89\u88c5")),Object(s.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"http 8123"),Object(s.b)("li",{parentName:"ul"},"HomeKit \u6865\u63a5 51828")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'# try\ndocker run --rm -it \\\n  -e TZ=Asia/Shanghai \\\n  --net=host \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n\n# run\ndocker run -d --restart always \\\n  -e TZ=Asia/Shanghai \\\n  -p 8123:8123 \\\n  -v /data/home-assistant/config:/config \\\n  --name="homeassistant" homeassistant/home-assistant:stable\n')),Object(s.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.home-assistant.io/docs/configuration/"},"https://www.home-assistant.io/docs/configuration/")),Object(s.b)("li",{parentName:"ul"},"/config - docker/Home Assistant"),Object(s.b)("li",{parentName:"ul"},"~/.homeassistant - \u76f4\u63a5\u5b89\u88c5\u65f6\u7684\u76ee\u5f55 - macOS/Linux")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'homeassistant:\n  name: Home\n  # \u4f4d\u7f6e\n  latitude: 32.87336\n  longitude: 117.22743\n  elevation: 430\n  # \u5355\u4f4d\n  unit_system: metric\n  temperature_unit: C\n  time_zone: Asia/Shanghai\n  external_url: "https://www.example.com"\n  internal_url: "http://homeassistant.local:8123"\n  allowlist_external_dirs:\n    - /usr/var/dumping-ground\n    - /tmp\n  allowlist_external_urls:\n    - "http://images.com/image1.png"\n  media_dirs:\n    media: /media\n    recordings: /mnt/recordings\n\n  auth_providers:\n    - type: homeassistant\n    - type: legacy_api_password\n      api_password: !secret http_password\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - fd00::/8\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 192.168.10.0/24\n        - fd00::/8\n      trusted_users:\n        192.168.0.1: user1_id\n        192.168.0.0/24:\n          - user1_id\n          - user2_id\n        "fd00::/8":\n          - user1_id\n          - group: system-users\n\n    - type: trusted_networks\n      trusted_networks:\n        - 192.168.0.0/24\n        - 127.0.0.1\n        - ::1\n      allow_bypass_login: true\n\n    - type: command_line\n      command: /absolute/path/to/command\n      # Optionally, define a list of arguments to pass to the command.\n      #args: ["--first", "--second"]\n      # Uncomment to enable parsing of meta variables (see below).\n      #meta: true\n')),Object(s.b)("h1",{id:"faq"},"FAQ"),Object(s.b)("h2",{id:"home-assistant-vs-home-assistant-core"},"Home Assistant vs. Home Assistant Core"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Core",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Python \u5e94\u7528"),Object(s.b)("li",{parentName:"ul"},"\u72ec\u7acb\u5b89\u88c5"))),Object(s.b)("li",{parentName:"ul"},"Home Assistant",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Core + \u5de5\u5177"),Object(s.b)("li",{parentName:"ul"},"\u4e00\u822c\u901a\u8fc7\u7cfb\u7edf\u955c\u50cf\u5b89\u88c5"),Object(s.b)("li",{parentName:"ul"},"\u652f\u6301\u6269\u5c55"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.home-assistant.io/hassio/installation/"},"\u5b89\u88c5")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.home-assistant.io/faq/ha-vs-hassio/"},"Home Assistant vs. Home Assistant Core"))))}m.isMDXComponent=!0},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||s;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);