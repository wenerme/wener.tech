"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8990],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4404:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))o.call(t,n)&&m(e,n,t[n]);return e};const c={title:"\u6d4b\u8bd5"},k="\u6d4b\u8bd5",d={unversionedId:"dev/testing/README",id:"dev/testing/README",title:"\u6d4b\u8bd5",description:"- QPS=VU/RT",source:"@site/../notes/dev/testing/README.md",sourceDirName:"dev/testing",slug:"/dev/testing/",permalink:"/notes/dev/testing/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/testing/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{title:"\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u6a21\u677f",permalink:"/notes/dev/tech/template"},next:{title:"ab",permalink:"/notes/dev/testing/ab"}},f={},N=[{value:"\u6d4b\u8bd5\u7c7b\u578b",id:"\u6d4b\u8bd5\u7c7b\u578b",level:2},{value:"avg vs median",id:"avg-vs-median",level:2}],v={toc:N};function y(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&o.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),m),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"\u6d4b\u8bd5"}),"\u6d4b\u8bd5"),(0,r.kt)("admonition",s({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"QPS=VU/RT"),(0,r.kt)("li",{parentName:"ul"},"VU=QPS","*","RT"),(0,r.kt)("li",{parentName:"ul"},"RT=VU/QPS"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QPS=Concurrency/ResponseTime"),(0,r.kt)("li",{parentName:"ul"},"Concurrency=VU - Virtual User"),(0,r.kt)("li",{parentName:"ul"},"ResponseTime=Latency"),(0,r.kt)("li",{parentName:"ul"},"e.g. 1000/100ms = 10 QPS"),(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4e4b:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3000/0.5=6000 VU - \u671f\u671b QPS 3000, latency 0.5ms, \u9700\u8981 6000 \u5e76\u53d1"),(0,r.kt)("li",{parentName:"ul"},"1500/0.5=3000 VU - \u671f\u671b QPS 1500, latency 0.5ms, \u9700\u8981 3000 \u5e76\u53d1")))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DAU - Daily Active User - \u65e5\u6d3b\u8dc3\u7528\u6237 - \u65e5\u6d3b"),(0,r.kt)("li",{parentName:"ul"},"DAU -> UV - \u65e5\u6d3b\u8dc3\u7528\u6237\u63a8\u5bfc\u5e76\u53d1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5cf0\u503c\u65f6\u95f4\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u6b21\u65f6\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u95f4\u9694"))),(0,r.kt)("li",{parentName:"ul"},"UX -> RT - \u7528\u6237\u4f53\u9a8c\u51b3\u5b9a\u54cd\u5e94\u65f6\u95f4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u533a\u5206\u4e1a\u52a1\u573a\u666f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5373\u65f6\u54cd\u5e94(<100ms)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u641c\u7d22\u81ea\u52a8\u8865\u5168\u3001\u6309\u94ae\u70b9\u51fb\u53cd\u9988\u7b49\u4ea4\u4e92"))),(0,r.kt)("li",{parentName:"ul"},"\u6d41\u7545\u54cd\u5e94(100-300ms)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9875\u9762\u548c\u5185\u5bb9\u52a0\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u524d\u7aef\u9759\u6001\uff0c\u7ec4\u4ef6\u52a0\u8f7d\u521d\u59cb\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u4e50\u89c2\u66f4\u65b0"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u63a5\u53d7\u7684\u54cd\u5e94(300-1000ms)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u540e\u53f0\u64cd\u4f5c,\u5982\u63d0\u4ea4\u8868\u5355"))),(0,r.kt)("li",{parentName:"ul"},"\u8fc7\u957f\u54cd\u5e94(>1000ms)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u4f1a\u611f\u5230\u5ef6\u8fdf,\u5f71\u54cd\u4f53\u9a8c\u3002"))))),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u63a5\u53e3\u8003\u8651 100-300ms"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u63a5\u53e3\u8003\u8651 500ms"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"/notes/devops/concept/latency"}),"Latency"))))),(0,r.kt)("h1",s({},{id:"load-test"}),"Load Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"virtual users (VUs) - \u6a21\u62df\u7528\u6237\u5e76\u53d1\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"requests per second - RPS/QPS - \u6a21\u62df\u539f\u59cb\u7684\u8bf7\u6c42\uff0c\u771f\u5b9e\u7684\u541e\u5410\u91cf"),(0,r.kt)("li",{parentName:"ul"},"Latency - \u54cd\u5e94\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"Availability - \u53ef\u7528\u6027"),(0,r.kt)("li",{parentName:"ul"},"SLOs - Service Level Objectives - \u670d\u52a1\u6c34\u5e73\u76ee\u6807"),(0,r.kt)("li",{parentName:"ul"},"SLIs - Service Level Indicators - \u670d\u52a1\u6c34\u5e73\u6307\u6807"),(0,r.kt)("li",{parentName:"ul"},"SLAs - Service Level Agreements - \u670d\u52a1\u6c34\u5e73\u534f\u8bae")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why load test")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u9884\u671f\u6d41\u91cf\u4e0b\u7684\u53ef\u9760\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u53d1\u73b0\u7cfb\u7edf\u95ee\u9898\uff0c\u63a2\u6d4b\u7cfb\u7edf\u4e0a\u7ebf")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://k6.io/docs/testing-guides/api-load-testing/"}),"https://k6.io/docs/testing-guides/api-load-testing/"))),(0,r.kt)("h2",s({},{id:"\u6d4b\u8bd5\u7c7b\u578b"}),"\u6d4b\u8bd5\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breakpoint testing - \u65ad\u70b9\u6d4b\u8bd5 - \u9010\u6b65\u589e\u52a0\u8d1f\uff0c\u53d1\u73b0\u7cfb\u7edf\u7684\u74f6\u9888"),(0,r.kt)("li",{parentName:"ul"},"Load testing - \u5e73\u5747\u8d1f\u8f7d\u6d4b\u8bd5 - \u5178\u578b\u8d1f\u8f7d\u9a8c\u8bc1\u7cfb\u7edf\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"Smoke testing - \u5192\u70df\u6d4b\u8bd5 - \u6700\u5c0f\u8d1f\u8f7d\u9a8c\u8bc1\u7cfb\u7edf\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"Soak testing - \u6d78\u6ce1\u6d4b\u8bd5 - \u957f\u65f6\u95f4\u8d1f\u8f7d\uff0c\u7cfb\u7edf\u5728\u4ec0\u4e48\u8282\u70b9\u51fa\u73b0\u964d\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"Spike testing - \u5cf0\u503c\u6d4b\u8bd5 - \u7a81\u53d1\u8d1f\u8f7d\u9a8c\u8bc1\u7cfb\u7edf\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"Stress testing- \u538b\u529b\u6d4b\u8bd5 - \u5cf0\u503c\u8d1f\u8f7d\u9a8c\u8bc1\u7cfb\u7edf\u529f\u80fd")),(0,r.kt)("h2",s({},{id:"avg-vs-median"}),"avg vs median"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e73\u5747\u5ef6\u65f6(avg)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u7684\u5e73\u5747\u54cd\u5e94\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u6613\u53d7\u6781\u503c\u5f71\u54cd"))),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u4f4d\u6570\u5ef6\u65f6(median)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5178\u578b\u7684\u54cd\u5e94\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u5f02\u5e38\u60c5\u51b5\u7684\u5e72\u6270")))))}y.isMDXComponent=!0}}]);