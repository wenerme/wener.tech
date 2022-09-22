"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45282],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return b}});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e};const d={title:"Pi Hole"},m="Pi Hole",h={unversionedId:"service/dns/pihole",id:"service/dns/pihole",title:"Pi Hole",description:"- pi-hole/pi-hole \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/dns/pihole.md",sourceDirName:"service/dns",slug:"/service/dns/pihole",permalink:"/notes/service/dns/pihole",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/dns/pihole.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1647984068,formattedLastUpdatedAt:"Mar 22, 2022",frontMatter:{title:"Pi Hole"},sidebar:"docs",previous:{title:"Domain",permalink:"/notes/service/dns/domain"},next:{title:"PowerDNS",permalink:"/notes/service/dns/powerdns/"}},f={},b=[{value:"internal",id:"internal",level:2},{value:"\u907f\u514d\u89e3\u6790 local",id:"\u907f\u514d\u89e3\u6790-local",level:2}],v={toc:b};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),s),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"pi-hole"}),"Pi Hole"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pi-hole/pi-hole/"}),"pi-hole/pi-hole")," \u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e DNS \u7684 AD/Tracker Block"))),(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'cat <<YAML > docker-compose.yaml\nversion: "3"\n\n# More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/\nservices:\n  pihole:\n    container_name: pihole\n    image: pihole/pihole:latest\n    ports:\n      - "53:53/tcp"\n      - "53:53/udp"\n      - "67:67/udp"\n      - "80:80/tcp"\n      - "443:443/tcp"\n    environment:\n      TZ: \'America/Chicago\'\n      WEBPASSWORD: \'password\' # \u4e0d\u8bbe\u7f6e\u5219\u4e3a\u968f\u673a\n    # Volumes store your data between container upgrades\n    volumes:\n      - \'./pihole/etc:/etc/pihole/\'\n      - \'./pihole/dnsmasq.d:/etc/dnsmasq.d/\'\n    # Recommended but not required (DHCP needs NET_ADMIN)\n    # https://github.com/pi-hole/docker-pi-hole#note-on-capabilities\n    cap_add:\n      - NET_ADMIN\n    restart: unless-stopped\nYAML\ndocker-compose up --detach\n\n# docker \u76f4\u63a5\u542f\u52a8\n# registry.cn-hongkong.aliyuncs.com/cmi\ndocker run -d --restart always\\\n  -e TZ=Asia/Shanghai \\\n  -e WEBPASSWORD=password \\\n  -v $PWD/pihole/etc:/etc/pihole \\\n  -v $PWD/pihole/dnsmasq.d:/etc/dnsmasq.d \\\n  -p 53:53 -p 53:53/udp -p 67:67/udp -p 80:80 -p 443:443 \\\n  --name pihole pihole/pihole:latest\n')),(0,r.kt)("h2",u({},{id:"internal"}),"internal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dnsmasq"),(0,r.kt)("li",{parentName:"ul"},"lighttpd"),(0,r.kt)("li",{parentName:"ul"},"php"),(0,r.kt)("li",{parentName:"ul"},"AdminLTE"),(0,r.kt)("li",{parentName:"ul"},"sqlite3"),(0,r.kt)("li",{parentName:"ul"},"pihole-FTL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 dnsmasq = \u6838\u5fc3 dns+dhcp+api \u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/pi-hole/FTL"}),"https://github.com/pi-hole/FTL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"telnet 127.0.0.1 471"))))),(0,r.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",u({},{id:"\u907f\u514d\u89e3\u6790-local"}),"\u907f\u514d\u89e3\u6790 local"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"/etc/dnsmasq.d/02-pihole.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"local=/lan/\nlocal=/local/\nlocal=/internal/\n")))}y.isMDXComponent=!0}}]);