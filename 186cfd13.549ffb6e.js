(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(7),l=(t(0),t(557)),o={id:"longhorn",title:"Longhorn"},i={unversionedId:"devops/kubernetes/storage/longhorn",id:"devops/kubernetes/storage/longhorn",isDocsHomePage:!1,title:"Longhorn",description:"Longhorn",source:"@site/contents/tricks/devops/kubernetes/storage/longhorn.md",slug:"/devops/kubernetes/storage/longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn",version:"current",sidebar:"docs",previous:{title:"Kubernates \u5b58\u50a8",permalink:"/notes/devops/kubernetes/storage/k8s-storage"},next:{title:"NFS",permalink:"/notes/devops/kubernetes/storage/k8s-nfs"}},b=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"FAQ",id:"faq",children:[{value:"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount",id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount",children:[]},{value:"failed to start expansion: controller data doesn&#39;t support on-line expansion, frontend: tgt-blockdev",id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"CRD",id:"crd",children:[]}],c={rightToc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"longhorn"},"Longhorn"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/longhorn/longhorn"}),"longhorn/longhorn")," - Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5757\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"\u589e\u91cf\u5feb\u7167"),Object(l.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5907\u4efd - NFS\u3001S3"),Object(l.b)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u5907\u4efd\u6062\u590d"),Object(l.b)("li",{parentName:"ul"},"\u5e73\u6ed1\u5347\u7ea7"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa UI"))),Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/deploy/install/#installation-requirements"}),"\u5b89\u88c5\u8981\u6c42"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker 1.13+"),Object(l.b)("li",{parentName:"ul"},"k8s 1.14+"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 3 \u526f\u672c - \u56e0\u6b64\u9700\u8981 3 \u8282\u70b9\uff0cnode level soft anti-affinity is disabled."),Object(l.b)("li",{parentName:"ul"},"open-iscsi \u5df2\u5b89\u88c5\uff0c\u6240\u6709\u8282\u70b9\u542f\u52a8 iscsid daemon"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 file extents \u7279\u6027\u7684\u6587\u4ef6\u7cfb\u7edf ext4 XFS"),Object(l.b)("li",{parentName:"ul"},"curl, findmnt, grep, awk, blkid, lsblk"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes-csi.github.io/docs/deploying.html#enabling-mount-propagation"}),"Mount propagation")),Object(l.b)("li",{parentName:"ul"},"k3s \u9700\u8981",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/advanced-resources/os-distro-specific/csi-on-k3s/"}),"\u989d\u5916\u914d\u7f6e")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/best-practices/#minimum-recommended-hardware"}),"\u6700\u4f4e\u786c\u4ef6\u8981\u6c42"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"3 \u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"4 vCPUs \u6bcf\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"4 GiB \u6bcf\u8282\u70b9"))),Object(l.b)("li",{parentName:"ul"},"\u7cfb\u7edf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ubuntu 18.04"),Object(l.b)("li",{parentName:"ul"},"CentOS 7/8"))))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 ReadWriteMany ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/73#issuecomment-392869189"}),"#73")),Object(l.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 UI \u4e0d\u884c ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/longhorn/longhorn/issues/1082"}),"#1082")),Object(l.b)("li",{parentName:"ul"},"\u6269\u5bb9\u53ea\u652f\u6301\u79bb\u7ebf"),Object(l.b)("li",{parentName:"ul"},"\u5fc5\u987b\u5b89\u88c5\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-system")," \u7a7a\u95f4"))),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5bf9\u5e94\u5173\u7cfb",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"PVC -> PV -> Volume -> Replica -> Node")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSfLO https://raw.githubusercontent.com/longhorn/longhorn/master/scripts/environment_check.sh\n\napk add jq curl findmnt grep awk coreutils util-linux\n# \u4f1a\u4f7f\u7528\u73b0\u5728\u7684\u73af\u5883\u8fdb\u884c\u68c0\u6d4b - kubectl apply\nbash environment_check.sh\n")),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/references/settings/"}),"https://longhorn.io/docs/1.0.0/references/settings/")),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5728 UI \u4e0a\u4fee\u6539\u540e\u5728\u521d\u6b21\u90e8\u7f72\u4e4b\u524d\u4fee\u6539")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# \u914d\u7f6e\u8bf4\u660e https://longhorn.io/docs/1.0.0/references/settings\n\n# \u5907\u4efd\n# ============\n# \u5907\u4efd\u4f4d\u7f6e - \u652f\u6301 nfs \u548c s3\n# \u4f8b\u5982 s3://backupbucket@us-east-1/backupstore\nbackup-target:\n# \u5bc6\u94a5\u4fe1\u606f\nbackup-target-credential-secret:\n# \u62c9\u4e0a\u6b21\u5907\u4efd\u4fe1\u606f\u7684\u95f4\u9694 - \u7528\u4e8e\u6062\u590d\nbackupstore-poll-interval: 300\n\n# \u8c03\u5ea6\n# ============\n# \u8bbe\u7f6e\u4e3a true \u5219\u5141\u8bb8\u5355\u4e2a\u8282\u70b9\u90e8\u7f72\u591a\u4e2a\u526f\u672c\nreplica-node-level-soft-anti-affinity: false\nreplica-soft-anti-affinity:\n# \u5b58\u50a8\u5206\u914d\u5141\u8bb8\u8d85\u8fc7\u7684\u6bd4\u4f8b\nstorage-over-provisioning-percentage: 200\n# \u78c1\u76d8\u6700\u5c0f\u53ef\u7528\u6bd4\u4f8b\nstorage-minimal-available-percentage: 25\n# \u4e0d\u4f1a\u8c03\u5ea6\u5230 Kubernetes cordoned nodes\ndisable-scheduling-on-cordoned-node: true\n# \u5141\u8bb8\u526f\u672c\u5728\u76f8\u540c\u533a\nreplica-zone-soft-anti-affinity: true\n\n# \u5371\u9669\u533a\u57df\n# ============\n# \u4e3a\u5f15\u64ce\u9884\u7559 CPU\n# 0.25 * 8 = 2 vCPUs - \u6bcf\u4e2a\u8282\u70b9\u81f3\u5c11 2 vCPU\nguaranteed-engine-cpu: 0.25\n\ncreate-default-disk-labeled-nodes:\ndefault-data-path:\n\nupgrade-checker:\ndefault-replica-count:\n\ndefault-longhorn-static-storage-class:\n\ntaint-toleration:\nregistry-secret:\nauto-salvage:\n\nvolume-attachment-recovery-policy:\nmkfs-ext4-parameters:\n")),Object(l.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/deploy/install/install-with-kubectl/"}),"kubectl \u5b89\u88c5")),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-system")," \u547d\u540d\u7a7a\u95f4"),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-service-account")," \u670d\u52a1\u8d26\u53f7"),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-role"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6388\u6743\u7ed9 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-service-account")))),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"lhe Engine"),Object(l.b)("li",{parentName:"ul"},"lhr Replica"),Object(l.b)("li",{parentName:"ul"},"lhs Setting"),Object(l.b)("li",{parentName:"ul"},"lhv Volume"),Object(l.b)("li",{parentName:"ul"},"lhei EngineImage"),Object(l.b)("li",{parentName:"ul"},"lhn Node"),Object(l.b)("li",{parentName:"ul"},"lhim - Instance Manager"))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-default-setting")),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa DaemonSet - ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-manager"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"longhorn-manager"),Object(l.b)("li",{parentName:"ul"},"-d"),Object(l.b)("li",{parentName:"ul"},"daemon"),Object(l.b)("li",{parentName:"ul"},"--engine-image"),Object(l.b)("li",{parentName:"ul"},"longhornio/longhorn-engine:v1.0.0"),Object(l.b)("li",{parentName:"ul"},"--instance-manager-image"),Object(l.b)("li",{parentName:"ul"},"longhornio/longhorn-instance-manager:v1_20200514"),Object(l.b)("li",{parentName:"ul"},"--manager-image"),Object(l.b)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),Object(l.b)("li",{parentName:"ul"},"--service-account"),Object(l.b)("li",{parentName:"ul"},"longhorn-service-account"))),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 9500 - manager"),Object(l.b)("li",{parentName:"ul"},"\u6302\u8f7d\u5377",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/host/dev")," - dev - ",Object(l.b)("inlineCode",{parentName:"li"},"/dev")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/host/proc")," - proc - ",Object(l.b)("inlineCode",{parentName:"li"},"/proc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/run"),"- varrun - ",Object(l.b)("inlineCode",{parentName:"li"},"/var/run")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")," - longhorn - ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn-setting/")," - longhorn-default-setting"))),Object(l.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DEFAULT_SETTING_PATH=/var/lib/longhorn-setting/default-setting.yaml"))))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-backend")," \u6307\u5411 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-manager"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 9500"))),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-ui"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-ui"),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 8000"),Object(l.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf LONGHORN_MANAGER_IP=http://longhorn-backend:9500"))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-frontend")," \u6307\u5411 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-ui"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3 80"))),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72 ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn-driver-deployer"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u521d\u59cb\u955c\u50cf longhornio/longhorn-manager",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b49\u5f85 http://longhorn-backend:9500/v1 \u542f\u52a8"))),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"longhorn-manager"),Object(l.b)("li",{parentName:"ul"},"-d"),Object(l.b)("li",{parentName:"ul"},"deploy-driver"),Object(l.b)("li",{parentName:"ul"},"--manager-image"),Object(l.b)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),Object(l.b)("li",{parentName:"ul"},"--manager-url"),Object(l.b)("li",{parentName:"ul"},"http://longhorn-backend:9500/v1"))))),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa StorageClass ",Object(l.b)("inlineCode",{parentName:"li"},"longhorn"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8fd9\u4e00\u6b65\u53c2\u6570\u53ef\u9009\u62e9\u90a3\u4e9b\u8282\u70b9\u5b58\u50a8")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u51c6\u5907\nsudo apk add open-iscsi\nsudo service iscsid start\nsudo apk add curl findmnt grep gawk blkid lsblk util-linux\n\n# HELM \u5b89\u88c5\n# ==========\ngit clone https://github.com/longhorn/longhorn && cd longhorn\nhelm install longhorn ./longhorn/chart/ --namespace longhorn-system --create-namespace\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\nkubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n\n# \u6216\u8005\u4e0b\u8f7d\u4e0b\u6765\u5b89\u88c5\ncurl -LOC- https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n# \u53ef\u4ee5\u4fee\u6539\u90e8\u5206\u53c2\u6570 - \u4f8b\u5982\u5b58\u50a8\u8282\u70b9\u9009\u62e9\u3001\u662f\u5426\u8fd0\u884c\u5355\u8282\u70b9\u6267\u884c\nkubectl applu -f longhorn.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl get pods \\\n--namespace longhorn-system \\\n--watch\n\n# \u5b89\u88c5\u5185\u5bb9\nkubectl -n longhorn-system get pod\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/yasker/longhorn/wiki/Troubleshooting-the-data-corruption-%5BDRAFT%5D"}),"Troubleshooting the data corruption"))),Object(l.b)("h3",{id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount"},"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fail to start longhorn with k3d ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/rancher/k3d/issues/206"}),"#206"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# \u8fd9\u4e2a\u4f4d\u7f6e\u662f\u53cc\u5411\u6302\u8f7d\nname: longhorn\nmountPath: /var/lib/longhorn/\nmountPropagation: Bidirectional\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5c06 root \u4fee\u6539\u4e3a share\nsudo mount --make-rshared /\n# sudo mount --make-rshared /var/lib/longhorn/\n")),Object(l.b)("h3",{id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev"},"failed to start expansion: controller data doesn't support on-line expansion, frontend: tgt-blockdev"),Object(l.b)("p",null,"\u53ef\u80fd\u662f\u7531\u4e8e\u6302\u8f7d\u7684\u65f6\u5019\u8fdb\u884c\u6269\u5bb9\u5bfc\u81f4\uff0c\u5982\u679c\u4e00\u76f4\u4e0d\u6062\u590d\uff0c\u5c1d\u8bd5 detache"),Object(l.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://longhorn.io/docs/1.0.0/references/examples/"}),"https://longhorn.io/docs/1.0.0/references/examples/"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-block-vol\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Block\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: block-volume-test\n  namespace: default\nspec:\n  containers:\n    - name: block-volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeDevices:\n        - devicePath: /dev/longhorn/testblk\n          name: block-vol\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: block-vol\n      persistentVolumeClaim:\n        claimName: longhorn-block-vol\n")),Object(l.b)("h2",{id:"crd"},"CRD"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# PATCH \u4fee\u6539 Tag\napiVersion: longhorn.io/v1beta1\nkind: Node\nmetadata:\n  name: my-node-1\n  namespace: longhorn-system\nspec:\n  tags:\n    - node.can.longhorn\n---\n# \u5b9a\u4e49\u5377\napiVersion: longhorn.io/v1beta1\nkind: Volume\nmetadata:\n  name: test\n  namespace: longhorn-system\n  labels:\n    longhornvolume: test\nspec:\n  Standby: false\n  baseImage: ''\n  fromBackup: ''\n  disableFrontend: false\n  diskSelector: []\n  # \u6700\u597d\u6307\u5b9a - \u5426\u5219\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230 engine\n  engineImage: 'longhornio/longhorn-engine:v1.0.0'\n  frontend: blockdev\n  nodeSelector:\n    - node.can.longhorn\n  numberOfReplicas: 3\n  recurringJobs: null\n  size: '20000000'\n  staleReplicaTimeout: 20\n")))}p.isMDXComponent=!0},557:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return t?r.a.createElement(d,i(i({ref:n},c),{},{components:t})):r.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);