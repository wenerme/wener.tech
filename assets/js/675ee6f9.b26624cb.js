"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54622],{49613:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(59496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11635:function(e,n,r){r.r(n),r.d(n,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return d}});var t=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&s(e,r,n[r]);if(l)for(var r of l(n))u.call(n,r)&&s(e,r,n[r]);return e};const m={title:"machinery"},f="machinery",g={unversionedId:"languages/go/lib/machinery",id:"languages/go/lib/machinery",title:"machinery",description:"- RichardKnop/machinery \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/languages/go/lib/machinery.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/machinery",permalink:"/notes/languages/go/lib/machinery",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/machinery.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1628355009,formattedLastUpdatedAt:"Aug 7, 2021",frontMatter:{title:"machinery"},sidebar:"docs",previous:{title:"kratos",permalink:"/notes/languages/go/lib/kratos"},next:{title:"mapstructure",permalink:"/notes/languages/go/lib/mapstructure"}},y={},d=[],b={toc:d};function h(e){var n,r=e,{components:a}=r,s=((e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&u.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(n=p(p({},b),s),i(n,o({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("h1",p({},{id:"machinery"}),"machinery"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",p({parentName:"li"},{href:"https://github.com/RichardKnop/machinery"}),"RichardKnop/machinery")," \u662f\u4ec0\u4e48\uff1f",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4efb\u52a1\u961f\u5217"),(0,t.kt)("li",{parentName:"ul"},"Lock - Redis"),(0,t.kt)("li",{parentName:"ul"},"Broker - AMQP, Redis"),(0,t.kt)("li",{parentName:"ul"},"ResultBackend - Redis, Memcache, AMQP, MongoDB")))),(0,t.kt)("pre",null,(0,t.kt)("code",p({parentName:"pre"},{className:"language-go"}),'func Add(args ...int64) (int64, error) {\n  sum := int64(0)\n  for _, arg := range args {\n    sum += arg\n  }\n  return sum, nil\n}\n\nfunc Multiply(args ...int64) (int64, error) {\n  sum := int64(1)\n  for _, arg := range args {\n    sum *= arg\n  }\n  return sum, nil\n}\n\nfunc main(){\n  server.RegisterTasks(map[string]interface{}{\n    "add":      Add,\n    "multiply": Multiply,\n  })\n\n  signature := &tasks.Signature{\n    Name: "add",\n    Args: []tasks.Arg{\n      {\n        Type:  "int64",\n        Value: 1,\n      },\n      {\n        Type:  "int64",\n        Value: 1,\n      },\n    },\n  }\n  // \u89e6\u53d1\u4efb\u52a1\n  asyncResult, err := server.SendTask(signature)\n}\n')))}h.isMDXComponent=!0}}]);