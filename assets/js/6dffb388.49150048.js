"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[51438],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),g=a,f=b["".concat(l,".").concat(g)]||b[g]||s[g]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},72096:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return d}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(u)for(var t of u(n))p.call(n,t)&&c(e,t,n[t]);return e};const b={title:"buf"},g="buf",f={unversionedId:"service/api/buf",id:"service/api/buf",title:"buf",description:"- bufbuild/buf",source:"@site/../notes/service/api/buf.md",sourceDirName:"service/api",slug:"/service/api/buf",permalink:"/notes/service/api/buf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/buf.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657890515,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{title:"buf"},sidebar:"docs",previous:{title:"bramble",permalink:"/notes/service/api/bramble"},next:{title:"CBOR",permalink:"/notes/service/api/cbor"}},m={},d=[],v={toc:d};function y(e){var n,t=e,{components:a}=t,c=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&u)for(var r of u(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=s(s({},v),c),o(n,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",s({},{id:"buf"}),"buf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/bufbuild/buf"}),"bufbuild/buf"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),'# macOS\n# protoc-gen-buf-breaking, protoc-gen-buf-lint\nbrew install bufbuild/buf/buf\n# golang\ngo install github.com/bufbuild/buf/cmd/buf@latest\n\nbuf mod init\nbuf mod update\n\nbuf build\n\nbuf build --exclude-source-info -o -#format=json | jq \'.file[] | .package\' | sort | uniq | head\n\nbuf ls-files\nbuf ls-files git://github.com/bufbuild/buf-tour.git#branch=main,subdir=start/petapis\nbuf ls-files buf.build/envoyproxy/protoc-gen-validate\n\nbuf lint\n\nbuf breaking --against ../../.git#branch=main,subdir=start/petapis\nbuf breaking --against "https://github.com/bufbuild/buf-tour/archive/main.zip#strip_components=1,subdir=start/petapis" --config buf.yaml\nbuf build -o - | buf breaking --against -\n\nbuf generate petapis\n\n\ngo install google.golang.org/protobuf/cmd/protoc-gen-go@latest\ngo install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\n\ngo install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest\ngo install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest\ngo install github.com/grpc-ecosystem/protoc-gen-grpc-gateway-ts@latest\ngo install github.com/envoyproxy/protoc-gen-validate@latest\n\nexport BUF_USER=wener\nbuf login\n# ~/.netrc\n# machine buf.build\n#     login $BUF_USER\n#     password $TOKEN\nbuf beta registry repository create buf.build/$BUF_USER/petapis --visibility public\n# buf.yaml\n# name: buf.build/$BUF_USER/petapis\nbuf push\n\ndocker run \\\n  --volume "$(pwd):/workspace" \\\n  --workdir /workspace \\\n  bufbuild/buf build\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"version: v1\nlint:\n  use:\n    - DEFAULT\nbreaking:\n  use:\n    - FILE\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"version: v1\ndirectories:\n  - proto\n  - vendor/protoc-gen-validate\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"go-grpc")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"version: v1\nplugins:\n  - name: go\n    out: .\n    opt: paths=source_relative\n  - name: gotag\n    out: .\n    opt: paths=source_relative\n  - name: go-grpc\n    out: .\n    opt: paths=source_relative,require_unimplemented_servers=true\n  - name: grpc-gateway\n    out: .\n    opt:\n      - paths=source_relative\n      - generate_unbound_methods=true\n\n- name: grpc-gateway-ts\n    out: gen/web/api\n    opt: paths=source_relative\n  - name: validate\n    out: .\n    opt: lang=go,paths=source_relative\n\n- name: openapiv2\n    out: openapiv2\n  - name: doc\n    out: gen/doc\n    strategy: all\n    opt: markdown,proto.md\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml",metastring:'title="buf.gen.yaml"',title:'"buf.gen.yaml"'}),"version: v1\nmanaged:\n  enabled: true\n  cc_enable_arenas: false\n  java_multiple_files: true\nplugins:\n  - name: cpp\n    out: gen/proto/cpp\n  - name: java\n    out: gen/proto/java\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-yaml"}),"version: v1\nmanaged:\n  enabled: true\n  # FileOptions\n  # https://github.com/protocolbuffers/protobuf/blob/51405b6b92c2070c8edea1b44c6770e00f7027be/src/google/protobuf/descriptor.proto#L342\n  cc_enable_arenas: false\n  java_multiple_files: false\n  java_package_prefix: com\n  java_string_check_utf8: false\n  optimize_for: CODE_SIZE\n  go_package_prefix:\n    default: github.com/acme/weather/private/gen/proto/go\n    # \u6392\u9664\u6a21\u5757\n    except:\n      - buf.build/googleapis/googleapis\n    override:\n      buf.build/acme/weather: github.com/acme/weather/gen/proto/go\n  override:\n    JAVA_PACKAGE_PREFIX:\n      acme/weather/v1/weather.proto: 'org'\nplugins:\n  - name: go\n    out: gen/proto/go\n    opt: paths=source_relative\n")))}y.isMDXComponent=!0}}]);