"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54622],{49613:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return g}});var t=r(59496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13455:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var t=r(96600),a=r(27279),i=(r(59496),r(49613)),o=["components"],u={title:"machinery"},c="machinery",l={unversionedId:"languages/go/lib/machinery",id:"languages/go/lib/machinery",title:"machinery",description:"- RichardKnop/machinery \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/languages/go/lib/machinery.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/machinery",permalink:"/notes/languages/go/lib/machinery",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/lib/machinery.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"machinery"},sidebar:"docs",previous:{title:"kratos",permalink:"/notes/languages/go/lib/kratos"},next:{title:"mapstructure",permalink:"/notes/languages/go/lib/mapstructure"}},s={},p=[],m={toc:p};function g(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machinery"},"machinery"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RichardKnop/machinery"},"RichardKnop/machinery")," \u662f\u4ec0\u4e48\uff1f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4efb\u52a1\u961f\u5217"),(0,i.kt)("li",{parentName:"ul"},"Lock - Redis"),(0,i.kt)("li",{parentName:"ul"},"Broker - AMQP, Redis"),(0,i.kt)("li",{parentName:"ul"},"ResultBackend - Redis, Memcache, AMQP, MongoDB")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func Add(args ...int64) (int64, error) {\n  sum := int64(0)\n  for _, arg := range args {\n    sum += arg\n  }\n  return sum, nil\n}\n\nfunc Multiply(args ...int64) (int64, error) {\n  sum := int64(1)\n  for _, arg := range args {\n    sum *= arg\n  }\n  return sum, nil\n}\n\nfunc main(){\n  server.RegisterTasks(map[string]interface{}{\n    "add":      Add,\n    "multiply": Multiply,\n  })\n\n  signature := &tasks.Signature{\n    Name: "add",\n    Args: []tasks.Arg{\n      {\n        Type:  "int64",\n        Value: 1,\n      },\n      {\n        Type:  "int64",\n        Value: 1,\n      },\n    },\n  }\n  // \u89e6\u53d1\u4efb\u52a1\n  asyncResult, err := server.SendTask(signature)\n}\n')))}g.isMDXComponent=!0}}]);