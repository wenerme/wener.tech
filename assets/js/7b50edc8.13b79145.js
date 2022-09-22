"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38762],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=f(r),s=o,d=p["".concat(c,".").concat(s)]||p[s]||m[s]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var f=2;f<a;f++)l[f]=r[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5531:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return O},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))f.call(t,r)&&u(e,r,t[r]);return e};const p={title:"xml"},s="xml",d={unversionedId:"dev/format/xml",id:"dev/format/xml",title:"xml",description:"",source:"@site/../notes/dev/format/xml.md",sourceDirName:"dev/format",slug:"/dev/format/xml",permalink:"/notes/dev/format/xml",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/format/xml.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639484090,formattedLastUpdatedAt:"Dec 14, 2021",frontMatter:{title:"xml"},sidebar:"docs",previous:{title:"WAV",permalink:"/notes/dev/format/wav"},next:{title:"YAML",permalink:"/notes/dev/format/yaml"}},y={},b=[],v={toc:b};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},v),u),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"xml"}),"xml"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'echo \'<root><foo a="b">lorem</foo><bar value="ipsum" /></root>\' > test.xml\n\n# format\nxmllint --format test.xml\ntidy -xml -i -q test.xml\nxmlstarlet format --indent-tab test.xml\n')))}O.isMDXComponent=!0}}]);