"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[9613],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,f=m["".concat(o,".").concat(h)]||m[h]||p[h]||i;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49296:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=r(96600),n=r(27279),i=(r(59496),r(49613)),l=["components"],u={title:"Github"},o="Github",c={unversionedId:"service/forge/github",id:"service/forge/github",title:"Github",description:"- chrishunt/github-auth",source:"@site/../notes/service/forge/github.md",sourceDirName:"service/forge",slug:"/service/forge/github",permalink:"/notes/service/forge/github",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/../notes/service/forge/github.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"Github"},sidebar:"docs",previous:{title:"Github FAQ",permalink:"/notes/service/forge/github-faq"},next:{title:"Gitlab",permalink:"/notes/service/forge/gitlab/"}},s={},p=[{value:"Git LFS",id:"git-lfs",level:2},{value:"\u5feb\u901f\u6dfb\u52a0 License",id:"\u5feb\u901f\u6dfb\u52a0-license",level:2},{value:"\u83b7\u53d6\u6700\u65b0\u7248\u672c",id:"\u83b7\u53d6\u6700\u65b0\u7248\u672c",level:2},{value:"Socialify",id:"socialify",level:2},{value:"Search",id:"search",level:2},{value:"Markdown",id:"markdown",level:2}],m={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github"},"Github"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chrishunt/github-auth"},"chrishunt/github-auth")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/toolbear/ac62691d6f59812a6710"},"https://gist.github.com/toolbear/ac62691d6f59812a6710"),"\nGitHub as an authority for SSH public keys"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codeload.github.com/bufbuild/buf/tar.gz/refs/tags/v1.3.0"},"https://codeload.github.com/bufbuild/buf/tar.gz/refs/tags/v1.3.0"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://github.com/wenerme.keys >> ~/.ssh/authorized_keys\ncurl https://api.github.com/users/wenerme/keys\n\n# .diff .patch\ncurl -LO https://github.com/electron-react-boilerplate/electron-react-boilerplate/pull/2875.diff\ngit am 2875.diff\n")),(0,i.kt)("h2",{id:"git-lfs"},"Git LFS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/managing-large-files/about-git-large-file-storage"},"\u9650\u5236"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5355\u6587\u4ef6\u6700\u5927 2 GB"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/managing-large-files/about-storage-and-bandwidth-usage"},"\u5bb9\u91cf\u548c\u5e26\u5bbd\u9650\u5236"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1G \u5bb9\u91cf"),(0,i.kt)("li",{parentName:"ul"},"1G \u5e26\u5bbd"))),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Github pages \u4e0d\u80fd\u8bbf\u95ee")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"version https://git-lfs.github.com/spec/v1\noid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5\nsize 84977953\n")),(0,i.kt)("h2",{id:"\u5feb\u901f\u6dfb\u52a0-license"},"\u5feb\u901f\u6dfb\u52a0 License"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wenerme/wener/community/license/new?template=CC-BY-SA-4.0"},"https://github.com/wenerme/wener/community/license/new?template=CC-BY-SA-4.0"))),(0,i.kt)("h2",{id:"\u83b7\u53d6\u6700\u65b0\u7248\u672c"},"\u83b7\u53d6\u6700\u65b0\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#get-the-latest-release"},"https://docs.github.com/en/rest/reference/repos#get-the-latest-release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/lukechilds/a83e1d7127b78fef38c2914c4ececc3c"},"https://gist.github.com/lukechilds/a83e1d7127b78fef38c2914c4ececc3c"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"github-latest-version() {\n  set -o pipefail\n  curl -sfL https://api.github.com/repos/$1/releases/latest | jq .tag_name -r\n  local r=$?\n  set +o pipefail\n  return $r\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f46\u8fd9\u79cd\u6709\u591a\u4e2a tag \u7684\u65e0\u89e3\ngithub-latest-version kubernetes-sigs/nfs-subdir-external-provisioner\n")),(0,i.kt)("h2",{id:"socialify"},"Socialify"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wei/socialify"},"wei/socialify")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/matchai/waka-box"},"matchai/waka-box"))),(0,i.kt)("h2",{id:"search"},"Search"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in:path"),(0,i.kt)("li",{parentName:"ul"},"in:file"),(0,i.kt)("li",{parentName:"ul"},"user:USERNAME"),(0,i.kt)("li",{parentName:"ul"},"org:ORGNAME"),(0,i.kt)("li",{parentName:"ul"},"repo:USERNAME/REPOSITORY"),(0,i.kt)("li",{parentName:"ul"},"path:DIRECTORY"),(0,i.kt)("li",{parentName:"ul"},"language:LANGUAGE",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/github/linguist/blob/master/lib/linguist/languages.yml"},"https://github.com/github/linguist/blob/master/lib/linguist/languages.yml")))),(0,i.kt)("li",{parentName:"ul"},"size:n"),(0,i.kt)("li",{parentName:"ul"},"filename:FILENAME"),(0,i.kt)("li",{parentName:"ul"},"extension:EXT")),(0,i.kt)("h2",{id:"markdown"},"Markdown"),(0,i.kt)("img",{src:"https://render.githubusercontent.com/render/math?math=\\begin{equation}\\sum_{n=0}^\\infty\\frac{1}{2^n}\\end{equation}"}))}h.isMDXComponent=!0}}]);