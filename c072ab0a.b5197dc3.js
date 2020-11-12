(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{516:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(7),c=(t(0),t(661)),i={title:"Gitlab CI \u6280\u5de7"},a={unversionedId:"ops/service/gitlab-ci-cookbook",id:"ops/service/gitlab-ci-cookbook",isDocsHomePage:!1,title:"Gitlab CI \u6280\u5de7",description:"Gitlab CI \u5e38\u7528\u8bed\u6cd5",source:"@site/notes/ops/service/gitlab-ci-cookbook.md",slug:"/ops/service/gitlab-ci-cookbook",permalink:"/notes/ops/service/gitlab-ci-cookbook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/gitlab-ci-cookbook.md",version:"current"},l=[{value:"Tips",id:"tips",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"docker \u6784\u5efa",id:"docker-\u6784\u5efa",children:[]},{value:"\u751f\u6210",id:"\u751f\u6210",children:[]},{value:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf",children:[]},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[]}],b={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"gitlab-ci-\u5e38\u7528\u8bed\u6cd5"},"Gitlab CI \u5e38\u7528\u8bed\u6cd5"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},".")," \u5f00\u5934\u7684\u4efb\u52a1\u4e0d\u4f1a\u6267\u884c")),Object(c.b)("h2",{id:"hello-world"},"Hello World"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"stage:\n- build\n\nHello CI:\n  stage: build\n  script:\n  - echo Hello Gitlab CI !\n")),Object(c.b)("h2",{id:"docker-\u6784\u5efa"},"docker \u6784\u5efa"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"Build in Docker:\n  image: wener/go:win\n  stage: build\n  services:\n    - docker:dind\n  script:\n    - go env\n")),Object(c.b)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),Object(c.b)("h2",{id:"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"},"\u6784\u5efa\u4e4b\u95f4\u4f20\u9012\u53d8\u91cf"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"build:\n  stage: build\n  script: echo 'FOO=BAR' > build.env\n  artifacts:\n    report:\n      dotenv: build.env\n\ntest:\n  stage: test\n  script: echo $FOO     # \"BAR\"\n  needs: [build]\n")),Object(c.b)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"include:\n  # \u6a21\u677f\u7ee7\u627f\n  template: Serverless.gitlab-ci.yml\n\nfunctions:build:\n  extends: .serverless:build:functions\n  # \u8bbe\u7f6e\u73af\u5883\u4fe1\u606f\n  environment: production\n\nfunctions:deploy:\n  extends: .serverless:deploy:functions\n  environment: production\n")))}u.isMDXComponent=!0},661:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),u=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||c;return t?o.a.createElement(m,a(a({ref:n},b),{},{components:t})):o.a.createElement(m,a({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var b=2;b<c;b++)i[b]=t[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);