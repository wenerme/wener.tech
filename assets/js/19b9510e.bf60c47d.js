"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[33983],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(96600),a=n(27279),o=(n(59496),n(49613)),l=["components"],i={title:"Go XML"},s="Go XML",u={unversionedId:"languages/go/go-xml",id:"languages/go/go-xml",title:"Go XML",description:"- xmllint",source:"@site/../notes/languages/go/go-xml.md",sourceDirName:"languages/go",slug:"/languages/go/go-xml",permalink:"/notes/languages/go/go-xml",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/languages/go/go-xml.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1663813e3,formattedLastUpdatedAt:"Sep 22, 2022",frontMatter:{title:"Go XML"},sidebar:"docs",previous:{title:"Golang Windows",permalink:"/notes/languages/go/go-windows"},next:{title:"Go2",permalink:"/notes/languages/go/go2"}},c={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-xml"},"Go XML"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://xmlsoft.org/xmllint.html"},"xmllint"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u683c\u5f0f\u5316\u3001\u79fb\u9664\u5f15\u7528")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Content struct {\n  Useful  struct {\n    Attrs []xml.Attr `xml:",any,attr"`\n    Data  string     `xml:",innerxml"`\n  } `xml:"Useful"`\n}\n\n// \u5b8c\u6574\u8282\u70b9\u5185\u5bb9\u5305\u542b tag\ntype rawxml string\nfunc (r *rawxml) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {\n    var s struct {\n        Inner string `xml:",innerxml"`\n    }\n    if err := d.DecodeElement(&s, &start); err != nil {\n        return err\n    }\n    var attrs string\n    for _, a := range start.Attr {\n        attrs += fmt.Sprintf(` %s=%q`, a.Name.Local, a.Value)\n    }\n    name := start.Name.Local\n    *r = rawxml(fmt.Sprintf(`<%s%s>%s</%s>`, name, attrs, s.Inner, name))\n    return nil\n}\n\n')))}f.isMDXComponent=!0}}]);