"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[20954],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),x=c(n),u=a,b=x["".concat(s,".").concat(u)]||x[u]||p[u]||i;return n?r.createElement(b,l(l({ref:t},m),{},{components:n})):r.createElement(b,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=x;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},72191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return x},metadata:function(){return b},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&m(e,n,t[n]);return e};const x={title:"litestream"},u="litestream",b={unversionedId:"db/relational/litestream",id:"db/relational/litestream",title:"litestream",description:"- benbjohnson/litestream",source:"@site/../notes/db/relational/litestream.md",sourceDirName:"db/relational",slug:"/db/relational/litestream",permalink:"/notes/db/relational/litestream",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/litestream.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1666510159,formattedLastUpdatedAt:"Oct 23, 2022",frontMatter:{title:"litestream"},sidebar:"docs",previous:{title:"H2 Database",permalink:"/notes/db/relational/h2"},next:{title:"MySQL GTID",permalink:"/notes/db/relational/mysql-gtid"}},d={},f=[],y={toc:f};function h(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),m),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"litestream"}),"litestream"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/benbjohnson/litestream"}),"benbjohnson/litestream"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b58\u50a8 s3, sftp, file"))),(0,r.kt)("li",{parentName:"ul"},"HOW TO",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"litestream \u7ef4\u6301\u4e00\u4e2a \u8bfb \u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u53d1\u751f wal_autocheckpoint - \u9ad8\u5199\u5165\u65f6\u63a8\u8350\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"wal_autocheckpoint=0")),(0,r.kt)("li",{parentName:"ul"},"litestream \u540c\u6b65 wal ,\u6267\u884c checkpoint")))),(0,r.kt)("admonition",p({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4f7f\u7528 WAL \u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u5c06 busy_timeout \u8bbe\u7f6e\u4e3a 5000+"),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350 synchronous=NORMAL"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u526f\u672c - \u9ed8\u8ba4\u540c\u6b65\u95f4\u9694 1s"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# macOS brew \u5b89\u88c5\nbrew install benbjohnson/litestream/litestream\n# go install\ngo install github.com/benbjohnson/litestream/cmd/litestream\n# \u4e0b\u8f7d\u5b89\u88c5\ncurl -OL https://github.com/benbjohnson/litestream/releases/download/v0.3.8/litestream-v0.3.8-darwin-amd64.zip\ncurl -OL https://github.com/benbjohnson/litestream/releases/download/v0.3.8/litestream-v0.3.8-linux-amd64-static.tar.gz\n\n\nexport LITESTREAM_ACCESS_KEY_ID=minioadmin\nexport LITESTREAM_SECRET_ACCESS_KEY=minioadmin\n# \u526f\u672c\u5907\u4efd\nlitestream replicate fruits.db s3://localhost:9000/fruits.db\n# \u5728\u53e6\u5916\u5730\u65b9\u6062\u590d\nlitestream restore -o fruits2.db s3://localhost:9000/fruits.db\n\n# SFTP\nlitestream replicate /path/to/db sftp://USER:PASSWORD@HOST:PORT/PATH\n\n\nlitestream databases          # \u663e\u793a\u914d\u7f6e\u91cc\u7684\u6240\u6709 DB\nlitestream generations DST    # \u663e\u793a DB \u6216 URL \u7684\u72b6\u6001\nlitestream replicate          # \u6240\u6709\nlitestream replicate SRC DST  # \u5355\u4e2a\nlitestream restore DST        # \u6062\u590d\nlitestream snapshots DST      # \u67e5\u770b\u5feb\u7167\nlitestream wal DST            # \u67e5\u770b WAL \u72b6\u6001\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml",metastring:'title="/etc/litestream.yml"',title:'"/etc/litestream.yml"'}),"# \u5168\u5c40 S3 \u914d\u7f6e\naccess-key-id: AKIAxxxxxxxxxxxxxxxx\nsecret-access-key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/xxxxxxxxx\n# Metrics\naddr: ':9090'\n\ndbs:\n  - path: /var/lib/db1\n    replicas:\n      - name: my_do_replica\n        url: s3://mybkt.litestream.io/db1\n        # url \u6216 \u72ec\u7acb\u914d\u7f6e\n        type:   s3\n        bucket: mybkt.litestream.io\n        # S3 path - \u5982\u679c\u53ea\u6709 path \u914d\u7f6e\uff0c\u5219\u4e3a file\n        path:   db\n        region: us-east1\n        access-key-id: AKIAxxxxxxxxxxxxxxxx\n        secret-access-key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/xxxxxxxxx\n        force-path-style:\n        skip-verify:\n\n        retention: 24h\n        retention-check-interval: 1h\n        snapshot-interval:\n        validation-interval: false\n        sync-interval: 1s\n")))}h.isMDXComponent=!0}}]);