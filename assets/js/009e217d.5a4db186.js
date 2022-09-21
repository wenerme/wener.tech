"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[11185],{18896:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(96600),a=r(27279),o=(r(59496),r(3905)),c=["components"],i={title:"crane"},s=void 0,l={unversionedId:"devops/container/crane",id:"devops/container/crane",title:"crane",description:"- google/go-containerregistry/cmd/crane",source:"@site/notes/devops/container/crane.md",sourceDirName:"devops/container",slug:"/devops/container/crane",permalink:"/notes/devops/container/crane",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/crane.md",tags:[],version:"current",frontMatter:{title:"crane"},sidebar:"docs",previous:{title:"containerd",permalink:"/notes/devops/container/containerd"},next:{title:"juju",permalink:"/notes/devops/container/juju"}},u={},p=[],f={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane"},"google/go-containerregistry/cmd/crane")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/recipes.md"},"recipes.md")),(0,o.kt)("li",{parentName:"ul"},"config",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"arch, os, rootfs, env, cmd, label, created, history"))),(0,o.kt)("li",{parentName:"ul"},"manifest",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"layers, size"))),(0,o.kt)("li",{parentName:"ul"},"layer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# brew install crane\ngo install github.com/google/go-containerregistry/cmd/crane@latest\n\necho quay.io | crane auth get # \u4ece keychain \u83b7\u53d6 auth \u4fe1\u606f\ncrane copy quay.io/keycloak/keycloak:17.0.0 registry.cn-hongkong.aliyuncs.com/cmi/keycloak_keycloak\n\ncrane pull docker.io/wener/base:v3.15 base-v3.15.tar\ncrane push base-v3.15.tar registry.cn-hongkong.aliyuncs.com/cmi/wener_base:v3.15\n\n# \u67e5\u770b tag\ncrane ls docker.io/wener/base\n\n# \u8ba1\u7b97\u955c\u50cf\u5927\u5c0f\ncrane manifest docker.io/wener/base:v3.15 | jq '.config.size + ([.layers[].size] | add)'\n# \u683c\u5f0f\u5316\u663e\u793a\ncrane manifest docker.io/wener/base:v3.15 | jq '.config.size + ([.layers[].size] | add)' | numfmt --to=iec\n\n# diff config\ndiff <(crane config busybox:1.32 | jq) <(crane config busybox:1.33 | jq)\n# diff manifest\ndiff <(crane manifest busybox:1.32 | jq) <(crane manifest busybox:1.33 | jq)\n# diff \u5185\u5bb9\ndiff \\\n  <(crane export docker.io/wener/base:v3.14 - | tar -tvf - | sort) \\\n  <(crane export docker.io/wener/base:v3.15 - | tar -tvf - | sort)\n")))}m.isMDXComponent=!0},3905:function(e,n,r){r.d(n,{kt:function(){return f}});var t=r(59496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?t.createElement(d,c(c({ref:n},p),{},{components:r})):t.createElement(d,c({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);