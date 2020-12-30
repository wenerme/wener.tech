(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{313:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(7),a=(r(0),r(701)),c={title:"React Route"},u={unversionedId:"web/react/react-router",id:"web/react/react-router",isDocsHomePage:!1,title:"React Route",description:"React Route",source:"@site/notes/web/react/react-router.md",slug:"/web/react/react-router",permalink:"/notes/web/react/react-router",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-router.md",version:"current"},i=[{value:"Switch vs Route",id:"switch-vs-route",children:[]}],p={rightToc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"react-route"},"React Route"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-router-dom\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport { HashRouter as Router, Link, Route, Switch } from \'react-router-dom\';\n\nexport const MainRoute: React.FC = () => {\n  return (\n    <Router>\n      <nav>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n          <li>\n            <Link to="/users">Users</Link>\n          </li>\n        </ul>\n      </nav>\n\n      {/* Switch \u6e32\u67d3\u5339\u914d\u7684\u7b2c\u4e00\u4e2a */}\n      <Switch>\n        <Route path="/about">\n          <About />\n        </Route>\n        <Route path="/users">\n          <Users />\n        </Route>\n        <Route path="/">\n          <Home />\n        </Route>\n      </Switch>\n    </Router>\n  );\n};\n\n')),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"switch-vs-route"},"Switch vs Route"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Switch>")," \u53ea\u6e32\u67d3\u4e00\u4e2a\u8def\u7531. \u800c ",Object(a.b)("inlineCode",{parentName:"p"},"<Route>")," \u4f1a\u6e32\u67d3\u6240\u6709\u5339\u914d\u7684\u8def\u7531\u3002"))}l.isMDXComponent=!0},701:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||a;return r?o.a.createElement(m,u(u({ref:t},p),{},{components:r})):o.a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);