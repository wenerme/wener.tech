"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96408],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),f=n,d=c["".concat(o,".").concat(f)]||c[f]||m[f]||l;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},34159:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return N}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&s(e,r,t[r]);return e};const c={title:"RDF"},f="RDF",d={unversionedId:"db/graph/rdf",id:"db/graph/rdf",title:"RDF",description:"- RDF Store / Triplestore",source:"@site/../notes/db/graph/rdf.md",sourceDirName:"db/graph",slug:"/db/graph/rdf",permalink:"/notes/db/graph/rdf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/graph/rdf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1638548289,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{title:"RDF"},sidebar:"docs",previous:{title:"GraphDB Awesome",permalink:"/notes/db/graph/graph-awesome"},next:{title:"Key Value",permalink:"/notes/db/kv/"}},k={},N=[{value:"triplestore vs graph",id:"triplestore-vs-graph",level:2},{value:"Notes",id:"notes",level:2}],h={toc:N};function b(e){var t,r=e,{components:n}=r,s=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),s),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"rdf"}),"RDF"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RDF Store / Triplestore",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Semantic query \u67e5\u8be2 Triple"),(0,a.kt)("li",{parentName:"ul"},"wikipedia ",(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Triplestore"}),"Triplestore")),(0,a.kt)("li",{parentName:"ul"},"W3C ",(0,a.kt)("a",m({parentName:"li"},{href:"https://www.w3.org/RDF/"}),"\u6807\u51c6")),(0,a.kt)("li",{parentName:"ul"},"RDF = Resource Description Framework",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a model for data publishing and interchange on the Web"))))),(0,a.kt)("li",{parentName:"ul"},"LOD - Linked Open Data"),(0,a.kt)("li",{parentName:"ul"},"Semantic triple",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"subject-predicate-object"))),(0,a.kt)("li",{parentName:"ul"},"N-Quads - Named Graphs in N-Triples"),(0,a.kt)("li",{parentName:"ul"},"SPARQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Semantic query"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_triplestores"}),"Comparison of triplestores")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.ontotext.com/knowledgehub/fundamentals/what-is-rdf-triplestore/"}),"https://www.ontotext.com/knowledgehub/fundamentals/what-is-rdf-triplestore/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://repository.iiitd.edu.in/xmlui/bitstream/handle/123456789/703/Jyoti_PhD1103.pdf"}),"Indexing and Query Processing in RDF Quad-Stores"))))),(0,a.kt)("h2",m({},{id:"triplestore-vs-graph"}),"triplestore vs graph"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'<http://example.org/person/1> :hasName "Bob".\n<http://example.org/person/1> foaf:knows <http://example.org/person/2>.\n<http://example.org/person/2> :hasName "Susan".\n')),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'(a:Person {name: "Bob"})-[:KNOWS]->(b:Person {name: "Susan"})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"triplestore",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u539f\u5b50"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb link-data - link \u4e3a\u4e3b"))),(0,a.kt)("li",{parentName:"ul"},"graph",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8868\u793a\u8282\u70b9\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u5b58\u50a8\u7ed3\u6784"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://stackoverflow.com/a/30167732/1870054"}),"https://stackoverflow.com/a/30167732/1870054"))),(0,a.kt)("h2",m({},{id:"notes"}),"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rdf \u662f\u56fe\u6570\u636e\u6a21\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89c4\u8303\u5316\u7684\u63cf\u8ff0\u4fe1\u606f\u7684\u8bed\u4e49\u548c\u542b\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u793a\u5143\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},"rdf \u6a21\u578b \u7ec4\u6210",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"eva \u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"triple \u4e09\u5143\u7d20",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"subject - entity - \u5b9e\u4f53"),(0,a.kt)("li",{parentName:"ul"},"predicate - attribute - \u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"object - value - \u503c"))),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a triple \u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u6807\u793a\u7b26 - uri"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u8ff0\u56fe\u4e2d\u7684\u94fe\u63a5"))),(0,a.kt)("li",{parentName:"ul"},"rdfs - rdf schema",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"adds",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u3001literal\u3001class\u3001datatype \u6982\u5ff5"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u7cfb - subClassOf\u3001subPropertyOf\u3001domain\u3001range"))),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5b9a\u4e49",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"classes \u3001 properties"),(0,a.kt)("li",{parentName:"ul"},"hierachies of classes and properties"))),(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b entailment rules - \u57fa\u4e8e\u73b0\u6709\u4fe1\u606f\u63a8\u7b97")))))}b.isMDXComponent=!0}}]);