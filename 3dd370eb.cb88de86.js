(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),b=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||p[u]||c;return n?r.a.createElement(d,o(o({ref:t},m),{},{components:n})):r.a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<c;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},313:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),c=(n(0),n(1096)),i={title:"acme-dns"},o={unversionedId:"service/dns/acme-dns",id:"service/dns/acme-dns",isDocsHomePage:!1,title:"acme-dns",description:"- joohoi/acme-dns \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/service/dns/acme-dns.md",slug:"/service/dns/acme-dns",permalink:"/notes/service/dns/acme-dns",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/acme-dns.md",version:"current",sidebar:"docs",previous:{title:"sipp",permalink:"/notes/service/telecom/sip/sipp"},next:{title:"dnsmasq",permalink:"/notes/service/dns/dnsmasq"}},l=[{value:"cert-manager",id:"cert-manager",children:[]}],m={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/joohoi/acme-dns"},"joohoi/acme-dns")," \u662f\u4ec0\u4e48\uff1f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e13\u95e8\u7528\u4e8e\u8f85\u52a9\u7533\u8bf7 cert \u7684 dns \u670d\u52a1 - \u63d0\u4f9b HTTP \u63a5\u53e3"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u73b0\u6709 ",Object(c.b)("inlineCode",{parentName:"li"},"_acme-challenge.domain.tld.")," CNAME \u5230\u4ece\u8be5\u670d\u52a1\u7533\u8bf7\u7684\u4e8c\u7ea7\u57df\u540d - \u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},"abc.auth.example.org")),Object(c.b)("li",{parentName:"ul"},"\u907f\u514d\u64cd\u4f5c\u73b0\u6709 DNS \u670d\u52a1"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301 selfhost - acme-dns.io \u56fd\u5185\u4e0d\u4e00\u5b9a\u80fd\u8bbf\u95ee"),Object(c.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5355\u4e2a\u57df\u540d\u9700\u8981\u8bc1\u4e66\uff0c\u57df\u540d\u4f7f\u7528\u7684\u5916\u90e8 DNS \u670d\u52a1\u4e14\u6307\u5411\u7684\u5185\u90e8 IP"),Object(c.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u6cdb\u57df\u540d\u8bc1\u4e66"))),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u5ba2\u6237\u7aef",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/Neilpang/acme.sh"},"acme.sh")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/webprofusion/certify"},"Certify The Web")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/jetstack/cert-manager"},"cert-manager")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/xenolf/lego"},"Lego")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/rmbolger/Posh-ACME"},"Posh-ACME")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/komuw/sewer"},"Sewer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/containous/traefik"},"Traefik")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.win-acme.com"},"Windows ACME Simple (WACS)"))))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"\u4e00\u4e2a\u8d26\u53f7\u5bf9\u5e94\u4e00\u4e2a\u57df\u540d",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u4e00\u4e2a\u8d26\u53f7\u53ea\u80fd\u5904\u7406\u4e24\u4e2a record - ",Object(c.b)("inlineCode",{parentName:"li"},"domain.tld"),",",Object(c.b)("inlineCode",{parentName:"li"},"*.domain.tld")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u4e0d\u80fd")," \u5171\u4eab\u8d26\u53f7\u7ed9\u4e0d\u540c\u57df\u540d"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/joohoi/acme-dns/issues/110"},"#110")," Allow more than two records?"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/joohoi/acme-dns/issues/233"},"#233")," Register multiple domains under single login?")))))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl -v -X POST https://auth.acme-dns.io/register\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "6f449871-18d4-4239-851c-8c221d56750f",\n  "password": "1lBTiQ5MowHC1aJ1QmAYJh9PEe5dljFTEk0zXXJv",\n  "fulldomain": "96afb9f9-93c2-4d3c-ad4a-e2ebfbf14f7b.auth.acme-dns.io",\n  "subdomain": "96afb9f9-93c2-4d3c-ad4a-e2ebfbf14f7b",\n  "allowfrom": []\n}\n')),Object(c.b)("h2",{id:"cert-manager"},"cert-manager"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: example-issuer\nspec:\n  acme:\n    solvers:\n      - dns01:\n          acmeDNS:\n            host: https://acme.example.com\n            accountSecretRef:\n              name: acme-dns\n              key: acme-dns.json\n")))}b.isMDXComponent=!0}}]);