(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(8),a=(t(0),t(830)),i={title:"Kaniko"},c={unversionedId:"devops/container/kaniko",id:"devops/container/kaniko",isDocsHomePage:!1,title:"Kaniko",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/container/kaniko.md",slug:"/devops/container/kaniko",permalink:"/notes/devops/container/kaniko",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/kaniko.md",version:"current",sidebar:"docs",previous:{title:"juju",permalink:"/notes/devops/container/juju"},next:{title:"Linux Container",permalink:"/notes/devops/container/lxc"}},l=[{value:"dockerhub",id:"dockerhub",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e",id:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e",children:[]},{value:"snapshot \u963b\u585e",id:"snapshot-\u963b\u585e",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6784\u5efa\u5bb9\u5668\u955c\u50cf\u7684\u5de5\u5177"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 Docker\uff0c\u4e0d\u9700\u8981 root \u6743\u9650"),Object(a.b)("li",{parentName:"ul"},"\u53ef\u590d\u73b0\u7684\u5bb9\u5668\u955c\u50cf\u6784\u5efa"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kaniko"},"GoogleContainerTools/kaniko")),Object(a.b)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:latest"),Object(a.b)("li",{parentName:"ul"},"gcr.io/kaniko-project/executor:debug - \u5305\u542b shell"),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"GitLab runner use ",Object(a.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/docker/using_kaniko.html"},"Kaniko")))),Object(a.b)("li",{parentName:"ul"},"\u4e13\u6ce8\u4e8e\u5728 Kubernetes \u6784\u5efa\u955c\u50cf")),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301 x86_64"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 multi-arch \u548c manifest")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# debug \u73af\u5883\ndocker run --rm -it -w /workspace --entrypoint sh registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:debug\n\nmkdir -p /workspace /images /cache\ncd /workspace\n\ncat <<DOCKERFILE > Dockerfile\nFROM wener/base\nRUN apk add coreutils\nDOCKERFILE\n# --no-push \u4e0d\u63a8\u9001 --tarPath \u751f\u6210\u7684 tar \u9700\u8981\u8bbe\u7f6e --destination\n# --context \u9ed8\u8ba4 /workspace\n# --cache \u542f\u7528\u7f13\u5b58 --cache-dir \u57fa\u7840\u955c\u50cf\u7f13\u5b58\u76ee\u5f55\uff0c\u9ed8\u8ba4 /cache --cache-repo \u7f13\u5b58\u4ed3\u5e93\n# --use-new-run \u5b9e\u9a8c\u7279\u6027\uff0c\u63d0\u5347\u6784\u5efa\u6027\u80fd\n# --reproducible \u79fb\u9664\u65f6\u95f4\u6233\n/kaniko/executor --context $PWD --dockerfile $PWD/Dockerfile \\\n  --registry-mirror hbcvocvo.mirror.aliyuncs.com \\\n  --no-push --tarPath /images/build.tar --destination=image \\\n  --use-new-run --reproducible\n\n# Docker \u8ba4\u8bc1\u914d\u7f6e\nmkdir -p /kaniko/.docker\n# \u914d\u7f6e\necho "{\\"auths\\":{\\"$CI_REGISTRY\\":{\\"username\\":\\"$CI_REGISTRY_USER\\",\\"password\\":\\"$CI_REGISTRY_PASSWORD\\"}}}" > /kaniko/.docker/config.json\n# \u6784\u5efa\u5e76\u63a8\u9001\n/kaniko/executor --context $CI_PROJECT_DIR --dockerfile $CI_PROJECT_DIR/Dockerfile --destination $CI_REGISTRY_IMAGE:$CI_COMMIT_TAG\n\n# \u76f4\u63a5\u6784\u5efa\n# registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest\n# gcr.io/kaniko-project/executor:latest\ndocker run \\\n  -v "$HOME"/.config/gcloud:/root/.config/gcloud \\\n  -v /path/to/context:/workspace \\\n  registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor:latest \\\n  --dockerfile /workspace/Dockerfile \\\n  --destination "$PROJECT_ID/$IMAGE_NAME:$TAG" \\\n  --context dir:///workspace/\n')),Object(a.b)("h2",{id:"dockerhub"},"dockerhub"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat <<JSON > config.json\n{\n    "auths": {\n        "https://index.docker.io/v1/": {\n            "auth": "$(echo -n $USER:$PASSWORD | base64)"\n        }\n    }\n}\nJSON\ndocker run --rm -it $PWD/config:/kaniko/.docker/config.json --destination=yourimagename\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kaniko/issues/1209"},"https://github.com/GoogleContainerTools/kaniko/issues/1209"))),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kaniko#additional-flags"},"Additional Flags"))),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e"},"\u62f7\u8d1d\u6839\u76ee\u5f55\u5f02\u5e38\u963b\u585e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-dockerfile"},"FROM alpine:3.11 as rootfs\nRUN echo 7777\n\nFROM alpine:3.11\n# \u963b\u585e\nCOPY --from=rootfs / /sysroot/\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kaniko/issues/960"},"https://github.com/GoogleContainerTools/kaniko/issues/960"))),Object(a.b)("h2",{id:"snapshot-\u963b\u585e"},"snapshot \u963b\u585e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/kaniko/issues/970"},"https://github.com/GoogleContainerTools/kaniko/issues/970"))))}u.isMDXComponent=!0},830:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),m=o,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);