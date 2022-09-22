"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55098],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),l=["components"],u={title:"stun"},i="stun",p={unversionedId:"service/network/stun",id:"service/network/stun",title:"stun",description:"- DNS SRV stun.udp.example.com",source:"@site/../notes/service/network/stun.md",sourceDirName:"service/network",slug:"/service/network/stun",permalink:"/notes/service/network/stun",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/network/stun.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"stun"},sidebar:"docs",previous:{title:"strongSwan",permalink:"/notes/service/network/strongswan"},next:{title:"tailscale",permalink:"/notes/service/network/tailscale"}},s={},c=[{value:"Knonw STUN Server",id:"knonw-stun-server",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stun"},"stun"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DNS SRV ",(0,o.kt)("inlineCode",{parentName:"li"},"_stun._udp.example.com")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/1043752"},"iptable matching rule for STUN/TURN traffic")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pion/turn"},"pion/turn"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MIT, Golang STUN/TURN Client/Server"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/coturn/coturn"},"coturn/coturn"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BSD-3, C TURN/STUN Server")))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"port"),(0,o.kt)("th",{parentName:"tr",align:null},"desc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3478/udp"),(0,o.kt)("td",{parentName:"tr",align:null},"STUN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3478/tcp"),(0,o.kt)("td",{parentName:"tr",align:null},"STUN/TLS - de-multiplex")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5349/tcp"),(0,o.kt)("td",{parentName:"tr",align:null},"TLS")))),(0,o.kt)("h2",{id:"knonw-stun-server"},"Knonw STUN Server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"stun.stunprotocol.org:3478"),(0,o.kt)("li",{parentName:"ul"},"stun.zoiper.com"),(0,o.kt)("li",{parentName:"ul"},"stun.linphone.org"),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"voip-info ",(0,o.kt)("a",{parentName:"li",href:"https://www.voip-info.org/stun/"},"stun"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dig srv _stun._udp.stun.linphone.org\n# _stun._udp.stun.linphone.org. 2527 IN   SRV     0 100 3478 stun.linphone.org.\n# _stun._udp.stun.linphone.org. 2527 IN   SRV     10 100 3478 sip1.linphone.org.\n")))}f.isMDXComponent=!0}}]);