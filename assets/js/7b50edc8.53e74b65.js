"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38762],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(r),s=o,d=p["".concat(c,".").concat(s)]||p[s]||f[s]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return f}});var n=r(96600),o=r(27279),a=(r(59496),r(49613)),l=["components"],i={title:"xml"},c="xml",m={unversionedId:"dev/format/xml",id:"dev/format/xml",title:"xml",description:"",source:"@site/../notes/dev/format/xml.md",sourceDirName:"dev/format",slug:"/dev/format/xml",permalink:"/notes/dev/format/xml",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/dev/format/xml.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639484090,formattedLastUpdatedAt:"Dec 14, 2021",frontMatter:{title:"xml"},sidebar:"docs",previous:{title:"WAV",permalink:"/notes/dev/format/wav"},next:{title:"YAML",permalink:"/notes/dev/format/yaml"}},u={},f=[],p={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xml"},"xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'<root><foo a="b">lorem</foo><bar value="ipsum" /></root>\' > test.xml\n\n# format\nxmllint --format test.xml\ntidy -xml -i -q test.xml\nxmlstarlet format --indent-tab test.xml\n')))}s.isMDXComponent=!0}}]);