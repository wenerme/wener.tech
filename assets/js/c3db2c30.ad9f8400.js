"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[80637],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(a),d=r,k=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34101:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return b}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&c(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a};const k={title:"juicefs"},f="juicefs",N={unversionedId:"service/storage/juicefs",id:"service/storage/juicefs",title:"juicefs",description:"- juicedata/juicefs",source:"@site/../notes/service/storage/juicefs.md",sourceDirName:"service/storage",slug:"/service/storage/juicefs",permalink:"/notes/service/storage/juicefs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/juicefs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"juicefs"},sidebar:"docs",previous:{title:"Gluster",permalink:"/notes/service/storage/gluster"},next:{title:"MinIO",permalink:"/notes/service/storage/minio/"}},g={},b=[{value:"Metdata",id:"metdata",level:2},{value:"CSI",id:"csi",level:2},{value:"Docker",id:"docker",level:2},{value:"S3 Gateway",id:"s3-gateway",level:2},{value:"Webdav",id:"webdav",level:2},{value:"\u542f\u52a8\u6302\u8f7d",id:"\u542f\u52a8\u6302\u8f7d",level:2},{value:"setpriority: permission denied",id:"setpriority-permission-denied",level:2},{value:"Skipped objects bytes",id:"skipped-objects-bytes",level:2}],j={toc:b},h="wrapper";function y(e){var t=e,{components:a}=t,r=d(t,["components"]);return(0,n.kt)(h,m(p(p({},j),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"juicefs"}),"juicefs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/juicedata/juicefs"}),"juicedata/juicefs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Apache-2.0, Go"),(0,n.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e \u548c \u6570\u636e \u5206\u79bb"),(0,n.kt)("li",{parentName:"ul"},"distributed ",(0,n.kt)("strong",{parentName:"li"},"POSIX")," fs"),(0,n.kt)("li",{parentName:"ul"},"metadata - Redis, Postgres, MySQL, SQLite3, badger, TiKV"),(0,n.kt)("li",{parentName:"ul"},"data - s3, minio, webdav, redis, file, sqlite3, mysql, postgres, sftp",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://juicefs.com/docs/community/how_to_setup_object_storage/#supported-object-storage"}),"Supported Object Storage")))),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u652f\u6301 S3, HDFS, CSI"),(0,n.kt)("li",{parentName:"ul"},"64MiB Chunk -> Slice -> 4 MiB Block"),(0,n.kt)("li",{parentName:"ul"},"4MiB cache granularity"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u538b\u7f29 - lz4, zstd"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a0\u5bc6"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u56de\u6536\u7ad9"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u5e26\u5bbd\u8981\u6c42\u9ad8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e26\u5bbd\u4e0d\u8db3\uff0c\u53ef\u4ee5\u628a\u7f13\u5b58\u8bbe\u5927\uff0c\u518d\u5f00\u542f\u5f02\u6b65\u5199\u5165\u6a21\u5f0f --writeback"))))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://juicefs.com/zh-cn/blog/engineering/distributed-filesystem-comparison"}),"https://juicefs.com/zh-cn/blog/engineering/distributed-filesystem-comparison")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://juicefs.com/zh-cn/blog/solutions/clickhouse-disaggregated-storage-and-compute-practice"}),"https://juicefs.com/zh-cn/blog/solutions/clickhouse-disaggregated-storage-and-compute-practice")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://juicefs.com/zh-cn/blog/engineering/similarities-and-differences-between-seaweedfs-and-juicefs-structures"}),"vs SeaweedFS"))))),(0,n.kt)("admonition",p({},{title:"\u4e0d\u63d0\u4f9b\u5b9e\u9645\u5b58\u50a8",type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5c06\u5bf9\u8c61\u5b58\u50a8\u66b4\u9732\u4e3a FS \u5b58\u50a8\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 FS \u5143\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u8eab\u4e0d\u5b58\u50a8\u6570\u636e"))),(0,n.kt)("admonition",p({},{title:"\u9650\u5236",type:"info"}),(0,n.kt)("table",{parentName:"admonition"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"limit"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u76ee\u5f55\u6df1\u5ea6"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u4e0d\u9650")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u6587\u4ef6\u540d\u957f\u5ea6"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"255")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"soft link \u957f\u5ea6"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"4096 bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"hard link"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"2^31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u76ee\u5f55\u6587\u4ef6\u6570"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"2^31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"volume \u6587\u4ef6\u6570"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"unlimited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u5355\u6587\u4ef6\u5927\u5c0f"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"2^(26+31) = 2^57 = 128 TiB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\u603b\u6587\u4ef6\u5927\u5c0f"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"4EiB"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"brew install juicefs # macOS\n\n# \u624b\u52a8\u5b89\u88c5 Linux, Darwin\nVER=$(curl -s https://api.github.com/repos/juicedata/juicefs/releases/latest | grep 'tag_name' | cut -d '\"' -f 4 | tr -d 'v')\nOS=$(uname -s | tr '[:upper:]' '[:lower:]')\ncurl -LO \"https://github.com/juicedata/juicefs/releases/download/v${VER}/juicefs-${VER}-${OS}-amd64.tar.gz\"\ntar zxvf juicefs-*.tar.gz\n\n# META-URL MOUNTPOINT\n# --storage file --bucket $HOME/.juicefs/local \u4e3a\u9ed8\u8ba4\u503c\njuicefs format \\\n  --storage file --bucket $HOME/.juicefs/local \\\n  sqlite3://jfs.db jfs\n\nls $HOME/.juicefs/local/jfs/\nsqlite3 jfs.db \"select * from jfs_setting\"\n\n# macOS \u9700\u8981\u5b89\u88c5 macFUSE\nbrew install macfuse\n\n# 100GB \u7f13\u5b58\u5230 $HOME/.juicefs/cache\n# 1h \u5143\u6570\u636e\u5907\u4efd\n# http://localhost:9567/metrics\njuicefs mount \\\n  --cache-dir $HOME/.juicefs/cache --cache-size 102400 \\\n  --backup-meta 1h \\\n  -o allow_other -o allow_root \\\n  sqlite3://jfs.db $PWD/mnt\n\ncd mnt\njuicefs bench .\n\ntouch test.txt\ntouch $(cat /dev/urandom | tr -dc '0' | head -c 255) # \u6210\u529f\ntouch $(cat /dev/urandom | tr -dc '0' | head -c 256) # \u5931\u8d25\n\ncd -\n\njuicefs info mnt/test.txt            # \u6587\u4ef6\u4fe1\u606f\njuicefs info mnt                     # \u76ee\u5f55\u4fe1\u606f\njuicefs config sqlite3://jfs.db      # \u914d\u7f6e\u4fe1\u606f\njuicefs status sqlite3://jfs.db      # session \u72b6\u6001\njuicefs gc sqlite3://jfs.db          # \u6570\u636e\u626b\u63cf\njuicefs gc sqlite3://jfs.db --delete # \u6570\u636e\u6e05\u7406\njuicefs fsck sqlite3://jfs.db        # \u6570\u636e\u6821\u9a8c\njuicefs profile mnt                  # \u64cd\u4f5c\u76d1\u63a7\njuicefs stats mnt                    # io \u7edf\u8ba1\n\njuicefs gateway sqlite3://jfs.db 0.0.0.0:9090 # S3 \u7f51\u5173\n\n# \u5143\u6570\u636e\u5907\u4efd\n# --subdir \u53ea\u5907\u4efd\u6307\u5b9a\u76ee\u5f55\njuicefs dump sqlite3://jfs.db meta.dump.json\n# \u5143\u6570\u636e\u6062\u590d - \u786e\u4fdd\u6ca1\u6709\u5199\u5165\njuicefs load redis://127.0.0.1:6379/1 meta.dump.json\n\n# \u6570\u636e\u6e05\u7a7a\nUUID=$(juicefs status sqlite3://jfs.db | jq .Setting.UUID -r)\n# \u6240\u6709 session \u65ad\u5f00\u540e\u624d\u53ef\u4ee5\u64cd\u4f5c\njuicefs destroy sqlite3://jfs.db $UUID\ndu -sh $HOME/.juicefs/local/jfs/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"~/.juicefs/local/jfs/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"juicefs_uuid"),(0,n.kt)("li",{parentName:"ul"},"chunks/"),(0,n.kt)("li",{parentName:"ul"},"testing/"),(0,n.kt)("li",{parentName:"ul"},"meta/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dump-2023-03-16-174211.json.gz"))))),(0,n.kt)("li",{parentName:"ul"},"/mnt/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},".accesslog"),(0,n.kt)("li",{parentName:"ul"},".config"),(0,n.kt)("li",{parentName:"ul"},".stats - \u7edf\u8ba1"),(0,n.kt)("li",{parentName:"ul"},".trash/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"YYYY-mm-dd-hh/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{\u7236\u76ee\u5f55 inode}-{\u6587\u4ef6 inode}-{\u539f\u59cb\u6587\u4ef6\u540d}")," - \u67e5\u8be2 inode ",(0,n.kt)("inlineCode",{parentName:"li"},"juicefs info -i 3")))))),(0,n.kt)("li",{parentName:"ul"},"meta/ - \u5143\u6570\u636e\u5907\u4efd"))),(0,n.kt)("li",{parentName:"ul"},"backup-meta",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f \u8d85\u8fc7 100 \u4e07 \u5219\u4e0d\u5728\u6bcf 1h \u81ea\u52a8\u5907\u4efd\uff0c\u9700\u8981\u624b\u52a8\u914d\u7f6e\u66f4\u5927\u95f4\u9694"),(0,n.kt)("li",{parentName:"ul"},"Redis 100 \u4e07 1 \u5206\u949f 1GB \u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u6e05\u7406\u89c4\u5219",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4fdd\u7559 2 \u5929\u5b8c\u6574"),(0,n.kt)("li",{parentName:"ul"},"< 2 \u5468, \u6bcf\u5929\u4fdd\u7559 1 \u4efd"),(0,n.kt)("li",{parentName:"ul"},"< 2 \u6708, \u6bcf\u5468\u4fdd\u7559 1 \u4efd"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"2 \u6708, \u6bcf\u6708\u4fdd\u7559 1 \u4efd"))))))),(0,n.kt)("li",{parentName:"ul"},"file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"$HOME/.juicefs/local"),(0,n.kt)("li",{parentName:"ul"},"/var/jfs"),(0,n.kt)("li",{parentName:"ul"},"C:/jfs/local"))),(0,n.kt)("li",{parentName:"ul"},"fuse \u9009\u9879",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"writeback_cache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Linux 3.15+ ",(0,n.kt)("a",p({parentName:"li"},{href:"https://www.kernel.org/doc/Documentation/filesystems/fuse-io.txt"}),"https://www.kernel.org/doc/Documentation/filesystems/fuse-io.txt")),(0,n.kt)("li",{parentName:"ul"},"\u5229\u4e8e\u5c0f\u6570\u636e(e.g. 100b)\u9891\u7e41\u8bfb\u5199"))),(0,n.kt)("li",{parentName:"ul"},"user_id=100,group_id=100"),(0,n.kt)("li",{parentName:"ul"},"debug"),(0,n.kt)("li",{parentName:"ul"},"allow_other"),(0,n.kt)("li",{parentName:"ul"},"allow_root"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/pjd/pjdfstest"}),"pjd/pjdfstest"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"POSIX test suite"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/linux-test-project/ltp"}),"linux-test-project/ltp"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"env"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"--access-key value"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ACCESS_KEY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"--secret-key value"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"SECRET_KEY")))),(0,n.kt)("h2",p({},{id:"metdata"}),"Metdata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"300b \u4e00\u4e2a\u6587\u4ef6"))),(0,n.kt)("li",{parentName:"ul"},"META_PASSWORD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5bc6\u7801")))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"juicefs format \\\n  --storage sqlite3 \\\n  --bucket data.db \\\n  sqlite3://meta.db jfs\n\n# \u4e0d\u652f\u6301 fsck, gc\n# \u4e0d\u80fd\u591a\u8fdb\u7a0b\u6302\u8f7d\njuicefs format \\\n  --storage sqlite3 \\\n  --bucket data.db \\\n  badger://$PWD/meta jfs\n")),(0,n.kt)("h2",p({},{id:"csi"}),"CSI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u914d\u7f6e pathPattern=",(0,n.kt)("inlineCode",{parentName:"li"},'"${.PVC.namespace}-${.PVC.name}"'),"\uff0c\u751f\u6210\u7684 pv \u540d\u5b57\u66f4\u6613\u8bfb")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Secret\nmetadata:\n  name: juicefs-secret\ntype: Opaque\nstringData:\n  name: <JUICEFS_NAME>\n  metaurl: <META_URL>\n  storage: s3\n  bucket: https://<BUCKET>.s3.<REGION>.amazonaws.com\n  access-key: <ACCESS_KEY>\n  secret-key: <SECRET_KEY>\n  # \u8bbe\u7f6e Mount Pod \u65f6\u533a\uff0c\u9ed8\u8ba4\u4e3a UTC\u3002\n  # envs: "{TZ: Asia/Shanghai}"\n  # \u5982\u9700\u5728 Mount Pod \u4e2d\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e5f\u53ef\u4ee5\u5c06\u66f4\u591a juicefs format \u53c2\u6570\u586b\u5165 format-options\u3002\n  # format-options: trash-days=1,block-size=4096\n\n---\n\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: juicefs\nprovisioner: csi.juicefs.com\nparameters:\n  csi.storage.k8s.io/provisioner-secret-name: juicefs-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: default\n  csi.storage.k8s.io/node-publish-secret-name: juicefs-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: default\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/var/lib/juicefs/volume/PV_NAME"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://juicefs.com/docs/csi/introduction/"}),"https://juicefs.com/docs/csi/introduction/"))),(0,n.kt)("h2",p({},{id:"docker"}),"Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker plugin install juicedata/juicefs --alias juicefs\n\ndocker volume create -d juicefs \\\n  -o name=VOLUME_NAME \\\n  -o metaurl=META_URL \\\n  -o storage=STORAGE_TYPE \\\n  -o bucket=BUCKET_NAME \\\n  -o access-key=ACCESS_KEY \\\n  -o secret-key=SECRET_KEY \\\n  jfsvolume\n# \u5df2\u6709 volume\ndocker volume create -d juicefs \\\n  -o name=VOLUME_NAME \\\n  -o metaurl=META_URL \\\n  jfsvolume\n\ndocker run -it -v jfsvolume:/opt wener/base ls /opt\n\ndocker volume rm jfsvolume\n\n# disable,upgrade,enable,rm\ndocker plugin disable juicefs\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://hub.docker.com/r/juicedata/mount"}),"https://hub.docker.com/r/juicedata/mount"))),(0,n.kt)("h2",p({},{id:"s3-gateway"}),"S3 Gateway"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"export MINIO_ROOT_USER=admin\nexport MINIO_ROOT_PASSWORD=12345678\n\njuicefs gateway --cache-size 20480 redis://localhost:6379 localhost:9000\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/juicedata/minio/tree/gateway"}),"https://github.com/juicedata/minio/tree/gateway"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"minio fork \u5206\u652f\uff0c\u5b8c\u6574 minio \u529f\u80fd")))),(0,n.kt)("h2",p({},{id:"webdav"}),"Webdav"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"export WEBDAV_USER=user\nexport WEBDAV_PASSWORD=mypassword\n\njuicefs webdav sqlite3://jfs.db localhost:8080\n")),(0,n.kt)("h2",p({},{id:"\u542f\u52a8\u6302\u8f7d"}),"\u542f\u52a8\u6302\u8f7d"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"cp $(which juicefs) /sbin/mount.juicefs\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-fstab",metastring:'title="/etc/fstab"',title:'"/etc/fstab"'}),"redis://localhost:6379/1 /jfs juicefs  _netdev,max-uploads=50,writeback,cache-size=204800     0  0\n")),(0,n.kt)("h2",p({},{id:"setpriority-permission-denied"}),"setpriority: permission denied"),(0,n.kt)("p",null,"macOS non root"),(0,n.kt)("h2",p({},{id:"skipped-objects-bytes"}),"Skipped objects bytes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},".trash/")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7981\u7528\u56de\u6536\u7ad9\u7136\u540e gc \u6e05\u7406")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"juicefs status sqlite3://jfs.db | jq .Setting.TrashDays\n\njuicefs rmr .trash/\n")),(0,n.kt)("p",null,"bench 1G \u5de6\u53f3\u6570\u636e\uff0c\u5b8c\u6210\u540e\u88ab\u5220\u9664"))}y.isMDXComponent=!0}}]);