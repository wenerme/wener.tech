"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89031],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(59496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69080:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return g}});var a=t(49613),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&p(e,t,n[t]);return e};const c={id:"longhorn",title:"Longhorn"},d="Longhorn",k={unversionedId:"devops/kubernetes/storage/longhorn",id:"devops/kubernetes/storage/longhorn",title:"Longhorn",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/devops/kubernetes/storage/longhorn.md",sourceDirName:"devops/kubernetes/storage",slug:"/devops/kubernetes/storage/longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/storage/longhorn.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1619945683,formattedLastUpdatedAt:"May 2, 2021",frontMatter:{id:"longhorn",title:"Longhorn"},sidebar:"docs",previous:{title:"Longhorn \u7248\u672c",permalink:"/notes/devops/kubernetes/storage/longhorn-version"},next:{title:"OpenEBS Version",permalink:"/notes/devops/kubernetes/storage/openebs-version"}},h={},g=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"volume \u914d\u7f6e",id:"volume-\u914d\u7f6e",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount",id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount",level:2},{value:"failed to start expansion: controller data doesn&#39;t support on-line expansion, frontend: tgt-blockdev",id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev",level:2},{value:"The volume <code>volume</code> share should be available before the mount",id:"the-volume-volume-share-should-be-available-before-the-mount",level:2},{value:"Volume <code>volume</code> hasn&#39;t been attached yet",id:"volume-volume-hasnt-been-attached-yet",level:2},{value:"snapshot vs backup",id:"snapshot-vs-backup",level:2},{value:"controller doesn&#39;t support on-line expansion, frontend: tgt-blockdev",id:"controller-doesnt-support-on-line-expansion-frontend-tgt-blockdev",level:2},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"CRD",id:"crd",level:2}],N={toc:g};function v(e){var n,t=e,{components:l}=t,p=((e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},N),p),r(n,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("h1",m({},{id:"longhorn"}),"Longhorn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u589e\u91cf\u5feb\u7167"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5907\u4efd - NFS\u3001S3"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u5907\u4efd\u6062\u590d"),(0,a.kt)("li",{parentName:"ul"},"\u5e73\u6ed1\u5347\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5efa UI"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/longhorn/longhorn"}),"longhorn/longhorn"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5757\u5b58\u50a8"))),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/deploy/install/#installation-requirements"}),"\u5b89\u88c5\u8981\u6c42"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker 1.13+"),(0,a.kt)("li",{parentName:"ul"},"k8s 1.14+"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 3 \u526f\u672c - \u56e0\u6b64\u9700\u8981 3 \u8282\u70b9\uff0cnode level soft anti-affinity is disabled."),(0,a.kt)("li",{parentName:"ul"},"open-iscsi \u5df2\u5b89\u88c5\uff0c\u6240\u6709\u8282\u70b9\u542f\u52a8 iscsid daemon"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 file extents \u7279\u6027\u7684\u6587\u4ef6\u7cfb\u7edf ext4 XFS"),(0,a.kt)("li",{parentName:"ul"},"curl, findmnt, grep, awk, blkid, lsblk"),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,a.kt)("a",m({parentName:"li"},{href:"https://kubernetes-csi.github.io/docs/deploying.html#enabling-mount-propagation"}),"Mount propagation")),(0,a.kt)("li",{parentName:"ul"},"k3s \u9700\u8981",(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/advanced-resources/os-distro-specific/csi-on-k3s/"}),"\u989d\u5916\u914d\u7f6e")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/best-practices/#minimum-recommended-hardware"}),"\u6700\u4f4e\u786c\u4ef6\u8981\u6c42"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3 \u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"4 vCPUs \u6bcf\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"4 GiB \u6bcf\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"SSD/NVME \u4e0d\u63a8\u8350\u673a\u68b0\u786c\u76d8 - IOPS \u4f4e"))))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"~\u4e0d\u652f\u6301 ReadWriteMany ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/73#issuecomment-392869189"}),"#73"),"~",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u65b0\u901a\u8fc7\u5185\u7f6e NFS \u652f\u6301 RWX"))),(0,a.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 UI \u4e0d\u884c ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/1082"}),"#1082")),(0,a.kt)("li",{parentName:"ul"},"\u6269\u5bb9\u53ea\u652f\u6301\u79bb\u7ebf"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u5b89\u88c5\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-system")," \u7a7a\u95f4"))),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5bf9\u5e94\u5173\u7cfb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PVC -> PV -> Volume -> Replica -> Node")))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"v1.1.0 \u5355\u673a\u90e8\u7f72\u6bcf\u6b21\u91cd\u542f\u540e\u9700\u8981 \u6253\u635e/salvage \u4e4b\u524d\u7684 replica",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f\u4e86 Automatic salvage \u53d1\u73b0\u8fd8\u662f\u9700\u8981\u624b\u52a8"),(0,a.kt)("li",{parentName:"ul"},"v1.1.1 \u4fee\u590d ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/2309"}),"#2309")))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"curl -sSfLO https://raw.githubusercontent.com/longhorn/longhorn/master/scripts/environment_check.sh\n\napk add jq curl findmnt grep awk coreutils util-linux\n# \u4f1a\u4f7f\u7528\u73b0\u5728\u7684\u73af\u5883\u8fdb\u884c\u68c0\u6d4b - kubectl apply\nbash environment_check.sh\n")),(0,a.kt)("h2",m({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.1.0/references/settings/"}),"https://longhorn.io/docs/1.1.0/references/settings/")),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u5728 UI \u4e0a\u4fee\u6539\u540e\u5728\u521d\u6b21\u90e8\u7f72\u4e4b\u524d\u4fee\u6539")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# \u914d\u7f6e\u8bf4\u660e https://longhorn.io/docs/1.1.0/references/settings\n\n# \u5907\u4efd\n# ============\n# \u5907\u4efd\u4f4d\u7f6e - \u652f\u6301 nfs \u548c s3\n# \u4f8b\u5982 s3://backupbucket@us-east-1/backupstore\nbackup-target:\n# \u5bc6\u94a5\u4fe1\u606f\nbackup-target-credential-secret:\n# \u62c9\u4e0a\u6b21\u5907\u4efd\u4fe1\u606f\u7684\u95f4\u9694 - \u7528\u4e8e\u6062\u590d\nbackupstore-poll-interval: 300\n\n# \u8c03\u5ea6\n# ============\n# \u8bbe\u7f6e\u4e3a true \u5219\u5141\u8bb8\u5355\u4e2a\u8282\u70b9\u90e8\u7f72\u591a\u4e2a\u526f\u672c\nreplica-node-level-soft-anti-affinity: false\nreplica-soft-anti-affinity:\n# \u5b58\u50a8\u5206\u914d\u5141\u8bb8\u8d85\u8fc7\u7684\u6bd4\u4f8b\nstorage-over-provisioning-percentage: 200\n# \u78c1\u76d8\u6700\u5c0f\u53ef\u7528\u6bd4\u4f8b\nstorage-minimal-available-percentage: 25\n# \u4e0d\u4f1a\u8c03\u5ea6\u5230 Kubernetes cordoned nodes\ndisable-scheduling-on-cordoned-node: true\n# \u5141\u8bb8\u526f\u672c\u5728\u76f8\u540c\u533a\nreplica-zone-soft-anti-affinity: true\n\n# \u5371\u9669\u533a\u57df\n# ============\n# \u4e3a\u5f15\u64ce\u9884\u7559 CPU\n# 0.25 * 8 = 2 vCPUs - \u6bcf\u4e2a\u8282\u70b9\u81f3\u5c11 2 vCPU\nguaranteed-engine-cpu: 0.25\n\ncreate-default-disk-labeled-nodes:\ndefault-data-path:\n\nupgrade-checker:\ndefault-replica-count:\n\ndefault-longhorn-static-storage-class:\n\ntaint-toleration:\nregistry-secret:\nauto-salvage:\n\nvolume-attachment-recovery-policy:\nmkfs-ext4-parameters:\n")),(0,a.kt)("h2",m({},{id:"volume-\u914d\u7f6e"}),"volume \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# Longhorn \u6e05\u7406 ERROR Replica \u65f6\u95f4\n# \u5355\u4f4d\u5206\u949f - \u9ed8\u8ba4 2880 / 48 \u5c0f\u65f6\nstaleReplicaTimeout: 2880\n")),(0,a.kt)("h2",m({},{id:"\u8d44\u6e90"}),"\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lhe Engine - Volume \u5bf9\u5e94\u7684 Engine"),(0,a.kt)("li",{parentName:"ul"},"lhr Replica - \u5377\u526f\u672c"),(0,a.kt)("li",{parentName:"ul"},"lhs Setting - \u542f\u52a8\u540e\u6bcf\u4e2a\u914d\u7f6e\u9879\u4f1a\u6620\u5c04\u4e3a\u4e00\u4e2a Setting \u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"lhv Volume - \u5b9a\u4e49\u5377"),(0,a.kt)("li",{parentName:"ul"},"lhei EngineImage - \u5f15\u64ce\u955c\u50cf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"image: 'longhornio/longhorn-engine:v1.1.0'")))),(0,a.kt)("li",{parentName:"ul"},"lhn Node - \u8282\u70b9\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"lhim - Instance Manager - \u5f15\u64ce\u5b9e\u4f8b\u548c\u8d44\u6e90\u5b9e\u4f8b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f15\u64ce\u5b9e\u4f8b - \u6bcf\u4e2a\u8282\u70b9\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u5b9e\u4f8b - \u6bcf\u4e2a Volume \u5728\u8282\u70b9\u4e0a\u7684\u6bcf\u4e2a Replica"))),(0,a.kt)("li",{parentName:"ul"},"ShareManager - \u901a\u8fc7 NFS \u652f\u6301 RWM")),(0,a.kt)("h2",m({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/deploy/install/install-with-kubectl/"}),"kubectl \u5b89\u88c5")),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-system")," \u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-service-account")," \u670d\u52a1\u8d26\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-role"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6388\u6743\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-service-account")))),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 - longhorn.io/v1beta1"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-default-setting")),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa DaemonSet - ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-manager"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager"),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53c2\u6570",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"longhorn-manager"),(0,a.kt)("li",{parentName:"ul"},"-d"),(0,a.kt)("li",{parentName:"ul"},"daemon"),(0,a.kt)("li",{parentName:"ul"},"--engine-image"),(0,a.kt)("li",{parentName:"ul"},"longhornio/longhorn-engine:v1.0.0"),(0,a.kt)("li",{parentName:"ul"},"--instance-manager-image"),(0,a.kt)("li",{parentName:"ul"},"longhornio/longhorn-instance-manager:v1_20200514"),(0,a.kt)("li",{parentName:"ul"},"--manager-image"),(0,a.kt)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),(0,a.kt)("li",{parentName:"ul"},"--service-account"),(0,a.kt)("li",{parentName:"ul"},"longhorn-service-account"))),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3 9500 - manager"),(0,a.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u5377",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/host/dev")," - dev - ",(0,a.kt)("inlineCode",{parentName:"li"},"/dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/host/proc")," - proc - ",(0,a.kt)("inlineCode",{parentName:"li"},"/proc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/run"),"- varrun - ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")," - longhorn - ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/longhorn-setting/")," - longhorn-default-setting"))),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DEFAULT_SETTING_PATH=/var/lib/longhorn-setting/default-setting.yaml"))))),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-backend")," \u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-manager"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3 9500"))),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-ui"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-ui"),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3 8000"),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf LONGHORN_MANAGER_IP=http://longhorn-backend:9500"))),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-frontend")," \u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-ui"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3 80"))),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn-driver-deployer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521d\u59cb\u955c\u50cf longhornio/longhorn-manager",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b49\u5f85 http://longhorn-backend:9500/v1 \u542f\u52a8"))),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"longhorn-manager"),(0,a.kt)("li",{parentName:"ul"},"-d"),(0,a.kt)("li",{parentName:"ul"},"deploy-driver"),(0,a.kt)("li",{parentName:"ul"},"--manager-image"),(0,a.kt)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),(0,a.kt)("li",{parentName:"ul"},"--manager-url"),(0,a.kt)("li",{parentName:"ul"},"http://longhorn-backend:9500/v1"))))),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa StorageClass ",(0,a.kt)("inlineCode",{parentName:"li"},"longhorn"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u4e00\u6b65\u53c2\u6570\u53ef\u9009\u62e9\u90a3\u4e9b\u8282\u70b9\u5b58\u50a8")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u51c6\u5907\nsudo apk add open-iscsi\nsudo service iscsid start\nsudo apk add curl findmnt grep gawk blkid lsblk util-linux\n\n# HELM \u5b89\u88c5\n# ==========\ngit clone https://github.com/longhorn/longhorn && cd longhorn\nhelm install longhorn ./longhorn/chart/ --namespace longhorn-system --create-namespace\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\nkubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n\n# \u6216\u8005\u4e0b\u8f7d\u4e0b\u6765\u5b89\u88c5\ncurl -LOC- https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n# \u53ef\u4ee5\u4fee\u6539\u90e8\u5206\u53c2\u6570 - \u4f8b\u5982\u5b58\u50a8\u8282\u70b9\u9009\u62e9\u3001\u662f\u5426\u8fd0\u884c\u5355\u8282\u70b9\u6267\u884c\nkubectl applu -f longhorn.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl get pods \\\n--namespace longhorn-system \\\n--watch\n\n# \u5b89\u88c5\u5185\u5bb9\nkubectl -n longhorn-system get pod\n")),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/yasker/longhorn/wiki/Troubleshooting-the-data-corruption-%5BDRAFT%5D"}),"Troubleshooting the data corruption"))),(0,a.kt)("h2",m({},{id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount"}),"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fail to start longhorn with k3d ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/rancher/k3d/issues/206"}),"#206"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# \u8fd9\u4e2a\u4f4d\u7f6e\u662f\u53cc\u5411\u6302\u8f7d\nname: longhorn\nmountPath: /var/lib/longhorn/\nmountPropagation: Bidirectional\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5c06 root \u4fee\u6539\u4e3a share\nsudo mount --make-rshared /\n# sudo mount --make-rshared /var/lib/longhorn/\n")),(0,a.kt)("h2",m({},{id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev"}),"failed to start expansion: controller data doesn't support on-line expansion, frontend: tgt-blockdev"),(0,a.kt)("p",null,"\u53ef\u80fd\u662f\u7531\u4e8e\u6302\u8f7d\u7684\u65f6\u5019\u8fdb\u884c\u6269\u5bb9\u5bfc\u81f4\uff0c\u5982\u679c\u4e00\u76f4\u4e0d\u6062\u590d\uff0c\u5c1d\u8bd5 detache"),(0,a.kt)("h2",m({},{id:"the-volume-volume-share-should-be-available-before-the-mount"}),"The volume ",(0,a.kt)("inlineCode",{parentName:"h2"},"volume")," share should be available before the mount"),(0,a.kt)("h2",m({},{id:"volume-volume-hasnt-been-attached-yet"}),"Volume ",(0,a.kt)("inlineCode",{parentName:"h2"},"volume")," hasn't been attached yet"),(0,a.kt)("h2",m({},{id:"snapshot-vs-backup"}),"snapshot vs backup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"snapshot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730 Revision"),(0,a.kt)("li",{parentName:"ul"},"Delta \u4fee\u6539"),(0,a.kt)("li",{parentName:"ul"},"\u8ddf\u968f Volume - \u5220\u9664 Volume \u5219\u5220\u9664\u4e86 Snapshot"))),(0,a.kt)("li",{parentName:"ul"},"backup",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8\u5728\u5916\u90e8 - S3/NFS"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53d7\u96c6\u7fa4\u72b6\u6001\u5f71\u54cd"),(0,a.kt)("li",{parentName:"ul"},"\u5907\u4efd\u57fa\u4e8e\u5feb\u7167 - backup \u4e4b\u524d\u4f1a\u521b\u5efa snapshot")))),(0,a.kt)("h2",m({},{id:"controller-doesnt-support-on-line-expansion-frontend-tgt-blockdev"}),"controller doesn't support on-line expansion, frontend: tgt-blockdev"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/1674"}),"https://github.com/longhorn/longhorn/issues/1674"))),(0,a.kt)("h2",m({},{id:"\u76d1\u63a7"}),"\u76d1\u63a7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://grafana.com/grafana/dashboards/13032"}),"https://grafana.com/grafana/dashboards/13032"))),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/references/examples/"}),"https://longhorn.io/docs/1.0.0/references/examples/"))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-block-vol\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Block\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: block-volume-test\n  namespace: default\nspec:\n  containers:\n    - name: block-volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeDevices:\n        - devicePath: /dev/longhorn/testblk\n          name: block-vol\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: block-vol\n      persistentVolumeClaim:\n        claimName: longhorn-block-vol\n")),(0,a.kt)("h2",m({},{id:"crd"}),"CRD"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# PATCH \u4fee\u6539 Tag\napiVersion: longhorn.io/v1beta1\nkind: Node\nmetadata:\n  name: my-node-1\n  namespace: longhorn-system\nspec:\n  tags:\n    - node.can.longhorn\n---\n# \u5b9a\u4e49\u5377\napiVersion: longhorn.io/v1beta1\nkind: Volume\nmetadata:\n  name: test\n  namespace: longhorn-system\n  labels:\n    longhornvolume: test\nspec:\n  Standby: false\n  baseImage: ''\n  fromBackup: ''\n  disableFrontend: false\n  diskSelector: []\n  # \u6700\u597d\u6307\u5b9a - \u5426\u5219\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230 engine\n  engineImage: 'longhornio/longhorn-engine:v1.0.0'\n  frontend: blockdev\n  nodeSelector:\n    - node.can.longhorn\n  numberOfReplicas: 3\n  recurringJobs: null\n  size: '20000000'\n  staleReplicaTimeout: 20\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"kind: Volume\napiVersion: longhorn.io/v1beta1\nmetadata:\n  name: test\n  namespace: longhorn-system\n  labels:\n    longhornvolume: test\nspec:\n  Standby: false\n  accessMode: rwx\n  baseImage: ''\n  dataLocality: best-effort\n  disableFrontend: false\n  diskSelector: []\n  engineImage: 'longhornio/longhorn-engine:v1.1.0'\n  fromBackup: ''\n  frontend: blockdev\n  lastAttachedBy: ''\n  nodeID: ''\n  nodeSelector: []\n  numberOfReplicas: 1\n  recurringJobs:\n    - cron: 0 0/6 * * ?\n      labels: null\n      name: c-75f2xa\n      retain: 5\n      task: backup\n    - cron: 0 1 * * *\n      labels: null\n      name: c-yywuyn\n      retain: 3\n      task: snapshot\n  revisionCounterDisabled: false\n  # 20G\n  size: '21474836480'\n  staleReplicaTimeout: 20\n# PV\n---\nkind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: test\nspec:\n  capacity:\n    storage: 20Gi\n  csi:\n    driver: driver.longhorn.io\n    volumeHandle: test\n    fsType: ext4\n    volumeAttributes:\n      diskSelector: ''\n      nodeSelector: ''\n      numberOfReplicas: '1'\n      staleReplicaTimeout: '20'\n  accessModes:\n    - ReadWriteMany\n  claimRef:\n    kind: PersistentVolumeClaim\n    namespace: default\n    name: test\n    apiVersion: v1\n    resourceVersion: '147682602'\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: longhorn-static\n  volumeMode: Filesystem\n\n# PVC\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: test\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 20Gi\n  volumeName: test\n  storageClassName: longhorn-static\n  volumeMode: Filesystem\n")))}v.isMDXComponent=!0}}]);