"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97069],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82453:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"Casbin"},p=void 0,u={unversionedId:"service/auth/authz/casbin",id:"service/auth/authz/casbin",title:"Casbin",description:"- \u652f\u6301\u7684\u6a21\u5f0f",source:"@site/notes/service/auth/authz/casbin.md",sourceDirName:"service/auth/authz",slug:"/service/auth/authz/casbin",permalink:"/notes/service/auth/authz/casbin",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/authz/casbin.md",tags:[],version:"current",frontMatter:{title:"Casbin"},sidebar:"docs",previous:{title:"TOTP",permalink:"/notes/service/auth/authn/totp"},next:{title:"spicedb",permalink:"/notes/service/auth/authz/spicedb"}},c={},m=[{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u5185\u7f6e\u51fd\u6570",id:"\u5185\u7f6e\u51fd\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ACL - \u8d85\u7ea7\u7528\u6237, \u65e0\u7528\u6237, \u65e0\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"RBAC - \u8d44\u6e90\u89d2\u8272, \u79df\u6237\u89d2\u8272"),(0,l.kt)("li",{parentName:"ul"},"ABAC"),(0,l.kt)("li",{parentName:"ul"},"RESTful \u8def\u5f84"),(0,l.kt)("li",{parentName:"ul"},"\u62d2\u7edd\u4f18\u5148"),(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7"))),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u4e3a \u6a21\u578b\u5b9a\u4e49\u3001Policy\u3001\u89d2\u8272 - Policy \u548c \u89d2\u8272\u914d\u7f6e\u53ef\u9009"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/casbin/casdoor"},"casbin/casdoor"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e26 UI \u7684\u4e2d\u5fc3\u5316 SSO \u5e73\u53f0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://casbin.org/docs/zh-CN/tutorials"},"\u6559\u7a0b")),(0,l.kt)("li",{parentName:"ul"},"Golang",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6c42\u503c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Knetic/govaluate"},"Knetic/govaluate"))))))),(0,l.kt)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PERM (Policy, Effect, Request, Matcher)"),(0,l.kt)("li",{parentName:"ul"},"Request - r - \u81f3\u5c11\u5305\u542b subject, object, action"),(0,l.kt)("li",{parentName:"ul"},"Policy - p - \u5b9a\u4e49\u8bbf\u95ee\u7b56\u7565",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7b56\u7565\u5185\u5bb9\u5747\u4e3a string"))),(0,l.kt)("li",{parentName:"ul"},"Matcher - m - Request \u548c Policy \u5339\u914d\u89c4\u5219",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 m = r.sub == p.sub && r.act == p.act && r.obj == p.obj"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5339\u914d\u5219\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"p.eft")))),(0,l.kt)("li",{parentName:"ul"},"Effect - e - \u5f71\u54cd - \u5141\u8bb8\u3001\u62d2\u7edd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"e = some(where(p.eft == allow))"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4efb\u610f\u4e00\u4e2a policy \u5141\u8bb8"))),(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u62d2\u7edd\u4e14\u6709\u4e00\u4e2a\u5141\u8bb8")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"# \u8bf7\u6c42\u5b9a\u4e49 - \u5b9a\u4e49\u8bf7\u6c42 Enforce \u53c2\u6570\u542b\u4e49\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[request_definition]\nr = sub, obj, act\n\n# \u7b56\u7565\u5b9a\u4e49 - \u5b9a\u4e49 Policy \u89c4\u5219\u5217\u8868\u53c2\u6570\u542b\u4e49\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[policy_definition]\np = sub, obj, act\n\n# \u5408\u5e76\u591a\u4e2a\u7b56\u7565\u7ed3\u679c\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# \u5339\u914d\u8bf7\u6c42\u548c\u7b56\u7565\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n# \u53ef\u4ee5\u8fd0\u884c\u65f6\u6307\u5b9a\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n# \u89d2\u8272\u5b9a\u4e49 - \u51b3\u5b9a\u53c2\u6570\u4e2a\u6570\n# \u53ef\u5b9a\u4e49\u591a\u4e2a\n# \u5c06 a \u6620\u5c04\u4e3a b \u7684\u8fc7\u7a0b\n[role_definition]\n# \u4f8b\u5982 g(r.sub, p.sub)\ng = _, _\n# \u4f8b\u5982 g2(r.sub, p.sub, r.dom)\ng2 = _, _, _\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"policy.csv")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data1, read\n\ng, alice, data_group_admin\ng2, data1, data_group, t1\ng2, data2, data_group, t2\n")),(0,l.kt)("p",null,"\u7b56\u7565\u89c4\u5219\uff0c\u542b\u4e49\u5728 policy_definition \u548c role_definition \u5b9a\u4e49\uff0c\u6240\u6709\u89c4\u5219\u53c2\u6570\u90fd\u4f1a\u5f53\u4f5c ",(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32")," \u5904\u7406\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"p = sub, obj, act, eft"))),(0,l.kt)("p",null,"policy \u89c4\u5219\u53ef\u6dfb\u52a0\u4f18\u5148\u7ea7, \u4e0d\u8bbe\u7f6e\u5219\u987a\u5e8f\u4e3a\u4f18\u5148\u7ea7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"p, 10, data2_allow_group, data2, read, deny\np, 10, data2_allow_group, data2, write, allow\n")),(0,l.kt)("h3",{id:"\u5185\u7f6e\u51fd\u6570"},"\u5185\u7f6e\u51fd\u6570"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5185\u5efa\u51fd\u6570\u7b7e\u540d\u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"bool function(string arg1, string arg2)"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"demo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyMatch("/alice_data/resource1","/alice_data/*")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyGet("/alice_data/resource1","/alice_data/*")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyMatch2("/alice_data/resource1","/alice_data/:resource")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyGet2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyGet2("/alice_data/resource1","/alice_data/:resource")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyMatch3("/alice_data/resource1","/alice_data/{resource}")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyMatch4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'keyMatch4("/alice_data/123/book/123","/alice_data/{id}/book/{id}")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"globMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'globMatch("/alice_data/resource1","/alice_data/*")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ipMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'ipMatch("192.168.2.123","192.168.2.0/24")'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"regexMatch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'regexMatch("abc","^a.*?b$")'))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"util/builtin_operators_test.go"))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'[matchers]\n# \u6700\u57fa\u7840\u5339\u914d\u903b\u8f91 - Policy \u4f5c\u4e3a ACL\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n# \u652f\u6301\u8d85\u7ea7\u7ba1\u7406\u5458\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n# \u89d2\u8272\u5224\u65ad\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n# \u8d44\u6e90\u89d2\u8272\nm = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act\n# \u79df\u6237\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n\n# \u6ca1\u6709 \u7528\u6237/subject - \u53ea\u5224\u65ad\u5bf9\u8c61\u548c\u64cd\u4f5c\nm = r.obj == p.obj && r.act == p.act\n\n# \u6ca1\u6709 \u8d44\u6e90/obj\nm = r.sub == p.sub && r.act == p.act\n\n# ABAC - \u57fa\u4e8e\u5c5e\u6027\u63a7\u5236\nm = r.sub == r.obj.Owner\n\n# RESTful \u8def\u5f84\u5339\u914d\nm = r.sub == p.sub && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n\n[policy_effect]\n# \u53ea\u8981\u6709\u540c\u610f\u5373\u53ef\ne = some(where (p.eft == allow))\n# \u62d2\u7edd\u4f18\u5148\ne = !some(where (p.eft == deny))\n# \u6709\u540c\u610f\u4e14\u6ca1\u6709\u62d2\u7edd\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n\n# \u4f18\u5148\u5224\u65ad - p \u5b9a\u4e49\u987a\u5e8f\u9690\u542b\u4f18\u5148\u7ea7\uff0c\u6216\u8005 p \u89c4\u5219\u7b2c\u4e00\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3a\u4f18\u5148\u7ea7\n# p = sub, obj, act, eft\ne = priority(p.eft) || deny\n')))}d.isMDXComponent=!0}}]);